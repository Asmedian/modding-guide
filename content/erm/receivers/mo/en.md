---
{"title":"Neutral map monsters (MO)","summary":"MO receiver: neutral map monsters, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Neutral map monsters (MO)"}
---

## Receiver MO {#ref-rec-mo}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>

<span class="erm-anchor" id="ref-rec-mo-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MO</strong> 
(creature at position)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mo-red"></span><span class="erm-tone-red">!!MO#1/#2/#3:XXXX;</span> 
</strong>–<strong> creature parameters in X Y L.</strong><br>
<em>Syntax extension 1:</em><br>
<span class="erm-tone-red"><strong>!!MO#1/#2/#3/#4:XXXX;</strong></span> – creature in X Y L coordinates, the fourth parameter is used to cancel the check for the existence of a creature at the beginning of the map.<br>
<em>Syntax extension 2:</em><br>
<span class="erm-tone-red"><strong>!!MO$:XXXX;</strong></span> – creature in coordinates: v[$], v[$+1], v[$+2]<br>
<strong>Used to change the parameters of creatures in a certain position.<br>
</strong></div><span class="erm-anchor" id="ref-rec-mo-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mo-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Now the commands MO#1/#2/#3 and MO#1/#2/#3/1 have the same meaning. 
In both cases, the presence of the creature on the map is not necessary, but the format was retained for compatibility.<u><strong></strong><br>
</u>Commands M, B and A can only be used for creatures modified in the editor (message, resource or artifact). 
You can't set the message to the creature, but you can change the aggressiveness, number, etc. If you try this 
then you will receive an error message, to avoid this, use option statuses <a href="../un/#ref-rec-un-p904">UN:P904</a>, or values 
<a href="../ob/#ref-rec-ob-c">OB:C</a> to obtain a check number and process its value. Remember that you can adjust all the parameters of a creature if it is already placed on the map. 
For all creatures placed by the team <a href="../un/#ref-rec-un-i">UN:I</a>, you can use any command.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-a"></span><span class="erm-anchor" id="command-a-b-1-2"></span>A$</strong></span><br>
Set/check/get <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact</a> creatures in $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-b"></span>B#1/$2</strong></span><br>
Set/check/get qty. <a href="../../tables/resources/#ref-form-resource" data-context="true">resource #1</a> in $2 (maybe negative)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-g"></span><span class="erm-anchor" id="command-g"></span>G$</strong></span><br>
Set/check/get number of creatures in $.<br>
<span class="erm-anchor" id="ref-rec-mo-bold"></span><em class="erm-strong">Note:</em> the maximum number of creatures in a squad on the map is 4095 (or 12 bits). With larger values, there is a possibility of data corruption regarding the squad’s aggression.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-m"></span><span class="erm-anchor" id="command-m-text-mz-m1"></span>M^Text^</strong></span><br>
Set the message. The length of the text cannot be longer than the original. Can contain any characters except ^ and ;</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>M#</strong></span><br>
Set text from global event number #</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M-1</strong></span><br>
Do not show the message specified in the editor</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Mz#</strong></span><br>
Set/get message text into text variable</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M1/$<br>
M1/-1</strong></span><br>
Set and get text parameters.<br>
You can use this command if the M command was used to set the message.<br>
M1/$ – number of the text variable in $<br>
M1/-1 – cancel (restore default) message</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-o"></span><span class="erm-anchor" id="command-o-u"></span>O#</strong></span><br>
Set/check/get whether stack can increase<br>
        # = 1 – quantity does not increase<br>
        # &lt; &gt; 1 – quantity increases</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-r"></span><span class="erm-anchor" id="command-r"></span>R$/#</strong></span><br>
Set/check/get aggressivenessness<br>
        $ – </div><span class="erm-anchor" id="ref-rec-mo-3"></span><details class="erm-comment"><summary>level of aggression</summary><div class="erm-comment-body">
	<blockquote class="erm-note">
	0       – pliable (will always join)<br>
	1..7 - friendly<br>
	1..10 – aggressive <br>
	4..10 – hostile<br>
	10 - bloodthirsty (will never join)</blockquote></div></details>
<div>        # – phantom parameter (not used, but needed to differ from the old syntax), can take any values<br>
<u>
</u><span class="erm-anchor" id="ref-rec-mo-2"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-mo-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Let's say we need to give the hero Gelare the ability to reduce the aggression of neutrals by 1 level...<br>
Here is a variant of such an implementation:
<pre class="erm-example"><code class="language-erm">!?OB54;
!!OW:A-1/?y1;	current hero
!!FU&amp;y1&lt;&gt;142:E;	stop if not Gelare
!!MO998:R?y2/1;	find out the viciousness of creatures
!!FU&amp;y2=0:E;	wait, creatures are already malleable
!!VRv5249:Sy2;	maintaining the original viciousness
!!VRy3:S0;
; setting up new hostility...
 !!VRy3&amp;y2&gt;0/y2&lt;4:S0;	Pliable
 !!VRy3&amp;y2&gt;3/y2&lt;8:S1;	Friendly
 !!VRy3&amp;y2&gt;7/y2&lt;10:S4;	Aggressive
 !!VRy3&amp;y2&gt;9:S7;	Hostile
;
!!MO998:Ry3/1;		change the viciousness
!!IF:V540/1;	set the “ability activation” flag

!$OB54&amp;540; 	Gelare “tapped” demand
!!IF:V540/0;	flag reset
!!OB998:T?y1;
!!FU&amp;y1&lt;&gt;54:E;    stop, if there is no creature already
!!MO998:Rv5249/1; bring back the old viciousness</code></pre></div></details></div>
<div class="erm-paragraph"><em>Old syntax:</em> <span class="erm-tone-red"><strong>MO:R0</strong></span> (will join) or <span class="erm-tone-red"><strong>MO:R1</strong></span> (will not join).</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-u"></span>U#</strong></span><br>
Set/check/get whether creature can escape.<br>
         # = 1 – cannot<br>
         # &lt; &gt; 1 – maybe</div>
<hr>













</div>
</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/)



## Related commands and tables {#reference-links}

[General game operations (UN)](../un/) · [Map objects (OB)](../ob/#command-c) · [General game operations (UN)](../un/#command-i-x-y-level-type-subtype-refresh) · [Artifact table](../../tables/artifacts/) · [Resources](../../tables/resources/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1881) — Improved ERM 2 compiler. It became possible to use named local variables and quick variables (f..t) as arrays subscripts. Syntax: (array&#91;index&#93;) or (array&#91;i&#93;). Index value is evaluated BEFORE current receiver, thus do no…
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3079) — Improved UN:U command. It does not raise error if no more objects are found, but sets x-coordinate to -1 instead. Thus no premature objects counting is required. A new syntax with 6 parameters was added to allow using ar…
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3104) — Added exported function FindNextObject (ObjType, ObjSubtype: integer; var x, y, z: integer; Direction: integer): integer; stdcall; It works the same as UN:U with fast search syntax, but does not raise error on no more ob…
<!-- ERA3-GENERATED:END -->
