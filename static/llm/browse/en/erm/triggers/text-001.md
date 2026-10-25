# Artifact equipment (AE)

ID: erm.triggers.ae
URL: /en/erm/triggers/ae/
Part: 1/1
Source references: old-help:tr-ae.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.ae 1 -->
## Trigger AE {#ref-tr-ae}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>AE</strong> (putting on/taking off artifact)</span></div><br>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-ae-red"></span><span class="erm-tone-red">!?AE#;</span> - removing or putting on an artifact<br>
<span class="erm-tone-red">!?AE0;</span> - triggers when removing an artifact<br>
<span class="erm-tone-red">!?AE1;</span> - triggers when equipping an artifact</strong></div>
<div class="erm-paragraph">
Trigger is triggered when the player removes/equips artifact, or when 
artifact is taken and automatically dressed.<br>
This trigger can be useful for artifact scripts, for 
adding/subtracting the hero’s primary skills or secondary skill.<br>
Current hero (!!HE-1) – hero-owner of the artifact.<br>
    <strong>v998</strong> contains 
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact number</a><br>
    <strong>v999</strong> contains 
<a href="../../tables/artifact-slots/#ref-form-ap" data-context="true">item number</a> (slot) where artifact was placed.</div>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong><br>
This command does not work for a backpack.<br>
If you change one artifact to another, several additional ones will trigger 
triggers. Here they are:
</div><span class="erm-anchor" id="ref-tr-ae-t0"></span><ol class="erm-margin-top-zero">
<li>AE0 (start artifact)</li>
<li>AE1 (start artifact)</li>
<li>AE0 (start artifact)</li>
<li>AE1 (new artifact)</li>
<li>AE0 (new artifact)</li>
<li>AE1 (new artifact)</li>
</ol></div>
</section>
:::

## When it fires {#event}

0 unequips; 1 equips. The current hero owns the artifact, `v998` is the [artifact ID](../../tables/artifacts/), and `v999` its [slot](../../tables/artifact-slots/). Current hero `!!HE-1` owns the artifact. Automatically equipping a newly acquired artifact also fires the event.

## Declaration {#syntax}

```erm
!?AE0;
!?AE1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `AE0` | `OnUnequipArt` | 30315 |
| `AE1` | `OnEquipArt` | 30316 |

## Limitations and ordering {#limits}

Rearranging backpack items is not equipment. Replacing one artifact with another fires multiple events; handlers must tolerate repeated calls.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Artifact table](../../tables/artifacts/) · [Artifact slots](../../tables/artifact-slots/)
<!-- llm:end erm.triggers.ae 1 -->

# Battle start and completion (BA)

ID: erm.triggers.ba
URL: /en/erm/triggers/ba/
Part: 1/1
Source references: old-help:tr-ba.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.ba 1 -->
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
<!-- llm:end erm.triggers.ba 1 -->

# Battlefield setup (BF)

ID: erm.triggers.bf
URL: /en/erm/triggers/bf/
Part: 1/1
Source references: old-help:tr-bf.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.bf 1 -->
## Trigger BF {#ref-tr-bf}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>BF</strong> (battlefield)</span></div>

<div class="erm-paragraph"><span><strong><span class="erm-anchor" id="ref-tr-bf-red"></span><span class="erm-tone-red">!?BF;</span>- called during 
preparing the battlefield, right before the battle itself.<br></strong>
Can be used with receiver <a href="../../receivers/bf/#ref-rec-bf">!!BF</a></span><span> to set a customized battlefield.<br>
Does not work if there are no human players in the battle.</span></div>

</div>
</section>
:::

## When it fires {#event}

The battlefield-configuration point before combat. BF can place obstacles.

## Declaration {#syntax}

```erm
!?BF;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `BF` | `OnSetupBattlefield` | 30800 |

## Limitations and ordering {#limits}

Legacy Help excludes battles without a human. Do not call BU:R to redraw at this stage.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Battlefield setup (BF)](../../receivers/bf/)
<!-- llm:end erm.triggers.bf 1 -->

# Battle actions (BG)

ID: erm.triggers.bg
URL: /en/erm/triggers/bg/
Part: 1/1
Source references: old-help:tr-bg.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.bg 1 -->
## Trigger BG {#ref-tr-bg}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>BG </strong>(action in battle)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-bg-red"></span><span class="erm-tone-red">!?BG#;</span> 
- this combat trigger is triggered with every stack or hero action 
(spellcasting, retreat, or surrender).<br>
<span class="erm-tone-red">!?BG1</span>; - triggers when a move is transferred from one creature to another<br>
<span class="erm-tone-red">!?BG0;</span> - triggers before an action</strong></div>
<div class="erm-paragraph">Variable <strong>v997</strong> stores the number of the current round:<br>
        v997=0 – first round (after tactical setup)<br>
        v997=1 – second round<br>
        v997=2 – third round<br>
        …</div>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong> you can use this trigger with receiver <a href="../../receivers/bg/#ref-rec-bg">!!BG</a> 
to find the creature's stack number (<a href="../../receivers/bg/#ref-rec-bg-n">!!BG:N</a>) and 
use this number to change creature settings (<a href="../../receivers/bm/#ref-rec-bm">!!BM</a>).
Also, if hero runs away from the battlefield, trigger will trigger first <strong>!?BG0;</strong> and then, after clicking on OK in the loss window, it fires <strong>!?BG1</strong>.</div>

</div>
</section>
:::

## When it fires {#event}

BG0 precedes an action; BG1 is associated with action completion and passing control. Read action parameters through BG; v997 stores the round.

## Declaration {#syntax}

```erm
!?BG0; / !?BG1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `BG0` | `OnBeforeBattleAction` | 30303 |
| `BG1` | `OnAfterBattleAction` | 30304 |

## Limitations and ordering {#limits}

BG:N during BG1 may already refer to the next stack. OnBattleActionEnd provides a more precise action-completion point.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Current battle action (BG)](../../receivers/bg/) · [Current battle action (BG)](../../receivers/bg/#command-n) · [Battle stack (BM)](../../receivers/bm/)
<!-- llm:end erm.triggers.bg 1 -->

# Battle rounds (BR)

ID: erm.triggers.br
URL: /en/erm/triggers/br/
Part: 1/1
Source references: old-help:tr-br.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.br 1 -->
## Trigger BR {#ref-tr-br}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>BR</strong> (course of battle)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-br-red"></span><span class="erm-tone-red">!?BR;</span> - this combat trigger is triggered at the beginning of each battle round 
(for the first round it triggers twice).</strong><br>
<strong><span class="erm-tone-red">!?BR#;</span> - trigger is triggered for a specific round:</strong><br> 
         # = -1 – “zero” round (before 
tactical arrangement)<br>
         # = 0 – first round (after 
tactical arrangement)<br>
         # = 1 – second round<br>
         # = 2 – third round<br>
         # = ... etc</div>
<span class="erm-anchor" id="ref-tr-br-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: event <a href="../#ref-era-new-events-2-22">OnCombatRound</a></div>
<div class="erm-paragraph"><strong><u>Comment</u></strong>: variable <strong>v997</strong> stores the number of the current round.<br>
A new round starts between triggers <a href="../bg/#ref-tr-bg">!?BG0</a> and <a href="../bg/#ref-tr-bg">!?BG1</a>.<br>
The starting rounds (!?BR-1 and !?BR0) are in the "dark" zone and you cannot show any message until you can do something.</div>
<div class="erm-paragraph">
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?BR; a new round has started
!!VRv5000:Sv997; store the round number in v5000 for other needs</code></pre></div>
</div>
</section>
:::

## When it fires {#event}

The classic code accepts a round selector: -1 before tactics, 0 first round, 1 second. v997 is the round counter; early phases run before the field is visible.

## Declaration {#syntax}

```erm
!?BR; / !?BR#;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `BR` | `OnBattleRound` / `OnCombatRound` | 30302 |

## Limitations and ordering {#limits}

The supplied Erm.pas registers OnCombatRound and OnBattleRound for the same event, with the last name canonical. Older descriptions distinguished the named event from BR; do not mix version contracts.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [Battle actions (BG)](../bg/)

<!-- llm:end erm.triggers.br 1 -->

# Mouse clicks (CM)

ID: erm.triggers.cm
URL: /en/erm/triggers/cm/
Part: 1/1
Source references: old-help:tr-cm.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.cm 1 -->
## Trigger CM {#ref-tr-cm}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>CM </strong>(mouse click)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-cm-red"></span><span class="erm-tone-red">!?CM#;</span> 
- trigger, called when you click the mouse.<br>
<span class="erm-tone-red">!?CM0;</span> - called when clicked <span class="erm-anchor" id="ref-tr-cm-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> on the adventure map<br>
<span class="erm-tone-red">!?CM1;</span> - called when clicking in the castle window<br>
<span class="erm-tone-red">!?CM2;</span> - called when clicking in the hero window<br>
<span class="erm-tone-red">!?CM3;</span> - called when clicking in the exchange window between heroes<br>
<span class="erm-tone-red">!?CM4;</span> - called when clicking on battlefield<br>
<span class="erm-tone-red">!?CM5;</span> - called when clicked <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> on the adventure map<br>
<br>
<u>Comment</u>:</strong><br>
You can use the command <a href="../../receivers/cm/#ref-rec-cm-p">!!CM:P</a> 
only in triggers where # = 0 or # = 5 (!?CM; !?CM0; !?CM5;)<br>
One of these triggers must precede the receiver <a href="../../receivers/cm/#ref-rec-cm">!!CM</a>.</div>

</div>
</section>
:::

## When it fires {#event}

0 adventure-map right click; 1 town; 2 hero; 3 hero meeting; 4 battle; 5 adventure-map left click. CM provides coordinates, item, and action.

## Declaration {#syntax}

```erm
!?CM0; / !?CM1; / !?CM2; / !?CM3; / !?CM4; / !?CM5;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `CM0` | `OnAdventureMapRightMouseClick` | 30310 |
| `CM1` | `OnTownMouseClick` | 30311 |
| `CM2` | `OnHeroScreenMouseClick` | 30312 |
| `CM3` | `OnHeroesMeetScreenMouseClick` | 30313 |
| `CM4` | `OnBattleScreenMouseClick` | 30314 |
| `CM5` | `OnAdventureMapLeftMouseClick` | 30319 |

## Limitations and ordering {#limits}

CM:P applies to the adventure map/minimap. Cancel the default reaction with CM:R0; FU:E is not a substitute.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Mouse-event context (CM)](../../receivers/cm/#command-p-1-2-3) · [Mouse-event context (CM)](../../receivers/cm/)

<!-- llm:end erm.triggers.cm 1 -->

# Commander events (CO)

ID: erm.triggers.co
URL: /en/erm/triggers/co/
Part: 1/1
Source references: old-help:tr-co.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.co 1 -->
## Trigger CO {#ref-tr-co}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>CO</strong> (commanders)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-co-red"></span><span class="erm-tone-red">!?CO#;</span> - control over commanders.<br>
<span class="erm-tone-red">!?CO0;</span> - called before opening the commander window<br>
<span class="erm-tone-red">!?CO1;</span> - called after closing the commander window<br>
<span class="erm-tone-red">!?CO2;</span> - summoned after purchasing a commander in the town<br>
<span class="erm-tone-red">!?CO3;</span> - summoned after the resurrection of the commander in the town</strong></div>
<div class="erm-paragraph">Variables and flags work as usual: flag 1000 stores the AI status (if = 0 (False) - this is a computer player); 
flag 999 indicates whether the player is currently using this computer; variables v998, v999, v1000 store the coordinates of the current hero.<br>
The current host hero can be customized via <a href="../../receivers/he/#ref-rec-he">!!HE-1</a>:…; commander through <a href="../../receivers/co/#ref-rec-co">!!CO-1</a>:…</div>

</div>
</section>
:::

## When it fires {#event}

0 before the commander window, 1 after closing, 2 after purchase, 3 after resurrection. HE-1 and CO-1 access the current hero and commander.

## Declaration {#syntax}

```erm
!?CO0; / !?CO1; / !?CO2; / !?CO3;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `CO0` | `OnOpenCommanderWindow` | 30340 |
| `CO1` | `OnCloseCommanderWindow` | 30341 |
| `CO2` | `OnAfterCommanderBuy` | 30342 |
| `CO3` | `OnAfterCommanderResurrect` | 30343 |

## Limitations and ordering {#limits}

Do not confuse this trigger or the CO receiver with lowercase co, which continues a loop.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Heroes (HE)](../../receivers/he/) · [Commanders (CO)](../../receivers/co/)
<!-- llm:end erm.triggers.co 1 -->

# Custom dialog events (DL)

ID: erm.triggers.dl
URL: /en/erm/triggers/dl/
Part: 1/1
Source references: old-help:tr-dl.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.dl 1 -->
## Trigger DL {#ref-tr-dl}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>DL</strong><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(dialogue element)</span></div>
<div class="erm-paragraph"><br><span class="erm-anchor" id="ref-tr-dl-red"></span><span class="erm-tone-red"><strong>!?DL;</strong></span> <strong>- Trigger customized dialog.</strong><br>

Triggered by any mouse or keyboard action (not yet supported) on any dialog element<br>
When the trigger fires, the following variables are set:<br>
<strong>   v998</strong> - dialogue number<br>
<strong>   v999</strong> - element number<br>
<strong>   v1000</strong> - action:<br>
<span class="erm-anchor" id="ref-tr-dl-step"></span><span class="erm-indent">      = 10 - active "button" element pressed</span><br>
<span class="erm-indent">      = 12 - pressed <span class="erm-anchor" id="ref-tr-dl-vc"></span><img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"></span><br>
<span class="erm-indent">      = 13 - released <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"></span><br>
<span class="erm-indent">      = 14 - pressed <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"></span><br>

<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?DL&amp;v1000=13/v999=30721; pressed the button with id=30721
!!DL:C1; close dialog</code></pre></div>
<span class="erm-anchor" id="ref-tr-dl-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/dl/#ref-rec-dl">!!DL</a></div>

</div>
</section>
:::

## When it fires {#event}

Handles custom-dialog item actions. Classic context: v998 is dialog ID, v999 item ID, v1000 action.

## Declaration {#syntax}

```erm
!?DL;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `DL` | `OnCustomDialogEvent` | 30371 |

## Limitations and ordering {#limits}

Check your dialog ID before changing items. Available actions and keyboard support depend on the dialog extension version.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/) · [Custom dialogs (DL)](../../receivers/dl/)

<!-- llm:end erm.triggers.dl 1 -->

