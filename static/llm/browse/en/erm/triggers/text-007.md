# Opening recruitment (OnOpenRecruitDlg)

ID: erm.triggers.onopenrecruitdlg
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onopenrecruitdlg/
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

# Opening a town (OnOpenTownScreen)

ID: erm.triggers.onopentownscreen
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onopentownscreen/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onopentownscreen 1 -->
## Timing and arguments {#event}

x1 is the town when the window first opens.

## Declaration {#declaration}

```erm
!?FU(OnOpenTownScreen);
```

## Identity and compatibility {#identity}

ID `77032`; registered as `TRIGGER_OPEN_TOWN_SCREEN`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onopentownscreen 1 -->

# After a hero screen (OnPostHeroScreen)

ID: erm.triggers.onpostheroscreen
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onpostheroscreen/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onpostheroscreen 1 -->
## Timing and arguments {#event}

x1 is the hero after leaving their screen, including switches.

## Declaration {#declaration}

```erm
!?FU(OnPostHeroScreen);
```

## Identity and compatibility {#identity}

ID `77038`; registered as `TRIGGER_POST_HEROSCREEN`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onpostheroscreen 1 -->

# After a town screen (OnPostTownScreen)

ID: erm.triggers.onposttownscreen
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onposttownscreen/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onposttownscreen 1 -->
## Timing and arguments {#event}

x1 is the town after leaving its screen; covers closing and switching.

## Declaration {#declaration}

```erm
!?FU(OnPostTownScreen);
```

## Identity and compatibility {#identity}

ID `77036`; registered as `TRIGGER_POST_TOWN_SCREEN`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onposttownscreen 1 -->

# Before a hero screen (OnPreHeroScreen)

ID: erm.triggers.onpreheroscreen
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onpreheroscreen/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onpreheroscreen 1 -->
## Timing and arguments {#event}

x1 is the hero before display, including switches.

## Declaration {#declaration}

```erm
!?FU(OnPreHeroScreen);
```

## Identity and compatibility {#identity}

ID `77037`; registered as `TRIGGER_PRE_HEROSCREEN`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onpreheroscreen 1 -->

# Before a town screen (OnPreTownScreen)

ID: erm.triggers.onpretownscreen
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onpretownscreen/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onpretownscreen 1 -->
## Timing and arguments {#event}

x1 is the town before display; covers opening and switching.

## Declaration {#declaration}

```erm
!?FU(OnPreTownScreen);
```

## Identity and compatibility {#identity}

ID `77035`; registered as `TRIGGER_PRE_TOWN_SCREEN`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onpretownscreen 1 -->

# Recruitment action (OnRecruitDlgAction)

ID: erm.triggers.onrecruitdlgaction
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onrecruitdlgaction/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onrecruitdlgaction 1 -->
## Timing and arguments {#event}

x1 is the number of creatures recruited, read-only. RD provides the current dialog configuration.

## Declaration {#declaration}

```erm
!?FU(OnRecruitDlgAction);
```

## Identity and compatibility {#identity}

ID `77029`; registered as `TRIGGER_RECRUIT_DLG_ACTION`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onrecruitdlgaction 1 -->

# Recruitment mouse click (OnRecruitDlgMouseClick)

ID: erm.triggers.onrecruitdlgmouseclick
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onrecruitdlgmouseclick/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onrecruitdlgmouseclick 1 -->
## Timing and arguments {#event}

Read mouse context through CM and recruitment state through RD. Use CM:R0 to suppress the default reaction, rather than merely leaving the handler.

## Declaration {#declaration}

```erm
!?FU(OnRecruitDlgMouseClick);
```

## Identity and compatibility {#identity}

ID `77025`; registered as `TRIGGER_RECRUIT_DLG_MOUSE_CLICK`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onrecruitdlgmouseclick 1 -->

# Recalculating recruitment cost (OnRecruitDlgRecalc)

ID: erm.triggers.onrecruitdlgrecalc
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onrecruitdlgrecalc/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onrecruitdlgrecalc 1 -->
## Timing and arguments {#event}

x1 is gold per creature; x2 extra resource 0..5 or -1; x3 amount of that resource per creature. All three values are mutable.

## Declaration {#declaration}

```erm
!?FU(OnRecruitDlgRecalc);
```

## Identity and compatibility {#identity}

ID `77028`; registered as `TRIGGER_RECRUIT_DLG_RECALC`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onrecruitdlgrecalc 1 -->

# Reading save data (OnSavegameRead)

ID: erm.triggers.onsavegameread
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onsavegameread/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onsavegameread 1 -->
## Timing and arguments {#event}

After ERM variables are restored. No arguments. Read custom sections here; pointers from the previous session are invalid.

## Declaration {#declaration}

```erm
!?FU(OnSavegameRead);
```

## Identity and compatibility {#identity}

ID `77002`; registered as `TRIGGER_SAVEGAME_READ`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onsavegameread 1 -->

# Writing save data (OnSavegameWrite)

ID: erm.triggers.onsavegamewrite
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onsavegamewrite/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onsavegamewrite 1 -->
## Timing and arguments {#event}

After ERM variables are written. No arguments. Write custom save sections here; this is a different phase from GM1.

## Declaration {#declaration}

```erm
!?FU(OnSavegameWrite);
```

## Identity and compatibility {#identity}

ID `77001`; registered as `TRIGGER_SAVEGAME_WRITE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onsavegamewrite 1 -->

# Stack-to-stack damage (OnStackToStackDamage)

ID: erm.triggers.onstacktostackdamage
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onstacktostackdamage/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onstacktostackdamage 1 -->
## Timing and arguments {#event}

x1 attacker and x2 defender are global indices or -1. x3 is original final damage (read-only); x4 mutable final damage; x5 base damage; x6 bonus; x7 ranged flag (not defined on every path); x8 distance for theoretical calculations; x9 theoretical calculation (0/1). With x9=1 this serves previews or AI: do not grant rewards, kill stacks, or mutate game state.

## Declaration {#declaration}

```erm
!?FU(OnStackToStackDamage);
```

## Identity and compatibility {#identity}

ID `77012`; registered as `TRIGGER_ONSTACKTOSTACKDAMAGE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onstacktostackdamage 1 -->

