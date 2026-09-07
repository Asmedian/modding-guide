---
{"title":"MergeIniWithDefault","summary":"Adds missing source keys to the target cache without replacing existing values. Persist separately with SaveIni.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Adds missing source keys to the target cache without replacing existing values. Persist separately with SaveIni.

## Call contract {#signature}

```erm
!!FU(MergeIniWithDefault):P(targetPathPtr)/(sourcePathPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `targetPathPtr` | input |
| x2 | `sourcePathPtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `MergeIniWithDefault`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1621–1629, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
