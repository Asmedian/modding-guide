---
{"title":"Global map event (GE)","summary":"Fires for a global event whose text begins with the selected number. The technical number is hidden from the displayed message while a handler exists.","translationStatus":"reviewed"}
---

## Trigger GE {#ref-tr-ge}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>GE</strong> (global event)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-ge-red"></span><span class="erm-tone-red">!?GE#;</span> - trigger, triggered when Global Event number # occurs.</strong><br>
The number should appear at the very beginning of the event text (the title is not important).<br>
This number will NOT be reflected in the event text while trigger is used for this event.<br>
<u>Example</u>:<br>
Text <span class="erm-anchor" id="ref-tr-ge-erm"></span><em class="erm-inline-code">123Here you are!</em> will look like <span class="erm-anchor" id="ref-tr-ge-dl3"></span><em class="erm-game-text">There you are!</em> with number 123.</div>
<div class="erm-paragraph">To change the properties of a global event, use receiver <a href="../../receivers/ge/#ref-rec-ge">!!GE</a>.</div>
</div>
</section>
:::

## When it fires {#event}

Fires for a global event whose text begins with the selected number. The technical number is hidden from the displayed message while a handler exists.

## Declaration {#syntax}

```erm
!?GE#;
```

## Limitations and ordering {#limits}

The number comes from the start of the event text, not its title or editor row position.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Global events (GE)](../../receivers/ge/)
