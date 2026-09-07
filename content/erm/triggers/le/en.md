---
{"title":"Local-event visit (LE)","summary":"X/Y/level selects an existing local map event. !? runs before its standard effects; !$ runs afterwards.","translationStatus":"reviewed"}
---

## Trigger LE {#ref-tr-le}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>LE</strong> (local event)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-le-red"></span><span class="erm-tone-red">!?LE#1/#2/#3;</span> - triggers when visiting a local event at certain coordinates, 
the event is not changed, it is used only as trigger.</strong><br>
         #1/#2/#3 = X Y L, respectively<br>
An event MUST exist at the specified point.</div>
<span class="erm-anchor" id="ref-tr-le-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/le/#ref-rec-le">!!LE</a></div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Post-trigger <strong>LE</strong></span><strong></strong></div>

<div class="erm-paragraph"><strong><span class="erm-tone-red">!$LE#1/#2/#3;</span> 
- local event, post-trigger.</strong><br>
This trigger works like !?LE, but after visiting the event.</div>
<div class="erm-paragraph"><u>Example:</u>
<pre class="erm-example"><code class="language-erm">ZVSE
!?LE10/10/0; - trigger
!!IF:M^Trigger LE triggered^;
; the message will appear before the event properties configured in the editor are initialized

!$LE10/10/0; - post-trigger
!!IF:M^Post-trigger LE^;
; the message will appear after executing the event properties configured in the editor</code></pre>
</div>

</div>
</section>
:::

## When it fires {#event}

X/Y/level selects an existing local map event. !? runs before its standard effects; !$ runs afterwards.

## Declaration {#syntax}

```erm
!?LE#1/#2/#3; / !$LE#1/#2/#3;
```

## Limitations and ordering {#limits}

The event must exist at the location. A one-shot event may disappear after visiting; account for LE’s error flag.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Local map events (LE)](../../receivers/le/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1965) — Implemented two universal events for handling human local events: "OnBeforeLocalEvent" and "OnAfterLocalEvent". They occur before any !?LE/!$LE trigger respecively and receive 3 parameters: x, y and z coordinates. Exampl…
<!-- ERA3-GENERATED:END -->
