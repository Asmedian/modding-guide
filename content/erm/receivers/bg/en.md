---
{"title":"Current battle action (BG)","summary":"BG receiver: current battle action, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Current battle action (BG)"}
---

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
             9 – wall attack (Catapult (specialty X1), Cyclops)<br>
             10 – creature casts spell (Fairytale dragon)<br>
             11 – First aid tent (treatment)<br>
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
Number of the person being conjured <a href="../../tables/spells/#ref-form-spell" data-context="true">spells</a><br>
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

An example of how you can force a creature with spell to conjure it:
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
