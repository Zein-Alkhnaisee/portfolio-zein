# Zein Alkhnaisee – Portfolio

React + TypeScript + Vite + Tailwind CSS.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in dist/
    npm run preview    # preview the build

## Update content
All content is in `src/data/content.ts`.
- Photo: replace `public/images/profile.jpg` (same filename).
- Project screenshot: put it in `public/images/projects/`, set `screenshot: '/images/projects/name.png'`.
- GitHub / demo: set `githubUrl` / `liveUrl`. Empty values hide the buttons.
- Contact: fill `contactLinks` (use `mailto:you@example.com` for email). Empty entries are hidden.
- New project: add another object to the `projects` array.
