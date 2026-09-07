---
{"title":"Spell attributes (SS)","summary":"SS receiver: spell attributes, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Spell attributes (SS)"}
---

## Receiver SS {#ref-rec-ss}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ss-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>SS</strong><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(spell support)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-ss-red"></span><span class="erm-tone-red">!!SS#:XXXX;</span> - allows you to change parameters 
<a href="../../tables/spells/#ref-form-spell" data-context="true">spells</a> #.</strong></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-a"></span><span class="erm-anchor" id="command-a-n-d-w"></span><span class="erm-tone-red"><strong>A$</strong></span><br>
Set short name<br>
        $ is a text variable.<br>
See comment <a href="./#ref-rec-ss-co">below</a>.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-c"></span><span class="erm-anchor" id="command-c-e-i"></span><span class="erm-tone-red"><strong>C#/$</strong></span><br>
Set/check/get the mana amount.<br>
        # – level (0..3, depends on knowledge of the school of magic)<br>
        $ – amount of mana for witchcraft.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-d"></span><span class="erm-tone-red"><strong>D#/$</strong></span><br>
Set/check/get description from<br>
        # – level (0..3, depends on knowledge of the school of magic)<br>
        $ is a text variable.<br>
See comment <a href="./#ref-rec-ss-co">below</a></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-e"></span><span class="erm-tone-red"><strong>E#/$</strong></span><br>
Set/check/get effect number<br>
        # – level (0..3, depends on knowledge of the school of magic)<br>
        $ – effect<br>
Different magics have different effects</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-f"></span><span class="erm-anchor" id="command-f"></span><span class="erm-tone-red"><strong>F$</strong></span><br>
Set/check/get flags.<br>
        $ – 
</div><span class="erm-anchor" id="ref-rec-ss-1"></span><details class="erm-comment"><summary>flags</summary><div class="erm-comment-body"><blockquote class="erm-note">
<div class="table-wrap erm-reference-table"><table class="erm-table-zebra" width="100%">
<span class="erm-anchor" id="ref-rec-ss-n2"></span><tr class="erm-tone-purple erm-strong"><td width="5%">#</td><td>Description</td></tr>
<tr><td>1</td><td>combat spell</td></tr>
<tr><td>2</td><td>spell adventure cards</td></tr>
<tr><td>4</td><td>has a time limit</td></tr>
<tr><td>8</td><td>spell creatures</td></tr>
<tr><td>16</td><td>target - one stack</td></tr>
<tr><td>32</td><td>target - one shooting stack</td></tr>
<tr><td>64</td><td>has massive impact at the expert level</td></tr>
<tr><td>128</td><td>target - any place</td></tr>
<tr><td>256</td><td>goal is an obstacle</td></tr>
<tr><td>512</td><td>spell with damage</td></tr>
<tr><td>1024</td><td>spell mind</td></tr>
<tr><td>2048</td><td>friendly and has masses. impact</td></tr>
<tr><td>4096</td><td>cannot be applied to combat vehicles</td></tr>
<tr><td>8192</td><td>spell from artifact</td></tr>
<tr><td>16384</td><td>protecting spell</td></tr>
<tr><td>32768</td><td>AI (Meteor Shower, Magic Arrow, Ice Bolt, Lightning Bolt, 
	Implosion, Frost Ring, Fireball, Thunder of the Titans, not Chain Lightning, not Inferno)</td></tr>
<tr><td>65536</td><td>AI (area impact)</td></tr>
<tr><td>131072</td><td>AI (Armageddon, Destroy Undead, Death Wave)</td></tr>
<tr><td>262144</td><td>AI (Bless, Curse, Bloodlust, Precision, Weakness, 
	Stone Skin, Disrupting Ray, Prayer, Mirth, Sorrow, Luck, Misfortune, Haste, 
	Slow, Slayer, Frenzy, Clone, Blind, Teleport, Counterstrike, Berserk, 
	Shield, Air Shield, Fire Shield, Elemental protection, Anti-Magic, 
	Remove Spells, Mirror, Cure)</td></tr>
<tr><td>524288</td><td>AI (number/ownership of creatures may change)</td></tr>
<tr><td>1048576</td><td>AI (Call boat, Fly, Water Walk, Dimension Door, 
	Town Portal, Earthquake, Thunder of the Titans)</td></tr>
</table></div></blockquote></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-h"></span><span class="erm-anchor" id="command-h"></span><span class="erm-tone-red"><strong>H#/$</strong></span><br>
Set/check/get a chance to appear in the town<br>
        # – <a href="../../tables/towns/#ref-form-towns" data-context="true">type</a> towns<br>
        $ – chance of appearance</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-i"></span><span class="erm-tone-red"><strong>I#/$</strong></span><br>
Set/check/get significance 
for AI<br>
        # – level (0..3, depends on knowledge of the school of magic)<br>
        $ – value for AI</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-l"></span><span class="erm-anchor" id="command-l-o-p"></span><span class="erm-tone-red"><strong>L$</strong></span><br>
Set/check/get spell level<br>
        $ – level</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-n"></span><span class="erm-tone-red"><strong>N$</strong></span><br>
Set/check/get the name of the spell<br>
        $ – text <em>z</em>-variable</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-o"></span><span class="erm-tone-red"><strong>O$</strong></span><br>
Set/check/get target type.
</div><pre>        $ – type:
	= 1 – target - friendly stack
	= -1 – target is enemy stack
	= 0 – any point</pre>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-p"></span><span class="erm-tone-red"><strong>P$</strong></span><br>
Set/check/get the Spell Power.<br>
Different spells use this meaning differently</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-s"></span><span class="erm-anchor" id="command-s-x"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
Set/check/get bits of magic schools.
</div><pre>        $ – flag (only the first 4 bits are used):
	= 1 – school of air magic
	= 2 – school of fire magic
	= 4 – school of water magic
	= 8 – school of earth magic</pre>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-w"></span><span class="erm-tone-red"><strong>W$</strong></span><br>
Set/check/get a sound spell file<br>
        $ – <em>z</em>-variable with file name<br>
See comment <a href="./#ref-rec-ss-co">below</a></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-x"></span><span class="erm-tone-red"><strong>X$</strong></span><br>
Set/check/get index DEF animation<br>
        $ – <a href="../../tables/combat-animations/#ref-form-defspell" data-context="true">index</a><br></div>
<hr>
<div class="erm-paragraph"><u><strong><span class="erm-anchor" id="ref-rec-ss-co"></span>Comments on options A, N, D, W</strong></u>:<br>
You may not get the default filename, but you can set it (and check later) via <em>z</em>-variables.<br>
You can use standard <em>z</em>-variables [1..1000] or static from the ERT file [&gt;1000].<br>
If you set a name and then check it you will get a number <em>z</em>-variable of the set name.<br>
If you haven't set a name, you will get 0.</div>


















</div>

</div>
</section>
:::

## Secondary Skills {#ref-cont-sschange}

:::erm
<section class="erm-reference" lang="en">
<div>
<div><h3 class="erm-align-center">Changing Secondary Skills</h3>
<span><span class="erm-anchor" id="ref-cont-sschange-red"></span><span class="erm-tone-red">
Attention!</span> Unsafe script</span></div>
<div class="erm-paragraph">All skill parameters are recorded in the table (see. <a href="./#ref-cont-sschange-tab">below</a>), and when setting a skill level value other than 0..3, 
the game will take the parameters of neighboring skills.</div>
<div class="erm-paragraph">This is a table of skill parameters by level used in the game (for skills that use percentage values).<br>
There are four values for each skill: 0 - none, 1 - basic, 2 - advanced, 3 - expert.<br>
If you set a skill above (or below) this value, the game will look at the parameters next (earlier) in the table.<br>
<br>
For example, if the Archery skill is set to level 7, the game will read the level 3 Attack value and give a 30% bonus. And if you set the Necromancy level to 58, 
then after the battle you will raise all the corpses of the enemy, i.e. 1 skeleton for 1 enemy unit. By the way, values above 100 for Necromancy do not matter, for example, 
at a skill level of 60, skeletons will not rise at all, and at 59 - the same as at 58.</div>
<div class="erm-paragraph">Calculation: so that the Expert's Armorer reduces damage by 60% (according to the values, the Expert's Eagle Eye is suitable, 
located further down the table), you need to set its level to<br>
<strong>[No._Eagle_Eye_expert_in_table]</strong> minus <strong>[No._Defense_expert_in_table]</strong>; those. 
32-24=8;
<pre class="erm-example"><code class="language-erm">!!HE#:S23/8;</code></pre>
If you want the Armorer Expert to reduce damage by 25% (the values of the Advanced Archery located earlier in the table are suitable), you need to set its level to<br>
<strong>[No_Advanced_shooting_in_table]</strong> minus <strong>[No._Defense_expert_in_table]</strong>; those. 15-24=-9;
<pre class="erm-example"><code class="language-erm">!!HE#:S23/-9;</code></pre></div>
<span class="erm-anchor" id="ref-cont-sschange-q2"></span><blockquote class="erm-tone-quote erm-note"><strong>The only problem</strong> – the game will incorrectly show the skill in the hero window or even <span class="erm-anchor" id="ref-cont-sschange-dred"></span><span class="erm-tone-red">WILL FLY OUT.</span>
<br>
Can use different skill values with combat skills by applying an offset in the trigger <a href="../../triggers/ba/#ref-tr-ba">!?BA0</a> and deleting it in the trigger <a href="../../triggers/ba/#ref-tr-ba">!?BA1</a>.<br>
This method will allow you to avoid mistakes and give you the opportunity to level up your skills normally if you gain a level after the battle.</blockquote>
<strong>Note:</strong> '*' in the table means that the corresponding skill was guessed from the values and was not actually tested.<br>
 
<span class="erm-anchor" id="ref-cont-sschange-tab"></span>
<div class="table-wrap erm-reference-table"><table class="erm-align-center" width="80%">
<tr><td><strong>1. </strong>Necromancy<br>
1) 0<br>
2) 10<br>
3) 20<br>
4) 30</td>
<td><strong>2. ?<br></strong>5) 0<br>
6) 0<br>
7) 0<br>
8) 0</td>
<td><strong>3. ?<br></strong>
9) 0<br>
10)0<br>
11)0<br>
12)0</td></tr>
<tr><td><strong>4. </strong>Archery<br>
13) 0<br>
14) 10<br>
15) 25<br>
16) 50</td>
<td><strong>5. </strong>Offence<br>
17) 0<br>
18) 10<br>
19) 20<br>
20) 30</td>
<td><strong>6. </strong>Armorer<br>
21) 0<br>
22) 5<br>
23) 10<br>
24) 15</td></tr>
<tr><td><strong>7. ?</strong><br>
25) 0<br>
26) 0<br>
27) 0<br>
28) 0</td>
<td><strong>8. </strong>Eagle Eye*<br>
29) 0<br>
30) 40<br>
31) 50<br>
32) 60</td>
<td><strong>9. </strong>Diplomacy*<br>
33) 0<br>
34) 20<br>
35) 40<br>
36) 60</td></tr>
<tr><td><strong>10. </strong>Resistance<br>
37) 0<br>
38) 5<br>
39) 10<br>
40) 20</td>
<td><strong>11. </strong>Learning<br>
41) 0<br>
42) 5<br>
43) 10<br>
44) 15</td>
<td><strong>12. </strong>Logistics*<br>
45) 0<br>
46) 10<br>
47) 20<br>
48) 30</td></tr>
<tr><td><strong>13. </strong>Sorcery<br>
49) 0<br>
50) 5<br>
51) 10<br>
52) 15</td>
<td><strong>14. </strong>Intelligence*<br>
53) 0<br>
54) 25<br>
55) 50<br>
56) 100</td>
<td><strong>15. </strong>First Aid*<br>
57) 0<br>
58) 100<br>
59) 200<br>
60) 300</td></tr>
<tr><td colspan="3" height="40"><strong> The following values are not similar to the table part, but still work</strong></td></tr>
<tr><td><strong>16. ?</strong><br>
61) 0<br>
62) 0<br>
63) 0<br>
64) 0</td>
<td><strong>17. ?</strong><br>
65) 0<br>
66) 0<br>
67) 0<br>
68) 0</td>
<td><strong>18. ?</strong><br>
69) 0<br>
70) 0<br>
71) 0<br>
72) 0</td></tr>
<tr><td><strong>19. ?</strong><br>
73) 0<br>
74) 0<br>
75) 105<br>
76) 5</td>
<td><strong>20. ?</strong><br>
77) 0<br>
78) 0<br>
79) 0<br>
80) 0</td>
<td><strong>21. ?</strong><br>
81) 0<br>
82) 0<br>
83) 0<br>
84) 0</td></tr>
<tr><td><strong>22. ?</strong><br>
85) 0<br>
86) 0<br>
87) 0<br>
88) 0</td>
<td><strong>23. ?</strong><br>
86) 0<br>
87) 0<br>
88) 0<br>
89) 30</td>
<td><strong>24. ?</strong><br>
90) 15<br>
91) 90<br>
92) 150<br>
93) 0</td></tr>
<tr><td><strong>25. ?</strong><br>
94) 0<br>
95) 0<br>
96) 0<br>
97) 0</td>
<td><strong>26. ?</strong><br>
98) 0<br>
99) 0<br>
100) 25<br>
101) 50</td>
<td><strong>27. ?</strong><br>
102) 75<br>
103) 100<br>
104) 100<br>
105) 100</td></tr>
<tr><td><strong>28. ?</strong><br>
106) 0<br>
107) 0<br>
108) 0<br>
109) 0</td>
<td><strong>29. ?</strong><br>
110) 0<br>
111) 0<br>
112) 0<br>
113) 0</td>
<td></td></tr>
</table></div>

<div class="erm-paragraph">Further meanings can also be used, only the explored part is given here.</div>
</div>
</section>
:::

## Related reference {#related}

[SN](../../receivers/sn/)



## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/) · [Spell table](../../tables/spells/) · [Town types](../../tables/towns/) · [BM:V animations](../../tables/combat-animations/)
