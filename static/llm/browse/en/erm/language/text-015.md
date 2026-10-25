# UN:C — memory access

ID: erm.un-c
URL: /en/erm/un-c/
Part: 3/3
Source references: old-help:cont-unc.htm, old-help:cont-unc-lib.htm, erm-forum:un-c-page-1.html, era-changelog:era-iii-changelog.txt, era-source:erm.pas
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.un-c 3 -->
<pre class="erm-example"><code class="language-erm">;** The value to which the Literacy skill is added to determine the level of spells to learn
;** (at skill level 3 you can learn level 4 spells)
!!UN:C4859491/1/1;
;** Number of the creature resurrected from corpses by the PitLords (48 - Demoniac)
;** The number of summoned creatures does not depend on their health
!!UN:C5928811/1/48;</code></pre>
<pre class="erm-example"><code class="language-erm">; The power of resurrection of Archangels.
!!UN:C4485241/1/3 C4489947/1/3 C5932992/1/3 C4485546/1/3;
1 = 50 hp
2 = 100 hp
3 = 200 hp
4 = 400 hp</code></pre>
</div><h4>Chance of abilities triggering</h4>
<pre class="erm-example"><code class="language-erm">;** Chance of triggering Old Age on a phantom dragon (out of 100)
!!UN:C4457044/1/100; 100 upper range
!!UN:C4457049/1/1; 1 lower range
!!UN:C4457060/1/20; 20 chance
;** Acid Breath of Rusty Dragon (out of 100)
!!UN:C4461006/1/100; 100 upper range
!!UN:C4461011/1/1; 1 lower range
!!UN:C4461022/1/20; 20 chance
;** Double damage of the Death Knight (out of 100)
!!UN:C4470496/1/20; 20 chance
;** Chance of triggering Disease for Zombie (out of 100)
!!UN:C4457161/1/100; 100 upper range
!!UN:C4457166/1/1; 1 lower range
!!UN:C4457177/1/100; 20
;** Chance of triggering Blind on Unicorns and Diamond Dragons (out of 100)
!!UN:C4457262/1/100; 100 upper range
!!UN:C4457267/1/1; 1 lower range
!!UN:C4457278/1/100; 20
;**Chance of triggering Petrification on Medusas, Basilisks and Barons of Hell (out of 100)
!!UN:C4457623/1/100; 100 upper range
!!UN:C4457628/1/1; 1 lower range
!!UN:C4457639/1/100; 20
;** Chance of Poison triggering on Wyvern Monarchs (out of 100) mummy?
!!UN:C4457808/1/100; 100 upper range
!!UN:C4457813/1/1; 1 lower range
!!UN:C4457824/1/100; 30
;** Chance of Paralysis triggering for Skorpicor (out of 100)
!!UN:C4457921/1/100; 100 upper range
!!UN:C4457926/1/1; 1 lower range
!!UN:C4457937/1/100; 20</code></pre></div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-spel"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-7"></span><details class="erm-comment"><summary>Spells</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!UN:C5901022/4/y1; force field duration
!!UN:C5901337/4/y1; fire wall duration
!!UN:C4474421/4/y1; Duration of disruptive ray, berserk and roots (default 255)
!!UN:C4474421/4/3; set the duration of disruptive ray, berserk and roots to 3 turns
; Berserk duration is equal to spell power
!!VRv1:S4477144 +59 -47; berserker address (spell 59)
!!UN:Cv1/1/2; Berserk duration is equal to spell power
; MP consumption when casting Town Portal
!!UN:C4314399/4/300; Earth School Level 1-2
!!UN:C4314420/4/200; Earth Expert
!!UN:C4314836/1/2; Earth magic level at which hero can select town using GPU
; MP consumption when casting Dimension Door
!!UN:C4314143/4/200; School of Air expert
!!UN:C4314140 /1/100; Additional 100 points if not an expert
;** Berserker radius at 0\0\1\2 fire magic skill level
;** with a value higher than 2 there will be graphical glitches + only triggers when pointing at a target
!!UN:C6562420/1/0;
!!UN:C6562424/1/0;
!!UN:C6562428/1/1;
!!UN:C6562432/1/2;</code></pre>
<h4>Setting transparency for spell animations</h4>
<pre class="erm-example"><code class="language-erm">!!UN:C4454270/4/?y1;	table address
!!VRy2:S&lt;spell number&gt; *12 +9;
; EXAMPLE: &lt;67&gt; - number of the POISON spell (see numbers in the description at BM:V)
!!VRy1:Sy1 +y2;
!!UN:Cy1/1/&lt;transparency flag&gt;;	transparency flag (set &lt;1&gt;, remove &lt;0&gt;)</code></pre>
</div></details></li>

<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-arts"></span></div><span class="erm-anchor" id="ref-cont-unc-lib-8"></span><details class="erm-comment"><summary>Artifacts</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; + to the rounds the duration of the bet
!!UN:C5132392/4/1; magic necklace (+1)
!!UN:C5132455/4/2; magic ring (+2)
!!UN:C5132517/4/3; magic cape (+3)
!!UN:C5132581/4/50; mage ring (+50)
; Titan Rumble
!!UN:C5085076/1/57; its spell (57)
; Cloak of the Undead King
!!UN:C5127994/4/56; skeleton (56) without nav. Witchcraft
!!UN:C5127987/4/58; living dead (58) for bases. Witchcraft
!!UN:C5127978/4/60; guardian (60) for advanced Sorcery
!!UN:C5127967/4/64; lich (64) for exp Sorcery
; Angelic Alliance (autocast spell)
!!UN:C4607960/1/48; prayer (48)
!!UN:C4607983/1/48; prayer (48)
!!UN:C4607973/1/48; duration in rounds (10)
; Armor of the Damned (autocast spell)
!!UN:C4608025/1/54 C4608048/1/54 C4608038/1/50; Slowness (54)
!!UN:C4608070/1/42 C4608093/1/42 C4608083/1/50; Curse (42)
!!UN:C4608115/1/45 C4608138/1/45 C4608128/1/50; Weakness (45)
!!UN:C4608160/1/52 C4608183/1/52 C4608173/1/50; Misfortune (52)</code></pre>
<pre class="erm-example"><code class="language-erm">; Get hero structure in v1
!!SN:E7411341/1/[hero number];
; checking whether the art is worn: returns (v1 = 0...1)
!!SN:E5084256/2/[hero structure]/[artifact];
; delete artifact in a specific slot
!!SN:E5123648/2/[hero structure]/[slot];</code></pre>
<pre class="erm-example"><code class="language-erm">; get/change the name and description of an artifact
!!UN:C6687592/4/?y2; [link to artifact table]
!!VRy3:S[art number] *32 +y2 (+16); [+16 - to describe the artifact]
!!UN:Cy3/4/?y1; [y1 - link address to title (description)]</code></pre>
</div></details></li></ul>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-unc-lib-links"></span>Also, even more ready-made solutions using UN:C are available on the Internet. The following sites are worth noting:
</div><ul>
<li><div class="erm-paragraph"></div><span class="erm-anchor" id="ref-cont-unc-lib-20"></span><details class="erm-comment"><summary><strong>WoG forum</strong> (<span class="erm-anchor" id="ref-cont-unc-lib-show20"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
♢ <a href="http://wforum.heroes35.net/showthread.php?tid=5118">Topic on UN:C</a> (the basis of the article is taken from here)<br>
♢ <a href="http://wforum.heroes35.net/showthread.php?tid=5972">Complex scripts</a> (directory)<br>
♢ <a href="http://wforum.heroes35.net/showthread.php?tid=4734">Collection of ready-made scripts</a> (in English)
</div></details>
</li>
<li><div class="erm-paragraph"></div><span class="erm-anchor" id="ref-cont-unc-lib-21"></span><details class="erm-comment"><summary><strong>DF2 Forum</strong> (<span class="erm-anchor" id="ref-cont-unc-lib-show21"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
♢ <a href="http://forum.df2.ru/index.php?showtopic=6813&amp;st=20">Topic on UN:C</a><br>
♢ <a href="http://forum.df2.ru/index.php?showtopic=34685">Hooks for executable code</a><br>
♢ <a href="http://forum.df2.ru/index.php?showtopic=6803">Engineering Analysis</a></div></details></li>
</ul>








</div>
</div>
</section>
:::

## Command contract {#contract}

`!!UN:Cbase/size/$;` and `!!UN:Cbase/offset/size/$;` read or write memory. `?variable` reads; a value writes. Standard widths are 1, 2 and 4 bytes. An address identifies a byte; width determines how many adjacent bytes are affected. Do not overwrite an adjacent field incidentally.

## Static base and dynamic pointer {#pointers}

An EXE location may contain a pointer rather than the structure itself. Read the pointer, check it is nonzero and that the game context is appropriate, then access the offset. ERA applies GetRealAddr to the base: pass the original base and offset separately for relocated blocks. A nonzero pointer alone does not prove correct type or lifetime.

## Applying and restoring changes {#lifecycle}

Apply constant patches in OnGameEnter. Modern ERA fixes the network cycle: OnGameLeave → OnSavegameRead → OnAfterLoadGame → OnGameEnter. Hook installation this way was unreliable in network games before ERA 3.9.14. Dynamic structures have different persistence from code patches: map changes or loads may recreate them. Save the original value before writing and own only your change; do not restore over a newer third-party patch.

## Recipes {#recipes}

- [Resolution](./screen-size/)
- [Projectile type](./projectile-type/)
- [Beam color](./beam-color/)
- [Grail](./grail-coordinates/)
- [Combat spell power](./battle-spell-power/)
- [Building cost](./town-building-cost/)
- [Commander structure](./commander-structure/)

## Example status {#review}

Cards are rewritten historical recipes with attribution and source-based address-logic checks. Execution in a particular game build has not been tested. An address table is not a compatibility guarantee. If HE, BM, CO, CA or a Framework helper solves the task, use that contract before direct writes.

## Related commands and tables {#reference-links}

[General game operations (UN)](../receivers/un/#command-cbase-size-cbase-offset-size) · [ERM debugging and compatibility](../compatibility/) · [ERA services, memory and sound (SN)](../receivers/sn/#command-eaddress-convention-args) · [ERM triggers and events](../triggers/) · [Bits, masks and hexadecimal](../tables/bits/) · [Commander structure](commander-structure/) · [Projectiles and beams](../tables/projectiles/)

<!-- llm:end erm.un-c 3 -->

# Spell power inside combat

ID: erm.un-c.battle-spell-power
URL: /en/erm/un-c/battle-spell-power/
Part: 1/1
Source references: erm-forum:un-c-page-3.html, erm-forum:un-c-page-4.html, era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.un-c.battle-spell-power 1 -->
## Purpose and applicability {#purpose}

Attacker and defender spell-power fields live in the combat manager. This example reads them without changing permanent hero skills.

## Code {#code}

```erm
!?FU(MyMod_ReadBattleSpellPower);
!#VA(attacker:x) (defender:x);
!!UN:C6919200/4/?(combat:y);
!!FU&(combat)=0:E;
!!UN:C(combat)/21460/4/?(attacker);
!!UN:C(combat)/21464/4/?(defender);
```

## Version and limitations {#limits}

The address is supported by a historical recipe for h3wog.exe-based WoG/ERA. It has not been executed in the installed game and is not guaranteed for another EXE or plugin. Validate the build and original bytes before use; executable patches can survive map changes. Requires an existing actual-combat manager. Temporary combat values can differ from displayed hero skills.

## Addresses and offsets {#addresses}

`6919200` · `21460` · `21464`

## Provenance and related commands {#sources}

[Berserker, #128056](https://wforum.heroes35.net/showthread.php?tid=5118&pid=128056#pid128056) · [daemon_n, #136063](https://wforum.heroes35.net/showthread.php?tid=5118&pid=136063#pid136063)

[UN:C](../) · [SN](../../receivers/sn/) · [Compatibility](../../compatibility/)
<!-- llm:end erm.un-c.battle-spell-power 1 -->

# Reading beam color

ID: erm.un-c.beam-color
URL: /en/erm/un-c/beam-color/
Part: 1/1
Source references: erm-forum:faq-.html
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.un-c.beam-color 1 -->
## Purpose and applicability {#purpose}

For unmodified h3wog.exe: creatures 35..121; 0 green, 1 white, 2 black.

## Code {#code}

```erm
!?FU(MyMod_ReadBeamColor);
!#VA(creature:x) (result:x);
!!VR(result):S2;
!!FU|(creature)<35/(creature)>121:E;
!!UN:C4453793/(creature)/1/?(result);
```

## Version and limitations {#limits}

The address is supported by a historical recipe for h3wog.exe-based WoG/ERA. It has not been executed in the installed game and is not guaranteed for another EXE or plugin. Validate the build and original bytes before use; executable patches can survive map changes. A beam requires creature flag 2048. Changing color does not make a creature a shooter. Recipe by Chortos-2, posted by Ivor.

## Addresses and offsets {#addresses}

`4453793`

## Provenance and related commands {#sources}

[Ivor, #70514](https://wforum.heroes35.net/showthread.php?tid=3727&pid=70514#pid70514)

[UN:C](../) · [SN](../../receivers/sn/) · [Compatibility](../../compatibility/)
<!-- llm:end erm.un-c.beam-color 1 -->

# Commander structure

ID: erm.un-c.commander-structure
URL: /en/erm/un-c/commander-structure/
Part: 1/1
Source references: erm-forum:un-c-page-1.html, old-help:form-commstr.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.un-c.commander-structure 1 -->
## Commander Structure {#ref-form-commstr}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-left erm-paragraph">
<span class="erm-source-title">Commander structure</span></div>
<div class="erm-paragraph">   <span class="erm-anchor" id="ref-form-commstr-wt"></span><code class="erm-legacy-label">HEX converter:</code> <span class="erm-anchor" id="ref-form-commstr-inputhex"></span><input class="erm-radix-input" data-erm-radix="16" type="text" value="" inputmode="text" aria-label="Enter the hex value of the offset you need.." title="Enter the hex value of the offset you need..">
<span class="erm-anchor" id="ref-form-commstr-inputdec"></span><output class="erm-radix-result" aria-label="The decimal value of the offset you specified" title="The decimal value of the offset you specified"></output></div>
<span class="erm-anchor" id="ref-form-commstr-q1"></span><div class="erm-tone-quote erm-note">Commander structure 0x128h (296).<br>All offsets are specified in hex notation.</div>
<pre>	<span class="erm-anchor" id="ref-form-commstr-n2"></span><strong class="erm-tone-purple erm-strong">Offset Description</strong>
   // <span class="erm-anchor" id="ref-form-commstr-dred"></span><strong class="erm-tone-red">+00</strong> dd = Availability
   // <strong class="erm-tone-red">+04</strong> dd = Alive or dead  
   // <strong class="erm-tone-red">+08</strong> dd = Owner’s hero number (and commander’s number) 
   // <strong class="erm-tone-red">+0C</strong> dd = Commander type
   // <strong class="erm-tone-red">+10</strong> dd = Hero type
   // <strong class="erm-tone-red">+14</strong> dd = Experience in past battles
   // <strong class="erm-tone-red">+18</strong> dd = If set to 1 = primary skills will not change as the commander advances through levels
   // If set to 0 = health and damage will be automatically added along with the commander's level (<a href="../../receivers/co/#ref-rec-co-p">CO:P</a>)
   // <strong class="erm-tone-red">+1C</strong> dd = Attack
   // <strong class="erm-tone-red">+20</strong> dd = Defense
   // <strong class="erm-tone-red">+24</strong> dd = Health
   // <strong class="erm-tone-red">+28</strong> dd = Damage
   // <strong class="erm-tone-red">+2C</strong> dd = Magic Power
   // <strong class="erm-tone-red">+30</strong> dd = Speed
   // <strong class="erm-tone-red">+34</strong> dd = Resistance

   // <strong class="erm-tone-red">+38</strong> dd = Attack Level
   // <strong class="erm-tone-red">+3C</strong> dd = Security Level
   // <strong class="erm-tone-red">+40</strong> dd = Health Level
   // <strong class="erm-tone-red">+44</strong> dd = Damage Level
   // <strong class="erm-tone-red">+48</strong> dd = Level Magic Power
   // <strong class="erm-tone-red">+4C</strong> dd = Speed Level
   // <strong class="erm-tone-red">+50</strong> dd = Resistance Level

<small>_word_ arts[10][8];</small> // <strong class="erm-tone-red">+54</strong> = Artifact number; Number of battles fought with him
<small>_char_ name[32];</small>    // <strong class="erm-tone-red">+F4</strong> = Name
   // <strong class="erm-tone-red">+114</strong> dd = Hero's old experience
   // <strong class="erm-tone-red">+118</strong> dd = Current Experience
   // <strong class="erm-tone-red">+11C</strong> dd = Current level (add +1 when displayed)
<small>specBon[2];</small>	// <strong class="erm-tone-red">+120</strong> dd = Special bonuses (sum of bits); Prohibited bonuses (sum of bits)</pre>

<div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">// function for obtaining the address of the commander structure
inline _Npc_* GetNpc(_int_ hero_id) {return ((_Npc_ *)(0x28620C0 + 296 * hero_id));}</div>
<div class="erm-paragraph">// function for receiving lines from the commander's text book <em class="erm-legacy-file">znpc00.txt</em>:<br>
inline char* Get_ITxt(int StrNum, int ItemNum) {return CALL_3 (char*, __cdecl, 0x77710B, StrNum, ItemNum, 0x2860724);}</div>
<div class="erm-paragraph">// function for getting Name and Biography from file <em class="erm-legacy-file">znpc00.txt</em>:<br>
inline char* Get_ITxtBio(int StrNum, int ItemNum) {return CALL_3 (char*, __cdecl, 0x77710B, StrNum, ItemNum, 0x286072C);}</div>
<div class="erm-paragraph">// function for obtaining the power of the primary command skill:
inline int Get_NpcSkillPower(_Npc_* npc, int skill_id) {return CALL_2 (int, __thiscall, 0x769460, npc, skill_id);}</div>
</code></div>
 <br>
</div>
</section>
:::

## Purpose and applicability {#purpose}

Historical base 42344640, record stride 296 bytes. Reads current experience without modifying the structure.

## Code {#code}

```erm
!?FU(MyMod_ReadCommanderExp);
!#VA(hero:x) (experience:x);
!!VR(experience):S-1;
!!FU|(hero)<0/(hero)>155:E;
!!VR(offset:y):S(hero) *296 +280;
!!UN:C42344640/(offset)/4/?(experience);
```

## Version and limitations {#limits}

The address is supported by a historical recipe for h3wog.exe-based WoG/ERA. It has not been executed in the installed game and is not guaranteed for another EXE or plugin. Validate the build and original bytes before use; executable patches can survive map changes. Size and fields describe the standard WoG structure. Prefer CO for ordinary commander operations. Offset 280 = 0x118 is current experience, not the old hero experience at 0x114.

## Addresses and offsets {#addresses}

`42344640` · `296` · `280`

## Provenance and related commands {#sources}

[igrik, #98728](https://wforum.heroes35.net/showthread.php?tid=5118&pid=98728#pid98728)

[UN:C](../) · [SN](../../receivers/sn/) · [Compatibility](../../compatibility/)

## Related commands and tables {#reference-links}

[Commanders (CO)](../../receivers/co/#command-p)
<!-- llm:end erm.un-c.commander-structure 1 -->

# Grail coordinates

ID: erm.un-c.grail-coordinates
URL: /en/erm/un-c/grail-coordinates/
Part: 1/1
Source references: erm-forum:un-c-page-3.html
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.un-c.grail-coordinates 1 -->
## Purpose and applicability {#purpose}

Reads Grail data through the game-manager pointer. Latin y variables replace accidental Cyrillic lookalikes in the original post.

## Code {#code}

```erm
!?FU(MyMod_ReadGrail);
!#VA(grailX:x) (grailY:x) (grailZ:x) (buried:x);
!!UN:C6919480/4/?(manager:y);
!!FU&(manager)=0:E;
!!UN:C(manager)/128656/2/?(grailX);
!!UN:C(manager)/128658/2/?(grailY);
!!UN:C(manager)/128660/1/?(grailZ);
!!UN:C(manager)/128662/1/?(buried);
```

## Version and limitations {#limits}

The address is supported by a historical recipe for h3wog.exe-based WoG/ERA. It has not been executed in the installed game and is not guaranteed for another EXE or plugin. Validate the build and original bytes before use; executable patches can survive map changes.

## Addresses and offsets {#addresses}

`6919480` · `128656` · `128658` · `128660` · `128662`

## Provenance and related commands {#sources}

[SergOz, #111370](https://wforum.heroes35.net/showthread.php?tid=5118&pid=111370#pid111370)

[UN:C](../) · [SN](../../receivers/sn/) · [Compatibility](../../compatibility/)
<!-- llm:end erm.un-c.grail-coordinates 1 -->

# Reading projectile type

ID: erm.un-c.projectile-type
URL: /en/erm/un-c/projectile-type/
Part: 1/1
Source references: erm-forum:faq-.html, old-help:form-weapon.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.un-c.projectile-type 1 -->
## Purpose and applicability {#purpose}

For unmodified h3wog.exe: creatures 2..197, one byte per entry. The example only reads the value.

## Code {#code}

```erm
!?FU(MyMod_ReadProjectile);
!#VA(creature:x) (result:x);
!!VR(result):S16;
!!FU|(creature)<2/(creature)>197:E;
!!UN:C7961526/(creature)/1/?(result);
```

## Version and limitations {#limits}

The address is supported by a historical recipe for h3wog.exe-based WoG/ERA. It has not been executed in the installed game and is not guaranteed for another EXE or plugin. Validate the build and original bytes before use; executable patches can survive map changes. Type 16 requires an empty-name DEF; missing it crashes shooting. Original formula: creature + 7961526. Recipe by Chortos-2, posted by Ivor; limits come from allowed post 70514.

## Addresses and offsets {#addresses}

`7961526`

## Provenance and related commands {#sources}

[Ivor, #70514](https://wforum.heroes35.net/showthread.php?tid=3727&pid=70514#pid70514)

[UN:C](../) · [SN](../../receivers/sn/) · [Compatibility](../../compatibility/)

## Related commands and tables {#reference-links}

[Creature table](../../tables/creatures/)
<!-- llm:end erm.un-c.projectile-type 1 -->

# Reading game resolution

ID: erm.un-c.screen-size
URL: /en/erm/un-c/screen-size/
Part: 1/1
Source references: erm-forum:un-c-page-1.html
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.un-c.screen-size 1 -->
## Purpose and applicability {#purpose}

Reads width and height from the two-byte fields used by the legacy HD implementation.

## Code {#code}

```erm
!?FU(MyMod_ReadScreenSize);
!#VA(width:x) (height:x);
!!UN:C4199496/2/?(width);
!!UN:C4199503/2/?(height);
```

## Version and limitations {#limits}

The address is supported by a historical recipe for h3wog.exe-based WoG/ERA. It has not been executed in the installed game and is not guaranteed for another EXE or plugin. Validate the build and original bytes before use; executable patches can survive map changes.

## Addresses and offsets {#addresses}

`4199496` · `4199503`

## Provenance and related commands {#sources}

[igrik, #97016](https://wforum.heroes35.net/showthread.php?tid=5118&pid=97016#pid97016)

[UN:C](../) · [SN](../../receivers/sn/) · [Compatibility](../../compatibility/)
<!-- llm:end erm.un-c.screen-size 1 -->

