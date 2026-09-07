---
{"title":"RadioDlg_SelectItem","summary":"Selects index 0..numItems-1; an invalid index clears selection to NO_RADIO_DLG_ITEM.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Selects index 0..numItems-1; an invalid index clears selection to NO_RADIO_DLG_ITEM.

## Call contract {#signature}

```erm
!!FU(RadioDlg_SelectItem):P(itemInd);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `itemInd` | input |

## State and dependencies {#context}

Named globals: [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2490–2496, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item)
