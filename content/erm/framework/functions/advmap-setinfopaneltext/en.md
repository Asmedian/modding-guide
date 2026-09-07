---
{"title":"AdvMap_SetInfoPanelText","summary":"Shows nonempty text in the map information panel for timeToDisplay milliseconds (default 5000). Uses s^temp_text^ and changes v1.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Shows nonempty text in the map information panel for timeToDisplay milliseconds (default 5000). Uses s^temp_text^ and changes v1.

## Call contract {#signature}

```erm
!!FU(AdvMap_SetInfoPanelText):P(text)/(timeToDisplay);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `text` | input |
| x2 | `timeToDisplay` | output / mutable |

## State and dependencies {#context}

Named globals: [s^temp_text^](../../globals/#global-s-temp-text).

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2377–2403, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ADV_MANAGER](../../constants/game-managers/#const-adv-manager) · [CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall)
