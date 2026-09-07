---
{"title":"Substr","summary":"Returns a substring: start is zero-based or end-relative when negative; count is a length, or a trailing exclusion when negative.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns a substring: start is zero-based or end-relative when negative; count is a length, or a trailing exclusion when negative.

## Call contract {#signature}

```erm
!!FU(Substr):P(strPtr)/(start)/(count)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `strPtr` | input |
| x2 | `start` | input |
| x3 | `count` | input |
| x4 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_Substr`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1473–1485, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
