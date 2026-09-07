---
{"title":"Array_Slice","summary":"Copies a range to a new array. Negative start/count mean an end-relative start/trailing exclusion. Default storage is M_TRIGGER_LOCAL. An empty or invalid source returns NULL; check the result.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Copies a range to a new array. Negative start/count mean an end-relative start/trailing exclusion. Default storage is M_TRIGGER_LOCAL. An empty or invalid source returns NULL; check the result.

## Call contract {#signature}

```erm
!!FU(Array_Slice):P(list)/(start)/(count)/(result)/(arrayStorageType);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `start` | input |
| x3 | `count` | output / mutable |
| x4 | `result` | output / mutable |
| x5 | `arrayStorageType` | output / mutable |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!VR(listSize:y):S-1;
!!SN:M(list)/?(listSize)/?(listItemsType:y)/d/?(listAddr:y);
!!FU&(listSize)<=0:E;

!!VR(arrayStorageType)&(numArgs)<(@arrayStorageType):S(M_TRIGGER_LOCAL);
!!SN:M(M_AUTO_ID)/0/(listItemsType)/(arrayStorageType)/?(result);
!!SN&(arrayStorageType)=(M_TRIGGER_LOCAL):F^`.

Export calls: `ExtendArrayLifetime`, `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 689–743, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[DUMMY](../../constants/universal/#const-dummy) · [INT_MAX](../../constants/data-types/#const-int-max) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local) · [NULL](../../constants/universal/#const-null) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
