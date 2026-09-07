---
{"title":"Array_Push","summary":"Appends up to 15 values and grows the array. Values must match its element type. An invalid array is skipped.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Appends up to 15 values and grows the array. Values must match its element type. An invalid array is skipped.

## Call contract {#signature}

```erm
!!FU(Array_Push):P(list)/(firstItem);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `firstItem` | input |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 376–400, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int)
