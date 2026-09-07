---
{"title":"NewIntArray","summary":"Creates an integer array: P?result, Psize/?result, or Psize/fill/?result. Storage may follow the output; the default is M_TRIGGER_LOCAL, extended to the caller context. Default fill is 0.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Creates an integer array: P?result, Psize/?result, or Psize/fill/?result. Storage may follow the output; the default is M_TRIGGER_LOCAL, extended to the caller context. Default fill is 0.

## Call contract {#signature}

```erm
!!FU(NewIntArray):P?(result:y);
!!FU(NewIntArray):P(size)/?(result:y);
!!FU(NewIntArray):P(size)/(fill)/?(result:y)/(storage);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `arg1` | output / mutable |
| x2 | `arg2` | output / mutable |
| x3 | `arg3` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ExtendArrayLifetime`.

## Related functions {#calls}

[Array_Fill](../array-fill/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 301–336, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
