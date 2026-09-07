---
{"title":"Interpolate","summary":"Expands current ERM variables in a string template. Timing matters: a template and already expanded text are different inputs.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Expands current ERM variables in a string template. Timing matters: a template and already expanded text are different inputs.

## Call contract {#signature}

```erm
!!FU(Interpolate):P(strPtr)/(resultPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `strPtr` | input |
| x2 | `resultPtr` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_Interpolate`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1511–1520, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
