---
{"title":"Battle hint text (MM)","summary":"MM receiver: battle hint text, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver MM {#ref-rec-mm}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mm-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MM</strong> (text in battle)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mm-red"></span><span class="erm-tone-red">!!MM:XXXX;</span> 
- receiver to receive/of installation/checking the text in battle or getting the mouse position on the battlefield.</strong><br>
<u></u></div><span class="erm-anchor" id="ref-rec-mm-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-mm-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?MM0;
!!MM:M?z5;
!!MM:D?i;
!!VRz10:S^Position: %Vi Message: %Z5^;
!!MM:Mz10;
A message will be shown when you move the mouse to battlefield.</code></pre></div></details>
<span class="erm-anchor" id="ref-rec-mm-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/mm/#ref-tr-mm">!?MM</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mm-d"></span><span class="erm-anchor" id="command-d"></span>D$</strong></span><br>
Get/check current cursor position (code) <br>
         $ – <a href="../../tables/battlefield/#ref-form-bf" data-context="true">item number</a><br>
You can set this value, but nothing will happen.</div>
<hr><div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-mm-m"></span><span class="erm-anchor" id="command-mz-m-z"></span>Mz#</strong></span><br>
Set/check/get the message shown in text window<br>
         z# – number of the text variable for setting or recording the text of the message.</div>
<hr><div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-mm-s"></span><span class="erm-anchor" id="command-sz"></span>Sz#</strong></span><br>
Add message from text variable to battle text</div>
<hr>


















</div>
</div>
</section>
:::

## Related reference {#related}

[MM](../../triggers/mm/) · [BU](../../receivers/bu/)



## Related commands and tables {#reference-links}

[Interface hints (MM)](../../triggers/mm/) · [Battlefield hexes](../../tables/battlefield/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.0.2, +](../../compatibility/#era3-v-3-0-2-l3440) — Added new ERM event 'OnAdvMapTileHint', allowing to get/set hint for any tile, mouse is currently over. Parameters: x, y, z, object type, object subtype. All parameters are given for object entrance. Example: !?FU(OnAdvM…
<!-- ERA3-GENERATED:END -->
