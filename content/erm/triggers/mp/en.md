---
{"title":"Music theme changes (MP)","summary":"Fires when ChangeMp3Theme is called. MP:S changes parameters; MP:R controls the default reaction.","translationStatus":"reviewed"}
---

## Trigger MP {#ref-tr-mp}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>MP</strong><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a> (mp3 control)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mp-red"></span><span class="erm-tone-red">!?MP;</span> - management of mp3 files.</strong></div>
<div class="erm-paragraph">Trigger fires whenever the game or ERM/Lua calls a function <em class="erm-tone-purple erm-legacy-event">ChangeMp3Theme</em>. In a trigger, function parameters can be changed using <a href="../../receivers/mp/#ref-rec-mp-era-s">!!MP:S</a>, and the default response to the function (on/off) using <span><a href="../../receivers/mp/#ref-rec-mp-era-r">!!MP:R</a></span>.<br>
<strong><u>Comment</u>:</strong> for ERA parameter <em>"UseOnlyOneCpuCore"</em> in the file <em class="erm-legacy-file">heroes3.ini</em> the default is 0, which allows you to run <a href="../../compatibility/#ref-cont-hd">HD mod</a> in modes with high processor load.<br>
Please note that it is better to remove all ID3 tags from the mp3 to avoid possible gaming problems.</div>
<span class="erm-anchor" id="ref-tr-mp-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/mp/#ref-rec-mp-era">!!MP</a></div>
</div>
</section>
:::

## When it fires {#event}

Fires when ChangeMp3Theme is called. MP:S changes parameters; MP:R controls the default reaction.

## Declaration {#syntax}

```erm
!?MP;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MP` | `OnMp3MusicChange` | 30320 |

## Limitations and ordering {#limits}

This is an MP3 music event; SN covers sound effects. Guard against re-entry when triggering another theme change.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/) · [MP3 music (MP)](../../receivers/mp/#command-s-1-2-3) · [MP3 music (MP)](../../receivers/mp/#command-r) · [MP3 music (MP)](../../receivers/mp/)
