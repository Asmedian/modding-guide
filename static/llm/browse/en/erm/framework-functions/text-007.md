# GetMaxSpellId

ID: erm.framework.functions.getmaxspellid
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/getmaxspellid/
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
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/getmodlist/
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

# GetProcessGuid

ID: erm.framework.functions.getprocessguid
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/getprocessguid/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2926-2935-getprocessguid
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getprocessguid 1 -->
## Purpose {#purpose}

Returns a 32-character identifier for this game-process run. Distinguishes a restart from loading a save in the same process.

## Call contract {#signature}

```erm
!!FU(GetProcessGuid):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `GetProcessGuid`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2926–2935, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.getprocessguid 1 -->

# GetStrAtAddr

ID: erm.framework.functions.getstrataddr
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/getstrataddr/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1421-1430-getstrataddr
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getstrataddr 1 -->
## Purpose {#purpose}

Copies a null-terminated string at strAddr into an output ERM string; NULL yields empty text. Non-null memory must be readable.

## Call contract {#signature}

```erm
!!FU(GetStrAtAddr):P(strAddr)/(resultPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `strAddr` | input |
| x2 | `resultPtr` | output / mutable |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp) · [s^result^](../../globals/#global-s-result).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1421–1430, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.getstrataddr 1 -->

# GetTextFileString

ID: erm.framework.functions.gettextfilestring
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/gettextfilestring/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3217-3284-gettextfilestring
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.gettextfilestring 1 -->
## Purpose {#purpose}

Reads a zero-based row from loaded randtvrn, arraytxt, genrltxt, tcommand, artevent, crgen1, crgen4, dwelling, minename, objnames, towntype, plcolors, priskill, restypes, skilllev, advevent resources. Normalizes the name; unknown names return Wrong txt filename!. Does not validate row bounds.

## Call contract {#signature}

```erm
!!FU(GetTextFileString):P(txtFilename)/(rowIndex)/(string);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `txtFilename` | input |
| x2 | `rowIndex` | input |
| x3 | `string` | output / mutable |

## State and dependencies {#context}

Named globals: —.
  !!VR(address):S6968208;               [resources]
!!el&(text)=^`, `s^;
  !!VR(address):S6974640;               [object names]
; Special treatment for town type names
!!el&(text)=^`, `s^;
  !!VR(address):S6976900;               [player colour]
!!el&(text)=^`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[StrToLower](../strtolower/) · [Substr](../substr/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3217–3284, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.gettextfilestring 1 -->

# GetTextTableString

ID: erm.framework.functions.gettexttablestring
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/gettexttablestring/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3285-3320-gettexttablestring
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.gettexttablestring 1 -->
## Purpose {#purpose}

Reads a bldgspec, help, or znpc00 cell by rowIndex/colIndex. Despite the “get or set” comment, this snapshot has no write branch. The caller must validate indices.

## Call contract {#signature}

```erm
!!FU(GetTextTableString):P(txtFilename)/(rowIndex)/(colIndex)/(string);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `txtFilename` | input |
| x2 | `rowIndex` | input |
| x3 | `colIndex` | input |
| x4 | `string` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[StrToLower](../strtolower/) · [Substr](../substr/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3285–3320, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl)
<!-- llm:end erm.framework.functions.gettexttablestring 1 -->

# GetTimeMsec

ID: erm.framework.functions.gettimemsec
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/gettimemsec/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2914-2925-gettimemsec
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.gettimemsec 1 -->
## Purpose {#purpose}

Returns milliseconds since OS startup via timeGetTime. The 32-bit counter wraps after about 49.71 days; it is not the in-game date.

## Call contract {#signature}

```erm
!!FU(GetTimeMsec):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2914–2925, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_STDCALL](../../constants/calling-conventions/#const-callconv-stdcall) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.gettimemsec 1 -->

# GetUpgradedMonster

ID: erm.framework.functions.getupgradedmonster
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/getupgradedmonster/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3028-3037-getupgradedmonster
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.getupgradedmonster 1 -->
## Purpose {#purpose}

Returns the creature upgrade or NO_MON (-1) when absent.

## Call contract {#signature}

```erm
!!FU(GetUpgradedMonster):P(monId)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `monId` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3028–3037, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_FASTCALL](../../constants/calling-conventions/#const-callconv-fastcall)
<!-- llm:end erm.framework.functions.getupgradedmonster 1 -->

# H3Dlg_CenterAtMouse

ID: erm.framework.functions.h3dlg-centeratmouse
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/h3dlg-centeratmouse/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2088-2102-h3dlg-centeratmouse
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.h3dlg-centeratmouse 1 -->
## Purpose {#purpose}

Centers an existing dialog at the mouse. H3Dlg takes an address; DL takes an ID. The DL wrapper does not check NULL after lookup: create the dialog first.

## Call contract {#signature}

```erm
!!FU(H3Dlg_CenterAtMouse):P(h3Dlg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `h3Dlg` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2088–2102, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_STDCALL](../../constants/calling-conventions/#const-callconv-stdcall) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.h3dlg-centeratmouse 1 -->

# H3Dlg_Coords

ID: erm.framework.functions.h3dlg-coords
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/h3dlg-coords/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2038-2087-h3dlg-coords
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.h3dlg-coords 1 -->
## Purpose {#purpose}

Coordinates x/y support GET, SET and ADD. Position is clamped against screen size and shadow. H3Dlg_Coords takes an H3Dlg address; DL_Coords takes the ID of a dialog already created with DL:N.

## Call contract {#signature}

```erm
!!FU(H3Dlg_Coords):P(h3Dlg)/(x)/(y);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `h3Dlg` | input |
| x2 | `x` | output / mutable |
| x3 | `y` | output / mutable |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!if&(h3Dlg)=(NULL);
  !!SN:F^`.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2038–2087, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ADDR_GAME_SCREEN_HEIGHT](../../constants/useful-addresses/#const-addr-game-screen-height) · [ADDR_GAME_SCREEN_WIDTH](../../constants/useful-addresses/#const-addr-game-screen-width) · [ARG_SYNTAX_ADD](../../constants/erm-commands/#const-arg-syntax-add) · [ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get) · [DLG_BOX_SHADOW_WIDTH](../../constants/dialogs/#const-dlg-box-shadow-width) · [NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [STRUCT_H3DLG_X](../../constants/game-structures/#const-struct-h3dlg-x) · [STRUCT_H3DLG_Y](../../constants/game-structures/#const-struct-h3dlg-y) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int) · [UNC_INT16](../../constants/un-c-data-types/#const-unc-int16)
<!-- llm:end erm.framework.functions.h3dlg-coords 1 -->

# H3Dlg_DrawItemOnScreen

ID: erm.framework.functions.h3dlg-drawitemonscreen
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/h3dlg-drawitemonscreen/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2152-2166-h3dlg-drawitemonscreen
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.h3dlg-drawitemonscreen 1 -->
## Purpose {#purpose}

Draws itemId or the entire dialog for ALL_ITEMS. The H3Dlg object must exist.

## Call contract {#signature}

```erm
!!FU(H3Dlg_DrawItemOnScreen):P(h3Dlg)/(itemId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `h3Dlg` | input |
| x2 | `itemId` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2152–2166, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [NULL](../../constants/universal/#const-null)
<!-- llm:end erm.framework.functions.h3dlg-drawitemonscreen 1 -->

# H3Dlg_GetCurrentDlg

ID: erm.framework.functions.h3dlg-getcurrentdlg
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/h3dlg-getcurrentdlg/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2109-2114-h3dlg-getcurrentdlg
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.h3dlg-getcurrentdlg 1 -->
## Purpose {#purpose}

Returns the topmost dialog address or NULL. This address is not its DLG_* identifier.

## Call contract {#signature}

```erm
!!FU(H3Dlg_GetCurrentDlg):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2109–2114, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[UNC_INT](../../constants/un-c-data-types/#const-unc-int) · [WND_MANAGER](../../constants/game-managers/#const-wnd-manager)
<!-- llm:end erm.framework.functions.h3dlg-getcurrentdlg 1 -->

# H3Dlg_GetCurrentDlgId

ID: erm.framework.functions.h3dlg-getcurrentdlgid
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/h3dlg-getcurrentdlgid/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2115-2125-h3dlg-getcurrentdlgid
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.h3dlg-getcurrentdlgid 1 -->
## Purpose {#purpose}

Returns the top dialog identifier from its virtual table, comparable to DLG_*, or NULL.

## Call contract {#signature}

```erm
!!FU(H3Dlg_GetCurrentDlgId):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2115–2125, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NULL](../../constants/universal/#const-null) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int) · [WND_MANAGER](../../constants/game-managers/#const-wnd-manager)
<!-- llm:end erm.framework.functions.h3dlg-getcurrentdlgid 1 -->

# H3Dlg_GetRootDlg

ID: erm.framework.functions.h3dlg-getrootdlg
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/h3dlg-getrootdlg/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2103-2108-h3dlg-getrootdlg
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.h3dlg-getrootdlg 1 -->
## Purpose {#purpose}

Returns the root dialog address or NULL; usually the adventure map.

## Call contract {#signature}

```erm
!!FU(H3Dlg_GetRootDlg):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2103–2108, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[UNC_INT](../../constants/un-c-data-types/#const-unc-int) · [WND_MANAGER](../../constants/game-managers/#const-wnd-manager)
<!-- llm:end erm.framework.functions.h3dlg-getrootdlg 1 -->

# H3Dlg_ResumeAnimation

ID: erm.framework.functions.h3dlg-resumeanimation
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/h3dlg-resumeanimation/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2026-2029-h3dlg-resumeanimation
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.h3dlg-resumeanimation 1 -->
## Purpose {#purpose}

Stops/resumes current dialog animation through native functions. Keep calls balanced.

## Call contract {#signature}

```erm
!!FU(H3Dlg_ResumeAnimation):P;
```

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2026–2029, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.h3dlg-resumeanimation 1 -->

