---
{"title":"OnSetupBattlefield","summary":"Refreshes battle_ during battlefield setup.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Refreshes battle_* during battlefield setup.

## Call contract {#signature}

```erm
!?FU(OnSetupBattlefield);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 263–265, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
