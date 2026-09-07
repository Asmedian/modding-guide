# ERA Modding Guide project map

This file is the detailed architecture reference linked from [AGENTS.md](../AGENTS.md) and the [editing guide](EDITING_GUIDE.md).

## Data flow

```text
external source → editorial entity.json → ru.md / en.md
                → prerendered HTML → Pagefind
                → generated search index and LLM manifest
```

External sources are read only during editorial work. Production depends solely on normalized files under `content/`.

## Top-level directories

- `content/`: schemas, sources, navigation, redirects, and localized documentation.
- `src/`: SvelteKit routes, components, i18n, content loading, search, and CSS.
- `scripts/content/`: deterministic generation of search and LLM artifacts.
- `static/`: favicon, robots rules, and machine-readable outputs copied to the site root.
- `tests/`: dependency-free Node tests for publication rules and navigation.
- `design/`: approved concept references and implementation decision.
- `.github/workflows/`: validation and GitHub Pages deployment.

## Route map

- `/` chooses a saved locale; first visit uses English only when the browser language begins with `en`, otherwise Russian.
- `/{lang}/` is the documentation home.
- `/{lang}/docs/` is the documentation overview.
- `/{lang}/docs/{slug}/` is loaded from `content/docs/**/entity.json` plus the selected locale Markdown file.
- `/{lang}/erm/` and `/{lang}/erm/{slug}/` load the ERM overview and articles from `content/erm`.
- `/{lang}/erm/learn/` is deliberately heading-only.
- `/api/reference/{lang}/{slug}.json` contains a prerendered copy of the article title and body for contextual navigation. `_overview.json` is the overview; these files require no server runtime.

The `[lang=locale]` matcher accepts only `ru` and `en`. HTML routes use trailing slashes; static `.json` reference routes do not. All are prerendered. SvelteKit uses `paths.relative: false` so SSR and client-side language switching use the same configured `BASE_PATH`, without duplicating a repository prefix.

## Rendering

The entire header and three-column layout share a centered `site-frame` capped by `--site-max: 1600px`. Wider screens add only symmetrical outer gutters, with a subdued theme-aware gradient on `body`; they do not spread the sidebars apart. The frame has no scrolling/clipping overflow so sticky navigation still follows the document. The header uses intrinsic-width brand/navigation/actions and a shrinkable search control; compact spacing starts at 1440 px, and the existing mobile layout starts at 1200 px. The search label truncates independently of its icon and keyboard shortcut.

`src/lib/server/content.ts` loads published metadata and localized Markdown at build time, validates source references, renders the supported Markdown subset, and extracts the right-column outline. `src/lib/reference/rich.mjs` validates inert `:::erm` blocks, extracts their searchable text and source anchors, highlights ERM syntax without changing code characters, and provides exact HEX conversion. `src/styles/erm-reference.css` adapts the retained source presentation to both site themes. `ArticlePage.svelte` provides the semantic article shell, source panel, and adjacent-page navigation.

`AppShell.svelte` owns the desktop three-column layout, mobile drawer, theme controls, disabled future-section placeholders, GitHub entry, and the search shortcut. It also delegates native input events from rich reference blocks to the HEX converters and object-table filter, including blocks loaded dynamically into the contextual panel. Its `content-column` fills the entire middle grid track and paints the background; the nested `content-inner` alone limits line width and applies responsive padding. `LanguageMenu.svelte` preserves the current entity and fragment while changing locales. The shell dynamically imports `SearchDialog.svelte` only after the user opens search. In production the dialog waits for a two-character query before loading Pagefind and its active-language shard; it does not download the generated multi-megabyte compact index or symbol catalog. Development mode retains those deterministic generated indexes because Pagefind does not exist until a production build. Result HTML is reduced to text and mark ranges; other markup is never injected. Changing locale updates the document language and creates a fresh search instance when the dialog is reopened.

The “This page” scope stays inside `SearchDialog.svelte`, using the same query input. It displays the active match's highlighted excerpt, a counter, and previous/next buttons. Arrow keys or buttons immediately scroll the article to the selected occurrence; Enter/Shift+Enter move forwards/backwards. `src/lib/search/page-search.mjs` groups text by block, finds literal matches across inline markup, and restores original text-node references on cleanup. Closing the dropdown, changing scope, or navigating removes temporary article marks. The old separate `PageFind.svelte` bar was removed.

`AppShell.svelte` retains `searchQuery` and `searchScope` while the dropdown is closed and binds them back when it opens. A document-level capturing `pointerdown` listener closes it anywhere outside the dropdown and its search triggers, without an overlay blocking page interaction. The listener is removed when the shell is destroyed. Query text stays only in memory; closing the dropdown does not save search text to persistent browser storage.

## ERM interface and content

`ErmAlphabet.svelte` renders all 213 legacy index entries, retaining child indentation. The list scrolls independently beside a fixed vertical alphabet and contains no search control. The Russian rail omits Ё, Й, Ы, Ъ, and Ь; present rail letters without a destination are disabled. `ErmQuickLinks.svelte` renders the 28 trigger families and 76 receiver codes with localized full-name tooltips.

`ContextReference.svelte` replaces the documentation outline on ERM pages. Central table/constant/global links open there; subsequent internal ERM links continue within the panel. `src/lib/reference/history.mjs` manages independent history, branch replacement, and scroll restoration. `src/lib/reference/context.mjs` prefixes panel IDs and resolves relative links while the static JSON endpoints are prerendered, avoiding a large string rewrite on old clients. Mouse buttons 4/5 are handled only by events targeting the panel. On small screens the panel opens as a dismissible overlay. It does not use browser history for its internal transitions.

The same Markdown loader produces the central body and static reference JSON. Context rendering resolves relative links and image paths against the canonical article URL and prefixes IDs to prevent collisions with the central article. Every transferred legacy link targets a canonical route and an exact namespaced source anchor. Table-row anchors support direct links to individual IDs; the table parser preserves ERM pipes inside inline code.

`content/erm/_registry/` holds normalized source coverage, the full legacy link graph, hierarchy, symbols, Framework inventories, forum classifications, asset provenance, and `full-transfer-audit.json`. The audit records source hashes, text slots, code hashes, link occurrences, images, and the rendered text hash for all 223 non-learning pages. `legacy-commands.json` records 544 separate command destinations taken from the source blocks. The old frameset, JavaScript, and page styles do not run on the site. See [ERM content audit](ERM_CONTENT_AUDIT.md) for scope and limits.

## Localization

Short interface strings use stable keys in `src/lib/i18n`. Technical metadata is shared. Long copy is paired Markdown. The language summary displays only the current `RU` or `EN`, with a stationary downward SVG chevron inheriting the text color. Language switching replaces only the first URL segment, preserving the entity path and fragment. Locale links use `data-sveltekit-reload` for document navigation, avoiding the Chrome DevTools soft-navigation crash reported in [web-vitals #792](https://github.com/GoogleChrome/web-vitals/issues/792). This is a scoped workaround, not a patch to browser instrumentation; ordinary internal links retain SvelteKit client navigation. Route-derived links remain reactive.

## Local state

Preferences use `modding-guide:preferences:v1`; navigation uses `modding-guide:navigation:v1`. Storage access is guarded so blocked or damaged `localStorage` cannot prevent reading the site.

## Browser baseline

Vite targets Chrome 109, Edge 109, and Firefox 115. CSS avoids unsupported must-have features and costly fixed-background or backdrop-filter effects. The core HTML, normal links, articles, and sidebar exist in prerendered markup.

Automated checks do not replace the required release smoke test in a real Chrome 109 / Windows 7 environment.

## Performance contract

The first response remains useful without JavaScript. The saved theme is applied by a tiny guarded head script before the stylesheet paints, while Svelte takes over later. SvelteKit data preloading uses `tap`, not `hover`, so moving a pointer across the large navigation cannot start accidental article downloads on a constrained connection. Search UI code is a separate user-triggered chunk; Pagefind is loaded only after a meaningful production query. Article images are local and lazy-decoded; `src/lib/server/image-dimensions.ts` derives intrinsic dimensions for local PNG, GIF, JPEG, and BMP files during prerender so they do not cause layout shifts. Chromium uses `content-visibility` to skip layout and paint for distant blocks; Firefox 115 ignores that enhancement and still receives the complete document.

`npm run verify:performance` runs after the production build and writes `reports/performance-budget.json`. It caps each localized home page at 32 KiB raw HTML, initial modulepreloaded JavaScript at 190 KiB, initial CSS at 48 KiB, the estimated Brotli-compressed initial payload at 72 KiB, and every deferred application JavaScript chunk at 768 KiB. It also rejects rendered images without numeric intrinsic dimensions. The chunk cap prevents the generated search corpus from silently becoming a production browser bundle. Budgets are regression limits, not targets to fill; change them only from measurements on the declared browser/device baseline.

## Generated files

`src/lib/generated/search-index.ts`, `src/lib/generated/symbol-index.json`, `static/llm/manifest.json`, locale Markdown bundles, and `llms*.txt` are generated by `scripts/content/build-derived.mjs`. Search entries include anchored article segments, rich reference text, and code so development search can reproduce every body match without Pagefind; the production browser does not load this corpus. The human LLM map renders its complete catalog from the same article registry. `scripts/content/build-symbols.mjs` merges the 544 separately anchored legacy commands with events, Framework functions, globals, and constants. Both languages receive separate `docs.md` and `erm.md` LLM bundles. Public machine URLs honor `BASE_PATH` and become absolute when `SITE_ORIGIN` is present. The sitemap includes both home pages and all articles; a stale deployment sitemap is removed from local builds. Do not edit generated files manually.

`scripts/content/verify-build.mjs` runs at the end of every production build. It checks built HTML links, assets, anchors, symbol destinations, manifest destinations, sitemap coverage when configured, and accidental machine-specific paths. It also verifies that every contextual JSON file matches its complete canonical article body. It writes `reports/build-validation.json`. Content tests validate the keyword subset used by the checked-in JSON schemas; unsupported schema keywords fail closed. Maintainer-guide links and documented top-level directories are tested too.

`npm run preview` uses `scripts/preview.mjs` to serve the final `build/` artifact on loopback. This includes the post-build Pagefind files that are absent from SvelteKit's intermediate preview output. Keep the same `BASE_PATH` when previewing a repository-path build.

Optional adapter precompression is disabled: generating two compression streams per reference file exceeded the Windows open-file limit at this content volume. The static artifact contains the original HTML, JSON, images, and search assets; the preview server serves those files directly.

## Editorial inputs

`content/_sources/source-files.json` names external source sets without storing machine-specific paths. The current documentation uses ERA source, changelog, legacy help, the installed ERA Tools bundle, ERA ERM Framework, permitted forum material, and attributed API references. Selected original reference images are tracked by source path and hash; they retain third-party rights. Tool help files and executable metadata receive individual immutable records in `sources.json`; raw binaries and help files stay outside the repository. `scripts/development-inputs.example.json` documents the expected local mapping shape.

`.pages.yml` provides an optional Pages CMS view for paired Markdown and interface/navigation files. Creation and deletion of articles remain disabled there because a publishable article also requires a matching locale file, `entity.json`, provenance, and relation updates.

## Files that usually change together

- New article: metadata, both locale files, sources, optional navigation, and adjacent links.
- New UI label: both dictionaries and the consuming component.
- Route or schema change: source code, tests, AGENTS, this map, and the editing guide.
- Browser feature change: Vite target, compatibility notes, and manual smoke-test record.
