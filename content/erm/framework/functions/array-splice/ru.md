---
{"title":"Array_Splice","summary":"Удаляет диапазон и вставляет до 13 значений с изменением размера. Отрицательный startIndex отсчитывается от конца; отсутствие numItemsToDelete удаляет остаток, отрицательное число сохраняет столько элементов в конце. Зависит от Array_Move.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Удаляет диапазон и вставляет до 13 значений с изменением размера. Отрицательный startIndex отсчитывается от конца; отсутствие numItemsToDelete удаляет остаток, отрицательное число сохраняет столько элементов в конце. Зависит от Array_Move.

## Контракт вызова {#signature}

```erm
!!FU(Array_Splice):P(list)/(startIndex)/(numItemsToDelete)/(firstItemToInsert);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `list` | вход |
| x2 | `startIndex` | вход |
| x3 | `numItemsToDelete` | выход / изменяемый |
| x4 | `firstItemToInsert` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [s^temp^](../../globals/#global-s-temp).
  !!FU:E;
!!en;

!!VR(startIndex)&(startIndex)<0:+(listSize);
!!VR(startIndex):F0/(listSize);

!!VR(maxItemsToDelete:y):S(listSize) -(startIndex);
!!VR(numItemsToDelete)&(numArgs)<(@numItemsToDelete):S(listSize);
!!VR(numItemsToDelete)&(numItemsToDelete)<0:S(listSize) +(numItemsToDelete) -(startIndex);
!!VR(numItemsToDelete):F0/(maxItemsToDelete);

!!VR(numInsertions:y):S(numArgs) -(@firstItemToInsert) +1;
!!VR(listSizeDiff:y):S(numInsertions) -(numItemsToDelete);
!!VR(newListSize:y):S(listSize) +(listSizeDiff);

; Determine, where to move the right (tail) part of array
!!VR(chunkStartInd:y):S(startIndex) +(numItemsToDelete);
!!VR(chunkDestInd:y):S(chunkStartInd) +(listSizeDiff);

; The number of deleted items is greater, than the number of inserted ones. We should shift tail items to the left BEFORE array is shrinked
; L L L [insert 1] [insert 2] [deleted 3] [deleted 4] R R R R => L L L [insert 1] [insert 2] R R R R [garbage] [garbage]
!!FU(Array_Move)&(listSizeDiff)<0:P(list)/(chunkStartInd)/(listSize)/(chunkDestInd);

; Perform array resize only if its length actually changed
!!SN&(listSizeDiff)<>0:M(list)/(newListSize);

; The number of inserted items is greater, than the number of deleted ones. We should shift tail items to the right AFTER array is expanded
; L L L [replaced 1] [replaced 2] [R vs insert 3] [R vs insert 4] R R => L L L [replaced 1] [replaced 2] [insert 3] [insert 4] R R R R
!!FU(Array_Move)&(listSizeDiff)>0:P(list)/(chunkStartInd)/(listSize)/(chunkDestInd);

; Write inserted/replaced items
!!if&(numInsertions)>0;
  !!VR(endIndex:y):S(startIndex) +(numInsertions) -1;
  !!VR(insertedItemPtr:y):S(@firstItemToInsert);

  !!re i/(startIndex)/(endIndex);
    !!if&(itemsType)=(M_INT);
      !!SN:M(list)/i/x(insertedItemPtr);
    !!el;
      !!VR(strPtr:y):Sx(insertedItemPtr);
      !!SN:M(list)/i/z(strPtr);
    !!en;

    !!VR(insertedItemPtr):+1;
  !!en;
!!en;

!!VRs^`.

Вызовы экспорта: `ShowErmError`.

## Связанные функции {#calls}

[Array_Move](../array-move/)

## Версия и статус {#provenance}

Статус: `requires-review`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 518–586. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[M_INT](../../constants/erm-commands/#const-m-int)
