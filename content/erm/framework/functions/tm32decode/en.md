---
{"title":"Tm32Decode","summary":"Inverts Tm32Encode for a 32-bit value. Changes f and g.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Inverts Tm32Encode for a 32-bit value. Changes f and g.

## Call contract {#signature}

```erm
!!FU(Tm32Decode):P(value)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `value` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1342–1349, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
