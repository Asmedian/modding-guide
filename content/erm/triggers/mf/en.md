---
{"title":"Physical damage calculation (MF)","summary":"Fires before damage is dealt. MF reads the target and changes final damage.","translationStatus":"reviewed"}
---

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
<tr><td>4460149</td><td>Death Glare Damage</td></tr>
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
