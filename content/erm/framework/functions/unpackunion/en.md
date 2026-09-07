---
{"title":"UnpackUnion","summary":"PackUnion takes value/width pairs and a final ?result; UnpackUnion takes packedValue and ?value/width pairs. Fields start at the low bit, totaling at most 32. Checks for widths 0 and 32 differ from the stated 1..32 contract; use positive fields below 32 bits and validate the total.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

PackUnion takes value/width pairs and a final ?result; UnpackUnion takes packedValue and ?value/width pairs. Fields start at the low bit, totaling at most 32. Checks for widths 0 and 32 differ from the stated 1..32 contract; use positive fields below 32 bits and validate the total.

## Call contract {#signature}

```erm
!!FU(UnpackUnion):P(packedValue)/(firstFieldArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `packedValue` | input |
| x2 | `firstFieldArg` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1295–1333, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BITS_IN_INT32](../../constants/bit-sizes/#const-bits-in-int32)
