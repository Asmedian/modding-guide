---
{"title":"How ERA loads resources","summary":"A practical model of the VFS, archives, redirections, and caching for conflict diagnosis.","translationStatus":"reviewed"}
---

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

