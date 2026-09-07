---
{"title":"H3Dlg_GetCurrentDlg","summary":"Returns the topmost dialog address or NULL. This address is not its DLG_ identifier.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns the topmost dialog address or NULL. This address is not its DLG_* identifier.

## Call contract {#signature}

```erm
!!FU(H3Dlg_GetCurrentDlg):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2109–2114, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[UNC_INT](../../constants/un-c-data-types/#const-unc-int) · [WND_MANAGER](../../constants/game-managers/#const-wnd-manager)
