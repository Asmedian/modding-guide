---
{"title":"H3Dlg_ShowPopup","summary":"Shows an H3 dialog as an RMB popup while suspending/resuming animation. Requires a valid H3Dlg address.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Shows an H3 dialog as an RMB popup while suspending/resuming animation. Requires a valid H3Dlg address.

## Call contract {#signature}

```erm
!!FU(H3Dlg_ShowPopup):P(h3Dlg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `h3Dlg` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[H3Dlg_ResumeAnimation](../h3dlg-resumeanimation/) · [H3Dlg_StopAnimation](../h3dlg-stopanimation/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2030–2037, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall)
