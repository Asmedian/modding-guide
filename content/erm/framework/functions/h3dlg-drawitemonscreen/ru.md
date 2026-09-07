---
{"title":"H3Dlg_DrawItemOnScreen","summary":"Выводит на экран элемент по itemId или весь диалог при ALL_ITEMS. Объект H3Dlg должен существовать.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Выводит на экран элемент по itemId или весь диалог при ALL_ITEMS. Объект H3Dlg должен существовать.

## Контракт вызова {#signature}

```erm
!!FU(H3Dlg_DrawItemOnScreen):P(h3Dlg)/(itemId);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `h3Dlg` | вход |
| x2 | `itemId` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2152–2166. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [NULL](../../constants/universal/#const-null)
