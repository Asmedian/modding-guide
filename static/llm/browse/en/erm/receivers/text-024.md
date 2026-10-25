# Battle hint text (MM)

ID: erm.receivers.mm
URL: /en/erm/receivers/mm/
Part: 1/1
Source references: old-help:rec-mm.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.mm 1 -->
## Receiver MM {#ref-rec-mm}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mm-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MM</strong> (text in battle)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mm-red"></span><span class="erm-tone-red">!!MM:XXXX;</span> 
- receiver to receive/of setting/checking the text in battle or getting the mouse position on the battlefield.</strong><br>
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

<!-- llm:end erm.receivers.mm 1 -->

# Mines (MN)

ID: erm.receivers.mn
URL: /en/erm/receivers/mn/
Part: 1/1
Source references: old-help:rec-mn.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.mn 1 -->
## Receiver MN {#ref-rec-mn}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mn-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MN</strong> (mines)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-mn-red"></span><span class="erm-tone-red">!!MN#1/#2/#3:XXXX;</span> 
- mine in X Y L.</strong> Mines - <a href="../../tables/mines/#ref-form-mines" data-context="true">type 53</a>, <a href="../../tables/objects/#ref-form-objects" data-context="true">type 220</a>.<em><br>
Note:</em> The Lighthouse and the Mine (including the Abandoned Mine) have the same <a href="../../tables/object-control-words/#ref-cont-conwords-t42">control words</a>, 
and the Beacon can be edited via !!MN. Its resource (MN:R) has the number 100. If you set the number 0..6, then the Lighthouse will begin to bring resources, 
like a mine :)  The lighthouse guards are ignored.<br>It is also interesting to change the guards of an abandoned mine - 
after the standard message about troglodytes, a fight will occur with the specified creatures in the specified numbers. 
If the guards are removed, the mine is taken without a fight.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mn-m"></span><span class="erm-anchor" id="command-m-1-2-3"></span>M#1/$2/$3</strong></span><br>
Change/check guards<br>
        #1 – slot number (0..6)<br>
        $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">
creature type</a> 
(-1 – empty slot)<br>
        $3 – number of creatures</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mn-o"></span><span class="erm-anchor" id="command-o-o-1"></span>O$</strong></span> <br>
Set/check host<br>
Player (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a>)<br>
        -2 = current player<br>
        -1 = nobody</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>O$/1</strong></span><br>
Same as MN:O$, but without update<br>
 </div><hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mn-r"></span><span class="erm-anchor" id="command-r-r-1"></span>R$</strong></span><br>
Set/check the type of resource produced (<a href="../../tables/resources/#ref-form-resource" data-context="true">0..6</a>)</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>R$/1</strong></span><br>
Same as MN:R$, but without updating</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-mn-bold"></span><em class="erm-strong">Note:</em> setting a mine to resource 7 will lead to nothing but errors - mithril will not be mined. If you set your mine to resource 100 (as for the Lighthouse), then when you visit it the game will crash.</div>
<hr>
















</div>

</div>
</section>
:::

## Related reference {#related}

[DW](../../receivers/dw/)



## Related commands and tables {#reference-links}

[Mine types](../../tables/mines/) · [Game object table](../../tables/objects/) · [Object control words](../../tables/object-control-words/#type-42) · [Creature table](../../tables/creatures/) · [Player colors](../../tables/players/) · [Resources](../../tables/resources/)
<!-- llm:end erm.receivers.mn 1 -->

# Neutral map monsters (MO)

ID: erm.receivers.mo
URL: /en/erm/receivers/mo/
Part: 1/1
Source references: old-help:rec-mo.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.mo 1 -->
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
For all creatures placed by the command <a href="../un/#ref-rec-un-i">UN:I</a>, you can use any command.</div></details>
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
<span class="erm-anchor" id="ref-rec-mo-bold"></span><em class="erm-strong">Note:</em> the maximum number of creatures in a stack on the map is 4095 (or 12 bits). With larger values, there is a possibility of data corruption regarding the stack’s aggression.</div>
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

<!-- llm:end erm.receivers.mo 1 -->

