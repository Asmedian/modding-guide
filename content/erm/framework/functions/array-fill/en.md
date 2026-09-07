---
{"title":"Array_Fill","summary":"Fills an integer array with startValue, startValue+step…; step defaults to 0. The inclusive range defaults to the whole array. It writes raw 32-bit values; do not pass a string array.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Fills an integer array with startValue, startValue+step…; step defaults to 0. The inclusive range defaults to the whole array. It writes raw 32-bit values; do not pass a string array.

## Call contract {#signature}

```erm
!!FU(Array_Fill):P(list)/(startValue)/(step)/(startInd)/(endInd);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `startValue` | input |
| x3 | `step` | input |
| x4 | `startInd` | output / mutable |
| x5 | `endInd` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_FillInt32Array`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 982–1010, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
