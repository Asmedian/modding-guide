---
{"title":"DeleteFile","summary":"Deletes a file using DeleteFileA; TRUE means deletion succeeded. Does not delete directory trees.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Deletes a file using DeleteFileA; TRUE means deletion succeeded. Does not delete directory trees.

## Call contract {#signature}

```erm
!!FU(DeleteFile):P(filePathPtr)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `DeleteFileA`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1578–1588, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [TRUE](../../constants/universal/#const-true)
