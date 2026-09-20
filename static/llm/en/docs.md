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

General documentation, the ERM reference, and the plugin development section are available. More material is added as sources are verified.

---

# The ERA platform

URL: /en/docs/era/

ERA’s role between Heroes III, mods, resources, and extensions during game startup.

## What ERA does {#role}

ERA extends the startup and runtime behavior of Heroes III. It initializes its own subsystems, loads settings, establishes a virtual resource layer, and emits lifecycle events. For a content mod author, the practical result is that changes can remain separate from the original game files.

This does not mean every file can live anywhere. The resource name, supported format, directory, and load order still decide whether a replacement is found.

## Virtual resources {#vfs}

The archive manager loads extra PAC files from `Data`, searches registered archives, and applies resource redirections. A separate resource manager caches decoded data and tracks active references. “Where is the file stored?” and “Which resource is the game using?” are therefore related but distinct questions.

---

# Mod compatibility and order

URL: /en/docs/era/compatibility/

Declare dependencies, priority, and conflicts without relying on accidental load order.

ERA loads mods from `list.txt` from top to bottom. A mod lower in the file has higher priority for its resources. Use SD Mod Manager to configure active mods, compatibility, and dependencies.

## Two directions of order {#priority}

The bundled SD Mod Manager documentation highlights an important distinction: a mod with greater priority supplies a resource first, while “loaded after” describes the opposite direction in the displayed load order. If `Mod B` is loaded after `Mod A`, `Mod B` has greater priority and its file wins when both provide the same name.

Record both facts during diagnosis: the visible order and the expected owner of the exact resource. “My mod is last” is not useful without the manager name and complete list.

## Mod Manager compatibility fields {#fields}

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

# Installing ERA

URL: /en/docs/era/installation/

Official installation, update, and removal steps for Heroes Launcher and manual setups.

## Game installation {#installation}

The current package is available from the [ERA releases](https://github.com/ERA-Projects/era-project-eng/releases/latest). These steps follow the [official installation guide](https://github.com/ERA-Projects/era-project-eng/blob/main/README.md#-game-installation).

### With Heroes Launcher {#launcher-install}

1. [Download Heroes Launcher](https://github.com/HeroesLauncher/heroeslauncher/releases) and install it outside system directories.
2. Open its ERA tab and select a working Heroes III version based on Shadow of Death: SoD, Complete, MOP, WoG, or HotA.
3. Choose the installation language and destination directory, then wait for the download and extraction.
4. Set the language and resolution under HD Mod Settings. The guide recommends `stretchable 32-bit OpenGL by Verok`; adjust optional tweaks if needed.
5. Start the game with Play in Heroes Launcher.

### Manually {#manual-install}

1. Prepare a working Heroes III installation based on Shadow of Death (SoD, Complete, MOP, WoG, or HotA).
2. Create a new directory. Copy every `.dll` from the game root, the `MP3` directory, and the `Data` directory containing `H3bitmap.lod`, `H3sprite.lod`, `Heroes3.snd`, and `VIDEO.VID`. Copy `Maps` if wanted.
3. Download the [latest ERA release](https://github.com/ERA-Projects/era-project-eng/releases/latest) and extract it into that directory.
4. Run `Tools/install.bat` to initialize the mod set, or `Tools/Mod Manager/mmanager.cmd` to select it yourself. The `WOG` mod is required.
5. Configure HD Mod with `HD_Launcher.exe` and launch `h3era HD.exe`.

## Updating the game {#update}

The [official update guide](https://github.com/ERA-Projects/era-project-eng/blob/main/README.md#-updating-the-game) recommends Heroes Launcher: open the gear menu, select Check for Updates, and wait for installation to finish.

For a manual update, download the current release. If files were removed from any mods, delete the affected mod directories first. Then extract the new archive over the installed game and replace outdated files.

## Uninstallation {#uninstall}

In Heroes Launcher, open the gear menu, choose Uninstall, optionally keep the base game files, and confirm. For a manual installation, delete the installed game directory. Both methods are described in the [official README](https://github.com/ERA-Projects/era-project-eng/blob/main/README.md).

---

# Mod structure

URL: /en/docs/era/mod-structure/

What an ERA mod is and which directories, resources, and files it can contain.

## What is a mod? {#definition}

A mod is a self-contained set of files that changes or extends the game. In ERA, each mod lives in its own directory under `Mods`, so the original game resources can remain intact.

## What a mod can contain {#contents}

- `Data` for game resources, archives, and scripts;
- `Lang` for JSON files with localization text and mod parameters;
- `MP3` for MP3 music;
- `Maps` for maps;
- `Games` for saved games;
- `EraPlugins` for game plugins and patches;
- `EraEditor` for map editor plugins and settings;
- `_HD3_Data` for HD Mod files;
- `DebugMaps` for plugin debug information;
- the mod's own manager files, such as `mod.json`, an icon, and `readme.md`.

Add only the directories your mod actually needs.

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
| `SND` | An archive of game sounds. |
| `VID` | An archive of game videos. |
| `ZIP` | Used by ERA 3 for specific PNG and JSON resources; its internal structure mirrors paths from the game root. |

For early development, prefer a loose file when the loader supports it because it is easier to compare and replace. Package the verified set only after the path and name are known to work.

## Graphics {#graphics}

`DEF` stores groups of frames for game animations. ERA 3 can replace individual frames with PNG files using `Data/Defs/<name.def>/<group>_<frame>.png`; group and frame indexes start at zero. Some interface PCX resources can be replaced by PNG files under `Data/Pcx`. ERA also loads new PNG files as standard resources without requiring an original PCX.

Preserve dimensions, transparency semantics, and frame order. A visually valid PNG can still be the wrong resource if its path, group, or index does not match.

## Text and data {#text-data}

- `TXT` holds classic game tables and strings; row and separator rules depend on the particular file.
- `ERT` contains text and resource tables from the old ERM ecosystem. It is not recommended for new mods; use JSON instead.
- `ERS` is an obsolete format for changing WoG options.
- `JSON` contains localization text and mod parameters.

Always preserve the encoding, column count, and control sequences expected by the original format.

## Audio, video, and fonts {#media}

Classic resources include WAV audio, `.BIK` and `.SMK` video, and `.FNT` game fonts.

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

From an installed ERA game to the first working ERM script in your own mod.

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

**Map Editor** is the Heroes III map editor.

**Template Editor 0.99** (`TEditor`) edits random-map generator templates. Its help covers creating and importing templates from `rmg.txt`, zones, connections, existence rules, guards, and `.tpz` project files. Importing built-in templates requires an extracted `rmg.txt` from `h3bitmap.lod`.

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

The **ExeMapCompiler** directory contains `compile.phc`, `decompile.phc`, `optimize.phc`, and `mapToDbgmap.bat`, but no procedural help. Use it only in a workflow with a confirmed input format.

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
