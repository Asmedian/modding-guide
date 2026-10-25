# OnRecruitDlgMouseClick

ID: erm.framework.functions.onrecruitdlgmouseclick
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/onrecruitdlgmouseclick/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-193-195-onrecruitdlgmouseclick
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onrecruitdlgmouseclick 1 -->
## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnRecruitDlgMouseClick);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 193–195, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onrecruitdlgmouseclick 1 -->

# OnSavegameRead

ID: erm.framework.functions.onsavegameread
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/onsavegameread/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-145-147-onsavegameread
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onsavegameread 1 -->
## Purpose {#purpose}

Clears event-chain state after save data is read.

## Call contract {#signature}

```erm
!?FU(OnSavegameRead);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[ClearEventChainData](../cleareventchaindata/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 145–147, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onsavegameread 1 -->

# OnSetupBattlefield

ID: erm.framework.functions.onsetupbattlefield
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/onsetupbattlefield/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-263-265-onsetupbattlefield
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onsetupbattlefield 1 -->
## Purpose {#purpose}

Refreshes battle_* during battlefield setup.

## Call contract {#signature}

```erm
!?FU(OnSetupBattlefield);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 263–265, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onsetupbattlefield 1 -->

# OnStartOrLoad

ID: erm.framework.functions.onstartorload
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/onstartorload/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-292-300-onstartorload
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onstartorload 1 -->
## Purpose {#purpose}

Updates maxArtifacId, maxHeroId, maxMonsterId, maxSpellId. The source spells maxArtifacId without the second t.

## Call contract {#signature}

```erm
!?FU(OnStartOrLoad);
```

## State and dependencies {#context}

Named globals: [i^maxArtifacId^](../../globals/#global-i-maxartifacid) · [i^maxHeroId^](../../globals/#global-i-maxheroid) · [i^maxMonsterId^](../../globals/#global-i-maxmonsterid) · [i^maxSpellId^](../../globals/#global-i-maxspellid).

## Related functions {#calls}

[GetMaxArtifactId](../getmaxartifactid/) · [GetMaxHeroId](../getmaxheroid/) · [GetMaxMonsterId](../getmaxmonsterid/) · [GetMaxSpellId](../getmaxspellid/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 292–300, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onstartorload 1 -->

# OnTownHallMouseClick_Quit

ID: erm.framework.functions.ontownhallmouseclick-quit
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/ontownhallmouseclick-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-58-60-ontownhallmouseclick-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.ontownhallmouseclick-quit 1 -->
## Purpose {#purpose}

Final handler for OnTownHallMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnTownHallMouseClick_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 58–60, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.ontownhallmouseclick-quit 1 -->

# OnTownHallMouseClick

ID: erm.framework.functions.ontownhallmouseclick
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/ontownhallmouseclick/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-196-198-ontownhallmouseclick
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.ontownhallmouseclick 1 -->
## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnTownHallMouseClick);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 196–198, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.ontownhallmouseclick 1 -->

# OnTownMouseClick_Quit

ID: erm.framework.functions.ontownmouseclick-quit
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/ontownmouseclick-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-40-42-ontownmouseclick-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.ontownmouseclick-quit 1 -->
## Purpose {#purpose}

Final handler for OnTownMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnTownMouseClick_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 40–42, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.ontownmouseclick-quit 1 -->

# OnTownMouseClick

ID: erm.framework.functions.ontownmouseclick
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/ontownmouseclick/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-178-180-ontownmouseclick
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.ontownmouseclick 1 -->
## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnTownMouseClick);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 178–180, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.ontownmouseclick 1 -->

# OnTownMouseHint_Quit

ID: erm.framework.functions.ontownmousehint-quit
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/ontownmousehint-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-67-69-ontownmousehint-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.ontownmousehint-quit 1 -->
## Purpose {#purpose}

Final handler for OnTownMouseHint: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnTownMouseHint_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 67–69, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.ontownmousehint-quit 1 -->

# OnTownMouseHint

ID: erm.framework.functions.ontownmousehint
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/ontownmousehint/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-205-207-ontownmousehint
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.ontownmousehint 1 -->
## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnTownMouseHint);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 205–207, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.ontownmousehint 1 -->

# PackUnion

ID: erm.framework.functions.packunion
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/packunion/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1241-1294-packunion
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.packunion 1 -->
## Purpose {#purpose}

PackUnion takes value/width pairs and a final ?result; UnpackUnion takes packedValue and ?value/width pairs. Fields start at the low bit, totaling at most 32. Checks for widths 0 and 32 differ from the stated 1..32 contract; use positive fields below 32 bits and validate the total.

## Call contract {#signature}

```erm
!!FU(PackUnion):P(firstArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `firstArg` | input |

## State and dependencies {#context}

Named globals: —.
    !!FU:E;
  !!en;

  !!VR(fieldValue):&(fieldMask) Sd<<(totalFieldsSize);
  !!VR(totalFieldsSize):+(fieldSize);

  !!if&(totalFieldsSize)>(BITS_IN_INT32);
    !!SN:F^`.

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1241–1294, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BITS_IN_INT32](../../constants/bit-sizes/#const-bits-in-int32)
<!-- llm:end erm.framework.functions.packunion 1 -->

# Pow

ID: erm.framework.functions.pow
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/pow/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-1166-1172-pow
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.pow 1 -->
## Purpose {#purpose}

Exponentiation. Both inputs and output are floats; the result is copied from e1 with VR:C without numeric conversion.

## Call contract {#signature}

```erm
!!FU(Pow):P(base)/(power)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `base` | input |
| x2 | `power` | input |
| x3 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `.Erm_Pow`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1166–1172, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.pow 1 -->

# PrepareMessageBoxText

ID: erm.framework.functions.preparemessageboxtext
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/preparemessageboxtext/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2767-2798-preparemessageboxtext
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.preparemessageboxtext 1 -->
## Purpose {#purpose}

Passes name/hint pairs for the next message to wog native dialogs:PrepareMessageBoxText. In this snapshot l<argsNum skips the last hint for an even argument count; verify the library version.

## Call contract {#signature}

```erm
!!FU(PrepareMessageBoxText):P(text[16]);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `text[16]` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `wog native dialogs:PrepareMessageBoxText`.

## Related functions {#calls}

[NewStrArray](../newstrarray/)

## Version and status {#provenance}

Status: `requires-review`. The complete block in `lib/9999 era - stdlib.erm`, lines 2767–2798, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.preparemessageboxtext 1 -->

# PrepareMultiPicDialog

ID: erm.framework.functions.preparemultipicdialog
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/preparemultipicdialog/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2679-2755-preparemultipicdialog
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.preparemultipicdialog 1 -->
## Purpose {#purpose}

Prepares pictures for the next IF:N: no arguments clear them; accepts type/subtype pairs or one array ID containing pairs. Skips NO_PIC_TYPE and negative creature subtypes; up to 8 nonempty pairs. Does not show the dialog.

## Call contract {#signature}

```erm
!!FU(PrepareMultiPicDialog):P(firstArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `firstArg` | input |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2679–2755, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[MON_FIRST](../../constants/monsters/#const-mon-first) · [NO_PIC_TYPE](../../constants/h3-dialog-picture-types/#const-no-pic-type) · [PIC_TYPE_MONSTER](../../constants/h3-dialog-picture-types/#const-pic-type-monster)
<!-- llm:end erm.framework.functions.preparemultipicdialog 1 -->

# RadioDlg_AddCancelButton

ID: erm.framework.functions.radiodlg-addcancelbutton
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/radiodlg-addcancelbutton/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2474-2489-radiodlg-addcancelbutton
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.radiodlg-addcancelbutton 1 -->
## Purpose {#purpose}

Reserves one of 12 positions for Cancel. If full, drops the last item and reports an error once. Repeated calls do not add another button.

## Call contract {#signature}

```erm
!!FU(RadioDlg_AddCancelButton):P;
```

## State and dependencies {#context}

Named globals: [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [i^radioDlg_freeSpaceAlerted^](../../globals/#global-i-radiodlg-freespacealerted).

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2474–2489, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [RADIO_DLG_FLAG_BTN_CANCEL](../../constants/radio-dialogs/#const-radio-dlg-flag-btn-cancel) · [RADIO_DLG_MAX_ITEMS](../../constants/radio-dialogs/#const-radio-dlg-max-items) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.radiodlg-addcancelbutton 1 -->

# RadioDlg_AddItem

ID: erm.framework.functions.radiodlg-additem
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/radiodlg-additem/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2532-2560-radiodlg-additem
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.radiodlg-additem 1 -->
## Purpose {#purpose}

Adds a caption, number, tag and optional selectItem. Defaults: empty, 0, empty, FALSE. An empty caption displays as -/-. Capacity is 12, or 11 with Cancel.

## Call contract {#signature}

```erm
!!FU(RadioDlg_AddItem):P(itemCaptionPtr)/(itemValue)/(itemTagPtr)/(selectItem);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `itemCaptionPtr` | input |
| x2 | `itemValue` | input |
| x3 | `itemTagPtr` | output / mutable |
| x4 | `selectItem` | input |

## State and dependencies {#context}

Named globals: [i^radioDlg_captions^](../../globals/#global-i-radiodlg-captions) · [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [i^radioDlg_freeSpaceAlerted^](../../globals/#global-i-radiodlg-freespacealerted).

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2532–2560, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [NULL](../../constants/universal/#const-null) · [RADIO_DLG_FLAG_BTN_CANCEL](../../constants/radio-dialogs/#const-radio-dlg-flag-btn-cancel) · [RADIO_DLG_MAX_ITEMS](../../constants/radio-dialogs/#const-radio-dlg-max-items) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.radiodlg-additem 1 -->

# RadioDlg_AddItems

ID: erm.framework.functions.radiodlg-additems
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/radiodlg-additems/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2561-2577-radiodlg-additems
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.radiodlg-additems 1 -->
## Purpose {#purpose}

Adds up to 5 caption/value/tag triples. An incomplete final triple is ignored; no item is automatically selected.

## Call contract {#signature}

```erm
!!FU(RadioDlg_AddItems):P(firstItemCaptionPtr)/(firstItemValue)/(firstItemTagPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `firstItemCaptionPtr` | input |
| x2 | `firstItemValue` | input |
| x3 | `firstItemTagPtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[RadioDlg_AddItem](../radiodlg-additem/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2561–2577, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.radiodlg-additems 1 -->

# RadioDlg_GetItemTag

ID: erm.framework.functions.radiodlg-getitemtag
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/radiodlg-getitemtag/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2597-2611-radiodlg-getitemtag
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.radiodlg-getitemtag 1 -->
## Purpose {#purpose}

Returns a value/string tag by index. An invalid index reports an error and returns -1; for tags this is not an empty string.

## Call contract {#signature}

```erm
!!FU(RadioDlg_GetItemTag):P(itemInd)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `itemInd` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

Named globals: [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [s^temp^](../../globals/#global-s-temp).

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2597–2611, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.radiodlg-getitemtag 1 -->

