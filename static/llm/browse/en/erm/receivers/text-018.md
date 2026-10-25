# Heroes (HE)

ID: erm.receivers.he
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/he/
Part: 3/3
Source references: old-help:rec-he.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.he 3 -->
        $2 – skill level (0 – none, 1 – basic, 2 – advanced, 3 – expert).<br>
You can set all the secondary skills (28) at once, but only the first 8 will be shown on the hero screen.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-45"></span><details class="erm-comment"><summary>Additionally (<span class="erm-anchor" id="ref-rec-he-show45"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Using low level command <a href="../un/#ref-rec-un-c">UN:C</a> We can provide the ability for the hero to programmatically learn all 28 skills:
<pre class="erm-example"><code class="language-erm">!!UN:C5091278/1/27 C5121386/1/27; [level up]
!!UN:C4881872/1/27; [visit the witch's hut]
!!UN:C6229127/1/27 C6229840/1/27; [university]</code></pre>
</div></details>
<div class="erm-paragraph">Also, you can <a href="../ss/#ref-cont-sschange">change skill parameters</a> setting other values from those specified in $2.<br>
<em>Extended syntax:</em><br>
<span class="erm-tone-red"><strong>S$1/$2/1</strong></span><br>
        $1 – number in the hero’s skills window (0 = none, 1..8 = slot number)<br>
        $2 – skill number (<a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">0..27</a>)<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-he-23"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show23"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can use three variations of the syntax:
<pre class="erm-example"><code class="language-erm">!!HE#:S?#1/#2/1; - find out in which slot skill #2 is shown in variable #1
!!HE#:S#1/?#2/1; - find out which skill is in slot #1 in variable #2
!!HE#:S#1/#2/1; - set slot #1 to show skill #2</code></pre>
In the latter case, if other skills occupy this slot, the skill will remain without a slot. 
You can use this command twice to change the positions of two skills.<br>
When you set skills with this command, you must follow the following rules:
<span class="erm-anchor" id="ref-rec-he-t0"></span><ul class="erm-margin-top-zero"><li>you can move any two displayed skills to change their positions</li>
<li>you <em>shouldn't</em> set skill to show if it is below base level (no skill)</li>
<li>you must set the skills to be shown in a specific order (no empty spaces).</li></ul>
Therefore, you cannot use the command to hide skills that are already showing. You also cannot show a skill if hero does not know it. 
Trying to do this will cause a "phantom" skill (usually Basic Wisdom), which will result in a crash from the game when you click on it.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-t"></span><span class="erm-anchor" id="command-t-1-2-3-4-5-u-1-2-3"></span>T$1/$2/$3/$4/$5</strong></span><br>
Challenge one type of creature to battle<br>
        $1 – X<br>
        $2 – Y<br>
        $3 – L<br>
        $4 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
        $5 – number of creatures<br>
X, Y and L are only used for terrain type and corresponding bonuses.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-u"></span>U$1/$2/$3</strong></span><br>
Set/check/get the position and patrol radius for the AI. Patrol Center X = $1, Y = $2 (level fixed). 
The radius will be set to $3 (you can free the hero from the patrol by setting $3 = -1)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-v"></span><span class="erm-anchor" id="command-v-v"></span>V#1/$2</strong></span><br>
Set/check/get whether hero visited objects <a href="../../tables/hero-visits/#ref-form-he-v" data-context="true">type #1</a> 
($2 is used as <a href="../../tables/bits/#ref-form-hex" data-context="true">bit</a> mask: 1 for the first object, 2 for the second, 4 for the third, etc.)<br>
<em>Syntax extension:</em><span class="erm-tone-red"><strong><br>
V#1/#2/$3<br>
       
</strong></span>#1 – <a href="../../tables/hero-visits/#ref-form-he-v" data-context="true">object type</a><br>
        #2 – object number (0..31)<br>
        $3 – visited by the hero (1) or not (0)<br>
<u>
</u>
</div><span class="erm-anchor" id="ref-rec-he-25"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show25"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:V0/0/0; - establish that the Stone of Knowledge number 0 was not visited by the hero
!!HE-1:V6/2/0; - establish that Library of Enlightenment number 2 was not visited by the hero
!!HE-1:V5/2; - establish that all Trees Knowledges, except the second one, will not be visited by the hero (only the second one is visited)</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-w"></span>W$</strong></span><br>
Change/get hero movement points<br>
         $ – points to change (W0, Wd-10, W?i, W&gt;=100...)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-26"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show26"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This number is not the number of steps that hero can take, but a significantly larger number (usually between 1500 and 2000, depending on the speed of the troops), 
is set automatically by the game. It is problematic to calculate the options for soil bonuses and penalties (plus Path Finding, Logistics, Boots of Speed, etc.). 
On grass with mixed creatures, 1 step is equal to 100 hero movement points.<br>
In Breath of Death and WoG, computer heroes receive additional movement points at higher difficulty levels. 
On Expert they get 125 extra points, on Impossible - 75. </div></details>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>W$/1</strong></span><br>
Same as HE:W$, but without updating. In the standard syntax, update is called even if you perform a check.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-x"></span><span class="erm-anchor" id="command-x-2-3-4-5-6-7"></span>X#1/$2/$3/$4/$5/$6/$7</strong></span><br>
Change the hero's specialty. Set/check/get all special installations.<br>
Types of specialties (#1):<br>
</div><span class="erm-anchor" id="ref-rec-he-27"></span><details class="erm-comment"><summary><u>#1 = 0</u> – specialist in secondary skill</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">secondary skill number</a><br>
     $3...$7 are ignored.</div></details><br>
<span class="erm-anchor" id="ref-rec-he-28"></span><details class="erm-comment"><summary><u>#1 = 1</u> – creature specialist</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">type of creatures</a>     <br>
     $3…$7 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-29"></span><details class="erm-comment"><summary><u>#1 = 2</u> – resource specialist</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/resources/#ref-form-resource" data-context="true">resource type</a><br>
     $3…$7 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-30"></span><details class="erm-comment"><summary><u>#1 = 3</u> - spell specialist</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/spells/#ref-form-spell" data-context="true">spell number</a><br>
     $3…$7 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-31"></span><details class="erm-comment"><summary><u>#1 = 4</u> – creature expert</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
     $3 – attack bonus<br>
     $4 – protection bonus<br>
     $5 – damage bonus<br>
     $6...$7 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-32"></span><details class="erm-comment"><summary><u>#1 = 5</u> – speed</summary><div class="erm-comment-body">     $2 = 2 <br>
     $3…$7 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-33"></span><details class="erm-comment"><summary><u>#1 = 6</u> – improvement specialist</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature 1</a> to improve<br>
     $6 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature 2</a> to improve<br>
     $7 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature</a> improved<br>
     $3…$5 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-34"></span><details class="erm-comment"><summary><u>#1 = 7</u> - dragon specialist</summary><div class="erm-comment-body">
     $2 = 0<br>
     $3 – attack bonus<br>
     $4 – protection bonus<br>
     $5...$7 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-35"></span><details class="erm-comment"><summary><u>#1 = 8</u> – extra-VoG – specialty</summary><div class="erm-comment-body">
    $2 =<br>
            1 - Cover of Darkness<br>
            2 - Builder<br>
    $3…$7 ignored</div></details><br><br>
<u></u>
<span class="erm-anchor" id="ref-rec-he-36"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show36"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">You can use the "d" option for settings that you ignore or cannot change:
<pre class="erm-example"><code class="language-erm">!!HE#:X8/2/d/d/d/d/d; or so !!HE#:X8/2;</code></pre>
To check the current settings use:
<pre class="erm-example"><code class="language-erm">!!HE#:X?y5/?y6/?y7/?y8/?y9/?y10/?y11;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-y"></span><span class="erm-anchor" id="command-y-1-2-3-4-z"></span>Y$1/$2/$3/$4</strong></span><br>
Blessings and curses.     <br>
        $1 – blessing/curse number (<a href="../../tables/blessings/#ref-form-bless" data-context="true">1..65</a>)<br>
        $2 – spell power (not used for blindness and slot blocking)<br>
        $3 – duration in days<br>
        $4 – what to do with it (0 – delete, 1 – give, 2 – add/subtract)<br>
<pre class="erm-example"><code class="language-erm">!!HE#:Y0/0/0/3; - removal of all curses and blessings</code></pre>
<u></u></div><span class="erm-anchor" id="ref-rec-he-37"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show37"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Each hero can only have one spell of each type.<br>
So when you add or subtract (subtracting is adding a negative value), 
this means that the strength and duration will be changed by the sum of the old and new values. 
If you remove a curse, the strength and duration parameters do not matter.<br>
<span class="erm-indent">Curse of a locked slot.<br>
$2 - slot number for the block (-1 = random slot).<br>
If the slot contains artifact, it will be hidden and will appear in the same place when the curse ends. 
But (!) when removing the curse, the “closed slot” is not unlocked. 
If you use the command to remove all curses, everything is in order.<br>
The slots table is unlike any other table, the results were obtained experimentally - <a href="../../tables/artifact-slots/#ref-form-ap3" data-context="true">slot number</a><br>
If you close a combat vehicle and the hero already has one, one of the miscellaneous slots (1..3) will close depending on the number of the combat vehicle. 
Moreover, outwardly it will look like an empty slot, but at the end of the curse artifact will return. 
If you pick up a car in your inventory while the curse is active, town will appear under it, and you will not be able to put it back.</span></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-z"></span>Z?$</strong></span><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
The command returns the memory address <a href="../../tables/hero-structure/#ref-form-advhero" data-context="true">structures of the specified hero</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-he-43"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show43"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?FU(Hero_Param);
; Sample function for working with hero parameters:
; x1 - hero number
; x2 - offset to the specified parameter
; x3 - number of bytes (1, 2, 4)
; x4 - return value
; x5 - function operating mode (0=set/1=get)
!!HEx1:Z?y1;
!!UN&amp;x5=0:Cy1/x2/x3/x4; set-mode
!!UN&amp;x5=1:Cy1/x2/x3/?x4; get-mode

; Using this function you can find out the total number of artifacts Ash (x1=61) in the backpack (x2=980; x3=1 byte)
!!FU(Hero_Param):P28/980/1/?y10/1; the result will be entered in y10

; And so you can make Ash fly (x2=274; x3=4bytes) without any conventions
!!FU(Hero_Param):P28/274/4/3/0; here "3" is exp. level. witchcraft</code></pre></div></details>
<hr>













</div>
</div>
</section>
:::

## Related reference {#related}

[Framework](../../framework/functions/) · [CO](../../receivers/co/) · [EA](../../receivers/ea/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [Hero table](../../tables/heroes/) · [Visiting a hero (HE)](../../triggers/he/) · [Artifact table](../../tables/artifacts/) · [Artifact slots](../../tables/artifact-slots/) · [Variables, strings and arrays](../../variables/) · [Hero classes](../../tables/hero-classes/) · [Town types](../../tables/towns/) · [ERM debugging and compatibility](../../compatibility/) · [Creature table](../../tables/creatures/) · [Repeated function calls (DO)](../do/) · [Hero experience thresholds](../../tables/hero-levels/) · [Spell table](../../tables/spells/) · [Player colors](../../tables/players/) · [Players (OW)](../ow/#command-h-h) · [Battle configuration (BA)](../ba/#command-o-1-2) · [Hero visits and bits](../../tables/hero-visits/) · [Secondary skills](../../tables/secondary-skills/) · [General game operations (UN)](../un/#command-cbase-size-cbase-offset-size) · [Spell attributes (SS)](../ss/) · [Bits, masks and hexadecimal](../../tables/bits/) · [Resources](../../tables/resources/) · [Hero blessings and curses](../../tables/blessings/) · [Hero structure fields](../../tables/hero-structure/)

<!-- llm:end erm.receivers.he 3 -->

# Level-up skill selection (HL)

ID: erm.receivers.hl
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/hl/
Part: 1/1
Source references: old-help:rec-hl.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.hl 1 -->
## Receiver HL {#ref-rec-hl}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-hl-text"></span><div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Receiver <strong>HL</strong> (hero level)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-hl-red"></span><span class="erm-tone-red">!!HL:XXXX;</span> - hero level controller.</strong> 
Allows you to control which skills (<a href="../../framework/constants/hero-skills/#ref-form-primaryskill" data-context="true">primary</a> and 
<a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">secondary</a>) will receive hero when gaining a new level. 
You cannot test or obtain the secondary skills offered, only set them.<br>
Should only be used after a trigger <a href="../../triggers/hl/#ref-tr-hl">!?HL</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-hl-s"></span><span class="erm-anchor" id="command-s-1-2-3"></span>S$1/#2/#3</strong></span><br>
Set the primary and secondary skills that hero can obtain.<br>
        $1 – set/check/get <a href="../../framework/constants/hero-skills/#ref-form-primaryskill" data-context="true">primary skill</a> +1 (0..3)<br>
        #2 – set left secondary skill (-2, -1, <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">0..27</a>)<br>
            -2 = do not change<br>
            -1 = no skill <br>
        #3 – set the right secondary skill (-2, -1, <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">0..27</a>)<br>
Receiver only works after a trigger <a href="../../triggers/hl/#ref-tr-hl">!?HL</a> and only affects the currently received level.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?HL-1; - does anyone get hero level
!!HL:S0/-1/-1; - set that the bonus primary skill is Attack, and there is no choice of secondary skills.</code></pre></div>
<hr>

















</div>
</div>
</section>
:::

## Related reference {#related}

[HL](../../triggers/hl/)



## Related commands and tables {#reference-links}

[Hero Skills](../../framework/constants/hero-skills/) · [Secondary skills](../../tables/secondary-skills/) · [Hero level-up (HL)](../../triggers/hl/)
<!-- llm:end erm.receivers.hl 1 -->

# Hero interaction permissions (HO)

ID: erm.receivers.ho
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/ho/
Part: 1/1
Source references: old-help:rec-ho.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ho 1 -->
## Receiver HO {#ref-rec-ho}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ho-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>HO</strong> 
(actions on the hero)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-ho-red"></span><span class="erm-tone-red">!!HO$:XXXX;</span> - used to allow or deny interactions with <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero $</a>.</strong><br>
Unlike <a href="../he/#ref-rec-he">!!HE</a>, used to activate or deactivate hero interactions.</div>
<span class="erm-anchor" id="ref-rec-ho-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: event <a href="../../triggers/#ref-era-new-events-2-10">OnBeforeHeroInteraction</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ho-d"></span><span class="erm-anchor" id="command-d-e"></span>D$</strong></span><br>
Ban all heroes <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">colors $</a> (-1 – current) attack (enemy hero) or visit (ally) this hero.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ho-e"></span>E$</strong></span><br>
Allow all heroes <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">colors $</a> (-1 – current) attack (enemy hero) or visit (ally hero) this hero.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ho-h"></span><span class="erm-anchor" id="command-h"></span>H$</strong></span><br>
Set the tooltip for this hero to the z$ variable.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ho-r"></span><span class="erm-anchor" id="command-r-s"></span>R</strong></span><br>
Allow all heroes to attack (enemy hero) or visit (allied hero) this hero.</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong> <span class="erm-anchor" id="ref-rec-ho-s"></span>S</strong></span><br>
Prevent all heroes from attacking (enemy hero) or visiting (allied hero) this hero.</div>
<hr>


















</div>

</div>
</section>
:::

## Related reference {#related}

[HE](../../receivers/he/)



## Related commands and tables {#reference-links}

[Hero table](../../tables/heroes/) · [Heroes (HE)](../he/) · [ERM triggers and events](../../triggers/) · [Player colors](../../tables/players/)
<!-- llm:end erm.receivers.ho 1 -->

