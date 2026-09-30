---
{"title":"LLM content map","summary":"A human-readable page index with links to compact machine-readable representations.","translationStatus":"reviewed"}
---

## How to use it {#usage}

Begin with [llms.txt](/llms.txt) for a short map, then open [manifest.json](/llm/manifest.json) for stable IDs, locales, keywords, questions, article relationships, and section-level source references. The map covers all published material: documentation, ERM scripting, and plugin development, including H3API and NH3API. The ERM course and Lua are not yet published; their status is recorded in the manifest.

Full text is available in six files, one per section and language. The ERM files include code examples, tables, links, captions, and the text of expandable comments. Resolve relative links against the canonical article URL listed before its content. Verify technical claims using `sourceRefs` and `sectionSources`; source descriptions, versions, paths, and exact locators are available in [sources.json](/llm/sources.json).

## Machine-readable files {#machine-files}

- [llms.txt](/llms.txt) — short entry point;
- [llms-full.txt](/llms-full.txt) — complete catalog for both locales;
- [manifest.json](/llm/manifest.json) — all published entities, relationships, and section-level sources;
- [sources.json](/llm/sources.json) — source descriptions, versions, locators, and checksums;
- [reference.json](/llm/reference.json) — ERM commands, receivers, events, functions, constants, globals, and alphabetical index;
- documentation: [Russian](/llm/ru/docs.md) · [English](/llm/en/docs.md);
- ERM scripting: [Russian](/llm/ru/erm.md) · [English](/llm/en/erm.md);
- plugins: [Russian](/llm/ru/plugins.md) · [English](/llm/en/plugins.md).

## Generated catalog {#catalog}

The build lists every published entity for the current locale below, including its stable ID, canonical link, summary, questions, and keywords. Search and the manifest use the same registry, so a newly published page does not need a manual catalog entry.
