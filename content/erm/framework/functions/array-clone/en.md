---
{"title":"Array_Clone","summary":"Creates an array copy owned by the caller trigger and returns its ID. Strings are copied as values.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Creates an array copy owned by the caller trigger and returns its ID. Strings are copied as values.

## Call contract {#signature}

```erm
!!FU(Array_Clone):P(srcArray)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `srcArray` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ExtendArrayLifetime`.

## Related functions {#calls}

[Array_Copy](../array-copy/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 619–630, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
