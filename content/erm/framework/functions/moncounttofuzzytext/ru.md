---
{"title":"MonCountToFuzzyText","summary":"Возвращает приблизительное количество: 1–4, 5–9, 10–19, 20–49, 50–99, 100–249, 250–499, 500–999 и K+/M+. Формат задаётся MON_FUZZY_COUNT_; 0 попадает в 1–4, отрицательное число — ошибка.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Возвращает приблизительное количество: 1–4, 5–9, 10–19, 20–49, 50–99, 100–249, 250–499, 500–999 и K+/M+. Формат задаётся MON_FUZZY_COUNT_*; 0 попадает в 1–4, отрицательное число — ошибка.

## Контракт вызова {#signature}

```erm
!!FU(MonCountToFuzzyText):P(monNum)/(resultPtr)/(maxTextLength);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `monNum` | вход |
| x2 | `resultPtr` | выход / изменяемый |
| x3 | `maxTextLength` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [s^result^](../../globals/#global-s-result).

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Связанные функции {#calls}

[IntLog2](../intlog2/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2950–3019. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[INT_MAX](../../constants/data-types/#const-int-max) · [MON_FUZZY_COUNT_EXTRA_SHORT](../../constants/special-enums/#const-mon-fuzzy-count-extra-short) · [MON_FUZZY_COUNT_HUMAN_FRIENDLY](../../constants/special-enums/#const-mon-fuzzy-count-human-friendly) · [MON_FUZZY_COUNT_SHORT](../../constants/special-enums/#const-mon-fuzzy-count-short) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int) · [SIZEOF_PTR](../../constants/data-types/#const-sizeof-ptr)
