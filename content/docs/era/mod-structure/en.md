---
{"title":"Mod structure","summary":"What an ERA mod is and which directories, resources, and files it can contain.","translationStatus":"reviewed"}
---

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
