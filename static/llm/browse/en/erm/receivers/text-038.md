# General game operations (UN)

ID: erm.receivers.un
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/un/
Part: 1/4
Source references: old-help:rec-un.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.un 1 -->
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
up to 32 entries. So it is possible to set up to 32 combo artifacts. All 
standard combos are already written in the table (first 12 lines)</li>
<li>$ = number of the artifact that will appear during assembly.</li>
<li>You can check whether the combo artifact table row is empty or not:
<pre class="erm-example"><code class="language-erm">!!UN:A5/?v100/0/0;</code></pre>
Get the number of the combo artifact in line 5 of the combo table in v100. Two zeros at the end 
necessary for the correct operation of the command. In check and get syntax 
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
<span class="erm-anchor" id="ref-rec-un-q1"></span><blockquote class="erm-tone-quote erm-note"><strong>Structures</strong> – data arrays in the game memory, for convenient storage of information and reading/writing by program code. Most ERM commands modify data within these structures (tables).</blockquote>
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
At the moment, the only ERM command that 
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
You must set <em>z</em>-a variable with the appropriate text (you can 
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
        #2 – what to set
	1 - small picture (visible in the hero meeting window, etc.)
	2 – description
	3 – picture
        #3 is:
	– number <em>z</em>-variable (0 – restore to default), if #2 = 2
	– picture number (<a href="../../tables/specialty-pictures/#ref-form-heroesspec" data-context="true">0..356</a>), if #2 = (1 or 3)</pre>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>

<!-- llm:end erm.receivers.un 1 -->

