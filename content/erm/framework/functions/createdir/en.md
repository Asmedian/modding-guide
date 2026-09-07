---
{"title":"CreateDir","summary":"Calls CreateDirectoryA for one directory without returning its result. Does not guarantee creation of missing parent directories.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Calls CreateDirectoryA for one directory without returning its result. Does not guarantee creation of missing parent directories.

## Call contract {#signature}

```erm
!!FU(CreateDir):P(dirPathPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dirPathPtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `CreateDirectoryA`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1605–1612, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
