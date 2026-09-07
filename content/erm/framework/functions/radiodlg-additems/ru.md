---
{"title":"RadioDlg_AddItems","summary":"Добавляет до 5 троек caption/value/tag. Неполная последняя тройка игнорируется; автоматического выбора нет.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Добавляет до 5 троек caption/value/tag. Неполная последняя тройка игнорируется; автоматического выбора нет.

## Контракт вызова {#signature}

```erm
!!FU(RadioDlg_AddItems):P(firstItemCaptionPtr)/(firstItemValue)/(firstItemTagPtr);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `firstItemCaptionPtr` | вход |
| x2 | `firstItemValue` | вход |
| x3 | `firstItemTagPtr` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

## Связанные функции {#calls}

[RadioDlg_AddItem](../radiodlg-additem/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2561–2577. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
