---
{"title":"DL_AlignDlg","summary":"Выравнивает созданный DL-диалог по битовой маске TEXT_ALIGN_. CENTER/MIDDLE имеют приоритет над RIGHT/BOTTOM.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Выравнивает созданный DL-диалог по битовой маске TEXT_ALIGN_*. CENTER/MIDDLE имеют приоритет над RIGHT/BOTTOM.

## Контракт вызова {#signature}

```erm
!!FU(DL_AlignDlg):P(dlgId)/(alignment);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `dlgId` | вход |
| x2 | `alignment` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Связанные функции {#calls}

[DL_FindById](../dl-findbyid/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2290–2331. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ADDR_GAME_SCREEN_HEIGHT](../../constants/useful-addresses/#const-addr-game-screen-height) · [ADDR_GAME_SCREEN_WIDTH](../../constants/useful-addresses/#const-addr-game-screen-width) · [FALSE](../../constants/universal/#const-false) · [NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [STRUCT_H3DLG_X](../../constants/game-structures/#const-struct-h3dlg-x) · [STRUCT_H3DLG_Y](../../constants/game-structures/#const-struct-h3dlg-y) · [TEXT_ALIGN_BOTTOM](../../constants/h3-dialog-text-alignment/#const-text-align-bottom) · [TEXT_ALIGN_CENTER](../../constants/h3-dialog-text-alignment/#const-text-align-center) · [TEXT_ALIGN_MIDDLE](../../constants/h3-dialog-text-alignment/#const-text-align-middle) · [TEXT_ALIGN_RIGHT](../../constants/h3-dialog-text-alignment/#const-text-align-right) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int) · [UNC_INT16](../../constants/un-c-data-types/#const-unc-int16)
