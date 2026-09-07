---
{"title":"Array_Revert","summary":"Reverses the entire array or an inclusive range, defaulting to 0..size-1. Supports integers and strings.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Reverses the entire array or an inclusive range, defaulting to 0..size-1. Supports integers and strings.

## Call contract {#signature}

```erm
!!FU(Array_Revert):P(list)/(startInd)/(endInd);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `startInd` | output / mutable |
| x3 | `endInd` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_RevertInt32Array`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 956–981, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
