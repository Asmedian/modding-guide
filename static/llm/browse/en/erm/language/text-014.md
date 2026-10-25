# UN:C — memory access

ID: erm.un-c
URL: /en/erm/un-c/
Part: 2/3
Source references: old-help:cont-unc.htm, old-help:cont-unc-lib.htm, erm-forum:un-c-page-1.html, era-changelog:era-iii-changelog.txt, era-source:erm.pas
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.un-c 2 -->
<pre class="erm-example"><code class="language-erm">; CHANGING DEF FRAME
!!UN:C6918864/4/?y1; !!VRy1:+84; !!UN:Cy1/4/?y2; [y2 - address of the current dialog (many, but not all)] (_Dlg_*)
!!UN:C6918840/4/?y1; !!VRy1:+68; !!UN:Cy1/4/?y2; [y2 - address of the Adventure Crates dialogue] (_DlgAdvMap_*)
!!SN:E6288816/2/[dialogue_address]/[element_id]; !!VRy3:Sv1; [get item structure by id] item = (_Dlg_*)-&gt;GetItem(id)
; [element_id] - see Help "CM:I"
!!VRy4:Sy3 +52; !!UN:Cy4/4/[def_frame_number]; [change def frame] item-&gt;def_frame_index
!!VRy4:Sy3 +56; !!UN:Cy4/4/[def_frame_number]; [for button: change press frame] item-&gt;press_def_frame_index
; FUNCTIONS:
!!SN:E6286720/2/y3/[type]/[subtype];
; type 5, subtype 6 (show element)
; type 6, subtype 6 (hide element)
; type 6, subtype 4 (hide, but allow workers to click on it)</code></pre>
<pre class="erm-example"><code class="language-erm">; This is how buttons are blocked (for example, the button to fire a hero)
!!SN:E6287104/2/y3/[0 or 1]; 0-off, 1-on
; after that you need to refresh the dialog
; because UN:R is not available for all dialogues
!!SN:E6288864/2/y2/1/-65535/65535;</code></pre>
<span class="erm-anchor" id="ref-cont-unc-lib-10"></span><details class="erm-comment"><summary><strong>More details on dialogues</strong> (<span class="erm-anchor" id="ref-cont-unc-lib-show10"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
<pre class="erm-tone-quote erm-legacy-code erm-note">; parameters of any dialog element
; text, pictures, buttons, etc.

+16 (2 bytes) element id; by daemon_n
+18 (2 bytes) if I understand correctly, this is the indirect id of the element in this dialog; by daemon_n
+20 (2 bytes) flags;
+22 (2 bytes) status;
+24 (2 bytes) x;
+26 (2 bytes) y;
+28 (2 bytes) width;
+30 (2 bytes) height;
+32 (4 bytes) pointer to text in the status_bar; 
+36 (4 bytes) pointer to RMB text; 

; only for defs and buttons
+48 (4 bytes) pointer to defa structure;
+52 (4 bytes) def frame number;
+56 (4 bytes) def frame number when pressed (if a button);
+60 (4 bytes) mirror: 0-no, 1-yes; <span class="erm-anchor" id="ref-cont-unc-lib-n1"></span><strong class="erm-tone-purple erm-strong">daemon_n</strong> thinks that this is the def frame number when the button is disabled (if the button is);
+68 (2 bytes) whether to close the dialog: 0-no, 1-yes;</pre></div></details>
<br><br>
<pre class="erm-example"><code class="language-erm">; Window for hiring creatures/combat vehicles by a hero
...
!!OW:A-1/?y1;
!!FU8980040:Py1/132/10/133/11/134/12/135/13/1; // hire all neutral dragons in the amount of 10...13 pcs.
!!FU8980040:Py1/145/1/146/1/147/1/148/1/2; // hire all combat vehicles
!?FU8980040;
; x1 - specify the hero number
; x2/x3 - number of the 1st creature/quantity (required)
; x4/x5 - number of the 2nd creature/quantity (or -1/0)
; x6/x7 - number of the 3rd creature/quantity (or -1/0)
; x8/x9 - number of the 4th creature/quantity (or -1/0)
; x10 - for creatures (1), for combat vehicles (2)
!!OW:A-1/?y1;
!!FU&amp;y1&lt;0:E;
!!SN:E6386834/1/188; !!VRy17:Sv1;
!!SN:E7411341/1/x1; !!VRy1:Sv1; !!VRy1&amp;x10=1:+145;
!!VRy10:S10*4 +8943204; // variable address v10...v13
!!VRy20:Sy10; !!VRy21:Sy10 +4; !!VRy22:Sy10 +8; !!VRy23:Sy10 +12;
!!VRv10:Sx3; !!VRv11:Sx5; !!VRv12:Sx7; !!VRv13:Sx9;
!!SN&amp;x10=1:E5576528/2/y17/y1/0/x2/y20/x4/y21/x6/y22/x8/y23;
!!SN&amp;x10=2:E5576800/2/y17/y1/x2/y20/x4/y21/x6/y22/x8/y23;
!!VRy11:Sv1;
!!UN:C6919504/4/?y1;
!!SN:E4917104/2/y1/y11;</code></pre>
<pre class="erm-example"><code class="language-erm">; Fix a bug that occurs when opening the hero window in the dialog for joining creatures
; © RoseKavalier
!?FU(OnGameEnter);
!!SN:L^EraPlugins\erm_hooker.era^/?y1;
!!FU&amp;y1=0:E; !!SN:Ay1/^SetHook^/?y2;
!!SN:Ey2/1/6116047/(AfterShowHeroInfoDlg);
!?FU(AfterShowHeroInfoDlg);
!!UN:C6918840/4/?y1;
!!SN:E4289856/2/y1/0/0/0;</code></pre>
<pre class="erm-example"><code class="language-erm">; Correcting incorrect buttons:
; in the tavern dialogue
!!UN:C6126282/4/6826532; iCN6432.def
; in the squad division dialogue
!!UN:C4495937/4/6826532; iCN6432.def"
; remove the Cancel button in the arena
!!UN:C4842706/4/7;
; no check for "in Underground" (Z=1)
; this is to Inferno to Underground and
; Dungeon on the surface had native land bonuses
!!UN:C4603972/1/235;

P.S. this is the SOD section (which means this problem exists on all versions of HoMM3)</code></pre>
<pre class="erm-example"><code class="language-erm">; Activating the "Next hero" button disabled in TE
!#UN:C4234473/4/1987433092 C4234477/1/139;
!#UN:C4234473/4/1987433092 C4234477/1/139;</code></pre>
</div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-hero"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-3"></span><details class="erm-comment"><summary>Heroes</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; move the hero on the adventure map
!?FU(HeroMoveOnMap);
; x1/x2/x3 - x/y/z (target coordinates)
; x4 - hero number
; ***********************************
; check if this hero is active
!!OW:A-1/?y1; !!FU|x4&lt;&gt;y1/y1=-1:E;
; actions with the Adventure Map manager
!!UN:C6918840/4/?y1;
!!VRy2:Sy1 +64;
!!UN:Cy2/4/7;
; pack the target coordinates (x/y/z) into v2
!!UN:C8943213/1/0 C8943212/1/x1;
!!UN:C8943214/1/x2 C8943215/1/x3;
!!VRy2:S8943212; address v2 put in y2
; set the target for the hero
!!SN:E7411341/1/x4; !!VRy3:Sv1;
!!VRy4:Sy3 +53; !!UN:Cy4/4/x1;
!!VRy5:Sy3 +57; !!UN:Cy5/4/x2;
!!VRy6:Sy3 +61; !!UN:Cy6/4/x3;
; start the hero's movement towards the goal
!!SN:E4225760/2/y1/y2;
**end</code></pre>

<pre class="erm-example"><code class="language-erm">; lock/unlock hero slots
; © gamecreator
!?FU[Hero_SetLockedSlots];
; x1 - hero number [0...155]
; x2 - slot number [0...13]
; x3 - set town [1], remove town [0] (for pos. 6, 8, see below)
!!UN:C6919480/4/?y1;
!!VRy2:Sx1 *1170 +136736 +y1 +454 +x2;
!!UN:Cy2/1/x3;</code></pre>
<span class="erm-anchor" id="ref-cont-unc-lib-11"></span><details class="erm-comment"><summary><strong>Slot numbering</strong> (<span class="erm-anchor" id="ref-cont-unc-lib-show11"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
<pre class="erm-tone-quote erm-legacy-code erm-note">0 - Head
1 - Shoulders
2 - Neck
3 - Right hand
4 - Left hand
5 - Torso
6 - Left ring / Right ring [locks = 0…2]
7 - Legs
8 - Miscellaneous 5…1 [locks = 0…5]
9 - Ballista
10 - Ammo cart
11 - First aid tent
12 - Catapult (figurines, I’m always with you)
13 - Book of Spells</pre></div></details><br><br>

<pre class="erm-example"><code class="language-erm">; Hiring Heroes
!!UN:C6783308/4/2500; [hero cost]
; 3 - the maximum number of heroes on the adventure map for one player.
!!UN:C6127106/1/3; [tavern hiring]
!!UN:C6129162/1/3; [tavern hiring]
!!UN:C4864993/1/3; [visiting prison]
!!UN:C6116975/1/3; [exit from the town]
!!UN:C4395921/1/3; [for AI]
!!UN:C5417105/1/3; [for AI]</code></pre>
</div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-comm"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-12"></span><details class="erm-comment"><summary>Commanders</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; ** address of the commander’s structure by hero number
!!VRy1:S[hero number] *296 +42344640 +[parameter];</code></pre>
For the commander's structure, see <a href="commander-structure/#ref-form-commstr" data-context="true">in the table</a>.
<div class="erm-paragraph">
<pre class="erm-example"><code class="language-erm">; commander spells
; can only be changed outside of battle or before it.
!!UN:C7783293/1/37; [0: Paladin]
!!UN:C7783311/1/27; [1: Witch Doctor]
!!UN:C7783329/1/44; [2: Templar]
!!UN:C7783347/1/29; [3: Succubus]
!!UN:C7783365/1/39; [4: Soul Eater]
!!UN:C7783383/1/43; [5: Beast]
!!UN:C7783401/1/46; [6: Ogre Chief]
!!UN:C7783539/1/53; [7: Shaman]
!!UN:C7783554/1/58; [8: Astral Spirit]</code></pre>
<pre class="erm-example"><code class="language-erm">; special abilities of commanders
!!UN:C7771781/1/0; [0: Paladin - Experience]
!!UN:C7780460/1/1; [1: Witch Doctor - Tents]
!!UN:C7788148/4/176; [2: Templar - Mana Recovery]
!!UN:C7788157/4/185; [2: Templar - Mana Recovery]
!!UN:C7785366/1/3; [3: Succubus_0 - Charm]
!!UN:C7785796/1/3; [3: Succubus_1 - Charm]
!!UN:C7772656/1/5; [5: Beast - Gold]
!!UN:C7780690/1/6; [6: Leader of the Ogres - Ballista (specialty X1) (set quantity)]
!!UN:C7789904/1/6; [6: Ogre Chief - Ballista (specialty X1) (control)]
!!UN:C7775876/1/7; [7: Shaman - Attack and Defense Bonus (Commander Window)]
!!UN:C7783598/4/7783530; [7: Shaman - Bonus attack and defense (in battle). Cannot be replaced by another commander]
!!UN:C7786301/1/8; [8: Astral Spirit_0 - Pacifist]
!!UN:C7786959/1/8; [8: Astral Spirit_1 - Pacifist]</code></pre>
<pre class="erm-example"><code class="language-erm">; disable commander abilities
!!UN:C7710229/2/8427; [3: Succubus - Charm]
!!UN:C7710502/2/8683; [8: Astral Spirit - Pacifism]
!!UN:C7772712/2/37008; [5: Beast - Gold Bonus]
!!UN:C7788411/1/233; [2: Templar - Mana Recovery © Raistlin]
!!UN:C7788412/4/174;
!!UN:C7788416/1/144;</code></pre>
<pre class="erm-example"><code class="language-erm">; remove the fire shield from commanders
!!UN:C7788091/1/235;</code></pre>
</div></div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-town"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-4"></span><details class="erm-comment"><summary>Towns</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; replacing the Arrow Tower creature
!!UN:C4614248/4/?y1; [get table base address]
!!VRy2:S[city_type] *32 +y1; [get creature number address]
!!UN:Cy2/4/[monster_number]; [who has a shot def]</code></pre>

<pre class="erm-example"><code class="language-erm">; View radius of the tower in the Tower
!!UN:C5005692/1/20;
!!UN:C5011919/1/20;
!!UN:C6026482/1/20;
; Radius of action of the veil of darkness among necrs
!!UN:C5011669/1/20;
!!UN:C4854195/1/20;</code></pre>
<pre class="erm-example"><code class="language-erm">; Skeleton Converter
!!VRy1:S$creature$ *4; creature=[0..196]
!!VRy2:S8142080+y1;
!!UN:Cy2/4/[to_who_is_converted];
; 56 - skeleton
; 66 - black knight
; 68 - bone dragon</code></pre>
<pre class="erm-example"><code class="language-erm">!#UN:C4626915/1/7; Town, in which the moat consists of two cells</code></pre>
<h4>Buildings and their prices</h4>
<pre class="erm-example"><code class="language-erm">; increasing the number of creatures in hordes
!?FU(SetTownHordeMonsters);
; x1 - town number [0..8]
; x2 - horde number: [0..1]
; x3 - number of creatures
!!UN:C6035054/4/?y1;
!!VRy2:S16*x2;
!!VRy3:S32*x1;
!!VRy1:+y2 +y3 +4;
!!UN:Cy1/2/x3;
!!VRy1:+8;
!!UN:Cy1/2/x3;</code></pre>
<pre class="erm-example"><code class="language-erm">; get the cost of the building
; v10 - wood, v11 - mercury... v16 - gold
!?FU(Town_GetBuildingCost);
; x1 - town number on map (0...47)
; x2 - building id
; x3 - return v10-v16: ptr array: int cost[6]
!!FU(Town_GetStruct):Px1/?y1;
!!SN:E6034672/2/y1/x2/8943244;
**********************************
; Is there enough money for construction (active player only!)
!?FU(Town_CanBuildingCost);
; x1 - town number on map (0...47)
; x2 - building id
; x3 - return: bool (0-no, 1-yes)
!!FU(Town_GetStruct):Px1/?y1;
!!SN:E4590864/3/y1/x2;
!!VRx3:Sv1;
**********************************
; Is it actually allowed to build this building in the town?
!?FU(Town_CanBuildingBuilt);
; x1 - town number on map (0...47)
; x2 - building id
; x3 - return: bool (0-no, 1-yes)
!!FU(Town_GetStruct):Px1/?y1;
!!CA0/x1:R?y2 R0;
!!SN:E6033696/2/y1/x2;
!!VRx3:S0;
!!VRx3&amp;v1&lt;&gt;0:S1;
!!CA0/x1:Ry2;
**********************************
; Is the building built in the town?
!?FU(Town_IsBuildingBuilt);
; x1 - town number on map (0...47)
; x2 - building id
; x3 - return: bool (0-no, 1-yes)
!!FU(Town_GetStruct):Px1/?y1;
!!SN:E4392352/2/y1/x2/1;
!!VRx3:Sv1;
**********************************
; show how a building is built
; only inside the town screen
!?FU(Town_ConstractBuild_Show);
; x1 - town number on map (0...47)
; x2 - building id
!!UN:C6919500/4/?y1;
!!VRy2:Sy1 +440;
!!UN:Cy2/4/x2;
!!SN:E6123136/2/y1/x2;
**********************************
; getting the town structure
!?FU(Town_GetStruct);
; x1 - town number on map (0...47)
; x2 - return: ptr structure town
!!IF&amp;x1&lt;0|x1&gt;47:M^Wrong town id.^;
!!UN:C6919480/4/?y1;
!!VRy1:+136724;
!!UN:Cy1/4/?y2;
!!VRx2:Sx1 *360 +y2;
!!IF&amp;x2&lt;43200000:M^{Attention!}
Error in getting town structure address.
The game may fall at any time.^;</code></pre>
<h4>Special buildings in towns</h4>
<pre class="erm-example"><code class="language-erm">; If you change the following values, be sure to change them in BldgSpec.txt
; Setting the attack value in the Temple of Valhalla
!#UN:C6021441/1/4; Replacing increment with addition
!#UN:C6021442/1/1; Attack Bonus from Temple of Valhalla
; Setting the defense value in the Cage of the War Gods
!#UN:C6021666/1/4; Replacing increment with addition
!#UN:C6021667/1/1; Defense Bonus from Cage of the War Gods
; Town, which operates Temple Valhalla
!#UN:C6021227/1/6;
; Town, in which the Cage of the War Gods works
!#UN:C6021452/1/7;
; Town, in which the Order of Fire works
!#UN:C6020842/1/3;
; Town, in which the Knowledge Wall works
!#UN:C6020661/1/2;
; Skills given by specialists. buildings
; 118 - attack
; 119 - protection
; 120 - strength
; 121 - knowledge
!#UN:C6021437/1/118; Temple Valhalla
!#UN:C6021445/1/118;
!#UN:C6021662/1/119; Cage of the War Gods
!#UN:C6021670/1/119;
!#UN:C6020951/1/120; Order of Fire
!#UN:C6020943/1/120;
!#UN:C6020770/1/121; Wall of Knowledge
!#UN:C6020762/1/121;
; Bonus Strength from Sulfur Clouds
!#UN:C4602236/1/2;
; Bonus Strength from the Dungeon Grail
!#UN:C4602282/1/12;
; Morale Bonus from Castle Grail
!#UN:C5127772/1/2;
!#UN:C5098405/1/2;
; Morale bonus from the Brotherhood of the Sword
!#UN:C4500863/1/2;
; Luck bonus from the Stronghold Grail
!#UN:C5127107/1/2;
!#UN:C5100434/1/2;
; Bonus mana points from Grail Tower
!#UN:C4602189/2/150;
; Bonus Attack and Defense from the Grail of the Fortress
!#UN:C4602467/1/10;
; Disable artifact traders
!#UN:C6111473/2/37008; Tower
!#UN:C6111478/2/37008; Dungeon
!#UN:C6111483/2/37008; Conflux
; University Magic in Conjugation:
!#UN:C6110754/1/2; The number of the town in which he works is 6+[value] (in the original 2, so 8)
!#UN:C6110754/1/1; If you set 1, University will move to Fortress and will work when you click on Signs of Fear
!#UN:C6110754/1/-1;If you set -1, University will move to the Dungeon and will work when you click on Mana Vortex
!#UN:C6110754/1/5; To disable University, you can set a non-existent town index (6+5=11). The hint will remain
; By the way, the skills that are given there can also be edited - see the addresses here: https://forum.df2.ru/index.php?s=&amp;showtopic=6803&amp;view=findpost&amp;p=429783
; An alternative way to disable University Magic. In the first case, the check for Conflux is removed, now - the subsequent action
!#UN:C6110755/2/37008;
!#UN:C6110757/4/2425393296;
; Disable University Magic for AI
!#UN:C5398076/1/144;
!#UN:C5398077/4/2425393296;
; Disable Skeleton Converter
!#UN:C6111184/1/144;
!#UN:C6111185/4/2425393296;
; Disable Mercenary Guild
!#UN:C6110986/1/144;
!#UN:C6110987/4/2425393296;
; Disable Yard Ballist
!#UN:C6111157/1/144;
!#UN:C6111158/4/2425393296;
; Disable Castle Gate
!#UN:C6111142/1/144;
!#UN:C6111143/4/2425393296;
; Disable opening of the Tavern when clicking on the Brotherhood of the Sword
!#UN:C6111068/1/144;
!#UN:C6111069/4/2425393296;
; Shutdown of the Stables
!#UN:C6020509/2/37008;
; Disable Beacon
!#UN:C5131612/1/235;</code></pre>
<pre class="erm-example"><code class="language-erm">; Disabling the functions of special buildings of the Fortress
!?PI;
!!UN:C6021452/1/99; Cage of the War Gods (instead of the seventh town, we check the ninety-ninth)
!!UN:C4602370/1/0; Resetting the attack bonus from the Obelisk of Blood
!!UN:C4602421/1/0; Resetting the protection bonus from Signs of Fear
; Disabling the functions of special buildings Dungeons
!?PI;
!!UN:C6130651/1/18; Disabling the Call Portal
!!UN:C6130708/1/52;
!!UN:C5016380/1/86;
!!UN:C5362353/1/120;
!!UN:C6055202/1/144;
!!UN:C6020334/1/255; Disabling Mana Whirlpool
!!UN:C6021023/1/255; Shutdown of the Martial Arts Academy
!!UN:C6111477/1/6; Disabling Artifact Merchants (it will not be possible to disable Conflux)</code></pre>
<h4>Working with the town screen</h4>
<pre class="erm-example"><code class="language-erm">!!SN:E6103344/3/[visitor hero number]/[town type]; // open the forge.
** opening windows of special buildings in towns
!!UN:C6919500/4/?y1; // o_TownMgr
; general:
!!SN:E6106032/2/y1; // entrance to the Town Hall (window of building structures) © MoP
; 3 (inferno)
!!SN:E6129792/2/y1; // Castle Gate
; 4 (necropolis)
!!SN:E6108048/2/y1; // SkeletonTransformer
; 5 (dungeon)
!!SN:E6106448/2/y1; // Creature Summoning Portal Window
; 6 (citadel)
!!SN:E6202016/2/y1; // Mercenary Guild
; 8 (Conflux)
!!SN:E6107552/2/y1; // University magic
; 2, 5, 8 (Tower, Dungeon, Conflux)
!!SN:E6201632/2/y1; // Artifact traders</code></pre>

<pre class="erm-example"><code class="language-erm">!!UN:C6919500/4/?y1; // o_TownMgr
!!SN:E6117680/2/y1; // update town screen (yellow outline, buttons)
!!SN:E6117392/2/y1; // update the town (buildings) screen</code></pre>

<strong><u>Comment</u>:</strong> When replacing an animation, you must also write a new number of frames into memory.
<pre class="erm-example"><code class="language-erm">[Setting the number of frames in animation]
!?FU(SetFrames);
; x1 - town type
; x2 - building number
; x3 - number of frames in animation
!!VRy1:Sx1 *44 +x2 *6;
!!VRy2:S6859276 +y1;
!!UN:Cy2/2/x3;

[Getting the number of frames in an animation]
!?FU(GetFrames);
; x1 - town type
; x2 - building number
; x3 - v-variable number
!!VRy1:Sx1 *44 +x2 *6;
!!VRy2:S6859276 +y1;
!!UN:Cy2/2/?vx3;</code></pre>

<pre class="erm-example"><code class="language-erm">Moving buildings:
[Setting building coordinates]
!?FU(SetBuilding'sPosition);
; x1 - town type
; x2 - building number
; x3 - x coordinate
; x4 - y coordinate
!!VRy1:Sx1 *44 +x2 *6;
!!VRy2:S6859276 +2 +y1;
!!UN:Cy2/2/x3;
!!VRy2:+2;
!!UN:Cy2/2/x4;

[Getting building coordinates]
!?FU(GetBuilding'sPosition);
; x1 - town type
; x2 - building number
; x3 - number of the v-variable to store the value x
; x4 - number of the v-variable to store the value of y
!!VRy1:Sx1 *44 +x2 *6;
!!VRy2:S6859276 +2 +y1;
!!UN:Cy2/2/?vx3;
!!VRy2:+2;
!!UN:Cy2/2/?vx4;</code></pre>

<pre class="erm-example"><code class="language-erm">Display priority:
[Building priority setting]
!?FU(SetBuilding'sPriority);
; x1 - town type
; x2 - priority(0-43)
; x3 - building number
!!VRy1:Sx1 *44 +x2;
!!VRy2:S6565572 +y1;
!!UN:Cy2/1/x3;
[Getting town building priorities]
!?FU(GetPriorities);
; x1 - town type
!!VRv1:Sx1 *44;
!!DO(ShowRes)/0/43/1:P;
!?FU(ShowRes);
!!VRy1:Sv1 +x16;
!!VRy2:S6565572 +y1;
!!UN:Cy2/1/?y3;</code></pre>
</div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-batl"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-5"></span><details class="erm-comment"><summary>Battle</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; Remove a stack from the battlefield without a trace
; x1 - number of the stack that needs to be destroyed
!!UN:C6919200/4/?y1; [Battle Manager]
!!VRy2:Sx1 *1352 +21708 +y1; [stack structure]
!!VRy3:Sy2 +234; !!UN:Cy3/1/1; [indicate that the stack is dead]
!!BMx1:F?y4; [get stack flags]
!!VRy4:|268435456; [put the “sacrificed” flag]
!!BMx1:N0 Fy4; [quantity: 0, and set flags to the stack]
!!SN:E4621680/2/y1/51/1; [function "remove body" if dead]
!!SN:E4797616/2/y1/0/1; [update battlefield grid]</code></pre>
<pre class="erm-example"><code class="language-erm">;** Ballista (specialty X1) shoots in front of the towers.
!!UN:C4606831/1/145;
!!UN:C4606842/1/145;
!!UN:C4606861/1/149;
!!UN:C4606872/1/149;</code></pre>
<h4>Various constant values</h4>
<pre class="erm-example"><code class="language-erm">; disabling the tactics message at the beginning of the battle
; 0x462D98 JMP SHORT 0x462DCA
!#UN:C4599192/2/12523;
!#UN:C4599194/4/2425393296;</code></pre>
<pre class="erm-example"><code class="language-erm">; Elemental Summoning Spells
!!UN:C5906498/1/&lt;new creature ID&gt; - summoning fire el. sp.
!!UN:C5906519/1/&lt;new creature ID&gt; - summoning earth el. sp.
!!UN:C5906540/1/&lt;new creature ID&gt; - summoning water el. sp.
!!UN:C5906561/1/&lt;new creature ID&gt; - summoning air el. sp.
; allowed creature ID in the range 0..127</code></pre>
<pre class="erm-example"><code class="language-erm">** Shackles of War (in battle with neutrals you can run away from the battlefield)
!?BG0; [before action in battle]
!!BG:A?y1; [find out the type of action]
!!BA:H1/?y2; [find out the defender hero]
!!UN&amp;y1=4/y2=-2:C4689325/1/2; [replace with the grail (and it’s in the backpack)]
!?BA53; [after the battle]
!!UN:C4689325/1/125; [return art number]</code></pre>
<pre class="erm-example"><code class="language-erm">; ** shooting
!!UN:C4617008/1/10; - distance between straight/broken arrow for shooters (original=10)
!!UN:C4617188/1/10; - when calculating a penalty on the 2nd square of a two-cell
!!UN:C4617219/1/10; - when calculating a penalty on the 2nd square of a two-cell</code></pre>
<pre class="erm-example"><code class="language-erm">; ** disable the appearance of the gridded stack in the battle against neutrals
!!UN:C4899920/1/8; (original =1)</code></pre>
<pre class="erm-example"><code class="language-erm">; Disabling free diplomacy (free -&gt; for gold)
!!UN:C4289079/4/3; [with RMB on a creature (original = 2)]
!!UN:C4879709/1/-21; [when attacking a creature (original =127)]</code></pre>
<pre class="erm-example"><code class="language-erm">!!UN:C4468887/4/6554608; !!UN:C4468961/4/6554608; % increase in champion damage per 1 hex (here 75%)
!!UN:C4468973/4/y1; "ceiling" of the attack bonus (orig 400%)
!!UN:C4468961/4/y1; impact of attack bonus on damage (orig 5%)
!!UN:C4471030/4/y1; influence of the defense bonus on damage (orig 2.5%)
!!UN:C4471048/4/6535360; min deff bonus =97.5% /100-2.5%/ (orig =70% /100-30%/) is it really 30%? unclear</code></pre>
</div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-mons"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-6"></span><details class="erm-comment"><summary>Creatures</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; Function for changing the visual type of a flying projectile
; for existing shooters
!?FU(Monstre_SetFlyingShell);
; x1 - creature number (0...196)
; x2 - projectile type (0...15)
!!VRx1:+7994814;
!!UN:Cx1/1/x2;</code></pre>
For projectile types, see <a href="../tables/projectiles/#ref-form-weapon" data-context="true">in the table</a>.
<div class="erm-paragraph"><pre class="erm-example"><code class="language-erm">; Function for changing the voice of creatures
!?FU(Monstre_SetSound);
; x1 - creature number (0...196)
; z1 - name of the voice acting (for example: VRz1:S^monk^)
!!UN:C4697553/4/?y1;
!!VRy2:S116*x1+y1+8;
!!UN:Cy2/4/?y3;
!!SN:K4/?z1/y3/1;</code></pre>
<pre class="erm-example"><code class="language-erm">!!UN:C5133672/1/2; ** Increasing the cost of spells if the enemy has Pegasus
!!UN:C4608374/1/-2; ** The amount of mana that Ghosts drain from enemies. hero
;** Values above and below which morale does not affect the chance of a repeat turn
;** Positive morale (3 in 24 chance)
!!UN:C4605318/1/3;
!!UN:C4605344/1/3;
!!UN:C4605354/1/24; Positive Morality Probability Size (24)
;** negative morality (3 in 12 chance)
!!UN:C4605324/1/-3;
!!UN:C4605331/1/-3;
!!UN:C4605854/1/12; Negative Morality Probability Size (12)
;** if you set 6, then Badge of Courage together with the Leadership skill will give 6\24 = 25% morale trigger, normally everything above 3 is not taken into account</code></pre>

<!-- llm:end erm.un-c 2 -->

