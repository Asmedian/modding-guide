---
{"title":"Creating your first mod","summary":"Move from an empty directory to an enabled mod with metadata, one resource, and a repeatable test.","translationStatus":"reviewed"}
---

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

