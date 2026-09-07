---
{"title":"RadioDlg_GetNumItems","summary":"Returns the item count excluding Cancel.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns the item count excluding Cancel.

## Call contract {#signature}

```erm
!!FU(RadioDlg_GetNumItems):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

Named globals: [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2578–2583, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
