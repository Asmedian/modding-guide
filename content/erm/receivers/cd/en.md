---
{"title":"Town demolition and building dependencies (CD)","summary":"CD receiver: town demolition and building dependencies, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver CD {#ref-rec-cd}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-b0-1-2"></span><span class="erm-anchor" id="command-b1-1-2-1-2"></span><span class="erm-anchor" id="command-b2-1-2"></span><span class="erm-anchor" id="command-b3-1-2-1-2"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-cd-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>CD</strong> (destruction of castles)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-cd-red"></span><span class="erm-tone-red">!!CD:XXXX;</span> - used to set the parameters for the destruction of the town by the player<br>
</strong> <br></div><span class="erm-anchor" id="ref-rec-cd-1"></span><details class="erm-comment"><summary>Questions and answers (<span class="erm-anchor" id="ref-rec-cd-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-rec-cd-q1"></span><div class="erm-tone-quote erm-note erm-paragraph"><span class="erm-anchor" id="ref-rec-cd-bold"></span><em class="erm-strong">What happens if I completely destroy the town where my hero is garrisoned?</em></div>
External hero (hero-guest) has no choice but to leave for 6 days. Hero in the garrison will be lost by the owner :-) He will become no one's hero. 
He will always stand inside and protect town from everyone. If he wins, he will gain experience :-)
<br>
<div class="erm-tone-quote erm-note erm-paragraph"><em class="erm-strong">Can AI destroy castles?</em></div>
Currently the AI cannot destroy castles. The problem is that it is very difficult to derive a formula for when to do this AI 
(if at all possible). If you want the AI to destroy its town, use an ERM script (monitor when the AI visits town, 
decide for him what to do and enjoy). But the AI ​​will rebuild town into native town hero.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cd-a"></span><span class="erm-anchor" id="command-a-1-2-3"></span><span class="erm-tone-red"><strong>A#1/#$2/$3</strong></span><br>
Set the minimum amount of health for the hero's army to destroy a building in 
certain type of town<br>
         $1 –
<a href="../../tables/towns/#ref-form-towns" data-context="true">town type</a><br>
         $2 –
<a href="../../tables/building-pictures/#ref-form-buldingsintowns" data-context="true">building type</a><br>
         $3 – minimum army health 
hero</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-cd-b"></span>B0/#1/#2/$</strong></span><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Global permission/prohibition of buildings<br>
        #1 – <a href="../../tables/towns/#ref-form-towns" data-context="true">town type</a><br>
        #2 – <a href="../../tables/buildings/#ref-form-buldings" data-context="true">building number</a><br>
        $ – 0=deny, 1=enable<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-cd-2"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-cd-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#CD:B0/7/2/0; - ban on level 3 guilds (2) for all Fortresses (7) from the very start of the game</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>B1/#1/#2/$1/$2</strong></span><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Set building dependencies for a building.<br>
        #1 – <a href="../../tables/towns/#ref-form-towns" data-context="true">town type</a><br>
        #2 – <a href="../../tables/buildings/#ref-form-buldings" data-context="true">building number</a><br>
        $1 – first value (bytes 0..3), see <a href="../../tables/buildings/#ref-form-buldings" data-context="true">
building numbers</a><br>
        $2 – second value (bytes 4..5), see <a href="../../tables/buildings/#ref-form-buldings" data-context="true">building numbers</a><br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cd-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-cd-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Each bit of $1 (first value) or $2 (second value) means that a building can be built when all buildings with those bits included in the specified values are built.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!CD:B1/0/3/36/0; 4 (3rd level guild) + 32 (tavern) = 36
This command means that a level 4 mage guild in Castle (0) can only be built with a level 3 mage guild and a Tavern.</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>B2/#1/#2/#3/#4/#5/#6/#7/#8/#9/#10/#11/#12/#13/#14/#15/#16</strong></span><br>
Set construction dependency for a building<br>
        #1 – <a href="../../tables/towns/#ref-form-towns" data-context="true">town type</a><br>
        #2 – <a href="../../tables/building-pictures/#ref-form-buldingsintowns" data-context="true">building type</a><br>
        #3…#16 – numbers of buildings on which building #2 depends<br>
Can be used as instructions, omit unnecessary parameters. Cannot be verified or obtained.</div>
<hr>
<div class="erm-paragraph"><strong><span class="erm-tone-red">B3/#1/#2/$1/$2</span><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a></strong><br>
Establish exclusion dependencies for the building.<br>
        #1 – <a href="../../tables/towns/#ref-form-towns" data-context="true">town type</a><br>
        #2 – <a href="../../tables/buildings/#ref-form-buldings" data-context="true">building number</a><br>
        $1 – first value (bytes 0..3), see <a href="../../tables/buildings/#ref-form-buldings" data-context="true">building numbers</a><br>
        $2 – second value (bytes 4..5), see <a href="../../tables/buildings/#ref-form-buldings" data-context="true">
building numbers</a><br>
<u></u> </div><span class="erm-anchor" id="ref-rec-cd-4"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-cd-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	Each bit in $1 (first value) or in $2 
(second) means that if building #2 is built, all buildings with included 
the specified bit values will be hidden (visually) from the town screen.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!CD:B3/0/43/31/0;  entire mage guild = 1 + 2 + 4 + 8 + 16 = 31
This command means that after the construction of Improved. Portal of Glory (43)(Town) the mage guild (if any) will not be shown.</code></pre></div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cd-d"></span><span class="erm-anchor" id="command-d-m"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
$ - maximum number of destructions per day</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cd-e"></span><span class="erm-anchor" id="command-e-1-2-3"></span><span class="erm-tone-red"><strong>E#1/#2/$3</strong></span><br>
Set the minimum hero experience level for destroying a certain building in 
town.<br>
         $1 –
<a href="../../tables/towns/#ref-form-towns" data-context="true">town type</a><br>
         $2 –
<a href="../../tables/building-pictures/#ref-form-buldingsintowns" data-context="true">building type</a><br>
         $3 – experience</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cd-m"></span><span class="erm-tone-red"><strong>M$</strong></span><br>
       
$ – number of hero turn points spent on each destruction.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cd-n"></span><span class="erm-anchor" id="command-n-1-2"></span><span class="erm-tone-red"><strong>N#1/$2</strong></span><br>
         $1 – destruction number on 
today (first, second, etc.)<br>
         $2 – cost per destruction 
next building on the same day</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cd-p"></span><span class="erm-anchor" id="command-p-1-2-3-4-5"></span><span class="erm-tone-red"><strong>P$1/$2/$3/$4/$5</strong></span><br>
Used to set the location on the map where the battle will take place. 
creatures (if you want to destroy a dwelling with non-hired creatures in it). 
Used only for land type and territorial bonuses, nothing more.<br>
         $1 – creature number in the town 
(0..7 – unimproved, 8..13 – improved)<br>
         $2 – X<br>
         $3 – Y<br>
         $4 – L (level)<br>
         $5 – corresponding (1)/exact (0) coordinates.<em><br>
Note</em><strong>:</strong> the corresponding coordinates (1) mean that the battle will be 
be carried out on the ground, which is located at the entrance to town.</div>

<hr>










</div>
</div>
</section>
:::

## Related reference {#related}

[CA](../../receivers/ca/) · [FC](../../receivers/fc/)



## Related commands and tables {#reference-links}

[Town types](../../tables/towns/) · [Building pictures by town](../../tables/building-pictures/) · [ERM debugging and compatibility](../../compatibility/) · [Town building IDs](../../tables/buildings/)
