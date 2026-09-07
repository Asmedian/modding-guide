---
{"title":"Array_Copy","summary":"Replaces dstArray with srcArray contents and resizes it. Both arrays must exist and share an element type.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Replaces dstArray with srcArray contents and resizes it. Both arrays must exist and share an element type.

## Call contract {#signature}

```erm
!!FU(Array_Copy):P(srcArray)/(dstArray);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `srcArray` | input |
| x2 | `dstArray` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 587–618, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int)
