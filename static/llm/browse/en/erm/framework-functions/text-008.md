# H3Dlg_StopAnimation

ID: erm.framework.functions.h3dlg-stopanimation
URL: /en/erm/framework/functions/h3dlg-stopanimation/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2022-2025-h3dlg-stopanimation
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.h3dlg-stopanimation 1 -->
## Purpose {#purpose}

Stops/resumes current dialog animation through native functions. Keep calls balanced.

## Call contract {#signature}

```erm
!!FU(H3Dlg_StopAnimation):P;
```

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2022–2025, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.h3dlg-stopanimation 1 -->

# H3Dlg_UpdateItemRange

ID: erm.framework.functions.h3dlg-updateitemrange
URL: /en/erm/framework/functions/h3dlg-updateitemrange/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2167-2183-h3dlg-updateitemrange
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.h3dlg-updateitemrange 1 -->
## Purpose {#purpose}

Updates dialog state before redraw. In this snapshot minItemId/maxItemId are unused: a virtual method is called with 0/200/200. Do not rely on range-limited updates.

## Call contract {#signature}

```erm
!!FU(H3Dlg_UpdateItemRange):P(h3Dlg)/(minItemId)/(maxItemId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `h3Dlg` | input |
| x2 | `minItemId` | input |
| x3 | `maxItemId` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `requires-review`. The complete block in `lib/9999 era - stdlib.erm`, lines 2167–2183, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_VTABLE](../../constants/game-structures/#const-struct-h3dlg-vtable) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.h3dlg-updateitemrange 1 -->

# H3Quests_RefreshData

ID: erm.framework.functions.h3quests-refreshdata
URL: /en/erm/framework/functions/h3quests-refreshdata/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3321-3370-h3quests-refreshdata
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.h3quests-refreshdata 1 -->
## Purpose {#purpose}

Refreshes quests after creature/name replacements. For defeat-monster quests, checks the actual type at coordinates; forceRefreshText rebuilds all quest text. Uses internal game structures.

## Call contract {#signature}

```erm
!!FU(H3Quests_RefreshData):P(forceRefreshText);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `forceRefreshText` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3321–3370, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [GAME_MANAGER](../../constants/game-managers/#const-game-manager) · [NO_MON](../../constants/monsters/#const-no-mon) · [OBJ_MONSTER](../../constants/object-types/#const-obj-monster) · [QUEST_TYPE_DEFEAT_MONSTER](../../constants/quest-types/#const-quest-type-defeat-monster) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.h3quests-refreshdata 1 -->

# Hash32

ID: erm.framework.functions.hash32
URL: /en/erm/framework/functions/hash32/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1350-1360-hash32
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.hash32 1 -->
## Purpose {#purpose}

Hashes dataLen bytes at data (or a string) into 32 bits. The caller must supply accessible memory and a valid length; no cryptographic properties are promised.

## Call contract {#signature}

```erm
!!FU(Hash32):P(data)/(dataLen)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `data` | input |
| x2 | `dataLen` | input |
| x3 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Hash32`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1350–1360, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.hash32 1 -->

# Interpolate

ID: erm.framework.functions.interpolate
URL: /en/erm/framework/functions/interpolate/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1511-1520-interpolate
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.interpolate 1 -->
## Purpose {#purpose}

Expands current ERM variables in a string template. Timing matters: a template and already expanded text are different inputs.

## Call contract {#signature}

```erm
!!FU(Interpolate):P(strPtr)/(resultPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `strPtr` | input |
| x2 | `resultPtr` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_Interpolate`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1511–1520, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.interpolate 1 -->

# IntLog2

ID: erm.framework.functions.intlog2
URL: /en/erm/framework/functions/intlog2/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1180-1193-intlog2
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.intlog2 1 -->
## Purpose {#purpose}

Returns ceil(log2(value)), or 0 when value<=0. Also used to identify a single set bit.

## Call contract {#signature}

```erm
!!FU(IntLog2):P(value)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `value` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_IntLog2`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1180–1193, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.intlog2 1 -->

# IsDllLoaded

ID: erm.framework.functions.isdllloaded
URL: /en/erm/framework/functions/isdllloaded/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2936-2949-isdllloaded
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.isdllloaded 1 -->
## Purpose {#purpose}

Checks a DLL filename including extension with GetModuleHandleA. Returns TRUE/FALSE without loading a missing module.

## Call contract {#signature}

```erm
!!FU(IsDllLoaded):P(dllFileNamePtr)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dllFileNamePtr` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `GetModuleHandleA`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2936–2949, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [NULL](../../constants/universal/#const-null) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.isdllloaded 1 -->

# LeaveMouseEvent

ID: erm.framework.functions.leavemouseevent
URL: /en/erm/framework/functions/leavemouseevent/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-171-174-leavemouseevent
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.leavemouseevent 1 -->
## Purpose {#purpose}

Restores mouse context followed by keyboard context from the final handlers.

## Call contract {#signature}

```erm
!!FU(LeaveMouseEvent):P;
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[RestorePrevKeyModsState](../restoreprevkeymodsstate/) · [RestorePrevMouseEventData](../restoreprevmouseeventdata/)

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 171–174, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.leavemouseevent 1 -->

# LoadIntGlobalsFromJson

ID: erm.framework.functions.loadintglobalsfromjson
URL: /en/erm/framework/functions/loadintglobalsfromjson/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1835-1869-loadintglobalsfromjson
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.loadintglobalsfromjson 1 -->
## Purpose {#purpose}

Takes up to 14 names after JSON and global-variable prefixes. Resolves values as ERM constants first, then as integers; a missing key leaves the global unchanged.

## Call contract {#signature}

```erm
!!FU(LoadIntGlobalsFromJson):P(jsonKeysPrefixPtr)/(globalVarsPrefixPtr)/(firstKeyNamePtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `jsonKeysPrefixPtr` | input |
| x2 | `globalVarsPrefixPtr` | input |
| x3 | `firstKeyNamePtr` | input |

## State and dependencies {#context}

Named globals: —.

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1835–1869, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.loadintglobalsfromjson 1 -->

# MakeRngSeed

ID: erm.framework.functions.makerngseed
URL: /en/erm/framework/functions/makerngseed/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1361-1375-makerngseed
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.makerngseed 1 -->
## Purpose {#purpose}

Derives a deterministic seed from up to 15 integers; the last argument is the output. The same input sequence produces the same seed.

## Call contract {#signature}

```erm
!!FU(MakeRngSeed):P(firstArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `firstArg` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Hash32`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1361–1375, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[SIZEOF_INT](../../constants/data-types/#const-sizeof-int)
<!-- llm:end erm.framework.functions.makerngseed 1 -->

# MergeIniWithDefault

ID: erm.framework.functions.mergeiniwithdefault
URL: /en/erm/framework/functions/mergeiniwithdefault/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1621-1629-mergeiniwithdefault
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.mergeiniwithdefault 1 -->
## Purpose {#purpose}

Adds missing source keys to the target cache without replacing existing values. Persist separately with SaveIni.

## Call contract {#signature}

```erm
!!FU(MergeIniWithDefault):P(targetPathPtr)/(sourcePathPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `targetPathPtr` | input |
| x2 | `sourcePathPtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `MergeIniWithDefault`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1621–1629, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.mergeiniwithdefault 1 -->

# MonCountToFuzzyText

ID: erm.framework.functions.moncounttofuzzytext
URL: /en/erm/framework/functions/moncounttofuzzytext/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2950-3019-moncounttofuzzytext
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.moncounttofuzzytext 1 -->
## Purpose {#purpose}

Returns an approximate count: 1–4, 5–9, 10–19, 20–49, 50–99, 100–249, 250–499, 500–999 and K+/M+. MON_FUZZY_COUNT_* selects formatting; 0 falls into 1–4 and negative input is an error.

## Call contract {#signature}

```erm
!!FU(MonCountToFuzzyText):P(monNum)/(resultPtr)/(maxTextLength);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `monNum` | input |
| x2 | `resultPtr` | output / mutable |
| x3 | `maxTextLength` | input |

## State and dependencies {#context}

Named globals: [s^result^](../../globals/#global-s-result).

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[IntLog2](../intlog2/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2950–3019, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[INT_MAX](../../constants/data-types/#const-int-max) · [MON_FUZZY_COUNT_EXTRA_SHORT](../../constants/special-enums/#const-mon-fuzzy-count-extra-short) · [MON_FUZZY_COUNT_HUMAN_FRIENDLY](../../constants/special-enums/#const-mon-fuzzy-count-human-friendly) · [MON_FUZZY_COUNT_SHORT](../../constants/special-enums/#const-mon-fuzzy-count-short) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int) · [SIZEOF_PTR](../../constants/data-types/#const-sizeof-ptr)
<!-- llm:end erm.framework.functions.moncounttofuzzytext 1 -->

# NewIntArray

ID: erm.framework.functions.newintarray
URL: /en/erm/framework/functions/newintarray/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-301-336-newintarray
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.newintarray 1 -->
## Purpose {#purpose}

Creates an integer array: P?result, Psize/?result, or Psize/fill/?result. Storage may follow the output; the default is M_TRIGGER_LOCAL, extended to the caller context. Default fill is 0.

## Call contract {#signature}

```erm
!!FU(NewIntArray):P?(result:y);
!!FU(NewIntArray):P(size)/?(result:y);
!!FU(NewIntArray):P(size)/(fill)/?(result:y)/(storage);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `arg1` | output / mutable |
| x2 | `arg2` | output / mutable |
| x3 | `arg3` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ExtendArrayLifetime`.

## Related functions {#calls}

[Array_Fill](../array-fill/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 301–336, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
<!-- llm:end erm.framework.functions.newintarray 1 -->

# NewStrArray

ID: erm.framework.functions.newstrarray
URL: /en/erm/framework/functions/newstrarray/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-337-375-newstrarray
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.newstrarray 1 -->
## Purpose {#purpose}

Creates a string array using the NewIntArray overloads. Fill is a string, empty by default. Returns an array ID, not a memory address.

## Call contract {#signature}

```erm
!!FU(NewStrArray):P?(result:y);
!!FU(NewStrArray):P(size)/?(result:y);
!!FU(NewStrArray):P(size)/(fill)/?(result:y)/(storage);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `arg1` | input |
| x2 | `arg2` | input |
| x3 | `arg3` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ExtendArrayLifetime`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 337–375, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_STR](../../constants/erm-commands/#const-m-str) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
<!-- llm:end erm.framework.functions.newstrarray 1 -->

# OnAdventureMapLeftMouseClick_Quit

ID: erm.framework.functions.onadventuremapleftmouseclick-quit
URL: /en/erm/framework/functions/onadventuremapleftmouseclick-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-52-54-onadventuremapleftmouseclick-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onadventuremapleftmouseclick-quit 1 -->
## Purpose {#purpose}

Final handler for OnAdventureMapLeftMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnAdventureMapLeftMouseClick_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 52–54, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onadventuremapleftmouseclick-quit 1 -->

# OnAdventureMapLeftMouseClick

ID: erm.framework.functions.onadventuremapleftmouseclick
URL: /en/erm/framework/functions/onadventuremapleftmouseclick/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-190-192-onadventuremapleftmouseclick
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onadventuremapleftmouseclick 1 -->
## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnAdventureMapLeftMouseClick);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 190–192, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onadventuremapleftmouseclick 1 -->

# OnAdventureMapRightMouseClick_Quit

ID: erm.framework.functions.onadventuremaprightmouseclick-quit
URL: /en/erm/framework/functions/onadventuremaprightmouseclick-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-37-39-onadventuremaprightmouseclick-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onadventuremaprightmouseclick-quit 1 -->
## Purpose {#purpose}

Final handler for OnAdventureMapRightMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnAdventureMapRightMouseClick_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 37–39, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onadventuremaprightmouseclick-quit 1 -->

