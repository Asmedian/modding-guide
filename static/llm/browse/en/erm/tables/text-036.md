# Object control words

ID: erm.tables.object-control-words
URL: https://asmedian.github.io/modding-guide/en/erm/tables/object-control-words/
Part: 4/4
Source references: old-help:cont-conwords.htm, old-help:rec-ob.htm, old-help:rec-sk.htm, old-help:rec-mt.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.tables.object-control-words 4 -->
<strong class="erm-legacy-label">Bits 13-24</strong>: personal number of the University (0..4095) with the command <a href="../../receivers/ur/#ref-rec-ur-s">UR:S</a>.<br>
<strong class="erm-legacy-label">Bits 25-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/233630a511ba7d92.png" alt="Type 105. Wagon Bits 0-4: number of resources (0..31) – second parameter WG:R. Bits 5-12: which players visited the cart (bit by bit). Bit13: is there anything " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t105"></span><a href="../objects/#ref-form-objects" data-context="true">Type 105</a>. <strong>Wagon</strong><br>
<strong class="erm-legacy-label">Bits 0-4</strong>: number of resources (0..31) – second parameter <a href="../../receivers/wg/#ref-rec-wg-r">WG:R</a>.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: which players visited the cart (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>).<br>
<strong class="erm-legacy-label">Bit13</strong>: is there anything in the cart – <a href="../../receivers/wg/#ref-rec-wg-s">WG:S</a>.<br>
<strong class="erm-legacy-label">Bit14</strong>: bonus type (0 – resources, 1 – artifact) – <a href="../../receivers/wg/#ref-rec-wg-b">WG:B</a>.<br>
<strong class="erm-legacy-label">Bits 15-24</strong>: artifact number (0..1023) – <a href="../../receivers/wg/#ref-rec-wg-a">WG:A</a>.<br>
<strong class="erm-legacy-label">Bits 25-28</strong>: resource type (0..15) – first parameter <a href="../../receivers/wg/#ref-rec-wg-r">WG:R</a>.<br>
<strong class="erm-legacy-label">Bits 29-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/ed174f90f0cc1eec.png" alt="Type 107. School of War Just like Arena: bits 0-4: – number, the rest are ignored and are usually empty. Whether hero visited the School is determined by the te" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t107"></span><a href="../objects/#ref-form-objects" data-context="true">Type 107</a>. <strong>School of War</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong>: – number, the rest are ignored and are usually empty. Whether hero visited the School is determined by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V9</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/c88d56c26956009d.png" alt="Type 108. Warrior&#x27;s Tomb Bit 0: is there artifact – WT:S. Bits 1-4 are ignored and usually filled. Bits 5-12: which players visited the grave (bit by bit). Bits" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t108"></span><a href="../objects/#ref-form-objects" data-context="true">Type 108</a>. <strong>Warrior's Tomb</strong><br>
<strong class="erm-legacy-label">Bit 0</strong>: is there artifact – <a href="../../receivers/wt/#ref-rec-wt-s">WT:S</a>.<br>
<strong class="erm-legacy-label">Bits 1-4</strong> are ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: which players visited the grave (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>).<br>
<strong class="erm-legacy-label">Bits 13-22</strong>: artifact number (0..1023) – <a href="../../receivers/wt/#ref-rec-wt-a">WT:A</a>. If you enter an incorrect number, the game crashes when you try to search the grave.<br>
<strong class="erm-legacy-label">Bits 23-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/a83fa31e3072bfba.png" alt="Type 109. Water wheel Bits 0-4: indicator of the amount of gold (0..15) – WM:B. Amount of gold = [indicator] * 500. If the indicator is 0, then the miller says " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t109"></span><a href="../objects/#ref-form-objects" data-context="true">Type 109</a>. <strong>Water wheel</strong><br>
<strong class="erm-legacy-label">Bits 0-4</strong>: indicator of the amount of gold (0..15) – <a href="../../receivers/wm/#ref-rec-wm-b">WM:B</a>. Amount of gold = [indicator] * 500. If the indicator is 0, then the miller says that there is no gold.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: which players visited the wheel (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>). If a player visited the wheel, the tooltip for him will indicate whether he visited there this week.<br>
<strong class="erm-legacy-label">Bits 13-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t112"></span><a href="../objects/#ref-form-objects" data-context="true">Type 112</a>. <strong>Windmill</strong><br><img src="../../../../assets/erm/22835f7bdfa045b8.png" alt="Type 112. Windmill Bits 0-3: resource type (0..15) – first parameter ML:B. If you set an incorrect value, the game crashes. Bit 4 ignored and usually empty. Bit" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-3</strong>: resource type (0..15) – first parameter <a href="../../receivers/ml/#ref-rec-ml-b">ML:B</a>. If you set an incorrect value, the game crashes.<br>
<strong class="erm-legacy-label">Bit 4</strong> ignored and usually empty.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: which players visited the mill (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>). If the player visited the mill, the tooltip for him will indicate whether he visited there this week.<br>
<strong class="erm-legacy-label">Bits 13-16</strong>: number of resources (0..15) – second parameter <a href="../../receivers/ml/#ref-rec-ml-b">ML:B</a>. If 0, the miller says there are no resources.<br>
<strong class="erm-legacy-label">Bits 17-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/3785b9fba274d0c5.png" alt="Type 113. Witch&#x27;s Hut Bits 5-12: information about players visiting (bit by bit). A player who visits the hut sees the skill being learned in the tooltip for it" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t113"></span><a href="../objects/#ref-form-objects" data-context="true">Type 113</a>. <strong>Witch's Hut</strong><br>
<strong class="erm-legacy-label">Bits 5-12</strong>: information about players visiting (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>). A player who visits the hut sees the skill being learned in the tooltip for it.<br>
<strong class="erm-legacy-label">Bits 13-19</strong>: skill being learned (0..127). If you put an incorrect value in the tooltip, the skill will be named as (null), and the game will crash when visiting.<br>
<strong class="erm-legacy-label">Bits 20-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/bbee729dffc4a659.png" alt="Type 215. Quest Guard Control word represents the personal number of the Guardian. Are taken into account all bits. We cannot yet change the parameters of the G" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t215"></span><a href="../objects/#ref-form-objects" data-context="true">Type 215</a>. <strong>Quest Guard</strong><br>
Control word represents the personal number of the Guardian.<br>
Are taken into account <strong class="erm-legacy-label">all bits</strong>.<br>
We cannot yet change the parameters of the Guardians of the Passage and the Seer's Huts, but we can change their numbers as ready-made sets of parameters. 
Unfortunately, after opening the passage, the Guardian’s task (by analogy with the Seer’s Hut) is erased, and if we give two Guardians the same number, then only one of them can be opened: 
after opening one, the second will turn into a stone pillar and will not issue messages when visited, as happens with untuned Guardians. In principle, this can also be used.<br>
For example, in A Life of Adventures, when the hero has to choose two of the four elements of magic, it would be possible to assign the same number to the Guardians of the Passage that require the same keychains. 
Then there would be no extra entries in the journal and it would be possible to put a message like “You have already made your choice.” to the inaccessible Guardian after selection.</div>

<span class="erm-anchor" id="ref-cont-conwords-3"></span><h3>Why is all this needed?</h3>
<div class="erm-paragraph">As you can see, I first spent several paragraphs explaining how to correctly add 10 and 10 to get 100, and not 110101 (and not 20), and then I explained in a long and tedious manner where what bits mean what. 
The reader who reads all of this in its entirety, if there are any (which I don’t hope for; after all, I’m not writing fiction, but a kind of reference book), or who at least glanced at everything briefly, gets the impression that 
that the author suffers from a hybrid of graphomania and workaholism and has nowhere to devote his creative efforts except to all kinds of waste paper.<br>
In short, the reader asks himself the question: why is all this necessary?<br>
I answer. The study contains some useful and truly new information. For example, control word for the Fountain of Fortune and the location of personal numbers and visit information, for which there is often no ERM command. 
In the same cases when I parsed, say, Magic Spring, all of whose parameters are set through ERM, I also did a little useful. 
From the above location you can pick out as many as 27 free-to-write bits for those who don’t know what that is <a href="../../receivers/po/#ref-rec-po">!!PO</a> or just saving money.<br>
Besides, systematization is a great thing. Perhaps it will be useful to someone.<br>
Finally, I have a clear range of possible parameter values. Firstly, it is not always indicated in ERM Help, secondly, there are often incorrect values that sometimes give an interesting effect, and, 
finally, you can always say how many artifacts, spells or something else of that kind the game can “withstand”. So, the artifact is almost always allocated 10 bits 
(with the exception of the Castaway: there the artifact number takes up as much as 30 bits!), and therefore it will be quite difficult to make 1025 or more artifacts (you will have to involve ERM), but 1024 is welcome. 
A spell is also usually allocated 10 bits, only in the Pyramid only 8 are allocated for it. But the latter can be eliminated with an easy exe fix (although 256 spells can be cast without it), 
but 1025 or more different magics is already problematic.</div>

<h3>What's new with us?</h3>
<div class="erm-paragraph">But perhaps not everyone will want to fish out the dumplings of truth from the soup of verbiage, and especially for these lazy people, I will write down that very useful and new information concisely and concisely in a small list. 
Read for your health. So, in our program:
</div><ul>
<li>	Personal numbers for types 5, 6, 16 and many others: where to look for them and what to do with them. Lots of interesting facts.</li>
<li>	If you set the Bonfire of an Abandoned Camp with a value of 8-15 as a resource type, then... Read it, you’ll find out.</li>
<li>	Swan Pond has no parameters! Why then !!SW? Don't know. Probably for beauty.</li>
<li>	With some values of the control word Flotsam and Scientists (as well as unused chests - but everyone knows that) when visited, smoothly disappear without any message. 
You can’t achieve this smoothest disappearance using ERM tools – that’s the only way. But we can change the type and control word...</li>
<li>	Control word for the Fountain of Luck - for the first time in the arena!</li>
<li>	What does pampering with town and hero numbers lead to - a detailed description.</li>
<li>	If you indicate the amount of resource as 0 in Someone’s cellar (or mills), it is considered visited, unlike a cart, where you can always find 0 wood or ore.</li>
<li>	If you set the number of creatures to 4095, then by clicking <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> You will be prompted to remove it from the map, because... he's too big.</li>
<li>	The problems of generating random messages in Signs and Ocean Bottles are considered.</li>
<li>	It is told what will happen if you place a Scientist teaching primary skills number 4-7.</li>
<li>	Bits 5-12 of many objects contain information about their visits by players, but this is not always edited by ERM.</li></ul>
<div class="erm-paragraph">And also many other things that I considered unnecessary to catch.</div>
<div class="erm-paragraph">Let me finish here.</div>

</div>
</div>
</section>
:::

## Purpose {#meaning}

The 32-bit OB:C field has a different layout for each object type. These are inspected legacy WoG fields; preserve unknown bits. Field capacity does not make every value valid. Use PO for custom data.

## Values {#values}

| Object type | Fields and related commands |
| --- | --- |
| [4](../objects/#id-4) {#type-4} | 0–4: visit-object index (0–31); hero visitation uses HE:V7. |
| [5](../objects/#id-5) {#type-5} | 0–14: AR:V, scroll spell or pickup mode; 15–18: resource for modes 4/5; 19–30: extra-data index; 31: whether AR:G/M/X data exists. Mode 6 packs guards differently. |
| [6](../objects/#id-6) {#type-6} | 0–9: LE parameter-record index (0–1023). |
| [12](../objects/#id-12) {#type-12} | 0–3: resource kind; 4–19: signed amount −32768…32767. Values 8–15 change the message picture but do not grant an artifact or spell. |
| [14](../objects/#id-14) {#type-14} | SW writes 0–4 (index) and 13–16 (luck), but the legacy WoG study reports that gameplay ignores them and grants +2 luck. A successful write does not prove the effect changed. |
| [16](../objects/#id-16) {#type-16} | 5–12: player visits (CB:V); 13–24: bank record (CB:A/G/M/R); 25: guards defeated (CB:T). |
| [17](../objects/#id-17) {#type-17} | 0–28: DW record index. |
| [18](../objects/#id-18) {#type-18} | 0–28: DW record index. |
| [19](../objects/#id-19) {#type-19} | 0–28: DW record index. |
| [20](../objects/#id-20) {#type-20} | 0–28: DW record index. |
| [22](../objects/#id-22) {#type-22} | 0–4: skeleton index; 6–15: artifact ID; 16: artifact-present flag (SK). |
| [23](../objects/#id-23) {#type-23} | 0–4: visit-object index (0–31); hero visitation uses HE:V1. |
| [24](../objects/#id-24) {#type-24} | 5–12: player visits (CB:V); 13–24: bank record (CB:A/G/M/R); 25: guards defeated (CB:T). |
| [25](../objects/#id-25) {#type-25} | 5–12: player visits (CB:V); 13–24: bank record (CB:A/G/M/R); 25: guards defeated (CB:T). |
| [26](../objects/#id-26) {#type-26} | 0–9: LE record; 10–17: players forbidden to activate it; 18: AI allowed; 19: remove after first visit. |
| [29](../objects/#id-29) {#type-29} | Whole word: 0 empty, 1 gives 5 wood, 2 gives 5 wood and 200 gold, 3 gives 10 wood and 500 gold. Other values in legacy WoG remove it without reward or message. |
| [30](../objects/#id-30) {#type-30} | 5–12: player visits; 13–16: signed luck −8…+7. |
| [32](../objects/#id-32) {#type-32} | 0–4: visit-object index (0–31); hero visitation uses HE:V2. |
| [33](../objects/#id-33) {#type-33} | 0–25: GR record index. |
| [34](../objects/#id-34) {#type-34} | Whole word: hero ID. Replacing it does not create a valid independent hero and can corrupt army or garrison state. |
| [39](../objects/#id-39) {#type-39} | 0–4: LN index; 6–9: resource amount (0 means depleted); 10–13: resource kind. |
| [41](../objects/#id-41) {#type-41} | 0–4: visit-object index (0–31); hero visitation uses HE:V6. |
| [42](../objects/#id-42) {#type-42} | 0–25: MN record index. Mines and lighthouses share the record pool; the legacy lighthouse resource kind is 100. |
| [44](../objects/#id-44) {#type-44} | Exit-monolith index, numbered independently per subtype. −1 disables the exit in the inspected version. |
| [45](../objects/#id-45) {#type-45} | Whole word: monolith record index. Equal indices prevent a pair from teleporting to each other. |
| [47](../objects/#id-47) {#type-47} | 0–4: visit-object index (0–31); hero visitation uses HE:V8. |
| [48](../objects/#id-48) {#type-48} | 0–4: spring index (SP:N); 6: visited (SP:S). |
| [51](../objects/#id-51) {#type-51} | 0–4: visit-object index (0–31); hero visitation uses HE:V3. |
| [53](../objects/#id-53) {#type-53} | 0–25: MN record index. Mines and lighthouses share the record pool; the legacy lighthouse resource kind is 100. |
| [54](../objects/#id-54) {#type-54} | 0–11: count; 12–15: refusal probability in tens of percent; 16: joining mode; 17: never flees; 18: no growth; 19–26: extra-data index; 31: extra data exists. Creature type is the object subtype. |
| [55](../objects/#id-55) {#type-55} | 0–4: GD index; 6–9: resource; 10: reward available. Resource values 8–15 are invalid. |
| [57](../objects/#id-57) {#type-57} | Obelisk index 0–47 (MT:N); player visits are stored separately (UN:L). |
| [59](../objects/#id-59) {#type-59} | 0–29: SG:M text index. Unassigned text uses RANDSIGN.TXT; equal indices do not guarantee equal random messages. |
| [61](../objects/#id-61) {#type-61} | 0–4: visit-object index (0–31); hero visitation uses HE:V4. |
| [62](../objects/#id-62) {#type-62} | Imprisoned hero ID. Assigning a free hero ID does not imprison that hero. |
| [63](../objects/#id-63) {#type-63} | 0: guards; 5–12: player visits; 13–20: spell ID (PM). |
| [78](../objects/#id-78) {#type-78} | 0–15: signed creature count; object subtype selects the creature. |
| [79](../objects/#id-79) {#type-79} | 0–14: resource amount; 19–30 and 31: extra-data index and presence flag, as with artifacts. |
| [81](../objects/#id-81) {#type-81} | 0–2: reward kind; 3–5: primary skill; 6–12: secondary skill; 13–22: spell. Use valid IDs only (SC). |
| [82](../objects/#id-82) {#type-82} | 0–2: 0 empty, 1 gives 1500 gold, 2 gives 1000 gold and an artifact; 3–12: artifact ID. Modes 3–7 remove the chest without reward in legacy WoG. |
| [83](../objects/#id-83) {#type-83} | Whole word: quest record index. A shared index means shared data; completing one quest can clear another object’s parameters. |
| [84](../objects/#id-84) {#type-84} | 5–12: player visits (CB:V); 13–24: bank record (CB:A/G/M/R); 25: guards defeated (CB:T). |
| [85](../objects/#id-85) {#type-85} | 5–12: player visits (CB:V); 13–24: bank record (CB:A/G/M/R); 25: guards defeated (CB:T). |
| [86](../objects/#id-86) {#type-86} | 0–29: artifact ID. A wide field does not increase the number of valid game artifacts. |
| [87](../objects/#id-87) {#type-87} | 0–7: owner; 8–15: boat X; 16–23: boat Y (SY). Remote purchase may choose the nearest water hex. |
| [88](../objects/#id-88) {#type-88} | 5–12: player visits; 13–22: spell ID (10 bits, capacity 0–1023, not the valid spell set). |
| [89](../objects/#id-89) {#type-89} | 5–12: player visits; 13–22: spell ID (10 bits, capacity 0–1023, not the valid spell set). |
| [90](../objects/#id-90) {#type-90} | 5–12: player visits; 13–22: spell ID (10 bits, capacity 0–1023, not the valid spell set). |
| [91](../objects/#id-91) {#type-91} | 0–29: SG:M text index. Unassigned text uses RANDSIGN.TXT; equal indices do not guarantee equal random messages. |
| [93](../objects/#id-93) {#type-93} | Whole word: spell ID. |
| [98](../objects/#id-98) {#type-98} | 0–28: town record index. Replacing it can desynchronize ownership, visitors and garrison; use CA for normal changes. |
| [100](../objects/#id-100) {#type-100} | 0–4: visit-object index (0–31); hero visitation uses HE:V0. |
| [101](../objects/#id-101) {#type-101} | 0–9: artifact ID; 10: 0 gold / 1 artifact; 11–14: gold multiplier ×500 (CH). |
| [102](../objects/#id-102) {#type-102} | 0–4: tree index; 5–12: player visits; 13–15: payment kind. Use valid KT:S modes; mode 3 is reported to hang the legacy game. |
| [103](../objects/#id-103) {#type-103} | 0–29: subterranean-gate record containing the paired exit coordinates. |
| [104](../objects/#id-104) {#type-104} | 13–24: university index (UR:S). |
| [105](../objects/#id-105) {#type-105} | 0–4: resource amount; 5–12: visits; 13: reward present; 14: 0 resource / 1 artifact; 15–24: artifact ID; 25–28: resource (WG). |
| [107](../objects/#id-107) {#type-107} | 0–4: visit-object index (0–31); hero visitation uses HE:V9. |
| [108](../objects/#id-108) {#type-108} | 0: artifact present; 5–12: player visits; 13–22: artifact ID (WT). |
| [109](../objects/#id-109) {#type-109} | 0–4: gold multiplier ×500; 5–12: player visits (WM). |
| [112](../objects/#id-112) {#type-112} | 0–3: resource; 5–12: player visits; 13–16: amount (ML). |
| [113](../objects/#id-113) {#type-113} | 5–12: player visits; 13–19: secondary skill. |
| [215](../objects/#id-215) {#type-215} | Whole word: quest record index. A shared index means shared data; completing one quest can clear another object’s parameters. |

## Related commands and tables {#related}

[OB:C](../../receivers/ob/) · [All tables](../)

## Related commands and tables {#reference-links}

[Map objects (OB)](../../receivers/ob/#command-b-h) · [Map objects (OB)](../../receivers/ob/#command-c) · [Map objects (OB)](../../receivers/ob/#command-d-e) · [Map objects (OB)](../../receivers/ob/#command-m-1-2-3) · [Map objects (OB)](../../receivers/ob/#command-r-s) · [Map objects (OB)](../../receivers/ob/#command-t-u) · [Object visits (OB)](../../triggers/ob/) · [Artifact table](../artifacts/) · [Player colors](../players/) · [Game object table](../objects/) · [Object-type hints (HT)](../../receivers/ht/) · [Flags, messages and choices (IF)](../../receivers/if/) · [ERM debugging and compatibility](../../compatibility/)
<!-- llm:end erm.tables.object-control-words 4 -->

