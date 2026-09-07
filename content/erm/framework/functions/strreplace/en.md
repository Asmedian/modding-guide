---
{"title":"StrReplace","summary":"Replaces all patternPtr occurrences in sourcePtr with replacementPtr and returns a string. Call only inside a trigger.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Replaces all patternPtr occurrences in sourcePtr with replacementPtr and returns a string. Call only inside a trigger.

## Call contract {#signature}

```erm
!!FU(StrReplace):P(sourcePtr)/(patternPtr)/(replacementPtr)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `sourcePtr` | input |
| x2 | `patternPtr` | input |
| x3 | `replacementPtr` | input |
| x4 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_StrReplace`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1498–1510, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
