# Creature banks (CB)

ID: erm.receivers.cb
URL: /en/erm/receivers/cb/
Part: 1/1
Source references: old-help:rec-cb.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.cb 1 -->
## Receiver CB {#ref-rec-cb}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-a1"></span><span class="erm-anchor" id="command-a2"></span><span class="erm-anchor" id="command-a3-a4"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-cb-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>CB</strong> (creature banks)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-cb-red"></span><span class="erm-tone-red">!!CB#1/#2/#3:XXXX;</span> 
- setting the parameters of the bank (storage) of creatures in X Y L.</strong> Creature Bank – <a href="../../tables/objects/#ref-form-objects-cb" data-context="true">type 16</a>.<br>
You can give an unlimited number of artifacts as a reward, except for scrolls with spells.
If you put a scroll as a reward, the game will crash.<br>
This receiver also works for Decrepit Ship (type 24), Dragon Utopia (type 25), Crypt (type 84), Shipwreck (type 85) (see. <a href="../../tables/objects/#ref-form-objects" data-context="true">objects</a>).</div>
<span class="erm-anchor" id="ref-rec-cb-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: table <a href="../../tables/creature-banks/#ref-form-cb" data-context="true">creature storage</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-a"></span><strong><span class="erm-tone-red">A</span></strong><br>
Bonus – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact</a><br>
<span class="erm-tone-red"><strong>A1/$</strong></span> - check/get the number of artifacts in the bonus table (cannot be set!)<br>
<span class="erm-tone-red"><strong>A2/#/$</strong></span> - set/check/get <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact $</a> in position # (0...) in the bonus table<br>
<span class="erm-tone-red"><strong>A3/$</strong></span> - add <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact $</a> to the end of the bonus table<br>
<span class="erm-tone-red"><strong>A4/$</strong></span> - remove artifact in position $ (0...) in the bonus table.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-g"></span><span class="erm-anchor" id="command-g-1-2-3"></span><span class="erm-tone-red"><strong>G#1/$2/$3</strong></span><br>
Set/check/get <a href="../../tables/creatures/#ref-form-creature" data-context="true">guards</a> in slot #1 (0..6), type $2 and quantity $3.<br>
<u></u><br></div><span class="erm-anchor" id="ref-rec-cb-1"></span><details class="erm-comment"><summary>Additionally (<span class="erm-anchor" id="ref-rec-cb-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">The creatures are located like this:<br>
</div><div class="table-wrap erm-reference-table"><table class="erm-table-offset">
<tr><td>3</td><td>6</td><td>0</td></tr>
<tr><td>5</td><td title="[X] - schematic location of the hero’s army">[X]</td><td>4</td></tr>
<tr><td>2</td><td> </td><td>1</td></tr>
</table></div>
Moreover, even if you have configured any creatures in slots 0..4 inclusive, then slots 5 and 6 will be occupied by spearmen. 
To avoid this, use a guard creature value of -1 with a count of 0 for slots 5 and 6.
<div class="erm-paragraph">It is worth noting that it is possible to change the type of protection of treasuries directly by making changes to the game memory.<br>
Here is a list of memory addresses and their default values (provided by <span class="erm-anchor" id="ref-rec-cb-n1"></span><strong class="erm-tone-purple erm-strong">Igor</strong>): </div><span class="erm-anchor" id="ref-rec-cb-4"></span><details class="erm-comment"><summary>(<span class="erm-anchor" id="ref-rec-cb-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!UN:C6750880/1/94;  Cyclops Vault
!!UN:C6750900/1/16;  Treasury of the Dwarves
!!UN:C6750920/1/4;   Griffin Conservatory
!!UN:C6751108/1/12;  Conservatory of Griffins award - Angels
!!UN:C6750940/1/42;  Sanctuary of Demons
!!UN:C6750960/1/76;  Medusa Warehouses
!!UN:C6750980/1/38;  Nag Bank
!!UN:C6751000/1/104; Hive Zmiev
!!UN:C6751124/1/108; Hive of the Wyrm Reward - Wyverns
!!UN:C6751020/1/115; Derelict Ship (Water Elemental)
!!UN:C6751040/1/60;  Shipwreck (Guardians)

** Crypt
!!UN:C6751060/1/56;  Corpse
!!UN:C6751064/1/58;  Zombie
!!UN:C6751068/1/60;  Wight
!!UN:C6751072/1/62;  Vampire

** Dragon Utopia
!!UN:C6751080/1/26;  Green dragon
!!UN:C6751084/1/82;  Red Dragon
!!UN:C6751088/1/27;  golden dragon
!!UN:C6751092/1/83;  Black Dragon</code></pre></div></details>
</div></details>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-m"></span><span class="erm-anchor" id="command-m-1-2"></span><span class="erm-tone-red"><strong>M$1/$2</strong></span><br>
Set/check/get bonus creatures <a href="../../tables/creatures/#ref-form-creature" data-context="true">like $1</a> and quantity $2 (1..127).<br>
To remove bonus creature, set type to -1 and quantity to 0.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-r"></span><span class="erm-anchor" id="command-r-1-2"></span><span class="erm-tone-red"><strong>R#1/$2</strong></span><br>
Set/check/get a resource bonus <a href="../../tables/resources/#ref-form-resource" data-context="true">type #1</a> and quantity $2. you 
you can set all 7 resources.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-t"></span><span class="erm-anchor" id="command-t"></span><span class="erm-tone-red"><strong>T$</strong></span><br>
Set/check/get whether the bank is visited (1) or not (0).<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cb-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-cb-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you enable the store again (set this command to 0), you need to set at least one guard, 
otherwise, the next hero who visits this vault will receive the entire reward without a battle.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-v"></span><span class="erm-anchor" id="command-v"></span><span class="erm-tone-red"><strong>V$</strong></span><br>
Set/check/get a word “Visited” for
<a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">player $</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cb-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-cb-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This is a beaten mask, for example, if the vault was visited by blue, red and green, and it was robbed by blue at once, 
$ will be equal to 2(blue)+1(red)+8(green)=11. These players will have an inscription on their home that it has been visited. Also, if the player visited the vault, 
but did not attack, its bits will still be included in the value edited by this option, and the number of guards will be indicated to the player in the tooltip.</div></details>

<hr>













</div>
</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/#values) · [Game object table](../../tables/objects/) · [Creature banks](../../tables/creature-banks/) · [Artifact table](../../tables/artifacts/) · [Creature table](../../tables/creatures/) · [Resources](../../tables/resources/) · [Player colors](../../tables/players/)
<!-- llm:end erm.receivers.cb 1 -->

# Town demolition and building dependencies (CD)

ID: erm.receivers.cd
URL: /en/erm/receivers/cd/
Part: 1/1
Source references: old-help:rec-cd.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.cd 1 -->
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
<!-- llm:end erm.receivers.cd 1 -->

