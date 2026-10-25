# Function handler (FU)

ID: erm.triggers.fu
URL: /en/erm/triggers/fu/
Part: 1/1
Source references: old-help:tr-fu.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.fu 1 -->
## Trigger FU {#ref-tr-fu}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger 
<strong>FU</strong> (function)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-fu-red"></span><span class="erm-tone-red">!?FU#;</span> - function number # (1..30000)</strong></div>
<div class="erm-paragraph">The code following this trigger becomes the function code.<br>
The function itself is called by the receiver <a href="../../receivers/fu/#ref-rec-fu">!!FU</a>.</div>
<div class="erm-paragraph">
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?FU25000; - trigger
!!IF:M^This is function code 25000 and you will see this message when you call function 25000!^; - function code
!#FU25000:P; - function call string</code></pre></div>

</div>
</section>
:::

## When it fires {#event}

The function body follows its declaration and is invoked with FU:P or DO:P. Inputs and outputs use x1..x16.

## Declaration {#syntax}

```erm
!?FU(MyMod_Function);
```

## Limitations and ordering {#limits}

Reusing a name adds handlers rather than an independent overload. Use a unique mod prefix.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Function calls (FU)](../../receivers/fu/)

<!-- llm:end erm.triggers.fu 1 -->

# Global map event (GE)

ID: erm.triggers.ge
URL: /en/erm/triggers/ge/
Part: 1/1
Source references: old-help:tr-ge.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.ge 1 -->
## Trigger GE {#ref-tr-ge}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>GE</strong> (global event)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-ge-red"></span><span class="erm-tone-red">!?GE#;</span> - trigger, triggered when Global Event number # occurs.</strong><br>
The number should appear at the very beginning of the event text (the title is not important).<br>
This number will NOT be reflected in the event text while trigger is used for this event.<br>
<u>Example</u>:<br>
Text <span class="erm-anchor" id="ref-tr-ge-erm"></span><em class="erm-inline-code">123Here you are!</em> will look like <span class="erm-anchor" id="ref-tr-ge-dl3"></span><em class="erm-game-text">There you are!</em> with number 123.</div>
<div class="erm-paragraph">To change the properties of a global event, use receiver <a href="../../receivers/ge/#ref-rec-ge">!!GE</a>.</div>
</div>
</section>
:::

## When it fires {#event}

Fires for a global event whose text begins with the selected number. The technical number is hidden from the displayed message while a handler exists.

## Declaration {#syntax}

```erm
!?GE#;
```

## Limitations and ordering {#limits}

The number comes from the start of the event text, not its title or editor row position.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Global events (GE)](../../receivers/ge/)
<!-- llm:end erm.triggers.ge 1 -->

# Saving and loading (GM)

ID: erm.triggers.gm
URL: /en/erm/triggers/gm/
Part: 1/1
Source references: old-help:tr-gm.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.gm 1 -->
## Trigger GM {#ref-tr-gm}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>GM</strong> (save/load)</span></div>

<div class="erm-align-left erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-gm-red"></span><span class="erm-tone-red">!?GM#;</span> 
- trigger to save and load the game.<br>
<span class="erm-tone-red">!?GM0;</span> - called after loading a saved game, but before showing the map.<br>
<span class="erm-tone-red">!?GM1;</span> - called before saving the game, but after selecting a save slot.<br>
</strong><br>
<u>Example:</u>
<pre class="erm-example"><code class="language-erm">ZVSE
!?GM0;
!!IF:M^Loaded^;
!?GM1;
!!IF:M^Saving...^;</code></pre>
<strong><u>Comment</u>:</strong> !?GM1 is also called every time when autosaving 
(i.e. every day after clicking the "End turn" button).<br>Autosave is possible 
cancel command <a href="../../receivers/un/#ref-rec-un-j5">UN:J5</a>. Usually it's not 
recommended because autosaving is the player’s “salvation” in case of any error in the game.</div>
<span class="erm-anchor" id="ref-tr-gm-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: <a href="../#ref-era-new-events-1-1">Extension of functionality !?GM1 in ERA</a></div>


</div>
</section>
:::

## When it fires {#event}

0 after loading a save, before displaying the map; 1 before saving after slot selection. GM1 also fires for autosaves.

## Declaration {#syntax}

```erm
!?GM0; / !?GM1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `GM0` | `OnAfterLoadGame` | 30360 |
| `GM1` | `OnBeforeSaveGame` | 30361 |

## Limitations and ordering {#limits}

OnSavegameRead/Write have different timing and are intended for custom data sections. PI is not a load handler.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[General game operations (UN)](../../receivers/un/#command-j3-file-j4-j5) · [ERM triggers and events](../)
<!-- llm:end erm.triggers.gm 1 -->

# Visiting a hero (HE)

ID: erm.triggers.he
URL: /en/erm/triggers/he/
Part: 1/1
Source references: old-help:tr-he.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.he 1 -->
## Trigger HE {#ref-tr-he}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>HE</strong> (hero's visit)</span></div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-tr-he-red"></span><span class="erm-tone-red"><strong>!?HE#;</strong></span><strong> - triggers when visiting (attack or 
visit) of a certain hero number #</strong> (<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">0..155</a>)<br>
To change the hero's parameters, use receiver <a href="../../receivers/he/#ref-rec-he">!!HE</a>.</div>
</div>
</section>
:::

## When it fires {#event}

Responds to visiting or attacking the selected hero. The selector is a hero ID.

## Declaration {#syntax}

```erm
!?HE#;
```

## Limitations and ordering {#limits}

Use OnBeforeHeroInteraction and OnAfterHeroInteraction for detailed interaction control; OB does not cover heroes.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Hero table](../../tables/heroes/) · [Heroes (HE)](../../receivers/he/)
<!-- llm:end erm.triggers.he 1 -->

# Hero level-up (HL)

ID: erm.triggers.hl
URL: /en/erm/triggers/hl/
Part: 1/1
Source references: old-help:tr-hl.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.hl 1 -->
## Trigger HL {#ref-tr-hl}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>HL</strong> (gaining a level as a hero)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-hl-red"></span><span class="erm-tone-red">!?HL#;</span> 
- trigger, triggered when the hero gains a new level.</strong><br>
         # – hero number (-1 – 
any)<br>
If you are using <strong>!?HL-1</strong> and <strong>!?HL5</strong> 
(for example), !?HL-1 will fire first, and then !?HL5. 
<br>
To change the suggested primary and secondary skills, use receiver 
<a href="../../receivers/hl/#ref-rec-hl">!!HL</a>.</div>

</div>
</section>
:::

## When it fires {#event}

Fires when a hero gains a level. -1 selects all heroes. HL-1 runs before the hero-specific handler. HL edits the offered skills.

## Declaration {#syntax}

```erm
!?HL#;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `HL` | `OnHeroGainLevel` | 30600 |

## Limitations and ordering {#limits}

Distinguish the skill-selection point from OnAfterHeroGainLevel after the level-up.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Level-up skill selection (HL)](../../receivers/hl/)
<!-- llm:end erm.triggers.hl 1 -->

# Hero movement (HM)

ID: erm.triggers.hm
URL: /en/erm/triggers/hm/
Part: 1/1
Source references: old-help:tr-hm.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.hm 1 -->
## Trigger HM {#ref-tr-hm}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>HM</strong> (hero step)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-tr-hm-red"></span><span class="erm-tone-red">!?HM#;</span> - control over every step of the hero.</strong><br>
         # – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a> (-1 – any)<br>
Trigger is called before each hero's step (not after). You can check the location of the hero from the variables <strong>v998</strong>,<strong>v999</strong>,<strong>v1000</strong>. 
The movement cannot be undone.<br>
At the moment this trigger figures out the following: 
current hero (<a href="../../receivers/he/#ref-rec-he">!!HE-1</a>), 
its coordinates (<strong>v998</strong>, <strong>v999</strong>, <strong>v1000</strong> → X Y L); also flag <strong>1000</strong> is set to 1 (True), 
if a human player walks, or to 0 (False) - if AI.<br>
If you use !?HM-1; and !?HM5; (for example), then !?HM-1 will act first, and then !?HM5.<br>
<u>Example:</u>
<pre class="erm-example"><code class="language-erm">!?HM-1;
!!IF:M^Movement!^; - message when moving any hero
!?HM0;
!!IF:M^Moving Orrin!^; - message when moving Orrin</code></pre></div>

</div>
</section>
:::

## When it fires {#event}

Fires before each step. -1 selects every hero; the general handler precedes a hero-specific handler. v998/v999/v1000 hold the current hero’s coordinates.

## Declaration {#syntax}

```erm
!?HM#;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `HM` | `OnHeroMove` | 30400 |

## Limitations and ordering {#limits}

The legacy trigger cannot cancel movement. It fires frequently; do not open a dialog on every step without a suitable condition.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Hero table](../../tables/heroes/) · [Heroes (HE)](../../receivers/he/)

<!-- llm:end erm.triggers.hm 1 -->

# Network battle data transfer (IP)

ID: erm.triggers.ip
URL: /en/erm/triggers/ip/
Part: 1/1
Source references: old-help:tr-ip.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.ip 1 -->
## Trigger IP {#ref-tr-ip}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>IP</strong> (support <strong>with</strong>online <strong>and</strong>games)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-tr-ip-red"></span><span class="erm-tone-red">!?IP#;</span> - multiplayer support</strong></div>
<div class="erm-paragraph">If one hero player attacks another player hero, the following actions will occur:
</div><ol>
<li>Trigger <a href="../ba/#ref-tr-ba">!?BA0</a> will turn on for the attacking player</li>
<li>Trigger <strong>!?IP0</strong> will turn on for the attacking player</li>
<li>Transferring information to the defending player:<br>
 - information about the attacking hero<br>
 - information about the commander of the attacking hero<br>
 - set <em>v</em>-variables v9001-v10000<br>
 - all potential changes to creature parameters</li>
<li>All information sent is accepted by the defending player</li>
<li>Trigger <strong>!?IP1</strong> enabled for the defending player</li>
<li>Trigger <a href="../ba/#ref-tr-ba">!?BA0</a> turns on for the defending player.<br>
<span class="erm-anchor" id="ref-tr-ip-bold"></span><em class="erm-strong">Note:</em> valid only for the "Hot Seat" mode - when playing on different PCs it only works <a href="../ba/#ref-tr-ba">!?BA52</a>.</li>
</ol>
<div class="erm-paragraph"><strong>There is a fight.</strong></div>

<div class="erm-paragraph">If <strong>attacker</strong> player <strong>wins</strong>, then it's over.</div>

<div class="erm-paragraph">If <strong>wins</strong> <strong>defending</strong> player, move to next section:
</div><ol>
<li>The attacking player waits for the defender to gain levels</li>
<li>Hero defending player and commander gain levels</li>
<li>Trigger <strong>!?IP2</strong> turns on for the defending player</li>
<li>Transferring information to the attacking player:<br>
 - values of secondary skills of the defending hero (all 28), level and experience<br>
 - information about the commander of the defending hero (in full)<br>
 - set <em>v</em>-variables v9001-v10000</li>
<li>Trigger <a href="../ba/#ref-tr-ba">!?BA1</a> turns on for the defending player</li>
<li>The attacking player waits for the defender to finish gaining levels</li>
<li>All information is received by the attacking player</li>
<li>Trigger <strong>!?IP3</strong> turns on for the attacking player</li>
<li>Trigger <a href="../ba/#ref-tr-ba">!?BA1</a> turns on for the attacking player.</li>
</ol>
<div class="erm-paragraph">Thus, the army, heroes and commanders are synchronized on all computers.</div>

</div>
</section>
:::

## When it fires {#event}

0 before the attacker sends initial data, 1 after the defender receives it; 2 before results are sent, 3 after receiving them. IP provides additional synchronization.

## Declaration {#syntax}

```erm
!?IP0; / !?IP1; / !?IP2; / !?IP3;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `IP0` | `OnBeforeBattleBeforeDataSend` | 30330 |
| `IP1` | `OnBeforeBattleAfterDataReceived` | 30331 |
| `IP2` | `OnAfterBattleBeforeDataSend` | 30332 |
| `IP3` | `OnAfterBattleAfterDataReceived` | 30333 |

## Limitations and ordering {#limits}

Context depends on side and battle result. Local player clicks are not automatically reproduced on the other computer; Hot Seat is not equivalent to a network game.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Battle start and completion (BA)](../ba/)
<!-- llm:end erm.triggers.ip 1 -->

# Local-event visit (LE)

ID: erm.triggers.le
URL: /en/erm/triggers/le/
Part: 1/1
Source references: old-help:tr-le.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.le 1 -->
## Trigger LE {#ref-tr-le}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>LE</strong> (local event)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-le-red"></span><span class="erm-tone-red">!?LE#1/#2/#3;</span> - triggers when visiting a local event at certain coordinates, 
the event is not changed, it is used only as trigger.</strong><br>
         #1/#2/#3 = X Y L, respectively<br>
An event MUST exist at the specified point.</div>
<span class="erm-anchor" id="ref-tr-le-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/le/#ref-rec-le">!!LE</a></div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Post-trigger <strong>LE</strong></span><strong></strong></div>

<div class="erm-paragraph"><strong><span class="erm-tone-red">!$LE#1/#2/#3;</span> 
- local event, post-trigger.</strong><br>
This trigger works like !?LE, but after visiting the event.</div>
<div class="erm-paragraph"><u>Example:</u>
<pre class="erm-example"><code class="language-erm">ZVSE
!?LE10/10/0; - trigger
!!IF:M^Trigger LE triggered^;
; the message will appear before the event properties configured in the editor are initialized

!$LE10/10/0; - post-trigger
!!IF:M^Post-trigger LE^;
; the message will appear after executing the event properties configured in the editor</code></pre>
</div>

</div>
</section>
:::

## When it fires {#event}

X/Y/level selects an existing local map event. !? runs before its standard effects; !$ runs afterwards.

## Declaration {#syntax}

```erm
!?LE#1/#2/#3; / !$LE#1/#2/#3;
```

## Limitations and ordering {#limits}

The event must exist at the location. A one-shot event may disappear after visiting; account for LE’s error flag.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Local map events (LE)](../../receivers/le/)

<!-- llm:end erm.triggers.le 1 -->

# Physical damage calculation (MF)

ID: erm.triggers.mf
URL: /en/erm/triggers/mf/
Part: 1/1
Source references: old-help:tr-mf.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.mf 1 -->
## Trigger MF {#ref-tr-mf}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>MF</strong> (physical damage)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mf-red"></span><span class="erm-tone-red">!?MF1;</span> - triggers when physical damage is dealt in battle (before the action itself)</strong></div>
<div class="erm-paragraph">Receiver <a href="../../receivers/mf/#ref-rec-mf">!!MF</a> can be used to change the damage the stack takes (or nullify the damage altogether!).</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-tr-mf-bold"></span><em class="erm-strong">Note:</em> trigger <strong>!?MF0</strong> or <strong>!?MF</strong> does not exist. When using this syntax, ERM support is disabled.</div>
<div class="erm-paragraph"></div><span class="erm-anchor" id="ref-tr-mf-1"></span><details class="erm-comment"><summary><strong>Additionally</strong> (<span class="erm-anchor" id="ref-tr-mf-show1"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">When you use trigger !?MF1 in your scripts, be aware that it will trigger for various types of damage that you most likely did not take into account. This may cause side effects or errors in your script.<br>
But, if in the trigger body !?MF1 is read from memory at address <strong class="erm-tone-purple erm-legacy-event">28326C0</strong> value (number, 4 bytes), then we can find out exactly what type of physical damage is caused to the stack.</div>
<div class="table-wrap erm-reference-table"><span class="erm-anchor" id="ref-tr-mf-step"></span><table class="erm-table-zebra erm-indent" width="100%">
<caption class="erm-align-left">Values for different types of physical damage:</caption>
<span class="erm-anchor" id="ref-tr-mf-n2"></span><tr class="erm-tone-purple erm-strong"><td width="75">#</td><td>Description</td></tr>
<tr><td>4454752</td><td>Fireball Damage</td></tr>
<tr><td>4455011</td><td>Shooting Damage</td></tr>
<tr><td>4455746</td><td>Death Cloud Damage</td></tr>
<tr><td>4456676</td><td>Spin Attack Damage (hits all enemies around)</td></tr>
<tr><td>4458589</td><td>Fire Shield Damage</td></tr>
<tr><td>4460149</td><td>Death Stare Damage</td></tr>
<tr><td>4460621</td><td>Lightning Bolt</td></tr>
<tr><td>4461137</td><td>Acid Attack Damage</td></tr>
<tr><td>4462398</td><td>Melee Damage</td></tr>
<tr><td>4462479</td><td>Dragon Breath Damage</td></tr>
<tr><td>4610404</td><td>Damage from Arrow Towers</td></tr>
<tr><td>4627096</td><td>Moat Damage</td></tr>
<tr><td>5902442</td><td>Death Wave Damage</td></tr></table></div>
<div class="erm-paragraph"><strong><u>Comments</u>:</strong>
</div><ul><li>if creature can attack several targets at once, then its damage is always of the “circular attack” type (even when attacking one target);</li>
<li>the "dragon's breath" type of damage works only for the stack located behind the main target (the second attack cell);</li>
<li>spell "Death Ripple" can be considered an exception among others from the magic book, because processed first in triggers <a href="../mr/#ref-tr-mr">!?MR</a>, and then also in !?MF1 (why? remains a mystery).</li></ul>
<br>
<u>Usage example</u>:
<pre class="erm-example"><code class="language-erm">!?MF1; [before taking physical damage to the stack]
!!MF:F?y1;
!!UN:C42149568/4/?y10; we get the type of damage at address 0x28326C0
!!IF&amp;y10=4455011:L^Shot damage: {~RED}%Y1{~} units^;
!!IF&amp;y10=4462398:L^Melee damage: {~RED}%Y1{~} units^;
!!IF&amp;y10=4458589:L^Fire Shield deals {~RED}%Y1{~} damage. damage!^;</code></pre></div></details>

</div>
</section>
:::

## When it fires {#event}

Fires before damage is dealt. MF reads the target and changes final damage.

## Declaration {#syntax}

```erm
!?MF1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MF1` | `OnMonsterPhysicalDamage` | 30801 |

## Limitations and ordering {#limits}

MF0 and MF without a number are invalid. The event covers more than ordinary attacks, including towers, moats, and several special effects. BM:K does not fire MF.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Physical damage (MF)](../../receivers/mf/) · [Magic resistance (MR)](../mr/)
<!-- llm:end erm.triggers.mf 1 -->

