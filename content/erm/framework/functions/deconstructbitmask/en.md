---
{"title":"DeconstructBitMask","summary":"Returns a new local integer array of set-bit positions 0..31, with lifetime extended to the caller context.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns a new local integer array of set-bit positions 0..31, with lifetime extended to the caller context.

## Call contract {#signature}

```erm
!!FU(DeconstructBitMask):P(mask)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `mask` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ExtendArrayLifetime`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1224–1240, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
