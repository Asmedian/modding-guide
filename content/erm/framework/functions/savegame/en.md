---
{"title":"SaveGame","summary":"Saves using a name without extension. Defaults: appendExtension=TRUE, compressFile=TRUE, saveToData=FALSE, markInList=TRUE. Calls the native save address and may change the dialog selection.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Saves using a name without extension. Defaults: appendExtension=TRUE, compressFile=TRUE, saveToData=FALSE, markInList=TRUE. Calls the native save address and may change the dialog selection.

## Call contract {#signature}

```erm
!!FU(SaveGame):P(fileNamePtr)/(appendExtension)/(compressFile)/(saveToData)/(markInList);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `fileNamePtr` | input |
| x2 | `appendExtension` | output / mutable |
| x3 | `compressFile` | output / mutable |
| x4 | `saveToData` | input |
| x5 | `markInList` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `lstrcpyA`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1987–2009, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ADDR_MARKED_SAVEGAME_NAME](../../constants/useful-addresses/#const-addr-marked-savegame-name) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [FALSE](../../constants/universal/#const-false) · [GAME_MANAGER](../../constants/game-managers/#const-game-manager) · [TRUE](../../constants/universal/#const-true) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
