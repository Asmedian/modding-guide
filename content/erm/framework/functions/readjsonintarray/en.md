---
{"title":"ReadJsonIntArray","summary":"Reads JSON keys prefix.0, prefix.1… until the first missing key. Passing the second argument with ? creates a local array; otherwise the existing array is cleared and filled. ReadJsonIntArray converts strings to integers.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Reads JSON keys prefix.0, prefix.1… until the first missing key. Passing the second argument with ? creates a local array; otherwise the existing array is cleared and filled. ReadJsonIntArray converts strings to integers.

## Call contract {#signature}

```erm
!!FU(ReadJsonIntArray):P(jsonKeyPtr)/(intArray);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `jsonKeyPtr` | input |
| x2 | `intArray` | output / mutable |

## State and dependencies {#context}

Named globals: —.
  !!SN:T^`.

Export calls: `ExtendArrayLifetime`.

## Related functions {#calls}

[Array_Push](../array-push/) · [NewIntArray](../newintarray/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1778–1806, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get)
