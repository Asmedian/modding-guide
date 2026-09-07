---
{"title":"Town events (CE)","summary":"CE receiver: town events, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver CE {#ref-rec-ce}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ce-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>CE</strong> (event in the town)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-ce-red"></span><span class="erm-tone-red"><br>
!!CE#:XXXX;</span> 
- setting up an event in the town.</strong><br>
# - event number. This is the number that comes first in the message text. It's not 
affects the text of the message itself.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-b"></span><span class="erm-anchor" id="command-b-1-2"></span><span class="erm-tone-red"><strong>B#1/$2</strong></span><br>
Set/check/get qty. 
<a href="../../tables/resources/#ref-form-resource" data-context="true">resources #1</a> at $2 (can be negative).</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-c"></span><span class="erm-anchor" id="command-c-1-2"></span><span class="erm-tone-red"><strong>C#1/$2</strong></span><br>
Set/check/get "gift" creatures amounting to $2 in level #1 dwelling (0..6)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-d"></span><span class="erm-anchor" id="command-d-u"></span><span class="erm-tone-red"><strong>D#</strong></span><br>
Don't build a building # (<a href="../../tables/building-pictures/#ref-form-buldingsintowns" data-context="true">0..40</a>)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-e"></span><span class="erm-anchor" id="command-e-n"></span><span class="erm-tone-red"><strong>E$</strong></span><br>
Set the possibility of event activation for <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">
players</a> 
$ (bitwise - add the bits of the required players).<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ce-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ce-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	If you use $ starting with the d parameter, 
it will mean like "or", i.e. you can give players the opportunity 
activate the event without changing the remaining players. Example: E3 gives 
the ability to activate an event only for the red and blue player, while 
Ed3 allows the event to be activated by the red and blue players, and the rest 
colors set in the event itself in the editor are not considered excluded.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-f"></span><span class="erm-anchor" id="command-f-r"></span><span class="erm-tone-red"><strong>F$</strong></span><br>
Set/check/get the day of first appearance on $</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-h"></span><span class="erm-anchor" id="command-h-q"></span><span class="erm-tone-red"><strong>H#</strong></span><br>
Apply or check permission to use an event by a human player 
(if # = 1, then it’s possible)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-m"></span><span class="erm-anchor" id="command-m-text-m-m-1"></span><span class="erm-tone-red"><strong>M^TEXT^</strong></span><br>
Set message TEXT. The length of the text should not exceed the original. Maybe 
contain any characters except "^" and ";"</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M#</strong></span><br>
Set the event text to the same as in global event number #</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>M-1</strong></span><br>
Do not display message on screen</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-n"></span><span class="erm-tone-red"><strong>N$</strong></span><br>
Establish that 
<a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">player(s)</a> $cannot activate 
event (add the bits of the required players).<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ce-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ce-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	If you use $ starting with d it will be 
be regarded as the meaning of "or", i.e. you can prevent players from activating 
event without changing the remaining players. Example: N3 prohibits red and blue 
player to activate the event and allows everyone else. Nd3 prohibits 
activating the event for the red and blue player, but not changing the exception for 
other players.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-q"></span><span class="erm-tone-red"><strong>Q#</strong></span><br>
Apply event for computer players if # = 1.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-r"></span><span class="erm-tone-red"><strong>R$</strong></span><br>
Set/check/get the interval between the occurrences of an event in $</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-u"></span><span class="erm-tone-red"><strong>U#</strong></span><br>
Build building # (<a href="../../tables/building-pictures/#ref-form-buldingsintowns" data-context="true">0..40</a>)</div>

<hr>














</div>

</div>
</section>
:::

## Related reference {#related}

[GE](../../triggers/ge/)



## Related commands and tables {#reference-links}

[Resources](../../tables/resources/) · [Building pictures by town](../../tables/building-pictures/) · [Player colors](../../tables/players/)
