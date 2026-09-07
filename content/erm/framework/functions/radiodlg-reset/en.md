---
{"title":"RadioDlg_Reset","summary":"Resets the shared radio dialog title, items, selection, and flags. Call before constructing a new dialog.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Resets the shared radio dialog title, items, selection, and flags. Call before constructing a new dialog.

## Call contract {#signature}

```erm
!!FU(RadioDlg_Reset):P;
```

## State and dependencies {#context}

Named globals: [i^radioDlg_captions^](../../globals/#global-i-radiodlg-captions) · [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [i^radioDlg_freeSpaceAlerted^](../../globals/#global-i-radiodlg-freespacealerted) · [s^radioDlg_title^](../../globals/#global-s-radiodlg-title).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2456–2467, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item) · [RADIO_DLG_MAX_ITEMS](../../constants/radio-dialogs/#const-radio-dlg-max-items)
