---
{"title":"Array_Find","summary":"Calls callback(value,?found,listId,customArg) until the first TRUE. Returns an index or -1; string values are ERM strings. found and optional customArg default to 0.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Calls callback(value,?found,listId,customArg) until the first TRUE. Returns an index or -1; string values are ERM strings. found and optional customArg default to 0.

## Call contract {#signature}

```erm
!!FU(Array_Find):P(list)/(callback)/(result)/(customArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `callback` | input |
| x3 | `result` | output / mutable |
| x4 | `customArg` | input |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1124–1165, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [M_INT](../../constants/erm-commands/#const-m-int) · [TRUE](../../constants/universal/#const-true)
