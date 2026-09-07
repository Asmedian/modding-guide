---
{"title":"BattleStack_Shoot","summary":"Forces attackerStackId to shoot defenderStackId, temporarily changing/restoring the attacker target-position field. Validate both stacks first.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Forces attackerStackId to shoot defenderStackId, temporarily changing/restoring the attacker target-position field. Validate both stacks first.

## Call contract {#signature}

```erm
!!FU(BattleStack_Shoot):P(attackerStackId)/(defenderStackId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `attackerStackId` | input |
| x2 | `defenderStackId` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2804–2816, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
