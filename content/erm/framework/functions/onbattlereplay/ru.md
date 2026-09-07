---
{"title":"OnBattleReplay","summary":"Сбрасывает раунд и действующий стек, перечитывает параметры боя для переигровки.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Сбрасывает раунд и действующий стек, перечитывает параметры боя для переигровки.

## Контракт вызова {#signature}

```erm
!?FU(OnBattleReplay);
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^battle_round^](../../globals/#global-i-battle-round) · [i^battle_acting_stack^](../../globals/#global-i-battle-acting-stack) · [i^battle_acting_side^](../../globals/#global-i-battle-acting-side).

## Связанные функции {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2905–2913. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[BATTLE_LEFT](../../constants/battle/#const-battle-left) · [INT_MIN](../../constants/data-types/#const-int-min) · [NO_STACK](../../constants/battle/#const-no-stack)
