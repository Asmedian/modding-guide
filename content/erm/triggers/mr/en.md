---
{"title":"Magic resistance (MR)","summary":"0 precedes standard damage correction for resistance; 1 follows it. In MR2, MR:F means a percentage chance of dwarf-style full resistance.","translationStatus":"reviewed"}
---

## Trigger MR {#ref-tr-mr}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>MR</strong> (magic resistance)</span></div>

<div class="erm-paragraph">
<span class="erm-anchor" id="ref-tr-mr-red"></span><span class="erm-tone-red"><strong>!?MR#;</strong></span> - combat trigger for magic resistance with ERM<br>
<span class="erm-tone-red">!?MR0;</span> - triggered before resistance calculation<br>
<span class="erm-tone-red">!?MR1;</span> - triggers after calculating resistance</div>
<div class="erm-paragraph">The procedure is as follows:
</div><dl><dd> - we have the base damage of the spell (<span class="erm-anchor" id="ref-tr-mr-n2"></span><strong class="erm-tone-purple erm-strong">M S D</strong>)</dd>
<dd> - !?MR0 is triggered; (<strong class="erm-tone-purple erm-strong">M S D F</strong>[=<strong class="erm-tone-purple erm-strong">D</strong>])</dd>
<dd> - WoG calculates adjusted damage due to the creature's standard resistance (<strong class="erm-tone-purple erm-strong">S M D</strong>→<strong class="erm-tone-purple erm-strong">F</strong>)</dd>
<dd> - !?MR1 is triggered; (<strong class="erm-tone-purple erm-strong">M S D F</strong>)</dd>
<dd> - end of correction (<strong class="erm-tone-purple erm-strong">F</strong>)</dd>
</dl>
Here <strong class="erm-tone-purple erm-strong">M</strong> – type of creature, <strong class="erm-tone-purple erm-strong">S</strong> – number of the spell, <strong class="erm-tone-purple erm-strong">D</strong> – base damage, <strong class="erm-tone-purple erm-strong">F</strong> – 
adjusted damage (see <a href="../../receivers/mr/#ref-rec-mr">!!MR</a>).<br>
WoG's standard damage correction function calculates F from D and returns it.<br>
For a creature without resistance F=D
<div class="erm-paragraph"><strong><span class="erm-tone-red">!?MR2;</span> - trigger for resistance to Dwarven style magic.</strong><br>
Triggered when calculating magic resistance according to the Dwarven style.<br>
You can use other receivers in addition to !!MR.<br>
Teams <a href="../../receivers/mr/#ref-rec-mr-n">!!MR:N</a> and <a href="../../receivers/mr/#ref-rec-mr-m">!!MR:M</a> work as before (described in triggers !?MR0 and 
!?MR1).<br>
<a href="../../receivers/mr/#ref-rec-mr-f">!!MR:F</a> used as a percentage (0..100) of the chance to resist the spell.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">ZVSE
!?MR2;
!!MR:F100; - all creatures are completely immune to all spells.</code></pre>
<span class="erm-anchor" id="ref-tr-mr-bold"></span><em class="erm-strong">Notes:</em> (by <strong>!?MR2</strong>)
</div><span class="erm-anchor" id="ref-tr-mr-t0"></span><ul class="erm-margin-top-zero"><li>Trigger never works for units under Anti-Magic;</li>
<li>When casting Mass Friendly Magic, trigger does not work on friendly creatures on which the enemy has cast Hypnotize;</li>
<li>Trigger does not work on enemy creatures on which we cast Hypnotize when casting Mass Hostile Magic;</li>
<li>Trigger does not intercept mass Dispel Spells and some other spells.</li></ul>

</div>
</section>
:::

## When it fires {#event}

0 precedes standard damage correction for resistance; 1 follows it. In MR2, MR:F means a percentage chance of dwarf-style full resistance.

## Declaration {#syntax}

```erm
!?MR0; / !?MR1; / !?MR2;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MR0` | `OnMagicBasicResistance` | 30307 |
| `MR1` | `OnMagicCorrectedResistance` | 30308 |
| `MR2` | `OnDwarfMagicResistance` | 30309 |

## Limitations and ordering {#limits}

F is damage in MR0/1 but a percentage in MR2. Anti-Magic and some mass spells bypass MR2.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Spell resistance (MR)](../../receivers/mr/) · [Spell resistance (MR)](../../receivers/mr/#command-m-n-s) · [Spell resistance (MR)](../../receivers/mr/#command-f)
