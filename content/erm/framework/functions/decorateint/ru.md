---
{"title":"DecorateInt","summary":"Форматирует целое с разделителем тысяч era.locale.thousand_separator. ignoreSmallNumbers=DONT_DECORATE_SMALL_INTS оставляет числа до 9999 без группировки. Выход — строка.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Форматирует целое с разделителем тысяч era.locale.thousand_separator. ignoreSmallNumbers=DONT_DECORATE_SMALL_INTS оставляет числа до 9999 без группировки. Выход — строка.

## Контракт вызова {#signature}

```erm
!!FU(DecorateInt):P(value)/(resultPtr)/(ignoreSmallNumbers);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `value` | вход |
| x2 | `resultPtr` | выход / изменяемый |
| x3 | `ignoreSmallNumbers` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `DecorateInt`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1521–1532. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
