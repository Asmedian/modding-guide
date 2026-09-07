---
{"title":"Real-time timer (TL)","summary":"Index 0 means 1 second, 1 means 2 seconds, 2 means 5 seconds, 3 means 10 seconds, and 4 means 60 seconds.","translationStatus":"reviewed"}
---

## Receiver TH {#ref-tr-tl}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>TL</strong><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(real time timer)</span></div>
<div class="erm-paragraph"><br><strong><span class="erm-anchor" id="ref-tr-tl-red"></span><span class="erm-tone-red">!?TL#; </span>- </strong>
<strong>Real time timer.</strong><br>
    # = <strong>0</strong> - fires every second<br>
    # = <strong>1</strong> - triggers every 2 seconds<br>
    # = <strong>2</strong> - triggers every 5 seconds<br>
    # = <strong>3</strong> - triggers every 10 seconds<br>
    # = <strong>4</strong> - triggers every 60 seconds</div>
<div class="erm-paragraph"><u>Example</u>:<br>
To see how this works, use the following code:
<pre class="erm-example"><code class="language-erm">!?TL0;
!!IF:L^1 second ticked^;
!?TL1;
!!IF:L^2 seconds ticked^;
!?TL2;
!!IF:L^5 seconds have passed^;
!?TL3;
!!IF:L^Already 10 seconds^;
!?TL4;
!!IF:L^Exactly a minute has passed!^;</code></pre></div>
</div>
</section>
:::

## When it fires {#event}

Index 0 means 1 second, 1 means 2 seconds, 2 means 5 seconds, 3 means 10 seconds, and 4 means 60 seconds.

## Declaration {#syntax}

```erm
!?TL#;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `TL0` | `OnEverySecond` | 30900 |
| `TL1` | `OnEvery2Seconds` | 30901 |
| `TL2` | `OnEvery5Seconds` | 30902 |
| `TL3` | `OnEvery10Seconds` | 30903 |
| `TL4` | `OnEveryMinute` | 30904 |

## Limitations and ordering {#limits}

These are not game days. Do not treat wall-clock timing as an automatically synchronized condition for multiplayer gameplay.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/)
