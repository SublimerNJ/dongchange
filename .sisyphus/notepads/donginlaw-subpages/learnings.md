# Learnings — Donginlaw Sub-pages Replication

## 2026-02-14 Initial Assessment
- 175 HTML pages already exist (Tasks 0-9 substantially complete)
- 156 images in img/, 241 member photos in data/file/31/, 10 division images in data/file/21_type/
- 681 sub-page CSS class matches in main.css
- Template pattern well-established: header + sidebar + float_btns + sub + footer + term_pop

## Asset Gaps
- skin/latest/member/style.css — MISSING locally, member_2 pages reference remote URL
- news_5 has NO detail links (correct — no detail pages needed)
- news_3.html has 1 unpatched remote-style link: `/news_3_1.html?idx=773&lang=kr`
- benefit detail pages named `benefit_3_*.html` instead of `benefit_2_1_*.html` (non-standard but functional)

## Page Counts
- Static/list pages: 21 (about_1-5, benefit_1-2, recruit_1-2, term_1-2, sitemap, division_1-2, member_1, news_1-5)
- Member detail: 20 (member_2_*.html)
- Division detail: 91 (79 division_1_1 + 12 division_2_1)
- News detail: 33 (8 news_1_1 + 12 news_2_1 + 1 news_3_1 + 12 news_4_1 + 0 news_5_1)
- Benefit detail: 10 (benefit_3_*.html)
- Total: 175 + index.html = 176

## Template Structure
- about_1.html: 871 lines (canonical template)
- member_1.html: 5047 lines (200+ members)
- member_2_686.html: 1051 lines
- division_1.html: 1130 lines
- news_1.html: 1133 lines

## Task 10 — Link Patching & Asset Localization (2026-02-14)

### Summary
- **4,819 remote refs** across 175 HTML files → **0 actionable refs remaining**
- Remaining allowed refs: 982 `@donginlaw.co.kr` emails + 170 Kakao share `imageUrl` refs

### Approach
1. Initial batch `sed` passes for domain-prefix stripping (css/, js/, img/, skin/, data/, newsletter/)
2. Comprehensive Python script (`fix_links.py`) handling 17 pattern categories in a single pass
3. Targeted follow-up fixes for edge cases found in verification sweeps

### Pattern Categories Fixed (17)
1. CSS/JS `?ver=` param stripping (128 files)
2. BBS `write_update.php` form actions → `#` (268 occurrences, 3 path variants)
3. BBS `view_image.php` → `#` (45 refs)
4. BBS `download.php` → `#` (2 refs)
5. `search_result.html?stx=` → `#`
6. Pagination `?bo_table=52&page=X` → `#` (11 refs)
7. `g5_url` / `g5_bbs_url` JS variables → empty strings (130 files)
8. `?idx=` navigation params → static filenames (e.g., `news_3_1_773.html`)
9. `?wr_id=` navigation params → static filenames
10. `?lang=kr` param stripping from all hrefs
11. `?lang=en` links → `#` (no English version)
12. Leading `/` removal from href paths
13. `href="/"` → `href="index.html"` (503 occurrences)
14. `www.donginlaw.co.kr/data/editor/` images → local paths (9 PNGs)
15. `benefit_3` domain links → static filenames (11 files)
16. `hothaan`-encoded URL paths → static filenames
17. Newsletter old-site refs (`/page/*`, `/43/*`, etc.) → `#` or static filenames

### Assets Created/Downloaded
- `skin/board/31/img/noimg.jpg` — copied from `skin/board/21_view/img/noimg.jpg`
- `img/zz1.png` — downloaded from `https://www.donginlaw.co.kr/img/zz1.png` (49KB)

### Key Learnings
- **HTML-encoded ampersands**: Query params use `&amp;` in HTML attributes, must handle both `&` and `&amp;`
- **Three domain variants**: `www.donginlaw.co.kr`, `web.donginlaw.co.kr`, `donginlaw.co.kr` (bare) — all needed patching
- **BBS form variants**: Three path forms for same endpoint: `./bbs/`, `https://web.donginlaw.co.kr/bbs/`, `bbs/`
- **Verification refinement**: Must exclude `@donginlaw` (emails) from grep, not just `www.donginlaw` in imageUrl
- **Python > sed for complex patterns**: Single Python script with regex was far more reliable than chained sed commands for 17+ patterns
- **Incremental verification essential**: Running count after each batch caught edge cases early
