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
- `.github/workflows/`: validation and GitHub Pages deployment.

## Route map

- `/` chooses a saved locale in an inline head script before the body paints; a first visit uses Russian only for a Russian browser locale and English otherwise. With JavaScript disabled, the otherwise empty route exposes direct RU/EN links.
- `/{lang}/` is the site welcome page. It has no selected top-level section or desktop left sidebar; its main column uses that space.
- `/{lang}/docs/` is the documentation overview.
- `/{lang}/docs/{slug}/` is loaded from `content/docs/**/entity.json` plus the selected locale Markdown file.
- `/{lang}/erm/` and `/{lang}/erm/{slug}/` load the ERM overview and articles from `content/erm`.
- `/{lang}/erm/learn/` renders paired published Markdown for AI-assisted learning, the full public LLM-map link and four prompt disclosures.
- `/{lang}/plugins/`, `/{lang}/plugins/getting-started/`, `/{lang}/plugins/era-api/`, `/{lang}/plugins/nh3api/`, and `/{lang}/plugins/h3api/` load the plugin guide from `content/plugins`; H3API and NH3API have separate navigation groups.
- `/api/reference/{lang}/{slug}.json` contains a prerendered copy of the article title and body for contextual navigation. `_overview.json` is the overview; these files require no server runtime.

The `[lang=locale]` matcher accepts only `ru` and `en`. HTML routes use trailing slashes; static `.json` reference routes do not. All are prerendered. SvelteKit uses `paths.relative: false` so SSR and client-side language switching use the same configured `BASE_PATH`, without duplicating a repository prefix.

## Rendering

On the welcome page, `AppShell.svelte` leaves every top-level tab unselected and hides the desktop Docs sidebar. A two-column grid lets the home content fill the freed width. Code-block copy buttons show a local success hint for two seconds.

The entire header and three-column layout share a centered `site-frame` capped by `--site-max: 1920px`. The desktop navigation and contextual-reference columns are deliberately wider, while the middle article remains line-length constrained. Theme surfaces use static colors; the light parchment effect adds a reusable 64×64 alpha PNG instead of runtime CSS gradients. The frame owns the viewport: its header and mobile search row remain outside a height-constrained grid. `.content-column`, `.sidebar-scroll` and the context pane scroll independently. The grid itself has no overflowing content; the right pane is never inside the article scroller, preserving native middle-click ownership at different zoom levels. The header uses intrinsic-width brand/navigation/actions and a shrinkable search control; compact spacing starts at 1440 px, and the mobile layout starts at 1200 px. The search label truncates independently of its icon and keyboard shortcut, while the shortcut hint is omitted on mobile.

`src/lib/server/content.ts` eagerly indexes only compact published metadata. Localized Markdown is represented by lazy Vite import functions and is read, validated, and rendered only when its article is requested; resolved articles are cached for repeated prerender endpoints. Before rendering, the publication filter removes retired changelog/credits material and the unrelated engineering-analysis preface from the syntax view, consolidates duplicated legacy headings, merges corresponding legacy and normalized ERM lookup tables without dropping unique cells or anchors, adds sortable headers, normalizes HEX/RGB notation to the `0x` form, and selects the light/dark optimized battlefield diagram assets without generating a wide HTML grid. The renderer adds linked heading controls and consistent language/copy/line-number chrome around code blocks while keeping copied code unchanged. The symbol catalog is imported only by its dedicated ERM index page. This avoids the former first-route development stall caused by compiling and rendering all 1016 Markdown documents. `src/lib/reference/rich.mjs` validates inert `:::erm` blocks, extracts their searchable text and source anchors, highlights ERM syntax without changing code characters, renders indented parameter descriptions as wrapping prose, and provides exact HEX conversion. `src/styles/erm-reference.css` adapts the retained source presentation to both site themes and is loaded by the ERM route layout, keeping reference-only styles out of the welcome, Docs, and Plugins payloads. `ArticlePage.svelte` provides the semantic article shell, source panel, and adjacent-page navigation.

`RadixConverter.svelte` adds a compact HEX↔DEC dropdown immediately to the right of desktop and mobile search. A vertical HEX/DEC switch selects the input base, one text field validates complete integer input reactively, and the copy icon copies the converted result. `src/lib/reference/radix.mjs` uses BigInt for exact signed conversion, including values beyond Number precision. Switching bases preserves the represented number; invalid input disables copying. Escape, outside interaction, focus leaving the dropdown, and navigation close it. No input is persisted.

`AppShell.svelte` owns the desktop three-column layout, mobile drawer, persisted navigation state, theme controls, section sidebars, GitHub entry, settings reset, code/anchor copy actions, and the search shortcut. It retains each section sidebar's scroll position across route-component changes, resets the central scroller for ordinary link navigation, and closes language/search menus on outside interaction. Route-level page components select the curated Docs, ERM, or Plugins navigation and pass it into the shared shell, avoiding duplicate layouts and keeping inactive navigation data out of the initial JavaScript bundle; the large ERM alphabet, receiver, and trigger registries are likewise supplied only by ERM-capable article routes. Only Lua remains deferred. It also delegates native input events from rich reference blocks to the HEX converters, object-table filter, and sortable ERM table headers, including blocks loaded dynamically into the contextual panel. Its `content-column` fills the entire middle grid track and paints the background; the nested `content-inner` alone limits line width and applies responsive padding. The documentation-side motto card uses the local ERA phoenix artwork as a responsive background. `LanguageMenu.svelte` preserves the current entity and fragment while changing locales and lists English before Russian. The shell dynamically imports `SearchDialog.svelte` after explicit search intent and opens it only when the small UI chunk is ready, without rendering an intermediate loader. In production the dialog waits for a two-character query before loading Pagefind and its active-language shard; it does not download the generated multi-megabyte compact index or symbol catalog. While Pagefind is working, the dialog shows a lightweight localized progress label. Development mode retains those deterministic generated indexes because Pagefind does not exist until a production build. The LLM content-map article remains directly accessible but is omitted from both production Pagefind and the development search corpus. Result HTML is reduced to text and mark ranges; other markup is never injected. Changing locale updates the document language and creates a fresh search instance when the dialog is reopened.

The “This page” scope stays inside `SearchDialog.svelte`, using the same query input. It displays the active match's highlighted excerpt, a counter, and previous/next buttons. Arrow keys or buttons immediately scroll the article to the selected occurrence without wrapping past the first or last result; Enter/Shift+Enter move forwards/backwards. `src/lib/search/page-search.mjs` groups text by block, finds literal matches across inline markup, and restores original text-node references on cleanup. Closing the dropdown, changing scope, or navigating removes temporary article marks. The old separate `PageFind.svelte` bar was removed.

`AppShell.svelte` retains `searchQuery` and `searchScope` while the dropdown is closed and binds them back when it opens. A document-level capturing `pointerdown` listener closes it anywhere outside the dropdown and its search triggers, without an overlay blocking page interaction. The listener is removed when the shell is destroyed. Query text stays only in memory; closing the dropdown does not save search text to persistent browser storage.

## ERM interface and content

`ErmAlphabet.svelte` renders all 213 legacy index entries in the right context column by default, retaining child indentation. The list scrolls independently beside a fixed vertical alphabet and contains no search control. The Russian rail omits Ё, Й, Ы, Ъ, and Ь; present rail letters without a destination are disabled. Receiver and trigger detail pages also display a fixed rail with only the command letters present on that page. `ErmQuickLinks.svelte` renders the 28 trigger families and 76 receiver codes with immediate localized CSS tooltips, places all object receivers in one naturally wrapping sequence, highlights the current receiver/trigger, and persists its expanded state. A collapsed block still identifies the active receiver or trigger.

`ContextReference.svelte` replaces the documentation outline on ERM pages. Its index link returns the right column to the alphabetical menu. Central table/constant/global links open there; subsequent internal ERM links continue within the panel. `src/lib/reference/history.mjs` manages independent history, branch replacement, and scroll restoration. `src/lib/reference/context.mjs` prefixes panel IDs and resolves relative links while the static JSON endpoints are prerendered, avoiding a large string rewrite on old clients. Capture-phase handling reserves mouse buttons 4/5 for that independent history only when the button event's composed path is inside the panel, preventing a simultaneous main-page navigation without relying on stale hover state. On small screens the panel opens as a dismissible overlay. It does not use browser history for its internal transitions.

The same Markdown loader produces the central body and static reference JSON. Context rendering resolves relative links and image paths against the canonical article URL and prefixes IDs to prevent collisions with the central article. Every transferred legacy link targets a canonical route and an exact namespaced source anchor. Table-row anchors support direct links to individual IDs; the table parser preserves ERM pipes inside inline code.

`content/erm/_registry/` holds normalized source coverage, the full legacy link graph, hierarchy, symbols, Framework inventories, forum classifications, asset provenance, and `full-transfer-audit.json`. The audit records source hashes, text slots, code hashes, link occurrences, images, and the rendered text hash for all 223 non-learning pages. `legacy-commands.json` records 544 separate command destinations taken from the source blocks. The old frameset, JavaScript, and page styles do not run on the site. `english-transfer-audit.json` keeps the original extraction fingerprints and records the reviewed English output text fingerprint; translation corrections refresh only that output fingerprint. Russian presentation/text fingerprints, both locales’ code examples, links, anchors, and illustrations remain independently checked.

## Localization

Short interface strings use stable keys in `src/lib/i18n`. Technical metadata is shared. Long copy is paired Markdown. The language summary displays only the current `RU` or `EN`, with a stationary downward SVG chevron inheriting the text color; the expanded menu lists English first. Language switching replaces only the first URL segment, preserving the entity path and fragment. Locale links use `data-sveltekit-reload` for document navigation, avoiding the Chrome DevTools soft-navigation crash reported in [web-vitals #792](https://github.com/GoogleChrome/web-vitals/issues/792). This is a scoped workaround, not a patch to browser instrumentation; ordinary internal links retain SvelteKit client navigation. Route-derived links remain reactive.

## Local state

Preferences use `modding-guide:preferences:v1`; navigation uses `modding-guide:navigation:v1` and stores the IDs of collapsed groups across every section (all groups are open by default); ERM quick-link expansion uses `modding-guide:erm-quick-links:v1`. Wiki outline expansion uses `modding-guide:wiki-outline:v1`. The settings reset clears all four stores and immediately opens every navigation group. Storage access is guarded so blocked or damaged `localStorage` cannot prevent reading the site.

## Browser baseline

Vite targets Chrome 109, Edge 109, and Firefox 115. CSS avoids unsupported must-have features and costly fixed-background or backdrop-filter effects. The core HTML, normal links, articles, and sidebar exist in prerendered markup.

Automated checks do not replace the required release smoke test in a real Chrome 109 / Windows 7 environment.

## Performance contract

The first response remains useful without JavaScript. The saved theme and root locale redirect are applied by tiny guarded head scripts before the body paints, while Svelte takes over later. There are no visible splash screens or route loaders. SvelteKit data preloading uses `tap`, not `hover`, so moving a pointer across the large navigation cannot start accidental article downloads on a constrained connection. In development only, the already rendered home page silently warms the two small section-overview requests and Vite warms their frequently used modules; production does not spend network traffic this way. Search UI code is a separate user-intent chunk; Pagefind is loaded only after a meaningful production query. Article images are local and lazy-decoded; `src/lib/server/image-dimensions.ts` derives intrinsic dimensions for local PNG, GIF, JPEG, and BMP files during prerender so they do not cause layout shifts. Long ERM articles are rendered and painted as complete documents instead of relying on deferred `content-visibility` sections whose late appearance was easy to mistake for incomplete loading.

`npm run verify:performance` runs after the production build and writes `reports/performance-budget.json`. It caps each localized home page at 32 KiB raw HTML, initial modulepreloaded JavaScript at 192 KiB, initial CSS at 48 KiB, the estimated Brotli-compressed initial payload at 72 KiB, and every deferred application JavaScript chunk at 768 KiB. It also rejects rendered images without numeric intrinsic dimensions. The 2 KiB measured adjustment accommodates persisted navigation, sortable reference tables, and the ERM quick-link controls while leaving the compressed first load below its existing 72 KiB ceiling. The chunk cap prevents the generated search corpus from silently becoming a production browser bundle. Budgets are regression limits, not targets to fill; change them only from measurements on the declared browser/device baseline.

`npm run verify:render-performance` builds the production artifact and drives the same linear scroll through `/ru/erm/framework/functions/` in dark and light Chromium contexts. Two alternating runs per theme collect `requestAnimationFrame` dropped-frame estimates and Chrome trace `RasterTask` time, reject CSS gradients detected in computed styles, enforce per-theme frame/raster ceilings, and prevent the light raster cost from materially diverging from dark. The report at `reports/render-performance.json` records individual runs, medians, Chromium version, and GPU feature status. `CHROMIUM_PATH` selects a browser explicitly; `RENDER_PERF_HEADLESS=0` runs a visible local hardware check, while the other `RENDER_PERF_*` variables support deliberate baseline calibration.

## Generated files

`src/lib/generated/search-index.ts`, `src/lib/generated/symbol-index.json`, `static/llm/manifest.json`, locale Markdown bundles, and `llms*.txt` are generated by `scripts/content/build-derived.mjs`. The generator applies the same publication filter as HTML rendering so retired changelogs, credits, and WoG-team material cannot remain searchable or appear in machine-readable bundles. Search entries include anchored article segments, rich reference text, and code so development search can reproduce every body match without Pagefind; the production browser does not load this corpus. The human LLM map stays compact and links the complete bounded catalog generated from the same article registry. `scripts/content/build-symbols.mjs` merges the 544 separately anchored legacy commands with events, Framework functions, globals, and constants. LLM exports use only English `docs.md`, `erm.md`, `plugins.md` and `wiki.md` bundles with stable article IDs, canonical URLs, and source references. The manifest includes previous/next relationships, section-level provenance, and all four English offline bundle URLs. `static/llm/sources.json` exports the complete source registry; `static/llm/reference.json` exports the ERM alphabet, receivers, trigger families, events, Framework symbols/files, separate legacy command destinations, links, and asset provenance. All published English entities and their complete publication-filtered bodies are checked against these artifacts. Public machine URLs honor `BASE_PATH` and become absolute when `SITE_ORIGIN` is present. The sitemap includes both home pages and all articles; a stale deployment sitemap is removed from local builds. Do not edit generated files manually.

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

## Wiki resource catalog

Wiki appears after Plugins at `/{lang}/wiki/`. It remains fully prerendered.
`content/wiki/` contains paired locale catalogs; `_registry/pages.json` stores
at most 72 resource references per page. Wiki is an explicit LF-driven sidebar
exception to editorial curation; it still uses at most two menu levels and
at most twelve leaves per group. Sounds, videos and the combined font catalog are direct links without
submenus. SoD marks leaf links and resources; expandable menu headings omit it.

`scripts/wiki/import_resources.py` uses external LOD/SND/VID archives and LF
classification trees, Pillow, Node.js and FFmpeg to produce `static/assets/wiki/sod/`.
Archive snapshots and conversion tools stay external. Published files are
stored individually, with tiny first-frame WebP previews. WoG assets live under a separate `wog/` edition directory; AB uses `ab/`. DEF original bytes are loaded
only on popup activation, through the separately imported Explorer decoder.
WAV PCM and H.264/AAC MP4 derivatives preserve sound rates and video frame
counts/rates. DEF carries no frame timing; its preview interval is adjustable.
Campaign summaries are prepared offline using the supplied Explorer parser.
Their lazy popup includes descriptions, scenario cards, minimaps, aggregate
statistics and map views without download controls. Original H3M files remain in
the resource catalog. Minimap rendering uses the H3M object block/visit masks,
player ownership across the blocked footprint, and colors 8/9 from the source
terrain DEF palettes; terrain reflection flags do not indicate passability.
XMI/IFR retain byte previews. TXT is skipped.

`WikiPage.svelte` owns one shared active audio/video player, with 50% initial
volume. Inactive controls are disabled except Play; navigation aborts playback.
`WikiDefPopup.svelte` immediately shows frame groups/counts from compact
`frameGroups` metadata prepared by `scripts/wiki/enrich_def_groups.py`, before
fetching or decoding the DEF. The selected group is preserved during loading.
Its group list fills the popup height and scrolls independently of the frame
body; narrow screens use a horizontal group rail. It shows original names, aborts fetches on
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
Wiki route data omits the unused Markdown table HTML and source list; the catalog
already renders those rows. A server-side map indexes page records by their slug.

## Bounded machine retrieval

The public LLM entry page `/en/docs/llm-map/` supplies the complete reading protocol and links `/llm/browse/index.json`. `build-derived.mjs` passes published bodies and metadata, symbol data, source records, reference registries and Wiki resources to `scripts/content/build-llm.mjs`. Its exclusively owned output tree is `static/llm/browse/`:

- `en/index.md` → `en/{section}/index.json` → semantic topic indexes → bounded `page-NNN.json` metadata catalogs → `text-NNN.md` full-text excerpts;
- `sources/`, `reference/`, `symbols/` and `wiki-resources/` provide separate paged evidence and exact-name lookups, with first/last key ranges;
- topic metadata retains stable IDs, canonical URLs, summaries, questions, keywords, article relations and section-level sources. Text part metadata identifies ordered excerpts and anchor ranges. Several short related articles share one text file; large articles span ordered parts;
- typical text/catalog files target 24 KiB; every file is limited to 48 KiB. Complete fenced/PRE examples are atomic. Source excerpts between marked boundaries reconstruct the entire publication-filtered body exactly;
- all URLs honor deployment base and origin. Content tests traverse from the single root, reject unreachable files or missing entities, reconstruct every English article, and compare sources and Wiki resources with the full registries. The production validator checks machine destinations, canonical anchors and file budgets.

The earlier `manifest.json`, `reference.json`, `sources.json`, `wiki-resources.json`, `llms-full.txt` and section Markdown bundles remain compatible optional offline mirrors. They are explicitly excluded from the default retrieval instructions. The LLM map no longer imports/renders every localized article to produce a massive inline catalog.

## Scrollbars and Wiki disclosures

Shared scrollbar tokens adapt track, thumb and hover colors to dark and light themes. Chromium/WebKit use 8px bars (6px at narrow widths), with no arrow buttons; Firefox uses standard `thin` and the same palette. `.erm-page-rail-scroll` reserves its gutter inside a fixed outer rail and uses a 3px track where supported. Its natural scroll height drives rail placement. The ERM alphabet uses its natural scroll extent: at the actual bottom it selects the final available letter and reveals the end of the letter rail. No spacer or artificial trailing height is inserted.

`WikiOutline.svelte` renders a native disclosure with transparent background, muted links and a gold heading. `src/lib/wiki/preferences.ts` shares expansion state, guards storage access and responds to cross-tab changes and settings reset. The same saved preference applies across pages and languages; no-JavaScript output remains expanded and readable. `scripts/content/verify-interface.mjs` tests these behaviors in the built site and writes ignored screenshots and a JSON report.

LLM exports use English only, including article metadata, registry labels, Wiki categories and canonical destinations. Do not generate `static/llm/ru/` or `static/llm/browse/ru/`. The generator removes obsolete Russian mirrors. Keep the ordinary site and its publication checks bilingual; the English LLM manifest is not the inventory for Russian HTML. Preserve original filenames, IDs, paths, hashes and code literals. Learning pages always link to `/en/docs/llm-map/`.

Wiki interaction ownership: `WikiPage.svelte` uses a `resourceCell` action to delegate a primary click on free cell space to its existing native preview/play button. Buttons, links, form controls, native media controls and text selections retain their own behavior. The preview button remains the keyboard and popup focus-return target. `.wiki-resource-action` marks actionable cells; hover highlights their preview (or the active video/play control), while the cell background stays unchanged. Shared Wiki styles cover links, pagination, disclosures, media controls, DEF groups/frames and palette swatches in both themes. DEF popup Play is exactly 60x30 CSS pixels and the frame-interval input is centered. Run `node scripts/content/verify-wiki-interactions.mjs` against the built artifact to check seven resource kinds, native control ownership, popup focus, hover states and these dimensions. Reports/screenshots are written under ignored `reports/wiki-interactions/`.

`ScrollToTop.svelte` observes the central `.content-column` and its inner content
on every page. A right-hand arrow appears after scrolling down on overflowing
pages, returns that scroller to the top, and honors reduced-motion preferences.
It sits outside the scrolling content and adapts to the reference-column width
and mobile layout. Scroll and resize observers are released when the shell closes.
ERM quick-link hints do not participate in layout until requested. `ErmQuickLinks.svelte` measures and clamps the visible pseudo-element horizontally within the quick-link block on mouse entry, keyboard focus and viewport resize. Native `title` hints cover no-JavaScript reading; custom hints stay disabled at phone widths. Never restore permanently laid-out invisible tooltip boxes: they enlarge `.content-column.scrollWidth`. Keep horizontal scrolling local to wide code/table wrappers. `node scripts/content/verify-erm-overflow.mjs` checks six ERM pages in both languages at seven viewport widths, every quick-link hint at 1440px, focus/resize behavior, native fallback hints and usable local scrollers.


The top menu order is Docs, ERM, Plugins, Wiki. Campaigns are ordered RoE,
Armageddon’s Blade, SoD. Sidebar leaves can override their group’s `edition`,
while `showEdition: false` hides presentation badges without losing provenance.
Campaign links, headings, rows and campaign popups omit SoD/AB suffixes. The
campaign illustration catalog also omits its page-wide edition badge because
it combines SoD and AB sources; individual image records retain their edition.
`scripts/wiki/import_expansions.py` appends the supplied AB directory and the
three WoG PAC/SND/VID archives without renaming existing resource URLs.
It keeps WoG images, DEFs, sounds, videos and fonts as separate direct menu links,
pairs 336 WoG masks with their DEFs, and skips 78 TXT records under the existing
catalog policy. Every source input has a SHA-256 record. The 18 supplied AB BMPs
have lossless Heroes III 24-bit PCX derivatives plus retained BMP originals and
conversion provenance. The seven supplied H3C files include `Neutral.h3c`;
its embedded campaign is “Spoils of War”. All 30 supplied scenarios are retained.
All 18 AB PCX are cataloged under Images → Campaign elements (`bitmap/0/1`),
alongside the other campaigns. Selection images join the existing LF categories;
the remaining images have an additional campaign-images group. This catalog’s
cross-page outline and source references are rebuilt with its 72-row pagination.
The AB campaign page (`bitmap/3/1`) contains only seven H3C entries, each in its
own localized section and outline link. Mixed image pages record `editions` as
well as each resource’s original edition. The importer preserves this placement
on repeat runs.
Campaign details/minimaps use each resource’s edition path, with SoD terrain
palettes selected explicitly. Some WoG audio fact headers exceed the samples
present in their ADPCM blocks; PCM derivatives retain every available sample and
record the original fact count in `sourceFactSamples`. The LLM export derives its
edition list from resources and includes converted-image source URLs.
`node scripts/content/verify-wiki-expansions.mjs` checks AB/WoG badges, all new
preview/media types, masks, campaign maps, pagination, mobile layout and the
no-JavaScript overview in both locales. Its screenshots and report are under
`reports/wiki-expansions/`; set `BASE_PATH` to match the built artifact.
