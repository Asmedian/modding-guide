---
{"title":"Hash32","summary":"Hashes dataLen bytes at data (or a string) into 32 bits. The caller must supply accessible memory and a valid length; no cryptographic properties are promised.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Hashes dataLen bytes at data (or a string) into 32 bits. The caller must supply accessible memory and a valid length; no cryptographic properties are promised.

## Call contract {#signature}

```erm
!!FU(Hash32):P(data)/(dataLen)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `data` | input |
| x2 | `dataLen` | input |
| x3 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Hash32`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1350–1360, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
