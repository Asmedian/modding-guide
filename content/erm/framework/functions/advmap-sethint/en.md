---
{"title":"AdvMap_SetHint","summary":"Immediately updates the adventure-map hint only when the root window is DLG_ADVMAP. Chat text may remain hidden until the next input.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Immediately updates the adventure-map hint only when the root window is DLG_ADVMAP. Chat text may remain hidden until the next input.

## Call contract {#signature}

```erm
!!FU(AdvMap_SetHint):P(newHint);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `newHint` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[H3Dlg_DrawItemOnScreen](../h3dlg-drawitemonscreen/) · [H3Dlg_GetRootDlg](../h3dlg-getrootdlg/) · [H3Dlg_SendCmdToItem](../h3dlg-sendcmdtoitem/) · [H3Dlg_UpdateItemRange](../h3dlg-updateitemrange/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2363–2376, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[DLG_ADVMAP](../../constants/dialogs/#const-dlg-advmap) · [DLG_CMD_SET_TEXT](../../constants/h3-dialog-commands/#const-dlg-cmd-set-text) · [ITEM_ADVMAP_HINT](../../constants/dialog-item-ids/#const-item-advmap-hint) · [NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_VTABLE](../../constants/game-structures/#const-struct-h3dlg-vtable) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
