# How ERA loads resources

ID: docs.game.resource-loading
URL: https://asmedian.github.io/modding-guide/en/docs/game/resource-loading/
Part: 1/1
Source references: era-source:lodman, era-source:reslib, era-source:gameext, era-changelog:3
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.game.resource-loading 1 -->
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
<!-- llm:end docs.game.resource-loading 1 -->

# Resource formats

ID: docs.game.resources
URL: https://asmedian.github.io/modding-guide/en/docs/game/resources/
Part: 1/1
Source references: era-source:lodman, era-source:reslib, era-changelog:3, old-help:index
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body docs.game.resources 1 -->
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
<!-- llm:end docs.game.resources 1 -->

