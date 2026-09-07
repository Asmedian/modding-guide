---
{"title":"H3Quests_RefreshData","summary":"Refreshes quests after creature/name replacements. For defeat-monster quests, checks the actual type at coordinates; forceRefreshText rebuilds all quest text. Uses internal game structures.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Refreshes quests after creature/name replacements. For defeat-monster quests, checks the actual type at coordinates; forceRefreshText rebuilds all quest text. Uses internal game structures.

## Call contract {#signature}

```erm
!!FU(H3Quests_RefreshData):P(forceRefreshText);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `forceRefreshText` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3321–3370, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [GAME_MANAGER](../../constants/game-managers/#const-game-manager) · [NO_MON](../../constants/monsters/#const-no-mon) · [OBJ_MONSTER](../../constants/object-types/#const-obj-monster) · [QUEST_TYPE_DEFEAT_MONSTER](../../constants/quest-types/#const-quest-type-defeat-monster) · [TRUE](../../constants/universal/#const-true)
