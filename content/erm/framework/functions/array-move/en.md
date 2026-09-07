---
{"title":"Array_Move","summary":"Moves length elements from offset to destInd within an array without resizing; handles overlap and clips at the end. This snapshot declares destInd with !#VR instead of !#VA: verify the library correction before use.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Moves length elements from offset to destInd within an array without resizing; handles overlap and clips at the end. This snapshot declares destInd with !#VR instead of !#VA: verify the library correction before use.

## Call contract {#signature}

```erm
!!FU(Array_Move):P(list)/(offset)/(length)/(destInd);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `offset` | input |
| x3 | `length` | input |
| x4 | `destInd` | input |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp).
  !!FU:E;
!!en;

!!FU|(offset)>=(listSize)/(destInd)>=(listSize)/(offset)=(destInd)/(length)=0:E;

!!if&(offset)<0;
  !!SN:F^`, `s^temp^`.

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `requires-review`. The complete block in `lib/9999 era - stdlib.erm`, lines 446–517, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int)
