---
{"title":"Battle","summary":"18 named values: battle.","translationStatus":"reviewed"}
---

## Purpose {#meaning}

The **Battle** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `NO_STACK` {#const-no-stack} | `-1` |
| `BATTLE_STACK_FIRST` {#const-battle-stack-first} | `0` |
| `BATTLE_STACK_LAST` {#const-battle-stack-last} | `41` |
| `BATTLE_MAX_STACKS` {#const-battle-max-stacks} | `42` |
| `BATTLE_ATTACKER_STACK_FIRST` {#const-battle-attacker-stack-first} | `0` |
| `BATTLE_ATTACKER_STACK_LAST` {#const-battle-attacker-stack-last} | `20` |
| `BATTLE_DEFENDER_STACK_FIRST` {#const-battle-defender-stack-first} | `21` |
| `BATTLE_DEFENDER_STACK_LAST` {#const-battle-defender-stack-last} | `41` |
| `BATTLE_ATTACKER_BASE_STACK_FIRST` {#const-battle-attacker-base-stack-first} | `0` |
| `BATTLE_ATTACKER_BASE_STACK_LAST` {#const-battle-attacker-base-stack-last} | `6` |
| `BATTLE_DEFENDER_BASE_STACK_FIRST` {#const-battle-defender-base-stack-first} | `21` |
| `BATTLE_DEFENDER_BASE_STACK_LAST` {#const-battle-defender-base-stack-last} | `27` |
| `BATTLE_STACKS_PER_SIDE` {#const-battle-stacks-per-side} | `21` |
| `BATTLE_BASE_STACKS_PER_SIDE` {#const-battle-base-stacks-per-side} | `7` |
| `BATTLE_LEFT` {#const-battle-left} | `0` |
| `BATTLE_RIGHT` {#const-battle-right} | `1` |
| `FIRST_TACTICS_ROUND` {#const-first-tactics-round} | `-1000000000` |
| `FIRST_NON_TACTICS_ROUND` {#const-first-non-tactics-round} | `0` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[OnBeforeBattleUniversal](../../functions/onbeforebattleuniversal/) · [OnBattleStackObtainsTurn](../../functions/onbattlestackobtainsturn/) · [BattleStack_MakeActive](../../functions/battlestack-makeactive/) · [OnBattleReplay](../../functions/onbattlereplay/)
