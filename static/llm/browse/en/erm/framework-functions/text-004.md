# Array_Sort

ID: erm.framework.functions.array-sort
URL: /en/erm/framework/functions/array-sort/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-781-812-array-sort
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-sort 1 -->
## Purpose {#purpose}

Sorts an array or inclusive startInd..endInd range in ascending order. Defaults to 0..size-1; bounds are clipped.

## Call contract {#signature}

```erm
!!FU(Array_Sort):P(list)/(startInd)/(endInd);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |
| x2 | `startInd` | output / mutable |
| x3 | `endInd` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_SortInt32Array`, `Erm_SortStrArray`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 781–812, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_STR](../../constants/erm-commands/#const-m-str)
<!-- llm:end erm.framework.functions.array-sort 1 -->

# Array_SortedUnique

ID: erm.framework.functions.array-sortedunique
URL: /en/erm/framework/functions/array-sortedunique/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-890-933-array-sortedunique
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-sortedunique 1 -->
## Purpose {#purpose}

Sorts an integer array and removes duplicates, shrinking it. String arrays are rejected.

## Call contract {#signature}

```erm
!!FU(Array_SortedUnique):P(list);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `list` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

## Related functions {#calls}

[Array_Sort](../array-sort/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 890–933, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_INT](../../constants/erm-commands/#const-m-int)
<!-- llm:end erm.framework.functions.array-sortedunique 1 -->

# Array_Splice

ID: erm.framework.functions.array-splice
URL: /en/erm/framework/functions/array-splice/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-518-586-array-splice
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-splice 1 -->
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
<!-- llm:end erm.framework.functions.array-splice 1 -->

# Battle_RedrawGridShadow

ID: erm.framework.functions.battle-redrawgridshadow
URL: /en/erm/framework/functions/battle-redrawgridshadow/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2799-2803-battle-redrawgridshadow
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.battle-redrawgridshadow 1 -->
## Purpose {#purpose}

Refreshes movement-range shading after a speed change. Requires an existing combat manager.

## Call contract {#signature}

```erm
!!FU(Battle_RedrawGridShadow):P;
```

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2799–2803, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [COMBAT_MANAGER](../../constants/game-managers/#const-combat-manager)
<!-- llm:end erm.framework.functions.battle-redrawgridshadow 1 -->

# BattleStack_MakeActive

ID: erm.framework.functions.battlestack-makeactive
URL: /en/erm/framework/functions/battlestack-makeactive/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2817-2836-battlestack-makeactive
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.battlestack-makeactive 1 -->
## Purpose {#purpose}

Passes control to stack 0..41 and runs regeneration if needed. An in-range index alone does not guarantee a live stack exists.

## Call contract {#signature}

```erm
!!FU(BattleStack_MakeActive):P(stackId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `stackId` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2817–2836, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BATTLE_MAX_STACKS](../../constants/battle/#const-battle-max-stacks) · [BATTLE_STACKS_PER_SIDE](../../constants/battle/#const-battle-stacks-per-side) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [COMBAT_MANAGER](../../constants/game-managers/#const-combat-manager) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.battlestack-makeactive 1 -->

# BattleStack_Shoot

ID: erm.framework.functions.battlestack-shoot
URL: /en/erm/framework/functions/battlestack-shoot/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2804-2816-battlestack-shoot
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.battlestack-shoot 1 -->
## Purpose {#purpose}

Forces attackerStackId to shoot defenderStackId, temporarily changing/restoring the attacker target-position field. Validate both stacks first.

## Call contract {#signature}

```erm
!!FU(BattleStack_Shoot):P(attackerStackId)/(defenderStackId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `attackerStackId` | input |
| x2 | `defenderStackId` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2804–2816, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.battlestack-shoot 1 -->

# ChangeArtModAtSlot

ID: erm.framework.functions.changeartmodatslot
URL: /en/erm/framework/functions/changeartmodatslot/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3134-3154-changeartmodatslot
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.changeartmodatslot 1 -->
## Purpose {#purpose}

Changes an artifact modifier in an equipped/backpack slot. A scroll modifier is its spell ID; ordinary artifacts usually use NO_ART_MOD.

## Call contract {#signature}

```erm
!!FU(ChangeArtModAtSlot):P(hero)/(slot)/(artMod);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `hero` | input |
| x2 | `slot` | input |
| x3 | `artMod` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3134–3154, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ART_SLOT_EQUIPPED_FIRST](../../constants/hero-artifact-slots/#const-art-slot-equipped-first) · [ART_SLOT_EQUIPPED_LAST](../../constants/hero-artifact-slots/#const-art-slot-equipped-last) · [ART_SLOT_FIRST](../../constants/hero-artifact-slots/#const-art-slot-first) · [ART_SLOT_LAST](../../constants/hero-artifact-slots/#const-art-slot-last) · [CURRENT_HERO](../../constants/heroes/#const-current-hero) · [NO_ART_MOD](../../constants/artfiact-modifiers/#const-no-art-mod) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.changeartmodatslot 1 -->

# ClearEventChainData

ID: erm.framework.functions.cleareventchaindata
URL: /en/erm/framework/functions/cleareventchaindata/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-12-15-cleareventchaindata
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.cleareventchaindata 1 -->
## Purpose {#purpose}

Clears the internal event-context stack and its position when loading a save.

## Call contract {#signature}

```erm
!!FU(ClearEventChainData):P;
```

## State and dependencies {#context}

Named globals: [i^savedEventData^](../../globals/#global-i-savedeventdata) · [i^savedEventDataPos^](../../globals/#global-i-savedeventdatapos).

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 12–15, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.cleareventchaindata 1 -->

# ClearIniCache

ID: erm.framework.functions.clearinicache
URL: /en/erm/framework/functions/clearinicache/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1589-1596-clearinicache
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.clearinicache 1 -->
## Purpose {#purpose}

Forgets one INI cache. The next read/write reloads the file from disk. Does not delete the file.

## Call contract {#signature}

```erm
!!FU(ClearIniCache):P(filePathPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ClearIniCache`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1589–1596, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.clearinicache 1 -->

# ClearScreenLog

ID: erm.framework.functions.clearscreenlog
URL: /en/erm/framework/functions/clearscreenlog/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2357-2362-clearscreenlog
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.clearscreenlog 1 -->
## Purpose {#purpose}

Clears green on-screen log messages.

## Call contract {#signature}

```erm
!!FU(ClearScreenLog):P;
```

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2357–2362, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.clearscreenlog 1 -->

# CollectMouseEventData

ID: erm.framework.functions.collectmouseeventdata
URL: /en/erm/framework/functions/collectmouseeventdata/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-129-138-collectmouseeventdata
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.collectmouseeventdata 1 -->
## Purpose {#purpose}

Copies CM context to mouse_* and dlg_action. Exit-button release is normalized to ordinary LMB release; a DL keyboard event places its key code in key.

## Call contract {#signature}

```erm
!!FU(CollectMouseEventData):P;
```

## State and dependencies {#context}

Named globals: [i^key^](../../globals/#global-i-key) · [i^mouse_x^](../../globals/#global-i-mouse-x) · [i^mouse_y^](../../globals/#global-i-mouse-y) · [i^mouse_battleHex^](../../globals/#global-i-mouse-battlehex) · [i^mouse_flags^](../../globals/#global-i-mouse-flags) · [i^mouse_hero_0^](../../globals/#global-i-mouse-hero-0) · [i^mouse_hero_1^](../../globals/#global-i-mouse-hero-1) · [i^mouse_item^](../../globals/#global-i-mouse-item) · [i^mouse_mapX^](../../globals/#global-i-mouse-mapx) · [i^mouse_mapY^](../../globals/#global-i-mouse-mapy) · [i^mouse_mapZ^](../../globals/#global-i-mouse-mapz) · [i^mouse_action^](../../globals/#global-i-mouse-action) · [i^dlg_action^](../../globals/#global-i-dlg-action).

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 129–138, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[DLG_ACTION_KEY_PRESSED](../../constants/dialog-action-types/#const-dlg-action-key-pressed) · [MOUSE_EXIT_BTN_LMB_RELEASED](../../constants/mouse-click-subtypes/#const-mouse-exit-btn-lmb-released) · [MOUSE_LMB_RELEASED](../../constants/mouse-click-subtypes/#const-mouse-lmb-released)
<!-- llm:end erm.framework.functions.collectmouseeventdata 1 -->

# CompareStrings_Bridge_INTERNAL

ID: erm.framework.functions.comparestrings-bridge-internal
URL: /en/erm/framework/functions/comparestrings-bridge-internal/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-813-834-comparestrings-bridge-internal
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.comparestrings-bridge-internal 1 -->
## Purpose {#purpose}

String-comparator bridge: converts addresses to ERM strings and invokes the callback with state and an output. A null address becomes an empty string.

## Call contract {#signature}

```erm
!!FU(CompareStrings_Bridge_INTERNAL):P(str1Addr)/(str2Addr)/(bridgeState)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `str1Addr` | input |
| x2 | `str2Addr` | input |
| x3 | `bridgeState` | input |
| x4 | `result` | output / mutable |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp).

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 813–834, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.comparestrings-bridge-internal 1 -->

# CompareStrings

ID: erm.framework.functions.comparestrings
URL: /en/erm/framework/functions/comparestrings/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1431-1442-comparestrings
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.comparestrings 1 -->
## Purpose {#purpose}

Compares two ERM strings with language operators and returns -1, 0, or 1.

## Call contract {#signature}

```erm
!!FU(CompareStrings):P(str1Ptr)/(str2Ptr)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `str1Ptr` | input |
| x2 | `str2Ptr` | input |
| x3 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1431–1442, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.comparestrings 1 -->

# ConstructBitMask

ID: erm.framework.functions.constructbitmask
URL: /en/erm/framework/functions/constructbitmask/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1194-1223-constructbitmask
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.constructbitmask 1 -->
## Purpose {#purpose}

Combines up to 15 bit positions 0..31 into a mask; the last argument is the output. Repeated positions do not double a bit because OR is used. Requires a position and an output.

## Call contract {#signature}

```erm
!!FU(ConstructBitMask):P(args)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `args` | input |
| x2 | `result` | input |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!VR(mask:y):S0;

!!re i/(@args)/(numArgs)/1/-1;
  !!VR(arg:y):Sxi;

  !!if&(arg)>=0/(arg)<=31;
    !!VR(bit:y):S1 Sd<<(arg);
    !!VR(mask):|(bit);
  !!el;
    !!SN:F^`.

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1194–1223, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.constructbitmask 1 -->

# CreateDir

ID: erm.framework.functions.createdir
URL: /en/erm/framework/functions/createdir/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1605-1612-createdir
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.createdir 1 -->
## Purpose {#purpose}

Calls CreateDirectoryA for one directory without returning its result. Does not guarantee creation of missing parent directories.

## Call contract {#signature}

```erm
!!FU(CreateDir):P(dirPathPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dirPathPtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `CreateDirectoryA`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1605–1612, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.createdir 1 -->

