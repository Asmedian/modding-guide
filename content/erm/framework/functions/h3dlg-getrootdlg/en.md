---
{"title":"H3Dlg_GetRootDlg","summary":"Returns the root dialog address or NULL; usually the adventure map.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns the root dialog address or NULL; usually the adventure map.

## Call contract {#signature}

```erm
!!FU(H3Dlg_GetRootDlg):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2103–2108, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[UNC_INT](../../constants/un-c-data-types/#const-unc-int) · [WND_MANAGER](../../constants/game-managers/#const-wnd-manager)
