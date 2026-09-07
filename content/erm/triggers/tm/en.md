---
{"title":"Game timer (TM)","summary":"Fires for timer 1..100 previously configured with the TM receiver.","translationStatus":"reviewed"}
---

## Trigger TM {#ref-tr-tm}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>TM</strong> (timer)</span></div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-tr-tm-red"></span><span class="erm-tone-red"><strong>!?TM#;</strong></span> <strong>- trigger for the timer code.</strong><br>
Triggers when timer number # is triggered.<br>
         # = timer number (1..100)</div>
<div class="erm-paragraph">To set the timer use receiver <a href="../../receivers/tm/#ref-rec-tm">!!TM</a>.</div>

</div>
</section>
:::

## When it fires {#event}

Fires for timer 1..100 previously configured with the TM receiver.

## Declaration {#syntax}

```erm
!?TM#;
```

## Limitations and ordering {#limits}

OnEveryDay fires before regular timers and needs no TM setup. Declaring !?TM does not enable the timer.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Game timers (TM)](../../receivers/tm/)
