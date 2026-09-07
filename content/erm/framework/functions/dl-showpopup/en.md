---
{"title":"DL_ShowPopup","summary":"Shows a DL dialog by ID as an RMB popup, then destroys it. Call DL:N again before another display.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Shows a DL dialog by ID as an RMB popup, then destroys it. Call DL:N again before another display.

## Call contract {#signature}

```erm
!!FU(DL_ShowPopup):P(dlgId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_Destroy](../dl-destroy/) · [DL_FindById](../dl-findbyid/) · [H3Dlg_ShowPopup](../h3dlg-showpopup/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2198–2214, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NULL](../../constants/universal/#const-null) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
