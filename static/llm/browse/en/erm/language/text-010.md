# ERM triggers and events

ID: erm.triggers
URL: /en/erm/triggers/
Part: 2/4
Source references: era-source:erm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt, old-help:cont-eventslist.htm, old-help:cont-logicevent.htm, old-help:cont-triggers.htm, old-help:cont-triggers-era.htm, old-help:cont-triggersol.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers 2 -->
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
	<strong>Hook in <span class="erm-tone-purple erm-legacy-event">4609014</span></strong> [after the regeneration phase; tests for morale, fear; and after selecting the active stack]<br>
	<strong class="erm-tone-purple erm-legacy-event">OnAfterBattleAction</strong> (<a href="bg/#ref-tr-bg">!?BG1</a>) - does not work for the very first action of the first unit in battle<br>
	selecting and performing an action</div></details></dd>
<dd><strong></strong><span class="erm-anchor" id="ref-cont-logicevent-10"></span><details class="erm-comment"><summary>Move/waiting/defence (<span class="erm-anchor" id="ref-cont-logicevent-show10"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	animation + sound of stack movement, if movement<br>
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
<dd><strong></strong><span class="erm-anchor" id="ref-cont-logicevent-12"></span><details class="erm-comment"><summary>AI stack action (without hero) (<span class="erm-anchor" id="ref-cont-logicevent-show12"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	<strong class="erm-tone-purple erm-legacy-event">OnStackToStackDamage x2/x3</strong> <strong class="erm-tone-text">+</strong> <strong class="erm-tone-purple erm-legacy-event">OnAICalcStackAttackEffect</strong> (triggers for every potential target, even if it is unreachable)<br>
	<strong class="erm-tone-purple erm-legacy-event">OnAICalcStackAttackEffect</strong><br>
	<strong class="erm-tone-purple erm-legacy-event">OnBeforeBattleAction</strong> (<a href="bg/#ref-tr-bg">!?BG0</a>)<br>
	performing the action as for a human stack<br>
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
	<td> AI calculation of attack efficiency by stack</td>
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

<!-- llm:end erm.triggers 2 -->

