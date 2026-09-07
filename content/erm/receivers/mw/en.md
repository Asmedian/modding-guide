---
{"title":"Wandering monsters (MW)","summary":"MW receiver: wandering monsters, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Wandering monsters (MW)"}
---

## Receiver MW {#ref-rec-mw}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-a1-1-2-3-a2-1-2-3"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mw-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MW</strong> (wandering creatures)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mw-red"></span><span class="erm-tone-red">!!MW#:XXXX;</span> – used to activate or deactivate interactions with wandering creatures.</strong><br>
         # – number of the wandering creature (1..1000)<br>
Stray creatures have a search radius of 20 (can be set with <a href="./#ref-rec-mw-a4">MW:A4</a>). At the beginning of each turn, wandering creatures go/attack somewhere.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-mw-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-mw-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE
!#TM1:S1/1/1/2;
!?TM1;
!!MW:P4/8/0/9/?v100;
!!IF:M^v100:%V100^;
!!MWv100:A2/0/0/0A3/1/1/0/1/1/0;
!!MW:P1/8/0/10/?v110;
!!IF:M^v110:%V110^;
!!MWv110:A2/10/10/0A3/1/1/1/0/1/0;

!?MW0;
!!IF:M^MW0:%V997^;

!?MW1;
!!IF:M^MW1:%V997^;</code></pre></div></details>
<span class="erm-anchor" id="ref-rec-mw-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/mw/#ref-tr-mw">!?MW</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mw-a"></span>A1/x/y/l</strong></span><br>
Set/check/get (jump when setting) wandering creature to position X Y L</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-mw-a2"></span>A2/x/y/l</strong></span><br>
Set/check/get a destination for a wandering creature<br>
<strong><u>Comment</u>:</strong> for a wandering creature looking for a hero, here <strong>x</strong> – this is <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-mw-a3"></span><span class="erm-anchor" id="command-a3-1-2-3-4-5-6-7"></span>A3/$1/$2/$3/$4/$5/$6/$7</strong></span><br>
Rogue Creature Management<br>
        $1 – Set/check/get the flag: 
call trigger (1) <a href="../../triggers/mw/#ref-tr-mw">!?MW0</a> or not (0) when creature reaches the destination/before the target hero attacks.<br>
        $2 – Set/check/get the flag: 
call trigger (1) <a href="../../triggers/mw/#ref-tr-mw">!?MW1</a> or not (0) if creature was killed (when a stray creature is killed, it no longer has a number, and that number can be set to another creature when created)<br>
        $3 – Set/check/get the flag: go to destination <br>
        $4 – Set/check/get the flag: whether creature is looking for any hero<br>
        $5 – Set/check/get the flag: whether creature will stand after arriving at the point/hero. 
Now the creatures that reach, attack and defeat the hero become free. If you set this flag, creature will remain standing until the next command. 
For free creatures, turning this flag on means standing still.<br>
        $6 – Set/check/get the flag: search for a specific <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a> (-1 = any)<br>
This flag is only used for free creatures. If set, the destination should contain the player's color number instead <strong>x</strong>. 
If it is not -1, free roaming creatures will only seek out that specific player's heroes and castles.<br>
        $7 – Set/check/get the flag: can move on land and/or water <br>
            0 = usually (white space only)<br>
            1 = water only.<br>
            2 = can move both ways</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-mw-a4"></span><span class="erm-anchor" id="command-a4"></span>A4/#</strong></span><br>
Set/check/get radius (#) for search (default 20)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mw-c"></span><span class="erm-anchor" id="command-c-1-2-3-e"></span>Cx/y/l/?$</strong></span><br>
Check if there is a stray creature in position<br>
        x/y/l – position to be checked<br>
The $ variable will contain the number of the roaming creature (1...) or 0 if it is not there.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mw-e"></span>E?$</strong></span><br>
Check for the existence of a wandering creature #.<br>
If does not exist, $=0; if exists, $ = number of the roaming creature.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mw-m"></span><span class="erm-anchor" id="command-m-1-2-3-p-1-2-3-4"></span>Mx/y/l/?$</strong></span><br>
Make the creature wander<br>
        x/y/l – location with an existing creature<br>
        $ – the variable will take the value of the number of the wandering creature. If $ is 0, then 
stray creature was not created for some reason.<br>
You can also install the creature via <a href="../mo/#ref-rec-mo">receiver !!MO</a> (by position) after generating a wandering creature through !!MW:P.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mw-p"></span>Px/y/l/#/?$</strong></span><br>
Place (generate) a creature on a position<br>
        # – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
        $ – the number of the wandering creature will be entered into the variable (for further operations)<br>
For this command, the roaming creature number (!!MW#) is not needed, because he is not yet known.</div>
<hr>















</div>
</div>
</section>
:::

## Related reference {#related}

[MW](../../triggers/mw/) · [MO](../../receivers/mo/)



## Related commands and tables {#reference-links}

[Wandering monsters (MW)](../../triggers/mw/) · [Hero table](../../tables/heroes/) · [Player colors](../../tables/players/) · [Neutral map monsters (MO)](../mo/) · [Creature table](../../tables/creatures/)
