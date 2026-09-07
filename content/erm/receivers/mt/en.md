---
{"title":"Obelisk (MT)","summary":"MT receiver: obelisk, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver MT {#ref-rec-mt}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mt-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MT</strong> 
(obelisk)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mt-red"></span><span class="erm-tone-red">!!MT#1/#2/#3:XXXX;</span></strong> – <strong>obelisk at X Y L.</strong> 
Obelisk – <a href="../../tables/objects/#ref-form-objects" data-context="true">type 57</a>.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-mt-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mt-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Using low level command <a href="../un/#ref-rec-un-c">UN:C</a> we can, for example, get the coordinates of the buried Grail when visiting the obelisk:
<pre class="erm-example"><code class="language-erm">!?OB57&amp;1000;
!!UN:C6919480/4/?y1;
!!VRy1:+128656;
!!UN:Cy1/2/?y2; y2 - x
!!VRy1:+2;
!!UN:Cy1/2/?y3; y3 - y
!!VRy1:+2;
!!UN:Cy1/1/?y4; y4 - z
!!VRy1:+2;
!!UN:Cy1/1/?y5; y5=1 Grail buried, y5=0 Grail dug</code></pre>
</div></details>
<span class="erm-anchor" id="ref-rec-mt-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: team <a href="../un/#ref-rec-un-l1" title="Control of visits to the obelisk">!!UN:L</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mt-n"></span><span class="erm-anchor" id="command-n"></span>N$</strong></span><br>
Obelisk number (0...)</div>
<hr>
















</div>
</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [General game operations (UN)](../un/#command-cbase-size-cbase-offset-size) · [General game operations (UN)](../un/)
