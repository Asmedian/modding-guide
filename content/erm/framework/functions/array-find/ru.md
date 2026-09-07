---
{"title":"Array_Find","summary":"Вызывает callback(value,?found,listId,customArg) до первого TRUE. Возвращает индекс или -1; строковое value — ERM-строка. found и необязательный customArg по умолчанию 0.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Вызывает callback(value,?found,listId,customArg) до первого TRUE. Возвращает индекс или -1; строковое value — ERM-строка. found и необязательный customArg по умолчанию 0.

## Контракт вызова {#signature}

```erm
!!FU(Array_Find):P(list)/(callback)/(result)/(customArg);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `list` | вход |
| x2 | `callback` | вход |
| x3 | `result` | выход / изменяемый |
| x4 | `customArg` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1124–1165. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[FALSE](../../constants/universal/#const-false) · [M_INT](../../constants/erm-commands/#const-m-int) · [TRUE](../../constants/universal/#const-true)
