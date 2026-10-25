# How to edit and extend ERA Modding Guide

Before making changes, read this file, [How to edit the site](docs/EDITING_GUIDE.md), and the [Detailed project map](docs/PROJECT_MAP.md), in that order.

## Non-negotiable rules

- The deliverable is a fully prerendered SvelteKit site. Do not introduce server-only routes or runtime databases.
- Keep Russian and English complete in the same change. UI copy belongs in `src/lib/i18n/ui.ru.json` and `ui.en.json`; article copy belongs in paired Markdown files.
- Never translate or normalize technical file names, paths, extensions, codes, or signatures.
- A `published` or `reviewed` article must have valid `sourceRefs`. Do not infer technical behavior from a name alone.
- Do not commit the external inputs listed in `.gitignore`: ERA sources, changelogs, old help, forum snapshots, or design files.
- Preserve Chrome 109, Edge 109, and Firefox 115 as the JavaScript/CSS baseline. Check new APIs and syntax before use.
- Treat old hardware and constrained networks as a release requirement. Keep navigation preloading on intentional `tap`, never on hover; do not eagerly ship search, Pagefind, generated indexes, or optional reference content. Preserve the production performance budgets enforced by `npm run verify:performance`.
- Keep user-visible splash screens, route loaders, spinners, and “loading…” placeholders out of the interface. The root locale decision runs in the document head before body paint and retains only a no-JavaScript language fallback.
- The sidebar is editorial, not generated from the directory tree. Its depth is at most two levels, with at most twelve permanent links in one curated group. ERM’s separate alphabetical index is an explicit user-requested exception: preserve every entry and indented child, the independently scrolling list, and the fixed alphabet rail. The Russian rail deliberately omits Ё, Й, Ы, Ъ, and Ь. Do not put a search field inside the alphabetical index.
- ERM scripts and Plugins are active. `/erm/learn/` now contains the user-requested bilingual AI-assisted introduction and prompt disclosures; retain its paired content and LLM coverage. Keep NH3API inside the Plugins section; Lua remains deferred.
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

ERM articles record evidence for every semantic section in `sectionSources`. Preserve source-version distinctions and review notes; historical binary offsets and code reviewed from a snapshot are not evidence of in-game execution.

Generated files in `src/lib/generated` and `static/llm` must be changed through `npm run prepare:content`, never by hand.


## Wiki resource catalog

Wiki appears between Docs and ERM at `/{lang}/wiki/`. It remains fully prerendered.
`content/wiki/` contains paired locale catalogs; `_registry/pages.json` stores
at most 72 resource references per page. Wiki is an explicit LF-driven sidebar
exception to editorial curation; it still uses at most two menu levels and
at most twelve leaves per group. Sounds, videos and the combined font catalog are direct links without
submenus. SoD marks leaf links and resources; expandable menu headings omit it.

`scripts/wiki/import_resources.py` uses external LOD/SND/VID archives and LF
classification trees, Pillow, Node.js and FFmpeg to produce `static/assets/wiki/sod/`.
Archive snapshots and conversion tools stay external. Published files are
stored individually, with tiny first-frame WebP previews. Keep future WoG
assets under a separate `wog/` edition directory. DEF original bytes are loaded
only on popup activation, through the separately imported Explorer decoder.
WAV PCM and H.264/AAC MP4 derivatives preserve sound rates and video frame
counts/rates. DEF carries no frame timing; its preview interval is adjustable.
Campaign summaries are prepared offline using the supplied Explorer parser.
Their lazy popup includes descriptions, scenario cards, minimaps, aggregate
statistics and map views without download controls. Minimap previews include H3M
object footprints and player ownership. XMI/IFR retain byte previews. TXT is skipped.

`WikiPage.svelte` owns one shared active audio/video player, with 50% initial
volume. Inactive controls are disabled except Play; navigation aborts playback.
`WikiDefPopup.svelte` shows frame groups and original names, aborts fetches on
close, and releases animation/cache resources. No full media or DEF decoder is
requested until activation. `resource-placements.json` retains the user's editorial
placements. `scripts/wiki/refine_catalog.py` applies them after import, pairs DEF/MSK
names case-insensitively and builds nested cross-page outlines on first pages.
Unspecified resources and masks without a DEF belong to Other files.
`unclassified.md` reports remaining unmatched names and missing LF references.

The content generator includes Wiki in the English LLM manifest and `en/wiki.md` offline mirror,
search and sitemap, and exports `llm/wiki-resources.json` with file provenance
and localized destinations. Use `npm run prepare:content` for generated files.

`WikiResourcePopup.svelte` opens images in a modal; only its external-link
button opens a new tab. Fonts use native-size indexed glyph sheets on a dark
surface in the dark theme and `#967044` in the light theme. Palettes retain source colors/flags and expose swatch
and HEX/RGB table views. DEF playback starts on open and group selection at
100ms by default. `WikiPagination.svelte` appears above and below multi-page
catalogs, with at most five numbered links and an ellipsis before the final
page when necessary. `scripts/wiki/enhance_catalog.py` and the offline-only
Explorer map parser prepare this presentation without adding archive parsing
to the browser. Existing per-font URLs remain readable for earlier links. Both
popups close on backdrop interaction and scroll their body independently of the
header. Masks expand on demand in their DEF row and popup. Pagination destinations
depend reactively on category and locale, even when the numbered window is unchanged.

## Scroll containers, Wiki outlines and bounded LLM retrieval

The `.content-column` owns article scrolling; `.site-grid` only lays out the three independent columns and must not become a shared scroll ancestor. Keep the reference pane constrained to its grid cell, the alphabet list independently scrollable and its final letter reachable at every window height. Global themed scrollbars use standard Firefox properties with Chromium/WebKit pixel-width fallbacks; the page-letter rail reserves its gutter and uses a 3px bar where supported.

`modding-guide:wiki-outline:v1` persists the shared Wiki disclosure state across pages and languages; settings reset clears it. `WikiOutline.svelte` retains native, readable no-JavaScript details markup.

`static/llm/browse/` is generator-owned. `scripts/content/build-llm.mjs` produces its complete hierarchy from the English published article records, symbols, sources and Wiki resources. The canonical shared entry page is `/en/docs/llm-map/`; it must stay small and link to bounded section/topic catalogs instead of rendering every article inline. Target text files at 24 KiB and cap every browse file at 48 KiB. Keep examples atomic and prove lossless article reconstruction, all-entity reachability, evidence/resource completeness and deployment URL resolution. Large legacy exports are optional offline mirrors, never the default retrieval path. Run `npm run prepare:content`; never edit browse files manually.

LLM exports use English only, including article metadata, registry labels, Wiki categories and canonical destinations. Do not generate `static/llm/ru/` or `static/llm/browse/ru/`. The generator removes obsolete Russian mirrors. Keep the ordinary site and its publication checks bilingual; the English LLM manifest is not the inventory for Russian HTML. Preserve original filenames, IDs, paths, hashes and code literals. Learning pages always link to `/en/docs/llm-map/`.
