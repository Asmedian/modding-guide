---
{"title":"H3Dlg_SendCmdToItem","summary":"Отправляет itemId команду DLG_CMD_; cmdType по умолчанию DLG_CMD_TYPE_DEFAULT. Для SET_TEXT/SET_DEF/SET_PCX param трактуется как строка; остальные команды получают число.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Отправляет itemId команду DLG_CMD_*; cmdType по умолчанию DLG_CMD_TYPE_DEFAULT. Для SET_TEXT/SET_DEF/SET_PCX param трактуется как строка; остальные команды получают число.

## Контракт вызова {#signature}

```erm
!!FU(H3Dlg_SendCmdToItem):P(h3Dlg)/(itemId)/(cmdSubtype)/(param)/(cmdType);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `h3Dlg` | вход |
| x2 | `itemId` | вход |
| x3 | `cmdSubtype` | вход |
| x4 | `param` | вход |
| x5 | `cmdType` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2126–2151. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [DLG_CMD_SET_DEF](../../constants/h3-dialog-commands/#const-dlg-cmd-set-def) · [DLG_CMD_SET_PCX](../../constants/h3-dialog-commands/#const-dlg-cmd-set-pcx) · [DLG_CMD_SET_TEXT](../../constants/h3-dialog-commands/#const-dlg-cmd-set-text) · [DLG_CMD_TYPE_DEFAULT](../../constants/h3-dialog-commands/#const-dlg-cmd-type-default) · [NULL](../../constants/universal/#const-null)
