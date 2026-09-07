---
{"title":"RadioDlg_SelectItemByTag","summary":"Selects the first matching value/string tag. Clears selection if no match exists.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Selects the first matching value/string tag. Clears selection if no match exists.

## Call contract {#signature}

```erm
!!FU(RadioDlg_SelectItemByTag):P(itemTagPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `itemTagPtr` | input |

## State and dependencies {#context}

Named globals: [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [s^temp^](../../globals/#global-s-temp).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2514–2531, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item)
