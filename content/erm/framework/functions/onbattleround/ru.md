---
{"title":"OnBattleRound","summary":"Обновляет battle_round из текущего контекста раунда.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Обновляет battle_round из текущего контекста раунда.

## Контракт вызова {#signature}

```erm
!?FU(OnBattleRound);
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^battle_round^](../../globals/#global-i-battle-round).

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 266–268. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
