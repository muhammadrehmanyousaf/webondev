# SEO Cleanup — Removal of programmatic location ("where-we-serve") pages

**Date:** 2026-06-23
**Goal:** Remove the programmatic doorway location pages for a clean slate, so Google
re-evaluates the domain positively (authority instead of spam).

---

## Why this was done

A `site:webondev.com` check showed Google's index of the domain was dominated by
auto-generated location pages for places the agency does not serve (e.g. Svalbard
Norway, Burundi, Bong County Liberia, three Andorran parishes), each repeating the
identical boilerplate ("500+ projects delivered. 4.9★ by 250+ clients. From $3000")
and injecting fabricated `aggregateRating` schema. These pages:

- were generated combinatorially from free geo APIs (`restcountries.com`,
  `countriesnow.space`) × ~30 services — an effectively unbounded URL surface;
- had **no `generateStaticParams` and no "do we serve here?" gate** — any country/
  state/city on earth rendered a full page;
- violate Google's spam policies on **doorway pages**, **thin/duplicate content**,
  and **spammy structured markup**.

Verdict: full removal (clean slate), with HTTP **410 Gone** as the de-indexing signal.

---

## What changed (code)

| Area | Change |
|---|---|
| Routes | Deleted entire `app/where-we-serve/**` tree (6-level dynamic routes) |
| Removal signal | `middleware.ts` returns **HTTP 410 Gone** for `/where-we-serve` and `/where-we-serve/*`; bare legacy country slugs (`/india`, etc.) also 410. Country+service URLs (`/india/web-development/`) still 301→`/web-development/` to salvage real service pages. |
| Sitemap | Rewrote `app/sitemap.xml/route.ts` to emit a clean `<urlset>` of real pages only (core + service pillars/clusters + blog + portfolio). Deleted orphaned per-type generator `app/api/sitemaps/**` and `app/feeds/locations/**`. Removed location loop from `lib/sitemap-urls.ts` (used by atom/json feeds). |
| Nav | Removed Locations dropdown + links from `Header.tsx`, Locations column from `Footer.tsx`, deleted orphaned `LocationDropdown.tsx`. |
| Internal links | Removed location links from `BlogImportantLinks.tsx` and the Locations Directory from `app/sitemap/page.tsx`. |
| Config | Removed dead `/where-we-serve/*` redirects from `next.config.js`; removed regional hreflang (pointed at deleted pages) from `app/layout.tsx`; removed location patterns from the auto-index cron. |

Dead, no-longer-imported components (`components/sections/where-we-serve/**`,
`components/pages/locations/**`, location schema components) were left in place —
they are tree-shaken out of the build and can be deleted later.

---

## Verification (local production build + server)

`npm run build` succeeded; route list contains **no** `/where-we-serve` routes.
Live HTTP checks against `next start`:

```
/where-we-serve/                  -> 410 Gone
/where-we-serve/united-states/    -> 410 Gone
/where-we-serve/norway/svalbard/  -> 410 Gone
/india/                           -> 410 Gone
/india/web-development/           -> 200 (redirected to /web-development/)
/services/  /blog/                -> 200
sitemap.xml                       -> 0 where-we-serve URLs, 232 real URLs
```

---

## How we tell Google it's cleaned up (post-deploy checklist)

Do these **after** the site is back online (HTTP 200) — see prerequisite below.

1. **[prerequisite] Restore the deployment.** The Vercel deployment is currently
   disabled (HTTP 402 `DEPLOYMENT_DISABLED`). Pay/raise the Vercel limit and redeploy.
   Google can't see any signal while every URL returns 402.
2. **410 Gone** on all old location URLs — shipped in this change. (robots.txt must
   NOT block `/where-we-serve`, or Googlebot can't crawl to *see* the 410. It doesn't.)
3. **Submit the clean `sitemap.xml`** in Google Search Console → Sitemaps.
4. **GSC → Removals → "New request" → "Remove all URLs with this prefix":**
   `https://www.webondev.com/where-we-serve/` (temporary ~6-month hide while 410s
   permanently de-index).
5. **GSC → URL Inspection → Request Indexing** for the good pages (`/`, `/services/`,
   `/about/`, key service pages) so Google recrawls the clean content.
6. **IndexNow** ping (Bing/Yandex) for the changed/removed URLs — repo already has
   IndexNow wiring (`/api/cron/auto-index`, key file present).
7. **Bing Webmaster Tools:** resubmit clean sitemap; use its URL removal tool too
   (feeds Copilot/ChatGPT citations).
8. **Monitor GSC → Pages report** over 2–6 weeks: indexed count should fall as the
   junk drops out and crawl stats normalize.

> Note: GSC/Bing dashboard steps (3–5, 7) require `webondev.com` to be added as a
> property in the connected Search Console account (currently only `weddingwala.pk`
> is connected).

---

## Recommended follow-ups (not in this change)

- The homepage/footer still carry company-wide unverified claims ("500+ projects",
  "4.9★ by 250+ clients", `aggregateRating reviewCount: 250/127`). Either back these
  with real, on-page, verifiable reviews or remove the `aggregateRating` schema to
  avoid "spammy structured markup" risk.
- Delete the now-dead location components when convenient.
- Rebuild a *small* set of genuine service-area pages later (places actually served),
  each with unique content — never the combinatorial generator.
