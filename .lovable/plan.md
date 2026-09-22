# BizTrack Blog and Resources

## Goal
Turn the existing Resources link into a complete, crawlable public editorial section that strengthens the landing page and provides useful business-management guidance without changing the installed app or authenticated dashboards.

## What will be built
- Update the public landing-page navigation so **Resources** opens `/resources` instead of jumping to a placeholder section.
- Add a professional Resources index with:
  - A clear editorial introduction
  - Category filters for Inventory, Finance, Customers, Team, and Operations
  - Five active article cards with summaries, categories, publication details, and reading times
  - Working links to dedicated article URLs
- Add five substantial, realistic guides of at least 800 words each, grounded in real BizTrack capabilities:
  1. Building a reliable inventory system for a growing business
  2. Understanding cash flow, expenses, purchases, and customer debt
  3. Creating useful customer records and repeat-sales habits
  4. Improving team accountability without slowing daily work
  5. Keeping business records moving during unreliable internet access
- Give each article a readable editorial layout with headings, paragraphs, practical lists, related-article links, a clear BizTrack next step, and a reserved manual-ad area near the end.
- Add shared public header and footer elements so the index and article pages feel like complete parts of the same website.
- Keep all Resources routes browser-only; the installed WebViewGold app will continue directly to sign-in and will not expose the public blog.
- Add all public blog URLs to the sitemap and document them in `llms.txt` for search and AI crawlers.

## Content and SEO quality
- Check search demand and current ranking-page patterns before finalizing article titles and descriptions.
- Use only product claims supported by the existing application; avoid invented statistics, customer claims, or guarantees.
- Give every page a unique browser title and description while it is open.
- Use semantic article structure, descriptive internal links, visible publication/update dates, and clear author attribution to BizTrack Editorial.
- Keep advertising areas visibly reserved but empty; no fake ad content or forced ad loading inside articles.

## Technical details
- Add reusable public-site layout, article-card, ad-placeholder, and page-metadata helpers.
- Store article definitions and structured sections in one typed content module so the index and detail pages cannot drift apart.
- Add public routes before the authenticated catch-all route.
- Use existing theme tokens, touch target rules, and responsive patterns.
- Localize shared interface labels through the existing 12-language system. Long-form editorial articles will be published in English initially and labeled accordingly, rather than presenting machine-written translations as reviewed editorial content.
- Verify index navigation, all five article routes, missing-article handling, mobile/desktop layout, installed-app exclusion, and the current build diagnostics.
