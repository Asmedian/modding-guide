---
{"title":"OnBeforeBattleUniversal","summary":"Обновляет battle_ и сбрасывает текущий/действующий стек. Возможен теоретический расчёт ИИ без менеджера боя.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Обновляет battle_* и сбрасывает текущий/действующий стек. Возможен теоретический расчёт ИИ без менеджера боя.

## Контракт вызова {#signature}

```erm
!?FU(OnBeforeBattleUniversal);
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^battle_round^](../../globals/#global-i-battle-round) · [i^battle_current_stack^](../../globals/#global-i-battle-current-stack) · [i^battle_current_side^](../../globals/#global-i-battle-current-side) · [i^battle_acting_stack^](../../globals/#global-i-battle-acting-stack) · [i^battle_acting_side^](../../globals/#global-i-battle-acting-side).

## Связанные функции {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 255–262. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[BATTLE_LEFT](../../constants/battle/#const-battle-left) · [INT_MIN](../../constants/data-types/#const-int-min) · [NO_STACK](../../constants/battle/#const-no-stack)
