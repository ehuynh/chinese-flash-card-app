# Checklist: Create a Basic Next.js Project (2025)

This checklist will guide you through creating a new Next.js project using the latest version of npm and Next.js (v16+ as of November 2025).

## Prerequisites
- [ ] Ensure you have **Node.js 22.11+** and **npm** installed
    - Run: `node -v` and `npm -v` to check versions
    - Use nvm or similar tools to manage Node.js versions if needed
    - add a .nvmrc file to your project for version consistency

## Project Creation (In Root Directory)
- [ ] Open your terminal and navigate to the root of this repository
- [ ] Run the following command to initialize Next.js directly in the root (do **not** specify a project name):
    - `npx create-next-app@latest .`
- [ ] Follow the prompts:
    - Choose **recommended defaults** (TypeScript, ESLint, Tailwind CSS, App Router, Turbopack, import alias `@/*`)
    - Or customize settings as desired

## Initial Run
- [ ] Start the development server: `npm run dev`
- [ ] Open [http://localhost:3000](http://localhost:3000) in your browser to verify the app runs

## Project Structure (Verify)
- [ ] Confirm the following structure exists:
    - `/app` directory with `layout.tsx` and `page.tsx`
    - `/public` directory for static assets
    - `/package.json` with Next.js, React, and ReactDOM dependencies
    - TypeScript and ESLint config files

## Next Steps (Optional)
- [ ] Initialize a git repository: `git init`
- [ ] Make your first commit
- [ ] Review and update `README.md`
- [ ] Explore [Next.js documentation](https://nextjs.org/docs/app/getting-started)

---

**References:**
- [Next.js Official Docs: Getting Started](https://nextjs.org/docs/app/getting-started/installation)
- [Next.js CLI Reference](https://nextjs.org/docs/app/api-reference/cli/create-next-app)

---

*Checklist generated November 2025. For the latest instructions, always check the [official Next.js docs](https://nextjs.org/docs/app/getting-started/installation).*