# General game operations (UN)

ID: erm.receivers.un
URL: /en/erm/receivers/un/
Part: 4/4
Source references: old-help:rec-un.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.un 4 -->
…</div><span class="erm-anchor" id="ref-rec-un-44"></span><details class="erm-comment"><summary>More details</summary><div class="erm-comment-body">
<blockquote class="erm-margin-top-zero erm-note"><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!UN</span>:R3/#;</strong> - refresh screen <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero #</a> (-1 – for the current one).<br>
The command works ONLY while the hero window is open (i.e. inside the trigger <a href="../../triggers/cm/#ref-tr-cm">!?CM2</a>).<br>
Trying to use this command anywhere else will cause the game to crash.</blockquote></div></details>
<div>         # = 4 – update the town screen (do not use outside the town screen!)<br>

<span class="erm-anchor" id="ref-rec-un-49"></span><details class="erm-comment"><summary><strong>Comment</strong> (<span class="erm-anchor" id="ref-rec-un-show49"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">Unfortunately, the base ERM does not have a command to update the hero encounter screen.<br>
However, there is a ready-made solution for <a href="../../compatibility/#ref-era-index">ERA</a> - command <a href="../sn/#ref-rec-sn-era-d">SN:D</a>.</div></details></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-r5"></span><span class="erm-anchor" id="command-r5-r6-r7"></span>R5/$1/$2</strong></span><br>
Set cursor type<br>
         $1 –
<a href="../../tables/cursors/#ref-form-mousepointers" data-context="true">cursor type</a><br>
         $2 – cursor subtype<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-34"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show34"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Show any dialog to change the cursor back to an arrow. 
If you set any cursor, it will be returned to normal after the command <a href="./#ref-rec-un-r7">UN:R7</a>.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-r6"></span>R6/$</strong></span><br>
Wait<br>
         $ – time in ms (1000 = 1 second)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-r7"></span>R7/$1/$2<br>
R7/$1</strong></span><br>
Mouse cursor: hide and deactivate<br>
         $1 – show (0) or hide (1) cursor<br>
         $2 – allow (0) or disable (1) cursor changes<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-35"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show35"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	When you visit any object (for example, a fishing well), trigger <a href="../../triggers/ob/#ref-tr-ob">!?OB</a> starts working, the cursor disappears. So if your script is long enough, you can set the cursor to be an hourglass 
manually. Then, to return the cursor to the default, you need to do something like the following:<br>
         - start a new game<br>
         - load the game<br>
         - any message (possible with ERM)<br>
         - any extended WoG dialogue<br>
<pre class="erm-example"><code class="language-erm">So, for a fishing well it could be like this:
!!UN:R5/1/1; hourglass cursor
!!UN:R7/0/1;
Then if you show a message or question:
!!IF:...
cancel the cursor again:
!!UN:R5/1/1;
!!UN:R7/0/1;
at the end of the script you can include the cursor:
!!UN:R7/0/0;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-s"></span>S#1/#2/#3/#4/#5</strong></span><br>
Open (show) part of the map (area - circle)<br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L (level)<br>
         #4 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a><br>
         #5 – radius<br>
<em class="erm-strong">Note:</em> DO NOT use this command to show the dungeon in 
single-level map (this will lead to critical errors in drawing)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-t"></span><span class="erm-anchor" id="command-t-town-tier-upgrade-monster-u-type-subtype-count"></span>T#1/#2/#3/$</strong></span><br>
Set up a recruitable creature in the castle<br>
         #1 – <a href="../../tables/towns/#ref-form-towns" data-context="true">town type</a> 
(0..8)<br>
         #2 – level (0..6)<br>
         #3 – basic (0) or advanced 
(1)<br>
         $ – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-36"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show36"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">The command works in 
	all towns, including AI. You can set the command as an instruction. Remember that you can enhance 
"importance" of a creature for AI by setting the AI value with the command <a href="../ma/#ref-rec-ma-i">!!MA:I</a>. 
Additional resources are expected only for level 7 housing.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-u"></span><span class="erm-anchor" id="command-u-type-subtype-ordinal-vindex"></span>U#1/#2/?$</strong></span><br>
Count all objects on the map<br>
         #1 –
<a href="../../tables/objects/#ref-form-objects" data-context="true">object type</a><br>
         #2 –
<a href="../../tables/objects/#ref-form-objects" data-context="true">object subtype</a> (-1 – any)<br>
         $ – number of objects of type 
#1, subtype #2 (check or receive only)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-46"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show46"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you are counting towns, remember that at the beginning of the game the counter does not count random towns 
(since they have <a href="../../tables/objects/#ref-form-objects" data-context="true">type</a> 77, not 98). Be careful.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:U54/i/?n;
The variable n now stores the number of objects of type 54 and subtype i.</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-u1"></span>U#1/#2/#3/#4</strong></span><br>
Get object coordinates<br>
         #1 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object type</a><br>
         #2 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object subtype</a> (-1 – any)<br>
         #3 – object number (1…last 
object; -1 – from the first object, -2 – from the last object)<br>
         #4 – <em>v</em>-variable with coordinates: v[#4]=X; v[#4+1] = Y; v[#4+2] = L<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:U54/i/3/324; 
v324, v325, v326 now contain the coordinates of object type 54, subtype i and number 3.</code></pre>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-37"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show37"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
All objects are counted like this: from left to right, top to bottom; Surface, and then Underground.<br>
<div class="table-wrap erm-reference-table"><table class="erm-table-offset">
<tr><td>0</td><td>1</td><td>3</td><td>6</td></tr>
<tr><td>2</td><td>4</td><td>7</td></tr>
<tr><td>5</td><td>8</td></tr>
<tr><td>9</td></tr>
</table></div>
</div></details>
<u></u><br><span class="erm-anchor" id="ref-rec-un-38"></span><details class="erm-comment"><summary>Quick search technique (<span class="erm-anchor" id="ref-rec-un-show38"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you are using object search syntax 
UN:Utype/sub item/number/number_variable, you can set the number to -1. This 
means that the object will be searched based on coordinates 
the previous found object of the same type.<br>
In standard syntax (number = 1...) UN:U checks all objects of this type 
until you find the number you are looking for. This is a long process on large maps, especially 
if it is a frequently occurring object.<br>
With the new syntax (number = -1) the coordinates are returned to 
v[variable_number]/v[variable_number+1]/v[variable_number+2], and search 
The next object is not traced from the beginning of the map, but from the last one found. Let me explain 
- the process goes faster, but requires your NOT intervention in the variables with 
coordinates of the last found object.<br>
<u>
</u><br><span class="erm-anchor" id="ref-rec-un-39"></span><details class="erm-comment"><summary>Example 1 (<span class="erm-anchor" id="ref-rec-un-show39"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<ul><li>This script works fine
<pre class="erm-example"><code class="language-erm">!!UN:U53/-1/1/1; (get the coordinates of mine 1: v1/v2/v3)...
!!VRv1:S99; (change v1 to something)
...
!!UN:U53/-1/2/1; (get the coordinates of mine 2: v1/v2/v3)
...</code></pre></li>
<li>This script works <em>wrong!</em> v1 has been changed
<pre class="erm-example"><code class="language-erm">!!UN:U53/-1/1/1; (get the coordinates of mine 1: v1/v2/v3)
...
!!VRv1:S99; (change v1 to something)
...
!!UN:U53/-1/-1/1; (get the coordinates of the 'next' mine (2): v1/v2/v3)
...</code></pre></li>
<li>This script works fine
<pre class="erm-example"><code class="language-erm">!!UN:U53/-1/1/1; (get the coordinates of mine 1: v1/v2/v3)
... (v1/v2/v3 Not changed)
!!UN:U53/-1/-1/1; (get the coordinates of the 'next' mine (2): v1/v2/v3)
... (v1/v2/v3 Not changed)
!!UN:U53/-1/-1/1; (get the coordinates of the 'next' mine (3): v1/v2/v3)
...</code></pre></li>
<li>This script works fine
<pre class="erm-example"><code class="language-erm">!!VRv1:S-1; (start searching from the first object on the map)
!!UN:U53/-1/-1/1; (get the coordinates of the 'next' mine (1): v1/v2/v3)
... (v1/v2/v3 Not changed)
!!UN:U53/-1/-1/1; (get the coordinates of the 'next' mine (2): v1/v2/v3)
... (v1/v2/v3 Not changed)
!!UN:U53/-1/-1/1; (get the coordinates of the 'next' mine (3): v1/v2/v3)
...</code></pre></li></ul></div></details>
<u>
</u><br><span class="erm-anchor" id="ref-rec-un-40"></span><details class="erm-comment"><summary>Example 2 (<span class="erm-anchor" id="ref-rec-un-show40"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE

!#TM1:S1/999/1/1; set timer 1 for red

!?TM1;
!!UN:U16/-1/?v100;
!!VRv1:S-1;
!!IF:M^Found %V100 of creature banks. Now let's go through everything:^;
!!DO123/1/v100/1:P;

!!IF:M^A veil envelops you...^;
!!UN:H72/72/1/1/100; close to red

!!VRv1:S-2;
!!IF:M^Now in reverse order^;
!!DO124/1/v100/1:P;

!?FU123;
!!UN:U16/-1/-1/1;
!!UN:Sv1/v2/v3/0/3; Open for red
!!UN:Lv1/v2/v3/100; Move gaze 100 ms

!?FU124;
!!UN:U16/-1/-2/1;

!!UN:Sv1/v2/v3/0/3; open for red
!!UN:Lv1/v2/v3/100; move gaze 100 ms</code></pre>
The script will scroll through all the banks of creatures in front of you in normal and reverse order.</div></details>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-v"></span><span class="erm-anchor" id="command-v-1-2-3-4-5-6-7-x-1-2"></span>V?$1/?$2</strong></span><br>
Get the version of WoG and the ERM you are using.<br>
         $1 – WoG version (3.58 = 358)<br>
         $2 – ERM version (2.81 = 281)<br>
<em class="erm-strong">Note:</em> for ERA game version = 400, ERM version = [ERA version] × 1000<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-41"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show41"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can only check or get the value, but not set.<br>
Use the instruction command to check if the player has the required version 
and then show a message to the player about the outdated version of the expansion, if so. 
This is better than having the player walk halfway through the map before 
how he stumbles upon a script that is incorrect for this version and does not finish the map.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!#UN:V?y1/?y2;
!#IF|y1&lt;358/y2&lt;280:M^For this map to work, you need WoG no older than 3.58 and ERM version no older than 2.80.
Please update your files.^;</code></pre></div></details>
<hr><div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-un-v2"></span>
<span class="erm-tone-red"><strong>V?$1/?$2/?$3/?$4/?$5</strong></span><br>
Get the version of WoG and the ERM you are using. Advanced syntax:
</div><pre>        $1 – WoG version
        $2 – version of the ERM used
        $3 – one or more people in the game
	= 1 – one person
	= 2 – more than one
        $4 – one or more PCs in the game
	= 0 – one PC
	= 1 – more than one
        $5 – game type
	= 0 – one player
	= 1 – IPX
	= 2 – TCP/IP
	= 3 – Hot Seat
	= 4 – Direct Connect
	= 5 – modem
<em>Extended syntax:</em><span class="erm-anchor" id="ref-rec-un-v3"></span>
<span class="erm-tone-red"><strong>V?$1/?$2/$?3/?$4/?$5/?$6/?$7</strong></span>
        $1…$5 – see above
        $6 – cheat menu: enabled (1) or disabled (0)
        $7 – use of cheats: yes (1) or not (0)</pre>
<u></u> <span class="erm-anchor" id="ref-rec-un-42"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show42"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	You can't turn cheat status on or off, but you can check it.<br>
The codes do not work in multiplayer. If you have canceled the codes, this will work for the keyboard codes and the cheat menu 
(even if it was enabled)</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-w"></span>W#1/#2/#3/#4/#5</strong></span><br>
Make the water line accessible to the hero, but not to the boat.<br>
         #1 – X1<br>
         #2 – Y1<br>
         #3 – X2<br>
         #4 – Y2<br>
         #5 – L (level)<br>
<em>Additional syntax:</em><br>
<span class="erm-tone-red"><strong>W#X1/#Y1/#X2/#Y2/#L/$</strong></span><br>
Place/remove path (logs) on water<br>
         $ – place (1) or remove (0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-x"></span>X?$1/?$2</strong></span><br>
Get map size<br>
         $1 – number of the variable where the size will be entered (X=Y)<br>
         $2 – equals 0 (one level) and 1 (Underground/Surface).<br>
You can only check or receive.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-43"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-un-show43"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#UN:X?i/?j;
!#VRz1:S^one level only^;
!#VRz1&amp;j=1:S^two levels^;
!#IF:M^Map has %Z1 and size X=%Vi Y=%Vi^;</code></pre>
</div></details>
<hr>














</div>
</div>
</section>
:::

## Related reference {#related}

[UN:C](../../un-c/) · [SN](../../receivers/sn/) · [Constants](../../framework/constants/)



## Related commands and tables {#reference-links}

[Artifact table](../../tables/artifacts/) · [Artifact slots](../../tables/artifact-slots/) · [Combination artifacts](../../tables/combination-artifacts/) · [Resources](../../tables/resources/) · [Players (OW)](../ow/#command-r) · [ERM debugging and compatibility](../../compatibility/) · [UN:C — memory access](../../un-c/) · [ERM examples](../../examples/) · [Secondary skills](../../tables/secondary-skills/) · [Creature table](../../tables/creatures/) · [Hero table](../../tables/heroes/) · [Hero specialty pictures](../../tables/specialty-pictures/) · [Player colors](../../tables/players/) · [Game object table](../../tables/objects/) · [Terrain types](../../tables/terrain/) · [Map artifacts and resources (AR)](../ar/) · [Creature dwellings on the map](../../tables/creature-dwellings/) · [Creature dwellings (DW)](../dw/) · [Garrison (GR)](../gr/) · [Map objects (OB)](../ob/#command-t-u) · [Mines (MN)](../mn/) · [Two-way monoliths](../../tables/two-way-monoliths/) · [Mine types](../../tables/mines/) · [Neutral map monsters (MO)](../mo/) · [Sign and ocean bottle (SG)](../sg/) · [Shipyard (SY)](../sy/) · [Spell table](../../tables/spells/) · [Towns (CA)](../ca/) · [University (UR)](../ur/) · [Witch hut (WH)](../wh/) · [Campfire (FR)](../fr/) · [Swan pond (SW)](../sw/) · [Map skeleton (SK)](../sk/) · [Local map events (LE)](../le/) · [Lean-to (LN)](../ln/) · [Learning stone (ST)](../st/) · [Shrine of magic (SR)](../sr/) · [Magic spring (SP)](../sp/) · [Mystical garden (GD)](../gd/) · [Obelisk (MT)](../mt/) · [Pyramids and new objects (PM)](../pm/) · [Scholar (SC)](../sc/) · [Map objects (OB)](../ob/#command-c) · [Treasure chest (CH)](../ch/) · [Tree of knowledge (KT)](../kt/) · [Wagon (WG)](../wg/) · [Warrior tomb (WT)](../wt/) · [Water wheel (WM)](../wm/) · [Windmill (ML)](../ml/) · [Pandora box (PA)](../pa/) · [Heroes (HE)](../he/#command-n-o-1-p-1-2-3-4) · [Hero experience thresholds](../../tables/hero-levels/) · [Saving and loading (GM)](../../triggers/gm/) · [Map objects (OB)](../ob/#command-r-s) · [Town building IDs](../../tables/buildings/) · [Creature experience and bonuses (EA)](../ea/#command-a-h-s-t) · [Mouse clicks (CM)](../../triggers/cm/) · [ERA services, memory and sound (SN)](../sn/#command-d-o-x-y-level) · [Mouse cursors](../../tables/cursors/) · [Object visits (OB)](../../triggers/ob/) · [Town types](../../tables/towns/) · [Creature-type attributes (MA)](../ma/#command-i)

<!-- llm:end erm.receivers.un 4 -->

# University (UR)

ID: erm.receivers.ur
URL: /en/erm/receivers/ur/
Part: 1/1
Source references: old-help:rec-ur.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ur 1 -->
## Receiver UR {#ref-rec-ur}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ur-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>UR</strong> (university)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-ur-red"></span><span class="erm-tone-red">!!UR#1/#2/#3:XXXX;</span> 
- university in X Y L.</strong> 
University - <a href="../../tables/objects/#ref-form-objects" data-context="true">type 104</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ur-s"></span><span class="erm-anchor" id="command-s-1-2-3-4"></span>S$1/$2/$3/$4</strong></span><br>
Proposed <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">skills</a>. $1 = 
number of the first skill, etc.</div>
<hr>
















</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [Secondary skills](../../tables/secondary-skills/)

<!-- llm:end erm.receivers.ur 1 -->

