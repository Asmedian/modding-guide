---
{"title":"Array_Shuffle","summary":"Shuffles items in place using VR:R and swaps. String pointers are swapped without copying text. Verify RNG synchronization for multiplayer logic.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Shuffles items in place using VR:R and swaps. String pointers are swapped without copying text. Verify RNG synchronization for multiplayer logic.

## Call contract {#signature}

```erm
!!FU(Array_Shuffle):P(list);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 934–955, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
