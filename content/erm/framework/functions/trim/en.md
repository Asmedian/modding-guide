---
{"title":"Trim","summary":"Trims spaces and control bytes 0..32 from both ends; returns a new ERM string.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Trims spaces and control bytes 0..32 from both ends; returns a new ERM string.

## Call contract {#signature}

```erm
!!FU(Trim):P(strPtr)/(resultPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `strPtr` | input |
| x2 | `resultPtr` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_StrTrim`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1411–1420, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
