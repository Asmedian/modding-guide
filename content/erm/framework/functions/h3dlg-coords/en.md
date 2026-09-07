---
{"title":"H3Dlg_Coords","summary":"Coordinates x/y support GET, SET and ADD. Position is clamped against screen size and shadow. H3Dlg_Coords takes an H3Dlg address; DL_Coords takes the ID of a dialog already created with DL:N.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Coordinates x/y support GET, SET and ADD. Position is clamped against screen size and shadow. H3Dlg_Coords takes an H3Dlg address; DL_Coords takes the ID of a dialog already created with DL:N.

## Call contract {#signature}

```erm
!!FU(H3Dlg_Coords):P(h3Dlg)/(x)/(y);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `h3Dlg` | input |
| x2 | `x` | output / mutable |
| x3 | `y` | output / mutable |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!if&(h3Dlg)=(NULL);
  !!SN:F^`.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2038–2087, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ADDR_GAME_SCREEN_HEIGHT](../../constants/useful-addresses/#const-addr-game-screen-height) · [ADDR_GAME_SCREEN_WIDTH](../../constants/useful-addresses/#const-addr-game-screen-width) · [ARG_SYNTAX_ADD](../../constants/erm-commands/#const-arg-syntax-add) · [ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get) · [DLG_BOX_SHADOW_WIDTH](../../constants/dialogs/#const-dlg-box-shadow-width) · [NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [STRUCT_H3DLG_X](../../constants/game-structures/#const-struct-h3dlg-x) · [STRUCT_H3DLG_Y](../../constants/game-structures/#const-struct-h3dlg-y) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int) · [UNC_INT16](../../constants/un-c-data-types/#const-unc-int16)
