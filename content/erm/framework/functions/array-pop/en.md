---
{"title":"Array_Pop","summary":"Removes trailing elements; up to 15 outputs receive values from last to first. With no outputs, removes one element. Missing values become 0 or empty strings.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Removes trailing elements; up to 15 outputs receive values from last to first. With no outputs, removes one element. Missing values become 0 or empty strings.

## Call contract {#signature}

```erm
!!FU(Array_Pop):P(list)/(firstItem);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `firstItem` | input |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 401–445, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int)
