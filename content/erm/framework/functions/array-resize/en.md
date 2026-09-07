---
{"title":"Array_Resize","summary":"Resizes an array. New items receive 0/empty text or fillValue; existing items remain, truncated items are removed.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Resizes an array. New items receive 0/empty text or fillValue; existing items remain, truncated items are removed.

## Call contract {#signature}

```erm
!!FU(Array_Resize):P(list)/(newSize)/(fillValue);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `newSize` | input |
| x3 | `fillValue` | input |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1011–1040, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [M_STR](../../constants/erm-commands/#const-m-str)
