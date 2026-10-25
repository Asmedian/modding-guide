# Lean-to (LN)

ID: erm.receivers.ln
URL: /en/erm/receivers/ln/
Part: 1/1
Source references: old-help:rec-ln.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ln 1 -->
## Receiver LN {#ref-rec-ln}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ln-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>LN</strong> 
(canopy)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-ln-red"></span><span class="erm-tone-red">!!LN#1/#2/#3:XXXX;</span> 
- canopy at X Y L.</strong> 
Lean To – <a href="../../tables/objects/#ref-form-objects" data-context="true">type 39</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ln-b"></span><span class="erm-anchor" id="command-b-1-2"></span>B$1/$2</strong></span><br>
Bonus:<br>
        $1 – <a href="../../tables/resources/#ref-form-resource" data-context="true">
resource type</a><br>
        $2 – quantity of resource</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ln-n"></span><span class="erm-anchor" id="command-n"></span>N$</strong></span><br>
Canopy number (0..31)</div>
<hr>


















</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [Resources](../../tables/resources/)
<!-- llm:end erm.receivers.ln 1 -->

# Creature-type attributes (MA)

ID: erm.receivers.ma
URL: /en/erm/receivers/ma/
Part: 1/1
Source references: old-help:rec-ma.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ma 1 -->
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
You can set your own set of improvements ;-) For example, like this:
<pre class="erm-example"><code class="language-erm">!#MA:U0/1 U1/2 U2/3 U3/4...</code></pre>
It looks great and you can upgrade them all. If you set the circular 
improving two creatures, the player will be able to choose the better creature. You can 
use <a href="../do/#ref-rec-do">circular function</a> (this is faster) to go through all creatures and 
setting of improvements for each (in the next creature).<br>
In a town, you can only improve what you can usually improve there. Yes, you 
you can set the Spearmen improvement in another creature, but you can improve them 
only in the Castle or Hill Fort. If you set the Halberdier upgrade in 
other creature, you can improve them only in the fort on the hill, since further 
upgrades for them are not allowed in towns.<br>
<span class="erm-anchor" id="ref-rec-ma-bold"></span><em class="erm-strong">Note:</em> using the command <span class="erm-anchor" id="ref-rec-ma-erm"></span><strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!!MA</span>:U#/-2;</strong> causes any creature when set will be upgraded into a Spearman (fixed in <a href="../../compatibility/#ref-era-index">ERA</a>).</div></details>
<hr>
<div><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ma-v"></span><span class="erm-anchor" id="command-v"></span>V#/$</strong></span><br>
Minimum quantity <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature #</a> at the beginning of the game the map is equal to $
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-x"></span><span class="erm-anchor" id="command-x"></span>X#/$</strong></span><br>
Set <a href="../../tables/creature-flags/#ref-form-flaggedabilities" data-context="true">$ flag</a> <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature #</a>.<br> 
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

<!-- llm:end erm.receivers.ma 1 -->

# Classic ERM macros (MC)

ID: erm.receivers.mc
URL: /en/erm/receivers/mc/
Part: 1/1
Source references: old-help:rec-mc.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.mc 1 -->
## Receiver MC {#ref-rec-mc}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-s-name"></span><span class="erm-anchor" id="example"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MC</strong> (macros)
</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mc-red"></span><span class="erm-tone-red">!!MC#:S@Var@</span> 
- set a macro.</strong><br>
Used to assign a text name to a variable.<br>
Applicable to <a href="../../variables/#ref-cont-flags-var-typ">variables</a> f…t, v#, z# and w#.</div>
<strong></strong><span class="erm-anchor" id="ref-rec-mc-1"></span><details class="erm-comment"><summary>Note (<span class="erm-anchor" id="ref-rec-mc-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
First you must set the macro with the instruction before using the macro name:
<pre class="erm-example"><code class="language-erm">!#MCv100:S@Var100@;
The variable v100 now has a second name of “Var100”.</code></pre></div></details>
<div class="erm-paragraph">The length of a macro name is limited to eight characters. You can use a longer name, but only the first 8 characters will be used to search for the variable.<br>
You can change the macro name at any time if you set it not in the instructions, but in the receiver.<br>
You can use a macro name anywhere where you can use a variable. It must be enclosed between two characters <strong>$</strong>.
<pre class="erm-example"><code class="language-erm">!!HE-1:P?$Var100$/?v1000/?v999;
!!IF&amp;$Var100$=v1000/v100=5:...;</code></pre>

You can set the macro name as <em>z</em>-variable.<br>
To use macro names in a message they are as follows: <strong>$$</strong> and there is a sign ahead <strong>%</strong>:
<pre class="erm-example"><code class="language-erm">!!IF:M^This is %$player$ and its value is %$value$^;</code></pre></div>

</div>
</section>
:::

## Related reference {#related}

[VR](../../receivers/vr/)



## Related commands and tables {#reference-links}

[Variables, strings and arrays](../../variables/)
<!-- llm:end erm.receivers.mc 1 -->

# Physical damage (MF)

ID: erm.receivers.mf
URL: /en/erm/receivers/mf/
Part: 1/1
Source references: old-help:rec-mf.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.mf 1 -->
## Receiver MF {#ref-rec-mf}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mf-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MF</strong> (physical damage)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-mf-red"></span><span class="erm-tone-red">!!MF:XXXX;</span> - receiver to control the physical damage received by the stack.</strong><br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mf-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mf-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can check the stack number to get detailed information about that stack. You can set the damage with the F$ command. 
You can ignore the damage completely using the E0 command.<br>
<u>Example</u>:<br>
To simulate a magic block ability via ERM, you can use trigger <a href="../../triggers/mf/#ref-tr-mf">!?MF</a>, calculate the chance of the block triggering, 
cancel damage command <a href="./#ref-rec-mf-e">MF:E0</a>, show block animation with <a href="../bm/#ref-rec-bm-v">BM:V84</a> 
(and also <a href="../bm/#ref-rec-bm-f">set flag</a> "stack has taken a protective position" for greater realism) 
and add a corresponding message to the command’s combat sheet <a href="../mm/#ref-rec-mm-s">MM:S</a>.</div></details>
<span class="erm-anchor" id="ref-rec-mf-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/mf/#ref-tr-mf">!?MF</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-d"></span><span class="erm-anchor" id="command-d-f"></span>D$</strong></span><br>
Current damage that stack will take</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-e"></span><span class="erm-anchor" id="command-e"></span>E$</strong></span><br>
Allow (1 – default) or prohibit (0) receiving damage.<br>
Canceling will mean that the stack will not take damage.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-f"></span>F$</strong></span><br>
Adjusted damage the stack will take.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mf-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mf-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you have several scripts where the damage for the stack is changed, then keep in mind that the stack will receive the damage set through MF:F in the last trigger.<br>
<u>Example</u> from <span class="erm-anchor" id="ref-rec-mf-n1"></span><code class="erm-tone-purple erm-strong">Algor</code>'a:
<pre class="erm-example"><code class="language-erm">!?MF1; !!MF:Fd5;
!?MF1; !!MF:Fd3;
There will be a total change in damage (+8)</code></pre>
However, if you set the damage like this:
<pre class="erm-example"><code class="language-erm">!?MF1; !!MF:F5;
!?MF1; !!MF:F3;
It will just be 3 damage.</code></pre>
If you need to make two independent scripts, one of which will increase damage by 20%, and the other will decrease it by 15%, then it is better to stick to the base damage and calculate percentages from it. This will produce a result that does not depend on the order in which the triggers are executed:
<pre class="erm-example"><code class="language-erm">!?MF1; !!MF:D?y1; !!VRy1:*20 :100; !!MF:Fdy1; [increases damage taken by 20%]
!?MF1; !!MF:D?y1; !!VRy1:*-15 :100; !!MF:Fdy1; [reduce damage taken by 15%]</code></pre></div></details><hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-n"></span><span class="erm-anchor" id="command-n"></span>N$</strong></span><br>
Number of the stack (0..41) receiving damage. Can be used to obtain more detailed information by the command <a href="../bm/#ref-rec-bm">!!BM</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-w"></span><span class="erm-anchor" id="command-w"></span>W$</strong></span><br>
Check/get attack type:<br>
        $ = 2 – turret shot<br>
           = 1 – ditch<br>
           = 0 – other (to specify the type, see additional information on <a href="../../triggers/mf/#ref-tr-mf">!?MF</a>)</div>
<hr>
















</div>

</div>
</section>
:::

## Related reference {#related}

[MF](../../triggers/mf/)



## Related commands and tables {#reference-links}

[Physical damage calculation (MF)](../../triggers/mf/) · [Battle stack (BM)](../bm/#command-v-z) · [Battle stack (BM)](../bm/#command-e-f) · [Battle hint text (MM)](../mm/#command-sz) · [Battle stack (BM)](../bm/)
<!-- llm:end erm.receivers.mf 1 -->

# Windmill (ML)

ID: erm.receivers.ml
URL: /en/erm/receivers/ml/
Part: 1/1
Source references: old-help:rec-ml.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ml 1 -->
## Receiver ML {#ref-rec-ml}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ml-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>ML</strong> 
(windmill)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-ml-red"></span><span class="erm-tone-red">!!ML#1/#2/#3:XXXX;</span> 
- windmill in X Y L.</strong> <a href="../../tables/objects/#ref-form-objects" data-context="true">Type 112</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ml-b"></span><span class="erm-anchor" id="command-b-1-2"></span>B$1/$2</strong></span><br>
Resource type and quantity<br>
         $1 –
<a href="../../tables/resources/#ref-form-resource" data-context="true">type</a><br>
         $2 – quantity</div>
<hr>













 

</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [Resources](../../tables/resources/)
<!-- llm:end erm.receivers.ml 1 -->

