---
{"title":"PrepareMultiPicDialog","summary":"Prepares pictures for the next IF:N: no arguments clear them; accepts type/subtype pairs or one array ID containing pairs. Skips NO_PIC_TYPE and negative creature subtypes; up to 8 nonempty pairs. Does not show the dialog.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Prepares pictures for the next IF:N: no arguments clear them; accepts type/subtype pairs or one array ID containing pairs. Skips NO_PIC_TYPE and negative creature subtypes; up to 8 nonempty pairs. Does not show the dialog.

## Call contract {#signature}

```erm
!!FU(PrepareMultiPicDialog):P(firstArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `firstArg` | input |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2679–2755, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[MON_FIRST](../../constants/monsters/#const-mon-first) · [NO_PIC_TYPE](../../constants/h3-dialog-picture-types/#const-no-pic-type) · [PIC_TYPE_MONSTER](../../constants/h3-dialog-picture-types/#const-pic-type-monster)
