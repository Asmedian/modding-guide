---
{"title":"MakeRngSeed","summary":"Derives a deterministic seed from up to 15 integers; the last argument is the output. The same input sequence produces the same seed.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Derives a deterministic seed from up to 15 integers; the last argument is the output. The same input sequence produces the same seed.

## Call contract {#signature}

```erm
!!FU(MakeRngSeed):P(firstArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `firstArg` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Hash32`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1361–1375, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[SIZEOF_INT](../../constants/data-types/#const-sizeof-int)
