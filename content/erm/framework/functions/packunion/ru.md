---
{"title":"PackUnion","summary":"PackUnion принимает пары value/width и последний ?result; UnpackUnion — packedValue и пары ?value/width. Поля идут от младшего бита, общий размер до 32. Проверки граничных ширин 0 и 32 в снимке расходятся с сообщением 1..32: используйте положительные поля меньше 32 и проверяйте общую ширину.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

PackUnion принимает пары value/width и последний ?result; UnpackUnion — packedValue и пары ?value/width. Поля идут от младшего бита, общий размер до 32. Проверки граничных ширин 0 и 32 в снимке расходятся с сообщением 1..32: используйте положительные поля меньше 32 и проверяйте общую ширину.

## Контракт вызова {#signature}

```erm
!!FU(PackUnion):P(firstArg);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `firstArg` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: —.
    !!FU:E;
  !!en;

  !!VR(fieldValue):&(fieldMask) Sd<<(totalFieldsSize);
  !!VR(totalFieldsSize):+(fieldSize);

  !!if&(totalFieldsSize)>(BITS_IN_INT32);
    !!SN:F^`.

Вызовы экспорта: `ShowErmError`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1241–1294. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[BITS_IN_INT32](../../constants/bit-sizes/#const-bits-in-int32)
