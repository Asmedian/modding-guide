# UN:C — memory access

ID: erm.un-c
URL: https://asmedian.github.io/modding-guide/en/erm/un-c/
Part: 1/3
Source references: old-help:cont-unc.htm, old-help:cont-unc-lib.htm, erm-forum:un-c-page-1.html, era-changelog:era-iii-changelog.txt, era-source:erm.pas
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.un-c 1 -->
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
In the WoG game code at <em class="erm-tone-purple erm-legacy-event">76C37D</em> set spell No. 25h for the Paladin commander. These addresses have a hexadecimal number system. 
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

<!-- llm:end erm.un-c 1 -->

