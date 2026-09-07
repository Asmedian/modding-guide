---
{"title":"Pyramids and new objects (PM)","summary":"PM receiver: pyramids and new objects, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Pyramids and new objects (PM)"}
---

## Receiver PM {#ref-rec-pm}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-pm-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>PM</strong>  (pyramids and new objects) </span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-pm-red"></span><span class="erm-tone-red">!!PM#1/#2/#3:XXXX;</span> 
- Pyramid or <a href="../../tables/wog-object-variants/#ref-form-newobj" data-context="true">new object</a> in #1/#2/#3.</strong> Pyramid - <a href="../../tables/objects/#ref-form-objects-pir" data-context="true">type 63</a>.<br>
<em>Extended syntax:<br>
</em><strong><span class="erm-tone-red">!!PM$:XXXX;</span> - Pyramid or <a href="../../tables/wog-object-variants/#ref-form-newobj" data-context="true">
new object</a> 
in v$/v($+1)/v($+2)</strong></div>
<div class="erm-paragraph">This receiver has a dual purpose. It is used to set a spell, 
obtained after defeating the Pyramid guards, but can also be used to attract AI to the object, 
or vice versa, prevent the AI from visiting it.<br>
AI will visit the Pyramid (new object) if:
</div><span class="erm-anchor" id="ref-rec-pm-t0"></span><ol class="erm-margin-top-zero"><li>He has enough army to defeat the guards;</li>
<li>He has the wisdom of an expert;</li>
<li>If this object is NOT visited by any player;</li>
<li>If this object is NOT visited by this player.</li></ol>
<div class="erm-paragraph">We can't control the first 2 points, but we can control the last two.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-pm-p"></span><span class="erm-anchor" id="command-p-1-1"></span>P#1/$1</strong></span><br>
Set/check/get the flag “Visited by player”
</div><pre>        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">visiting player</a>
        $1 – Status:
	0 – not visited
	1 – visited</pre>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-pm-s"></span><span class="erm-anchor" id="command-s"></span>S$</strong></span><br>
Set/check/get a bonus <a href="../../tables/spells/#ref-form-spell" data-context="true">spell</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-pm-v"></span><span class="erm-anchor" id="command-v"></span>V$</strong></span><br>
Set/check/get the flag “Not visited”<br>
        0 = visited<br>
        1 = not visited<br>
<u></u></div><span class="erm-anchor" id="ref-rec-pm-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-pm-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can use PM:V to "attract" the AI to new objects (including <a href="../../tables/wog-object-variants/#ref-form-newobj-sphinx" data-context="true">Sphinx</a>).<br>
You can set this bit and wait for the AI to arrive.</div></details>
<hr>

















</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/)



## Related commands and tables {#reference-links}

[WoG object variants](../../tables/wog-object-variants/) · [Game object table](../../tables/objects/#values) · [Player colors](../../tables/players/) · [Spell table](../../tables/spells/) · [WoG object variants](../../tables/wog-object-variants/#values)
