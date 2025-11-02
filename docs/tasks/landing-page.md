
# Checklist: Replace Next.js Landing Page with Minimal Monochrome Design

This checklist will guide you through replacing the default Next.js landing page with a minimal, monochrome, mobile-first landing page for your app.

## Requirements

- [ ] Centered 🀄️ emoji as the main visual
- [ ] Top menu bar with **Login** and **Signup** buttons on the right
- [ ] Vertical scrollable paged content (use sections or divs)
- [ ] Footer at the bottom
- [ ] Monochrome color scheme (black, white, gray)
- [ ] Modern, minimal look
- [ ] Prioritize mobile appearance (responsive, touch-friendly)

## Tasks

- [x] **Edit the main landing page**
  - [x] Open `app/page.tsx`
  - [x] Replace the default content with a minimal layout:
    - [x] Top menu bar (flex, justify-between, items-center)
    - [x] Centered 🀄️ emoji (large, centered both vertically and horizontally)
    - [x] Scrollable vertical sections (use `<section>` or `<div>`)
    - [x] Footer at the bottom

- [x] **Style the page**
  - [x] Use Tailwind CSS classes (recommended) or update `app/globals.css` for custom styles
  - [x] Ensure a monochrome palette (no color except black, white, gray)
  - [x] Use `min-h-screen`, `flex`, and responsive classes for mobile-first design
  - [x] Make sure the menu bar and footer are always visible on mobile

- [x] **Menu Bar**
  - [x] Place **Login** and **Signup** buttons on the top right
  - [x] Use simple button styles (border, rounded, no color fill)
  - [x] Menu bar should be sticky or fixed at the top on mobile

- [x] **Footer**
  - [x] Add a minimal footer at the bottom (e.g., copyright)

- [x] **Test Responsiveness**
  - [x] Open the app on a mobile device or use browser dev tools to verify appearance

## Example (Tailwind CSS)

```tsx
// app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="flex justify-between items-center p-4 border-b">
        <div className="font-bold text-lg">Yika <span className=\"text-base text-gray-400\">(忆卡)</span></div>
        <div className="space-x-2">
          <button className="border rounded px-4 py-1">Login</button>
          <button className="border rounded px-4 py-1">Signup</button>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <span className="text-8xl">🀄️</span>
      </main>
      <footer className="p-4 border-t text-center text-xs text-gray-500">
        &copy; 2025 Yika (忆卡)
      </footer>
    </div>
  );
}
```

## References

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js App Directory](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

---
