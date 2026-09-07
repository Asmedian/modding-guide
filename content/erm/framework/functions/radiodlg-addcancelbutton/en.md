---
{"title":"RadioDlg_AddCancelButton","summary":"Reserves one of 12 positions for Cancel. If full, drops the last item and reports an error once. Repeated calls do not add another button.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Reserves one of 12 positions for Cancel. If full, drops the last item and reports an error once. Repeated calls do not add another button.

## Call contract {#signature}

```erm
!!FU(RadioDlg_AddCancelButton):P;
```

## State and dependencies {#context}

Named globals: [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [i^radioDlg_freeSpaceAlerted^](../../globals/#global-i-radiodlg-freespacealerted).

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2474–2489, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [RADIO_DLG_FLAG_BTN_CANCEL](../../constants/radio-dialogs/#const-radio-dlg-flag-btn-cancel) · [RADIO_DLG_MAX_ITEMS](../../constants/radio-dialogs/#const-radio-dlg-max-items) · [TRUE](../../constants/universal/#const-true)
