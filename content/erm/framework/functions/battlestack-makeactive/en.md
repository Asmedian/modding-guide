---
{"title":"BattleStack_MakeActive","summary":"Passes control to stack 0..41 and runs regeneration if needed. An in-range index alone does not guarantee a live stack exists.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Passes control to stack 0..41 and runs regeneration if needed. An in-range index alone does not guarantee a live stack exists.

## Call contract {#signature}

```erm
!!FU(BattleStack_MakeActive):P(stackId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `stackId` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2817–2836, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BATTLE_MAX_STACKS](../../constants/battle/#const-battle-max-stacks) · [BATTLE_STACKS_PER_SIDE](../../constants/battle/#const-battle-stacks-per-side) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [COMBAT_MANAGER](../../constants/game-managers/#const-combat-manager) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
