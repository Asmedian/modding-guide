---
{"title":"EnableErrors","summary":"Читает последний флаг ошибки, но в этом снимке снова устанавливает WOG_OPT_MUTE_ERRORS=TRUE. Комментарий обещает включение сообщений, код этого не делает. Для восстановления требуется явный UN:P с FALSE либо исправленная библиотека.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Читает последний флаг ошибки, но в этом снимке снова устанавливает WOG_OPT_MUTE_ERRORS=TRUE. Комментарий обещает включение сообщений, код этого не делает. Для восстановления требуется явный UN:P с FALSE либо исправленная библиотека.

## Контракт вызова {#signature}

```erm
!!FU(EnableErrors):P(result);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `result` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

## Версия и статус {#provenance}

Статус: `requires-review`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2014–2021. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[TRUE](../../constants/universal/#const-true) · [WOG_OPT_LAST_ERROR](../../constants/wog-options/#const-wog-opt-last-error) · [WOG_OPT_MUTE_ERRORS](../../constants/wog-options/#const-wog-opt-mute-errors)
