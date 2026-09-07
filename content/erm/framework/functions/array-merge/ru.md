---
{"title":"Array_Merge","summary":"Добавляет содержимое одного или нескольких массивов в dstArray. Все типы должны совпадать; массив-приёмник изменяется.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Добавляет содержимое одного или нескольких массивов в dstArray. Все типы должны совпадать; массив-приёмник изменяется.

## Контракт вызова {#signature}

```erm
!!FU(Array_Merge):P(dstArray)/(firstArrayToMerge);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `dstArray` | вход |
| x2 | `firstArrayToMerge` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: —.
  !!FU:E;
!!en;

!!VR(dstArraySize:y):S-1;
!!SN:M(dstArray)/?(dstArraySize)/?(dstArrayItemsType:y)/d;
!!FU&(dstArraySize)<0:E;

!!VR(numNewItems:y):S0;

!!re (argInd:y)/(@firstArrayToMerge)/(numArgs);
  !!VR(array:y):Sx(argInd);
  !!VR(arraySize:y):S-1;
  !!SN:M(array)/?(arraySize)/?(arrayItemsType:y)/d;
  !!FU&(arraySize)<0:E;

  !!if&(arrayItemsType)<>(dstArrayItemsType);
    !!SN:F^`.

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 631–688. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[DUMMY](../../constants/universal/#const-dummy) · [M_INT](../../constants/erm-commands/#const-m-int) · [NULL](../../constants/universal/#const-null) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int) · [SIZEOF_PTR](../../constants/data-types/#const-sizeof-ptr) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
