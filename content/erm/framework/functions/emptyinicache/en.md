---
{"title":"EmptyIniCache","summary":"Replaces the INI cache with empty contents for recreation. Call SaveIni to write it to disk.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Replaces the INI cache with empty contents for recreation. Call SaveIni to write it to disk.

## Call contract {#signature}

```erm
!!FU(EmptyIniCache):P(filePathPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `EmptyIniCache`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1597–1604, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
