# ERM triggers and events

ID: erm.triggers
URL: /en/erm/triggers/
Part: 4/4
Source references: era-source:erm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt, old-help:cont-eventslist.htm, old-help:cont-logicevent.htm, old-help:cont-triggers.htm, old-help:cont-triggers-era.htm, old-help:cont-triggersol.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers 4 -->
| [OnBattleRegeneratePhase](./onbattleregeneratephase/) | `FU` | 77007 |  |
| [OnAfterSaveGame](./onaftersavegame/) | `FU` | 77008 |  |
| [OnBeforeHeroInteraction](./onbeforeherointeraction/) | `FU` | 77010 |  |
| [OnAfterHeroInteraction](./onafterherointeraction/) | `FU` | 77011 |  |
| [OnStackToStackDamage](./onstacktostackdamage/) | `FU` | 77012 |  |
| [OnAICalcStackAttackEffect](./onaicalcstackattackeffect/) | `FU` | 77013 |  |
| [OnChat](./onchat/) | `FU` | 77014 |  |
| [OnGameEnter](./ongameenter/) | `FU` | 77015 |  |
| [OnGameLeave](./ongameleave/) | `FU` | 77016 |  |
| [OnEveryDay](./oneveryday/) | `FU` | 77018 |  |
| [OnBeforeBattlefieldVisible](./onbeforebattlefieldvisible/) | `FU` | 77019 |  |
| [OnBattlefieldVisible](./onbattlefieldvisible/) | `FU` | 77020 |  |
| [OnAfterTacticsPhase](./onaftertacticsphase/) | `FU` | 77021 |  |
| [OnOpenRecruitDlg](./onopenrecruitdlg/) | `FU` | 77023 |  |
| [OnCloseRecruitDlg](./oncloserecruitdlg/) | `FU` | 77024 |  |
| [OnRecruitDlgMouseClick](./onrecruitdlgmouseclick/) | `FU` | 77025 |  |
| [OnTownFortMouseClick](./ontownfortmouseclick/) | `FU` | 77026 |  |
| [OnKingdomOverviewMouseClick](./onkingdomoverviewmouseclick/) | `FU` | 77027 |  |
| [OnRecruitDlgRecalc](./onrecruitdlgrecalc/) | `FU` | 77028 |  |
| [OnRecruitDlgAction](./onrecruitdlgaction/) | `FU` | 77029 |  |
| [OnLoadHeroScreen](./onloadheroscreen/) | `FU` | 77030 |  |
| [OnBuildTownBuilding](./onbuildtownbuilding/) | `FU` | 77031 |  |
| [OnOpenTownScreen](./onopentownscreen/) | `FU` | 77032 |  |
| [OnCloseTownScreen](./onclosetownscreen/) | `FU` | 77033 |  |
| [OnSwitchTownScreen](./onswitchtownscreen/) | `FU` | 77034 |  |
| [OnPreTownScreen](./onpretownscreen/) | `FU` | 77035 |  |
| [OnPostTownScreen](./onposttownscreen/) | `FU` | 77036 |  |
| [OnPreHeroScreen](./onpreheroscreen/) | `FU` | 77037 |  |
| [OnPostHeroScreen](./onpostheroscreen/) | `FU` | 77038 |  |
| [OnDetermineMonInfoDlgUpgrade](./ondeterminemoninfodlgupgrade/) | `FU` | 77039 |  |
| [OnAdventureMapTileHint](./onadventuremaptilehint/) | `FU` | 77040 | `OnAdvMapTileHint` |
| [OnBeforeBattleStackTurn](./onbeforebattlestackturn/) | `FU` | 77041 |  |
| [OnCalculateTownIncome](./oncalculatetownincome/) | `FU` | 77042 |  |
| [OnBattleReplay](./onbattlereplay/) | `FU` | 77043 |  |
| [OnBeforeBattleReplay](./onbeforebattlereplay/) | `FU` | 77044 |  |
| [OnBeforeLocalEvent](./onbeforelocalevent/) | `FU` | 77045 |  |
| [OnAfterLocalEvent](./onafterlocalevent/) | `FU` | 77046 |  |
| [OnWinGame](./onwingame/) | `FU` | 77047 |  |
| [OnLoseGame](./onlosegame/) | `FU` | 77048 |  |
| [OnTransferHero](./ontransferhero/) | `FU` | 77049 |  |
| [OnAfterHeroGainLevel](./onafterherogainlevel/) | `FU` | 77050 |  |
| [OnBattleActionEnd](./onbattleactionend/) | `FU` | 77051 |  |
| [OnAfterBuildTownBuilding](./onafterbuildtownbuilding/) | `FU` | 77052 |  |
| [OnKeyReleased](./onkeyreleased/) | `FU` | 77053 |  |
| [OnBeforePlaceBattleObstacles](./onbeforeplacebattleobstacles/) | `FU` | 77054 |  |
| [OnAfterPlaceBattleObstacles](./onafterplacebattleobstacles/) | `FU` | 77055 |  |
| [OnBattleStackRegeneration](./onbattlestackregeneration/) | `FU` | 77056 |  |

## All 28 legacy trigger families {#families}

[AE](./ae/) · [BA](./ba/) · [BF](./bf/) · [BG](./bg/) · [BR](./br/) · [CM](./cm/) · [CO](./co/) · [DL](./dl/) · [FU](./fu/) · [GE](./ge/) · [GM](./gm/) · [HE](./he/) · [HL](./hl/) · [HM](./hm/) · [IP](./ip/) · [LE](./le/) · [MF](./mf/) · [MG](./mg/) · [MM](./mm/) · [MP](./mp/) · [MR](./mr/) · [MW](./mw/) · [OB](./ob/) · [PI](./pi/) · [SN](./sn/) · [TH](./th/) · [TL](./tl/) · [TM](./tm/)

## Lifecycle {#order}

New map: instructions → PI / OnAfterErmInstructions → OnGameEnter. Load: data restoration → OnAfterLoadGame → OnGameEnter. Framework joins both paths in OnStartOrLoad. In battle, distinguish data setup, field visibility, tactics, rounds, control transfer, and action completion.

## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../compatibility/) · [ERA services, memory and sound (SN)](../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../receivers/sn/#command-xvalues) · [Key Codes](../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../receivers/sn/) · [Game timer (TM)](tm/) · [Battle stack (BM)](../receivers/bm/) · [Creature experience and bonuses (EA)](../receivers/ea/) · [Mouse-event context (CM)](../receivers/cm/) · [Building pictures by town](../tables/building-pictures/)

<!-- llm:end erm.triggers 4 -->

