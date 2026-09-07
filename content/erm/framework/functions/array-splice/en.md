---
{"title":"Array_Splice","summary":"Deletes a range and inserts up to 13 values, resizing the array. Negative startIndex counts from the end; omitted numItemsToDelete removes the remainder, while a negative count preserves that many trailing items. Depends on Array_Move.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Deletes a range and inserts up to 13 values, resizing the array. Negative startIndex counts from the end; omitted numItemsToDelete removes the remainder, while a negative count preserves that many trailing items. Depends on Array_Move.

## Call contract {#signature}

```erm
!!FU(Array_Splice):P(list)/(startIndex)/(numItemsToDelete)/(firstItemToInsert);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `startIndex` | input |
| x3 | `numItemsToDelete` | output / mutable |
| x4 | `firstItemToInsert` | input |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp).
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

Export calls: `ShowErmError`.

## Related functions {#calls}

[Array_Move](../array-move/)

## Version and status {#provenance}

Status: `requires-review`. The complete block in `lib/9999 era - stdlib.erm`, lines 518–586, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int)
