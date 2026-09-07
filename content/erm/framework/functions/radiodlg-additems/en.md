---
{"title":"RadioDlg_AddItems","summary":"Adds up to 5 caption/value/tag triples. An incomplete final triple is ignored; no item is automatically selected.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Adds up to 5 caption/value/tag triples. An incomplete final triple is ignored; no item is automatically selected.

## Call contract {#signature}

```erm
!!FU(RadioDlg_AddItems):P(firstItemCaptionPtr)/(firstItemValue)/(firstItemTagPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `firstItemCaptionPtr` | input |
| x2 | `firstItemValue` | input |
| x3 | `firstItemTagPtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[RadioDlg_AddItem](../radiodlg-additem/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2561–2577, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
