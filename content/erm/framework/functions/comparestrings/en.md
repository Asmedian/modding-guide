---
{"title":"CompareStrings","summary":"Compares two ERM strings with language operators and returns -1, 0, or 1.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Compares two ERM strings with language operators and returns -1, 0, or 1.

## Call contract {#signature}

```erm
!!FU(CompareStrings):P(str1Ptr)/(str2Ptr)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `str1Ptr` | input |
| x2 | `str2Ptr` | input |
| x3 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1431–1442, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
