---
{"title":"ERM triggers and events","summary":"28 classic families and 104 registered ERA events.","translationStatus":"reviewed"}
---

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
AFTER displaying any hint in the town screen, does NOT work in castle screens/town hall/development/taverns/dwellings, etc..<br>
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
Does NOT trigger when opening a forge<br>
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
Does NOT trigger when closing the forge<br>
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
Does NOT trigger in the Forge screen<br>
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
	<strong class="erm-tone-purple erm-legacy-event">OnBeforeBattlefieldVisible</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnBattleRound</strong> (<a href="br/#ref-tr-br">!?BR-1</a>)<br>
	<strong class="erm-tone-purple erm-legacy-event">OnSetupBattlefield</strong> (<a href="bf/#ref-tr-bf">!?BF</a>)<br>
	<strong class="erm-tone-purple erm-legacy-event">OnAfterTacticsPhase</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnBattleRound</strong> (<a href="br/#ref-tr-br">!?BR0</a>)<br>
	appearance of the battlefield<br>
	<strong class="erm-tone-purple erm-legacy-event">OnBattlefieldVisible</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnCombatRound</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnBattleRound</strong> (<a href="br/#ref-tr-br">!?BR0</a>) (yes! zero round again)<br>
	performing unit actions starting from receiving their turn</div></details></dd>
<dd><strong></strong><span class="erm-anchor" id="ref-cont-logicevent-8"></span><details class="erm-comment"><summary>Change of round (<span class="erm-anchor" id="ref-cont-logicevent-show8"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	<strong class="erm-tone-purple erm-legacy-event">OnBeforeBattleAction</strong> (<a href="bg/#ref-tr-bg">!?BG0</a>) for the last active unit in the round<br>
	<strong class="erm-tone-purple erm-legacy-event">OnCombatRound</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnBattleRound</strong> (<a href="br/#ref-tr-br">!?BR</a>[round n+1])<br>
	performing unit actions starting from receiving their turn</div></details></dd><br>
<dt><strong class="erm-tone-purple erm-strong">Unit actions</strong></dt>
<dd><strong></strong><span class="erm-anchor" id="ref-cont-logicevent-9"></span><details class="erm-comment"><summary>Getting a move (<span class="erm-anchor" id="ref-cont-logicevent-show9"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	<strong class="erm-tone-purple erm-legacy-event">OnBattleRegeneratePhase</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnBattleStackObtainsTurn</strong><br>
	stack performs special. action, such as ghosts stealing mana<br>
	stack gets a move and is highlighted with an outline<br>
	<strong>Hook in <span class="erm-tone-purple erm-legacy-event">4609014</span></strong> [after the regeneration phase; tests for morality, fear; and after installing the active stack]<br>
	<strong class="erm-tone-purple erm-legacy-event">OnAfterBattleAction</strong> (<a href="bg/#ref-tr-bg">!?BG1</a>) - does not work for the very first action of the first unit in battle<br>
	selecting and performing an action</div></details></dd>
<dd><strong></strong><span class="erm-anchor" id="ref-cont-logicevent-10"></span><details class="erm-comment"><summary>Move/waiting/defence (<span class="erm-anchor" id="ref-cont-logicevent-show10"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	animation + sound of squad movement, if movement<br>
	performing unit actions starting from receiving their turn</div></details></dd>
<dd><strong></strong><span class="erm-anchor" id="ref-cont-logicevent-11"></span><details class="erm-comment"><summary>Enemy attack (<span class="erm-anchor" id="ref-cont-logicevent-show11"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	hovering over an enemy<br>
	<strong class="erm-tone-purple erm-legacy-event">OnStackToStackDamage</strong> (2/3 times for hand-to-hand workers/shooters respectively is triggered)<br>
	a hint is displayed with an estimate of the damage that can be caused<br>
	click attack<br>
	<strong class="erm-tone-purple erm-legacy-event">OnBeforeBattleAction</strong> (<a href="bg/#ref-tr-bg">!?BG0</a>)<br>
	animation + gunshot sound/approach/approach<br>
	<strong class="erm-tone-purple erm-legacy-event">OnStackToStackDamage</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnMonsterPhysicalDamage</strong> (<a href="mf/#ref-tr-mf">!?MF1</a>)<br>
	animation + sound of the attacker attacking and the target receiving damage<br>
	<strong>Hook in <span class="erm-tone-purple erm-legacy-event">4455129</span></strong> [after the shot] or <strong>Hook in <span class="erm-tone-purple erm-legacy-event">4462998</span></strong> [after attack]<br>
	start of counterattack, if any<br>
	<strong class="erm-tone-purple erm-legacy-event">OnStackToStackDamage</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnMonsterPhysicalDamage</strong> (<a href="mf/#ref-tr-mf">!?MF1</a>)<br>
	animation + sound of the attacker attacking and the target receiving damage<br>
	<strong>Hook in <span class="erm-tone-purple erm-legacy-event">4462998</span></strong> [after attack]<br>
	end of counterattack<br>
	return animation for harpies<br>
	<span class="erm-tone-accent">if the attack/counterattack destroyed the last stack of any side:<br>
	displaying the battle results window<br>
	pressing the "ok" button in the battle results window<br>
	<strong class="erm-tone-purple erm-legacy-event">OnAfterBattleAction</strong> (<a href="bg/#ref-tr-bg">!?BG1</a>)<br>
	Gaining a commander/hero level if enough experience is gained</span><br>
	<strong class="erm-tone-purple erm-legacy-event">OnAfterBattle</strong> (<a href="ba/#ref-tr-ba">!?BA1</a>)<br>
	<strong class="erm-tone-purple erm-legacy-event">OnAfterBattleUniversal</strong> (<a href="ba/#ref-tr-ba">!?BA53</a>)<br>
	performing unit actions starting from receiving their turn</div></details></dd>
<dd><strong></strong><span class="erm-anchor" id="ref-cont-logicevent-12"></span><details class="erm-comment"><summary>AI squad action (without hero) (<span class="erm-anchor" id="ref-cont-logicevent-show12"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	<strong class="erm-tone-purple erm-legacy-event">OnStackToStackDamage x2/x3</strong> <strong class="erm-tone-text">+</strong> <strong class="erm-tone-purple erm-legacy-event">OnAICalcStackAttackEffect</strong> (triggers for every potential target, even if it is unreachable)<br>
	<strong class="erm-tone-purple erm-legacy-event">OnAICalcStackAttackEffect</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnBeforeBattleAction</strong> (<a href="bg/#ref-tr-bg">!?BG0</a>)<br>
	performing the action as for a human squad<br>
	performing unit actions starting from receiving their turn</div></details></dd></dl></div></details>
</li></ul>






</div>
</section>
:::

## Triggers {#ref-cont-triggers}

:::erm
<section class="erm-reference" lang="en">
<div>
<div>
<h3 class="erm-align-center">Main triggers:</h3>
<span class="erm-anchor" id="ref-cont-triggers-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note erm-paragraph"><span><a href="./#ref-cont-triggersol">Triggers: general information</a><br>
<a href="./#ref-cont-eventslist" data-context="true">List of triggers and their named events</a><br>
<a href="./#ref-cont-triggers-era">List of ERA triggers</a></span></div></div>

<div>
<div class="table-wrap erm-reference-table"><table width="100%">
<span class="erm-anchor" id="ref-cont-triggers-n2"></span><tr class="erm-tone-purple erm-strong">
	<td width="14%">Code</td><td width="22"></td>
	<td>It works...</td>
</tr>
<tr>
	<td><a href="ae/#ref-tr-ae">!?AE</a></td><td></td>
	<td>when putting on and taking off artifacts</td>
</tr>
<tr>
	<td><a href="ba/#ref-tr-ba">!?BA</a></td><td></td>
	<td>at the beginning and end of the battle</td>
</tr>
<tr>
	<td><a href="bf/#ref-tr-bf">!?BF</a></td><td></td>
	<td>when working out the battlefield (obstacles, etc.)</td>
</tr>
<tr>
	<td><a href="bg/#ref-tr-bg">!?BG</a></td><td></td>
	<td>during any action of the stack or hero in battle</td>
</tr>
<tr>
	<td><a href="br/#ref-tr-br">!?BR</a></td><td></td>
	<td>at the beginning of each battle round</td>
</tr>
<tr>
	<td><a href="cm/#ref-tr-cm">!?CM</a></td><td></td>
	<td>on mouse click</td>
</tr>
<tr>
	<td><a href="co/#ref-tr-co">!?CO</a></td><td></td>
	<td>when acting with a commander</td>
</tr>
<tr>
	<td><a href="dl/#ref-tr-dl">!?DL</a></td><td class="erm-align-right"><a href="../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-middle erm-inline-icon"></a></td>
	<td>when interacting with the user's dialog</td>
</tr>
<tr>
	<td><a href="fu/#ref-tr-fu">!?FU</a></td><td></td>
	<td>Contains function code</td>
</tr>
<tr>
	<td><a href="ge/#ref-tr-ge">!?GE</a></td><td></td>
	<td>when a certain global event occurs</td>
</tr>
<tr>
	<td><a href="gm/#ref-tr-gm">!?GM</a></td><td></td>
	<td>when loading and saving the game</td>
</tr>
<tr>
	<td><a href="he/#ref-tr-he">!?HE</a></td><td></td>
	<td>when attacking or exchanging (alliance) with a certain hero</td>
</tr>
<tr>
	<td><a href="hl/#ref-tr-hl">!?HL</a></td><td></td>
	<td>when the hero gains a level</td>
</tr>
<tr>
	<td><a href="hm/#ref-tr-hm">!?HM</a></td><td></td>
	<td>with every step of the hero</td>
</tr>
<tr>
	<td><a href="ip/#ref-tr-ip">!?IP</a></td><td></td>
	<td>Supports multiplayer</td>
</tr>
<tr>
	<td><a href="le/#ref-tr-le">!?LE<span class="erm-anchor" id="ref-cont-triggers-black"></span><em class="erm-tone-text">/</em><wbr>!$LE</a></td><td></td>
	<td>before/after visiting a local event</td>
</tr>
<tr>
	<td><a href="mf/#ref-tr-mf">!?MF</a></td><td></td>
	<td>with each application of physical damage in battle</td>
</tr>
<tr>
	<td><a href="mg/#ref-tr-mg">!?MG</a></td><td></td>
	<td>when casting spells on the map</td>
</tr>
<tr>
	<td><a href="mm/#ref-tr-mm">!?MM</a></td><td></td>
	<td>when prompts appear (in a battle, town window, etc.)</td>
</tr>
<tr>
	<td><a href="mp/#ref-tr-mp">!?MP</a></td><td><a href="../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-middle erm-inline-icon"></a></td>
	<td>when playing mp3 files</td>
</tr>
<tr>
	<td><a href="mr/#ref-tr-mr">!?MR</a></td><td></td>
	<td>when a creature resists a spell in battle</td>
</tr>
<tr>
	<td><a href="mw/#ref-tr-mw">!?MW</a></td><td></td>
	<td>for Stray Creatures</td>
</tr>
<tr>
	<td><a href="ob/#ref-tr-ob">!?OB<em class="erm-tone-text">/</em><wbr>!$OB</a></td><td></td>
	<td>during/after visiting the object(s)</td>
</tr>
<tr>
	<td><a href="pi/#ref-tr-pi">!?PI</a></td><td></td>
	<td>post-instruction</td>
</tr>
<tr>
	<td><a href="sn/#ref-tr-sn">!?SN</a></td><td></td>
	<td>when the game tries to play any sound</td>
</tr>
<tr>
	<td><a href="th/#ref-tr-th">!?TH</a></td><td></td>
	<td>at the entrance and exit to the town hall</td>
</tr>
<tr>
	<td><a href="tl/#ref-tr-tl">!?TL</a></td><td class="erm-align-right"><a href="../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-middle erm-inline-icon"></a></td>
	<td>Real time timer</td>
</tr>
<tr>
	<td><a href="tm/#ref-tr-tm">!?TM</a></td><td></td>
	<td>Contains timer code</td>
</tr>
</table></div>


</div></div>
</section>
:::

## Triggers ERA {#ref-cont-triggers-era}

:::erm
<section class="erm-reference" lang="en">
<div>
<div>
<h3 class="erm-align-center">Triggers (events) :</h3>
<span class="erm-anchor" id="ref-cont-triggers-era-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note erm-paragraph"><span><a href="./#ref-cont-triggersol">Triggers: general information</a><br>
<a href="./#ref-cont-eventslist" data-context="true">List of triggers and their named events</a><br>
<a href="./#ref-cont-triggers">List of main triggers</a></span></div></div>

<div>
<div class="table-wrap erm-reference-table"><table width="100%">
<span class="erm-anchor" id="ref-cont-triggers-era-n2"></span><tr class="erm-tone-purple erm-strong">
	<td width="14%">Name</td>
	<td>Trigger Description</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-1">OnSavegameWrite</a></td>
	<td> saving data</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-2">OnSavegameRead</a></td>
	<td> loading data from a save</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-3">OnKeyPressed</a></td>
	<td> key press</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-4">OnOpenHeroScreen</a></td>
	<td> opening the hero window</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-5">OnCloseHeroScreen</a></td>
	<td> closing the hero window</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-6">OnBattleStackObtainsTurn</a></td>
	<td> stack gets a turn in battle</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-7">OnBattleRegeneratePhase</a></td>
	<td> regeneration phase in battle</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-8">OnAfterSaveGame</a></td>
	<td> after saving the game</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-10">OnBeforeHeroInteraction</a></td>
	<td> before hero-to-hero interaction</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-11">OnAfterHeroInteraction</a></td>
	<td> after hero-to-hero interaction</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-12">OnStackToStackDamage</a></td>
	<td> when taking stack damage</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-13">OnAICalcStackAttackEffect</a></td>
	<td> AI calculation of attack efficiency by squad</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-14">OnChat</a></td>
	<td> chat event (login, logout, enter)</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-15">OnGameEnter</a></td>
	<td> start processing adventure map dialog events after loading/starting a new game</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-16">OnGameLeave</a></td>
	<td> when exiting to the main menu/closing the game</td>
</tr>
<span class="erm-anchor" id="ref-cont-triggers-era-17"></span><details class="erm-comment"><summary>ERA</summary><div class="erm-comment-body">
	<td><span class="erm-tone-purple erm-legacy-event" title="Information has been removed from the reference book at the request of the author ERA.
The event description is in the file &#x27;era2_changelog.txt&#x27;">OnRemoteEvent</span></td>
	<td> generates the function !?FU(OnRemoteEvent) on the remote PC</td>
</div></details>
<tr>
	<td><a href="./#ref-era-new-events-2-18">OnEveryDay</a></td>
	<td> at the beginning of a new game day (before timers)</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-19">OnBeforeBattlefieldVisible</a></td>
	<td> in the dark loading phase of the battle</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-20">OnBattlefieldVisible</a></td>
	<td> when displaying the battlefield</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-21">OnAfterTacticsPhase</a></td>
	<td> after the end of the tactical phase</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-22">OnCombatRound</a></td>
	<td> before the start of a new round</td>
</tr>
<tr>
	<td><a href="../receivers/rd/#ref-rec-rd-open-23">OnOpenRecruitDlg</a></td>
	<td> when the dialogue for recruiting recruits is opened (created)</td>
</tr>
<tr>
	<td><a href="../receivers/rd/#ref-rec-rd-close-24">OnCloseRecruitDlg</a></td>
	<td> when closing the dialog for hiring recruits</td>
</tr>
<tr>
	<td><a href="../receivers/rd/#ref-rec-rd-click-25">OnRecruitDlgMouseClick</a></td>
	<td> when clicking the mouse in the recruitment dialog</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-26" title="Since ERA 3.4.0, renamed to &quot;OnTownFortMouseClick&quot;">OnTownHallMouseClick</a></td>
	<td> when clicking on the "Town Hall" screen</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-27">OnKingdomOverviewMouseClick</a></td>
	<td> when clicking on the "Kingdom Overview" screen</td>
</tr>
<tr>
	<td><a href="../receivers/rd/#ref-rec-rd-calc-28">OnRecruitDlgRecalc</a></td>
	<td> recalculation of the number of creatures in the recruitment dialogue</td>
</tr>
<tr>
	<td><a href="../receivers/rd/#ref-rec-rd-action-29">OnRecruitDlgAction</a></td>
	<td> when hiring creatures in the recruitment dialogue</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-30">OnLoadHeroScreen</a></td>
	<td> before the hero screen opens (dark phase)</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-31">OnBuildTownBuilding</a></td>
	<td> construction of buildings in the town</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-32">OnOpenTownScreen</a></td>
	<td> before loading the town screen (dark phase)</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-33">OnCloseTownScreen</a></td>
	<td> after closing the town screen (dark phase)</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-34">OnSwitchTownScreen</a></td>
	<td> when switching towns in the town window</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-35">OnPreTownScreen</a></td>
	<td> before the town screen is displayed (dark phase)</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-36">OnPostTownScreen</a></td>
	<td> when the town screen closes (dark phase)</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-37">OnPreHeroScreen</a></td>
	<td> before loading the hero screen (dark phase)</td>
</tr>
<tr>
	<td><a href="./#ref-era-new-events-2-38">OnPostHeroScreen</a></td>
	<td> after closing the hero screen (dark phase)</td>
</tr>
</table></div>


</div></div>
</section>
:::

## Triggers: General {#ref-cont-triggersol}

:::erm
<section class="erm-reference" lang="en">
<div>

<span class="erm-anchor" id="ref-cont-triggersol-text"></span><div>
<h3 class="erm-align-center">Triggers</h3>
<span class="erm-anchor" id="ref-cont-triggersol-intro"></span><h3>Introduction</h3>
<div class="erm-paragraph">When the player activates trigger, certain actions of one or more 
receivers. The trigger can be an event, an object, or a hero that visits 
another hero, or it could be an ERM function called from another ERM code 
or an event set for a specific time or interval. The receiver can 
be an event, hero, an object on the map or other things. Since many things in 
game can be used as triggers or receivers, it is important not to confuse, 
what belongs where.</div>
<span class="erm-anchor" id="ref-cont-triggersol-use"></span><h3>How to use triggers</h3>
<div class="erm-paragraph">The properties of the trigger event or trigger object are not important for the operation itself 
trigger. The actions of triggers must be described in a temporary event. B 
In ERM scripts, trigger is the title link, and must be followed by 
receivers. If you are placing more than one trigger on an event, it is important to understand 
that there is no "end of trigger" code; new trigger will stop executing receivers 
previous trigger.</div>
<span class="erm-anchor" id="ref-cont-triggersol-synt"></span><h3>Trigger syntax</h3>
<div class="erm-paragraph">Each trigger begins with an exclamation mark and a question mark (!?) and ends 
";". After !? followed by a two-letter trigger code, for example 
<a href="ba/#ref-tr-ba">!?BA</a>, <a href="ob/#ref-tr-ob">!?OB</a> or 
<a href="he/#ref-tr-he">!?HE</a>. Following the trigger name are the parameters shown 
like # in help. Each parameter (#) must be an integer, for example 
<span class="erm-anchor" id="ref-cont-triggersol-erm"></span><strong class="erm-inline-code"><span class="erm-tone-red erm-legacy-strong">!?HE</span>47;</strong>. The meaning and range of numbers for each type of trigger is different. 
For an HE trigger, the number is the hero's number (each hero has its own sequence number), 
for the LE trigger, this is the position of the event on the map.</div>
<span class="erm-anchor" id="ref-cont-triggersol-var-use"></span><h3>Using Variables in Triggers</h3>
<div class="erm-paragraph">Variables cannot be used as trigger parameters. If you try 
do this, the variable will be ignored or set to zero. If you 
use constant variables, for example v4, the letter (v) will be ignored, 
and this will be taken as the number 4.</div>
<span class="erm-anchor" id="ref-cont-triggersol-double"></span><h3>Double triggers</h3>
<div class="erm-paragraph">If some triggers are used more than once on the map, in this case
ALL receivers for this trigger will be executed starting with receivers 
the first trigger (in order of location in events) and ending with receivers 
the last one.<br>
Note that trigger !?BA0; - different from !?BA1;, and also trigger !?HE47; - 
different from !?HE48; </div>
<span class="erm-anchor" id="ref-cont-triggersol-cond"></span><h3>Trigger conditions</h3>
<div class="erm-paragraph">Conditions can be added to a trigger and the receivers of that trigger will be 
work only if the condition is met. To do this, use the sign (&amp;) immediately 
after the last parameter and before the semicolon. After &amp;, insert your condition. 
This condition must contain a flag or variable, comparison signs (=, &gt;, &lt;, &gt;=, 
&lt;=, or &lt;&gt;) and a second variable or value.
</div><div class="erm-paragraph"><u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!?BA0&amp;v10=51;
The receivers of this trigger will only work if v10 is set to 51.</code></pre>
You can include multiple checks using "slash" (<span class="erm-key">/</span>):
<pre class="erm-example"><code class="language-erm">!?BA0&amp;v10=51/v2&gt;=5;
The receivers of this trigger will only work if v10 is equal to 51, and if v2 is equal to or greater than 5.</code></pre></div>
<span class="erm-anchor" id="ref-cont-triggersol-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note">See article about <a href="../variables/#ref-cont-flags">flags and variables</a> for more information.</div> 
</div>
</div>
</section>
:::

## HANDBOOK {#ref-era-new-events}

:::erm
<section class="erm-reference" lang="en">
<div>


<span class="erm-anchor" id="ref-era-new-events-text"></span><div>
<span class="erm-anchor" id="ref-era-new-events-up"></span>

<h3 class="erm-align-center">New events (triggers)<a href="../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a></h3>

<div class="erm-paragraph">ERA has implemented the ability to use a letter designation (name) for ERM functions in the form <span class="erm-anchor" id="ref-era-new-events-erm"></span><strong class="erm-inline-code"><span class="erm-tone-red erm-legacy-strong">!?FU</span>(name)</strong>.<br>
Named functions are always arbitrary text between brackets, which is replaced at the map loading stage with automatic free numbers (always unique).<br>
<u></u></div><span class="erm-anchor" id="ref-era-new-events-1"></span><details class="erm-comment"><summary>Examples (<span class="erm-anchor" id="ref-era-new-events-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body"><div class="erm-paragraph">
<pre class="erm-example"><code class="language-erm">!!DO(Find EmptyHero Slot)/i/j/k:P?y1;</code></pre>
It is also important to know that you can do this:
<pre class="erm-example"><code class="language-erm">...
!!VRy1:S(name);
!!FUy1:P;
...
!!SN:W^name^/?y2;</code></pre>
<u>It works like this</u>: as soon as you encounter brackets with the text (...) not in the line, but in the EPM code, select a function number under this (name) or take one already allocated earlier, 
then paste it into the code. Also, by default, a name of the same name is created <a href="../receivers/sn/#ref-rec-sn-era-w">SN:W</a>-variable with the value of the function number allocated for a given name (i.e. in the example we have y1=y2). 
But at the same time, the correspondence between function names and IDs allocated for them is stored outside <a href="../receivers/sn/#ref-rec-sn-era-w">associative memory</a>.</div></div></details>
<div class="erm-paragraph">In ERA, the binding to the range 0..30000 for ERM functions has been removed. Functions, except FU1..FU29999, should only be named for maximum compatibility.<br>
ERA reserves functions numbered 77000..77999 for its needs. Script writers and plugin creators can use values in the range 40000..134217727.</div>
<div class="erm-paragraph">New events are introduced into the game not in the form of the usual ERM triggers like <strong class="erm-inline-code"><span class="erm-tone-red erm-legacy-strong">!?XX</span></strong>, and in the form of named functions of the form <strong class="erm-inline-code"><span class="erm-tone-red erm-legacy-strong">!?FU</span>(OnXXXX)</strong>.</div>
<div class="erm-paragraph">All new events have a set of 16 local (immutable, re-generated by events) parameters that can be read/written by accessing directly x1..x16 
(or via the legacy command <a href="../receivers/sn/#ref-rec-sn-era-x">SN:X</a>).<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?FU(OnKeyPressed)&amp;x1=27; ESC key pressed (code 27)
!!VRx2:S1; disable default reaction</code></pre></div>
<div class="erm-paragraph">See also: <a href="./#ref-cont-logicevent">Event trigger logic</a>.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-1"></span>
<span class="erm-anchor" id="ref-era-new-events-red"></span><span class="erm-tone-red"><strong>!?FU(OnSavegameWrite);</strong></span><br>
Saving data.</div>
<span class="erm-anchor" id="ref-era-new-events-q1"></span><pre class="erm-tone-quote erm-note"><strong>Parameters:</strong> <em>no</em></pre>
<div class="erm-paragraph">In this event, it is possible to write user data to file sections using a machine function <em class="erm-tone-purple erm-legacy-event">WriteSavegameSection</em>. All EPM variables have already been saved at this point.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-2"></span>
<span class="erm-tone-red"><strong>!?FU(OnSavegameRead);</strong></span><br>
Loading data from a save.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong> <em>no</em></pre>
<div class="erm-paragraph">In this event, it is possible to read user data from file sections using a machine function <em class="erm-tone-purple erm-legacy-event">ReadSavegameSection</em>. All EPM variables have already been loaded at this point.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-3"></span>
<span class="erm-tone-red"><strong>!?FU(OnKeyPressed);</strong></span><br>
Key press.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em><a href="../framework/constants/key-codes/#ref-form-keys" data-context="true">key code</a></em>
 2:  <em>block game processing? (0 - no, 1 - yes)</em></pre>
<div class="erm-paragraph">To determine which game window we are currently in, use the function <a href="../receivers/sn/#ref-era-api-state">GetGameState</a>.<br>
Variables v1..v10 and z1 after the event <em class="erm-tone-purple erm-legacy-event">OnKeyPressed</em> automatically restore their previous values.</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-bold"></span><em class="erm-strong">Note:</em> Since this event occurs in all game dialogues, it is not recommended to use shared global variables between dialogue displays, as an event from the dialogue may corrupt them.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?FU(OnKeyPressed); key press
!!VRy1:Sx1; y1 - key code
!!FU&amp;y1&lt;&gt;83:E; exit if the code is not 83 (key "S")
!!SN:L^Era.dll^/?y2; received the ERA library descriptor in y2
!!SN:Ay2/^GetGameState^/?y3; y3 - address of the GetGameState function
!!SN:Ey3/1/?y4/?y5; y4 - ID of the parent dialog, y5 - current
!!FU&amp;y4&lt;&gt;4205280:E; exit if it is not Adventure Map
!!VRx2:S1; block standard action
!!IF:M^Unfortunately, saving is not possible at the moment^;</code></pre></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-4"></span>
<span class="erm-tone-red"><strong>!?FU(OnOpenHeroScreen);</strong></span><br>
Opening the hero window.</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-5"></span>
<span class="erm-tone-red"><strong>!?FU(OnCloseHeroScreen);</strong></span><br>
Closing the hero window.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>hero number</em></pre>
<div class="erm-paragraph">In the event <em class="erm-tone-purple erm-legacy-event">OnCloseHeroScreen</em> the value of parameter x1 is the same as in <em class="erm-tone-purple erm-legacy-event">OnOpenHeroScreen</em>, 
i.e. This is the number of the original hero for whom the hero screen was opened.<br>
The hero window allows you to switch between the player's heroes without generating new open/close events.<br>
The syntax works for both events is <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>-1:…</strong>.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-6"></span>
<span class="erm-tone-red"><strong>!?FU(OnBattleStackObtainsTurn);</strong></span><br>
Stack gets a turn in battle.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>side (0 - left, 1 - right)</em>
 2:  <em>squad number (0..21)</em></pre>
<div class="erm-paragraph"><u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?FU(OnBattleStackObtainsTurn);
!!SN:X0/0; in battle, only the first stack hero will get the right to move</code></pre></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-7"></span>
<span class="erm-tone-red"><strong>!?FU(OnBattleRegeneratePhase);</strong></span><br>
Regeneration phase in battle.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>squad number (0..41)</em>
 2:  <em>pointer to the TBattleMonster structure</em>
 3:  <em>block regeneration? (0 - no, 1 - yes)</em></pre>
<div class="erm-paragraph">In this event, the regeneration of Nightmare Hydras, Trolls, and Ghosts occurs.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?FU(OnBattleRegeneratePhase);
!!VRy1:Sx1; y1 - squad number
!!FU&amp;y1&gt;21:E; come out if it's the defenders
!!BMy1:M41/999/3; apply exp. blessing on stack
; Now all attacking units always have an expert blessing</code></pre></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-8"></span>
<span class="erm-tone-red"><strong>!?FU(OnAfterSaveGame);</strong></span><br>
After saving the game.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong> <em>no</em></pre>
<div class="erm-paragraph"><u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?(OnAfterSaveGame);
!!IF:M^Now that the game is saved, I suggest you turn off your computer and rest^;
!!UN:C0/4/0; cause the game to crash</code></pre></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-10"></span>
<span class="erm-tone-red"><strong>!?FU(OnBeforeHeroInteraction);</strong></span><br>
Before hero-to-hero interaction.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>initiating hero number</em>
 2:  <em>target hero number</em>
 3:  <em>allow interaction? (1 - yes, 0 - no)</em></pre>
<div class="erm-paragraph">The interaction can be a meeting of the player's heroes, allied heroes, or an attack on the enemy.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-11"></span>
<span class="erm-tone-red"><strong>!?FU(OnAfterHeroInteraction);</strong></span><br>
After hero-to-hero interaction.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>initiating hero number</em>
 2:  <em>target hero number</em></pre>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-12"></span>
<span class="erm-tone-red"><strong>!?FU(OnStackToStackDamage);</strong></span><br>
Occurs when calculating the damage done by one stack to another stack (including shooting).</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>attacker stack (0..41) or -1</em>
 2:  <em>defending stack (0..41) or -1</em>
 3:  <em>final damage (DO NOT CHANGE!)</em>
 4:  <em>final damage (CHANGEABLE)</em>
 5:  <em>base damage</em>
 6:  <em>damage bonus (due to attack/defense difference, cavalry blonus or any configured bonus)</em>
 7:  <em>ranged attack? (0 - melee attack, 1 ranged, if not 0 or 1, then contains garbage)</em>
 8:  <em>distance (set for theoretical attacks only)</em>
 9:  <em>theoretical attack? (calculation for hint or AI: 0 - real damage, 1 - estimated)</em></pre>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-13"></span>
<span class="erm-tone-red"><strong>!?FU(OnAICalcStackAttackEffect);</strong></span><br>
Occurs when the AI calculates the effect of a stack attack.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>attacker stack (0..41)</em>
 2:  <em>defending stack (0..41)</em>
 3:  <em>effect value (CHANGEABLE)</em>
 4:  <em>effect value (DO NOT CHANGE)</em></pre>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-14"></span>
<span class="erm-tone-red"><strong>!?FU(OnChat);</strong></span><br>
Event chat.
</div><pre class="erm-tone-quote erm-note">The first parameter determines the event type and the remaining parameters:
0 (Enter chat)
	Deny entry? (0..1)
1 (Enter)
	Input line
	Action: 0 (clear panel), 1 (close panel) or 2 (default)
2 (Leave chat)</pre>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-15"></span>
<span class="erm-tone-red"><strong>!?FU(OnGameEnter);</strong></span><br>
Occurs after loading/starting a new game (the player has gained control of the mouse).</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-16"></span>
<span class="erm-tone-red"><strong>!?FU(OnGameLeave);</strong></span><br>
Occurs when exiting to the main menu/closing the game.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong> <em>no</em></pre>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-18"></span>
<span class="erm-tone-red"><strong>!?FU(OnEveryDay);</strong></span><br>
Occurs at the beginning of a new game day (before timers).</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong> <em>no</em></pre>
<div class="erm-paragraph">Same as <a href="tm/#ref-tr-tm">OnErmTimer N</a> (aka !?TM), but happens every day for every player (including AI) without any settings and before all other triggers <a href="tm/#ref-tr-tm">!?TM</a>.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?FU(OnEveryDay)&amp;-1000; every day for any AI player
...</code></pre></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-19"></span>
<span class="erm-tone-red"><strong>!?FU(OnBeforeBattlefieldVisible);</strong></span><br>
Occurs in the dark phase of the battle loading (right before !?BR&amp;v997=-1).</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong> <em>no</em></pre>
<div class="erm-paragraph">In this event WoG applies spells to stacks and initial shooting settings/hand-to-hand/impact-return.<br>
<strong>IMPORTANT!</strong> Receivers cannot be used <a href="../receivers/bm/#ref-rec-bm">BM</a> and <a href="../receivers/ea/#ref-rec-ea">EA</a> up to <em class="erm-tone-purple erm-legacy-event">OnBeforeBattlefieldVisible</em>, because the battle has not yet started, and the entire battle manager is either not initialized or has old data structures from the last battle.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-20"></span>
<span class="erm-tone-red"><strong>!?FU(OnBattlefieldVisible);</strong></span><br>
Occurs when the battlefield is displayed.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong> <em>no</em></pre>
<div class="erm-paragraph">Right before this event, the game changes the theme to combat and displays a pop-up message about the tactical deployment of troops (if you have a tactical skill).</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-21"></span>
<span class="erm-tone-red"><strong>!?FU(OnAfterTacticsPhase);</strong></span><br>
Occurs immediately after the end of the tactical phase (or after <a href="./#ref-era-new-events-2-19">OnBeforeBattlefieldVisible</a>, if there was no tactical phase).</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong> <em>no</em></pre>
<div class="erm-paragraph">In this event, WoG summons Santa Gremlin guards (because the stacks are now in their final positions).</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-22"></span>
<span class="erm-tone-red"><strong>!?FU(OnCombatRound);</strong></span><br>
Occurs before the start of a new round (only for visible real rounds).</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong> <em>no</em></pre>
<div class="erm-paragraph">v997 - round number. For the tactical phase it starts from -1000000000. For the normal combat phase, the countdown starts from 0. 
Each round v997 increases by one, so it can serve as an ever-growing unique round identifier.<br>
<em class="erm-strong">Note:</em> the value of v997 in other triggers may be different!<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?FU(OnCombatRound)&amp;v997=0; on the 1st non-tactical visible real rand
; cast spells, play music, change creature parameters, etc.</code></pre></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-26"></span>
<span class="erm-tone-red"><strong>!?FU(OnTownHallMouseClick);</strong></span><br>
Occurs when you click on the "Town Hall" screen.</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-27"></span>
<span class="erm-tone-red"><strong>!?FU(OnKingdomOverviewMouseClick);</strong></span><br>
Appears when you click on the “Kingdom Overview” screen.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong> <em>no</em></pre>
<div class="erm-paragraph">All parameters, as usual, can be obtained using <a href="../receivers/cm/#ref-rec-cm">!!CM</a>. The default reaction can be disabled.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-30"></span>
<span class="erm-tone-red"><strong>!?FU(OnLoadHeroScreen);</strong></span><br>
Occurs before the hero screen opens (dark phase).</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>hero number</em></pre>
<div class="erm-paragraph">Event occurs just before the hero screen is rendered for a specific hero: after the event <a href="./#ref-era-new-events-2-4">OnOpenHeroScreen</a> and every time you switch in the same dialogue between the player’s characters. 
Also, the event occurs when you click on a hero in a tavern and in battle (with special plugins).<br>
Event can be used to change information/development/of the hero's troops ONLY in the hero's window.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-31"></span>
<span class="erm-tone-red"><strong>!?FU(OnBuildTownBuilding);</strong></span><br>
Construction of buildings in the town.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>town number</em>
 2:  <em><a href="../tables/building-pictures/#ref-form-buldingsintowns" data-context="true">building number</a></em></pre>
<div class="erm-paragraph">Event occurs when the current player (including AI) builds a building in a castle.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-32"></span>
<span class="erm-tone-red"><strong>!?FU(OnOpenTownScreen);</strong></span><br>
Occurs before the town screen loads (dark phase).</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-33"></span>
<span class="erm-tone-red"><strong>!?FU(OnCloseTownScreen);</strong></span><br>
Occurs after closing the town screen (dark phase).</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>number of the town that was originally opened.</em></pre>
<div class="erm-paragraph">Inside the town screen, you can switch between locks without generating entry/exit events.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-34"></span>
<span class="erm-tone-red"><strong>!?FU(OnSwitchTownScreen);</strong></span><br>
Occurs when switching locks in a town window.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>town number</em></pre>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-35"></span>
<span class="erm-tone-red"><strong>!?FU(OnPreTownScreen);</strong></span><br>
Occurs before the town screen is displayed (dark phase).</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-36"></span>
<span class="erm-tone-red"><strong>!?FU(OnPostTownScreen);</strong></span><br>
Occurs when the town screen is closed (dark phase).</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>town number</em></pre>
<div class="erm-paragraph">Both events occur for a specific castle and regardless of whether the town screen is opened/closed or switched.<br>
They can be used, for example, for preliminary name changes/of the buildings/dwellings and the cancellation of changes subsequently.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-37"></span>
<span class="erm-tone-red"><strong>!?FU(OnPreHeroScreen);</strong></span><br>
Occurs before the hero screen loads (dark phase).</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-2-38"></span>
<span class="erm-tone-red"><strong>!?FU(OnPostHeroScreen);</strong></span><br>
Occurs after the hero screen closes (dark phase).</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>hero number</em></pre>
<div class="erm-paragraph">Both events occur for a specific hero and regardless of whether the hero’s screen opens/closes or switches between heroes.<br>
They can be used to pre-modify creatures/titled/skills of the hero  and undoing changes afterwards.</div>
<hr>
<h3><span class="erm-anchor" id="ref-era-new-events-1-0"></span>Enhanced Standard Events in ERA</h3>
<div class="erm-paragraph">Extended standard events also have their own <a href="../receivers/sn/#ref-rec-sn-era-x">SN:X</a> parameters and additional features.</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-1-1"></span>
<span class="erm-tone-red"><strong>!?GM1</strong></span><br>
Trigger to save the game.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>save name</em></pre>
<div class="erm-paragraph"><u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?GM1;
!!SN:X?z1; received the name of the saved game.
!!VRz1:+^_%Gc^; added the current player's color to it
!!SN:Xz1; set a new save name</code></pre>
If the red player chose <code>newgame</code>, then the game will be saved to a file <em class="erm-legacy-file">newgame_Red.gm1</em>.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-new-events-1-2"></span>
<span class="erm-tone-red"><strong>!?MM0</strong></span><br>
Trigger to control the text in battle.</div>
<pre class="erm-tone-quote erm-note"><strong>Parameters:</strong>
 1:  <em>current squad number or -1</em>
 2:  <em>number of the enemy unit the cursor is hovering over or -1</em>
 3:  <em>minimum damage</em>
 4:  <em>maximum damage</em></pre>
<div class="erm-paragraph"><u>Example</u>:<br>
Trigger is convenient for replacing the standard tooltip in battle with an expanded one indicating how many enemy units will be killed upon impact.
<pre class="erm-example"><code class="language-erm">!?MM;
!!VRy1:Cx1/x2/x3/x4; received event parameters in y1..y4
!!FU&amp;y2=-1:E; exited if this is not a hint about damage
!!BMy2:H?y5 L?y6 N?y7; y5 - life, y6 - lost health, y7 - number of enemy units
!!VRy8:Sy5-y6; y8 - health of the last unit of the squad
!!VRy9:Sy3:y5; y9 - minimum number, will die
!!VRy10:Sy3%y5; y10 - damage to the last unit in the worst case
!!VRy9&amp;y10&gt;=y8:+1; y9 - minimum number, will die
!!VRy11:Sy4:y5; y11 - maximum number of people who will die
!!VRy12:Sy4%y5; y12 - damage to the last unit at best
!!VRy11&amp;y12&gt;=y8:+1; y11 - maximum number of people who will die
!!VRy13:Sy5*y7-y6; y13 - total health of the squad
!!VRy9&amp;y9&gt;y7:Sy7; y9 - minimum number, will die
!!VRy11&amp;y11&gt;y7:Sy7; y11 - maximum number of people who will die
!!IF:V2/0;
!!IF&amp;y9=y11:V2/1; flag 2 indicates that the minimum and maximum damage are the same
!!IF:V3/0;
!!IF&amp;y9=y7:V3/1; flag 3 indicates that the entire stack will die anyway
!!VRz2:S^%Y3-%Y4^; damage in the format "minimum - maximum"
!!VRz2&amp;y3=y4:S^%Y3^; damage in "damage" format
!!VRz3:S^Damage:^;
!!if&amp;3:; if all stack dies
  !!VRz1:S^%Z3 %Z2. {~Yellow}FATALITY{~}^;
!!el:;
  !!VRz1:S^%Z3 %Z2. Kills: {~Yellow}%Y9-%Y11{~}^; spread damage
  !!VRz1&amp;2:S^%Z3 %Z2. Kills: {~Yellow}%Y9{~}^; damage without spread
!!en:;
!!MM:Mz1; set new hint</code></pre></div>
<hr>



<span class="erm-tone-red"><strong></strong></span>
</div>
</div>
</section>
:::

## Choosing an event {#use}

Declare named events with `!?FU(Name);`. Case and the complete name matter. Tables retain legacy codes and aliases and link to the relevant context. `FU:E` exits a handler but does not by itself cancel the default game action.

## Named classic events {#legacy}

| Event | Code | ID | Aliases |
| --- | --- | --- | --- |
| [OnBeforeBattle](./ba/) | `BA0` | 30300 |  |
| [OnAfterBattle](./ba/) | `BA1` | 30301 |  |
| [OnBattleRound](./br/) | `BR` | 30302 | `OnCombatRound` |
| [OnBeforeBattleAction](./bg/) | `BG0` | 30303 |  |
| [OnAfterBattleAction](./bg/) | `BG1` | 30304 |  |
| [OnWanderingMonsterReach](./mw/) | `MW0` | 30305 |  |
| [OnWanderingMonsterDeath](./mw/) | `MW1` | 30306 |  |
| [OnMagicBasicResistance](./mr/) | `MR0` | 30307 |  |
| [OnMagicCorrectedResistance](./mr/) | `MR1` | 30308 |  |
| [OnDwarfMagicResistance](./mr/) | `MR2` | 30309 |  |
| [OnAdventureMapRightMouseClick](./cm/) | `CM0` | 30310 |  |
| [OnTownMouseClick](./cm/) | `CM1` | 30311 |  |
| [OnHeroScreenMouseClick](./cm/) | `CM2` | 30312 |  |
| [OnHeroesMeetScreenMouseClick](./cm/) | `CM3` | 30313 |  |
| [OnBattleScreenMouseClick](./cm/) | `CM4` | 30314 |  |
| [OnAdventureMapLeftMouseClick](./cm/) | `CM5` | 30319 |  |
| [OnUnequipArt](./ae/) | `AE0` | 30315 |  |
| [OnEquipArt](./ae/) | `AE1` | 30316 |  |
| [OnBattleMouseHint](./mm/) | `MM0` | 30317 |  |
| [OnTownMouseHint](./mm/) | `MM1` | 30318 |  |
| [OnMp3MusicChange](./mp/) | `MP` | 30320 |  |
| [OnSoundPlay](./sn/) | `SN` | 30321 |  |
| [OnBeforeAdventureMagic](./mg/) | `MG0` | 30322 |  |
| [OnAfterAdventureMagic](./mg/) | `MG1` | 30323 |  |
| [OnEnterTownHall](./th/) | `TH0` | 30324 |  |
| [OnLeaveTownHall](./th/) | `TH1` | 30325 |  |
| [OnBeforeBattleBeforeDataSend](./ip/) | `IP0` | 30330 |  |
| [OnBeforeBattleAfterDataReceived](./ip/) | `IP1` | 30331 |  |
| [OnAfterBattleBeforeDataSend](./ip/) | `IP2` | 30332 |  |
| [OnAfterBattleAfterDataReceived](./ip/) | `IP3` | 30333 |  |
| [OnOpenCommanderWindow](./co/) | `CO0` | 30340 |  |
| [OnCloseCommanderWindow](./co/) | `CO1` | 30341 |  |
| [OnAfterCommanderBuy](./co/) | `CO2` | 30342 |  |
| [OnAfterCommanderResurrect](./co/) | `CO3` | 30343 |  |
| [OnBeforeBattleForThisPcDefender](./ba/) | `BA50` | 30350 |  |
| [OnAfterBattleForThisPcDefender](./ba/) | `BA51` | 30351 |  |
| [OnBeforeBattleUniversal](./ba/) | `BA52` | 30352 |  |
| [OnAfterBattleUniversal](./ba/) | `BA53` | 30353 |  |
| [OnAfterLoadGame](./gm/) | `GM0` | 30360 |  |
| [OnBeforeSaveGame](./gm/) | `GM1` | 30361 |  |
| [OnAfterErmInstructions](./pi/) | `PI` | 30370 |  |
| [OnCustomDialogEvent](./dl/) | `DL` | 30371 |  |
| [OnHeroMove](./hm/) | `HM` | 30400 |  |
| [OnHeroGainLevel](./hl/) | `HL` | 30600 |  |
| [OnSetupBattlefield](./bf/) | `BF` | 30800 |  |
| [OnMonsterPhysicalDamage](./mf/) | `MF1` | 30801 |  |
| [OnEverySecond](./tl/) | `TL0` | 30900 |  |
| [OnEvery2Seconds](./tl/) | `TL1` | 30901 |  |
| [OnEvery5Seconds](./tl/) | `TL2` | 30902 |  |
| [OnEvery10Seconds](./tl/) | `TL3` | 30903 |  |
| [OnEveryMinute](./tl/) | `TL4` | 30904 |  |

## Additional ERA events {#era}

| Event | Code | ID | Aliases |
| --- | --- | --- | --- |
| [OnSavegameWrite](./onsavegamewrite/) | `FU` | 77001 |  |
| [OnSavegameRead](./onsavegameread/) | `FU` | 77002 |  |
| [OnKeyPressed](./onkeypressed/) | `FU` | 77003 |  |
| [OnOpenHeroScreen](./onopenheroscreen/) | `FU` | 77004 |  |
| [OnCloseHeroScreen](./oncloseheroscreen/) | `FU` | 77005 |  |
| [OnBattleStackObtainsTurn](./onbattlestackobtainsturn/) | `FU` | 77006 |  |
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

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.24, +](../compatibility/#era3-v-3-9-24-l102) — Implemented detailed game, Era and plugins allocated memory tracking. Memory report is written to "log.txt" on crash or "OnGenerateDebugInfo" event (triggered by F11).
- [ERA 3.9.22, +](../compatibility/#era3-v-3-9-22-l138) — Improved CM:H to always return valid hero IDs from SwapManager even in non-click events (undefined if no hero meeting dialog is active).
- [ERA 3.9.15, +](../compatibility/#era3-v-3-9-15-l441) — Rewritten WoG "ApplyString" and "NewMesMan" functions, allowing any string in multiple ERM commands (CA, LE, GE, etc). Disabled syntax of setting event message to the one from event with given ID (ex, "GE:M30" for event …
- [ERA 3.9.15, +](../compatibility/#era3-v-3-9-15-l464) — Added new event "OnBeforeLoadGame" for plugins. It occurs right after old game leaving and before new game loading. TOnBeforeLoadGameEvent = packed record FileName: pchar; end;
- [ERA 3.9.15, +](../compatibility/#era3-v-3-9-15-l534) — Added the following constants to Era Erm Framework: CHAT_EVENT_TYPE_XXX for 'OnChat' event subtype CHAT_EVENT_RESULT_XXX for 'OnChat' event result
- [ERA 3.9.15, +](../compatibility/#era3-v-3-9-15-l539) — Added the following exported functions to era.dll: (* Compiles single ERM command without !! prefix and conditions and saves its compiled code in persisted memory storage. Returns non-nil opaque pointer on success and ni…
- [ERA 3.9.15, -](../compatibility/#era3-v-3-9-15-l598) — Fixed bug: "OnWinGame" and "OnLoseGame" events were not executed after "OnGameLeave", because ERM engine was disabled by that time. Now "OnWinGame" and "OnLoseGame" occur right before "OnGameLeave".
- [ERA 3.9.15, -](../compatibility/#era3-v-3-9-15-l610) — Fixed old event handling bug. Triggering ERM event with disabled ERM resulted in global event not being generated either. For example, Era and plugins could not handle 'OnSavegameRead' event if ERM was disabled at the mo…
- [ERA 3.9.14, +](../compatibility/#era3-v-3-9-14-l662) — Added support for "OnGameEnter" and "OnGameLeave" events in network games. Previously savegame transfer and loading on remote side used to trigger "OnAfterSavegameLoad", but not "OnGameLeave" + "OnGameEnter". That's why …
- [ERA 3.9.14, +](../compatibility/#era3-v-3-9-14-l673) — ERM execution is disabled after "OnGameLeave" event. MP3 and real time triggers are not executed outside of game main loop anymore. Previously triggers were executed in the context of game main menu.
- [ERA 3.9.14, *](../compatibility/#era3-v-3-9-14-l677) — Deprecated 'OnAbnormalGameLeave' event. HD mod way to return from combat screen to main game menu is not supported anymore.
- [ERA 3.9.12, +](../compatibility/#era3-v-3-9-12-l727) — Implemented advanced ERM memory synchronization means in network games. Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for further synchronization. Syntax: !!IP:M^var_name_1^/^var_name_2^/...; !!IP:M…
- [ERA 3.9.12, *](../compatibility/#era3-v-3-9-12-l769) — The order of network battle events: !?FU(OnBeforeBattle); on attacker side only, battle may be cancelled !?FU(OnBeforeBattleUniversal); on attacker side, battle may still be cancelled !?FU(OnBeforeBattleBeforeDataSend); …
- [ERA 3.9.12, +](../compatibility/#era3-v-3-9-12-l875) — Added the following exported functions to era.dll: // Allocates new function ID and binds it to specified name if name is free, otherwise returns already binded ID. // This function can be used to implement custom ERM ev…
- [ERA 3.9.12, +](../compatibility/#era3-v-3-9-12-l883) — Added new event for plugins/Lua: 'OnAfterReloadLanguageData'. It occurs whenever Era reloads all language json data from disk.
- [ERA 3.9.12, +](../compatibility/#era3-v-3-9-12-l885) — Rewritten creature regeneration ability support. (!) Plugins should not hook regeneration code and should use Era 'SetRegenerationAbility' API instead. Era introduces term "Standard regeneration ability", which value is …
- [ERA 3.9.11, *](../compatibility/#era3-v-3-9-11-l960) — Changed "OnBeforeBattleAction" event to trigger before Enchantress, Hell steed and creature experience mass spells processing.
- [ERA 3.9.11, *](../compatibility/#era3-v-3-9-11-l961) — Fixed v997 in "OnBeforeBattleAction" and "OnAfterBattleAction" events. It is equal to Era combat round counter now.
- [ERA 3.9.10, *](../compatibility/#era3-v-3-9-10-l966) — Introduced "OnAbnormalGameLeave" event to be called by plugins or HD mod in case of extreme game loop (0x4B0BA0) breaking using goto and manual stack cleaning. Improved compatibility with current HD mod versions: "OnGame…
- [ERA 3.9.6, -](../compatibility/#era3-v-3-9-6-l1073) — Fixed "SN:H" command and "OnAdvMapTileHint" event behavior. No hint is applied and no event is generated if tile is not visible by current player.
- [All related entries](../compatibility/#era3-changelog)
<!-- ERA3-GENERATED:END -->
