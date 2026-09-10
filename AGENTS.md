# How to edit and extend ERA Modding Guide

Before making changes, read this file, [How to edit the site](docs/EDITING_GUIDE.md), and the [Detailed project map](docs/PROJECT_MAP.md), in that order.

## Non-negotiable rules

- The deliverable is a fully prerendered SvelteKit site. Do not introduce server-only routes or runtime databases.
- Keep Russian and English complete in the same change. UI copy belongs in `src/lib/i18n/ui.ru.json` and `ui.en.json`; article copy belongs in paired Markdown files.
- Never translate or normalize technical file names, paths, extensions, codes, or signatures.
- A `published` or `reviewed` article must have valid `sourceRefs`. Do not infer technical behavior from a name alone.
- Do not commit the external inputs listed in `.gitignore`: ERA sources, changelogs, old help, forum snapshots, or raw design files outside `design/concepts`.
- Preserve Chrome 109, Edge 109, and Firefox 115 as the JavaScript/CSS baseline. Check new APIs and syntax before use.
- Treat old hardware and constrained networks as a release requirement. Keep navigation preloading on intentional `tap`, never on hover; do not eagerly ship search, Pagefind, generated indexes, or optional reference content. Preserve the production performance budgets enforced by `npm run verify:performance`.
- Keep user-visible splash screens, route loaders, spinners, and “loading…” placeholders out of the interface. The root locale decision runs in the document head before body paint and retains only a no-JavaScript language fallback.
- The sidebar is editorial, not generated from the directory tree. Its depth is at most two levels, with at most twelve permanent links in one curated group. ERM’s separate alphabetical index is an explicit user-requested exception: preserve every entry and indented child, the independently scrolling list, and the fixed alphabet rail. The Russian rail deliberately omits Ё, Й, Ы, Ъ, and Ь. Do not put a search field inside the alphabetical index.
- ERM scripts and Plugins are active. Keep `/erm/learn/` empty except for its localized heading until the user starts the course. Keep NH3API inside the Plugins section; Lua remains deferred.
- Keep contextual ERM navigation independent of the central article. Reference JSON endpoints must be prerendered static files; they do not authorize a runtime backend.
- The 223 non-learning ERM Help 2.10b documents are primary reference material. Preserve every non-empty source text slot, code example, inline link, illustration, command boundary, and meaningful presentation cue. Never merge adjacent commands or replace complete source definitions with summaries. Treat `content/erm/_registry/full-transfer-audit.json` as an immutable comparison record: update it only after re-extracting the external source, never to approve a loss in the site content.

## Where things live

- `content/{docs,erm,plugins}/<article>/entity.json`: stable metadata, relations, questions, and provenance.
- `content/{docs,erm,plugins}/<article>/ru.md` and `en.md`: localized long-form copy with matching `{#section-id}` headings.
- `content/_sources/sources.json`: immutable source IDs and compact locators.
- `content/_navigation/{docs,erm,plugins}.json`: curated sidebars.
- `content/erm/_registry/`: source coverage, legacy link graph, alphabet hierarchy, receivers, events, Framework entities, and reference-image provenance.
- `src/lib/reference/rich.mjs` and `src/styles/erm-reference.css`: validated inert legacy-reference markup, ERM highlighting, and source presentation.
- `src/lib/components`: application shell, article renderer, and search dialog.
- `src/styles`: design tokens, themes, responsive layout, and components.
- `scripts/content/build-derived.mjs`: search and LLM artifact generator.
- `tests/content`: publication, locale, source, and navigation checks.

## Change checklist

### New article

1. Copy the shape of a neighboring `entity.json` and assign a unique `docs.*`, `erm.*`, or `plugins.*` ID and a section-local slug.
2. Create reviewed `ru.md` and `en.md` files with identical section IDs.
3. Add source records before using their IDs.
4. Link the page in navigation only if it is a durable entry point.
5. Update adjacent `previous` / `next` values when relevant.
6. Run `npm test` and `npm run build`.

### Translation

Keep code blocks, paths, technical tokens, and section IDs identical. Machine translation stays `draft`; publication requires human review and `translationStatus: reviewed`.

### Navigation or component

Update the corresponding explanation in `docs/PROJECT_MAP.md` when routes, directories, schemas, generators, or state keys change. Verify keyboard focus, touch targets, no-JavaScript readability, and the browser baseline.

### Performance-sensitive UI

- Keep the initial document useful before JavaScript: article text, navigation, links, and image alternatives belong in prerendered HTML.
- Load `SearchDialog.svelte` only after explicit search intent (focus, pointer down, or shortcut). Production search must use Pagefind and its language shards; the multi-megabyte generated search index and symbol index are development fallbacks or dedicated-catalog data and must never enter an initial production preload.
- Keep localized Markdown imports lazy in `src/lib/server/content.ts`. Development may warm the small top-level routes behind the rendered home page, but a first article request must never import or render the complete documentation corpus.
- Keep non-critical article images local with `loading="lazy"` and `decoding="async"`. Preserve `src/lib/server/image-dimensions.ts`: during prerender it derives intrinsic `width` and `height` for local PNG, GIF, JPEG, and BMP assets so slow image downloads do not shift the article. Add explicit dimensions for any new unsupported format. Do not add remote fonts, third-party scripts, autoplay media, `background-attachment: fixed`, or required backdrop filters.
- Preserve the `content-visibility` enhancement for long articles, while keeping the complete HTML readable in Firefox 115 and without JavaScript.
- Run `npm run build`; it includes the link/content validator and `verify:performance`, then inspect `reports/performance-budget.json` when a budget fails. Raise a budget only with measured evidence and update this file, `docs/PROJECT_MAP.md`, and the root `PROJECT_PLAN.md` in the same change.

For ERM source scope and verification limits, read [ERM content audit](docs/ERM_CONTENT_AUDIT.md). ERM articles record evidence for every semantic section in `sectionSources`. Preserve source-version distinctions and review notes; historical binary offsets and code reviewed from a snapshot are not evidence of in-game execution.

Generated files in `src/lib/generated` and `static/llm` must be changed through `npm run prepare:content`, never by hand.

