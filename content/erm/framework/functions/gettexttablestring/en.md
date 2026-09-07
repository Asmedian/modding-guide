---
{"title":"GetTextTableString","summary":"Reads a bldgspec, help, or znpc00 cell by rowIndex/colIndex. Despite the “get or set” comment, this snapshot has no write branch. The caller must validate indices.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Reads a bldgspec, help, or znpc00 cell by rowIndex/colIndex. Despite the “get or set” comment, this snapshot has no write branch. The caller must validate indices.

## Call contract {#signature}

```erm
!!FU(GetTextTableString):P(txtFilename)/(rowIndex)/(colIndex)/(string);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `txtFilename` | input |
| x2 | `rowIndex` | input |
| x3 | `colIndex` | input |
| x4 | `string` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[StrToLower](../strtolower/) · [Substr](../substr/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3285–3320, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl)
