---
{"title":"Garrison (GR)","summary":"GR receiver: garrison, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver GR {#ref-rec-gr}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-gr-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>GR</strong> (garrisons)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-gr-red"></span><span class="erm-tone-red">!!GR#1/#2/#3:XXXX;</span> - garrison in X Y L.</strong> 
Garrisons - <a href="../../tables/objects/#ref-form-objects" data-context="true">type 33</a>.</div>
<div class="erm-paragraph">In the game tables there is an object with type 219 - Garrison (perpendicular). However, the object is not a garrison, and is replaced by the game when loading a map to type 33 (for more details, see the description <a href="../un/#ref-rec-un-i">UN:I</a>).</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-gr-f"></span><span class="erm-anchor" id="command-f"></span>F$</strong></span><br>
Set/check whether it is possible to remove guards.<br>
         $ – not allowed (1), possible (0)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-gr-g"></span><span class="erm-anchor" id="command-g-1-1-2"></span>G#1/$1/$2</strong></span><br>
Set/check/get creatures – guards<br>
         #1 – slot number (0..6)<br>
         $1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">
creature type</a> (-1 = no) <br>
         $2 – number of creatures</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-gr-o"></span><span class="erm-anchor" id="command-o"></span>O$</strong></span><br>
Set/check/get a host (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">-1, 0..7</a>)</div>
<hr>


















</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [General game operations (UN)](../un/#command-i-x-y-level-type-subtype-refresh) · [Creature table](../../tables/creatures/) · [Player colors](../../tables/players/)
