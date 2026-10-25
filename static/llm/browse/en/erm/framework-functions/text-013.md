# ScanDir

ID: erm.framework.functions.scandir
URL: /en/erm/framework/functions/scandir/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1870-1931-scandir
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.scandir 1 -->
## Purpose {#purpose}

Clears a supplied string array and fills names excluding . and ... itemsType is SCAN_* (files and directories by default); fullPaths prefixes the path (FALSE). The early exit after FindFirstFileA does not restore v1 in this snapshot.

## Call contract {#signature}

```erm
!!FU(ScanDir):P(dirPathPtr)/(fileList)/(itemsType)/(fullPaths);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dirPathPtr` | input |
| x2 | `fileList` | input |
| x3 | `itemsType` | input |
| x4 | `fullPaths` | input |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!VR(savedV1:y):Sv1;
!#VA(foundData[SIZEOF_WIN32_FIND_DATA_IN_INTS]:y);

!!SN:M(fileList)/0;

!!SN:B?(foundData)/?(foundDataAddr:y);
!!VR(fileAttrsAddr:y):S(foundDataAddr) +(STRUCT_WIN32_FIND_DATA_ATTRS);
!!VR(fileNameBuf:y):S(foundDataAddr) +(STRUCT_WIN32_FIND_DATA_FILENAME);

!!SN:F^`.

Export calls: `FindClose`, `FindFirstFileA`, `FindNextFileA`, `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1870–1931, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [FILE_ATTRIBUTE_DIRECTORY](../../constants/win32-api/#const-file-attribute-directory) · [INVALID_HANDLE_VALUE](../../constants/win32-api/#const-invalid-handle-value) · [M_STR](../../constants/erm-commands/#const-m-str) · [SCAN_DIRS_ONLY](../../constants/special-enums/#const-scan-dirs-only) · [SCAN_FILES_ONLY](../../constants/special-enums/#const-scan-files-only) · [STRUCT_WIN32_FIND_DATA_ATTRS](../../constants/game-structures/#const-struct-win32-find-data-attrs) · [STRUCT_WIN32_FIND_DATA_FILENAME](../../constants/game-structures/#const-struct-win32-find-data-filename) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.scandir 1 -->

# ShowAnimatedDefDlg

ID: erm.framework.functions.showanimateddefdlg
URL: /en/erm/framework/functions/showanimateddefdlg/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2756-2766-showanimateddefdlg
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.showanimateddefdlg 1 -->
## Purpose {#purpose}

Shows an OK message with an animated DEF. With an absent/empty DEF name, uses ordinary IF:M1.

## Call contract {#signature}

```erm
!!FU(ShowAnimatedDefDlg):P(textPtr)/(defNamePtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `textPtr` | input |
| x2 | `defNamePtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2756–2766, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl)
<!-- llm:end erm.framework.functions.showanimateddefdlg 1 -->

# SplitMix32

ID: erm.framework.functions.splitmix32
URL: /en/erm/framework/functions/splitmix32/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1376-1410-splitmix32
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.splitmix32 1 -->
## Purpose {#purpose}

P?seed/?result yields an int32; P?seed/min/max/?result yields an inclusive-range value. Seed changes and must use ?. Does not use the ordinary VR:R state.

## Call contract {#signature}

```erm
!!FU(SplitMix32):P(seed)/(min)/(max)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `seed` | output / mutable |
| x2 | `min` | input |
| x3 | `max` | input |
| x4 | `result` | input |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!if&(numArgs)=2;
  !!VR(minValue:y):S(INT_MIN);
  !!VR(maxValue:y):S(INT_MAX);
  !!VR(resultPtr:y):S(@min);
!!el;
  !!VR(minValue:y):S(min);
  !!VR(maxValue:y):S(max);
  !!VR(resultPtr:y):S(@result);
!!en;

!!VR(savedV1:y):Sv1;
!!SN:F^`.

Export calls: `ShowErmError`, `SplitMix32`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1376–1410, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[INT_MAX](../../constants/data-types/#const-int-max) · [INT_MIN](../../constants/data-types/#const-int-min)
<!-- llm:end erm.framework.functions.splitmix32 1 -->

# Sqrt

ID: erm.framework.functions.sqrt
URL: /en/erm/framework/functions/sqrt/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1173-1179-sqrt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.sqrt 1 -->
## Purpose {#purpose}

Float square root. Input/output are floating point and e1 changes. Negative inputs have no real square root.

## Call contract {#signature}

```erm
!!FU(Sqrt):P(value)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `value` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `.Erm_Sqrt`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1173–1179, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.sqrt 1 -->

# StrPos

ID: erm.framework.functions.strpos
URL: /en/erm/framework/functions/strpos/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1486-1497-strpos
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.strpos 1 -->
## Purpose {#purpose}

Finds the first needlePtr in haystackPtr from offset (default 0). Returns a zero-based offset or -1.

## Call contract {#signature}

```erm
!!FU(StrPos):P(haystackPtr)/(needlePtr)/(result)/(offset);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `haystackPtr` | input |
| x2 | `needlePtr` | input |
| x3 | `result` | output / mutable |
| x4 | `offset` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_StrPos`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1486–1497, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.strpos 1 -->

# StrReplace

ID: erm.framework.functions.strreplace
URL: /en/erm/framework/functions/strreplace/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1498-1510-strreplace
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.strreplace 1 -->
## Purpose {#purpose}

Replaces all patternPtr occurrences in sourcePtr with replacementPtr and returns a string. Call only inside a trigger.

## Call contract {#signature}

```erm
!!FU(StrReplace):P(sourcePtr)/(patternPtr)/(replacementPtr)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `sourcePtr` | input |
| x2 | `patternPtr` | input |
| x3 | `replacementPtr` | input |
| x4 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_StrReplace`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1498–1510, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.strreplace 1 -->

# StrToLower

ID: erm.framework.functions.strtolower
URL: /en/erm/framework/functions/strtolower/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1458-1472-strtolower
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.strtolower 1 -->
## Purpose {#purpose}

Creates an upper/lower-case string with CharUpperA/CharLowerA. This is Windows ANSI conversion, not general Unicode normalization.

## Call contract {#signature}

```erm
!!FU(StrToLower):P(strPtr)/(resultPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `strPtr` | input |
| x2 | `resultPtr` | output / mutable |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp).

Export calls: `CharLowerA`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1458–1472, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_STR](../../constants/erm-commands/#const-m-str) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
<!-- llm:end erm.framework.functions.strtolower 1 -->

# StrToUpper

ID: erm.framework.functions.strtoupper
URL: /en/erm/framework/functions/strtoupper/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1443-1457-strtoupper
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.strtoupper 1 -->
## Purpose {#purpose}

Creates an upper/lower-case string with CharUpperA/CharLowerA. This is Windows ANSI conversion, not general Unicode normalization.

## Call contract {#signature}

```erm
!!FU(StrToUpper):P(strPtr)/(resultPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `strPtr` | input |
| x2 | `resultPtr` | output / mutable |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp).

Export calls: `CharUpperA`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1443–1457, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_STR](../../constants/erm-commands/#const-m-str) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
<!-- llm:end erm.framework.functions.strtoupper 1 -->

# Substr

ID: erm.framework.functions.substr
URL: /en/erm/framework/functions/substr/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1473-1485-substr
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.substr 1 -->
## Purpose {#purpose}

Returns a substring: start is zero-based or end-relative when negative; count is a length, or a trailing exclusion when negative.

## Call contract {#signature}

```erm
!!FU(Substr):P(strPtr)/(start)/(count)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `strPtr` | input |
| x2 | `start` | input |
| x3 | `count` | input |
| x4 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `Erm_Substr`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1473–1485, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.substr 1 -->

# Tm32Decode

ID: erm.framework.functions.tm32decode
URL: /en/erm/framework/functions/tm32decode/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1342-1349-tm32decode
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.tm32decode 1 -->
## Purpose {#purpose}

Inverts Tm32Encode for a 32-bit value. Changes f and g.

## Call contract {#signature}

```erm
!!FU(Tm32Decode):P(value)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `value` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1342–1349, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.tm32decode 1 -->

# Tm32Encode

ID: erm.framework.functions.tm32encode
URL: /en/erm/framework/functions/tm32encode/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1334-1341-tm32encode
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.tm32encode 1 -->
## Purpose {#purpose}

Reversible 32-bit mixing, inverted by Tm32Decode. Changes fast variables f and g. This is not encryption.

## Call contract {#signature}

```erm
!!FU(Tm32Encode):P(value)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `value` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1334–1341, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.tm32encode 1 -->

# Trim

ID: erm.framework.functions.trim
URL: /en/erm/framework/functions/trim/
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
URL: /en/erm/framework/functions/unequipartfromslot/
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
URL: /en/erm/framework/functions/unpackunion/
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
URL: /en/erm/framework/functions/updatebattlevars/
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

