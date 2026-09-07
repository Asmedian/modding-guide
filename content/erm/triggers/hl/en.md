---
{"title":"Hero level-up (HL)","summary":"Fires when a hero gains a level. -1 selects all heroes. HL-1 runs before the hero-specific handler. HL edits the offered skills.","translationStatus":"reviewed"}
---

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
