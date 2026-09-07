---
{"title":"H3Dlg_Coords","summary":"Координаты x/y поддерживают GET, SET и ADD. Позиция ограничивается размером экрана и тенью окна. H3Dlg_Coords принимает адрес H3Dlg; DL_Coords — ID уже созданного через DL:N диалога.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Координаты x/y поддерживают GET, SET и ADD. Позиция ограничивается размером экрана и тенью окна. H3Dlg_Coords принимает адрес H3Dlg; DL_Coords — ID уже созданного через DL:N диалога.

## Контракт вызова {#signature}

```erm
!!FU(H3Dlg_Coords):P(h3Dlg)/(x)/(y);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `h3Dlg` | вход |
| x2 | `x` | выход / изменяемый |
| x3 | `y` | выход / изменяемый |

## Состояние и зависимости {#context}

Глобальные переменные: —.
  !!FU:E;
!!en;

!!if&(h3Dlg)=(NULL);
  !!SN:F^`.

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2038–2087. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ADDR_GAME_SCREEN_HEIGHT](../../constants/useful-addresses/#const-addr-game-screen-height) · [ADDR_GAME_SCREEN_WIDTH](../../constants/useful-addresses/#const-addr-game-screen-width) · [ARG_SYNTAX_ADD](../../constants/erm-commands/#const-arg-syntax-add) · [ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get) · [DLG_BOX_SHADOW_WIDTH](../../constants/dialogs/#const-dlg-box-shadow-width) · [NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [STRUCT_H3DLG_X](../../constants/game-structures/#const-struct-h3dlg-x) · [STRUCT_H3DLG_Y](../../constants/game-structures/#const-struct-h3dlg-y) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int) · [UNC_INT16](../../constants/un-c-data-types/#const-unc-int16)
