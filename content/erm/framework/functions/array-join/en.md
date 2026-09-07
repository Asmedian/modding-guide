---
{"title":"Array_Join","summary":"Joins integer or string elements using gluePtr, empty by default. Returns an ERM string and uses/clears s^result^ and s^temp^.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Joins integer or string elements using gluePtr, empty by default. Returns an ERM string and uses/clears s^result^ and s^temp^.

## Call contract {#signature}

```erm
!!FU(Array_Join):P(list)/(resultPtr)/(gluePtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `resultPtr` | output / mutable |
| x3 | `gluePtr` | output / mutable |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp) · [s^result^](../../globals/#global-s-result).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 744–780, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int)
