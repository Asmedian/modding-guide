---
{"title":"Creature dwellings (DW)","summary":"DW receiver: creature dwellings, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver DW {#ref-rec-dw}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-dw-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>DW</strong> (home 
creatures)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-dw-red"></span><span class="erm-tone-red"><br>
!!DW#1/#2/#3:XXXX;</span> 
- creatures' home in X Y L.</strong> 
Housing – <a href="../../tables/creature-dwellings/#ref-form-creaturedwellings" data-context="true">type 17 and 20</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dw-g"></span><span class="erm-anchor" id="command-g-1-2-3"></span>G#1/$2/$3</strong></span><br>
Set guard creatures:<br>
         #1 – slot number (0..6)<br>
         #2 –
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 
(-1 – no)<br>
         #3 – number of creatures</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dw-m"></span><span class="erm-anchor" id="command-m-1-2-3"></span>M#1/$2/$3</strong></span><br>
Set creatures to hire:<br>
         #1 – slot (0..3) - you can 
install up to four different creatures in one dwelling<br>
         #2 –
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 
(-1 – disable slot)<br>
         #3 – quantity to hire</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dw-o"></span><span class="erm-anchor" id="command-o-o-1"></span>O$</strong></span><br>
Install 
<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">owner $</a> (no update)<br>
<em>Extended syntax:</em><span class="erm-tone-red"><strong><br>
O$/1</strong></span><br>
Transfer control to another player, $ – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">owner</a><br>
<strong><u>Comment</u>:</strong> Unlike DW:O$, this syntax changes the owner of the dwelling by updating the internal game structures (all indicators in the weekly growth statistics in the towns of the corresponding faction are adjusted; the viewing radius around the dwelling is updated).<br>
<span class="erm-anchor" id="ref-rec-dw-bold"></span><em class="erm-strong">Note:</em> For correct operation of your scripts in network mode, use only this syntax.</div>

<hr>















</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[Creature dwellings on the map](../../tables/creature-dwellings/) · [Creature table](../../tables/creatures/) · [Player colors](../../tables/players/)
