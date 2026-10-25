# After construction (OnAfterBuildTownBuilding)

ID: erm.triggers.onafterbuildtownbuilding
URL: /en/erm/triggers/onafterbuildtownbuilding/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onafterbuildtownbuilding 1 -->
## Timing and arguments {#event}

x1 is town; x2 constructed building. Town state has been updated. Closing the town hall alone does not imply construction.

## Declaration {#declaration}

```erm
!?FU(OnAfterBuildTownBuilding);
```

## Identity and compatibility {#identity}

ID `77052`; registered as `TRIGGER_AFTER_BUILD_TOWN_BUILDING`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onafterbuildtownbuilding 1 -->

# After a hero level-up (OnAfterHeroGainLevel)

ID: erm.triggers.onafterherogainlevel
URL: /en/erm/triggers/onafterherogainlevel/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onafterherogainlevel 1 -->
## Timing and arguments {#event}

x1 is hero after leveling up, once the dialog closes. Applies to humans and AI. Use HL before selection completes to change offered skills.

## Declaration {#declaration}

```erm
!?FU(OnAfterHeroGainLevel);
```

## Identity and compatibility {#identity}

ID `77050`; registered as `TRIGGER_AFTER_HERO_GAIN_LEVEL`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onafterherogainlevel 1 -->

# After hero interaction (OnAfterHeroInteraction)

ID: erm.triggers.onafterherointeraction
URL: /en/erm/triggers/onafterherointeraction/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onafterherointeraction 1 -->
## Timing and arguments {#event}

x1 is the initiator; x2 the target hero. State may have changed during interaction: a hero may have died or changed owner.

## Declaration {#declaration}

```erm
!?FU(OnAfterHeroInteraction);
```

## Identity and compatibility {#identity}

ID `77011`; registered as `TRIGGER_AFTERHEROINTERACT`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onafterherointeraction 1 -->

# After a local event (OnAfterLocalEvent)

ID: erm.triggers.onafterlocalevent
URL: /en/erm/triggers/onafterlocalevent/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onafterlocalevent 1 -->
## Timing and arguments {#event}

x1/x2/x3 are event coordinates. For humans; fires before the corresponding !$LE. Do not assume a one-shot event object remains on the map.

## Declaration {#declaration}

```erm
!?FU(OnAfterLocalEvent);
```

## Identity and compatibility {#identity}

ID `77046`; registered as `TRIGGER_AFTER_LOCAL_EVENT`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onafterlocalevent 1 -->

# After placing battle obstacles (OnAfterPlaceBattleObstacles)

ID: erm.triggers.onafterplacebattleobstacles
URL: /en/erm/triggers/onafterplacebattleobstacles/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onafterplacebattleobstacles 1 -->
## Timing and arguments {#event}

After obstacle placement. No arguments. ERA restores its main RNG; cell changes must account for obstacles already placed.

## Declaration {#declaration}

```erm
!?FU(OnAfterPlaceBattleObstacles);
```

## Identity and compatibility {#identity}

ID `77055`; registered as `TRIGGER_AFTER_BATTLE_PLACE_BATTLE_OBSTACLES`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onafterplacebattleobstacles 1 -->

# After saving (OnAfterSaveGame)

ID: erm.triggers.onaftersavegame
URL: /en/erm/triggers/onaftersavegame/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onaftersavegame 1 -->
## Timing and arguments {#event}

After save completion. No arguments. Use OnSavegameWrite to write a custom data section.

## Declaration {#declaration}

```erm
!?FU(OnAfterSaveGame);
```

## Identity and compatibility {#identity}

ID `77008`; registered as `TRIGGER_AFTER_SAVE_GAME`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onaftersavegame 1 -->

# After tactics (OnAfterTacticsPhase)

ID: erm.triggers.onaftertacticsphase
URL: /en/erm/triggers/onaftertacticsphase/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onaftertacticsphase 1 -->
## Timing and arguments {#event}

After tactical placement ends. When there is no tactics phase, it follows preparation for battlefield display. No arguments.

## Declaration {#declaration}

```erm
!?FU(OnAfterTacticsPhase);
```

## Identity and compatibility {#identity}

ID `77021`; registered as `TRIGGER_AFTER_TACTICS_PHASE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onaftertacticsphase 1 -->

# AI attack evaluation (OnAICalcStackAttackEffect)

ID: erm.triggers.onaicalcstackattackeffect
URL: /en/erm/triggers/onaicalcstackattackeffect/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onaicalcstackattackeffect 1 -->
## Timing and arguments {#event}

x1 is attacking stack; x2 defender; x3 mutable effect score; x4 original score. This evaluates an action for AI rather than dealing damage.

## Declaration {#declaration}

```erm
!?FU(OnAICalcStackAttackEffect);
```

## Identity and compatibility {#identity}

ID `77013`; registered as `TRIGGER_ONAICALCSTACKATTACKEFFECT`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onaicalcstackattackeffect 1 -->

# Battle action completion (OnBattleActionEnd)

ID: erm.triggers.onbattleactionend
URL: /en/erm/triggers/onbattleactionend/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbattleactionend 1 -->
## Timing and arguments {#event}

No arguments. Order: OnBeforeBattleAction → OnBattleActionEnd → OnBattleRound → OnBeforeBattleStackTurn → OnBattleStackObtainsTurn → OnAfterBattleAction. Round/stack events occur on the relevant transition, not unconditionally after every action.

## Declaration {#declaration}

```erm
!?FU(OnBattleActionEnd);
```

## Identity and compatibility {#identity}

ID `77051`; registered as `TRIGGER_BATTLE_ACTION_END`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onbattleactionend 1 -->

# Battlefield becomes visible (OnBattlefieldVisible)

ID: erm.triggers.onbattlefieldvisible
URL: /en/erm/triggers/onbattlefieldvisible/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbattlefieldvisible 1 -->
## Timing and arguments {#event}

After the battle theme starts and the tactics dialog. No arguments. This marks visibility, not necessarily the end of tactical placement.

## Declaration {#declaration}

```erm
!?FU(OnBattlefieldVisible);
```

## Identity and compatibility {#identity}

ID `77020`; registered as `TRIGGER_BATTLEFIELD_VISIBLE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onbattlefieldvisible 1 -->

# Regeneration phase (OnBattleRegeneratePhase)

ID: erm.triggers.onbattleregeneratephase
URL: /en/erm/triggers/onbattleregeneratephase/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbattleregeneratephase 1 -->
## Timing and arguments {#event}

x1 is stack 0..41; x2 points to its structure; x3 blocks the standard phase (0/1, mutable). The pointer is valid only in the current battle. Use the separate OnBattleStackRegeneration to change healing amount.

## Declaration {#declaration}

```erm
!?FU(OnBattleRegeneratePhase);
```

## Identity and compatibility {#identity}

ID `77007`; registered as `TRIGGER_REGENERATE_PHASE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
<!-- llm:end erm.triggers.onbattleregeneratephase 1 -->

# Battle replay (OnBattleReplay)

ID: erm.triggers.onbattlereplay
URL: /en/erm/triggers/onbattlereplay/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onbattlereplay 1 -->
## Timing and arguments {#event}

After battle state is reset for replay. No arguments. OnBeforeBattleUniversal does not run again; rebuild combat-dependent context here. Requires replay support in the installed build.

## Declaration {#declaration}

```erm
!?FU(OnBattleReplay);
```

## Identity and compatibility {#identity}

ID `77043`; registered as `TRIGGER_BATTLE_REPLAY`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onbattlereplay 1 -->

