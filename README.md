# Learnify - Next.js LMS (App Router)

## Description
A simple LMS demo built with Next.js (App Router) and NextAuth for authentication. Includes public pages (landing, courses, product listing/details) and protected pages (Add Product, Manage Products). Backend is a minimal Express server storing products.

## Run locally
1. Install:
   npm install

2. Start backend:
   npm run backend

3. Start next app:
   npm run dev

4. Environment:
   Create .env.local:
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret
   GOOGLE_ID=...
   GOOGLE_SECRET=...


#  Deployment notes

* Deploy Next.js to Vercel (set env vars in Vercel dashboard).
* For the backend, you can host on Render, Railway, or Vercel serverless functions. If you keep a simple JSON file store, prefer ephemeral dev only — switch to a real DB for production (Postgres, Mongo).
* For NextAuth Google OAuth you must register a Google app with redirect URI `https://your-deployment-url.com/api/auth/callback/google`.

---

#  Extra polish suggestions (optional)

* Add toast notifications (react-hot-toast) on success/failure.
* Add inline validation with react-hook-form + zod.
* Use Prisma + Postgres for persistent product storage and to integrate NextAuth adapter (for production).
* Add unit tests for key components.
* Add SSR for product list if SEO matters (convert the App Router component to server component which fetches from backend — already shown).

---

# Final notes & checklist

* This answer gives a complete skeleton you can implement immediately.
* Replace placeholder env variables for Google and `NEXTAUTH_SECRET`.
* Start backend `npm run backend` then `npm run dev` for Next app.
* Use `ProtectedClient` for client guarded pages. If you want server-side protection (redirect before page render), we can convert those pages to server components and use `getServerSession()` / `getSession()` — I can add that if you want server-side redirect.

If you want, I can now:

* Generate the complete GitHub-ready repo file list with the code above placed into files (one-shot).
* Convert client-protected pages into server-side protected routes using `getServerSession()` for App Router.
* Add a prettier Landing page with the 7 required sections (I kept structure minimal, I can flesh out the 7 sections into full JSX).

Which of those should I do next? (I’ll proceed and include the code right away — no waiting.)
