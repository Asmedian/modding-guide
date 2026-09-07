---
{"title":"StrPos","summary":"Finds the first needlePtr in haystackPtr from offset (default 0). Returns a zero-based offset or -1.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Finds the first needlePtr in haystackPtr from offset (default 0). Returns a zero-based offset or -1.

## Call contract {#signature}

```erm
!!FU(StrPos):P(haystackPtr)/(needlePtr)/(result)/(offset);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `haystackPtr` | input |
| x2 | `needlePtr` | input |
| x3 | `result` | output / mutable |
| x4 | `offset` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_StrPos`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1486–1497, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
