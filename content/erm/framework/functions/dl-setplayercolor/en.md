---
{"title":"DL_SetPlayerColor","summary":"Changes a DL dialog frame color. playerId defaults to the interacting player; validates PLAYER_FIRST..PLAYER_LAST.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Changes a DL dialog frame color. playerId defaults to the interacting player; validates PLAYER_FIRST..PLAYER_LAST.

## Call contract {#signature}

```erm
!!FU(DL_SetPlayerColor):P(dlgId)/(playerId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |
| x2 | `playerId` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_FindById](../dl-findbyid/) · [H3Dlg_SendCmdToItem](../h3dlg-sendcmdtoitem/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2332–2356, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NULL](../../constants/universal/#const-null) · [PLAYER_FIRST](../../constants/players/#const-player-first) · [PLAYER_LAST](../../constants/players/#const-player-last) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
