---
{"title":"Hero structure fields","summary":"Hex offsets relative to a structure pointer in the legacy WoG snapshot. This describes a layout, not universal UN:C addresses. Unidentified fields are not an API. Verify structure size and layout in the target build.","translationStatus":"reviewed"}
---

## Hero Structure {#ref-form-advhero}

:::erm
<section class="erm-reference" lang="en">
<div>
<div>
<div class="erm-align-left erm-paragraph">
<span class="erm-source-title">Hero structure on the adventure map</span></div>
<div class="erm-paragraph">   <span class="erm-anchor" id="ref-form-advhero-wt"></span><code class="erm-legacy-label">HEX converter:</code> <span class="erm-anchor" id="ref-form-advhero-inputhex"></span><input class="erm-radix-input" data-erm-radix="16" type="text" value="" inputmode="text" aria-label="Enter the hex value of the offset you need.." title="Enter the hex value of the offset you need..">
<span class="erm-anchor" id="ref-form-advhero-inputdec"></span><output class="erm-radix-result" aria-label="The decimal value of the offset you specified" title="The decimal value of the offset you specified"></output></div>
<span class="erm-anchor" id="ref-form-advhero-q1"></span><div class="erm-tone-quote erm-note">All offsets are specified in hex notation.</div></div>

<div>
<pre>   // <span class="erm-anchor" id="ref-form-advhero-dred"></span><strong class="erm-tone-red">+00</strong> dw = X coordinate
   // <strong class="erm-tone-red">+02</strong> dw = Y coordinate
   // <strong class="erm-tone-red">+04</strong> dw = L level, high part Y (Y&lt;&lt;2&gt;&gt;C)
   // <strong class="erm-tone-red">+06</strong> db = 1: present on map (out of focus or not active)
<small>Byte  _u1[17];</small>
<small>Dword MapItemXYZ[4];</small>
   // <strong class="erm-tone-red">+07</strong> db = X
   // <strong class="erm-tone-red">+08</strong> db = (?) garbage (to X)
   // <strong class="erm-tone-red">+09</strong> db = Y
   // <strong class="erm-tone-red">+0A</strong> db = L(?) garbage (to Y)
   // <strong class="erm-tone-red">+0B</strong> db = ?
<small>Byte  _u1;</small>
   // <strong class="erm-tone-red">+0C</strong> dd - the type of object on which hero stands
<small>PlOType;</small> // dd +1E from card
   // <strong class="erm-tone-red">+10</strong> db - busy bit in surface flags (0x0C)
<small>Pl0Cflag;</small> // this bit means that there is/was an entry point here (yellow cell)
   // <strong class="erm-tone-red">+14</strong> dd - Control word of the object on which hero stands
<small>PlSetUp;</small> // dd +0 from card
   // <strong class="erm-tone-red">+18</strong> dw = spell points
   // <strong class="erm-tone-red">+1A</strong> dd = subtype number (specific hero)
<small>_unk_Id;</small> // <strong class="erm-tone-red">+1E</strong> dd = ??? Id
   // <strong class="erm-tone-red">+22</strong> db = host (player color)
<small>char   Name[13];</small> // <strong class="erm-tone-red">+23</strong> db*D = hero name
   // <strong class="erm-tone-red">+30</strong> dd = <span class="erm-anchor" id="ref-form-advhero-5"></span><details class="erm-comment"><summary>class</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-form-advhero-t0"></span><blockquote class="erm-margin-top-zero erm-note">
str[8] str=(*[<em class="erm-tone-purple erm-legacy-event">67CD08</em>])[subtype number *5C]
// 00000001 - 0x00 Knight 
// 00000002 - 0x01 Cleric 
// 00000004 - 0x02 Ranger 
// 00000008 - 0x03 Druid 
// 00000010 - 0x04 Alchemist 
// 00000020 - 0x05 Wizard 
// 00000040 - 0x06 Demoniac 
// 00000080 - 0x07 Heretic 
// 00000100 - 0x08 Death Knight 
// 00000200 - 0x09 Necromancer 
// 00000400 - 0x0A Warlock 
// 00000800 - 0x0B Overlord 
// 00001000 - 0x0C Barbarian 
// 00002000 - 0x0D Battle Mage 
// 00004000 - 0x0E Beastmaster 
// 00008000 - 0x0F Witch 
// 00010000 - 0x10 Planeswalker 
// 00020000 - 0x11 Elementalist 
// 00040000 - 0x12 sprite boats (external only, cannot swim)</blockquote></div></details>
   // <strong class="erm-tone-red">+34</strong> db = portrait picture number (0..156)
   // <strong class="erm-tone-red">+35</strong> db = intended coord. X where to run
   // <strong class="erm-tone-red">+39</strong> db = intended coord. Y where to run
   // <strong class="erm-tone-red">+3D</strong> db = level on the map where the travel path is planned
<small>Byte  _u2[15];</small>
   // <strong class="erm-tone-red">+3E</strong> db - ??? <em class="erm-tone-purple erm-legacy-event">4E3BB5</em> - used to calculate Luck
   // <strong class="erm-tone-red">+44</strong> db = base X for patrol (FF = unlimited)
   // <strong class="erm-tone-red">+45</strong> db = base Y for patrol (FF = unlimited)
   // <strong class="erm-tone-red">+46</strong> db = patrol radius (FF = unlimited)
   // <strong class="erm-tone-red">+47</strong> db = ???
   // <strong class="erm-tone-red">+48</strong> 8*bb  (<em class="erm-tone-purple erm-legacy-event">463253</em>)<span class="erm-anchor" id="ref-form-advhero-4"></span><details class="erm-comment"><summary>flags</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
// 01 - type of unit grouping
// 02 - tactics allowed for the hero</blockquote></div></details>
   // <strong class="erm-tone-red">+49</strong> dd = full initial movement
   // <strong class="erm-tone-red">+4D</strong> dd = remaining movements
   // <strong class="erm-tone-red">+51</strong> dd = experience
   // <strong class="erm-tone-red">+55</strong> dw = level
<small>Visited[10];</small> //  (like <a href="../../receivers/he/#ref-rec-he-v">HE:V</a>)<span class="erm-anchor" id="ref-form-advhero-3"></span><details class="erm-comment"><summary>Site visit flags</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
// * bitfields of 32 visited object types per hero
// <strong class="erm-tone-red">+57</strong> dd Stone of Knowledge (1=visited, 2=not)
// <strong class="erm-tone-red">+5B</strong> dd Marletto Tower
// <strong class="erm-tone-red">+5F</strong> dd Garden of Revelation
// <strong class="erm-tone-red">+63</strong> dd Mercenary Camp
// <strong class="erm-tone-red">+67</strong> dd Star Axis
// <strong class="erm-tone-red">+6B</strong> dd Tree of Knowledge
// <strong class="erm-tone-red">+6F</strong> dd Library of Education
// <strong class="erm-tone-red">+73</strong> dd Arena
// <strong class="erm-tone-red">+77</strong> dd School of Magic
// <strong class="erm-tone-red">+7B</strong> dd School of War</blockquote></div></details>
<small>_u4[18];</small> // <strong class="erm-tone-red">+7F</strong> db
<small>int   Ct[7];</small> // <strong class="erm-tone-red">+91</strong> dd*7 = creature type (-1 = none)
<small>int   Cn[7];</small> // <strong class="erm-tone-red">+AD</strong> dd*7 = quantity
<small>SSkill[28];</small> // <strong class="erm-tone-red">+C9</strong> db*1C = 
   //one byte = level of this skill: 1,2,3; 0=no<span class="erm-anchor" id="ref-form-advhero-1"></span><details class="erm-comment"><summary>secondary skill level</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
// <strong class="erm-tone-red">+C9</strong> = Pathfinding
// <strong class="erm-tone-red">+CA</strong> = Archery
// <strong class="erm-tone-red">+CB</strong> = Logistics
// <strong class="erm-tone-red">+CC</strong> = Scouting
// <strong class="erm-tone-red">+CD</strong> = Diplomacy
// <strong class="erm-tone-red">+CE</strong> = Navigation
// <strong class="erm-tone-red">+CF</strong> = Leadership
// <strong class="erm-tone-red">+D0</strong> = Wisdom
// <strong class="erm-tone-red">+D1</strong> = Mysticism
// <strong class="erm-tone-red">+D2</strong> = Luck
// <strong class="erm-tone-red">+D3</strong> = Ballistics
// <strong class="erm-tone-red">+D4</strong> = Eagle Eye
// <strong class="erm-tone-red">+D5</strong> = Necromancy
// <strong class="erm-tone-red">+D6</strong> = Estates
// <strong class="erm-tone-red">+D7</strong> = Fire Magic
// <strong class="erm-tone-red">+D8</strong> = Air Magic
// <strong class="erm-tone-red">+D9</strong> = Water Magic
// <strong class="erm-tone-red">+DA</strong> = Earth Magic
// <strong class="erm-tone-red">+DB</strong> = Scholar
// <strong class="erm-tone-red">+DC</strong> = Tactics
// <strong class="erm-tone-red">+DD</strong> = Artillery
// <strong class="erm-tone-red">+DE</strong> = Learning
// <strong class="erm-tone-red">+DF</strong> = Offence
// <strong class="erm-tone-red">+E0</strong> = Armorer
// <strong class="erm-tone-red">+E1</strong> = Intelligence
// <strong class="erm-tone-red">+E2</strong> = Sorcery
// <strong class="erm-tone-red">+E3</strong> = Resistance
// <strong class="erm-tone-red">+E4</strong> = First Aid</blockquote></div></details>
<small>SShow[28];</small> // <strong class="erm-tone-red">+E5</strong> db*1C = order of display of secondary skills in the hero window (1,2,3,4,5,6)
   // <strong class="erm-tone-red">+101</strong> dd = number of secondary skills
<small>RefData1;</small> // <strong class="erm-tone-red">+105</strong> db <em class="erm-tone-purple erm-legacy-event">4814D3</em> + …
<small>RefData2;</small> // <strong class="erm-tone-red">+107</strong> db <em class="erm-tone-purple erm-legacy-event">4DA466</em>
   // <strong class="erm-tone-red">+105</strong> dd  (<a href="../../receivers/he/#ref-rec-he-r7">HE:R7</a>)<span class="erm-anchor" id="ref-form-advhero-2"></span><details class="erm-comment"><summary>temporary morale modifiers</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
// start init. when hiring 0xFFF9FFFF
// 00000001 - 0x00 Magic well
// 00000002 - 0x01 Stables
// 00000004 - 0x02 Buoy
// 00000008 - 0x03 Swan Pond
// 00000010 - 0x04 Idol of luck (days 1..6)
// 00000020 - 0x05 Fountain of Fortune (-1 luck)
// 00000040 - 0x06 Whirlpool
// 00000080 - 0x07 Oasis
// 00000100 - 0x08 Temple (days 1..6)
// 00000200 - 0x09 Shipwreck
// 00000400 - 0x0A Crypt
// 00000800 - 0x0B Derelict Ship
// 00001000 - 0x0C Pyramid
// 00002000 - 0x0D Faerie Ring
// 00004000 - 0x0E Fountain of Youth
// 00008000 - 0x0F Mermaid
// 00010000 - 0x10 Battle flag
// 00020000 - 0x11 ?
// 00040000 - 0x12 In a boat (hero on the water)
// 00080000 - 0x13 ?
// 00100000 - 0x14 Sirens
// 00200000 - 0x15 Warrior's Tomb
// 00400000 - 0x16 Maximum luck (as <a href="../../receivers/he/#ref-rec-he-r6">HE:R6</a>)
// 00800000 - 0x17 Maximum morality (as <a href="../../receivers/he/#ref-rec-he-r5">HE:R5</a>)
// 01000000 - 0x18 WOGSHADOWFAX (cheat code for 1 million turn points)
// 02000000 - 0x19 Idol of Fortune (day 7)
// 04000000 - 0x1A Temple (day 7)
// 08000000 - 0x1B Fountain of Fortune (+1 luck)
// 10000000 - 0x1C Fountain of Fortune (+2 luck)
// 20000000 - 0x1D Fountain of Fortune (+3 luck)
// 40000000 - 0x1E ?
// 80000000 - 0x1F ?</blockquote></div></details>
<small>Byte  _u6[9];</small> // <strong class="erm-tone-red">+109</strong>
   // <strong class="erm-tone-red">+10D</strong> db = how many times this day he cast Dimension Door
   // <strong class="erm-tone-red">+10E</strong> dd = strength with which Disguise is cast (0..3), -1 = not active
   // <strong class="erm-tone-red">+112</strong> dd = strength with which Fly is cast (0..3), -1 = not active
   // <strong class="erm-tone-red">+116</strong> dd = power with which Water Walk is cast (0..3), -1 = not active
   // <strong class="erm-tone-red">+11A</strong> db - morale modifications until the next battle (oasis), accumulate
   // <strong class="erm-tone-red">+11B</strong> db - modified luck until next battle
   // <strong class="erm-tone-red">+11C</strong> db = 1, hero SLEEP
   // <strong class="erm-tone-red">+129</strong> dd = power with which the Vision is cast (0..3), -1 = not active
<small>int   IArt[19][2];</small> // <strong class="erm-tone-red">+12D</strong> dd*2*13h = artifacts dd-number, dd-order number (or -1) (book 3,FF)
<small>FreeAddSlots;</small> // <strong class="erm-tone-red">+1C5</strong> db = number of empty add. slots on the left
<small>char  LockedSlot[14];</small> // <strong class="erm-tone-red">+1C6</strong>
<small>int   OArt[64][2];</small> // <strong class="erm-tone-red">+1D4</strong> dd*2*4 = art in the backpack dd-number, dd-order number (or -1)
<small>Byte    OANum;</small> // <strong class="erm-tone-red">+3D4</strong> db = number of artifacts in the backpack
   // <strong class="erm-tone-red">+3D5</strong> dd = gender (as <a href="../../receivers/he/#ref-rec-he-r2">HE:R2</a>)
   // <strong class="erm-tone-red">+3D9</strong> db = bio configured
   // <strong class="erm-tone-red">+3DA</strong> dd → biography
<small>Byte  _u7[12];</small> // <strong class="erm-tone-red">+3DE</strong>
<small>Spell[70];</small> // <strong class="erm-tone-red">+3EA</strong> db*46 = spell (yes/no)
<small>LSpell[70];</small> // <strong class="erm-tone-red">+430</strong> db*46 = spell level (&gt;=1)
<small>char   PSkill[4];</small>
   // <strong class="erm-tone-red">+476</strong> db = Attack
   // <strong class="erm-tone-red">+477</strong> db = Protection
   // <strong class="erm-tone-red">+478</strong> db = Magic Power
   // <strong class="erm-tone-red">+479</strong> db = Knowledge
<small>Byte  _u8[24];</small> // <strong class="erm-tone-red">+47A</strong> * AI stuff</pre>



</div></div>
</section>
:::

## Purpose {#meaning}

Hex offsets relative to a structure pointer in the legacy WoG snapshot. This describes a layout, not universal UN:C addresses. Unidentified fields are not an API. Verify structure size and layout in the target build.

## Values {#values}

| Hex | Bytes | Field |
| --- | --- | --- |
| `00` {#offset-00} | 2 | X coordinate |
| `02` {#offset-02} | 2 | Y coordinate |
| `0C` {#offset-0c} | 4 | Object type beneath the hero |
| `14` {#offset-14} | 4 | Object control word |
| `18` {#offset-18} | 2 | Spell points |
| `1A` {#offset-1a} | 4 | Hero ID |
| `22` {#offset-22} | 1 | Owner |
| `23` {#offset-23} | 13 | Hero name |
| `30` {#offset-30} | 4 | Class |
| `34` {#offset-34} | 1 | Portrait |
| `44` {#offset-44} | 1 | Patrol origin X |
| `45` {#offset-45} | 1 | Patrol origin Y |
| `46` {#offset-46} | 1 | Patrol radius |
| `49` {#offset-49} | 4 | Initial movement points |
| `4D` {#offset-4d} | 4 | Remaining movement points |
| `51` {#offset-51} | 4 | Experience |
| `55` {#offset-55} | 2 | Level |
| `57` {#offset-57} | 4 × 10 | HE:V visit flags |
| `91` {#offset-91} | 4 × 7 | Army creature IDs |
| `AD` {#offset-ad} | 4 × 7 | Army creature counts |
| `C9` {#offset-c9} | 1 × 28 | Secondary skill levels |
| `E5` {#offset-e5} | 1 × 28 | Secondary skill display order |
| `101` {#offset-101} | 4 | Secondary skill count |
| `105` {#offset-105} | 4 | HE:R7 temporary flags |
| `10D` {#offset-10d} | 1 | Dimension Door casts today |
| `10E` {#offset-10e} | 4 | Disguise, −1 inactive |
| `112` {#offset-112} | 4 | Fly, −1 inactive |
| `116` {#offset-116} | 4 | Water Walk, −1 inactive |
| `11A` {#offset-11a} | 1 | Temporary morale |
| `11B` {#offset-11b} | 1 | Temporary luck |
| `11C` {#offset-11c} | 1 | Sleeping hero |
| `129` {#offset-129} | 4 | Visions, −1 inactive |
| `12D` {#offset-12d} | 8 × 19 | Equipped artifacts: ID and scroll spell |
| `1C5` {#offset-1c5} | 1 | Free additional slots |
| `1C6` {#offset-1c6} | 14 | Locked slots |
| `1D4` {#offset-1d4} | 8 × 64 | Backpack: artifact ID and scroll spell |
| `3D4` {#offset-3d4} | 1 | Backpack artifact count |
| `3D5` {#offset-3d5} | 4 | Hero gender |
| `3D9` {#offset-3d9} | 1 | Custom biography flag |
| `3DA` {#offset-3da} | 4 | Biography pointer |
| `3EA` {#offset-3ea} | 1 × 70 | Learned spell flags |
| `430` {#offset-430} | 1 × 70 | Spell availability |
| `476` {#offset-476} | 1 × 4 | Attack, defense, spell power, knowledge |

## Related commands and tables {#related}

[HE](../../receivers/he/) · [All tables](../)

## Related commands and tables {#reference-links}

[Heroes (HE)](../../receivers/he/#command-v-v) · [Heroes (HE)](../../receivers/he/) · [Heroes (HE)](../../receivers/he/#command-a) · [Heroes (HE)](../../receivers/he/#command-b0-b1-b2-b3) · [Heroes (HE)](../../receivers/he/#command-c-experience-modes) · [Heroes (HE)](../../receivers/he/#command-c2-c-1-14-d) · [Heroes (HE)](../../receivers/he/#command-e-2-1-f-1-2-3-4-1) · [Heroes (HE)](../../receivers/he/#command-g-w-1-i-1) · [Heroes (HE)](../../receivers/he/#command-h-1-2-3) · [Heroes (HE)](../../receivers/he/#command-k-k1) · [Heroes (HE)](../../receivers/he/#command-l1-file-l2-file-l0-l3-l4-l5-1-2) · [Heroes (HE)](../../receivers/he/#command-m-m-1) · [Heroes (HE)](../../receivers/he/#command-n-o-1-p-1-2-3-4) · [Heroes (HE)](../../receivers/he/#command-r-refresh) · [Heroes (HE)](../../receivers/he/#command-s-s-s-1-2-1) · [Heroes (HE)](../../receivers/he/#command-t-1-2-3-4-5-u-1-2-3) · [Heroes (HE)](../../receivers/he/#command-x-2-3-4-5-6-7) · [Heroes (HE)](../../receivers/he/#command-y-1-2-3-4-z) · [Game object table](../objects/) · [Hero table](../heroes/) · [Visiting a hero (HE)](../../triggers/he/) · [Artifact table](../artifacts/) · [Heroes (HE)](../../receivers/he/#command-a2-1-2-a3-a4) · [Artifact slots](../artifact-slots/) · [Variables, strings and arrays](../../variables/) · [Hero classes](../hero-classes/) · [Town types](../towns/) · [ERM debugging and compatibility](../../compatibility/) · [Creature table](../creatures/) · [Repeated function calls (DO)](../../receivers/do/) · [Hero experience thresholds](../hero-levels/) · [Spell table](../spells/) · [Player colors](../players/) · [Players (OW)](../../receivers/ow/#command-h-h) · [Battle configuration (BA)](../../receivers/ba/#command-o-1-2) · [Hero visits and bits](../hero-visits/) · [Secondary skills](../secondary-skills/) · [General game operations (UN)](../../receivers/un/#command-cbase-size-cbase-offset-size) · [Spell attributes (SS)](../../receivers/ss/) · [Bits, masks and hexadecimal](../bits/) · [Resources](../resources/) · [Hero blessings and curses](../blessings/)
