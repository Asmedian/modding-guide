---
{"title":"Site structure","summary":"How routes, locales, search, sources, and machine-readable representations fit together.","translationStatus":"reviewed"}
---

## Routes and language {#routes}

The locale is always the first URL segment: `/ru/…` or `/en/…`. The language switch keeps the current page and fragment, so a link to a specific section remains meaningful in both languages.

Large collections use focused catalog pages instead of hundreds of sidebar entries. This version contains the general documentation only; ERM and plugin content will later use the same registry.

## Navigation {#navigation}

The editorial sidebar is limited to two levels. The article occupies the center and the current page outline sits on the right. On mobile, the sidebar becomes a drawer and the outline remains available within the document flow.

## Content and localization {#content}

Non-localized article fields — stable ID, slug, keywords, questions, and sources — live in `entity.json`. Long-form copy lives in paired `ru.md` and `en.md` files. Headings use matching section IDs such as `{#resources}`.

## Search {#search}

A small title and keyword index opens immediately, while Pagefind builds a full-text index from generated HTML. Locale indexes stay separate so Russian and English results do not become a mixed list.

## Traceability {#provenance}

`content/_sources/sources.json` stores a compact provenance registry. Original archives, changelogs, and ERA source snapshots remain external development inputs and never ship with the site.

