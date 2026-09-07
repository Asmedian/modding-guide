---
{"title":"IntLog2","summary":"Returns ceil(log2(value)), or 0 when value<=0. Also used to identify a single set bit.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns ceil(log2(value)), or 0 when value<=0. Also used to identify a single set bit.

## Call contract {#signature}

```erm
!!FU(IntLog2):P(value)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `value` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_IntLog2`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1180–1193, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
