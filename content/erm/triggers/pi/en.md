---
{"title":"After ERM instructions (PI)","summary":"Runs after initialization instructions for a new map.","translationStatus":"reviewed"}
---

## Trigger PI {#ref-tr-pi}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>PI</strong> (post-instructions)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-pi-red"></span><span class="erm-tone-red">!?PI;</span> 
- post-instruction.</strong><br>This trigger fires a little later than execution 
instructions, but before performing basic card settings. Another feature of this 
trigger - it only fires when a new map starts, not when the game loads 
(as are the instructions).<br>
<u>Example:</u>
<pre class="erm-example"><code class="language-erm">ZVSE
!#IF:M^Instructions^;
!?PI;
!!IF:M^Post-instruction^;</code></pre>
When you start a map, you will receive two messages: "Instructions" and then 
"post-instruction". When the first message appears, the card has almost no 
settings, and when the second message appears, almost all card settings will be 
completed. If you load a saved game, you will not receive any messages.</div>

</div>
</section>
:::

## When it fires {#event}

Runs after initialization instructions for a new map.

## Declaration {#syntax}

```erm
!?PI;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `PI` | `OnAfterErmInstructions` | 30370 |

## Limitations and ordering {#limits}

Does not fire when loading a save. Temporary resources need a load handler for restoration.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.4, +](../../compatibility/#era3-v-3-9-4-l1094) — Added the following functions to Era ERM Framework: !?FU(BattleStack_MakeActive); ; Makes specified stack active/acting. !#VA(stackId:x); Stack ID to pass control to. !?FU(PrepareMultiPicDialog); ; Initializes IF:N dialo…
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l2944) — Added "OnAfterErmInited" event to "Era Erm Framework", occuring right in the end of !?PI / "OnAfterErmInstructions" event. The event allows to perform actions after most scripts initialized their variables and performed …
<!-- ERA3-GENERATED:END -->
