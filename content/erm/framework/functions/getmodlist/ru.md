---
{"title":"GetModList","summary":"Возвращает локальный массив активных модов из VFS. toLower и reverse по умолчанию FALSE. При нулевом числе модов выход не инициализируется; заранее задайте NULL и проверяйте результат.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Возвращает локальный массив активных модов из VFS. toLower и reverse по умолчанию FALSE. При нулевом числе модов выход не инициализируется; заранее задайте NULL и проверяйте результат.

## Контракт вызова {#signature}

```erm
!!FU(GetModList):P(arrayId)/(toLower)/(reverse);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `arrayId` | выход / изменяемый |
| x2 | `toLower` | выход / изменяемый |
| x3 | `reverse` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ExtendArrayLifetime`, `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Связанные функции {#calls}

[Array_Revert](../array-revert/) · [NewStrArray](../newstrarray/) · [StrToLower](../strtolower/) · [Substr](../substr/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1932–1986. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[CALLCONV_STDCALL](../../constants/calling-conventions/#const-callconv-stdcall) · [FALSE](../../constants/universal/#const-false) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int)
