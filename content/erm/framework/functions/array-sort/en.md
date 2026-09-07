---
{"title":"Array_Sort","summary":"Sorts an array or inclusive startInd..endInd range in ascending order. Defaults to 0..size-1; bounds are clipped.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Sorts an array or inclusive startInd..endInd range in ascending order. Defaults to 0..size-1; bounds are clipped.

## Call contract {#signature}

```erm
!!FU(Array_Sort):P(list)/(startInd)/(endInd);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `startInd` | output / mutable |
| x3 | `endInd` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_SortInt32Array`, `Erm_SortStrArray`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 781–812, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_STR](../../constants/erm-commands/#const-m-str)
