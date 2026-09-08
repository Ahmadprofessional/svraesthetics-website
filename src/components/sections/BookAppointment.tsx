"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteInfo } from "@/data/site";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const trafficResources = ["Google Ads", "Google Search", "AI Search"];

export function BookAppointment() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-[#e5f3ff] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <h2 className="text-center text-[28px] font-medium text-brand-heading">Book an appointment</h2>
          <p className="mt-2 text-center text-brand-body">Secure Your Spot at SVR Aesthetics</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-brand-navy" />
              <div>
                <p className="font-semibold text-brand-heading">Call Us:</p>
                <a href={siteInfo.phoneHref} className="text-brand-body hover:text-brand-navy">
                  {siteInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-brand-navy" />
              <div>
                <p className="font-semibold text-brand-heading">Email:</p>
                <a href={`mailto:${siteInfo.email}`} className="text-brand-body hover:text-brand-navy">
                  {siteInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-brand-navy" />
              <div>
                <p className="font-semibold text-brand-heading">Visit Us:</p>
                <p className="text-brand-body">{siteInfo.address}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              className="space-y-5 rounded-2xl bg-white p-6 shadow-sm sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="0301 2345678" required />
              </div>
              <div className="space-y-2">
                <Label>Traffic Resource *</Label>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {trafficResources.map((resource) => (
                    <label key={resource} className="flex items-center gap-2 text-sm text-brand-body">
                      <Checkbox name="traffic" value={resource} />
                      {resource}
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" name="message" rows={4} />
              </div>
              <Button type="submit" className="w-full bg-brand-navy hover:bg-brand-navy-dark sm:w-auto">
                Submit
              </Button>
              {submitted && (
                <p className="text-sm font-medium text-green-600">
                  Thanks — we&apos;ll be in touch shortly to confirm your appointment.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
