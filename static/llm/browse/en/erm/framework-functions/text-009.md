# OnAdventureMapRightMouseClick

ID: erm.framework.functions.onadventuremaprightmouseclick
URL: /en/erm/framework/functions/onadventuremaprightmouseclick/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-175-177-onadventuremaprightmouseclick
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onadventuremaprightmouseclick 1 -->
## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnAdventureMapRightMouseClick);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 175–177, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onadventuremaprightmouseclick 1 -->

# OnAfterErmInstructions_Quit

ID: erm.framework.functions.onaftererminstructions-quit
URL: /en/erm/framework/functions/onaftererminstructions-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-3-7-onaftererminstructions-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onaftererminstructions-quit 1 -->
## Purpose {#purpose}

Final handler for OnAfterErmInstructions: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnAfterErmInstructions_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[OnStartOrLoad](../onstartorload/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 3–7, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.onaftererminstructions-quit 1 -->

# OnAfterErmInstructions

ID: erm.framework.functions.onaftererminstructions
URL: /en/erm/framework/functions/onaftererminstructions/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-214-227-onaftererminstructions
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onaftererminstructions 1 -->
## Purpose {#purpose}

Creates the Framework daily timer and resets last-day tracking.

## Call contract {#signature}

```erm
!?FU(OnAfterErmInstructions);
```

## State and dependencies {#context}

Named globals: [i^timerDay^](../../globals/#global-i-timerday) · [i^timerWeekDay^](../../globals/#global-i-timerweekday) · [i^timerMonthDay^](../../globals/#global-i-timermonthday) · [i^timerWeek^](../../globals/#global-i-timerweek) · [i^timerMonthWeek^](../../globals/#global-i-timermonthweek) · [i^timerMonth^](../../globals/#global-i-timermonth) · [i^timerOnce^](../../globals/#global-i-timeronce) · [i^timerOwner^](../../globals/#global-i-timerowner) · [i^timerIsAi^](../../globals/#global-i-timerisai) · [i^timerIsHuman^](../../globals/#global-i-timerishuman) · [i^era_everyDayTimerLastDay^](../../globals/#global-i-era-everydaytimerlastday).

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 214–227, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onaftererminstructions 1 -->

# OnAfterLoadGame_Quit

ID: erm.framework.functions.onafterloadgame-quit
URL: /en/erm/framework/functions/onafterloadgame-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-8-12-onafterloadgame-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onafterloadgame-quit 1 -->
## Purpose {#purpose}

Final handler for OnAfterLoadGame: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnAfterLoadGame_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[OnStartOrLoad](../onstartorload/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 8–12, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false)
<!-- llm:end erm.framework.functions.onafterloadgame-quit 1 -->

# OnBattleMouseHint_Quit

ID: erm.framework.functions.onbattlemousehint-quit
URL: /en/erm/framework/functions/onbattlemousehint-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-64-66-onbattlemousehint-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbattlemousehint-quit 1 -->
## Purpose {#purpose}

Final handler for OnBattleMouseHint: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnBattleMouseHint_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 64–66, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onbattlemousehint-quit 1 -->

# OnBattleMouseHint

ID: erm.framework.functions.onbattlemousehint
URL: /en/erm/framework/functions/onbattlemousehint/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-202-204-onbattlemousehint
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbattlemousehint 1 -->
## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnBattleMouseHint);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 202–204, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onbattlemousehint 1 -->

# OnBattleReplay

ID: erm.framework.functions.onbattlereplay
URL: /en/erm/framework/functions/onbattlereplay/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-2905-2913-onbattlereplay
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbattlereplay 1 -->
## Purpose {#purpose}

Resets round/acting stack and refreshes combat parameters for replay.

## Call contract {#signature}

```erm
!?FU(OnBattleReplay);
```

## State and dependencies {#context}

Named globals: [i^battle_round^](../../globals/#global-i-battle-round) · [i^battle_acting_stack^](../../globals/#global-i-battle-acting-stack) · [i^battle_acting_side^](../../globals/#global-i-battle-acting-side).

## Related functions {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 2905–2913, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BATTLE_LEFT](../../constants/battle/#const-battle-left) · [INT_MIN](../../constants/data-types/#const-int-min) · [NO_STACK](../../constants/battle/#const-no-stack)
<!-- llm:end erm.framework.functions.onbattlereplay 1 -->

# OnBattleRound

ID: erm.framework.functions.onbattleround
URL: /en/erm/framework/functions/onbattleround/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-266-268-onbattleround
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbattleround 1 -->
## Purpose {#purpose}

Updates battle_round from the current round context.

## Call contract {#signature}

```erm
!?FU(OnBattleRound);
```

## State and dependencies {#context}

Named globals: [i^battle_round^](../../globals/#global-i-battle-round).

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 266–268, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onbattleround 1 -->

# OnBattleScreenMouseClick_Quit

ID: erm.framework.functions.onbattlescreenmouseclick-quit
URL: /en/erm/framework/functions/onbattlescreenmouseclick-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-49-51-onbattlescreenmouseclick-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbattlescreenmouseclick-quit 1 -->
## Purpose {#purpose}

Final handler for OnBattleScreenMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnBattleScreenMouseClick_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 49–51, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onbattlescreenmouseclick-quit 1 -->

# OnBattleScreenMouseClick

ID: erm.framework.functions.onbattlescreenmouseclick
URL: /en/erm/framework/functions/onbattlescreenmouseclick/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-187-189-onbattlescreenmouseclick
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbattlescreenmouseclick 1 -->
## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnBattleScreenMouseClick);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 187–189, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onbattlescreenmouseclick 1 -->

# OnBattleStackObtainsTurn

ID: erm.framework.functions.onbattlestackobtainsturn
URL: /en/erm/framework/functions/onbattlestackobtainsturn/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-275-284-onbattlestackobtainsturn
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbattlestackobtainsturn 1 -->
## Purpose {#purpose}

Converts side/index to a global stack ID and accounts for hypnosis when determining the current side.

## Call contract {#signature}

```erm
!?FU(OnBattleStackObtainsTurn);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `stackSide` | input |
| x2 | `stackInd` | input |

## State and dependencies {#context}

Named globals: [i^battle_current_stack^](../../globals/#global-i-battle-current-stack) · [i^battle_current_side^](../../globals/#global-i-battle-current-side) · [i^battle_isActingSideUiUser^](../../globals/#global-i-battle-isactingsideuiuser).

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 275–284, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BATTLE_STACKS_PER_SIDE](../../constants/battle/#const-battle-stacks-per-side) · [SPELL_HYPNOTIZE](../../constants/spells/#const-spell-hypnotize)
<!-- llm:end erm.framework.functions.onbattlestackobtainsturn 1 -->

# OnBeforeBattle_Quit

ID: erm.framework.functions.onbeforebattle-quit
URL: /en/erm/framework/functions/onbeforebattle-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-74-76-onbeforebattle-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbeforebattle-quit 1 -->
## Purpose {#purpose}

Final handler for OnBeforeBattle: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnBeforeBattle_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 74–76, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onbeforebattle-quit 1 -->

# OnBeforeBattle

ID: erm.framework.functions.onbeforebattle
URL: /en/erm/framework/functions/onbeforebattle/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-251-254-onbeforebattle
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbeforebattle 1 -->
## Purpose {#purpose}

Resets battle_round to INT_MIN before actual combat.

## Call contract {#signature}

```erm
!?FU(OnBeforeBattle);
```

## State and dependencies {#context}

Named globals: [i^battle_round^](../../globals/#global-i-battle-round).

## Related functions {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 251–254, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[INT_MIN](../../constants/data-types/#const-int-min)
<!-- llm:end erm.framework.functions.onbeforebattle 1 -->

# OnBeforeBattleAction

ID: erm.framework.functions.onbeforebattleaction
URL: /en/erm/framework/functions/onbeforebattleaction/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-285-291-onbeforebattleaction
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbeforebattleaction 1 -->
## Purpose {#purpose}

Reads BG:N/Q into battle_acting_stack/side and updates visible/quick combat flags.

## Call contract {#signature}

```erm
!?FU(OnBeforeBattleAction);
```

## State and dependencies {#context}

Named globals: [i^battle_acting_stack^](../../globals/#global-i-battle-acting-stack) · [i^battle_acting_side^](../../globals/#global-i-battle-acting-side) · [i^battle_aiOnly^](../../globals/#global-i-battle-aionly) · [i^battle_isQuick^](../../globals/#global-i-battle-isquick) · [i^battle_isVisible^](../../globals/#global-i-battle-isvisible) · [i^battle_isActingSideUiUser^](../../globals/#global-i-battle-isactingsideuiuser).

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 285–291, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.onbeforebattleaction 1 -->

# OnBeforeBattleStackTurn

ID: erm.framework.functions.onbeforebattlestackturn
URL: /en/erm/framework/functions/onbeforebattlestackturn/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-269-274-onbeforebattlestackturn
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbeforebattlestackturn 1 -->
## Purpose {#purpose}

Stores activeStack in battle_current_stack.

## Call contract {#signature}

```erm
!?FU(OnBeforeBattleStackTurn);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `activeStack` | input |

## State and dependencies {#context}

Named globals: [i^battle_current_stack^](../../globals/#global-i-battle-current-stack) · [i^battle_current_side^](../../globals/#global-i-battle-current-side) · [i^battle_isActingSideUiUser^](../../globals/#global-i-battle-isactingsideuiuser).

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 269–274, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onbeforebattlestackturn 1 -->

# OnBeforeBattleUniversal_Quit

ID: erm.framework.functions.onbeforebattleuniversal-quit
URL: /en/erm/framework/functions/onbeforebattleuniversal-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-77-83-onbeforebattleuniversal-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbeforebattleuniversal-quit 1 -->
## Purpose {#purpose}

Final handler for OnBeforeBattleUniversal: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnBeforeBattleUniversal_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 77–83, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onbeforebattleuniversal-quit 1 -->

# OnBeforeBattleUniversal

ID: erm.framework.functions.onbeforebattleuniversal
URL: /en/erm/framework/functions/onbeforebattleuniversal/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-255-262-onbeforebattleuniversal
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onbeforebattleuniversal 1 -->
## Purpose {#purpose}

Refreshes battle_* and resets current/acting stack context. May run in theoretical AI combat with no combat manager.

## Call contract {#signature}

```erm
!?FU(OnBeforeBattleUniversal);
```

## State and dependencies {#context}

Named globals: [i^battle_round^](../../globals/#global-i-battle-round) · [i^battle_current_stack^](../../globals/#global-i-battle-current-stack) · [i^battle_current_side^](../../globals/#global-i-battle-current-side) · [i^battle_acting_stack^](../../globals/#global-i-battle-acting-stack) · [i^battle_acting_side^](../../globals/#global-i-battle-acting-side).

## Related functions {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 255–262, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BATTLE_LEFT](../../constants/battle/#const-battle-left) · [INT_MIN](../../constants/data-types/#const-int-min) · [NO_STACK](../../constants/battle/#const-no-stack)
<!-- llm:end erm.framework.functions.onbeforebattleuniversal 1 -->

# OnCustomDialogEvent_Quit

ID: erm.framework.functions.oncustomdialogevent-quit
URL: /en/erm/framework/functions/oncustomdialogevent-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-70-73-oncustomdialogevent-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.oncustomdialogevent-quit 1 -->
## Purpose {#purpose}

Final handler for OnCustomDialogEvent: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnCustomDialogEvent_Quit);
```

## State and dependencies {#context}

Named globals: [i^dlg_id^](../../globals/#global-i-dlg-id).

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/) · [RestoreEventData](../restoreeventdata/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 70–73, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.oncustomdialogevent-quit 1 -->

# OnCustomDialogEvent

ID: erm.framework.functions.oncustomdialogevent
URL: /en/erm/framework/functions/oncustomdialogevent/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-208-213-oncustomdialogevent
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.oncustomdialogevent 1 -->
## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnCustomDialogEvent);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |

## State and dependencies {#context}

Named globals: [i^dlg_id^](../../globals/#global-i-dlg-id).

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/) · [SaveEventData](../saveeventdata/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 208–213, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.oncustomdialogevent 1 -->

