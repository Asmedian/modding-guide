---
{"title":"Map artifacts and resources (AR)","summary":"AR receiver: map artifacts and resources, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Map artifacts and resources (AR)"}
---

## Receiver AR {#ref-rec-ar}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ar-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>AR</strong> (artifacts or resources)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-ar-red"></span><span class="erm-tone-red">!!AR#1/#2/#3:XXXX;</span> - artifact or resource in X Y L coordinates (#1/#2/#3).</strong><br>
<em>Syntax extension:</em><br>
<strong><span class="erm-tone-red">!!AR$:XXXX;</span> - </strong>artifact OR resource in coordinates v[$], v[$+1], v[$+2] respectively.<br>
<strong>Used to modify the attributes of artifacts or resources at a specific position.</strong><br>
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">Artifacts</a> – <a href="../../tables/objects/#ref-form-objects" data-context="true">type 5</a>, 
scrolls with <a href="../../tables/spells/#ref-form-spell" data-context="true">spells</a> – <a href="../../tables/objects/#ref-form-objects" data-context="true">type 93</a>; 
<a href="../../tables/resources/#ref-form-resource" data-context="true">resources</a> – <a href="../../tables/objects/#ref-form-objects" data-context="true">type 79</a>.</div>
<div class="erm-paragraph">
Artifacts and resources are numbered separately.</div>
<div class="erm-paragraph">
<strong></strong></div><span class="erm-anchor" id="ref-rec-ar-1"></span><details class="erm-comment"><summary>Important note (<span class="erm-anchor" id="ref-rec-ar-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Most of these commands will not affect artifact or the heap 
resources, if it does not have certain settings made in the Map Editor. This 
can be a simple setup of security for a resource or artifact. If artifact 
or resource does not have any special setting, a message about 
ERM error. You can use error output option statuses with commands 
<a href="../un/#ref-rec-un-p904">UN:P904 P905</a>, to avoid problems; you can also use the command <a href="../ob/#ref-rec-ob-c">
OB:C</a> to obtain a check number and process its value (but the command 
V$ will work correctly even if the scroll or resource does not have 
any installation).</div></details>
<hr>
<div class="erm-paragraph">
<strong><span class="erm-tone-red">
<span class="erm-anchor" id="ref-rec-ar-g"></span><span class="erm-anchor" id="command-g-1-2-3"></span>G#1/$2/$3</span></strong><br>
Set/check/get creatures - guards <br>
         #1 – position (0..6)  <br>
         $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
         $3 – number of creatures<br>
The team cannot turn on guards, it can only place them. Use 
option <a href="./#ref-rec-ar-x">X</a> to turn on.</div>
<hr>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-ar-m"></span><span class="erm-anchor" id="command-m-text"></span><span class="erm-tone-red">M^TEXT^</span></strong><br>
Set text message TEXT. The length of the text may exceed 
original. The message can contain any characters except "^" and ";"</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>M#</strong></span><br>
Set the message text to the same as in <a href="../ge/#ref-rec-ge">
global event</a> under number #.</div>
<hr><div class="erm-paragraph">
<strong><span class="erm-tone-red">M-1</span></strong><br>
Restore original message for artifact</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>Mz#</strong></span><br>
Set text from text variable z#</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>M1/$</strong></span><br>
Set and get a text parameter. You can use 
this option when the M command is used to set a name or message.<br>
         $ – text variable number<br>
         = -1 – disable message (restore default)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ar-v"></span><span class="erm-anchor" id="command-v"></span>V$</strong></span><br>
Set/check/get a number 
<a href="../../tables/spells/#ref-form-spell" data-context="true">spells</a> in a scroll (if resource, then the number 
resource)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ar-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ar-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">For artifacts, this value specifies the lifting type:<br>
0 – Artifact just rises<br>
1 – Offer to buy artifact for 2000 coins<br>
2 – Raising an artifact requires wisdom<br>
3 – Leadership is required to pick up an artifact<br>
4 – Offer to buy artifact for 2500 coins and 3 wood<br>
5 – Offer to buy artifact for 3000 coins and 5 wood<br>
6 – The artifact has security (another way to turn it on)<br>
All values greater than 6 make artifact unraveable.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ar-x"></span><span class="erm-anchor" id="command-x"></span>X#</strong></span><br>
Enable guards if # is non-zero, otherwise disable. Checks for 
there are no security guards.</div>
<hr>














</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/)



## Related commands and tables {#reference-links}

[Artifact table](../../tables/artifacts/) · [Game object table](../../tables/objects/) · [Spell table](../../tables/spells/) · [Resources](../../tables/resources/) · [General game operations (UN)](../un/) · [Map objects (OB)](../ob/#command-c) · [Creature table](../../tables/creatures/) · [Global events (GE)](../ge/)
