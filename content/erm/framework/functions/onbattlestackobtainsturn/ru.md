---
{"title":"OnBattleStackObtainsTurn","summary":"Переводит side/index в глобальный ID стека, учитывает гипноз при определении текущей стороны.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Переводит side/index в глобальный ID стека, учитывает гипноз при определении текущей стороны.

## Контракт вызова {#signature}

```erm
!?FU(OnBattleStackObtainsTurn);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `stackSide` | вход |
| x2 | `stackInd` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [i^battle_current_stack^](../../globals/#global-i-battle-current-stack) · [i^battle_current_side^](../../globals/#global-i-battle-current-side) · [i^battle_isActingSideUiUser^](../../globals/#global-i-battle-isactingsideuiuser).

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 275–284. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[BATTLE_STACKS_PER_SIDE](../../constants/battle/#const-battle-stacks-per-side) · [SPELL_HYPNOTIZE](../../constants/spells/#const-spell-hypnotize)
