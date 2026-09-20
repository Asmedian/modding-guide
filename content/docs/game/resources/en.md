---
{"title":"Resource formats","summary":"A map of important game and ERA formats, their roles, and safe verification steps.","translationStatus":"reviewed"}
---

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
