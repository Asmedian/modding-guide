---
{"title":"Hero interaction permissions (HO)","summary":"HO receiver: hero interaction permissions, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver HO {#ref-rec-ho}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ho-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>HO</strong> 
(actions on the hero)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-ho-red"></span><span class="erm-tone-red">!!HO$:XXXX;</span> - used to allow or deny interactions with <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero $</a>.</strong><br>
Unlike <a href="../he/#ref-rec-he">!!HE</a>, used to activate or deactivate hero interactions.</div>
<span class="erm-anchor" id="ref-rec-ho-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: event <a href="../../triggers/#ref-era-new-events-2-10">OnBeforeHeroInteraction</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ho-d"></span><span class="erm-anchor" id="command-d-e"></span>D$</strong></span><br>
Ban all heroes <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">colors $</a> (-1 – current) attack (enemy hero) or visit (ally) this hero.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ho-e"></span>E$</strong></span><br>
Allow all heroes <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">colors $</a> (-1 – current) attack (enemy hero) or visit (ally hero) this hero.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ho-h"></span><span class="erm-anchor" id="command-h"></span>H$</strong></span><br>
Set the tooltip for this hero to the z$ variable.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ho-r"></span><span class="erm-anchor" id="command-r-s"></span>R</strong></span><br>
Allow all heroes to attack (enemy hero) or visit (allied hero) this hero.</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong> <span class="erm-anchor" id="ref-rec-ho-s"></span>S</strong></span><br>
Prevent all heroes from attacking (enemy hero) or visiting (allied hero) this hero.</div>
<hr>


















</div>

</div>
</section>
:::

## Related reference {#related}

[HE](../../receivers/he/)



## Related commands and tables {#reference-links}

[Hero table](../../tables/heroes/) · [Heroes (HE)](../he/) · [ERM triggers and events](../../triggers/) · [Player colors](../../tables/players/)
