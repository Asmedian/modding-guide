# ERM triggers and events

ID: erm.triggers
URL: /en/erm/triggers/
Part: 1/4
Source references: era-source:erm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt, old-help:cont-eventslist.htm, old-help:cont-logicevent.htm, old-help:cont-triggers.htm, old-help:cont-triggers-era.htm, old-help:cont-triggersol.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers 1 -->
## List of events and triggers {#ref-cont-eventslist}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-left erm-paragraph"><span class="erm-source-title">List of triggers and their named events</span></div>
<a href="./#ref-cont-triggers-era">List of ERA triggers</a>
<div class="table-wrap erm-reference-table"><table class="erm-table-zebra" width="100%">
<tr>
	<td>AE0</td>
	<td>OnUnequipArt</td>
</tr>
<tr>
	<td>AE1</td>
	<td>OnEquipArt</td>
</tr>
<tr>
	<td>BA0</td>
	<td>OnBeforeBattle</td>
</tr>
<tr>
	<td>BA1</td>
	<td>OnAfterBattle</td>
</tr>
<tr>
	<td>BA50</td>
	<td>OnBeforeBattleForThisPcDefender</td>
</tr>
<tr>
	<td>BA51</td>
	<td>OnAfterBattleForThisPcDefender</td>
</tr>
<tr>
	<td>BA52</td>
	<td>OnBeforeBattleUniversal</td>
</tr>
<tr>
	<td>BA53</td>
	<td>OnAfterBattleUniversal</td>
</tr>
<tr>
	<td>BF</td>
	<td>OnSetupBattlefield</td>
</tr>
<tr>
	<td>BG0</td>
	<td>OnBeforeBattleAction</td>
</tr>
<tr>
	<td>BG1</td>
	<td>OnAfterBattleAction</td>
</tr>
<tr>
	<td>BR</td>
	<td>OnBattleRound</td>
</tr>
<tr>
	<td>CM0</td>
	<td>OnAdventureMapRightMouseClick</td>
</tr>
<tr>
	<td>CM1</td>
	<td>OnTownMouseClick</td>
</tr>
<tr>
	<td>CM2</td>
	<td>OnHeroScreenMouseClick</td>
</tr>
<tr>
	<td>CM3</td>
	<td>OnHeroesMeetScreenMouseClick</td>
</tr>
<tr>
	<td>CM4</td>
	<td>OnBattleScreenMouseClick</td>
</tr>
<tr>
	<td>CM5</td>
	<td>OnAdventureMapLeftMouseClick</td>
</tr>
<tr>
	<td>CO0</td>
	<td>OnOpenCommanderWindow</td>
</tr>
<tr>
	<td>CO1</td>
	<td>OnCloseCommanderWindow</td>
</tr>
<tr>
	<td>CO2</td>
	<td>OnAfterCommanderBuy</td>
</tr>
<tr>
	<td>CO3</td>
	<td>OnAfterCommanderResurrect</td>
</tr>
<tr>
	<td>DL</td>
	<td>OnCustomDialogEvent</td>
</tr>
<tr>
	<td>GM0</td>
	<td>OnAfterLoadGame</td>
</tr>
<tr>
	<td>GM1</td>
	<td>OnBeforeSaveGame</td>
</tr>
<tr>
	<td>HL</td>
	<td>OnHeroGainLevel</td>
</tr>
<tr>
	<td>HM</td>
	<td>OnHeroMove</td>
</tr>
<tr>
	<td>IP0</td>
	<td>OnBeforeBattleBeforeDataSend</td>
</tr>
<tr>
	<td>IP1</td>
	<td>OnBeforeBattleAfterDataReceived</td>
</tr>
<tr>
	<td>IP2</td>
	<td>OnAfterBattleBeforeDataSend</td>
</tr>
<tr>
	<td>IP3</td>
	<td>OnAfterBattleAfterDataReceived</td>
</tr>
<tr>
	<td>MF1</td>
	<td>OnMonsterPhysicalDamage</td>
</tr>
<tr>
	<td>MG0</td>
	<td>OnBeforeAdventureMagic</td>
</tr>
<tr>
	<td>MG1</td>
	<td>OnAfterAdventureMagic</td>
</tr>
<tr>
	<td>MM0</td>
	<td>OnBattleMouseHint</td>
</tr>
<tr>
	<td>MM1</td>
	<td>OnTownMouseHint</td>
</tr>
<tr>
	<td>MP</td>
	<td>OnMp3MusicChange</td>
</tr>
<tr>
	<td>MR0</td>
	<td>OnMagicBasicResistance</td>
</tr>
<tr>
	<td>MR1</td>
	<td>OnMagicCorrectedResistance</td>
</tr>
<tr>
	<td>MR2</td>
	<td>OnDwarfMagicResistance</td>
</tr>
<tr>
	<td>MW0</td>
	<td>OnWanderingMonsterReach</td>
</tr>
<tr>
	<td>MW1</td>
	<td>OnWanderingMonsterDeath</td>
</tr>
<tr>
	<td>PI</td>
	<td>OnAfterErmInstructions</td>
</tr>
<tr>
	<td>SN</td>
	<td>OnSoundPlay</td>
</tr>
<tr>
	<td>TH0</td>
	<td>OnEnterTownHall</td>
</tr>
<tr>
	<td>TH1</td>
	<td>OnLeaveTownHall</td>
</tr>
<tr>
	<td>TL0</td>
	<td>OnEverySecond</td>
</tr>
<tr>
	<td>TL1</td>
	<td>OnEvery2Seconds</td>
</tr>
<tr>
	<td>TL2</td>
	<td>OnEvery5Seconds</td>
</tr>
<tr>
	<td>TL3</td>
	<td>OnEvery10Seconds</td>
</tr>
<tr>
	<td>TL4</td>
	<td>OnEveryMinute</td>
</tr>
</table></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-zebra" width="100%">
<tr>
	<td colspan="2"> </td>
</tr><tr>
	<td></td>
	<td><span class="erm-anchor" id="ref-cont-eventslist-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">below <strong>N</strong> – this is the number/ID</div></td>
</tr>
<tr>
	<td>FU1..FU29999</td>
	<td>OnErmFunction N</td>
</tr>
<tr>
	<td>HE0..HE198</td>
	<td>OnHeroInteraction N</td>
</tr>
<tr>
	<td>HM0..HM198</td>
	<td>OnHeroMove N</td>
</tr>
<tr>
	<td>HL-1</td>
	<td>OnHeroGainLevel</td>
</tr>
<tr>
	<td>HL0..HL198</td>
	<td>OnHeroGainLevel N</td>
</tr>
<tr>
	<td>LE</td>
	<td>OnLocalEvent X/Y/Z</td>
</tr>
<tr>
	<td>OB</td>
	<td>OnAfterVisitObject X/Y/Z</td>
</tr>
<tr>
	<td>OB</td>
	<td>OnAfterVisitObject Type/Subtype</td>
</tr>
<tr>
	<td>OB</td>
	<td>OnAfterVisitObject Type/-1</td>
</tr>
<tr>
	<td>OB</td>
	<td>OnBeforeVisitObject X/Y/Z</td>
</tr>
<tr>
	<td>OB</td>
	<td>OnBeforeVisitObject Type/Subtype</td>
</tr>
<tr>
	<td>OB</td>
	<td>OnBeforeVisitObject Type/-1</td>
</tr>
<tr>
	<td>TM1..TM100</td>
	<td>OnErmTimer N</td>
</tr>
</table></div>
</div>
</section>
:::

## Logic of triggering events and triggers {#ref-cont-logicevent}

:::erm
<section class="erm-reference" lang="en">
<div>
<h3 class="erm-align-center">Event trigger logic<a href="../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a></h3>
<span class="erm-anchor" id="ref-cont-logicevent-step"></span><div class="erm-indent erm-paragraph">Below is a proven practice <span class="erm-anchor" id="ref-cont-logicevent-n1"></span><strong class="erm-tone-purple erm-strong">Algor</strong>'om information about WHEN and HOW game events are triggered, 
The corresponding named functions (events) known at the time of publication of this material and assigned to ERA, including some hooks from the game code, will be indicated.</div>
<ul>
<li><div class="erm-paragraph"></div><span class="erm-anchor" id="ref-cont-logicevent-1"></span><details class="erm-comment"><summary>Town screen</summary><div class="erm-comment-body">
<strong class="erm-tone-purple erm-legacy-event">OnTownMouseHint</strong><br>
AFTER displaying any hint in the town screen, does NOT work in castle screens/town hall/marketplace/tavern/dwelling, etc..<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnEnterTownHall</strong> (<a href="th/#ref-tr-th">!?TH0</a>)<br>
BEFORE entering the town hall from the town screen<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnLeaveTownHall</strong> (<a href="th/#ref-tr-th">!?TH1</a>)<br>
AFTER exiting to the town screen from the town hall screen<br>
when constructing a building, triggers AFTER <a href="./#ref-era-new-events-2-31">OnBuildTownBuilding</a> and rendering the building in the town screen<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnBuildTownBuilding</strong><br>
after the building is constructed and the town hall screen is closed, but before the building is rendered in the town screen<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnSwitchTownScreen</strong><br>
before switching to another town from the town window.<br>
Triggered: <a href="./#ref-era-new-events-2-34">OnSwitchTownScreen</a>, <a href="./#ref-era-new-events-2-36">OnPostTownScreen</a>, <a href="./#ref-era-new-events-2-35">OnPreTownScreen</a>.<br>
Events <a href="./#ref-era-new-events-2-32">OnOpenTownScreen</a>, <a href="./#ref-era-new-events-2-33">OnCloseTownScreen</a> do NOT work when switching<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnOpenTownScreen, OnPreTownScreen</strong><br>
before opening the town window, they are triggered in the following order: <a href="./#ref-era-new-events-2-32">OnOpenTownScreen</a>, <a href="./#ref-era-new-events-2-35">OnPreTownScreen</a> until the town window appears on the screen<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnPostTownScreen, OnCloseTownScreen</strong><br>
after closing the town window (after disappearing from the screen) they are triggered in the following order: <a href="./#ref-era-new-events-2-36">OnPostTownScreen</a>, <a href="./#ref-era-new-events-2-33">OnCloseTownScreen</a> </div></details></li>

<li><div class="erm-paragraph"></div><span class="erm-anchor" id="ref-cont-logicevent-2"></span><details class="erm-comment"><summary>Hero, commander and their screens</summary><div class="erm-comment-body">
<strong class="erm-tone-purple erm-legacy-event">OnOpenHeroScreen, OnLoadHeroScreen, OnPreHeroScreen</strong><br>
before opening the hero window, they are triggered in the following order: <a href="./#ref-era-new-events-2-4">OnOpenHeroScreen</a>, <a href="./#ref-era-new-events-2-30">OnLoadHeroScreen</a>, <a href="./#ref-era-new-events-2-37">OnPreHeroScreen</a> until the hero window appears on the screen.<br>
They also trigger when viewing a hero in a tavern or from the hero meeting window<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnPostHeroScreen, OnCloseHeroScreen</strong><br>
after closing the hero window (after disappearing from the screen) they work in the following order: <a href="./#ref-era-new-events-2-38">OnPostHeroScreen</a>, <a href="./#ref-era-new-events-2-5">OnCloseHeroScreen</a>.<br>
They also work when viewing a hero in a tavern or from the hero meeting window.<br>
When switching between heroes INSIDE the hero window, events are processed <a href="./#ref-era-new-events-2-38">OnPostHeroScreen</a>, <a href="./#ref-era-new-events-2-30">OnLoadHeroScreen</a>, 
<a href="./#ref-era-new-events-2-37">OnPreHeroScreen</a>, and events <a href="./#ref-era-new-events-2-5">OnCloseHeroScreen</a> and <a href="./#ref-era-new-events-2-4">OnOpenHeroScreen</a> They don’t work out.<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnHeroMove</strong> (<a href="hm/#ref-tr-hm">!?HM#</a>)<br>
when the hero moves, triggers BEFORE each hero's step<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnHeroGainLevel</strong> (<a href="hl/#ref-tr-hl">!?HL#</a>)<br>
before leveling up the hero, but after leveling up and closing the commander window.<br>
If you increase several levels at once - before each increase<br>
<br>
<strong>Hook in <span class="erm-tone-purple erm-legacy-event">5090553</span></strong> [dialogue for increasing the hero's level without selecting a secondary one. skills]<br>
<strong>Hook in <span class="erm-tone-purple erm-legacy-event">5090672</span></strong> [dialogue for leveling up a hero with 1 secondary skill]<br>
<strong>Hook in <span class="erm-tone-purple erm-legacy-event">5090948</span></strong> [dialogue for leveling up a hero with 2 secondary skills]<br>
before opening the dialogue window for increasing the hero’s level with the corresponding number of secondary secondary items offered. skills<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnEquipArt</strong> (<a href="ae/#ref-tr-ae">!?AE1</a>)<br>
when equipping an artifact, it works even before <em class="erm-tone-purple erm-legacy-event">OnAfterErmInstructions</em> (<a href="pi/#ref-tr-pi">!?PI</a>) when heroes receive starting artifacts<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnUnequipArt</strong> (<a href="ae/#ref-tr-ae">!?AE0</a>)<br>
when removing an artifact<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnOpenCommanderWindow</strong> (<a href="co/#ref-tr-co">!?CO0</a>)<br>
before opening the commander window from the hero window (before the commander window appears on the screen)<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnCloseCommanderWindow</strong> (<a href="co/#ref-tr-co">!?CO1</a>)<br>
after closing (disappearing from the screen) the commander window<br>

<span class="erm-anchor" id="ref-cont-logicevent-q1"></span><div class="erm-tone-quote erm-note erm-paragraph"><span class="erm-anchor" id="ref-cont-logicevent-bold"></span><em class="erm-strong">Note:</em> if commanders are disabled or a commander is not hired, !?CO0 and !?CO1 do not work</div>

<strong class="erm-tone-purple erm-legacy-event">OnAfterCommanderBuy</strong> (<a href="co/#ref-tr-co">!?CO2</a>)<br>
after purchasing a commander when visiting a town<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnAfterCommanderResurrect</strong> (<a href="co/#ref-tr-co">!?CO3</a>)<br>
after the resurrection of a dead commander when visiting the town. Does NOT work when resurrecting a commander with the Helm of Immortality<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnBeforeHeroInteraction</strong><br>
before the meeting of heroes (before the meeting window appears)<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnAfterHeroInteraction</strong><br>
after the meeting of heroes (after the meeting window disappears)</div></details></li>

<li><div class="erm-paragraph"></div><span class="erm-anchor" id="ref-cont-logicevent-3"></span><details class="erm-comment"><summary>Other screens</summary><div class="erm-comment-body">
<strong class="erm-tone-purple erm-legacy-event">OnOpenRecruitDlg</strong><br>
before opening the dialogue for hiring creatures.<br>
Does NOT trigger when opening a blacksmith<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnRecruitDlgRecalc</strong><br>
before opening the dialogue for hiring creatures<br>
before changing the hired quantity in the dialogue for hiring creatures<br>
after clicking the hire button and <a href="../receivers/rd/#ref-rec-rd-action-29">OnRecruitDlgAction</a><br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnRecruitDlgAction</strong><br>
when you press the hire button in the recruitment dialogue, BEFORE closing the dialogue<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnCloseRecruitDlg</strong><br>
after closing the dialogue for hiring creatures.<br>
Does NOT trigger when closing the blacksmith<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnCustomDialogEvent</strong><br>
BEFORE activating any event in the user <a href="dl/#ref-tr-dl">DL</a>-dialogue</div></details></li>

<li><div class="erm-paragraph"></div><span class="erm-anchor" id="ref-cont-logicevent-4"></span><details class="erm-comment"><summary>Timers, start of day, save and load</summary><div class="erm-comment-body">
<strong class="erm-tone-purple erm-legacy-event">OnEverySecond <span class="erm-anchor" id="ref-cont-logicevent-black"></span><strong class="erm-tone-text">(<a href="tl/#ref-tr-tl">!?TL0</a>),</strong> OnEvery2Seconds <strong class="erm-tone-text">(<a href="tl/#ref-tr-tl">!?TL1</a>),
</strong> OnEvery5Seconds <strong class="erm-tone-text">(<a href="tl/#ref-tr-tl">!?TL2</a>),</strong> OnEvery10Seconds <strong class="erm-tone-text">(<a href="tl/#ref-tr-tl">!?TL3</a>),</strong> <br>OnEveryMinute</strong> (<a href="tl/#ref-tr-tl">!?TL4</a>)<br>
Events begin to fire immediately after ERM is initialized and instructions are processed.<br>
I doubt the advisability of using them <br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnEveryDay</strong><br>
at the beginning of a new game day (including day 1) for each player until <a href="tm/#ref-tr-tm">!?TM1</a> and <a href="tm/#ref-tr-tm">!?TM2</a><br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnErmTimer1</strong> [Common WoG timer <a href="tm/#ref-tr-tm">!?TM1</a>]<br>
at the beginning of a new game day (including day 1) for each player after <a href="./#ref-era-new-events-2-18">OnEveryDay</a> and up to <a href="tm/#ref-tr-tm">!?TM2</a><br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnErmTimer2</strong> [Common WoG timer <a href="tm/#ref-tr-tm">!?TM2</a>]<br>
at the beginning of a new game day (including day 1) for each player after <a href="./#ref-era-new-events-2-18">OnEveryDay</a> and <a href="tm/#ref-tr-tm">!?TM1</a><br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnGameEnter</strong><br>
when entering the game after <a href="./#ref-era-new-events-2-18">OnEveryDay</a>, <a href="tm/#ref-tr-tm">!?TM1</a>, <a href="tm/#ref-tr-tm">!?TM2</a> or after loading a saved game and showing the map.<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnSavegameRead</strong><br>
after selecting a load save and initializing ERM in the load window before showing the map, before reading the save file<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnAfterLoadGame</strong> (<a href="gm/#ref-tr-gm">!?GM0</a>)<br>
after reading the save file in the loading window before showing the map after <a href="./#ref-era-new-events-2-2">OnSavegameRead</a><br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnBeforeSaveGame</strong> (<a href="gm/#ref-tr-gm">!?GM1</a>)<br>
before saving the game after entering a save name and closing the save selection dialog, but before creating the file<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnSavegameWrite</strong><br>
after creating the save file (~160KB), but before writing the data<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnAfterSaveGame</strong><br>
after all data has been written to the save file, but before the message <span class="erm-anchor" id="ref-cont-logicevent-dl3"></span><span class="erm-game-text">&lt;<span class="erm-anchor" id="ref-cont-logicevent-dl2"></span><em class="erm-game-text">save name</em>&gt; managed to save.</span><br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnAfterErmInstructions</strong> (<a href="pi/#ref-tr-pi">!?PI</a>)<br>
just before the map is shown when starting a NEW game.<br>
Doesn't work when loading a saved game<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnGameLeave</strong><br>
after confirmation exit to the main menu (new game, load game).<br>
Does NOT work when closing the window with a cross or through <span class="erm-key">Alt</span>+<span class="erm-key">F4</span></div></details></li>

<li><div class="erm-paragraph"></div><span class="erm-anchor" id="ref-cont-logicevent-5"></span><details class="erm-comment"><summary>Keyboard, mouse and others</summary><div class="erm-comment-body">
<strong class="erm-tone-purple erm-legacy-event">OnMp3MusicChange</strong> (<a href="mp/#ref-tr-mp">!?MP</a>)<br>
when changing the BACKGROUND melody (mp3 track)<br>
if the melody did not change, just repeated, the event does NOT fire<br>
after playing a sound effect (for example, the sound of a hero moving, the sound of a rebuilt building), does NOT trigger after the “click” sound on elements<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnSoundPlay</strong> (<a href="sn/#ref-tr-sn">!?SN</a>)<br>
at the beginning of playing a melody (wav sounds), for example, when playing melodies of visited objects - a stone of knowledge, etc.<br>
Does NOT trigger the sound of “clicking” on elements and other similar sound effects<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnKeyPressed</strong><br>
when you press any key on the keyboard<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnAdventureMapRightMouseClick</strong> (<a href="cm/#ref-tr-cm">!?CM0</a>)<br>
click <span class="erm-anchor" id="ref-cont-logicevent-vc"></span><img src="../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> on the adventure map<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnAdventureMapLeftMouseClick</strong> (<a href="cm/#ref-tr-cm">!?CM5</a>)<br>
click <img src="../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> on the adventure map<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnBattleScreenMouseClick</strong> (<a href="cm/#ref-tr-cm">!?CM4</a>)<br>
any click in the battle screen<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnTownMouseClick</strong> (<a href="cm/#ref-tr-cm">!?CM1</a>)<br>
any click on the MAIN screen of the town<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnTownHallMouseClick</strong><br>
any click on the Town Hall screen.<br>
Does NOT trigger outside the town hall screen<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnRecruitDlgMouseClick</strong><br>
any click on the creature recruitment screen.<br>
Does NOT trigger in the Blacksmith screen<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnKingdomOverviewMouseClick</strong><br>
any click on the Kingdom Overview screen<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnHeroScreenMouseClick</strong> (<a href="cm/#ref-tr-cm">!?CM2</a>)<br>
any click on the hero screen<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnHeroesMeetScreenMouseClick</strong> (<a href="cm/#ref-tr-cm">!?CM3</a>)<br>
any click on the hero meeting screen<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">OnChat</strong><br>
before entering the chat line AND before sending what you wrote to the game window.<br>
Does NOT work when outputting messages via <a href="../receivers/if/#ref-rec-if-l">IF:L</a><br>
<br>
<strong>Hook in <span class="erm-tone-purple erm-legacy-event">6027880</span></strong> [town income calculation]<br>
when selecting a town in the list<br>
when entering/exiting the kingdom overview<br>
when entering town<br>
AFTER exiting to the town screen from the town hall screen (before <a href="th/#ref-tr-th">!?TH1</a>), Castle screens, creature dwellings (after <a href="../receivers/rd/#ref-rec-rd-close-24">OnCloseRecruitDlg</a>)<br>
Does NOT trigger AFTER exiting to the town screen from the market screen<br>
when constructing a building, it is triggered before leaving the town hall screen AND TWICE after the building is drawn in the town screen and <a href="th/#ref-tr-th">!?TH1</a><br>
<br>
<strong class="erm-tone-purple erm-legacy-event">AddGoldForArt</strong> - <strong>Hook at 5011264</strong><br>
triggered when entering the kingdom overview (<em class="erm-tone-purple erm-legacy-event">AddResForArt</em> doesn't work)<br>
<br>
<strong class="erm-tone-purple erm-legacy-event">AddResForArt</strong> - <strong>Hook at 4950687</strong><br>
at the beginning of each day for each player in the following order: <em class="erm-tone-purple erm-legacy-event">AddResForArt</em>, calculation of town income, <em class="erm-tone-purple erm-legacy-event">AddGoldForArt</em>.<br>
Doesn't work for the first player's first day</div></details></li>

<li><div class="erm-paragraph"></div><span class="erm-anchor" id="ref-cont-logicevent-13"></span><details class="erm-comment"><summary>Triggering events in battle</summary><div class="erm-comment-body">
<dl>
<dt><span class="erm-anchor" id="ref-cont-logicevent-n2"></span><strong class="erm-tone-purple erm-strong">Preparing for battle</strong></dt>
<dd><strong></strong><span class="erm-anchor" id="ref-cont-logicevent-6"></span><details class="erm-comment"><summary>Start of battle (with tactical phase) (<span class="erm-anchor" id="ref-cont-logicevent-show6"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	<strong>Hook in <span class="erm-tone-purple erm-legacy-event">7710213</span></strong> [before the battle before <a href="ba/#ref-tr-ba">!?BA0</a>]<br>
	<strong class="erm-tone-purple erm-legacy-event">OnBeforeBattle</strong> (<a href="ba/#ref-tr-ba">!?BA0</a>)<br>
	<strong class="erm-tone-purple erm-legacy-event">OnBeforeBattleUniversal</strong> (<a href="ba/#ref-tr-ba">!?BA52</a>)<br>
	<strong class="erm-tone-purple erm-legacy-event">OnBeforeBattlefieldVisible</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnBattleRound</strong> (<a href="br/#ref-tr-br">!?BR-1</a>)<br>
	<strong class="erm-tone-purple erm-legacy-event">OnSetupBattlefield</strong> (<a href="bf/#ref-tr-bf">!?BF</a>)<br>
	appearance of the battlefield<br>
	<strong class="erm-tone-purple erm-legacy-event">OnBattlefieldVisible</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnCombatRound</strong><br>
	<strong>message "Tactical phase"</strong><br>
	performing unit actions starting from receiving a move (deployment)<br>
	pressing the "Start Battle" button<br>
	<strong class="erm-tone-purple erm-legacy-event">OnAfterTacticsPhase</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnCombatRound</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnBattleRound</strong> (<a href="br/#ref-tr-br">!?BR0</a>)<br>
	performing unit actions starting from receiving their turn</div></details></dd>
<dd><strong></strong><span class="erm-anchor" id="ref-cont-logicevent-7"></span><details class="erm-comment"><summary>Start of battle (without tactical phase) (<span class="erm-anchor" id="ref-cont-logicevent-show7"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	<strong>Hook in <span class="erm-tone-purple erm-legacy-event">7710213</span></strong> [before the battle before <a href="ba/#ref-tr-ba">!?BA0</a>]<br>
	<strong class="erm-tone-purple erm-legacy-event">OnBeforeBattle</strong> (<a href="ba/#ref-tr-ba">!?BA0</a>)<br>
	<strong class="erm-tone-purple erm-legacy-event">OnBeforeBattleUniversal</strong> (<a href="ba/#ref-tr-ba">!?BA52</a>)<br>

<!-- llm:end erm.triggers 1 -->

