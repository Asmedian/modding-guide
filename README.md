# ERA Modding Guide

A static, bilingual guide to the ERA modding platform for Heroes III. The current release contains general documentation, the ERM scripting reference, and native plugin development with NH3API.

## Local development

```bash
npm install
npm run dev
```

Validation and production output:

```bash
npm test
npm run build
npm run preview
```

The static site is written to `build/`. Set `BASE_PATH=/repository-name` for GitHub project pages and `SITE_ORIGIN=https://owner.github.io` when generating an absolute sitemap.

Local development supports Node.js 20 from `20.19.0` onward. The GitHub Actions workflows deliberately install Node.js 24, independently of the version installed on a developer machine, so a local Node 20 installation does not need to be replaced before pushing.

The production build also enforces the old-device and constrained-network budgets documented in [the project map](docs/PROJECT_MAP.md#performance-contract). Measurements are written to `reports/performance-budget.json`.

See [How to edit the site](docs/EDITING_GUIDE.md) and the [project map](docs/PROJECT_MAP.md) before changing content or routes.

## GitHub Pages

Before the first deployment, open the repository's **Settings → Pages** and select **GitHub Actions** under **Build and deployment → Source**. This one-time repository setting creates/enables the Pages site; the standard `GITHUB_TOKEN` intentionally cannot enable it through `actions/configure-pages`. After that, a push to `main` builds with Node.js 24 and deploys `build/`.

## Scope

- Included: platform overview, installation, mod creation and compatibility, game architecture and resource loading, detailed tool inventory, troubleshooting, glossary, bilingual highlighted search, generated LLM catalog, optional Pages CMS configuration, and GitHub Pages automation.
- ERM: the complete non-learning ERM Help 2.10b source material, receivers and triggers, native reference tables, ERA Framework, source-reviewed examples and UN:C material. The interface includes a hierarchical alphabetical sidebar, compact trigger/receiver links, and contextual reference navigation with independent back/forward history. The Russian view preserves the original legacy blocks; the English view is their complete structural translation, with contextual ERM terminology and game names reviewed against the Russian source and ID tables. Audits verify text coverage, unchanged ERM examples, anchors, links, and illustrations.
- Plugins: ERA plugin loading and packaging, a CMake/C++17 quick start, the exported ERA API map, and NH3API as an internal plugin-documentation group. The NH3API source is pinned by commit and SHA-256 in the source registry.
- ERM learning: an AI-assisted introduction with the public LLM map and four expandable prompt templates. Lua remains deferred.

Source coverage and validation limits are recorded in `content/erm/_registry/` and the content tests.

## Licensing

Project code and newly written documentation are available under the MIT License. Third-party product names, reference illustrations, and legacy reference fonts retain their respective owners’ rights; the project license does not relicense them. `content/erm/_registry/assets.json` records the original legacy-help path and SHA-256 of every transferred asset under `static/assets/erm/`. Original ERA source snapshots, legacy HTML, and forum snapshots remain external development inputs. Public redistribution of third-party material requires the appropriate rights.

## Wiki resource catalog

Wiki appears between Docs and ERM at `/{lang}/wiki/`. It remains fully prerendered.
`content/wiki/` contains paired locale catalogs; `_registry/pages.json` stores
at most 72 resource references per page. Wiki is an explicit LF-driven sidebar
exception to editorial curation; it still uses at most two menu levels and
at most twelve leaves per group. Sounds, videos and the combined font catalog are direct links without
submenus. All category titles identify the SoD edition.

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
statistics and individual H3M downloads. XMI/IFR retain byte previews. TXT is skipped.

`WikiPage.svelte` owns one shared active audio/video player, with 50% initial
volume. Inactive controls are disabled except Play; navigation aborts playback.
`WikiDefPopup.svelte` shows frame groups and original names, aborts fetches on
close, and releases animation/cache resources. No full media or DEF decoder is
requested until activation. `unclassified.md` lists unmatched names by archive
and LF references missing from the supplied archive; never guess their placement.

The content generator includes Wiki in the LLM manifest, the English `wiki.md` bundle,
search and sitemap, and exports `llm/wiki-resources.json` with file provenance
and localized destinations. Use `npm run prepare:content` for generated files.

`WikiResourcePopup.svelte` opens images in a modal; only its external-link
button opens a new tab. Fonts use native-size indexed glyph sheets on a dark
surface in both themes. Palettes retain source colors/flags and expose swatch
and HEX/RGB table views. DEF playback starts on open and group selection at
100ms by default. `WikiPagination.svelte` appears above and below multi-page
catalogs, with at most five numbered links and an ellipsis before the final
page when necessary. `scripts/wiki/enhance_catalog.py` and the offline-only
Explorer map parser prepare this presentation without adding archive parsing
to the browser. Existing per-font URLs remain readable for earlier links.

The canonical English LLM map at `/en/docs/llm-map/` leads to English-only bounded topic catalogs and text excerpts under `llm/browse/` (24 KiB target, 48 KiB maximum), plus paged symbol, source and Wiki filename lookups. Complete bodies and code examples are verified against the source. The older large exports remain optional offline mirrors. Built interface checks run with `node scripts/content/verify-interface.mjs`.
