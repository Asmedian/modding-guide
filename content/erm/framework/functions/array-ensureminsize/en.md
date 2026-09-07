---
{"title":"Array_EnsureMinSize","summary":"Grows an array to minSize when needed and fills new items. Never shrinks it.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Grows an array to minSize when needed and fills new items. Never shrinks it.

## Call contract {#signature}

```erm
!!FU(Array_EnsureMinSize):P(list)/(minSize)/(fillValue);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `minSize` | input |
| x3 | `fillValue` | input |

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[Array_Resize](../array-resize/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1041–1053, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
