---
{"title":"Town hall (TH)","summary":"0 enters the town hall; 1 leaves it. Changes can be associated with visiting the construction screen.","translationStatus":"reviewed"}
---

## Receiver TH {#ref-tr-th}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>TH</strong> (town hall)</span></div>
<br>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-th-red"></span><span class="erm-tone-red">!?TH#;</span> - triggered upon entering the town hall (prefecture, municipality, capitol).<br>
<span class="erm-tone-red">!?TH0;</span> - triggers when you enter it.<br>
<span class="erm-tone-red">!?TH1;</span> - triggers when exiting it.</strong></div>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong><br>
1. You can use !?TH1 to check the constructed building in the town.<br>
2. You can also use this trigger to reset the construction flag using the command 
<a href="../../receivers/ca/#ref-rec-ca-r">CA:R</a> to receive additional buildings that day.</div>
<span class="erm-anchor" id="ref-tr-th-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/ca/#ref-rec-ca">!!CA</a>, events <a href="../#ref-era-new-events-2-26">OnTownHallMouseClick</a> and <a href="../#ref-era-new-events-2-31">OnBuildTownBuilding</a></div>

</div>
</section>
:::

## When it fires {#event}

0 enters the town hall; 1 leaves it. Changes can be associated with visiting the construction screen.

## Declaration {#syntax}

```erm
!?TH0; / !?TH1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `TH0` | `OnEnterTownHall` | 30324 |
| `TH1` | `OnLeaveTownHall` | 30325 |

## Limitations and ordering {#limits}

Leaving the hall does not mean a building was constructed. Use OnBuildTownBuilding/OnAfterBuildTownBuilding for construction.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Towns (CA)](../../receivers/ca/#command-r) · [Towns (CA)](../../receivers/ca/) · [ERM triggers and events](../)
