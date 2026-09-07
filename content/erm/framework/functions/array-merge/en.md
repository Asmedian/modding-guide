---
{"title":"Array_Merge","summary":"Appends one or more arrays to dstArray. All element types must match; the destination is modified.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Appends one or more arrays to dstArray. All element types must match; the destination is modified.

## Call contract {#signature}

```erm
!!FU(Array_Merge):P(dstArray)/(firstArrayToMerge);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dstArray` | input |
| x2 | `firstArrayToMerge` | input |

## State and dependencies {#context}

Named globals: —.
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

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 631–688, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[DUMMY](../../constants/universal/#const-dummy) · [M_INT](../../constants/erm-commands/#const-m-int) · [NULL](../../constants/universal/#const-null) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int) · [SIZEOF_PTR](../../constants/data-types/#const-sizeof-ptr) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
