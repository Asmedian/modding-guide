---
{"title":"Array_SortedUnique","summary":"Sorts an integer array and removes duplicates, shrinking it. String arrays are rejected.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Sorts an integer array and removes duplicates, shrinking it. String arrays are rejected.

## Call contract {#signature}

```erm
!!FU(Array_SortedUnique):P(list);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

## Related functions {#calls}

[Array_Sort](../array-sort/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 890–933, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int)
