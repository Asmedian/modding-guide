---
{"title":"Array_Clone","summary":"Создаёт копию массива в памяти вызывающего триггера и возвращает её ID. Строки копируются как значения.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Создаёт копию массива в памяти вызывающего триггера и возвращает её ID. Строки копируются как значения.

## Контракт вызова {#signature}

```erm
!!FU(Array_Clone):P(srcArray)/(result);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `srcArray` | вход |
| x2 | `result` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ExtendArrayLifetime`.

## Связанные функции {#calls}

[Array_Copy](../array-copy/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 619–630. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
