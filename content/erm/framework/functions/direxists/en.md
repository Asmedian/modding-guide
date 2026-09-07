---
{"title":"DirExists","summary":"Checks path attributes and returns TRUE only for the requested kind: FileExists for files, DirExists for directories. Access failure also returns FALSE.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Checks path attributes and returns TRUE only for the requested kind: FileExists for files, DirExists for directories. Access failure also returns FALSE.

## Call contract {#signature}

```erm
!!FU(DirExists):P(dirPathPtr)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dirPathPtr` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `GetFileAttributesA`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1566–1577, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [FILE_ATTRIBUTE_DIRECTORY](../../constants/win32-api/#const-file-attribute-directory) · [INVALID_FILE_ATTRIBUTES](../../constants/win32-api/#const-invalid-file-attributes) · [TRUE](../../constants/universal/#const-true)
