---
{"title":"SaveIni","summary":"Writes the INI cache to disk and creates parent directories. Loads the original file first if no cache exists.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Writes the INI cache to disk and creates parent directories. Loads the original file first if no cache exists.

## Call contract {#signature}

```erm
!!FU(SaveIni):P(filePathPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `SaveIni`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1613–1620, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
