# ERA documentation

URL: /en/docs/

A starting point for the platform, mod structure, game resources, and practical tools.

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

The general documentation section is published now. ERM scripting and plugin documentation are intentionally excluded and will be added as separate work streams without changing the site foundation.

---

# The ERA platform

URL: /en/docs/era/

ERA’s role between Heroes III, mods, resources, and extensions during game startup.

## What ERA does {#role}

ERA extends the startup and runtime behavior of Heroes III. It initializes its own subsystems, loads settings, establishes a virtual resource layer, and emits lifecycle events. For a content mod author, the practical result is that changes can remain separate from the original game files.

This does not mean every file can live anywhere. The resource name, supported format, directory, and load order still decide whether a replacement is found.

## Lifecycle {#lifecycle}

`GameExt.pas` records an internal sequence that includes early initialization, ERA settings, the virtual file system, extension loading, and events before and after WoG. These internal event names help verify the architecture but are not automatically a stable public API promise for ordinary content mods.

## Virtual resources {#vfs}

The archive manager loads extra PAC files from `Data`, searches registered archives, and applies resource redirections. A separate resource manager caches decoded data and tracks active references. “Where is the file stored?” and “Which resource is the game using?” are therefore related but distinct questions.

## Documentation boundary {#boundary}

The general documentation covers installation, mod structure, resources, and tools. Low-level engine details appear only when they explain observable behavior and are supported by source code. ERM scripting and plugin APIs will be separate sections.

---

# Mod compatibility and order

URL: /en/docs/era/compatibility/

Declare dependencies, priority, and conflicts without relying on accidental load order.

## Two directions of order {#priority}

The bundled SD Mod Manager documentation highlights an important distinction: a mod with greater priority supplies a resource first, while “loaded after” describes the opposite direction in the displayed load order. If `Mod B` is loaded after `Mod A`, `Mod B` has greater priority and its file wins when both provide the same name.

Record both facts during diagnosis: the visible order and the expected owner of the exact resource. “My mod is last” is not useful without the manager name and complete list.

## compatibility fields {#fields}

| Field | Meaning |
| --- | --- |
| `requires` | Mods without which the current mod cannot run or has no useful meaning. The requirement also affects order. |
| `load_after` | Mods that should have lower priority, allowing the current mod to override matching resources. |
| `incompatible` | Combinations in which the game should not run or the combined result has no useful meaning. |

Values are stable mod directory names. SD Mod Manager also documents special handling for `WoG`: it is implicitly added to `requires` and `load_after` unless those fields are overridden. Verify this behavior against the manager version distributed with your mod.

## Declare rules for a reason {#declare}

A dependency is justified when a mod uses another mod’s resource, event, or configuration. Use `load_after` for an intentional override. Use `incompatible` for a confirmed conflict that order cannot resolve safely.

Do not build a long `load_after` list merely to “always win.” It makes the setup brittle and hides filename conflicts. Document the reason for every list item in the project notes.

## Test a small matrix {#matrix}

Test at least four states: base ERA only; ERA plus your mod; your mod plus every required dependency; and your mod with each likely conflicting mod in both permitted orders. Reuse one map and one startup scenario for every state.

If the problem follows order, identify the exact resource name supplied by both mods. If it happens before the main menu, compare clean and conflicting startup logs. Do not change the order, ERA version, and mod contents at the same time.

## Compatibility report {#report}

A useful report includes the ERA and Mod Manager versions, exact mod names and versions, their order, a minimal reproduction, and the relevant log difference. Include the executable version for binary changes. This turns “does not work together” into a reproducible case and supports a precise rule instead of a guess.

---

# Creating your first mod

URL: /en/docs/era/creating-mod/

Move from an empty directory to an enabled mod with metadata, one resource, and a repeatable test.

## Prepare a minimal directory {#directory}

Create a dedicated directory under `Mods`. Keep its name stable because mod managers and compatibility lists use it as an identifier. `Data` is enough for the first resource test; add `Lang` and other branches only when they are actually needed.

```text
Mods/MyMod/
├─ Data/
├─ Lang/
└─ mod.json
```

Do not copy the entire game directory into a mod. A mod should contain only new or replaced files. Disabling the directory then restores the baseline installation and makes conflicts easier to isolate.

## Describe the mod in mod.json {#metadata}

The bundled SD Mod Manager documentation defines `name`, `description`, `author`, `homepage`, `support`, `icon`, `version`, `category`, and `compatibility`. A field marked as `lng` may be a locale object: the manager checks the current language first and falls back to English.

```json
{
  "name": { "ru": "Мой мод", "en": "My Mod" },
  "description": { "ru": "README.ru.md", "en": "README.en.md" },
  "author": "Author",
  "icon": "icon.png",
  "version": "0.1.0",
  "category": "gameplay"
}
```

Paths in `mod.json` are relative to the mod directory. Do not add `requires`, `load_after`, or `incompatible` until you can name a real dependency or conflict.

## Add one observable resource {#first-resource}

For the first run, choose a resource whose result is easy to observe and revert: a localization string, a UI image, or another confirmed loose resource. Preserve its exact name and relative path. Case, extension, and nesting matter more than a descriptive filename.

ERA registers supported inputs from `Data`, including PAC archives, and applies its own resource lookup layer. A matching name in another enabled mod can therefore hide your file. Keep the active mod set minimal for this first test.

## Enable and test {#enable-test}

1. Add the mod through the Mod Manager used by your distribution or through its documented mod order.
2. Run the same short scenario that you verified before the change.
3. Confirm that the selected resource—and only that resource—changed.
4. Exit the game completely before another test so an already loaded resource cannot mask the result.
5. If nothing changes, check the path, filename, enabled state, and conflicts with higher-priority mods.

Do not move on to packaging or bulk replacement until one loose file works consistently.

## Keep the project maintainable {#project-hygiene}

Store editable source assets separately from exported game files. A project repository can contain `mod.json`, localized descriptions, artwork sources, and a build script, but should exclude editor temporaries and any copy of the installed game. Change the mod version deliberately and explain every dependency in release notes.

---

# Installation and workspace

URL: /en/docs/era/installation/

Prepare a reproducible ERA setup for development without losing a known-good state.

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

---

# Mod structure

URL: /en/docs/era/mod-structure/

A practical map of Data and Lang directories, archives, and resource precedence.

## Basic skeleton {#skeleton}

Keep each mod in its own directory under `Mods`. Do not add empty branches “for later”; create only what the current resources need.

```text
Mods/MyMod/
├─ Data/        # game resources and supported archives
└─ Lang/        # primary and alternative locale strings
```

`Data` is not a universal dumping ground. The nested path must match the loader responsible for the format.

## Data and archives {#data}

ERA source scans `Data/*.pac` and registers the PAC archives it finds. ERA 3 also documents ZIP archives in `Data` for PNG resources: their internal structure should look as though the files were stored relative to the game root. Real directory files take priority over matching paths in ZIP archives.

## Localization {#lang}

In the mechanism documented for ERA 3.9.6, JSON files under `Lang/<Language>` take priority over files in the `Lang` root. A practical layout keeps the main locale in the root and alternatives under `Lang/en`, `Lang/ru`, and similar subdirectories.

## Precedence and conflicts {#precedence}

When the result is unexpected, search for a conflict by exact resource name. Check:

1. a loose file in the mod directory;
2. the same path inside ZIP or PAC;
3. rules under `Data/Redirections`;
4. another active mod that provides the same name.

Do not rely on incidental file-system order. Record every precedence rule with a version-specific note or a supporting source location.

---

# Game architecture for mod authors

URL: /en/docs/game/

The smallest useful model of startup, virtual resources, and caching for diagnosing a content mod.

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

---

# How ERA loads resources

URL: /en/docs/game/resource-loading/

A practical model of the VFS, archives, redirections, and caching for conflict diagnosis.

## From a game request to a file {#pipeline}

The game requests a resource by name or relative path. ERA adds registered mod sources to the original archives and checks redirection rules. A matching file is then decoded by its format-specific loader and may remain in memory through the shared resource manager.

Separate three questions during diagnosis: which path did the game request, which source did ERA select, and could the loader decode the contents? Each failure looks different: a resource may be absent, lose a priority conflict, or be found with an invalid structure.

## Archives and loose files {#sources}

`Lodman.pas` registers the base LOD archives and scans `Data/*.pac`. ERA 3 also documents ZIP inputs for PNG replacement. An archive entry must use the path expected by its consumer relative to the game or mod root.

A loose file is easier during development because it can be replaced without repacking and compared byte for byte. Package only after filenames and structure are proven. MMArchive also warns that replacement and deletion fragment an archive; VID archives in particular should be optimized with MMArchive before another tool reads them.

## Redirections {#redirections}

ERA source reserves `Data/Redirections` for global redirection configurations. A redirection changes the lookup target; it neither copies a file nor repairs its contents. Missing-resource rules are handled separately, and some audio/video resolution happens after media lists are loaded.

Record the original name, target name, configuration file, and ERA version for every rule. Chained rules are difficult to diagnose, so verify one rule with other mods disabled first.

## Priority and conflicts {#precedence}

When several active mods provide the same path, their priority determines the result. Interpret the order displayed by the mod manager according to its own documentation: “loaded after” and “greater priority” may describe opposite directions of that list.

To identify the selected source, disable candidates one at a time or substitute an unmistakable test asset. Do not rename it during the test; the purpose is to investigate one exact resource name.

## Cache and repeat testing {#cache}

`ResLib.pas` describes decoded resources indexed by relative path, reference counts, and a cleanup queue. A changed disk file therefore does not have to replace an object already loaded in memory. Exit the game completely before a controlled rerun.

Use this order: confirm the disk file, confirm the mod is enabled, exclude a higher-priority duplicate, inspect redirections, restart the game, and only then debug the file format itself.

## Common failure map {#failure-map}

| Symptom | First checks |
| --- | --- |
| Old version is still used | Cache, another mod’s priority, incorrect path |
| Empty or magenta image | Dimensions, palette, transparency, frame index |
| Crash while loading | File structure, entry count, encoding, incompatible version |
| Audio or video was not replaced | Media list, name, late redirection, container format |
| Works only without another mod | Matching path or an explicit incompatibility |

---

# Resource formats

URL: /en/docs/game/resources/

A map of important game and ERA formats, their roles, and safe verification steps.

## Archives {#archives}

| Format | Role |
| --- | --- |
| `LOD` | The core Heroes III resource archive. ERA registers several LOD categories for graphics and audio. |
| `PAC` | An additional archive that ERA discovers under `Data/*.pac` and adds to the load list. |
| `ZIP` | Used by ERA 3 for specific PNG resources; its internal structure mirrors paths from the game root. |

For early development, prefer a loose file when the loader supports it because it is easier to compare and replace. Package the verified set only after the path and name are known to work.

## Graphics {#graphics}

`DEF` stores groups of frames for game animations. ERA 3 can replace individual frames with PNG files using `Data/Defs/<name.def>/<group>_<frame>.png`; group and frame indexes start at zero. Some interface PCX resources can be replaced by PNG files under `Data/Pcx`.

Preserve dimensions, transparency semantics, and frame order. A visually valid PNG can still be the wrong resource if its path, group, or index does not match.

## Text and data {#text-data}

- `TXT` holds classic game tables and strings; row and separator rules depend on the particular file.
- `ERT` and `ERS` belong to the legacy ERM text and resource ecosystem; use them only with documentation for the consuming mechanism.
- `JSON` is used for ERA configuration, localization, and redirection. Its schema comes from the consumer, not from the extension itself.

Always preserve the encoding, column count, and control sequences expected by the original format.

## Audio, video, and fonts {#media}

Classic resources include WAV audio, video files, and game fonts. ERA distinguishes archive lookup from media lists; a missing WAV or video redirection may be applied later than ordinary LOD lookup.

## Diagnosis {#diagnostics}

Test one replacement at a time. If a resource is not found, check the name, path, archive, redirection, and mod conflicts in that order. If it is found but rendered incorrectly, inspect the internal format structure.

---

# Glossary

URL: /en/docs/glossary/

Agreed Russian and English terminology for the general ERA documentation.

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

---

# LLM content map

URL: /en/docs/llm-map/

A human-readable page index with links to compact machine-readable representations.

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

---

# Quick Start

URL: /en/docs/quick-start/

A safe path from a working installation to the first verifiable mod resource.

## 1. Prepare the environment {#prepare}

Use a separate Heroes III installation with ERA instead of your only playable copy. Keep a known-good state and record the platform version so you can distinguish a project error from behavior that differs between releases.

Start the game once before adding your own changes. If the clean setup does not work, fix that baseline before continuing with mod development.

## 2. Create a minimal mod {#skeleton}

Create a dedicated project directory inside the mods directory. The smallest useful structure depends on your first resource, but separating data and localization early is helpful:

```text
Mods/
└─ MyFirstMod/
   ├─ Data/
   └─ Lang/
```

Do not edit the original game archives for this first check. A separate directory is much easier to disable, compare, or remove without side effects.

## 3. Choose a small test {#first-change}

A good first change is one replaceable text or image resource whose exact name and path you know. Change only one thing per launch. This verifies three conditions at once: the mod is active, the path is correct, and the game can read the format.

## 4. Verify the result {#verify}

Write down the expected effect before starting the game. Check that exact effect, then inspect ERA logs if the launch or replacement fails. If nothing changes:

1. verify the exact file name and case;
2. verify the directory nesting;
3. check whether another mod replaces the same resource;
4. temporarily disable unrelated mods and try again.

## Next step {#next}

Continue with **Mod structure** for the `Data` and `Lang` directories, archives, and precedence rules. Avoid adding several formats or complex tools until one small replacement works reliably.

---

# Site structure

URL: /en/docs/site-structure/

How routes, locales, search, sources, and machine-readable representations fit together.

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

---

# Modding tools

URL: /en/docs/tools/

Choose a program for the format, separate editing from validation, and use the legacy Tools bundle safely.

## Start with the format {#choose}

Choose a tool by an “input → output” pair, not by popularity. Record the source filename and format, expected output, program version, and in-game validation method. If those four items are unknown, running a legacy utility creates more uncertainty than value.

The ERA bundle places current and legacy programs side by side. Several tools may appear to solve the same task: archives have MMArchive and standalone `lod*.exe` programs, while fonts have two Font Editor builds. For a new workflow, prefer the option with understandable bundled help and a reversible operation.

## Workflow by data type {#workflow}

| Task | Primary tool | Independent check |
| --- | --- | --- |
| LOD/PAC/VID and related archives | MMArchive | export, re-import, compare, and launch |
| Inspect a DEF | Def Preview | groups, frames, and DEF type |
| Build a DEF | Heroes3 Def Tool | reopen and validate in game |
| TXT tables | Txt Tables Editor | encoding, columns, and delimiters |
| `object` files | Object TXT Files Editor | one copied table and a test map |
| Random-map templates | Template Editor | `rmg.txt` import/export and map generation |
| BIK/SMK | RS Bink Player | playback and frame stepping |
| Mod set and order | SD Mod Manager | controlled startup and resource ownership |

The [tool catalog](catalog/) contains the exact names of all bundled directories and executables.

## Archives require a round trip {#archives}

MMArchive documents adding files, merging archives, and optimization. Replacement and deletion cause fragmentation; for VID, MMArchive stores extra size information that other tools may not recognize before optimization.

Before a bulk change, export one resource, import it again without an intentional edit, and compare the result. A successful round trip proves only the technical chain—an in-game run is still required.

## Graphics, palettes, and interface {#graphics}

Def Preview provides quick inspection of animation groups. Heroes3 Def Tool builds and edits DEF files, including frames, masks, and shadows. DEFka is supplied separately for creature graphics, and Heroes 3 Dialogs is identified as a WoG custom-dialog editor. Two Font Editor builds are included.

Do not copy parameters merely because two pictures look alike. Dimensions, group index, frame number, palette, and transparency are part of the resource. PngCrush can reduce a PNG but cannot repair an incorrect path or alpha-channel meaning.

## Higher-risk utilities {#risk}

BinMagic, ExeBuilder, EVME, and UN:C to BIN operate on patches, executables, or process memory. Their result depends on an exact EXE version and can damage a file or running process. This site does not yet publish ERM/UN:C instructions: a bundled tool does not prove that an address or recipe applies to the current build.

Use a copy, retain the original checksum, and never apply an unknown patch “just to see.” EVME documentation explicitly warns about memory writes and dump operations.

## Safe process {#safe-process}

1. Copy the source and record its SHA-256.
2. Perform one operation with one tool.
3. Store exports separately from editable sources.
4. Open the result with a second program when the format permits.
5. Validate one repeatable scenario in a separate game installation.
6. Only then process a batch.

When bundled help is absent, stop at inventory and find documentation for the exact version. Do not infer command-line switches from an EXE name.

---

# ERA tool catalog

URL: /en/docs/tools/catalog/

A verified inventory of the bundled Tools programs, grouped by task and risk level.

## How to read this catalog {#usage}

Names below match directories and executables in the installed ERA Tools bundle. A purpose is stated only when bundled help, EXE metadata, or package contents support it. Presence does not guarantee compatibility with every ERA or Windows version: work on a copy of the game and retain the source file.

## Mods, editing, and diagnosis {#modding}

| Tool | Purpose and notes |
| --- | --- |
| **Mod Manager / SD Mod Manager** | Manages the enabled mod set and its order. Bundled documentation defines `mod.json`, localizable fields, and `requires`, `load_after`, and `incompatible`. The bundle includes current, old, and dark builds; do not mix their settings. |
| **Erm_Editor_Sublime** | A packaged Sublime Text configuration with ERM-oriented packages. The ERM reference is deferred, but this remains the supplied text-editing workspace. |
| **Issue Wizard** | The distribution contains `Issue Wizard.exe` and repository settings. Follow instructions for the exact build; the local package does not fully document its reporting protocol. |
| **DebugCreator** | Contains `DebugCreator.hta` and a settings file. The distribution does not document its purpose and compatibility well enough for a procedural guide. |
| **VfsTest** | A separate `VfsTest.exe` with test directories. Treat it as a specialized verification utility and check compatibility on a copy of the installation. |
| **Autoit** | The AutoIt runtime used by some helper scripts in the bundle. It is not a game-resource editor. |

## Archives and tables {#archives-tables}

| Tool | Purpose and notes |
| --- | --- |
| **MMArchive 1.3.1** | Edits Might & Magic 6–8 and Heroes III archives except `*.hwl`. It adds files, merges archives, and optimizes them after replacement or deletion. Built-in optimization is especially important for VID before another tool reads it. |
| **Txt Tables Editor 1.4.1** (`TextEdit/TxtEdit.exe`) | Editor for tabular TXT resources. Preserve source encoding, column count, and delimiters. |
| **Object TXT Files Editor 1.5** (`ObjTxtEditor/objtxteditor.exe`) | EXE metadata identifies it as an editor for Heroes III `object` files. Validate one copied table before a bulk change. |
| **lodexport.exe / lodimport.exe / lodmerge.exe** | Separate command-line LOD utilities in the package. No sufficient adjacent help is provided, so documented MMArchive is preferable for a new workflow. |
| **resman.exe / repman.exe / objector.exe** | Legacy standalone utilities in the Tools root. Their interfaces and accepted input versions are not documented in the bundle; never use them on the only copy. |

## DEF, interface, and fonts {#graphics}

| Tool | Purpose and notes |
| --- | --- |
| **Def Preview 1.0** | Previews animation for a selected DEF group. Bundled help also documents renaming groups, changing DEF type through the status bar, and copying group numbers from another DEF. |
| **Heroes3 Def Tool 3.2.1** (`H3DefTool`) | Builds and edits DEFs, frames, masks, and shadows. Its tutorial covers a new DEF and backup options; always validate palettes and frame indexes. |
| **DEFka 2.0** | A separate program for creature graphics sets. The package includes a database and support text but no complete modern format specification. |
| **Heroes 3 Dialogs** (`Dialogs Editor`) | EXE metadata describes it as a WoG custom-dialog editor. The related ERM mechanism is deferred; only the tool purpose is recorded here. |
| **FNT Editor / FNTeditor** (`Font Editor`) | Two bundled versions of a game-font editor. Keep the original FNT and verify the complete character set for both locales. |
| **PngCrush** | Provides `pngcrush.exe` and a batch helper for PNG optimization. Optimization cannot repair an incorrect path, dimensions, or transparency semantics. |

## Maps and templates {#maps}

**Template Editor 0.99** (`TEditor`) edits random-map generator templates. Its help covers creating and importing templates from `rmg.txt`, zones, connections, existence rules, guards, and `.tpz` project files. Importing built-in templates requires an extracted `rmg.txt` from `h3bitmap.lod`.

The **ExeMapCompiler** directory contains `compile.phc`, `decompile.phc`, `optimize.phc`, and `mapToDbgmap.bat`, but no procedural help. Use it only in a workflow with a confirmed input format.

## Video and multimedia {#media}

| Tool | Purpose and notes |
| --- | --- |
| **RS Bink Player 1.2.5** | Plays `*.bik` and `*.smk`, including Heroes III videos. Its readme documents file navigation, pause, frame stepping, and frame export. |
| **Smacker** | A RAD Video Tools/Smacker package for its video format. It is a historical third-party toolset; retain source media and verify usage rights before conversion. |

## Patches and specialized converters {#patches}

| Tool | Purpose and risk |
| --- | --- |
| **BinMagic 1.0** | Creates, converts, and applies text or binary patches. It supports address conversion through a DLL. A wrong address or version can damage the target, so always work on a copy. |
| **ExeBuilder** | Takes `in.exe`, applies every adjacent `*.bin`, and writes `out.exe`. Its help is limited to that scheme; do not use the result with another EXE version. |
| **EVME 1.0 / ERM Vars Memory Editor** | A runtime variable and memory debugger for old WoG/TE/Phoenix lines. Its help explicitly warns about memory writes and dump operations; compatibility with a modern build must not be assumed. |
| **UN:C to bin patch converter** | Converts `C[address]/size/value` records into one BIN patch. It works with binary addresses; UN:C details are deferred with the ERM section. |
| **ScriptsToEra260** | A script-conversion directory with a PHP program and a named-function table. Procedural use belongs in the future ERM documentation. |
| **installmod.exe** | A root-level mod installation utility. No adjacent public help is included; prefer Mod Manager for a controlled workflow. |

## Safe selection rule {#safety}

Choose the format first, then the tool, then a validation method. Preserve the original, perform one operation, compare the output, and move to batch processing only after an in-game test. For utilities without bundled help, the inventory proves their presence but does not justify guessing command-line switches or compatibility.

---

# Troubleshooting

URL: /en/docs/troubleshooting/

A repeatable path from a clean startup to a precise report for a conflict or invalid resource.

## Record a baseline {#baseline}

Before changing anything, record the ERA and game versions, enabled mods, and their order. Run without the mod under development, open the test map, and retain the logs. This baseline separates an installation problem from a new content problem.

If the clean run is already unstable, pause resource work. Updating the platform, changing the mod list, and editing a file in the same test creates three independent causes.

## Reduce the case to one change {#minimal-case}

Keep one mod, one changed resource, and one short scenario. For graphics, use one screen or object; for a table, one row; for mod order, one pair of conflicting directories. Exit the game completely between trials.

Compare the exact path, size, modification time, and checksum as well as the screen. If a loose file works but the archive version does not, the fault is in packaging or the internal path rather than in the asset contents.

## Classify the failure {#classify}

1. **The file was not selected.** Check its name, path, enabled state, priority, and redirections.
2. **The file was selected but cannot be decoded.** Check format, encoding, dimensions, entry counts, and loader-specific constraints.
3. **The file was decoded but the effect stayed stale.** Exclude cache and already-created game objects with a full restart.
4. **The failure depends on another mod.** Find the shared path and test both orders.
5. **The crash happens before the menu.** Compare logs and revert the last independent change.

## Use the matching tool {#tools}

For archives, make a trial export and re-import with MMArchive. Inspect a DEF in Def Preview before validating the build in Heroes3 Def Tool. Edit tables with Txt Tables Editor or Object TXT Files Editor only after preserving the source encoding and structure. `VfsTest.exe` is present as a separate utility in the installed bundle; verify its exact compatibility with your build on a copy of the game.

A tool does not replace a controlled game scenario. Successfully opening a file proves only that this one program could read it.

## Write a useful report {#report}

Include versions, mod list and order, the exact changed path, expected and actual behavior, minimal steps, and the relevant log excerpt. Share a checksum or a small original test file rather than the whole game or a third-party distribution. For a binary patch, always name the EXE version and application method.

A good report lets another person reproduce the fault without guessing and test one claim per run.

---

# What Is a Mod?

URL: /en/docs/what-is-a-mod/

What a Heroes III mod contains, how ERA loads its files, and why changes should remain separate from the original game.

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
