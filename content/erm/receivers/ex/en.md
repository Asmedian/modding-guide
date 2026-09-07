---
{"title":"Army stack experience (EX)","summary":"EX receiver: army stack experience, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Army stack experience (EX)"}
---

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
are summed up. If you install <strong>warning type</strong> to 1 (default 0), 
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
			<td> +50% squad experience per battle</td>
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
