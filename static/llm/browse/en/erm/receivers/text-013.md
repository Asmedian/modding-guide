# Army stack experience (EX)

ID: erm.receivers.ex
URL: /en/erm/receivers/ex/
Part: 1/1
Source references: old-help:rec-ex.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ex 1 -->
## Receiver EX {#ref-rec-ex}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ex-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>EX</strong> (stack experience)</span></div>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ex-red"></span><span class="erm-tone-red">
<br>
<strong>!!EX$1/$2:XXXX;</strong></span> 
- <strong>creature stack experience.</strong> 
 <br>
    $1 – hero number (<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">0..155</a>, 
-1),     <br>
    $2 – slot number (0..6).<br>
<em>Syntax extension 1:<br>
</em><span class="erm-tone-red"><strong>!!EX$1/$2/$3/$4:XXXX;</strong></span>
<br>
    $1 – X (0…)<br>
    $2 – Y (0…)<br>
    $3 – L (0 - Surface, 1 - Underground)<br>
    $4 – slot number (this position may contain hero, town, 
garrison or mine)<br>
<em>Syntax extension 2:<br>
</em><span class="erm-tone-red"><strong>!!EX$1/$2/$3/$4/$5:XXXX;</strong></span><br>
    $1 – X<br>
    $2 – Y<br>
    $3 – L<br>
    $4 – slot number (0..6)<br>
    $5 – object type<br>
         1 = hero<br>
         2 = town<br>
         3 = mine<br>
         4 = garrison<br>
         other number = any higher 
listed<br>
If you use 4 parameters, the fifth one is default 
is in the "first found" state. The search proceeds in the following order: heroes, 
towns, mines, garrisons.</div>
<hr>
<div class="erm-paragraph">
<strong><span class="erm-tone-red">
<span class="erm-anchor" id="ref-rec-ex-a"></span><span class="erm-anchor" id="command-a-1-2-3"></span>A$1/$2/$3</span></strong><br>
Set/check/get information on the stack:<br>
         $1 –
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> (255 is an empty slot)<br>
         $2 – number of creatures<br>
         $3 – amount of experience the creature has</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ex-c"></span><span class="erm-anchor" id="command-c-1-2-3-4-5-6"></span>C$1/$2/$3[/$4/$5/$6]</strong></span><br>
Connect stacks<br>
         
<strong>$1</strong> – source stack type<br>
             $1 = 0 
- from the hero<br>
                 $2 – 
hero number (-1 – current)<br>
                 $3 – 
hero slot (0..6)<br>
                [$4] – 
display warning (see below)<br>
            $1=1 – hero in coordinates <br>
            $1=2 – town in coordinates <br>
            $1=3 – mine in coordinates <br>
            $1=4 – garrison in coordinates <br>
        $2 – X-position<br>
        $3 – Y-position<br>
        $4 – level (0 = Surface, 1 = Underground)<br>
        $5 – army slot (0..6)<br>
       [$6] – show warning<br>
<strong>Results</strong><br>
This command will set the variable v1 to:<br>
    -1 if they are different creatures (cannot be combined)<br>
    0 if an error occurred (cannot be combined)<br>
    1 if the combination was successful.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ex-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ex-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This command will add the original stack to the army slot, along with the combination 
parameters. All experience will be distributed equally to all soldiers, artifacts 
are summed up. If you set <strong>warning type</strong> to 1 (default 0), 
you won't get a message that these stacks are different.<br>
<u>Example 1</u>:<br>
Hero visits the object and its stack 3 is added to stack 1 (they must be the same type):
<pre class="erm-example"><code class="language-erm">!?OB5/3/0;
!!EX-1/1:C0/-1/3;</code></pre>
<br>
<u>Example 2</u>:<br>
You visit the object and your current hero “adds” the first stack in town (input 3/2/0) to stack #3.
<pre class="erm-example"><code class="language-erm">!?OB5/3/0;
!!EX-1/3:C2/3/2/0/1;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ex-e"></span><span class="erm-anchor" id="command-e-n-t"></span>E$</strong></span><br>
Set/check/get the experience of creatures:<br>
         $ – creature experience</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ex-n"></span>N$</strong></span><br>
Set/check/get number of creatures<br>
	         $ – quantity
</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ex-r"></span><span class="erm-anchor" id="command-r-1-2"></span><span class="erm-anchor" id="command-r-1-2-3-4"></span>R$1/$2</strong></span><br>
Set/check/get artifact and option<br>
         $1 – artifact number (available only <a href="../../tables/artifacts/#ref-form-a1-z" data-context="true" title="Warlord&#x27;s Banner">artifact #156</a>)<br>
         $2 – </div><span class="erm-anchor" id="ref-rec-ex-2"></span><details class="erm-comment"><summary>artifact option (0..8)</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-rec-ex-t0"></span><blockquote class="erm-margin-top-zero erm-note">
	<div class="table-wrap erm-reference-table"><table width="100%">
		<tr>
			<td class="erm-align-center" width="40">0</td>
			<td> +2 health plus double current health bonus in combat</td>
		</tr>
		<tr>
			<td class="erm-align-center">1</td>
			<td> +2 attack plus double current attack bonus in combat</td>
		</tr>
		<tr>
			<td class="erm-align-center">2</td>
			<td> +2 defense plus double current combat defense bonus</td>
		</tr>
		<tr>
			<td class="erm-align-center">3</td>
			<td> +1 damage plus double the current minimum and maximum damage bonus in combat</td>
		</tr>
		<tr>
			<td class="erm-align-center">4</td>
			<td> +1 speed plus double current combat speed bonus</td>
		</tr>
		<tr>
			<td class="erm-align-center">5</td>
			<td> +50% stack experience per battle</td>
		</tr>
		<tr>
			<td class="erm-align-center">6</td>
			<td> Reduces target's defense by 25%</td>
		</tr>
		<tr>
			<td class="erm-align-center">7</td>
			<td> 25% chance to block 50% damage</td>
		</tr>
		<tr>
			<td class="erm-align-center">8</td>
			<td> 2 additional answers</td>
		</tr>
	</table></div></blockquote></div></details>
<div class="erm-paragraph">
<em>Syntax extension: </em> <br>
<span class="erm-tone-red"><strong>R$1/$2/$3/$4</strong></span><br>
         $1 – whether there is artifact or not (0 = 
no, 1 = yes)<br>
         $2 – artifact number (currently 
only 156)<br>
         $3 – artifact subtype (options 
0..15 – not all are used yet)<br>
         $4 – number of copies of the artifact 
(0..3)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ex-t"></span>T$</strong></span><br>
Set/check/get creature type<br>
         $ – 
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> (255 is an empty slot)</div>

<hr>





</div>
</div>
</section>
:::

## Related reference {#related}

[EA](../../receivers/ea/)



## Related commands and tables {#reference-links}

[Hero table](../../tables/heroes/) · [Creature table](../../tables/creatures/) · [Artifact table](../../tables/artifacts/#values)
<!-- llm:end erm.receivers.ex 1 -->

# Town-faction parameters (FC)

ID: erm.receivers.fc
URL: /en/erm/receivers/fc/
Part: 1/1
Source references: old-help:rec-fc.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.fc 1 -->
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
Set/check/get creature, purchased at the blacksmith.</div>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-b1"></span>B1/$</strong></span><br>
Set/check/get the essence of shown in the blacksmith.<br>
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
Setting the parameters of the “Horde #” structure ($1 - unupgraded creature, $2 – upgraded creature).<br>
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
Type of simple $2 and upgraded $3 creatures in a $1 (1/2) horde structure.</div>
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
<!-- llm:end erm.receivers.fc 1 -->

# Campfire (FR)

ID: erm.receivers.fr
URL: /en/erm/receivers/fr/
Part: 1/1
Source references: old-help:rec-fr.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.fr 1 -->
## Receiver FR {#ref-rec-fr}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-fr-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver 
<strong>FR</strong> 
(bonfire of an abandoned camp)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-fr-red"></span><span class="erm-tone-red">!!FR#1/#2/#3:XXXX;</span> 
- fire of an abandoned camp at coordinates X Y L (#1, #2, #3).</strong> 
Bonfire – <a href="../../tables/objects/#ref-form-objects" data-context="true">type 12</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fr-b"></span><span class="erm-anchor" id="command-b-1-2"></span>B$1/$2</strong></span><br>
Bonus:<br>
         $1 – type 
<a href="../../tables/resources/#ref-form-resource" data-context="true">resource</a><br>
         $2 – quantity<br>
A fire always has gold in it. So if the value of $2 = 5, then in the fire 
there will be 5 units <a href="../../tables/resources/#ref-form-resource" data-context="true">resource</a> $1 and 500 gold.<br>
Also, you can set the type in the range 8..15, and you will see the picture 
corresponding resource number from the format <a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">
IF:Q</a>. But nothing will be given to the hero.</div>

<hr>

















</div> 

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [Resources](../../tables/resources/) · [IF:Q picture types](../../tables/dialog-pictures/)
<!-- llm:end erm.receivers.fr 1 -->

