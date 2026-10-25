# Battlefield setup (BF)

ID: erm.receivers.bf
URL: /en/erm/receivers/bf/
Part: 1/1
Source references: old-help:rec-bf.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.bf 1 -->
## Receiver BF {#ref-rec-bf}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>

<span class="erm-anchor" id="ref-rec-bf-text"></span><div>

<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>BF</strong> (battlefield)</span></div>
<div class="erm-paragraph"><br>
<span class="erm-anchor" id="ref-rec-bf-red"></span><span class="erm-tone-red"><strong>!!BF:XXXX;</strong></span> <strong>- installations <a href="../../tables/battlefield/#ref-form-bf" data-context="true">battlefields</a>.</strong><br>
This command allows you to customize the battlefield and can only be used after trigger <a href="../../triggers/bf/#ref-tr-bf">!?BF</a>, 
because Preparation of the battlefield begins before the battle, although the placement of obstacles IS POSSIBLE during the battle itself.<br>
<strong></strong><br></div><span class="erm-anchor" id="ref-rec-bf-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bf-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
We also noticed that <a href="../vr/#ref-rec-vr-r">VR:R</a> doesn't work inside the BF trigger, or rather plays the same series of numbers for every battle. 
The first number generated in a battle is always the same number generated in any other battle. 
Although, the command <a href="../vr/#ref-rec-vr-t">VR:T</a> works great, but obviously can only be used once in the !?BF trigger.<br>
<strong>Reply from <span class="erm-anchor" id="ref-rec-bf-n1"></span><strong class="erm-tone-purple erm-strong">Slava Salnikov</strong> aka <strong class="erm-tone-purple erm-strong">ZVS</strong>:</strong><br>
I think this is done on purpose so that you can use the same battle pattern every time you load the map. 
But there is a way around this:<br>
1. Generate a number with the command VR:T → n<br>
2. Now we generate n-random numbers with the command VR:R and skip them<br>
3. Now you are ready to use VR:R in your script.</div></details>
<span class="erm-anchor" id="ref-rec-bf-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/bf/#ref-tr-bf">!?BF</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bf-c"></span><span class="erm-anchor" id="command-c"></span><span class="erm-tone-red"><strong>C</strong></span><br>
Clear battlefield (each square is available)
<br>
<strong><u>Comment</u>:</strong> If you need to remove a specific obstacle without erasing the rest battlefield, try casting spell "Remove Obstacle" on it.<br>
<span class="erm-anchor" id="ref-rec-bf-bold"></span><em class="erm-strong">Note:</em> If you use the command during a castle siege, town will lose all walls and towers (will be considered broken).</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bf-m"></span><span class="erm-anchor" id="command-m-1-11-12"></span><strong><span class="erm-tone-red">
M#1/#2/#3/#4/#5/#6/#7/#8/#9/#10/#11(/#12)</span></strong><br>
Place a rock at a specific position on battlefield<br>
         #1 – bit position from 0 to 16<br>
         #2 – bit position from 17 to 33<br>
         #3 – bit position from 34 to 50…<br>
        …<br>
         #11 – bit position from 170 to 186<br>
         #12 – <a href="../../tables/obstacles/#ref-form-obstacles" data-context="true">type of obstacle</a> (0..90)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bf-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bf-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This command includes the functionality <a href="./#ref-rec-bf-c">BF:C</a>.<br>
If the 12th parameter is omitted, obstacle 84 is used.<br>
You can also place an "invisible" obstacle by setting #12 to -1. It is invisible and occupies 1 cell. 
So, you can create a special background for the battlefield, taking into account the impassability of some places, which are made impassable through the script using invisible obstacles. 
Such obstacles cannot be removed with the spells "Remove Obstacle" and "Remove Spells".<br>
<u>Example</u>: (<a href="../../tables/battlefield/#ref-form-bf-s1" data-context="true">see screenshot</a>)<br>
Beaten position: let there be rocks in the top row of the battlefield: 11111111111111111 = 131071 (1+2+4+8+…+65536)<br>
In the rest - let there be only one rock at the beginning and one at the end: 100000000000000001 = 65537 (65536+1)
<pre class="erm-example"><code class="language-erm">ZVSE
!?BF;
!!BF:M131071/65537/65537/65537/65537/65537/65537/65537/65537/65537/131071;</code></pre></div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red">
<span class="erm-anchor" id="ref-rec-bf-o"></span><span class="erm-anchor" id="command-o-1-2"></span><strong>O#1/#2</strong></span><br>
Place a separate object<br>
         #1 – <a href="../../tables/obstacles/#ref-form-obstacles" data-context="true">type of obstacle</a> (0..90)<br>
         #2 – <a href="../../tables/battlefield/#ref-form-bf" data-context="true">position</a> (0..186)<br>
<strong><u>Comment</u>:</strong> some obstacles look proper only on their “native” soil</div>

<hr>
<div class="erm-paragraph"><strong>Battlefield:</strong><br>Battlefield grid: cells 0–186, 11 rows of 17 cells.</div>









</div>
</div>
</section>
:::

## Related reference {#related}

[BF](../../triggers/bf/) · [BU](../../receivers/bu/)



## Related commands and tables {#reference-links}

[Battlefield hexes](../../tables/battlefield/) · [Battlefield setup (BF)](../../triggers/bf/) · [Variables and expressions (VR)](../vr/#command-r-r-r0-min-max-free-t) · [Battlefield obstacles](../../tables/obstacles/)
<!-- llm:end erm.receivers.bf 1 -->

# Current battle action (BG)

ID: erm.receivers.bg
URL: /en/erm/receivers/bg/
Part: 1/1
Source references: old-help:rec-bg.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.bg 1 -->
## Receiver BG {#ref-rec-bg}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-bg-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>BG</strong> (actions in battle)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-bg-red"></span><span class="erm-tone-red">!!BG:XXXX;</span> - in battle you can set/check/get the parameters of creature action.</strong></div>
<span class="erm-anchor" id="ref-rec-bg-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: triggers <a href="../../triggers/bg/#ref-tr-bg">!?BG</a> and <a href="../../triggers/br/#ref-tr-br">?!BR</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bg-a"></span><span class="erm-anchor" id="command-a"></span><strong><span class="erm-tone-red">A$</span></strong><br>
Action type:<br>
        $ = <br>
             0 – cancel action (stack 
theoretically can do this action, but it is impossible to do for some reason 
reason, for example, trying to escape from the shackles of war uses exactly this 
steps to cancel)<br>
             1 – hero casts spell<br>
             2 – walking<br>
             3 – protection<br>
             4 – run away from the battle<br>
             5 – pay off<br>
             6 – go and attack<br>
             7 – shoot<br>
             8 – wait<br>
             9 – wall attack (Catapult, Cyclops)<br>
             10 – creature casts spell (Fairytale dragon)<br>
             11 – First Aid Tent (healing)<br>
             12 – no action (can be used as a waste of a unit’s turn)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bg-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bg-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Attacking castle towers is considered normal shooting. You can check the shooting towers via <a href="../mf/#ref-rec-mf-w">MF:W</a>.<br>
<span class="erm-anchor" id="ref-rec-bg-bold"></span><em class="erm-strong">Note:</em> when using BG:A flags (wait, walked, protect) are not set to the active stack.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bg-d"></span><span class="erm-anchor" id="command-d"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
Destination point (magic on a creature, movement or attack). See
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">battlefield</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bg-e"></span><span class="erm-anchor" id="command-e"></span><span class="erm-tone-red"><strong>E$</strong></span><br>
Get the number of the unit to which the action of the stack is directed (-1 if the creature 
no)</div>
<hr><div class="erm-paragraph">
<strong>
<span class="erm-anchor" id="ref-rec-bg-h"></span><span class="erm-anchor" id="command-h"></span><span class="erm-tone-red">H$</span></strong><br>
<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">Number</a> hero – owner of the active stack (-1 = no hero)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bg-n"></span><span class="erm-anchor" id="command-n"></span><span class="erm-tone-red"><strong>N$</strong></span><br>
Number of the current active stack (0..41).<br>
If used in a trigger <a href="../../triggers/bg/#ref-tr-bg">!?BG1</a>, returns the number of the unit to which the move will be transferred</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bg-q"></span><span class="erm-anchor" id="command-q"></span><span class="erm-tone-red"><strong>Q?$</strong></span><br>
Current walking side: left (0) or right (1). Only receive or check.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bg-s"></span><span class="erm-anchor" id="command-s"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
ID of the spell being cast <a href="../../tables/spells/#ref-form-spell" data-context="true">spells</a><br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bg-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bg-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If creature casts spell before an action (Sorcerers or Trolls (regeneration)), it goes <a href="../../triggers/#ref-era-new-events-2-7">before the trigger</a>.<br>
If creature comes up to attack, then this option allows you to get the cell number where he will attack from. 
If creature fires, the value is -1.<br>
The number of the spell cast by creature is always -1.
<pre class="erm-example"><code class="language-erm">!!BG:A1; casts Hero
!!BG:S?v1; v1 contains the number of this spell
~~~~~~~~~~~~~~~~~~~~~
!!BG:A10; casts creature
!!BG:S?v1; the value in v1 will always be -1</code></pre>

Example: force a creature with a spell to cast it:
<pre class="erm-example"><code class="language-erm">!!BG:A10 S-1 Dx1; At position x1 there should be an object on which magic is cast</code></pre>
</div></details>
<hr>













</div>
</div>
</section>
:::

## Notes on modern ERA versions {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!BG:subcommands;</code></div>
<div class="erm-paragraph">In the table, <code>$</code> denotes a read/write parameter, <code>#</code> an input, and <code>?$</code> an output. Individual commands define their identifiers and ranges.</div>
<hr>
<div class="erm-paragraph">Action: 0 cancel, 1 hero spell, 2 move, 3 defend, 4 flee, 5 surrender, 6 move and attack, 7 shoot, 8 wait, 9 attack wall, 10 creature spell, 11 first-aid tent, 12 no action while spending the turn. Writing A does not automatically set the stack’s waited/defended/moved flags.</div>
<hr>
<div class="erm-paragraph">Destination cell for movement, an attack, or a spell.</div>
<hr>
<div class="erm-paragraph">Target stack; -1 if there is none.</div>
<hr>
<div class="erm-paragraph">Hero owning the active stack; -1 if no hero exists.</div>
<hr>
<div class="erm-paragraph">Active stack 0..41. In classic BG1 this can already be the next stack receiving control; use the separate OnBattleActionEnd event when exact action completion matters.</div>
<hr>
<div class="erm-paragraph">Acting side: 0 attacker, 1 defender. Read only.</div>
<hr>
<div class="erm-paragraph">Meaning depends on the action: the hero’s spell ID, the attack-origin cell for move-and-attack, or -1 for shooting and creature casting in the classic implementation.</div>
<hr>
<div class="erm-paragraph">This receiver requires active battle context. Change an action before execution. Do not interpret S as a spell ID without checking A. Tower damage counts as shooting; MF provides additional context.</div></section>
:::

## Related reference {#related}

[BG](../../triggers/bg/) · [MF](../../receivers/mf/)



## Related commands and tables {#reference-links}

[Battle actions (BG)](../../triggers/bg/) · [Battle rounds (BR)](../../triggers/br/) · [Physical damage (MF)](../mf/#command-w) · [Battlefield hexes](../../tables/battlefield/) · [Hero table](../../tables/heroes/) · [Spell table](../../tables/spells/) · [ERM triggers and events](../../triggers/)
<!-- llm:end erm.receivers.bg 1 -->

# Battle hero actions (BH)

ID: erm.receivers.bh
URL: /en/erm/receivers/bh/
Part: 1/1
Source references: old-help:rec-bh.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.bh 1 -->
## Receiver BH {#ref-rec-bh}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-bh-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver 
<strong>BH </strong>(actions of the hero)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-bh-red"></span><span class="erm-tone-red"><br>
!!BH#:XXXX;</span> 
- in battle you can set/check/get the parameters of the hero's action.</strong><br>
# – the side that will perform the action (0 – attacker, 1 – defender)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bh-c"></span><span class="erm-anchor" id="command-c-1-2-3-4"></span><span class="erm-tone-red"><strong>C#1/#2/#3/#4</strong></span><br>
Cast spell<br>
         #1 –
<a href="../../tables/spells/#ref-form-spell" data-context="true">spell</a><br>
         #2 –
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">position</a><br>
         #3 – hero skill level (0..3)<br>
         #4 – check existence 
targets (0=ignore, spell will trigger on all allies of the caster)<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-bh-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bh-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	You can cast spells that do not have a mass effect on all allied creatures (for example, Magic Mirror); for 
use 0 as the 4th parameter. But not all spells work correctly using this method (for example, Clone).<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!BH:C36/0/0/0; - apply Magic Mirror to the entire allied army for 3 rounds
!!BH:C36/18/3/1; - cast Magic Mirror for 3 rounds on creature in square 18, if it is there.</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-bh-m"></span><span class="erm-anchor" id="command-m"></span>M$</strong></span><br>
Allow (0) or deny (1) spell casting<br>
<strong></strong> 
</div><span class="erm-anchor" id="ref-rec-bh-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bh-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">If you re-enable the casting of a spell after the casting has occurred, the Spell Book button will only become active after performing some in-game action in battle (for example, changing the active unit). However, the actual summoning of the Book of Spells (click on the hero/key C) will be available immediately as soon as you re-enable the spell.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bh-n"></span><span class="erm-anchor" id="command-n"></span><span class="erm-tone-red"><strong>N?$</strong></span><br>
Receive or check 
	<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">number</a> walking hero (-1 if not 
hero)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bh-q"></span><span class="erm-anchor" id="command-q-1-2-3"></span><span class="erm-tone-red"><strong>Q#1/#2/#3</strong></span><br>
Place a section of Quicksand or Mine in position<br>
         #1 – type (0 = quicksand, 1 
= mines)<br>
         #2 –
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">position</a><br>
         #3 – update (1) or not (0)<br>
The position will be checked automatically for the presence of an obstacle (if there is one, then spell will not place anything)</div>

<hr>












</div>
</div>
</section>
:::

## Related reference {#related}

[BA](../../receivers/ba/)



## Related commands and tables {#reference-links}

[Spell table](../../tables/spells/) · [Battlefield hexes](../../tables/battlefield/) · [Hero table](../../tables/heroes/)
<!-- llm:end erm.receivers.bh 1 -->

