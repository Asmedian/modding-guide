# ERA documentation

ID: docs.overview
URL: /en/docs/
Part: 1/1
Source references: era-source:gameext, era-source:lodman
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.overview 1 -->
## Where to begin {#start}

If you are approaching ERA as a mod author for the first time, begin with the **Quick Start**. It separates a safe working installation from content editing and ends with a small result you can verify. Continue with the mod structure, then move to individual resource formats.

That order matters because ERA loads extra components, archives, and redirections during game startup. A structural mistake can therefore look like a missing or broken file even when the resource itself is valid.

## Sections {#sections}

| Section | What it helps with |
| --- | --- |
| ERA platform | Explains the platform’s role and important startup stages. |
| Installation | Establishes a reproducible development environment. |
| Mod structure | Shows where data, locales, and resources belong. |
| Game and resources | Maps formats and resource lookup behavior. |
| Tools | Matches a task to a suitable class of editor. |
| Glossary | Keeps Russian and English terms consistent. |

## Reading technical claims {#sources}

Every published article links to the source registry. Current ERA source code has priority, followed by version-specific release notes and then the legacy help. Workflow advice is presented as advice and does not replace verified engine behavior.

## Current scope {#scope}

General documentation, the ERM reference, and the plugin development section are available. More material is added as sources are verified.
<!-- llm:end docs.overview 1 -->

# The ERA platform

ID: docs.era
URL: /en/docs/era/
Part: 1/1
Source references: era-source:gameext, era-source:era, era-source:lodman
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.era 1 -->
## What ERA does {#role}

ERA extends the startup and runtime behavior of Heroes III. It initializes its own subsystems, loads settings, establishes a virtual resource layer, and emits lifecycle events. For a content mod author, the practical result is that changes can remain separate from the original game files.

This does not mean every file can live anywhere. The resource name, supported format, directory, and load order still decide whether a replacement is found.

## Virtual resources {#vfs}

The archive manager loads extra PAC files from `Data`, searches registered archives, and applies resource redirections. A separate resource manager caches decoded data and tracks active references. “Where is the file stored?” and “Which resource is the game using?” are therefore related but distinct questions.
<!-- llm:end docs.era 1 -->

# Game architecture for mod authors

ID: docs.game
URL: /en/docs/game/
Part: 1/1
Source references: era-source:gameext, era-source:reslib, era-source:lodman
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.game 1 -->
## A useful model {#model}

Most content work does not require a map of every Heroes III memory structure. Four layers are enough: original game files, mod directories and archives, ERA’s lookup layer, and resources already decoded in memory.

Changing a file affects a future lookup, but it does not necessarily replace an object the game already decoded and cached. A reliable test therefore begins with a complete restart.

## Startup stages {#startup}

ERA source initializes subsystems in a sequence: early setup, settings, the virtual file system, additional modules, and events around WoG. A resource may become available only after its archive or redirection rule is registered.

## Resource lookup {#lookup}

The LOD/PAC manager walks registered archives and can resolve name redirections. Configuration under `Data/Redirections` establishes global rules, including a mode for resources that would otherwise be missing. Audio and video fallbacks are checked after media lists load.

## Cache and lifetime {#cache}

`ResLib.pas` describes a shared decoded-resource manager. Entries are indexed by relative path, reference counted, and placed in a collection queue. The practical conclusion is simple: restart the game when testing a replacement instead of judging a screen that was already open.

## Where to stop {#limits}

If a task requires memory addresses, binary patches, or calls to internal functions, it is no longer an ordinary resource replacement. Such changes must be tied to an exact executable version and belong in the future plugin documentation.
<!-- llm:end docs.game 1 -->

# Glossary

ID: docs.glossary
URL: /en/docs/glossary/
Part: 1/1
Source references: era-source:gameext, era-source:lodman, era-source:reslib, old-help:index
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.glossary 1 -->
## Platform and project {#platform}

| English | Russian | Meaning |
| --- | --- | --- |
| ERA platform | платформа ERA | The extension and loading layer around Heroes III/WoG. |
| mod | мод | A separate set of data and behavior connected to the game. |
| mod directory | каталог мода | A particular mod’s root directory under `Mods`. |
| game root | корень игры | The Heroes III installation directory used as the base for paths. |

## Resources {#resources}

| English | Russian | Meaning |
| --- | --- | --- |
| resource | ресурс | Named data loaded by the game: an image, text, audio, and so on. |
| loose file | свободный файл | A file in a regular directory rather than an archive. |
| archive | архив | A resource container such as LOD or PAC. |
| redirection | перенаправление | A rule mapping a requested resource name to another path. |
| load order | порядок загрузки | The sequence that affects which resource wins when names collide. |

## Technical terms {#technical}

`LOD`, `PAC`, `DEF`, `TXT`, `JSON`, `ERT`, `ERS`, `PNG`, `WAV`, and directory names are never translated. Russian copy combines them with a translated generic noun such as “архив PAC” or “файл JSON”.

`trigger`, `receiver`, and `ERM command` are reserved for the future ERM section; their technical codes will remain unchanged as well.
<!-- llm:end docs.glossary 1 -->

# Content map for LLMs

ID: docs.llm-map
URL: /en/docs/llm-map/
Part: 1/1
Source references: era-source:gameext, era-source:lodman, era-source:reslib
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.llm-map 1 -->
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
<!-- llm:end docs.llm-map 1 -->

# Quick Start

ID: docs.quick-start
URL: /en/docs/quick-start/
Part: 1/1
Source references: era-source:gameext, era-source:lodman, era-changelog:3
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.quick-start 1 -->
## 1. Prepare the environment {#prepare}

If you do not have ERA and the tools yet, start with [Installation](../era/installation/). Use a separate working Heroes III installation with ERA and confirm that the game starts before adding your mod.

## 2. Create the mod directory {#skeleton}

Create a new directory for your mod named `MyFirstMod` inside `Mods`. Avoid Cyrillic characters and special characters in the directory name.

```text
Mods/
└─ MyFirstMod/
   └─ Data/
      └─ s/
```

Do not edit the original game archives: a separate mod directory is easier to disable and test.

## 3. Enable the mod {#enable}

Open Mod Manager and enable `MyFirstMod`. Confirm that it appears in the active mod list; otherwise the game will not load its files.

## 4. Add the first script {#first-change}

Create `example.erm` with this ERM code:

```erm
ZVSE2
!#IF:M^Hello World!^;
```

You can also use the game entry event handler. Both variants display the same message:

```erm
ZVSE2
!?FU(OnGameEnter);
!!IF:M^Hello World!^;
```

Adding a prefix to the filename is recommended, for example `mfm_example.erm` (an abbreviation of the mod name). Files with identical names at identical paths in different mods override one another. Place the file under `Mods/MyFirstMod/Data/s/`.

## 5. If it does not work {#verify}

You can test the example when starting any map; start a new game. Before launching, note the expected result: a “Hello World!” message. If it does not appear:

1. confirm that `MyFirstMod` is enabled in Mod Manager;
2. check the exact filename and extension;
3. check the directory nesting: `Mods/MyFirstMod/Data/s/mfm_example.erm` if you used the recommended name;
4. check whether another mod overrides the same file;
5. inspect any error message and the [troubleshooting guide](../troubleshooting/).

## Next step {#next}

Continue with [Mod structure](../era/mod-structure/) to learn what the directories contain and where other resources belong.
<!-- llm:end docs.quick-start 1 -->

# Site structure

ID: docs.site-structure
URL: /en/docs/site-structure/
Part: 1/1
Source references: era-source:gameext, era-source:lodman, era-source:reslib
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.site-structure 1 -->
## Routes and language {#routes}

The locale is always the first URL segment: `/ru/…` or `/en/…`. The language switch keeps the current page and fragment, so a link to a specific section remains meaningful in both languages.

Large collections use focused catalog pages instead of hundreds of sidebar entries. This version contains the general documentation only; ERM and plugin content will later use the same registry.

## Navigation {#navigation}

The editorial sidebar is limited to two levels. The article occupies the center and the current page outline sits on the right. On mobile, the sidebar becomes a drawer and the outline remains available within the document flow.

## Content and localization {#content}

Non-localized article fields — stable ID, slug, keywords, questions, and sources — live in `entity.json`. Long-form copy lives in paired `ru.md` and `en.md` files. Headings use matching section IDs such as `{#resources}`.

## Search {#search}

A small title and keyword index opens immediately, while Pagefind builds a full-text index from generated HTML. Locale indexes stay separate so Russian and English results do not become a mixed list.

## Traceability {#provenance}

`content/_sources/sources.json` stores a compact provenance registry. Original archives, changelogs, and ERA source snapshots remain external development inputs and never ship with the site.


## Wiki {#wiki}

The section between documentation and ERM. SoD resources follow the LF hierarchy; previews are separate from full files and playback downloads start on activation.
<!-- llm:end docs.site-structure 1 -->

# Troubleshooting

ID: docs.troubleshooting
URL: /en/docs/troubleshooting/
Part: 1/1
Source references: era-source:gameext, era-source:lodman, era-source:reslib, era-tools:mod-manager-format, era-tools:vfs-test-binary
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.troubleshooting 1 -->
## Record a baseline {#baseline}

Before changing anything, record the ERA and game versions, enabled mods, and their order. Run without the mod under development, open the test map, and retain the logs. This baseline separates an installation problem from a new content problem.

If the clean run is already unstable, pause resource work. Updating the platform, changing the mod list, and editing a file in the same test creates three independent causes.

## Reduce the case to one change {#minimal-case}

Keep one mod, one changed resource, and one short scenario. For graphics, use one screen or object; for a table, one row; for mod order, one pair of conflicting directories. Exit the game completely between trials.

Compare the exact path, size, modification time, and checksum as well as the screen. If a loose file works but the archive version does not, the fault is in packaging or the internal path rather than in the asset contents.

## Classify the failure {#classify}

| Error | Description | Example |
| --- | --- | --- |
| ERM script error | The game reports the exact file and line containing the error. Correct the syntax indicated by the message. | ![ERA dialog identifying an ERM error and line number](../../../assets/diagnostics/screen-2.png) |
| Missing resource | The game reports the type and name of a resource it could not load. Check the filename requested by the script and that the resource exists in your mod archives. | ![ResourceManager cannot find a DEF resource](../../../assets/diagnostics/screen-1.png) |
| No visible change after an edit | Press `F12` to reload text and scripts during the game. Restart the game for other changes. | The old resource still appears after editing it. |
| Text displays incorrectly | For JSON, check file validity and whether the key used by the code exists in the file. | ![A localization key appears instead of its text in game](../../../assets/diagnostics/screen-3.png) |
| Game crashes on startup | A replacement text resource may be damaged: check the number of rows and their terminating characters. An invalid plugin or patch inside the mod is another possibility. | The game closes during startup. |
| Game closes without a notice | A possible stack overflow can result from a function recursively calling itself until the client closes immediately. Check the call chain. | The client exits without an error dialog. |

## Use the matching tool {#tools}

For archives, make a trial export and re-import with MMArchive. Inspect a DEF in Def Preview before validating the build in Heroes3 Def Tool. Edit tables with Txt Tables Editor or Object TXT Files Editor only after preserving the source encoding and structure.

A tool does not replace a controlled game scenario. Successfully opening a file proves only that this one program could read it.

## Write a useful report {#report}

Include versions, mod list and order, the exact changed path, expected and actual behavior, minimal steps, and the relevant log excerpt.

A good report lets another person reproduce the fault without guessing and test one claim per run.
<!-- llm:end docs.troubleshooting 1 -->

# What Is a Mod?

ID: docs.what-is-a-mod
URL: /en/docs/what-is-a-mod/
Part: 1/1
Source references: era-source:gameext, era-source:lodman, era-source:reslib
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.what-is-a-mod 1 -->
## Definition {#definition}

A **mod** is a self-contained set of files that changes or extends the game: text, images, audio, maps, data tables, ERM scripts, and native plugins. It may replace one resource or introduce an entire gameplay system.

In ERA, a mod lives in its own directory under `Mods`. The platform loads its resources at startup and lets the game use them in place of matching original files. The base installation therefore remains unchanged.

## What a mod can contain {#contents}

- a `Data` directory with game resources and archives;
- a `Lang` directory with localized text;
- ERM scripts and configuration;
- plugins and supporting libraries when resource replacement is not enough;
- documentation, licensing, and compatibility notes.

The exact set depends on the goal. A simple translation needs no native code, while a complex mechanic may combine ERM with a plugin.

## Why isolation matters {#isolation}

Do not overwrite original game files by hand. A separate directory lets you enable or disable a mod, control loading order, diagnose conflicts, and move the project between installations. It also makes updates and removal predictable.

## Where to begin {#first-step}

Start with one small change whose result is easy to verify. Once it works reliably, continue with directory structure, resource precedence, and more advanced tools.
<!-- llm:end docs.what-is-a-mod 1 -->

