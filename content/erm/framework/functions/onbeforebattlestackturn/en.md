---
{"title":"OnBeforeBattleStackTurn","summary":"Stores activeStack in battle_current_stack.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Stores activeStack in battle_current_stack.

## Call contract {#signature}

```erm
!?FU(OnBeforeBattleStackTurn);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `activeStack` | input |

## State and dependencies {#context}

Named globals: [i^battle_current_stack^](../../globals/#global-i-battle-current-stack) · [i^battle_current_side^](../../globals/#global-i-battle-current-side) · [i^battle_isActingSideUiUser^](../../globals/#global-i-battle-isactingsideuiuser).

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 269–274, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
