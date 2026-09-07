---
{"title":"ERM syntax: ZVSE and ZVSE2","summary":"Command prefixes, parameters, GET/SET, comments, and the ERM 2.0 preprocessor.","translationStatus":"reviewed"}
---

## Cont/ingener.htm {#ref-cont-ingener}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Engineering Analysis</span></div>

<div class="erm-paragraph">Contains excerpts from the technical implementation of the game that may be useful 
when working more deeply with Heroes, as well as <a href="../receivers/un/#ref-rec-un-c">UN:C</a>.<br>
All this, as well as the latest updates, you can also find <a href="http://forum.df2.ru/index.php?act=ST&amp;f=79&amp;t=6803">here</a>.</div>
<div class="erm-paragraph">B <strong>creature table</strong> the following structure is used:<br>

</div><span class="erm-anchor" id="ref-cont-ingener-101"></span><details class="erm-comment"><summary><span class="erm-anchor" id="ref-cont-ingener-show101"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
<strong>Town</strong>:int; //corresponding town<br>
<strong>Level</strong>:int; //level <br>
<strong>SoundName</strong>:PChar; // 4 letters that start creature sounds<br>
<strong>DefName</strong>:PChar; //def creature name<br>
<strong>Flags</strong>:int; //flags<br>
<strong>Name</strong>:PChar; //name<br>
<strong>PluralName</strong>:PChar; //multiple name<br>
<strong>Features</strong>:PChar; // (description of abilities)<br>
<strong>CostWood</strong>:int; //price per tree<br>
<strong>CostMercury</strong>:int; //price of mercury<br>
<strong>CostOre</strong>:int; //ore price<br>
<strong>CostSulfor</strong>:int; //price of gray<br>
<strong>CostCrystal</strong>:int; //price in crystals<br>
<strong>CostGems</strong>:int; //price in stones<br>
<strong>CostGold</strong>:int; //price of gold<br>
<strong>FightValue</strong>:int; //value in battle<br>
<strong>AIValue</strong>:int; //value on the card<br>
<strong>Growth</strong>:int; //gain<br>
<strong>HordeGrowth</strong>:int; //increase from additional buildings<br>
<strong>HitPoints</strong>:int; //health<br>
<strong>Speed</strong>:int; //speed<br>
<strong>Attack</strong>:int; //attack<br>
<strong>Defence</strong>:int; //protection<br>
<strong>DamageLow</strong>:int; //min. damage<br>
<strong>DamageHigh</strong>:int; //max. damage<br>
<strong>Shots</strong>:int; //shots<br>
<strong>Spells</strong>:int; //spells<br>
<strong>AdvLow</strong>: int; // ?<br>
<strong>AdvHigh</strong>: int; // ?<br>
<br>
In the h3wog.exe file, the table of standard creatures is located at $<strong>2703B8</strong>, and 
new creatures – $<strong>31C188</strong>.<br>
</div></details>

<div class="erm-paragraph"><strong>Table with types of shooting shells</strong> (arrows, etc.) for standard creatures:


</div><span class="erm-anchor" id="ref-cont-ingener-102"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show102"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
Stored in addresses <strong>00797BB8–00797C7B</strong> (unused original -
<strong>0043DBA4–0043DC34</strong>). For each creature one byte with a type number is allocated 
projectile. The table starts with an archer (creature No. 2) and ends with a certain 
creature No. 197 (the original is ballista, creature No. 146).
</div></details>
<strong><br>
Shooting Projectile Image Names</strong> (arrows, etc.) 


<span class="erm-anchor" id="ref-cont-ingener-103"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show103"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
In addresses <strong>0043DAAA</strong>–<strong>0043DB1C</strong> the selection operator is located (switch for fans of C-like languages, case for fans of Pascal-like ones). It contains 16 DEF file names (for projectile types No. 00–0Fh), plus one additional item, executed by default, that is, for all other projectile types. When WoG starts, the operator code is changed so that type 01 jumps to 
<strong>007649D0</strong>, where the test for a dracolich is carried out - if it is creature No. 196, an image of a dracolich’s breath is used, if not, a standard image of an archer’s arrow from a castle.
</div></details>
<div class="erm-paragraph">
<strong>Creature regeneration</strong>

</div>
<span class="erm-anchor" id="ref-cont-ingener-104"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show104"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
002F55C7 83F8 3C CMP EAX,3C //ghosts<br>
002F55CA 0F84 BB000000 JE 002F568B<br>
002F55D0 83F8 3D CMP EAX,3D //ghosts<br>
002F55D3 0F84 B2000000 JE 002F568B<br>
002F55D9 3D 90000000 CMP EAX,90 //trolls<br>
002F55DE 0F84 A7000000 JE 002F568B<br>
002F55E4 3D 9D000000 CMP EAX,9D //nightmare hydras<br>
002F55E9 0F84 92000000 JE 002F5681<br>
where 3C, 3D, 90, 9D is the creature number in hexadecimal<br>
<br>
Nightmare Hydras are checked for regeneration chance<br>
002F5681 E8 9A7EFFFF CALL 002ED520<br>
002F5686 83F8 28 CMP EAX,28<br>
where 28h = 40% probability. It can be removed if you replace JE 002F5681 with JE 
002F568B.<br>
<br>
And here is the number of regenerated lives<br>
002F55BC BA 32000000 MOV EDX,32<br>
where 32h = 50 HP</div></details>
<div class="erm-paragraph">
<strong>Return Attack</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-105"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show105"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
002F57C6 83F8 48 CMP EAX,48 //harpy<br>
002F57C9 74 5D JE SHORT 002F5828<br>
002F57CB 83F8 49 CMP EAX,49 //harpy witch<br>
002F57CE 74 58 JE SHORT 002F5828<br>
002F57D0 3D 9B000000 CMP EAX,9B //dark dragon<br>
002F57D5 74 21 JE SHORT 002F57F8 //ext. bicellularity test<br>
<br>
To select an attack mode when you right-click on defense (attack and 
return or attack and stay there)<br>
002FA2D7 837D F0 48 CMP DWORD PTR SS:[EBP-10],48 //harpy<br>
002FA2DB 74 23 JE SHORT 002FA300<br>
002FA2DD 837D F0 49 CMP DWORD PTR SS:[EBP-10],49 //harpy witch<br>
002FA2E1 74 1D JE SHORT 002FA300<br>
002FA2E3 817D F0 9B000000 CMP DWORD PTR SS:[EBP-10],9B //dark dragon<br>
002FA2EA 74 14 JE SHORT 002FA300</div></details>
<br>
<strong>Rise of the Phoenixes</strong>



<span class="erm-anchor" id="ref-cont-ingener-106"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show106"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
002F587C 817E 34 83000000 CMP DWORD PTR DS:[ESI+34],83 //phoenix<br>
002F5883 74 38 JE SHORT 002F58BD<br>
002F5885 817E 34 9E000000 CMP DWORD PTR DS:[ESI+34],9E //sacred phoenix<br>
002F588C 74 1C JE SHORT 002F58AA</div></details>
 <div class="erm-paragraph"><strong>Fearlessness</strong>


</div><span class="erm-anchor" id="ref-cont-ingener-107"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show107"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
002F7C6C 817F 34 84000000 CMP DWORD PTR DS:[EDI+34],84 //azure dragon<br>
002F7C73 74 46 JE SHORT 002F7CBB<br>
002F7C75 817F 34 96000000 CMP DWORD PTR DS:[EDI+34],96 //supreme archangel<br>
002F7C7C 7C 09 JL SHORT 002F7C87<br>
002F7C7E 817F 34 C0000000 CMP DWORD PTR DS:[EDI+34],0C0 //Sylvanian centaur<br>
002F7C85 7C 34 JL SHORT 002F7CBB<br>
i.e. fearlessness is possessed by the Azure Dragon and a range of creatures from the Supreme 
archangel (150) to commander of the Conjugation (191).</div></details>
<div class="erm-paragraph">
<strong>Fear</strong>


</div><span class="erm-anchor" id="ref-cont-ingener-108"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show108"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
002F7CEA 81FB 84000000 CMP EBX,84 //azure dragon<br>
002F7CF0 74 75 JE SHORT 002F7D67<br>
002F7CF2 81FB 99000000 CMP EBX,99 //antichrist<br>
002F7CF8 74 6D JE SHORT 002F7D67<br>
002F7CFA 81FB 9B000000 CMP EBX,9B //dark dragon<br>
002F7D00 74 65 JE SHORT 002F7D67<br>
<br>
002F7D16 813D 68218302 AE000000 CMP DWORD PTR DS:[2832168],0AE<br>
002F7D20 7C 21 JL SHORT 002F7D43<br>
002F7D22 813D 68218302 BF000000 CMP DWORD PTR DS:[2832168],0BF<br>
002F7D2C 7F 15 JG SHORT 002F7D43<br>
all pairing commanders (apparently as creatures)</div></details>
<div class="erm-paragraph">
<strong>Magic mirror</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-109"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show109"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
00048528 8179 34 86000000 CMP DWORD PTR DS:[ECX+34],86<br>
0004852F 75 1E JNZ SHORT 0004854F<br>
where 86h = 134 - Fairytale dragon</div></details>
<div class="erm-paragraph">
<strong>Fireball attack</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-110"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show110"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
0003F72C 83F8 2D CMP EAX,2D<br>
0003F72F 0F85 EA020000 JNZ 0003FA1F<br>
where 2Dh = 45 - Magog</div></details>

<div class="erm-paragraph">
<strong>Death Cloud Attack</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-111"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show111"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
002FF990 83F8 40 CMP EAX,40 //lich<br>
002FF993 74 12 JE SHORT 002FF9A7<br>
002FF995 83F8 41 CMP EAX,41 //powerful lich<br>
002FF998 74 0D JE SHORT 002FF9A7<br>
002FF99A 3D C4000000 CMP EAX,0C4 //dracolich<br>
002FF99F 74 06 JE SHORT 002FF9A7</div></details>

<div class="erm-paragraph">
<strong>Spells given by artifacts</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-112"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show112"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
By address <strong>004D95F2h</strong> there is a pointer to case containing 9 entries.
<br>
By address <strong>004D95EBh</strong> there is a pointer to a table of single-byte data, 
determining the operator's work. The table contains 49 values, starting with art-86 and 
ending with art-135.<br>
Types of values in the table:<br>
0 - give all Fire spells<br>
1 - give all Air spells<br>
2 - give all Water spells<br>
3 - give all Earth spells<br>
4 - give the spells “Summon Ship” and “sink the Ship”<br>
5 - give all 5th level spells<br>
6 - give "Armageddon"<br>
7 - give "Thunder of the Titans"<br>
8 - nothing</div></details>
<div class="erm-paragraph">
<strong>Combat vehicles purchased from forges</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-113"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show113"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
<strong>6AAA60</strong> - table of combat vehicles purchased at Castle Forges.<br>
4 bytes are allocated for each machine, then 4 bytes - FF FF FF FF (total - 8 
byte). The combat vehicle purchased from Ballista Yard is the same as the Castle.<br>
<strong>00642EA0</strong> - table of creatures displayed in the forge window.</div></details>
<div class="erm-paragraph">
<strong>Spell Structure</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-114"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show114"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
<strong>Index</strong> on the spell table lies in <strong>687FA8</strong>. The address in it is dynamic.<br>
struct<br>
{<br>
int null; //??<br>
char *sound; //sound name<br>
int anim_id; //<a href="../receivers/ss/#ref-rec-ss-x">SS:X</a>???<br>
int flags; //flags <br>
char *name; //name <br>
int level;<br>
int school;<br>
int mana_cost[4];<br>
int param_1;<br>
int effects[4]; //<a href="../receivers/ss/#ref-rec-ss-e">SS:E</a><br>
int city_freq[9]; //probabilities of appearance in towns<br>
int ai_val[4]; //<a href="../receivers/ss/#ref-rec-ss-i">SS:I</a><br>
char *desc[4]; //descriptions<br>
}</div></details>
<div class="erm-paragraph">
<strong>Sharpshooter</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-115"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show115"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
75DD50 cmp eax,00000095h<br>
75DD55 jz L0075DDD2<br>
75DD57 cmp eax,00000089h<br>
75DD5C jz L0075DDD2<br>
75DD5E cmp eax,000000AAh<br>
75DD63 jz L0075DDD2<br>
75DD65 cmp eax,000000ABh<br>
75DD6A jz L0075DDD2<br>
That is, 3 snipers + Arrow Towers (specialty X1) shoot with a straight arrow.</div></details>
<div class="erm-paragraph">
<strong>No penalty for obstruction</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-116"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show116"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
760590 cmp eax,00000022h //mag<br>
760593 jz L00760622<br>
760599 cmp eax,00000023h //archmage<br>
76059C jz L00760622<br>
7605A2 cmp eax,00000088h //sorcerer<br>
7605A7 jz L00760622<br>
7605A9 cmp eax,00000089h //sniper<br>
7605AE jz L00760622<br>
7605B0 cmp eax,00000095h //tower<br>
7605B5 jz L00760622<br>
7605B7 cmp eax,000000AAh //arctic sniper<br>
7605BC jz L00760622<br>
7605BE cmp eax,000000ABh //hardened sniper<br>
7605C3 jz L00760622</div></details>
<div class="erm-paragraph">
<strong>Hate</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-117"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show117"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
443138 mov dl,[eax+CASE_004434DC]<br>
44313E jmp [CASE_PROCTABLE_004434C8+edx*4]<br>
<br>
There are 5 values in the small (creatures 112-129) table. Values 00-03 are purely for 
elementals - each elemental hates both elementals of the opposite 
elements. Control, however, is still transferred to PROC0004 - it is also for 
other creatures, i.e., there case is nested in case. Range - from Angel to Black 
Dragon.<br>
The SoD code there looks like:<br>
<br>
CASE_004434C8_PROC0004:<br>
<br>
443195 mov eax,[edi+34h]<br>
443198 add ecx,FFFFFFF4h<br>
44319B cmp ecx,00000047h<br>
44319E ja CASE_004434F0_PROC0006<br>
4431A4 xor edx,edx<br>
4431A6 mov dl,[ecx+CASE_0044350C]<br>
4431AC jmp [CASE_PROCTABLE_004434F0+edx*4]<br>
<br>
However, when running WoG, the code changes like this:<br>
<br>
CASE_004434C8_PROC0004:<br>
<br>
443195 mov ecx,[ebp+08h]<br>
443198 call SUB_L00766DE6<br>
44319D or eax,eax<br>
44319F jz L00443410<br>
4431A5 mov ecx,[ebp-10h]<br>
4431A8 jmp L00443211<br>
4431AA nop<br>
4431AB nop<br>
<br>
The code changes the segment of WoG's copying exe3273A4-3273AF 
(78BD8Ch/443195h/17h).<br>
As a result, the hatred of creatures in WoG is dealt with by SUB_L00766E14, where it was copied and 
case, and the SoD table. Apparently, hatred is also built in there through the experience of creatures.<br>
Provided that the type of creature corresponds to “hated”, the percentage is set 
add. damage In SoD this is unified, in WoG it is routinely set to the same 
command:<br>
<br>
mov dword ptr [ebp-0Ch],00000032h<br>
<br>
Exceptions are Titan and Black Dragon. They have this:<br>
<br>
mov dword ptr [ebp-0Ch],00000005h<br>
<br>
Looks like a typo: instead of 150% damage - 105%. A simple test confirms that 
the bug is real and we lived with it.<br>
By the way, in both SoD and WoG Black Dragon is indifferent to Giants. Fair - 
Titan is also indifferent to the Reds.<br>
Regardless of the actual percentage of additional damage, the battle log will show "50%". 
The problem is in the simplified access to the line genrltxt.txt.</div></details>
<div class="erm-paragraph">
<strong>Cavalry bonus</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-118"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show118"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
75D823 cmp dword ptr [L028460C0],0000000Ah; - Cavarelist<br>
75D82A jnz L0075D838<br>
75D82C mov dword ptr [L02846420],0000000Bh<br>
75D836 jmp L0075D860<br>
75D838 cmp dword ptr [L028460C0],0000000Bh; - Champion<br>
75D83F jnz L0075D84D<br>
75D841 mov dword ptr [L02846420],0000000Bh</div></details>
<div class="erm-paragraph">
<strong>Suck 2 points of mana</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-119"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show119"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
4650D0 sub eax,0000003Dh; - Ghost<br>
………<br>
465174 add eax,FFFFFFFEh; - number of points collected</div></details>
<div class="erm-paragraph">
<strong>Magic channel</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-120"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show120"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
5A24DC cmp dword ptr [eax-000000C0h],0000002Bh; - Familiar</div></details>
<div class="erm-paragraph">
<strong>Deathstroke</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-121"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show121"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
766DB9 sub eax,43; - Dread Knight<br>
4435C0 jz L004435D1<br>
…………<br>
4436DE cmp eax,00000014h; - chance of the ability triggering</div></details>
<div class="erm-paragraph">
<strong>Spell Cost Reduction</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-122"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show122"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
766BFA cmp dword ptr [ebp-18h],00000022h - Mage<br>
766BFE jz L00766C06<br>
766C00 cmp dword ptr [ebp-18h],00000023h - ArchMage<br>
766C04 jnz L00766C0D<br>
766C06 mov dword ptr [ebp-0Ch],00000002h - number of points for reduction in price</div></details>
<div class="erm-paragraph">
<strong>Special lands</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-123"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show123"></span><strong class="erm-toggle-label">Show</strong></summary><div class="erm-comment-body">
Case:<br>
4FD5A1 mov cl,[eax+CASE_004FD5E8]<br>
4FD5A7 jmp [CASE_PROCTABLE_004FD5D0+ecx*4]<br>
<br>
Checks for mouseover tooltips, <span class="erm-anchor" id="ref-cont-ingener-vc"></span><img src="../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> and for <a href="../receivers/tr/#ref-rec-tr">!!TR</a>:<br>
<br>
4FD52A cmp eax,00000015h<br>
4FD52D lea ecx,[edi+ecx*4]<br>
4FD530 jz L004FD57F<br>
4FD532 cmp eax,0000002Eh<br>
4FD535 jz L004FD57F<br>
4FD537 cmp eax,000000E3h<br>
4FD53C jz L004FD57F<br>
4FD53E cmp eax,000000E0h<br>
4FD543 jz L004FD57F<br>
4FD545 cmp eax,000000DEh<br>
4FD54A jz L004FD57F<br>
4FD54C cmp eax,000000E1h<br>
4FD551 jz L004FD57F<br>
4FD553 cmp eax,000000E4h<br>
4FD558 jz L004FD57F<br>
4FD55A cmp eax,000000E2h<br>
4FD55F jz L004FD57F<br>
4FD561 cmp eax,000000E7h<br>
4FD566 jz L004FD57F<br>
4FD568 cmp eax,000000E5h<br>
4FD56D jz L004FD57F</div></details>

<div class="erm-paragraph">We thank the authors for the content: <strong>sergroj, Chortos-2, major, MOP, feanor</strong></div>

</div>
</section>
:::

## Receivers: General {#ref-cont-receiversol}

:::erm
<section class="erm-reference" lang="en">
<div>


<span class="erm-anchor" id="ref-cont-receiversol-text"></span><div>
<h3 class="erm-align-center">Receivers</h3>
<h3><span class="erm-anchor" id="ref-cont-receiversol-intro"></span>Introduction</h3>
<div class="erm-paragraph">Receivers ("<em>receiver</em>", from English - receiver.) - ERM codes that act on heroes, objects, events, timers, functions, 
messages or game settings.<br>
Most receivers have multiple options, which can be used for a variety of things.<br>
For example, <a href="../receivers/le/#ref-rec-le">receiverLE</a> affects local events on the map and has several different commands for changing event properties.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-use"></span>How to use receivers</h3>
<div class="erm-paragraph">Receivers are placed in time events after the trigger that fires them. 
They are executed once until the event ends or another trigger is reached. You can write one or more commands on one line, 
but for the clarity and readability of your script (as well as for finding errors), it is better to write a command on each line.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-synt"></span>Receiver syntax</h3>
<div class="erm-paragraph">All receivers begin with a double exclamation mark "!!" and end with a semicolon ";". 
Immediately after the "!!" follows the two-letter code of the receiver, as <a href="../receivers/ar/#ref-rec-ar">AR</a> for artifacts, 
<a href="../receivers/he/#ref-rec-he">HE</a> for heroes, etc. The next part after this code depends on the type of receiver. 
Some receivers have one or more parameters before the colon ( <strong>:</strong> ), each parameter is an integer. Next, after the colon comes the option 
receiver. Options take many forms and may include one or more parameters each; they are presented on the pages of the Directory further as XXXX. 
Replace XXXX with the appropriate command or commands. After the last command you must put a semicolon ";"</div>
<div class="erm-paragraph">All ERM commands (receivers and instructions) must have at least one option to work correctly.<br>
<u>Example syntax</u>:
<pre class="erm-example"><code class="language-erm">!!LE12/21/0:E1000;</code></pre>
In the example above, the local event is at coordinates x=12, y=21 and level=0 (top) 
will become modified and will give 1000 experience for the hero.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-2nd-synt"></span>Related syntax</h3>
<div class="erm-paragraph">Often you don't want to move a value, but simply add or subtract a value. For example, if you want to give the hero experience, 
you will set the hero’s amount of experience without taking into account the current value, i.e. experience will be set to the new, set value. 
The same will happen with player resources. To add or subtract, we use an extended syntax: put a small <em>d</em> as a number prefix.<br>
<u>Extended syntax example</u>:
<pre class="erm-example"><code class="language-erm">!!HE-1:Ed500;</code></pre>
In this example, 500 experience will be added to the experience you already have.<br>
If we had used E500 instead of Ed500, the hero's experience would be 500 instead of increased by 500.<br>
To take away 500 experience, use Ed-500 accordingly.<br>
If you want to leave the parameter unchanged, use d0 or just d.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-synt-date"></span>Current date syntax</h3>
<div class="erm-paragraph">Based on the principle of using a prefix <em>d</em>, we can use the prefix <em>c</em> (again, only a small one!) in order to 
so that the current day number is added to the number. In other words, <em>c</em> equal to the current day. For example,<br>
c=4 is month 1, week 1, day 4;<br>
c=8 is month 1, week 2, day 1;<br>
c=30 is month 2, week 1, day 2</div>
<div class="erm-paragraph"><u>Example</u>:<br>
We need an event that will start five days after any player action. 
Let's set the day of his appearance <a href="../receivers/ge/#ref-rec-ge">receiver GE</a>, option F$. 
Let the event number be 100 (the first number in the event message), use:
<pre class="erm-example"><code class="language-erm">!!GE100:Fc5;</code></pre>
This event will fire 5 days after the command is executed (it will run after, for example, visiting a local event).</div>
<div class="erm-paragraph">Moreover, you can use both prefixes together (<em>d</em> should come first):
<pre class="erm-example"><code class="language-erm">!!GE100:Fdc5;</code></pre></div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-empty"></span>Empty parameters</h3>
<div class="erm-paragraph">If a command has four parameters, you MUST fill them all in, separating each one with a slash key. <span class="erm-key">/</span>. 
You cannot omit a command parameter, otherwise it will not work and will throw an error message. 
However, in some cases you can omit the exact number and just leave the space after the slash blank. 
When you omit a parameter, it is assumed that you entered zero, and if zero is a valid value for the parameter, the command will work.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!IF:D1/5//4;</code></pre>
The command above is an example of using the advanced dialog box. It has more parameters than any other ERM option, 
but you don't have to fill them all. We use three out of a possible 16. It is for this command that entering 0 means “leave unchanged” 
but many other commands simply assume a value of zero, which was not always intended.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-many"></span>Multi-team</h3>
<div class="erm-paragraph">In most cases, you can put multiple commands after a single receiver header (the part before the colon). 
Commands do not need to be separated by spaces, but for greater readability it is recommended. In some cases, for example 
setting and managing variables <a href="../receivers/vr/#ref-rec-vr">VR receiver</a>, multi-teaming does not always work correctly. 
So, if you use multiple commands, make sure they execute correctly and produce the correct result. 
If one of your commands shows or sets text, you must put it last. 
If you paste any other command after the text (as part of a single receiver) you will get an error.<br>
<u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!!OW:R-1/5/d-1 R-1/6/d-500; take something from the player
!!LE10/12/0:E1000 M^Hero studies by visiting the elder...^;</code></pre></div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-comm"></span>Adding comments to your code</h3>
<div class="erm-paragraph">Anything in the script after the semicolon and before the next receiver or trigger is considered a comment and is ignored by the ERM processor. 
Some people put their comments in square brackets to make the script and comments easier for others to read, but this is not required.<br>
<u>Example code with comment</u> (after the semicolon):
<pre class="erm-example"><code class="language-erm">ZVSE
!?LE10/23/1; Event at x=10, y=23, level=1(Underground)
!!HE-1:B0/?z5; Save the hero's name into the text variable z5
!!IF:M^A cry was heard: "%Z5... %Z5... help me!"^; show game window</code></pre>
The message above shows the hero's name for added personalization.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-var-use"></span>Using variables in receivers</h3>
<div class="erm-paragraph">Variables can be used to replace any # or $, except the # before the colon in receivers <a href="../receivers/ce/#ref-rec-ce">CE</a> and <a href="../receivers/ge/#ref-rec-ge">GE</a>. 
All other # and $ in receivers, before and after the colon, can be replaced by a variable of the appropriate type.<br>
Many receivers that are specific to a specific point on the map can also use variable references. 
Namely, the first <em>v</em>-the variable stores the X-coordinate of the object; second <em>v</em>-variable – Y-coordinate of the object; in the third <em>v</em>-the variable should be Level.<br>
<u>Example of using variable references</u>: (with receiver <a href="../receivers/ob/#ref-rec-ob">OB</a>)
<pre class="erm-example"><code class="language-erm">...
!!VRv10:S25; [set x-coordinate]
!!VRv11:S14; [set y-coordinate]
!!VRv12:S0; [set map level]
!!OB10:S; ["disable" object in v10/v11/v12]</code></pre>

</div><h3><span class="erm-anchor" id="ref-cont-receiversol-instr"></span>Instructions</h3>
<div class="erm-paragraph">The instructions are identical to the receivers, except that they begin with a combination of exclamation marks and a number (!#) and work only once, 
when loading the map for the first time. Most receivers also work as instructions, but some (especially object-specific receivers) 
do not work at all and cause error messages or the card crashes. The instructions are executed once when loading the map, 
in the order of appearance in time events, regardless of triggers, receivers and comments before and after them. 
You can use instructions to call functions and all normal receivers (non-instructions), being part of the function, will work fine, 
however, you MUST include the function in a temporary event BEFORE the statement calling it, otherwise it will not work 
(you won't get an error message, the function just won't work).<br>
<u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!#VRv10:S25; set v10 to 25

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
!?FU25;
!!IF:M^Loading script...^;
!#FU25:P; show message before showing card</code></pre>
</div>








</div>
</div>
</section>
:::

## ZVSE {#ref-cont-zvse}

:::erm
<section class="erm-reference" lang="en">
<div><h3 class="erm-align-center">ZVSE</h3>
<div class="erm-paragraph">These four characters are the header of any script. Thanks to them, the game recognizes 
scripts and distinguishes them from ordinary events. When working on your script 
remember - ZVSE must be at the very beginning of the code, otherwise... the code will be 
ignored.</div>
<div class="erm-paragraph">See also:<br>
<a href="../triggers/#ref-cont-triggersol">Triggers: general information</a><br>
<a href="./#ref-cont-receiversol">Receivers: general information</a><br>
</div></div>
</section>
:::

## Header and language mode {#header}

`ZVSE` identifies classic ERM. `ZVSE2` enables ERM 2.0, introduced in **ERA 3.0.0** with named locals, constants, and stricter syntax checking. The digit 2 refers to the ERM language mode, not ERA II. Changing the header does not automatically fix an old script; check the new mode’s restrictions and string handling.

## Four prefixes {#prefixes}

| Form | Purpose |
| --- | --- |
| `!?` | Declares an event handler or function |
| `!!` | Executes a command inside a handler |
| `!#` | Initialization instruction; also preprocessor declarations `VA` and `DC` |
| `!$` | Post-trigger where supported by the event |

Commands end with `;`. A newline is not a terminator. Syntax is case-sensitive: `!!IF` is the dialog receiver, while `!!if` opens a conditional block.

## Command anatomy {#anatomy}

`!!HE-1:E?y1;` contains prefix `!!`, receiver `HE`, selector `-1`, a colon, subcommand `E`, and output argument `?y1`. Here `-1` selects the current hero; another receiver may assign a different meaning to that value. Arguments within a subcommand are separated by `/`. Reference signatures use `#`, `$`, and ellipses as placeholders, not literal script text.

## Reading, writing, and relative changes {#access}

Where supported, `?variable` reads a value, a number or variable writes it, and prefix `d` adds to the current value. `E500` sets hero experience to 500; `Ed500` adds 500. `d0` preserves the value only where relative assignment is supported. Not every subcommand accepts all modes. An empty argument generally means zero, not “skip”.

## Names and constants {#declarations}

`(name:y)` allocates a local number and `(name:z)` a local string; subsequent references use `(name)`. `!#VA` declares parameters or variables explicitly, and `!#DC` declares a global named constant. Avoid taking names used by libraries.
```erm
ZVSE2
!#DC(MYMOD_REWARD) = 250;

!?FU(MyMod_AddReward);
!#VA(hero:x);
!!HE(hero):Ed(MYMOD_REWARD);
```

## Comments and text {#comments}

String literals use `^...^`. Ordinary text between a terminated command and the next ERM command acts as a comment. Put comments after `;` and avoid accidentally including command prefixes. A string literal follows interpolation rules rather than ordinary comment rules.

[Strings and variables](../variables/) · [Conditions](../conditions/)

## Related commands and tables {#reference-links}

[Local map events (LE)](../receivers/le/) · [Map artifacts and resources (AR)](../receivers/ar/) · [Heroes (HE)](../receivers/he/) · [Global events (GE)](../receivers/ge/) · [Variables and expressions (VR)](../receivers/vr/) · [Town events (CE)](../receivers/ce/) · [Map objects (OB)](../receivers/ob/) · [ERM triggers and events](../triggers/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.4.0, +](../compatibility/#era3-v-3-4-0-l1881) — Improved ERM 2 compiler. It became possible to use named local variables and quick variables (f..t) as arrays subscripts. Syntax: (array&#91;index&#93;) or (array&#91;i&#93;). Index value is evaluated BEFORE current receiver, thus do no…
- [ERA 3.3.0, +](../compatibility/#era3-v-3-3-0-l2132) — ERM syntax can be safely beautified for all Era 3.X versions by skipping trailing ":" before ";". !!re 0/7/1; ... !!en; !!if&(heroId)=(HERO_XERON); ... !!en;
- [ERA 3.2.0, +](../compatibility/#era3-v-3-2-0-l2469) — Added support for d- syntax in function parameters. !!FU(edu_Test):Pd-200; will pass -200, previously 200
- [ERA 3.2.0, +](../compatibility/#era3-v-3-2-0-l2498) — Duplicate constant declarations with the same value are allowed from now. !#DC(TRUE) = 1; !#DC(TRUE) = 1; does not produce error !#DC(TRUE) = 3; error: constant TRUE is already defined with value 1
- [ERA 3.1.0, -](../compatibility/#era3-v-3-1-0-l3133) — Fixed ERM 2 compiler part, responsible for local z-arrays indexes allocation. Previosly !#VA(names&#91;3&#93;:z) used to allocate array of &#91;z-3, z-4, z-5&#93; (decreasing indexes). Now the appropriate array will be &#91;z-5, z-4, z-3&#93; (…
- [ERA 3.0.4, -](../compatibility/#era3-v-3-0-4-l3407) — Fixed bug: ERM compiler didn't process post-triggers.
- [ERA 3.0.1, +](../compatibility/#era3-v-3-0-1-l3469) — Added new escape sequences for string literals (^...^): '%\:' expands into ';' (usually forbidden character for literals, marking receiver end). '%\"' expands into '^' (usually forbidden character for literals, marking e…
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l3890) — Only regular ERT variables are interpolated automatically. Regular z-variables and temporal ert variables are not interpolated in receivers. It means, that !!VRz2:S^%%y5^; z2 is now really "%y5" Previously interpolation …
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l3909) — ERM interpolation (expanding variables starting with % in string literals ^...^ and ERT strings) was fully rewritten. Upper case registry for old ERM variables is supported, but deprecated. %X1 is good, but %x1 is better…
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l4047) — Introduced ERM 2.0 support for scripts, beginning with 'ZVSE2'.
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l4074) — Added new event "OnDetermineMonInfoDlgUpgrade", occured, when game determines wether to show upgrade button in monster info dialog. Parameters: MonType, UpgradedType or -1, Town ID or -1, Hero ID or -1. -1 for UpgradedTy…
<!-- ERA3-GENERATED:END -->
