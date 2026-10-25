# OnEveryDay

ID: erm.framework.functions.oneveryday
URL: /en/erm/framework/functions/oneveryday/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-228-250-oneveryday
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.oneveryday 1 -->
## Purpose {#purpose}

Adds day, weekDay (1..7), once, owner, isAi arguments. once is TRUE only for the first invocation that day, not for every player.

## Call contract {#signature}

```erm
!?FU(OnEveryDay);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `day` | output / mutable |
| x2 | `weekDay` | output / mutable |
| x3 | `once` | output / mutable |
| x4 | `owner` | output / mutable |
| x5 | `isAi` | output / mutable |

## State and dependencies {#context}

Named globals: [i^timerDay^](../../globals/#global-i-timerday) · [i^timerWeekDay^](../../globals/#global-i-timerweekday) · [i^timerMonthDay^](../../globals/#global-i-timermonthday) · [i^timerWeek^](../../globals/#global-i-timerweek) · [i^timerMonthWeek^](../../globals/#global-i-timermonthweek) · [i^timerMonth^](../../globals/#global-i-timermonth) · [i^timerOnce^](../../globals/#global-i-timeronce) · [i^timerOwner^](../../globals/#global-i-timerowner) · [i^timerIsAi^](../../globals/#global-i-timerisai) · [i^timerIsHuman^](../../globals/#global-i-timerishuman) · [i^era_everyDayTimerLastDay^](../../globals/#global-i-era-everydaytimerlastday).

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 228–250, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[DAYS_IN_MONTH](../../constants/game-limits/#const-days-in-month) · [DAYS_IN_WEEK](../../constants/game-limits/#const-days-in-week) · [FALSE](../../constants/universal/#const-false) · [TRUE](../../constants/universal/#const-true)
<!-- llm:end erm.framework.functions.oneveryday 1 -->

# OnHeroesMeetScreenMouseClick_Quit

ID: erm.framework.functions.onheroesmeetscreenmouseclick-quit
URL: /en/erm/framework/functions/onheroesmeetscreenmouseclick-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-46-48-onheroesmeetscreenmouseclick-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onheroesmeetscreenmouseclick-quit 1 -->
## Purpose {#purpose}

Final handler for OnHeroesMeetScreenMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnHeroesMeetScreenMouseClick_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 46–48, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onheroesmeetscreenmouseclick-quit 1 -->

# OnHeroesMeetScreenMouseClick

ID: erm.framework.functions.onheroesmeetscreenmouseclick
URL: /en/erm/framework/functions/onheroesmeetscreenmouseclick/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-184-186-onheroesmeetscreenmouseclick
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onheroesmeetscreenmouseclick 1 -->
## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnHeroesMeetScreenMouseClick);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 184–186, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onheroesmeetscreenmouseclick 1 -->

# OnHeroScreenMouseClick_Quit

ID: erm.framework.functions.onheroscreenmouseclick-quit
URL: /en/erm/framework/functions/onheroscreenmouseclick-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-43-45-onheroscreenmouseclick-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onheroscreenmouseclick-quit 1 -->
## Purpose {#purpose}

Final handler for OnHeroScreenMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnHeroScreenMouseClick_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 43–45, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onheroscreenmouseclick-quit 1 -->

# OnHeroScreenMouseClick

ID: erm.framework.functions.onheroscreenmouseclick
URL: /en/erm/framework/functions/onheroscreenmouseclick/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-181-183-onheroscreenmouseclick
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onheroscreenmouseclick 1 -->
## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnHeroScreenMouseClick);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 181–183, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onheroscreenmouseclick 1 -->

# OnKeyPressed_Quit

ID: erm.framework.functions.onkeypressed-quit
URL: /en/erm/framework/functions/onkeypressed-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-13-25-onkeypressed-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onkeypressed-quit 1 -->
## Purpose {#purpose}

Final handler for OnKeyPressed: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnKeyPressed_Quit);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `key` | output / mutable |
| x2 | `preventDefault` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `GetGameState`.

## Related functions {#calls}

[RestorePrevKeyModsState](../restoreprevkeymodsstate/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 13–25, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[DLG_ADVMAP](../../constants/dialogs/#const-dlg-advmap) · [DLG_BATTLE](../../constants/dialogs/#const-dlg-battle) · [DLG_HERO_MEETING_SCREEN](../../constants/dialogs/#const-dlg-hero-meeting-screen) · [DLG_HERO_SCREEN](../../constants/dialogs/#const-dlg-hero-screen) · [DLG_TOWN_SCREEN](../../constants/dialogs/#const-dlg-town-screen)
<!-- llm:end erm.framework.functions.onkeypressed-quit 1 -->

# OnKeyPressed

ID: erm.framework.functions.onkeypressed
URL: /en/erm/framework/functions/onkeypressed/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-148-156-onkeypressed
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onkeypressed 1 -->
## Purpose {#purpose}

Saves keyboard context and updates key/modifiers. KeyPressed also stores isDown; the final handler restores previous state.

## Call contract {#signature}

```erm
!?FU(OnKeyPressed);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `key` | input |
| x2 | `preventDefault` | input |
| x3 | `isDown` | input |

## State and dependencies {#context}

Named globals: [i^key^](../../globals/#global-i-key) · [i^key_down^](../../globals/#global-i-key-down).

## Related functions {#calls}

[GetKeyModsState](../getkeymodsstate/) · [SavePrevKeyModsState](../saveprevkeymodsstate/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 148–156, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onkeypressed 1 -->

# OnKeyReleased_Quit

ID: erm.framework.functions.onkeyreleased-quit
URL: /en/erm/framework/functions/onkeyreleased-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-26-36-onkeyreleased-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onkeyreleased-quit 1 -->
## Purpose {#purpose}

Final handler for OnKeyReleased: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnKeyReleased_Quit);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `key` | output / mutable |
| x2 | `preventDefault` | output / mutable |
| x3 | `isDown` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `GetGameState`.

## Related functions {#calls}

[RestorePrevKeyModsState](../restoreprevkeymodsstate/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 26–36, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[DLG_ADVMAP](../../constants/dialogs/#const-dlg-advmap) · [DLG_BATTLE](../../constants/dialogs/#const-dlg-battle) · [DLG_HERO_MEETING_SCREEN](../../constants/dialogs/#const-dlg-hero-meeting-screen) · [DLG_HERO_SCREEN](../../constants/dialogs/#const-dlg-hero-screen) · [DLG_TOWN_SCREEN](../../constants/dialogs/#const-dlg-town-screen)
<!-- llm:end erm.framework.functions.onkeyreleased-quit 1 -->

# OnKeyReleased

ID: erm.framework.functions.onkeyreleased
URL: /en/erm/framework/functions/onkeyreleased/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-157-164-onkeyreleased
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onkeyreleased 1 -->
## Purpose {#purpose}

Saves keyboard context and updates key/modifiers. KeyPressed also stores isDown; the final handler restores previous state.

## Call contract {#signature}

```erm
!?FU(OnKeyReleased);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `key` | input |
| x2 | `preventDefault` | input |

## State and dependencies {#context}

Named globals: [i^key^](../../globals/#global-i-key).

## Related functions {#calls}

[GetKeyModsState](../getkeymodsstate/) · [SavePrevKeyModsState](../saveprevkeymodsstate/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 157–164, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onkeyreleased 1 -->

# OnKingdomOverviewMouseClick_Quit

ID: erm.framework.functions.onkingdomoverviewmouseclick-quit
URL: /en/erm/framework/functions/onkingdomoverviewmouseclick-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-61-63-onkingdomoverviewmouseclick-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onkingdomoverviewmouseclick-quit 1 -->
## Purpose {#purpose}

Final handler for OnKingdomOverviewMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnKingdomOverviewMouseClick_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 61–63, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onkingdomoverviewmouseclick-quit 1 -->

# OnKingdomOverviewMouseClick

ID: erm.framework.functions.onkingdomoverviewmouseclick
URL: /en/erm/framework/functions/onkingdomoverviewmouseclick/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm:lines-199-201-onkingdomoverviewmouseclick
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onkingdomoverviewmouseclick 1 -->
## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnKingdomOverviewMouseClick);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 199–201, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onkingdomoverviewmouseclick 1 -->

# OnRecruitDlgMouseClick_Quit

ID: erm.framework.functions.onrecruitdlgmouseclick-quit
URL: /en/erm/framework/functions/onrecruitdlgmouseclick-quit/
Part: 1/1
Source references: era-framework:lib-end--9999-era---stdlib.erm:lines-55-57-onrecruitdlgmouseclick-quit
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions.onrecruitdlgmouseclick-quit 1 -->
## Purpose {#purpose}

Final handler for OnRecruitDlgMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnRecruitDlgMouseClick_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 55–57, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
<!-- llm:end erm.framework.functions.onrecruitdlgmouseclick-quit 1 -->

# OnRecruitDlgMouseClick

ID: erm.framework.functions.onrecruitdlgmouseclick
URL: /en/erm/framework/functions/onrecruitdlgmouseclick/
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
URL: /en/erm/framework/functions/onsavegameread/
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
URL: /en/erm/framework/functions/onsetupbattlefield/
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
URL: /en/erm/framework/functions/onstartorload/
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
URL: /en/erm/framework/functions/ontownhallmouseclick-quit/
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
URL: /en/erm/framework/functions/ontownhallmouseclick/
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

