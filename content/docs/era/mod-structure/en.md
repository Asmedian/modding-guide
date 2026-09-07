---
{"title":"Mod structure","summary":"A practical map of Data and Lang directories, archives, and resource precedence.","translationStatus":"reviewed"}
---

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

