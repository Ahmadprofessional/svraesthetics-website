# SVR Aesthetics — Behaviors

## Global
- Framework: WordPress + Divi theme (v4.27.8), jQuery-based.
- Scripts observed: `motion-effects.js` (Divi entrance/scroll animations), `sticky-elements.js` (Divi sticky module support — no sticky module was found actually applied to the main header on this page), `magnific_popup.min.js` (lightbox, likely used on customer gallery / before-after pages, not on the homepage grid itself), `wp-whatsapp` plugin (floating WhatsApp chat button + popup), a GDPR cookie-consent banner plugin, and a lead-capture popup plugin (shown ~1s after load).
- No Lenis/Locomotive smooth-scroll library detected — native scrolling.

## Header / navigation
- **Not sticky.** The header scrolls away with the page; there is no scroll-triggered shrink/shadow behavior on this template.
- Category submenu (Anti Wrinkle / Dermal Fillers / etc.): **hover-driven** flyout menus on desktop, revealing a list of sub-treatment links. Mobile uses a slide-out menu (`mob-menu-slideout-over` body class) — not rebuilt pixel-for-pixel in this clone; the clone hides the desktop mega-menu row below `lg` and relies on the standard nav links.

## Hero
- The entire visual (headline, subhead, badge, CTA button) is a single flattened `<img>` wrapped in an `<a>` to `/book-free-consultation/`. No interactivity beyond the link — confirmed by inspecting `innerHTML`, which contained only the `<img>` element.

## Service cards / section entrances
- Divi's default motion-effects apply a fade-up-on-scroll to most modules (headings, images, buttons): opacity 0→1 and a small upward translate, triggered when the element enters the viewport, roughly 0.8s ease-out. Exact per-element timing/easing values were not individually diffed (would require per-element scroll-position CSS diffing across dozens of modules); the clone applies one consistent `Reveal` (IntersectionObserver + CSS transition, 0.8s ease-out, translateY 24px→0) to headings, cards, and section copy blocks, staggered slightly per grid item. This is a faithful approximation of the *type* of motion, not a byte-exact timing capture.

## FAQ accordion
- **Click-driven**, one item open at a time. First item ("How do I book a consultation?") is open by default on page load. Clicking a closed question opens it; the site's markup suggests only one panel is meant to be open (duplicated/hidden toggle markup in the DOM is Divi's structural quirk, not multiple simultaneously-open panels).

## Promo popup modal
- **Time-driven**: appears roughly 1 second after page load, once per session (uses a cookie/localStorage-style suppression in the original; the clone uses `sessionStorage`). Dismissed via the `X` button or by submitting the mini form.

## Cookie banner
- Bottom-fixed bar with Accept/Reject; **not rebuilt** in the clone (out of scope — no real cookie/analytics stack in the clone to consent to).

## Known gaps in behavior fidelity
- Browser-pane screenshots became unavailable partway through the session (pane was backgrounded/hidden), which blocked pixel-level before/after CSS diffing for scroll-triggered states and hover-state screenshots. All structural, textual, and color/typography extraction was still completed via `getComputedStyle()` and DOM inspection (not estimated), but exact animation easing curves and the mobile slide-out menu's precise visual design were not captured and are approximated.
