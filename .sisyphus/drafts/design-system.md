# Design System: Dongin Law Group (Redesign 2026)

## 1. Design Philosophy
**Direction:** Dynamic & Interactive Authority
**Keywords:** Professional, Trustworthy, Modern, Fluid, impactful.
**Core Concept:** "The Weight of Law, Moved by Innovation."
Transforming the static, traditional layout into a fluid, scroll-driven experience that guides the user through the firm's expertise with dramatic reveals and elegant motion.

---

## 2. Color Palette

### Primary Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#084784` | Brand color, primary buttons, active states, key headings |
| `--color-primary-dark` | `#052c52` | Hover states, dark mode backgrounds |
| `--color-primary-light` | `#1a5d9e` | Accents, gradients |

### Secondary & Neutrals
| Token | Value | Usage |
|-------|-------|-------|
| `--color-dark-navy` | `#0A1D31` | "Night Mode" sections (mc_9), footer |
| `--color-bg-light` | `#F6F9FC` | Alternating section backgrounds |
| `--color-text-heading` | `#121212` | Main headings (h1-h3) |
| `--color-text-body` | `#434343` | Body copy, descriptions |
| `--color-text-muted` | `#808080` | Meta info, dates, subtitles |
| `--color-border` | `#DBDBDB` | Dividers, card borders |
| `--color-white` | `#FFFFFF` | Card backgrounds, text on dark |

### Gradients (Subtle)
*   `--gradient-primary`: `linear-gradient(135deg, #084784 0%, #052c52 100%)`
*   `--gradient-overlay`: `linear-gradient(to bottom, rgba(10,29,49,0) 0%, #0A1D31 100%)`

---

## 3. Typography

### Font Families
*   **Headings (Serif):** `"Playfair Display", serif`
    *   *Usage:* Section titles, hero statements, numbers. Adds authority.
*   **Body (Sans-Serif):** `Pretendard Variable, Pretendard, sans-serif`
    *   *Usage:* Navigation, paragraphs, UI elements. Adds clarity.

### Type Scale (Desktop)
| Level | Font Family | Size | Weight | Line Height | Letter Spacing |
|-------|-------------|------|--------|-------------|----------------|
| **Display (Hero)** | Playfair | `80px` | 700 | 1.1 | -0.02em |
| **H1 (Section)** | Playfair | `54px` | 700 | 1.2 | -0.01em |
| **H2 (Card Title)**| Pretendard| `34px` | 700 | 1.3 | -0.01em |
| **H3 (Subhead)** | Pretendard| `24px` | 600 | 1.4 | 0 |
| **Body L (Intro)** | Pretendard| `20px` | 400 | 1.6 | 0 |
| **Body M (Base)** | Pretendard| `17px` | 400 | 1.6 | 0 |
| **Small (Meta)** | Pretendard| `15px` | 400 | 1.5 | 0 |

### Type Scale (Mobile)
*   Scale down headings by ~30% (e.g., H1 becomes 36px).
*   Body text remains readable (min 15px).

---

## 4. Spacing & Layout

### Container
*   `--container-width`: `1500px` (Max width)
*   `--gutter`: `20px`

### Section Spacing
*   `--section-padding-y`: `160px` (Desktop) / `80px` (Mobile)
*   *Note:* Generous spacing is crucial for the "Premium" feel.

### Element Spacing
*   `--gap-sm`: `10px`
*   `--gap-md`: `24px`
*   `--gap-lg`: `40px`
*   `--gap-xl`: `60px`

---

## 5. Shadows & Borders

### Elevations
*   `--shadow-sm`: `0 4px 12px rgba(0, 0, 0, 0.05)` (Cards default)
*   `--shadow-md`: `0 8px 24px rgba(0, 0, 0, 0.08)` (Cards hover)
*   `--shadow-lg`: `0 20px 40px rgba(0, 0, 0, 0.12)` (Floating elements)

### Borders
*   `--radius-sm`: `4px`
*   `--radius-md`: `15px` (Cards)
*   `--radius-pill`: `100px` (Buttons, badges)

---

## 6. Animation System (The "Dynamic" Factor)

### AOS Presets (Scroll Reveal)
*   **Hero Elements:** `fade-up` (Duration: 1000ms, Delay: 200ms)
*   **Section Titles:** `fade-up` (Duration: 800ms)
*   **Cards (Grid):** `fade-up` with staggered delay (`data-aos-delay="100"`, `"200"`, `"300"`)
*   **Images:** `zoom-in` (Subtle scale 0.95 -> 1.0) or `fade-left`/`fade-right` for split layouts.

### Transitions
*   `--transition-base`: `all 0.3s ease-in-out`
*   `--transition-smooth`: `all 0.5s cubic-bezier(0.25, 1, 0.5, 1)`

### Micro-Interactions
*   **Buttons:**
    *   Default: Solid Primary.
    *   Hover: Background darkens, subtle lift (`transform: translateY(-2px)`).
*   **Cards:**
    *   Hover: Image zoom (scale 1.05), Shadow deepens, Border color shift to Primary.
*   **Links:**
    *   Hover: Underline expands from center or left.

---

## 7. Component Guidelines

### Buttons (`.btn`)
*   Height: `50px` or `60px`
*   Radius: `100px`
*   Font: Pretendard, Weight 700.
*   Icon: Arrow icon usually accompanies text.

### Cards (`.card`, `.item`)
*   Background: White
*   Padding: `30px` or `40px`
*   Behavior: Entire card should be clickable (stretched link).

### Inputs
*   Height: `54px`
*   Border: 1px solid `#DBDBDB`
*   Radius: `5px` (or `100px` for search bars)

---

## 8. Section-by-Section Design Direction

| Section | Concept | Animation Idea |
|---------|---------|----------------|
| **Hero** | Immersive Video | Text types out or fades up slowly. Overlay darkens on scroll. |
| **News** | Horizontal Slider | Cards slide in from right. Hover expands card slightly. |
| **Expert** | Portrait Focus | Clean grid. Hover desaturates background, highlights face. |
| **Mission** | Typography Heavy | Large Playfair text. Parallax background image behind text. |
| **Recruit** | Dark/Bold | Dark background. Content centers with high contrast. |
| **Q&A** | Accordion | Smooth expansion. Arrow rotates. Background color shift on active. |
| **Footer** | Structured | Clean columns. Subtle opacity hover on links. |

---

## 9. Implementation Notes
*   **CSS Variables:** Define all colors and spacing in `:root` inside `common.css` or a new `variables.css`.
*   **Dark Mode:** Use class `.dark-mode` or data attribute for specific dark sections to invert colors easily.
*   **Performance:** Use `will-change: transform, opacity` for animated elements to ensure 60fps.
