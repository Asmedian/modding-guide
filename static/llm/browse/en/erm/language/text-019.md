# Variables, strings and arrays

ID: erm.variables
URL: https://asmedian.github.io/modding-guide/en/erm/variables/
Part: 3/5
Source references: old-help:cont-flags.htm, old-help:cont-usedvar.htm, era-changelog:era-iii-changelog.txt, era-framework:lib-9999-era---stdlib.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.variables 3 -->
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-usedvar-rez"></span>Reserved for mapmakers:</strong><br>
v5000-v5999<br>
z850-z859<br>
w150-w175<br>
Flags: 500-599<br>
FU29000-FU29999<br>
TM20-TM25<br>
Dialogues: 50-59<br>
ERM numbers: 800-899</div>

<div class="erm-paragraph">
<span class="erm-anchor" id="ref-cont-usedvar-script"></span></div><h3>Analysis by scripts:</h3>
⇒ <span class="erm-tone-purple">WOGIFY</span>, <span class="erm-tone-red">script00.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-1"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 132-133, 137-143, 165, 195, 196, 224, 239 (Commander's Banner), 241 (Dragon's Heart), 
242 (Replacement with Ghosts), 245 (Level 7+ creatures get 50% experience), 248 (Show WoG'ification message)<br>
<strong>Object:</strong> no, although there are many object replacements for use in other scripts, and chests, external dwelling values can be changed<br>
<strong>PO Numbers:</strong>  Artifact Warlord Banner (Type 5, Subtype 156): O<br>
<strong>Variables:</strong> v508, v600-v705, v950-v966, v3339, v3500<br>
<strong>Flags:</strong> 9,870 (used by Anders Mithral script), 995<br>
<strong>Functions:</strong> FU670-FU686, FU5209, FU22000-FU22001 (Set AI/Human experience multiplier),<br>
           FU8-FU9 
(Terrain compatibility), FU3333-FU3334 (bit conversion),<br>
           FU25-FU28 
(removal of prohibited artifacts), FU7777-FU7779 (Random spell),<br>
           FU29 (set multiplier to 50% for level 7+ creatures)<br>
<strong>Macros:</strong> $bit$, $spell$<br>
<strong>Macros for the Universal Timer:</strong> $month$,$weeks$,$week$,$day$,$weekday$,$AI$,$color$,$once$,<br>
 $red$,$blue$,$tan$,$green$,$orange$,$purple$,$teal$,$pink$,<br>
 $monday$,$tuesday$,$wednesday$,$thursday$,$friday$,$saturday$,$sunday$<br>
<strong>Dialogues:</strong> DG1, DG15<br>
<strong>Timers:</strong> TM19, TM79</div></details>
<br>
⇒ <span class="erm-tone-purple">CARD RULES</span>, <span class="erm-tone-red">script01.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-2"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 101, 111-130, 230<br>
<strong>Object:</strong> none, except for a few used as triggers for Thieves<br>
<strong>Variables:</strong> z280-z299, z326-z328, z332-z354, v1-v4, v549-v559, v564-v579, v600-v602, v610-v639, v700-v739, v1219, v1262, z680, z681-z697 (reserved for future rules!)<br>
<strong>Flags:</strong> 1-3<br>
<strong>Functions:</strong> FU690-FU726<br>
<strong>Timers:</strong> TM84<br>
<strong>Variables:</strong> v549-v559, v572-v579, z280-z299, and z332-z354 must not be modified by other scripts!</div></details>
<br>
⇒ <span class="erm-tone-purple">CHANGED ARTIFACTS</span>, <span class="erm-tone-red">script02.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-3"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 102<br>
<strong>Object:</strong> the following artifacts have been changed: Bird of Perception (63), Pendant of Life (103), Pendant of Death (104),Targ of the Rampaging Ogre (16),
Dead Man's Boots (56), Pendant of Total Recall (107), Emblem of Cognizance (65), Stoic Watchman (64), Pendant of Second Sight (101), 
Pendant of Holiness (102), Boots of Polarity (59), Garniture of Interference (57), Pendant of Dispassion (100), Pendant of Free Will (105), 
Diplomat's Ring (67), Surcoat of Counterpoise (58), Orb of Vulnerability (93), Sphere of Permanence (92), Statesman's Medal (66), Orb of Inhibition (126)<br>
<strong>Variables:</strong> v600-v628, v630-v631, v640-v648, z326-z331, z410-z428, i-l, w33<br>
<strong>Flags:</strong> 1, 2, 5, 710-714<br>
z410-z428 must not be changed by other scripts!<br>
Other variable variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU599-FU609, FU612-FU613<br>
<strong>Timers:</strong> TM85</div></details>
<br>
⇒ <span class="erm-tone-purple">CHANGED SECONDARY SKILLS</span>, <span class="erm-tone-red">script03.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-4"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 103, 215-218<br>
<strong>Variables:</strong> v35-v36, v487-v489, v587-v589, v900-v916, v920-v934, w43,<br>
z70-z73, z390-z391, z430-z431, z470-z472<br>
<strong>Flags:</strong> 2, 270-271,
v487-v489 and v587-v589 and z430-z431 must not be modified by other scripts!<br>
Flags 270-271 are common to other scripts that use Fnord's network detection function.<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
Warning: This code may be in the middle of another script, <br>
if hero gains a level or a battle is provoked<br>
<strong>Functions:</strong> FU649-FU651, FU653-FU668, FU8166<br>
<strong>Timers:</strong> TM74</div></details>
<br>
⇒ <span class="erm-tone-purple">TOWER ARKAN</span>, <span class="erm-tone-red">script04.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-5"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 104<br>
<strong>Object:</strong> type 63, subtype 9 (<a href="../tables/wog-object-variants/#ref-form-newobj-4" data-context="true">see</a>)<br>
<strong>Variables:</strong> v590, v600-v617, v618, z403<br>
<strong>Flags:</strong> 2-5<br>
z403 must not be changed by other scripts!<br>
v590 must always be 0! Some of my other scripts also use it as 0 to index tooltips.<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU620-FU627</div></details>
<br>
⇒ <span class="erm-tone-purple">BANK</span>, <span class="erm-tone-red">script05.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-6"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 105 (Loan Bank), 181 (Transfer of all resources), 225 (Mithril trade)<br>
<strong>Object:</strong> in the town, or <a href="../tables/wog-object-variants/#ref-form-newobj-5" data-context="true">Black Tower</a><br>
<strong>Variables:</strong> v493-v500, v592-v599<br>
v592-v599, z401 must be inviolable by other scripts!<br>
v590 must be 0! Some of my other scripts also use it as 0 to index tooltips.<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU631-FU638, FU14800-FU14801 (transfer all resources)<br>
<strong>Dialogues:</strong> DG4<br>
<strong>Timers:</strong> TM75</div></details>
<br>
⇒ <span class="erm-tone-purple">HOURGLASS OF ASMODEUS</span>, <span class="erm-tone-red">script06.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-7"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 106<br>
<strong>Object:</strong> modified artifact Clock of the Evil Hour (85)<br>
<strong>Flags</strong>: 1, 266-271<br>
<strong>Variables:</strong>v234, v247, v266-284, v1255-v1256,<br>
v4600 (used in conjunction with the Metamorphs script), v9300, z266-z269, z444<br>
<strong>Functions</strong>: FU6664-FU6670<br>
<strong>Macros:</strong> $xpos$, $ypos$, $lpos$, $hpower$, $apower$, $hsex$, $hnumber$, $aknow$, $hcolour$, $aname$, $hrname$, $hisher$</div></details>
<br>
⇒ <span class="erm-tone-purple">FISHING WELL</span>, <span class="erm-tone-red">script07.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-8"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 107<br>
<strong>Object:</strong> modified Magic Well (Object 49)<br>
<strong>Flags:</strong> 1-6<br>
<strong>Variables:</strong> v300-v305, v308, v998-v1000, z1-z2, z300-z303<br>
<strong>Functions:</strong> FU1100-FU1110, FU14000<br>
<strong>Dialogues:</strong> DG7-DG9</div></details>
<br>
⇒ <span class="erm-tone-purple">RAGGER</span>, <span class="erm-tone-red">script08.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-9"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 108<br>
<strong>Object:</strong> type 63, subtype 8 (<a href="../tables/wog-object-variants/#ref-form-newobj-8" data-context="true">see</a>)<br>
<strong>Variables:</strong> v590, v600-v612, z326-z330, z400<br>
<strong>Flags:</strong> 2<br>
v590 must be 0! Some of my other scripts also use it as 0 to index tooltips.<br>
z400 must not be changed by other scripts!<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU640-FU641</div></details>
<br>
⇒ <span class="erm-tone-purple">TIME MARKET</span>, <span class="erm-tone-red">script09.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-10"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 109<br>
<strong>Object:</strong>  type 63, subtype 51 (<a href="../tables/wog-object-variants/#ref-form-newobj-9" data-context="true">see</a>)<br>
<strong>Flags:</strong> 1-4, 1000<br>
<strong>Variables:</strong> v50-v54, v451-v469, w45, z1, z47-z61, z241-z248<br>
<strong>Functions:</strong> FU451<br>
<strong>Dialogues:</strong> DG14<br>
<strong>Macros:</strong> @hsex@, @slevel@, @pgold@, @sicon@, @cday@, @skillnum@, @pithnum@, @skname@, @hname@, @he-she@, @man-woman@, @pithy@</div></details>
<br>
⇒ <span class="erm-tone-purple">MAGIC MUSHROOMS</span>, <span class="erm-tone-red">script10.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-11"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Bruno<br>
<strong>WoG option number:</strong> 110<br>
<strong>Object:</strong> type 63, subtype: 14 (Mushrooms Air), 18 (Mushrooms Water), 23 (Mushrooms Earth) and 29 (Mushrooms Fire) (<a href="../tables/wog-object-variants/#ref-form-newobj-10" data-context="true">see</a>)<br>
<strong>Variables:</strong> v1-v3 for local use,<br>w20-w27 to record the skills of heroes who visited the mushroom,<br>
z11-z17 and z159 for help texts<br>
<strong>Functions:</strong> FU10-FU11</div></details>
<br>
⇒ <span class="erm-tone-purple">PALACE OF DREAMS</span>, <span class="erm-tone-red">script11.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-12"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 11<br>
<strong>Object:</strong> type 63, subtype 33 (<a href="../tables/wog-object-variants/#ref-form-newobj-11" data-context="true">see</a>)<br>
<strong>Flags:</strong> 1-3<br>
<strong>Variables:</strong> v1-v2, v101-v111, z1, z3-z6, z450<br>
<strong>Functions:</strong> FU777-FU779</div></details>
<br>
⇒ <span class="erm-tone-purple">LIVING SKULL</span>, <span class="erm-tone-red">script12.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-13"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 12<br>
<strong>Object:</strong> type 63, subtype 50 (<a href="../tables/wog-object-variants/#ref-form-newobj-12" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N, O, V0<br>
<strong>Flags:</strong> 1, 21, 27<br>
<strong>Variables:</strong> v1-v4, v24-v34, v94, v95, z1, z22-z44, z454<br>
<strong>Functions:</strong> FU20-FU24, FU14900-FU14901<br>
<strong>Dialogues:</strong> 20-21<br>
Variables that should NOT be changed outside the script: z454</div></details>
<br>
⇒ <span class="erm-tone-purple">PLAYING CARDS IN THE TAVERN</span>, <span class="erm-tone-red">script13.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-14"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 13<br>
<strong>Object:</strong> modified Tavern (object 95)<br>
<strong>Functions:</strong> FU1-FU2<br>
<strong>Flags:</strong> 1, 400-408<br>
<strong>Variables:</strong> v400-v420, z201-z205, w41-w42</div></details>
<br>
⇒ <span class="erm-tone-purple">ALTAR OF TRANSFORMATION</span>, <span class="erm-tone-red">script14.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-15"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 14<br>
<strong>Object:</strong> type 63, subtype 20 (<a href="../tables/wog-object-variants/#ref-form-newobj-14" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N (for object 63/20)<br>
<strong>Flags:</strong> 1, 209-211<br>
<strong>Variables:</strong> v88-v95, v991-v993, x16, z451-z453<br>
<strong>Functions:</strong> FU18001-FU18005<br>
<strong>Timers:</strong> TM80</div></details>
<br>
⇒ <span class="erm-tone-purple">HOME OF A MYSTERIOUS CREATURE</span>, <span class="erm-tone-red">script15.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-16"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Dieter<br>
<strong>WoG option number:</strong> 15<br>
<strong>Object:</strong> type 63, subtype 3 (<a href="../tables/wog-object-variants/#ref-form-newobj-15" data-context="true">see</a>)<br>
<strong>Variables:</strong> v141-v143, z141-z143, w14<br>
<strong>Flags:</strong> 140,141<br>
<strong>Functions:</strong> FU141-FU145, FU148<br>
<strong>Timers:</strong> TM14<br>
Variables v141, z142, z143 and w14 must not be changed by other scripts!</div></details>
<br>
⇒ <span class="erm-tone-purple">COMBAT ACADEMY</span>, <span class="erm-tone-red">script16.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-17"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Anders<br>
<strong>WoG option number:</strong> 16<br>
<strong>Object:</strong> type 63, subtype 32 (<a href="../tables/wog-object-variants/#ref-form-newobj-16" data-context="true">see</a>)<br>
<strong>Flags:</strong> 1-10<br>
<strong>Variables:</strong> (v1-v2), v320-v342, v381-v383, v388 z382 (must not be used by other scripts),<br>
z1-z4, w38, [z116000-z116037]<br>
<strong>Functions:</strong> FU3610-FU3619, FU8165-FU8167<br>
<strong>Timers:</strong> TM30</div></details>
<br>
⇒ <span class="erm-tone-purple">POTION FOUNTAIN</span>, <span class="erm-tone-red">script17.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-18"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Bruno<br>
<strong>WoG option number:</strong> 17<br>
<strong>Object:</strong> type 63, subtype 48 (<a href="../tables/wog-object-variants/#ref-form-newobj-17" data-context="true">see</a>),<br>
type 63, subtype 2, and modified Fountain of Fortune (object 30)<br>
<strong>Variables:</strong> v1-v12, v40-v41, v1260-v1261, w10-w12, z1-z4, z18-z21<br>
<strong>Flags:</strong> 1, 902-907<br>
<strong>Functions:</strong> FU800-FU802, FU810-FU816</div></details>
<br>
⇒ <span class="erm-tone-purple">POOR MAN'S HOUSE</span>, <span class="erm-tone-red">script18.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-19"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 18<br>
<strong>Object:</strong> type 63, subtype 24 (<a href="../tables/wog-object-variants/#ref-form-newobj-18" data-context="true">see</a>)<br>
<strong>Variables:</strong> v590, v600-v606, z120, z326, z402, w13<br>
z402 must not be changed anywhere!<br>
v590 must be 0! Some of my other scripts also use it as 0 to index tooltips.<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU610-FU611</div></details>
<br>
⇒ <span class="erm-tone-purple">MASTER OF LIFE</span>, <span class="erm-tone-red">script19.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-20"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Sir Four<br>
<strong>WoG option number:</strong> 19<br>
<strong>Variables:</strong> no<br>
<strong>Functions:</strong> FU100<br>
<strong>Timers:</strong> TM2 (Universal Timer)</div></details>
<br>
⇒ <span class="erm-tone-purple">MONSTER WEEK</span>, <span class="erm-tone-red">script20.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-21"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 20, 134, 135, 136, 172, 200<br>
Flags 1, 56, 170-172, 412<br>
v variables: v1-v7, v166-200, v205, v361-v367, v372-373, v1200-1210,<br>
z variables: z190-z199, z495<br>
<strong>Functions:</strong> FU180-FU184, FU5300-FU5310, FU8000<br>
<strong>Timers</strong>: TM61-TM63</div></details>
<br>
⇒ <span class="erm-tone-purple">MERCENARY GUILD</span>, <span class="erm-tone-red">script21.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-22"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 21<br>
<strong>Object:</strong> modified Mercenaries Guild (object 213)<br>
<strong>Variables:</strong> z1-z5, v210-247, v249-257, v3405, z210-z231<br>
<strong>Flags:</strong> 49-51<br>
<strong>Functions:</strong> FU1400-FU1409<br>
<strong>
Dialogues:</strong> DG30-DG32<br>
<strong>Timers:</strong> TM64</div></details>
<br>
⇒ <span class="erm-tone-purple">DAMAGE OF MONSTERS</span>, <span class="erm-tone-red">script22.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-23"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 22<br>
<strong>Object:</strong> creatures (type 54)<br>
<strong>Variables:</strong> v1212-v1214, z119-z141, z469, (z480-z492)<br>
<strong>Flags:</strong> 2, 57<br>
<strong>Functions:</strong> FU2826</div></details>
<br>
⇒ <span class="erm-tone-purple">EXPANSION OF MAGIC</span>, <span class="erm-tone-red">script23.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-24"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 23<br>
<strong>Object:</strong> no, but many objects are used (piles of resources, treasure chests, mills, 
water mills, Star Axes, Gardens of Enlightenment, Mystical Gardens, Rock Knowledge, artifacts, warrior tombs, 
carts, skeletons, water chests, castaways, wreckage, ocean bottle, signs, 
scientists, universities, bonfires, pyramids, witch huts, shrines, trees of Knowledge)<br>
<strong>PO Numbers:</strong> N (for resource piles), N [check only] for Watermills and 
windmills to test for improvement with mithril.<br>
<strong>Flags:</strong> 1-3, 410, 872<br>
<strong>Variables:</strong> v1-v4, v310-v312, z1-z5<br>
<strong>Functions:</strong> FU849, FU5000-FU5037<br>
<strong>Timer:</strong> TM18</div></details>
<br>
⇒ <span class="erm-tone-purple">ADVANCED TIPS FOR EXTERNAL RESIDENCES</span>, <span class="erm-tone-red">script24.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-25"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 24<br>
<strong>Object:</strong> no, but external dwellings are used<br>
<strong>Flags:</strong> 1-3, 58<br>
<strong>Variables:</strong> v1,v94-v95, z1-z3<br>
<strong>Functions:</strong> FU2400-FU2406</div></details>
<br>
⇒ <span class="erm-tone-purple">CARD OPTIONS</span>, <span class="erm-tone-red">script25.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-26"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
Scripts: no Forts, Cartographer replacement, Spell ban, Artifact ban, 
Renaming towns, Buy all creatures, Universal creature improvement, 
Expanded creature improvement, Hero renaming, Hidden skills display, 
Show hero's mana, Overwrite characters and show text with right click, Cancel messages, 
Commander class selection, Expanded heroes, Option to disable autosave, 
Selection of types of neutral towns, Construction of two buildings, Quick battle options<br>
<strong>WoG option number:</strong> 25, 100, 131, 144-148, 150-164, 166-169, 173-180, 182-187, 
220-223, 226-228, 233, 234, 236-238, 240, 241, 243-244, 246-247<br>
<strong>Object:</strong> signs (extended)<br>
<strong>PO Numbers:</strong> Universal Upgrade: O, B0, B1, S (used for towns), S (used for signs)<br>
<strong>Variables:</strong> v975-v976, v1-v5, z1-z4<br>
v3300-v3303, v3310-v3312 (universal creature improvement), v3320-v3330 (disabling messages),<br>
v3393-v3402 (quick battle), v3341 (check for prohibited spells)<br>
Not used, but reserved (for script25): v3304-v3308, v3334-v3336, v3406-v3407<br>
<strong>Temporary</strong> <strong>Variables:</strong> v600-v646, z22-z31<br>
<strong>Flags:</strong> 1-4<br>
<strong>Functions:</strong> FU10799-FU10816   (FU10815 is not used, but is reserved for script25)<br>
  FU10920-FU10931 (buy all)<br>
  FU10932 (check for prohibited spells)<br>
  FU3300-FU3303 (universal creature improvement)<br>
  FU14802-FU14806 (showing hero skills and changing the order of skills)<br>
  FU18 (commander class selection)<br>
  FU3304 (expanded heroes)<br>
  FU50-FU53 (neutral town types selection)<br>
  FU54-FU56 (double buildings)<br>
  FU57 (Quick Battle Options)<br>
  FU10933-FU10936 (Commander's Banner: Quick Pick)<br>
  FU41-FU42 (rearrangements in the hero table)<br>
  FU10937 (hero renaming)<br>
  FU10938 (disable messages)<br>
<strong>Macros:</strong> $ban$<br>
<strong>Dialogues:</strong> 17, 25<br>
<strong>Timers:</strong> 34</div></details>
<br>
⇒ <span class="erm-tone-purple">CRAFTSMAN</span>, <span class="erm-tone-red">script26.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-27"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Dieter<br>
<strong>WoG option number:</strong> 26<br>
<strong>Object:</strong> type 63, subtype 52 (<a href="../tables/wog-object-variants/#ref-form-newobj-26" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N (for the Artisan object)<br>
<strong>Variables:</strong> v157-v164, v4101-v4136, z160-z166,<br>
<strong>Functions:</strong> FU160-FU176<br>
<strong>Flags:</strong> 160-162<br>
<strong>Timers:</strong> TM26</div></details>
<br>
⇒ <span class="erm-tone-purple">BOOK OF SPELLS</span>, <span class="erm-tone-red">script27.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-28"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Anders<br>
<strong>WoG option number:</strong> 27<br>
<strong>Object:</strong> artifact Book of Spells (0)<br>
<strong>Variables:</strong> (v1-v4), (v600-v611), (z1-z9), [z127000-z127003]<br>
<strong>Functions:</strong> FU3633-FU3638</div></details>
<br>
⇒ <span class="erm-tone-purple">SCHOOL OF MAGIC</span>, <span class="erm-tone-red">script28.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-29"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Anders<br>
<strong>WoG option number:</strong> 28<br>
<strong>Object:</strong> type 63, subtype 62 (<a href="../tables/wog-object-variants/#ref-form-newobj-28" data-context="true">see</a>)<br>
<strong>Flags:</strong> (1-10)<br>
<strong>Variables:</strong> v384-v386, v389, z383, w38 (must not be changed by other scripts),<br>
(v1-v5), (z1-z4), [z128000-z128076]<br>

<!-- llm:end erm.variables 3 -->

