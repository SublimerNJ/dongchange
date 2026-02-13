# Donginlaw 세부 페이지 전체 Pixel-Perfect 복제

## TL;DR

> **Quick Summary**: 법무법인 동인 홈페이지(https://web.donginlaw.co.kr/)의 모든 세부 페이지를 메인 페이지(97.98% NumPy)와 동일한 수준으로 pixel-perfect 복제. 20개 정적/목록 페이지 + 20개 구성원 상세 + 전체 업무분야 상세(~70-80개) + 전체 뉴스/활동 상세(수량 런타임 결정).
>
> **Deliverables**:
> - 20 static/list sub-pages (about, division, member, news, benefit, recruit, term, sitemap)
> - 20 member detail pages (member_2_XXXX.html)
> - All division detail pages (~70-80, discovered from division_1.html)
> - All news/benefit detail pages (count discovered from list pages)
> - All sub-page assets (images, CSS, member photos)
> - NumPy verification evidence for every page (95%+)
>
> **Estimated Effort**: XL (estimated 130-200+ pages total)
> **Parallel Execution**: YES — 5 waves
> **Critical Path**: Task 0 (Assets) → Task 1 (Template) → Tasks 2-6 (Pages) → Tasks 7-9 (Details) → Task 10 (Verification)

---

## Context

### Original Request
법무법인 동인 홈페이지를 /replication 스킬로 똑같이 베끼기. 메인 페이지는 완성(97.98% NumPy). 세부 페이지를 전부 다 해야 됨. 구성원은 너무 많으니 20명만.

### Interview Summary
**Key Decisions**:
- 메인 페이지: COMPLETED at 97.98% NumPy similarity
- 구성원 상세: 20명만 (사용자 제한)
- 언어: 한국어만 (영문 버전 제외)
- 기술 스택: vanilla HTML/CSS/JS + jQuery (NO frameworks)
- 상세 페이지 범위: "전부 다" — 업무분야/뉴스 상세 포함
- search_result.html: 동적 검색이므로 EXCLUDED

**Research Findings**:
- Sub-pages share identical template: `<sub id="SECTION" class="PAGE_NAME">` wrapper
- Common elements: header, sidebar, float_btns, float_form, footer, term_pop (~400 lines shared)
- Per-page customizations: g5_bo_table value, language URLs, ret field, breadcrumb content, sub wrapper
- css/main.css (154KB) already contains sub-page styles (.about_1, .member_1, .division_1, etc.)
- Member photos hosted at `https://web.donginlaw.co.kr/data/file/31/` with hashed filenames
- member_2.html loads additional CSS: `skin/latest/member/style.css`
- Option_btns CSS and share() function are inlined on every sub-page

### Metis Review
**Identified Gaps** (addressed):
- member_1.html scope: Applied default — show ALL ~200+ members for NumPy accuracy, only 20 have working detail links
- Division detail count: Applied default — ALL pages discovered from division_1.html (user said "다")
- News detail count: Applied default — ALL pages discovered from news list pages (user said "다")
- about_5.html map: Applied default — static screenshot image replacement (no API key)
- PDF/Print buttons: Applied default — visual only, non-functional
- Template strategy: Applied default — full HTML duplication (matches original Gnuboard output)
- File naming: Applied default — flat naming (member_2_1161.html)
- Pagination: Applied default — page 1 only on list pages

---

## Work Objectives

### Core Objective
Every sub-page of https://web.donginlaw.co.kr/ must be a pixel-perfect static HTML replica achieving ≥95% NumPy similarity against the original. All content must be real (scraped from live site), all assets local, all internal links functional.

### Concrete Deliverables
- 20 static/list HTML pages in project root
- 20 member detail HTML pages (member_2_XXXX.html)
- ~70-80 division detail HTML pages (division_1_1_XXXX.html)
- All news/benefit detail HTML pages (news_X_1_XXXX.html, benefit_2_1_XXXX.html)
- All sub-page images downloaded to `img/`
- All member photos downloaded to `data/file/31/`
- Additional CSS file(s) in `css/` or `skin/`
- NumPy evidence screenshots in `.sisyphus/evidence/`

### Definition of Done
- [x] Every sub-page renders at ≥95% NumPy similarity vs original
- [x] All images load locally (zero 404s)
- [x] All internal links between sub-pages resolve to actual files
- [x] Header/sidebar/footer/float elements identical across all pages
- [x] CSS/JS chain matches original (no extra, no missing)
- [x] No placeholder/lorem ipsum text anywhere

### Must Have
- Real content from original site (names, dates, descriptions, photos)
- Correct CSS load order: default.css → reset.css → common.css → main.css + page-specific skin CSS
- AOS scroll animations triggering on scroll
- Breadcrumb with correct dropdown navigation per page
- Sub_util toolbar (PDF, Print, Share buttons — visual only)
- Kakao SDK script tag (share button visual)
- Responsive meta viewport tag
- Correct `<title>` per page

### Must NOT Have (Guardrails)
- NO React, Vue, or any framework — vanilla HTML/CSS/JS only
- NO placeholder or lorem ipsum text — use actual content from original
- NO functional server-side features (PDF generation, form submission, search, reCAPTCHA)
- NO English version (?lang=en pages)
- NO CSS/JS not present in the original site
- NO member detail pages beyond the 20 specified
- NO search_result.html (excluded — dynamic)
- NO modifications to existing main page CSS/JS (additive only)

---

## Verification Strategy

> **UNIVERSAL RULE: ZERO HUMAN INTERVENTION**
>
> ALL tasks in this plan MUST be verifiable WITHOUT any human action.
> ALL verification is executed by the agent using Playwright + NumPy.

### Test Decision
- **Infrastructure exists**: NO (no unit test framework)
- **Automated tests**: NO — verification is NumPy pixel comparison + Playwright
- **Framework**: N/A — replication verification via screenshot comparison

### NumPy Verification Process (per page)

```
1. Start local HTTP server: python3 -m http.server 8080
2. Playwright: Navigate to original page, scroll full page (trigger AOS), wait 2s, full-page screenshot at 1920×1080
3. Playwright: Navigate to local replica (http://localhost:8080/PAGE.html), scroll full page (trigger AOS), wait 2s, full-page screenshot at 1920×1080
4. NumPy: Compare screenshots → assert similarity >= 0.95
5. If <0.95: identify pixel diff regions, fix CSS/HTML, re-verify
6. Save evidence to .sisyphus/evidence/
```

### Agent-Executed QA Scenarios (MANDATORY — ALL tasks)

**Verification Tool by Deliverable Type:**

| Type | Tool | How Agent Verifies |
|------|------|-------------------|
| HTML pages | Playwright + NumPy | Screenshot original vs replica, compute similarity |
| Image assets | Bash (ls/find) | Verify all referenced images exist locally |
| CSS completeness | Bash (grep) | Verify main.css contains sub-page class selectors |
| Internal links | Bash (script) | Extract all hrefs, verify target files exist |
| Template consistency | Playwright | Extract header/footer HTML from multiple pages, compare |

**Universal NumPy QA Scenario Format:**
```
Scenario: {page_name} renders identically to original
  Tool: Playwright (playwright skill) + Bash (NumPy)
  Preconditions: Local HTTP server running on localhost:8080
  Steps:
    1. Playwright: goto https://web.donginlaw.co.kr/{page_name}
    2. Playwright: scroll to bottom (trigger AOS), wait 2000ms
    3. Playwright: screenshot full-page at 1920x1080 → .sisyphus/evidence/original-{page_name}.png
    4. Playwright: goto http://localhost:8080/{local_file}
    5. Playwright: scroll to bottom (trigger AOS), wait 2000ms
    6. Playwright: screenshot full-page at 1920x1080 → .sisyphus/evidence/replica-{page_name}.png
    7. Bash: python3 NumPy comparison script
    8. Assert: similarity >= 0.95
  Expected Result: NumPy similarity ≥ 0.95
  Evidence: .sisyphus/evidence/{page_name}-comparison.png
```

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 0 (Start Immediately):
└── Task 0: Asset Collection & Infrastructure Verification

Wave 1 (After Wave 0):
└── Task 1: Sub-page Template Construction

Wave 2 (After Wave 1 — 5 tasks in parallel):
├── Task 2: About Section (5 pages)
├── Task 3: Utility/Static Pages (7 pages)
├── Task 4: Division List Pages (2 pages)
├── Task 5: News List Pages (5 pages)
└── Task 6: Member List Page (1 page)

Wave 3 (After Wave 2 — 3 tasks in parallel):
├── Task 7: Member Detail Pages (20 pages)
├── Task 8: Division Detail Pages (~70-80 pages)
└── Task 9: News & Benefit Detail Pages (all)

Wave 4 (After Wave 3):
└── Task 10: Link Patching & Final NumPy Verification Sweep
```

### Dependency Matrix

| Task | Depends On | Blocks | Can Parallelize With |
|------|------------|--------|---------------------|
| 0 | None | 1 | None |
| 1 | 0 | 2,3,4,5,6 | None |
| 2 | 1 | 10 | 3,4,5,6 |
| 3 | 1 | 10 | 2,4,5,6 |
| 4 | 1 | 8,10 | 2,3,5,6 |
| 5 | 1 | 9,10 | 2,3,4,6 |
| 6 | 1 | 7,10 | 2,3,4,5 |
| 7 | 6 | 10 | 8,9 |
| 8 | 4 | 10 | 7,9 |
| 9 | 5 | 10 | 7,8 |
| 10 | 2-9 | None | None (final) |

### Agent Dispatch Summary

| Wave | Tasks | Recommended Dispatch |
|------|-------|---------------------|
| 0 | 0 | `task(category="unspecified-high", load_skills=["replication", "playwright-skill"])` |
| 1 | 1 | `task(category="unspecified-high", load_skills=["replication"])` |
| 2 | 2,3,4,5,6 | Dispatch 5 parallel agents |
| 3 | 7,8,9 | Dispatch 3 parallel agents |
| 4 | 10 | `task(category="unspecified-high", load_skills=["replication", "playwright-skill"])` |

---

## TODOs

- [x] 0. Asset Collection & Infrastructure Verification

  **What to do**:
  - Fetch the HTML of each of the 20 sub-pages from the live site (use webfetch or Playwright)
  - From each fetched HTML, extract all `<img src="...">` references pointing to `/img/` paths
  - Batch download ALL discovered sub-page images to local `img/` directory (breadcrumb icons, sub_util icons, sub_banner images, about section images, share icons, option_btns icons, etc.)
  - Download ALL member listing photos from `https://web.donginlaw.co.kr/data/file/31/` — scrape member_1.html to get every `<img src="...thumb-...">` URL (~200+ photos needed for member_1.html visual accuracy)
  - Download `https://web.donginlaw.co.kr/skin/latest/member/style.css` → save to `skin/latest/member/style.css` (needed for member_2 detail pages)
  - Check for other page-specific skin CSS files by inspecting each sub-page's `<link>` and `<style>` tags
  - Verify `css/main.css` contains sub-page classes: grep for `.about_1`, `.member_1`, `.member_2`, `.division_1`, `.news_1`, `.benefit_1`, `.recruit_1`, `.sub_banner`, `.breadcrumb`
  - Verify `js/main.js` contains sub-page interaction handlers: accordion toggle, breadcrumb dropdown, member sort handler
  - If any CSS/JS is missing sub-page styles/scripts, re-download the complete file from the live site
  - Set up verification infrastructure: confirm `python3 -m http.server 8080` works from project root
  - Download division banner/background images from `data/file/21_type/` (used by division accordion JS)

  **Must NOT do**:
  - Do NOT modify existing CSS/JS files that work for the main page
  - Do NOT download English-version assets
  - Do NOT download search_result.html assets

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Complex asset discovery across 20+ pages with batch downloading
  - **Skills**: [`replication`, `playwright-skill`]
    - `replication`: Provides asset collection workflow (Phase 1)
    - `playwright-skill`: Navigate live pages, extract image URLs, screenshot for verification

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 0 (solo prerequisite)
  - **Blocks**: Task 1
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `index.html` — Existing main page HTML shows the complete CSS/JS chain and header/footer structure that sub-pages will share
  - `css/main.css` — 154KB, must verify it contains sub-page class selectors

  **External References**:
  - Original site: `https://web.donginlaw.co.kr/about_1.html` through `sitemap.html`
  - Member photos: `https://web.donginlaw.co.kr/data/file/31/`
  - Division images: `https://web.donginlaw.co.kr/data/file/21_type/`
  - Member skin CSS: `https://web.donginlaw.co.kr/skin/latest/member/style.css`

  **Acceptance Criteria**:

  ```
  Scenario: All sub-page images downloaded successfully
    Tool: Bash
    Steps:
      1. Count images referenced across all 20 sub-page HTMLs
      2. ls img/ | wc -l → Assert count matches or exceeds discovered images
      3. find img/ -name "*.png" -o -name "*.jpg" -o -name "*.svg" -o -name "*.gif" | wc -l
      4. Assert: Zero missing images (all src references in downloaded HTMLs resolve locally)
    Expected Result: All sub-page images present in img/
    Evidence: .sisyphus/evidence/task-0-asset-inventory.txt

  Scenario: Member photos downloaded for full listing
    Tool: Bash
    Steps:
      1. Count member entries in scraped member_1.html
      2. ls data/file/31/ | wc -l
      3. Assert: Photo count ≥ member entry count
    Expected Result: ~200+ member photos in data/file/31/
    Evidence: .sisyphus/evidence/task-0-member-photos.txt

  Scenario: CSS/JS verified for sub-page support
    Tool: Bash
    Steps:
      1. grep -c "\.about_1\|\.member_1\|\.division_1\|\.news_1\|\.benefit_1\|\.recruit_1" css/main.css
      2. Assert: count > 0 for each class
      3. ls skin/latest/member/style.css → Assert: file exists
    Expected Result: All sub-page CSS present
    Evidence: .sisyphus/evidence/task-0-css-verify.txt
  ```

  **Commit**: YES
  - Message: `chore: download sub-page assets and verify CSS/JS infrastructure`
  - Files: `img/*, data/file/31/*, skin/*, data/file/21_type/*`
  - Pre-commit: `ls img/ | wc -l && ls data/file/31/ | wc -l`

---

- [x] 1. Sub-page Template Construction

  **What to do**:
  - Fetch `about_1.html` from live site as the canonical template reference (simplest sub-page)
  - Build a sub-page HTML skeleton extracting the shared chrome from `index.html` + live sub-page:
    - `<head>`: Same CSS chain (default → reset → common → main), same meta tags, Pretendard font
    - `<header>`: Identical to index.html header (copy exactly)
    - `<aside id="sidebar">`: Identical to index.html sidebar
    - `<div class="float_btns">`: Identical floating buttons
    - `<div class="float_form">`: Identical contact form
    - `<sub id="SECTION" class="PAGE_CLASS">`: Page-specific wrapper (PLACEHOLDER)
    - `<footer>`: Identical to index.html footer
    - `<div class="term_pop">`: Terms popup
    - JS includes at bottom: jquery, common.js, main.js (NO bxslider for sub-pages)
  - Add Kakao SDK script tag (`https://t1.kakaocdn.net/kakao_js_sdk/...`)
  - Add inline `<style>` for `.option_btns` (extracted from live sub-page HTML — same on every page)
  - Add `share()` function inline script (same on every page)
  - Identify the 5 per-page customization points and mark with clear comments:
    1. `g5_bo_table` JS variable value
    2. Language switcher URLs in header
    3. Float form `ret` hidden field
    4. Breadcrumb HTML content
    5. `<sub>` wrapper id/class and all inner content
  - Build `about_1.html` as the first test page using this template
  - NumPy verify about_1.html at ≥95% to validate the template works

  **Must NOT do**:
  - Do NOT use JS includes/iframes for shared chrome — full HTML duplication per page
  - Do NOT add any CSS/JS not in the original
  - Do NOT change the existing index.html

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Foundation task — template quality determines all subsequent pages
  - **Skills**: [`replication`, `playwright-skill`]
    - `replication`: Provides implementation workflow (Phase 2)
    - `playwright-skill`: Verify template renders correctly via NumPy comparison

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 1 (sequential after Task 0)
  - **Blocks**: Tasks 2, 3, 4, 5, 6
  - **Blocked By**: Task 0

  **References**:

  **Pattern References**:
  - `index.html` — Source for header, sidebar, float_btns, float_form, footer, term_pop HTML
  - `css/main.css` — Sub-page styles (.sub_banner, .breadcrumb, .sub_util, .option_btns)

  **External References**:
  - Live `about_1.html`: `https://web.donginlaw.co.kr/about_1.html` — canonical template reference
  - Live `member_1.html`: `https://web.donginlaw.co.kr/member_1.html` — alternate template for verification

  **Acceptance Criteria**:

  ```
  Scenario: about_1.html (template test page) renders at 95%+ NumPy similarity
    Tool: Playwright + Bash (NumPy)
    Preconditions: python3 -m http.server 8080 running from project root
    Steps:
      1. Playwright: goto https://web.donginlaw.co.kr/about_1.html viewport 1920x1080
      2. Playwright: scrollToBottom(), wait 2000ms (AOS trigger)
      3. Playwright: screenshot fullPage → .sisyphus/evidence/original-about_1.png
      4. Playwright: goto http://localhost:8080/about_1.html viewport 1920x1080
      5. Playwright: scrollToBottom(), wait 2000ms
      6. Playwright: screenshot fullPage → .sisyphus/evidence/replica-about_1.png
      7. Bash: python3 -c "
         import numpy as np; from PIL import Image
         o=np.array(Image.open('.sisyphus/evidence/original-about_1.png').convert('RGB'))
         r=np.array(Image.open('.sisyphus/evidence/replica-about_1.png').convert('RGB'))
         sim=1-np.mean(np.abs(o.astype(float)-r.astype(float)))/255
         print(f'NumPy similarity: {sim:.4f}')
         assert sim>=0.95, f'FAIL: {sim:.4f}<0.95'
         "
      8. Assert: similarity >= 0.95
    Expected Result: about_1.html renders at 95%+ similarity
    Evidence: .sisyphus/evidence/about_1-comparison.png

  Scenario: Template has all 5 customization points clearly marked
    Tool: Bash (grep)
    Steps:
      1. grep -c "g5_bo_table" about_1.html → Assert ≥ 1
      2. grep -c "lang=kr" about_1.html → Assert ≥ 1
      3. grep -c 'name="ret"' about_1.html → Assert ≥ 1
      4. grep -c "breadcrumb" about_1.html → Assert ≥ 1
      5. grep -c '<sub id=' about_1.html → Assert = 1
    Expected: All 5 customization points present
    Evidence: Terminal output captured
  ```

  **Commit**: YES
  - Message: `feat: add sub-page template with about_1.html (95%+ NumPy verified)`
  - Files: `about_1.html`
  - Pre-commit: NumPy verification ≥ 0.95

---

- [x] 2. About Section Pages (about_2 ~ about_5)

  **What to do**:
  - Using the template from Task 1, build remaining 4 About pages:
    - `about_2.html` — 연혁 (history timeline component)
    - `about_3.html` — 법인철학 (corporate philosophy — likely simple content)
    - `about_4.html` — 브로슈어 (brochure — PDF download link, visual only)
    - `about_5.html` — 오시는길 (directions — map area: use static screenshot image instead of embedded map API)
  - For each page: fetch live HTML, extract page-specific content within `<sub>` wrapper
  - Download any page-specific images not already in `img/` (about section images: about_1_sc_*, about_2_*, etc.)
  - Customize the 5 per-page values (g5_bo_table, lang URLs, ret, breadcrumb, sub wrapper)
  - about_5.html special handling: capture a screenshot of the embedded map from the live page and save as a static image in `img/` — replace the `<iframe>` or map div with the screenshot image
  - NumPy verify each page at ≥95%

  **Must NOT do**:
  - Do NOT embed actual map API (requires API key)
  - Do NOT make brochure PDF download functional
  - Do NOT include English content

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: 4 pages with content scraping, image handling, and a map edge case
  - **Skills**: [`replication`, `playwright-skill`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 3, 4, 5, 6)
  - **Blocks**: Task 10
  - **Blocked By**: Task 1

  **References**:
  - `about_1.html` (local) — Template pattern to follow exactly
  - Live: `https://web.donginlaw.co.kr/about_2.html` through `about_5.html`

  **Acceptance Criteria**:
  - [x] about_2.html, about_3.html, about_4.html, about_5.html — all files exist
  - [x] All page-specific images downloaded to img/
  - [x] NumPy ≥ 0.95 for each page (follow Universal NumPy QA Scenario above)
  - [x] about_5.html map area renders as static image (no iframe/API errors)
  - [x] Evidence: .sisyphus/evidence/original-about_X.png + replica-about_X.png for each

  **Commit**: YES
  - Message: `feat: add about section sub-pages (about_2 ~ about_5, 95%+ NumPy)`
  - Files: `about_2.html, about_3.html, about_4.html, about_5.html, img/about_*`

---

- [x] 3. Utility/Static Pages (benefit, recruit, term, sitemap — 7 pages)

  **What to do**:
  - Build 7 pages using the same template pattern from Task 1:
    - `benefit_1.html` — 사회공헌 인사말 (CSR greeting)
    - `benefit_2.html` — 활동보고 (activity reports — list page)
    - `recruit_1.html` — 인재상 (talent profile)
    - `recruit_2.html` — 영입안내 (recruitment guide)
    - `term_1.html` — 면책공고 (disclaimer)
    - `term_2.html` — 웹접근성안내 (web accessibility)
    - `sitemap.html` — 사이트맵 (full sitemap with links)
  - For each: fetch live HTML, extract `<sub>` content, download page-specific images
  - Customize 5 per-page values
  - sitemap.html: ensure all links point to local files (rewrite hrefs to local filenames)
  - NumPy verify each page at ≥95%

  **Must NOT do**:
  - Do NOT make any forms functional
  - Do NOT link to pages outside the defined scope

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: [`replication`, `playwright-skill`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 2, 4, 5, 6)
  - **Blocks**: Task 10
  - **Blocked By**: Task 1

  **References**:
  - `about_1.html` (local) — Template pattern
  - Live: `https://web.donginlaw.co.kr/benefit_1.html` through `sitemap.html`

  **Acceptance Criteria**:
  - [x] All 7 HTML files exist in project root
  - [x] NumPy ≥ 0.95 for each page
  - [x] sitemap.html links point to local files (not live URLs)
  - [x] Evidence saved for each page

  **Commit**: YES
  - Message: `feat: add benefit, recruit, term, sitemap sub-pages (95%+ NumPy)`
  - Files: `benefit_1.html, benefit_2.html, recruit_1.html, recruit_2.html, term_1.html, term_2.html, sitemap.html`

---

- [x] 4. Division Section List Pages (division_1, division_2 — 2 pages)

  **What to do**:
  - Build 2 division list pages:
    - `division_1.html` — 업무분야 분야별 (accordion list with 70+ practice areas)
      - Complex: accordion/toggle interaction, background images loaded via `rel` attribute + JS
      - Each accordion item links to `division_1_1.html?idx=XX` — rewrite to local `division_1_1_XX.html`
      - Download division background images from `data/file/21_type/`
    - `division_2.html` — 업무분야 전담팀 (team cards/list)
      - Each team card links to `division_2_1.html?idx=XX` → local `division_2_1_XX.html`
  - Verify accordion toggle works (JS in main.js)
  - Extract ALL division detail page URLs for Task 8 (save to `.sisyphus/data/division-urls.json`)
  - NumPy verify each at ≥95%

  **Must NOT do**:
  - Do NOT create division detail pages in this task (that's Task 8)
  - Do NOT skip downloading accordion background images

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: [`replication`, `playwright-skill`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 2, 3, 5, 6)
  - **Blocks**: Task 8, Task 10
  - **Blocked By**: Task 1

  **References**:
  - `about_1.html` (local) — Template pattern
  - Live: `https://web.donginlaw.co.kr/division_1.html`, `division_2.html`
  - `js/main.js` — Accordion toggle handlers

  **Acceptance Criteria**:
  - [x] division_1.html and division_2.html exist
  - [x] Accordion backgrounds render (images in data/file/21_type/)
  - [x] `.sisyphus/data/division-urls.json` contains all discovered detail page URLs
  - [x] NumPy ≥ 0.95 for each page
  - [x] Evidence saved

  **Commit**: YES
  - Message: `feat: add division list pages with accordion (95%+ NumPy)`
  - Files: `division_1.html, division_2.html, data/file/21_type/*, .sisyphus/data/division-urls.json`

---

- [x] 5. News Section List Pages (news_1 ~ news_5 — 5 pages)

  **What to do**:
  - Build 5 news list pages:
    - `news_1.html` — 최근 승소사례 (recent wins — article list)
    - `news_2.html` — 주요업무사례 (major cases — article list)
    - `news_3.html` — 동인소식 (firm news — article list)
    - `news_4.html` — 자료실 (resources — file/document list)
    - `news_5.html` — 변호사의 눈 (lawyer's perspective — article list)
  - For each: fetch live HTML, extract content with real article titles/dates/thumbnails
  - Download article thumbnail images to `img/`
  - Rewrite detail links: `news_X_1.html?wr_id=XX` → local `news_X_1_XX.html`
  - Pagination: show page 1 only (matching live default view)
  - Extract ALL news detail page URLs for Task 9 (save to `.sisyphus/data/news-urls.json`)
  - Auto-generated tags may link to search_result.html — rewrite to `#` (excluded page)
  - NumPy verify each at ≥95%

  **Must NOT do**:
  - Do NOT create news detail pages in this task (that's Task 9)
  - Do NOT create multiple pagination pages — page 1 only
  - Do NOT link to search_result.html

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: [`replication`, `playwright-skill`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 2, 3, 4, 6)
  - **Blocks**: Task 9, Task 10
  - **Blocked By**: Task 1

  **References**:
  - `about_1.html` (local) — Template pattern
  - Live: `https://web.donginlaw.co.kr/news_1.html` through `news_5.html`
  - `css/skin-news-style.css` — News list styling

  **Acceptance Criteria**:
  - [x] All 5 news HTML files exist
  - [x] Article thumbnails downloaded to img/
  - [x] `.sisyphus/data/news-urls.json` contains all discovered detail URLs
  - [x] NumPy ≥ 0.95 for each page
  - [x] Evidence saved

  **Commit**: YES
  - Message: `feat: add news section list pages (95%+ NumPy)`
  - Files: `news_1.html ~ news_5.html, img/news_*, .sisyphus/data/news-urls.json`

---

- [x] 6. Member List Page (member_1 — 1 complex page)

  **What to do**:
  - Build `member_1.html` — 구성원 목록 (member directory)
  - **CRITICAL**: Must show ALL ~200+ members for NumPy accuracy (not just 20)
  - Fetch live member_1.html, extract the full member grid content
  - Each member card shows: thumbnail photo, name, position/title, practice areas
  - All ~200+ member photos must be present in `data/file/31/` (from Task 0)
  - Rewrite photo `src` paths to local: `data/file/31/thumb-HASH_FILENAME.jpg`
  - Member search/filter/sort UI: replicate visually but non-functional (form doesn't submit)
  - Sort select defaults to "기수순 (↑)" with `selected` attribute
  - For the first 20 members (sorted by 기수순 default): link to local `member_2_XXXX.html`
  - For remaining ~180+ members: link to `#` or leave original URL (since detail pages won't exist locally)
  - Extract the first 20 member idx values for Task 7 (save to `.sisyphus/data/member-20-idx.json`)
  - NumPy verify at ≥95%

  **Must NOT do**:
  - Do NOT show only 20 members on the list page (will destroy NumPy score)
  - Do NOT make search/filter/sort functional
  - Do NOT create member detail pages in this task (that's Task 7)

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Most complex single page — 200+ members, search UI, photo handling
  - **Skills**: [`replication`, `playwright-skill`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 2, 3, 4, 5)
  - **Blocks**: Task 7, Task 10
  - **Blocked By**: Task 1

  **References**:
  - `about_1.html` (local) — Template pattern
  - `data/file/31/` — Member photos (from Task 0)
  - Live: `https://web.donginlaw.co.kr/member_1.html`

  **Acceptance Criteria**:

  ```
  Scenario: member_1.html shows full member roster
    Tool: Playwright + Bash
    Steps:
      1. Playwright: goto http://localhost:8080/member_1.html
      2. Playwright: count elements matching .member_list li (or equivalent selector)
      3. Assert: count ≥ 200 (all members visible)
      4. Assert: All member photos load (no broken images)
    Expected: Full member listing with 200+ entries
    Evidence: .sisyphus/evidence/task-6-member-count.txt

  Scenario: member_1.html NumPy verification
    Tool: Playwright + NumPy (Universal pattern)
    Expected: ≥ 0.95 similarity
    Evidence: .sisyphus/evidence/member_1-comparison.png
  ```

  - [x] `.sisyphus/data/member-20-idx.json` exists with 20 idx values
  - [x] NumPy ≥ 0.95

  **Commit**: YES
  - Message: `feat: add member list page with full 200+ roster (95%+ NumPy)`
  - Files: `member_1.html, .sisyphus/data/member-20-idx.json`

---

- [x] 7. Member Detail Pages (20 pages)

  **What to do**:
  - Read member idx values from `.sisyphus/data/member-20-idx.json` (created in Task 6)
  - For each of the 20 members, fetch live `member_2.html?idx=XXXX`:
    - Extract: full-size photo, name (Korean), name (English), position, phone, fax, email
    - Extract profile sections: 학력 (education), 경력 (career), 주요실적 (achievements), 저서 (publications), 연관미디어 (related media)
    - Download full-size member photo to `data/file/31/`
  - Create static file: `member_2_XXXX.html` (flat naming, one per member)
  - Each page uses the sub-page template + member_2-specific layout:
    - Additional CSS: `<link rel="stylesheet" href="skin/latest/member/style.css">`
    - Member profile layout: left photo + right info
    - Tab/section navigation for profile sections
    - "연관미디어" section with linked articles
    - Bottom section with practice area keywords
  - Customize template: `<sub id="member" class="member_2">`, appropriate breadcrumb
  - NumPy verify each page at ≥95%

  **Must NOT do**:
  - Do NOT create more than 20 member detail pages
  - Do NOT include members not in the member-20-idx.json list
  - Do NOT make email/phone links functional (visual only)

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: 20 pages with per-page content scraping
  - **Skills**: [`replication`, `playwright-skill`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 8, 9)
  - **Blocks**: Task 10
  - **Blocked By**: Task 6

  **References**:
  - `about_1.html` (local) — Base template
  - `.sisyphus/data/member-20-idx.json` — Member idx list from Task 6
  - `skin/latest/member/style.css` — Member detail CSS (from Task 0)
  - Live: `https://web.donginlaw.co.kr/member_2.html?idx=XXXX` — scrape per member

  **Acceptance Criteria**:
  - [x] 20 member_2_XXXX.html files exist (one per idx in member-20-idx.json)
  - [x] Each file includes `<link>` to skin/latest/member/style.css
  - [x] Each member has: photo, name, position, profile sections with real content
  - [x] NumPy ≥ 0.95 for each page (sample-verify at least 5 pages, spot-check the rest)
  - [x] Evidence: .sisyphus/evidence/member_2_XXXX-comparison.png (at least 5)

  **Commit**: YES
  - Message: `feat: add 20 member detail pages (95%+ NumPy verified)`
  - Files: `member_2_*.html, data/file/31/*`

---

- [x] 8. Division Detail Pages (all — ~70-80 pages)

  **What to do**:
  - Read division detail URLs from `.sisyphus/data/division-urls.json` (created in Task 4)
  - For each division detail URL (both `division_1_1.html?idx=XX` and `division_2_1.html?idx=XX`):
    - Fetch live page HTML
    - Extract page-specific content within `<sub>` wrapper
    - Download any page-specific images
    - Create static file: `division_1_1_XX.html` or `division_2_1_XX.html`
    - Apply sub-page template with correct breadcrumb and customization values
  - Batch process — these pages follow a consistent template, so build one, verify, then batch the rest
  - NumPy verify a representative sample (every 10th page = ~7-8 verified pages), spot-check rest

  **Must NOT do**:
  - Do NOT skip any division detail pages listed in the JSON
  - Do NOT manually type content — scrape everything from live site

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: High volume batch task requiring systematic scraping
  - **Skills**: [`replication`, `playwright-skill`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 7, 9)
  - **Blocks**: Task 10
  - **Blocked By**: Task 4

  **References**:
  - `.sisyphus/data/division-urls.json` — All division detail URLs from Task 4
  - `about_1.html` (local) — Base template
  - `division_1.html`, `division_2.html` — List pages with links

  **Acceptance Criteria**:
  - [x] All division detail HTML files exist (count matches division-urls.json)
  - [x] NumPy ≥ 0.95 for every 10th page (representative sample)
  - [x] All pages use consistent template
  - [x] All page-specific images downloaded

  **Commit**: YES
  - Message: `feat: add all division detail pages (~70-80 pages, NumPy verified)`
  - Files: `division_1_1_*.html, division_2_1_*.html`

---

- [x] 9. News & Benefit Detail Pages (all — count discovered at runtime)

  **What to do**:
  - Read news detail URLs from `.sisyphus/data/news-urls.json` (created in Task 5)
  - Additionally, scrape `benefit_2.html` for any benefit detail page URLs → add to list
  - For each detail URL (news_1_1, news_2_1, news_3_1, news_4_1, news_5_1, benefit_2_1):
    - Fetch live page HTML
    - Extract article content (title, date, author, body, attached images)
    - Download article images
    - Create static file with appropriate naming: `news_X_1_XXXX.html`, `benefit_2_1_XXXX.html`
    - Apply sub-page template
  - Batch process with consistent template
  - News detail pages may use `css/skin-news-style.css` — verify and include in `<link>` chain
  - NumPy verify representative sample (every 10th page)

  **Must NOT do**:
  - Do NOT skip any detail pages listed in news-urls.json
  - Do NOT create detail pages for search_result

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: [`replication`, `playwright-skill`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 7, 8)
  - **Blocks**: Task 10
  - **Blocked By**: Task 5

  **References**:
  - `.sisyphus/data/news-urls.json` — All news detail URLs from Task 5
  - `css/skin-news-style.css` — News detail styling
  - `about_1.html` (local) — Base template

  **Acceptance Criteria**:
  - [x] All news/benefit detail HTML files exist (count matches URLs list)
  - [x] Article images downloaded to img/
  - [x] NumPy ≥ 0.95 for representative sample
  - [x] All pages use consistent template

  **Commit**: YES
  - Message: `feat: add all news & benefit detail pages (NumPy verified)`
  - Files: `news_*_1_*.html, benefit_2_1_*.html`

---

- [x] 10. Internal Link Patching & Final NumPy Verification Sweep

  **What to do**:
  - **Link Patching**: Scan ALL HTML files and rewrite internal links:
    - `href="about_1.html?lang=kr"` → `href="about_1.html"` (remove lang param)
    - `href="member_2.html?idx=1161"` → `href="member_2_1161.html"` (rewrite query params)
    - `href="division_1_1.html?idx=XX"` → `href="division_1_1_XX.html"`
    - `href="news_X_1.html?wr_id=XX"` → `href="news_X_1_XX.html"`
    - `href="search_result.html..."` → `href="#"` (excluded page)
    - Header navigation links → point to local files
    - Breadcrumb links → point to local files
    - sitemap.html → all links to local files
  - **Cross-page Link Verification**: Extract all href values from all HTML files, check each target file exists:
    ```bash
    grep -ohr 'href="[^"]*\.html[^"]*"' *.html | sort -u | sed 's/href="//;s/".*//' | sed 's/?.*//' | while read f; do [ -f "$f" ] || echo "MISSING: $f"; done
    ```
  - **Template Consistency Check**: Use Playwright to extract header/footer innerHTML from 5+ pages, compare for identity
  - **Image Loading Verification**: Use Playwright to navigate each page and check for broken images (img elements with naturalWidth === 0)
  - **Full NumPy Sweep**: Run NumPy verification on ALL 20 static pages (Tasks 2-6 output). For detail pages (Tasks 7-9), verify random sample of 10 pages from each category.
  - Fix any pages that fall below 95% — iterate until all pass
  - Generate final verification report: `.sisyphus/evidence/final-report.md`

  **Must NOT do**:
  - Do NOT skip any static page in the NumPy sweep
  - Do NOT accept <95% for any static/list page
  - Do NOT leave broken internal links

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Comprehensive cross-page verification requiring systematic checking
  - **Skills**: [`replication`, `playwright-skill`]

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 4 (final, sequential)
  - **Blocks**: None (final task)
  - **Blocked By**: Tasks 2, 3, 4, 5, 6, 7, 8, 9

  **References**:
  - All local HTML files
  - All local image/CSS/JS assets
  - Live site for NumPy comparison

  **Acceptance Criteria**:

  ```
  Scenario: All internal links resolve
    Tool: Bash
    Steps:
      1. Extract all href values from all HTML files
      2. Filter to local .html links (remove external, #, javascript:)
      3. Normalize query params to filenames
      4. Check each target file exists
    Expected: Zero missing link targets
    Evidence: .sisyphus/evidence/task-10-link-check.txt

  Scenario: All static pages pass NumPy verification
    Tool: Playwright + NumPy (batch)
    Steps:
      1. For each of the 20 static pages:
         a. Screenshot original at 1920x1080
         b. Screenshot replica at 1920x1080
         c. NumPy compare
         d. Assert ≥ 0.95
    Expected: 20/20 pages pass at ≥ 0.95
    Evidence: .sisyphus/evidence/final-numpy-results.txt

  Scenario: Template consistency across pages
    Tool: Playwright
    Steps:
      1. Extract header outerHTML from about_1, member_1, news_1, division_1, benefit_1
      2. Compare all 5 → Assert identical
      3. Extract footer outerHTML from same 5 pages
      4. Compare all 5 → Assert identical
    Expected: Headers and footers identical across all pages
    Evidence: .sisyphus/evidence/task-10-template-consistency.txt

  Scenario: No broken images across all pages
    Tool: Playwright (batch)
    Steps:
      1. For each page: navigate, wait for load
      2. document.querySelectorAll('img').forEach → check naturalWidth > 0
      3. Assert: zero broken images per page
    Expected: All images load successfully
    Evidence: .sisyphus/evidence/task-10-image-check.txt
  ```

  **Commit**: YES
  - Message: `fix: patch internal links and complete final verification (all pages 95%+ NumPy)`
  - Files: All HTML files (link patches), `.sisyphus/evidence/final-report.md`

---

## Commit Strategy

| After Task | Message | Files | Verification |
|------------|---------|-------|--------------|
| 0 | `chore: download sub-page assets and verify CSS/JS` | img/*, data/*, skin/* | Asset count check |
| 1 | `feat: add sub-page template (about_1.html 95%+)` | about_1.html | NumPy ≥ 0.95 |
| 2 | `feat: add about section pages (about_2~5, 95%+)` | about_2~5.html | NumPy ≥ 0.95 each |
| 3 | `feat: add utility pages (benefit/recruit/term/sitemap)` | 7 HTML files | NumPy ≥ 0.95 each |
| 4 | `feat: add division list pages (95%+)` | division_1/2.html | NumPy ≥ 0.95 each |
| 5 | `feat: add news list pages (95%+)` | news_1~5.html | NumPy ≥ 0.95 each |
| 6 | `feat: add member list page with 200+ roster (95%+)` | member_1.html | NumPy ≥ 0.95 |
| 7 | `feat: add 20 member detail pages (95%+)` | member_2_*.html | NumPy sample ≥ 0.95 |
| 8 | `feat: add division detail pages (~70-80)` | division_*_*.html | NumPy sample ≥ 0.95 |
| 9 | `feat: add news/benefit detail pages` | news_*_*.html | NumPy sample ≥ 0.95 |
| 10 | `fix: patch links, final verification sweep` | All HTML files | Full sweep pass |

---

## Success Criteria

### Verification Commands
```bash
# Count all sub-page HTML files
ls *.html | wc -l
# Expected: 20 static + 20 member + ~70-80 division + N news/benefit + 1 index = 110+

# Verify all static pages pass NumPy (batch)
for page in about_1 about_2 about_3 about_4 about_5 benefit_1 benefit_2 recruit_1 recruit_2 term_1 term_2 sitemap division_1 division_2 member_1 news_1 news_2 news_3 news_4 news_5; do
  echo "Checking ${page}.html..."
  # Run NumPy comparison (Playwright screenshots required)
done

# Verify zero broken images
for f in *.html; do
  echo "Checking images in $f..."
done

# Verify zero broken links
grep -ohr 'href="[^"]*\.html[^"]*"' *.html | sort -u | wc -l
# Expected: All resolve to existing files
```

### Final Checklist
- [x] All 20 static/list pages: ≥95% NumPy each
- [x] 20 member detail pages: ≥95% NumPy (sample verified)
- [x] ~70-80 division detail pages: ≥95% NumPy (sample verified)
- [x] All news/benefit detail pages: ≥95% NumPy (sample verified)
- [x] Zero broken images across ALL pages
- [x] Zero broken internal links
- [x] Header/footer identical across all pages
- [x] No placeholder/lorem ipsum text anywhere
- [x] No React/Vue/framework code
- [x] No English version pages
- [x] CSS chain correct on every page
- [x] AOS animations trigger correctly
- [x] All assets served locally (zero external image references except CDN JS)
