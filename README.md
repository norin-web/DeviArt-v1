# DeviantArt — promo site

Promo site for the DeviantArt AI art iPhone app (App Store ID 6820087115), operated by Torben Heinemann.
Design: Paper file "Deviantart v1 RF", page Promo. Scaffold: an earlier promo site in norin-web.

## Run

```bash
pnpm install
pnpm dev
```

## Deploy

Push to `main` → GitHub Actions builds and publishes to GitHub Pages (`.github/workflows/deploy.yml`).
Pages Source must be set to **GitHub Actions**.

**`base` trap:** the site is served from the custom domain https://dev-art.rest (`public/CNAME`), so
`vite.config.ts` has `base: "/"`. If the domain is ever removed, switch back to `base: "/DeviArt-v1/"`
(case-sensitive) and delete `public/CNAME` in the same commit, or the site goes blank.

## Content

- `src/app/content/site.ts` — every fact about the app and the operator; pages read only from here.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use **verbatim** from the owner's docx files.
- Images: `public/images/`, always referenced through `img()` (`src/app/utils/img.ts`).

## Motion rule

Reveals use CSS transitions driven by `useReveal` — content must never stay hidden if an animation
doesn't run (hidden tabs throttle rAF). No smooth-scroll library; the header never hides.
