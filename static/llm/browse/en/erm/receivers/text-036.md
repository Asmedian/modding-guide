# Turn time limit (TL)

ID: erm.receivers.tl
URL: /en/erm/receivers/tl/
Part: 1/1
Source references: old-help:rec-tl.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.tl 1 -->
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
<!-- llm:end erm.receivers.tl 1 -->

# Game timers (TM)

ID: erm.receivers.tm
URL: /en/erm/receivers/tm/
Part: 1/1
Source references: old-help:rec-tm.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.tm 1 -->
## Receiver TM {#ref-rec-tm}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="example"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-tm-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>TM</strong> (timers)
</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-tm-red"></span><span class="erm-tone-red">!!TM#:XXXX;</span> - these are settings for the ERM timer</strong><br>
         # – timer number (1-100)<br>
This command is the equivalent of events in the body of the map. It can be used to repeat any ERM code at a certain interval 
(or just once), trigger and stop at a certain time. This receiver has its own body, starting with the trigger !?TM$, 
where $ is a number from 1 to 100 indicating the timer number. <br>
Be careful if you allow a timer for multiple colors. If this timer shows a message, you will receive it twice or more times. 
The most common use of this command is to set a timer through an instruction than receiver.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">; Set timer 1 to go off every 7 days, starting from the first, for all players (255), never expires (999)
!#TM1:S1/999/7/255;
</code></pre></div>
<span class="erm-anchor" id="ref-rec-tm-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/tm/#ref-tr-tm">!?TM</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tm-d"></span><span class="erm-anchor" id="command-d-e"></span>D$</strong></span><br>
Ban players <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">colors $</a> 
activate this timer</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tm-e"></span>E$</strong></span><br>
Allow players <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">colors $</a> 
activate this timer</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tm-s"></span><span class="erm-anchor" id="command-s-1-2-3-4"></span>S$1/$2/$3/$4</strong></span><br>
Set/check/get timer settings<br>
         $1 – day of first appearance<br>
         $2 – last appearance day<br>
         $3 – interval (in days) <br>
         $4 – 
<a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">players</a>, for which it is activated 
timer (0 – prohibit all players)<br>
<u>Example</u>:<br>
Timer for red, brown and green player = 8 + 4 + 1 = 13 (0 will disable the timer for all colors)</div>
<hr>















</div>
</div>
</section>
:::

## Related reference {#related}

[TM](../../triggers/tm/)



## Related commands and tables {#reference-links}

[Game timer (TM)](../../triggers/tm/) · [Player colors](../../tables/players/)
<!-- llm:end erm.receivers.tm 1 -->

