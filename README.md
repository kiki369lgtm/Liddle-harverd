# Liddle Harverd Kindergarten & Prep School — Website

Phase One public website: a marketing/informational site for prospective and current parents. Built with React, Vite, React Router and Tailwind CSS.

This phase does **not** include the student portal, teacher dashboards, attendance, grading, fees or payments — only the public site and a placeholder Parent Portal login screen. The architecture (see `src/services`, `src/data`) is structured so those systems can be added later without reworking the public site.

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```
src/
├── components/   Reusable UI building blocks (Button, Navbar, cards, forms, ...)
├── sections/     Homepage sections composed from components
├── pages/        One file per route
├── data/         Static content (programs, activities, gallery, news, site info)
├── services/     Data-access functions; swap in a real API via VITE_API_URL later
├── hooks/        Small shared hooks (async data loading, scroll reveal, overlays)
├── lib/          Small shared helpers (tone/color lookup)
└── routes/       Route configuration
```

## Content notes

- No real school photography was available at build time. Every image slot renders a branded placeholder (`PlaceholderImage`) and will automatically switch to a real photo once an `image` URL is added to the relevant entry in `src/data/*.js`.
- News items and some gallery captions are clearly marked as sample content — replace with the school's official updates when available.
- The Admissions and Contact forms run in "demo mode" (no backend configured) — submissions are validated and shown as a demo success/error state, but nothing is actually sent anywhere yet. Set `VITE_API_URL` (see `.env.example`) once a backend exists.
