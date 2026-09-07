---
{"title":"H3Dlg_CenterAtMouse","summary":"Центрирует существующее окно у курсора. Для H3Dlg передайте адрес, для DL — ID. DL-обёртка не проверяет NULL после поиска: сначала создайте окно.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Центрирует существующее окно у курсора. Для H3Dlg передайте адрес, для DL — ID. DL-обёртка не проверяет NULL после поиска: сначала создайте окно.

## Контракт вызова {#signature}

```erm
!!FU(H3Dlg_CenterAtMouse):P(h3Dlg);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `h3Dlg` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2088–2102. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[CALLCONV_STDCALL](../../constants/calling-conventions/#const-callconv-stdcall) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
