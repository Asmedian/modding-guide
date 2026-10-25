# Battlefield operations (BU)

ID: erm.receivers.bu
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/bu/
Part: 1/1
Source references: old-help:rec-bu.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.bu 1 -->
## Receiver BU {#ref-rec-bu}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-bu-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>BU</strong> 
(universal battle parameters)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-bu-red"></span><span class="erm-tone-red"><br>
!!BU:XXXX;</span> 
- set/check/get some universal battle parameters.</strong> </div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-c"></span><span class="erm-anchor" id="command-c"></span><span class="erm-tone-red"><strong>C?$</strong><br>

</span>Used to accurately determine whether the battle is over or not<br>
         $ = 1 if yes<br>
         $ = 0 if not.<br>
Rational use in <a href="../../triggers/bg/#ref-tr-bg">!?BG1</a>;</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-d"></span><span class="erm-anchor" id="command-d"></span><span class="erm-tone-red"><strong>D#/?$</strong></span><br>
Receive or check <a href="../../tables/battlefield/#ref-form-bf" data-context="true">position 
#</a> for dead creatures ($ will contain the number of the dead stack).<br>
         $ = stack number of dead creatures<br>
           -1 if not at all 
creatures in position<br>
           -2 if in position 
live stack</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-e"></span><span class="erm-anchor" id="command-e"></span><span class="erm-tone-red"><strong>E#/?$</strong></span><br>
Get or check $stack number on live creatures in 
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">positions #</a>. If there are living creatures in this 
no position, $ = -1.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-g"></span><span class="erm-anchor" id="command-g"></span><span class="erm-tone-red"><strong>G$</strong></span><br>
Set/check/get special landscapes and their bonuses in battle.<br>
     $ – <a href="../../tables/battle-terrain/#ref-form-bug" data-context="true">landscape type</a><br>
<u></u></div><span class="erm-anchor" id="ref-rec-bu-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bu-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you set this parameter before processing the battle, the game will select the correct background. 
If you change this value during battle, the background will not change, but the bonuses of the set terrain will still work.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-m"></span><span class="erm-anchor" id="command-mz"></span><span class="erm-tone-red"><strong>Mz#</strong></span><br>
Add a message to the battle<br>
         z# – <em>z</em>-variable with text<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bu-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bu-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This command is different from the command <a href="../mm/#ref-rec-mm-m">MM:M</a> the fact that the MM:M message is only shown in the battle log, without saving it, 
when, as through BU:M, the text is shown and added to the event table, i.e. You can use the up and down arrows to scroll through and find that message later.<br>
Remember that you cannot eliminate the original text.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-o"></span><span class="erm-anchor" id="command-o"></span><span class="erm-tone-red"><strong>O#/?$</strong></span><br>
Receive or check <a href="../../tables/obstacle-flags/#ref-form-obstacles-bit" data-context="true">obstacle flags</a> ($) for <a href="../../tables/battlefield/#ref-form-bf" data-context="true">positions #</a> to battlefield.<br>
         $ = 0 if there are no obstacles<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bu-5"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bu-show5"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The command can be used to check obstacle bits on a battlefield hex of interest.<br>
So, if there is a mine at the position, then we get $ = 9 (1+8)<br>
<span class="erm-anchor" id="ref-rec-bu-bold"></span><em class="erm-strong">Note:</em> for the Force field for the initial cell (bottom), the game sets the value $=35 (1+2+32), and for the rest - $=34 (2+32). 
The same goes for all obstacles set by the command. <a href="../bf/#ref-rec-bf-o">BF:O</a>, in which the initial cell will have $=3 (1+2), and all others will have $=2 (when the obstacle occupies more than 1 cell).<br>
<span class="erm-anchor" id="ref-rec-bu-4"></span><details class="erm-comment"><summary><strong>Additionally</strong><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(<span class="erm-anchor" id="ref-rec-bu-show4"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
When working with obstacles, the BU:O command cannot always help. For example, when you need to check the cells at the gate (during a siege).

<pre class="erm-example"><code class="language-erm">!!UN:C6919200/4/?y50; Battle Manager
!!SN:E4625904/2/y50/[hex index]; We write down in v1 whether it is possible to stand in this place. 0 - possible, 1 - impossible.
; If the gate is not breached, the value for the attacker will be 1, otherwise - 0.</code></pre>
</div></details></div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-r"></span><span class="erm-anchor" id="command-r"></span><span class="erm-tone-red"><strong>R</strong></span><br>
Update battlefield after any action<br>
<em class="erm-strong">Note:</em> do not use this command in a trigger <a href="../../triggers/bf/#ref-tr-bf">!?BF</a>.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-bu-3"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-bu-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Unfortunately, this command does not update the active stack's movement grid. However, this can be done using the features <a href="../../compatibility/#ref-era-index">ERA</a>:
<pre class="erm-example"><code class="language-erm">; Update shadow of possible movement after changing stack speed
!!UN:C6919200/4/?y2;    [Battle Manager]
!!SN:E4797616/2/y2/0/1; [update battlefield grid]
!!BU:R;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-s"></span><span class="erm-anchor" id="command-s-1-2-3-4-5-6"></span><span class="erm-tone-red"><strong>S#1/#2/#3/#4/#5/#6</strong></span><br>
Summon creatures to battlefield<br>
         #1 –
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
         #2 – number of creatures<br>
         #3 –
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">position</a><br>
         #4 – side (0 – left hero, 
1 – right)<br>
         #5 – hero slot number (-1 – 
missing (will disappear after the battle))<br>
         #6 – update (1 – yes, 0 – no)<br>
The position must be correct, free from 
other creatures and obstacles, and there cannot be more than 20 stacks on each side.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-t"></span><span class="erm-anchor" id="command-t"></span><span class="erm-tone-red"><strong>T?$</strong></span><br>
Check if the battle has a tactical phase<br>
         $ = 1 if yes<br>
         $ = 0 if not</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-v"></span><span class="erm-anchor" id="command-v"></span><span class="erm-tone-red"><strong>V#</strong></span><br>
Win the battle<br>
         # - winning side<br>
                   
0 = right (defender)<br>
                   
1 = left (attacking)</div>

<hr>













</div>
</div>
</section>
:::

## Related reference {#related}

[BF](../../receivers/bf/) · [BM](../../receivers/bm/)



## Related commands and tables {#reference-links}

[Battle actions (BG)](../../triggers/bg/) · [Battlefield hexes](../../tables/battlefield/) · [BU:G special battle terrain](../../tables/battle-terrain/) · [Battle hint text (MM)](../mm/#command-mz-m-z) · [Obstacle flags](../../tables/obstacle-flags/) · [Battlefield setup (BF)](../bf/#command-o-1-2) · [ERM debugging and compatibility](../../compatibility/) · [Battlefield setup (BF)](../../triggers/bf/) · [Creature table](../../tables/creatures/)

<!-- llm:end erm.receivers.bu 1 -->

# Towns (CA)

ID: erm.receivers.ca
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/ca/
Part: 1/1
Source references: old-help:rec-ca.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ca 1 -->
## Receiver CA {#ref-rec-ca}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-m1-1-2-3"></span><span class="erm-anchor" id="command-m2-1-2-3"></span><span class="erm-anchor" id="modern-strings"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ca-text"></span><div>
<span class="erm-anchor" id="ref-rec-ca-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>CA</strong> (lock settings)</span></div>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-red"></span><span class="erm-tone-red"><strong><br>
!!CA#1/#2/#3:XXXX;</strong></span><strong> 
- used to change lock parameters in X Y L.</strong><em><br>
Syntax extension:<br>
</em><span class="erm-tone-red"><strong>!!CA#:XXXX;</strong></span> 
- town in v[#], v[#+1], v[#+2]<em><br>
Syntax extension:<br>
</em><span class="erm-tone-red"><strong>!!CA0/#:XXXX;</strong></span> 
- town under number # on the card (see option <a href="./#ref-rec-ca-u">U</a>)<br>
<em>
Syntax extension:</em><br>
<span class="erm-tone-red"><strong>!!CA-1:XXXX;</strong></span> 
- current town. Can only be used in the town screen!<br>
Town - <a href="../../tables/objects/#ref-form-objects" data-context="true">type 98</a>. See also: <a href="../../tables/towns/#ref-form-towns" data-context="true">table of towns</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-b"></span><span class="erm-anchor" id="command-b"></span><span class="erm-tone-red"><strong>B#/$</strong></span><br>
Setting up town buildings:<br>
         # = 1 – build <a href="../../tables/buildings/#ref-form-buldings" data-context="true">building $</a><br>
         # = 2 – destroy <a href="../../tables/buildings/#ref-form-buldings" data-context="true">building $</a> <br>
         # = 3 – check if it is built <a href="../../tables/buildings/#ref-form-buldings" data-context="true">building $</a> (to flag 1)<br>
         # = 4 – allow for construction <a href="../../tables/buildings/#ref-form-buldings" data-context="true">building $</a><br>
         # = 5 – prohibit for construction <a href="../../tables/buildings/#ref-form-buldings" data-context="true">building $</a><br>
         # = 6 – build 
<a href="../../tables/buildings/#ref-form-buldings" data-context="true">building $</a> in the town using the internal function<br>
The sixth option is an improvement of the first; it allows you to build multi-level buildings (magicians' guild, for example) without errors.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-g"></span><span class="erm-anchor" id="command-g-g-1-2-g-1-2-3"></span><span class="erm-tone-red"><strong>G$</strong></span><br>
Set/check/get mages guild level (in spell screen) (0..4)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>G$1/$2</strong></span><br>
Set/check/get the number of available spells ($2) on the $1st floor of the Mage Guild</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>G$1/$2/$3</strong></span><br>
Set/check/get <a href="../../tables/spells/#ref-form-spell" data-context="true">spell</a> in slot $2, guild level $1 into variable $3.<br>
When improving the guild, the spells added (i.e., in excess of the available number of spells for this level - 5 for the 1st level, 4 for the second, etc.) are erased</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-h"></span><span class="erm-anchor" id="command-h"></span><span class="erm-tone-red"><strong>H#/$</strong></span><br>
Set/check/get the hero's number in the garrison of the town or guest<br>
         # = 0 – hero in the town garrison<br>
         # = 1 – hero-guest<br>
         $ - <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a> (-1 = no)<br>
You can get or set a hero. If you're going to set it, don't forget to put the old one away somewhere.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ca-i"></span><span class="erm-anchor" id="command-i"></span>I#</strong></span><br>
Set the appearance of the castle. You can only set this value.<br>
Meanings for #:<br>
       0 = normal (sync with built buildings, e.g. Capitol or fort)<br>
       -1 = completely destroyed<br>
       1 = slightly damaged<br>
       2 = moderately damaged<br>
       3 = severely damaged</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-m"></span><span class="erm-tone-red"><strong>M1/$1/$2/$3</strong></span><br>
Set/check/get the number of available creatures <br>
        $1 – creature level (0..6)<br>
        $2 – number of unimproved<br>
        $3 – number of improved</div>
<div class="erm-paragraph">If an improved dwelling is built, the value of $2 is not taken into account.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M2/$1/$2/$3</strong></span><br>
Set/check/get the number of guards<br>
         $1 – position (0..6)<br>
         $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
         $3 – quantity</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-n"></span><span class="erm-anchor" id="command-n-text-n-z"></span><span class="erm-tone-red"><strong>N^Town Name^<br>
Nz#<br>
N?z#</strong></span><br>
Set/get town name</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-o"></span><span class="erm-anchor" id="command-o-p-1-2-3"></span><span class="erm-tone-red"><strong>O$</strong></span><br>
Set/check/get a host (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">-1, 0..7</a>)</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ca-p"></span><span class="erm-tone-red"><strong>P?$1/?$2/?$3</strong></span><br>
Check or get town coordinates<br>
        $1 = X; <br>
        $2 = Y; <br>
        $3 = L (level)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-r"></span><span class="erm-anchor" id="command-r"></span><span class="erm-tone-red"><strong>R$</strong></span><br>
Set/check if the player can build in the town today.<br>
         $ = 0 if possible<br>
         $ = 1 if not<br>
You can use R0 to reset the building counter any number of times during a turn.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-t"></span><span class="erm-anchor" id="command-t-u"></span><span class="erm-tone-red"><strong>T$</strong></span><br>
Set/check/get <a href="../../tables/towns/#ref-form-towns" data-context="true">town type</a> (true, independent of appearance). 
Use the command <a href="./#ref-rec-ca-i">CA:I</a>to give the town an appearance that matches its type.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ca-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-ca-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE
!?HM-1;             with every step of the hero
!!CA12/12/0:T?y1;   check the lock type in 12/12/0
!!VRy2:S8 -y1;      find "reverse" town
!!CA12/12/0:Ty2 I0; change the lock type to the opposite one and synchronize its appearance</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-u"></span><span class="erm-tone-red"><strong>U$</strong></span><br>
Check/get town number on the map (not in the player window)<br>
You can set the value, but we wouldn't recommend it ;)</div>

<hr>













</div>
</div>
</section>
:::

## Notes on modern ERA versions {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!CA#x/#y/#level:subcommands;</code></div>
<div class="erm-paragraph">In the table, <code>$</code> denotes a read/write parameter, <code>#</code> an input, and <code>?$</code> an output. Individual commands define their identifiers and ranges.</div>
<hr>
<div class="erm-paragraph">Modes: 1 build, 2 destroy, 3 test into flag 1, 4 allow construction, 5 forbid, 6 build through the native function. Prefer 6 for multilevel buildings. $ is the building ID.</div>
<hr>
<div class="erm-paragraph">One parameter: displayed guild floor 0..4; two: floor/spell count; three: floor/slot/spell ID. Upgrading the guild can erase additional spells.</div>
<hr>
<div class="erm-paragraph">Garrison hero (0) or visitor (1), -1 means absent. Relocate the previous hero correctly before assigning another.</div>
<hr>
<div class="erm-paragraph">Appearance: 0 synchronize with buildings; -1 completely ruined; 1/2/3 increasing damage. Write only.</div>
<hr>
<div class="erm-paragraph">Recruitable creatures: tier 0..6, basic count, upgraded count. Basic count is ignored when the upgraded dwelling exists.</div>
<hr>
<div class="erm-paragraph">Garrison: slot 0..6, creature type, count.</div>
<hr>
<div class="erm-paragraph">Town name; supports assignment from a z variable.</div>
<hr>
<div class="erm-paragraph">O is owner -1 or 0..7. P reads X/Y/level coordinates.</div>
<hr>
<div class="erm-paragraph">0 allows construction today, 1 blocks it. R0 resets the daily limit.</div>
<hr>
<div class="erm-paragraph">T is actual town type; use I0 after writing to synchronize appearance. U is the map town index; use it for reading.</div>
<hr>
<div class="erm-paragraph">Other selectors: CAindex takes coordinates from three consecutive v variables; CA0/id selects a map town ID; CA-1 is the current town only inside its screen.</div>
<hr>
<div class="erm-paragraph">ERA 3.9.15 rewrote message handling to accept arbitrary strings. Numeric references to another event’s message (such as GE:M30) are disabled. -1 instead of an empty string is deprecated; pass <code>^^</code>. Numeric forms above are retained for reading legacy scripts.</div></section>
:::

## Related reference {#related}

[OW](../../receivers/ow/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [Town types](../../tables/towns/) · [Town building IDs](../../tables/buildings/) · [Spell table](../../tables/spells/) · [Hero table](../../tables/heroes/) · [Creature table](../../tables/creatures/) · [Player colors](../../tables/players/)
<!-- llm:end erm.receivers.ca 1 -->

