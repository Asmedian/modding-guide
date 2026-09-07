---
{"title":"Battle configuration (BA)","summary":"BA receiver: battle configuration, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Battle configuration (BA)"}
---

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
Install <a href="../../tables/battle-backgrounds/#ref-form-ba-b" data-context="true">background #</a> battlefields.<br>
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
            = 1 – person per person (2 computers)<br>
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

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3940) — BA:B now can work with any string and integer.
<!-- ERA3-GENERATED:END -->
