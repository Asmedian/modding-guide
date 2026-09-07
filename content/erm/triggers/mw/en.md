---
{"title":"Wandering monsters (MW)","summary":"0 reaching a destination/hero, 1 monster death. v997 is the wandering-monster ID. Corresponding MW settings must enable these events.","translationStatus":"reviewed"}
---

## Trigger MW {#ref-tr-mw}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>MW</strong> (wandering creatures)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mw-red"></span><span class="erm-tone-red">!?MW#;</span> - trigger for wandering creatures.<br>
<span class="erm-tone-red">!?MW0;</span> - Called when reaching a destination or hero.<br>
<span class="erm-tone-red">!?MW1;</span> - Called when the stray creature dies.</strong></div>
<div class="erm-paragraph"><strong>!?MW0</strong> - is called on the next turn, after reaching a point or attacking the hero, and only if the corresponding flag is set.<br>
v997 contains the number of the wandering creature - the trigger caller.</div>
<div class="erm-paragraph"><strong>!?MW1</strong> - summoned during the turn after the death of the creature. Fires only if the corresponding flag is set.<br>
v997 contains the number of the killed roaming creature.</div>
<span class="erm-anchor" id="ref-tr-mw-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/mw/#ref-rec-mw">!!MW</a></div>
</div>
</section>
:::

## When it fires {#event}

0 reaching a destination/hero, 1 monster death. v997 is the wandering-monster ID. Corresponding MW settings must enable these events.

## Declaration {#syntax}

```erm
!?MW0; / !?MW1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MW0` | `OnWanderingMonsterReach` | 30305 |
| `MW1` | `OnWanderingMonsterDeath` | 30306 |

## Limitations and ordering {#limits}

The classic implementation fires on the next turn after arrival or death, not immediately.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Wandering monsters (MW)](../../receivers/mw/)
