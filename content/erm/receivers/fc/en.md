---
{"title":"Town-faction parameters (FC)","summary":"FC receiver: town-faction parameters, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver FC {#ref-rec-fc}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-fc-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>FC</strong> 
(town faction management)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-fc-red"></span><span class="erm-tone-red">!!FC#:XXXX;</span> – changing the attributes of town factions # (0..9).</strong> <br>
<u></u></div><span class="erm-anchor" id="ref-rec-fc-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-fc-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This receiver was conceived not so much for changing town templates, but for working in tandem with associative arrays. However, thanks to it, many things can now actually be implemented without plugins and patches.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-b0"></span><span class="erm-anchor" id="command-b0-b1"></span>B0/$</strong></span><br>
Set/check/get creature, purchased at the forge.</div>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-b1"></span>B1/$</strong></span><br>
Set/check/get the essence of shown in the forge.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!FC0:B0/7 B1/7; You can buy a Crusader in the Castle forge</code></pre></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-c"></span><span class="erm-anchor" id="command-c-1-2-3-4"></span>C$1/$2/$3/$4</strong></span><br>
Coordinates of buildings on the town screen.<br>
         $1 – building number<br>
         $2 – number of frames in DEF<br>
         $3/$4 – X/Y positions.<br>
<strong><u>Comment</u>:</strong> if some parameter does not need to be modified, the values -1 or d0 can be used.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-d"></span><span class="erm-anchor" id="command-d-1-2"></span>D$1/$2</strong></span><br>
Set/check/get the priority of displaying buildings.<br>
         $1 – array element index<br>
         $2 – building number</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-h"></span><span class="erm-anchor" id="command-h-1-2"></span>H#/$1/$2</strong></span><br>
Setting the parameters of the “Horde #” structure ($1 - unimproved creature, $2 – improved creature).<br>
         # = 0 – increase in horde structure 1<br>
         # = 1 - increase in horde structure 2<br>
         # = 2 – level of creatures in the horde structure 1<br>
         # = 3 - level of creatures in horde structure 2<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!FC2:H0/10/10; Sculptor's wings increase the growth of Gargoyles by 10</code></pre></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-h4"></span>H4/$1/$2/$3</strong></span><br>
Type of simple $2 and improved $3 creatures in a $1 (1/2) horde structure.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-m"></span><span class="erm-anchor" id="command-m-m0-m1"></span>M</strong></span><br>
Get the width of the ditch (0..2; 0 = no ditch) into the variable v1.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-m0"></span>M0/#</strong></span><br>
Set ditch type (2, 1, none).</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-m1"></span>M1/$</strong></span><br>
Set/check/get damage from a moat.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-r"></span><span class="erm-anchor" id="command-r-1-2"></span>R$1/$2</strong></span><br>
Set/check/get resources $1 (0..6) in the resource storage (where $2 is the quantity).<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!FC1:R4/1000; Stronghold Vault brings 1000 crystals</code></pre></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-s"></span><span class="erm-anchor" id="command-s-t"></span>S$</strong></span><br>
Set/check/get creature in the Arrow Tower.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!FC8:S8; There will now be Monks in the Conjugation Towers</code></pre></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-t"></span>T$</strong></span><br>
Set/check/to obtain the native soil of the fraction (0..9).</div>
<hr>
















</div>
</div>
</section>
:::

## Related reference {#related}

[CA](../../receivers/ca/)
