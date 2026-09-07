---
{"title":"CompareStrings_Bridge_INTERNAL","summary":"String-comparator bridge: converts addresses to ERM strings and invokes the callback with state and an output. A null address becomes an empty string.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

String-comparator bridge: converts addresses to ERM strings and invokes the callback with state and an output. A null address becomes an empty string.

## Call contract {#signature}

```erm
!!FU(CompareStrings_Bridge_INTERNAL):P(str1Addr)/(str2Addr)/(bridgeState)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `str1Addr` | input |
| x2 | `str2Addr` | input |
| x3 | `bridgeState` | input |
| x4 | `result` | output / mutable |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp).

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 813–834, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
