---
{"title":"LLM content map","summary":"A human-readable page index with links to compact machine-readable representations.","translationStatus":"reviewed"}
---

## How to use it {#usage}

Begin with `/llms.txt` for a short map, then open `/llm/manifest.json` when you need stable IDs, locales, keywords, questions, and relationships. Full published article text is available in `/llm/ru/docs.md` and `/llm/en/docs.md`.

## Limits {#limits}

ERM scripting and plugins are not part of the current manifest. Do not report their absence as a coverage error: those sections are intentionally deferred. Link technical claims to `sourceRefs` instead of inferring them from a title or keyword alone.

## Machine-readable files {#machine-files}

- `/llms.txt` — short entry point;
- `/llms-full.txt` — complete compact catalog;
- `/llm/manifest.json` — structured entities;
- `/llm/{lang}/docs.md` — documentation content for each locale.

## Generated catalog {#catalog}

The build lists every published entity for the current locale below, including its stable ID, canonical link, summary, questions, and keywords. Search and the manifest use the same registry, so a newly published page does not need a manual catalog entry.
