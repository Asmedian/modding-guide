---
{"title":"Physical damage (MF)","summary":"MF receiver: physical damage, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Physical damage (MF)"}
---

## Receiver MF {#ref-rec-mf}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mf-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MF</strong> (physical damage)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-mf-red"></span><span class="erm-tone-red">!!MF:XXXX;</span> - receiver to control the physical damage received by the stack.</strong><br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mf-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mf-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can check the stack number to get detailed information about that stack. You can set the damage with the F$ command. 
You can ignore the damage completely using the E0 command.<br>
<u>Example</u>:<br>
To simulate a magic block ability via ERM, you can use trigger <a href="../../triggers/mf/#ref-tr-mf">!?MF</a>, calculate the chance of the block triggering, 
cancel damage command <a href="./#ref-rec-mf-e">MF:E0</a>, show block animation with <a href="../bm/#ref-rec-bm-v">BM:V84</a> 
(and also <a href="../bm/#ref-rec-bm-f">set flag</a> "stack has taken a protective position" for greater realism) 
and add a corresponding message to the team’s combat sheet <a href="../mm/#ref-rec-mm-s">MM:S</a>.</div></details>
<span class="erm-anchor" id="ref-rec-mf-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/mf/#ref-tr-mf">!?MF</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-d"></span><span class="erm-anchor" id="command-d-f"></span>D$</strong></span><br>
Current damage that stack will take</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-e"></span><span class="erm-anchor" id="command-e"></span>E$</strong></span><br>
Allow (1 – default) or prohibit (0) receiving damage.<br>
Canceling will mean that the stack will not take damage.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-f"></span>F$</strong></span><br>
Adjusted damage the stack will take.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mf-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mf-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you have several scripts where the damage for the stack is changed, then keep in mind that the stack will receive the damage set through MF:F in the last trigger.<br>
<u>Example</u> from <span class="erm-anchor" id="ref-rec-mf-n1"></span><code class="erm-tone-purple erm-strong">Algor</code>'a:
<pre class="erm-example"><code class="language-erm">!?MF1; !!MF:Fd5;
!?MF1; !!MF:Fd3;
There will be a total change in damage (+8)</code></pre>
However, if you set the damage like this:
<pre class="erm-example"><code class="language-erm">!?MF1; !!MF:F5;
!?MF1; !!MF:F3;
It will just be 3 damage.</code></pre>
If you need to make two independent scripts, one of which will increase damage by 20%, and the other will decrease it by 15%, then it is better to stick to the base damage and calculate percentages from it. This will produce a result that does not depend on the order in which the triggers are executed:
<pre class="erm-example"><code class="language-erm">!?MF1; !!MF:D?y1; !!VRy1:*20 :100; !!MF:Fdy1; [increases damage taken by 20%]
!?MF1; !!MF:D?y1; !!VRy1:*-15 :100; !!MF:Fdy1; [reduce damage taken by 15%]</code></pre></div></details><hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-n"></span><span class="erm-anchor" id="command-n"></span>N$</strong></span><br>
Number of the stack (0..41) receiving damage. Can be used to obtain more detailed information by the command <a href="../bm/#ref-rec-bm">!!BM</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-w"></span><span class="erm-anchor" id="command-w"></span>W$</strong></span><br>
Check/get attack type:<br>
        $ = 2 – turret shot<br>
           = 1 – ditch<br>
           = 0 – other (to specify the type, see additional information on <a href="../../triggers/mf/#ref-tr-mf">!?MF</a>)</div>
<hr>
















</div>

</div>
</section>
:::

## Related reference {#related}

[MF](../../triggers/mf/)



## Related commands and tables {#reference-links}

[Physical damage calculation (MF)](../../triggers/mf/) · [Battle stack (BM)](../bm/#command-v-z) · [Battle stack (BM)](../bm/#command-e-f) · [Battle hint text (MM)](../mm/#command-sz) · [Battle stack (BM)](../bm/)
