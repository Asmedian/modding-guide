---
{"title":"DL_Coords","summary":"Coordinates x/y support GET, SET and ADD. Position is clamped against screen size and shadow. H3Dlg_Coords takes an H3Dlg address; DL_Coords takes the ID of a dialog already created with DL:N.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Coordinates x/y support GET, SET and ADD. Position is clamped against screen size and shadow. H3Dlg_Coords takes an H3Dlg address; DL_Coords takes the ID of a dialog already created with DL:N.

## Call contract {#signature}

```erm
!!FU(DL_Coords):P(dlgId)/(x)/(y);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |
| x2 | `x` | output / mutable |
| x3 | `y` | output / mutable |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!if&(dlgObj)=(NULL);
  !!SN:F^`.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_FindById](../dl-findbyid/) · [H3Dlg_Coords](../h3dlg-coords/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2223–2255, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ARG_SYNTAX_ADD](../../constants/erm-commands/#const-arg-syntax-add) · [ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get) · [NULL](../../constants/universal/#const-null) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
