---
{"title":"DL_CenterAtMouse","summary":"Centers an existing dialog at the mouse. H3Dlg takes an address; DL takes an ID. The DL wrapper does not check NULL after lookup: create the dialog first.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Centers an existing dialog at the mouse. H3Dlg takes an address; DL takes an ID. The DL wrapper does not check NULL after lookup: create the dialog first.

## Call contract {#signature}

```erm
!!FU(DL_CenterAtMouse):P(dlgId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_FindById](../dl-findbyid/) · [H3Dlg_CenterAtMouse](../h3dlg-centeratmouse/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2215–2222, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[UNC_INT](../../constants/un-c-data-types/#const-unc-int)
