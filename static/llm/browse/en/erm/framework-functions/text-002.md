# Framework functions

ID: erm.framework.functions
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/
Part: 2/2
Source references: era-framework:lib-9999-era---stdlib.erm, era-framework:lib-end--9999-era---stdlib.erm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions 2 -->
| [ActivateNextStack](./activatenextstack/) | requires-review | Invokes next-stack selection. This snapshot assigns the result only when result<>0: an output initialized to 0 is not updated. Initialize it nonzero or use a corrected version. |
| [UpdateBattleVars](./updatebattlevars/) | public | Refreshes BA/OW data in battle_*: heroes, owners, quick/network/visible combat and side flags. Call after changing BA except creature composition. Normalizes a missing defender hero to NO_HERO. |
| [GetTimeMsec](./gettimemsec/) | public | Returns milliseconds since OS startup via timeGetTime. The 32-bit counter wraps after about 49.71 days; it is not the in-game date. |
| [GetProcessGuid](./getprocessguid/) | public | Returns a 32-character identifier for this game-process run. Distinguishes a restart from loading a save in the same process. |
| [IsDllLoaded](./isdllloaded/) | public | Checks a DLL filename including extension with GetModuleHandleA. Returns TRUE/FALSE without loading a missing module. |
| [MonCountToFuzzyText](./moncounttofuzzytext/) | public | Returns an approximate count: 1–4, 5–9, 10–19, 20–49, 50–99, 100–249, 250–499, 500–999 and K+/M+. MON_FUZZY_COUNT_* selects formatting; 0 falls into 1–4 and negative input is an error. |
| [GetMaxMonsterId](./getmaxmonsterid/) | public | Reads the engine limit and subtracts 1. The last supported ID does not mean every slot contains a configured entity. |
| [GetUpgradedMonster](./getupgradedmonster/) | public | Returns the creature upgrade or NO_MON (-1) when absent. |
| [GetDegradedMonCandidates](./getdegradedmoncandidates/) | public | Scans all supported types and returns a local array of creatures upgrading to monId. Multiple candidates are possible; a full scan is expensive with extended limits. |
| [GetMaxHeroId](./getmaxheroid/) | public | Reads the engine limit and subtracts 1. The last supported ID does not mean every slot contains a configured entity. |
| [GetHeroPortraitName](./getheroportraitname/) | public | Returns current small/large portrait filenames for a hero. Reads the structure table by ID; validate the range first. |
| [GetHeroPrimarySkillsWithoutArts](./getheroprimaryskillswithoutarts/) | public | Temporarily removes 19 equipped artifacts, reads HE:F, then re-equips them. Fires OnUnequipArt/OnEquipArt; this operation has event side effects. |
| [GetArtAtSlot](./getartatslot/) | public | Returns artifact ID and modifier for a hero slot, including backpack slots. Handle NO_ART for an empty slot. |
| [ChangeArtModAtSlot](./changeartmodatslot/) | public | Changes an artifact modifier in an equipped/backpack slot. A scroll modifier is its spell ID; ordinary artifacts usually use NO_ART_MOD. |
| [AddArtToHero](./addarttohero/) | public | Tries to equip an artifact, then falls back to the backpack; returns success. Automatically assembles combination artifacts and checks victory conditions. |
| [EquipArtToSlot](./equiparttoslot/) | public | Equips an artifact in a doll slot or auto-selects for NO_ART_SLOT. Returns TRUE/FALSE and fires OnEquipArt. Does not write arbitrary backpack slots. |
| [UnequipArtFromSlot](./unequipartfromslot/) | public | Unequips a doll slot and fires OnUnequipArt. Save artifact IDs/modifiers yourself when temporarily removing equipment. |
| [GetMaxArtifactId](./getmaxartifactid/) | public | This snapshot simply returns ART_LAST_WOG. Despite its comment about extensions, it does not query a dynamic plugin limit. |
| [GetMaxSpellId](./getmaxspellid/) | public | Returns SPELL_LAST_WOG, not a dynamic limit from a spell-expansion plugin. |
| [GetTextFileString](./gettextfilestring/) | public | Reads a zero-based row from loaded randtvrn, arraytxt, genrltxt, tcommand, artevent, crgen1, crgen4, dwelling, minename, objnames, towntype, plcolors, priskill, restypes, skilllev, advevent resources. Normalizes the name; unknown names return Wrong txt filename!. Does not validate row bounds. |
| [GetTextTableString](./gettexttablestring/) | public | Reads a bldgspec, help, or znpc00 cell by rowIndex/colIndex. Despite the “get or set” comment, this snapshot has no write branch. The caller must validate indices. |
| [H3Quests_RefreshData](./h3quests-refreshdata/) | public | Refreshes quests after creature/name replacements. For defeat-monster quests, checks the actual type at coordinates; forceRefreshText rebuilds all quest text. Uses internal game structures. |

## Dialogs {#dialogs}

| Function | Status | Purpose |
| --- | --- | --- |
| [H3Dlg_StopAnimation](./h3dlg-stopanimation/) | public | Stops/resumes current dialog animation through native functions. Keep calls balanced. |
| [H3Dlg_ResumeAnimation](./h3dlg-resumeanimation/) | public | Stops/resumes current dialog animation through native functions. Keep calls balanced. |
| [H3Dlg_ShowPopup](./h3dlg-showpopup/) | public | Shows an H3 dialog as an RMB popup while suspending/resuming animation. Requires a valid H3Dlg address. |
| [H3Dlg_Coords](./h3dlg-coords/) | public | Coordinates x/y support GET, SET and ADD. Position is clamped against screen size and shadow. H3Dlg_Coords takes an H3Dlg address; DL_Coords takes the ID of a dialog already created with DL:N. |
| [H3Dlg_CenterAtMouse](./h3dlg-centeratmouse/) | public | Centers an existing dialog at the mouse. H3Dlg takes an address; DL takes an ID. The DL wrapper does not check NULL after lookup: create the dialog first. |
| [H3Dlg_GetRootDlg](./h3dlg-getrootdlg/) | public | Returns the root dialog address or NULL; usually the adventure map. |
| [H3Dlg_GetCurrentDlg](./h3dlg-getcurrentdlg/) | public | Returns the topmost dialog address or NULL. This address is not its DLG_* identifier. |
| [H3Dlg_GetCurrentDlgId](./h3dlg-getcurrentdlgid/) | public | Returns the top dialog identifier from its virtual table, comparable to DLG_*, or NULL. |
| [H3Dlg_SendCmdToItem](./h3dlg-sendcmdtoitem/) | public | Sends a DLG_CMD_* to itemId; cmdType defaults to DLG_CMD_TYPE_DEFAULT. SET_TEXT/SET_DEF/SET_PCX interpret param as a string; other commands receive a number. |
| [H3Dlg_DrawItemOnScreen](./h3dlg-drawitemonscreen/) | public | Draws itemId or the entire dialog for ALL_ITEMS. The H3Dlg object must exist. |
| [H3Dlg_UpdateItemRange](./h3dlg-updateitemrange/) | requires-review | Updates dialog state before redraw. In this snapshot minItemId/maxItemId are unused: a virtual method is called with 0/200/200. Do not rely on range-limited updates. |
| [DL_FindById](./dl-findbyid/) | public | Returns a DL wrapper address by ID or NULL. This is not the H3Dlg address, which is stored in its first field. Changes v1. |
| [DL_Destroy](./dl-destroy/) | public | Destroys a DL wrapper by address. Do not reuse the destroyed address. |
| [DL_ShowPopup](./dl-showpopup/) | public | Shows a DL dialog by ID as an RMB popup, then destroys it. Call DL:N again before another display. |
| [DL_CenterAtMouse](./dl-centeratmouse/) | public | Centers an existing dialog at the mouse. H3Dlg takes an address; DL takes an ID. The DL wrapper does not check NULL after lookup: create the dialog first. |
| [DL_Coords](./dl-coords/) | public | Coordinates x/y support GET, SET and ADD. Position is clamped against screen size and shadow. H3Dlg_Coords takes an H3Dlg address; DL_Coords takes the ID of a dialog already created with DL:N. |
| [DL_GetSize](./dl-getsize/) | public | Returns the width and height of an existing DL dialog; reports an error if absent. |
| [DL_SetSize](./dl-setsize/) | public | Changes an existing DL dialog width/height. Zero or omitted values preserve that dimension; items are not automatically rearranged. |
| [DL_AlignDlg](./dl-aligndlg/) | public | Aligns an existing DL dialog using TEXT_ALIGN_* bits. CENTER/MIDDLE take precedence over RIGHT/BOTTOM. |
| [DL_SetPlayerColor](./dl-setplayercolor/) | public | Changes a DL dialog frame color. playerId defaults to the interacting player; validates PLAYER_FIRST..PLAYER_LAST. |
| [ClearScreenLog](./clearscreenlog/) | public | Clears green on-screen log messages. |
| [AdvMap_SetHint](./advmap-sethint/) | public | Immediately updates the adventure-map hint only when the root window is DLG_ADVMAP. Chat text may remain hidden until the next input. |
| [AdvMap_SetInfoPanelText](./advmap-setinfopaneltext/) | public | Shows nonempty text in the map information panel for timeToDisplay milliseconds (default 5000). Uses s^temp_text^ and changes v1. |
| [AdvMap_SetInfoPanelDef](./advmap-setinfopaneldef/) | public | Shows text and a DEF frame in the map panel, defaulting to 5000 ms. Temporarily replaces and restores two native DEF-name operands. Changes z1/v1; without defName calls the text variant. |
| [RadioDlg_Reset](./radiodlg-reset/) | public | Resets the shared radio dialog title, items, selection, and flags. Call before constructing a new dialog. |
| [RadioDlg_SetTitle](./radiodlg-settitle/) | public | Copies the title into radio-dialog state. |
| [RadioDlg_AddCancelButton](./radiodlg-addcancelbutton/) | public | Reserves one of 12 positions for Cancel. If full, drops the last item and reports an error once. Repeated calls do not add another button. |
| [RadioDlg_SelectItem](./radiodlg-selectitem/) | public | Selects index 0..numItems-1; an invalid index clears selection to NO_RADIO_DLG_ITEM. |
| [RadioDlg_SelectItemByValue](./radiodlg-selectitembyvalue/) | public | Selects the first matching value/string tag. Clears selection if no match exists. |
| [RadioDlg_SelectItemByTag](./radiodlg-selectitembytag/) | public | Selects the first matching value/string tag. Clears selection if no match exists. |
| [RadioDlg_AddItem](./radiodlg-additem/) | public | Adds a caption, number, tag and optional selectItem. Defaults: empty, 0, empty, FALSE. An empty caption displays as -/-. Capacity is 12, or 11 with Cancel. |
| [RadioDlg_AddItems](./radiodlg-additems/) | public | Adds up to 5 caption/value/tag triples. An incomplete final triple is ignored; no item is automatically selected. |
| [RadioDlg_GetNumItems](./radiodlg-getnumitems/) | public | Returns the item count excluding Cancel. |
| [RadioDlg_GetItemValue](./radiodlg-getitemvalue/) | public | Returns a value/string tag by index. An invalid index reports an error and returns -1; for tags this is not an empty string. |
| [RadioDlg_GetItemTag](./radiodlg-getitemtag/) | public | Returns a value/string tag by index. An invalid index reports an error and returns -1; for tags this is not an empty string. |
| [RadioDlg_Show](./radiodlg-show/) | public | Shows the dialog through IF:G and returns ?resultItem/?resultValue/?resultTagPtr. Cancel/empty lists yield -1/-1/empty. Copies state first so a nested dialog cannot alter current items. |
| [PrepareMultiPicDialog](./preparemultipicdialog/) | public | Prepares pictures for the next IF:N: no arguments clear them; accepts type/subtype pairs or one array ID containing pairs. Skips NO_PIC_TYPE and negative creature subtypes; up to 8 nonempty pairs. Does not show the dialog. |
| [ShowAnimatedDefDlg](./showanimateddefdlg/) | public | Shows an OK message with an animated DEF. With an absent/empty DEF name, uses ordinary IF:M1. |
| [PrepareMessageBoxText](./preparemessageboxtext/) | requires-review | Passes name/hint pairs for the next message to wog native dialogs:PrepareMessageBoxText. In this snapshot l<argsNum skips the last hint for an even argument count; verify the library version. |

<!-- llm:end erm.framework.functions 2 -->

# ActivateNextStack

ID: erm.framework.functions.activatenextstack
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/activatenextstack/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2837-2847-activatenextstack
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.activatenextstack 1 -->
## Purpose {#purpose}

Invokes next-stack selection. This snapshot assigns the result only when result<>0: an output initialized to 0 is not updated. Initialize it nonzero or use a corrected version.

## Call contract {#signature}

```erm
!!FU(ActivateNextStack):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `requires-review`. The complete block in `lib/9999 era - stdlib.erm`, lines 2837–2847, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BITS_1_MASK](../../constants/bit-masks/#const-bits-1-mask) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [COMBAT_MANAGER](../../constants/game-managers/#const-combat-manager) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.activatenextstack 1 -->

# AddArtToHero

ID: erm.framework.functions.addarttohero
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/addarttohero/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-3155-3169-addarttohero
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.addarttohero 1 -->
## Purpose {#purpose}

Tries to equip an artifact, then falls back to the backpack; returns success. Automatically assembles combination artifacts and checks victory conditions.

## Call contract {#signature}

```erm
!!FU(AddArtToHero):P(hero)/(art)/(artMod)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `hero` | input |
| x2 | `art` | input |
| x3 | `artMod` | input |
| x4 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3155–3169, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl) · [NO_ART_MOD](../../constants/artfiact-modifiers/#const-no-art-mod)
<!-- llm:end erm.framework.functions.addarttohero 1 -->

# AdvMap_SetHint

ID: erm.framework.functions.advmap-sethint
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/advmap-sethint/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2363-2376-advmap-sethint
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.advmap-sethint 1 -->
## Purpose {#purpose}

Immediately updates the adventure-map hint only when the root window is DLG_ADVMAP. Chat text may remain hidden until the next input.

## Call contract {#signature}

```erm
!!FU(AdvMap_SetHint):P(newHint);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `newHint` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[H3Dlg_DrawItemOnScreen](../h3dlg-drawitemonscreen/) · [H3Dlg_GetRootDlg](../h3dlg-getrootdlg/) · [H3Dlg_SendCmdToItem](../h3dlg-sendcmdtoitem/) · [H3Dlg_UpdateItemRange](../h3dlg-updateitemrange/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2363–2376, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[DLG_ADVMAP](../../constants/dialogs/#const-dlg-advmap) · [DLG_CMD_SET_TEXT](../../constants/h3-dialog-commands/#const-dlg-cmd-set-text) · [ITEM_ADVMAP_HINT](../../constants/dialog-item-ids/#const-item-advmap-hint) · [NULL](../../constants/universal/#const-null) · [STRUCT_H3DLG_VTABLE](../../constants/game-structures/#const-struct-h3dlg-vtable) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
<!-- llm:end erm.framework.functions.advmap-sethint 1 -->

# AdvMap_SetInfoPanelDef

ID: erm.framework.functions.advmap-setinfopaneldef
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/advmap-setinfopaneldef/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2404-2455-advmap-setinfopaneldef
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.advmap-setinfopaneldef 1 -->
## Purpose {#purpose}

Shows text and a DEF frame in the map panel, defaulting to 5000 ms. Temporarily replaces and restores two native DEF-name operands. Changes z1/v1; without defName calls the text variant.

## Call contract {#signature}

```erm
!!FU(AdvMap_SetInfoPanelDef):P(text)/(defName)/(defFrameId)/(timeToDisplay);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `text` | input |
| x2 | `defName` | input |
| x3 | `defFrameId` | input |
| x4 | `timeToDisplay` | output / mutable |

## State and dependencies {#context}

Named globals: [i^radioDlg_captions^](../../globals/#global-i-radiodlg-captions) · [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [i^radioDlg_freeSpaceAlerted^](../../globals/#global-i-radiodlg-freespacealerted) · [s^radioDlg_title^](../../globals/#global-s-radiodlg-title) · [s^temp_text^](../../globals/#global-s-temp-text).

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[AdvMap_SetInfoPanelText](../advmap-setinfopaneltext/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2404–2455, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ADV_MANAGER](../../constants/game-managers/#const-adv-manager) · [CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [FALSE](../../constants/universal/#const-false) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_STORED](../../constants/erm-commands/#const-m-stored) · [M_STR](../../constants/erm-commands/#const-m-str) · [NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item) · [RADIO_DLG_FLAG_BTN_CANCEL](../../constants/radio-dialogs/#const-radio-dlg-flag-btn-cancel) · [RADIO_DLG_MAX_ITEMS](../../constants/radio-dialogs/#const-radio-dlg-max-items)
<!-- llm:end erm.framework.functions.advmap-setinfopaneldef 1 -->

# AdvMap_SetInfoPanelText

ID: erm.framework.functions.advmap-setinfopaneltext
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/advmap-setinfopaneltext/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2377-2403-advmap-setinfopaneltext
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.advmap-setinfopaneltext 1 -->
## Purpose {#purpose}

Shows nonempty text in the map information panel for timeToDisplay milliseconds (default 5000). Uses s^temp_text^ and changes v1.

## Call contract {#signature}

```erm
!!FU(AdvMap_SetInfoPanelText):P(text)/(timeToDisplay);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `text` | input |
| x2 | `timeToDisplay` | output / mutable |

## State and dependencies {#context}

Named globals: [s^temp_text^](../../globals/#global-s-temp-text).

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2377–2403, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ADV_MANAGER](../../constants/game-managers/#const-adv-manager) · [CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall)
<!-- llm:end erm.framework.functions.advmap-setinfopaneltext 1 -->

# Array_Clone

ID: erm.framework.functions.array-clone
URL: https://asmedian.github.io/modding-guide/en/erm/framework/functions/array-clone/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-619-630-array-clone
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.array-clone 1 -->
## Purpose {#purpose}

Creates an array copy owned by the caller trigger and returns its ID. Strings are copied as values.

## Call contract {#signature}

```erm
!!FU(Array_Clone):P(srcArray)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `srcArray` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ExtendArrayLifetime`.

## Related functions {#calls}

[Array_Copy](../array-copy/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 619–630, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
<!-- llm:end erm.framework.functions.array-clone 1 -->

