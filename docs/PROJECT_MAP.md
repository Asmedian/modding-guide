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

- `/` chooses a saved locale in an inline head script before the body paints; a first visit uses Russian only for a Russian browser locale and English otherwise. With JavaScript disabled, the otherwise empty route exposes direct RU/EN links.
- `/{lang}/` is the documentation home.
- `/{lang}/docs/` is the documentation overview.
- `/{lang}/docs/{slug}/` is loaded from `content/docs/**/entity.json` plus the selected locale Markdown file.
- `/{lang}/erm/` and `/{lang}/erm/{slug}/` load the ERM overview and articles from `content/erm`.
- `/{lang}/erm/learn/` is deliberately heading-only.
- `/{lang}/plugins/`, `/{lang}/plugins/getting-started/`, `/{lang}/plugins/era-api/`, and `/{lang}/plugins/nh3api/` load the plugin guide from `content/plugins` with NH3API kept as an internal sidebar group.
- `/api/reference/{lang}/{slug}.json` contains a prerendered copy of the article title and body for contextual navigation. `_overview.json` is the overview; these files require no server runtime.

The `[lang=locale]` matcher accepts only `ru` and `en`. HTML routes use trailing slashes; static `.json` reference routes do not. All are prerendered. SvelteKit uses `paths.relative: false` so SSR and client-side language switching use the same configured `BASE_PATH`, without duplicating a repository prefix.

## Rendering

The entire header and three-column layout share a centered `site-frame` capped by `--site-max: 1920px`. The desktop navigation and contextual-reference columns are deliberately wider, while the middle article remains line-length constrained. Wider screens add only symmetrical outer gutters, with a subdued theme-aware gradient on `body`. The frame owns the viewport: its header and mobile search row remain outside the independently scrolling three-column content area, so article content always stops below the translucent menu. The header uses intrinsic-width brand/navigation/actions and a shrinkable search control; compact spacing starts at 1440 px, and the mobile layout starts at 1200 px. The search label truncates independently of its icon and keyboard shortcut, while the shortcut hint is omitted on mobile.

`src/lib/server/content.ts` eagerly indexes only compact published metadata. Localized Markdown is represented by lazy Vite import functions and is read, validated, and rendered only when its article is requested; resolved articles are cached for repeated prerender endpoints. Before rendering, the publication filter removes retired changelog/credits material, consolidates duplicated legacy headings, merges corresponding legacy and normalized ERM lookup tables without dropping unique cells or anchors, adds sortable headers, and normalizes HEX/RGB notation to the `0x` form. The symbol catalog is imported only by its dedicated ERM index page. This avoids the former first-route development stall caused by compiling and rendering all 1016 Markdown documents. `src/lib/reference/rich.mjs` validates inert `:::erm` blocks, extracts their searchable text and source anchors, highlights ERM syntax without changing code characters, and provides exact HEX conversion. `src/styles/erm-reference.css` adapts the retained source presentation to both site themes. `ArticlePage.svelte` provides the semantic article shell, source panel, and adjacent-page navigation.

`AppShell.svelte` owns the desktop three-column layout, mobile drawer, persisted navigation state, theme controls, section sidebars, GitHub entry, settings reset, and the search shortcut. Route-level page components select the curated Docs, ERM, or Plugins navigation and pass it into the shared shell, avoiding duplicate layouts and keeping inactive navigation data out of the initial JavaScript bundle; only Lua remains deferred. It also delegates native input events from rich reference blocks to the HEX converters, object-table filter, and sortable ERM table headers, including blocks loaded dynamically into the contextual panel. Its `content-column` fills the entire middle grid track and paints the background; the nested `content-inner` alone limits line width and applies responsive padding. `LanguageMenu.svelte` preserves the current entity and fragment while changing locales and lists English before Russian. The shell dynamically imports `SearchDialog.svelte` after explicit search intent and opens it only when the small UI chunk is ready, without rendering an intermediate loader. In production the dialog waits for a two-character query before loading Pagefind and its active-language shard; it does not download the generated multi-megabyte compact index or symbol catalog. While Pagefind is working, the dialog shows a lightweight localized progress label. Development mode retains those deterministic generated indexes because Pagefind does not exist until a production build. Result HTML is reduced to text and mark ranges; other markup is never injected. Changing locale updates the document language and creates a fresh search instance when the dialog is reopened.

The “This page” scope stays inside `SearchDialog.svelte`, using the same query input. It displays the active match's highlighted excerpt, a counter, and previous/next buttons. Arrow keys or buttons immediately scroll the article to the selected occurrence without wrapping past the first or last result; Enter/Shift+Enter move forwards/backwards. `src/lib/search/page-search.mjs` groups text by block, finds literal matches across inline markup, and restores original text-node references on cleanup. Closing the dropdown, changing scope, or navigating removes temporary article marks. The old separate `PageFind.svelte` bar was removed.

`AppShell.svelte` retains `searchQuery` and `searchScope` while the dropdown is closed and binds them back when it opens. A document-level capturing `pointerdown` listener closes it anywhere outside the dropdown and its search triggers, without an overlay blocking page interaction. The listener is removed when the shell is destroyed. Query text stays only in memory; closing the dropdown does not save search text to persistent browser storage.

## ERM interface and content

`ErmAlphabet.svelte` renders all 213 legacy index entries, retaining child indentation. The list scrolls independently beside a fixed vertical alphabet and contains no search control. The Russian rail omits Ё, Й, Ы, Ъ, and Ь; present rail letters without a destination are disabled. `ErmQuickLinks.svelte` renders the 28 trigger families and 76 receiver codes with immediate localized CSS tooltips, places all object receivers in one naturally wrapping sequence, highlights the current receiver/trigger, and persists its expanded state. A collapsed block still identifies the active receiver or trigger.

`ContextReference.svelte` replaces the documentation outline on ERM pages. Central table/constant/global links open there; subsequent internal ERM links continue within the panel. `src/lib/reference/history.mjs` manages independent history, branch replacement, and scroll restoration. `src/lib/reference/context.mjs` prefixes panel IDs and resolves relative links while the static JSON endpoints are prerendered, avoiding a large string rewrite on old clients. Capture-phase handling reserves mouse buttons 4/5 for that independent history only when the button event's composed path is inside the panel, preventing a simultaneous main-page navigation without relying on stale hover state. On small screens the panel opens as a dismissible overlay. It does not use browser history for its internal transitions.

The same Markdown loader produces the central body and static reference JSON. Context rendering resolves relative links and image paths against the canonical article URL and prefixes IDs to prevent collisions with the central article. Every transferred legacy link targets a canonical route and an exact namespaced source anchor. Table-row anchors support direct links to individual IDs; the table parser preserves ERM pipes inside inline code.

`content/erm/_registry/` holds normalized source coverage, the full legacy link graph, hierarchy, symbols, Framework inventories, forum classifications, asset provenance, and `full-transfer-audit.json`. The audit records source hashes, text slots, code hashes, link occurrences, images, and the rendered text hash for all 223 non-learning pages. `legacy-commands.json` records 544 separate command destinations taken from the source blocks. The old frameset, JavaScript, and page styles do not run on the site. See [ERM content audit](ERM_CONTENT_AUDIT.md) for scope and limits.

## Localization

Short interface strings use stable keys in `src/lib/i18n`. Technical metadata is shared. Long copy is paired Markdown. The language summary displays only the current `RU` or `EN`, with a stationary downward SVG chevron inheriting the text color; the expanded menu lists English first. Language switching replaces only the first URL segment, preserving the entity path and fragment. Locale links use `data-sveltekit-reload` for document navigation, avoiding the Chrome DevTools soft-navigation crash reported in [web-vitals #792](https://github.com/GoogleChrome/web-vitals/issues/792). This is a scoped workaround, not a patch to browser instrumentation; ordinary internal links retain SvelteKit client navigation. Route-derived links remain reactive.

## Local state

Preferences use `modding-guide:preferences:v1`; navigation uses `modding-guide:navigation:v1`; ERM quick-link expansion uses `modding-guide:erm-quick-links:v1`. The settings reset clears all three stores and restores their defaults immediately. Storage access is guarded so blocked or damaged `localStorage` cannot prevent reading the site.

## Browser baseline

Vite targets Chrome 109, Edge 109, and Firefox 115. CSS avoids unsupported must-have features and costly fixed-background or backdrop-filter effects. The core HTML, normal links, articles, and sidebar exist in prerendered markup.

Automated checks do not replace the required release smoke test in a real Chrome 109 / Windows 7 environment.

## Performance contract

The first response remains useful without JavaScript. The saved theme and root locale redirect are applied by tiny guarded head scripts before the body paints, while Svelte takes over later. There are no visible splash screens or route loaders. SvelteKit data preloading uses `tap`, not `hover`, so moving a pointer across the large navigation cannot start accidental article downloads on a constrained connection. In development only, the already rendered home page silently warms the two small section-overview requests and Vite warms their frequently used modules; production does not spend network traffic this way. Search UI code is a separate user-intent chunk; Pagefind is loaded only after a meaningful production query. Article images are local and lazy-decoded; `src/lib/server/image-dimensions.ts` derives intrinsic dimensions for local PNG, GIF, JPEG, and BMP files during prerender so they do not cause layout shifts. Long ERM articles are rendered and painted as complete documents instead of relying on deferred `content-visibility` sections whose late appearance was easy to mistake for incomplete loading.

`npm run verify:performance` runs after the production build and writes `reports/performance-budget.json`. It caps each localized home page at 32 KiB raw HTML, initial modulepreloaded JavaScript at 192 KiB, initial CSS at 48 KiB, the estimated Brotli-compressed initial payload at 72 KiB, and every deferred application JavaScript chunk at 768 KiB. It also rejects rendered images without numeric intrinsic dimensions. The 2 KiB measured adjustment accommodates persisted navigation, sortable reference tables, and the ERM quick-link controls while leaving the compressed first load below its existing 72 KiB ceiling. The chunk cap prevents the generated search corpus from silently becoming a production browser bundle. Budgets are regression limits, not targets to fill; change them only from measurements on the declared browser/device baseline.

## Generated files

`src/lib/generated/search-index.ts`, `src/lib/generated/symbol-index.json`, `static/llm/manifest.json`, locale Markdown bundles, and `llms*.txt` are generated by `scripts/content/build-derived.mjs`. The generator applies the same publication filter as HTML rendering so retired changelogs, credits, and WoG-team material cannot remain searchable or appear in machine-readable bundles. Search entries include anchored article segments, rich reference text, and code so development search can reproduce every body match without Pagefind; the production browser does not load this corpus. The human LLM map renders its complete catalog from the same article registry. `scripts/content/build-symbols.mjs` merges the 544 separately anchored legacy commands with events, Framework functions, globals, and constants. Both languages receive separate `docs.md`, `erm.md`, and `plugins.md` LLM bundles. Public machine URLs honor `BASE_PATH` and become absolute when `SITE_ORIGIN` is present. The sitemap includes both home pages and all articles; a stale deployment sitemap is removed from local builds. Do not edit generated files manually.

`scripts/content/verify-build.mjs` runs at the end of every production build. It checks built HTML links, assets, anchors, symbol destinations, manifest destinations, sitemap coverage when configured, and accidental machine-specific paths. It also verifies that every contextual JSON file matches its complete canonical article body. It writes `reports/build-validation.json`. Content tests validate the keyword subset used by the checked-in JSON schemas; unsupported schema keywords fail closed. Maintainer-guide links and documented top-level directories are tested too.

`npm run preview` uses `scripts/preview.mjs` to serve the final `build/` artifact on loopback. This includes the post-build Pagefind files that are absent from SvelteKit's intermediate preview output. Keep the same `BASE_PATH` when previewing a repository-path build.

Optional adapter precompression is disabled: generating two compression streams per reference file exceeded the Windows open-file limit at this content volume. The static artifact contains the original HTML, JSON, images, and search assets; the preview server serves those files directly.

## Editorial inputs

`content/_sources/source-files.json` names external source sets without storing machine-specific paths. The current documentation uses ERA source, changelog, legacy help, the installed ERA Tools bundle, ERA ERM Framework, permitted forum material, attributed API references, and a pinned NH3API repository snapshot. Selected original reference images are tracked by source path and hash; they retain third-party rights. Tool help files and executable metadata receive individual immutable records in `sources.json`; raw binaries, help files, and NH3API checkout stay outside the repository. `scripts/development-inputs.example.json` documents the expected local mapping shape.

`.pages.yml` provides an optional Pages CMS view for paired Markdown and interface/navigation files. Creation and deletion of articles remain disabled there because a publishable article also requires a matching locale file, `entity.json`, provenance, and relation updates.

## Files that usually change together

- New article: metadata, both locale files, sources, optional navigation, and adjacent links.
- New UI label: both dictionaries and the consuming component.
- Route or schema change: source code, tests, AGENTS, this map, and the editing guide.
- Browser feature change: Vite target, compatibility notes, and manual smoke-test record.
