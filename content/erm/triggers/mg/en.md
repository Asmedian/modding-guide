---
{"title":"Adventure-map magic (MG)","summary":"0 before opening the spellbook to select a spell; 1 after the casting attempt. v997 contains the spell ID after MG1.","translationStatus":"reviewed"}
---

## Trigger MG {#ref-tr-mg}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>MG</strong> (witchcraft on the map)</span></div><br>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mg-red"></span><span class="erm-tone-red">!?MG#;</span> 
- trigger when casting spells on the map.<br>
<span class="erm-tone-red">!?MG0;</span> - triggers before application<br>
<span class="erm-tone-red"><strong>!?MG1;</strong></span> - triggers after casting</strong></div>
Actions:
<dl><dd> - the player presses “cast spell”</dd>
<dd> - triggered <strong>!?MG0;</strong></dd>
<dd> - a magic book opens to select a spell.</dd>
<dd> - superimposed spell</dd>
<dd> - triggered <strong>!?MG1;</strong> (the number of the spell is entered in <strong>v997</strong>)</dd></dl>
<u>Example:</u>
<pre class="erm-example"><code class="language-erm">ZVSE
!?MG0;
!!IF:M^Magic is ready to be used^;
!?MG1;
!!VRy-10:Sv997; - setting the spell number from v997 to y-1
!!IF:M^Magic has been used. Spell number: %Y-10^;</code></pre>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong> This trigger is inactive for AI players.
Even if the cast of the spell is cancelled, !?MG1 will still work, as well as return the spell number.</div>

</div>
</section>
:::

## When it fires {#event}

0 before opening the spellbook to select a spell; 1 after the casting attempt. v997 contains the spell ID after MG1.

## Declaration {#syntax}

```erm
!?MG0; / !?MG1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MG0` | `OnBeforeAdventureMagic` | 30322 |
| `MG1` | `OnAfterAdventureMagic` | 30323 |

## Limitations and ordering {#limits}

MG1 also fires on cancellation. Its occurrence does not prove successful casting; the classic trigger does not run for AI.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)
