# Learnings — Main Page Redesign

## 2026-02-14 Initial Analysis
- Gnuboard CMS — legacy jQuery (1.12.4 + 3.7.1 loaded simultaneously)
- main.css is 2,311 lines — main page desktop styles at 157-380, sub-pages 382-1140, responsive 1141-2311
- 6 Swiper instances total (5 in main.js, 1 inline in index.html)
- Section numbering non-sequential: mc_1, mc_2, mc_9, mc_4, mc_5, mc_6, mc_7, mc_8 (no mc_3 in index.html)
- Inline styles and inline `<style>` blocks create specificity issues
- skin-news-style.css loads AFTER main.css — first 15 lines are override fixes

## 2026-02-14 Design System Creation
- Confirmed brand color #084784 as primary anchor.
- Established typography hierarchy: Playfair Display (Headings) + Pretendard (Body).
- Defined interaction model: Scroll-triggered fade/zoom (AOS) + Hover lift effects.
- Identified need for explicit dark mode tokens based on existing mc_9 section.
- Standardized spacing to 160px/80px for section padding to create "premium" whitespace.

## Foundation Layer Redesign (2025-02-14)
- **CSS Variables**: Successfully centralized all new design tokens in `common.css` while maintaining backward compatibility with `--main_color` and `--sub_font`.
- **Header Strategy**: Implemented a "state-based" header design. The default state is transparent for the hero video, and the `.fixed` class (toggled by existing JS) switches it to a solid white background with shadow.
- **Selector Preservation**: Strictly preserved all ID and class names (`#header`, `.gnb`, `#sidebar`, `.float_btns`) to ensure `main.js` continues to function without modification.
- **Replication Fixes**: Kept the critical CSS resets at the top of `main.css` to prevent layout issues from `skin-news-style.css`.
- **Performance**: Used `transform` and `opacity` for animations (sidebar slide, hover effects) to ensure smooth 60fps performance.
- **Sidebar Overlay**: Darkened the sidebar overlay to `rgba(0,0,0,0.6)` for better focus.
- **Footer**: Updated to the new `#0A1D31` dark navy background, creating a stronger visual anchor at the bottom of the page.

## Hero Section Redesign (Phase 2)
- **Refactored `index.html`**:
  - Removed messy inline styles from the hero section (lines 430-750).
  - Added `data-aos` attributes for scroll animations (`fade-up` for content, `fade-down` for scroll wheel).
  - Cleaned up `.search_box` HTML.
- **Redesigned `main.css`**:
  - Implemented "Cinematic Law Firm" aesthetic.
  - **Video**: Added a gradient overlay (`linear-gradient(to bottom, rgba(10, 29, 49, 0.4)...)`) to improve text contrast over the video.
  - **Typography**: Used `Playfair Display` (80px) for the main slogan (`.text`), centered with flexbox.
  - **Search Box**: Created a glassmorphism effect (backdrop-filter: blur) with a pill shape, replacing the old basic input.
  - **Buttons**: Styled `.consult-btn` as modern pill-shaped buttons with hover lift effects. Differentiated primary (Blue) and secondary (Glass) buttons.
  - **Scroll Indicator**: Added a bouncing mouse icon animation with a subtle gradient line.
  - **Responsiveness**: Added media queries to adjust font sizes and button layouts for mobile/tablet.
- **Preservation**: Kept `.mv_swiper` styles in `main.css` despite the element appearing absent from the hero HTML, to prevent potential JS errors or regression if it's dynamically loaded.
- **Issues/Notes**: `main.js` references `.mv_swiper`, but it wasn't visible in the static HTML of `.main_visual`. The styles were preserved to ensure safety. The typing animation (cursor blink) was kept as a CSS pseudo-element `::after`. The actual text typing likely happens in JS (which wasn't modified).

## News & Expert Sections Redesign (Phase 3 — 2026-02-14)
- **mc_1 (News) CSS redesign**: Replaced flat cards with rounded (`border-radius: var(--radius-md)`) cards featuring glassmorphism text overlays (`backdrop-filter: blur(8px)`). Text box slides up from `-100px` on hover with primary border accent. Image zoom (`scale(1.05)`) on hover adds depth. Card lifts with `translateY(-4px)` and shadow deepens on hover. Arrow buttons have directional micro-motion (`translateX(3px)`).
- **mc_1 Float**: Changed from opaque `#F1FAFF` to ultra-subtle `rgba(8,71,132,0.04)` watermark at 140px. Set `z-index: 0` and `pointer-events: none` so it doesn't interfere.
- **mc_2 (Expert) CSS redesign**: Added `::after` gradient overlay on `.img_box` for cinematic text contrast (`linear-gradient(to top, rgba(0,0,0,0.7)...)`). Images get `filter: brightness(0.88)` for dramatic feel with hover darkening to `0.82`. Team name uses `Playfair Display` at 42px with text-shadow. Slide has `border-radius` and `overflow: hidden` for polished look.
- **mc_2 Pagination**: Active bullet dot now uses `var(--color-primary)` (brand blue) instead of plain `#000`. Fixed the `display: block solid #000` CSS typo to `display: block`.
- **Swiper Selectors Preserved**: All class names untouched — `.mc_1_swiper`, `.mc_1_arrow`, `.mc_1_prev`, `.mc_1_next`, `.mc_1_pagination`, `.swiper-pagination-bullet-active`, `.mc_2_swiper`, `.mc_2_pagination`, `.swiper-pagination-bullet`, `.on`, `.item`, `.text_box`, `.img_box`, `.btn_box`, `.float`, `.left`, `.right`, `.container`, `.title`, `.top`, `.bottom`.
- **mc_2 bulletActiveClass**: Targets `.on` NOT `.swiper-pagination-bullet-active` — inline JS at line ~1836 defines `bulletActiveClass: 'on'`.
- **DOM Rebuild Guardrail**: mc_1 CSS works in both desktop (2 items/slide) and mobile (1 item/slide) states managed by `updateSwiperSlides()` in main.js.
- **Responsive**: 4 breakpoints updated (1500/1280/1024/768). Mobile mc_1 shows text_box always visible (bottom: 0), removes float text, disables hover transforms.
- **AOS**: Reduced durations from 1200ms to 1000ms for snappier entrance. Increased mc_1/mc_2 right/swiper delay to 250ms for better stagger.

## mc_9 + mc_4 Redesign (Phase 4 — 2026-02-14)
- **mc_9 (New Lawyers) CSS**: Replaced hardcoded values with design tokens throughout. Key enhancements: `filter: grayscale(0.3)` default with `grayscale(0)` on hover for dramatic desaturation reveal. Added `transform: scale(1.03)` on hover for photo zoom. Used `var(--transition-smooth)` (0.5s cubic-bezier) instead of `all .2s` for smoother card transitions. Gradient overlay now uses `var(--color-dark-navy)` token. Added `box-shadow: inset 0 -3px 0 var(--color-primary)` on item hover for a subtle bottom-border glow that indicates clickability. Watermark `::after` font-family changed from `"Playfair Display", serif` to `var(--sub_font)` for consistency. `::before` gradient overlay gets `var(--transition-smooth)` for smooth gradient color shift on hover.
- **mc_4 (Mission) CSS**: Added `background: var(--color-bg-light)` for section differentiation from surrounding sections. Video container gets `border-radius: var(--radius-md)`, `overflow: hidden`, and `box-shadow: var(--shadow-md)` for a polished frame. Article text gets `color: var(--color-text-body)` and `line-height: 1.6`. At 1024px responsive, border-radius reduced to `var(--radius-sm)` for tighter mobile fit.
- **Responsive mc_9**: At 1200px breakpoint, added `bottom: 20px` for text_box and `filter: grayscale(0.2)` (lighter desaturation than desktop). At 768px mobile, reset `filter: grayscale(0)` and `box-shadow: none` since mobile swiper doesn't need hover states.
- **AOS**: All mc_9 and mc_4 durations reduced from 1200ms to 1000ms. mc_4 video delay increased from 200ms to 250ms for better staggered reveal.
- **Guardrails preserved**: Line 5 (`aspect-ratio: 16/9`) and line 11 (`display: flex !important; flex-direction: row !important`) replication fixes untouched. All inline `style="display:inline-block; width:15px;"` spacers in HTML preserved. No class names changed. No href/src paths changed.

## mc_5 + mc_6 Redesign (Phase 5 — 2026-02-14)
- **mc_5 (Recruit) CSS**: Added `::before` pseudo-element overlay using `linear-gradient(to bottom, rgba(10,29,49,0.55), rgba(10,29,49,0.7))` for cinematic dark overlay on background image. Container gets `position: relative; z-index: 1` to sit above overlay. All text elements get `text-shadow` for readability. CTA button uses `var(--radius-pill)`, `var(--transition-smooth)`, hover lift (`translateY(-2px)`) with shadow deepening. Arrow micro-motion (`translateX(3px)`) matches mc_1 pattern. Border div gets `margin: 0 auto 24px` for bottom spacing before CTA. Padding uses `var(--section-padding-y)` token instead of hardcoded `180px`.
- **mc_6 (Consulting) CSS**: Replaced `background: #F6F9FC` with `var(--color-bg-light)`. Article text `color: #646464` replaced with `var(--color-text-body)`. Line-height standardized to `1.6`. Added `article p { margin-bottom: 20px }` and `article p:last-child { margin-bottom: 0 }` to replace removed inline styles. Added `article strong { font-weight: 700 }` for bold labels. Title subtitle gets `var(--sub_font)`. Container gets `gap: var(--gap-xl)`. Kakao image box gets `border-radius: var(--radius-md)` and hover `box-shadow: var(--shadow-sm)`. View all arrow gets `translateX(3px)` micro-motion on hover.
- **mc_7 shared selectors preserved**: All 3 breakpoints keep combined `.mc_6 ..., .mc_7 ...` selectors intact for links and arrow text sizing.
- **Inline style removal**: Removed 8 inline `style` attributes from mc_6 HTML (`article`, 3x `p`, 2x `strong`) — replaced with CSS rules at higher specificity.
- **AOS normalization**: All mc_5 (5 elements) and mc_6 (2 elements) durations changed 1200ms→1000ms.
- **Responsive adjustments**: 768px mc_5 padding reduced to 80px (from 100px), CTA button padding tightened (`12px 20px`), border gets explicit `margin-bottom: 16px`. 1024px mc_5 border gets `height: 50px`. 1280px mc_6 article gets `font-size: 15px`. 1024px mc_6 container uses `gap: var(--gap-lg)` and article `font-size: 15px`.

## mc_7 + mc_8 Redesign (Phase 6 — 2026-02-14)
- mc_7 accordion: replaced 5 hardcoded colors (#D6D6D6, #888, #E9EFF5, #646464) with design tokens (--color-border, --color-text-muted, --color-bg-light, --color-text-body)
- mc_7 accordion active state: added background-color: var(--color-bg-light) for visual feedback on open accordion
- mc_7 accordion title: added transition: var(--transition-base) for smooth border/bg changes
- mc_7 article text: added line-height: 1.6 for readability
- mc_7 lawyer name links: added hover color var(--color-primary) with transition
- mc_7 'View all' arrow: added hover translateX(3px) micro-motion (mc_6 shared selector only covered mc_6's img, mc_7 needed its own)
- mc_8 section: replaced bg #F9F9F9 with var(--color-bg-light), padding with var(--section-padding-y)
- mc_8 title h3: added font-family: var(--sub_font) for Playfair Display authority
- mc_8 navigation arrows: added directional micro-motion (next +3px, prev -3px translateX)
- mc_8 swiper cards: added border-radius var(--radius-md), overflow hidden, hover lift translateY(-4px) + shadow-md (matches mc_1 card pattern)
- mc_8 text_box padding increased 20px → 24px, colors tokenized
- mc_8 bottom 'View all' link: tokenized color, added hover arrow micro-motion
- 1024px/768px breakpoints: no hardcoded colors found — only font-size/spacing overrides, left untouched
- 1500px breakpoint gap: tokenized 50px → var(--gap-xl)
- AOS durations: all 4 instances (mc_7 left/right, mc_8 title/swiper) normalized 1200→1000ms
- Line count shifted +8 lines (15 original mc_7 → 19, 16 original mc_8 → 22) due to new hover/transition rules

## Responsive Tokenization & Touch Targets (Phase 7 — 2026-02-14)
- **1280px**: mc_2 pagination `gap: 40px` → `var(--gap-lg)`
- **1024px**: mc_2 slide `border-radius: 10px` → `var(--radius-md)` (token is 15px — maintains visual consistency)
- **1024px**: mc_2 pagination `gap: 20px; margin-top: 24px` → `var(--gap-md)` for both
- **1024px**: mc_5 padding `100px` → `80px` (all other sections at 1024px already use 80px)
- **1024px**: mc_7 container `gap: 35px` → `var(--gap-lg)` (40px, harmonizes)
- **1024px**: mc_8 btn_box `gap: 24px` → `var(--gap-md)`
- **1024px touch target fix**: mc_2 slide link `36px×36px` → `44px×44px` (meets WCAG 2.5.5)
- **768px**: mc_2 pagination `gap: 12px` → `var(--gap-sm)` (10px, vertical layout tolerates slight tightening)
- **768px**: footer util `gap: 24px` → `var(--gap-md)`, ul `gap/padding-right: 10px` → `var(--gap-sm)`, info `gap: 10px` → `var(--gap-sm)`
- **768px touch target fix**: `#cs_btn` added `min-height: 44px` (was ~34px effective height)
- **768px consistency**: Added `#main .mc_6 {padding: 80px 0px 0px;}` — was inheriting desktop 100px, now matches all other sections at 768px
- **Intentionally left alone**: `#0B223B` (mc_9 active slide bg) — close to but intentionally different from `var(--color-dark-navy)` (#0A1D31); mc_1 btn_box links 24px at 1024px (card-level clickable area covers touch target); mc_9 item `margin: 0 8px` (margin not gap, semantic difference)
- **Total edits**: 14 property changes across 3 breakpoints (1280px, 1024px, 768px), 1 new rule added (mc_6 768px padding)
## Final Integration Pass (Phase 8 — 2026-02-14)

### Fixes Applied (3 total)
1. **main.css L427**: Section title `h3` color `#121212` → `var(--color-text-heading)` — exact match to token value, zero visual change. This was the global rule inherited by all mc_X titles.
2. **main.css L428**: Section title `article` color `#646464` → `var(--color-text-body)` — matches pattern set in phases 4-6 per-section, now consistent at the global level too.
3. **index.html L908**: Hero `.wheel` AOS duration `1200` → `1000` — sole outlier missed in Phase 2 hero redesign. Now all 22 AOS-attributed elements use `1000ms`.

### Audit Results — No Action Needed
- **Replication fixes (L1-15)**: Intact. All 7 `#main` scoped resets + `overflow-x: hidden` present and correctly formed.
- **CSS specificity conflicts**: NONE found. Checked all 6 responsive breakpoints (1700/1500/1280/1200/1024/768). No conflicting values for same selector across desktop vs responsive.
- **Duplicate CSS rules**: Lines 1624-1633 (inside 1024px MQ) are exact duplicates of lines 115-124 (desktop scope). Both are float_form/float_btns CMS-managed rules — left untouched per instructions. Redundant but not conflicting.
- **Hardcoded colors in main page sections (mc_1 through mc_8)**: All scanned colors (`#000`, `#646464`, `#888`, `#D6D6D6`, `#D9D9D9`, `#F9F9F9`, `#E9EFF5`) verified. The remaining 78 grep matches are ALL in: (a) replication fixes L5 (`#000`), (b) header/sidebar elements (not main page sections), (c) sub-page selectors (.about_, .division_, .member_, .news_, .recruit_, .search_result, .term_, .sitemap), (d) float_form CMS-managed rules.
- **AOS consistency**: All 22 `data-aos-duration` attributes now `"1000"`. Stagger delays properly increment (100→200→250→300→400→500ms across sections).
- **Popup styling**: #aiPopup and #phonePopup use inline `<style>` in index.html with fixed overlay (`z-index:9999`), white popup-box with `border-radius:15px`, close button absolute-positioned. Self-contained and doesn't conflict with main.css redesign.
- **float_btns progression**: Desktop (L113): 60×60px, bottom:100px, right:40px → 1024px (L1622): 48×48px, bottom:30px, right:16px → 768px (L1901): mobile buttons shown (`display:flex`), desktop hidden. Coherent cascade, no conflicts.
- **common.css**: 133 lines, untouched.
- **main.css line count**: 2577 lines, unchanged after in-place value swaps.

### Color Tokenization Coverage Summary (Main Page Sections Only)
| Token | Replaces | Where Used |
|-------|----------|------------|
| `var(--color-text-heading)` | `#121212` | Section title h3 (global), mc_1, mc_8 |
| `var(--color-text-body)` | `#646464` | Section title article (global), mc_4, mc_6, mc_7, mc_8 |
| `var(--color-text-muted)` | `#888` | mc_7 acc box, mc_8 date |
| `var(--color-border)` | `#D6D6D6` | mc_7 accordion |
| `var(--color-bg-light)` | `#F9F9F9`/`#F6F9FC` | mc_4, mc_6, mc_7 active, mc_8 |
| `var(--color-dark-navy)` | `#0A1D31` | mc_9 gradient, footer |
| `var(--color-primary)` | `#084784` | mc_1, mc_2, mc_5, mc_7, mc_8 accents |
