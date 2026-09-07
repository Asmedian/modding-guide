---
{"title":"Modding tools","summary":"Choose a program for the format, separate editing from validation, and use the legacy Tools bundle safely.","translationStatus":"reviewed"}
---

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

