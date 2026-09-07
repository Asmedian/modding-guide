---
{"title":"OnBeforeBattleAction","summary":"Reads BG:N/Q into battle_acting_stack/side and updates visible/quick combat flags.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Reads BG:N/Q into battle_acting_stack/side and updates visible/quick combat flags.

## Call contract {#signature}

```erm
!?FU(OnBeforeBattleAction);
```

## State and dependencies {#context}

Named globals: [i^battle_acting_stack^](../../globals/#global-i-battle-acting-stack) · [i^battle_acting_side^](../../globals/#global-i-battle-acting-side) · [i^battle_aiOnly^](../../globals/#global-i-battle-aionly) · [i^battle_isQuick^](../../globals/#global-i-battle-isquick) · [i^battle_isVisible^](../../globals/#global-i-battle-isvisible) · [i^battle_isActingSideUiUser^](../../globals/#global-i-battle-isactingsideuiuser).

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 285–291, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[TRUE](../../constants/universal/#const-true)
