---
{"title":"Turn time limit (TL)","summary":"TL receiver: turn time limit, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver TL {#ref-rec-tl}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-tl-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>TL</strong><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(move limit control)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-tl-red"></span><span class="erm-tone-red">!!TL:XXXX;</span> - implements move limitation, supports multiplayer games.</strong></div>
<span class="erm-anchor" id="ref-rec-tl-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/tl/#ref-tr-tl">!?TL</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tl-c"></span><span class="erm-anchor" id="command-c"></span>C#</strong></span><br>
Enable timer countdown<br>
        # = 1 - start timer<br>
        # = 0 - stop counting<u><strong></strong><br>
</u>The last command works. You can pause 10 times, but start once and the timer will work.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tl-e"></span><span class="erm-anchor" id="command-e"></span>E$</strong></span><br>
Enable "show remaining time"<br>
        $ = 1 - enabled<br>
        $ = 0 - disabled<br>
If you enable it, the remaining seconds will be shown continuously, rather than the last 10 seconds as usual.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tl-t"></span><span class="erm-anchor" id="command-t"></span>T#/$</strong></span><br>
</div><span class="erm-anchor" id="ref-rec-tl-2"></span><details class="erm-comment"><summary>Getting time</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-rec-tl-t0"></span><blockquote class="erm-margin-top-zero erm-note">
<div class="table-wrap erm-reference-table"><table width="50%">
	<tr>
		<td width="25"><span class="erm-anchor" id="ref-rec-tl-n2"></span><strong class="erm-tone-purple erm-strong">#</strong>
		</td><td> <strong class="erm-tone-purple erm-strong">$</strong> - set/check/get
	</td></tr>
	<tr>
		<td>0</td>
		<td> current time in ms</td>
	</tr>
	<tr>
		<td>1</td>
		<td> current time in s</td>
	</tr>
	<tr>
		<td>2</td>
		<td> start time in ms </td>
	</tr>
	<tr>
		<td>3</td>
		<td> starting time in s</td>
	</tr>
	<tr>
		<td>4</td>
		<td> pause time in ms</td>
	</tr>
	<tr>
		<td>5</td>
		<td> pause time in s</td>
	</tr>
	<tr>
		<td>6</td>
		<td> stroke length in ms</td>
	</tr>
	<tr>
		<td>7</td>
		<td> stroke length in s</td>
	</tr>
</table></div></blockquote></div></details>
<hr>

<div class="erm-paragraph">When the player gains control, the current time is recorded as the "start time". Then every second the engine checks:
</div><blockquote class="erm-note"><strong>[current time] - [start time] &lt; [stroke length]</strong></blockquote>
<div class="erm-paragraph">If false, the turn ends.<br>
If you get into combat, the timer stops. At this point, the current time is recorded as "pause time".<br>
As long as the "pause time" is not 0, the move continues.</div>









</div>

</div>
</section>
:::

## Related reference {#related}

[TL](../../triggers/tl/)



## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/) · [Real-time timer (TL)](../../triggers/tl/)
