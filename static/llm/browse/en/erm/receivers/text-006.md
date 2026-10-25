# Town events (CE)

ID: erm.receivers.ce
URL: /en/erm/receivers/ce/
Part: 1/1
Source references: old-help:rec-ce.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ce 1 -->
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
<!-- llm:end erm.receivers.ce 1 -->

# Treasure chest (CH)

ID: erm.receivers.ch
URL: /en/erm/receivers/ch/
Part: 1/1
Source references: old-help:rec-ch.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ch 1 -->
## Receiver CH {#ref-rec-ch}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ch-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver 
<strong>CH</strong> 
(treasure chest)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-ch-red"></span><span class="erm-tone-red"><br>
!!CH#1/#2/#3:XXXX;</span> 
- treasure chest settings in X Y L (#1, #2, #3)</strong>. Treasure chest - <a href="../../tables/objects/#ref-form-objects" data-context="true">type 101</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ch-a"></span><span class="erm-anchor" id="command-a"></span><span class="erm-tone-red"><strong>A$</strong></span><br>
$ – number <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ch-b"></span><span class="erm-anchor" id="command-b"></span><span class="erm-tone-red"><strong>B$</strong></span><br>
Bonus of gold or experience in $ ($ ($ can be 0..15):<br>
Gold = $*500,<br>
Experience = $*500-500.<br>
If $ = 0, the choice will be between 0 gold and -500 experience.<br>
As you can see, the maximum you can get is up to 7500 gold or 7000 experience.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ch-s"></span><span class="erm-anchor" id="command-s"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
Content Type:<br>
         $ = 1 – 
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact</a><br>
         $ = 0 – gold/experience</div>

<hr>













</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [Artifact table](../../tables/artifacts/)
<!-- llm:end erm.receivers.ch 1 -->

# Mouse-event context (CM)

ID: erm.receivers.cm
URL: /en/erm/receivers/cm/
Part: 1/1
Source references: old-help:rec-cm.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.cm 1 -->
## Receiver CM {#ref-rec-cm}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-cm-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver 
<strong>CM</strong> (info by mouse click)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-cm-red"></span><span class="erm-tone-red"><br>
!!CM:XXXX;</span> 
- set/check/get information by clicking.</strong> <br>
Must follow the trigger <a href="../../triggers/cm/#ref-tr-cm">!?CM</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cm-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-cm-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	If you want to show a dialog box that is not 
will linger on the screen (as with a normal click <span class="erm-anchor" id="ref-rec-cm-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">), 
use the command <a href="../if/#ref-rec-if-q">IF:Q</a> with option 4. This will create 
a text window without buttons that will disappear immediately after releasing the mouse button. 
If you don't need an image, use -1 values ​​for the image type/subtype.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-a"></span><span class="erm-anchor" id="command-a-1-2"></span><strong><span class="erm-tone-red">A$1/$2</span></strong><br>
Absolute cursor position in pixels<br>
         $1 – X<br>
         $2 – Y</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-d"></span><span class="erm-anchor" id="command-d"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
Set/check/get a position on battlefield<br>
         $ - 
	<a href="../../tables/battlefield/#ref-form-bf" data-context="true">item number</a><br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cm-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-cm-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	Field grid squares have values from 0 to 186, background and 
the outer squares have a value of -1. The left hero has square number 252, 
right - 253.<br>
The central and upper towers have position values of 254 and 255 respectively.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-f"></span><span class="erm-anchor" id="command-f"></span><span class="erm-tone-red"><strong>F$</strong></span><br>
Mouse click flags<br>
         0 = <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> (left mouse button)<br>
         1 = <span class="erm-key">Shift</span> + <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
         4 = <span class="erm-key">Ctrl</span> + <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
         32 = <span class="erm-key">Alt</span> + <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
         512 = <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> (right mouse button)<br>
Numbers can be combined, for example 5 would mean 
what should be pressed <span class="erm-key">Shift</span>+<span class="erm-key">Ctrl</span>+<img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">.<br>
The right button cannot be combined with anything.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-cm-h"></span><span class="erm-anchor" id="command-h-1-2"></span>H$1/$2</strong></span><br>
Get hero number<br>
        $1 – number of the left hero<br>
        $2 – number of the right hero<br>
You can only receive or check them.<br>
You can also use this option in body <a href="../../triggers/cm/#ref-tr-cm">
!?CM2</a> to get the left hero as active, the second one is a phantom, he is not 
exists.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-i"></span><span class="erm-anchor" id="command-i"></span><span class="erm-tone-red"><strong>I$</strong></span><br>
Conventionally designated 
	<a href="../../tables/dialog-items/#ref-form-cmi" data-context="true">place</a>, where the cursor is placed when clicked.<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-cm-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-cm-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Some areas will not register when right clicked, and some have a value of 0.<br>
This command always gets the correct value in the town screen, even if one building overlaps another. 
It is also set to -1 if no building is found under the cursor.<br>
A description of a town area marked "inactive" means that the object registers when clicked, but has no game function. 
Such objects are different for each town.
<br>
The area number when clicking on a mage guild always takes the value of the highest level of the guild 
(i.e. if you have the 3rd level of the mage guild, when you click anywhere in the guild, the value of the area will be equal to the value of the third level of the guild). 
Also, improved dwellings always take on the values ​​of improved. 
In addition, the buildings of hordes of creatures, when they are built, replace their number with their number 
dwellings. Other objects behave in exactly the same way: for example, the Tavern (5) of the Castle is transformed into the Brotherhood of the Sword (22) when it is rebuilt.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-m"></span><span class="erm-anchor" id="command-mz"></span><span class="erm-tone-red"><strong>Mz#</strong></span><br>
Set the text – description in the town window, changing the usual one to your own. You can 
use shared (z1…z1000) or local (z-1…z-10) <em>z</em>-variables.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-p"></span><span class="erm-anchor" id="command-p-1-2-3"></span><span class="erm-tone-red"><strong>P$1/$2/$3</strong></span><br>
Position on the map<br>
         $1 – X<br>
         $2 – Y<br>
         $3 – L (level)<br>
Only works for adventure map and minimap (<a href="../../tables/dialog-items/#ref-form-cmi" data-context="true">area numbers</a> of which there are 1 and 37, respectively).</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-r"></span><span class="erm-anchor" id="command-r"></span><span class="erm-tone-red"><strong>R$</strong></span><br>
Enable/disable standard action<br>
         0 – disable<br>
         1 – enable<br>
If you want to right click on the adventure map for 
anything, you can use this command to disable the default 
dialogue about abandonment of creatures.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-s"></span><span class="erm-anchor" id="command-s-t"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
$action subtype:<br>
	       10 – OK button released in town screen<br>
	       12 – pressed <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
	       13 – released <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
	       14 – pressed <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-t"></span><span class="erm-tone-red"><strong>T$</strong></span><br>
Action type (usually 512)</div>

<hr>














</div>

</div>
</section>
:::

## Related reference {#related}

[CM](../../triggers/cm/) · [Framework](../../framework/events/)



## Related commands and tables {#reference-links}

[Mouse clicks (CM)](../../triggers/cm/) · [Flags, messages and choices (IF)](../if/#command-q-text-q-type-subtype-type-subtype-mode-text) · [Battlefield hexes](../../tables/battlefield/) · [CM:I click areas](../../tables/dialog-items/)

<!-- llm:end erm.receivers.cm 1 -->

