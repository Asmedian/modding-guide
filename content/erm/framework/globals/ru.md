---
{"title":"Глобальные переменные Framework","summary":"Контекст боя, календаря, клавиатуры и мыши; публичные данные и служебное состояние.","translationStatus":"reviewed"}
---

## Область действия {#lifetime}

Публичные переменные — подготовленный Framework контекст событий. Читайте их внутри соответствующей цепочки; запись в них не заменяет изменение параметров события или команды движка. Клавиатура и часть контекста мыши восстанавливаются завершающими обработчиками. Бой обновляется через UpdateBattleVars и боевые события, календарь — в OnEveryDay, границы ID — в OnStartOrLoad.

## Календарь {#timer}

| Переменная | Назначение | Связи |
| --- | --- | --- |
| `i^timerDay^` {#global-i-timerday} | День с начала игры, 1.. | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerWeekDay^` {#global-i-timerweekday} | День недели, 1..7 | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerMonthDay^` {#global-i-timermonthday} | День месяца, 1..28 | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerWeek^` {#global-i-timerweek} | Неделя с начала игры, 1.. | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerMonthWeek^` {#global-i-timermonthweek} | Неделя месяца, 1..4 | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerMonth^` {#global-i-timermonth} | Месяц с начала игры, 1.. | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerOnce^` {#global-i-timeronce} | TRUE при первом вызове за этот день | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerOwner^` {#global-i-timerowner} | Текущий игрок, 0..7 | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerIsAi^` {#global-i-timerisai} | TRUE для игрока ИИ | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^timerIsHuman^` {#global-i-timerishuman} | TRUE для человека | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |

## Клавиатура {#keyboard}

| Переменная | Назначение | Связи |
| --- | --- | --- |
| `i^key^` {#global-i-key} | Код текущей клавиши | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [CollectMouseEventData](../functions/collectmouseeventdata/) · [OnKeyPressed](../functions/onkeypressed/) · [OnKeyReleased](../functions/onkeyreleased/) |
| `i^key_down^` {#global-i-key-down} | TRUE при первоначальном KeyPressed; не определяет состояние KeyReleased | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [OnKeyPressed](../functions/onkeypressed/) |
| `i^key_leftAlt^` {#global-i-key-leftalt} | Состояние leftAlt: 0/1. Общий модификатор объединяет левую и правую клавиши. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_rightAlt^` {#global-i-key-rightalt} | Состояние rightAlt: 0/1. Общий модификатор объединяет левую и правую клавиши. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_alt^` {#global-i-key-alt} | Состояние alt: 0/1. Общий модификатор объединяет левую и правую клавиши. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_leftCtrl^` {#global-i-key-leftctrl} | Состояние leftCtrl: 0/1. Общий модификатор объединяет левую и правую клавиши. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_rightCtrl^` {#global-i-key-rightctrl} | Состояние rightCtrl: 0/1. Общий модификатор объединяет левую и правую клавиши. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_ctrl^` {#global-i-key-ctrl} | Состояние ctrl: 0/1. Общий модификатор объединяет левую и правую клавиши. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_leftShift^` {#global-i-key-leftshift} | Состояние leftShift: 0/1. Общий модификатор объединяет левую и правую клавиши. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_rightShift^` {#global-i-key-rightshift} | Состояние rightShift: 0/1. Общий модификатор объединяет левую и правую клавиши. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |
| `i^key_shift^` {#global-i-key-shift} | Состояние shift: 0/1. Общий модификатор объединяет левую и правую клавиши. | [SavePrevKeyModsState](../functions/saveprevkeymodsstate/) · [RestorePrevKeyModsState](../functions/restoreprevkeymodsstate/) · [GetKeyModsState](../functions/getkeymodsstate/) |

## Мышь и диалоги {#mouse}

| Переменная | Назначение | Связи |
| --- | --- | --- |
| `i^mouse_x^` {#global-i-mouse-x} | X курсора в окне | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_y^` {#global-i-mouse-y} | Y курсора в окне | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_battleHex^` {#global-i-mouse-battlehex} | Гекс боя в контексте CM:D | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_flags^` {#global-i-mouse-flags} | Флаги мыши CM:F | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_hero_0^` {#global-i-mouse-hero-0} | Первый герой CM:H | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_hero_1^` {#global-i-mouse-hero-1} | Второй герой CM:H; не входит в стек восстановления этого снимка | [CollectMouseEventData](../functions/collectmouseeventdata/) |
| `i^mouse_item^` {#global-i-mouse-item} | ID элемента CM:I | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_mapX^` {#global-i-mouse-mapx} | X карты из CM:P | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_mapY^` {#global-i-mouse-mapy} | Y карты из CM:P | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_mapZ^` {#global-i-mouse-mapz} | Уровень карты из CM:P | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^mouse_action^` {#global-i-mouse-action} | CM:S; отпускание LMB на кнопке выхода нормализовано в обычное отпускание | [CollectMouseEventData](../functions/collectmouseeventdata/) · [SavePrevMouseEventData](../functions/saveprevmouseeventdata/) · [RestorePrevMouseEventData](../functions/restoreprevmouseeventdata/) |
| `i^dlg_id^` {#global-i-dlg-id} | ID пользовательского диалога; сохраняется и восстанавливается вокруг события. | [OnCustomDialogEvent](../functions/oncustomdialogevent/) · [OnCustomDialogEvent_Quit](../functions/oncustomdialogevent-quit/) |
| `i^dlg_action^` {#global-i-dlg-action} | Действие CM:T; не входит в стек восстановления мыши этого снимка. | [CollectMouseEventData](../functions/collectmouseeventdata/) |

## Бой {#battle}

| Переменная | Назначение | Связи |
| --- | --- | --- |
| `i^battle_round^` {#global-i-battle-round} | Раунд, INT_MIN до инициализации | [OnBeforeBattle](../functions/onbeforebattle/) · [OnBeforeBattleUniversal](../functions/onbeforebattleuniversal/) · [OnBattleRound](../functions/onbattleround/) · [OnBattleReplay](../functions/onbattlereplay/) |
| `i^battle_current_stack^` {#global-i-battle-current-stack} | Стек, получающий управление, либо NO_STACK | [OnBeforeBattleUniversal](../functions/onbeforebattleuniversal/) · [OnBeforeBattleStackTurn](../functions/onbeforebattlestackturn/) · [OnBattleStackObtainsTurn](../functions/onbattlestackobtainsturn/) |
| `i^battle_current_side^` {#global-i-battle-current-side} | Сторона текущего стека, с учётом гипноза | [OnBeforeBattleUniversal](../functions/onbeforebattleuniversal/) · [OnBeforeBattleStackTurn](../functions/onbeforebattlestackturn/) · [OnBattleStackObtainsTurn](../functions/onbattlestackobtainsturn/) |
| `i^battle_acting_stack^` {#global-i-battle-acting-stack} | BG:N последнего начала действия | [OnBeforeBattleUniversal](../functions/onbeforebattleuniversal/) · [OnBeforeBattleAction](../functions/onbeforebattleaction/) · [OnBattleReplay](../functions/onbattlereplay/) |
| `i^battle_acting_side^` {#global-i-battle-acting-side} | BG:Q последнего начала действия | [OnBeforeBattleUniversal](../functions/onbeforebattleuniversal/) · [OnBeforeBattleAction](../functions/onbeforebattleaction/) · [OnBattleReplay](../functions/onbattlereplay/) |
| `i^battle_x^` {#global-i-battle-x} | X места боя | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_y^` {#global-i-battle-y} | Y места боя | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_z^` {#global-i-battle-z} | Уровень места боя | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_hero_vs_hero^` {#global-i-battle-hero-vs-hero} | У защитника есть герой | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_hasHuman^` {#global-i-battle-hashuman} | Хотя бы одна сторона — человек | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_humanOnly^` {#global-i-battle-humanonly} | Обе стороны — люди | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_aiOnly^` {#global-i-battle-aionly} | Обе стороны управляются ИИ | [OnBeforeBattleAction](../functions/onbeforebattleaction/) · [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_isQuick^` {#global-i-battle-isquick} | Быстрый бой; может измениться во время боя | [OnBeforeBattleAction](../functions/onbeforebattleaction/) · [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_isVisible^` {#global-i-battle-isvisible} | Не aiOnly и не isQuick | [OnBeforeBattleAction](../functions/onbeforebattleaction/) · [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_isNetwork^` {#global-i-battle-isnetwork} | Хотя бы одна сторона удалённая | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_isActingSideUiUser^` {#global-i-battle-isactingsideuiuser} | Вычисляется по battle_current_side и battle_localHuman_*, несмотря на слово Acting в имени | [OnBeforeBattleStackTurn](../functions/onbeforebattlestackturn/) · [OnBattleStackObtainsTurn](../functions/onbattlestackobtainsturn/) · [OnBeforeBattleAction](../functions/onbeforebattleaction/) |
| `i^battle_type^` {#global-i-battle-type} | Маска BATTLE_TYPE_FLAG_* | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_owner_0^` {#global-i-battle-owner-0} | Владелец либо NO_OWNER; сторона 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_hero_0^` {#global-i-battle-hero-0} | Герой либо NO_HERO; сторона 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_ai_0^` {#global-i-battle-ai-0} | Стороной управляет ИИ; сторона 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_human_0^` {#global-i-battle-human-0} | Стороной управляет человек; сторона 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_remote_0^` {#global-i-battle-remote-0} | Удалённый человек; сторона 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_local_0^` {#global-i-battle-local-0} | Не удалённая сторона, включая локальный ИИ; сторона 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_localHuman_0^` {#global-i-battle-localhuman-0} | Локальный человек; сторона 0. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_owner_1^` {#global-i-battle-owner-1} | Владелец либо NO_OWNER; сторона 1. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_hero_1^` {#global-i-battle-hero-1} | Герой либо NO_HERO; сторона 1. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_ai_1^` {#global-i-battle-ai-1} | Стороной управляет ИИ; сторона 1. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_human_1^` {#global-i-battle-human-1} | Стороной управляет человек; сторона 1. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_remote_1^` {#global-i-battle-remote-1} | Удалённый человек; сторона 1. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_local_1^` {#global-i-battle-local-1} | Не удалённая сторона, включая локальный ИИ; сторона 1. | [UpdateBattleVars](../functions/updatebattlevars/) |
| `i^battle_localHuman_1^` {#global-i-battle-localhuman-1} | Локальный человек; сторона 1. | [UpdateBattleVars](../functions/updatebattlevars/) |

## Границы ID {#limits}

| Переменная | Назначение | Связи |
| --- | --- | --- |
| `i^maxArtifacId^` {#global-i-maxartifacid} | GetMaxArtifactId: ART_LAST_WOG; написание Artifac без t сохранено | [OnStartOrLoad](../functions/onstartorload/) |
| `i^maxHeroId^` {#global-i-maxheroid} | GetMaxHeroId: верхняя граница ID героев | [OnStartOrLoad](../functions/onstartorload/) |
| `i^maxMonsterId^` {#global-i-maxmonsterid} | GetMaxMonsterId: верхняя граница ID существ | [OnStartOrLoad](../functions/onstartorload/) |
| `i^maxSpellId^` {#global-i-maxspellid} | GetMaxSpellId: SPELL_LAST_WOG | [OnStartOrLoad](../functions/onstartorload/) |

## Служебное состояние {#internal}

| Переменная | Назначение | Связи |
| --- | --- | --- |
| `i^savedEventData^` {#global-i-savedeventdata} | ID временного массива сохранённых контекстов | [ClearEventChainData](../functions/cleareventchaindata/) · [SaveEventData](../functions/saveeventdata/) · [RestoreEventData](../functions/restoreeventdata/) |
| `i^savedEventDataPos^` {#global-i-savedeventdatapos} | Текущая позиция в стеке контекстов | [ClearEventChainData](../functions/cleareventchaindata/) · [SaveEventData](../functions/saveeventdata/) · [RestoreEventData](../functions/restoreeventdata/) |
| `i^era_everyDayTimerLastDay^` {#global-i-era-everydaytimerlastday} | Последний день для вычисления timerOnce | [OnAfterErmInstructions](../functions/onaftererminstructions/) · [OnEveryDay](../functions/oneveryday/) |
| `i^radioDlg_captions^` {#global-i-radiodlg-captions} | ID массива подписей | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `i^radioDlg_tags^` {#global-i-radiodlg-tags} | ID массива тегов | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_SelectItemByTag](../functions/radiodlg-selectitembytag/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) · [RadioDlg_GetItemTag](../functions/radiodlg-getitemtag/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `i^radioDlg_values^` {#global-i-radiodlg-values} | ID массива чисел | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_SelectItemByValue](../functions/radiodlg-selectitembyvalue/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) · [RadioDlg_GetItemValue](../functions/radiodlg-getitemvalue/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `i^radioDlg_numItems^` {#global-i-radiodlg-numitems} | Число пунктов | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_AddCancelButton](../functions/radiodlg-addcancelbutton/) · [RadioDlg_SelectItem](../functions/radiodlg-selectitem/) · [RadioDlg_SelectItemByValue](../functions/radiodlg-selectitembyvalue/) · [RadioDlg_SelectItemByTag](../functions/radiodlg-selectitembytag/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) · [RadioDlg_GetNumItems](../functions/radiodlg-getnumitems/) · [RadioDlg_GetItemValue](../functions/radiodlg-getitemvalue/) · [RadioDlg_GetItemTag](../functions/radiodlg-getitemtag/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `i^radioDlg_selectedItemInd^` {#global-i-radiodlg-selecteditemind} | Выбранный индекс либо NO_RADIO_DLG_ITEM | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_SelectItem](../functions/radiodlg-selectitem/) · [RadioDlg_SelectItemByValue](../functions/radiodlg-selectitembyvalue/) · [RadioDlg_SelectItemByTag](../functions/radiodlg-selectitembytag/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `i^radioDlg_flags^` {#global-i-radiodlg-flags} | Маска флагов диалога | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_AddCancelButton](../functions/radiodlg-addcancelbutton/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `i^radioDlg_freeSpaceAlerted^` {#global-i-radiodlg-freespacealerted} | Уже показано сообщение о нехватке места | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_AddCancelButton](../functions/radiodlg-addcancelbutton/) · [RadioDlg_AddItem](../functions/radiodlg-additem/) |
| `s^radioDlg_title^` {#global-s-radiodlg-title} | Заголовок строящегося RadioDlg. Меняйте через RadioDlg_SetTitle. | [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) · [RadioDlg_Reset](../functions/radiodlg-reset/) · [RadioDlg_SetTitle](../functions/radiodlg-settitle/) · [RadioDlg_Show](../functions/radiodlg-show/) |
| `s^temp^` {#global-s-temp} | Рабочая строка реализации. Перезаписывается и очищается помощниками; не является устойчивым хранилищем результата. | [Array_Pop](../functions/array-pop/) · [Array_Move](../functions/array-move/) · [Array_Splice](../functions/array-splice/) · [Array_Join](../functions/array-join/) · [CompareStrings_Bridge_INTERNAL](../functions/comparestrings-bridge-internal/) · [GetStrAtAddr](../functions/getstrataddr/) · [StrToUpper](../functions/strtoupper/) · [StrToLower](../functions/strtolower/) · [RadioDlg_SelectItemByTag](../functions/radiodlg-selectitembytag/) · [RadioDlg_GetItemTag](../functions/radiodlg-getitemtag/) · [RadioDlg_Show](../functions/radiodlg-show/) · [GetHeroPortraitName](../functions/getheroportraitname/) |
| `s^temp_text^` {#global-s-temp-text} | Рабочая строка реализации. Перезаписывается и очищается помощниками; не является устойчивым хранилищем результата. | [AdvMap_SetInfoPanelText](../functions/advmap-setinfopaneltext/) · [AdvMap_SetInfoPanelDef](../functions/advmap-setinfopaneldef/) |
| `s^result^` {#global-s-result} | Рабочая строка реализации. Перезаписывается и очищается помощниками; не является устойчивым хранилищем результата. | [Array_Join](../functions/array-join/) · [GetStrAtAddr](../functions/getstrataddr/) · [MonCountToFuzzyText](../functions/moncounttofuzzytext/) |

## Границы реестра {#audit}

Имена `i^umt_randomizationIntervalDays^` и `i^umt_playAltThemesSequently^` встречаются только в комментарии-примере конфигурации другого мода: это не API Framework. Динамическое имя `i^%z(globalVarsPrefixPtr)%z(configKeyPtr)^` создаётся из аргументов вызывающего кода. Простое регулярное выражение также захватывает хвосты строк как ложные i^/s^; они исключены из каталога.
