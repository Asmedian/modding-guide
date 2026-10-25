# Object control words

ID: erm.tables.object-control-words
URL: /en/erm/tables/object-control-words/
Part: 3/4
Source references: old-help:cont-conwords.htm, old-help:rec-ob.htm, old-help:rec-sk.htm, old-help:rec-mt.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.tables.object-control-words 3 -->
<strong class="erm-legacy-label">Bits 11-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/3e217521e012f28c.png" alt="Type 57. Obelisk Control word is a personal number from 0 to 47, which corresponds to MT:N. If you specify a number greater than 47, the program gets into memor" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t57"></span><a href="../objects/#ref-form-objects" data-context="true">Type 57</a>. <strong>Obelisk</strong><br>
Control word is a personal number from 0 to 47, which corresponds to <a href="../../receivers/mt/#ref-rec-mt-n" title="The label MT:N refers to the Obelisk receiver MT, not MN.">MT:N</a>. If you specify a number greater than 47, the program gets into memory not intended for Obelisks, 
therefore, the obelisk may turn out to be visited, and if not, then when visiting the Obelisk, the puzzle card still does not change. In addition, if you specify a very large value - on the order of tens of millions or more 
(the limit value is different each time) – the game crashes. Which Obelisks a particular player has visited is controlled by <a href="../../receivers/un/#ref-rec-un-l1">UN:L</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t59"></span><a href="../objects/#ref-form-objects" data-context="true">Type 59</a>. <strong>Ocean Bottle</strong><br><img src="../../../../assets/erm/3baab00b6520165a.png" alt="Type 59. Ocean Bottle Bits 0-29: personal number (0..1073741823) with command SG:M. It should be noted that if the text is not entered or erased (SG:M-1), then " loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-29</strong>: personal number (0..1073741823) with command <a href="../../receivers/sg/#ref-rec-sg-m">SG:M</a>. It should be noted that if the text is not entered or erased (<a href="../../receivers/sg/#ref-rec-sg-m">SG:M-1</a>), 
then a random one from RANDSIGN.TXT located in h3bitmap.lod is taken as a message. In this case, the text is generated immediately before the visit based on the coordinates of the Bottle, and, 
If you give two bottles the same number corresponding to a random text, then the text when you visit will almost certainly be different.<br>
<strong class="erm-legacy-label">Bits 30-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/c0c80ba766f81f82.png" alt="Type 61. Star Axis Just like Arena: bits 0-4 – number, the rest are ignored and are usually empty. Whether hero has visited the Wheel is determined by the comma" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t61"></span><a href="../objects/#ref-form-objects" data-context="true">Type 61</a>. <strong>Star Axis</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty. Whether hero has visited the Wheel is determined by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V4</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t62"></span><a href="../objects/#ref-form-objects" data-context="true">Type 62</a>. <strong>Prison</strong><br><img src="../../../../assets/erm/2e601a21168a053f.png" alt="Type 62. Prison Control word represents the number of the imprisoned hero. In this case, you can only put the numbers of heroes imprisoned in other prisons: if " loading="lazy" decoding="async" class="erm-figure">
Control word represents the number of the imprisoned hero. In this case, you can only put the numbers of heroes imprisoned in other prisons: if you put the number of a free or unhired hero, 
then a message is displayed that hero was once sitting here, but then the king freed him. (Apparently, somewhere in the hero’s parameters there is a byte that determines whether he is sitting or free.) 
The same is displayed for small incorrect numbers. With very large numbers (of the order of tens of millions or more), the game crashes.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/cd0e8c46f4866578.png" alt="Type 63. Pyramid Bit 0: are there guards – PM:V. Bits 1-4 are ignored and usually filled. Bits 5-12: which players visited (bit by bit) – PM:P. Bits 13-20: spel" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t63"></span><a href="../wog-object-variants/#ref-form-newobj" data-context="true">Type 63</a>. <strong>Pyramid</strong><br>
<strong class="erm-legacy-label">Bit 0</strong>: are there guards – <a href="../../receivers/pm/#ref-rec-pm-v">PM:V</a>.<br>
<strong class="erm-legacy-label">Bits 1-4</strong> are ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: which players visited (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>) – <a href="../../receivers/pm/#ref-rec-pm-p">PM:P</a>.<br>
<strong class="erm-legacy-label">Bits 13-20</strong>: spell number (0..255) – <a href="../../receivers/pm/#ref-rec-pm-s">PM:S</a>.<br>
<strong class="erm-legacy-label">Bits 21-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/c7dd34f429e9cda7.png" alt="Type 78. Refugee Camp Bits 0-15: number of creatures (-32768..32767). Bits 16-31 are ignored and are usually empty. The type of creatures is set in the camp sub" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t78"></span><a href="../objects/#ref-form-objects" data-context="true">Type 78</a>. <strong>Refugee Camp</strong><br>
<strong class="erm-legacy-label">Bits 0-15</strong>: number of creatures (-32768..32767).<br>
<strong class="erm-legacy-label">Bits 16-31</strong> are ignored and are usually empty.<br>
The type of creatures is set in the camp subtype.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t79"></span><a href="../resources/#ref-form-resource" data-context="true">Type 79</a>. <strong>Resource</strong><br>
Control word is designed exactly the same as the <a href="./#ref-cont-conwords-t5">artifact</a>, only <strong class="erm-legacy-label">bits 0-14</strong>, corresponding <a href="../../receivers/ar/#ref-rec-ar-v">AR:V</a>, contain the number of resources.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/b0494277d24d37a2.png" alt="Type 81. Scholar Bits 0-2: bonus type (0..7) – SC:T: 0 – primary skill; 1 – secondary skill; 2 – spell; 3..7 – Scholar does not give anything and smoothly disap" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t81"></span><a href="../objects/#ref-form-objects" data-context="true">Type 81</a>. <strong>Scholar</strong><br>
<strong class="erm-legacy-label">Bits 0-2</strong>: bonus type (0..7) – <a href="../../receivers/sc/#ref-rec-sc-t">SC:T</a>:<br>
0 – primary skill; 1 – secondary skill; 2 – spell;<br>
3..7 – Scholar does not give anything and smoothly disappears without a message. This can be used in the same way as the similar property <a href="./#ref-cont-conwords-t29">Wreckage</a>.<br>
<strong class="erm-legacy-label">Bits 3-5</strong>: primary skill type (0..7) – <a href="../../receivers/sc/#ref-rec-sc-p">SC:P</a>. If you set from 4 to 7, the primary skills do not change, but Scholar, judging by the pictures, 
teaches you how to build level 2 Mage Guilds in the Dungeon, Citadel, Fortress and Conjugation, respectively.<br>
<strong class="erm-legacy-label">Bits 6-12</strong>: secondary skill number (0..127) – <a href="../../receivers/sk/#ref-rec-sk-s" title="Original Skeleton links say SC; the Skeleton receiver is SK.">SC:S</a>. If you put the incorrect spell and set <a href="../../receivers/sc/#ref-rec-sc-t">SC:T1</a>, the game crashes when visiting.<br>
<strong class="erm-legacy-label">Bits 13-22</strong>: spell number (0..1023) – <a href="../../receivers/sc/#ref-rec-sc-l">SC:L</a>. If you put an incorrect, already studied or unlearned spell by this hero, primary skill will be studied.<br>
<strong class="erm-legacy-label">Bit 23</strong> ignored and usually empty.<br>
<strong class="erm-legacy-label">Bits 24-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t82"></span><a href="../objects/#ref-form-objects" data-context="true">Type 82</a>. <strong>Sea Chest</strong><br><img src="../../../../assets/erm/aa6b54cb2fcfe77e.png" alt="Type 82. Sea Chest There is no receiver for this type, but vigilant forum users with proud names Demiurg, DracoLich and Chertos-2 (or one of them; or two; all t" loading="lazy" decoding="async" class="erm-figure">
There is no receiver for this type, but vigilant forum users with proud names <code class="erm-tone-purple erm-strong">Demiurg</code>, <code class="erm-tone-purple erm-strong">DracoLich</code> and <code class="erm-tone-purple erm-strong">Chertos-2</code> 
(or one of them; or two; all three wrote posts about it, but no one claimed authorship), they finally deciphered the meaning of his control word. I present their discovery here. Naturally, in your own words.<br>
<strong class="erm-legacy-label">Bits 0-2</strong>: chest selection type (0..7): 0 – empty, 1 – 1500 gold, 2 – 1000 gold and artifact. If the value is set from 3 to 7, then the chest smoothly disappears without any message, 
and this can be used - see. <a href="./#ref-cont-conwords-t29">Flotsam</a>.<br>
<strong class="erm-legacy-label">Bits 3-12</strong>: artifact number (0..1023). If you set an incorrect value and set the selection type to 2, then the game crashes when selected. If the selection type is set to 0 or 1, the default here is -1, i.e. 1023.<br>
<strong class="erm-legacy-label">Bits 13-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/860eb101052c1faa.png" alt="Type 83. Seer&#x27;s Hut Control word is a personal number that refers to a data area that is inaccessible to us, where all the parameters of the hut are located. Ar" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t83"></span><a href="../objects/#ref-form-objects" data-context="true">Type 83</a>. <strong>Seer's Hut</strong><br>
Control word is a personal number that refers to a data area that is inaccessible to us, where all the parameters of the hut are located.<br>
Are taken into account <strong class="erm-legacy-label">all bits</strong>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/e8726705b0987cf0.png" alt="Type 84. Crypt The structure of the control word is completely identical type 16. The same remark is appropriate here as for dilapidated ship." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t84"></span><a href="../objects/#ref-form-objects" data-context="true">Type 84</a>. <strong>Crypt</strong><br>
The structure of the control word is completely identical <a href="./#ref-cont-conwords-t16">type 16</a>.<br>
The same remark is appropriate here as for <a href="./#ref-cont-conwords-t24">dilapidated ship</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t85"></span><a href="../objects/#ref-form-objects" data-context="true">Type 85</a>. <strong>Shipwreck</strong><br>
Same as <a href="./#ref-cont-conwords-t24">Derelict Ship</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/0556e4d87f5a5d03.png" alt="Type 86. Shipwreck Survivor Again, he&#x27;s ahead of me here. Demiurg. Nevertheless, let&#x27;s write: Bits 0-29: artifact number (0..1073741823). If you put very large " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t86"></span><a href="../objects/#ref-form-objects" data-context="true">Type 86</a>. <strong>Shipwreck Survivor</strong><br>
Again, he's ahead of me here. <code class="erm-tone-purple erm-strong">Demiurg</code>. Nevertheless, let's write:<br>
<strong class="erm-legacy-label">Bits 0-29</strong>: artifact number (0..1073741823). If you put very large incorrect values, like [2<sup>28</sup>+<a href="../artifacts/#ref-form-a1" data-context="true">artifact number</a>], 
then this artifact can even be lifted without crashing. True, click on it after that <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> I wouldn’t recommend trying to move it to another slot.<br>
<strong class="erm-legacy-label">Bits 30-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t87"></span><a href="../objects/#ref-form-objects" data-context="true">Type 87</a>. <strong>Shipyard</strong><br><img src="../../../../assets/erm/039fea092887dc67.png" alt="Type 87. Shipyard Bits 0-7: shipyard owner (0..255) – SY:O. Incorrect values ​​can turn the flag into the most unexpected colors, although this color is usually" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-7</strong>: shipyard owner (0..255) – <a href="../../receivers/sy/#ref-rec-sy-o">SY:O</a>. Incorrect values ​​can turn the flag into the most unexpected colors, although this color is usually white.<br>
<strong class="erm-legacy-label">Bits 8-15</strong>: X-coordinate for building a ship (0..255) – <a href="../../receivers/sy/#ref-rec-sy-p">SY:P</a>.<br>
<strong class="erm-legacy-label">Bits 16-23</strong>: Y-coordinate for building a ship (0..255) – <a href="../../receivers/sy/#ref-rec-sy-p">SY:P</a>. It should be noted that when a boat is purchased remotely, by clicking on the shipyard, 
then these parameters are ignored and the boat is built in the nearest water cell. If you put values that go beyond the edge of the card, it will not fly out, the boat will simply not be built anywhere. 
Most likely, other completely unrelated data will change instead.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t88"></span><a href="../objects/#ref-form-objects" data-context="true">Types 88-90</a>. <strong>Shrines of magical embodiment, gesture and thought</strong><br><img src="../../../../assets/erm/8cff49a5f9851782.png" alt="Types 88-90. Shrines of magical embodiment, gesture and thought Bits 0-4 are ignored and usually filled. Bits 5-12: which players visited the Shrine (bit by bit" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-4</strong> are ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: which players visited the Shrine (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>). If the player has visited the Shrine, he knows what is being studied there.<br>
<strong class="erm-legacy-label">Bits 13-22</strong>: number of the spell being studied (0..1024) – <a href="../../receivers/sr/#ref-rec-sr-s">SR:S</a>. If you enter an incorrect value, they write that you have already studied this spell. Although I haven't checked all the values.<br>
<strong class="erm-legacy-label">Bits 23-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/e05a43208f2dee30.png" alt="Type 91. Sign Same with Ocean bottle. Only Sign does not disappear after being picked up." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t91"></span><a href="../objects/#ref-form-objects" data-context="true">Type 91</a>. <strong>Sign</strong><br>
Same with <a href="./#ref-cont-conwords-t59">Ocean bottle</a>. Only Sign does not disappear after being picked up.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/131f6a5e5426e74a.gif" alt="Type 93. Scroll with a spell Control word represents spell number. Are taken into account all bits." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t93"></span><a href="../objects/#ref-form-objects" data-context="true">Type 93</a>. <strong>Scroll with a spell</strong><br>
Control word represents <a href="../spells/#ref-form-spell" data-context="true">spell number</a>.<br>
Are taken into account <strong class="erm-legacy-label">all bits</strong>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/410a259950773ad9.png" alt="Type 98. Town Bits 0-28: personal number (0..536870911) with all parameters. Bits 29-31 are ignored and are usually empty. If you assign one town the number of " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t98"></span><a href="../towns/#ref-form-towns" data-context="true">Type 98</a>. <strong>Town</strong><br>
<strong class="erm-legacy-label">Bits 0-28</strong>: personal number (0..536870911) with all parameters.<br>
<strong class="erm-legacy-label">Bits 29-31</strong> are ignored and are usually empty.<br>
If you assign one town the number of another, the following will happen:
</div><span class="erm-anchor" id="ref-cont-conwords-t0"></span><ol class="erm-margin-top-zero">
<li>If the number is not changed at the entrance:
	<ol><li>The tooltip will change when clicked <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> on this town square, but not on others; the hover tooltip will remain unchanged.</li>
	<li>When you click on this cell, town will be highlighted, the number of which is set; if it is already selected, the town menu will open, however, if town is not yours, when you hover over this cell, the cursor over the castle icon will not change. 
Town will not be highlighted (the very beginning of the sentence) if it is not yours and the selection is some hero and not town.</li></ol>
</li>
<li>	If the number is changed at the entrance:
	<ol><li>In addition to the previous one, the hover tooltip (on any town cell) will also change: the name of the town will change. The type of town will remain unchanged, it depends on the subtype of the cell at the entrance.</li>
	<li>The color of the flags will also change.</li>
	<li>If you go into a modified entrance, there will first be some checks related to the original town: so, if it does not belong to you and there are guards there, you will be forced to fight; 
	after the victory, or if there were no guards, you will become the owner of the town, which you can verify by putting the original number on the entrance.</li>
	<li>After which the menu of the original town will open. The hero who came in will not be there, because... it will be in the guest slot of the changed town.</li>
	<li>If you move a visiting hero to the garrison and back, he will move to the replaced town already on the global map.</li>
	<li>If you try to recruit a hero in your home town, the game will crash.</li>
	<li>The most severe glitches occur if you exchange numbers between two towns. Hero-the visitor can leave the town and at the same time remain in the guest slot, can get into the guest slots and garrisons of both towns at once, 
	find yourself in a guest slot and a garrison of one town at the same time and split into two... in a thousand other ways.</li></ol>
</li></ol>

<div class="erm-paragraph"><img src="../../../../assets/erm/8c8c6c4c74f49479.png" alt="Type 100. Stone of Knowledge Just like Arena: bits 0-4 – number, the rest are ignored and are usually empty. Whether hero has visited the Stone is determined by" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t100"></span><a href="../objects/#ref-form-objects" data-context="true">Type 100</a>. <strong>Stone of Knowledge</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty. Whether hero has visited the Stone is determined by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V0</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/0e23e7cd429987cb.png" alt="Type 101. Treasure Chest Bits 0-9: artifact number (0..1023) – CH:A. Bit 10: bonus type (0 – gold, 1 – artifact) – CH:S. Bits 11-14: indicator of the amount of " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t101"></span><a href="../objects/#ref-form-objects" data-context="true">Type 101</a>. <strong>Treasure Chest</strong><br>
<strong class="erm-legacy-label">Bits 0-9</strong>: artifact number (0..1023) – <a href="../../receivers/ch/#ref-rec-ch-a">CH:A</a>.<br>
<strong class="erm-legacy-label">Bit 10</strong>: bonus type (0 – gold, 1 – artifact) – <a href="../../receivers/ch/#ref-rec-ch-s">CH:S</a>.<br>
<strong class="erm-legacy-label">Bits 11-14</strong>: indicator of the amount of gold (0..15) – <a href="../../receivers/ch/#ref-rec-ch-b">CH:B</a>. Amount of gold = [indicator] * 500.<br>
<strong class="erm-legacy-label">Bits 15-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t102"></span><a href="../objects/#ref-form-objects" data-context="true">Type 102</a>. <strong>Tree of Knowledge</strong><br><img src="../../../../assets/erm/837a190b760e5ef2.png" alt="Type 102. Tree of Knowledge Bits 0-4: Tree number (0..31) – KT:N. Whether hero has visited the Tree is determined by the command HE:V5. Bits 5-12: information a" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-4</strong>: Tree number (0..31) – <a href="../../receivers/kt/#ref-rec-kt-n">KT:N</a>. Whether hero has visited the Tree is determined by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V5</a>.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: information about players visiting (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>). A player who visits the Tree sees in the tooltip the type of level he receives.<br>
<strong class="erm-legacy-label">Bits 13-15</strong>: level gain type (0..3) – <a href="../../receivers/kt/#ref-rec-kt-s">KT:S</a>. If you set the selection type to 3, the game freezes when visiting the Tree, 
and in the tooltip (if you put in bits 5-12 that Wood has already been visited) it says that the Tree is nothing more than an upgraded generator of level 4 creatures.<br>
<strong class="erm-legacy-label">Bits 16-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/1c4a71943621227a.png" alt="Type 103. Gate of the Underworld Bits 0-29: personal Gate number (0..1073741823). The number refers to the data area where the coordinates of the target gates o" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t103"></span><a href="../objects/#ref-form-objects" data-context="true">Type 103</a>. <strong>Gate of the Underworld</strong><br>
<strong class="erm-legacy-label">Bits 0-29</strong>: personal Gate number (0..1073741823). The number refers to the data area where the coordinates of the target gates or the absence thereof are recorded - if there are more gates at one level, the part is disabled.<br>
<strong class="erm-legacy-label">Bits 30-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t104"></span><a href="../objects/#ref-form-objects" data-context="true">Type 104</a>. <strong>University</strong><br><img src="../../../../assets/erm/d60f94284d92a049.png" alt="Type 104. University Bits 0-4 are ignored and usually filled. Bits 5-12 are ignored and are usually empty. These bits usually contain information about player v" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-4</strong> are ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 5-12</strong> are ignored and are usually empty. These bits usually contain information about player visits, but I didn't notice any changes to the University control word when visiting. 
nor any changes to the University prompt when these bits are populated.<br>

<!-- llm:end erm.tables.object-control-words 3 -->

