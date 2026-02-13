# Dongin Law Firm — Main Page Pixel-Perfect Replication

## TL;DR

> **Quick Summary**: Pixel-perfect replication of `https://web.donginlaw.co.kr/` main page into `/Users/njmac/Coding/dongin/` using vanilla HTML/CSS/JS (matching the original tech stack: jQuery 1.12.4, Swiper 11, AOS 2.3.1, bxSlider). Full replication skill workflow through Phase 0→1→2→2.5→3 with mandatory NumPy pixel verification achieving 95%+ similarity.
>
> **Deliverables**:
> - Complete static replica of donginlaw.co.kr main page
> - All assets downloaded (images, fonts, video, icons)
> - All CSS replicated (4 stylesheet chain)
> - All JS interactions working (Swipers, AOS, typing, accordions, menus)
> - NumPy pixel similarity ≥ 95% at 1920×1080
>
> **Estimated Effort**: Large (16 sections, 4+ CSS files, complex JS interactions)
> **Parallel Execution**: YES — 3 waves
> **Critical Path**: Task 1 → Task 2 → Task 3 → Task 4 → Tasks 5-10 (parallel) → Task 11 → Task 12 → Task 13

---

## Context

### Original Request
사용자가 `https://web.donginlaw.co.kr/` 메인페이지를 "현미경 보듯이 베껴" 달라고 요청. `/Users/njmac/Coding/dongin/` 디렉토리에 파일 생성. NumPy 픽셀 테스트 95%+ 달성 필수.

### Interview Summary
**Key Discussions**:
- All files must go inside `/Users/njmac/Coding/dongin/` — no separate directories outside
- Pixel-perfect = "현미경 보듯이" — microscope-level accuracy
- NumPy verification is mandatory, not optional
- Vanilla tech stack (jQuery/CSS) since original uses it — NO React/Vue

**Research Findings**:
- Original site uses Gnuboard 5 CMS (PHP) — we replicate static HTML output only
- 16 distinct sections/components identified in main page
- 4 CSS files in strict load order: `default.css` → `reset.css` → `common.css` → `main.css`
- Hero section uses video background (`main_video.mp4`) + JS typewriter effect
- AOS library causes elements to start at `opacity: 0` — scroll-triggered visibility
- 4 separate Swiper instances with different configs
- Pretendard Variable font is self-hosted (`.woff2` files)

### Metis Review
**Identified Gaps** (addressed in plan):
- Hero typewriter text injected by inline JS — must capture the inline `<script>` block
- `default.css` (Gnuboard framework) must be in CSS chain
- `skin/latest/news/style.css` needed for news card styling
- Pretendard font `.woff2` files must be downloaded
- AOS `opacity:0` means naive screenshots show blank sections — must scroll-trigger first
- `css/main.css` was truncated in webfetch — need full file via Playwright or curl

---

## Work Objectives

### Core Objective
Create a pixel-perfect static HTML replica of `https://web.donginlaw.co.kr/` main page that achieves ≥ 95% NumPy pixel similarity score at 1920×1080 viewport.

### Concrete Deliverables
- `index.html` — Full page HTML
- `css/` — All CSS files (default.css, reset.css, common.css, main.css, plus skin CSS)
- `fonts/` — Pretendard Variable font files + CSS
- `img/` — All images, icons, video file
- `js/` — All JS files (jQuery, Swiper, AOS, bxSlider, common.js, custom inline scripts)
- NumPy verification report showing ≥ 95% similarity

### Definition of Done
- [x] `index.html` opens in browser and visually matches original at 1920×1080
- [x] All 16 sections render correctly
- [x] All 4 Swipers slide correctly
- [x] Header scroll behavior works (transparent → white)
- [x] AOS scroll animations trigger
- [x] Hero typewriter effect plays
- [x] Accordion Q&A expands/collapses
- [x] NumPy pixel similarity ≥ 95%

### Must Have
- Video background in hero section (autoplay, muted, loop)
- All 4 Swiper carousels functional
- Header fixed positioning with scroll color change
- AOS fade-up animations on scroll
- Pretendard Variable font rendering
- Floating buttons (right side) and floating form (bottom)
- Footer with correct dark blue background
- All hover effects on cards and buttons

### Must NOT Have (Guardrails)
- NO React, Vue, or any framework — vanilla HTML/CSS/JS only
- NO external CDN dependencies that differ from original (use same CDNs: Swiper 11 from jsdelivr, AOS from unpkg)
- NO placeholder or lorem ipsum text — use actual content from the original
- NO skipping sections — ALL 16 components must be implemented
- NO verification before ALL sections are complete (replication skill rule)
- NO manual/human verification steps — all verification is agent-executed
- NO files created outside `/Users/njmac/Coding/dongin/`

---

## Verification Strategy (MANDATORY)

> **UNIVERSAL RULE: ZERO HUMAN INTERVENTION**
>
> ALL tasks in this plan MUST be verifiable WITHOUT any human action.
> Every criterion is verified by the agent using tools (Playwright, Bash, NumPy scripts).

### Test Decision
- **Infrastructure exists**: NO (no test framework)
- **Automated tests**: NO (not applicable — visual replication project)
- **Framework**: None — verification via NumPy pixel comparison + Playwright visual checks

### Agent-Executed QA Strategy
- **Phase 2 (Implementation)**: Each section verified via Playwright screenshot + visual inspection
- **Phase 2.5 (Effects)**: Interactive effects verified via Playwright automation (click, scroll, hover)
- **Phase 3 (Pixel Test)**: NumPy comparison script at 1920×1080 — loop until ≥ 95%

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Sequential Foundation):
├── Task 1: Environment Setup (pip install, directory structure)
├── Task 2: Phase 0 — Asset Collection (Playwright screenshot + resource download)
├── Task 3: Phase 0 Supplement — Manual asset gaps (video, fonts, truncated CSS/JS)
└── Task 4: Phase 1 — HTML Analysis + Effect Mapping Table

Wave 2 (Parallel Implementation — Phase 2):
├── Task 5: Header + Sidebar + Floating Elements (sections 1-4)
├── Task 6: Hero Section (section 5 — video bg + typewriter + search)
├── Task 7: News + Expert + New Lawyers (sections 6-8)
├── Task 8: Mission + Recruitment + Consulting (sections 9-11)
├── Task 9: Q&A Accordion + YouTube Insight (sections 12-13)
└── Task 10: Modals + Footer (sections 14-16)

Wave 3 (Sequential Verification):
├── Task 11: Full Page Assembly + CSS Integration
├── Task 12: Phase 2.5 — Interactive Effects Verification
└── Task 13: Phase 3 — NumPy Pixel Verification Loop
```

### Dependency Matrix

| Task | Depends On | Blocks | Can Parallelize With |
|------|------------|--------|---------------------|
| 1 | None | 2 | None |
| 2 | 1 | 3, 4 | None |
| 3 | 2 | 4 | None |
| 4 | 3 | 5-10 | None |
| 5 | 4 | 11 | 6, 7, 8, 9, 10 |
| 6 | 4 | 11 | 5, 7, 8, 9, 10 |
| 7 | 4 | 11 | 5, 6, 8, 9, 10 |
| 8 | 4 | 11 | 5, 6, 7, 9, 10 |
| 9 | 4 | 11 | 5, 6, 7, 8, 10 |
| 10 | 4 | 11 | 5, 6, 7, 8, 9 |
| 11 | 5-10 | 12 | None |
| 12 | 11 | 13 | None |
| 13 | 12 | None | None (final) |

### Agent Dispatch Summary

| Wave | Tasks | Recommended Dispatch |
|------|-------|---------------------|
| 1 | 1, 2, 3, 4 | Sequential — each depends on previous |
| 2 | 5, 6, 7, 8, 9, 10 | Parallel — 6 independent section groups |
| 3 | 11, 12, 13 | Sequential — assembly → effects → pixel test |

---

## TODOs

### TASK 1: Environment Setup + Directory Structure

- [x] 1. Environment Setup + Directory Structure

  **What to do**:
  - Install Python dependencies: `pip3 install numpy Pillow`
  - Verify installation: `pip3 list | grep -iE "numpy|pillow"`
  - Create project directory structure:
    ```
    /Users/njmac/Coding/dongin/
    ├── css/
    ├── fonts/
    ├── img/
    ├── js/
    ├── .sisyphus/evidence/
    ```
  - Verify Playwright is available: `npx playwright --version`
  - Verify replication skill scripts exist: `ls ~/.claude/skills/replication/scripts/main.py`

  **Must NOT do**:
  - Do NOT install Node.js packages (not needed — using CDN for Swiper/AOS)
  - Do NOT create any HTML/CSS/JS files yet

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple dependency installation and directory creation
  - **Skills**: [`bash-linux`]
    - `bash-linux`: Shell commands for pip install and mkdir

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 1 — Sequential (first task)
  - **Blocks**: Task 2
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `~/.claude/skills/replication/scripts/main.py` — Replication skill entry point, may need numpy/Pillow

  **External References**:
  - NumPy docs: `https://numpy.org/install/`
  - Pillow docs: `https://pillow.readthedocs.io/en/stable/installation.html`

  **Acceptance Criteria**:
  - [x] `pip3 list | grep numpy` → shows numpy version
  - [x] `pip3 list | grep Pillow` → shows Pillow version
  - [x] `ls /Users/njmac/Coding/dongin/css/ /Users/njmac/Coding/dongin/fonts/ /Users/njmac/Coding/dongin/img/ /Users/njmac/Coding/dongin/js/` → all directories exist
  - [x] `ls /Users/njmac/Coding/dongin/.sisyphus/evidence/` → directory exists

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Verify Python dependencies installed
    Tool: Bash
    Preconditions: pip3 available
    Steps:
      1. Run: pip3 install numpy Pillow
      2. Run: python3 -c "import numpy; print(numpy.__version__)"
      3. Assert: version number printed (no ImportError)
      4. Run: python3 -c "from PIL import Image; print('OK')"
      5. Assert: "OK" printed
    Expected Result: Both libraries importable
    Evidence: Terminal output captured

  Scenario: Verify directory structure created
    Tool: Bash
    Preconditions: None
    Steps:
      1. Run: ls -la /Users/njmac/Coding/dongin/
      2. Assert: css/, fonts/, img/, js/ directories present
      3. Run: ls -la /Users/njmac/Coding/dongin/.sisyphus/evidence/
      4. Assert: directory exists
    Expected Result: All required directories present
    Evidence: Terminal output captured
  ```

  **Commit**: NO (infrastructure only)

---

### TASK 2: Phase 0 — Baseline Screenshot + Asset Collection via Replication Skill

- [x] 2. Phase 0 — Baseline Screenshot + Asset Collection

  **What to do**:
  - Run the replication skill's Phase 0 collector against the original site:
    ```bash
    cd /Users/njmac/Coding/dongin && bash ~/.claude/skills/replication/scripts/run_with_project_path.sh \
      --collect "https://web.donginlaw.co.kr/" --capture-mode auto
    ```
  - This will:
    1. Take a full-page screenshot of the original (baseline reference)
    2. Download all linked resources (CSS, JS, images)
    3. Create inventory of assets
  - If the script fails or is unavailable, manually do:
    1. Use Playwright to take full-page screenshot at 1920×1080 → save as `.sisyphus/evidence/original-fullpage.png`
    2. Use Playwright to scroll through entire page first (triggering AOS animations) before screenshot
    3. Download all CSS files via curl
    4. Download all JS files via curl
    5. Download all images referenced in HTML via curl
  - **CRITICAL**: The screenshot MUST be taken AFTER scrolling the entire page to trigger AOS animations (elements start at opacity:0)

  **Must NOT do**:
  - Do NOT start implementing HTML yet
  - Do NOT modify any downloaded files

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Complex asset collection with Playwright + curl, AOS scroll handling
  - **Skills**: [`playwright`, `bash-linux`]
    - `playwright`: Browser automation for full-page screenshot with scroll triggering
    - `bash-linux`: curl commands for asset downloads

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 1 — Sequential
  - **Blocks**: Tasks 3, 4
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `~/.claude/skills/replication/scripts/run_with_project_path.sh` — Wrapper script for replication skill
  - `~/.claude/skills/replication/scripts/main.py` — Main collection logic

  **External References**:
  - Original site: `https://web.donginlaw.co.kr/`
  - CSS files (append `?ver=2504081851`):
    - `https://web.donginlaw.co.kr/css/default.css`
    - `https://web.donginlaw.co.kr/css/reset.css`
    - `https://web.donginlaw.co.kr/css/common.css`
    - `https://web.donginlaw.co.kr/css/main.css`
    - `https://web.donginlaw.co.kr/skin/latest/news/style.css`
  - JS files:
    - `https://web.donginlaw.co.kr/js/jquery-1.12.4.min.js`
    - `https://web.donginlaw.co.kr/js/jquery-migrate-1.4.1.min.js`
    - `https://web.donginlaw.co.kr/js/jquery.menu.js`
    - `https://web.donginlaw.co.kr/js/common.js`
    - `https://web.donginlaw.co.kr/js/wrest.js`
    - `https://web.donginlaw.co.kr/js/placeholders.min.js`
    - `https://web.donginlaw.co.kr/js/jquery.bxslider.js`
  - CDN references (link in HTML, do NOT download — use same CDN):
    - Swiper 11: `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js` + CSS
    - AOS 2.3.1: `https://unpkg.com/aos@2.3.1/dist/aos.js` + CSS
    - Google Fonts Playfair Display
  - Font: `https://web.donginlaw.co.kr/fonts/pretendardvariable.css` + all .woff2 files it references
  - Video: `https://web.donginlaw.co.kr/img/main_video.mp4`

  **Acceptance Criteria**:
  - [x] `.sisyphus/evidence/original-fullpage.png` exists and shows complete page
  - [x] All 5 CSS files downloaded to `css/`
  - [x] All 7 JS files downloaded to `js/`
  - [x] Image inventory created listing all `<img>` src and CSS `background-image` URLs

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Full-page baseline screenshot captured
    Tool: Bash
    Preconditions: Playwright installed, directories created
    Steps:
      1. Run: ls -la /Users/njmac/Coding/dongin/.sisyphus/evidence/original-fullpage.png
      2. Assert: File exists and size > 500KB (full page should be large)
      3. Run: file /Users/njmac/Coding/dongin/.sisyphus/evidence/original-fullpage.png
      4. Assert: Output contains "PNG image data"
    Expected Result: Valid PNG screenshot of original page
    Evidence: .sisyphus/evidence/original-fullpage.png

  Scenario: CSS files downloaded correctly
    Tool: Bash
    Preconditions: curl available
    Steps:
      1. Run: ls -la /Users/njmac/Coding/dongin/css/
      2. Assert: default.css, reset.css, common.css, main.css exist
      3. Run: wc -l /Users/njmac/Coding/dongin/css/main.css
      4. Assert: Line count > 800 (full file, not truncated)
      5. Run: head -5 /Users/njmac/Coding/dongin/css/reset.css
      6. Assert: Contains "Meyer" or "reset" comment
    Expected Result: All CSS files complete and valid
    Evidence: Terminal output captured

  Scenario: JS files downloaded correctly
    Tool: Bash
    Preconditions: curl available
    Steps:
      1. Run: ls -la /Users/njmac/Coding/dongin/js/
      2. Assert: jquery-1.12.4.min.js exists, size > 80KB
      3. Assert: common.js exists
      4. Assert: jquery.bxslider.js exists
    Expected Result: All JS files present
    Evidence: Terminal output captured
  ```

  **Commit**: NO (asset collection only)

---

### TASK 3: Phase 0 Supplement — Fill Asset Gaps

- [x] 3. Phase 0 Supplement — Fill Asset Gaps (Video, Fonts, Images, Inline Scripts)

  **What to do**:
  - **Video**: Download `https://web.donginlaw.co.kr/img/main_video.mp4` → `img/main_video.mp4`
  - **Fonts**: 
    1. Download `https://web.donginlaw.co.kr/fonts/pretendardvariable.css` → `fonts/pretendardvariable.css`
    2. Parse the CSS file to find all `.woff2` and `.woff` font file URLs
    3. Download each font file to `fonts/` preserving relative paths
  - **Images**: Use Playwright to extract ALL image URLs from the live page:
    1. All `<img src="...">` values
    2. All CSS `background-image: url(...)` values (from computed styles)
    3. All `<source src="...">` in `<video>` tags
    4. Download each to `img/` preserving path structure
  - **Inline Scripts**: Use Playwright to extract the inline `<script>` blocks at the bottom of the HTML that contain:
    1. Swiper initialization configs (4 instances: main_visual_swiper, mc_1_swiper, mc_3_swiper, mc_8_swiper)
    2. Typewriter effect script (injects text into `.main_visual .text.pc`)
    3. Header scroll behavior script
    4. Accordion toggle script
    5. AOS.init() call with config
    6. Any other inline JS not in external files
    7. Save ALL inline scripts to `js/inline-scripts.js`
  - **News skin CSS**: Download `https://web.donginlaw.co.kr/skin/latest/news/style.css` → `css/skin-news-style.css`
  - **Verify `main.css` completeness**: Compare downloaded `css/main.css` line count against a fresh curl download. If truncated, re-download with `curl -L` and ensure full content including all `@media` queries at the end.

  **Must NOT do**:
  - Do NOT modify any downloaded content
  - Do NOT start HTML implementation

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Multiple download operations + Playwright DOM extraction + font file parsing
  - **Skills**: [`playwright`, `bash-linux`]
    - `playwright`: Extract inline scripts and image URLs from live DOM
    - `bash-linux`: curl downloads, file operations

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 1 — Sequential
  - **Blocks**: Task 4
  - **Blocked By**: Task 2

  **References**:

  **External References**:
  - Video: `https://web.donginlaw.co.kr/img/main_video.mp4`
  - Font CSS: `https://web.donginlaw.co.kr/fonts/pretendardvariable.css`
  - News skin: `https://web.donginlaw.co.kr/skin/latest/news/style.css`
  - All image paths visible in HTML source (fetched in previous session)

  **WHY Each Reference Matters**:
  - Video is the hero section background — without it, largest section is broken
  - Pretendard is the PRIMARY font — without it, all text renders in system fallback
  - Inline scripts contain Swiper configs — without them, carousels don't initialize
  - News skin CSS styles the mc_1 news cards — without it, card layout breaks

  **Acceptance Criteria**:
  - [x] `img/main_video.mp4` exists and size > 1MB
  - [x] `fonts/pretendardvariable.css` exists
  - [x] At least 2 `.woff2` font files exist in `fonts/`
  - [x] `js/inline-scripts.js` exists and contains Swiper init code (search for `new Swiper`)
  - [x] `css/skin-news-style.css` exists
  - [x] `css/main.css` contains `@media` queries (verify not truncated)
  - [x] `img/` directory contains at least 20 image files

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Video file downloaded and playable
    Tool: Bash
    Preconditions: curl available
    Steps:
      1. Run: ls -la /Users/njmac/Coding/dongin/img/main_video.mp4
      2. Assert: File exists and size > 1MB
      3. Run: file /Users/njmac/Coding/dongin/img/main_video.mp4
      4. Assert: Output contains "MP4" or "ISO Media"
    Expected Result: Valid MP4 video file
    Evidence: Terminal output captured

  Scenario: Pretendard fonts downloaded
    Tool: Bash
    Preconditions: Font CSS downloaded
    Steps:
      1. Run: cat /Users/njmac/Coding/dongin/fonts/pretendardvariable.css | grep -c "woff2"
      2. Assert: Count > 0 (at least 1 woff2 reference)
      3. Run: find /Users/njmac/Coding/dongin/fonts/ -name "*.woff2" | wc -l
      4. Assert: Count > 0
    Expected Result: Font CSS and binary font files present
    Evidence: Terminal output captured

  Scenario: Inline scripts extracted with Swiper configs
    Tool: Bash
    Preconditions: Playwright extracted inline JS
    Steps:
      1. Run: grep -c "new Swiper" /Users/njmac/Coding/dongin/js/inline-scripts.js
      2. Assert: Count >= 3 (at least 3 Swiper instances)
      3. Run: grep "AOS.init" /Users/njmac/Coding/dongin/js/inline-scripts.js
      4. Assert: AOS.init found
      5. Run: grep -c "typewriter\|typing\|텍스트" /Users/njmac/Coding/dongin/js/inline-scripts.js
      6. Assert: Typewriter-related code found
    Expected Result: All critical inline JS captured
    Evidence: Terminal output captured

  Scenario: All images downloaded
    Tool: Bash
    Preconditions: Image URLs extracted
    Steps:
      1. Run: find /Users/njmac/Coding/dongin/img/ -type f | wc -l
      2. Assert: Count >= 20
      3. Run: find /Users/njmac/Coding/dongin/img/ -name "*.png" -o -name "*.jpg" -o -name "*.svg" -o -name "*.webp" | head -10
      4. Assert: Multiple image formats present
    Expected Result: Comprehensive image collection
    Evidence: Terminal output captured
  ```

  **Commit**: NO (asset collection phase)

---

### TASK 4: Phase 1 — HTML Structure Analysis + Effect Mapping Table

- [x] 4. Phase 1 — HTML Structure Analysis + Effect Mapping Table

  **What to do**:
  - Use Playwright to capture the FULL HTML source of the live page (including dynamically rendered content)
  - Create a comprehensive analysis document at `.sisyphus/drafts/effect-mapping.md` containing:

  **Section-by-Section Analysis Table:**

  | Section | CSS Classes | JS Effects | Animations | Hover States | Responsive Breakpoints |
  |---------|-------------|------------|------------|--------------|----------------------|
  | (fill for each of 16 sections) |

  **Effect Mapping Table** (CRITICAL for Phase 2):
  For EACH interactive effect found:
  ```
  Effect ID: E01
  Section: #header
  Trigger: scroll > 0px
  Action: Add class "on" to header → background: white, box-shadow appears
  CSS involved: main.css line ~XX
  JS involved: inline-scripts.js (scroll event listener)
  ```

  **Animation Mapping** (AOS elements):
  - List every element with `data-aos` attribute
  - Record: element selector, `data-aos` value, `data-aos-delay`, `data-aos-duration`
  - Group by section

  **Swiper Configuration Map** (4 instances):
  For each Swiper:
  ```
  Swiper ID: main_visual_swiper / mc_1_swiper / mc_3_swiper / mc_8_swiper
  Container: .swiper selector
  Slides per view: N
  Loop: true/false
  Autoplay: delay value
  Breakpoints: {responsive config}
  Navigation: prev/next buttons selector
  Pagination: selector + type
  ```

  **Font Usage Map**:
  - Which elements use Pretendard vs Playfair Display
  - Font weights used (check CSS `font-weight` rules)

  **Color Map**:
  - All unique colors used (extract from CSS)
  - Map to CSS custom properties (`--main_color: #084784`, etc.)

  **z-index Stack**:
  - All elements with explicit z-index values
  - Layer order for overlapping elements (header, modals, floating buttons, floating form)

  **Must NOT do**:
  - Do NOT implement any HTML/CSS yet — this is analysis only
  - Do NOT modify downloaded assets

  **Recommended Agent Profile**:
  - **Category**: `deep`
    - Reason: Deep analysis requiring thorough DOM inspection, CSS parsing, JS behavior mapping
  - **Skills**: [`playwright`, `clean-code`]
    - `playwright`: DOM inspection, computed style extraction
    - `clean-code`: Structured documentation output

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 1 — Sequential (last foundation task)
  - **Blocks**: Tasks 5, 6, 7, 8, 9, 10
  - **Blocked By**: Task 3

  **References**:

  **Pattern References**:
  - Downloaded `css/main.css` — All section styles, animations, responsive breakpoints
  - Downloaded `css/common.css` — CSS variables, shared component styles
  - Downloaded `js/inline-scripts.js` — Swiper configs, scroll handlers, typewriter
  - Downloaded `js/common.js` — Shared JS behaviors

  **External References**:
  - Live site: `https://web.donginlaw.co.kr/` — Source of truth for rendered DOM
  - AOS docs: `https://michalsnik.github.io/aos/` — Animation attribute reference
  - Swiper docs: `https://swiperjs.com/swiper-api` — Configuration options

  **Acceptance Criteria**:
  - [x] `.sisyphus/drafts/effect-mapping.md` exists
  - [x] Contains analysis for all 16 sections
  - [x] Lists all 4 Swiper configurations with parameters
  - [x] Lists all AOS-animated elements with attributes
  - [x] Lists all hover effects with selectors
  - [x] Lists all scroll-triggered behaviors
  - [x] Includes z-index stack order
  - [x] Includes color map with CSS custom properties

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Effect mapping document is comprehensive
    Tool: Bash
    Preconditions: Analysis complete
    Steps:
      1. Run: wc -l /Users/njmac/Coding/dongin/.sisyphus/drafts/effect-mapping.md
      2. Assert: Line count > 100 (substantial analysis)
      3. Run: grep -c "Swiper" /Users/njmac/Coding/dongin/.sisyphus/drafts/effect-mapping.md
      4. Assert: Count >= 4 (all 4 Swiper instances documented)
      5. Run: grep -c "data-aos" /Users/njmac/Coding/dongin/.sisyphus/drafts/effect-mapping.md
      6. Assert: Count >= 10 (multiple AOS elements documented)
      7. Run: grep -c "hover" /Users/njmac/Coding/dongin/.sisyphus/drafts/effect-mapping.md
      8. Assert: Count >= 5 (hover effects documented)
    Expected Result: Comprehensive mapping covering all sections and effects
    Evidence: .sisyphus/drafts/effect-mapping.md content
  ```

  **Commit**: NO (analysis document only)

---

### TASK 5: Phase 2 — Header + Sidebar + Floating Elements (Sections 1-4)

- [x] 5. Phase 2 — Implement Header, Sidebar, Floating Buttons, Floating Form

  **What to do**:
  - **Start building `index.html`** with complete `<head>` section:
    - Meta tags (charset, viewport, description)
    - CSS links in EXACT order: `css/default.css` → `fonts/pretendardvariable.css` → Google Fonts Playfair Display → Swiper CDN CSS → AOS CDN CSS → `css/reset.css` → `css/common.css` → `css/main.css` → `css/skin-news-style.css`
    - Favicon if exists
  - **#header** (section 1):
    - Fixed position navigation bar
    - Logo (left side) — `<a>` with `<img>` logo
    - Navigation menu items with exact text from original
    - Dropdown submenu structure (`.depth2`) — CSS-only hover or JS-assisted
    - Scroll behavior: transparent bg initially → `.on` class adds white bg + shadow
    - Mobile hamburger button (visible at breakpoint)
  - **#sidebar** (section 2):
    - Right-slide drawer for mobile navigation
    - Contains same nav items as header
    - Overlay background when open
    - Close button
  - **.float_btns** (section 3):
    - Fixed right-side vertical button group
    - Phone consultation button → opens `#phonePopup`
    - Kakao talk button → external link
    - Quick consultation button
    - Each with icon + hover state
  - **.float_form** (section 4):
    - Fixed bottom bar (desktop ≥1200px only)
    - Consultation form fields: name, phone, category select, message
    - Submit button
    - Collapse/expand toggle

  - Copy ALL exact text content, class names, and data attributes from the original HTML

  **Must NOT do**:
  - Do NOT change class names from original — use exact same classes
  - Do NOT add any sections beyond 1-4 in this task
  - Do NOT add Font Awesome if original uses it — copy same approach
  - Do NOT create separate CSS files — use the downloaded ones

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Complex layout with fixed positioning, dropdowns, responsive breakpoints
  - **Skills**: [`frontend-ui-ux`, `clean-code`]
    - `frontend-ui-ux`: Pixel-perfect layout implementation
    - `clean-code`: Match original code patterns exactly

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 6, 7, 8, 9, 10)
  - **Blocks**: Task 11
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - Downloaded `css/main.css` — Header styles (search for `#header`, `.gnb`, `.float_btns`, `.float_form`)
  - Downloaded `css/common.css` — Container max-width, CSS variables
  - Downloaded `js/common.js` — Header scroll handler, sidebar toggle
  - Downloaded `js/inline-scripts.js` — Any header-related inline JS
  - `.sisyphus/drafts/effect-mapping.md` — Effect E01 (header scroll), z-index stack

  **External References**:
  - Original HTML source (fetched via webfetch) — exact HTML structure for header, sidebar, floats
  - Font Awesome: check if original loads it from local `css/font-awesome/` or CDN

  **WHY Each Reference Matters**:
  - `main.css` header styles define exact positioning, transitions, dropdown behavior
  - `common.js` contains the scroll listener that adds `.on` class to header
  - Effect mapping tells exact scroll threshold and z-index ordering

  **Acceptance Criteria**:
  - [x] `index.html` has complete `<head>` with all CSS links in correct order
  - [x] `#header` element exists with logo, nav items, dropdown structure
  - [x] `.float_btns` element exists with 3 buttons
  - [x] `.float_form` element exists with form fields
  - [x] `#sidebar` element exists with mobile nav

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Header renders with correct structure
    Tool: Playwright (playwright skill)
    Preconditions: index.html opened via file:// or local server
    Steps:
      1. Navigate to: file:///Users/njmac/Coding/dongin/index.html
      2. Wait for: #header visible (timeout: 5s)
      3. Assert: #header contains img (logo)
      4. Assert: .gnb or nav element contains menu items
      5. Assert: .float_btns visible on right side
      6. Screenshot: .sisyphus/evidence/task-5-header.png
    Expected Result: Header with logo and navigation visible
    Evidence: .sisyphus/evidence/task-5-header.png

  Scenario: Floating elements positioned correctly
    Tool: Playwright (playwright skill)
    Preconditions: Page loaded at 1920x1080
    Steps:
      1. Assert: .float_btns has position:fixed
      2. Assert: .float_btns is on right side (right < 50px)
      3. Assert: .float_form has position:fixed at bottom
      4. Screenshot: .sisyphus/evidence/task-5-floating.png
    Expected Result: Float elements in correct positions
    Evidence: .sisyphus/evidence/task-5-floating.png
  ```

  **Commit**: YES
  - Message: `feat(layout): implement header, sidebar, and floating UI elements`
  - Files: `index.html`
  - Pre-commit: Visual check via Playwright

---

### TASK 6: Phase 2 — Hero Section (Section 5)

- [x] 6. Phase 2 — Implement Hero Section (Video BG + Typewriter + Search + CTAs)

  **What to do**:
  - **section.main_visual** — Full-viewport hero section:
    - `<video>` background: autoplay, muted, loop, playsinline, `img/main_video.mp4`
    - Dark overlay on video (CSS `::after` or overlay div with rgba background)
    - Swiper carousel wrapping the hero content (main_visual_swiper)
    - **Typewriter text**: The typing animation that writes Korean text line by line
      - Get the exact text content from `js/inline-scripts.js`
      - Implement the same typing animation logic
    - **Search bar**: Input with placeholder text + search button
    - **CTA buttons**: AI consultation button (opens `#aiPopup`) + Phone button (opens `#phonePopup`)
    - **Scroll-down indicator**: Animated arrow/chevron at bottom
  - Copy the EXACT Swiper config from `inline-scripts.js` for this section
  - Ensure video covers full viewport (`object-fit: cover`)

  **Must NOT do**:
  - Do NOT use a different typing animation library — replicate the original JS approach
  - Do NOT use placeholder video — must use the downloaded `main_video.mp4`
  - Do NOT simplify the Swiper — use exact same config

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Complex hero with video background, typing animation, Swiper integration
  - **Skills**: [`frontend-ui-ux`, `clean-code`]
    - `frontend-ui-ux`: Hero section layout with video and overlay
    - `clean-code`: Match original animation logic

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5, 7, 8, 9, 10)
  - **Blocks**: Task 11
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - Downloaded `css/main.css` — Search for `.main_visual` styles (video, overlay, text, search bar, buttons)
  - Downloaded `js/inline-scripts.js` — Typewriter script + main_visual_swiper Swiper config
  - `.sisyphus/drafts/effect-mapping.md` — Swiper config for main_visual, typewriter effect details

  **External References**:
  - Downloaded `img/main_video.mp4` — Hero background video
  - Swiper 11 API: `https://swiperjs.com/swiper-api` — Swiper initialization options

  **WHY Each Reference Matters**:
  - `main.css` `.main_visual` block defines the video overlay opacity, text positioning, search bar styling
  - `inline-scripts.js` contains the exact typewriter text strings and animation timing
  - Swiper config determines slide transitions, autoplay delay, pagination style

  **Acceptance Criteria**:
  - [x] `section.main_visual` exists in `index.html`
  - [x] `<video>` element with `src="img/main_video.mp4"` present
  - [x] Typewriter text content matches original
  - [x] Search input with correct placeholder
  - [x] AI and phone CTA buttons present
  - [x] Swiper wrapper structure correct

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Hero section renders with video background
    Tool: Playwright (playwright skill)
    Preconditions: index.html loaded, video file present
    Steps:
      1. Navigate to: file:///Users/njmac/Coding/dongin/index.html
      2. Wait for: section.main_visual visible (timeout: 5s)
      3. Assert: video element exists within .main_visual
      4. Assert: video has autoplay and muted attributes
      5. Assert: .main_visual height >= 90vh
      6. Screenshot: .sisyphus/evidence/task-6-hero.png
    Expected Result: Full-viewport hero with video background
    Evidence: .sisyphus/evidence/task-6-hero.png

  Scenario: Search bar and CTA buttons present
    Tool: Playwright (playwright skill)
    Preconditions: Hero section rendered
    Steps:
      1. Assert: input[type="text"] or input[type="search"] within .main_visual exists
      2. Assert: Button linking to AI popup exists
      3. Assert: Button linking to phone popup exists
    Expected Result: Interactive elements present in hero
    Evidence: .sisyphus/evidence/task-6-hero-ctas.png
  ```

  **Commit**: YES (can group with Task 5 if done together)
  - Message: `feat(hero): implement main visual section with video, typewriter, and search`
  - Files: `index.html` (updated)

---

### TASK 7: Phase 2 — News + Expert Group + New Lawyers (Sections 6-8)

- [x] 7. Phase 2 — Implement News (mc_1), Expert Group (mc_2), New Lawyers (mc_9)

  **What to do**:
  - **section.mc_1** — "최신뉴스 / Recent Insight":
    - Section title with Korean + English text
    - Swiper carousel (`mc_1_swiper`) with news cards
    - 10 slides with: thumbnail image, category badge, title, date
    - Navigation arrows (prev/next)
    - AOS fade-up animation attributes
    - Copy exact Swiper config from `inline-scripts.js`
  - **section.mc_2** — "엑스퍼트 그룹 / Expert Group":
    - Swiper carousel with 3 team/practice area slides
    - Each slide: large background image, title overlay, description
    - Navigation + pagination
    - AOS attributes
  - **section.mc_9** — "신규 영입 / New Lawyers":
    - 5-column grid of lawyer portraits
    - Each card: photo, name, title/position
    - Hover effect with marquee/scrolling text overlay
    - AOS attributes
  - **Also check mc_3**: The HTML has both `mc_3` and `mc_9` — verify which renders on the live page. If both render, implement both. If only one renders (the other is `display:none`), implement the visible one.
  - Download ALL images referenced in these sections to `img/`

  **Must NOT do**:
  - Do NOT create fake/placeholder lawyer data — use exact names and images from original
  - Do NOT simplify the marquee hover effect — replicate exactly
  - Do NOT skip downloading section-specific images

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Multiple Swiper implementations, grid layouts, hover effects
  - **Skills**: [`frontend-ui-ux`, `playwright`]
    - `frontend-ui-ux`: Card layouts, Swiper integration, hover effects
    - `playwright`: Verify which sections (mc_3 vs mc_9) actually render on live site

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5, 6, 8, 9, 10)
  - **Blocks**: Task 11
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - Downloaded `css/main.css` — Search for `.mc_1`, `.mc_2`, `.mc_9`, `.mc_3` styles
  - Downloaded `css/skin-news-style.css` — News card styling
  - Downloaded `js/inline-scripts.js` — mc_1_swiper and mc_3_swiper Swiper configs
  - `.sisyphus/drafts/effect-mapping.md` — Swiper configs, AOS attributes for these sections

  **External References**:
  - Original HTML source — exact HTML structure, content text, image paths
  - Swiper 11 API for carousel options

  **Acceptance Criteria**:
  - [x] `section.mc_1` with Swiper structure and 10 news slides
  - [x] `section.mc_2` with Swiper and 3 team slides
  - [x] `section.mc_9` (or mc_3, whichever is visible) with 5 lawyer cards
  - [x] All section images downloaded to `img/`
  - [x] AOS `data-aos` attributes on section elements
  - [x] Swiper configs match original exactly

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: News section renders with Swiper slides
    Tool: Playwright (playwright skill)
    Preconditions: index.html loaded
    Steps:
      1. Scroll to: section.mc_1
      2. Wait for: .swiper-slide within .mc_1 (timeout: 5s)
      3. Assert: .swiper-slide count >= 5
      4. Assert: Each slide contains img and title text
      5. Screenshot: .sisyphus/evidence/task-7-news.png
    Expected Result: News carousel with multiple slides
    Evidence: .sisyphus/evidence/task-7-news.png

  Scenario: Expert group section renders
    Tool: Playwright (playwright skill)
    Steps:
      1. Scroll to: section.mc_2
      2. Assert: Swiper structure exists
      3. Assert: At least 3 slides present
      4. Screenshot: .sisyphus/evidence/task-7-expert.png
    Expected Result: Expert group carousel visible
    Evidence: .sisyphus/evidence/task-7-expert.png

  Scenario: New lawyers grid renders
    Tool: Playwright (playwright skill)
    Steps:
      1. Scroll to: section.mc_9 or section.mc_3
      2. Assert: At least 5 lawyer card elements
      3. Assert: Each card has img element
      4. Screenshot: .sisyphus/evidence/task-7-lawyers.png
    Expected Result: Lawyer grid with 5 cards
    Evidence: .sisyphus/evidence/task-7-lawyers.png
  ```

  **Commit**: YES
  - Message: `feat(content): implement news, expert group, and new lawyers sections`
  - Files: `index.html` (updated), `img/` (new images)

---

### TASK 8: Phase 2 — Mission + Recruitment + Consulting (Sections 9-11)

- [x] 8. Phase 2 — Implement Our Mission (mc_4), Who's Next (mc_5), Consulting Hub (mc_6)

  **What to do**:
  - **section.mc_4** — "Our Mission":
    - Video section (possibly different video or same `main_video.mp4`)
    - Mission statement text overlay
    - AOS animation attributes
  - **section.mc_5** — "Who's Next?" recruitment CTA:
    - Full-width background image
    - Recruitment headline + description text
    - CTA button (likely links to careers page)
    - AOS attributes
  - **section.mc_6** — "상담센터 / Consulting Hub":
    - Split layout: left side contact info, right side Kakao talk image/QR
    - Phone numbers, address, business hours
    - Kakao consultation link/button
    - AOS attributes
  - Download ALL images referenced in these sections

  **Must NOT do**:
  - Do NOT make up contact information — use exact text from original
  - Do NOT skip the background image for mc_5
  - Do NOT modify the Kakao branding

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Full-width layouts, background images, text overlays
  - **Skills**: [`frontend-ui-ux`, `clean-code`]
    - `frontend-ui-ux`: Section layouts with bg images and overlays
    - `clean-code`: Match original markup patterns

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5, 6, 7, 9, 10)
  - **Blocks**: Task 11
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - Downloaded `css/main.css` — `.mc_4`, `.mc_5`, `.mc_6` styles
  - `.sisyphus/drafts/effect-mapping.md` — AOS attributes, background image paths

  **External References**:
  - Original HTML source — exact content, image paths, contact info

  **Acceptance Criteria**:
  - [x] `section.mc_4` with video/image and mission text
  - [x] `section.mc_5` with background image and CTA
  - [x] `section.mc_6` with contact info and Kakao element
  - [x] All images downloaded

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Mission and recruitment sections render
    Tool: Playwright (playwright skill)
    Preconditions: index.html loaded
    Steps:
      1. Scroll to: section.mc_4
      2. Assert: section.mc_4 visible
      3. Scroll to: section.mc_5
      4. Assert: Background image or visual present
      5. Scroll to: section.mc_6
      6. Assert: Contact information text visible
      7. Screenshot: .sisyphus/evidence/task-8-mission-sections.png
    Expected Result: All three sections render with content
    Evidence: .sisyphus/evidence/task-8-mission-sections.png
  ```

  **Commit**: YES
  - Message: `feat(content): implement mission, recruitment, and consulting sections`
  - Files: `index.html` (updated), `img/` (new images)

---

### TASK 9: Phase 2 — Q&A Accordion + YouTube Insight (Sections 12-13)

- [x] 9. Phase 2 — Implement Q&A Accordion (mc_7) + YouTube Insight (mc_8)

  **What to do**:
  - **section.mc_7** — "변호사의 눈" Q&A Accordion:
    - 5 accordion items
    - Each: question title (always visible) + answer body (collapsed by default)
    - Click to expand/collapse with smooth transition
    - Only one open at a time (exclusive) or multiple (check original behavior)
    - Plus/minus or arrow icon indicating state
    - AOS attributes
    - Implement toggle JS (in inline scripts or separate)
  - **section.mc_8** — "인사이트 / Insight" YouTube Content:
    - Swiper carousel (`mc_8_swiper`)
    - 9 slides with YouTube video thumbnails
    - Each: thumbnail image, play button overlay, title, description
    - Click behavior: either opens YouTube link or embeds player
    - Navigation arrows
    - Copy exact Swiper config from `inline-scripts.js`
    - AOS attributes
  - Download ALL thumbnail images for mc_8

  **Must NOT do**:
  - Do NOT embed actual YouTube iframes initially — use thumbnail + play button like original
  - Do NOT change the accordion behavior (exclusive vs multi-open) from original
  - Do NOT skip any of the 5 Q&A items

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Interactive accordion + Swiper carousel
  - **Skills**: [`frontend-ui-ux`, `clean-code`]
    - `frontend-ui-ux`: Accordion pattern, Swiper carousel
    - `clean-code`: Match original interaction patterns

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5, 6, 7, 8, 10)
  - **Blocks**: Task 11
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - Downloaded `css/main.css` — `.mc_7`, `.mc_8` styles, accordion open/close states
  - Downloaded `js/inline-scripts.js` — mc_8_swiper config, accordion toggle logic
  - `.sisyphus/drafts/effect-mapping.md` — Accordion behavior details, Swiper mc_8 config

  **External References**:
  - Original HTML source — Q&A text content, YouTube URLs/thumbnails

  **Acceptance Criteria**:
  - [x] `section.mc_7` with 5 accordion items
  - [x] Accordion has click-to-toggle functionality
  - [x] `section.mc_8` with Swiper structure and YouTube thumbnails
  - [x] mc_8_swiper config matches original

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Accordion expands and collapses
    Tool: Playwright (playwright skill)
    Preconditions: index.html loaded with JS
    Steps:
      1. Scroll to: section.mc_7
      2. Assert: 5 accordion items visible
      3. Assert: All items collapsed initially (answer not visible)
      4. Click: First accordion item header
      5. Wait for: Answer content visible (transition complete)
      6. Assert: First item expanded, answer text visible
      7. Click: Second accordion item header
      8. Assert: Second item expanded
      9. Screenshot: .sisyphus/evidence/task-9-accordion.png
    Expected Result: Accordion toggles correctly
    Evidence: .sisyphus/evidence/task-9-accordion.png

  Scenario: YouTube insight Swiper renders
    Tool: Playwright (playwright skill)
    Steps:
      1. Scroll to: section.mc_8
      2. Assert: .swiper-slide count >= 5
      3. Assert: Each slide contains thumbnail image
      4. Screenshot: .sisyphus/evidence/task-9-youtube.png
    Expected Result: YouTube carousel with thumbnails
    Evidence: .sisyphus/evidence/task-9-youtube.png
  ```

  **Commit**: YES
  - Message: `feat(content): implement Q&A accordion and YouTube insight sections`
  - Files: `index.html` (updated), `img/` (thumbnails)

---

### TASK 10: Phase 2 — Modals + Footer (Sections 14-16)

- [x] 10. Phase 2 — Implement Phone Popup, AI Popup, Footer

  **What to do**:
  - **#phonePopup** (section 14):
    - Modal overlay + centered dialog
    - Phone consultation form or phone number display
    - Close button (X)
    - Hidden by default, shown when triggered from float_btns or hero CTA
  - **#aiPopup** (section 15):
    - Modal overlay + dialog
    - Contains iframe pointing to AI chatbot service
    - Close button
    - Hidden by default, shown when triggered from hero CTA
    - Note: iframe src may not work in local replica — that's OK, just have the modal structure
  - **#footer** (section 16):
    - Dark blue background (`#32425C`)
    - Logo (footer version)
    - Navigation links
    - Contact info (address, phone, fax)
    - Social media links
    - Copyright text
    - Awards/certifications logos if present
  - **JS `</body>` scripts block**:
    - Add all `<script>` tags before `</body>`:
      1. jQuery 1.12.4 (`js/jquery-1.12.4.min.js`)
      2. jQuery Migrate (`js/jquery-migrate-1.4.1.min.js`)
      3. Swiper CDN (`https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js`)
      4. AOS CDN (`https://unpkg.com/aos@2.3.1/dist/aos.js`)
      5. bxSlider (`js/jquery.bxslider.js`)
      6. common.js (`js/common.js`)
      7. wrest.js (`js/wrest.js`)
      8. jquery.menu.js (`js/jquery.menu.js`)
      9. placeholders.min.js (`js/placeholders.min.js`)
      10. Inline scripts (`js/inline-scripts.js`)
    - Script order matters — jQuery first, then plugins, then custom code

  **Must NOT do**:
  - Do NOT try to make the AI chatbot iframe actually work — just structure the modal
  - Do NOT change footer text/contact info — use exact original content
  - Do NOT reorder script loading — maintain exact dependency order

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Modal overlays, footer layout, script loading order
  - **Skills**: [`frontend-ui-ux`, `clean-code`]
    - `frontend-ui-ux`: Modal patterns, footer layout
    - `clean-code`: Correct script loading order

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5, 6, 7, 8, 9)
  - **Blocks**: Task 11
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - Downloaded `css/main.css` — `#phonePopup`, `#aiPopup`, `#footer` styles
  - Downloaded `css/common.css` — Modal overlay styles if shared
  - Downloaded `js/common.js` — Modal open/close handlers
  - Downloaded `js/inline-scripts.js` — AOS.init(), popup trigger bindings

  **External References**:
  - Original HTML source — footer content, modal structure, script order

  **Acceptance Criteria**:
  - [x] `#phonePopup` modal structure exists (hidden by default)
  - [x] `#aiPopup` modal structure exists (hidden by default)
  - [x] `#footer` with dark blue background, logo, links, copyright
  - [x] All `<script>` tags present before `</body>` in correct order
  - [x] jQuery loads first, then CDN libraries, then local scripts

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Footer renders with correct styling
    Tool: Playwright (playwright skill)
    Preconditions: index.html loaded
    Steps:
      1. Scroll to: #footer
      2. Assert: #footer visible
      3. Assert: Background color is approximately #32425C
      4. Assert: Copyright text visible
      5. Assert: Logo image present in footer
      6. Screenshot: .sisyphus/evidence/task-10-footer.png
    Expected Result: Dark blue footer with all content
    Evidence: .sisyphus/evidence/task-10-footer.png

  Scenario: Script loading order correct
    Tool: Bash
    Steps:
      1. Run: grep -n "<script" /Users/njmac/Coding/dongin/index.html
      2. Assert: jquery-1.12.4.min.js appears before common.js
      3. Assert: jquery-1.12.4.min.js appears before swiper
      4. Assert: inline-scripts.js is last (or near last)
    Expected Result: Scripts in dependency order
    Evidence: Terminal output captured

  Scenario: Modals exist but are hidden
    Tool: Playwright (playwright skill)
    Steps:
      1. Assert: #phonePopup exists in DOM
      2. Assert: #phonePopup is NOT visible (display:none or similar)
      3. Assert: #aiPopup exists in DOM
      4. Assert: #aiPopup is NOT visible
    Expected Result: Modals present but hidden
    Evidence: .sisyphus/evidence/task-10-modals.png
  ```

  **Commit**: YES
  - Message: `feat(layout): implement modals, footer, and script loading`
  - Files: `index.html` (updated)

---

### TASK 11: Full Page Assembly + CSS Integration + Bug Fixes

- [x] 11. Full Page Assembly — Merge All Sections + CSS/JS Integration + Visual Bug Fixes

  **What to do**:
  - If Tasks 5-10 were done by parallel agents producing separate HTML fragments:
    1. Merge all fragments into single `index.html` in correct section order
    2. Resolve any conflicting IDs or duplicate elements
  - If Tasks 5-10 were done sequentially on the same file, verify completeness:
    1. All 16 sections present in correct order
    2. No duplicate sections or missing sections
  - **CSS Integration Check**:
    - Verify all CSS files load without 404
    - Open in browser, check DevTools console for CSS errors
    - Verify CSS custom properties from `common.css` are applied
    - Check that font-face declarations load Pretendard correctly
  - **JS Integration Check**:
    - Verify no JS console errors
    - Verify jQuery loads and `$` is available
    - Verify Swiper initializes (check for `.swiper-initialized` class)
    - Verify AOS initializes (check for `aos-animate` class after scroll)
  - **Visual Bug Fixes**:
    - Compare each section against original using Playwright side-by-side screenshots
    - Fix spacing, padding, margin mismatches
    - Fix color mismatches
    - Fix font rendering issues
    - Fix image sizing issues
    - Fix z-index stacking issues
  - **Serve locally**: Start a simple HTTP server for testing:
    ```bash
    cd /Users/njmac/Coding/dongin && python3 -m http.server 8080 &
    ```
    (Required because video/font loading fails with `file://` protocol)

  **Must NOT do**:
  - Do NOT skip visual comparison — every section must be checked
  - Do NOT ignore JS console errors
  - Do NOT add new features — only fix what doesn't match original

  **Recommended Agent Profile**:
  - **Category**: `deep`
    - Reason: Thorough integration testing and visual debugging across 16 sections
  - **Skills**: [`playwright`, `frontend-ui-ux`, `clean-code`]
    - `playwright`: Visual comparison screenshots, console error detection
    - `frontend-ui-ux`: CSS debugging, layout fixes
    - `clean-code`: Clean integration without hacks

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3 — Sequential
  - **Blocks**: Task 12
  - **Blocked By**: Tasks 5, 6, 7, 8, 9, 10

  **References**:

  **Pattern References**:
  - `.sisyphus/evidence/original-fullpage.png` — Baseline reference screenshot
  - All downloaded CSS files in `css/`
  - `.sisyphus/drafts/effect-mapping.md` — Expected section order, z-index stack

  **Acceptance Criteria**:
  - [x] Single `index.html` with all 16 sections in correct order
  - [x] `python3 -m http.server 8080` serves the page
  - [x] Browser console shows zero JS errors (allow non-critical warnings)
  - [x] All 4 Swiper instances initialized (`.swiper-initialized` class present)
  - [x] AOS initialized (`[data-aos]` elements get `aos-animate` class on scroll)
  - [x] Pretendard font loads (check computed font-family in DevTools)
  - [x] No broken images (no `img` elements with failed load)

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Page loads without JS errors
    Tool: Playwright (playwright skill)
    Preconditions: HTTP server running on localhost:8080
    Steps:
      1. Navigate to: http://localhost:8080
      2. Capture console errors during page load
      3. Assert: Zero console errors (warnings OK)
      4. Assert: Page title or logo visible
      5. Screenshot: .sisyphus/evidence/task-11-loaded.png
    Expected Result: Clean page load
    Evidence: .sisyphus/evidence/task-11-loaded.png

  Scenario: All sections present and visible after scroll
    Tool: Playwright (playwright skill)
    Steps:
      1. Navigate to: http://localhost:8080
      2. Scroll to bottom of page slowly (triggering AOS)
      3. Assert: section.main_visual exists
      4. Assert: section.mc_1 exists
      5. Assert: section.mc_2 exists
      6. Assert: section.mc_4 exists
      7. Assert: section.mc_5 exists
      8. Assert: section.mc_6 exists
      9. Assert: section.mc_7 exists
      10. Assert: section.mc_8 exists
      11. Assert: #footer exists
      12. Full-page screenshot: .sisyphus/evidence/task-11-fullpage.png
    Expected Result: All sections rendered
    Evidence: .sisyphus/evidence/task-11-fullpage.png

  Scenario: Swipers initialized
    Tool: Playwright (playwright skill)
    Steps:
      1. Assert: document.querySelectorAll('.swiper-initialized').length >= 3
      2. Assert: .swiper-slide elements exist within each swiper
    Expected Result: Swiper carousels functional
    Evidence: Console output captured

  Scenario: No broken images
    Tool: Playwright (playwright skill)
    Steps:
      1. Run: document.querySelectorAll('img').forEach(img => { if(!img.complete || img.naturalHeight===0) console.error('BROKEN:', img.src) })
      2. Assert: No "BROKEN:" errors logged
    Expected Result: All images load successfully
    Evidence: Console output captured
  ```

  **Commit**: YES
  - Message: `fix(integration): merge all sections, fix visual bugs, verify CSS/JS integration`
  - Files: `index.html`, potentially `css/` fixes
  - Pre-commit: Playwright full-page check

---

### TASK 12: Phase 2.5 — Interactive Effects Verification

- [x] 12. Phase 2.5 — Verify ALL Interactive Effects with Playwright

  **What to do**:
  Using the effect mapping from Task 4, systematically verify EVERY interactive effect:

  - **Header Scroll** (E01): Scroll down → header gets `.on` class → background turns white
  - **Header Dropdown** (E02): Hover over nav item → `.depth2` submenu appears
  - **Sidebar Toggle** (E03): Click hamburger → sidebar slides in → click close → slides out
  - **Floating Button Click** (E04): Click phone button → `#phonePopup` opens
  - **Typewriter** (E05): Hero text types out character by character
  - **Swiper Navigation** (E06-E09): Click next/prev → slides change for all 4 Swipers
  - **Swiper Autoplay** (E10-E13): Wait → slides auto-advance
  - **AOS Scroll Animations** (E14): Scroll to each section → elements fade in
  - **Accordion Toggle** (E15): Click Q&A item → expands/collapses
  - **Hover Effects** (E16): Hover on news cards, lawyer cards, buttons → visual changes
  - **Floating Form** (E17): Form fields fillable, submit button clickable
  - **Modal Close** (E18): Open modal → click X → modal closes

  For EACH effect:
  1. Automate the trigger in Playwright
  2. Assert the expected result
  3. Take before/after screenshots
  4. If broken, FIX the JS/CSS and re-test

  **Must NOT do**:
  - Do NOT skip any effect — ALL must be verified
  - Do NOT mark as "works" without Playwright evidence
  - Do NOT add effects that don't exist in the original

  **Recommended Agent Profile**:
  - **Category**: `deep`
    - Reason: Systematic verification of 18+ interactive effects, debugging, fixing
  - **Skills**: [`playwright`, `frontend-ui-ux`, `systematic-debugging`]
    - `playwright`: Automated interaction testing (click, hover, scroll, wait)
    - `frontend-ui-ux`: Fix any broken effects
    - `systematic-debugging`: Methodical effect-by-effect verification

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3 — Sequential
  - **Blocks**: Task 13
  - **Blocked By**: Task 11

  **References**:

  **Pattern References**:
  - `.sisyphus/drafts/effect-mapping.md` — Complete effect list with triggers and expected results
  - All JS files in `js/` — Effect implementation code
  - All CSS files in `css/` — Transition/animation definitions

  **Acceptance Criteria**:
  - [x] All 18+ effects tested via Playwright
  - [x] Before/after screenshots for each effect in `.sisyphus/evidence/`
  - [x] Zero broken effects (all fixed if initially broken)
  - [x] Effect verification report created

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Header scroll color change works
    Tool: Playwright (playwright skill)
    Preconditions: Server running on localhost:8080
    Steps:
      1. Navigate to: http://localhost:8080
      2. Screenshot: .sisyphus/evidence/task-12-header-before-scroll.png
      3. Assert: #header does NOT have class "on"
      4. Scroll down: 200px
      5. Wait: 500ms for transition
      6. Assert: #header has class "on"
      7. Assert: #header background-color is white/near-white
      8. Screenshot: .sisyphus/evidence/task-12-header-after-scroll.png
    Expected Result: Header transitions from transparent to white
    Evidence: Before/after screenshots

  Scenario: News Swiper navigates
    Tool: Playwright (playwright skill)
    Steps:
      1. Scroll to: section.mc_1
      2. Note: current active slide index
      3. Click: .mc_1 .swiper-button-next
      4. Wait: 500ms for transition
      5. Assert: Active slide index changed
      6. Screenshot: .sisyphus/evidence/task-12-swiper-nav.png
    Expected Result: Swiper advances to next slide
    Evidence: .sisyphus/evidence/task-12-swiper-nav.png

  Scenario: Accordion Q&A toggles
    Tool: Playwright (playwright skill)
    Steps:
      1. Scroll to: section.mc_7
      2. Assert: All answer panels collapsed
      3. Click: First Q&A item title
      4. Wait: 300ms for animation
      5. Assert: First answer panel visible
      6. Click: First Q&A item title again
      7. Wait: 300ms
      8. Assert: First answer panel collapsed
      9. Screenshot: .sisyphus/evidence/task-12-accordion.png
    Expected Result: Accordion expands and collapses
    Evidence: .sisyphus/evidence/task-12-accordion.png

  Scenario: Phone popup modal opens and closes
    Tool: Playwright (playwright skill)
    Steps:
      1. Assert: #phonePopup not visible
      2. Click: .float_btns phone button (or any trigger that opens it)
      3. Wait: #phonePopup visible (timeout: 3s)
      4. Assert: #phonePopup is visible
      5. Click: Close button within #phonePopup
      6. Wait: #phonePopup not visible (timeout: 3s)
      7. Assert: #phonePopup is hidden again
      8. Screenshot: .sisyphus/evidence/task-12-phone-modal.png
    Expected Result: Modal opens on trigger, closes on X
    Evidence: .sisyphus/evidence/task-12-phone-modal.png

  Scenario: AOS animations trigger on scroll
    Tool: Playwright (playwright skill)
    Steps:
      1. Navigate to: http://localhost:8080 (fresh load)
      2. Assert: [data-aos] elements do NOT have class "aos-animate"
      3. Scroll to: first [data-aos] element
      4. Wait: 600ms
      5. Assert: Element now has class "aos-animate"
      6. Screenshot: .sisyphus/evidence/task-12-aos.png
    Expected Result: AOS classes applied after scroll
    Evidence: .sisyphus/evidence/task-12-aos.png
  ```

  **Commit**: YES
  - Message: `fix(effects): verify and fix all interactive effects (swipers, accordion, modals, AOS)`
  - Files: `index.html`, `js/inline-scripts.js` (if fixes needed)

---

### TASK 13: Phase 3 — NumPy Pixel Verification (Hero Excluded) + Gemini Visual Review (FINAL)

- [x] 13. Phase 3 — NumPy Pixel Verification (Hero Section Masked) + Gemini 3.0 Pro Hero Visual Review

  **⚠️ CRITICAL: Hero Section = Video Background → NumPy Impossible**
  The hero section (`section.main_visual`) uses a `<video>` background that plays different frames
  on every capture. NumPy pixel comparison will ALWAYS fail on this region regardless of replication
  quality. Therefore:
  - **NumPy**: Compare everything EXCEPT the hero section (mask hero region to solid color)
  - **Gemini 3.0 Pro**: Visually verify the hero section layout, overlay text, search bar, CTA buttons

  **What to do**:

  **Part A: NumPy Pixel Comparison (Hero Section Masked)**

  - **Step 1**: Determine hero section pixel boundaries:
    - Use Playwright to measure `section.main_visual` bounding box on both pages
    - Record: `hero_top_y`, `hero_bottom_y` (in pixels from top of full-page screenshot)
    - Example: hero is 0px to 1080px (full viewport height)

  - **Step 2**: Capture baseline screenshot of ORIGINAL site at 1920×1080:
    - Use Playwright to navigate to `https://web.donginlaw.co.kr/`
    - Scroll full page to trigger ALL AOS animations
    - Wait 3 seconds for all animations to stabilize
    - Take full-page screenshot → `.sisyphus/evidence/phase3-original.png`

  - **Step 3**: Capture replica screenshot at 1920×1080:
    - Navigate to `http://localhost:8080`
    - Scroll full page to trigger AOS
    - Wait 3 seconds
    - Take full-page screenshot → `.sisyphus/evidence/phase3-replica.png`

  - **Step 4**: Run NumPy comparison WITH HERO MASKING:
    ```python
    python3 -c "
    import numpy as np
    from PIL import Image

    original = np.array(Image.open('.sisyphus/evidence/phase3-original.png').convert('RGB'))
    replica = np.array(Image.open('.sisyphus/evidence/phase3-replica.png').convert('RGB'))

    # Resize to same dimensions if needed
    min_h = min(original.shape[0], replica.shape[0])
    min_w = min(original.shape[1], replica.shape[1])
    original = original[:min_h, :min_w]
    replica = replica[:min_h, :min_w]

    # ===== MASK HERO SECTION (video background area) =====
    # Hero = section.main_visual, typically 0 to ~1080px from top
    # Adjust hero_bottom_y based on actual Playwright measurement
    hero_top_y = 0
    hero_bottom_y = 1080  # UPDATE THIS from Playwright measurement
    MASK_COLOR = [128, 128, 128]  # Neutral gray

    # Set both images' hero region to identical solid color
    original[hero_top_y:hero_bottom_y, :] = MASK_COLOR
    replica[hero_top_y:hero_bottom_y, :] = MASK_COLOR
    print(f'Hero section masked: rows {hero_top_y} to {hero_bottom_y} (video area excluded)')

    # Per-pixel comparison (threshold: 30 per channel = similar enough)
    diff = np.abs(original.astype(int) - replica.astype(int))
    similar_pixels = np.all(diff < 30, axis=2)
    similarity = np.mean(similar_pixels) * 100
    print(f'Pixel similarity (hero masked): {similarity:.2f}%')

    # Generate diff heatmap (hero region will be black = no diff)
    diff_img = Image.fromarray((diff.mean(axis=2) * 2).clip(0, 255).astype(np.uint8))
    diff_img.save('.sisyphus/evidence/phase3-diff-heatmap.png')
    print('Diff heatmap saved to .sisyphus/evidence/phase3-diff-heatmap.png')
    "
    ```

  - **Step 5**: If similarity < 95%:
    1. Analyze diff heatmap to identify problem areas (hero will be black = masked, ignore it)
    2. Fix CSS/HTML in the replica (non-hero sections only)
    3. Re-capture replica screenshot
    4. Re-run comparison
    5. **LOOP until ≥ 95%** (max 20 iterations for patience at 98%+)

  - **Step 6**: If similarity ≥ 95%, document final score

  **Part B: Gemini 3.0 Pro Visual Review (Hero Section Only)**

  - **Step 7**: Capture HERO-ONLY screenshots of both pages:
    - Use Playwright to capture ONLY `section.main_visual` element screenshot (not full page):
      - Original: `.sisyphus/evidence/phase3-hero-original.png`
      - Replica: `.sisyphus/evidence/phase3-hero-replica.png`
    - Both captured at same viewport width (1920px)
    - For the original, pause the video first if possible, or just capture as-is

  - **Step 8**: Call Gemini 3.0 Pro for visual comparison via `multimodal-looker` agent:
    - The `multimodal-looker` agent is configured in Oh-My-OpenCode with model `google/antigravity-gemini-3-pro` (supports image input)
    - Invoke via `task()` with `subagent_type="multimodal-looker"`:
    ```
    task(
      subagent_type="multimodal-looker",
      load_skills=["playwright"],
      prompt="Hero section visual comparison for pixel-perfect replication verification.

      Compare these two hero section screenshots:
      1. ORIGINAL: .sisyphus/evidence/phase3-hero-original.png
      2. REPLICA: .sisyphus/evidence/phase3-hero-replica.png

      Use the look_at tool to analyze BOTH images.

      COMPARE these specific elements:
      - Overall layout structure and positioning
      - Text positioning (main heading, sub-heading, typewriter text area)
      - Search bar: position, width, height, placeholder text
      - CTA buttons: AI consultation button and phone button positions, sizes, colors
      - Dark overlay opacity level over video background
      - Font sizes and spacing between elements
      - Scroll-down indicator position at bottom
      - Logo/nav area if visible at top

      IGNORE:
      - Video frame content differences (the video plays different frames — this is EXPECTED)
      - Typewriter animation state differences (text may be at different typing points)

      OUTPUT FORMAT:
      - Overall Match Score: [0-100%]
      - Per-element assessment: MATCH / MISMATCH with specific details
      - If any MISMATCH: exact CSS property and value to fix
      - Final verdict: PASS (≥90% layout match) or FAIL (with fix list)

      Context: Replicating https://web.donginlaw.co.kr/ main hero section (section.main_visual).
      The hero has: video background with dark overlay, typewriter text animation, search input bar,
      AI consultation + phone CTA buttons, scroll-down indicator.",
      run_in_background=false
    )
    ```

  - **Step 9**: Evaluate Gemini's response:
    - If Gemini identifies layout/positioning issues in hero → Fix them
    - If Gemini confirms hero layout matches (ignoring video frames) → PASS
    - Re-capture and re-check if fixes were needed

  - **Step 10**: Also use `look_at` tool directly for a second opinion:
    ```
    look_at({
      file_path: ".sisyphus/evidence/phase3-hero-original.png",
      goal: "Describe the exact layout of this hero section: position of text, search bar, buttons, overlay darkness, font sizes, spacing"
    })
    look_at({
      file_path: ".sisyphus/evidence/phase3-hero-replica.png",
      goal: "Describe the exact layout of this hero section: position of text, search bar, buttons, overlay darkness, font sizes, spacing. Compare against the original description."
    })
    ```

  **Must NOT do**:
  - Do NOT include the hero section (video area) in NumPy pixel comparison — it will always fail
  - Do NOT declare NumPy success below 95% for the NON-HERO regions
  - Do NOT modify the original screenshot to inflate scores
  - Do NOT skip Gemini hero verification — it replaces NumPy for the video section
  - Do NOT give up before 20 iterations at 98%+ (patience threshold for non-hero regions)
  - Do NOT count video frame differences as failures in Gemini review

  **Recommended Agent Profile**:
  - **Category**: `deep`
    - Reason: Iterative visual debugging loop + AI model visual comparison for hero
  - **Skills**: [`playwright`, `frontend-ui-ux`, `systematic-debugging`]
    - `playwright`: Screenshot capture (full-page + element-specific for hero)
    - `frontend-ui-ux`: CSS fixes to improve pixel similarity
    - `systematic-debugging`: Diff heatmap analysis, systematic fix approach
  - **Hero Visual Review**: Uses `task(subagent_type="multimodal-looker")` internally to invoke Gemini 3.0 Pro (`google/antigravity-gemini-3-pro`) for hero section comparison — this agent supports image input modality

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3 — Sequential (final task)
  - **Blocks**: None (final task)
  - **Blocked By**: Task 12

  **References**:

  **Pattern References**:
  - `~/.claude/skills/replication/scripts/main.py` — Replication skill comparison tool
  - `.sisyphus/evidence/original-fullpage.png` — Phase 0 baseline (backup reference)
  - All CSS files in `css/` — Primary fix targets for pixel differences

  **External References**:
  - Original site: `https://web.donginlaw.co.kr/` — Live reference for fresh screenshots
  - NumPy docs: Array comparison operations
  - Pillow docs: Image loading and conversion
  - Gemini 3.0 Pro via `multimodal-looker` agent (`google/antigravity-gemini-3-pro`): Visual analysis model for hero section comparison
  - Oh-My-OpenCode config: `~/.config/opencode/oh-my-opencode.json` — Agent definitions (multimodal-looker confirmed)

  **Acceptance Criteria**:
  - [x] `.sisyphus/evidence/phase3-original.png` — Fresh original screenshot exists
  - [x] `.sisyphus/evidence/phase3-replica.png` — Final replica screenshot exists
  - [x] `.sisyphus/evidence/phase3-diff-heatmap.png` — Diff visualization exists (hero masked as black)
  - [x] `.sisyphus/evidence/phase3-hero-original.png` — Hero-only screenshot of original
  - [x] `.sisyphus/evidence/phase3-hero-replica.png` — Hero-only screenshot of replica
  - [x] NumPy similarity score ≥ 95% for NON-HERO regions (printed and documented)
  - [x] Gemini 3.0 Pro confirms hero layout matches (ignoring video frame differences)
  - [x] Final scores recorded in evidence report

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: NumPy pixel comparison reaches target (hero masked)
    Tool: Bash
    Preconditions: Both screenshots captured, numpy+Pillow installed
    Steps:
      1. Run: NumPy comparison script with hero masking (as shown above)
      2. Assert: Output contains "Hero section masked"
      3. Assert: Output contains "Pixel similarity (hero masked):"
      4. Assert: Similarity value >= 95.00
      5. Assert: .sisyphus/evidence/phase3-diff-heatmap.png created
      6. Assert: Hero region in heatmap is black (no diff, masked)
    Expected Result: Similarity >= 95% for non-hero regions
    Evidence: Terminal output with score + diff heatmap image

  Scenario: Hero section visually matches via Gemini review
    Tool: vibe-check-mcp (Gemini 3.0 Pro override)
    Preconditions: Hero-only screenshots captured for both original and replica
    Steps:
      1. Capture: section.main_visual element screenshot from original
      2. Capture: section.main_visual element screenshot from replica
      3. Submit both to Gemini 3.0 Pro for visual comparison
      4. Assert: Gemini confirms layout matches (text position, search bar, CTAs, overlay)
      5. Assert: Gemini does NOT flag video frame differences as failures
    Expected Result: Hero layout confirmed as matching (structure, not video frames)
    Evidence: Gemini response text + hero screenshots

  Scenario: Screenshots are valid and comparable
    Tool: Bash
    Steps:
      1. Run: python3 -c "from PIL import Image; img=Image.open('.sisyphus/evidence/phase3-original.png'); print(img.size)"
      2. Assert: Width >= 1920
      3. Run: python3 -c "from PIL import Image; img=Image.open('.sisyphus/evidence/phase3-replica.png'); print(img.size)"
      4. Assert: Width >= 1920
      5. Run: python3 -c "from PIL import Image; img=Image.open('.sisyphus/evidence/phase3-hero-original.png'); print(img.size)"
      6. Assert: Hero screenshot exists and has reasonable dimensions
    Expected Result: All screenshots at target resolution
    Evidence: Terminal output with dimensions

  Scenario: Iterative improvement tracked
    Tool: Bash
    Steps:
      1. Run: ls .sisyphus/evidence/phase3-replica*.png
      2. Check: Multiple iterations saved if needed
    Expected Result: Iteration history preserved
    Evidence: File listing
  ```

  **Commit**: YES (final)
  - Message: `chore(verify): achieve NumPy pixel similarity ≥ 95% (hero masked) + Gemini hero review — replication complete`
  - Files: All final fixes
  - Pre-commit: NumPy test passes ≥ 95% (non-hero) + Gemini hero PASS

---

## Commit Strategy

| After Task | Message | Key Files | Verification |
|------------|---------|-----------|--------------|
| 5 | `feat(layout): implement header, sidebar, and floating UI elements` | index.html | Playwright visual check |
| 6 | `feat(hero): implement main visual section with video, typewriter, and search` | index.html | Playwright screenshot |
| 7 | `feat(content): implement news, expert group, and new lawyers sections` | index.html, img/ | Playwright section screenshots |
| 8 | `feat(content): implement mission, recruitment, and consulting sections` | index.html, img/ | Playwright section screenshots |
| 9 | `feat(content): implement Q&A accordion and YouTube insight sections` | index.html, img/ | Playwright interaction test |
| 10 | `feat(layout): implement modals, footer, and script loading` | index.html | Playwright footer + modal check |
| 11 | `fix(integration): merge all sections, fix visual bugs, verify CSS/JS integration` | index.html, css/ | Zero JS errors, all Swipers init |
| 12 | `fix(effects): verify and fix all interactive effects` | index.html, js/ | All 18 effects pass |
| 13 | `chore(verify): achieve NumPy pixel similarity ≥ 95%` | All files | NumPy score ≥ 95% |

---

## Success Criteria

### Verification Commands
```bash
# Serve locally
cd /Users/njmac/Coding/dongin && python3 -m http.server 8080

# Check all files exist
ls index.html css/*.css js/*.js fonts/ img/main_video.mp4

# Count images downloaded
find img/ -type f | wc -l  # Expected: >= 20

# Run NumPy comparison
python3 -c "
import numpy as np
from PIL import Image
o = np.array(Image.open('.sisyphus/evidence/phase3-original.png').convert('RGB'))
r = np.array(Image.open('.sisyphus/evidence/phase3-replica.png').convert('RGB'))
h, w = min(o.shape[0],r.shape[0]), min(o.shape[1],r.shape[1])
s = np.mean(np.all(np.abs(o[:h,:w].astype(int)-r[:h,:w].astype(int))<30, axis=2))*100
print(f'Similarity: {s:.2f}%')  # Expected: >= 95.00%
"
```

### Final Checklist
- [x] `index.html` renders complete page at `http://localhost:8080`
- [x] All 16 sections present and visible
- [x] All 4 Swipers functional (slide, autoplay, navigate)
- [x] Header scroll behavior works
- [x] AOS animations trigger on scroll
- [x] Hero typewriter effect plays
- [x] Accordion Q&A works
- [x] Modals open and close
- [x] Floating buttons and form functional
- [x] Video background plays
- [x] Pretendard font renders correctly
- [x] Zero broken images
- [x] Zero JS console errors
- [x] NumPy pixel similarity ≥ 95%
- [x] All files inside `/Users/njmac/Coding/dongin/` only
