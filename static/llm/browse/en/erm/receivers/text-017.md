# Heroes (HE)

ID: erm.receivers.he
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/he/
Part: 2/3
Source references: old-help:rec-he.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.he 2 -->
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/3/d100/5/11; Add 100 creatures with experience rank 5 to the stack, but also change their type to Marksmen.</code></pre></div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-13"></span><details class="erm-comment"><summary>Mod 12 (<span class="erm-anchor" id="ref-rec-he-show13"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Use this mod to set the experience level (rank) for the entire stack.<br>
Similar to mod 2, but $4 means experience level (rank)<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d/5/12; The stack will have 5 levels (ranks) of experience.</code></pre></div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-14"></span><details class="erm-comment"><summary>Mod 13 (<span class="erm-anchor" id="ref-rec-he-show14"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Use this mod to set the equivalent experience percentage for a new type of creature.<br>
Similar to mod 3, but assumes that you have changed the type of creature and the experience of new creatures is taken as a percentage of that of old creatures.<br>
So, if you have a stack of Monks with X experience and change the stack to Angels, the new experience will be X*MaxAngels/MaxMonks+dE, 
where MaxAngels is the maximum experience of Angels and MaxMonks is the maximum experience of Monks, dE is the added experience.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/../d/1000/13; The new stack will receive the corresponding experience that the old stack has, plus 1000 experience.</code></pre>
<blockquote class="erm-note"><strong>NewExperience</strong> = [Old Experience]*[Experience of New Creatures at Rank 10] / [Experience of Old Creatures at Rank 10 + Extra Experience].</blockquote></div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-15"></span><details class="erm-comment"><summary>Mod 14 (<span class="erm-anchor" id="ref-rec-he-show15"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Similar to mod 13, but adds experience levels (ranks).<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/../d/3/14; The new stack will receive the corresponding experience from the old stack plus 3 levels (ranks) of experience.</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>C2/#1/#2/#3</strong></span><br>
Add a new stack of creatures to the hero:<br>
        #1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
        #2 – number of creatures<br>
        #3 = 1 (ask human to join if all slots are occupied), = 0 (use AI, 
i.e. if all stacks are occupied, replace the less significant one automatically)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>C#1/#2/…/#14</strong></span><br>
Change Creatures: Give the player a choice of creatures. The C command is used with 14 parameters:<br>
        #1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 
1 (-1 means no) <br>
        #2 – number of creatures 1<br>
        #3 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 2 (-1 means no)<br>
        #4 – number of creatures 2<br>
        #5 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 3 (-1 means no)<br>
        #6 – number of creatures 3<br>
        #7 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 4 (-1 means no)<br>
        #8 – number of creatures 4<br>
        #9 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 5 (-1 means no)<br>
        #10 – number of creatures 5<br>
        #11 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 6 (-1 means no)<br>
        #12 – number of creatures 6<br>
        #13 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 7 (-1 means no)<br>
        #14 – number of creatures 7<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-16"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show16"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This will be presented as a dialog for placing creatures on the map:
<pre class="erm-example"><code class="language-erm">!!HE-1:C5/6/7/8/9/10/11/12/13/14/15/16/17/18;
!!HE-1:C1/2/-1/0/-1/0/-1/0/-1/0/-1/0/-1/0;</code></pre></div></details>

<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-d"></span>D</strong></span><br>
Call a dialogue to improve the hero's army (no parameters)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-e"></span><span class="erm-anchor" id="command-e-2-1-f-1-2-3-4-1"></span>E$</strong></span><br>
Set/check/get the hero's experience in $<br>
<a href="../../tables/hero-levels/#ref-form-heroeslevels" data-context="true">Hero experience table</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>E$1/$2</strong></span><br>
Set/check/gain hero experience (optional syntax)<br>
        $1 – experience points<br>
        $2 – <a href="../../tables/hero-levels/#ref-form-heroeslevels" data-context="true">level</a> hero<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-17"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show17"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:Ed/d2; - add level 2 to the hero
In this case, the actual level gain does not occur.</code></pre></div></details>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>E$1/$2/1</strong></span><br>
Same as HE:E$1/$2, but without updating. For standard syntax, an update occurs, even with a simple check.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-f"></span>F$1/$2/$3/$4</strong></span><br>
Set/check/get primary skills<br>
        $1 – attack<br>
        $2 – protection<br>
        $3 – magic power<br>
        $4 – knowledge</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>F?$1/?$2/?$3/?$4/1</strong></span><br>
Additional syntax for testing primary skills. Add /1 to the end of the command to get values ​​without artifact effects.<br>
        $1 – attack<br>
        $2 – protection<br>
        $3 – magic power<br>
        $4 – knowledge<br>
You can only use get or check syntax.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-40"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show40"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:F?v100/?v101/?v102/?v103/1;</code></pre></div></details>
<div class="erm-paragraph">The command takes away only the standard values of artifacts. If artifact was modified using a script, the values ​​may not be retrieved correctly.<br>
You can also set the values, but nothing will happen.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-g"></span><span class="erm-anchor" id="command-g-w-1-i-1"></span>G$</strong></span><br>
Set the hero's initial movement points<br>
        $ – initial movement points<br>
If you set the options <a href="./#ref-rec-he-w">HE:W</a> and HE:G are the same, you can dig Grail.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-h"></span><span class="erm-anchor" id="command-h-1-2-3"></span>H$1/$2/$3/$4</strong></span><br>
Set up an army of a recruitable hero.<br>
        $1 – slot number (0, 1, 2)<br>
        $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> (-1 – no creature)<br>
        $3 – min. number of creatures<br>
        $4 – max. number of creatures (may be $3 for a certain number)<br>
The command can set an army of a hero that none of the players currently have in the tavern. 
If he is in a tavern, no changes to his starting army will occur until next week.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-18"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show18"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#HE0:H0/98/3/3 H1/-1/2/2 H2/-1/0/0; Set Orrin's army to Gnolls at the beginning of the game
The command can be executed at any time during the game.</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-i"></span>I$</strong></span><br>
Set/check/get the mana amount.<br>
Use the "d" option to make changes easier if you want to add or subtract mana.<br>
The amount of mana can be negative.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-24"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show24"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:Id-1; take 1 mana point from the current hero</code></pre></div></details>

<div class="erm-paragraph"><span class="erm-tone-red"><strong>I$/1</strong></span><br>
Same as HE:I$, but without updating. In standard syntax, it causes an update even if you did a check.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-k"></span><span class="erm-anchor" id="command-k-k1"></span>K</strong></span><br>
Immediately kill the hero (for example, when visiting a well, fall into it :) )</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>K1</strong></span><br>
Same as HE:K, but without update</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-l"></span>L#^Portrait.pcx^</strong></span><br>
Set hero portrait from external files<br>
        # = 1 – set small portrait – <em class="erm-legacy-file">file.pcx</em><br>
        # = 2 – set a large portrait – <em class="erm-legacy-file">file.pcx</em><br>
<u></u> </div><span class="erm-anchor" id="ref-rec-he-19"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-he-show19"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph"><em class="erm-legacy-file">File.pcx</em> will be searched in the directory <em class="erm-legacy-file">DATA</em>, but you can change the subdirectory.<br>
For example: <em class="erm-legacy-file">^p\name.pcx^</em> - in a folder <em class="erm-legacy-file">p</em> directories <em class="erm-legacy-file">DATA</em>. 
Or <em class="erm-legacy-file">^..\maps\1.pcx^</em> - in the directory <em class="erm-legacy-file">Maps</em> in the game folder.<br>
<strong>IMPORTANT!</strong> The full length of the file name cannot be more than 12 characters (including the path to the folder: dots and slashes are counted).<br>
You can also set portrait from file <em class="erm-legacy-file">DATA\H3bitmap.lod</em>, simply indicating the full name of the portrait.<br>
<u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!!HE-1:L1^..\Mods\WoG\Data\p\1.pcx^; the path to the portrait is too long and causes an error
...
!!HE18:L1^HPS045WZ.pcx^ L2^HPL045WZ.pcx^; give Enova the face of Solmir</code></pre>
The screen will be updated automatically if you change the hero's portrait.<br>
<u>Image requirements</u>: <em>256 colors; Dimensions:  58×64 (large), 48×32 (small)</em></div>
<div class="erm-paragraph">It is worth noting that it is possible to obtain hero portraits using the capabilities <a href="../../compatibility/#ref-era-index">ERA</a>.<br>
Here is an example of a ready-made function for this: 
</div><span class="erm-anchor" id="ref-rec-he-42"></span><details class="erm-comment"><summary>(<span class="erm-anchor" id="ref-rec-he-show42"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; getting hero portraits into specified z-variables

!?FU(Hero_GetPortret_Names); 
; x1 - hero number
; x2 - number Z of the variable for recording a small portrait
; x3 - number Z of the variable for recording a large portrait
!!SN:E7411341/1/x1;
!!VRy10:Sv1 +52;
!!UN:Cy10/1/?y11;
!!VRx1&amp;y11&gt;=0:Sy11;
!!VRx1&amp;y11&lt;0:S256 +y11;
!!UN:C6806760/4/?y1;
!!VRzx2:S^^;
!!VRzx3:S^^;
!!VRx1:*92 +y1 +48;
!!UN:Cx1/4/?y2;
!!VRx1:+4;
!!UN:Cx1/4/?y3;
!!VRx2:*512+9597416;
!!VRx3:*512+9597416;
!!DO(Hero_GetPortret_Names_CopyF)/1/512/1:Py2/x2 Py3/x3;


!?FU(Hero_GetPortret_Names_CopyF); 
!!UN:Cx1/1/?y1 Cx2/1/y1;
!!VRx16&amp;y1=0:S600;
!!VRx1:+1;
!!VRx2:+1;</code></pre></div></details>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>L0/$</strong></span><br>
Set a portrait for the hero, like his <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero $</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-l3"></span><span class="erm-tone-red"><strong>L3</strong></span><br>
Restore original portraits<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE18:L3; return Enova to her native appearance</code></pre></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>L4/$</strong></span><br>
Set both portraits from the game from <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero $</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>L5/$1/$2</strong></span><br>
Set hero portrait from variable<br>
        $1 – text variable (z) for a large image (0 – do not change)<br>
        $2 – text variable (z) for a small image (0 – do not change)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-m"></span><span class="erm-anchor" id="command-m-m-1"></span>M#1/$2</strong></span><br>
Set/check/get the hero's spell status<br>
        #1 – <a href="../../tables/spells/#ref-form-spell" data-context="true">spell</a><br>
        $2 – value (0 = delete, 1 = give (when checking for presence 1 = yes, 0 = no))<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-he-20"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show20"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
To check whether spell has been studied/received or actually studied, there are 2 methods:
<ol><li>You can check for spell that hero has studied OR has on a scroll or artifact with a spell, 
using<strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>:M#/?$</strong>.<br>
In any case, the variable will become = 1 if hero has spell.</li>
<li>You can check for spell, which is learned by the hero, but NOT from a scroll or artifact, 
using <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>:M=#/1</strong>.<br>
Flag 1 will be set to True (1) if hero has learned spell.<br>
If hero knows spell thanks to a scroll/artifact, flag 1 will be set to False (0).</li>
</ol></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-n"></span><span class="erm-anchor" id="command-n-o-1-p-1-2-3-4"></span>N?$</strong></span><br>
Check or get <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a>.<br>
Do not try to establish the hero's number. It won't work, or it will cause instability.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-o"></span>O$</strong></span><br>
Set/check/get the hero's master (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a>).<br>
        $ – number of the player controlling the hero.<br>
If the hero is not on the map or he is not hired, the owner is -1.<br>
<strong></strong>
</div><span class="erm-anchor" id="ref-rec-he-21"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-he-show21"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">If you try to give a hero to a player who already has 8 active 
heroes, the command will simply be cancelled. <a href="../ow/#ref-rec-ow-h">Check</a> player's heroes to ensure that the transfer is completed successfully.<br>
Using the second phantom parameter in this command (for example, <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>..:O5/1</strong>), 
you will instantly change the owner of the hero. You can use this to set up an idle hero to protect neutral creatures, 
but make sure to return to the -1 owner after the battle. If you change the owner of an unrecruited hero using a temporary owner (from 0 to 7), 
this can be recognized via HE:O, but <a href="../ba/#ref-rec-ba-o">!!BA:O</a> will receive the value -1.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-p"></span>P$1/$2/$3</strong></span><br>
Set/check/get the coordinates of the hero (if you set the coordinates, it will be something like a teleport). 
You can also “pull” an unhired hero into the game by indicating the coordinates of his appearance and then assigning him an owner.<br>
<em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>P$1/$2/$3/$4</strong></span><br>
Move enemy hero (not your color) with sound and update operation:<br>
        if $4&lt;&gt;0 – move the hero with sound and update (ala Teleport)<br>
        if $4 = 0 – old style (hero immediately moves to point)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-41"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-he-show41"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<ul><li>Old command style (no $4) <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>..:P$1/$2/$3;</strong> works like <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>..:P$1/$2/$3/0;</strong></li>
<li>The specified number for $4 will be interpreted by the game as <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">players' bats</a>, 
which will open the destination along with the teleported hero.</li></ul></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-r"></span><span class="erm-anchor" id="command-r-refresh"></span>R0/$</strong></span><br>
Set/check/get hero morale (until next battle)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r1"></span><span class="erm-tone-red"><strong>R1/$</strong></span><br>
Set/check/get the hero's luck (until next battle)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r2"></span><span class="erm-tone-red"><strong>R2/$</strong></span><br>
Set/check/get the hero's gender<br>
        $ = 0 – man<br>
        $ = 1 – woman</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r3"></span><span class="erm-tone-red"><strong>R3/$1</strong></span><br>
Set/check/get the hero's accessibility in the tavern for ALL PLAYERS.<br>
        $1 – allow (1) or deny (0) hero to hire<br>
<em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>R3/$1/$2</strong></span><br>
Set/check/get the availability of the hero in the tavern for each player.<br>
        $2 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">players</a>who can hire<br>
$2 only matters if you resolved the hero.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r4"></span><span class="erm-tone-red"><strong>R4/$</strong></span><br>
Set/check whether it is possible to deploy troops at the beginning of the battle if there are tactics.<br>
An example of a command is the button at the bottom right of the hero window.<br>
        $=1 – allow<br>
        $=0 – disable</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r5"></span><span class="erm-tone-red"><strong>R5/$</strong></span><br>
Set maximum morale<br>
        $ = 0 – not set<br>
        $ = 1 – set</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r6"></span><span class="erm-tone-red"><strong>R6/$</strong></span><br>
Set maximum luck<br>
        $ = 0 – maximum luck is not given<br>
        $ = 1 – maximum luck is given</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-he-r7"></span><span class="erm-tone-red"><strong>R7/$</strong></span><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Set a visited object modifier that temporarily changes the hero’s parameters.<br>
        $ = <a href="../../tables/hero-visits/#ref-form-he-r" data-context="true">binary word, bit mask</a><br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-22"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show22"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
In most cases, setting or clearing these bits will not change luck, morale, turn points, or magic - it will only set 
(or clears) the record of the hero’s visit to an object in a given period, for example, this week, before the next battle, etc. 
The command will set or clear the text associated with visiting this object if you click on luck or morale in the hero window 
(eg "Visit Temple +1"), but you will still have to set temporary luck or morale with the commands HE:R0 and HE:R1.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-ref"></span><span class="erm-tone-red"><strong>R#1/$/#2</strong></span><br>
Update command (for all commands HE:R)<br>
        #1 – command number R<br>
        $ – value<br>
        #2 – update flag<br>
             = 0 – no (default)<br>
             = 1 – yes<br>
Adventure screen does not update automatically after HE:R commands. 
If you want to update it, use this syntax with the "update" flag (#2 = 1)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-s"></span><span class="erm-anchor" id="command-s-s-s-1-2-1"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
Set/check the number of secondary skills to display.<br>
        $ – number of skills that will be shown (0..8)<br>
If you only want to show one skill, first change its position to slot 1 and then limit the number of skills shown to one using this command.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>S#1/$2</strong></span><br>
Set/check/get secondary skills<br>
        #1 – <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">skill number</a><br>

<!-- llm:end erm.receivers.he 2 -->

