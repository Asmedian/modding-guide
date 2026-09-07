---
{"title":"AdvMap_SetHint","summary":"Немедленно обновляет подсказку карты приключений; выполняется только если корневое окно DLG_ADVMAP. Текст чата может скрыться до следующего ввода.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Немедленно обновляет подсказку карты приключений; выполняется только если корневое окно DLG_ADVMAP. Текст чата может скрыться до следующего ввода.

## Контракт вызова {#signature}

```erm
!!FU(AdvMap_SetHint):P(newHint);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `newHint` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Связанные функции {#calls}

[H3Dlg_DrawItemOnScreen](../h3dlg-drawitemonscreen/) · [H3Dlg_GetRootDlg](../h3dlg-getrootdlg/) · [H3Dlg_SendCmdToItem](../h3dlg-sendcmdtoitem/) · [H3Dlg_UpdateItemRange](../h3dlg-updateitemrange/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2363–2376. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[DLG_ADVMAP](../../constants/dialogs/#const-dlg-advmap) · [DLG_CMD_SET_TEXT](../../constants/h3-dialog-commands/#const-dlg-cmd-set-text) · [ITEM_ADVMAP_HINT](../../constants/dialog-item-ids/#const-item-advmap-hint) · [NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_VTABLE](../../constants/game-structures/#const-struct-h3dlg-vtable) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
