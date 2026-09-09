---
{"title":"General game operations (UN)","summary":"UN receiver: general game operations, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"General game operations (UN)"}
---

## Receiver UN {#ref-rec-un}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-g0-skill-text-z-g1-monster-text-z-g2-hero-field-value"></span><span class="erm-anchor" id="command-j0-spell-j1-level-experience-j2"></span><span class="erm-anchor" id="command-n0-z-id-n1-z-id-n2-z-town-building-n3-z-monster-plural-n4-z-skill"></span><span class="erm-anchor" id="command-n5-z-key-sectionz-filez-n6-z-key-sectionz-filez"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-un-text"></span><div>
<span class="erm-anchor" id="ref-rec-un-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>UN</strong> (universal command) </span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-un-red"></span><span class="erm-tone-red">!!UN:XXXX;</span> 
- universal command. Used to make changes to the map and/or game.</strong></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-a"></span><span class="erm-anchor" id="command-a-a"></span><span class="erm-anchor" id="command-a-combo-artifact-part1-part2"></span>A#/$</strong></span><br>
Set/check/get the artifact on the map:
</div><pre>        # – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact number</a>
        $ = 1 – artifact disabled
	$ = 0 – artifact enabled</pre>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong> the ban does not work when generating an artifact on the map (instead of a “random” artifact). 
However, you can try to prohibit it via <span class="erm-anchor" id="ref-rec-un-erm"></span><strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:A#/3/0;</strong></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-a1"></span>A#1/#2/$</strong></span><br>
Set/check/get information about artifact.
</div><pre>        #1 – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact number</a>
        #2 – information type
	= 1 – price
	= 2 – <a href="../../tables/artifact-slots/#ref-form-ap2" data-context="true">body position</a>
	= 3 – type (class)
	= 4 – number <a href="../../tables/combination-artifacts/#ref-form-a2" data-context="true">combo artifact</a>
	= 5 – part of a combo artifact
	= 7 – artifact WoG
	= 8 – gives spell or not
	= 9 – artifact name
	= 10 – artifact description
        $ - value</pre>
<u></u><span class="erm-anchor" id="ref-rec-un-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<ol>
<li><span class="erm-anchor" id="ref-rec-un-wt"></span><strong class="erm-legacy-label">Price:</strong> Artifact can be sold to artifact merchants for 1/5 of the set price if you do not have additional merchants. Grail and new WoG artifacts have a price of 0.</li>
<li><strong class="erm-legacy-label">Position on the body:</strong> if you place artifact at the wrong position using ERM, the additional parameters will not disappear. 
For example, if you set the Saint's Sandals to be worn on the head instead of the feet, you will gain all +2 stats (and lose them when you take them off).<br>
If hero already has artifact equipped and you change the artifact slot via ERM, artifact will remain fully functional until it is removed, and can then only be equipped in the changed slot.</li>
<li><strong class="erm-legacy-label">Type:</strong> This value determines the class of the artifact - no class (spellbook, war machines and Grail) (1), treasure (2), valuable (4), important (8) and relic (16), 
which include combo artifacts and three new WoG artifacts. Other values ​​can be set to obtain a mixed class (or its own).</li>
<li><strong class="erm-legacy-label">Combo artifact number:</strong> each combination has its own number. The first combo artifact, Angelic Alliance, has a value of 0, and the last, Cornucopia, has a value of 11. Non-combo artifacts have a value of -1.<br>
Attention: if you set this value to -1 for standard prefabricated artifacts (like the Alliance of Angels) (which is NOT a combo artifact), then they will not add anything to the hero’s parameters, but will retain their additional properties 
(like Prayer or immunity to magic up to level 4)</li>
<li><strong class="erm-legacy-label">Combo Artifact Part:</strong> if artifact is one of the components, the value will be the number of the combo artifact. And if artifact is not part of the combo, the value will be -1.</li>
<li>NOT USED.</li>
<li><strong class="erm-legacy-label">Artifact WoG:</strong> this parameter is set to 0 for all artifacts except 141, 142 and 143, for which it is equal to 1.</li>
<li><strong class="erm-legacy-label">Gives spell:</strong> this value is set to 0 for most artifacts, and to 1 for artifacts like Tomes of Magic, Speaker's Hat, Captain's Hat - which is what grants spells by default. 
It is currently impossible to check which spell is added, however, a small check of all the hero's spells before and after equipping allows them to be calculated.<br>
Setting this value to 0 (if the default is 1) cancels the gain of spells.</li>
<li><strong class="erm-legacy-label">Artifact name:</strong> 
this can set the artifact name. $ - number <em>z</em>-a variable containing the name of the artifact. A value of 0 restores the original name. 
A frequently used trick with this option is to rename the artifacts and use their pictures with a different description in the dialog boxes.</li>
<li><strong class="erm-legacy-label">Artifact Description:</strong> this can establish a description of the artifact. $ - number <em>z</em>-a variable containing a description of the artifact. Value = 0 restores the original description.</li>
</ol></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-a2"></span>
A#/$/#1/#2[/#3/#4/#5/#6/#7/#8/#9/#10/#11/#12/#13/#14]</strong></span><br>
Combo artifact manager.<br>Build/delete combo artifact:<br>
         # – <a href="../../tables/combination-artifacts/#ref-form-a2" data-context="true">combo number</a> (0..31)<br>
         $ – 
set/check/get 
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">combo artifact number</a><br>
         #1 – 
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">part 1</a><br>
         #2 –
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">part 2</a><br>
         #3 –
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">part 3</a> 
(optional)<br>
         …<br>
         …<br>
         #14 – 
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">part 14</a> (optional)<br>
<em>Result:</em> combo-artifact created. If successful, flag 1 is set to 
1.<br>
<u></u>
</div><span class="erm-anchor" id="ref-rec-un-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body"><ul>
<li>You can use the statement syntax (!#UN:A).</li>
<li>All combo artifacts are recorded in a special table. This table contains 
up to 32 entries. So it is possible to install up to 32 combo artifacts. All 
standard combos are already written in the table (first 12 lines)</li>
<li>$ = number of the artifact that will appear during assembly.</li>
<li>You can check whether the combo artifact table row is empty or not:
<pre class="erm-example"><code class="language-erm">!!UN:A5/?v100/0/0;</code></pre>
Get the number of the combo artifact in line 5 of the combo table in v100. Two zeros at the end 
necessary for the correct operation of the team. In check and get syntax 
additional parameters (zeros) are ignored. An empty combo table row will give 
value 0. So, if in the example above, v100 = 0, the string is empty and can 
be used. You can delete the combo-artifact without adding a new one. 
Use combo artifact number 0 for this.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:A5/0/0/0;
The first zero removes information about the combo from the 5th row of the table. 
The next two zeros are needed for the command to work correctly.</code></pre></li>
<li>Important! Only artifacts with a number <strong>less than 160</strong> there may be <strong>part</strong> composite 
artifact, although all artifacts can be used as collected.</li>
</ul></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-b"></span><span class="erm-anchor" id="command-b"></span>B#/$</strong></span><br>
Perform operations on new chests and Mithril.
</div><pre>        # – type
	0 – Mithril
	1..6 – new chests
	7..10 – stones of Strength
        $ – action (0 = standard, 1 = special)</pre>
<div class="erm-paragraph">Let's take a closer look at each type separately:<br>
</div><span class="erm-anchor" id="ref-rec-un-4"></span><details class="erm-comment"><summary><strong>New resource (<span class="erm-anchor" id="ref-rec-un-show4"></span><strong class="erm-toggle-label">show</strong>)</strong></summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-rec-un-vc"></span><img src="../../../../assets/erm/9290c47ed2b27925.gif" alt="Mithril – type 79 / subtype 7. For Mithril, the standard operation means that when you (or the AI) take it, you will receive a random resource, except for wood " loading="lazy" decoding="async" class="erm-figure" width="64" height="32"> 
<a href="../../tables/resources/#ref-form-resource" data-context="true">Mithril</a> – type 79 / subtype 7.<br>
For Mithril, the standard operation means that when you (or the AI) take it, you will receive a random resource, 
except for wood and ore and in the quantity set in the editor (for gold, as always, *100).<br>
The extended effect for Mithril means that it will be added to the player's existing Mithril count.<br>
You can set or check the amount of mithril with the command <strong class="erm-inline-code"><a href="../ow/#ref-rec-ow-r"><span class="erm-tone-purple erm-legacy-strong">!!OW</span></a>:R#/7/$;</strong> 
Both actions work for both AI and humans. The AI ​​considers mithril to be gold, regardless of whether it takes it or not.</div></details><br>
<strong></strong><span class="erm-anchor" id="ref-rec-un-3"></span><details class="erm-comment"><summary>New chests (<span class="erm-anchor" id="ref-rec-un-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<div class="table-wrap erm-reference-table"><span class="erm-anchor" id="ref-rec-un-step"></span><table class="erm-table-center erm-indent" width="100%">
<tr>
	<td width="37"><img src="../../../../assets/erm/28df6e4bf384fdf4.gif" alt="zchst1" loading="lazy" decoding="async" class="erm-figure"></td>
	<td width="130">type 101, subtype 1</td>
	<td width="5%"></td>
	<td width="37"><img src="../../../../assets/erm/7250950ddfc9c054.gif" alt="zchst4" loading="lazy" decoding="async" class="erm-figure"></td>
	<td width="130">type 101, subtype 4</td>
	<td></td>
</tr>
<tr>
	<td><img src="../../../../assets/erm/807565923848fcc8.gif" alt="zchst2" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>type 101, subtype 2</td>
	<td></td>
	<td><img src="../../../../assets/erm/db01461679fb7041.gif" alt="zchst5" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>type 101, subtype 5</td>
	<td></td>
</tr>
<tr>
	<td><img src="../../../../assets/erm/cfb359c841780f97.gif" alt="zchst3" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>type 101, subtype 3</td>
	<td></td>
	<td><img src="../../../../assets/erm/64072fc0944b718a.gif" alt="zchst6" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>type 101, subtype 6</td>
	<td></td>
</tr></table></div><br>
For all new chests, the standard operation means a standard treasure chest.<br>
The extended action gives nothing to the visiting hero. In any case, the chest disappears after visiting it.<br>
</div></details><br>
<span class="erm-anchor" id="ref-rec-un-5"></span><details class="erm-comment"><summary><strong>Rock Forces (<span class="erm-anchor" id="ref-rec-un-show5"></span><strong class="erm-toggle-label">show</strong>)</strong></summary><div class="erm-comment-body">
<div class="table-wrap erm-reference-table"><table class="erm-table-center erm-indent" width="100%">
<tr>
	<td width="80"><img src="../../../../assets/erm/dc022d17e0c5b75a.gif" alt="zcbon006" loading="lazy" decoding="async" class="erm-figure" width="64"></td>
	<td width="10">&amp;nbsp</td>
	<td width="80"><img src="../../../../assets/erm/c7cf2ff165a5e6ba.gif" alt="zcbon106" loading="lazy" decoding="async" class="erm-figure" width="64"></td>
	<td width="10">&amp;nbsp</td>
	<td width="80"><img src="../../../../assets/erm/d322ef5369f9ed9e.gif" alt="zcbon203" loading="lazy" decoding="async" class="erm-figure" width="64"></td>
	<td width="10">&amp;nbsp</td>
	<td width="80"><img src="../../../../assets/erm/e1114718882cd4d9.gif" alt="zcbon303" loading="lazy" decoding="async" class="erm-figure" width="64"></td>
	<td width="10">&amp;nbsp</td>
	<td></td>
</tr>
<tr>
	<td colspan="2">type 101<br>subtype 7</td>		
	<td colspan="2">type 101<br>subtype 8</td>
	<td colspan="2">type 101<br>subtype 9</td>
	<td colspan="2">type 101<br>subtype 10</td>
	<td></td>
</tr></table></div>
<div class="erm-paragraph">Rock forces work like this:
</div><ol><li>Non-WoG-ified wog map without ERM, WoG options included: Commanders 
disabled, *or* Non-WoG-ified map with the "Commanders" option enabled with 
using ERM, Rock forces are disabled via ERM:
<pre class="erm-example"><code class="language-erm">!#UN:P3/0;
!#UN:B7/0;
!#UN:B8/0; 
!#UN:B9/0;
!#UN:B10/0;</code></pre>
*Or* WoG-ified map with disabled commanders 
via WoG options, Rock forces are allowed or prohibited.<br>Result: Rock forces 
work like regular treasure chests.</li>
<li>Non-WoG-ified wog-map without ERM, included WoG-options: "Commanders" 
allowed", *or* Non-WoG-ified wog-map using ERM-
authorized commanders (<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/0;</strong>), Rock forces enabled via ERM 
or ERM is NOT disabled 
(<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:B7/1;</strong> etc.) *or a WoG-ified map with allowed commanders in 
WoG options, Rock forces are allowed or prohibited.<br>
Result, if the hero's commander is alive: the commander receives a bonus from the Power Stone.<br>
Result if the hero's commander is dead: issue of stone destruction.</li>
<li>Non-WoG-ified wog map with disabled commanders using ERM, 
(<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/1;</strong>).<br>
Result: Rock powers work as more valuable treasure chests (up to 7500 gold/7000 experience)</li></ol>
</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-un-c"></span><span class="erm-anchor" id="command-cbase-size-cbase-offset-size"></span><span class="erm-tone-red"><strong>C#1/#2/$</strong></span><br>
The command writes/reads directly to RAM addresses:
</div><pre>        #1 – base address
        #2 – number of bytes (1, 2, 4)
         $ – value</pre>
<pre class="erm-example"><code class="language-erm">!!UN:C0/4/0; guaranteed elimination from the game © Berserker</code></pre>
<em>Syntax extension:</em><br>
<span class="erm-anchor" id="ref-rec-un-c1"></span><span class="erm-tone-red"><strong>C#1/#2/#3/$</strong></span><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>
<pre>        #1 – base address (always used <em class="erm-legacy-file">GetRealAddr</em>)
        #2 – offset in bytes
        #3 – number of bytes
         $ – value</pre>
<u></u><span class="erm-anchor" id="ref-rec-un-11"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show11"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body"> 
<span class="erm-anchor" id="ref-rec-un-q1"></span><blockquote class="erm-tone-quote erm-note"><strong>Structures</strong> – data arrays in the game memory, for convenient storage of information and reading/writing by program code. Most ERM teams modify data within these structures (tables).</blockquote>
UN:C automatically supports moved structures, that is, structures that plugins have moved to another memory location. To do this, you must always specify the beginning of the structure as the base address and the correct offset (add/subtract). The command will substitute a new base address and add an offset.<br>
The structures are described in <a href="http://wforum.heroes35.net/files/wog358_sources.rar">WoG 3.58f source code</a></div></details>
<div class="erm-tone-quote erm-note erm-paragraph">See also: <a href="../../un-c/#ref-cont-unc">Working with memory</a>, <a href="../../un-c/#ref-cont-unc-lib">Ready-made solutions using the command</a>, <a href="../../examples/#ref-cont-lib">Library of non-standard functions</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-d"></span><span class="erm-anchor" id="command-d-x-y-level-on-w-x1-y1-x2-y2-level-on"></span>D#1/#2/#3</strong></span><br>
Make a square of water available to the hero.<br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L<br>
<em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>D#1/#2/#3/$</strong></span><br>
Place/remove path (logs) on water<br>
         $ = 1 - place 
(add walkability)<br>
         $ = 0 – do not place (remove
walkability)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-6"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show6"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The square with the log is not accessible to the boat, but is accessible 
for walking. If you do not place a log, the square becomes normal (i.e. accessible 
for a boat). If you set the permeability for the boat (x/y/l/0) to the non-water square, 
the game goes to a black screen. If you set the walking ability to 
square-not-water, instead a square with water and floating on it will appear 
log In its description it will be written "Swamp (can be dug)", and when excavating 
a swampy hole will appear on it.<br>
At the moment, the only ERM team that 
the omitted fourth parameter takes the value 1 (although all others take the value 0).</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-e"></span><span class="erm-anchor" id="command-e-x-y-level-f-x-y-level-dx-dy"></span>E#1/#2/#3</strong></span><br>
Check if object can be placed at coordinates <br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L<br>
Checks whether a single-celled object can be placed in these 
coordinates. If possible, flag 1 will be false, if not, true.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-45"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-un-show45"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!UN:E1/2/0;
!!IF&amp;1:M^An object cannot be placed here^;
!!IF&amp;-1:M^An object can be placed here^;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-f"></span>F$1/$2/$3/$4/$5</strong></span><br>
Cause a fire (if possible)<br>
         $1 – X coordinate<br>
         $2 – Y coordinate<br>
         $3 – L (0-Surface, 1-Underground)<br>
         $4 – dX<br>
         $5 – dY<br>
dX, dY: we have a rectangle.<br>
If the top left corner with x and y coordinates...<br>
And the lower right, let’s say, x2 and y2... Then<br>
dX=x2-x<br>
dY=y2-y<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-7"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show7"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
So far, this command is only possible for one object - a tree. This object can be found in the map editor → Castles → last element. You can see the effect of this script when you destroy town Gorynych. 
Trees near the castle automatically light up when it is destroyed.<br>
<span class="erm-anchor" id="ref-rec-un-n1"></span><strong class="erm-tone-purple erm-strong">WoG-Team</strong>: «<em>We wanted to make more such objects (more trees), but we didn’t have time. 
We can make dynamic animations of trees burning, flooding, and anything else. Everything is ready, but there are no objects.</em>«</div></details> 
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-g"></span>G0/#1/#2/#3</strong></span><br>
Set secondary skill text.
</div><pre>        #1 – <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">skill number</a> (0..27)
        #2 – text type (0..3)
	0 – skill name
	1 – basic level (description)
	2 – advanced level (description)
	3 – expert level (description)
        $3 – number <em>z</em>-variable (1..1000)
	0 – restore original text</pre>
<u></u> <span class="erm-anchor" id="ref-rec-un-8"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show8"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
similar to changing the name and description of the artifact.<br>
You must install <em>z</em>-a variable with the appropriate text (you can 
use only global ones <em>z</em>-variables z1…z1000). If you change the text 
used here <em>z</em>-variable, it will immediately become the new skill text. 
So don't use these variables for other things.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!#VRz10:S^New name^;
!#VRz11:S^New description^;

!$LE7/5/0;
!!UN:G0/2/0/10;
!!UN:G0/2/1/11;

!$LE8/5/0;
!!UN:G0/2/1/0;</code></pre>
This script will set the name and description of the Logistics skill to new ones if you 
visit local event 7/5/0. Original Baseline Description 
Logistics will be restored after attending the local event at 8/5/0.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-g1"></span>G1/#1/#2/$</strong></span><br>
Change the creature's name.
</div><pre>        #1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature number</a>
        #2 – text type
	0 – name of the creature in units.
	1 – plural name of the creature.
	2 – special text (description)
        $ - <em>z</em>-variable (or its number) containing new text
	0 – restore original text (default)</pre>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-g2"></span>G2/#1/#2/#3</strong></span><br>
Allows you to set the text and image of the hero's specialization.
</div><pre>        #1 – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a>
        #2 – what to install
	1 - small picture (visible in the hero meeting window, etc.)
	2 – description
	3 – picture
        #3 is:
	– number <em>z</em>-variable (0 – restore to default), if #2 = 2
	– picture number (<a href="../../tables/specialty-pictures/#ref-form-heroesspec" data-context="true">0..356</a>), if #2 = (1 or 3)</pre>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-h"></span><span class="erm-anchor" id="command-h-x-y-level-player-radius-s-x-y-level-player-radius"></span>H#1/#2/#3/#4/#5</strong></span><br>
Hide part of the map (area - circle)<br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L (level)<br>
         #4 – 
<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a><br>
         #5 – radius<br>
<strong></strong> </div><span class="erm-anchor" id="ref-rec-un-9"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show9"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The area will be hidden <em>for everyone</em>, <em>except</em> 
the specified player. There is no check for the correctness of the player's number, i.e. the game handles values like ±5678765 
without errors (the result is a closed area for all players 0..7).</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-i"></span><span class="erm-anchor" id="command-i-x-y-level-type-subtype-refresh"></span><span class="erm-anchor" id="command-i-x-y-level-type-subtype-viewtype-viewsubtype-terrain-refresh"></span>I#1/#2/#3/#4/#5/#6</strong></span><br>
Place an object.
</div><pre>        #1 – X
        #2 – Y
        #3 – L (level)
        #4 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object type</a>
        #5 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object subtype</a>
        #6 – update?
	1 – yes (default)
	0 – no</pre>
<div class="erm-paragraph">This command is very useful, but there are a few limitations. Some objects cannot be placed with this command, 
because they need to be configured in the editor first, and some will not work at all and may cause instability 
games.<br>
<em>Additional syntax:</em><br>
<span class="erm-tone-red"><strong>I#1/#2/#3/#4/#5/#6/#7/#8/#9</strong></span>
</div><pre>        #1…#5 – see above
        #6 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object type 2</a>
        #7 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object subtype 2</a>
        #8 – <a href="../../tables/terrain/#ref-form-terrain" data-context="true">soil</a>
        #9 – update?
	1 – yes (default)
	0 – no</pre>
<div class="erm-paragraph">This means that there will be an object/subtype that will look like 
object2/subtype2. Use this command specifying the desired soil for the room 
objects made under the soil.<br>
<u>

</u>
</div><span class="erm-anchor" id="ref-rec-un-10"></span><details class="erm-comment"><summary>Additional information about the UN:I command (<span class="erm-anchor" id="ref-rec-un-show10"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">Before checking whether an object is placed on the map using ERM, you need to make sure that its def file is in Lod and the object is registered in <em class="erm-legacy-file">zobjcts.txt</em>. 
However, for testing, you can simply change the type and subtype of an object.
The type for ALL objects can be within 4 bytes (-2147483648…+2147483647), and the subtype can be within 2 bytes (-32768…32767). Setting tooltips works fine on negative subtypes. 
If you exceed the subtype value, then two options are possible:
If you set the instructions, then a random creature will appear on the map in a random number. :-)
If post-instruction or later - then a random creature from the map editor (type=71, subtype=0, with an input, active, but not creature - nonsense, in general).<br>
<br>
List of objects that <em>will</em> work correctly without additional settings. Many 
can be adjusted by the object's special receiver, if desired.
<br><br>
<strong>·</strong> Artifact (type=5, subtype=<a href="../../tables/artifacts/#ref-form-a1" data-context="true">0..143</a>) - receiver <a href="../ar/#ref-rec-ar">!!AR</a><br>
<strong>·</strong> Boat (type=8, subtype=0..2)<br>
<strong>·</strong> Cover of Darkness (type=15, subtype=0)<br>
<strong>·</strong> Habitation of creatures (type=17, subtype=<a href="../../tables/creature-dwellings/#ref-form-creaturedwellings" data-context="true">0..88</a> and 20, subtype=0..1) - receiver 
<a href="../dw/#ref-rec-dw">
!!DW</a><br>
<strong>·</strong> <span class="erm-anchor" id="ref-rec-un-gar"></span><a href="./#ref-rec-un">Garrison</a> (type=33, subtype=0 (normal), =1 (anti-magic), =2 (perpendicular), =3 (anti-magic perpendicular) - receiver <a href="../gr/#ref-rec-gr">!!GR</a></div><span class="erm-anchor" id="ref-rec-un-47"></span><details class="erm-comment"><summary>see above</summary><div class="erm-comment-body">
<div class="table-wrap erm-reference-table"><table width="100%"><tr>
	<td class="erm-align-center" width="120"><img src="../../../../assets/erm/f29b7b602dd54547.png" alt="avcgar10" loading="lazy" decoding="async" class="erm-figure"></td>
	<td width="90%">Subtypes 2 and 3 are not present in the standard game. For the room it will be true:<br>
	 <strong>·</strong> Regular - 33/0<br>
	 <strong>·</strong> Regular perpendicular - 219/0<br>
	 <strong>·</strong> Antimagic - 33/1<br>
	 <strong>·</strong> Antimagic perpendicular - 219/1</td></tr>
	<tr><td colspan="2">All garrisons are placed normally. Type 219 is inactive when placed, but it is enough to change the type to 33 (see. <a href="../ob/#ref-rec-ob-t">OB:T</a>) and everything will be fine.<br>
	The game itself changes the type of perpendicular garrisons when the map is loaded, and it needs type 219 for initialization.<br>
	Garrisons with subtype &gt; 1 are treated as normal.</td></tr>
</table></div><br></div></details>
<strong>·</strong> Grail (type=36, subtype=0) - when placing several Grails, only 
the last one placed, this method can bypass the restriction of 9 cells from the edge of the map.<br>
<strong>·</strong> Lighthouse (type=42, subtype=0..7 for <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">colors</a> player or -1 for neutral) - receiver
<a href="../mn/#ref-rec-mn">!!MN</a> (same as for mines)<br>
<strong>·</strong> Marletto Tower (type=23, subtype=0)<br>
<strong>·</strong> Double-sided monolith (type=45, subtype=<a href="../../tables/two-way-monoliths/#ref-form-two-way-monolith" data-context="true">0..7</a>)<br>
<strong>·</strong> Mine (type=53, subtype=<a href="../../tables/mines/#ref-form-mines" data-context="true">0..7</a>) - receiver <a href="../mn/#ref-rec-mn">!!MN</a><br>
<strong>·</strong> Creature (type=54, subtype=<a href="../../tables/creatures/#ref-form-creature" data-context="true">0..196</a>) - receiver <a href="../mo/#ref-rec-mo">!!MO</a><br>
<strong>·</strong> Ocean Bottle (type=59, subtype=0) - receiver <a href="../sg/#ref-rec-sg">!!SG</a> (as for signs)<br>
<strong>·</strong> Redwood Observatory (type=58, subtype=0)<br>
<strong>·</strong> Resource (type=79, subtype=0..6) - receiver <a href="../ar/#ref-rec-ar">!!AR</a> (as for artifacts)<br>
<strong>·</strong> Sanctuary (type=80, subtype=0)<br>
<strong>·</strong> Shipyard (type=87, subtype=0..7 by <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">blossom</a> player or -1 for neutral) - receiver <a href="../sy/#ref-rec-sy">!!SY</a><br>
<strong>·</strong> Sign (type=91, subtype=0) - receiver <a href="../sg/#ref-rec-sg">!!SG</a><br>
<strong>·</strong> Spell scroll (type=93, subtype=<a href="../../tables/spells/#ref-form-spell" data-context="true">0..69</a>) - receiver <a href="../ar/#ref-rec-ar">!!AR</a><br>
<strong>·</strong> Town (type=98, subtype=0..8) - receiver <a href="../ca/#ref-rec-ca">!!CA</a><br>
<strong>·</strong> University (type=104, subtype=0) - receiver <a href="../ur/#ref-rec-ur">!!UR</a><br>
<strong>·</strong> Witch's hut (type=113, subtype=0..27) - receiver <a href="../wh/#ref-rec-wh">!!WH</a><br>
<br>
These objects will require additional configuration via a specific receiver to work correctly:<br>
<br>
<strong>·</strong> Campfire (type=12, subtype=0) - receiver <a href="../fr/#ref-rec-fr">!!FR</a> (when placing resource not specified)<br>
<strong>·</strong> Swan Pond (type=14, subtype=0) - receiver <a href="../sw/#ref-rec-sw">!!SW</a> (has a zero number when placed)<br>
<strong>·</strong> Corpse (corpse) (type=22, subtype=0) - receiver <a href="../sk/#ref-rec-sk">!!SK</a> (doesn’t have an artifact when placed?)<br>
<strong>·</strong> Event (type=26, subtype=0) - receiver <a href="../le/#ref-rec-le">!!LE</a> - if the event is placed by the command UN:I, 
it will be open to all players and will NOT be canceled after visiting.<br>
<strong>·</strong> Lean To (cellar) (type=39, subtype=0) - receiver <a href="../ln/#ref-rec-ln">!!LN</a> (does not have a resource when placed)<br>
<strong>·</strong> Stone of knowledge (type=100, subtype=0) - receiver <a href="../st/#ref-rec-st">!!ST</a> (has a zero number when placed)<br>
<strong>·</strong> Shrine of Magic (type=88..90, subtype=0) - receiver <a href="../sr/#ref-rec-sr">!!SR</a> (when placed, they teach the spell "Summon Ship")<br>
<strong>·</strong> Magic Spring (type=48, subtype=0) - receiver <a href="../sp/#ref-rec-sp">!!SP</a> (considered visited upon placement)<br>
<strong>·</strong> Mystical Garden (type=55, subtype=0) - receiver <a href="../gd/#ref-rec-gd">!!GD</a> (considered visited upon placement)<br>
<strong>·</strong> Obelisk (type=57, subtype=0) - receiver <a href="../mt/#ref-rec-mt">!!MT</a> (has a zero number when placed)<br>
<strong>·</strong> Pyramid (type=63, subtype=0) - receiver <a href="../pm/#ref-rec-pm">!!PM</a> (considered visited upon placement)<br>
<strong>·</strong> Scholar (type=81, subtype=0) - receiver <a href="../sc/#ref-rec-sc">!!SC</a> (when placed, teaches +1 attack)<br>
<strong>·</strong> Shipwreck Survivor (type=86, subtype=0) (use <a href="../ob/#ref-rec-ob-c">OB:C</a> to configure the artifact, when placed on it Spell book)<br>
<strong>·</strong> Treasure chest (type=101, subtype=0) - receiver <a href="../ch/#ref-rec-ch">!!CH</a> (value CH:B0 when placed)<br>
<strong>·</strong> Tree of knowledge (type=102, subtype=0) - receiver <a href="../kt/#ref-rec-kt">!!KT</a> (teaches for free, has a zero number upon placement)<br>
<strong>·</strong> Wagon (type=105, subtype=0) - receiver <a href="../wg/#ref-rec-wg">!!WG</a> (when placed, the find is not specified)<br>
<strong>·</strong> Warrior's Tomb (type=108, subtype=0) - receiver <a href="../wt/#ref-rec-wt">!!WT</a> (when placing artifact not specified)<br>
<strong>·</strong> Water Wheel (type=109, subtype=0) - receiver <a href="../wm/#ref-rec-wm">!!WM</a> (has no gold when placed)<br>
<strong>·</strong> Windmill (type=112, subtype=0) - receiver <a href="../ml/#ref-rec-ml">!!ML</a> (does not have a resource when placed)
<div class="erm-paragraph">These objects will NOT work correctly and may cause game instability, card crashes, or other problems when placed:</div>
<div class="erm-paragraph"><strong>·</strong> &lt;blank&gt; (type = 1) - the game will crash when trying to place an object<br>
<strong>·</strong> Anchor (type = 3) - receiver <a href="../pa/#ref-rec-pa">!!PA</a> (the game will crash when trying to place an object)<br>
<strong>·</strong> Pandora's Box (type=6) - the game will crash when visiting the object<br>
<strong>·</strong> Black Market (type=7) - the game will crash when visiting the object<br>
<strong>·</strong> Hero (type=34) - use the command <a href="../he/#ref-rec-he-p">HE:P</a> to place the hero on the map<br>
<strong>·</strong> Type 50 - the object is not initially in the game<br>
<strong>·</strong> Prison (type=62) - does not create any visible problems, upon visiting it is announced that hero was released by the king, and the prison disappears.<br>
<strong>·</strong> Seer's Hut (type=83) - the game crashes when you mouse over an object or when you visit it, BUT you can place the object correctly (see below)<br>
<strong>·</strong> Quest Guard (type=215)<br>
<strong>·</strong> Garrison (type = 219) - garrison just doesn't work ( about the reason)</div>
<div class="erm-paragraph">Some objects have different models for different soils. To place them, use the syntax...
<pre class="erm-example"><code class="language-erm">!!UN:Ix/y/l/T/S/T/S/tr;</code></pre> where <strong>x/y/l</strong> - coordinates, <strong>T</strong> - type 
object, <strong>S</strong> - subtype, <strong>tr</strong> - <a href="../../tables/terrain/#ref-form-terrain" data-context="true">soil</a>, on which the desired object is located.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:I25/25/0/12/0/12/0/0; - place a regular fire
!!UN:I26/25/0/12/0/12/0/3; - place a fire with snow textures
!!UN:I24/25/0/12/0/12/0/1; - place a fire with sand textures</code></pre></div>
<div class="erm-paragraph"><strong>·</strong> Campfire (type = 12) - has variations for sand, snow, underground, lava.<br>
<strong>·</strong> Swan Pond (type = 14) - has variations for dirt, grass and swamp<br>
<strong>·</strong> Fountain of Fortune (type = 30) - has a snowy variation<br>
<strong>·</strong> Hill Fort (type = 35) - has a snowy variation<br>
<strong>·</strong> Magic Well (type = 49) - has a snowy variation<br>
<strong>·</strong> Mines (type = 53) - have variations for different soils<br>
<strong>·</strong> Obelisk (type = 57) - has color variations for each soil<br>
<strong>·</strong> Redwood Observatory (type = 58) - has a snow variation<br>
<strong>·</strong> Seer's Hut (type = 83, subtype 0-2) - using this syntax you can place it, but it will be abandoned by the seer, the soil does not affect the appearance.<br>
<strong>·</strong> Crypt (type = 84) - has a variation with snow (default) and without<br>
<strong>·</strong> Sign (type = 91) - has variations for different soils<br>
<strong>·</strong> Trading Post (type = 99) - has variations for dirt, rocks<br>
<strong>·</strong> Water Wheel (type = 109) - has variations for grass and snow (default)<br>
<strong>·</strong> Windmill (type = 112) - has variations for grass (default) and for snow</div></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-j"></span>J#<br>
J0/#/$</strong></span><br>
Disable spell.
</div><pre>        # – <a href="../../tables/spells/#ref-form-spell" data-context="true">spell number</a> (0..69)
        $ – allow (0) or disable (1)</pre>
<u></u> <span class="erm-anchor" id="ref-rec-un-12"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show12"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This ban only works for mage guilds and pyramids, but you can check the value set here for any ERM script. 
Since magic guilds and pyramids generate spell at the beginning of the map (before fully loading), we advise using this command as an instruction.<br>
For Magic Shrines, the ban does not work, because... other internal mechanisms are used. 
However, you can change spell Shrines by checking through receiver <a href="../sr/#ref-rec-sr">!!SR</a>.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j1"></span>J1/$1/?$2</strong></span><br>
Set/receive level and experience limits.<br>
         $1 – level limited to $1 (set/check/get)<br>
         $2 – experience for this <a href="../../tables/hero-levels/#ref-form-heroeslevels" data-context="true">level</a> (only receive)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-13"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show13"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Experience is automatically set for this level.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:J1/35/?y10;
Here we will set the ceiling to 35 levels and remember the number of experience up to level 35 in y10.

!!UN:J1/?y1/d J1/30/?y2 J1/y1/d;
Let's find the amount of experience that will be available upon reaching level 30, without changing the restrictions on level and experience
(i.e. we can dynamically find the numbers we need without resorting to a table)</code></pre>
<div class="erm-paragraph">If you need to remove the experience limit message in the game, use the following code:
<pre class="erm-example"><code class="language-erm">; disable experience limit message
; © Berserker
!!UN:C5125902/4/34281 C5125907/1/144;</code></pre></div>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j2"></span>J2/$</strong></span><br>
Set/check/get difficulty selected by the player (0..4)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j3"></span><span class="erm-anchor" id="command-j3-file-j4-j5"></span>J3</strong></span><br>
This command allows you to set the path to the file containing the settings 
WoG'ifications.<br>
<u></u><br></div><span class="erm-anchor" id="ref-rec-un-14"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-un-show14"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#UN:J3/^MySettingsFile^;</code></pre>
The path can be a folder or an absolute path like these:<br>
          <span class="erm-tone-red erm-inline-code">^MyOptions.xxx^</span> - file in the heroes folder<br>
          <span class="erm-tone-red erm-inline-code">^maps\options.yyy^</span> - file in a folder <em class="erm-legacy-file">Maps</em><br>
          <span class="erm-tone-red erm-inline-code">^C:\xxx.yyy^</span> - file on disk <em class="erm-legacy-file">C:</em></div></details>
<div class="erm-paragraph"><em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>J3/^:clear:^</strong></span><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Disables all WoG options and sets the game rule to "Use the rules noted below."
<pre class="erm-example"><code class="language-erm">!#UN:J3/^:clear:^;</code></pre>
</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j4"></span>J4/$</strong></span><br>
Set/check/get radius "thinking" AI<br>
         $ = 32,000 in Breath of Death by 
default<br>
            = 4096 – 
current in WoG<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-15"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show15"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">This is not the number of squares analyzed by the AI. This is the AI's overall radius based on its turn points and terrain. 
For grass, one square spends 100 points. The value is not saved when saving the game. 
If the value is too low, hero the AI ​​will just stand still, not moving at all.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j5"></span>J5/$</strong></span><br>
Allow/disable “autosave”<br>
         $ = 1 – allow<br>
         $ = 0 – disable<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-16"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show16"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	The "deny" status is not saved in the game file, so 
that if you need to restore undo, put this command after the trigger 
<a href="../../triggers/gm/#ref-tr-gm">!?GM0</a>. In most cases, we recommend not disabling autosave because 
it can serve as a game restore point if anything goes wrong.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j6"></span><span class="erm-anchor" id="command-j6-class-artifact-j7-slot-artifact"></span>J6/#/$</strong></span><br>
Generate a random artifact of a certain level.
</div><pre>        # – set class
	= -1 – random
	= 1 – non-class (Grail and WoG artifacts)
	= 2 – treasure
	= 4 – valuable
	= 8 – important
	= 16 – relic
        $ – get/check artifact number.</pre>
<u></u><span class="erm-anchor" id="ref-rec-un-17"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show17"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The function generates only allowed artifacts. 
Class 1 artifacts include Grail, Spell Book, Spell Scroll and all combat vehicles.<br>
You can generate artifact from several classes, for example 18 = relics and treasures. 
Generated artifacts in the same trigger will NOT be repeated.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:J6/16/?v10; - get a random relic in v10.</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j7"></span>J7/#/$</strong></span><br>
Set/check/get artifact, sold by the artifact merchant.<br>
         # – slot number (0..6)<br>
         $ – number <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact</a> in slot<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-18"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show18"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can install, get or check artifact (“-1” means no artifact).<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:J7/3/?v10; - get artifact in slot 3
!!UN:J7/v5/v20; - install artifact v20 in slot v5</code></pre>
This command does not work for the Black Market. To do this you will have to resort to using UN:C...
<pre class="erm-example"><code class="language-erm">; manage prices on Black Markets (1..13)
; © feanor
!!UN:C6202647/4/13; [5 - standard, 13 - nominal]
!!UN:C5392593/1/13; [for AI]</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j8"></span><span class="erm-anchor" id="command-j8-location-string-j9-location-z-j10"></span>J8/$1/$2<br>
J8/$1/^Text^</strong></span><br>
Command that checks the existence of external files<br>
         $1 – 
</div><span class="erm-anchor" id="ref-rec-un-19"></span><details class="erm-comment erm-inline-comment"><summary>search location</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-rec-un-t0"></span><pre class="erm-margin-top-zero">	0 – in the heroes folder
	1 – in <em class="erm-legacy-file">Data</em>
	2 – in <em class="erm-legacy-file">Maps</em>
	3 – in <em class="erm-legacy-file">Random maps</em>
	4 – in <em class="erm-legacy-file">Games</em>
	5 – in <em class="erm-legacy-file">Data/S</em>
	6 – in <em class="erm-legacy-file">Data/P</em>
	7 – in <em class="erm-legacy-file">Data/ZVS/LIB1.res</em>
	8 – in <em class="erm-legacy-file">Data/ZVS/CMP.res</em>
	9 – in <em class="erm-legacy-file">ERM_HELP</em>
	10 – full path specified in <em>z</em>-variable either in ^…^</pre></div></details>
<div>         $2 – number <em>z</em>-variable or ^…^ with the file name.<br>
Flag 1 will be set to true if the file exists, otherwise it will be set to false.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j9"></span>J9/$1/$2</strong></span><br>
The command copies the path to the heroes folder<br>
         $1 – destination (see. <a href="./#ref-rec-un-j8">UN:J8</a>)<br>
         $2 – number <em>z</em>- a variable where to write it.<br>
Example: copy the path to z10. Let our Heroes be installed in <em class="erm-legacy-file">C:\HOMM\WOG</em>, team <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!UN</span>:J9/2/10;</strong><br>
We receive the following text in z10:
<pre class="erm-example"><code class="language-erm">C:\HOMM\WOG</code></pre></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j10"></span>J10</strong></span><br>
Add variables to <em class="erm-legacy-file">WOGERMLOG.TXT</em><br>
This command can be used at any time (write all non-zero variables to a file)</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j11"></span><span class="erm-anchor" id="command-j11-j13-k1-k2-m"></span>J11/$</strong></span><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Set/check/get mouse behavior on click <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> on the enemy stack in battle.<br>
       $ = 0 – the window remains on the screen (WoG-style).<br>
       $ = 1 – the window closes when the mouse button is released (SoD-style)<br>
Team information is saved in the game.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-un-j13"></span><span class="erm-tone-red"><strong>J13/$</strong></span><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Resetting commanders (depending on the current state <a href="./#ref-rec-un-p2">WoG options</a> 3 and 6).</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-k"></span>K#/$</strong></span><br>
Set New Week options<br>
K1/$ – ban ($ = 1) all “Week …” (creatures/imps) or allow ($ = 0)<br>
K2/$ – set a message when a new week begins in the text variable $<br>
</div><span class="erm-anchor" id="ref-rec-un-48"></span><details class="erm-comment"><summary><u><strong>Comment (<span class="erm-anchor" id="ref-rec-un-show48"></span><strong class="erm-toggle-label">show</strong>)</strong></u></summary><div class="erm-comment-body">
This command does NOT cancel the appearance of the Imp week/month if Inferno is built with Grail. However, this can be circumvented by using the following code:
<pre class="erm-example"><code class="language-erm">; Removing the Grail bonus Inferno
!!UN:C5015000/1/10; (original = 3)</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-l"></span><span class="erm-anchor" id="command-l-x-y-level-time-l-player-obelisk"></span>L#1/#2/#3/#4</strong></span><br>
Move your gaze to position<br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L<br>
         #4 – waiting time (1000 = 1 
second)<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-20"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show20"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Example 
	using the command - the usual Eye of the Magician, opening the card, 
but this command only shifts the gaze. Also if you use this command 
in the trigger of an object that has standard, non-ERM functions, a window may open 
exchange between the hero and his phantom clone. To avoid this, turn off 
object properties by command <a href="../ob/#ref-rec-ob-s">
OB:S</a>, and after completing this, turn the receiver back on (if necessary).</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-l1"></span>L#1/#2/$</strong></span><br>
Set/check/get whether the obelisk is visited?
</div><pre>        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player number</a> (0..7)
	-2 = for everyone
	-1 = for current
        #2 – obelisk number (0..47; -1 = all)
        $ – obelisk visited (1) or not (0)</pre>
<div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../mt/#ref-rec-mt">!!MT</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-m"></span>M#[/$]</strong></span><br>
Set the parameters “Month...”<br>
M0 – normal, unchanged month<br>
M1 – ban creature months *2 and /2<br>
M2/$ – set month
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature $</a>*2<br>
M3 – set plague month (all creatures /2)<br>
<span class="erm-anchor" id="ref-rec-un-bold"></span><em class="erm-strong">Note:</em> month of Bes, if Grail is built in Inferno, this command does NOT cancel (but there is another way out — see <a href="./#ref-rec-un-k">here</a>).</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-n"></span>N…</strong></span><br>
Find out the name:<br>
<span class="erm-tone-red"><strong>N0/z#/$</strong></span> – name <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact</a> ($=number)<br>
<span class="erm-tone-red"><strong>N1/z#/$</strong></span> – name <a href="../../tables/spells/#ref-form-spell" data-context="true">spells</a> ($=number)<br>
<span class="erm-tone-red"><strong>N2/z#/$1/$2</strong></span> 
– <a href="../../tables/buildings/#ref-form-buldings" data-context="true">building name</a> ($2) in the town $1 (0..8)<br>
<span class="erm-tone-red"><strong>N3/z#/$1/$2</strong></span> 
– name <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature</a> ($1) (single: $2=0, 
several: $2 = 1)<br>
<span class="erm-tone-red"><strong>N4/z#/$</strong></span> – name <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">secondary skill</a> ($=number)<br>
This command allows you to get the name of an artifact, spell, building, creature 
or secondary skill by its number and enter it in <em>z</em>-variable for further 
use in messages.<br>
<u>
</u><br></div><span class="erm-anchor" id="ref-rec-un-21"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-un-show21"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#UN:N0/z100/5;
!#UN:N1/z101/6;
!#UN:N2/102/7/1;
!#UN:N3/103/8/0;
!#UN:N3/104/8/1;
!#IF:M^=%Z100=%Z101=%Z102=%Z103=%Z104=^;</code></pre></div></details>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>N5/#1/#2/#3/#4</strong></span><br>
Write down <em>z</em>-a variable to the general section of the INI file:
</div><pre>        #1 – number <em>z</em>-variable for recording
        #2 – option number (any positive value)
        #3 – optional parameter - number <em>z</em>-variable for writing to the user section
        #4 – optional parameter - number <em>z</em>-a variable storing the file name (without the ".INI" part) can be given an absolute path.
<em>Note:</em> if you use option #4, you must use option #3.</pre>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>N6/#1/#2//#3/#4</strong></span><br>
Read <em>z</em>-variable from the general section of the INI file:
</div><pre>        #1 – number <em>z</em>-variable for saving text
        #2 – option number (any positive value)
        #3 – optional parameter - number <em>z</em>-variable to use a custom section instead of a common one.
        #4 – optional parameter - number <em>z</em>-a variable storing the file name (without the ".INI" part) can be given an absolute path.
<em>Note:</em> if you use option #4, you must use option #3.</pre>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-un-22"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show22"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">You can save and load global or local <em>z</em>-variables. The option number must be unique to the save procedure 
or download (one option number per <em>z</em>-variable). So, if you saved 
<em>z</em>-variable as option 123456, you can load the saved value into any 
another <em>z</em>-variable using the same option 123456.<br>
The value is not saved when saving the game, but is written to the external INI 
file (<em class="erm-legacy-file">wog,ini</em>, if parameter 4 is omitted). You can use this command without 
problems as instructions. So, to write the variable z-1, named 
"Main_variable", to file <em class="erm-legacy-file">My.var</em> to a folder <em class="erm-legacy-file">GAMES</em> (section "MyLocalSettings") 
with option 4, use:
<pre class="erm-example"><code class="language-erm">!!VRy1:S4;
!!VRz-1:S^Main_variable^;
!!VRz-2:S^MyLocalSettings^;
!!VRz-3:S^GAMES\My.var^;
!!UN:N5/z-1/y1/-2/-3;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-o"></span><span class="erm-anchor" id="command-o-x-y-level-hint-refresh"></span>O$1/$2/$3</strong></span><br>
Delete object
</div><pre>        $1 – X
        $2 – Y
        $3 – L (level)
<em>Additional syntax:</em>
<span class="erm-tone-red"><strong>O$1/$2/$3[/#4/#5]</strong></span>
Delete object in X/Y/L And the description. (if set)
        #4 – remove description?
	1 – yes
	0 – no (default)
        #5 - update?
	1 – yes (default)
	0 – no</pre>
<u></u> <span class="erm-anchor" id="ref-rec-un-23"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show23"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
In both cases X/Y/L means the lower right corner of the object.<br>
There are several tables for each feature on the map. And cross-references don't always exist. 
Heroes usually use coordinate searches. When you delete an object, some tables remain (storing information about the deleted object). 
If you then add a new object in the same location, the new information will be added to the table. 
But then, when the game needs to get information about this new object, it will start searching the table by position. 
Obviously, information about the old (deleted) object will be found first.<br>
I recommend setting up the old object, removing it, putting in a new one, and setting it up again.<br>
Please keep in mind that this problem may only apply to objects of the same type and may not occur in every case.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-p"></span><span class="erm-anchor" id="command-p-p-option"></span>P$</strong></span><br>
Set the behavior of level 8 dwellings<br>
         $ = 1 – 8th level housing (does not work after hiring)<br>
         $ = 0 – as usual<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-24"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show24"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Behavior like a normal dwelling means that the dwelling 
Level 8 will function like any other dwelling in the game, i.e. you must visit the dwelling to recruit creatures every week, 
and if they are of the 8th level, then they will only be added to the corresponding creatures of the eighth level in the corresponding castle with the corresponding dwelling of the 7th level.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-un-p2"></span><span class="erm-tone-red"><strong>P#/$</strong></span><br>
Installing WoG options<br>
         # - option number<br>
         $ - option status<br>
Some options:<br>
                   # = 0 – behavior of level 8 dwellings (see above)<br>
                   # = 1 – shooting tower experience: like SoD (1) or like WoG (0)<br>
                   # = 2 – you can leave creatures on the map (1 – you can’t, 0 – you can)<br>
                   # = 3 – commanders: 1 – prohibit, 0 – allow.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-un-25"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show25"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Now, if the card has internal scripts and does not have a command <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/#</strong>, 
The map launches under WoG 3.56 conditions (without commanders, etc.). But if the card has this command (it doesn't matter 
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/0</strong> or <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/1</strong>), the map is accepted as new and runs under WoG 3.57 conditions 
(so, all internal features of WoG are installed from the WoG configuration settings file or using the UN:P commands). 
The problem with the inability to enable commanders in the instructions has now been fixed <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/0</strong> when used in a timer trigger.</div></details>
<div>                   # = 4 – destruction of locks: prohibit (1) or allow (0)<br>
                   # = 5 – WoGify: none (0), all cards in WoG format (1), all cards in any format (2)<br>
                   # = 6 – heroes start with commanders or not (0 – with, 1 – without (must be hired)</div>
<u></u><span class="erm-anchor" id="ref-rec-un-26"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show26"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">For the commander to be hired in the town for 100 gold, instead of being automatically received by the hero at the beginning of the game, 
need to use <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">UN</span>:P6/1</strong> in front of the team <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">UN</span>:P3/0</strong>.</div></details>
<div>                   # = 7 – dwellings accumulate creatures: 0 – no, 1 – yes<br>
                   # = 8 – houses accumulate guards: 0 – no, 1 – yes<br>
                   # = 9 – creation of Sylvan Centaurs: 1 - allowed, 0 - not</div>
<u></u><span class="erm-anchor" id="ref-rec-un-27"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show27"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If the option is enabled, Sylvan Centaurs can be created for free by clicking <span class="erm-key">Ctrl</span> + <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> by a squad of Captain Centaurs or Noble Elves in the HERO WINDOW (!). 
An equal number of Centaurs and Elves will be replaced by an equal number of Sylvan Centaurs.<br>
That is 10 Noble Elves plus 10 Centaur Captains = 10 Sylvan Centaurs.<br>
<em class="erm-strong">Note:</em> Sylvan centaurs do not retain any experience from pre-merging centaurs or elves.</div></details>
<div>                   # = 10 – left units will join back (1) or not (0)</div>
<u></u><span class="erm-anchor" id="ref-rec-un-28"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show28"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">If active, units left by right click will rejoin the hero if he attacks them.<br>
<em class="erm-strong">Note:</em> all party experience will be lost when leaving the creatures.</div></details>
<div class="erm-paragraph">
WoGified and non-WoGified WoG maps without scripts will use 
WoG options above.<br>
Non-WoGified WoG maps with scripts will have disabled commanders 
default. To enable them you must use <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!UN</span>:P3/0</strong> after the start of the map. 
Installing this command with instructions - <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/0</strong> - Will NOT allow commanders on this map.<br>
To install mercenary commanders for 1000 gold, use the command <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">UN</span>:P6/1</strong> in front of the team <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">UN</span>:P3/0</strong>. You can paste both commands on one line:
<pre class="erm-example"><code class="language-erm">!!UN:P6/1 P3/0;</code></pre><br>
                   # = 900 – stack experience: 0 – disabled, 1 – enabled<br>
                   # = 901 – stack experience system: <br>
                       0 – each creature receives the full amount of experience;<br>
                       1 – high division: 
creatures of a small level receive more experience than creatures of a large level; <br>
                       2 - low division: high level creatures gain more experience than creatures 
small level; <br>
                       3 - divided equally among all creatures<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-29"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show29"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Currently the default experience system is 0. Other options have been used previously to find the best one to use. Even though 
rejected, they remain in the game so anyone can experiment with 
this option. If you decide to use an alternative system, you may 
You will also need to set a higher multiplier with the command <a href="../ea/#ref-rec-ea-h">EA:H</a> for human players, and 
<a href="../ea/#ref-rec-ea-a">EA:A</a> (it's also possible
<a href="../ea/#ref-rec-ea-s">EA:S</a> and/or <a href="../ea/#ref-rec-ea-t">EA:T</a>) for 
computer players, because experience will begin to be shared among all creatures in battle, and 
will be significantly less.</div></details>
<div class="erm-paragraph">                   
# = 902 – you can throw artifacts onto the map: 0 – no, 1 – yes<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-30"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show30"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can use the old option 2 and the new 902 together:
<div class="table-wrap erm-reference-table"><table width="45%">
<tr>
	<td colspan="2">
	<div class="erm-align-center erm-paragraph">Option number</div></td>
	<td class="erm-align-center" rowspan="2" width="83%">Effect</td>
</tr>
<tr>
	<td colspan="2">
	<div class="erm-align-center erm-paragraph">Status</div></td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">
	<div class="erm-align-center erm-paragraph">2</div></td>
	<td class="erm-align-center" width="9%">902</td>
	<td class="erm-align-center" width="83%"> </td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">0</td>
	<td class="erm-align-center" width="9%">0</td>
	<td class="erm-align-center" width="83%">you can leave troops</td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">0</td>
	<td class="erm-align-center" width="9%">1</td>
	<td class="erm-align-center" width="83%">you can leave troops or artifacts</td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">1</td>
	<td class="erm-align-center" width="9%">0</td>
	<td class="erm-align-center" width="83%">you can't leave anything</td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">1</td>
	<td class="erm-align-center" width="9%">1</td>
	<td class="erm-align-center" width="83%">you can leave artifacts</td>
</tr></table></div></div></details>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-un-cheat"></span>
                   
# = 903 – cheat codes and cheat menu: 0 – allow, 1 – disable<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-31"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show31"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Disables cheats and cheat menus (if enabled). 
If the cheat menu is enabled, it will be shown even if disabled by this option, but will not have any effect.<br>
<em>Note</em>: Although cheats are disabled in multiplayer, this option will prevent players from using cheats when loading through single player.</div></details><br>
<div>                   
<span class="erm-anchor" id="ref-rec-un-p904"></span># = 904, 905 – settings for the appearance of error messages. If 1, any message 
no error message will appear, but option 905 will be set to 1 in any case. 
If option 904 = 0, a message will be shown and option 905 will be set to 1. 
Moreover, if the message is canceled, script execution will not be terminated (in 
section of the current trigger). So, you can use "risky" commands.
<u></u><span class="erm-anchor" id="ref-rec-un-32"></span><details class="erm-comment"><summary>
Example (<span class="erm-anchor" id="ref-rec-un-show32"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body"><blockquote class="erm-note">
	<pre class="erm-example"><code class="language-erm">!?FU...
...
!!UN:P904/1 P905/0; cancel error message
!!HE-1:N?v99; get hero number in v99
!!UN:P905/?i;
!!FU&amp;i&gt;0:E; exit if error

If you are using the standard version..
!?FU...
...
!!HE-1:N?v99;
..the error will appear if hero is not involved in the trigger.</code></pre></blockquote></div></details></div><br>
<div>                   
# = 906 – creatures gain experience: 0 – they can get it, 1 – they can’t.<br>
<em>Note:</em> if you set this option to 1 and the experience system will be 
is enabled, creatures will not gain experience in battles, but you will be able to set 
experience through ERM.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-q"></span><span class="erm-anchor" id="command-q-1-r"></span>Q#</strong></span><br>
Win or lose the game for the CURRENT player<br>
         # = 0 – lose<br>
         # = 1 – win<br>
<em>Extended syntax:</em><br>
<span class="erm-tone-red"><strong>Q#/1</strong></span><br>
If you use the second phantom parameter, winning or losing the game is done by other functions.<br>
Use if the previous one does not work.<br>
<u>
</u><br></div><span class="erm-anchor" id="ref-rec-un-33"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-un-show33"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!UN:Q0/1; - loss of the current player
!!UN:Q1/1; - victory of the current player</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-r"></span>R#</strong></span><br>
Refresh screen<br>
         # = 1 – update the map and hero screen (everything on the right side)<br>
         # = 2 – update the resource line<br>
         # = 3 – refresh inside the hero window. 
…</div><span class="erm-anchor" id="ref-rec-un-44"></span><details class="erm-comment"><summary>More details</summary><div class="erm-comment-body">
<blockquote class="erm-margin-top-zero erm-note"><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!UN</span>:R3/#;</strong> - refresh screen <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero #</a> (-1 – for the current one).<br>
The command works ONLY while the hero window is open (i.e. inside the trigger <a href="../../triggers/cm/#ref-tr-cm">!?CM2</a>).<br>
Trying to use this command anywhere else will cause the game to crash.</blockquote></div></details>
<div>         # = 4 – update the town screen (do not use outside the town screen!)<br>

<span class="erm-anchor" id="ref-rec-un-49"></span><details class="erm-comment"><summary><strong>Comment</strong> (<span class="erm-anchor" id="ref-rec-un-show49"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">Unfortunately, the base ERM does not have a command to update the hero encounter screen.<br>
However, there is a ready-made solution for <a href="../../compatibility/#ref-era-index">ERA</a> - team <a href="../sn/#ref-rec-sn-era-d">SN:D</a>.</div></details></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-r5"></span><span class="erm-anchor" id="command-r5-r6-r7"></span>R5/$1/$2</strong></span><br>
Set cursor type<br>
         $1 –
<a href="../../tables/cursors/#ref-form-mousepointers" data-context="true">cursor type</a><br>
         $2 – cursor subtype<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-34"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show34"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Show any dialog to change the cursor back to an arrow. 
If you set any cursor, it will be returned to normal after the command <a href="./#ref-rec-un-r7">UN:R7</a>.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-r6"></span>R6/$</strong></span><br>
Wait<br>
         $ – time in ms (1000 = 1 second)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-r7"></span>R7/$1/$2<br>
R7/$1</strong></span><br>
Mouse cursor: hide and deactivate<br>
         $1 – show (0) or hide (1) cursor<br>
         $2 – allow (0) or disable (1) cursor changes<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-35"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show35"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	When you visit any object (for example, a fishing well), trigger <a href="../../triggers/ob/#ref-tr-ob">!?OB</a> starts working, the cursor disappears. So if your script is long enough, you can set the cursor to be an hourglass 
manually. Then, to return the cursor to the default, you need to do something like the following:<br>
         - start a new game<br>
         - load the game<br>
         - any message (possible with ERM)<br>
         - any extended WoG dialogue<br>
<pre class="erm-example"><code class="language-erm">So, for a fishing well it could be like this:
!!UN:R5/1/1; hourglass cursor
!!UN:R7/0/1;
Then if you show a message or question:
!!IF:...
cancel the cursor again:
!!UN:R5/1/1;
!!UN:R7/0/1;
at the end of the script you can include the cursor:
!!UN:R7/0/0;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-s"></span>S#1/#2/#3/#4/#5</strong></span><br>
Open (show) part of the map (area - circle)<br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L (level)<br>
         #4 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a><br>
         #5 – radius<br>
<em class="erm-strong">Note:</em> DO NOT use this command to show the dungeon in 
single-level map (this will lead to critical errors in drawing)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-t"></span><span class="erm-anchor" id="command-t-town-tier-upgrade-monster-u-type-subtype-count"></span>T#1/#2/#3/$</strong></span><br>
Set up a recruitable creature in the castle<br>
         #1 – <a href="../../tables/towns/#ref-form-towns" data-context="true">town type</a> 
(0..8)<br>
         #2 – level (0..6)<br>
         #3 – basic (0) or advanced 
(1)<br>
         $ – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-36"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show36"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">The team works in 
	all towns, including AI. You can set the command as an instruction. Remember that you can enhance 
"importance" of a creature for AI by setting the AI value with the command <a href="../ma/#ref-rec-ma-i">!!MA:I</a>. 
Additional resources are expected only for level 7 housing.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-u"></span><span class="erm-anchor" id="command-u-type-subtype-ordinal-vindex"></span>U#1/#2/?$</strong></span><br>
Count all objects on the map<br>
         #1 –
<a href="../../tables/objects/#ref-form-objects" data-context="true">object type</a><br>
         #2 –
<a href="../../tables/objects/#ref-form-objects" data-context="true">object subtype</a> (-1 – any)<br>
         $ – number of objects of type 
#1, subtype #2 (check or receive only)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-46"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show46"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you are counting towns, remember that at the beginning of the game the counter does not count random towns 
(since they have <a href="../../tables/objects/#ref-form-objects" data-context="true">type</a> 77, not 98). Be careful.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:U54/i/?n;
The variable n now stores the number of objects of type 54 and subtype i.</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-u1"></span>U#1/#2/#3/#4</strong></span><br>
Get object coordinates<br>
         #1 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object type</a><br>
         #2 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object subtype</a> (-1 – any)<br>
         #3 – object number (1…last 
object; -1 – from the first object, -2 – from the last object)<br>
         #4 – <em>v</em>-variable with coordinates: v[#4]=X; v[#4+1] = Y; v[#4+2] = L<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:U54/i/3/324; 
v324, v325, v326 now contain the coordinates of object type 54, subtype i and number 3.</code></pre>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-37"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show37"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
All objects are counted like this: from left to right, top to bottom; Surface, and then Underground.<br>
<div class="table-wrap erm-reference-table"><table class="erm-table-offset">
<tr><td>0</td><td>1</td><td>3</td><td>6</td></tr>
<tr><td>2</td><td>4</td><td>7</td></tr>
<tr><td>5</td><td>8</td></tr>
<tr><td>9</td></tr>
</table></div>
</div></details>
<u></u><br><span class="erm-anchor" id="ref-rec-un-38"></span><details class="erm-comment"><summary>Quick search technique (<span class="erm-anchor" id="ref-rec-un-show38"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you are using object search syntax 
UN:Utype/sub item/number/number_variable, you can set the number to -1. This 
means that the object will be searched based on coordinates 
the previous found object of the same type.<br>
In standard syntax (number = 1...) UN:U checks all objects of this type 
until you find the number you are looking for. This is a long process on large maps, especially 
if it is a frequently occurring object.<br>
With the new syntax (number = -1) the coordinates are returned to 
v[variable_number]/v[variable_number+1]/v[variable_number+2], and search 
The next object is not traced from the beginning of the map, but from the last one found. Let me explain 
- the process goes faster, but requires your NOT intervention in the variables with 
coordinates of the last found object.<br>
<u>
</u><br><span class="erm-anchor" id="ref-rec-un-39"></span><details class="erm-comment"><summary>Example 1 (<span class="erm-anchor" id="ref-rec-un-show39"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<ul><li>This script works fine
<pre class="erm-example"><code class="language-erm">!!UN:U53/-1/1/1; (get the coordinates of mine 1: v1/v2/v3)...
!!VRv1:S99; (change v1 to something)
...
!!UN:U53/-1/2/1; (get the coordinates of mine 2: v1/v2/v3)
...</code></pre></li>
<li>This script works <em>wrong!</em> v1 has been changed
<pre class="erm-example"><code class="language-erm">!!UN:U53/-1/1/1; (get the coordinates of mine 1: v1/v2/v3)
...
!!VRv1:S99; (change v1 to something)
...
!!UN:U53/-1/-1/1; (get the coordinates of the 'next' mine (2): v1/v2/v3)
...</code></pre></li>
<li>This script works fine
<pre class="erm-example"><code class="language-erm">!!UN:U53/-1/1/1; (get the coordinates of mine 1: v1/v2/v3)
... (v1/v2/v3 Not changed)
!!UN:U53/-1/-1/1; (get the coordinates of the 'next' mine (2): v1/v2/v3)
... (v1/v2/v3 Not changed)
!!UN:U53/-1/-1/1; (get the coordinates of the 'next' mine (3): v1/v2/v3)
...</code></pre></li>
<li>This script works fine
<pre class="erm-example"><code class="language-erm">!!VRv1:S-1; (start searching from the first object on the map)
!!UN:U53/-1/-1/1; (get the coordinates of the 'next' mine (1): v1/v2/v3)
... (v1/v2/v3 Not changed)
!!UN:U53/-1/-1/1; (get the coordinates of the 'next' mine (2): v1/v2/v3)
... (v1/v2/v3 Not changed)
!!UN:U53/-1/-1/1; (get the coordinates of the 'next' mine (3): v1/v2/v3)
...</code></pre></li></ul></div></details>
<u>
</u><br><span class="erm-anchor" id="ref-rec-un-40"></span><details class="erm-comment"><summary>Example 2 (<span class="erm-anchor" id="ref-rec-un-show40"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE

!#TM1:S1/999/1/1; set timer 1 for red

!?TM1;
!!UN:U16/-1/?v100;
!!VRv1:S-1;
!!IF:M^Found %V100 of creature banks. Now let's go through everything:^;
!!DO123/1/v100/1:P;

!!IF:M^A veil envelops you...^;
!!UN:H72/72/1/1/100; close to red

!!VRv1:S-2;
!!IF:M^Now in reverse order^;
!!DO124/1/v100/1:P;

!?FU123;
!!UN:U16/-1/-1/1;
!!UN:Sv1/v2/v3/0/3; Open for red
!!UN:Lv1/v2/v3/100; Move gaze 100 ms

!?FU124;
!!UN:U16/-1/-2/1;

!!UN:Sv1/v2/v3/0/3; open for red
!!UN:Lv1/v2/v3/100; move gaze 100 ms</code></pre>
The script will scroll through all the banks of creatures in front of you in normal and reverse order.</div></details>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-v"></span><span class="erm-anchor" id="command-v-1-2-3-4-5-6-7-x-1-2"></span>V?$1/?$2</strong></span><br>
Get the version of WoG and the ERM you are using.<br>
         $1 – WoG version (3.58 = 358)<br>
         $2 – ERM version (2.81 = 281)<br>
<em class="erm-strong">Note:</em> for ERA game version = 400, ERM version = [ERA version] × 1000<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-41"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show41"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can only check or get the value, but not set.<br>
Use the instruction command to check if the player has the required version 
and then show a message to the player about the outdated version of the expansion, if so. 
This is better than having the player walk halfway through the map before 
how he stumbles upon a script that is incorrect for this version and does not finish the map.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!#UN:V?y1/?y2;
!#IF|y1&lt;358/y2&lt;280:M^For this map to work, you need WoG no older than 3.58 and ERM version no older than 2.80.
Please update your files.^;</code></pre></div></details>
<hr><div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-un-v2"></span>
<span class="erm-tone-red"><strong>V?$1/?$2/?$3/?$4/?$5</strong></span><br>
Get the version of WoG and the ERM you are using. Advanced syntax:
</div><pre>        $1 – WoG version
        $2 – version of the ERM used
        $3 – one or more people in the game
	= 1 – one person
	= 2 – more than one
        $4 – one or more PCs in the game
	= 0 – one PC
	= 1 – more than one
        $5 – game type
	= 0 – one player
	= 1 – IPX
	= 2 – TCP/IP
	= 3 – Hot Seat
	= 4 – Direct Connect
	= 5 – modem
<em>Extended syntax:</em><span class="erm-anchor" id="ref-rec-un-v3"></span>
<span class="erm-tone-red"><strong>V?$1/?$2/$?3/?$4/?$5/?$6/?$7</strong></span>
        $1…$5 – see above
        $6 – cheat menu: enabled (1) or disabled (0)
        $7 – use of cheats: yes (1) or not (0)</pre>
<u></u> <span class="erm-anchor" id="ref-rec-un-42"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show42"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	You can't turn cheat status on or off, but you can check it.<br>
The codes do not work in multiplayer. If you have canceled the codes, this will work for the keyboard codes and the cheat menu 
(even if it was enabled)</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-w"></span>W#1/#2/#3/#4/#5</strong></span><br>
Make the water line accessible to the hero, but not to the boat.<br>
         #1 – X1<br>
         #2 – Y1<br>
         #3 – X2<br>
         #4 – Y2<br>
         #5 – L (level)<br>
<em>Additional syntax:</em><br>
<span class="erm-tone-red"><strong>W#X1/#Y1/#X2/#Y2/#L/$</strong></span><br>
Place/remove path (logs) on water<br>
         $ – place (1) or remove (0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-x"></span>X?$1/?$2</strong></span><br>
Get map size<br>
         $1 – number of the variable where the size will be entered (X=Y)<br>
         $2 – equals 0 (one level) and 1 (Underground/Surface).<br>
You can only check or receive.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-43"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-un-show43"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#UN:X?i/?j;
!#VRz1:S^one level only^;
!#VRz1&amp;j=1:S^two levels^;
!#IF:M^Map has %Z1 and size X=%Vi Y=%Vi^;</code></pre>
</div></details>
<hr>














</div>
</div>
</section>
:::

## Related reference {#related}

[UN:C](../../un-c/) · [SN](../../receivers/sn/) · [Constants](../../framework/constants/)



## Related commands and tables {#reference-links}

[Artifact table](../../tables/artifacts/) · [Artifact slots](../../tables/artifact-slots/) · [Combination artifacts](../../tables/combination-artifacts/) · [Resources](../../tables/resources/) · [Players (OW)](../ow/#command-r) · [ERM debugging and compatibility](../../compatibility/) · [UN:C — memory access](../../un-c/) · [ERM examples](../../examples/) · [Secondary skills](../../tables/secondary-skills/) · [Creature table](../../tables/creatures/) · [Hero table](../../tables/heroes/) · [Hero specialty pictures](../../tables/specialty-pictures/) · [Player colors](../../tables/players/) · [Game object table](../../tables/objects/) · [Terrain types](../../tables/terrain/) · [Map artifacts and resources (AR)](../ar/) · [Creature dwellings on the map](../../tables/creature-dwellings/) · [Creature dwellings (DW)](../dw/) · [Garrison (GR)](../gr/) · [Map objects (OB)](../ob/#command-t-u) · [Mines (MN)](../mn/) · [Two-way monoliths](../../tables/two-way-monoliths/) · [Mine types](../../tables/mines/) · [Neutral map monsters (MO)](../mo/) · [Sign and ocean bottle (SG)](../sg/) · [Shipyard (SY)](../sy/) · [Spell table](../../tables/spells/) · [Towns (CA)](../ca/) · [University (UR)](../ur/) · [Witch hut (WH)](../wh/) · [Campfire (FR)](../fr/) · [Swan pond (SW)](../sw/) · [Map skeleton (SK)](../sk/) · [Local map events (LE)](../le/) · [Lean-to (LN)](../ln/) · [Learning stone (ST)](../st/) · [Shrine of magic (SR)](../sr/) · [Magic spring (SP)](../sp/) · [Mystical garden (GD)](../gd/) · [Obelisk (MT)](../mt/) · [Pyramids and new objects (PM)](../pm/) · [Scholar (SC)](../sc/) · [Map objects (OB)](../ob/#command-c) · [Treasure chest (CH)](../ch/) · [Tree of knowledge (KT)](../kt/) · [Wagon (WG)](../wg/) · [Warrior tomb (WT)](../wt/) · [Water wheel (WM)](../wm/) · [Windmill (ML)](../ml/) · [Pandora box (PA)](../pa/) · [Heroes (HE)](../he/#command-n-o-1-p-1-2-3-4) · [Hero experience thresholds](../../tables/hero-levels/) · [Saving and loading (GM)](../../triggers/gm/) · [Map objects (OB)](../ob/#command-r-s) · [Town building IDs](../../tables/buildings/) · [Creature experience and bonuses (EA)](../ea/#command-a-h-s-t) · [Mouse clicks (CM)](../../triggers/cm/) · [ERA services, memory and sound (SN)](../sn/#command-d-o-x-y-level) · [Mouse cursors](../../tables/cursors/) · [Object visits (OB)](../../triggers/ob/) · [Town types](../../tables/towns/) · [Creature-type attributes (MA)](../ma/#command-i)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.18, +](../../compatibility/#era3-v-3-9-18-l245) — Added "Tools/UN C to bin" utility for conversion of UN:C ERM commands into binary patches.
- [ERA 3.9.16, +](../../compatibility/#era3-v-3-9-16-l263) — Introduced another directory for ERM global library scripts: "Data/s/lib_end". Scripts from this directory will be loaded after all other map/global/library scripts. Likewise "lib" directory, these scripts do not depend …
- [ERA 3.9.16, *](../../compatibility/#era3-v-3-9-16-l387) — From now on, Era always asks permission to load global scripts on map start or scripts reloading if map has internal scripts. The permission text was changed from "skip" to "load" by default. The following language key m…
- [ERA 3.9.14, +](../../compatibility/#era3-v-3-9-14-l662) — Added support for "OnGameEnter" and "OnGameLeave" events in network games. Previously savegame transfer and loading on remote side used to trigger "OnAfterSavegameLoad", but not "OnGameLeave" + "OnGameEnter". That's why …
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l761) — Added GAME_TYPE_XXX constants to Era Erm Framework (see UN:V 5-th parameter).
- [ERA 3.8.1, +](../../compatibility/#era3-v-3-8-1-l1524) — Added new Javascript utility to convert UN:C patches into binary patches. See "Tools/UncToBin/index.html".
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3079) — Improved UN:U command. It does not raise error if no more objects are found, but sets x-coordinate to -1 instead. Thus no premature objects counting is required. A new syntax with 6 parameters was added to allow using ar…
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3104) — Added exported function FindNextObject (ObjType, ObjSubtype: integer; var x, y, z: integer; Direction: integer): integer; stdcall; It works the same as UN:U with fast search syntax, but does not raise error on no more ob…
- [ERA 3.1.0, -](../../compatibility/#era3-v-3-1-0-l3144) — Fixed UN:C. It didn't accept negative size argument, while -1, -2 and -4 are valid sizes. Prefer to use (UNC_XXX) constants to specify valid data type.
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4038) — Enhanced !!UN:C command. It supports all d-modifiers now. New syntax with offset from address is available: !!UN:C#addr/#offset/#size/$value; Era always calls GetRealAddr for #addr, thus !!UN:C supports all extended/relo…
<!-- ERA3-GENERATED:END -->
