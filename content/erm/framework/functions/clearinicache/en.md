---
{"title":"ClearIniCache","summary":"Forgets one INI cache. The next read/write reloads the file from disk. Does not delete the file.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Forgets one INI cache. The next read/write reloads the file from disk. Does not delete the file.

## Call contract {#signature}

```erm
!!FU(ClearIniCache):P(filePathPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ClearIniCache`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1589–1596, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
