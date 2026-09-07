# Contributing

Read [AGENTS.md](AGENTS.md), [the editing guide](docs/EDITING_GUIDE.md), and [the project map](docs/PROJECT_MAP.md) before editing.

For every documentation change:

1. update the stable `entity.json` record;
2. update `ru.md` and `en.md` together, preserving matching section IDs;
3. add or reuse a valid `sourceRef` for technical claims;
4. add a sidebar link only when the page belongs in the editorial navigation;
5. run `npm test` and `npm run build`.

Do not commit raw development inputs, absolute local paths, generated editor files, or text copied from the legacy help. New documentation must be written in the project’s own words.

The sidebar has at most two levels and at most twelve permanent leaf links per group. Use catalog pages and search for larger collections.

