---
{"title":"Battle start and completion (BA)","summary":"0/1 start/end on the attacking or local computer; 50/51 on the defender’s computer; 52/53 are universal events on both sides. Start order is BA0 or BA50, then BA52; end order is BA1 or BA51, then BA53.","translationStatus":"reviewed"}
---

## Trigger BA {#ref-tr-ba}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>BA</strong> (battle)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-ba-red"></span><span class="erm-tone-red">!?BA#;</span>This trigger is triggered in case of battle:<br>
<span class="erm-tone-red">!?BA0;</span> - at the beginning of the battle<br>
<span class="erm-tone-red">!?BA1;</span> - at the end of the battle<br>
<span class="erm-tone-red">!?BA50;</span> - at the beginning of a multiplayer battle as a defender<br>
<span class="erm-tone-red">!?BA51;</span> - at the end of a multiplayer battle as a defender</strong></div>
<div class="erm-paragraph"><strong>Network service:</strong> <a href="../bg/#ref-tr-bg">!?BG</a> and <a href="../bf/#ref-tr-bf">!?BF</a> operate on both sides and, if the variables are the same, the effects on 
both sides are also identical. Only player actions are not synchronized, and BA0/BA50 and triggers BA1/BA51 make distinctions.</div>
<div class="erm-paragraph">New triggers <strong>BA</strong>:<br>
<strong><span class="erm-tone-red">!?BA52;</span> - summoned at the beginning of the battle on both sides<br>
<span class="erm-tone-red">!?BA53;</span> - Summoned at the end of the battle on both sides</strong><br>
We get this start to the battle:<br>
  1. If the attacker behind this PC (or non-MP game), is called <strong>BA0</strong><br>
  2. If there is a defender behind this PC, it is called <strong>BA50</strong><br>
  3. Called<strong> BA52</strong>.<br>
End of battle:<br>
  1. If the attacker behind this PC (or non-MP game), is called <strong>BA1</strong><br>
  2. If there is a defender behind this PC, it is called <strong>BA51</strong><br>
  3. Called <strong>BA53</strong>.</div>
<div class="erm-paragraph">This means that if you want to have the same code for <strong>BA0</strong> and <strong>BA50</strong>, you just need to make a trigger section <strong>BA52</strong>.</div>
<div class="erm-paragraph"><strong><u>IMPORTANT!</u></strong> If you want to test the script in an MP game, you will not be able to do this on the first turn (day 1).<br>
You must skip one day for all players to receive the same parameters.</div>
<div class="erm-paragraph">For battle settings use receiver <a href="../../receivers/ba/#ref-rec-ba">!!BA</a>.</div>
</div>
</section>
:::

## When it fires {#event}

0/1 start/end on the attacking or local computer; 50/51 on the defender’s computer; 52/53 are universal events on both sides. Start order is BA0 or BA50, then BA52; end order is BA1 or BA51, then BA53.

## Declaration {#syntax}

```erm
!?BA0; / !?BA1; / !?BA50; / !?BA51; / !?BA52; / !?BA53;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `BA0` | `OnBeforeBattle` | 30300 |
| `BA1` | `OnAfterBattle` | 30301 |
| `BA50` | `OnBeforeBattleForThisPcDefender` | 30350 |
| `BA51` | `OnAfterBattleForThisPcDefender` | 30351 |
| `BA52` | `OnBeforeBattleUniversal` | 30352 |
| `BA53` | `OnAfterBattleUniversal` | 30353 |

## Limitations and ordering {#limits}

BA also fires for theoretical AI battles. Battle stacks are not ready at the start of BA; check BA:A and the required battle phase.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Battle actions (BG)](../bg/) · [Battlefield setup (BF)](../bf/) · [Battle configuration (BA)](../../receivers/ba/)
