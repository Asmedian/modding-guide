---
{"title":"Battle rounds (BR)","summary":"The classic code accepts a round selector: -1 before tactics, 0 first round, 1 second. v997 is the round counter; early phases run before the field is visible.","translationStatus":"reviewed"}
---

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

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.0.0, *](../../compatibility/#era3-v-3-0-0-l3976) — Fixed WoG bug with tactics detection on the very first round. Do not use BU:R in !?BR or !?FU(OnCombatRound) for zero round, because a few structures are not initialized at this moment and random crash may occur. First r…
<!-- ERA3-GENERATED:END -->
