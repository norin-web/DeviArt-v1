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

**`base` trap:** without a custom domain the site lives at `https://norin-web.github.io/DeviArt-v1/`, so
`vite.config.ts` has `base: "/DeviArt-v1/"` (case-sensitive). When a domain is attached, switch to `base: "/"`
and add `public/CNAME` in the same commit, or the site goes blank.

## Content

- `src/app/content/site.ts` — every fact about the app and the operator; pages read only from here.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use **verbatim** from the owner's docx files.
- Images: `public/images/`, always referenced through `img()` (`src/app/utils/img.ts`).

## Motion rule

Reveals use CSS transitions driven by `useReveal` — content must never stay hidden if an animation
doesn't run (hidden tabs throttle rAF). No smooth-scroll library; the header never hides.
