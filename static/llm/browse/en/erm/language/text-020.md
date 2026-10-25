# Variables, strings and arrays

ID: erm.variables
URL: https://asmedian.github.io/modding-guide/en/erm/variables/
Part: 4/5
Source references: old-help:cont-flags.htm, old-help:cont-usedvar.htm, era-changelog:era-iii-changelog.txt, era-framework:lib-9999-era---stdlib.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.variables 4 -->
<strong>Timers:</strong> TM30<br>
<strong>Functions:</strong> FU3620-FU3630, FU8165-FU8167</div></details>
<br>
⇒ <span class="erm-tone-purple">CHESTS</span>, <span class="erm-tone-red">script29.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-30"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 29<br>
<strong>Object:</strong> new chests (type 101, subtype 1)<br>
<strong>Variables:</strong> w63, w80, z326, v550-v559, v600-v646<br>
<strong>Flags:</strong> 2<br>
v550-v559 bit table used by several scripts. Should not be changed, but can be used.<br>
w63 from the Adventure Cave script and should not be changed.<br>
w80 must not be modified by other scripts.<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU840-FU848</div></details>
<br>
⇒ <span class="erm-tone-purple">ADVENTURE CAVE</span>, <span class="erm-tone-red">script30.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-31"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 30<br>
<strong>Object:</strong> type 63, subtype 57 (<a href="../tables/wog-object-variants/#ref-form-newobj-30" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> H, N, O, S, T (for Adventure Cave: type 63, subtype 57)<br>
<strong>Variables:</strong> z326-z330, z360-z366, z368-z379, z404, <br>
v150, v510-v548, v550-v559, v600-v669, v1263-v1265, w61-w78, i<br>
v510-v548, w61-w74, and z404 must not be changed anywhere!<br>
v550-v559 bit table, also used by Map Rules. Should not be changed, but can be used.<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
<strong>Flags:</strong> 2, 600-603<br>
<strong>Functions:</strong> FU730-FU776, FU780-FU799, FU820-FU835<br>
<strong>Timers:</strong> TM90</div></details>
<br>
⇒ <span class="erm-tone-purple">CHESTS 2</span>, <span class="erm-tone-red">script31.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-32"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 31<br>
<strong>Object:</strong> new chests (type 101, subtype 5)<br>
<strong>Flags:</strong> 1-2, 409, 1000<br>
<strong>Variables:</strong> v1-v6, z1-z5, w52-w54, w64 (check only)<br>
<strong>Functions:</strong> FU5200-FU5208, FU5210-FU5211<br>
<strong>Timers:</strong> TM28</div></details>
<br>
⇒ <span class="erm-tone-purple">CHALLENGE STONES</span>, <span class="erm-tone-red">script32.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-33"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 32<br>
<strong>Object:</strong> type 63, subtype 21 (<a href="../tables/wog-object-variants/#ref-form-newobj-32" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N (for Challenge Stone: type 63, subtype 21)<br>
<strong>Variables:</strong> v1-9, v234, 247, v360-370, v998-1000, v1211 z1-4, z480-494<br>
All variables can be used except z493 and z494, which store the tooltip text.<br>
<strong>Flags:</strong> 1,2,4, 57 (flag "Creature Delirium")<br>
<strong>Functions:</strong> FU5219-FU5229<br>
<strong>Timers:</strong> TM98</div></details>
<br>
⇒ <span class="erm-tone-purple">LIVING SCROLLS</span>, <span class="erm-tone-red">script33.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-34"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 33<br>
<strong>Object:</strong> advanced spell scrolls (object 93)<br>
<strong>Variables:</strong> v1-v6, z1-z2, v1218, v1220, v1222-v1235, v1257, v9300<br>
<strong>Functions:</strong> FU5244-FU5426, FU5248-FU5255, FU5260-FU5262</div></details>
<br>
⇒ <span class="erm-tone-purple">PROPHECY CARDS</span>, <span class="erm-tone-red">script34.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-35"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Matthew<br>
<strong>WoG option number:</strong> 34<br>
<strong>Object:</strong> extended artifact Cards of Prophecy (47)<br>
<strong>Flags:</strong> 270,271<br>
z-<strong>Variables:</strong> z698, [z134001-z134025]<br>
v-<strong>Variables:</strong> v1300-v1327, v1332-v1336,<br>
<br> 
(also: v3393-v3400 from the Quick Battle script)<br>
<strong>Functions:</strong> FU13500-FU13507</div></details>
<br>
⇒ <span class="erm-tone-purple">EXPANSION OF MYSTICISM</span>, <span class="erm-tone-red">script35.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-36"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Anders<br>
<strong>WoG option number:</strong> 35<br>
<strong>Variables:</strong> (v1-v10), (z1-z9), [z135000-z135177]<br>
<strong>Flags:</strong> (1-10), 56, 172, 173, 412<br>
<strong>Functions:</strong> FU8150-FU8165, FU8230-FU8231<br>
<strong>Timers:</strong> TM30</div></details>
<br>
⇒ <span class="erm-tone-purple">MYTHRIL IMPROVEMENTS</span>, <span class="erm-tone-red">script36.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-37"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Anders<br>
<strong>WoG option number:</strong> 36, 149, 170, 171<br>
<strong>Object:</strong> resource Mithril (type 79, subtype 7), towns, mines, windmills, shipyards, lighthouses, watermills.<br>
<strong>PO Numbers:</strong> N (for Mines, Mystic Gardens, Watermills, Universities and Windmills), 
and also S and V3 for mines (V3 is used for compatibility with the future Mithril Smelting script (???)).<br>
<strong>Variables:</strong> (v1-v6), v70-v71, (z1-z9), z429, z805-z815, z919, [z136000-z136084]<br>
<strong>Flags:</strong> (1, 9, 10), 172, 410, 870-874<br>
<strong>Timers:</strong> TM99<br>
<strong>Functions:</strong> FU709, FU8170-FU8189<br>
PO:N numbers are set at the entrances to mines, water mills and windmills.</div></details>
<br>
⇒ <span class="erm-tone-purple">CHANGED CREATURES</span>, <span class="erm-tone-red">script37.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-38"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Steven<br>
<strong>WoG option number:</strong> 37, 198, 199<br>
<strong>Flags:</strong> no<br>
<strong>Variables:</strong> v1, v1400-v1412, z860-z876<br>
<strong>Functions:</strong> FU4850-FU4853<br>
<strong>Timers:</strong> TM31-TM32</div></details>
<br>
⇒ <span class="erm-tone-purple">KARMIC BATTLES</span>, <span class="erm-tone-red">script38.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-39"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Dieter<br>
<strong>WoG option number:</strong> 38<br>
<strong>Variables:</strong> v490-v492, w49<br>
<strong>Flags:</strong> 490<br>
<strong>Functions:</strong> FU491-FU494<br>
Variables v490,v491 and flag 490 must not be changed by other scripts!</div></details>
<br>
⇒ <span class="erm-tone-purple">CHANGED HERO SPECIALIZATIONS</span>, <span class="erm-tone-red">script39.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-40"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Alexis<br>
<strong>WoG option number:</strong> 39<br>
<strong>Variables:</strong> v425-v444, v9001, w28-w32, z405-z406<br>
<strong>Functions:</strong> FU803-FU808, FU836-FU838, FU850-FU852<br>
<strong>Flags:</strong> 428, 429, 430<br>
<strong>Timers:</strong> TM77</div></details>
<br>
⇒ <span class="erm-tone-purple">FIRST MONEY</span>, <span class="erm-tone-red">script40.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-41"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Alexis<br>
<strong>WoG option number:</strong> 40<br>
<strong>Variables:</strong> v428-v429<br>
<strong>Timers:</strong> TM78</div></details>
<br>
⇒ <span class="erm-tone-purple">COMPLEX BATTLES</span>, <span class="erm-tone-red">script41.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-42"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Alexis<br>
<strong>WoG option number:</strong> 41<br>
<strong>Variables:</strong> v425-v427<br>
<strong>Functions:</strong> FU809,839</div></details>
<br>
⇒ <span class="erm-tone-purple">GARRISONS</span>, <span class="erm-tone-red">script42.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-43"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 42<br>
<strong>Object:</strong> garrisons (type 33 and 219, subtype 0 and 1)<br>
<strong>PO Numbers:</strong> N (garrisons: type 33 and 219, subtype 0 and 1)<br>
<strong>Variables:</strong> v1-v9, z1-z5, v1236-v1239, v1253-v1254<br>
<strong>Functions:</strong> FU10850-FU10862<br>
<strong>Timers:</strong> TM19 (shared with WoGification), TM48<br>
<strong>Dialogues:</strong> DG88</div></details>
<br>
⇒ <span class="erm-tone-purple">OBELISK RUNES</span>, <span class="erm-tone-red">script43.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-44"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 43<br>
<strong>Variables:</strong> no (local only)<br>
<strong>Functions:</strong> FU5311-FU5312<br>
<strong>PO Numbers:</strong> S, T (for object Obelisk)</div></details>
<br>
⇒ <span class="erm-tone-purple">EMERALD TOWER</span>, <span class="erm-tone-red">script44.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-45"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 44<br>
<strong>Object:</strong>  type 63, subtype 65 (<a href="../tables/wog-object-variants/#ref-form-newobj-45" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N (for the tower itself: type 63, subtype 65)<br>
<strong>Permanent</strong> <strong>Variables:</strong> z816-z841, v1240-v1252 v1255 used in script06.erm), v1270-v1271,<br>
<strong>Temporary</strong> <strong>Variables:</strong> v1-v6, v360-v369, z1-z5, z480-z490<br>
<strong>Functions:</strong> FU10900-FU10910<br>
<strong>Timers:</strong> TM38<br>
<strong>Dialogues:</strong> DG3</div></details>
<br>
⇒ <span class="erm-tone-purple">IMPROVING LOCKS</span>, <span class="erm-tone-red">script45.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-47"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Alexis<br>
<strong>WoG option number:</strong> 45<br>
<strong>Object:</strong> no, but used inside locks (object 98)<br>
<strong>Variables:</strong> v424-v429, v1600-v1983<br>
<strong>Flags:</strong> 432, 433<br>
<strong>Functions:</strong> FU819, FU859-FU863, FU865-FU869<br>
<strong>Timers:</strong> TM82</div></details>
<br>
⇒ <span class="erm-tone-purple">SERPENT BERSERKERS</span>, <span class="erm-tone-red">script46.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-48"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 46<br>
<strong>Permanent</strong> <strong>Variables:</strong> v295-v299, v4740-v4748, v4750-v4756, z940-z941<br>
<strong>Temporary</strong> <strong>Variables:</strong> v1-v6<br>
<strong>Flags:</strong> 2, 298, 299<br>
<strong>Functions:</strong> FU19000</div></details>
<br>
⇒ <span class="erm-tone-purple">CREATURES RELATIONS</span>, <span class="erm-tone-red">script47.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-49"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Matthew<br>
<strong>WoG option number:</strong> 47<br>
<strong>Variables:</strong> v1340-v1359<br>
<strong>Flags:</strong> 130-131<br>
<strong>Timers:</strong> TM13<br>
<strong>Functions:</strong> FU13520-FU13527</div></details>
<br>
⇒ <span class="erm-tone-purple">ADVANCED SECONDARY SKILLS</span>, <span class="erm-tone-red">script48.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-50"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Arstahd<br>
<strong>WoG option number:</strong> 48, 201-214<br>
<strong>Variables:</strong> s, r, j<br>
V-<strong>Variables:</strong> v7018-v7056, v7186-v7199<br>
Z-<strong>Variables:</strong> z1-z3, z700-z706, z722-z725<br>
Y-<strong>Variables:</strong> y1-y11<br>
W-<strong>Variables:</strong> w4-w9<br>
<strong>Functions:</strong> FU7000-FU7026<br>
<strong>Timers:</strong> TM50, TM51<br>
<strong>Flags:</strong> 1, 2</div></details>
<br>
⇒ <span class="erm-tone-purple">Squire</span>, <span class="erm-tone-red">script49.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-51"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Arstahd<br>
<strong>WoG option number:</strong> 49<br>
<strong>Variables:</strong> w117-w119, v7181, v7206-v7217, z1-z9, z910-z918<br>
<strong>Functions:</strong> FU7100-FU7109<br>
<strong>Timer</strong>: TM19 (from WoG's script00)</div></details>
<br>
⇒ <span class="erm-tone-purple">ENHANCED MONSTERS</span>, <span class="erm-tone-red">script50.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-52"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Arstahd<br>
<strong>WoG option number:</strong> 50<br>
<strong>Variables:</strong> i-m, y1-y12, v7000-v7015, v7183, z2, z500-z679<br>
<strong>Flags:</strong> 74, 75, 77, 78<br>
<strong>Functions:</strong> FU7050-FU7053, FU7060-FU7069<br>
<strong>Timers:</strong> TM50</div></details>
<br>
⇒ <span class="erm-tone-purple">ENHANCED COMMANDERS</span>, <span class="erm-tone-red">script51.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-53"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Arstahd<br>
<strong>WoG option number:</strong> 51<br>
<strong>Variables:</strong>  v7080-v7092, v7177, v7185, y1-y9<br>
<strong>Functions:</strong> FU7070-FU7074</div></details>
<br>
⇒ <span class="erm-tone-purple">MIRROR THE WAY HOME</span>, <span class="erm-tone-red">script52.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-54"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Sir Four<br>
<strong>WoG option number:</strong> 52<br>
<strong>Object:</strong> type 63, subtype 66 (<a href="../tables/wog-object-variants/#ref-form-newobj-52" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N (for Mirror Portal: type 63, subtype: 66)<br>
<strong>Variables:</strong> v1-6, v234, v247, v360-v370, v729-v730, z1-z4, z480-z494, z729<br>
All variables can be used except z729, which stores the tooltip text.<br>
<strong>Flags:</strong> 1, 2<br>
<strong>Functions:</strong> FU20521-FU20523</div></details>
<br>
⇒ <span class="erm-tone-purple">DUNGEON OF THE DRAGON MASTER</span>, <span class="erm-tone-red">script53.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-55"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Hermann the Weird<br>
<strong>WoG option number:</strong> 53<br>
<strong>Objects</strong>: Dragon Utopia expanded<br>
<strong>Variables:</strong> v8033, v8035-v8043, z455-z461<br>
<strong>Functions:</strong> FU20001-FU20003<br>
<br>
**Used by FU709 from script01 (map rules) to reduce the power of the Master's Dungeon...<br>
** Compatible with script 57 (neutral creatures).</div></details>
<br>
⇒ <span class="erm-tone-purple">ADVANCED COMBAT VEHICLES I</span>, <span class="erm-tone-red">script54.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-56"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Overlord<br>
<strong>WoG option number:</strong> 54<br>
Version 0.9 Variables<strong>:</strong> TM41, v591, v2000-v2074, FU900-FU927, w81-w83, (z1-z4)<br>
Version 2.3 Variables (?): w110-w116, v2550-v2561, (z1-z2), FU21000-FU21014</div></details>
<br>
⇒ <span class="erm-tone-purple">ADVANCED COMBAT VEHICLES AI</span>, <span class="erm-tone-red">script55.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-57"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Arstahd<br>
<strong>WoG option number:</strong> 55<br>
<strong>Objects</strong>: no<br>
<strong>Variables:</strong> y1-y10, v7180, v7220-v7236, z790-z791<br>
<strong>Flags:</strong> 79<br>
<strong>Functions:</strong> FU7120-FU7126</div></details>
<br>
⇒ <span class="erm-tone-purple">METAMORPHES</span>, <span class="erm-tone-red">script56.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-58"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 56<br>
<strong>Permanent</strong> <strong>Variables:</strong> v4500-v4603, z206-z209<br>
<strong>Temporary</strong> <strong>Variables:</strong> v1-v10, v13-v14, v24<br>
<strong>Functions:</strong> FU9600-FU9603</div></details>
<br>
⇒ <span class="erm-tone-purple">NEUTRAL CREATURES</span>, <span class="erm-tone-red">script57.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-59"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Authors:</strong> Alexandru Balahura, Timothy Pulver and Thomas Franz (samot)<br>
<strong>WoG option number:</strong> 57, 231, 232, 235<br>
<strong>PO Numbers:</strong> S (for creature banks: type 16, 24, 25, 84, 85)<br>
<strong>Variables:</strong> v100, v296, z745<br>
<strong>Functions:</strong> FU1000-FU1001-FU1003, FU5400-FU5411</div></details>
<br>
⇒ <span class="erm-tone-purple">ESPIONAGE</span>, <span class="erm-tone-red">script58.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-60"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Petyo<br>
<strong>WoG option number:</strong> 58<br>
<strong>PO Numbers:</strong> N (1 square above the entry square in town)<br>
<strong>Variables:</strong> v2100-v2135, v2200-v2207<br>
(z1-z7), (z200), z250-z265, z582-z584, z770-z786<br>
w50-w51,w55-w59, f-q<br>
<strong>Flags:</strong> 32-36<br>
<strong>Functions:</strong> FU463-FU481<br>
<strong>Dialogues:</strong> DG11</div></details>
<br>
⇒ <span class="erm-tone-purple">PIERCING SHOT</span>, <span class="erm-tone-red">script59.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-61"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Petyo<br>
<strong>WoG option number:</strong> 59<br>
<strong>Variables:</strong> (v51), v2600-v2622, z66-z69<br>
<strong>Flags:</strong> 341-366<br>
<strong>Functions:</strong> FU31-FU33</div></details>
<br>
⇒ <span class="erm-tone-purple">THE FORGOTTEN SHRINE</span>, <span class="erm-tone-red">script60.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-62"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Petyo<br>
<strong>WoG option number:</strong> 60<br>
Objects: type 63, subtype 22 (<a href="../tables/wog-object-variants/#ref-form-newobj-60" data-context="true">see</a>)<br>
<strong>Variables:</strong> v15-v23, v1100-v1118, z167-z168, w18<br>
<strong>Temporary</strong> <strong>Variables:</strong> m-o<br>
<strong>Flags:</strong> 37<br>
<strong>Functions:</strong> FU12-FU16</div></details>
<br>
⇒ <span class="erm-tone-purple">PROTECTION AGAINST THE ELEMENTS</span>, <span class="erm-tone-red">script61.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-63"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Petyo<br>
<strong>WoG option number:</strong> 61<br>
<strong>Variables:</strong> v15-v18, v2400-v2408<br>
<strong>Flags:</strong> 41-43<br>
<strong>Functions:</strong> FU1872-FU1876</div></details>
<br>
⇒ <span class="erm-tone-purple">STACK SEPARATION</span>, <span class="erm-tone-red">script62.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-64"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 62<br>
<strong>Variables:</strong> v3309, v3313-v3314, v3342-v3392, v3403-v3404, z1-z3<br>
<strong>Flags:</strong> 1, 3-4<br>
<strong>Functions:</strong> FU43-FU49, FU60-FU61</div></details>
<br>
⇒ <span class="erm-tone-purple">LANDSCAPE PASSABILITY</span>, <span class="erm-tone-red">script63.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-65"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 63<br>
<strong>Object:</strong> temporary setting of signs (type 91)<br>
<strong>PO Numbers:</strong> B0, B1 (trees)<br>
<strong>Constant Variables:</strong> v1270, v1272-v1275, w79<br>
<strong>Temporary Variables:</strong> v1-v4, z1<br>
<strong>Functions:</strong> FU14001-FU14011</div></details>
<br>
⇒ <span class="erm-tone-purple">TOBIN SCRIPTS</span>, <span class="erm-tone-red">script64.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-66"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">   (September 19, 2004)<br>
<strong>Author:</strong> Tobyn<br>
<strong>Scripts:</strong><br>
 (Universal Timer), Tobyn's library of functions, Advanced Witches' Huts, change of master,<br>
 Property expansion, First Aid expansion, Art of War, Modified Conflux/Rampart<br>
<strong>WoG option number:</strong> 64, 188-194<br>
<strong>Flags:</strong> 230-239 reserved (and 236-239 in use)<br>
<strong>Constant Variables:</strong> w47, w48, v2300-v2399 reserved (and v2301-v2334, v2360-v2399 in use)<br>
<strong>Temporary Variables:</strong> m-t, flag 1, v248<br>
<strong>Timers:</strong> TM1, TM2 (together both form the Universal Timer)<br>
<strong>Functions:</strong> FU2300-FU2399 reserved (and FU2333-FU2345 in use)<br>
<strong>Text variables:</strong> z232-z239 reserved (and z237-239 used)<br>
<strong>Macros:</strong> $month$,$weeks$,$week$,$day$,$weekday$,$AI$,$color$,$once$,<br>
        
$red$,$blue$,$tan$,$green$,$orange$,$purple$,$teal$,$pink$,<br>
        
$monday$,$tuesday$,$wednesday$,$thursday$,$friday$,$saturday$,$sunday$</div></details>
<br>
⇒ <span class="erm-tone-purple">PAID MONOLITHS</span>, <span class="erm-tone-red">script65.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-67"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Steven<br>
<strong>WoG option number:</strong> 65<br>
<strong>Objects:</strong> expanded monoliths (objects 45 and 43)</div></details>
<br>
⇒ <span class="erm-tone-purple">COMMANDER WITCH HUT</span>, <span class="erm-tone-red">script66.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-68"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 66<br>
<strong>Objects:</strong> expanded Witch Huts (Object 113)<br>
<strong>Variables:</strong> v600-v627, z326, w40<br>
w40 must not be changed by other scripts!<br>
Other variable variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU6300-FU6304<br>
<strong>Dialogues:</strong> 10</div></details>
<br>

<!-- llm:end erm.variables 4 -->

