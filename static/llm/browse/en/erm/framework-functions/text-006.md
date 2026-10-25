# EnableErrors

ID: erm.framework.functions.enableerrors
URL: /en/erm/framework/functions/enableerrors/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2014-2021-enableerrors
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.enableerrors 1 -->
## Purpose {#purpose}

Reads the last error flag, but this snapshot sets WOG_OPT_MUTE_ERRORS=TRUE again. Its comment promises to enable messages; the code does not. Restore explicitly with UN:P/FALSE or use a corrected library.

## Call contract {#signature}

```erm
!!FU(EnableErrors):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `requires-review`. The complete block in `lib/9999 era - stdlib.erm`, lines 2014–2021, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[TRUE](../../constants/universal/#const-true) · [WOG_OPT_LAST_ERROR](../../constants/wog-options/#const-wog-opt-last-error) · [WOG_OPT_MUTE_ERRORS](../../constants/wog-options/#const-wog-opt-mute-errors)
<!-- llm:end erm.framework.functions.enableerrors 1 -->

# EnterMouseEvent

ID: erm.framework.functions.entermouseevent
URL: /en/erm/framework/functions/entermouseevent/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-165-170-entermouseevent
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.entermouseevent 1 -->
## Purpose {#purpose}

Saves previous keyboard/mouse context, then reads modifiers and CM for the new event.

## Call contract {#signature}

```erm
!!FU(EnterMouseEvent):P;
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[CollectMouseEventData](../collectmouseeventdata/) · [GetKeyModsState](../getkeymodsstate/) · [SavePrevKeyModsState](../saveprevkeymodsstate/) · [SavePrevMouseEventData](../saveprevmouseeventdata/)

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 165–170, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.entermouseevent 1 -->

# EquipArtToSlot

ID: erm.framework.functions.equiparttoslot
URL: /en/erm/framework/functions/equiparttoslot/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3170-3190-equiparttoslot
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.equiparttoslot 1 -->
## Purpose {#purpose}

Equips an artifact in a doll slot or auto-selects for NO_ART_SLOT. Returns TRUE/FALSE and fires OnEquipArt. Does not write arbitrary backpack slots.

## Call contract {#signature}

```erm
!!FU(EquipArtToSlot):P(hero)/(art)/(artMod)/(slot)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `hero` | input |
| x2 | `art` | output / mutable |
| x3 | `artMod` | input |
| x4 | `slot` | input |
| x5 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3170–3190, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ART_SLOT_MISC_5](../../constants/hero-artifact-slots/#const-art-slot-misc-5) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [FALSE](../../constants/universal/#const-false) · [GAME_MANAGER](../../constants/game-managers/#const-game-manager) · [NO_ART_MOD](../../constants/artfiact-modifiers/#const-no-art-mod) · [NO_ART_SLOT](../../constants/hero-artifact-slots/#const-no-art-slot) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.equiparttoslot 1 -->

# FileExists

ID: erm.framework.functions.fileexists
URL: /en/erm/framework/functions/fileexists/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1554-1565-fileexists
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.fileexists 1 -->
## Purpose {#purpose}

Checks path attributes and returns TRUE only for the requested kind: FileExists for files, DirExists for directories. Access failure also returns FALSE.

## Call contract {#signature}

```erm
!!FU(FileExists):P(filePathPtr)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `GetFileAttributesA`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1554–1565, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [FILE_ATTRIBUTE_DIRECTORY](../../constants/win32-api/#const-file-attribute-directory) · [INVALID_FILE_ATTRIBUTES](../../constants/win32-api/#const-invalid-file-attributes) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.fileexists 1 -->

# FormatQuantity

ID: erm.framework.functions.formatquantity
URL: /en/erm/framework/functions/formatquantity/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1533-1553-formatquantity
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.formatquantity 1 -->
## Purpose {#purpose}

Formats a quantity with locale settings and K/M/G suffixes. maxLen defaults to 5 logical characters and maxDigits to 4; negative values are supported.

## Call contract {#signature}

```erm
!!FU(FormatQuantity):P(value)/(resultPtr)/(maxLen)/(maxDigits);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `value` | input |
| x2 | `resultPtr` | output / mutable |
| x3 | `maxLen` | output / mutable |
| x4 | `maxDigits` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `FormatQuantity`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1533–1553, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[SIZEOF_ZSTR](../../constants/data-types/#const-sizeof-zstr)
<!-- llm:end erm.framework.functions.formatquantity 1 -->

# GetArtAtSlot

ID: erm.framework.functions.getartatslot
URL: /en/erm/framework/functions/getartatslot/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3111-3133-getartatslot
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getartatslot 1 -->
## Purpose {#purpose}

Returns artifact ID and modifier for a hero slot, including backpack slots. Handle NO_ART for an empty slot.

## Call contract {#signature}

```erm
!!FU(GetArtAtSlot):P(hero)/(slot)/(artId)/(artMod);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `hero` | input |
| x2 | `slot` | input |
| x3 | `artId` | output / mutable |
| x4 | `artMod` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3111–3133, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ART_SLOT_EQUIPPED_FIRST](../../constants/hero-artifact-slots/#const-art-slot-equipped-first) · [ART_SLOT_EQUIPPED_LAST](../../constants/hero-artifact-slots/#const-art-slot-equipped-last) · [ART_SLOT_FIRST](../../constants/hero-artifact-slots/#const-art-slot-first) · [ART_SLOT_LAST](../../constants/hero-artifact-slots/#const-art-slot-last) · [CURRENT_HERO](../../constants/heroes/#const-current-hero) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.getartatslot 1 -->

# GetDegradedMonCandidates

ID: erm.framework.functions.getdegradedmoncandidates
URL: /en/erm/framework/functions/getdegradedmoncandidates/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3038-3054-getdegradedmoncandidates
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getdegradedmoncandidates 1 -->
## Purpose {#purpose}

Scans all supported types and returns a local array of creatures upgrading to monId. Multiple candidates are possible; a full scan is expensive with extended limits.

## Call contract {#signature}

```erm
!!FU(GetDegradedMonCandidates):P(monId)/(degradesList);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `monId` | input |
| x2 | `degradesList` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ExtendArrayLifetime`.

## Related functions {#calls}

[GetMaxMonsterId](../getmaxmonsterid/) · [GetUpgradedMonster](../getupgradedmonster/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3038–3054, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[MON_FIRST](../../constants/monsters/#const-mon-first) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
<!-- llm:end erm.framework.functions.getdegradedmoncandidates 1 -->

# GetHeroPortraitName

ID: erm.framework.functions.getheroportraitname
URL: /en/erm/framework/functions/getheroportraitname/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3062-3080-getheroportraitname
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getheroportraitname 1 -->
## Purpose {#purpose}

Returns current small/large portrait filenames for a hero. Reads the structure table by ID; validate the range first.

## Call contract {#signature}

```erm
!!FU(GetHeroPortraitName):P(heroId)/(small)/(large);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `heroId` | input |
| x2 | `small` | input |
| x3 | `large` | input |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp).

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3062–3080, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.getheroportraitname 1 -->

# GetHeroPrimarySkillsWithoutArts

ID: erm.framework.functions.getheroprimaryskillswithoutarts
URL: /en/erm/framework/functions/getheroprimaryskillswithoutarts/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3081-3110-getheroprimaryskillswithoutarts
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getheroprimaryskillswithoutarts 1 -->
## Purpose {#purpose}

Temporarily removes 19 equipped artifacts, reads HE:F, then re-equips them. Fires OnUnequipArt/OnEquipArt; this operation has event side effects.

## Call contract {#signature}

```erm
!!FU(GetHeroPrimarySkillsWithoutArts):P(hero)/(attack)/(defense)/(power)/(knowledge);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `hero` | input |
| x2 | `attack` | output / mutable |
| x3 | `defense` | output / mutable |
| x4 | `power` | output / mutable |
| x5 | `knowledge` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EquipArtToSlot](../equiparttoslot/) · [GetArtAtSlot](../getartatslot/) · [UnequipArtFromSlot](../unequipartfromslot/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3081–3110, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ART_ARTIFACT_LOCK](../../constants/artifacts/#const-art-artifact-lock) · [ART_HIGHLIGHTED_SLOT](../../constants/artifacts/#const-art-highlighted-slot) · [CURRENT_HERO](../../constants/heroes/#const-current-hero) · [NO_ART](../../constants/artifacts/#const-no-art)
<!-- llm:end erm.framework.functions.getheroprimaryskillswithoutarts 1 -->

# GetKeyModsState

ID: erm.framework.functions.getkeymodsstate
URL: /en/erm/framework/functions/getkeymodsstate/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-94-128-getkeymodsstate, windows-api:getkeystate
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getkeymodsstate 1 -->
## Purpose {#purpose}

Polls left/right Alt, Ctrl and Shift with GetKeyState and updates key_*; each combined flag is the OR of both sides.

## Call contract {#signature}

```erm
!!FU(GetKeyModsState):P;
```

## State and dependencies {#context}

Named globals: [i^key_leftAlt^](../../globals/#global-i-key-leftalt) · [i^key_rightAlt^](../../globals/#global-i-key-rightalt) · [i^key_alt^](../../globals/#global-i-key-alt) · [i^key_leftCtrl^](../../globals/#global-i-key-leftctrl) · [i^key_rightCtrl^](../../globals/#global-i-key-rightctrl) · [i^key_ctrl^](../../globals/#global-i-key-ctrl) · [i^key_leftShift^](../../globals/#global-i-key-leftshift) · [i^key_rightShift^](../../globals/#global-i-key-rightshift) · [i^key_shift^](../../globals/#global-i-key-shift).

Export calls: `DisableErmTracking`, `GetKeyState`, `RestoreErmTracking`.

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 94–128, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[KEY_LCONTROL](../../constants/key-codes/#const-key-lcontrol) · [KEY_LMENU](../../constants/key-codes/#const-key-lmenu) · [KEY_LSHIFT](../../constants/key-codes/#const-key-lshift) · [KEY_RCONTROL](../../constants/key-codes/#const-key-rcontrol) · [KEY_RMENU](../../constants/key-codes/#const-key-rmenu) · [KEY_RSHIFT](../../constants/key-codes/#const-key-rshift)

Source discrepancy: the implementation tests GetKeyState with `d>>7`, whereas WinAPI returns a SHORT with the pressed flag in bit 15. Do not treat that fragment as a validated key test; see the [corrected example](../../../examples/sn-e/) and [Microsoft contract](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getkeystate).
<!-- llm:end erm.framework.functions.getkeymodsstate 1 -->

# GetMaxArtifactId

ID: erm.framework.functions.getmaxartifactid
URL: /en/erm/framework/functions/getmaxartifactid/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3199-3208-getmaxartifactid
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getmaxartifactid 1 -->
## Purpose {#purpose}

This snapshot simply returns ART_LAST_WOG. Despite its comment about extensions, it does not query a dynamic plugin limit.

## Call contract {#signature}

```erm
!!FU(GetMaxArtifactId):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3199–3208, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ART_LAST_WOG](../../constants/artifacts/#const-art-last-wog)
<!-- llm:end erm.framework.functions.getmaxartifactid 1 -->

# GetMaxHeroId

ID: erm.framework.functions.getmaxheroid
URL: /en/erm/framework/functions/getmaxheroid/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3055-3061-getmaxheroid
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getmaxheroid 1 -->
## Purpose {#purpose}

Reads the engine limit and subtracts 1. The last supported ID does not mean every slot contains a configured entity.

## Call contract {#signature}

```erm
!!FU(GetMaxHeroId):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3055–3061, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.getmaxheroid 1 -->

# GetMaxMonsterId

ID: erm.framework.functions.getmaxmonsterid
URL: /en/erm/framework/functions/getmaxmonsterid/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3020-3027-getmaxmonsterid
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getmaxmonsterid 1 -->
## Purpose {#purpose}

Reads the engine limit and subtracts 1. The last supported ID does not mean every slot contains a configured entity.

## Call contract {#signature}

```erm
!!FU(GetMaxMonsterId):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3020–3027, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.getmaxmonsterid 1 -->

# GetMaxSpellId

ID: erm.framework.functions.getmaxspellid
URL: /en/erm/framework/functions/getmaxspellid/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3209-3216-getmaxspellid
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getmaxspellid 1 -->
## Purpose {#purpose}

Returns SPELL_LAST_WOG, not a dynamic limit from a spell-expansion plugin.

## Call contract {#signature}

```erm
!!FU(GetMaxSpellId):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3209–3216, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[SPELL_LAST_WOG](../../constants/spells/#const-spell-last-wog)
<!-- llm:end erm.framework.functions.getmaxspellid 1 -->

# GetModList

ID: erm.framework.functions.getmodlist
URL: /en/erm/framework/functions/getmodlist/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1932-1986-getmodlist
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getmodlist 1 -->
## Purpose {#purpose}

Returns a local array of active VFS mods. toLower and reverse default to FALSE. With zero mods the output is not initialized; initialize it to NULL and check it.

## Call contract {#signature}

```erm
!!FU(GetModList):P(arrayId)/(toLower)/(reverse);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `arrayId` | output / mutable |
| x2 | `toLower` | output / mutable |
| x3 | `reverse` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ExtendArrayLifetime`, `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[Array_Revert](../array-revert/) · [NewStrArray](../newstrarray/) · [StrToLower](../strtolower/) · [Substr](../substr/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1932–1986, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_STDCALL](../../constants/calling-conventions/#const-callconv-stdcall) · [FALSE](../../constants/universal/#const-false) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int)
<!-- llm:end erm.framework.functions.getmodlist 1 -->

