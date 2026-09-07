---
{"title":"Array_CountValue","summary":"Возвращает число совпадений value. Для строк caseInsensitive по умолчанию FALSE; используется lstrcmpA/lstrcmpiA.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Возвращает число совпадений value. Для строк caseInsensitive по умолчанию FALSE; используется lstrcmpA/lstrcmpiA.

## Контракт вызова {#signature}

```erm
!!FU(Array_CountValue):P(list)/(value)/(result)/(caseInsensitive);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `list` | вход |
| x2 | `value` | вход |
| x3 | `result` | выход / изменяемый |
| x4 | `caseInsensitive` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1054–1084. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [SIZEOF_PTR](../../constants/data-types/#const-sizeof-ptr) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
