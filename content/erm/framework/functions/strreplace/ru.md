---
{"title":"StrReplace","summary":"Заменяет все вхождения patternPtr в sourcePtr на replacementPtr и возвращает строку. Вызывается только внутри триггера.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Заменяет все вхождения patternPtr в sourcePtr на replacementPtr и возвращает строку. Вызывается только внутри триггера.

## Контракт вызова {#signature}

```erm
!!FU(StrReplace):P(sourcePtr)/(patternPtr)/(replacementPtr)/(result);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `sourcePtr` | вход |
| x2 | `patternPtr` | вход |
| x3 | `replacementPtr` | вход |
| x4 | `result` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `Erm_StrReplace`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1498–1510. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
