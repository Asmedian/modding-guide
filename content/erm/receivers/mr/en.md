---
{"title":"Spell resistance (MR)","summary":"MR receiver: spell resistance, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Spell resistance (MR)"}
---

## Receiver MR {#ref-rec-mr}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mr-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MR</strong> (stack magic resistance)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mr-red"></span><span class="erm-tone-red">!!MR:XXXX;</span> - receiver to control ERM magic resistance.</strong><br>
You can call this receiver ONLY from a trigger <a href="../../triggers/mr/#ref-tr-mr">!?MR</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-d"></span><span class="erm-anchor" id="command-d"></span>D$</strong></span><br>
Base (no resistance) damage<br>
If you change it after the trigger <a href="../../triggers/mr/#ref-tr-mr">!?MR0</a>, your value will be used as the spell's base damage to calculate the creature's resistance.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-f"></span><span class="erm-anchor" id="command-f"></span>F$</strong></span><span class="erm-tone-red"><strong></strong></span><br>
Final (adjusted) damage<br>
If you check it in <a href="../../triggers/mr/#ref-tr-mr">!?MR0</a>, it must be equal to the value of parameter D.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mr-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mr-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Setting this value in the trigger !?MR0 will not affect the damage, since the damage is calculated after this trigger. 
It is useful to use this command in trigger !?MR1. This way you can ignore the usual WoG resistance and set your value.<br>
<span class="erm-anchor" id="ref-rec-mr-bold"></span><em class="erm-strong">Note:</em> "Death Ripple" is processed first in triggers !?MR, and then also in <a href="../../triggers/mf/#ref-tr-mf">!?MF1</a>, 
and therefore changes in damage through MR:F are not final for this spell - take this into account when writing scripts.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-m"></span><span class="erm-anchor" id="command-m-n-s"></span>M$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature type</a><br>
Typically you can use this to get the creature number, but you can also set a value to "simulate" resistance 
(in fact, only Golems and Elementals have resistance)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-n"></span>N$</strong></span><br>
Stack number at battlefield (0..41)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mr-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mr-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This command should return the number of the stack that was magicked, but in fact it returns garbage.<br>
<em class="erm-strong">Note:</em> this bug has been fixed in <a href="../../compatibility/#ref-era-index">ERA</a>.<br>
Here is a working script with which you can generate the action MR:N..
<pre class="erm-example"><code class="language-erm">
!?FU29999; function for getting stack ID
;vx1 - stack number (default is -1)
!!UN:C42147184/4/?y1; 
!!VRy1:+56; 
!!UN:Cy1/4/?y2; get a battlefield cell where spell is cast.
!!FU|y2&lt;0/y2&gt;186:E;
!!BU:Ey2/?y3; get stack ID in cell y2
!!FU&amp;y3=-1:E;
!!VRvx1:Sy3;

!?MR1;
!!VRv2:S-1;
!!FU29999:Pv2; get stack ID in v2
!!FU&amp;v2=-1:E;
...</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-s"></span>S$</strong></span><br>
<a href="../../tables/spells/#ref-form-spell" data-context="true">Spell number</a><br>
Again, getting the spell number is most useful, but if you set it, you can attract Elemental resistance as well. 
But the base damage is calculated before the trigger works, so changing the spell won't change the damage.</div>
<hr>

















</div>
</div>
</section>
:::

## Related reference {#related}

[MR](../../triggers/mr/) · [MF](../../receivers/mf/)



## Related commands and tables {#reference-links}

[Magic resistance (MR)](../../triggers/mr/) · [Physical damage calculation (MF)](../../triggers/mf/) · [Creature table](../../tables/creatures/) · [ERM debugging and compatibility](../../compatibility/) · [Spell table](../../tables/spells/)
