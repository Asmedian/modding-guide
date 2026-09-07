---
{"title":"Battle hero actions (BH)","summary":"BH receiver: battle hero actions, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Battle hero actions (BH)"}
---

## Receiver BH {#ref-rec-bh}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-bh-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver 
<strong>BH </strong>(actions of the hero)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-bh-red"></span><span class="erm-tone-red"><br>
!!BH#:XXXX;</span> 
- in battle you can set/check/get the parameters of the hero's action.</strong><br>
# – the side that will perform the action (0 – attacker, 1 – defender)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bh-c"></span><span class="erm-anchor" id="command-c-1-2-3-4"></span><span class="erm-tone-red"><strong>C#1/#2/#3/#4</strong></span><br>
Cast spell<br>
         #1 –
<a href="../../tables/spells/#ref-form-spell" data-context="true">spell</a><br>
         #2 –
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">position</a><br>
         #3 – hero skill level (0..3)<br>
         #4 – check existence 
targets (0=ignore, spell will trigger on all allies of the caster)<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-bh-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bh-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	You can cast spells that do not have a mass effect on all allied creatures (for example, Magic Mirror); for 
use 0 as the 4th parameter. But not all spells work correctly using this method (for example, Clone).<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!BH:C36/0/0/0; - apply Magic Mirror to the entire allied army for 3 rounds
!!BH:C36/18/3/1; - cast Magic Mirror for 3 rounds on creature in square 18, if it is there.</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-bh-m"></span><span class="erm-anchor" id="command-m"></span>M$</strong></span><br>
Allow (0) or deny (1) spell casting<br>
<strong></strong> 
</div><span class="erm-anchor" id="ref-rec-bh-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bh-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">If you re-enable the casting of a spell after the casting has occurred, the Spell Book button will only become active after performing some in-game action in battle (for example, changing the active unit). However, the actual summoning of the Book of Spells (click on the hero/key C) will be available immediately as soon as you re-enable the spell.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bh-n"></span><span class="erm-anchor" id="command-n"></span><span class="erm-tone-red"><strong>N?$</strong></span><br>
Receive or check 
	<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">number</a> walking hero (-1 if not 
hero)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bh-q"></span><span class="erm-anchor" id="command-q-1-2-3"></span><span class="erm-tone-red"><strong>Q#1/#2/#3</strong></span><br>
Place a section of Quicksand or Mine in position<br>
         #1 – type (0 = quicksand, 1 
= mines)<br>
         #2 –
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">position</a><br>
         #3 – update (1) or not (0)<br>
The position will be checked automatically for the presence of an obstacle (if there is one, then spell will not place anything)</div>

<hr>












</div>
</div>
</section>
:::

## Related reference {#related}

[BA](../../receivers/ba/)



## Related commands and tables {#reference-links}

[Spell table](../../tables/spells/) · [Battlefield hexes](../../tables/battlefield/) · [Hero table](../../tables/heroes/)
