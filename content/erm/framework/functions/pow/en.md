---
{"title":"Pow","summary":"Exponentiation. Both inputs and output are floats; the result is copied from e1 with VR:C without numeric conversion.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Exponentiation. Both inputs and output are floats; the result is copied from e1 with VR:C without numeric conversion.

## Call contract {#signature}

```erm
!!FU(Pow):P(base)/(power)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `base` | input |
| x2 | `power` | input |
| x3 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `.Erm_Pow`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1166–1172, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
