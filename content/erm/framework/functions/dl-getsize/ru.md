---
{"title":"DL_GetSize","summary":"Возвращает ширину и высоту уже созданного DL-диалога; при отсутствии окна сообщает ошибку.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Возвращает ширину и высоту уже созданного DL-диалога; при отсутствии окна сообщает ошибку.

## Контракт вызова {#signature}

```erm
!!FU(DL_GetSize):P(dlgId)/(width)/(height);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `dlgId` | вход |
| x2 | `width` | выход / изменяемый |
| x3 | `height` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Связанные функции {#calls}

[DL_FindById](../dl-findbyid/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2256–2272. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
