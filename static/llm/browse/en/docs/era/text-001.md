# Mod compatibility and order

ID: docs.era.compatibility
URL: https://asmedian.github.io/modding-guide/en/docs/era/compatibility/
Part: 1/1
Source references: era-tools:mod-manager-format, era-changelog:3
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.era.compatibility 1 -->
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
<!-- llm:end docs.era.compatibility 1 -->

# Creating your first mod

ID: docs.era.creating-mod
URL: https://asmedian.github.io/modding-guide/en/docs/era/creating-mod/
Part: 1/1
Source references: era-source:lodman, era-changelog:3, era-tools:mod-manager-format
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.era.creating-mod 1 -->
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
<!-- llm:end docs.era.creating-mod 1 -->

# Installing ERA

ID: docs.era.installation
URL: https://asmedian.github.io/modding-guide/en/docs/era/installation/
Part: 1/1
Source references: era-project-rus:readme, era-project-eng:readme
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.era.installation 1 -->
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
<!-- llm:end docs.era.installation 1 -->

# Mod structure

ID: docs.era.mod-structure
URL: https://asmedian.github.io/modding-guide/en/docs/era/mod-structure/
Part: 1/1
Source references: era-source:lodman, era-changelog:3
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.era.mod-structure 1 -->
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
<!-- llm:end docs.era.mod-structure 1 -->

