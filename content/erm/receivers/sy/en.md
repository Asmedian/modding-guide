---
{"title":"Shipyard (SY)","summary":"SY receiver: shipyard, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver SY {#ref-rec-sy}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-sy-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>SY</strong> (shipyard) </span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-sy-red"></span><span class="erm-tone-red">!!SY#1/#2/#3:XXXX;</span> 
- shipyard in X Y L.</strong> 
Shipyard – <a href="../../tables/objects/#ref-form-objects" data-context="true">type 87</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-sy-o"></span><span class="erm-anchor" id="command-o"></span>O$</strong></span><br>
Set/check/get a host (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">-1, 0..7</a>)<br>
If you set incorrect values (8..255), the flag 
can be painted in the most unusual colors, but usually white.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-sy-p"></span><span class="erm-anchor" id="command-p-1-2"></span>P$1/$2</strong></span><br>
Set a point on the map where the boat will appear upon purchase. Usually these are x+1 and y+1 
from the right corner of the shipyard. You can put an end to more than just water. If the point 
outside the map, you cannot buy a boat.<br>
If the boat is purchased remotely, right click on 
shipyard, then these parameters are ignored and the boat is built in the nearest water cell.</div>
<hr>
















</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [Player colors](../../tables/players/)
