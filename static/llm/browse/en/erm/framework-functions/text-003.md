# Array_Copy

ID: erm.framework.functions.array-copy
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-copy/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-587-618-array-copy
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-copy 1 -->
## Purpose {#purpose}

Replaces dstArray with srcArray contents and resizes it. Both arrays must exist and share an element type.

## Call contract {#signature}

```erm
!!FU(Array_Copy):P(srcArray)/(dstArray);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `srcArray` | input |
| x2 | `dstArray` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 587–618, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int)
<!-- llm:end erm.framework.functions.array-copy 1 -->

# Array_CountValue

ID: erm.framework.functions.array-countvalue
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-countvalue/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1054-1084-array-countvalue
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-countvalue 1 -->
## Purpose {#purpose}

Returns the number of value matches. For strings, caseInsensitive defaults to FALSE; uses lstrcmpA/lstrcmpiA.

## Call contract {#signature}

```erm
!!FU(Array_CountValue):P(list)/(value)/(result)/(caseInsensitive);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `value` | input |
| x3 | `result` | output / mutable |
| x4 | `caseInsensitive` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1054–1084, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [SIZEOF_PTR](../../constants/data-types/#const-sizeof-ptr) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.array-countvalue 1 -->

# Array_CustomSort

ID: erm.framework.functions.array-customsort
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-customsort/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-835-889-array-customsort
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-customsort 1 -->
## Purpose {#purpose}

Stable sort using callback(value1,value2,state,?result), with negative/zero/positive results defining order. String values are z indices. State defaults to 0; the inclusive range defaults to the entire array.

## Call contract {#signature}

```erm
!!FU(Array_CustomSort):P(list)/(compareFunc)/(state)/(startInd)/(endInd);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `compareFunc` | input |
| x3 | `state` | input |
| x4 | `startInd` | output / mutable |
| x5 | `endInd` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_CustomStableSortInt32Array`, `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 835–889, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_STR](../../constants/erm-commands/#const-m-str) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
<!-- llm:end erm.framework.functions.array-customsort 1 -->

# Array_EnsureMinSize

ID: erm.framework.functions.array-ensureminsize
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-ensureminsize/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1041-1053-array-ensureminsize
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-ensureminsize 1 -->
## Purpose {#purpose}

Grows an array to minSize when needed and fills new items. Never shrinks it.

## Call contract {#signature}

```erm
!!FU(Array_EnsureMinSize):P(list)/(minSize)/(fillValue);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `minSize` | input |
| x3 | `fillValue` | input |

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[Array_Resize](../array-resize/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1041–1053, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.array-ensureminsize 1 -->

# Array_Fill

ID: erm.framework.functions.array-fill
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-fill/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-982-1010-array-fill
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-fill 1 -->
## Purpose {#purpose}

Fills an integer array with startValue, startValue+step…; step defaults to 0. The inclusive range defaults to the whole array. It writes raw 32-bit values; do not pass a string array.

## Call contract {#signature}

```erm
!!FU(Array_Fill):P(list)/(startValue)/(step)/(startInd)/(endInd);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `startValue` | input |
| x3 | `step` | input |
| x4 | `startInd` | output / mutable |
| x5 | `endInd` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_FillInt32Array`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 982–1010, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.array-fill 1 -->

# Array_Find

ID: erm.framework.functions.array-find
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-find/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1124-1165-array-find
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-find 1 -->
## Purpose {#purpose}

Calls callback(value,?found,listId,customArg) until the first TRUE. Returns an index or -1; string values are ERM strings. found and optional customArg default to 0.

## Call contract {#signature}

```erm
!!FU(Array_Find):P(list)/(callback)/(result)/(customArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `callback` | input |
| x3 | `result` | output / mutable |
| x4 | `customArg` | input |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1124–1165, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [M_INT](../../constants/erm-commands/#const-m-int) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.array-find 1 -->

# Array_IndexOf

ID: erm.framework.functions.array-indexof
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-indexof/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1085-1123-array-indexof
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-indexof 1 -->
## Purpose {#purpose}

Returns the first matching index or -1. Integers compare exactly; strings optionally use caseInsensitive.

## Call contract {#signature}

```erm
!!FU(Array_IndexOf):P(list)/(value)/(result)/(caseInsensitive);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `value` | input |
| x3 | `result` | output / mutable |
| x4 | `caseInsensitive` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1085–1123, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [SIZEOF_PTR](../../constants/data-types/#const-sizeof-ptr) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.array-indexof 1 -->

# Array_Join

ID: erm.framework.functions.array-join
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-join/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-744-780-array-join
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-join 1 -->
## Purpose {#purpose}

Joins integer or string elements using gluePtr, empty by default. Returns an ERM string and uses/clears s^result^ and s^temp^.

## Call contract {#signature}

```erm
!!FU(Array_Join):P(list)/(resultPtr)/(gluePtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `resultPtr` | output / mutable |
| x3 | `gluePtr` | output / mutable |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp) · [s^result^](../../globals/#global-s-result).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 744–780, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int)
<!-- llm:end erm.framework.functions.array-join 1 -->

# Array_Merge

ID: erm.framework.functions.array-merge
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-merge/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-631-688-array-merge
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-merge 1 -->
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
<!-- llm:end erm.framework.functions.array-merge 1 -->

# Array_Move

ID: erm.framework.functions.array-move
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-move/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-446-517-array-move
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-move 1 -->
## Purpose {#purpose}

Moves length elements from offset to destInd within an array without resizing; handles overlap and clips at the end. This snapshot declares destInd with !#VR instead of !#VA: verify the library correction before use.

## Call contract {#signature}

```erm
!!FU(Array_Move):P(list)/(offset)/(length)/(destInd);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `offset` | input |
| x3 | `length` | input |
| x4 | `destInd` | input |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp).
  !!FU:E;
!!en;

!!FU|(offset)>=(listSize)/(destInd)>=(listSize)/(offset)=(destInd)/(length)=0:E;

!!if&(offset)<0;
  !!SN:F^`, `s^temp^`.

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `requires-review`. The complete block in `lib/9999 era - stdlib.erm`, lines 446–517, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int)
<!-- llm:end erm.framework.functions.array-move 1 -->

# Array_Pop

ID: erm.framework.functions.array-pop
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-pop/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-401-445-array-pop
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-pop 1 -->
## Purpose {#purpose}

Removes trailing elements; up to 15 outputs receive values from last to first. With no outputs, removes one element. Missing values become 0 or empty strings.

## Call contract {#signature}

```erm
!!FU(Array_Pop):P(list)/(firstItem);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `firstItem` | input |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 401–445, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int)
<!-- llm:end erm.framework.functions.array-pop 1 -->

# Array_Push

ID: erm.framework.functions.array-push
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-push/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-376-400-array-push
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-push 1 -->
## Purpose {#purpose}

Appends up to 15 values and grows the array. Values must match its element type. An invalid array is skipped.

## Call contract {#signature}

```erm
!!FU(Array_Push):P(list)/(firstItem);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `firstItem` | input |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 376–400, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int)
<!-- llm:end erm.framework.functions.array-push 1 -->

# Array_Resize

ID: erm.framework.functions.array-resize
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-resize/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1011-1040-array-resize
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-resize 1 -->
## Purpose {#purpose}

Resizes an array. New items receive 0/empty text or fillValue; existing items remain, truncated items are removed.

## Call contract {#signature}

```erm
!!FU(Array_Resize):P(list)/(newSize)/(fillValue);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `newSize` | input |
| x3 | `fillValue` | input |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1011–1040, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [M_STR](../../constants/erm-commands/#const-m-str)
<!-- llm:end erm.framework.functions.array-resize 1 -->

# Array_Revert

ID: erm.framework.functions.array-revert
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-revert/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-956-981-array-revert
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-revert 1 -->
## Purpose {#purpose}

Reverses the entire array or an inclusive range, defaulting to 0..size-1. Supports integers and strings.

## Call contract {#signature}

```erm
!!FU(Array_Revert):P(list)/(startInd)/(endInd);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `startInd` | output / mutable |
| x3 | `endInd` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_RevertInt32Array`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 956–981, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.array-revert 1 -->

# Array_Shuffle

ID: erm.framework.functions.array-shuffle
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-shuffle/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-934-955-array-shuffle
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-shuffle 1 -->
## Purpose {#purpose}

Shuffles items in place using VR:R and swaps. String pointers are swapped without copying text. Verify RNG synchronization for multiplayer logic.

## Call contract {#signature}

```erm
!!FU(Array_Shuffle):P(list);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 934–955, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.array-shuffle 1 -->

