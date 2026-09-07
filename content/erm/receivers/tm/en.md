---
{"title":"Game timers (TM)","summary":"TM receiver: game timers, command parameters, and limitations.","translationStatus":"reviewed"}
---

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
