---
{"title":"Sqrt","summary":"Float square root. Input/output are floating point and e1 changes. Negative inputs have no real square root.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Float square root. Input/output are floating point and e1 changes. Negative inputs have no real square root.

## Call contract {#signature}

```erm
!!FU(Sqrt):P(value)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `value` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `.Erm_Sqrt`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1173–1179, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
