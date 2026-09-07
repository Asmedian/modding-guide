---
{"title":"PrepareMultiPicDialog","summary":"Настраивает картинки следующего IF:N: без аргументов очищает; принимает пары type/subtype или один ID массива пар. Пропускает NO_PIC_TYPE и отрицательные типы существ; максимум 8 непустых пар. Сам диалог не показывает.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Настраивает картинки следующего IF:N: без аргументов очищает; принимает пары type/subtype или один ID массива пар. Пропускает NO_PIC_TYPE и отрицательные типы существ; максимум 8 непустых пар. Сам диалог не показывает.

## Контракт вызова {#signature}

```erm
!!FU(PrepareMultiPicDialog):P(firstArg);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `firstArg` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2679–2755. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[MON_FIRST](../../constants/monsters/#const-mon-first) · [NO_PIC_TYPE](../../constants/h3-dialog-picture-types/#const-no-pic-type) · [PIC_TYPE_MONSTER](../../constants/h3-dialog-picture-types/#const-pic-type-monster)
