---
{"title":"DirExists","summary":"Проверяет атрибуты пути и возвращает TRUE только для требуемого вида: FileExists — файл, DirExists — каталог. Ошибка доступа также даёт FALSE.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Проверяет атрибуты пути и возвращает TRUE только для требуемого вида: FileExists — файл, DirExists — каталог. Ошибка доступа также даёт FALSE.

## Контракт вызова {#signature}

```erm
!!FU(DirExists):P(dirPathPtr)/(result);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `dirPathPtr` | вход |
| x2 | `result` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `GetFileAttributesA`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1566–1577. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[FALSE](../../constants/universal/#const-false) · [FILE_ATTRIBUTE_DIRECTORY](../../constants/win32-api/#const-file-attribute-directory) · [INVALID_FILE_ATTRIBUTES](../../constants/win32-api/#const-invalid-file-attributes) · [TRUE](../../constants/universal/#const-true)
