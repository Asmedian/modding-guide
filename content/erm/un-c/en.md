---
{"title":"UN:C — memory access","summary":"Data widths, pointers, relocatable bases and historical recipes.","translationStatus":"reviewed"}
---

## Working with memory {#ref-cont-unc}

:::erm
<section class="erm-reference" lang="en">
<div>
<h3 class="erm-align-center">Working with memory: UN:C<br>
<span>(by D'yacon)</span></h3>
<h3>A little theory</h3>
<div class="erm-paragraph">
<strong><a href="../receivers/un/#ref-rec-un-c">!!UN:C</a></strong> – receiver, allowing both writing and reading data at a specific address.<br>
So, to work with this receiver you will need <u><strong><a href="http://www.artmoney.ru">ArtMoney</a></strong></u> and Heroes3.</div>
<div class="erm-paragraph">Addresses can be static or dynamic.<br>
<strong>Static addresses</strong> - these are the addresses of the EXE file, i.e. 00401000…006ACES0 and 
00701000…0293512N.<br>
<strong>Dynamic addresses</strong> – allocated by the program during loading.<br>
It is possible that dynamic addresses may coincide in different versions of heroes (TE and WoG), as well as on different computers, <strong>but it’s better to bind dynamic addresses to 
static - binding can be done through pointers</strong> (they are also dynamic and static).<br>
All this will be discussed below. For now you can just remember.</div>
<div class="erm-paragraph"><strong>What to look for and how?</strong><br>
There are a lot of examples on this topic in the ArtMani manual (so you need to start by reading this manual).<br>
<strong>Memo:</strong> The best process interruption is the command !!IF:M^^; (I’ll explain further... In general, using ERM makes the search much easier)</div>
<div class="erm-paragraph"><strong>Well, I'll give you a couple of practical examples.</strong><br>
Let's start with something simple.</div>
<h3>Task 1: find an address containing resource "gold".</h3>
<div class="erm-paragraph">This task is the simplest. Resource is displayed in a certain value, which means we will look for the “exact value”.<br>
Create a map for experiments where opponents will not interfere with you. (not required, but recommended). Launch the game. Launch your card 
(You must have at least town, or a gold mine - for gold to change value). Remember the value of the resource. Click <em class="erm-key">Alt</em>+<em class="erm-key">Tab</em>. Launch ArtMoney.</div>
<ol>
<li>Select process:<br>
<img src="../../../assets/erm/bccbe703ad560e91.png" alt="Select process:" loading="lazy" decoding="async" class="erm-figure" width="500" height="323"></li>

<li>Click on the search button. And select: "exact value", enter the amount of gold, and select "Integer (standard)" 
(We’ll return to the last and subsequent items in the search menu later).<br>
<img src="../../../assets/erm/caaa0eb350cf3f79.png" alt="Click on the search button. And select: &quot;exact value&quot;, enter the amount of gold, and select &quot;Integer (standard)&quot; (We’ll return to the last and subsequent items " loading="lazy" decoding="async" class="erm-figure" width="500" height="319"><br>
<img src="../../../assets/erm/fe8090e61b2e864c.png" alt="Click on the search button. And select: &quot;exact value&quot;, enter the amount of gold, and select &quot;Integer (standard)&quot; (We’ll return to the last and subsequent items " loading="lazy" decoding="async" class="erm-figure" width="500" height="321"><br>
<img src="../../../assets/erm/bcc20f38a6f0b226.png" alt="Click on the search button. And select: &quot;exact value&quot;, enter the amount of gold, and select &quot;Integer (standard)&quot; (We’ll return to the last and subsequent items " loading="lazy" decoding="async" class="erm-figure" width="500" height="321"></li>

<li>Click OK. All found addresses with the specified value will be displayed in the left field. In my case, with a gold value of 20,000, there are 542 addresses.<br>
<img src="../../../assets/erm/d023867b602dcfa4.png" alt="Click OK. All found addresses with the specified value will be displayed in the left field. In my case, with a gold value of 20,000, there are 542 addresses." loading="lazy" decoding="async" class="erm-figure" width="500" height="320"></li>

<li>Click <em class="erm-key">Alt</em>+<em class="erm-key">Tab</em>. We return to the game and skip the move. Gold increased (I have 20500).</li>

<li><em class="erm-key">Alt</em>+<em class="erm-key">Tab</em>. Click on the "Sift" button. And enter the new gold value into the field. 
Click OK. 1 address left. This is the address that contains the gold value. The value is an integer - 4 bytes. 
Those. when using UN:C we write or read 4 bytes. The received address is in the 16-digit number system, we convert it to 10-digit 
(can be done using a standard Windows calculator), to write in UN:C.<br>
<img src="../../../assets/erm/3827a9194e64466c.png" alt="Alt+Tab. Click on the &quot;Sift&quot; button. And enter the new gold value into the field. Click OK. 1 address left. This is the address that contains the gold value. Th" loading="lazy" decoding="async" class="erm-figure" width="500" height="321"><br>
<img src="../../../assets/erm/3c0e65d2ddc14c68.png" alt="Alt+Tab. Click on the &quot;Sift&quot; button. And enter the new gold value into the field. Click OK. 1 address left. This is the address that contains the gold value. Th" loading="lazy" decoding="async" class="erm-figure" width="500" height="320"><br>
<img src="../../../assets/erm/e0450d4570d8e5f6.png" alt="Alt+Tab. Click on the &quot;Sift&quot; button. And enter the new gold value into the field. Click OK. 1 address left. This is the address that contains the gold value. Th" loading="lazy" decoding="async" class="erm-figure" width="500" height="305">
</li></ol>
<div class="erm-paragraph"><strong>Conclusion: once you decide on the purpose of the search, try to ensure that only this parameter changes in the game.</strong></div>

<div class="erm-paragraph">Well, we're done with the first example.</div>
<h3>Task 2: find the address containing the cost of construction in the town.</h3>
<div class="erm-paragraph">The complexity of this task lies in the fact that the cost of construction is a constant.</div>
<ol>
<li>Let's launch Heroes. Let's launch ArtMoney. (In this example, let's take Conflux).</li>
<li>It is better to look for the price in gold, because... we get fewer addresses. A search on other resources will give more than 30,000 addresses, which is not very convenient.</li>
<li>So... Let's look at the cost of the first, let's say, home - 300 gold and 5 each of wood and ore. In the search, select: “exact value”, “300”, “Integer (standard)”. 
We perform a search. 376 addresses found.</li>
<li>Add all addresses to the right field. If there are more than a thousand addresses, then you need to change the value of the displayed addresses in the right field. 
This option is located in the “search” menu, in “settings” in the “advanced” tab. And restart ArtMoney.<br>
<img src="../../../assets/erm/84169267ffe828a9.png" alt="Add all addresses to the right field. If there are more than a thousand addresses, then you need to change the value of the displayed addresses in the right fie" loading="lazy" decoding="async" class="erm-figure" width="500" height="323"><br>
<img src="../../../assets/erm/0ec69dca776db498.png" alt="Add all addresses to the right field. If there are more than a thousand addresses, then you need to change the value of the displayed addresses in the right fie" loading="lazy" decoding="async" class="erm-figure" width="500" height="299"></li>
<li>Because In this case, there are no more than 376 addresses, then this option should not be set (in general, I recommend setting 8-10 thousand at once for convenience).</li>
<li>After adding addresses in the right field, select the following: “edit” - “select all”. 
Next, in the context menu of the selected addresses, select “set value” 1 in steps of 1. You can see how the values ​​in the addresses became. 
Next, we go into the game and look at the price of the home. The price in gold is 85. We find an address with a value of 85 - this will be our desired address 06AA4D8. 
In order to find the addresses of wood and ore, let's enter the address menu, double-click on the address and using scrolling down arrows (i.e., decreasing the address) we will look for the necessary values, i.e. 5 and 5. You can notice that the resources between them are at an offset of 4. 
Accordingly, the tree is at a mixture of 24 from gold 06AA4C0. You can easily verify this by subtracting the address of the tree from the address of gold and converting it to the 10-digit number system.<br>
<img src="../../../assets/erm/3194df87055ffab2.png" alt="After adding addresses in the right field, select the following: “edit” - “select all”. Next, in the context menu of the selected addresses, select “set value” " loading="lazy" decoding="async" class="erm-figure" width="500" height="318"><br>
<img src="../../../assets/erm/090154a8058fb512.png" alt="After adding addresses in the right field, select the following: “edit” - “select all”. Next, in the context menu of the selected addresses, select “set value” " loading="lazy" decoding="async" class="erm-figure" width="500" height="344"><br>
<img src="../../../assets/erm/a68081132df166f3.png" alt="After adding addresses in the right field, select the following: “edit” - “select all”. Next, in the context menu of the selected addresses, select “set value” " loading="lazy" decoding="async" class="erm-figure" width="500" height="317"><br>
<img src="../../../assets/erm/185d7b525227749c.png" alt="After adding addresses in the right field, select the following: “edit” - “select all”. Next, in the context menu of the selected addresses, select “set value” " loading="lazy" decoding="async" class="erm-figure" width="500" height="319"><br>
<img src="../../../assets/erm/c0d5b5949512c0a1.png" alt="After adding addresses in the right field, select the following: “edit” - “select all”. Next, in the context menu of the selected addresses, select “set value” " loading="lazy" decoding="async" class="erm-figure" width="500" height="373"><br>
<img src="../../../assets/erm/158e0d46c4c0c911.png" alt="After adding addresses in the right field, select the following: “edit” - “select all”. Next, in the context menu of the selected addresses, select “set value” " loading="lazy" decoding="async" class="erm-figure" width="500" height="232"><br>
<img src="../../../assets/erm/720f3515e44f4773.png" alt="After adding addresses in the right field, select the following: “edit” - “select all”. Next, in the context menu of the selected addresses, select “set value” " loading="lazy" decoding="async" class="erm-figure" width="500" height="340"></li>
</ol>
<div class="erm-paragraph"><strong>Conclusion: usually values that are similar in meaning are stored in a close range - a block 
memory or an array of values. To find deviations between values, in a given 
case between the value of the cost of housing, you need to find another value of the cost 
second home and find the difference between the addresses. You can be sure that 
the remaining housing values are at the same offset from each other.</strong></div>

</div>
</section>
:::

## Working with memory {#ref-cont-unc-lib}

:::erm
<section class="erm-reference" lang="en">
<div>


<span class="erm-anchor" id="ref-cont-unc-lib-text"></span><div>
<span class="erm-anchor" id="ref-cont-unc-lib-up"></span><h3 class="erm-align-center">Working with memory: UN:C/SN:E<a href="../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a></h3>

<div class="erm-paragraph">This material is dedicated to scripts and command sets using the command <a href="../receivers/un/#ref-rec-un-c">UN:C</a>, which make it possible to change things in the game that cannot be done through a “regular” ERM.
Solutions for implementing what is required using the command will also be shown here <a href="../receivers/sn/#ref-rec-sn-era-e">SN:E</a>.</div>

<span class="erm-anchor" id="ref-cont-unc-lib-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">Simple sets of UN:C commands can be converted into a bin patch using <a href="https://tools.hmm35.ru/unc-to-bin/index.html">online service</a>.</div>
<h3><span class="erm-anchor" id="ref-cont-unc-lib-main"></span>Introduction</h3>
<div class="erm-paragraph">The command UN:C#1/#2/$3 allows you to read/write a memory section starting from address #1, length #2 to/from variable $3. The first 2 parameters are the most important. Entering them incorrectly is almost always guaranteed to crash the game.<br>
Let's take a closer look at the parameters:<br>
<strong>#1</strong> is the address of a memory location. It can be either static or dynamic. Below in the article only static addresses will be indicated (these addresses are always the same when starting the game on any PC, be it yours or a friend’s). If you need to change something in the dynamic address (these are addresses that are always different on your PC and on your friend’s), then methods for accessing the latter through a static address will definitely be indicated. Otherwise, it is impossible to access a dynamic address on different computers.<br>
<strong>#2</strong> - this is the size of the third parameter or the number of bytes that we need to change. This can be 1, 2 or 4 bytes.<br>
<strong>$3</strong> - this is the parameter itself, which we intend to change in order to achieve some kind of “bun”. This parameter can have either a positive or negative value.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:C7783293/4/37; Commander Paladin (spell "Cure")</code></pre>
In the WoG game code at <em class="erm-tone-purple erm-legacy-event">76C37D</em> installed spell No. 25h for the Paladin commander. These addresses have a hexadecimal number system. 
The UN:C command only supports the decimal system. Converting these numbers to decimal is not difficult: 
turn on a regular Windows calculator, click "View→Programmer", check the "Hex" box, enter "76C37D", 
after that press "Dec". As a result, the result will be represented by the number 7783293. So we have learned how to convert a hexadecimal number to a decimal ;-)<br>
So:<br>
<strong>7783293</strong> – this is the address in which we change the value/parameter we are interested in;<br>
<strong>4</strong> – number of bytes to change;<br>
<strong>37</strong> – what exactly we need to change.<br>
Thus, <span class="erm-anchor" id="ref-cont-unc-lib-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!UN</span>:C7783293/4/48;</strong> will allow the Paladin to cast Prayer (48) on friendly creatures.</div>
<div class="erm-paragraph">Do not forget that almost all constant receivers UN:C specified in the article must be loaded in the event <a href="../triggers/#ref-era-new-events-2-15">OnGameEnter</a>.<br>
<u>For example</u>:
<pre class="erm-example"><code class="language-erm">!?FU(OnGameEnter);
!!UN:C7783293/4/48;</code></pre></div>

<h4><span class="erm-anchor" id="ref-cont-unc-lib-pers"></span>Working with percentages</h4>
<div class="erm-paragraph">If the game uses percentages, then you can’t just write 30%, you need to translate it into a language that the program can understand. This can be done in 3 ways (works with skills Sorcery, etc.):</div>
<ol>
<li>Calculate the percentages yourself using calculators:<br>
First we convert the percentage, for example 0.5 (50%) to <a href="https://babbage.cs.qc.cuny.edu/IEEE-754/index.xhtml">Binary32</a>, 
then the resulting hex value 3F000000 – into the 10-digit system (for example, <a href="../tables/bits/#ref-form-16to10" data-context="true">here</a>) 
and we use the result 1056964608 in ERM instead of y1.
<pre class="erm-example"><code class="language-erm">ZVSE
!?FU7700;
** magic 10\25\50
!!UN:C6548092/4/1036831949; 10
!!UN:C6548096/4/1048576000; 25
!!UN:C6548100/4/1061158912; 75
**end</code></pre></li>

<li>ERM calculates the percentages itself:
<pre class="erm-example"><code class="language-erm">!?FU7700;
!!VRe1:S30 :100; [set 30\100 = 30%]
!!SN:X?y1 Xe1 X?y2 Xy1; [conversion of values for writing to memory]
!!UN:C6548100/4/y2; [write to memory]</code></pre></li>

<li>There is a special convenient function for skills: !!FU7703
<pre class="erm-example"><code class="language-erm">ZVSE
!?FU7700;
** necromancy 10\15\20 was 10\20\30
!!FU7703:P12/1/10 P12/2/15 P12/3/20;
** magic 10\20\30 was 5\10\15
!!FU7703:P25/1/10 P25/2/20 P25/3/30;
** resistance 10\20\30 was 5\10\20
!!FU7703:P26/1/10 P26/2/20 P26/3/30;
**end</code></pre></li></ol>
<div class="erm-paragraph">Not all percentages can be changed using the method above. Parameters such as attack and defense bonuses use values ​​from the array. Accordingly, you need to know a certain array in order to replace the existing one with it.
<pre class="erm-example"><code class="language-erm">ZVSE
!?FU7700;
; 6535680 - 25%
; 6554608 – 75%
** cavalry bonus 25% instead of 5%
!!UN:C4468887/4/6535680;
!!UN:C4468961/4/6535680;
**end</code></pre></div>

<h3><span class="erm-anchor" id="ref-cont-unc-lib-base"></span>Ready solutions</h3>

<div class="erm-paragraph">When working with memory, very often there is a need to “have at hand” the following data:
<pre class="erm-example"><code class="language-erm">; Indicators of the main game managers
!!UN:C6918840/4/?y1;  Adventure Map Manager
!!UN:C6919200/4/?y1;  Battle Manager
!!UN:C6919480/4/?y1;  General Game Manager
!!UN:C6918864/4/?y1;  Game Window Manager
!!UN:C6919500/4/?y1;  Manager of All Towns</code></pre>

<pre class="erm-example"><code class="language-erm">; Getting the address of a z-variable
!?FU(VarZ_GetPtr);
; x1 - z-variable number
!!VRx2:Sx1 *512 +9597416;</code></pre>

<pre class="erm-example"><code class="language-erm">; Getting the address of a v-variable
!?FU(VarZ_GetPtr);
; x1 - v-variable number
!!VRx2:Sx1 *4 +8943204;</code></pre>

<pre class="erm-example"><code class="language-erm">; Read text from game text files
!?FU(TXT_GetString);
; x1 - text file number (see below)
; x2 - line number
!!UN&amp;x1=0:C6970820/4/?y1;    o_GENRLTXT_TXT
!!UN&amp;x1=1:C6908520/4/?y1;    o_ADVEVENT_TXT
!!UN&amp;x1=2:C6909120/4/?y1;    o_ARTEVENT_TXT
!!UN&amp;x1=3:C6976900/4/?y1;    o_PLCOLORS_TXT
!!UN&amp;x1=4:C6972152/4/?y1;    o_TCOMMAND_TXT
!!UN:Cy1/32/4/?y2;
!!VRx2:-1 *4;
!!UN:Cy2/x2/4/?y3;
!!SN:X?y4 Xy3 X?z1 Xy4;
!!IF:M^%Z1^;</code></pre>
But, as you understand, this is only a small part of what you may need in one way or another in the modding process. 
Below you will be presented with a fairly extensive database of scripts that you can use for yourself on different gaming platforms (WoG/TE/ERA)…</div>
<ul>
<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-game"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-9"></span><details class="erm-comment"><summary>All game options</summary><div class="erm-comment-body">
<div class="table-wrap erm-reference-table"><table><tr><td><pre class="erm-example"><code class="language-erm">!!UN:C6919184/4/$;
!!UN:C6916016/4/$;
!!UN:C6916020/4/$;
!!UN:C6916024/4/$;
!!UN:C6916028/4/$;
!!UN:C6916012/4/$;
!!UN:C6916008/4/$;
!!UN:C6916036/4/$;
!!UN:C6916040/4/$;
!!UN:C6916044/4/$;
!!UN:C6916048/4/$;
!!UN:C6916052/4/$;
!!UN:C6916056/4/$;
!!UN:C6916060/4/$;
!!UN:C6916064/4/$;
!!UN:C6919540/4/$;
!!UN:C6919544/4/$;
!!UN:C6919548/4/$;
!!UN:C6919552/4/$;
!!UN:C6916088/4/$;
!!UN:C6916152/line/$;
!!UN:C6916199/line/$;
!!UN:C6916032/4/$;
!!UN:C6916108/4/$;
!!UN:C6916112/4/$;
!!UN:C6916116/4/$;
!!UN:C6916120/4/$;
;
!!UN:C6916068/4/$;
!!UN:C6916072/4/$;
!!UN:C6916076/4/$;
!!UN:C6916080/4/$;
!!UN:C6916084/4/$;
!!UN:C6916156/4/$;
!!UN:C6916092/4/$;
!!UN:C6916096/4/$;
!!UN:C6916100/4/$;
!!UN:C6916104/4/$;
!!UN:C6915604/4/$;
!!UN:C6916232/4/$;</code></pre></td>
<td><pre class="erm-example"><code class="language-erm">	SHOW_INTRO_OPT
	MUSIC_VOLUME_OPT
	SOUND_VOLUME_OPT
	LAST_MUSIC_VOLUME_OPT
	LAST_SOUND_VOLUME_OPT
	WALK_SPEED_OPT
	COMP_WALK_SPEED_OPT
	SHOW_ROUTE_OPT
	MOVE_REMINDER_OPT
	QUICK_COMBAT_OPT
	VIDEO_SUBTITLES_OPT
	TOWN_OUTLINES_OPT
	ANIMATE_SPELLBOOK_OPT
	WINDOW_SCROLL_SPEED_OPT
	BLACKOUT_COMPUTER_OPT
	FIRST_TIME_OPT
	TEST_DECOMP_OPT
	TEST_READ_OPT
	TEST_BLIT_OPT
	BINK_VIDEO_OPT
	UNIQUE_SYSTEM_ID_OPT
	NETWORK_DEF_NAME_OPT
	AUTOSAVE_OPT
	SHOW_COMBAT_GRID_OPT
	SHOW_COMBAT_MOUSE_HEX_OPT
	COMBAT_SHADE_LEVEL_OPT
	COMBAT_ARMY_INFO_LEVEL_OPT: squad information 
	(0 - none, 1 - all statistics, 2 - only spells)
	COMBAT_AUTO_CREATURES_OPT
	COMBAT_AUTO_SPELLS_OPT
	COMBAT_CATAPULT_OPT
	COMBAT_BALLISTA_OPT
	COMBAT_FIRST_AID_TENT_OPT
	COMBAT_SPEED_OPT
	MAIN_GAME_SHOW_MENU_OPT
	MAIN_GAME_X_OPT
	MAIN_GAME_Y_OPT
	MAIN_GAME_FULL_SCREEN_OPT
	APP_PATH_OPT
	CD_DRIVE_OPT</code></pre></td></tr></table></div>
</div></details></li>
<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-hd"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-1"></span><details class="erm-comment"><summary>Working with HD mod</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; get game permission
!!UN:C4199496/2/?y1; width
!!UN:C4199503/2/?y2; height</code></pre>
<pre class="erm-example"><code class="language-erm">; find out if the HD mod is enabled at all
!!SN:L^HD_WOG.dll^/?y1; 0 means NOT enabled</code></pre>

<pre class="erm-example"><code class="language-erm">** opening hero windows in RMB battles on hero def
!?CM4;
!!CM:A?y1/?y2 F?y3; [click coordinates]
!!UN:C4199496/2/?y11 C4199503/2/?y12; [get game resolution by X and Y]
!!VRy13:Sy11 -800 *-1 :2 +58; [get attacker's correct X coordinates]
!!VRy14:Sy11 -800 *-1 :2 +739; [get the correct defender X coordinates]
!!VRy15:Sy12 -600 *-1 :2 +127; [get the correct Y coordinates for both]
!!FU&amp;y3&lt;&gt;512|y2&gt;y15:E; [exit if not RMB or click in the wrong place]
!!BA:H0/?y4 H1/?y5; [get hero numbers]
!!SN&amp;y1&lt;y13:E5118576/1/y4/1; [open attacking hero window]
!!SN&amp;y1&gt;y14/y5&gt;-1:E5118576/1/y5/1; [open defending hero window]
!!CM&amp;y1&gt;y14/y5&gt;-1|y1&lt;y13:R0; [cancel standard action]
** end</code></pre>

<pre class="erm-example"><code class="language-erm">** Quick tactical setup
!?CM4;
!!SN:L^HD_WOG.dll^/?y1 L^HD_MCR.dll^/?y2; [check on HD mod]
!!BU:T?y3; [check for tactical phase]
!!FU|y1&lt;&gt;0/y2&lt;&gt;0/y3&lt;&gt;1:E; [exit if not satisfied]
!!CM:F?y2 I?y3 D?y4; [get click flags]
!!FU|y3&gt;10/y2&lt;&gt;0/y4&lt;0/y4&gt;186:E; [exit if not satisfied]
!!BU:Ey4/?y5; [is the stack where you clicked] alive?
!!FU&amp;y5=-1:E; [exit if not alive]
!!BG:N?y6 Q?y7; [current stack and active side]
!!BMy5:I?y8 T?y9; [number of creatures in stacks and which side]
!!FU&amp;y9&gt;144/y9&lt;150:E; [exit if combat vehicle]
!!FU&amp;y7&lt;&gt;y8|y6=y5:E; [exit if stack is already active or foreign party]
!!VRy5&amp;y7=1:-21; [go to stack number for defending side]
!!CM:R0; [cancel standard action]
!!UN:C6919200/4/?y1; [get combat manager]
!!SN:E4607760/2/y1/y8/y5; [function: pass move to stack]
**end</code></pre>

<pre class="erm-example"><code class="language-erm">; display text (hint)
; in the status bar of Adventure Maps
!?FU(AdvMap_SetHintString);
; x1 - z var number
!!UN:C6918840/4/?y1;
!!VRy2:Sy1 +68;
!!UN:Cy2/4/?y2;
!!VRy3:Sx1 *512 +9597416;
!!SN:E7408539/1/6911016/512/y3;
!!SN:E6288384/2/y2/512/3/200/6911016;
!!SN:E6288864/2/y2/0/200/200;
!!UN:C4199503/2/?y4;
!!UN:C4199496/2/?y5;
!!VRy4:-44; !!VRy5: :2 +382;
!!UN:C6918864/4/?y6;
!!SN:E6304144/2/y6/8/y4/y5/14;</code></pre>
</div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-dial"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-2"></span><details class="erm-comment"><summary>Dialogues, interface</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; language definition (English or Russian)
!!UN:C8401436/4/?y1; [language type: 0-English, 1-Russian]</code></pre>
<pre class="erm-example"><code class="language-erm">; Disable dialog shadow © Master of Puppets
; before initializing the dialog - remove the shadow
!!UN:C7505216/1/2;
; after closing the dialog - return the shadow parameter to its place
!!UN:C7505216/1/18;</code></pre>
<pre class="erm-example"><code class="language-erm">; CHANGING DEF FRAME
!!UN:C6918864/4/?y1; !!VRy1:+84; !!UN:Cy1/4/?y2; [y2 - address of the current dialog (many, but not all)] (_Dlg_*)
!!UN:C6918840/4/?y1; !!VRy1:+68; !!UN:Cy1/4/?y2; [y2 - address of the Adventure Crates dialogue] (_DlgAdvMap_*)
!!SN:E6288816/2/[dialogue_address]/[element_id]; !!VRy3:Sv1; [get item structure by id] item = (_Dlg_*)-&gt;GetItem(id)
; [element_id] - see Help "CM:I"
!!VRy4:Sy3 +52; !!UN:Cy4/4/[def_frame_number]; [change def frame] item-&gt;def_frame_index
!!VRy4:Sy3 +56; !!UN:Cy4/4/[def_frame_number]; [for button: change press frame] item-&gt;press_def_frame_index
; FUNCTIONS:
!!SN:E6286720/2/y3/[type]/[subtype];
; type 5, subtype 6 (show element)
; type 6, subtype 6 (hide element)
; type 6, subtype 4 (hide, but allow workers to click on it)</code></pre>
<pre class="erm-example"><code class="language-erm">; This is how buttons are blocked (for example, the button to fire a hero)
!!SN:E6287104/2/y3/[0 or 1]; 0-off, 1-on
; after that you need to refresh the dialog
; because UN:R is not available for all dialogues
!!SN:E6288864/2/y2/1/-65535/65535;</code></pre>
<span class="erm-anchor" id="ref-cont-unc-lib-10"></span><details class="erm-comment"><summary><strong>More details on dialogues</strong> (<span class="erm-anchor" id="ref-cont-unc-lib-show10"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
<pre class="erm-tone-quote erm-legacy-code erm-note">; parameters of any dialog element
; text, pictures, buttons, etc.

+16 (2 bytes) element id; by daemon_n
+18 (2 bytes) if I understand correctly, this is the indirect id of the element in this dialog; by daemon_n
+20 (2 bytes) flags;
+22 (2 bytes) status;
+24 (2 bytes) x;
+26 (2 bytes) y;
+28 (2 bytes) width;
+30 (2 bytes) height;
+32 (4 bytes) pointer to text in the status_bar; 
+36 (4 bytes) pointer to RMB text; 

; only for defs and buttons
+48 (4 bytes) pointer to defa structure;
+52 (4 bytes) def frame number;
+56 (4 bytes) def frame number when pressed (if a button);
+60 (4 bytes) mirror: 0-no, 1-yes; <span class="erm-anchor" id="ref-cont-unc-lib-n1"></span><strong class="erm-tone-purple erm-strong">daemon_n</strong> thinks that this is the def frame number when the button is disabled (if the button is);
+68 (2 bytes) whether to close the dialog: 0-no, 1-yes;</pre></div></details>
<br><br>
<pre class="erm-example"><code class="language-erm">; Window for hiring creatures/combat vehicles by a hero
...
!!OW:A-1/?y1;
!!FU8980040:Py1/132/10/133/11/134/12/135/13/1; // hire all neutral dragons in the amount of 10...13 pcs.
!!FU8980040:Py1/145/1/146/1/147/1/148/1/2; // hire all combat vehicles
!?FU8980040;
; x1 - specify the hero number
; x2/x3 - number of the 1st creature/quantity (required)
; x4/x5 - number of the 2nd creature/quantity (or -1/0)
; x6/x7 - number of the 3rd creature/quantity (or -1/0)
; x8/x9 - number of the 4th creature/quantity (or -1/0)
; x10 - for creatures (1), for combat vehicles (2)
!!OW:A-1/?y1;
!!FU&amp;y1&lt;0:E;
!!SN:E6386834/1/188; !!VRy17:Sv1;
!!SN:E7411341/1/x1; !!VRy1:Sv1; !!VRy1&amp;x10=1:+145;
!!VRy10:S10*4 +8943204; // variable address v10...v13
!!VRy20:Sy10; !!VRy21:Sy10 +4; !!VRy22:Sy10 +8; !!VRy23:Sy10 +12;
!!VRv10:Sx3; !!VRv11:Sx5; !!VRv12:Sx7; !!VRv13:Sx9;
!!SN&amp;x10=1:E5576528/2/y17/y1/0/x2/y20/x4/y21/x6/y22/x8/y23;
!!SN&amp;x10=2:E5576800/2/y17/y1/x2/y20/x4/y21/x6/y22/x8/y23;
!!VRy11:Sv1;
!!UN:C6919504/4/?y1;
!!SN:E4917104/2/y1/y11;</code></pre>
<pre class="erm-example"><code class="language-erm">; Fix a bug that occurs when opening the hero window in the dialog for joining creatures
; © RoseKavalier
!?FU(OnGameEnter);
!!SN:L^EraPlugins\erm_hooker.era^/?y1;
!!FU&amp;y1=0:E; !!SN:Ay1/^SetHook^/?y2;
!!SN:Ey2/1/6116047/(AfterShowHeroInfoDlg);
!?FU(AfterShowHeroInfoDlg);
!!UN:C6918840/4/?y1;
!!SN:E4289856/2/y1/0/0/0;</code></pre>
<pre class="erm-example"><code class="language-erm">; Correcting incorrect buttons:
; in the tavern dialogue
!!UN:C6126282/4/6826532; iCN6432.def
; in the squad division dialogue
!!UN:C4495937/4/6826532; iCN6432.def"
; remove the Cancel button in the arena
!!UN:C4842706/4/7;
; no check for "in Underground" (Z=1)
; this is to Inferno to Underground and
; Dungeon on the surface had native land bonuses
!!UN:C4603972/1/235;

P.S. this is the SOD section (which means this problem exists on all versions of HoMM3)</code></pre>
<pre class="erm-example"><code class="language-erm">; Activating the "Next hero" button disabled in TE
!#UN:C4234473/4/1987433092 C4234477/1/139;
!#UN:C4234473/4/1987433092 C4234477/1/139;</code></pre>
</div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-hero"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-3"></span><details class="erm-comment"><summary>Heroes</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; move the hero on the adventure map
!?FU(HeroMoveOnMap);
; x1/x2/x3 - x/y/z (target coordinates)
; x4 - hero number
; ***********************************
; check if this hero is active
!!OW:A-1/?y1; !!FU|x4&lt;&gt;y1/y1=-1:E;
; actions with the Adventure Map manager
!!UN:C6918840/4/?y1;
!!VRy2:Sy1 +64;
!!UN:Cy2/4/7;
; pack the target coordinates (x/y/z) into v2
!!UN:C8943213/1/0 C8943212/1/x1;
!!UN:C8943214/1/x2 C8943215/1/x3;
!!VRy2:S8943212; address v2 put in y2
; set the target for the hero
!!SN:E7411341/1/x4; !!VRy3:Sv1;
!!VRy4:Sy3 +53; !!UN:Cy4/4/x1;
!!VRy5:Sy3 +57; !!UN:Cy5/4/x2;
!!VRy6:Sy3 +61; !!UN:Cy6/4/x3;
; start the hero's movement towards the goal
!!SN:E4225760/2/y1/y2;
**end</code></pre>

<pre class="erm-example"><code class="language-erm">; lock/unlock hero slots
; © gamecreator
!?FU[Hero_SetLockedSlots];
; x1 - hero number [0...155]
; x2 - slot number [0...13]
; x3 - set town [1], remove town [0] (for pos. 6, 8, see below)
!!UN:C6919480/4/?y1;
!!VRy2:Sx1 *1170 +136736 +y1 +454 +x2;
!!UN:Cy2/1/x3;</code></pre>
<span class="erm-anchor" id="ref-cont-unc-lib-11"></span><details class="erm-comment"><summary><strong>Slot numbering</strong> (<span class="erm-anchor" id="ref-cont-unc-lib-show11"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
<pre class="erm-tone-quote erm-legacy-code erm-note">0 - Head
1 - Shoulders
2 - Neck
3 - Right hand
4 - Left hand
5 - Torso
6 - Left ring / Right ring [locks = 0…2]
7 - Legs
8 - Miscellaneous 5…1 [locks = 0…5]
9 - Ballista (specialty X1)
10 - Ammo cart
11 - First aid tent
12 - Catapult (specialty X1) (figurines, I’m always with you)
13 - Book of Spells</pre></div></details><br><br>

<pre class="erm-example"><code class="language-erm">; Hiring Heroes
!!UN:C6783308/4/2500; [hero cost]
; 3 - the maximum number of heroes on the adventure map for one player.
!!UN:C6127106/1/3; [tavern hiring]
!!UN:C6129162/1/3; [tavern hiring]
!!UN:C4864993/1/3; [visiting prison]
!!UN:C6116975/1/3; [exit from the town]
!!UN:C4395921/1/3; [for AI]
!!UN:C5417105/1/3; [for AI]</code></pre>
</div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-comm"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-12"></span><details class="erm-comment"><summary>Commanders</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; ** address of the commander’s structure by hero number
!!VRy1:S[hero number] *296 +42344640 +[parameter];</code></pre>
For the commander's structure, see <a href="commander-structure/#ref-form-commstr" data-context="true">in the table</a>.
<div class="erm-paragraph">
<pre class="erm-example"><code class="language-erm">; commander spells
; can only be changed outside of battle or before it.
!!UN:C7783293/1/37; [0: Paladin]
!!UN:C7783311/1/27; [1: Witch Doctor]
!!UN:C7783329/1/44; [2: Templar]
!!UN:C7783347/1/29; [3: Succubus]
!!UN:C7783365/1/39; [4: Soul Eater]
!!UN:C7783383/1/43; [5: Beast]
!!UN:C7783401/1/46; [6: Ogre Chief]
!!UN:C7783539/1/53; [7: Shaman]
!!UN:C7783554/1/58; [8: Astral Spirit]</code></pre>
<pre class="erm-example"><code class="language-erm">; special abilities of commanders
!!UN:C7771781/1/0; [0: Paladin - Experience]
!!UN:C7780460/1/1; [1: Witch Doctor - Tents]
!!UN:C7788148/4/176; [2: Templar - Mana Recovery]
!!UN:C7788157/4/185; [2: Templar - Mana Recovery]
!!UN:C7785366/1/3; [3: Succubus_0 - Charm]
!!UN:C7785796/1/3; [3: Succubus_1 - Charm]
!!UN:C7772656/1/5; [5: Beast - Gold]
!!UN:C7780690/1/6; [6: Leader of the Ogres - Ballista (specialty X1) (set quantity)]
!!UN:C7789904/1/6; [6: Ogre Chief - Ballista (specialty X1) (control)]
!!UN:C7775876/1/7; [7: Shaman - Attack and Defense Bonus (Commander Window)]
!!UN:C7783598/4/7783530; [7: Shaman - Bonus attack and defense (in battle). Cannot be replaced by another commander]
!!UN:C7786301/1/8; [8: Astral Spirit_0 - Pacifist]
!!UN:C7786959/1/8; [8: Astral Spirit_1 - Pacifist]</code></pre>
<pre class="erm-example"><code class="language-erm">; disable commander abilities
!!UN:C7710229/2/8427; [3: Succubus - Charm]
!!UN:C7710502/2/8683; [8: Astral Spirit - Pacifism]
!!UN:C7772712/2/37008; [5: Beast - Gold Bonus]
!!UN:C7788411/1/233; [2: Templar - Mana Recovery © Raistlin]
!!UN:C7788412/4/174;
!!UN:C7788416/1/144;</code></pre>
<pre class="erm-example"><code class="language-erm">; remove the fire shield from commanders
!!UN:C7788091/1/235;</code></pre>
</div></div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-town"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-4"></span><details class="erm-comment"><summary>Towns</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; replacing the Arrow Tower creature
!!UN:C4614248/4/?y1; [get table base address]
!!VRy2:S[city_type] *32 +y1; [get creature number address]
!!UN:Cy2/4/[monster_number]; [who has a shot def]</code></pre>

<pre class="erm-example"><code class="language-erm">; View radius of the tower in the Tower
!!UN:C5005692/1/20;
!!UN:C5011919/1/20;
!!UN:C6026482/1/20;
; Radius of action of the veil of darkness among necrs
!!UN:C5011669/1/20;
!!UN:C4854195/1/20;</code></pre>
<pre class="erm-example"><code class="language-erm">; Skeleton Converter
!!VRy1:S$creature$ *4; creature=[0..196]
!!VRy2:S8142080+y1;
!!UN:Cy2/4/[to_who_is_converted];
; 56 - skeleton
; 66 - black knight
; 68 - bone dragon</code></pre>
<pre class="erm-example"><code class="language-erm">!#UN:C4626915/1/7; Town, in which the moat consists of two cells</code></pre>
<h4>Buildings and their prices</h4>
<pre class="erm-example"><code class="language-erm">; increasing the number of creatures in hordes
!?FU(SetTownHordeMonsters);
; x1 - town number [0..8]
; x2 - horde number: [0..1]
; x3 - number of creatures
!!UN:C6035054/4/?y1;
!!VRy2:S16*x2;
!!VRy3:S32*x1;
!!VRy1:+y2 +y3 +4;
!!UN:Cy1/2/x3;
!!VRy1:+8;
!!UN:Cy1/2/x3;</code></pre>
<pre class="erm-example"><code class="language-erm">; get the cost of the building
; v10 - wood, v11 - mercury... v16 - gold
!?FU(Town_GetBuildingCost);
; x1 - town number on map (0...47)
; x2 - building id
; x3 - return v10-v16: ptr array: int cost[6]
!!FU(Town_GetStruct):Px1/?y1;
!!SN:E6034672/2/y1/x2/8943244;
**********************************
; Is there enough money for construction (active player only!)
!?FU(Town_CanBuildingCost);
; x1 - town number on map (0...47)
; x2 - building id
; x3 - return: bool (0-no, 1-yes)
!!FU(Town_GetStruct):Px1/?y1;
!!SN:E4590864/3/y1/x2;
!!VRx3:Sv1;
**********************************
; Is it actually allowed to build this building in the town?
!?FU(Town_CanBuildingBuilt);
; x1 - town number on map (0...47)
; x2 - building id
; x3 - return: bool (0-no, 1-yes)
!!FU(Town_GetStruct):Px1/?y1;
!!CA0/x1:R?y2 R0;
!!SN:E6033696/2/y1/x2;
!!VRx3:S0;
!!VRx3&amp;v1&lt;&gt;0:S1;
!!CA0/x1:Ry2;
**********************************
; Is the building built in the town?
!?FU(Town_IsBuildingBuilt);
; x1 - town number on map (0...47)
; x2 - building id
; x3 - return: bool (0-no, 1-yes)
!!FU(Town_GetStruct):Px1/?y1;
!!SN:E4392352/2/y1/x2/1;
!!VRx3:Sv1;
**********************************
; show how a building is built
; only inside the town screen
!?FU(Town_ConstractBuild_Show);
; x1 - town number on map (0...47)
; x2 - building id
!!UN:C6919500/4/?y1;
!!VRy2:Sy1 +440;
!!UN:Cy2/4/x2;
!!SN:E6123136/2/y1/x2;
**********************************
; getting the town structure
!?FU(Town_GetStruct);
; x1 - town number on map (0...47)
; x2 - return: ptr structure town
!!IF&amp;x1&lt;0|x1&gt;47:M^Wrong town id.^;
!!UN:C6919480/4/?y1;
!!VRy1:+136724;
!!UN:Cy1/4/?y2;
!!VRx2:Sx1 *360 +y2;
!!IF&amp;x2&lt;43200000:M^{Attention!}
Error in getting town structure address.
The game may fall at any time.^;</code></pre>
<h4>Special buildings in towns</h4>
<pre class="erm-example"><code class="language-erm">; If you change the following values, be sure to change them in BldgSpec.txt
; Setting the attack value in the Temple of Valhalla
!#UN:C6021441/1/4; Replacing increment with addition
!#UN:C6021442/1/1; Attack Bonus from Temple of Valhalla
; Setting the defense value in the Cage of the War Gods
!#UN:C6021666/1/4; Replacing increment with addition
!#UN:C6021667/1/1; Defense Bonus from Cage of the War Gods
; Town, which operates Temple Valhalla
!#UN:C6021227/1/6;
; Town, in which the Cage of the War Gods works
!#UN:C6021452/1/7;
; Town, in which the Order of Fire works
!#UN:C6020842/1/3;
; Town, in which the Knowledge Wall works
!#UN:C6020661/1/2;
; Skills given by specialists. buildings
; 118 - attack
; 119 - protection
; 120 - strength
; 121 - knowledge
!#UN:C6021437/1/118; Temple Valhalla
!#UN:C6021445/1/118;
!#UN:C6021662/1/119; Cage of the War Gods
!#UN:C6021670/1/119;
!#UN:C6020951/1/120; Order of Fire
!#UN:C6020943/1/120;
!#UN:C6020770/1/121; Wall of Knowledge
!#UN:C6020762/1/121;
; Bonus Strength from Sulfur Clouds
!#UN:C4602236/1/2;
; Bonus Strength from the Dungeon Grail
!#UN:C4602282/1/12;
; Morale Bonus from Castle Grail
!#UN:C5127772/1/2;
!#UN:C5098405/1/2;
; Morale bonus from the Brotherhood of the Sword
!#UN:C4500863/1/2;
; Luck bonus from the Stronghold Grail
!#UN:C5127107/1/2;
!#UN:C5100434/1/2;
; Bonus mana points from Grail Tower
!#UN:C4602189/2/150;
; Bonus Attack and Defense from the Grail of the Fortress
!#UN:C4602467/1/10;
; Disable artifact traders
!#UN:C6111473/2/37008; Tower
!#UN:C6111478/2/37008; Dungeon
!#UN:C6111483/2/37008; Conflux
; University Magic in Conjugation:
!#UN:C6110754/1/2; The number of the town in which he works is 6+[value] (in the original 2, so 8)
!#UN:C6110754/1/1; If you set 1, University will move to Fortress and will work when you click on Signs of Fear
!#UN:C6110754/1/-1;If you set -1, University will move to the Dungeon and will work when you click on Mana Vortex
!#UN:C6110754/1/5; To disable University, you can set a non-existent town index (6+5=11). The hint will remain
; By the way, the skills that are given there can also be edited - see the addresses here: https://forum.df2.ru/index.php?s=&amp;showtopic=6803&amp;view=findpost&amp;p=429783
; An alternative way to disable University Magic. In the first case, the check for Conflux is removed, now - the subsequent action
!#UN:C6110755/2/37008;
!#UN:C6110757/4/2425393296;
; Disable University Magic for AI
!#UN:C5398076/1/144;
!#UN:C5398077/4/2425393296;
; Disable Skeleton Converter
!#UN:C6111184/1/144;
!#UN:C6111185/4/2425393296;
; Disable Mercenary Guild
!#UN:C6110986/1/144;
!#UN:C6110987/4/2425393296;
; Disable Yard Ballist
!#UN:C6111157/1/144;
!#UN:C6111158/4/2425393296;
; Disable Castle Gate
!#UN:C6111142/1/144;
!#UN:C6111143/4/2425393296;
; Disable opening of the Tavern when clicking on the Brotherhood of the Sword
!#UN:C6111068/1/144;
!#UN:C6111069/4/2425393296;
; Shutdown of the Stables
!#UN:C6020509/2/37008;
; Disable Beacon
!#UN:C5131612/1/235;</code></pre>
<pre class="erm-example"><code class="language-erm">; Disabling the functions of special buildings of the Fortress
!?PI;
!!UN:C6021452/1/99; Cage of the War Gods (instead of the seventh town, we check the ninety-ninth)
!!UN:C4602370/1/0; Resetting the attack bonus from the Obelisk of Blood
!!UN:C4602421/1/0; Resetting the protection bonus from Signs of Fear
; Disabling the functions of special buildings Dungeons
!?PI;
!!UN:C6130651/1/18; Disabling the Call Portal
!!UN:C6130708/1/52;
!!UN:C5016380/1/86;
!!UN:C5362353/1/120;
!!UN:C6055202/1/144;
!!UN:C6020334/1/255; Disabling Mana Whirlpool
!!UN:C6021023/1/255; Shutdown of the Martial Arts Academy
!!UN:C6111477/1/6; Disabling Artifact Merchants (it will not be possible to disable Conflux)</code></pre>
<h4>Working with the town screen</h4>
<pre class="erm-example"><code class="language-erm">!!SN:E6103344/3/[visitor hero number]/[town type]; // open the forge.
** opening windows of special buildings in towns
!!UN:C6919500/4/?y1; // o_TownMgr
; general:
!!SN:E6106032/2/y1; // entrance to the Town Hall (window of building structures) © MoP
; 3 (inferno)
!!SN:E6129792/2/y1; // Castle Gate
; 4 (necropolis)
!!SN:E6108048/2/y1; // SkeletonTransformer
; 5 (dungeon)
!!SN:E6106448/2/y1; // Creature Summoning Portal Window
; 6 (citadel)
!!SN:E6202016/2/y1; // Mercenary Guild
; 8 (Conflux)
!!SN:E6107552/2/y1; // University magic
; 2, 5, 8 (Tower, Dungeon, Conflux)
!!SN:E6201632/2/y1; // Artifact traders</code></pre>

<pre class="erm-example"><code class="language-erm">!!UN:C6919500/4/?y1; // o_TownMgr
!!SN:E6117680/2/y1; // update town screen (yellow outline, buttons)
!!SN:E6117392/2/y1; // update the town (buildings) screen</code></pre>

<strong><u>Comment</u>:</strong> When replacing an animation, you must also write a new number of frames into memory.
<pre class="erm-example"><code class="language-erm">[Setting the number of frames in animation]
!?FU(SetFrames);
; x1 - town type
; x2 - building number
; x3 - number of frames in animation
!!VRy1:Sx1 *44 +x2 *6;
!!VRy2:S6859276 +y1;
!!UN:Cy2/2/x3;

[Getting the number of frames in an animation]
!?FU(GetFrames);
; x1 - town type
; x2 - building number
; x3 - v-variable number
!!VRy1:Sx1 *44 +x2 *6;
!!VRy2:S6859276 +y1;
!!UN:Cy2/2/?vx3;</code></pre>

<pre class="erm-example"><code class="language-erm">Moving buildings:
[Setting building coordinates]
!?FU(SetBuilding'sPosition);
; x1 - town type
; x2 - building number
; x3 - x coordinate
; x4 - y coordinate
!!VRy1:Sx1 *44 +x2 *6;
!!VRy2:S6859276 +2 +y1;
!!UN:Cy2/2/x3;
!!VRy2:+2;
!!UN:Cy2/2/x4;

[Getting building coordinates]
!?FU(GetBuilding'sPosition);
; x1 - town type
; x2 - building number
; x3 - number of the v-variable to store the value x
; x4 - number of the v-variable to store the value of y
!!VRy1:Sx1 *44 +x2 *6;
!!VRy2:S6859276 +2 +y1;
!!UN:Cy2/2/?vx3;
!!VRy2:+2;
!!UN:Cy2/2/?vx4;</code></pre>

<pre class="erm-example"><code class="language-erm">Display priority:
[Building priority setting]
!?FU(SetBuilding'sPriority);
; x1 - town type
; x2 - priority(0-43)
; x3 - building number
!!VRy1:Sx1 *44 +x2;
!!VRy2:S6565572 +y1;
!!UN:Cy2/1/x3;
[Getting town building priorities]
!?FU(GetPriorities);
; x1 - town type
!!VRv1:Sx1 *44;
!!DO(ShowRes)/0/43/1:P;
!?FU(ShowRes);
!!VRy1:Sv1 +x16;
!!VRy2:S6565572 +y1;
!!UN:Cy2/1/?y3;</code></pre>
</div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-batl"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-5"></span><details class="erm-comment"><summary>Battle</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; Remove a stack from the battlefield without a trace
; x1 - number of the stack that needs to be destroyed
!!UN:C6919200/4/?y1; [Battle Manager]
!!VRy2:Sx1 *1352 +21708 +y1; [stack structure]
!!VRy3:Sy2 +234; !!UN:Cy3/1/1; [indicate that the stack is dead]
!!BMx1:F?y4; [get stack flags]
!!VRy4:|268435456; [put the “sacrificed” flag]
!!BMx1:N0 Fy4; [quantity: 0, and set flags to the stack]
!!SN:E4621680/2/y1/51/1; [function "remove body" if dead]
!!SN:E4797616/2/y1/0/1; [update battlefield grid]</code></pre>
<pre class="erm-example"><code class="language-erm">;** Ballista (specialty X1) shoots in front of the towers.
!!UN:C4606831/1/145;
!!UN:C4606842/1/145;
!!UN:C4606861/1/149;
!!UN:C4606872/1/149;</code></pre>
<h4>Various constant values</h4>
<pre class="erm-example"><code class="language-erm">; disabling the tactics message at the beginning of the battle
; 0x462D98 JMP SHORT 0x462DCA
!#UN:C4599192/2/12523;
!#UN:C4599194/4/2425393296;</code></pre>
<pre class="erm-example"><code class="language-erm">; Elemental Summoning Spells
!!UN:C5906498/1/&lt;new creature ID&gt; - summoning fire el. sp.
!!UN:C5906519/1/&lt;new creature ID&gt; - summoning earth el. sp.
!!UN:C5906540/1/&lt;new creature ID&gt; - summoning water el. sp.
!!UN:C5906561/1/&lt;new creature ID&gt; - summoning air el. sp.
; allowed creature ID in the range 0..127</code></pre>
<pre class="erm-example"><code class="language-erm">** Shackles of War (in battle with neutrals you can run away from the battlefield)
!?BG0; [before action in battle]
!!BG:A?y1; [find out the type of action]
!!BA:H1/?y2; [find out the defender hero]
!!UN&amp;y1=4/y2=-2:C4689325/1/2; [replace with the grail (and it’s in the backpack)]
!?BA53; [after the battle]
!!UN:C4689325/1/125; [return art number]</code></pre>
<pre class="erm-example"><code class="language-erm">; ** shooting
!!UN:C4617008/1/10; - distance between straight/broken arrow for shooters (original=10)
!!UN:C4617188/1/10; - when calculating a penalty on the 2nd square of a two-cell
!!UN:C4617219/1/10; - when calculating a penalty on the 2nd square of a two-cell</code></pre>
<pre class="erm-example"><code class="language-erm">; ** disable the appearance of the gridded stack in the battle against neutrals
!!UN:C4899920/1/8; (original =1)</code></pre>
<pre class="erm-example"><code class="language-erm">; Disabling free diplomacy (free -&gt; for gold)
!!UN:C4289079/4/3; [with RMB on a creature (original = 2)]
!!UN:C4879709/1/-21; [when attacking a creature (original =127)]</code></pre>
<pre class="erm-example"><code class="language-erm">!!UN:C4468887/4/6554608; !!UN:C4468961/4/6554608; % increase in champion damage per 1 hex (here 75%)
!!UN:C4468973/4/y1; "ceiling" of the attack bonus (orig 400%)
!!UN:C4468961/4/y1; impact of attack bonus on damage (orig 5%)
!!UN:C4471030/4/y1; influence of the defense bonus on damage (orig 2.5%)
!!UN:C4471048/4/6535360; min deff bonus =97.5% /100-2.5%/ (orig =70% /100-30%/) is it really 30%? unclear</code></pre>
</div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-mons"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-6"></span><details class="erm-comment"><summary>Creatures</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; Function for changing the visual type of a flying projectile
; for existing shooters
!?FU(Monstre_SetFlyingShell);
; x1 - creature number (0...196)
; x2 - projectile type (0...15)
!!VRx1:+7994814;
!!UN:Cx1/1/x2;</code></pre>
For projectile types, see <a href="../tables/projectiles/#ref-form-weapon" data-context="true">in the table</a>.
<div class="erm-paragraph"><pre class="erm-example"><code class="language-erm">; Function for changing the voice of creatures
!?FU(Monstre_SetSound);
; x1 - creature number (0...196)
; z1 - name of the voice acting (for example: VRz1:S^monk^)
!!UN:C4697553/4/?y1;
!!VRy2:S116*x1+y1+8;
!!UN:Cy2/4/?y3;
!!SN:K4/?z1/y3/1;</code></pre>
<pre class="erm-example"><code class="language-erm">!!UN:C5133672/1/2; ** Increasing the cost of spells if the enemy has Pegasus
!!UN:C4608374/1/-2; ** The amount of mana that Ghosts drain from enemies. hero
;** Values above and below which morale does not affect the chance of a repeat turn
;** Positive morale (3 in 24 chance)
!!UN:C4605318/1/3;
!!UN:C4605344/1/3;
!!UN:C4605354/1/24; Positive Morality Probability Size (24)
;** negative morality (3 in 12 chance)
!!UN:C4605324/1/-3;
!!UN:C4605331/1/-3;
!!UN:C4605854/1/12; Negative Morality Probability Size (12)
;** if you set 6, then Badge of Courage together with the Leadership skill will give 6\24 = 25% morale trigger, normally everything above 3 is not taken into account</code></pre>
<pre class="erm-example"><code class="language-erm">;** The value to which the Literacy skill is added to determine the level of spells to learn
;** (at skill level 3 you can learn level 4 spells)
!!UN:C4859491/1/1;
;** Number of the creature resurrected from corpses by the PitLords (48 - Demoniac)
;** The number of summoned creatures does not depend on their health
!!UN:C5928811/1/48;</code></pre>
<pre class="erm-example"><code class="language-erm">; The power of resurrection of Archangels.
!!UN:C4485241/1/3 C4489947/1/3 C5932992/1/3 C4485546/1/3;
1 = 50 hp
2 = 100 hp
3 = 200 hp
4 = 400 hp</code></pre>
</div><h4>Chance of abilities triggering</h4>
<pre class="erm-example"><code class="language-erm">;** Chance of triggering Old Age on a phantom dragon (out of 100)
!!UN:C4457044/1/100; 100 upper range
!!UN:C4457049/1/1; 1 lower range
!!UN:C4457060/1/20; 20 chance
;** Acid Breath of Rusty Dragon (out of 100)
!!UN:C4461006/1/100; 100 upper range
!!UN:C4461011/1/1; 1 lower range
!!UN:C4461022/1/20; 20 chance
;** Double damage of the Death Knight (out of 100)
!!UN:C4470496/1/20; 20 chance
;** Chance of triggering Disease for Zombie (out of 100)
!!UN:C4457161/1/100; 100 upper range
!!UN:C4457166/1/1; 1 lower range
!!UN:C4457177/1/100; 20
;** Chance of triggering Blind on Unicorns and Diamond Dragons (out of 100)
!!UN:C4457262/1/100; 100 upper range
!!UN:C4457267/1/1; 1 lower range
!!UN:C4457278/1/100; 20
;**Chance of triggering Petrification on Medusas, Basilisks and Barons of Hell (out of 100)
!!UN:C4457623/1/100; 100 upper range
!!UN:C4457628/1/1; 1 lower range
!!UN:C4457639/1/100; 20
;** Chance of Poison triggering on Wyvern Monarchs (out of 100) mummy?
!!UN:C4457808/1/100; 100 upper range
!!UN:C4457813/1/1; 1 lower range
!!UN:C4457824/1/100; 30
;** Chance of Paralysis triggering for Skorpicor (out of 100)
!!UN:C4457921/1/100; 100 upper range
!!UN:C4457926/1/1; 1 lower range
!!UN:C4457937/1/100; 20</code></pre></div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-spel"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-7"></span><details class="erm-comment"><summary>Spells</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!UN:C5901022/4/y1; force field duration
!!UN:C5901337/4/y1; fire wall duration
!!UN:C4474421/4/y1; Duration of disruptive ray, berserk and roots (default 255)
!!UN:C4474421/4/3; set the duration of disruptive ray, berserk and roots to 3 turns
; Berserk duration is equal to spell power
!!VRv1:S4477144 +59 -47; berserker address (spell 59)
!!UN:Cv1/1/2; Berserk duration is equal to spell power
; MP consumption when casting Town Portal
!!UN:C4314399/4/300; Earth School Level 1-2
!!UN:C4314420/4/200; Earth Expert
!!UN:C4314836/1/2; Earth magic level at which hero can select town using GPU
; MP consumption when casting Dimension Door
!!UN:C4314143/4/200; School of Air expert
!!UN:C4314140 /1/100; Additional 100 points if not an expert
;** Berserker radius at 0\0\1\2 fire magic skill level
;** with a value higher than 2 there will be graphical glitches + only triggers when pointing at a target
!!UN:C6562420/1/0;
!!UN:C6562424/1/0;
!!UN:C6562428/1/1;
!!UN:C6562432/1/2;</code></pre>
<h4>Setting transparency for spell animations</h4>
<pre class="erm-example"><code class="language-erm">!!UN:C4454270/4/?y1;	table address
!!VRy2:S&lt;spell number&gt; *12 +9;
; EXAMPLE: &lt;67&gt; - number of the POISON spell (see numbers in the description at BM:V)
!!VRy1:Sy1 +y2;
!!UN:Cy1/1/&lt;transparency flag&gt;;	transparency flag (set &lt;1&gt;, remove &lt;0&gt;)</code></pre>
</div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-arts"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-8"></span><details class="erm-comment"><summary>Artifacts</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; + to the rounds the duration of the bet
!!UN:C5132392/4/1; magic necklace (+1)
!!UN:C5132455/4/2; magic ring (+2)
!!UN:C5132517/4/3; magic cape (+3)
!!UN:C5132581/4/50; mage ring (+50)
; Titan Rumble
!!UN:C5085076/1/57; its spell (57)
; Cloak of the Undead King
!!UN:C5127994/4/56; skeleton (56) without nav. Witchcraft
!!UN:C5127987/4/58; living dead (58) for bases. Witchcraft
!!UN:C5127978/4/60; guardian (60) for advanced Sorcery
!!UN:C5127967/4/64; lich (64) for exp Sorcery
; Angelic Alliance (autocast spell)
!!UN:C4607960/1/48; prayer (48)
!!UN:C4607983/1/48; prayer (48)
!!UN:C4607973/1/48; duration in rounds (10)
; Armor of the Damned (autocast spell)
!!UN:C4608025/1/54 C4608048/1/54 C4608038/1/50; Slowness (54)
!!UN:C4608070/1/42 C4608093/1/42 C4608083/1/50; Curse (42)
!!UN:C4608115/1/45 C4608138/1/45 C4608128/1/50; Weakness (45)
!!UN:C4608160/1/52 C4608183/1/52 C4608173/1/50; Misfortune (52)</code></pre>
<pre class="erm-example"><code class="language-erm">; Get hero structure in v1
!!SN:E7411341/1/[hero number];
; checking whether the art is worn: returns (v1 = 0...1)
!!SN:E5084256/2/[hero structure]/[artifact];
; delete artifact in a specific slot
!!SN:E5123648/2/[hero structure]/[slot];</code></pre>
<pre class="erm-example"><code class="language-erm">; get/change the name and description of an artifact
!!UN:C6687592/4/?y2; [link to artifact table]
!!VRy3:S[art number] *32 +y2 (+16); [+16 - to describe the artifact]
!!UN:Cy3/4/?y1; [y1 - link address to title (description)]</code></pre>
</div></details></li></ul>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-links"></span>Also, even more ready-made solutions using UN:C are available on the Internet. The following sites are worth noting:
</div><ul>
<li><div class="erm-paragraph"></div><span class="erm-anchor" id="ref-cont-unc-lib-20"></span><details class="erm-comment"><summary><strong>WoG forum</strong> (<span class="erm-anchor" id="ref-cont-unc-lib-show20"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
♢ <a href="http://wforum.heroes35.net/showthread.php?tid=5118">Topic on UN:C</a> (the basis of the article is taken from here)<br>
♢ <a href="http://wforum.heroes35.net/showthread.php?tid=5972">Complex scripts</a> (directory)<br>
♢ <a href="http://wforum.heroes35.net/showthread.php?tid=4734">Collection of ready-made scripts</a> (in English)
</div></details>
</li>
<li><div class="erm-paragraph"></div><span class="erm-anchor" id="ref-cont-unc-lib-21"></span><details class="erm-comment"><summary><strong>DF2 Forum</strong> (<span class="erm-anchor" id="ref-cont-unc-lib-show21"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
♢ <a href="http://forum.df2.ru/index.php?showtopic=6813&amp;st=20">Topic on UN:C</a><br>
♢ <a href="http://forum.df2.ru/index.php?showtopic=34685">Hooks for executable code</a><br>
♢ <a href="http://forum.df2.ru/index.php?showtopic=6803">Engineering Analysis</a></div></details></li>
</ul>








</div>
</div>
</section>
:::

## Command contract {#contract}

`!!UN:Cbase/size/$;` and `!!UN:Cbase/offset/size/$;` read or write memory. `?variable` reads; a value writes. Standard widths are 1, 2 and 4 bytes. An address identifies a byte; width determines how many adjacent bytes are affected. Do not overwrite an adjacent field incidentally.

## Static base and dynamic pointer {#pointers}

An EXE location may contain a pointer rather than the structure itself. Read the pointer, check it is nonzero and that the game context is appropriate, then access the offset. ERA applies GetRealAddr to the base: pass the original base and offset separately for relocated blocks. A nonzero pointer alone does not prove correct type or lifetime.

## Applying and restoring changes {#lifecycle}

Apply constant patches in OnGameEnter. Modern ERA fixes the network cycle: OnGameLeave → OnSavegameRead → OnAfterLoadGame → OnGameEnter. Hook installation this way was unreliable in network games before ERA 3.9.14. Dynamic structures have different persistence from code patches: map changes or loads may recreate them. Save the original value before writing and own only your change; do not restore over a newer third-party patch.

## Recipes {#recipes}

- [Resolution](./screen-size/)
- [Projectile type](./projectile-type/)
- [Beam color](./beam-color/)
- [Grail](./grail-coordinates/)
- [Combat spell power](./battle-spell-power/)
- [Building cost](./town-building-cost/)
- [Commander structure](./commander-structure/)

## Example status {#review}

Cards are rewritten historical recipes with attribution and source-based address-logic checks. Execution in a particular game build has not been tested. An address table is not a compatibility guarantee. If HE, BM, CO, CA or a Framework helper solves the task, use that contract before direct writes.

## Related commands and tables {#reference-links}

[General game operations (UN)](../receivers/un/#command-cbase-size-cbase-offset-size) · [ERM debugging and compatibility](../compatibility/) · [ERA services, memory and sound (SN)](../receivers/sn/#command-eaddress-convention-args) · [ERM triggers and events](../triggers/) · [Bits, masks and hexadecimal](../tables/bits/) · [Commander structure](commander-structure/) · [Projectiles and beams](../tables/projectiles/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.18, +](../compatibility/#era3-v-3-9-18-l245) — Added "Tools/UN C to bin" utility for conversion of UN:C ERM commands into binary patches.
- [ERA 3.9.14, +](../compatibility/#era3-v-3-9-14-l662) — Added support for "OnGameEnter" and "OnGameLeave" events in network games. Previously savegame transfer and loading on remote side used to trigger "OnAfterSavegameLoad", but not "OnGameLeave" + "OnGameEnter". That's why …
- [ERA 3.8.1, +](../compatibility/#era3-v-3-8-1-l1524) — Added new Javascript utility to convert UN:C patches into binary patches. See "Tools/UncToBin/index.html".
- [ERA 3.1.0, -](../compatibility/#era3-v-3-1-0-l3144) — Fixed UN:C. It didn't accept negative size argument, while -1, -2 and -4 are valid sizes. Prefer to use (UNC_XXX) constants to specify valid data type.
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l4038) — Enhanced !!UN:C command. It supports all d-modifiers now. New syntax with offset from address is available: !!UN:C#addr/#offset/#size/$value; Era always calls GetRealAddr for #addr, thus !!UN:C supports all extended/relo…
<!-- ERA3-GENERATED:END -->
