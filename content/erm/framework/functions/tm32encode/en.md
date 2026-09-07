---
{"title":"Tm32Encode","summary":"Reversible 32-bit mixing, inverted by Tm32Decode. Changes fast variables f and g. This is not encryption.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Reversible 32-bit mixing, inverted by Tm32Decode. Changes fast variables f and g. This is not encryption.

## Call contract {#signature}

```erm
!!FU(Tm32Encode):P(value)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `value` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1334–1341, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
