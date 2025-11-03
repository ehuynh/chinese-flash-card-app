# Copilot Instructions for Yika (忆卡) – Chinese Flash Card App

## Project Overview
- **Yika** is a minimal, mobile-first flash card app for learning Chinese, built with Next.js, React, and Tailwind CSS.
- The main UI and logic live in the `app/` directory. The entry point is `app/page.tsx`.
- Project documentation and development tasks are in `docs/` (see `docs/tasks/`).

## Architecture & Patterns
- **Next.js App Router**: Uses the `/app` directory structure (not `/pages`). Routing, layouts, and page components follow Next.js 13+ conventions.
- **Styling**: Uses Tailwind CSS. Global styles are in `app/globals.css`.
- **Font**: Uses `next/font` to load the Geist font.
- **No backend**: The current codebase is frontend-only. All data is managed client-side.

## Interface Guidelines
- **Responsive Design**: Use Tailwind's responsive utilities to ensure mobile-first design.
- **Minimal UI**: Keep interfaces clean and simple, focusing on usability and speed.
- **Monochrome Palette**: Stick to a neutral color scheme with occasional accent colors for buttons/links.

## Developer Workflows
- **Start dev server**: `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Edit main page**: Modify `app/page.tsx` for the landing/flash card UI.
- **Live reload**: Changes in `app/` auto-update in the browser.
- **Documentation**: Add or update docs in `docs/`.

## Conventions & Practices
- **Component location**: Place new UI components in `app/` or subfolders as needed.
- **Minimalism**: Favor simple, clean UI and code. Avoid unnecessary dependencies or complexity.
- **Mobile-first**: Use responsive Tailwind classes; test on small screens.
- **Tasks & Planning**: Use `docs/tasks/` for feature checklists and dev planning.

## Integration & Extensibility
- **No API calls or server code**: All logic is currently client-side. If adding backend, follow Next.js API route conventions.
- **External dependencies**: Only core Next.js, React, and Tailwind CSS are used. Add new dependencies only if essential.

## Examples
- To add a new flash card feature, create a new component in `app/`, import it in `app/page.tsx`, and style with Tailwind.
- To update the global style, edit `app/globals.css`.

## Key Files & Directories
- `app/` – Main app code (UI, logic)
- `app/page.tsx` – Main page/entry point
- `app/globals.css` – Global styles
- `docs/` – Project documentation
- `docs/tasks/` – Task checklists

## Impelmentation Guidance
- Follow tasks in `docs/tasks/` for specific features (e.g., login/signup with Supabase).
- Perform one task at a time.
- Check off completed tasks in the markdown files.
---

For questions about project structure or conventions, check `README.md` and `docs/` first.
