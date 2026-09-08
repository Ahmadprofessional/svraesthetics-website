# SVR Aesthetics — Page Topology

Source: https://svraesthetics.co.uk/ (Divi/WordPress). Extracted 2026-09-08.

| # | Section | Height (1440px) | Notes |
|---|---------|------------------|-------|
| 0 | Top bar | 55px | Navy `#194f90` bg. Phone, social icons, secondary link row (Customers Gallery / FAQs / Reviews / Pricing Plan / Privacy Policy). |
| 1 | Main nav | 109px | Light grey `#f4f2f2` bg. Logo, Home/About Us/Training/Contact Us/Blogs, "BOOK NOW" navy pill button. |
| 2 | Category submenu | 55px | Navy bg. 5 hover-dropdown categories (Anti Wrinkle, Dermal Fillers, Skin Tag Removal, Facials, Other Treatment), each with a flyout of sub-treatments. |
| 3 | Hero | 669px | **Entire hero is one clickable `<img>`** (`Banner-b-1.jpg`) linking to `/book-free-consultation/` — heading, subheading, 25%-off badge and "Book an Appointment" button are all baked into the image, not live DOM text. |
| 4 | Services grid | 1521px | "Expert Aesthetics Treatments in Milton Keynes" + 6 cards (2 rows × 3). Each card: photo top, navy heading ribbon overlapping the photo (`margin-top: -44px`), white body copy, "FIND OUT MORE" text link. "View More" pill button below. |
| 5 | Promo banner | 373px | Full-bleed background photo (`portrait-young-woman-practicing-facial-yoga-youth-scaled.jpg`) + dark overlay. "25% off On First Treatment" (Allerta Stencil font, 48px) + outlined "Free Consultation" button. |
| 6 | About / Why Choose Us | 539px | 2-col: image left, "ABOUT US" eyebrow + "why choose us ?" heading + 7-item checklist + "Book Now" button right. |
| 7 | Treatments intro | 550px | 2-col reversed on desktop: copy + "Schedule Now" button left, image right. Section bg is a near-white grey wash `rgba(142,142,142,.07)`. |
| 8 | Before & After | 628px | Heading + 4-image grid + "View More Results" outlined button. |
| 9 | Book an appointment | 780px | Light blue bg `#e5f3ff`. Contact info (phone/email/address) left, WPForms-style form right (Name, Email, Phone, Traffic Resource checkboxes, Message, Submit). |
| 10 | FAQ | 975px | Accordion, 8 items, first one open by default. Below it: "Related Treatments" — 8 pipe-separated text links. |
| 12 | Related Treatments | (merged into FAQ section area in build) | See above. |
| 13 | Testimonials CTA | 282px | Dark background photo + overlay. "TESTIMONIALS" eyebrow + "View Our Google Reviews" + purple "Check Now" button linking to Google review URL. |
| 14 | Footer | 454px | White bg. 4 columns: logo+blurb+social, Quick Links, Policies, Working Hours. Copyright bar. |

## Global overlays (not part of section flow)
- **WhatsApp floating button** — fixed bottom-right, green circle, opens `wa.me` chat.
- **Promo popup modal** — appears ~1s after load (once per session), "Get Up To 25% Off First Treatment" with a mini lead-capture form, closable via `X`.
- **Cookie consent banner** — bottom bar, Accept/Reject.

## Interaction model summary
- Category submenu: **hover-driven** dropdown (desktop).
- FAQ: **click-driven** accordion, single-open-at-a-time in our rebuild (site behavior showed one open on load).
- Promo modal: **time-driven** (delayed appearance) + click-to-dismiss.
- Card/section entrance: **scroll-driven** fade-up (Divi's built-in `motion-effects.js`), approximated in the clone via `IntersectionObserver` (`src/components/Reveal.tsx`).
- Hero: **static image**, no JS behavior beyond the outer link.

## Responsive
Not deep-audited pixel-by-pixel (browser pane rendering was unavailable mid-session — see Behaviors doc). Layout uses Tailwind's standard `sm/lg` breakpoints: 2–3 column grids collapse to 1 column, the category submenu and desktop nav links hide under `lg`, before/after grid goes 4→2 columns.
