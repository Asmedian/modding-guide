---
{"title":"Commander events (CO)","summary":"0 before the commander window, 1 after closing, 2 after purchase, 3 after resurrection. HE-1 and CO-1 access the current hero and commander.","translationStatus":"reviewed"}
---

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
