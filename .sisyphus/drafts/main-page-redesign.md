# Draft: Main Page Full Redesign — 법무법인(유한) 동인

## Requirements (confirmed)
- **Scope**: Full redesign of ALL 9 sections on index.html
- **Tone & Manner**: Must maintain existing professional, authoritative law firm aesthetic
- **Brand Color**: `--main_color: #084784` (dark navy) — keep as-is
- **Fonts**: Playfair Display + Pretendard Variable — keep as-is
- **User's exact words**: "같은 톤앤매너를 유지하면서 디자인을 바꾸고 싶어", "전체 다 리디자인"

## Technical Context (confirmed via research)
- **Tech Stack**: Static HTML/CSS/jQuery (Gnuboard CMS-based)
- **jQuery**: Two versions loaded (1.12.4 + 3.7.1)
- **Swiper 11**: Used for 4 carousels (hero, news, expert, insight)
- **AOS 2.3.1**: Scroll animations
- **No build system**: Direct CSS/HTML editing
- **Total index.html**: 2,240 lines
- **Total main.css**: 753+ lines (includes main page + all sub-pages)
- **Backup exists**: index.html.bak

## Current Page Sections (9 total)
| # | Section | Class | Content |
|---|---------|-------|---------|
| 1 | Hero | `main_visual` | Fullscreen video bg + typing animation + search + AI/phone CTA |
| 2 | News | `mc_1` | "최신뉴스/소식" — Swiper with news cards |
| 3 | Expert | `mc_2` | "엑스퍼트 그룹" — Team showcase slider |
| 4 | New Lawyers | `mc_9` | "신규 영입" — 10 lawyer profiles (grid + mobile swiper) |
| 5 | Mission | `mc_4` | "Our Mission" — Text + video |
| 6 | Recruit | `mc_5` | "Who's Next?" — Recruitment CTA |
| 7 | Consulting | `mc_6` | "상담센터 안내" — Contact info |
| 8 | Q&A | `mc_7` | "변호사의 눈" — Accordion Q&A |
| 9 | Insight | `mc_8` | "인사이트" — YouTube slider |

## Key Functional Elements (MUST preserve)
- Hero typing animation
- AI chatbot popup (iframe to Figma prototype)
- Phone consultation popup with form validation + reCAPTCHA
- Floating contact buttons (bottom-right)
- Bottom consultation bar (desktop)
- Language switcher (KR/EN)
- Google Analytics (G-DKS1772NBL)
- All Swiper carousel interactions
- AOS scroll animations
- Newsletter floating button

## Swiper Configurations (from main.js)
- **mv_swiper**: Hero — fade effect, 4s autoplay, nav arrows
- **mc_1_swiper**: News — responsive (2 slides desktop, auto mobile), loop, pagination
- **mc_3_swiper**: Expert — 1 slide, loop, nav arrows
- **mc_9_swiper**: New Lawyers — auto width, centered, loop (mobile only)
- **mc_8_swiper**: Insight — auto width, 16px gap, nav arrows

## Decisions (CONFIRMED)
1. **Design direction**: Dynamic/Interactive — scroll animations, parallax, dramatic transitions
2. **Change scope**: FULL — HTML + CSS + JS + AOS attributes (user corrected: "css만 바꾸는게 아니라 필요한건 다 바꾸라고")
3. **Animation approach**: CSS animations/transitions + existing AOS library (modify data-aos attributes)
4. **Header/Footer**: INCLUDED in redesign scope
5. **Reference sites**: None — user trusts our judgment based on law firm best practices
6. **Mobile priority**: Desktop-first (matching current site approach)
7. **Test strategy**: Playwright visual verification

## Scope Boundaries (FINAL — UPDATED)
- INCLUDE: Header + Footer + all 9 main page sections visual redesign
- INCLUDE: HTML structural changes where needed for better design
- INCLUDE: CSS complete overhaul for main page sections
- INCLUDE: JS modifications for interactions/animations (within existing libraries)
- INCLUDE: AOS data attribute additions/modifications in HTML
- INCLUDE: Responsive adjustments for all 7 breakpoints
- EXCLUDE: Sub-pages (about, division, member, etc.)
- EXCLUDE: New JS libraries (no GSAP, etc.)
- EXCLUDE: Backend/CMS changes
- PRESERVE: All existing functional elements (typing animation, popups, forms, etc.)
- PRESERVE: All JS-toggled class names (fixed, active, on, paused, hidden, no_scroll)
- PRESERVE: All 6 Swiper instances and their JS configurations
- PRESERVE: jQuery selectors/DOM queries in common.js and main.js
