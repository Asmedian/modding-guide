---
{"title":"OnBattleReplay","summary":"Resets round/acting stack and refreshes combat parameters for replay.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Resets round/acting stack and refreshes combat parameters for replay.

## Call contract {#signature}

```erm
!?FU(OnBattleReplay);
```

## State and dependencies {#context}

Named globals: [i^battle_round^](../../globals/#global-i-battle-round) · [i^battle_acting_stack^](../../globals/#global-i-battle-acting-stack) · [i^battle_acting_side^](../../globals/#global-i-battle-acting-side).

## Related functions {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 2905–2913, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BATTLE_LEFT](../../constants/battle/#const-battle-left) · [INT_MIN](../../constants/data-types/#const-int-min) · [NO_STACK](../../constants/battle/#const-no-stack)
