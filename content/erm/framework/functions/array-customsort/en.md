---
{"title":"Array_CustomSort","summary":"Stable sort using callback(value1,value2,state,?result), with negative/zero/positive results defining order. String values are z indices. State defaults to 0; the inclusive range defaults to the entire array.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Stable sort using callback(value1,value2,state,?result), with negative/zero/positive results defining order. String values are z indices. State defaults to 0; the inclusive range defaults to the entire array.

## Call contract {#signature}

```erm
!!FU(Array_CustomSort):P(list)/(compareFunc)/(state)/(startInd)/(endInd);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `compareFunc` | input |
| x3 | `state` | input |
| x4 | `startInd` | output / mutable |
| x5 | `endInd` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_CustomStableSortInt32Array`, `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 835–889, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_STR](../../constants/erm-commands/#const-m-str) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
