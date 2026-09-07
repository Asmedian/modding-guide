---
{"title":"DL_GetSize","summary":"Returns the width and height of an existing DL dialog; reports an error if absent.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns the width and height of an existing DL dialog; reports an error if absent.

## Call contract {#signature}

```erm
!!FU(DL_GetSize):P(dlgId)/(width)/(height);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |
| x2 | `width` | output / mutable |
| x3 | `height` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_FindById](../dl-findbyid/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2256–2272, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
