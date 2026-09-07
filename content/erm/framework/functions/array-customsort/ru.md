---
{"title":"Array_CustomSort","summary":"Стабильная сортировка: callback(value1,value2,state,?result), где результат <0, 0, >0 определяет порядок. Для строк передаются z-индексы. state по умолчанию 0; диапазон включительный, по умолчанию весь массив.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Стабильная сортировка: callback(value1,value2,state,?result), где результат <0, 0, >0 определяет порядок. Для строк передаются z-индексы. state по умолчанию 0; диапазон включительный, по умолчанию весь массив.

## Контракт вызова {#signature}

```erm
!!FU(Array_CustomSort):P(list)/(compareFunc)/(state)/(startInd)/(endInd);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `list` | вход |
| x2 | `compareFunc` | вход |
| x3 | `state` | вход |
| x4 | `startInd` | выход / изменяемый |
| x5 | `endInd` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `Erm_CustomStableSortInt32Array`, `ShowErmError`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 835–889. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_STR](../../constants/erm-commands/#const-m-str) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
