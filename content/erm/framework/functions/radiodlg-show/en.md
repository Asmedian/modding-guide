---
{"title":"RadioDlg_Show","summary":"Shows the dialog through IF:G and returns ?resultItem/?resultValue/?resultTagPtr. Cancel/empty lists yield -1/-1/empty. Copies state first so a nested dialog cannot alter current items.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Shows the dialog through IF:G and returns ?resultItem/?resultValue/?resultTagPtr. Cancel/empty lists yield -1/-1/empty. Copies state first so a nested dialog cannot alter current items.

## Call contract {#signature}

```erm
!!FU(RadioDlg_Show):P(resultItem)/(resultValue)/(resultTagPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `resultItem` | output / mutable |
| x2 | `resultValue` | output / mutable |
| x3 | `resultTagPtr` | output / mutable |

## State and dependencies {#context}

Named globals: [i^radioDlg_captions^](../../globals/#global-i-radiodlg-captions) · [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [s^radioDlg_title^](../../globals/#global-s-radiodlg-title) · [s^temp^](../../globals/#global-s-temp).

## Related functions {#calls}

[Array_Copy](../array-copy/) · [IntLog2](../intlog2/) · [NewIntArray](../newintarray/) · [NewStrArray](../newstrarray/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2612–2678, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item) · [RADIO_DLG_FLAG_BTN_CANCEL](../../constants/radio-dialogs/#const-radio-dlg-flag-btn-cancel) · [TRUE](../../constants/universal/#const-true)
