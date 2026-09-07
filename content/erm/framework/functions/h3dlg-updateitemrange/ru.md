---
{"title":"H3Dlg_UpdateItemRange","summary":"Обновляет внутреннее состояние диалога перед перерисовкой. В снимке minItemId/maxItemId не используются: вызывается виртуальный метод с 0/200/200. Не рассчитывайте на обновление только заданного диапазона.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Обновляет внутреннее состояние диалога перед перерисовкой. В снимке minItemId/maxItemId не используются: вызывается виртуальный метод с 0/200/200. Не рассчитывайте на обновление только заданного диапазона.

## Контракт вызова {#signature}

```erm
!!FU(H3Dlg_UpdateItemRange):P(h3Dlg)/(minItemId)/(maxItemId);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `h3Dlg` | вход |
| x2 | `minItemId` | вход |
| x3 | `maxItemId` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `requires-review`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2167–2183. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_VTABLE](../../constants/game-structures/#const-struct-h3dlg-vtable) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
