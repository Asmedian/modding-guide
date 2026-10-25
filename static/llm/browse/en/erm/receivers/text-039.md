# General game operations (UN)

ID: erm.receivers.un
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/un/
Part: 2/4
Source references: old-help:rec-un.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.un 2 -->
<span class="erm-anchor" id="ref-rec-un-h"></span><span class="erm-anchor" id="command-h-x-y-level-player-radius-s-x-y-level-player-radius"></span>H#1/#2/#3/#4/#5</strong></span><br>
Hide part of the map (area - circle)<br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L (level)<br>
         #4 – 
<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a><br>
         #5 – radius<br>
<strong></strong> </div><span class="erm-anchor" id="ref-rec-un-9"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show9"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The area will be hidden <em>for everyone</em>, <em>except</em> 
the specified player. There is no check for the correctness of the player's number, i.e. the game handles values like ±5678765 
without errors (the result is a closed area for all players 0..7).</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-i"></span><span class="erm-anchor" id="command-i-x-y-level-type-subtype-refresh"></span><span class="erm-anchor" id="command-i-x-y-level-type-subtype-viewtype-viewsubtype-terrain-refresh"></span>I#1/#2/#3/#4/#5/#6</strong></span><br>
Place an object.
</div><pre>        #1 – X
        #2 – Y
        #3 – L (level)
        #4 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object type</a>
        #5 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object subtype</a>
        #6 – update?
	1 – yes (default)
	0 – no</pre>
<div class="erm-paragraph">This command is very useful, but there are a few limitations. Some objects cannot be placed with this command, 
because they need to be configured in the editor first, and some will not work at all and may cause instability 
games.<br>
<em>Additional syntax:</em><br>
<span class="erm-tone-red"><strong>I#1/#2/#3/#4/#5/#6/#7/#8/#9</strong></span>
</div><pre>        #1…#5 – see above
        #6 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object type 2</a>
        #7 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object subtype 2</a>
        #8 – <a href="../../tables/terrain/#ref-form-terrain" data-context="true">soil</a>
        #9 – update?
	1 – yes (default)
	0 – no</pre>
<div class="erm-paragraph">This means that there will be an object/subtype that will look like 
object2/subtype2. Use this command specifying the desired soil for the room 
objects made under the soil.<br>
<u>

</u>
</div><span class="erm-anchor" id="ref-rec-un-10"></span><details class="erm-comment"><summary>Additional information about the UN:I command (<span class="erm-anchor" id="ref-rec-un-show10"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">Before checking whether an object is placed on the map using ERM, you need to make sure that its def file is in Lod and the object is registered in <em class="erm-legacy-file">zobjcts.txt</em>. 
However, for testing, you can simply change the type and subtype of an object.
The type for ALL objects can be within 4 bytes (-2147483648…+2147483647), and the subtype can be within 2 bytes (-32768…32767). Setting tooltips works fine on negative subtypes. 
If you exceed the subtype value, then two options are possible:
If you set the instructions, then a random creature will appear on the map in a random number. :-)
If post-instruction or later - then a random creature from the map editor (type=71, subtype=0, with an input, active, but not creature - nonsense, in general).<br>
<br>
List of objects that <em>will</em> work correctly without additional settings. Many 
can be adjusted by the object's special receiver, if desired.
<br><br>
<strong>·</strong> Artifact (type=5, subtype=<a href="../../tables/artifacts/#ref-form-a1" data-context="true">0..143</a>) - receiver <a href="../ar/#ref-rec-ar">!!AR</a><br>
<strong>·</strong> Boat (type=8, subtype=0..2)<br>
<strong>·</strong> Cover of Darkness (type=15, subtype=0)<br>
<strong>·</strong> Habitation of creatures (type=17, subtype=<a href="../../tables/creature-dwellings/#ref-form-creaturedwellings" data-context="true">0..88</a> and 20, subtype=0..1) - receiver 
<a href="../dw/#ref-rec-dw">
!!DW</a><br>
<strong>·</strong> <span class="erm-anchor" id="ref-rec-un-gar"></span><a href="./#ref-rec-un">Garrison</a> (type=33, subtype=0 (normal), =1 (anti-magic), =2 (perpendicular), =3 (anti-magic perpendicular) - receiver <a href="../gr/#ref-rec-gr">!!GR</a></div><span class="erm-anchor" id="ref-rec-un-47"></span><details class="erm-comment"><summary>see above</summary><div class="erm-comment-body">
<div class="table-wrap erm-reference-table"><table width="100%"><tr>
	<td class="erm-align-center" width="120"><img src="../../../../assets/erm/f29b7b602dd54547.png" alt="avcgar10" loading="lazy" decoding="async" class="erm-figure"></td>
	<td width="90%">Subtypes 2 and 3 are not present in the standard game. For the room it will be true:<br>
	 <strong>·</strong> Regular - 33/0<br>
	 <strong>·</strong> Regular perpendicular - 219/0<br>
	 <strong>·</strong> Antimagic - 33/1<br>
	 <strong>·</strong> Antimagic perpendicular - 219/1</td></tr>
	<tr><td colspan="2">All garrisons are placed normally. Type 219 is inactive when placed, but it is enough to change the type to 33 (see. <a href="../ob/#ref-rec-ob-t">OB:T</a>) and everything will be fine.<br>
	The game itself changes the type of perpendicular garrisons when the map is loaded, and it needs type 219 for initialization.<br>
	Garrisons with subtype &gt; 1 are treated as normal.</td></tr>
</table></div><br></div></details>
<strong>·</strong> Grail (type=36, subtype=0) - when placing several Grails, only 
the last one placed, this method can bypass the restriction of 9 cells from the edge of the map.<br>
<strong>·</strong> Lighthouse (type=42, subtype=0..7 for <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">colors</a> player or -1 for neutral) - receiver
<a href="../mn/#ref-rec-mn">!!MN</a> (same as for mines)<br>
<strong>·</strong> Marletto Tower (type=23, subtype=0)<br>
<strong>·</strong> Double-sided monolith (type=45, subtype=<a href="../../tables/two-way-monoliths/#ref-form-two-way-monolith" data-context="true">0..7</a>)<br>
<strong>·</strong> Mine (type=53, subtype=<a href="../../tables/mines/#ref-form-mines" data-context="true">0..7</a>) - receiver <a href="../mn/#ref-rec-mn">!!MN</a><br>
<strong>·</strong> Creature (type=54, subtype=<a href="../../tables/creatures/#ref-form-creature" data-context="true">0..196</a>) - receiver <a href="../mo/#ref-rec-mo">!!MO</a><br>
<strong>·</strong> Ocean Bottle (type=59, subtype=0) - receiver <a href="../sg/#ref-rec-sg">!!SG</a> (as for signs)<br>
<strong>·</strong> Redwood Observatory (type=58, subtype=0)<br>
<strong>·</strong> Resource (type=79, subtype=0..6) - receiver <a href="../ar/#ref-rec-ar">!!AR</a> (as for artifacts)<br>
<strong>·</strong> Sanctuary (type=80, subtype=0)<br>
<strong>·</strong> Shipyard (type=87, subtype=0..7 by <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">blossom</a> player or -1 for neutral) - receiver <a href="../sy/#ref-rec-sy">!!SY</a><br>
<strong>·</strong> Sign (type=91, subtype=0) - receiver <a href="../sg/#ref-rec-sg">!!SG</a><br>
<strong>·</strong> Spell scroll (type=93, subtype=<a href="../../tables/spells/#ref-form-spell" data-context="true">0..69</a>) - receiver <a href="../ar/#ref-rec-ar">!!AR</a><br>
<strong>·</strong> Town (type=98, subtype=0..8) - receiver <a href="../ca/#ref-rec-ca">!!CA</a><br>
<strong>·</strong> University (type=104, subtype=0) - receiver <a href="../ur/#ref-rec-ur">!!UR</a><br>
<strong>·</strong> Witch's hut (type=113, subtype=0..27) - receiver <a href="../wh/#ref-rec-wh">!!WH</a><br>
<br>
These objects will require additional configuration via a specific receiver to work correctly:<br>
<br>
<strong>·</strong> Campfire (type=12, subtype=0) - receiver <a href="../fr/#ref-rec-fr">!!FR</a> (when placing resource not specified)<br>
<strong>·</strong> Swan Pond (type=14, subtype=0) - receiver <a href="../sw/#ref-rec-sw">!!SW</a> (has a zero number when placed)<br>
<strong>·</strong> Corpse (corpse) (type=22, subtype=0) - receiver <a href="../sk/#ref-rec-sk">!!SK</a> (doesn’t have an artifact when placed?)<br>
<strong>·</strong> Event (type=26, subtype=0) - receiver <a href="../le/#ref-rec-le">!!LE</a> - if the event is placed by the command UN:I, 
it will be open to all players and will NOT be canceled after visiting.<br>
<strong>·</strong> Lean To (cellar) (type=39, subtype=0) - receiver <a href="../ln/#ref-rec-ln">!!LN</a> (does not have a resource when placed)<br>
<strong>·</strong> Stone of knowledge (type=100, subtype=0) - receiver <a href="../st/#ref-rec-st">!!ST</a> (has a zero number when placed)<br>
<strong>·</strong> Shrine of Magic (type=88..90, subtype=0) - receiver <a href="../sr/#ref-rec-sr">!!SR</a> (when placed, they teach the spell "Summon Ship")<br>
<strong>·</strong> Magic Spring (type=48, subtype=0) - receiver <a href="../sp/#ref-rec-sp">!!SP</a> (considered visited upon placement)<br>
<strong>·</strong> Mystical Garden (type=55, subtype=0) - receiver <a href="../gd/#ref-rec-gd">!!GD</a> (considered visited upon placement)<br>
<strong>·</strong> Obelisk (type=57, subtype=0) - receiver <a href="../mt/#ref-rec-mt">!!MT</a> (has a zero number when placed)<br>
<strong>·</strong> Pyramid (type=63, subtype=0) - receiver <a href="../pm/#ref-rec-pm">!!PM</a> (considered visited upon placement)<br>
<strong>·</strong> Scholar (type=81, subtype=0) - receiver <a href="../sc/#ref-rec-sc">!!SC</a> (when placed, teaches +1 attack)<br>
<strong>·</strong> Shipwreck Survivor (type=86, subtype=0) (use <a href="../ob/#ref-rec-ob-c">OB:C</a> to configure the artifact, when placed on it Spell book)<br>
<strong>·</strong> Treasure chest (type=101, subtype=0) - receiver <a href="../ch/#ref-rec-ch">!!CH</a> (value CH:B0 when placed)<br>
<strong>·</strong> Tree of knowledge (type=102, subtype=0) - receiver <a href="../kt/#ref-rec-kt">!!KT</a> (teaches for free, has a zero number upon placement)<br>
<strong>·</strong> Wagon (type=105, subtype=0) - receiver <a href="../wg/#ref-rec-wg">!!WG</a> (when placed, the find is not specified)<br>
<strong>·</strong> Warrior's Tomb (type=108, subtype=0) - receiver <a href="../wt/#ref-rec-wt">!!WT</a> (when placing artifact not specified)<br>
<strong>·</strong> Water Wheel (type=109, subtype=0) - receiver <a href="../wm/#ref-rec-wm">!!WM</a> (has no gold when placed)<br>
<strong>·</strong> Windmill (type=112, subtype=0) - receiver <a href="../ml/#ref-rec-ml">!!ML</a> (does not have a resource when placed)
<div class="erm-paragraph">These objects will NOT work correctly and may cause game instability, game crashes, or other problems when placed:</div>
<div class="erm-paragraph"><strong>·</strong> &lt;blank&gt; (type = 1) - the game will crash when trying to place an object<br>
<strong>·</strong> Anchor (type = 3) - receiver <a href="../pa/#ref-rec-pa">!!PA</a> (the game will crash when trying to place an object)<br>
<strong>·</strong> Pandora's Box (type=6) - the game will crash when visiting the object<br>
<strong>·</strong> Black Market (type=7) - the game will crash when visiting the object<br>
<strong>·</strong> Hero (type=34) - use the command <a href="../he/#ref-rec-he-p">HE:P</a> to place the hero on the map<br>
<strong>·</strong> Type 50 - the object is not initially in the game<br>
<strong>·</strong> Prison (type=62) - does not create any visible problems, upon visiting it is announced that hero was released by the king, and the prison disappears.<br>
<strong>·</strong> Seer's Hut (type=83) - the game crashes when you mouse over an object or when you visit it, BUT you can place the object correctly (see below)<br>
<strong>·</strong> Quest Guard (type=215)<br>
<strong>·</strong> Garrison (type = 219) - garrison just doesn't work ( about the reason)</div>
<div class="erm-paragraph">Some objects have different models for different soils. To place them, use the syntax...
<pre class="erm-example"><code class="language-erm">!!UN:Ix/y/l/T/S/T/S/tr;</code></pre> where <strong>x/y/l</strong> - coordinates, <strong>T</strong> - type 
object, <strong>S</strong> - subtype, <strong>tr</strong> - <a href="../../tables/terrain/#ref-form-terrain" data-context="true">soil</a>, on which the desired object is located.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:I25/25/0/12/0/12/0/0; - place a regular fire
!!UN:I26/25/0/12/0/12/0/3; - place a fire with snow textures
!!UN:I24/25/0/12/0/12/0/1; - place a fire with sand textures</code></pre></div>
<div class="erm-paragraph"><strong>·</strong> Campfire (type = 12) - has variations for sand, snow, underground, lava.<br>
<strong>·</strong> Swan Pond (type = 14) - has variations for dirt, grass and swamp<br>
<strong>·</strong> Fountain of Fortune (type = 30) - has a snowy variation<br>
<strong>·</strong> Hill Fort (type = 35) - has a snowy variation<br>
<strong>·</strong> Magic Well (type = 49) - has a snowy variation<br>
<strong>·</strong> Mines (type = 53) - have variations for different soils<br>
<strong>·</strong> Obelisk (type = 57) - has color variations for each soil<br>
<strong>·</strong> Redwood Observatory (type = 58) - has a snow variation<br>
<strong>·</strong> Seer's Hut (type = 83, subtype 0-2) - using this syntax you can place it, but it will be abandoned by the seer, the soil does not affect the appearance.<br>
<strong>·</strong> Crypt (type = 84) - has a variation with snow (default) and without<br>
<strong>·</strong> Sign (type = 91) - has variations for different soils<br>
<strong>·</strong> Trading Post (type = 99) - has variations for dirt, rocks<br>
<strong>·</strong> Water Wheel (type = 109) - has variations for grass and snow (default)<br>
<strong>·</strong> Windmill (type = 112) - has variations for grass (default) and for snow</div></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-j"></span>J#<br>
J0/#/$</strong></span><br>
Disable spell.
</div><pre>        # – <a href="../../tables/spells/#ref-form-spell" data-context="true">spell number</a> (0..69)
        $ – allow (0) or disable (1)</pre>
<u></u> <span class="erm-anchor" id="ref-rec-un-12"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show12"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This ban only works for mage guilds and pyramids, but you can check the value set here for any ERM script. 
Since magic guilds and pyramids generate spell at the beginning of the map (before fully loading), we advise using this command as an instruction.<br>
For Magic Shrines, the ban does not work, because... other internal mechanisms are used. 
However, you can change spell Shrines by checking through receiver <a href="../sr/#ref-rec-sr">!!SR</a>.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j1"></span>J1/$1/?$2</strong></span><br>
Set/receive level and experience limits.<br>
         $1 – level limited to $1 (set/check/get)<br>
         $2 – experience for this <a href="../../tables/hero-levels/#ref-form-heroeslevels" data-context="true">level</a> (only receive)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-13"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show13"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Experience is automatically set for this level.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:J1/35/?y10;
Here we will set the ceiling to 35 levels and remember the number of experience up to level 35 in y10.

!!UN:J1/?y1/d J1/30/?y2 J1/y1/d;
Let's find the amount of experience that will be available upon reaching level 30, without changing the restrictions on level and experience
(i.e. we can dynamically find the numbers we need without resorting to a table)</code></pre>
<div class="erm-paragraph">If you need to remove the experience limit message in the game, use the following code:
<pre class="erm-example"><code class="language-erm">; disable experience limit message
; © Berserker
!!UN:C5125902/4/34281 C5125907/1/144;</code></pre></div>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j2"></span>J2/$</strong></span><br>
Set/check/get difficulty selected by the player (0..4)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j3"></span><span class="erm-anchor" id="command-j3-file-j4-j5"></span>J3</strong></span><br>
This command allows you to set the path to the file containing the settings 
WoG'ifications.<br>
<u></u><br></div><span class="erm-anchor" id="ref-rec-un-14"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-un-show14"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#UN:J3/^MySettingsFile^;</code></pre>
The path can be a folder or an absolute path like these:<br>
          <span class="erm-tone-red erm-inline-code">^MyOptions.xxx^</span> - file in the heroes folder<br>
          <span class="erm-tone-red erm-inline-code">^maps\options.yyy^</span> - file in a folder <em class="erm-legacy-file">Maps</em><br>
          <span class="erm-tone-red erm-inline-code">^C:\xxx.yyy^</span> - file on disk <em class="erm-legacy-file">C:</em></div></details>
<div class="erm-paragraph"><em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>J3/^:clear:^</strong></span><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Disables all WoG options and sets the game rule to "Use the rules noted below."
<pre class="erm-example"><code class="language-erm">!#UN:J3/^:clear:^;</code></pre>
</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j4"></span>J4/$</strong></span><br>
Set/check/get radius "thinking" AI<br>
         $ = 32,000 in Breath of Death by 
default<br>
            = 4096 – 
current in WoG<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-15"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show15"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">This is not the number of squares analyzed by the AI. This is the AI's overall radius based on its turn points and terrain. 
For grass, one square spends 100 points. The value is not saved when saving the game. 
If the value is too low, hero the AI ​​will just stand still, not moving at all.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j5"></span>J5/$</strong></span><br>
Allow/disable “autosave”<br>
         $ = 1 – allow<br>
         $ = 0 – disable<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-16"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show16"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	The "deny" status is not saved in the game file, so 
that if you need to restore undo, put this command after the trigger 
<a href="../../triggers/gm/#ref-tr-gm">!?GM0</a>. In most cases, we recommend not disabling autosave because 
it can serve as a game restore point if anything goes wrong.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j6"></span><span class="erm-anchor" id="command-j6-class-artifact-j7-slot-artifact"></span>J6/#/$</strong></span><br>
Generate a random artifact of a certain level.
</div><pre>        # – set class
	= -1 – random
	= 1 – non-class (Grail and WoG artifacts)
	= 2 – treasure
	= 4 – valuable
	= 8 – important
	= 16 – relic
        $ – get/check artifact number.</pre>
<u></u><span class="erm-anchor" id="ref-rec-un-17"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show17"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The function generates only allowed artifacts. 
Class 1 artifacts include Grail, Spell Book, Spell Scroll and all war machines.<br>
You can generate artifact from several classes, for example 18 = relics and treasures. 
Generated artifacts in the same trigger will NOT be repeated.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:J6/16/?v10; - get a random relic in v10.</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j7"></span>J7/#/$</strong></span><br>
Set/check/get artifact, sold by the artifact merchant.<br>
         # – slot number (0..6)<br>
         $ – number <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact</a> in slot<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-18"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show18"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can set, get or check artifact (“-1” means no artifact).<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!UN:J7/3/?v10; - get artifact in slot 3
!!UN:J7/v5/v20; - install artifact v20 in slot v5</code></pre>
This command does not work for the Black Market. To do this you will have to resort to using UN:C...
<pre class="erm-example"><code class="language-erm">; manage prices on Black Markets (1..13)
; © feanor
!!UN:C6202647/4/13; [5 - standard, 13 - nominal]
!!UN:C5392593/1/13; [for AI]</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j8"></span><span class="erm-anchor" id="command-j8-location-string-j9-location-z-j10"></span>J8/$1/$2<br>
J8/$1/^Text^</strong></span><br>
Command that checks the existence of external files<br>
         $1 – 
</div><span class="erm-anchor" id="ref-rec-un-19"></span><details class="erm-comment erm-inline-comment"><summary>search location</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-rec-un-t0"></span><pre class="erm-margin-top-zero">	0 – in the heroes folder
	1 – in <em class="erm-legacy-file">Data</em>
	2 – in <em class="erm-legacy-file">Maps</em>
	3 – in <em class="erm-legacy-file">Random maps</em>
	4 – in <em class="erm-legacy-file">Games</em>
	5 – in <em class="erm-legacy-file">Data/S</em>
	6 – in <em class="erm-legacy-file">Data/P</em>
	7 – in <em class="erm-legacy-file">Data/ZVS/LIB1.res</em>
	8 – in <em class="erm-legacy-file">Data/ZVS/CMP.res</em>
	9 – in <em class="erm-legacy-file">ERM_HELP</em>
	10 – full path specified in <em>z</em>-variable either in ^…^</pre></div></details>
<div>         $2 – number <em>z</em>-variable or ^…^ with the file name.<br>
Flag 1 will be set to true if the file exists, otherwise it will be set to false.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j9"></span>J9/$1/$2</strong></span><br>
The command copies the path to the heroes folder<br>
         $1 – destination (see. <a href="./#ref-rec-un-j8">UN:J8</a>)<br>
         $2 – number <em>z</em>- a variable where to write it.<br>

<!-- llm:end erm.receivers.un 2 -->

