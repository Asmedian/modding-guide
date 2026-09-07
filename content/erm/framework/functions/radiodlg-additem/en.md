---
{"title":"RadioDlg_AddItem","summary":"Adds a caption, number, tag and optional selectItem. Defaults: empty, 0, empty, FALSE. An empty caption displays as -/-. Capacity is 12, or 11 with Cancel.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Adds a caption, number, tag and optional selectItem. Defaults: empty, 0, empty, FALSE. An empty caption displays as -/-. Capacity is 12, or 11 with Cancel.

## Call contract {#signature}

```erm
!!FU(RadioDlg_AddItem):P(itemCaptionPtr)/(itemValue)/(itemTagPtr)/(selectItem);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `itemCaptionPtr` | input |
| x2 | `itemValue` | input |
| x3 | `itemTagPtr` | output / mutable |
| x4 | `selectItem` | input |

## State and dependencies {#context}

Named globals: [i^radioDlg_captions^](../../globals/#global-i-radiodlg-captions) · [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [i^radioDlg_freeSpaceAlerted^](../../globals/#global-i-radiodlg-freespacealerted).

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2532–2560, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [NULL](../../constants/universal/#const-null) · [RADIO_DLG_FLAG_BTN_CANCEL](../../constants/radio-dialogs/#const-radio-dlg-flag-btn-cancel) · [RADIO_DLG_MAX_ITEMS](../../constants/radio-dialogs/#const-radio-dlg-max-items) · [TRUE](../../constants/universal/#const-true)
