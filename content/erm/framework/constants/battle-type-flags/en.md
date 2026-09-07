---
{"title":"Battle Type Flags","summary":"6 named values: battle type flags.","translationStatus":"reviewed"}
---

## Purpose {#meaning}

The **Battle Type Flags** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `BATTLE_TYPE_FLAG_LEFT_IS_HUMAN` {#const-battle-type-flag-left-is-human} | `1` |
| `BATTLE_TYPE_FLAG_RIGHT_IS_HUMAN` {#const-battle-type-flag-right-is-human} | `2` |
| `BATTLE_TYPE_FLAG_LEFT_HAS_OWNER` {#const-battle-type-flag-left-has-owner} | `4` |
| `BATTLE_TYPE_FLAG_RIGHT_HAS_OWNER` {#const-battle-type-flag-right-has-owner} | `8` |
| `BATTLE_TYPE_FLAG_LEFT_HAS_HERO` {#const-battle-type-flag-left-has-hero} | `16` |
| `BATTLE_TYPE_FLAG_RIGHT_HAS_HERO` {#const-battle-type-flag-right-has-hero} | `32` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[UpdateBattleVars](../../functions/updatebattlevars/)
