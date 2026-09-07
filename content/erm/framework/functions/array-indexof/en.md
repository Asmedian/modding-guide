---
{"title":"Array_IndexOf","summary":"Returns the first matching index or -1. Integers compare exactly; strings optionally use caseInsensitive.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns the first matching index or -1. Integers compare exactly; strings optionally use caseInsensitive.

## Call contract {#signature}

```erm
!!FU(Array_IndexOf):P(list)/(value)/(result)/(caseInsensitive);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `value` | input |
| x3 | `result` | output / mutable |
| x4 | `caseInsensitive` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1085–1123, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [SIZEOF_PTR](../../constants/data-types/#const-sizeof-ptr) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
