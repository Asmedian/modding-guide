---
{"title":"OnBattleStackObtainsTurn","summary":"Converts side/index to a global stack ID and accounts for hypnosis when determining the current side.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Converts side/index to a global stack ID and accounts for hypnosis when determining the current side.

## Call contract {#signature}

```erm
!?FU(OnBattleStackObtainsTurn);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `stackSide` | input |
| x2 | `stackInd` | input |

## State and dependencies {#context}

Named globals: [i^battle_current_stack^](../../globals/#global-i-battle-current-stack) · [i^battle_current_side^](../../globals/#global-i-battle-current-side) · [i^battle_isActingSideUiUser^](../../globals/#global-i-battle-isactingsideuiuser).

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 275–284, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BATTLE_STACKS_PER_SIDE](../../constants/battle/#const-battle-stacks-per-side) · [SPELL_HYPNOTIZE](../../constants/spells/#const-spell-hypnotize)
