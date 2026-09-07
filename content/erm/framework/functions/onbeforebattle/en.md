---
{"title":"OnBeforeBattle","summary":"Resets battle_round to INT_MIN before actual combat.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Resets battle_round to INT_MIN before actual combat.

## Call contract {#signature}

```erm
!?FU(OnBeforeBattle);
```

## State and dependencies {#context}

Named globals: [i^battle_round^](../../globals/#global-i-battle-round).

## Related functions {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 251–254, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[INT_MIN](../../constants/data-types/#const-int-min)
