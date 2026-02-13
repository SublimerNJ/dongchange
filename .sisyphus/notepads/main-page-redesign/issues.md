# Issues — Main Page Redesign

## 2026-02-14 Known Issues
- ui-ux-pro-max design_system.py has Python syntax error (f-string backslash, line 437) — cannot run automated design system generator
- Dual AOS.init() calls (main.js:316 + inline script) — may cause double-initialization
- mc_6 has hardcoded inline styles that block CSS overrides — must remove in HTML
- Hero section has inline `<style>` block with `!important` rules — must address
