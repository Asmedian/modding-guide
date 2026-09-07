---
{"title":"OnBeforeBattleStackTurn","summary":"Записывает activeStack в battle_current_stack.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Записывает activeStack в battle_current_stack.

## Контракт вызова {#signature}

```erm
!?FU(OnBeforeBattleStackTurn);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `activeStack` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [i^battle_current_stack^](../../globals/#global-i-battle-current-stack) · [i^battle_current_side^](../../globals/#global-i-battle-current-side) · [i^battle_isActingSideUiUser^](../../globals/#global-i-battle-isactingsideuiuser).

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 269–274. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
