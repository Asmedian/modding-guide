---
{"title":"Network battle data transfer (IP)","summary":"0 before the attacker sends initial data, 1 after the defender receives it; 2 before results are sent, 3 after receiving them. IP provides additional synchronization.","translationStatus":"reviewed"}
---

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
 - installed <em>v</em>-variables v9001-v10000<br>
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
 - installed <em>v</em>-variables v9001-v10000</li>
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
