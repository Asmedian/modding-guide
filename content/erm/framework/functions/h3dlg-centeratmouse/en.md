---
{"title":"H3Dlg_CenterAtMouse","summary":"Centers an existing dialog at the mouse. H3Dlg takes an address; DL takes an ID. The DL wrapper does not check NULL after lookup: create the dialog first.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Centers an existing dialog at the mouse. H3Dlg takes an address; DL takes an ID. The DL wrapper does not check NULL after lookup: create the dialog first.

## Call contract {#signature}

```erm
!!FU(H3Dlg_CenterAtMouse):P(h3Dlg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `h3Dlg` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2088–2102, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_STDCALL](../../constants/calling-conventions/#const-callconv-stdcall) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
