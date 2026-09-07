# ERA Modding Guide

A static, bilingual guide to the ERA modding platform for Heroes III. The current release contains general documentation and the ERM scripting reference.

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

The production build also enforces the old-device and constrained-network budgets documented in [the project map](docs/PROJECT_MAP.md#performance-contract). Measurements are written to `reports/performance-budget.json`.

See [How to edit the site](docs/EDITING_GUIDE.md) and the [project map](docs/PROJECT_MAP.md) before changing content or routes.

## Scope

- Included: platform overview, installation, mod creation and compatibility, game architecture and resource loading, detailed tool inventory, troubleshooting, glossary, bilingual highlighted search, generated LLM catalog, optional Pages CMS configuration, and GitHub Pages automation.
- ERM: the complete non-learning ERM Help 2.10b source material, receivers and triggers, native reference tables, ERA Framework, source-reviewed examples and UN:C material. The interface includes a hierarchical alphabetical sidebar, compact trigger/receiver links, and contextual reference navigation with independent back/forward history. The original Russian legacy blocks remain available in both locale views; reviewed English editorial material is kept alongside them rather than presenting a partial legacy translation as complete.
- Deferred: the ERM learning course (its page contains only a heading), plugins, NH3API, and Lua.

See [ERM content audit](docs/ERM_CONTENT_AUDIT.md) for source coverage and validation limits.

## Licensing

Project code and newly written documentation are available under the MIT License. Third-party product names, reference illustrations, and legacy reference fonts retain their respective owners’ rights; the project license does not relicense them. `content/erm/_registry/assets.json` records the original legacy-help path and SHA-256 of every transferred asset under `static/assets/erm/`. Original ERA source snapshots, legacy HTML, and forum snapshots remain external development inputs. Public redistribution of third-party material requires the appropriate rights.
