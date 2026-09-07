---
{"title":"DL_SetSize","summary":"Changes an existing DL dialog width/height. Zero or omitted values preserve that dimension; items are not automatically rearranged.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Changes an existing DL dialog width/height. Zero or omitted values preserve that dimension; items are not automatically rearranged.

## Call contract {#signature}

```erm
!!FU(DL_SetSize):P(dlgId)/(width)/(height);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |
| x2 | `width` | input |
| x3 | `height` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_FindById](../dl-findbyid/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2273–2289, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
