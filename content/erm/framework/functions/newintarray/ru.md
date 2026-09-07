---
{"title":"NewIntArray","summary":"Создаёт массив целых: P?result, Psize/?result или Psize/fill/?result. После выходного аргумента допустим тип хранения; по умолчанию M_TRIGGER_LOCAL, время жизни продлено до вызывающего контекста. Значение заполнения по умолчанию 0.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Создаёт массив целых: P?result, Psize/?result или Psize/fill/?result. После выходного аргумента допустим тип хранения; по умолчанию M_TRIGGER_LOCAL, время жизни продлено до вызывающего контекста. Значение заполнения по умолчанию 0.

## Контракт вызова {#signature}

```erm
!!FU(NewIntArray):P?(result:y);
!!FU(NewIntArray):P(size)/?(result:y);
!!FU(NewIntArray):P(size)/(fill)/?(result:y)/(storage);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `arg1` | выход / изменяемый |
| x2 | `arg2` | выход / изменяемый |
| x3 | `arg3` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ExtendArrayLifetime`.

## Связанные функции {#calls}

[Array_Fill](../array-fill/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 301–336. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
