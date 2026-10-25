# Trim

ID: erm.framework.functions.trim
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/trim/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1411-1420-trim
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.trim 1 -->
## Purpose {#purpose}

Trims spaces and control bytes 0..32 from both ends; returns a new ERM string.

## Call contract {#signature}

```erm
!!FU(Trim):P(strPtr)/(resultPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `strPtr` | input |
| x2 | `resultPtr` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_StrTrim`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1411–1420, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.trim 1 -->

# UnequipArtFromSlot

ID: erm.framework.functions.unequipartfromslot
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/unequipartfromslot/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3191-3198-unequipartfromslot
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.unequipartfromslot 1 -->
## Purpose {#purpose}

Unequips a doll slot and fires OnUnequipArt. Save artifact IDs/modifiers yourself when temporarily removing equipment.

## Call contract {#signature}

```erm
!!FU(UnequipArtFromSlot):P(hero)/(slot);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `hero` | input |
| x2 | `slot` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3191–3198, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall)
<!-- llm:end erm.framework.functions.unequipartfromslot 1 -->

# UnpackUnion

ID: erm.framework.functions.unpackunion
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/unpackunion/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1295-1333-unpackunion
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.unpackunion 1 -->
## Purpose {#purpose}

PackUnion takes value/width pairs and a final ?result; UnpackUnion takes packedValue and ?value/width pairs. Fields start at the low bit, totaling at most 32. Checks for widths 0 and 32 differ from the stated 1..32 contract; use positive fields below 32 bits and validate the total.

## Call contract {#signature}

```erm
!!FU(UnpackUnion):P(packedValue)/(firstFieldArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `packedValue` | input |
| x2 | `firstFieldArg` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1295–1333, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BITS_IN_INT32](../../constants/bit-sizes/#const-bits-in-int32)
<!-- llm:end erm.framework.functions.unpackunion 1 -->

# UpdateBattleVars

ID: erm.framework.functions.updatebattlevars
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/updatebattlevars/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2848-2904-updatebattlevars
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.updatebattlevars 1 -->
## Purpose {#purpose}

Refreshes BA/OW data in battle_*: heroes, owners, quick/network/visible combat and side flags. Call after changing BA except creature composition. Normalizes a missing defender hero to NO_HERO.

## Call contract {#signature}

```erm
!!FU(UpdateBattleVars):P;
```

## State and dependencies {#context}

Named globals: [i^battle_x^](../../globals/#global-i-battle-x) · [i^battle_y^](../../globals/#global-i-battle-y) · [i^battle_z^](../../globals/#global-i-battle-z) · [i^battle_hero_vs_hero^](../../globals/#global-i-battle-hero-vs-hero) · [i^battle_hasHuman^](../../globals/#global-i-battle-hashuman) · [i^battle_humanOnly^](../../globals/#global-i-battle-humanonly) · [i^battle_aiOnly^](../../globals/#global-i-battle-aionly) · [i^battle_isQuick^](../../globals/#global-i-battle-isquick) · [i^battle_isVisible^](../../globals/#global-i-battle-isvisible) · [i^battle_isNetwork^](../../globals/#global-i-battle-isnetwork) · [i^battle_type^](../../globals/#global-i-battle-type) · [i^battle_owner_0^](../../globals/#global-i-battle-owner-0) · [i^battle_hero_0^](../../globals/#global-i-battle-hero-0) · [i^battle_ai_0^](../../globals/#global-i-battle-ai-0) · [i^battle_human_0^](../../globals/#global-i-battle-human-0) · [i^battle_remote_0^](../../globals/#global-i-battle-remote-0) · [i^battle_local_0^](../../globals/#global-i-battle-local-0) · [i^battle_localHuman_0^](../../globals/#global-i-battle-localhuman-0) · [i^battle_owner_1^](../../globals/#global-i-battle-owner-1) · [i^battle_hero_1^](../../globals/#global-i-battle-hero-1) · [i^battle_ai_1^](../../globals/#global-i-battle-ai-1) · [i^battle_human_1^](../../globals/#global-i-battle-human-1) · [i^battle_remote_1^](../../globals/#global-i-battle-remote-1) · [i^battle_local_1^](../../globals/#global-i-battle-local-1) · [i^battle_localHuman_1^](../../globals/#global-i-battle-localhuman-1).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2848–2904, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BATTLE_TYPE_FLAG_LEFT_HAS_HERO](../../constants/battle-type-flags/#const-battle-type-flag-left-has-hero) · [BATTLE_TYPE_FLAG_LEFT_HAS_OWNER](../../constants/battle-type-flags/#const-battle-type-flag-left-has-owner) · [BATTLE_TYPE_FLAG_LEFT_IS_HUMAN](../../constants/battle-type-flags/#const-battle-type-flag-left-is-human) · [BATTLE_TYPE_FLAG_RIGHT_HAS_HERO](../../constants/battle-type-flags/#const-battle-type-flag-right-has-hero) · [BATTLE_TYPE_FLAG_RIGHT_HAS_OWNER](../../constants/battle-type-flags/#const-battle-type-flag-right-has-owner) · [BATTLE_TYPE_FLAG_RIGHT_IS_HUMAN](../../constants/battle-type-flags/#const-battle-type-flag-right-is-human) · [FALSE](../../constants/universal/#const-false) · [HERO_FIRST](../../constants/heroes/#const-hero-first) · [NO_DEFENDING_HERO](../../constants/heroes/#const-no-defending-hero) · [NO_HERO](../../constants/heroes/#const-no-hero) · [NO_OWNER](../../constants/players/#const-no-owner) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.updatebattlevars 1 -->

# WriteIniInts

ID: erm.framework.functions.writeiniints
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/writeiniints/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1630-1662-writeiniints
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.writeiniints 1 -->
## Purpose {#purpose}

Takes up to 7 key/value pairs after the path and section. Writes only to cache; call SaveIni. WriteIniInts formats decimal text, while WriteIniStrings takes string values.

## Call contract {#signature}

```erm
!!FU(WriteIniInts):P(filePathPtr)/(sectionNamePtr)/(firstKeyPtr)/(firstValue);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |
| x2 | `sectionNamePtr` | input |
| x3 | `firstKeyPtr` | input |
| x4 | `firstValue` | input |

## State and dependencies {#context}

Named globals: —.
!#VA(filePathPtr:x);    Absolute or relative path to ini file
!#VA(sectionNamePtr:x); Section name in ini file.
!#VA(firstKeyPtr:x);    ... Up to 7 key, value pairs to write.
!#VA(firstValue:x);

!!FU:A?(numArgs:y);

!!if&(numArgs)<(@firstValue);
  !!SN:F^`, `s^;
  !!FU:E;
!!en;

!!VR(numKeyValueArgs:y):S(numArgs) -(@firstKeyPtr) +1;
!!VR(numPairs:y):S(numKeyValueArgs) :2;

!!VRt:S(numKeyValueArgs) %2;

!!if&t<>0;
  !!SN:F^`.

Export calls: `ShowErmError`, `WriteStrToIni`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1630–1662, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[HERO_ORRIN](../../constants/heroes/#const-hero-orrin) · [HERO_XERON](../../constants/heroes/#const-hero-xeron)
<!-- llm:end erm.framework.functions.writeiniints 1 -->

# WriteIniStrings

ID: erm.framework.functions.writeinistrings
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/writeinistrings/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1663-1696-writeinistrings
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.writeinistrings 1 -->
## Purpose {#purpose}

Takes up to 7 key/value pairs after the path and section. Writes only to cache; call SaveIni. WriteIniInts formats decimal text, while WriteIniStrings takes string values.

## Call contract {#signature}

```erm
!!FU(WriteIniStrings):P(filePathPtr)/(sectionNamePtr)/(firstKeyPtr)/(firstValue);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |
| x2 | `sectionNamePtr` | input |
| x3 | `firstKeyPtr` | input |
| x4 | `firstValue` | input |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!VR(numKeyValueArgs:y):S(numArgs) -(@firstKeyPtr) +1;
!!VR(numPairs:y):S(numKeyValueArgs) :2;

!!VRt:S(numKeyValueArgs) %2;

!!if&t<>0;
  !!SN:F^`.

Export calls: `ShowErmError`, `WriteStrToIni`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1663–1696, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[HERO_ORRIN](../../constants/heroes/#const-hero-orrin) · [HERO_XERON](../../constants/heroes/#const-hero-xeron)
<!-- llm:end erm.framework.functions.writeinistrings 1 -->

