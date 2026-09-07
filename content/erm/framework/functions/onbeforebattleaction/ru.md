---
{"title":"OnBeforeBattleAction","summary":"Читает BG:N/Q в battle_acting_stack/side и обновляет флаги видимого/быстрого боя.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Читает BG:N/Q в battle_acting_stack/side и обновляет флаги видимого/быстрого боя.

## Контракт вызова {#signature}

```erm
!?FU(OnBeforeBattleAction);
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^battle_acting_stack^](../../globals/#global-i-battle-acting-stack) · [i^battle_acting_side^](../../globals/#global-i-battle-acting-side) · [i^battle_aiOnly^](../../globals/#global-i-battle-aionly) · [i^battle_isQuick^](../../globals/#global-i-battle-isquick) · [i^battle_isVisible^](../../globals/#global-i-battle-isvisible) · [i^battle_isActingSideUiUser^](../../globals/#global-i-battle-isactingsideuiuser).

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 285–291. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[TRUE](../../constants/universal/#const-true)
