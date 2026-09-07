---
{"title":"Mouse clicks (CM)","summary":"0 adventure-map right click; 1 town; 2 hero; 3 hero meeting; 4 battle; 5 adventure-map left click. CM provides coordinates, item, and action.","translationStatus":"reviewed"}
---

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

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4007) — Function parameters (FU:P, DO:P), which were passed using GET-syntax, are now initialized with original variable value. The behavior is similar to pass-by-reference in other programming languages. Example: !?FU(Add3):; ;…
<!-- ERA3-GENERATED:END -->
