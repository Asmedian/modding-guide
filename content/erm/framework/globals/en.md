---
{"title":"Framework globals","summary":"Combat, calendar, keyboard and mouse context; public data and internal state.","translationStatus":"reviewed"}
---

## Lifetime {#lifetime}

Public variables provide event context prepared by Framework. Read them inside the relevant chain; writing them does not replace changing event arguments or engine commands. Final handlers restore keyboard and part of mouse context. UpdateBattleVars and battle events update combat state, OnEveryDay updates calendar data, and OnStartOrLoad updates ID bounds.

## Calendar {#timer}

| Variable | Meaning | References |
| --- | --- | --- |
| `i^timerDay^` {#global-i-timerday} | Day since game start, 1.. | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerWeekDay^` {#global-i-timerweekday} | Day of week, 1..7 | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerMonthDay^` {#global-i-timermonthday} | Day of month, 1..28 | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerWeek^` {#global-i-timerweek} | Week since game start, 1.. | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerMonthWeek^` {#global-i-timermonthweek} | Week of month, 1..4 | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerMonth^` {#global-i-timermonth} | Month since game start, 1.. | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerOnce^` {#global-i-timeronce} | TRUE on the first invocation that day | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerOwner^` {#global-i-timerowner} | Current player, 0..7 | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerIsAi^` {#global-i-timerisai} | TRUE for an AI player | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerIsHuman^` {#global-i-timerishuman} | TRUE for a human | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |

## Keyboard {#keyboard}

| Variable | Meaning | References |
| --- | --- | --- |
| `i^key^` {#global-i-key} | Current key code | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [CollectMouseEventData](../functions/collectmouseeventdata/) · [OnKeyPressed](../functions/onkeypressed/) · [OnKeyReleased](../functions/onkeyreleased/) |
| `i^key_down^` {#global-i-key-down} | TRUE on initial KeyPressed; does not define KeyReleased state | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [OnKeyPressed](../functions/onkeypressed/) |
| `i^key_leftAlt^` {#global-i-key-leftalt} | State of leftAlt: 0/1. A combined modifier joins left and right keys. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_rightAlt^` {#global-i-key-rightalt} | State of rightAlt: 0/1. A combined modifier joins left and right keys. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_alt^` {#global-i-key-alt} | State of alt: 0/1. A combined modifier joins left and right keys. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_leftCtrl^` {#global-i-key-leftctrl} | State of leftCtrl: 0/1. A combined modifier joins left and right keys. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_rightCtrl^` {#global-i-key-rightctrl} | State of rightCtrl: 0/1. A combined modifier joins left and right keys. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_ctrl^` {#global-i-key-ctrl} | State of ctrl: 0/1. A combined modifier joins left and right keys. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_leftShift^` {#global-i-key-leftshift} | State of leftShift: 0/1. A combined modifier joins left and right keys. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_rightShift^` {#global-i-key-rightshift} | State of rightShift: 0/1. A combined modifier joins left and right keys. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_shift^` {#global-i-key-shift} | State of shift: 0/1. A combined modifier joins left and right keys. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |

## Mouse and dialogs {#mouse}

| Variable | Meaning | References |
| --- | --- | --- |
| `i^mouse_x^` {#global-i-mouse-x} | Cursor X in the window | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_y^` {#global-i-mouse-y} | Cursor Y in the window | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_battleHex^` {#global-i-mouse-battlehex} | Battle hex from CM:D context | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_flags^` {#global-i-mouse-flags} | Mouse flags from CM:F | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_hero_0^` {#global-i-mouse-hero-0} | First hero from CM:H | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_hero_1^` {#global-i-mouse-hero-1} | Second hero from CM:H; not included in this snapshot’s restoration stack | [CollectMouseEventData](../functions/collectmouseeventdata/) |
| `i^mouse_item^` {#global-i-mouse-item} | Item ID from CM:I | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_mapX^` {#global-i-mouse-mapx} | Map X from CM:P | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_mapY^` {#global-i-mouse-mapy} | Map Y from CM:P | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_mapZ^` {#global-i-mouse-mapz} | Map level from CM:P | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_action^` {#global-i-mouse-action} | CM:S; exit-button LMB release is normalized to ordinary release | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^dlg_id^` {#global-i-dlg-id} | Custom dialog ID; saved and restored around the event. | [OnCustomDialogEvent](../functions/oncustomdialogevent/) · [OnCustomDialogEvent_Quit](../functions/oncustomdialogevent-quit/) |
| `i^dlg_action^` {#global-i-dlg-action} | CM:T action; not included in this snapshot’s mouse restoration stack. | [CollectMouseEventData](../functions/collectmouseeventdata/) |

## Combat {#battle}

| Variable | Meaning | References |
| --- | --- | --- |
| `i^battle_round^` {#global-i-battle-round} | Round, INT_MIN before initialization | [OnBeforeBattle](../functions/onbeforebattle/) · [OnBeforeBattleUniversal](../functions/onbeforebattleuniversal/) · [OnBattleRound](../functions/onbattleround/) · [OnBattleReplay](../functions/onbattlereplay/) |
| `i^battle_current_stack^` {#global-i-battle-current-stack} | Stack receiving control, or NO_STACK | [OnBeforeBattleUniversal](../functions/onbeforebattleuniversal/) · [OnBeforeBattleStackTurn](../functions/onbeforebattlestackturn/) · [OnBattleStackObtainsTurn](../functions/onbattlestackobtainsturn/) |
| `i^battle_current_side^` {#global-i-battle-current-side} | Current stack side, accounting for hypnosis | [OnBeforeBattleUniversal](../functions/onbeforebattleuniversal/) · [OnBeforeBattleStackTurn](../functions/onbeforebattlestackturn/) · [OnBattleStackObtainsTurn](../functions/onbattlestackobtainsturn/) |
| `i^battle_acting_stack^` {#global-i-battle-acting-stack} | BG:N at the latest action start | [OnBeforeBattleUniversal](../functions/onbeforebattleuniversal/) · [OnBeforeBattleAction](../functions/onbeforebattleaction/) · [OnBattleReplay](../functions/onbattlereplay/) |
| `i^battle_acting_side^` {#global-i-battle-acting-side} | BG:Q at the latest action start | [OnBeforeBattleUniversal](../functions/onbeforebattleuniversal/) · [OnBeforeBattleAction](../functions/onbeforebattleaction/) · [OnBattleReplay](../functions/onbattlereplay/) |
| `i^battle_x^` {#global-i-battle-x} | Battle location X | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_y^` {#global-i-battle-y} | Battle location Y | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_z^` {#global-i-battle-z} | Battle location level | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_hero_vs_hero^` {#global-i-battle-hero-vs-hero} | Defender has a hero | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_hasHuman^` {#global-i-battle-hashuman} | At least one side is human | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_humanOnly^` {#global-i-battle-humanonly} | Both sides are human | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_aiOnly^` {#global-i-battle-aionly} | Both sides are AI-controlled | [OnBeforeBattleAction](../functions/onbeforebattleaction/) · [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_isQuick^` {#global-i-battle-isquick} | Quick combat; may change during battle | [OnBeforeBattleAction](../functions/onbeforebattleaction/) · [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_isVisible^` {#global-i-battle-isvisible} | Neither aiOnly nor isQuick | [OnBeforeBattleAction](../functions/onbeforebattleaction/) · [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_isNetwork^` {#global-i-battle-isnetwork} | At least one side is remote | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_isActingSideUiUser^` {#global-i-battle-isactingsideuiuser} | Computed from battle_current_side and battle_localHuman_*, despite Acting in the name | [OnBeforeBattleStackTurn](../functions/onbeforebattlestackturn/) · [OnBattleStackObtainsTurn](../functions/onbattlestackobtainsturn/) · [OnBeforeBattleAction](../functions/onbeforebattleaction/) |
| `i^battle_type^` {#global-i-battle-type} | BATTLE_TYPE_FLAG_* mask | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_owner_0^` {#global-i-battle-owner-0} | Owner or NO_OWNER; side 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_hero_0^` {#global-i-battle-hero-0} | Hero or NO_HERO; side 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_ai_0^` {#global-i-battle-ai-0} | Side is AI-controlled; side 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_human_0^` {#global-i-battle-human-0} | Side is human-controlled; side 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_remote_0^` {#global-i-battle-remote-0} | Remote human; side 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_local_0^` {#global-i-battle-local-0} | Non-remote side, including local AI; side 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_localHuman_0^` {#global-i-battle-localhuman-0} | Local human; side 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_owner_1^` {#global-i-battle-owner-1} | Owner or NO_OWNER; side 1. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_hero_1^` {#global-i-battle-hero-1} | Hero or NO_HERO; side 1. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_ai_1^` {#global-i-battle-ai-1} | Side is AI-controlled; side 1. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_human_1^` {#global-i-battle-human-1} | Side is human-controlled; side 1. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_remote_1^` {#global-i-battle-remote-1} | Remote human; side 1. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_local_1^` {#global-i-battle-local-1} | Non-remote side, including local AI; side 1. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_localHuman_1^` {#global-i-battle-localhuman-1} | Local human; side 1. | [UpdateBattleVars](../functions/updatebattlevars/) |

## ID bounds {#limits}

| Variable | Meaning | References |
| --- | --- | --- |
| `i^maxArtifacId^` {#global-i-maxartifacid} | GetMaxArtifactId: ART_LAST_WOG; spelling Artifac without t is preserved | [OnStartOrLoad](../functions/onstartorload/) |
| `i^maxHeroId^` {#global-i-maxheroid} | GetMaxHeroId: upper hero ID bound | [OnStartOrLoad](../functions/onstartorload/) |
| `i^maxMonsterId^` {#global-i-maxmonsterid} | GetMaxMonsterId: upper creature ID bound | [OnStartOrLoad](../functions/onstartorload/) |
| `i^maxSpellId^` {#global-i-maxspellid} | GetMaxSpellId: SPELL_LAST_WOG | [OnStartOrLoad](../functions/onstartorload/) |

## Internal state {#internal}

| Variable | Meaning | References |
| --- | --- | --- |
| `i^savedEventData^` {#global-i-savedeventdata} | Temporary saved-context array ID | [ClearEventChainData](../functions/cleareventchaindata/) · [SaveEventData](../functions/saveeventdata/) · [RestoreEventData](../functions/restoreeventdata/) |
| `i^savedEventDataPos^` {#global-i-savedeventdatapos} | Current context-stack position | [ClearEventChainData](../functions/cleareventchaindata/) · [SaveEventData](../functions/saveeventdata/) · [RestoreEventData](../functions/restoreeventdata/) |
| `i^era_everyDayTimerLastDay^` {#global-i-era-everydaytimerlastday} | Last day used to compute timerOnce | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^radioDlg_captions^` {#global-i-radiodlg-captions} | Caption array ID | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `i^radioDlg_tags^` {#global-i-radiodlg-tags} | Tag array ID | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_SelectItemByTag](../functions/radiodlg-selectitembytag/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) · [RadioDlg_GetItemTag](../functions/radiodlg-getitemtag/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `i^radioDlg_values^` {#global-i-radiodlg-values} | Value array ID | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_SelectItemByValue](../functions/radiodlg-selectitembyvalue/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) · [RadioDlg_GetItemValue](../functions/radiodlg-getitemvalue/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `i^radioDlg_numItems^` {#global-i-radiodlg-numitems} | Item count | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_AddCancelButton](../functions/radiodlg-addcancelbutton/) · [RadioDlg_SelectItem](../functions/radiodlg-selectitem/) · [RadioDlg_SelectItemByValue](../functions/radiodlg-selectitembyvalue/) · [RadioDlg_SelectItemByTag](../functions/radiodlg-selectitembytag/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) · [RadioDlg_GetNumItems](../functions/radiodlg-getnumitems/) · [RadioDlg_GetItemValue](../functions/radiodlg-getitemvalue/) · [RadioDlg_GetItemTag](../functions/radiodlg-getitemtag/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `i^radioDlg_selectedItemInd^` {#global-i-radiodlg-selecteditemind} | Selected index or NO_RADIO_DLG_ITEM | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_SelectItem](../functions/radiodlg-selectitem/) · [RadioDlg_SelectItemByValue](../functions/radiodlg-selectitembyvalue/) · [RadioDlg_SelectItemByTag](../functions/radiodlg-selectitembytag/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `i^radioDlg_flags^` {#global-i-radiodlg-flags} | Dialog flag mask | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_AddCancelButton](../functions/radiodlg-addcancelbutton/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `i^radioDlg_freeSpaceAlerted^` {#global-i-radiodlg-freespacealerted} | Out-of-space error already shown | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_AddCancelButton](../functions/radiodlg-addcancelbutton/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) |
| `s^radioDlg_title^` {#global-s-radiodlg-title} | Title of the RadioDlg being built. Change through RadioDlg_SetTitle. | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_SetTitle](../functions/radiodlg-settitle/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `s^temp^` {#global-s-temp} | Implementation scratch string. Helpers overwrite and clear it; it is not persistent result storage. | [Array_Pop](../functions/array-pop/) · [Array_Move](../functions/array-move/) · [Array_Splice](../functions/array-splice/) · [Array_Join](../functions/array-join/) · [CompareStrings_Bridge_INTERNAL](../functions/comparestrings-bridge-internal/) · [GetStrAtAddr](../functions/getstrataddr/) · [StrToUpper](../functions/strtoupper/) · [StrToLower](../functions/strtolower/) · [RadioDlg_SelectItemByTag](../functions/radiodlg-selectitembytag/) · [RadioDlg_GetItemTag](../functions/radiodlg-getitemtag/) · [RadioDlg_Show](../functions/radiodlg-show/) · [GetHeroPortraitName](../functions/getheroportraitname/) |
| `s^temp_text^` {#global-s-temp-text} | Implementation scratch string. Helpers overwrite and clear it; it is not persistent result storage. | [AdvMap_SetInfoPanelText](../functions/advmap-setinfopaneltext/) · [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) |
| `s^result^` {#global-s-result} | Implementation scratch string. Helpers overwrite and clear it; it is not persistent result storage. | [Array_Join](../functions/array-join/) · [GetStrAtAddr](../functions/getstrataddr/) · [MonCountToFuzzyText](../functions/moncounttofuzzytext/) |

## Registry boundaries {#audit}

The names `i^umt_randomizationIntervalDays^` and `i^umt_playAltThemesSequently^` occur only in a configuration example for another mod, and are not Framework API. Dynamic `i^%z(globalVarsPrefixPtr)%z(configKeyPtr)^` names derive from caller arguments. A naive regular expression also captures string endings as false i^/s^ matches; these are excluded.
