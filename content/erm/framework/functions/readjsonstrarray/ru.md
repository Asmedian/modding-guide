---
{"title":"ReadJsonStrArray","summary":"Читает JSON-ключи prefix.0, prefix.1… до первого отсутствующего. Второй аргумент через ? создаёт локальный массив, иначе существующий очищается и заполняется. ReadJsonIntArray преобразует строки в числа.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Читает JSON-ключи prefix.0, prefix.1… до первого отсутствующего. Второй аргумент через ? создаёт локальный массив, иначе существующий очищается и заполняется. ReadJsonIntArray преобразует строки в числа.

## Контракт вызова {#signature}

```erm
!!FU(ReadJsonStrArray):P(jsonKeyPtr)/(strArray);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `jsonKeyPtr` | вход |
| x2 | `strArray` | выход / изменяемый |

## Состояние и зависимости {#context}

Глобальные переменные: —.
  !!SN:T^`.

Вызовы экспорта: `ExtendArrayLifetime`.

## Связанные функции {#calls}

[Array_Push](../array-push/) · [NewStrArray](../newstrarray/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1807–1834. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get)
