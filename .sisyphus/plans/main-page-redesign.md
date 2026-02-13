# Work Plan: Main Page Full Redesign — 법무법인(유한) 동인

## Meta
- **Created**: 2026-02-14
- **Goal**: Full redesign of index.html — dynamic/interactive direction, maintain professional law firm tone
- **Design Direction**: Dynamic/Interactive — scroll animations, parallax, dramatic transitions
- **Brand**: `--main_color: #084784`, Playfair Display + Pretendard Variable
- **Scope**: HTML + CSS + JS + AOS — everything needed for all 9 sections + header + footer
- **Key Constraint**: All changes in same files (index.html, main.css, main.js) — SEQUENTIAL execution required

## Critical Guardrails (from Metis Analysis)
1. **Preserve all JS-toggled class names**: `fixed`, `active`, `on`, `paused`, `hidden`, `no_scroll`
2. **Preserve all 6 Swiper instances** and their DOM structure (Swiper container > wrapper > slide pattern)
3. **mc_1_swiper DOM rebuild at 1024px**: JS destroys/recreates slide structure — CSS must work in BOTH states
4. **mc_9 dual layout**: `.list.pc` (grid) + `.list.mo` (swiper) — both in DOM, toggled via CSS display
5. **mc_2_swiper inline in index.html** (~line 1913) with custom `renderBullet` — NOT in main.js
6. **Inline styles on elements** (mc_6 hardcoded font styles) and **inline `<style>` blocks** (hero `.text.pc`) — must be addressed
7. **skin-news-style.css** loads AFTER main.css — first 15 lines of main.css are override fixes
8. **jQuery selectors in main.js/common.js**: Any renamed classes/IDs will break JS
9. **7 CSS breakpoints**: 768px(×2), 1024px, 1200px, 1280px, 1500px, 1700px
10. **JS breakpoints**: 768px (typing), 1024px (mc_1 rebuild), 1025px (slidesPerView), 1200px (float_form)

## Tasks

### Phase 0: Preparation
- [x] **Task 0.1**: Create design system document — Define color palette (primary/secondary/accent/bg), typography scale (6 levels), spacing system (section/element), animation tokens (duration/easing/AOS presets), shadow system, border-radius. Output: `.sisyphus/drafts/design-system.md`. (PARALLEL: independent)

- [x] **Task 0.2**: Create full backups of index.html, main.css, main.js before any modifications. (PARALLEL: independent)

### Phase 1: Foundation — Global Styles + Header + Footer
- [x] **Task 1.1**: Redesign common/global CSS variables and base styles in `common.css` and top of `main.css` (lines 1-156). Update CSS custom properties, add new design tokens. Redesign header (#header) — make it sleek, transparent-to-solid on scroll (preserve `fixed` class toggle). Redesign footer (#footer) — modern, clean layout. Update AOS global settings if needed. 
  - **Files**: common.css, main.css (lines 1-156, footer section), index.html (header + footer HTML)
  - **Guardrails**: Preserve #header.fixed, .gnb/.sub_gnb .active, #sidebar.on, #langBtn.on, #cs_btn.on class behaviors

### Phase 2: Hero Section
- [x] **Task 2.1**: Redesign hero section (`.main_visual`, lines 157-210 in main.css). Create dramatic, full-viewport hero with dynamic transitions. Enhance typing animation visual treatment. Redesign search box and CTA buttons (AI chatbot, phone consult). Address inline `<style>` blocks in index.html that override hero styles.
  - **Files**: index.html (hero HTML ~lines 320-520), main.css (lines 157-210 + hero responsive rules)
  - **Guardrails**: Preserve mv_swiper DOM (`.mv_swiper > .swiper-wrapper > .swiper-slide`), typing animation JS selectors, #aiPopup/#phonePopup triggers, `.mv_progress_bar.paused` class

### Phase 3: News + Expert Sections
- [x] **Task 3.1**: Redesign News section (`.mc_1`) — modern card design with hover effects, better typography hierarchy, dynamic AOS entries. Redesign Expert section (`.mc_2`) — impactful team showcase with animated transitions between teams.
  - **Files**: index.html (mc_1 ~lines 520-680, mc_2 ~lines 680-950), main.css (mc_1/mc_2 desktop + responsive rules)
  - **Guardrails**: mc_1_swiper DOM rebuild at 1024px (CSS must work in both states), mc_2_swiper is INLINE in index.html (~line 1913) with custom renderBullet, mc_2 pagination uses `.on` class not `.swiper-pagination-bullet-active`

### Phase 4: New Lawyers + Mission Sections
- [x] **Task 4.1**: Redesign New Lawyers section (`.mc_9`) — elegant profile cards with hover reveals, smooth transitions. Redesign Mission section (`.mc_4`) — cinematic text + video layout with parallax feel.
  - **Files**: index.html (mc_9 ~lines 950-1150, mc_4 ~lines 1150-1270), main.css (mc_9/mc_4 desktop + responsive rules)
  - **Guardrails**: mc_9 has DUAL layout (`.list.pc` grid + `.list.mo` swiper) — both in DOM, CSS display toggles. mc_9_swiper config in main.js. Preserve all lawyer profile links and data.

### Phase 5: Recruit + Consulting Sections
- [x] **Task 5.1**: Redesign Recruit section (`.mc_5`) — bold, engaging recruitment CTA with dynamic background treatment. Redesign Consulting section (`.mc_6`) — clean, trustworthy contact layout with clear hierarchy.
  - **Files**: index.html (mc_5 ~lines 1270-1350, mc_6 ~lines 1350-1500), main.css (mc_5/mc_6 desktop + responsive rules)
  - **Guardrails**: mc_6 has hardcoded inline styles (`style="line-height: 1.6; font-family: Arial..."`) that MUST be removed/overridden in HTML. Preserve Kakao channel link and phone numbers.

### Phase 6: Q&A + Insight Sections
- [x] **Task 6.1**: Redesign Q&A section (`.mc_7`) — elegant accordion with smooth expand/collapse animations, refined typography. Redesign Insight section (`.mc_8`) — modern video card layout with hover effects.
  - **Files**: index.html (mc_7 ~lines 1500-1680, mc_8 ~lines 1680-1900), main.css (mc_7/mc_8 desktop + responsive rules)
  - **Guardrails**: mc_7 accordion uses `.acc_row.active` class (toggled by JS). mc_8_swiper in main.js. YouTube thumbnail links must be preserved.

### Phase 7: Responsive Overhaul
- [x] **Task 7.1**: Comprehensive responsive CSS update for ALL redesigned sections across all 7 breakpoints (1700px, 1500px, 1280px, 1200px, 1024px, 768px×2). Ensure mobile navigation, touch targets, and readability. Test all Swiper responsive behaviors.
  - **Files**: main.css (lines 1141-2311 — all media query blocks), index.html (mobile-specific AOS adjustments)
  - **Guardrails**: JS breakpoints at 768px/1024px/1025px/1200px must align with CSS. mc_1_swiper DOM rebuild at 1024px. mc_9 .list.pc/.list.mo display toggle. float_form show/hide at 1200px.

### Phase 8: Integration + Polish
- [x] **Task 8.1**: Final integration pass — resolve any CSS specificity conflicts, clean up unused styles, ensure skin-news-style.css overrides still work (first 15 lines of main.css), verify AOS animations fire correctly, check all popup/modal styling, verify floating buttons and bottom consultation bar.
  - **Files**: All modified files (index.html, main.css, common.css, main.js if needed)
  - **Guardrails**: Dual AOS.init() calls. skin-news-style.css cascade. All popups (#aiPopup, #phonePopup) must render correctly.

### Phase 9: QA
- [ ] **Task 9.1**: Playwright visual verification — screenshot every section at desktop (1440px) and mobile (375px) widths. Verify all interactive elements work: Swiper navigation, accordion, header scroll, popups, language switcher. Check for visual regressions.
  - **Method**: Playwright browser automation
  - **Acceptance**: All sections render correctly, all interactions functional, no broken layouts

## Parallelization Map
- **Task 0.1 ‖ 0.2**: Independent, can run in parallel
- **Task 1.1 → 2.1 → 3.1 → 4.1 → 5.1 → 6.1**: Sequential (same files)
- **Task 7.1**: After all section tasks complete
- **Task 8.1**: After responsive overhaul
- **Task 9.1**: Final — after everything

## File Map
| File | Tasks That Touch It |
|------|-------------------|
| index.html | 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1 |
| main.css | 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1 |
| common.css | 1.1 |
| main.js | 8.1 (if needed) |
