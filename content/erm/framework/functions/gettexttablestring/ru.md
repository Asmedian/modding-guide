---
{"title":"GetTextTableString","summary":"Читает ячейку bldgspec, help или znpc00 по rowIndex/colIndex. Несмотря на комментарий «get or set», ветки записи в снимке нет. Проверку индексов обеспечивает вызывающий код.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Читает ячейку bldgspec, help или znpc00 по rowIndex/colIndex. Несмотря на комментарий «get or set», ветки записи в снимке нет. Проверку индексов обеспечивает вызывающий код.

## Контракт вызова {#signature}

```erm
!!FU(GetTextTableString):P(txtFilename)/(rowIndex)/(colIndex)/(string);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `txtFilename` | вход |
| x2 | `rowIndex` | вход |
| x3 | `colIndex` | вход |
| x4 | `string` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Связанные функции {#calls}

[StrToLower](../strtolower/) · [Substr](../substr/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 3285–3320. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl)
