---
{"title":"Installation and workspace","summary":"Prepare a reproducible ERA setup for development without losing a known-good state.","translationStatus":"reviewed"}
---

## Use a separate copy {#separate-copy}

Use a separate game installation for development. This is editorial workflow advice rather than an engine requirement: its purpose is to protect the setup you play and give you a stable comparison point.

Record the ERA version, the distribution source, and the active mod list. When collaborating, those three values are often more useful than a long “it does not start” report.

## Establish a baseline {#baseline}

1. Start the game without your own mod.
2. Reach the main menu and load a small test map.
3. Exit normally.
4. Keep the resulting logs as a baseline.

ERA runs several initialization stages before the full game interface is ready. If a clean start is unstable, adding your own resource will only make diagnosis harder.

## Working loop {#workflow}

Keep mod source files separate from temporary editor output. Copy only the intended result into the game directory, or use a repeatable synchronization script. After each small change:

- state the expected effect;
- run one focused scenario;
- inspect the log on failure;
- restore the previous revision if the cause is unclear.

## Avoid mixed changes {#avoid}

Do not update ERA, change the active mod set, and edit your resource at the same time. Version differences can affect supported paths and formats — language overrides under `Lang/<language>`, for example, are documented for the ERA 3.9.6 line. Check versioned features against the notes for your actual build.

