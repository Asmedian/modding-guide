---
{"title":"Маски типов боя","summary":"6 именованных значений: маски типов боя.","translationStatus":"reviewed"}
---

## Назначение {#meaning}

Группа **Маски типов боя** из поставляемого Framework. Имена и значения ниже соответствуют определениям `!#DC` в предоставленных файлах. Константа подставляется в ERM как `(NAME)`; она не выделяет переменную.

## Значения {#values}

| Константа | Значение |
| --- | --- |
| `BATTLE_TYPE_FLAG_LEFT_IS_HUMAN` {#const-battle-type-flag-left-is-human} | `1` |
| `BATTLE_TYPE_FLAG_RIGHT_IS_HUMAN` {#const-battle-type-flag-right-is-human} | `2` |
| `BATTLE_TYPE_FLAG_LEFT_HAS_OWNER` {#const-battle-type-flag-left-has-owner} | `4` |
| `BATTLE_TYPE_FLAG_RIGHT_HAS_OWNER` {#const-battle-type-flag-right-has-owner} | `8` |
| `BATTLE_TYPE_FLAG_LEFT_HAS_HERO` {#const-battle-type-flag-left-has-hero} | `16` |
| `BATTLE_TYPE_FLAG_RIGHT_HAS_HERO` {#const-battle-type-flag-right-has-hero} | `32` |

## Все группы {#related}

[Каталог констант](../) · [Переменные](../../../variables/)

## Использование в Framework {#used-by}

[UpdateBattleVars](../../functions/updatebattlevars/)
