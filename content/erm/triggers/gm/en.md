---
{"title":"Saving and loading (GM)","summary":"0 after loading a save, before displaying the map; 1 before saving after slot selection. GM1 also fires for autosaves.","translationStatus":"reviewed"}
---

## Trigger GM {#ref-tr-gm}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>GM</strong> (save/load)</span></div>

<div class="erm-align-left erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-gm-red"></span><span class="erm-tone-red">!?GM#;</span> 
- trigger to save and load the game.<br>
<span class="erm-tone-red">!?GM0;</span> - called after loading a saved game, but before showing the map.<br>
<span class="erm-tone-red">!?GM1;</span> - called before saving the game, but after selecting a save slot.<br>
</strong><br>
<u>Example:</u>
<pre class="erm-example"><code class="language-erm">ZVSE
!?GM0;
!!IF:M^Loaded^;
!?GM1;
!!IF:M^Saving...^;</code></pre>
<strong><u>Comment</u>:</strong> !?GM1 is also called every time when autosaving 
(i.e. every day after clicking the "End turn" button).<br>Autosave is possible 
cancel command <a href="../../receivers/un/#ref-rec-un-j5">UN:J5</a>. Usually it's not 
recommended because autosaving is the player’s “salvation” in case of any error in the game.</div>
<span class="erm-anchor" id="ref-tr-gm-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: <a href="../#ref-era-new-events-1-1">Extension of functionality !?GM1 in ERA</a></div>


</div>
</section>
:::

## When it fires {#event}

0 after loading a save, before displaying the map; 1 before saving after slot selection. GM1 also fires for autosaves.

## Declaration {#syntax}

```erm
!?GM0; / !?GM1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `GM0` | `OnAfterLoadGame` | 30360 |
| `GM1` | `OnBeforeSaveGame` | 30361 |

## Limitations and ordering {#limits}

OnSavegameRead/Write have different timing and are intended for custom data sections. PI is not a load handler.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[General game operations (UN)](../../receivers/un/#command-j3-file-j4-j5) · [ERM triggers and events](../)
