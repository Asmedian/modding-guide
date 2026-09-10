# How to edit ERA Modding Guide

Start with [AGENTS.md](../AGENTS.md) for mandatory rules and keep the [project map](PROJECT_MAP.md) open while working.

## Edit an article

Each article is a directory under `content/docs`, `content/erm`, or `content/plugins`. `entity.json` contains the non-localized record. `ru.md` and `en.md` begin with JSON frontmatter containing `title`, `summary`, and `translationStatus`. Summaries and metadata questions are plain text; keep Markdown in the article body.

Use explicit section IDs:

```markdown
## Resource lookup {#lookup}
```

The two locale files must contain the same section ID set. Supported authoring constructs are paragraphs, level-two and level-three headings, ordered and unordered lists, fenced code blocks, tables, links, images, bold text, and inline code. A table’s first cell may end with `{#id-5}` to create a stable row anchor. Pipes inside inline code do not split table cells.

Complete legacy ERM Help material uses a validated rich block when ordinary Markdown cannot retain the source presentation:

```markdown
:::erm
<section class="erm-reference" lang="ru">
  <span class="erm-anchor" id="ref-rec-ob-c"></span>
  <div class="erm-tone-red"><strong>C$</strong></div>
  <details class="erm-comment" open>
    <summary>Комментарий (<strong class="erm-toggle-label">показать</strong>)</summary>
    <div class="erm-comment-body">Полный исходный комментарий…</div>
  </details>
</section>
:::
```

`src/lib/reference/rich.mjs` accepts only the inert elements and attributes used by the reference. Scripts, event handlers, embedded data URLs, and the old page CSS are rejected. Use the existing `erm-*` classes for source colours, notes, code, images, and expandable comments; keep IDs stable and namespaced. Do not paste arbitrary HTML outside this construct.

For the 223 non-learning legacy documents, completeness means preserving every non-empty source text slot in order, every code block byte-for-byte after entity decoding, every inline link occurrence, every meaningful image, and separate command definitions. Do not combine commands such as `B` and `H$`, shorten a comment, or replace an image with nothing. A descriptive textual or newly drawn equivalent is acceptable only when retaining the source image is impossible. Preserve the original Russian block in both views and put translated or current editorial commentary outside it until a complete reviewed translation of that source block exists.

Keep images local and give them descriptive alternative text. The prerenderer derives `width` and `height` for local PNG, GIF, JPEG, and BMP files through `src/lib/server/image-dimensions.ts`; provide explicit intrinsic dimensions when adding another format. The performance verifier rejects built images without dimensions. Reference-image and font provenance belongs in `content/erm/_registry/assets.json`; when a source bitmap is deliberately replaced by a native HTML/CSS rendering, retain its provenance record and identify the replacement there. Relative links and image paths resolve from the canonical article URL, including when the same body is shown in the contextual panel. When source pages contain interactive utilities, recreate the useful behavior with native site code; current examples are HEX conversion and object-table filtering.

## Add provenance

Reuse an existing source ID only when its locator supports the claim. Otherwise add a compact record to `content/_sources/sources.json` with a relative source path, version, locator, and SHA-256. The raw source stays outside the repository. ERM articles additionally map every semantic section to its evidence in `sectionSources`. Framework metadata comes from the complete function body, not a name or signature alone. Preserve version limits, observed discrepancies, and `requires-review` classifications. The three allowed FAQ posts are fixed in the forum coverage registry; the remaining FAQ posts are excluded.

The installed tool bundle is registered as `era-tools`. Prefer bundled help or executable metadata over a guess based on a directory name. If the distribution provides no adequate description, state that limitation instead of inventing behavior.

## Optional browser editor

`.pages.yml` exposes existing locale Markdown plus navigation and UI dictionaries to Pages CMS. Article creation, renaming, and deletion are deliberately disabled in the CMS: use the full article checklist so both locales, metadata, sources, and relations stay synchronized.

## Update navigation

Edit `content/_navigation/docs.json`, `erm.json`, or `plugins.json`, then mirror any label in both UI dictionaries. Keep groups topical, never nest a group inside a group, and use a catalog rather than adding more than twelve leaves. NH3API remains a group within Plugins, not a fourth top-level section. The separate ERM alphabet intentionally contains the complete legacy hierarchy from `content/erm/_registry/alphabet.json`; preserve `parent`, `depth`, localized labels, and canonical destinations. The Russian rail omits Ё, Й, Ы, Ъ, and Ь; absent Е, Щ, and Ю destinations remain visibly disabled. Keep search out of this index.

The central trigger/receiver strip uses the corresponding registries. Table and constant/global links in an ERM article open in the right reference panel; further internal ERM links stay there. Back/forward history and scroll positions belong to that panel. Mouse buttons 4/5 control the panel's history only when their event originates inside it. Normal links remain readable without JavaScript. Keep the learning route heading-only.

## Update search and LLM files

Run `npm run prepare:content`. This regenerates:

- `src/lib/generated/search-index.ts`;
- `src/lib/generated/symbol-index.json`;
- `static/llm/manifest.json`;
- `static/llm/{ru,en}/{docs,erm,plugins}.md`;
- `static/llms.txt` and `static/llms-full.txt`.

It also refreshes anchored search segments. Search snippets are generated from the section containing the match, so do not remove explicit `{#section-id}` anchors. Do not edit generated files directly.

The generated TypeScript search corpus is a deterministic development fallback only. Production search loads Pagefind after the user enters at least two characters; never import `search-index.ts` or `symbol-index.json` eagerly into the application shell. Keep `src/app.html` navigation preloading on `tap` so merely hovering the large reference navigation cannot download another page.

Keep the Markdown `import.meta.glob` in `src/lib/server/content.ts` lazy. Eager Markdown imports make Vite compile and render the entire corpus on the first development route request. The home page may silently warm the two section overviews in development, but do not add a visible splash page, route loader, spinner, or loading message. The root route must redirect from its head before body paint and keep its RU/EN links inside `noscript` only.

During prerendering, `/api/reference/{lang}/{slug}.json` is generated from the same article loader. `_overview.json` represents the ERM overview. These are ordinary static files, not a live API, and must work beneath `BASE_PATH`.

## Verify

Run `npm test`, then `npm run build`. The build now fails when initial HTML/JS/CSS, estimated compressed transfer, or deferred JavaScript chunks exceed the limits in `scripts/content/verify-performance.mjs`; measured results are written to `reports/performance-budget.json`. Check at least the home page, the first transition to each top-level section after a fresh `npm run dev`, the changed article in both languages, the language switch, theme switch, search shortcut, and mobile menu. No transition may display an intermediate loader. Test search once with throttled networking: opening it must not fetch the large development indexes, and Pagefind must start only after a meaningful query. A release claiming Windows 7 compatibility also requires a real Chrome 109 smoke test; automation alone is not sufficient.

`tests/content/full-reference.test.mjs` compares the final rich blocks with `content/erm/_registry/full-transfer-audit.json`. It checks the normalized full-text and source-presentation hashes, exact ERM examples, occurrence counts for every recorded link and image, and all asset hashes for each source page in both locale views. Do not regenerate the audit from edited output or weaken the comparison to make a truncation pass. Re-extract it from the external ERM Help input when the source itself changes.

The build finishes with `npm run verify:build`: all internal HTML links and anchors, symbol destinations, LLM destinations, assets, and configured sitemap entries must resolve. Contextual JSON must contain the complete canonical article body. The generated report is saved in `reports/build-validation.json`. Test a repository deployment using both `BASE_PATH` and `SITE_ORIGIN`; both variables must also be set when rerunning `verify:build` separately for that output.
