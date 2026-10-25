# Object control words

ID: erm.tables.object-control-words
URL: /en/erm/tables/object-control-words/
Part: 2/4
Source references: old-help:cont-conwords.htm, old-help:rec-ob.htm, old-help:rec-sk.htm, old-help:rec-mt.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.tables.object-control-words 2 -->
<strong class="erm-legacy-label">Bits 0-4</strong> contain the pond number (0..31), which corresponds <a href="../../receivers/sw/#ref-rec-sw-n">SW:N</a>.<br><img src="../../../../assets/erm/574c9d95ad62389a.png" alt="Type 14. Swan Pond It should be noted about such a widespread misconception that Swan Lake has parameters. For some reason WoG Team created receiver, editing it" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 5-12</strong> are ignored and are usually empty. (That is, in fact, they are filled by default, like everyone else, but when the luck bonus changes, for some reason they are reset to zero. 
Perhaps there should have been information about player visits here.)<br>
<strong class="erm-legacy-label">Bits 13-16</strong> correspond to the luck bonus - either from 0 to 15, or from -8 to +7. (Although the certificate indicates limit values from 1 to 3.)<br>
<strong class="erm-legacy-label">Bits 17-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t16"></span><a href="../creature-banks/#ref-form-cb" data-context="true">Type 16</a>. <strong>Creature Bank</strong><br>
<strong class="erm-legacy-label">Bits 0-4</strong> are ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 5-12</strong> contain information about players' visits (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>), which corresponds to <a href="../../receivers/cb/#ref-rec-cb-v">CB:V</a>. 
If visited, guards is displayed in the tooltip.<br>
<strong class="erm-legacy-label">Bits 13-24</strong> contain a personal number (from 0 to 4095) referring to <a href="../../receivers/cb/#ref-rec-cb">CB</a>:A G M R.<br>
<strong class="erm-legacy-label">Bit 25</strong> contains whether the guards have been killed or not yet, and is edited by the command <a href="../../receivers/cb/#ref-rec-cb-t">CB:T</a>.<br>
<strong class="erm-legacy-label">Bits 26-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t17"></span><a href="../creature-dwellings/#ref-form-creaturedwellings" data-context="true">Types 17-20</a>. <strong>Creature generator</strong><br>
<strong class="erm-legacy-label">Bits 0-28</strong> contain a personal number (from 0 to 536870911) with all parameters <a href="../../receivers/dw/#ref-rec-dw">DW</a>.<br>
<strong class="erm-legacy-label">Bits 29-30</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/efdf82bd945a6de8.png" alt="Type 22. Corpse Bits 0-4: skeleton number (0..31) – SC:N. Bit 5 ignored and usually filled. Bits 6-15: artifact number (0..1023) – SC:A. Bit 16: is there artifa" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t22"></span><a href="../objects/#ref-form-objects" data-context="true">Type 22</a>. <strong>Corpse</strong><br>
<strong class="erm-legacy-label">Bits 0-4</strong>: skeleton number (0..31) – <a href="../../receivers/sk/#ref-rec-sk-n" title="Original Skeleton links say SC; the Skeleton receiver is SK.">SC:N</a>.<br>
<strong class="erm-legacy-label">Bit 5</strong> ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 6-15</strong>: artifact number (0..1023) – <a href="../../receivers/sk/#ref-rec-sk-a" title="Original Skeleton links say SC; the Skeleton receiver is SK.">SC:A</a>.<br>
<strong class="erm-legacy-label">Bit 16</strong>: is there artifact – <a href="../../receivers/sk/#ref-rec-sk-s" title="Original Skeleton links say SC; the Skeleton receiver is SK.">SC:S</a>.<br>
<strong class="erm-legacy-label">Bits 17-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/0237688e6f8182a3.png" alt="Type 23. Marletto Tower Just like Arena, bits 0-4 – number, the rest are ignored and are usually empty. The hero&#x27;s visit to the Marletto Tower is edited by the " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t23"></span><a href="../objects/#ref-form-objects" data-context="true">Type 23</a>. <strong>Marletto Tower</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>, <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty. The hero's visit to the Marletto Tower is edited by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V1</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/54d228cc45ee2857.png" alt="Type 24. Derelict Ship The structure of the control word is completely identical to type 16. It&#x27;s interesting that while it&#x27;s common to visit a decrepit ship an" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t24"></span><a href="../objects/#ref-form-objects" data-context="true">Type 24</a>. <strong>Derelict Ship</strong><br>
The structure of the control word is completely identical to <a href="./#ref-cont-conwords-t16">type 16</a>. It's interesting that while it's common to visit a decrepit ship and give up the battle, after doing so, unlike the creature bank, 
Guards information does not appear in the ship tooltip. And if you set <a href="../../receivers/cb/#ref-rec-cb-v">CB:V</a> on "visited" for the current player, this information will appear.
</div><div><img src="../../../../assets/erm/0520ec5e013dcdf9.png" alt="avsutop0" loading="lazy" decoding="async" class="erm-figure"></div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t25"></span><a href="../objects/#ref-form-objects" data-context="true">Type 25</a>. <strong>Dragon Utopia</strong><br>
And again a complete coincidence with <a href="./#ref-cont-conwords-t16">type 16</a>. You don't have to describe it.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t26"></span><a href="../objects/#ref-form-objects" data-context="true">Type 26</a>. <strong>Event</strong><br>
Event and Pandora's Box are described by one receiver, and I have already described Pandora's Box. We could reference it, but the event has several additional parameters, all of them in the control word.<br>
<strong class="erm-legacy-label">Bits 0-9</strong>: personal number (0..1023). Just like Pandora's box. Matches commands <a href="../../receivers/le/#ref-rec-le">LE</a>:A B C E F G M N O P R S U X.<br>
<strong class="erm-legacy-label">Bits 10-17</strong> contain information about which players CANNOT activate the event (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>) Compliant <a href="../../receivers/le/#ref-rec-le-d">LE:D</a>.<br>
<strong class="erm-legacy-label">Bit 18</strong>: Whether to allow the AI ​​to trigger the event. Compliant <a href="../../receivers/le/#ref-rec-le-i">LE:I</a>.<br>
<strong class="erm-legacy-label">Bit 19</strong>: whether to cancel the event after the first visit. Compliant <a href="../../receivers/le/#ref-rec-le-l">LE:L</a>.<br>
<strong class="erm-legacy-label">Bits 20-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t29"></span><a href="../objects/#ref-form-objects" data-context="true">Type 29</a>. <strong>Flotsam</strong><br>
For this object receiver has not yet been invented.<br><img src="../../../../assets/erm/124dcfa10c2ee6f5.png" alt="Type 29. Flotsam For this object receiver has not yet been invented. Control word Debris can take the following values: 0 – there is nothing, a message is displ" loading="lazy" decoding="async" class="erm-figure">
Control word Debris can take the following values:<br>
0 – there is nothing, a message is displayed that nothing was found.<br>
1 – 5 trees.<br>
2 – 5 wood and 200 gold.<br>
3 – 10 wood and 500 gold.<br>
Other values are not found in the game, and if you set a number greater than 3 (or less than 0), then the debris will disappear without any message or addition of resources. This can be used in ERM if needed, 
so that the object smoothly disappears when selected: take the fragments, give them a different DEF in the editor (patched), set them with a script control word more than 3, for example, 4, give them a different hint, 
and in the trigger for their visit we make the message or action we need. Nothing too complicated. (It should be noted here that the same behavior can be configured for chests with the command <a href="../../receivers/un/#ref-rec-un-b">UN:B</a>. 
But compare the algorithms:<br>
</div><ul>	<li>[change UN:B]→[change type]→[hero visits]→[restore UN:B];</li>
	<li>[change the type and control word (one receiver)]→[hero visits].</li></ul>
The second one is clearly shorter.

<div class="erm-paragraph"><img src="../../../../assets/erm/21fc97d921457a6c.png" alt="Type 30. Fountain of Fortune Again there is no receiver for this type. Since I had not come across anything on this topic, I myself disassembled control word of" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t30"></span><a href="../objects/#ref-form-objects" data-context="true">Type 30</a>. <strong>Fountain of Fortune</strong><br>
Again there is no receiver for this type. Since I had not come across anything on this topic, I myself disassembled control word of this type, and this is what I came up with:<br>
<strong class="erm-legacy-label">Bits 0-4</strong> are ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 5-12</strong> contain information about players' visits (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>). If the player has visited a fountain, a tooltip displays what it does.<br>
<strong class="erm-legacy-label">Bits 13-16</strong>: amount of luck – from -8 to +7.<br>
<strong class="erm-legacy-label">Bits 17-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/303edd7845dc3bde.png" alt="Type 32. Garden of Revelation Just like Arena: bits 0-4 – number, the rest are ignored and are usually empty. Whether hero Garden of Revelation has been visited" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t32"></span><a href="../objects/#ref-form-objects" data-context="true">Type 32</a>. <strong>Garden of Revelation</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty. Whether hero Garden of Revelation has been visited is determined by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V2</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/f29b7b602dd54547.png" alt="Type 33. Garrison Bits 0-25: personal number (0..67108863). All commands correspond to it GR. Bits 26-30 are ignored and are usually empty." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t33"></span><a href="../objects/#ref-form-objects" data-context="true">Type 33</a>. <strong>Garrison</strong><br>
<strong class="erm-legacy-label">Bits 0-25</strong>: personal number (0..67108863). All commands correspond to it <a href="../../receivers/gr/#ref-rec-gr">GR</a>.<br>
<strong class="erm-legacy-label">Bits 26-30</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/1f995c6e7ad10ca4.png" alt="Type 34. Hero Control word contains the hero number. Are taken into account all bits. Unfortunately, you cannot change the hero by changing the number. By placi" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t34"></span><a href="../heroes/#ref-form-numberheroes" data-context="true">Type 34</a>. <strong>Hero</strong><br>
Control word contains the hero number. Are taken into account <strong class="erm-legacy-label">all bits</strong>.<br>
Unfortunately, you cannot change the hero by changing the number. By placing an arbitrary yellow cell with type 34 and control word of a certain hero, we will create a clone of the hero who cannot be controlled, 
and if this cell is another hero, the clone will disappear when it is isolated.<br>
But we can exchange armies with him, even if the real hero is on the other end of the map.<br>
You can also “summon” an enemy or unhired hero and fight him. Moreover, after defeat, clones disappear only visually, but you can fight them again (although they will be neutral, 
and they will have a typical army of a killed hero - 1 creature level 1). And the “original” enemy hero, wherever he is, will also visually disappear (this is because the game does not have graphics for neutral heroes), 
but it will be possible to fight with him. True, unlike a clone, only once.<br>
By creating clones of our heroes, we can achieve their bifurcation: for example, if we create a clone of a hero sitting in the garrison and select it with the mouse (the “helmet” icon), then hero will appear at the entrance to town, 
i.e. in the guest slot while remaining in the garrison. In general, the game is not intended for this kind of experimentation.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/8c6ffb85b7b308ad.png" alt="Type 39. Someone&#x27;s cellar / Lean To Bits 0-4: personal number (0-31). Compliant LN:N. Bit 5 ignored and usually filled. Bits 6-9: quantity of resource (0-15). I" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t39"></span><a href="../objects/#ref-form-objects" data-context="true">Type 39</a>. <strong><strong>Someone's cellar</strong> / Lean To</strong><br>
<strong class="erm-legacy-label">Bits 0-4</strong>: personal number (0-31). Compliant <a href="../../receivers/ln/#ref-rec-ln-n">LN:N</a>.<br>
<strong class="erm-legacy-label">Bit 5</strong> ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 6-9</strong>: quantity of resource (0-15). If 0, the cellar is considered visited. Matches the second parameter <a href="../../receivers/ln/#ref-rec-ln-b">LN:B</a>.<br>
<strong class="erm-legacy-label">Bits 10-13</strong>: resource type (0-15). Matches the first parameter <a href="../../receivers/ln/#ref-rec-ln-b">LN:B</a>. For invalid types, see <a href="./#ref-cont-conwords-t12">Campfire</a>.<br>
<strong class="erm-legacy-label">Bits 14-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/424fc777f39ad48d.png" alt="Type 41. Library of Enlightenment Just like Arena: bits 0-4 – number, the rest are ignored and are usually empty. Whether hero has visited the Library is determ" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t41"></span><a href="../objects/#ref-form-objects" data-context="true">Type 41</a>. <strong>Library of Enlightenment</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty. Whether hero has visited the Library is determined by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V6</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/95da127f363ccd46.png" alt="Type 42. Lighthouse Bits 0-25: personal number (0..67108863). The number refers to the same data area as the Mine, and the Beacon is edited by the commands MN. " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t42"></span><a href="../objects/#ref-form-objects" data-context="true">Type 42</a>. <strong>Lighthouse</strong><br>
<strong class="erm-legacy-label">Bits 0-25</strong>: personal number (0..67108863). The number refers to the same data area as the Mine, and the Beacon is edited by the commands <a href="../../receivers/mn/#ref-rec-mn">MN</a>. 
The resource type for it is 100, but if you put something else, the Lighthouse keeper will start diligently mining this “something”. Guards is ignored. (Thanks for this information <code class="erm-tone-purple erm-strong">sergroj</code>`u.)<br>
<strong class="erm-legacy-label">Bits 26-31</strong> are ignored (as are the guards).</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/8998e813e1280f6d.png" alt="Type 44. Exit monolith Control word represents the monolith number. Each subtype is numbered separately. It is not known what it affects, so it is difficult to " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t44"></span><a href="../one-way-monoliths/#ref-form-one-way-monolith" data-context="true">Type 44</a>. <strong>Exit monolith</strong><br>
Control word represents the monolith number. Each subtype is numbered separately. It is not known what it affects, so it is difficult to determine how many bits are used. 
The only thing that is clear is that if you set -1, the monolith stops working. For all other values ​​it works. This leads to the assumption that all bits are read.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/f30796cf63b01291.gif" alt="Type 45. Double-sided monolith Again, control word is a personal number with separate numbering of subtypes. Are taken into account all bits. The purpose of the" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t45"></span><a href="../two-way-monoliths/#ref-form-two-way-monolith" data-context="true">Type 45</a>. <strong>Double-sided monolith</strong><br>
Again, control word is a personal number with separate numbering of subtypes. Are taken into account <strong class="erm-legacy-label">all bits</strong>. The purpose of the number in the game is to prevent the monolith from teleporting into itself. 
Thus, if you give two monoliths the same number, they will not teleport into each other.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/84b3c6f9903ac7b7.png" alt="Type 47. School of Magic Just like Arena: bits 0-4 – number, the rest are ignored and are usually empty. Whether hero visited the School of Magic is determined " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t47"></span><a href="../objects/#ref-form-objects" data-context="true">Type 47</a>. <strong>School of Magic</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty.<br>
Whether hero visited the School of Magic is determined by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V8</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t48"></span><a href="../objects/#ref-form-objects" data-context="true">Type 48</a>. <strong>Magic Spring</strong><br><img src="../../../../assets/erm/a5df2be0a0679eea.png" alt="Type 48. Magic Spring Bits 0-4: source number (0..31) – SP:N. Why it is needed is unclear. Bit 5 ignored and usually filled. Bit 6: visited (1) or not (0) – SP:" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-4</strong>: source number (0..31) – <a href="../../receivers/sp/#ref-rec-sp-n">SP:N</a>. Why it is needed is unclear.<br>
<strong class="erm-legacy-label">Bit 5</strong> ignored and usually filled.<br>
<strong class="erm-legacy-label">Bit 6</strong>: visited (1) or not (0) – <a href="../../receivers/sp/#ref-rec-sp-s">SP:S</a>.<br>
<strong class="erm-legacy-label">Bits 7-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/c866a86ce59e1abf.png" alt="Type 51. Mercenary Camp Just like Arena: bits 0-4 – number, the rest are ignored and are usually empty. Whether hero visited the Camp is determined by the command " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t51"></span><a href="../objects/#ref-form-objects" data-context="true">Type 51</a>. <strong>Mercenary Camp</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty. Whether hero visited the Camp is determined by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V3</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/ab197513f5a6c9a4.png" alt="Type 53. Mine Bits 0-25: personal number (0..67108863) with all commands MN. Please note that the Mines are numbered in parallel with Lighthouses, as one type. " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t53"></span><a href="../mines/#ref-form-mines" data-context="true">Type 53</a>. <strong>Mine</strong><br>
<strong class="erm-legacy-label">Bits 0-25</strong>: personal number (0..67108863) with all commands <a href="../../receivers/mn/#ref-rec-mn">MN</a>. Please note that the Mines are numbered in parallel with <a href="./#ref-cont-conwords-t42">Lighthouses</a>, as one type.<br>
<strong class="erm-legacy-label">Bits 26-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t54"></span><a href="../creatures/#ref-form-creature" data-context="true">Type 54</a>. <strong>Creature</strong><br>
<strong class="erm-legacy-label">Bits 0-11</strong>: number of creatures (0..4095) – <a href="../../receivers/mo/#ref-rec-mo-g">MO:G</a>. 
Interestingly, if you set the value to 4095, when you click <span class="erm-anchor" id="ref-cont-conwords-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> a proposal appears to remove this stack from the map, because it is too large.<br>
<strong class="erm-legacy-label">Bits 12-15</strong>: probability of a creature not joining in tens of % (0..10) – <a href="../../receivers/mo/#ref-rec-mo-r">MO:R</a> with 2 parameters; if more than 10 – the same as 10.<br>
<strong class="erm-legacy-label">Bit 16</strong>: will creature join – <a href="../../receivers/mo/#ref-rec-mo-r">MO:R</a> with 1 parameter (and inverted); if empty, join with probability applies (previous point).<br>
<strong class="erm-legacy-label">Bit 17</strong>: if full, creature never escapes – <a href="../../receivers/mo/#ref-rec-mo-u">MO:U</a>.<br>
<strong class="erm-legacy-label">Bit 18</strong>: the number of creatures does not increase – <a href="../../receivers/mo/#ref-rec-mo-o">MO:O</a>.<br>
<strong class="erm-legacy-label">Bits 19-26</strong>: personal number (0..255) with commands <a href="../../receivers/mo/#ref-rec-mo">MO</a>:A B M.<br>
<strong class="erm-legacy-label">Bits 27-30</strong> are ignored and are usually empty.<br>
<strong class="erm-legacy-label">Bit 31</strong>: is there a number? Similarly with an artifact, if there is no artifact, resource, or message, the number is not set. Then <a href="../../receivers/mo/#ref-rec-mo">MO</a>:A B M don't work. 
This is also mentioned in the description <a href="../../receivers/mo/#ref-rec-mo">receiver MO</a>, and checking for negativity is also appropriate here.<br>
The creature type is specified in the object's subtype.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t55"></span><a href="../objects/#ref-form-objects" data-context="true">Type 55</a>. <strong>Mystical Garden</strong><br><img src="../../../../assets/erm/237e5338f415d321.png" alt="Type 55. Mystical Garden Bits 0-4: personal number (0..31) – GD:N. Bit 5 ignored and usually filled. Bits 6-9: bonus resource type (0..15) – GD:B. If you put 8." loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-4</strong>: personal number (0..31) – <a href="../../receivers/gd/#ref-rec-gd-n">GD:N</a>.<br>
<strong class="erm-legacy-label">Bit 5</strong> ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 6-9</strong>: bonus resource type (0..15) – <a href="../../receivers/gd/#ref-rec-gd-b">GD:B</a>. If you put 8..15, the game crashes.<br>
<strong class="erm-legacy-label">Bit 10</strong>: is there a bonus – <a href="../../receivers/gd/#ref-rec-gd-t">GD:T</a>.<br>

<!-- llm:end erm.tables.object-control-words 2 -->

