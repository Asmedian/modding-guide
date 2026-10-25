# Closing recruitment (OnCloseRecruitDlg)

ID: erm.triggers.oncloserecruitdlg
URL: /en/erm/triggers/oncloserecruitdlg/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.oncloserecruitdlg 1 -->
## Timing and arguments {#event}

No arguments. RD data remains available before the dialog is freed; a retained dialog pointer is invalid afterwards.

## Declaration {#declaration}

```erm
!?FU(OnCloseRecruitDlg);
```

## Identity and compatibility {#identity}

ID `77024`; registered as `TRIGGER_CLOSE_RECRUIT_DLG`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.oncloserecruitdlg 1 -->

# Closing a town (OnCloseTownScreen)

ID: erm.triggers.onclosetownscreen
URL: /en/erm/triggers/onclosetownscreen/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onclosetownscreen 1 -->
## Timing and arguments {#event}

x1 is the town used to open the window.

## Declaration {#declaration}

```erm
!?FU(OnCloseTownScreen);
```

## Identity and compatibility {#identity}

ID `77033`; registered as `TRIGGER_CLOSE_TOWN_SCREEN`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onclosetownscreen 1 -->

# Choosing a creature upgrade (OnDetermineMonInfoDlgUpgrade)

ID: erm.triggers.ondeterminemoninfodlgupgrade
URL: /en/erm/triggers/ondeterminemoninfodlgupgrade/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.ondeterminemoninfodlgupgrade 1 -->
## Timing and arguments {#event}

x1 is creature; x2 upgraded type or -1, mutable; x3 town or -1; x4 hero or -1. This controls the upgrade available in the creature-info dialog.

## Declaration {#declaration}

```erm
!?FU(OnDetermineMonInfoDlgUpgrade);
```

## Identity and compatibility {#identity}

ID `77039`; registered as `TRIGGER_DETERMINE_MON_INFO_DLG_UPGRADE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.ondeterminemoninfodlgupgrade 1 -->

# Start of a game day (OnEveryDay)

ID: erm.triggers.oneveryday
URL: /en/erm/triggers/oneveryday/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.oneveryday 1 -->
## Timing and arguments {#event}

The engine fires this for each player before ordinary TM, without arguments. Framework extends the contract: x1 day, x2 weekDay (1..7), x3 once, x4 owner, x5 isAi. once is TRUE only on the first call that day. Use these arguments only with Framework loaded.

## Declaration {#declaration}

```erm
!?FU(OnEveryDay);
```

## Identity and compatibility {#identity}

ID `77018`; registered as `TRIGGER_DAILY_TIMER`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.oneveryday 1 -->

# Entering the game (OnGameEnter)

ID: erm.triggers.ongameenter
URL: /en/erm/triggers/ongameenter/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.ongameenter 1 -->
## Timing and arguments {#event}

After starting or loading a game, before adventure-map control. No arguments. Suitable for obtaining process-local pointers and exports; distinguish it from one-time PI initialization.

## Declaration {#declaration}

```erm
!?FU(OnGameEnter);
```

## Identity and compatibility {#identity}

ID `77015`; registered as `TRIGGER_ONGAMEENTER`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.ongameenter 1 -->

# Leaving the game (OnGameLeave)

ID: erm.triggers.ongameleave
URL: /en/erm/triggers/ongameleave/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.ongameleave 1 -->
## Timing and arguments {#event}

Before ERM is disabled when leaving the current game. No arguments. Release temporary resources tied to the game session.

## Declaration {#declaration}

```erm
!?FU(OnGameLeave);
```

## Identity and compatibility {#identity}

ID `77016`; registered as `TRIGGER_ONGAMELEAVE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.ongameleave 1 -->

# Key press (OnKeyPressed)

ID: erm.triggers.onkeypressed
URL: /en/erm/triggers/onkeypressed/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onkeypressed 1 -->
## Timing and arguments {#event}

x1 is the key code; x2 blocks the default action (0/1, mutable); x3 is isDown, TRUE only on the initial press and FALSE on auto-repeat. See Framework KEY_* constants.

## Declaration {#declaration}

```erm
!?FU(OnKeyPressed);
```

## Identity and compatibility {#identity}

ID `77003`; registered as `TRIGGER_KEYPRESS`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onkeypressed 1 -->

# Key release (OnKeyReleased)

ID: erm.triggers.onkeyreleased
URL: /en/erm/triggers/onkeyreleased/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onkeyreleased 1 -->
## Timing and arguments {#event}

x1 is key code; x2 blocks the default reaction (0/1, mutable). The engine contract does not declare a third argument. Do not copy the meaning of OnKeyPressed x3 here.

## Declaration {#declaration}

```erm
!?FU(OnKeyReleased);
```

## Identity and compatibility {#identity}

ID `77053`; registered as `TRIGGER_KEY_RELEASED`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onkeyreleased 1 -->

# Kingdom overview mouse click (OnKingdomOverviewMouseClick)

ID: erm.triggers.onkingdomoverviewmouseclick
URL: /en/erm/triggers/onkingdomoverviewmouseclick/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onkingdomoverviewmouseclick 1 -->
## Timing and arguments {#event}

CM provides mouse context. This is a local UI event, not multiplayer action synchronization.

## Declaration {#declaration}

```erm
!?FU(OnKingdomOverviewMouseClick);
```

## Identity and compatibility {#identity}

ID `77027`; registered as `TRIGGER_KINGDOM_OVERVIEW_MOUSE_CLICK`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onkingdomoverviewmouseclick 1 -->

# Loading hero-screen data (OnLoadHeroScreen)

ID: erm.triggers.onloadheroscreen
URL: /en/erm/triggers/onloadheroscreen/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onloadheroscreen 1 -->
## Timing and arguments {#event}

x1 is hero. Fires after OnOpenHeroScreen and when switching heroes, before rendering. Other windows and plugins may also trigger loading; do not assume it only means manual opening.

## Declaration {#declaration}

```erm
!?FU(OnLoadHeroScreen);
```

## Identity and compatibility {#identity}

ID `77030`; registered as `TRIGGER_LOAD_HERO_SCREEN`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onloadheroscreen 1 -->

# Losing the game (OnLoseGame)

ID: erm.triggers.onlosegame
URL: /en/erm/triggers/onlosegame/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onlosegame 1 -->
## Timing and arguments {#event}

For a human defeat, immediately before OnGameLeave in the current implementation. No arguments. Do not expect a subsequent game turn.

## Declaration {#declaration}

```erm
!?FU(OnLoseGame);
```

## Identity and compatibility {#identity}

ID `77048`; registered as `TRIGGER_LOSE_GAME`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onlosegame 1 -->

# Opening the hero screen (OnOpenHeroScreen)

ID: erm.triggers.onopenheroscreen
URL: /en/erm/triggers/onopenheroscreen/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onopenheroscreen 1 -->
## Timing and arguments {#event}

x1 is the hero when the window first opens. Switching heroes inside the window does not repeat this event; use OnLoadHeroScreen or OnPreHeroScreen.

## Declaration {#declaration}

```erm
!?FU(OnOpenHeroScreen);
```

## Identity and compatibility {#identity}

ID `77004`; registered as `TRIGGER_OPEN_HEROSCREEN`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onopenheroscreen 1 -->

# Opening recruitment (OnOpenRecruitDlg)

ID: erm.triggers.onopenrecruitdlg
URL: /en/erm/triggers/onopenrecruitdlg/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onopenrecruitdlg 1 -->
## Timing and arguments {#event}

x1 is active slot 0..3; x2 flags (1 CLOSE_ON_BUY, 2 AUTO_UPDATE_ADVMAP); x3 show dialog (1/0). Arguments are mutable. RD provides recruitment state.

## Declaration {#declaration}

```erm
!?FU(OnOpenRecruitDlg);
```

## Identity and compatibility {#identity}

ID `77023`; registered as `TRIGGER_OPEN_RECRUIT_DLG`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onopenrecruitdlg 1 -->

