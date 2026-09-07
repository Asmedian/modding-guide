---
{"title":"H3Dlg_UpdateItemRange","summary":"Updates dialog state before redraw. In this snapshot minItemId/maxItemId are unused: a virtual method is called with 0/200/200. Do not rely on range-limited updates.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Updates dialog state before redraw. In this snapshot minItemId/maxItemId are unused: a virtual method is called with 0/200/200. Do not rely on range-limited updates.

## Call contract {#signature}

```erm
!!FU(H3Dlg_UpdateItemRange):P(h3Dlg)/(minItemId)/(maxItemId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `h3Dlg` | input |
| x2 | `minItemId` | input |
| x3 | `maxItemId` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `requires-review`. The complete block in `lib/9999 era - stdlib.erm`, lines 2167–2183, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_VTABLE](../../constants/game-structures/#const-struct-h3dlg-vtable) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
