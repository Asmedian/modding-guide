---
{"title":"Commander structure","summary":"Historical base 42344640, record stride 296 bytes. Reads current experience without modifying the structure.","translationStatus":"reviewed"}
---

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
