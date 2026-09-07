---
{"title":"H3Dlg_GetCurrentDlgId","summary":"Returns the top dialog identifier from its virtual table, comparable to DLG_, or NULL.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns the top dialog identifier from its virtual table, comparable to DLG_*, or NULL.

## Call contract {#signature}

```erm
!!FU(H3Dlg_GetCurrentDlgId):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2115–2125, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NULL](../../constants/universal/#const-null) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int) · [WND_MANAGER](../../constants/game-managers/#const-wnd-manager)
