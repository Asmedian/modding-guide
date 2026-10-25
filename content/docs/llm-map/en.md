---
{"title":"Content map for LLMs","summary":"An English-only AI reference: topic catalogs for Docs, ERM, Plugins and Wiki, with complete texts in bounded files.","translationStatus":"reviewed"}
---

## How to use this map {#usage}

Give this page as the only reference link to an AI that can retrieve web pages. Read the [protocol and map](../../../llm/browse/index.json), then the [English section routing](../../../llm/browse/en/index.md). [llms.txt](../../../llms.txt) is a short alternative entry point.

All LLM exports use English. There are no translated copies to retrieve: answer in the user's requested language using this single corpus. Original filenames, source locators, technical identifiers and literals inside code examples stay unchanged.

Retrieval follows **section → topic → catalog page → required full-text parts**. Do not load the whole site. Related texts are packed into roughly 24 KiB; every catalog file is limited to 48 KiB. Large articles have ordered parts; examples remain intact.

## Choose sections {#sections}

| Task | Catalog |
| --- | --- |
| ERA installation, mod structure, compatibility, resource loading, tools | [Docs](../../../llm/browse/en/docs/index.json) |
| ERM syntax, variables, triggers, receivers, ID tables, Framework | [ERM](../../../llm/browse/en/erm/index.json) |
| Native plugins, C++, hooks, ERA API, H3API, NH3API | [Plugins](../../../llm/browse/en/plugins/index.json) |
| SoD DEF, images, sounds, videos, fonts, palettes, campaigns | [Wiki](../../../llm/browse/en/wiki/index.json) |

Read every relevant section for tasks that span several areas. A creature mod may need ERM contracts and ID tables, Wiki resources and packaging documentation. A C++ extension may need Plugins, API contracts and ERM events. Lua is deferred; ERM learning contains an AI-assisted introduction.

## Find an exact name {#lookup}

- [ERM commands, events, functions and constants](../../../llm/browse/symbols/index.json): select a family and name range. Records link exact article anchors and English text parts.
- [Wiki filenames](../../../llm/browse/wiki-resources/index.json): select edition, kind and case-insensitive filename range. Archive, size, SHA-256, categories, originals, derivatives and English destinations are retained. TXT is not imported yet.
- [ERM registries](../../../llm/browse/reference/index.json): alphabet, receivers, events, functions, globals, constants, legacy commands, links and illustrations.
- [Sources](../../../llm/browse/sources/index.json): resolve IDs from `sourceRefs` and `sectionSources`; check versions, locators and hashes.

## Reading and answering protocol {#reading}

1. Identify the task, ERA version and relevant sections. Choose topics by English titles and keywords.
2. A topic index leads to catalog pages. Each article has a stable `id`, canonical English `url`, summary, questions, keywords, `previous` / `next`, sources and ordered `parts`.
3. Retrieve the required text parts. A file can contain several articles: select by ID and part number. `fromAnchor`, `toAnchor` and headings locate excerpts. Read every continuation needed for a command's full contract.
4. Text between `llm:body` and `llm:end` markers is the complete source excerpt. Concatenate parts in order without marker newlines to recover the article. Code, tables, links, illustrations and collapsed comments are retained. Resolve relative links against the canonical article URL.
5. Follow relations and body links across topics and sections. Check section-level evidence, version limits, variable scope and compatibility.
6. Cite canonical pages and exact anchors. Distinguish documentation evidence, assumptions and in-game execution. If retrieval is unavailable, request the specific files instead of claiming to have read them.

## Bulk offline mirrors {#archives}

English-only bulk exports remain available for offline indexing. **Do not retrieve them by default**: use the bounded topic catalog above.

- [manifest.json](../../../llm/manifest.json) · [llms-full.txt](../../../llms-full.txt);
- [sources.json](../../../llm/sources.json) · [reference.json](../../../llm/reference.json) · [wiki-resources.json](../../../llm/wiki-resources.json);
- [Docs](../../../llm/en/docs.md) · [ERM](../../../llm/en/erm.md) · [Plugins](../../../llm/en/plugins.md) · [Wiki](../../../llm/en/wiki.md).
