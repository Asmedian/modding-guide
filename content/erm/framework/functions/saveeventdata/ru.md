---
{"title":"SaveEventData","summary":"Сохраняет переданные целые аргументы в стеке события. RestoreEventData должен получить такое же число выходных аргументов в том же порядке. Вызов без аргументов выходит до RestoreErmTracking.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Сохраняет переданные целые аргументы в стеке события. RestoreEventData должен получить такое же число выходных аргументов в том же порядке. Вызов без аргументов выходит до RestoreErmTracking.

## Контракт вызова {#signature}

```erm
!!FU(SaveEventData):P(firstArg);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `firstArg` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [i^savedEventData^](../../globals/#global-i-savedeventdata) · [i^savedEventDataPos^](../../globals/#global-i-savedeventdatapos).

Вызовы экспорта: `DisableErmTracking`, `RestoreErmTracking`.

## Версия и статус {#provenance}

Статус: `internal`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 16–46. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
