---
{"title":"Array_Copy","summary":"Полностью заменяет dstArray содержимым srcArray, подгоняя размер. Оба массива должны существовать и иметь одинаковый тип.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Полностью заменяет dstArray содержимым srcArray, подгоняя размер. Оба массива должны существовать и иметь одинаковый тип.

## Контракт вызова {#signature}

```erm
!!FU(Array_Copy):P(srcArray)/(dstArray);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `srcArray` | вход |
| x2 | `dstArray` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ShowErmError`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 587–618. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int)
