"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { trackContactClick } from "@/lib/leads";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_ACTIONS = [
  { label: "Treatments", query: "What treatments do you offer?" },
  { label: "Prices", query: "What are your treatment prices?" },
  { label: "Book", query: "How can I book a consultation?" },
  { label: "Location", query: "Where is the clinic located?" },
  { label: "Hours", query: "What are your opening hours?" },
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const tooltipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  // Show tooltip after 2s on first visit
  useEffect(() => {
    tooltipTimeout.current = setTimeout(() => setShowTooltip(true), 2000);
    return () => {
      if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
    };
  }, []);

  // Hide tooltip when chat opens
  useEffect(() => {
    if (isOpen) setShowTooltip(false);
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "Sorry, something went wrong. Please call us at 077 92284575.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Couldn't connect right now. Please reach us at 077 92284575 or svraesthetics@gmail.com.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* ── FAB + Tooltip ── */}
      <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3">
        {/* Tooltip */}
        <div
          style={{
            position: "absolute",
            left: 68,
            bottom: 12,
            opacity: showTooltip && !isOpen ? 1 : 0,
            transform:
              showTooltip && !isOpen
                ? "translateX(0) scale(1)"
                : "translateX(-8px) scale(0.95)",
            transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
            pointerEvents: showTooltip && !isOpen ? "auto" : "none",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              background: "#fff",
              color: "#2b2530",
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "var(--font-body), system-ui, sans-serif",
              padding: "8px 14px",
              borderRadius: 10,
              boxShadow:
                "0 4px 24px rgba(43,37,48,0.12), 0 1px 4px rgba(43,37,48,0.08)",
              border: "1px solid #e9e0d4",
              position: "relative",
            }}
          >
            Need help? Chat with us!
            {/* Arrow */}
            <div
              style={{
                position: "absolute",
                left: -6,
                top: "50%",
                marginTop: -6,
                width: 0,
                height: 0,
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
                borderRight: "6px solid #fff",
                filter: "drop-shadow(-1px 0 1px rgba(43,37,48,0.06))",
              }}
            />
          </div>
        </div>

        {/* FAB Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close chat" : "Chat with SVR Aesthetics"}
          id="svr-chat-toggle"
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: isOpen
              ? "#2b2530"
              : "linear-gradient(145deg, #4b2a63 0%, #34193f 100%)",
            boxShadow: isOpen
              ? "0 2px 12px rgba(43,37,48,0.2)"
              : "0 4px 20px rgba(75,42,99,0.35), 0 1px 4px rgba(75,42,99,0.15)",
            transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
            transform: isOpen ? "scale(0.95)" : "scale(1)",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={() => {
            if (!isOpen) setShowTooltip(false);
          }}
        >
          {/* Shimmer effect */}
          {!isOpen && (
            <span
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 16,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />
          )}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
              transform: isOpen ? "rotate(90deg)" : "rotate(0)",
            }}
          >
            {isOpen ? (
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M12 2C6.477 2 2 5.924 2 10.667c0 2.667 1.333 5.067 3.467 6.666L4 22l4.8-2.4c1 .267 2.067.4 3.2.4 5.523 0 10-3.924 10-8.667C22 5.924 17.523 2 12 2z"
                fill="#fff"
              />
            )}
          </svg>
        </button>
      </div>

      {/* ── Chat Panel ── */}
      <div
        style={{
          position: "fixed",
          zIndex: 50,
          bottom: 76,
          left: 24,
          width: "min(370px, calc(100vw - 48px))",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transform: isOpen
            ? "translateY(0) scale(1)"
            : "translateY(12px) scale(0.97)",
          transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
          transformOrigin: "bottom left",
        }}
      >
        <div
          style={{
            height: "min(520px, calc(100vh - 120px))",
            display: "flex",
            flexDirection: "column",
            borderRadius: 20,
            overflow: "hidden",
            background: "#fbf8f4",
            border: "1px solid #e9e0d4",
            boxShadow:
              "0 24px 80px rgba(43,37,48,0.18), 0 8px 24px rgba(43,37,48,0.08), 0 0 0 1px rgba(43,37,48,0.04)",
          }}
        >
          {/* ── Header ── */}
          <div
            style={{
              background: "linear-gradient(145deg, #4b2a63, #34193f)",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative grain overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.477 2 2 5.924 2 10.667c0 2.667 1.333 5.067 3.467 6.666L4 22l4.8-2.4c1 .267 2.067.4 3.2.4 5.523 0 10-3.924 10-8.667C22 5.924 17.523 2 12 2z"
                  fill="rgba(255,255,255,0.9)"
                />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 1 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "0.01em",
                }}
              >
                SVR Aesthetics
              </p>
              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: 12,
                  color: "rgba(233,166,160,0.85)",
                  letterSpacing: "0.01em",
                }}
              >
                Usually replies in seconds
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                border: "none",
                background: "rgba(255,255,255,0.1)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
                position: "relative",
                zIndex: 1,
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ── Messages ── */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 16px 8px",
              scrollbarWidth: "thin",
              scrollbarColor: "#e9e0d4 transparent",
            }}
          >
            {/* Welcome */}
            {messages.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "24px 8px 12px",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "linear-gradient(145deg, #efe6f5, #f8e4e1)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  <span style={{ fontSize: 24 }}>👋</span>
                </div>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: 17,
                    fontWeight: 500,
                    color: "#2b2530",
                  }}
                >
                  Hi there!
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    color: "#6f6577",
                    lineHeight: 1.5,
                  }}
                >
                  Ask about treatments, prices, or book your free consultation.
                </p>

                {/* Quick action grid */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    justifyContent: "center",
                    marginTop: 16,
                  }}
                >
                  {QUICK_ACTIONS.map((a) => (
                    <button
                      key={a.label}
                      onClick={() => sendMessage(a.query)}
                      style={{
                        padding: "6px 14px",
                        borderRadius: 20,
                        border: "1px solid #e9e0d4",
                        background: "#fff",
                        color: "#4b2a63",
                        fontSize: 12,
                        fontWeight: 500,
                        fontFamily: "var(--font-body), system-ui, sans-serif",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        lineHeight: "18px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#efe6f5";
                        e.currentTarget.style.borderColor = "#4b2a63";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#fff";
                        e.currentTarget.style.borderColor = "#e9e0d4";
                      }}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message bubbles */}
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  marginBottom: 10,
                }}
              >
                {msg.role === "assistant" && (
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 8,
                      background: "linear-gradient(145deg, #4b2a63, #34193f)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginRight: 8,
                      marginTop: 2,
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C6.477 2 2 5.924 2 10.667c0 2.667 1.333 5.067 3.467 6.666L4 22l4.8-2.4c1 .267 2.067.4 3.2.4 5.523 0 10-3.924 10-8.667C22 5.924 17.523 2 12 2z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "78%",
                    padding: "10px 14px",
                    fontSize: 13,
                    lineHeight: 1.55,
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    ...(msg.role === "user"
                      ? {
                          background: "#4b2a63",
                          color: "#fff",
                          borderRadius: "16px 16px 4px 16px",
                        }
                      : {
                          background: "#fff",
                          color: "#2b2530",
                          borderRadius: "16px 16px 16px 4px",
                          border: "1px solid #e9e0d4",
                        }),
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 8,
                    background: "linear-gradient(145deg, #4b2a63, #34193f)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginRight: 8,
                    marginTop: 2,
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.477 2 2 5.924 2 10.667c0 2.667 1.333 5.067 3.467 6.666L4 22l4.8-2.4c1 .267 2.067.4 3.2.4 5.523 0 10-3.924 10-8.667C22 5.924 17.523 2 12 2z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #e9e0d4",
                    borderRadius: "16px 16px 16px 4px",
                    padding: "12px 16px",
                    display: "flex",
                    gap: 5,
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((j) => (
                    <span
                      key={j}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: j === 0 ? "#4b2a63" : j === 1 ? "#e9a6a0" : "#c9a96e",
                        animation: `svr-bounce 1s ease-in-out ${j * 0.15}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Quick chips (during conversation) ── */}
          {messages.length > 0 && messages.length < 8 && !isLoading && (
            <div
              style={{
                display: "flex",
                gap: 6,
                padding: "0 16px 8px",
                overflowX: "auto",
                scrollbarWidth: "none",
                flexShrink: 0,
              }}
            >
              {QUICK_ACTIONS.slice(0, 3).map((a) => (
                <button
                  key={a.label}
                  onClick={() => sendMessage(a.query)}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 16,
                    border: "1px solid #e9e0d4",
                    background: "#fff",
                    color: "#4b2a63",
                    fontSize: 11,
                    fontWeight: 500,
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#efe6f5";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                  }}
                >
                  {a.label}
                </button>
              ))}
            </div>
          )}

          {/* ── Contact bar ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              padding: "8px 16px",
              background: "#f4eee6",
              borderTop: "1px solid #e9e0d4",
              flexShrink: 0,
            }}
          >
            <a
              id="chat-widget-phone-link"
              href="tel:07792284575"
              onClick={() => trackContactClick("call")}
              className="gtm-phone-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 11,
                fontWeight: 600,
                color: "#4b2a63",
                textDecoration: "none",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              077 9228 4575
            </a>
            <span style={{ color: "#e9e0d4", fontSize: 14 }}>|</span>
            <a
              id="chat-widget-book-link"
              href="https://svraesthetics.co.uk/book-free-consultation/"
              target="_blank"
              rel="noopener noreferrer"
              className="gtm-book-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 11,
                fontWeight: 600,
                color: "#4b2a63",
                textDecoration: "none",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Consultation
            </a>
          </div>

          {/* ── Input ── */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 14px",
              borderTop: "1px solid #e9e0d4",
              background: "#fff",
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              id="svr-chat-input"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: 13,
                color: "#2b2530",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              id="svr-chat-send"
              aria-label="Send message"
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                border: "none",
                cursor: input.trim() && !isLoading ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  input.trim() && !isLoading
                    ? "linear-gradient(145deg, #4b2a63, #34193f)"
                    : "#e9e0d4",
                transition: "all 0.2s",
                flexShrink: 0,
                opacity: input.trim() && !isLoading ? 1 : 0.5,
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Bounce keyframe */}
      <style>{`
        @keyframes svr-bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
