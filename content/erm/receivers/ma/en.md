---
{"title":"Creature-type attributes (MA)","summary":"MA receiver: creature-type attributes, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Creature-type attributes (MA)"}
---

## Receiver MA {#ref-rec-ma}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ma-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MA</strong> (characteristics of creatures)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-ma-red"></span><span class="erm-tone-red">!!MA:XXXX;</span> - general change in characteristics
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creatures</a> a certain type for all creatures on the map of that type.</strong><br>
All commands can be set, checked, and retrieved.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-a"></span><span class="erm-anchor" id="command-a"></span>A#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> has a $ attack</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-b"></span><span class="erm-anchor" id="command-b"></span>B#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> (caster) can cast his spell$ once per battle</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-c"></span><span class="erm-anchor" id="command-c-1-2"></span>C#1/#2/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> worth: 
<a href="../../tables/resources/#ref-form-resource" data-context="true">resource #2</a> in quantity $<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ma-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ma-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Do not set the gold price (resource number - 6) to 0. If you set more than one additional. resource (0..5), will only be used 
first. If you want to change the second resource (in addition to gold) from first to second, set the previous resource to 0.<br>
<pre class="erm-example"><code class="language-erm">!#MA:C1/2/3; 		- set the price to 3 ores (gold + ore)
!#MA:C1/2/0 C1/0/5;	- set the price to 5 wood and 0 ore (gold+wood)</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-d"></span><span class="erm-anchor" id="command-d"></span>D#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> has $ protection</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-e"></span><span class="erm-anchor" id="command-e"></span>E#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> has maximum damage $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-f"></span><span class="erm-anchor" id="command-f"></span>F#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> has a combat value of $ (used for AI)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-g"></span><span class="erm-anchor" id="command-g"></span>G#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> has a growth rate of $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-h"></span><span class="erm-anchor" id="command-h"></span>H#/$</strong></span><br>
Maximum quantity <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature #</a> on the map at the beginning of the game is $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-i"></span><span class="erm-anchor" id="command-i"></span>I#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> has a value of $ to AI </div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-l"></span><span class="erm-anchor" id="command-l"></span>L#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> has level $(0..6)<br>
<strong><u>Comment</u>:</strong> creatures considered higher than level 7 in the game also have $ = 6.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-m"></span><span class="erm-anchor" id="command-m"></span>M#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> has minimum damage $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-n"></span><span class="erm-anchor" id="command-n"></span>N#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a>  has $shots </div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-o"></span><span class="erm-anchor" id="command-o"></span>O#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> belongs <a href="../../tables/towns/#ref-form-towns" data-context="true">lock $</a> 
(-1 = neutral)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-p"></span><span class="erm-anchor" id="command-p"></span>P#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> has $health</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ma-r"></span><span class="erm-anchor" id="command-r"></span>R#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> has an additional increase of $<br>
<strong><u>Comment</u>:</strong> This refers to the increase during the construction of additional buildings.<br>
For example, Griffin Bastion gives +3 Griffins. Changing this meaning to Griffins, 
you will achieve a change in growth after building the Bastion.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-s"></span><span class="erm-anchor" id="command-s"></span>S#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> has speed $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-u"></span><span class="erm-anchor" id="command-u"></span>U#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature #</a> can upgrade into creature $.<br>
         $ = -2 – no improvement<br>
         $ = -1 – use normal enhancement<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ma-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ma-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can install your own set of improvements ;-) For example, like this:
<pre class="erm-example"><code class="language-erm">!#MA:U0/1 U1/2 U2/3 U3/4...</code></pre>
It looks great and you can upgrade them all. If you set the circular 
improving two creatures, the player will be able to choose the better creature. You can 
use <a href="../do/#ref-rec-do">circular function</a> (this is faster) to go through all creatures and 
installation of improvements for each (in the next creature).<br>
In a town, you can only improve what you can usually improve there. Yes, you 
you can install the Spearmen improvement in another creature, but you can improve them 
only in the Castle or Hill Fort. If you install the Halberdier upgrade in 
other creature, you can improve them only in the fort on the hill, since further 
upgrades for them are not allowed in towns.<br>
<span class="erm-anchor" id="ref-rec-ma-bold"></span><em class="erm-strong">Note:</em> using the command <span class="erm-anchor" id="ref-rec-ma-erm"></span><strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!!MA</span>:U#/-2;</strong> causes any creature when installed will be upgraded into a Spearman (fixed in <a href="../../compatibility/#ref-era-index">ERA</a>).</div></details>
<hr>
<div><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ma-v"></span><span class="erm-anchor" id="command-v"></span>V#/$</strong></span><br>
Minimum quantity <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature #</a> at the beginning of the game the map is equal to $
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-x"></span><span class="erm-anchor" id="command-x"></span>X#/$</strong></span><br>
Install <a href="../../tables/creature-flags/#ref-form-flaggedabilities" data-context="true">$ flag</a> <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature #</a>.<br> 
When working with flags, check their meanings very carefully (see. <a href="../vr/#ref-rec-vr-and">bit operations</a>).<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ma-2"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-ma-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; Give a flag to a creature
!!IF:M^Crossbowmen now shoot twice^; 
!!MA:X2/?y1;          [write all creature #2 flags to y1]
!!VRy1:|32768;        [add double attack flag] 
!!MA:X2/y1;           [set new flag values for creature #2]</code></pre>
	
<pre class="erm-example"><code class="language-erm">; Take the flag from the creature
!!IF:M^Heavy Crossbowmen now fire once^; 
!!MA:X3/?y1;          [write all creature #3 flags to y1] 
!!VRy1:|32768 -32768; [safe way: first give the flag, then take it away] 
!!MA:X3/y1;           [set new flag values for creature #3]</code></pre></div></details>
<hr>















</div></div>
</div>
</section>
:::

## Related reference {#related}

[BM](../../receivers/bm/)



## Related commands and tables {#reference-links}

[Creature table](../../tables/creatures/) · [Resources](../../tables/resources/) · [Town types](../../tables/towns/) · [Repeated function calls (DO)](../do/) · [ERM debugging and compatibility](../../compatibility/) · [Creature bit flags](../../tables/creature-flags/) · [Variables and expressions (VR)](../vr/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.0.5, +](../../compatibility/#era3-v-3-0-5-l3237) — Added functions for SN:M arrays handling to "Era Erm Framework" mod. !?FU(Array_Join); ; Concatenates array items into single string, using passed glue string. Works with both numeric and string arrays. ; Example: &#91;'one'…
<!-- ERA3-GENERATED:END -->
