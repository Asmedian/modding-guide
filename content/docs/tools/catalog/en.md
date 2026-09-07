---
{"title":"ERA tool catalog","summary":"A verified inventory of the bundled Tools programs, grouped by task and risk level.","translationStatus":"reviewed"}
---

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

