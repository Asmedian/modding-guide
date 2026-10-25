# DeconstructBitMask

ID: erm.framework.functions.deconstructbitmask
URL: /en/erm/framework/functions/deconstructbitmask/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1224-1240-deconstructbitmask
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.deconstructbitmask 1 -->
## Purpose {#purpose}

Returns a new local integer array of set-bit positions 0..31, with lifetime extended to the caller context.

## Call contract {#signature}

```erm
!!FU(DeconstructBitMask):P(mask)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `mask` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ExtendArrayLifetime`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1224–1240, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
<!-- llm:end erm.framework.functions.deconstructbitmask 1 -->

# DecorateInt

ID: erm.framework.functions.decorateint
URL: /en/erm/framework/functions/decorateint/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1521-1532-decorateint
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.decorateint 1 -->
## Purpose {#purpose}

Formats an integer using era.locale.thousand_separator. ignoreSmallNumbers=DONT_DECORATE_SMALL_INTS leaves values up to 9999 ungrouped. Output is a string.

## Call contract {#signature}

```erm
!!FU(DecorateInt):P(value)/(resultPtr)/(ignoreSmallNumbers);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `value` | input |
| x2 | `resultPtr` | output / mutable |
| x3 | `ignoreSmallNumbers` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `DecorateInt`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1521–1532, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.decorateint 1 -->

# DeleteFile

ID: erm.framework.functions.deletefile
URL: /en/erm/framework/functions/deletefile/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1578-1588-deletefile
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.deletefile 1 -->
## Purpose {#purpose}

Deletes a file using DeleteFileA; TRUE means deletion succeeded. Does not delete directory trees.

## Call contract {#signature}

```erm
!!FU(DeleteFile):P(filePathPtr)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `DeleteFileA`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1578–1588, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.deletefile 1 -->

# DirExists

ID: erm.framework.functions.direxists
URL: /en/erm/framework/functions/direxists/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1566-1577-direxists
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.direxists 1 -->
## Purpose {#purpose}

Checks path attributes and returns TRUE only for the requested kind: FileExists for files, DirExists for directories. Access failure also returns FALSE.

## Call contract {#signature}

```erm
!!FU(DirExists):P(dirPathPtr)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dirPathPtr` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `GetFileAttributesA`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1566–1577, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [FILE_ATTRIBUTE_DIRECTORY](../../constants/win32-api/#const-file-attribute-directory) · [INVALID_FILE_ATTRIBUTES](../../constants/win32-api/#const-invalid-file-attributes) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.direxists 1 -->

# DisableErrors

ID: erm.framework.functions.disableerrors
URL: /en/erm/framework/functions/disableerrors/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2010-2013-disableerrors
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.disableerrors 1 -->
## Purpose {#purpose}

Enables WOG_OPT_MUTE_ERRORS and clears WOG_OPT_LAST_ERROR. Use only around a controlled operation.

## Call contract {#signature}

```erm
!!FU(DisableErrors):P;
```

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2010–2013, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [TRUE](../../constants/universal/#const-true) · [WOG_OPT_LAST_ERROR](../../constants/wog-options/#const-wog-opt-last-error) · [WOG_OPT_MUTE_ERRORS](../../constants/wog-options/#const-wog-opt-mute-errors)
<!-- llm:end erm.framework.functions.disableerrors 1 -->

# DL_AlignDlg

ID: erm.framework.functions.dl-aligndlg
URL: /en/erm/framework/functions/dl-aligndlg/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2290-2331-dl-aligndlg
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.dl-aligndlg 1 -->
## Purpose {#purpose}

Aligns an existing DL dialog using TEXT_ALIGN_* bits. CENTER/MIDDLE take precedence over RIGHT/BOTTOM.

## Call contract {#signature}

```erm
!!FU(DL_AlignDlg):P(dlgId)/(alignment);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |
| x2 | `alignment` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_FindById](../dl-findbyid/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2290–2331, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ADDR_GAME_SCREEN_HEIGHT](../../constants/useful-addresses/#const-addr-game-screen-height) · [ADDR_GAME_SCREEN_WIDTH](../../constants/useful-addresses/#const-addr-game-screen-width) · [FALSE](../../constants/universal/#const-false) · [NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [STRUCT_H3DLG_X](../../constants/game-structures/#const-struct-h3dlg-x) · [STRUCT_H3DLG_Y](../../constants/game-structures/#const-struct-h3dlg-y) · [TEXT_ALIGN_BOTTOM](../../constants/h3-dialog-text-alignment/#const-text-align-bottom) · [TEXT_ALIGN_CENTER](../../constants/h3-dialog-text-alignment/#const-text-align-center) · [TEXT_ALIGN_MIDDLE](../../constants/h3-dialog-text-alignment/#const-text-align-middle) · [TEXT_ALIGN_RIGHT](../../constants/h3-dialog-text-alignment/#const-text-align-right) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int) · [UNC_INT16](../../constants/un-c-data-types/#const-unc-int16)
<!-- llm:end erm.framework.functions.dl-aligndlg 1 -->

# DL_CenterAtMouse

ID: erm.framework.functions.dl-centeratmouse
URL: /en/erm/framework/functions/dl-centeratmouse/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2215-2222-dl-centeratmouse
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.dl-centeratmouse 1 -->
## Purpose {#purpose}

Centers an existing dialog at the mouse. H3Dlg takes an address; DL takes an ID. The DL wrapper does not check NULL after lookup: create the dialog first.

## Call contract {#signature}

```erm
!!FU(DL_CenterAtMouse):P(dlgId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_FindById](../dl-findbyid/) · [H3Dlg_CenterAtMouse](../h3dlg-centeratmouse/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2215–2222, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.dl-centeratmouse 1 -->

# DL_Coords

ID: erm.framework.functions.dl-coords
URL: /en/erm/framework/functions/dl-coords/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2223-2255-dl-coords
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.dl-coords 1 -->
## Purpose {#purpose}

Coordinates x/y support GET, SET and ADD. Position is clamped against screen size and shadow. H3Dlg_Coords takes an H3Dlg address; DL_Coords takes the ID of a dialog already created with DL:N.

## Call contract {#signature}

```erm
!!FU(DL_Coords):P(dlgId)/(x)/(y);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |
| x2 | `x` | output / mutable |
| x3 | `y` | output / mutable |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!if&(dlgObj)=(NULL);
  !!SN:F^`.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_FindById](../dl-findbyid/) · [H3Dlg_Coords](../h3dlg-coords/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2223–2255, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ARG_SYNTAX_ADD](../../constants/erm-commands/#const-arg-syntax-add) · [ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get) · [NULL](../../constants/universal/#const-null) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.dl-coords 1 -->

# DL_Destroy

ID: erm.framework.functions.dl-destroy
URL: /en/erm/framework/functions/dl-destroy/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2192-2197-dl-destroy
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.dl-destroy 1 -->
## Purpose {#purpose}

Destroys a DL wrapper by address. Do not reuse the destroyed address.

## Call contract {#signature}

```erm
!!FU(DL_Destroy):P(dlgObj);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgObj` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2192–2197, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.dl-destroy 1 -->

# DL_FindById

ID: erm.framework.functions.dl-findbyid
URL: /en/erm/framework/functions/dl-findbyid/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2184-2191-dl-findbyid
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.dl-findbyid 1 -->
## Purpose {#purpose}

Returns a DL wrapper address by ID or NULL. This is not the H3Dlg address, which is stored in its first field. Changes v1.

## Call contract {#signature}

```erm
!!FU(DL_FindById):P(dlgId)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2184–2191, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NULL](../../constants/universal/#const-null)
<!-- llm:end erm.framework.functions.dl-findbyid 1 -->

# DL_GetSize

ID: erm.framework.functions.dl-getsize
URL: /en/erm/framework/functions/dl-getsize/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2256-2272-dl-getsize
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.dl-getsize 1 -->
## Purpose {#purpose}

Returns the width and height of an existing DL dialog; reports an error if absent.

## Call contract {#signature}

```erm
!!FU(DL_GetSize):P(dlgId)/(width)/(height);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |
| x2 | `width` | output / mutable |
| x3 | `height` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_FindById](../dl-findbyid/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2256–2272, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.dl-getsize 1 -->

# DL_SetPlayerColor

ID: erm.framework.functions.dl-setplayercolor
URL: /en/erm/framework/functions/dl-setplayercolor/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2332-2356-dl-setplayercolor
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.dl-setplayercolor 1 -->
## Purpose {#purpose}

Changes a DL dialog frame color. playerId defaults to the interacting player; validates PLAYER_FIRST..PLAYER_LAST.

## Call contract {#signature}

```erm
!!FU(DL_SetPlayerColor):P(dlgId)/(playerId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |
| x2 | `playerId` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_FindById](../dl-findbyid/) · [H3Dlg_SendCmdToItem](../h3dlg-sendcmdtoitem/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2332–2356, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NULL](../../constants/universal/#const-null) · [PLAYER_FIRST](../../constants/players/#const-player-first) · [PLAYER_LAST](../../constants/players/#const-player-last) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.dl-setplayercolor 1 -->

# DL_SetSize

ID: erm.framework.functions.dl-setsize
URL: /en/erm/framework/functions/dl-setsize/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2273-2289-dl-setsize
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.dl-setsize 1 -->
## Purpose {#purpose}

Changes an existing DL dialog width/height. Zero or omitted values preserve that dimension; items are not automatically rearranged.

## Call contract {#signature}

```erm
!!FU(DL_SetSize):P(dlgId)/(width)/(height);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |
| x2 | `width` | input |
| x3 | `height` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_FindById](../dl-findbyid/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2273–2289, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_HEIGHT](../../constants/game-structures/#const-struct-h3dlg-height) · [STRUCT_H3DLG_WIDTH](../../constants/game-structures/#const-struct-h3dlg-width) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.dl-setsize 1 -->

# DL_ShowPopup

ID: erm.framework.functions.dl-showpopup
URL: /en/erm/framework/functions/dl-showpopup/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2198-2214-dl-showpopup
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.dl-showpopup 1 -->
## Purpose {#purpose}

Shows a DL dialog by ID as an RMB popup, then destroys it. Call DL:N again before another display.

## Call contract {#signature}

```erm
!!FU(DL_ShowPopup):P(dlgId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[DL_Destroy](../dl-destroy/) · [DL_FindById](../dl-findbyid/) · [H3Dlg_ShowPopup](../h3dlg-showpopup/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2198–2214, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NULL](../../constants/universal/#const-null) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.dl-showpopup 1 -->

# EmptyIniCache

ID: erm.framework.functions.emptyinicache
URL: /en/erm/framework/functions/emptyinicache/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1597-1604-emptyinicache
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.emptyinicache 1 -->
## Purpose {#purpose}

Replaces the INI cache with empty contents for recreation. Call SaveIni to write it to disk.

## Call contract {#signature}

```erm
!!FU(EmptyIniCache):P(filePathPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `EmptyIniCache`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1597–1604, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.emptyinicache 1 -->

