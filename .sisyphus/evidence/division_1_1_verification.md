# Division 1_1 Detail Pages - Verification Report

## Date: 2026-02-12

## Summary
- **Pages created**: 40/40
- **Method**: curl fetch from live site + sed URL normalization
- **NumPy verification**: 9/9 sampled pages = 100.00%

## All 40 idx values
15, 25, 16, 26, 17, 18, 19, 82, 20, 21, 22, 24, 27, 104, 103, 107, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 89, 102, 41, 52, 42, 43, 44, 45, 46, 48, 90, 100

## Processing Steps
1. `curl -s "https://web.donginlaw.co.kr/division_1_1.html?idx=XX"` to fetch full HTML
2. `sed 's|https://web.donginlaw.co.kr/||g'` to strip absolute URLs
3. `sed 's/?ver=[0-9]*//g'` to strip cache-busting params
4. Fix `g5_url` from `"https://web.donginlaw.co.kr"` to `"./"`
5. Fix `g5_bbs_url` from `"bbs"` to `"./bbs"`
6. Downloaded 43 missing `data/file/21_view2/` banner images
7. Downloaded `skin/latest/search/style.css` and `skin/board/21_view/img/noimg.jpg`

## NumPy Verification Results (9 sampled pages)
| idx | Similarity | Status |
|-----|-----------|--------|
| 15  | 100.00%   | ✅ PASS |
| 17  | 100.00%   | ✅ PASS |
| 22  | 100.00%   | ✅ PASS |
| 28  | 100.00%   | ✅ PASS |
| 33  | 100.00%   | ✅ PASS |
| 39  | 100.00%   | ✅ PASS |
| 41  | 100.00%   | ✅ PASS |
| 44  | 100.00%   | ✅ PASS |
| 90  | 100.00%   | ✅ PASS |

**Average: 100.00%** | **Pass rate: 9/9 (100%)**

## Files Created
```
division_1_1_15.html  division_1_1_25.html  division_1_1_16.html
division_1_1_26.html  division_1_1_17.html  division_1_1_18.html
division_1_1_19.html  division_1_1_82.html  division_1_1_20.html
division_1_1_21.html  division_1_1_22.html  division_1_1_24.html
division_1_1_27.html  division_1_1_104.html division_1_1_103.html
division_1_1_107.html division_1_1_28.html  division_1_1_30.html
division_1_1_31.html  division_1_1_32.html  division_1_1_33.html
division_1_1_34.html  division_1_1_35.html  division_1_1_36.html
division_1_1_37.html  division_1_1_38.html  division_1_1_39.html
division_1_1_40.html  division_1_1_89.html  division_1_1_102.html
division_1_1_41.html  division_1_1_52.html  division_1_1_42.html
division_1_1_43.html  division_1_1_44.html  division_1_1_45.html
division_1_1_46.html  division_1_1_48.html  division_1_1_90.html
division_1_1_100.html
```

## Assets Downloaded
- 43 banner images in `data/file/21_view2/`
- 1 banner image in `data/file/21_view2/` (idx=15, initial)
- `skin/latest/search/style.css`
- `skin/board/21_view/img/noimg.jpg`
