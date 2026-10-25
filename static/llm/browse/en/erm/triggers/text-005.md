# Passing control to a stack (OnBattleStackObtainsTurn)

ID: erm.triggers.onbattlestackobtainsturn
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onbattlestackobtainsturn/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbattlestackobtainsturn 1 -->
## Timing and arguments {#event}

x1 is side (0/1), x2 its slot (0..20). Global stack index = x1*21+x2. This is control transfer, not necessarily regeneration; account for waiting and morale.

## Declaration {#declaration}

```erm
!?FU(OnBattleStackObtainsTurn);
```

## Identity and compatibility {#identity}

ID `77006`; registered as `TRIGGER_STACK_OBTAINS_TURN`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onbattlestackobtainsturn 1 -->

# Stack regeneration amount (OnBattleStackRegeneration)

ID: erm.triggers.onbattlestackregeneration
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onbattlestackregeneration/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbattlestackregeneration 1 -->
## Timing and arguments {#event}

x1 is stack 0..41; x2 mutable healing; x3 original standard healing. Result is clamped to 0..lost HP of the top creature. Can heal a stack without native regeneration, but cannot resurrect dead creatures. Distinct from OnBattleRegeneratePhase.

## Declaration {#declaration}

```erm
!?FU(OnBattleStackRegeneration);
```

## Identity and compatibility {#identity}

ID `77056`; registered as `TRIGGER_BATTLE_STACK_REGENERATION`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onbattlestackregeneration 1 -->

# Before showing the battlefield (OnBeforeBattlefieldVisible)

ID: erm.triggers.onbeforebattlefieldvisible
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onbeforebattlefieldvisible/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbeforebattlefieldvisible 1 -->
## Timing and arguments {#event}

The field is still dark; the event precedes early BR-1. No arguments. Early BA/BF do not guarantee BM/EA structures are ready; choose the phase required by your data.

## Declaration {#declaration}

```erm
!?FU(OnBeforeBattlefieldVisible);
```

## Identity and compatibility {#identity}

ID `77019`; registered as `TRIGGER_ONBEFORE_BATTLEFIELD_VISIBLE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onbeforebattlefieldvisible 1 -->

# Before battle replay (OnBeforeBattleReplay)

ID: erm.triggers.onbeforebattlereplay
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onbeforebattlereplay/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbeforebattlereplay 1 -->
## Timing and arguments {#event}

After the user rejects the result, before battle state is reset. No arguments. Suitable for releasing temporary resources from the previous attempt.

## Declaration {#declaration}

```erm
!?FU(OnBeforeBattleReplay);
```

## Identity and compatibility {#identity}

ID `77044`; registered as `TRIGGER_BEFORE_BATTLE_REPLAY`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onbeforebattlereplay 1 -->

# Before a stack turn (OnBeforeBattleStackTurn)

ID: erm.triggers.onbeforebattlestackturn
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onbeforebattlestackturn/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbeforebattlestackturn 1 -->
## Timing and arguments {#event}

x1 is active stack 0..41, mutable. Fires before OnBattleRegeneratePhase. Validate a replacement stack; this is not an arbitrary attack invocation.

## Declaration {#declaration}

```erm
!?FU(OnBeforeBattleStackTurn);
```

## Identity and compatibility {#identity}

ID `77041`; registered as `TRIGGER_BEFORE_STACK_TURN`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onbeforebattlestackturn 1 -->

# Before hero interaction (OnBeforeHeroInteraction)

ID: erm.triggers.onbeforeherointeraction
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onbeforeherointeraction/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbeforeherointeraction 1 -->
## Timing and arguments {#event}

x1 is the initiator, x2 the target hero; x3 allows interaction, defaults to 1 and can be set to 0. Covers meetings and attacks.

## Declaration {#declaration}

```erm
!?FU(OnBeforeHeroInteraction);
```

## Identity and compatibility {#identity}

ID `77010`; registered as `TRIGGER_BEFOREHEROINTERACT`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onbeforeherointeraction 1 -->

# Before a local event (OnBeforeLocalEvent)

ID: erm.triggers.onbeforelocalevent
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onbeforelocalevent/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbeforelocalevent 1 -->
## Timing and arguments {#event}

x1/x2/x3 are event coordinates. For humans; fires before the corresponding !?LE.

## Declaration {#declaration}

```erm
!?FU(OnBeforeLocalEvent);
```

## Identity and compatibility {#identity}

ID `77045`; registered as `TRIGGER_BEFORE_LOCAL_EVENT`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onbeforelocalevent 1 -->

# Before placing battle obstacles (OnBeforePlaceBattleObstacles)

ID: erm.triggers.onbeforeplacebattleobstacles
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onbeforeplacebattleobstacles/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbeforeplacebattleobstacles 1 -->
## Timing and arguments {#event}

After OnBeforeBattlefieldVisible, before obstacles. No arguments. Temporarily uses the native RNG seeded with 110291*x+167801*y+81569; consuming random numbers here affects placement.

## Declaration {#declaration}

```erm
!?FU(OnBeforePlaceBattleObstacles);
```

## Identity and compatibility {#identity}

ID `77054`; registered as `TRIGGER_BEFORE_BATTLE_PLACE_BATTLE_OBSTACLES`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onbeforeplacebattleobstacles 1 -->

# Building a town structure (OnBuildTownBuilding)

ID: erm.triggers.onbuildtownbuilding
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onbuildtownbuilding/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbuildtownbuilding 1 -->
## Timing and arguments {#event}

x1 is town; x2 building. Applies to humans and AI. Use OnAfterBuildTownBuilding for actions after construction is complete.

## Declaration {#declaration}

```erm
!?FU(OnBuildTownBuilding);
```

## Identity and compatibility {#identity}

ID `77031`; registered as `TRIGGER_BUILD_TOWN_BUILDING`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onbuildtownbuilding 1 -->

# Calculating town income (OnCalculateTownIncome)

ID: erm.triggers.oncalculatetownincome
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/oncalculatetownincome/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.oncalculatetownincome 1 -->
## Timing and arguments {#event}

x1 is town; x2 income, mutable; x3 includes additional silo resources. Only returned income x2 is changed. This is a calculation event and does not guarantee resources are being paid.

## Declaration {#declaration}

```erm
!?FU(OnCalculateTownIncome);
```

## Identity and compatibility {#identity}

ID `77042`; registered as `TRIGGER_CALC_TOWN_INCOME`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.oncalculatetownincome 1 -->

# Game chat (OnChat)

ID: erm.triggers.onchat
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/onchat/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onchat 1 -->
## Timing and arguments {#event}

x1 selects the stage: 0 enter (x2 blocks entry); 1 input (x2 text pointer, x3 action: 0 clear, 1 close, 2 default); 2 leave. Argument meanings depend on stage; check x1 first.

## Declaration {#declaration}

```erm
!?FU(OnChat);
```

## Identity and compatibility {#identity}

ID `77014`; registered as `TRIGGER_ONCHAT`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onchat 1 -->

# Closing the hero screen (OnCloseHeroScreen)

ID: erm.triggers.oncloseheroscreen
URL: https://asmedian.github.io/modding-guide/en/erm/triggers/oncloseheroscreen/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.oncloseheroscreen 1 -->
## Timing and arguments {#event}

x1 is the hero used to open the window, even if the user subsequently switched heroes.

## Declaration {#declaration}

```erm
!?FU(OnCloseHeroScreen);
```

## Identity and compatibility {#identity}

ID `77005`; registered as `TRIGGER_CLOSE_HEROSCREEN`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.oncloseheroscreen 1 -->

