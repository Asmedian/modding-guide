---
{"title":"RestoreEventData","summary":"Восстанавливает целые значения в переданные через ? аргументы. Проверка savedNumArgs в снимке отсутствует: вместо неё повторена проверка размера буфера. Несовпадение пар сохранения/восстановления недопустимо.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Восстанавливает целые значения в переданные через ? аргументы. Проверка savedNumArgs в снимке отсутствует: вместо неё повторена проверка размера буфера. Несовпадение пар сохранения/восстановления недопустимо.

## Контракт вызова {#signature}

```erm
!!FU(RestoreEventData):P(firstArg);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `firstArg` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [i^savedEventData^](../../globals/#global-i-savedeventdata) · [i^savedEventDataPos^](../../globals/#global-i-savedeventdatapos).

Вызовы экспорта: `DisableErmTracking`, `RestoreErmTracking`, `ShowErmError`.

## Связанные функции {#calls}

[ClearEventChainData](../cleareventchaindata/)

## Версия и статус {#provenance}

Статус: `internal`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 47–87. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
