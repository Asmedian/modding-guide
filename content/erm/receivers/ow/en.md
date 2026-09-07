---
{"title":"Players (OW)","summary":"OW receiver: players, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Players (OW)"}
---

## Receiver OW {#ref-rec-ow}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="current-owner"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ow-text"></span><div>
<span class="erm-anchor" id="ref-rec-ow-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>OW</strong> (player options) </span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-ow-red"></span><span class="erm-tone-red">!!OW:XXXX;</span> 
- this receiver can apply actions to a specific player.</strong> <br>
Use this command to apply actions to the player, such as setting resources, commands, number of heroes controlled by the player, 
and the time that a player can live without a town.<br>
If you want to give or take money from a player, you can use a simplified syntax:
<pre class="erm-example"><code class="language-erm">!!OW../6/d100; – give 100 gold
!!OW../6/d-100; – pick up 100 gold</code></pre></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-a"></span><span class="erm-anchor" id="command-a-c"></span>A#/$</strong></span><br>
Set/check/get an active hero<br>
        # – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a> (-1 = current)<br>
        $ – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a> (-1 = not selected)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-c"></span>C?$</strong></span><br>
Check/get current player's color<br>
        $ = <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a><br>
You can only check or receive, but not install.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ow-5"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ow-show5"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
In a multiplayer game, using a command will give the value of the player who is currently moving, and it does not matter which player initiated the ERM code.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-d"></span><span class="erm-anchor" id="command-d"></span>D#1/#2</strong></span><br>
Set the number of days how long a player can hold out after losing the last castle.<br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player number</a> (-1 = current)<br>
        #2 – days until loss (0..127) or eternal life (128..254)<br>
If you set 128..254, the player will not receive messages warning about the loss of the last town. 
255 sets the standard at 7 days.<br>
        #1 = -2 – set the standard time until loss (usually = 7).<br>
        #2 = days (0..127; 128..255)<br>
If you set 128..254, players will only receive messages about the need to capture the castle for one week.<br>
If you set it to 255, players will receive a message every day.<br>
If you captured town and lost it, the normal amount configured by this command with # = -2 is set.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-g"></span><span class="erm-anchor" id="command-g-i-1-2"></span>G$1/$2</strong></span><br>
Check whether the player is sitting in front of this PC. Multiplayer team.<br>
        $1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a><br>
        $2 – check for player (1 = yes, it’s me; 0 = no, it’s another human player)<br>
Only makes sense for a multiplayer game. Of course, the main syntax is to get the value, 
but you can also install it (but we wouldn't recommend trying it :-)<br>
<strong><u>Comment</u>:</strong> this command is similar to the action <a href="../../variables/#ref-cont-flags-999">flag 999</a>, but they are not equivalent.<br>
<u>
</u>
</div><span class="erm-anchor" id="ref-rec-ow-3"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-ow-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Let's say you're playing online and you need to prevent an opponent who is waiting for his turn to move from using the mouse in battle.
<pre class="erm-example"><code class="language-erm">!?CM4; - trigger mouse click on battlefield
!!BA:O?v1/?v2; - save the color of each side's players
!!BG:Q?y1; - find out whose side is moving now
!!VRy1:+1; - we will use an indirect variable
!!VRy2:Svy1; - write to y2 the color of the player whose turn it is now
!!OW:Gy2/?y3;
!!IF&amp;y3=0:M^Sorry, but it's not your turn now! Wait...^; - show a message for the waiting party</code></pre>
So, if the left hero is walking in battle, then when the player on the right side tries to click with the mouse somewhere, he will be shown 
<em>“Sorry, but now is not your turn! Wait.."</em>
</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ow-h"></span><span class="erm-anchor" id="command-h-h"></span>H#1/$2</strong></span><br>
Count and get the number (numbers) of the player’s heroes.<br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a> (-1 = current)<br>
        #2 – number one <em>v</em>-variable for recording information<br>
In v[#2] the number of heroes the player has will be recorded.
And to the array <em>v</em>-variables, starting with v[#2+1], will record all the hero numbers that the player has.<br>
<em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>H#1/$2/#3</strong></span><br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a> (-1 = current)<br>
        #2 – number <em>v</em>-variable for recording information<br>
        #3 – type<br>
            = 0 - record the number of player heroes in v[#2]<br>
            &gt; 0 - the player’s hero number for recording his own number in v[#2], 
if the player does not have a hero with that number, v[#2] will not change.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-ow-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-ow-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!OW:H1/99/0; – record the number of heroes of the blue player in v99
!!OW:H1/100/1; – write down the number of the first hero of the blue player in v100
!!OW:H1/101/2; – write down the number of the second hero of the blue player in v101
!!OW:H1/102/3; – write down the number of the third hero of the blue player in v102
!!OW:H1/103/4; – write down the number of the fourth hero of the blue player in v103</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-i"></span>I#1/$2</strong></span><br>
Set/check/get AI<br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">color</a><br>
        $2 – controller<br>
         = 1 – AI<br>
         = 0 – person<br>
<em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>I#1/$1/$2</strong></span><br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">color</a><br>
        $1 – AI/human<br>
         = 1 – AI<br>
         = 0 – person<br>
        $2 – player is alive (0) or dead (1)</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ow-k"></span><span class="erm-anchor" id="command-k"></span>K#1/#2/$<br></strong></span>
Set/check/get the status of a keyholder tent<br>
        #1 – player (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a>, -1 = current)<br>
        #2 – tent number (<a href="../../tables/border-colors/#ref-form-bg" data-context="true">0..7</a>)<br>
        $ – visited (1) or not (0)<br>
<u>Example:</u>
<pre class="erm-example"><code class="language-erm">!!OW:K3/4/1; – establish that green visited the brown tent
!!OW:K3/4/?v123; – check if green visited the brown tent in v123</code></pre></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-n"></span><span class="erm-anchor" id="command-n-n-n-0"></span>N#1/$2</strong></span><br>
Set/check/get active town<br>
        #1 – owner (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a>, -1 = current)<br>
        $2 – town number (0..47, -1 – not selected)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>N#1/#2/$</strong></span><br>
Get the number of the lock located in slot #2 of the lock table <br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a> (-1 = current)<br>
        #2 – slot number (0..4)<br>
        $ – town number (-1 = no, 0..N – town number)<br>
You can only check or get the town number shown in one of the five slots on the right. This value cannot be set.<br>
<u>Example:</u>
<pre class="erm-example"><code class="language-erm">!!OW:N1/3/?y10; - get the town number in the third slot of the Blue player and write it to y10</code></pre></div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>N#1/#2/#3/#4<br></strong></span>Move town in the table 
castles<br>        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a><br>
        #2 – type of action:<br>
            1 – move to the very top     <br>
            2 – move up one position<br>
            3 – move down one position<br>
        #3 – town slot in the town table (0..4)<br>
        #4 – phantom parameter (0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-o"></span><span class="erm-anchor" id="command-o-1-9-o-o-0"></span>O#/$1/$2/$3/$4/$5/$6/$7/$8/$9</strong></span><br>
Check the number of all active heroes<br>
        # – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a> (-1 = current)<br>
        $1 – number of heroes<br>
        $2…$9 – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a>, 
owned by this player (-1 = no hero)<br>
Allows you to check the numbers of all active (maximum 8) player heroes shown in the hero table 
(to the right of the main adventure window). They can also be set if you want to change the order of heroes in the table. 
If a player has less than 8 heroes, their values will be -1.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>O#1/#2/$</strong></span><br>
Set/check the number of the active hero in the hero table. You can get the number of the hero shown in one of the 5 slots.<br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a> (-1 = current)<br>
        #2 – slot number (0..4)<br>
        $ – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a> (-1 = no hero)<br>
This syntax can only check or get, but not set.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>O#1/#2/#3/#4</strong></span><br>
Move a hero in the table<br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a><br>
        #2 – type of action:<br>
            1 = move the hero to the very top<br>
            2 = move hero up one position<br>
            3 = move hero one position down<br>
        #3 – hero slot (0..4)<br>
        #4 – phantom parameter (0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-r"></span><span class="erm-anchor" id="command-r"></span>R#1/#2/$3</strong></span><br>
Set/check/get resources<br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a> (-1 = current)<br>
        #2 – <a href="../../tables/resources/#ref-form-resource" data-context="true">type</a> resource<br>
        $3 – quantity of resource<br>
<span class="erm-anchor" id="ref-rec-ow-bold"></span><em class="erm-strong">Note:</em> do not try to install resources while the map is loading 
(i.e. instructions or post-instructions), otherwise the game will crash.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-s"></span><span class="erm-anchor" id="command-s"></span>S#1/#2</strong></span><br>
Cast spell on the adventure map<br>
        #1 – option (currently 1 or 2)<br>
Option 1:<br>
        #2 – spell number (<a href="../../tables/spells/#ref-form-spell" data-context="true">0..9</a>). 
Will be conjured by the current hero.<br>Option 2:<br>
        #2 – phantom parameter (say 0). 
Unlocks Spell book of this hero. This is the way for
simulating the casting of a spell on a map (something like an “obelisk rune”).<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ow-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ow-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
1. The spell book is not necessary, and the hero does not need to know spell<br>
2. Skill level is always based on the corresponding elemental skill 
hero.<br>
3. Spell points are taken from the hero at the end of the spell, but if the hero 
not enough mana, spell will still be executed (and will not result in 
negative amount of mana)<br>
4. Hero should still have some turn points to cast “Dimension Door” 
or "Town Portal" to trigger them.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-t"></span><span class="erm-anchor" id="command-t"></span>T#1/$2</strong></span><br>
Set/check/get commands<br>
         #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a><br>
         $2 – command (0..6, -1)<br>
<strong><u>Comment</u>:</strong> Note that if the owner is neutral (the object's owner value is -1), there is no need to check the command. 
If you do this, you will receive a 0 (which in most cases means a team with a red player).<br>
If the player is not on a team, the value is -1.<br>
<em class="erm-strong">Note:</em> Commands configured during the game are reset after each save is loaded. 
Therefore, any changes to player commands should be made in the trigger body <a href="../../triggers/gm/#ref-tr-gm">!?GM0</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-v"></span><span class="erm-anchor" id="command-v-1-2"></span>V#1/$1/$2</strong></span><br>
Set/check/get heroes available in the tavern.<br>
         #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a> (-1 = current)<br>
         $1 – left <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero</a> in the tavern (-1 = no)<br>
         $2 – right <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero</a> in the tavern (-1 = no)<br>
We cannot guarantee that everything will work correctly if you install one hero for several players.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-w"></span><span class="erm-anchor" id="command-w-w"></span>W#1/$1</strong></span><br>
Set/check/get the number of towns under the player's control<br>
         #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a><br>
         $1 – number of towns the player has (0..48)<br>
<u>
</u>
</div><span class="erm-anchor" id="ref-rec-ow-4"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-ow-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you need to quickly view all the towns of the red player, then...<br>
<pre class="erm-example"><code class="language-erm">!!OW:W0/?y1; - number of towns the red player has
!!FU&amp;y1&lt;1:E; - stop if the player has no towns
!!DO17/1/y1/1:P; - start a town search cycle
!?FU17; loop body
!!VRy1:Sx16 -1;
!!OW:W0/y1/?v1; - town number on the map
!!CA0/v1:P?v2/?v3/?v4; - get town coordinates
!!UN:Lv2/v3/v4/1000; - show town on the world map for 1 second</code></pre>
By the way, in standard WoG scripts, the command was usually used for this <a href="../un/#ref-rec-un-u">UN:U</a> with enumeration of all towns on the map 
and subsequent verification of whether they belong to the player, which takes much longer to complete.
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>W#1/#2/$1</strong></span><br>
Set/check/get the town number from the player's town table #1<br>
         #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a><br>
         #2 – town number in the player’s town table (0..47)<br>
         $1 – town number on the map (0..47)</div>
<hr>












</div>
</div>
</section>
:::

## Notes on modern ERA versions {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!OW:subcommands;</code></div>
<div class="erm-paragraph">In the table, <code>$</code> denotes a read/write parameter, <code>#</code> an input, and <code>?$</code> an output. Individual commands define their identifiers and ranges.</div>
<hr>
<div class="erm-paragraph">A accesses the active hero for a player (-1 current); hero -1 means none. C reads the player whose turn it is, not necessarily the local network-event initiator.</div>
<hr>
<div class="erm-paragraph">Days without a town: player or -2 for the default; 0..127 days, 128..254 indefinite, 255 special default mode. A changed default applies after the next town loss.</div>
<hr>
<div class="erm-paragraph">G tests local human control (1/0). I: 1 AI/0 human; optional second result is 0 alive/1 eliminated.</div>
<hr>
<div class="erm-paragraph">Player and starting v index. Two parameters write hero count followed by all IDs. A third value of 0 writes count only; a positive value selects a one-based hero position. Missing heroes leave the destination unchanged.</div>
<hr>
<div class="erm-paragraph">Keymaster status: player, tent color 0..7, visited 1/not 0.</div>
<hr>
<div class="erm-paragraph">Active town; read ID from visible slot 0..4; reorder town with action 1 top/2 up/3 down.</div>
<hr>
<div class="erm-paragraph">Count and up to 8 active hero IDs (-1 empty); read visible slot 0..4; reorder with actions 1/2/3 as for N.</div>
<hr>
<div class="erm-paragraph">Player, resource 0..6, quantity. d adds/subtracts. Legacy Help prohibits resource changes in early instructions/PI before player initialization.</div>
<hr>
<div class="erm-paragraph">1/ID casts adventure spell 0..9 for the current hero; 2/0 opens the book. Does not require spell knowledge but uses hero mastery; teleports require movement points.</div>
<hr>
<div class="erm-paragraph">Player team: -1 none, 0..6 team. Do not query owner -1 as a neutral player. Restore classic changes after load through GM0.</div>
<hr>
<div class="erm-paragraph">Left/right tavern heroes, -1 absent. Do not assign one hero to multiple players at once.</div>
<hr>
<div class="erm-paragraph">Player town count or a town ID at a zero-based full-list index; differs from the five visible N slots.</div>
<hr>
<div class="erm-paragraph">Players are 0..7; -1 current is valid only where documented. Player color, combat side and team number are different ID spaces.</div>
<hr>
<div class="erm-paragraph">Modern <code>!!OW:C?(currentOwner:y)/?(thisPcOwner:y);</code> distinguishes the active player from this PC’s owner. These differ in network code.</div></section>
:::

## Related reference {#related}

[CA](../../receivers/ca/)



## Related commands and tables {#reference-links}

[Player colors](../../tables/players/) · [Hero table](../../tables/heroes/) · [Variables, strings and arrays](../../variables/) · [Tent and border colors](../../tables/border-colors/) · [Resources](../../tables/resources/) · [Spell table](../../tables/spells/) · [Saving and loading (GM)](../../triggers/gm/) · [General game operations (UN)](../un/#command-t-town-tier-upgrade-monster-u-type-subtype-count)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.4.3, +](../../compatibility/#era3-v-3-4-3-l1718) — Added new ERM command VR:B. It converts any number to boolean (1 or 0). Any non-zero value becomes 1. Example: !!OW:R(CURRENT_PLAYER)/(RES_GOLD)/?(goldAmount:y); !!VR(hasGold:y):S(goldAmount) B; now hasGold = (TRUE) or (…
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2143) — Extended !!OW:C command with the following syntax: OW:C?(owner)/?(thisPcOwner). It became possible to get not only current player, who may play at remote PC, but also this PC human player, who possibly waits for his turn…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3587) — Introduced advanced ERM precompilation mode, called ERM 2.0 and activated via "ZVSE2" first line signature. Main features: - Named local variables to write human readable code instead of cryptic one. Example: !!HE-1:C0/0…
<!-- ERA3-GENERATED:END -->
