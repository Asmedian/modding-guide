---
{"title":"Level-up skill selection (HL)","summary":"HL receiver: level-up skill selection, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver HL {#ref-rec-hl}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-hl-text"></span><div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Receiver <strong>HL</strong> (hero level)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-hl-red"></span><span class="erm-tone-red">!!HL:XXXX;</span> - hero level controller.</strong> 
Allows you to control which skills (<a href="../../framework/constants/hero-skills/#ref-form-primaryskill" data-context="true">primary</a> and 
<a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">secondary</a>) will receive hero when gaining a new level. 
You cannot test or obtain the secondary skills offered, only install them.<br>
Should only be used after a trigger <a href="../../triggers/hl/#ref-tr-hl">!?HL</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-hl-s"></span><span class="erm-anchor" id="command-s-1-2-3"></span>S$1/#2/#3</strong></span><br>
Set the primary and secondary skills that hero can obtain.<br>
        $1 – set/check/get <a href="../../framework/constants/hero-skills/#ref-form-primaryskill" data-context="true">primary skill</a> +1 (0..3)<br>
        #2 – set left secondary skill (-2, -1, <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">0..27</a>)<br>
            -2 = do not change<br>
            -1 = no skill <br>
        #3 – set the right secondary skill (-2, -1, <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">0..27</a>)<br>
Receiver only works after a trigger <a href="../../triggers/hl/#ref-tr-hl">!?HL</a> and only affects the currently received level.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?HL-1; - does anyone get hero level
!!HL:S0/-1/-1; - set that the bonus primary skill is Attack, and there is no choice of secondary skills.</code></pre></div>
<hr>

















</div>
</div>
</section>
:::

## Related reference {#related}

[HL](../../triggers/hl/)



## Related commands and tables {#reference-links}

[Hero Skills](../../framework/constants/hero-skills/) · [Secondary skills](../../tables/secondary-skills/) · [Hero level-up (HL)](../../triggers/hl/)
