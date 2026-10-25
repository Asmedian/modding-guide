# SaveEventData

ID: erm.framework.functions.saveeventdata
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/saveeventdata/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-16-46-saveeventdata
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.saveeventdata 1 -->
## Purpose {#purpose}

Pushes integer arguments onto the event stack. RestoreEventData must receive the same number of outputs in the same order. A zero-argument call exits before RestoreErmTracking.

## Call contract {#signature}

```erm
!!FU(SaveEventData):P(firstArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `firstArg` | input |

## State and dependencies {#context}

Named globals: [i^savedEventData^](../../globals/#global-i-savedeventdata) · [i^savedEventDataPos^](../../globals/#global-i-savedeventdatapos).

Export calls: `DisableErmTracking`, `RestoreErmTracking`.

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 16–46, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.saveeventdata 1 -->

# SaveGame

ID: erm.framework.functions.savegame
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/savegame/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1987-2009-savegame
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.savegame 1 -->
## Purpose {#purpose}

Saves using a name without extension. Defaults: appendExtension=TRUE, compressFile=TRUE, saveToData=FALSE, markInList=TRUE. Calls the native save address and may change the dialog selection.

## Call contract {#signature}

```erm
!!FU(SaveGame):P(fileNamePtr)/(appendExtension)/(compressFile)/(saveToData)/(markInList);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `fileNamePtr` | input |
| x2 | `appendExtension` | output / mutable |
| x3 | `compressFile` | output / mutable |
| x4 | `saveToData` | input |
| x5 | `markInList` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `lstrcpyA`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1987–2009, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ADDR_MARKED_SAVEGAME_NAME](../../constants/useful-addresses/#const-addr-marked-savegame-name) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [FALSE](../../constants/universal/#const-false) · [GAME_MANAGER](../../constants/game-managers/#const-game-manager) · [TRUE](../../constants/universal/#const-true) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.savegame 1 -->

# SaveIni

ID: erm.framework.functions.saveini
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/saveini/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1613-1620-saveini
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.saveini 1 -->
## Purpose {#purpose}

Writes the INI cache to disk and creates parent directories. Loads the original file first if no cache exists.

## Call contract {#signature}

```erm
!!FU(SaveIni):P(filePathPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `SaveIni`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1613–1620, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.saveini 1 -->

# SavePrevKeyModsState

ID: erm.framework.functions.saveprevkeymodsstate
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/saveprevkeymodsstate/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-88-90-saveprevkeymodsstate
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.saveprevkeymodsstate 1 -->
## Purpose {#purpose}

Saves 11 key and modifier globals for a nested event.

## Call contract {#signature}

```erm
!!FU(SavePrevKeyModsState):P;
```

## State and dependencies {#context}

Named globals: [i^key^](../../globals/#global-i-key) · [i^key_down^](../../globals/#global-i-key-down) · [i^key_leftAlt^](../../globals/#global-i-key-leftalt) · [i^key_rightAlt^](../../globals/#global-i-key-rightalt) · [i^key_alt^](../../globals/#global-i-key-alt) · [i^key_leftCtrl^](../../globals/#global-i-key-leftctrl) · [i^key_rightCtrl^](../../globals/#global-i-key-rightctrl) · [i^key_ctrl^](../../globals/#global-i-key-ctrl) · [i^key_leftShift^](../../globals/#global-i-key-leftshift) · [i^key_rightShift^](../../globals/#global-i-key-rightshift) · [i^key_shift^](../../globals/#global-i-key-shift).

## Related functions {#calls}

[SaveEventData](../saveeventdata/)

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 88–90, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.saveprevkeymodsstate 1 -->

# SavePrevMouseEventData

ID: erm.framework.functions.saveprevmouseeventdata
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/saveprevmouseeventdata/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-139-141-saveprevmouseeventdata
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.saveprevmouseeventdata 1 -->
## Purpose {#purpose}

Saves/restores ten mouse_* values. mouse_hero_1 and dlg_action are not included, so the pair does not restore the entire context.

## Call contract {#signature}

```erm
!!FU(SavePrevMouseEventData):P;
```

## State and dependencies {#context}

Named globals: [i^mouse_x^](../../globals/#global-i-mouse-x) · [i^mouse_y^](../../globals/#global-i-mouse-y) · [i^mouse_battleHex^](../../globals/#global-i-mouse-battlehex) · [i^mouse_flags^](../../globals/#global-i-mouse-flags) · [i^mouse_hero_0^](../../globals/#global-i-mouse-hero-0) · [i^mouse_item^](../../globals/#global-i-mouse-item) · [i^mouse_mapX^](../../globals/#global-i-mouse-mapx) · [i^mouse_mapY^](../../globals/#global-i-mouse-mapy) · [i^mouse_mapZ^](../../globals/#global-i-mouse-mapz) · [i^mouse_action^](../../globals/#global-i-mouse-action).

## Related functions {#calls}

[SaveEventData](../saveeventdata/)

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 139–141, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.saveprevmouseeventdata 1 -->

# ScanDir

ID: erm.framework.functions.scandir
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/scandir/
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
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/showanimateddefdlg/
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
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/splitmix32/
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
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/sqrt/
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
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/strpos/
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
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/strreplace/
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
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/strtolower/
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
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/strtoupper/
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
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/substr/
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
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/tm32decode/
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
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/tm32encode/
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

