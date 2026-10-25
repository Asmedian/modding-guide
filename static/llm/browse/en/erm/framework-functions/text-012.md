# RadioDlg_GetItemValue

ID: erm.framework.functions.radiodlg-getitemvalue
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/radiodlg-getitemvalue/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2584-2596-radiodlg-getitemvalue
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.radiodlg-getitemvalue 1 -->
## Purpose {#purpose}

Returns a value/string tag by index. An invalid index reports an error and returns -1; for tags this is not an empty string.

## Call contract {#signature}

```erm
!!FU(RadioDlg_GetItemValue):P(itemInd)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `itemInd` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

Named globals: [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems).

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2584–2596, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.radiodlg-getitemvalue 1 -->

# RadioDlg_GetNumItems

ID: erm.framework.functions.radiodlg-getnumitems
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/radiodlg-getnumitems/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2578-2583-radiodlg-getnumitems
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.radiodlg-getnumitems 1 -->
## Purpose {#purpose}

Returns the item count excluding Cancel.

## Call contract {#signature}

```erm
!!FU(RadioDlg_GetNumItems):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

Named globals: [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2578–2583, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.radiodlg-getnumitems 1 -->

# RadioDlg_Reset

ID: erm.framework.functions.radiodlg-reset
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/radiodlg-reset/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2456-2467-radiodlg-reset
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.radiodlg-reset 1 -->
## Purpose {#purpose}

Resets the shared radio dialog title, items, selection, and flags. Call before constructing a new dialog.

## Call contract {#signature}

```erm
!!FU(RadioDlg_Reset):P;
```

## State and dependencies {#context}

Named globals: [i^radioDlg_captions^](../../globals/#global-i-radiodlg-captions) · [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [i^radioDlg_freeSpaceAlerted^](../../globals/#global-i-radiodlg-freespacealerted) · [s^radioDlg_title^](../../globals/#global-s-radiodlg-title).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2456–2467, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item) · [RADIO_DLG_MAX_ITEMS](../../constants/radio-dialogs/#const-radio-dlg-max-items)
<!-- llm:end erm.framework.functions.radiodlg-reset 1 -->

# RadioDlg_SelectItem

ID: erm.framework.functions.radiodlg-selectitem
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/radiodlg-selectitem/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2490-2496-radiodlg-selectitem
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.radiodlg-selectitem 1 -->
## Purpose {#purpose}

Selects index 0..numItems-1; an invalid index clears selection to NO_RADIO_DLG_ITEM.

## Call contract {#signature}

```erm
!!FU(RadioDlg_SelectItem):P(itemInd);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `itemInd` | input |

## State and dependencies {#context}

Named globals: [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2490–2496, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item)
<!-- llm:end erm.framework.functions.radiodlg-selectitem 1 -->

# RadioDlg_SelectItemByTag

ID: erm.framework.functions.radiodlg-selectitembytag
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/radiodlg-selectitembytag/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2514-2531-radiodlg-selectitembytag
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.radiodlg-selectitembytag 1 -->
## Purpose {#purpose}

Selects the first matching value/string tag. Clears selection if no match exists.

## Call contract {#signature}

```erm
!!FU(RadioDlg_SelectItemByTag):P(itemTagPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `itemTagPtr` | input |

## State and dependencies {#context}

Named globals: [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [s^temp^](../../globals/#global-s-temp).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2514–2531, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item)
<!-- llm:end erm.framework.functions.radiodlg-selectitembytag 1 -->

# RadioDlg_SelectItemByValue

ID: erm.framework.functions.radiodlg-selectitembyvalue
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/radiodlg-selectitembyvalue/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2497-2513-radiodlg-selectitembyvalue
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.radiodlg-selectitembyvalue 1 -->
## Purpose {#purpose}

Selects the first matching value/string tag. Clears selection if no match exists.

## Call contract {#signature}

```erm
!!FU(RadioDlg_SelectItemByValue):P(itemValue);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `itemValue` | input |

## State and dependencies {#context}

Named globals: [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2497–2513, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item)
<!-- llm:end erm.framework.functions.radiodlg-selectitembyvalue 1 -->

# RadioDlg_SetTitle

ID: erm.framework.functions.radiodlg-settitle
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/radiodlg-settitle/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2468-2473-radiodlg-settitle
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.radiodlg-settitle 1 -->
## Purpose {#purpose}

Copies the title into radio-dialog state.

## Call contract {#signature}

```erm
!!FU(RadioDlg_SetTitle):P(titlePtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `titlePtr` | input |

## State and dependencies {#context}

Named globals: [s^radioDlg_title^](../../globals/#global-s-radiodlg-title).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2468–2473, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.radiodlg-settitle 1 -->

# RadioDlg_Show

ID: erm.framework.functions.radiodlg-show
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/radiodlg-show/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2612-2678-radiodlg-show
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.radiodlg-show 1 -->
## Purpose {#purpose}

Shows the dialog through IF:G and returns ?resultItem/?resultValue/?resultTagPtr. Cancel/empty lists yield -1/-1/empty. Copies state first so a nested dialog cannot alter current items.

## Call contract {#signature}

```erm
!!FU(RadioDlg_Show):P(resultItem)/(resultValue)/(resultTagPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `resultItem` | output / mutable |
| x2 | `resultValue` | output / mutable |
| x3 | `resultTagPtr` | output / mutable |

## State and dependencies {#context}

Named globals: [i^radioDlg_captions^](../../globals/#global-i-radiodlg-captions) · [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [s^radioDlg_title^](../../globals/#global-s-radiodlg-title) · [s^temp^](../../globals/#global-s-temp).

## Related functions {#calls}

[Array_Copy](../array-copy/) · [IntLog2](../intlog2/) · [NewIntArray](../newintarray/) · [NewStrArray](../newstrarray/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2612–2678, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item) · [RADIO_DLG_FLAG_BTN_CANCEL](../../constants/radio-dialogs/#const-radio-dlg-flag-btn-cancel) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.radiodlg-show 1 -->

# ReadIniInts

ID: erm.framework.functions.readiniints
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/readiniints/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1736-1777-readiniints
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.readiniints 1 -->
## Purpose {#purpose}

Takes up to 4 key/?value/default triples after path and section. An empty stored string also uses default. ReadIniInts converts nonempty text to an integer; this is not a separate numeric-validity check.

## Call contract {#signature}

```erm
!!FU(ReadIniInts):P(filePathPtr)/(sectionNamePtr)/(firstKeyPtr)/(firstValue)/(firstValueDefault);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |
| x2 | `sectionNamePtr` | input |
| x3 | `firstKeyPtr` | input |
| x4 | `firstValue` | input |
| x5 | `firstValueDefault` | input |

## State and dependencies {#context}

Named globals: —.

  !!if&(valueStr)=^`, `s^/^`, `s^;
  !!FU:E;
!!en;

!!VR(numVariadicArgs:y):S(numArgs) -(@firstKeyPtr) +1;
!!VR(numTripples:y):S(numVariadicArgs) :3;

!!VRt:S(numVariadicArgs) %3;

!!if&t<>0;
  !!SN:F^`.

Export calls: `ReadStrFromIni`, `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1736–1777, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[HERO_ORRIN](../../constants/heroes/#const-hero-orrin) · [HERO_XERON](../../constants/heroes/#const-hero-xeron)
<!-- llm:end erm.framework.functions.readiniints 1 -->

# ReadIniStrings

ID: erm.framework.functions.readinistrings
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/readinistrings/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1697-1735-readinistrings
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.readinistrings 1 -->
## Purpose {#purpose}

Takes up to 4 key/?value/default triples after path and section. An empty stored string also uses default. ReadIniInts converts nonempty text to an integer; this is not a separate numeric-validity check.

## Call contract {#signature}

```erm
!!FU(ReadIniStrings):P(filePathPtr)/(sectionNamePtr)/(firstKeyPtr)/(firstValue)/(firstValueDefault);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |
| x2 | `sectionNamePtr` | input |
| x3 | `firstKeyPtr` | input |
| x4 | `firstValue` | input |
| x5 | `firstValueDefault` | input |

## State and dependencies {#context}

Named globals: —.

  !!VR(valueStr)&(valueStr)=^`, `s^;
  !!FU:E;
!!en;

!!VR(numVariadicArgs:y):S(numArgs) -(@firstKeyPtr) +1;
!!VR(numTripples:y):S(numVariadicArgs) :3;

!!VRt:S(numVariadicArgs) %3;

!!if&t<>0;
  !!SN:F^`.

Export calls: `ReadStrFromIni`, `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1697–1735, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[HERO_ORRIN](../../constants/heroes/#const-hero-orrin) · [HERO_XERON](../../constants/heroes/#const-hero-xeron)
<!-- llm:end erm.framework.functions.readinistrings 1 -->

# ReadJsonIntArray

ID: erm.framework.functions.readjsonintarray
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/readjsonintarray/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1778-1806-readjsonintarray
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.readjsonintarray 1 -->
## Purpose {#purpose}

Reads JSON keys prefix.0, prefix.1… until the first missing key. Passing the second argument with ? creates a local array; otherwise the existing array is cleared and filled. ReadJsonIntArray converts strings to integers.

## Call contract {#signature}

```erm
!!FU(ReadJsonIntArray):P(jsonKeyPtr)/(intArray);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `jsonKeyPtr` | input |
| x2 | `intArray` | output / mutable |

## State and dependencies {#context}

Named globals: —.
  !!SN:T^`.

Export calls: `ExtendArrayLifetime`.

## Related functions {#calls}

[Array_Push](../array-push/) · [NewIntArray](../newintarray/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1778–1806, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get)
<!-- llm:end erm.framework.functions.readjsonintarray 1 -->

# ReadJsonStrArray

ID: erm.framework.functions.readjsonstrarray
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/readjsonstrarray/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1807-1834-readjsonstrarray
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.readjsonstrarray 1 -->
## Purpose {#purpose}

Reads JSON keys prefix.0, prefix.1… until the first missing key. Passing the second argument with ? creates a local array; otherwise the existing array is cleared and filled. ReadJsonIntArray converts strings to integers.

## Call contract {#signature}

```erm
!!FU(ReadJsonStrArray):P(jsonKeyPtr)/(strArray);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `jsonKeyPtr` | input |
| x2 | `strArray` | output / mutable |

## State and dependencies {#context}

Named globals: —.
  !!SN:T^`.

Export calls: `ExtendArrayLifetime`.

## Related functions {#calls}

[Array_Push](../array-push/) · [NewStrArray](../newstrarray/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1807–1834, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get)
<!-- llm:end erm.framework.functions.readjsonstrarray 1 -->

# RestoreEventData

ID: erm.framework.functions.restoreeventdata
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/restoreeventdata/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-47-87-restoreeventdata
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.restoreeventdata 1 -->
## Purpose {#purpose}

Restores integers to ? outputs. This snapshot reads savedNumArgs but repeats the buffer-size check instead of validating it. Save/restore calls must match exactly.

## Call contract {#signature}

```erm
!!FU(RestoreEventData):P(firstArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `firstArg` | input |

## State and dependencies {#context}

Named globals: [i^savedEventData^](../../globals/#global-i-savedeventdata) · [i^savedEventDataPos^](../../globals/#global-i-savedeventdatapos).

Export calls: `DisableErmTracking`, `RestoreErmTracking`, `ShowErmError`.

## Related functions {#calls}

[ClearEventChainData](../cleareventchaindata/)

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 47–87, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.restoreeventdata 1 -->

# RestorePrevKeyModsState

ID: erm.framework.functions.restoreprevkeymodsstate
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/restoreprevkeymodsstate/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-91-93-restoreprevkeymodsstate
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.restoreprevkeymodsstate 1 -->
## Purpose {#purpose}

Restores key and modifier globals after a nested event.

## Call contract {#signature}

```erm
!!FU(RestorePrevKeyModsState):P;
```

## State and dependencies {#context}

Named globals: [i^key^](../../globals/#global-i-key) · [i^key_down^](../../globals/#global-i-key-down) · [i^key_leftAlt^](../../globals/#global-i-key-leftalt) · [i^key_rightAlt^](../../globals/#global-i-key-rightalt) · [i^key_alt^](../../globals/#global-i-key-alt) · [i^key_leftCtrl^](../../globals/#global-i-key-leftctrl) · [i^key_rightCtrl^](../../globals/#global-i-key-rightctrl) · [i^key_ctrl^](../../globals/#global-i-key-ctrl) · [i^key_leftShift^](../../globals/#global-i-key-leftshift) · [i^key_rightShift^](../../globals/#global-i-key-rightshift) · [i^key_shift^](../../globals/#global-i-key-shift).

## Related functions {#calls}

[RestoreEventData](../restoreeventdata/)

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 91–93, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.restoreprevkeymodsstate 1 -->

# RestorePrevMouseEventData

ID: erm.framework.functions.restoreprevmouseeventdata
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/restoreprevmouseeventdata/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-142-144-restoreprevmouseeventdata
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.restoreprevmouseeventdata 1 -->
## Purpose {#purpose}

Saves/restores ten mouse_* values. mouse_hero_1 and dlg_action are not included, so the pair does not restore the entire context.

## Call contract {#signature}

```erm
!!FU(RestorePrevMouseEventData):P;
```

## State and dependencies {#context}

Named globals: [i^mouse_x^](../../globals/#global-i-mouse-x) · [i^mouse_y^](../../globals/#global-i-mouse-y) · [i^mouse_battleHex^](../../globals/#global-i-mouse-battlehex) · [i^mouse_flags^](../../globals/#global-i-mouse-flags) · [i^mouse_hero_0^](../../globals/#global-i-mouse-hero-0) · [i^mouse_item^](../../globals/#global-i-mouse-item) · [i^mouse_mapX^](../../globals/#global-i-mouse-mapx) · [i^mouse_mapY^](../../globals/#global-i-mouse-mapy) · [i^mouse_mapZ^](../../globals/#global-i-mouse-mapz) · [i^mouse_action^](../../globals/#global-i-mouse-action).

## Related functions {#calls}

[RestoreEventData](../restoreeventdata/)

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 142–144, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.restoreprevmouseeventdata 1 -->

