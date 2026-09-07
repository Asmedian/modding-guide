---
{"title":"RadioDlg_GetItemValue","summary":"Returns a value/string tag by index. An invalid index reports an error and returns -1; for tags this is not an empty string.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns a value/string tag by index. An invalid index reports an error and returns -1; for tags this is not an empty string.

## Call contract {#signature}

```erm
!!FU(RadioDlg_GetItemValue):P(itemInd)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `itemInd` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

Named globals: [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems).

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2584–2596, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
