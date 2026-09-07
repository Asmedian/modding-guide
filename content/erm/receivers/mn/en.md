---
{"title":"Mines (MN)","summary":"MN receiver: mines, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Mines (MN)"}
---

## Receiver MN {#ref-rec-mn}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mn-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MN</strong> (mines)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-mn-red"></span><span class="erm-tone-red">!!MN#1/#2/#3:XXXX;</span> 
- mine in X Y L.</strong> Mines - <a href="../../tables/mines/#ref-form-mines" data-context="true">type 53</a>, <a href="../../tables/objects/#ref-form-objects" data-context="true">type 220</a>.<em><br>
Note:</em> The Lighthouse and the Mine (including the Abandoned Mine) have the same <a href="../../tables/object-control-words/#ref-cont-conwords-t42">control words</a>, 
and the Beacon can be edited via !!MN. Its resource (MN:R) has the number 100. If you set the number 0..6, then the Lighthouse will begin to bring resources, 
like a mine :)  The lighthouse guards are ignored.<br>It is also interesting to change the security of an abandoned mine - 
after the standard message about troglodytes, a fight will occur with the specified creatures in the specified numbers. 
If the guards are removed, the mine is taken without a fight.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mn-m"></span><span class="erm-anchor" id="command-m-1-2-3"></span>M#1/$2/$3</strong></span><br>
Change/check guards<br>
        #1 – slot number (0..6)<br>
        $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">
creature type</a> 
(-1 – empty slot)<br>
        $3 – number of creatures</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mn-o"></span><span class="erm-anchor" id="command-o-o-1"></span>O$</strong></span> <br>
Set/check host<br>
Player (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a>)<br>
        -2 = current player<br>
        -1 = nobody</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>O$/1</strong></span><br>
Same as MN:O$, but without update<br>
 </div><hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mn-r"></span><span class="erm-anchor" id="command-r-r-1"></span>R$</strong></span><br>
Set/check the type of resource produced (<a href="../../tables/resources/#ref-form-resource" data-context="true">0..6</a>)</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>R$/1</strong></span><br>
Same as MN:R$, but without updating</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-mn-bold"></span><em class="erm-strong">Note:</em> setting a mine to resource 7 will lead to nothing but errors - mithril will not be mined. If you set your mine to resource 100 (as for the Lighthouse), then when you visit it the game will crash.</div>
<hr>
















</div>

</div>
</section>
:::

## Related reference {#related}

[DW](../../receivers/dw/)



## Related commands and tables {#reference-links}

[Mine types](../../tables/mines/) · [Game object table](../../tables/objects/) · [Object control words](../../tables/object-control-words/#type-42) · [Creature table](../../tables/creatures/) · [Player colors](../../tables/players/) · [Resources](../../tables/resources/)
