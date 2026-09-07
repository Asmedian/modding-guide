---
{"title":"DL_AlignDlg","summary":"Aligns an existing DL dialog using TEXT_ALIGN_ bits. CENTER/MIDDLE take precedence over RIGHT/BOTTOM.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Aligns an existing DL dialog using TEXT_ALIGN_* bits. CENTER/MIDDLE take precedence over RIGHT/BOTTOM.

## Call contract {#signature}

```erm
!!FU(DL_AlignDlg):P(dlgId)/(alignment);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |
| x2 | `alignment` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_FindById](../dl-findbyid/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2290–2331, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ADDR_GAME_SCREEN_HEIGHT](../../constants/useful-addresses/#const-addr-game-screen-height) · [ADDR_GAME_SCREEN_WIDTH](../../constants/useful-addresses/#const-addr-game-screen-width) · [FALSE](../../constants/universal/#const-false) · [NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [STRUCT_H3DLG_X](../../constants/game-structures/#const-struct-h3dlg-x) · [STRUCT_H3DLG_Y](../../constants/game-structures/#const-struct-h3dlg-y) · [TEXT_ALIGN_BOTTOM](../../constants/h3-dialog-text-alignment/#const-text-align-bottom) · [TEXT_ALIGN_CENTER](../../constants/h3-dialog-text-alignment/#const-text-align-center) · [TEXT_ALIGN_MIDDLE](../../constants/h3-dialog-text-alignment/#const-text-align-middle) · [TEXT_ALIGN_RIGHT](../../constants/h3-dialog-text-alignment/#const-text-align-right) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int) · [UNC_INT16](../../constants/un-c-data-types/#const-unc-int16)
