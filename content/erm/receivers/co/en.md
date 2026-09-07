---
{"title":"Commanders (CO)","summary":"CO receiver: commanders, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Commanders (CO)"}
---

## Receiver CO {#ref-rec-co}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-a1-1-2"></span><span class="erm-anchor" id="command-a2-a3-1-2-a4-1-12"></span><span class="erm-anchor" id="command-b0-b1-1-2"></span><span class="erm-anchor" id="command-b2-b3-1-2"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-co-text"></span><div>
<span class="erm-anchor" id="ref-rec-co-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>CO</strong> (commanders)</span></div>
<div class="erm-paragraph"><br>
<span class="erm-anchor" id="ref-rec-co-red"></span><span class="erm-tone-red"><strong>!!CO#:XXXX;</strong></span><strong> – This receiver allows you to set, check and change commander parameters.</strong><br>
         # = -4 – apply to all commanders of the defending side<br>
         # = -3 – apply to all commanders of the attacking side<br>
         # = -2 – apply to all commanders<br>
         # = -1 – apply to the current commander (for the current hero)<br>
         # ≥ 0 – apply to a specific commander (corresponding to the hero number)</div>
<span class="erm-anchor" id="ref-rec-co-q1"></span><div class="erm-tone-quote erm-note erm-paragraph"><u>See also</u>: trigger <a href="../../triggers/co/#ref-tr-co">!?CO</a>, <a href="../../un-c/commander-structure/#ref-form-commstr" data-context="true">Commander structure</a>, team <a href="../un/#ref-rec-un-j13">!!UN:J13</a>.</div>
<div class="erm-paragraph"><u></u></div><span class="erm-anchor" id="ref-rec-co-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-co-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
All commanders placed on the map using ERM have the same secondary and primary skills (but abilities vary depending on their type). 
In fact, this is one Commander with different capabilities. If you have not set any parameters for these commanders, they will have the standard parameters for the start of the game. 
To strengthen them, use this receiver. To apply all changes to only these additional commanders, use number -3 
(all commanders on the attacking side) and -4 (all commanders on the defending side).<br>
To turn them into a real commander, you must set the commander's status to "alive" (via the [<a href="./#ref-rec-co-d">D</a>]), and also set its type. 
You can give any commander special bonuses or set the parameters of any commander as normal.
If you do NOT set the status to "alive", the commander will be treated as "commander-creature", and will always have Fly and the ability to Shoot. 
The parameters and other bonuses for such a "creature commander" must be set by other ERM commands, not by the CO receiver.<br>
Note that you can set everything in the triggers section <a href="../../triggers/ba/#ref-tr-ba">!?BA0</a>/<a href="../../triggers/ba/#ref-tr-ba">!?BA50</a> or later in the battle. 
All settings will be lost after the battle and will not be saved in the game.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-a"></span><span class="erm-tone-red"><strong>A</strong></span><br>
Commander Artifact Support<br>
<span class="erm-tone-red"><strong>A1/#1/#2</strong></span><br>
Add artifact<br>
        #1 – artifact number (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>)<br>
        #2 – number of battles won<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-co-2"></span><details class="erm-comment"><summary>Possible results (<span class="erm-anchor" id="ref-rec-co-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
v1 = 0 – artifact added<br>
v1 = 1 – this is not a commander artifact<br>
v1 = 3 – the commander already has this artifact<br>
v1 = 4 – no free slots</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>A2/#1</strong></span><br>
Delete artifact commander<br>
        #1 – artifact number (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>)<br>
<u>
</u><br></div><span class="erm-anchor" id="ref-rec-co-3"></span><details class="erm-comment"><summary>Possible results (<span class="erm-anchor" id="ref-rec-co-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
v1 = 0 – artifact deleted<br>
v1 = 1 – the commander does not have this artifact</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>A3/#1/$1/$2</strong></span><br>
Control of a commander's artifact in a specific slot.<br>
         #1 – artifact slot (0..5)<br>
         $1 – artifact number 
<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">(146..155)</a><br>
         $2 – number of battles won<br>
<u>
</u> </div><span class="erm-anchor" id="ref-rec-co-4"></span><details class="erm-comment"><summary>Possible results (<span class="erm-anchor" id="ref-rec-co-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can get/check or set artifact and/or the number of battles won yourself. Remember - there is no check for the artifact number, check the correctness of the number yourself. 
If artifact is not a commander skill, then instead of its picture, a picture of the commander’s secondary skill may appear 
(however, when returning this skill artifact to the hero, artifact will look as usual), or emptiness.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>A4/$1/$2/$3/$4/$5/$6/$7/$8/$9/$10/$11/$12</strong></span><br>
Control of commander artifacts in all slots at once.<br>
You can get/check or set artifact and/or number of battles won.<br>
         $1 – artifact number (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>) in slot 0<br>
         $2 – number of battles won for the artifact in slot 0<br>
         $3 – artifact number (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>) in slot 1<br>
         $4 – number of battles won for the artifact in slot 1<br>
         $5 – artifact number (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>) in slot 2<br>
         $6 – number of battles won for the artifact in slot 2<br>
         $7 – artifact number (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>) in slot 3<br>
         $8 – number of battles won for the artifact in slot 3<br>
         $9 – artifact number (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>) in slot 4<br>
         $10 – number of battles won for the artifact) in slot 4<br>
         $11 – artifact number (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>) in slot 5<br>
         $12 – number of battles won for the artifact in slot 5<br>
Cannot be applied to all commanders (-2)<br>
 </div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-b"></span><span class="erm-tone-red"><strong>B#/$1/$2</strong></span><br>
Special bonuses<span class="erm-tone-red"><strong><br>
B0/$</strong></span><br>
Give the commander certain abilities<br>
         $ = sum of bits <a href="../../tables/commander-bonuses/#ref-form-cobo" data-context="true">abilities</a><br>
The command sets bonuses, and disables all those that you did not take into account in the bit value.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-co-6"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-co-show6"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!CO0:B0/3; - will give Orrin's commander Fear and Reduce Enemy Defense, but will disable the rest of the available bonuses.</code></pre></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>B1/$1/$2</strong></span><br>
Special bonus: one special. bonus<br>
         $1 – number <a href="../../tables/commander-bonuses/#ref-form-cobo" data-context="true">bonus</a> (0..14)<br>
         $2 – yes (1) or not (0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>B2/$</strong></span><br>
Special Bonus: Ban multiple selected bonuses<br>
         $ – sum of forbidden bits <a href="../../tables/commander-bonuses/#ref-form-cobo" data-context="true">bonuses</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>B3/$1/$2</strong></span><br>
Special Bonus: Ban one special. bonus<br>
         $1 – number <a href="../../tables/commander-bonuses/#ref-form-cobo" data-context="true">bonus</a> (0..14)<br>
         $2 – allowed (1) or not (0)<br>
You can use any B option for all commanders, but only to set parameters. 
For an individual commander, setup, acquisition, and verification can be used as usual.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-d"></span><span class="erm-anchor" id="command-d-e"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
Is the commander dead or alive?<br>
         $=1 – dead<br>
         $=0 – alive<br>
A clear example of using the command <a href="./#ref-rec-co-ex">see below</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-e"></span><span class="erm-tone-red"><strong>E$</strong></span><br>
Allow or deny commander(s).<br>
       
$ = <br>
            0 – prohibit commanders<br>
            1 – allow commanders<br>
           -1 – if commanders are disabled</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-n"></span><span class="erm-anchor" id="command-n"></span><span class="erm-tone-red"><strong>N$</strong></span><br>
Set or get the commander's name.<br>
         $ – number <em>z</em>-variable (1..1000, -1..-10)<br>
You can change <em>z</em>-variable after use (the name is copied into the commander structure). This command cannot be used for all commanders.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-p"></span><span class="erm-anchor" id="command-p"></span><span class="erm-tone-red"><strong>P#/$</strong></span><br>
Commander Options<br>
         # – parameter type<br>
                   0 – attack<br>
                   1 – protection<br>
                   2 – health<br>
                   3 – damage<br>
                   4 – magic power<br>
                   5 – speed<br>
                   6 – magic resistance<br>
         $ – value</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>P$</strong></span><br>
Set/check/get “primary skills control”<br>
         $ = 0 – disabled<br>
         $ = 1 – enabled<br>
If you set it to 1 (on), primary skills will not change with advancement 
commander by level. If set to 0, then health and damage will be 
automatically added along with the commander's level.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-s"></span><span class="erm-anchor" id="command-s-t-x"></span><span class="erm-tone-red"><strong>S#/$</strong></span><br>
Secondary Commander Skills<br>
         # – skill type<br>
                   0 – attack<br>
                   1 – protection<br>
                   2 – health<br>
                   3 – damage<br>
                   4 – magic power<br>
                   5 – speed<br>
                   6 – magic resistance<br>
         $ – value</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-t"></span><span class="erm-tone-red"><strong>T$</strong></span><br>
Commander type (<a href="../../tables/commanders/#ref-form-commanders" data-context="true">0..8</a>)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-x"></span><span class="erm-tone-red"><strong>X#/$</strong></span><br>
Set/get <a href="../../tables/hero-levels/#ref-form-heroeslevels" data-context="true">experience</a> commander<br>
         # – type<br>
                   0 – required amount of experience to the next level<br>
                   1 – current commander experience<br>
                   2 – current commander level<br>
        $ – value</div>

<hr>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-co-ex"></span>
Demo application script <a href="./#ref-rec-co-d">CO:D</a> from <span class="erm-anchor" id="ref-rec-co-n1"></span><code class="erm-tone-purple erm-strong">Timothy Pulver</code><strong> ()</strong></div><span class="erm-anchor" id="ref-rec-co-5"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">

<pre class="erm-example"><code class="language-erm">** Sanctuary commander 0.2 by Timothy Pulver

!$OB80;		[post-trigger to visit the Sanctuary]
!!UN:P3/?y-1;	[check if commanders are enabled: y-1=0 if enabled]
!!CO-1:D?y-2;	[check if the commander is alive: y-2=1 if dead]
!!UN:P76/?y-7;	[check if the script is enabled: y-7=1 if enabled]
!!FU|y-1&lt;&gt;0/y-2&lt;&gt;1/y-7&lt;&gt;1:E;	[exit if commanders or script are not enabled or the commander is not dead]

!!CO-1:T?y-3;	[commander type: y-3]
!!VRy-4:S174 +y-3 +65536;	[picture number for commander]

!!VRy-5:S4 R1;	[random - gems or crystals]
!!IF&amp;999:Q2/21/y-4/y-5/2/2^The monks led you inside and offered to heal your Commander in exchange for a small donation.

Do you agree?^;

!!IF&amp;-2/999:Q1/21/8/1^"You can stay in our Sanctuary as long as you wish."^;
!!FU&amp;-2/999:E;	[stop if the player refused to heal the commander]

!!OW:R-1/y-5/?y-6;		[Check the current player for resource availability: y-6]
!!OW&amp;y-6&gt;=2:R-1/y-5/d-2;	[Take 2 units. resource from the player]

!!VRz10&amp;999:S^
The monks took your Commander to a small alcove, where they performed mystical rituals and spells for several hours.
Finally they told you it was over.
You are glad to see your Commander in good health!^;

!!IF&amp;y-6&lt;2/999:Q1/21/8/1^"We see that you do not have enough funds to donate.
But don't worry, we won't deny you treatment.
You may be able to donate later."
%Z10^;

!!IF&amp;y-6&gt;=2/999:Q1/21/8/1^"Thank you for showing us respect by donating to our humble Sanctuary."
%Z10^;

!!CO-1:D0;	[Revive commander]</code></pre>
</div></details>










</div>
</div>
</section>
:::

## Related reference {#related}

[CO](../../triggers/co/)



## Related commands and tables {#reference-links}

[Commander events (CO)](../../triggers/co/) · [Commander structure](../../un-c/commander-structure/) · [General game operations (UN)](../un/#command-j11-j13-k1-k2-m) · [Battle start and completion (BA)](../../triggers/ba/) · [Artifact table](../../tables/artifacts/#values) · [Commander special bonuses](../../tables/commander-bonuses/) · [Commander classes](../../tables/commanders/) · [Hero experience thresholds](../../tables/hero-levels/)
