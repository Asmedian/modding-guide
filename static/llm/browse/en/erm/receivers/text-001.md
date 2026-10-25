# AI destinations (AI)

ID: erm.receivers.ai
URL: /en/erm/receivers/ai/
Part: 1/1
Source references: old-help:rec-ai.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ai 1 -->
## Receiver AI {#ref-rec-ai}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ai-text"></span><div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">
<div class="erm-align-center erm-paragraph">Receiver<strong> AI </strong>(AI - controller)</div></span>
</div><div class="erm-align-left erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-ai-red"></span><span class="erm-tone-red"><br>
!!AI:XXXX;</span></strong> 
- <strong>allows you to set a destination for the computer player by specifying it 
significance.<br></strong>
This receiver gives you some control over the AI's movement. You can 
use it to force AI heroes to move to a specific location on the map. 
Depending on the set significance of the point, the AI may deviate from the path for 
collecting treasure, attacking weaker creatures or heroes, capturing a mine, or 
towns. Even using maximum significance, AI cannot always be forced 
go to the desired point if the circumstances are stronger (for example, he has an army, 
he lost the last town, but there is an empty town nearby), but this is rare. 
Another option for using this receiver is to set up waypoints for both 
patrolling the area. You can also link the coordinates of the enemy hero and 
coordinates of the destination point, and hero AI will relentlessly pursue the hero 
player.<br>
This command slows down quite noticeably 
actions of the computer, while the AI remains unpredictable - it can 
"disobey" the order to go to this point. That is using this command 
irrational.<br><br>
</div><hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ai-d"></span><span class="erm-anchor" id="command-d-1-2-3"></span><strong><span class="erm-tone-red">D#1/#2/#3</span></strong><br>
Delete destination<br>
         #1 – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a> 
(-1 = any)<br>
         #2 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player number</a> 
(-1 = any)<br>
         #3 – destination point number (-1 = delete all points 
assignments for this hero or player)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ai-s"></span><span class="erm-anchor" id="command-s-1-2-3-1-2-3-4-5"></span><strong><span class="erm-tone-red">S#1/#2/#3/$1/$2/$3/$4/$5</span></strong><br>
Set new destination<br>
         #1 – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a> (-1 = any) <br>
         #2 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player number</a> (-1 = any)<br>
         #3 – sequential point number<br>
         $1 – X<br>
         $2 – Y<br>
         $3 – L<br>
         $4 – significance of the point (500000 – significant, 5000000 – very 
significant)<br>
         $5 is a flag. Values:</div><pre>
	0 = no flag,
	1 = start from this point,
	2 = do not delete this point after visiting,
	3 = start from this point and do not delete it after visiting.</pre> 
<strong></strong><br><span class="erm-anchor" id="ref-rec-ai-1"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-ai-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<ol><li> The order works like this. If you set destinations numbered 2, 4, 5, 6, 88, 99 and set flag 1 
for number 6, hero will move like this: 6, 88, 99, 2, 4, 5 and then if you 
set the “Do not delete” flag (for example, for 88, 4 and 5), hero will run like this: 
88, 4, 5, 88, 4, 5, 88, 4, 5…</li>
<li> You can set any player (-1) and this will mean that hero will go to the point regardless 
owner.</li>
<li> You can set any hero (-1) and this will mean that all heroes will move towards this point.</li>
<li> If the first point is also the last, and is set to “not deleted” after visiting, on 
A phantom clone of the hero will appear on the map.</li>
<li> If hero is not defined and there are multiple destinations, then the first hero AI will move to 
first point. After reaching the point, the second hero will begin to move towards the next destination. 
Therefore, it is better to assign a specific hero to avoid chaos.</li></ol></div></details>
<hr>








</div>

</div>
</section>
:::

## Related commands and tables {#reference-links}

[Hero table](../../tables/heroes/) · [Player colors](../../tables/players/)
<!-- llm:end erm.receivers.ai 1 -->

# Map artifacts and resources (AR)

ID: erm.receivers.ar
URL: /en/erm/receivers/ar/
Part: 1/1
Source references: old-help:rec-ar.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ar 1 -->
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
can be a simple setup of guards for a resource or artifact. If artifact 
or resource does not have any special setting, a message about 
ERM error. You can use error output option statuses with commands 
<a href="../un/#ref-rec-un-p904">UN:P904 P905</a>, to avoid problems; you can also use the command <a href="../ob/#ref-rec-ob-c">
OB:C</a> to obtain a check number and process its value (but the command 
V$ will work correctly even if the scroll or resource does not have 
any setting).</div></details>
<hr>
<div class="erm-paragraph">
<strong><span class="erm-tone-red">
<span class="erm-anchor" id="ref-rec-ar-g"></span><span class="erm-anchor" id="command-g-1-2-3"></span>G#1/$2/$3</span></strong><br>
Set/check/get creatures - guards <br>
         #1 – position (0..6)  <br>
         $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
         $3 – number of creatures<br>
The command cannot turn on guards, it can only place them. Use 
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
6 – The artifact has guards (another way to turn it on)<br>
All values greater than 6 make artifact unraveable.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ar-x"></span><span class="erm-anchor" id="command-x"></span>X#</strong></span><br>
Enable guards if # is non-zero, otherwise disable. The command does not check whether guards exist.</div>
<hr>














</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/)



## Related commands and tables {#reference-links}

[Artifact table](../../tables/artifacts/) · [Game object table](../../tables/objects/) · [Spell table](../../tables/spells/) · [Resources](../../tables/resources/) · [General game operations (UN)](../un/) · [Map objects (OB)](../ob/#command-c) · [Creature table](../../tables/creatures/) · [Global events (GE)](../ge/)
<!-- llm:end erm.receivers.ar 1 -->

# Battle configuration (BA)

ID: erm.receivers.ba
URL: /en/erm/receivers/ba/
Part: 1/1
Source references: old-help:rec-ba.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ba 1 -->
## Receiver BA {#ref-rec-ba}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ba-text"></span><div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Receiver <strong>BA</strong> (battle attributes)</span></div><br>
<strong><span class="erm-anchor" id="ref-rec-ba-red"></span><span class="erm-tone-red">!!BA:XXXX;</span> - used to set battle attributes.</strong>
<div class="erm-paragraph">You can use internal links to heroes (copy of information):<br>
<span class="erm-anchor" id="ref-rec-ba-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE-10:</span>…</strong> applies changes to a copy of the attacking hero's information.<br>
<strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE-20:</span>…</strong> applies changes to a copy of the defending hero's information.</div>
<div class="erm-paragraph"><em>Note:</em><br>
Checking the coordinates after the battle will not work, since hero disappears from the coordinates after the battle. The same with creatures - they disappear immediately after they are destroyed. 
The simplest way is to check the current owner of the hero - if it is -1, then the player has lost the battle.</div>
<span class="erm-anchor" id="ref-rec-ba-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/ba/#ref-tr-ba">!?BA</a></div>
<hr><div class="erm-paragraph">
<strong><span class="erm-tone-red"><span class="erm-anchor" id="ref-rec-ba-a"></span><span class="erm-anchor" id="command-a"></span>A$</span></strong><br>
Get or check (NOT set) if battle is AI only<br>
         $ – 1 if it's only a theoretical battle (fully AI battle)<br>
         $ – 0 if this is a real or quick battle<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ba-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ba-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can set this parameter, but it will not lead to anything. If there is a battle on the map (hero on the hero, hero on creatures, hero on the defending object...), 
always fires trigger !?BA#; Also the corresponding receiver !!BA... works great. BUT. If the battle takes place WITHOUT a human player 
(fully AI battle, not quick battle!), no real simulation occurs. The AI ​​simply calculates possible losses using the AI ​​value of the creatures, nothing more. 
This means that the following receivers cannot be used in such battles (the corresponding triggers will also not work in this case):<br>
<a href="../bg/#ref-rec-bg">!!BG</a>, <a href="../bm/#ref-rec-bm">!!BM</a>, 
<a href="../bh/#ref-rec-bh">!!BH</a>, <a href="../bu/#ref-rec-bu">!!BU</a>, <a href="../bf/#ref-rec-bf">!!BF</a><br>
This is important for anyone who wants to change the course of the battle with certain parameters. The game will most likely just crash.<br>
Even in a human player battle, the battle manager is not fully defined in the !?BA trigger section; yes, you <strong>you can't</strong> use <br>
<pre class="erm-example"><code class="language-erm">!?BA0;
!!BH0:N?v426;</code></pre>
Receiver BH must be used in the corresponding trigger section or later.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ba-b"></span><span class="erm-anchor" id="command-b"></span>B#</strong></span><br>
Set <a href="../../tables/battle-backgrounds/#ref-form-ba-b" data-context="true">background #</a> battlefields.<br>
<strong><br><span class="erm-anchor" id="ref-rec-ba-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ba-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Background 21 is a clean field; I'm guessing there was supposed to be a background for the Battle of Tailwind, but it wasn't completed.<br>
Background 24 (ship-to-ship battle) does not change the cells of the space between ships to impassable if the battle is not carried out on the water and not against a ship. 
Those. It will be possible for creatures to pass through the water space and stand there.<br></div></details></strong></div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>B^file.pcx^</strong></span><br>
Set your own picture for the battlefield.<br>
The background file is searched in the folder <em class="erm-legacy-file">DATA</em>. As usual, the file name + extension must not exceed 12 characters.</div>
<hr><div class="erm-paragraph">
<strong><span class="erm-tone-red"><span class="erm-anchor" id="ref-rec-ba-d"></span><span class="erm-anchor" id="command-d"></span>D#</span></strong><br>
Cancel or resolve battle<br>
         # – 1 to cancel (automatic win)<br>
         # – 0 to resolve battle</div>
<hr><div class="erm-paragraph">
<strong><span class="erm-tone-red"><span class="erm-anchor" id="ref-rec-ba-e"></span><span class="erm-anchor" id="command-e"></span>E$</span></strong><br>
Check for MP battle:<br>
         $ is the battle status:<br>
            = 2 – AI battle against an inactive Human (on a remote computer)<br>
            = 1 – human versus human (2 computers)<br>
            = 0 – if this is any other battle (on this computer)<br>
<strong></strong><br></div><span class="erm-anchor" id="ref-rec-ba-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ba-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Use this command to disable scripts that do not support MP battles.<br>
If $ is greater than zero, the battle becomes difficult to control with ERM.<br>
In Hot Site this value is always 0, the same for a single player game.</div></details>
<hr><div class="erm-paragraph">
<strong><span class="erm-tone-red"><span class="erm-anchor" id="ref-rec-ba-h"></span><span class="erm-anchor" id="command-h"></span>H#/$</span></strong><br>
Set fighting heroes<br>
         # – 0 for attacker <br>
         # – 1 for defender <br>
         $ – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a>. 
$ = -2 if there is no hero (this value is only possible for the defender)<br>
Don't try to set the attacking hero to -2 (i.e. make him disappear from the battlefield). The game will simply crash in such a battle.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ba-m"></span><span class="erm-anchor" id="command-m-1-2-1-2"></span>M#1/#2/$1/$2</strong></span><br>
Set/check/get creatures in battle<br>
         #1 – attacker creature (0) or defender (1)<br>
         #2 – slot (0..6)<br>
         $1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> ( -1 if slot is empty)<br>
         $2 – number of creatures</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ba-o"></span><span class="erm-anchor" id="command-o-1-2"></span>O$1/$2</strong></span><br>
Get attacking and defending player<br>
         $1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">owner</a> attacker<br>
         $2 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">owner</a> protector (master of a hero or creature)<br>
<strong><u>Comment</u>:</strong> you can only check or get, setting the value will not change anything.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ba-p"></span><span class="erm-anchor" id="command-p-1-2-3"></span>P$1/$2/$3</strong></span><br>
Position on the map (only affects the background and homeland bonuses)<br>
        $1 – X; <br>
        $2 – Y; <br>
        $3 – L (level)<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-ba-4"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-ba-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!BA:P10/15/0; - establish that the battle is taking place in square 10/15/0 (it doesn’t matter what is located there)</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ba-q"></span><span class="erm-anchor" id="command-q"></span>Q$</strong></span><br>
Set/check/get the flag of a quick battle<br>
         $ – 1 if quick battle is activated<br>
         $ – 0 if disabled</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ba-s"></span><span class="erm-anchor" id="command-s"></span>S$</strong></span><br>
Check/get siege battle type<br>
         $ – battle type,
<br>
            = 0 – normal battle<br>
            = 1 – siege of the fort<br>
            = 2 – siege of the citadel<br>
            = 3 – castle siege<br>
You will get the correct value in the trigger <a href="../../triggers/br/#ref-tr-br">!?BR</a> or later. In trigger <a href="../../triggers/ba/#ref-tr-ba">!?BA</a> value is not defined.<br>
You can set the parameter, but it won't change anything.</div>

<hr>










</div>
</div>
</section>
:::

## Related reference {#related}

[BA](../../triggers/ba/) · [BM](../../receivers/bm/)



## Related commands and tables {#reference-links}

[Battle start and completion (BA)](../../triggers/ba/) · [Current battle action (BG)](../bg/) · [Battle stack (BM)](../bm/) · [Battle hero actions (BH)](../bh/) · [Battlefield operations (BU)](../bu/) · [Battlefield setup (BF)](../bf/) · [Battle backgrounds](../../tables/battle-backgrounds/) · [Hero table](../../tables/heroes/) · [Creature table](../../tables/creatures/) · [Player colors](../../tables/players/) · [Battle rounds (BR)](../../triggers/br/)

<!-- llm:end erm.receivers.ba 1 -->

