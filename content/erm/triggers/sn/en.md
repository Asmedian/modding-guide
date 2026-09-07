---
{"title":"Sound playback (SN)","summary":"Intercepts an attempt to play a WAV/M82 sound effect. SN provides the playback parameters.","translationStatus":"reviewed"}
---

## Trigger SN {#ref-tr-sn}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>SN</strong> (sound)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-sn-red"></span><span class="erm-tone-red">!?SN;</span></strong> <strong>- trigger, triggered when 
playing any sound (WAV, M82, but <u>not MP3!</u>).</strong> <br>
Trigger fires every time the game tries to play sound.</div>
<span class="erm-anchor" id="ref-tr-sn-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/sn/#ref-rec-sn">!!SN</a></div>

</div>
</section>
:::

## When it fires {#event}

Intercepts an attempt to play a WAV/M82 sound effect. SN provides the playback parameters.

## Declaration {#syntax}

```erm
!?SN;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `SN` | `OnSoundPlay` | 30321 |

## Limitations and ordering {#limits}

MP3 uses the separate MP event. This handler may fire frequently and from different game windows.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[ERA services, memory and sound (SN)](../../receivers/sn/)
