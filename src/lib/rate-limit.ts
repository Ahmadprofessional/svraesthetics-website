interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

/**
 * Clean in-memory sliding window rate limiter for API routes
 * @param key unique identifier (e.g. client IP + route name)
 * @param limit maximum allowed requests within window
 * @param windowMs window duration in milliseconds
 * @returns { success: boolean, remaining: number, resetTime: number }
 */
export function checkRateLimit(
  key: string,
  limit: number = 10,
  windowMs: number = 60 * 1000
): { success: boolean; remaining: number; resetTime: number } {
  const now = Date.now();

  // Cleanup old keys periodically
  if (rateLimitMap.size > 5000) {
    for (const [k, record] of rateLimitMap.entries()) {
      if (now > record.resetTime) {
        rateLimitMap.delete(k);
      }
    }
  }

  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true, remaining: limit - 1, resetTime: now + windowMs };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, resetTime: record.resetTime };
  }

  record.count += 1;
  return { success: true, remaining: limit - record.count, resetTime: record.resetTime };
}
