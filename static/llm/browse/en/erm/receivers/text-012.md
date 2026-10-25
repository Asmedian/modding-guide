# Creature experience and bonuses (EA)

ID: erm.receivers.ea
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/ea/
Part: 3/3
Source references: old-help:rec-ea.htm, old-help:cont-stackexpbonus.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ea 3 -->
<em class="erm-strong">Note 2:</em> if you grant this ability multiple times (with different or the same spells), a maximum of one spell will trigger per action. 
If you have 3 spells with a 50% chance each, any of them can be cast on the target after an attack. If you need more spells, 
you can use abilities (c), (p), (j), (J), (a) or (K). They can be combined for greater effect.<br>
<strong>In column 3 for (k) you can set:</strong><br>
#xx : casts a spell <a href="../../tables/spells/#ref-form-spell" data-context="true">spell xx</a><br>
Almost all combat spells are available for this ability, including Quicksand, Fire Wall and Summon Elemental. Friendly Spells 
(for example, Shield) will be cast as a massive Shield on all allied troops every time creature attacks an enemy, but if spell does not have a mass effect 
(for example, Anti-Magic, Magic Mirror, Fire Shield), he will cast a spell on the enemy. Spell Clone (65) will create a clone of an enemy creature under your control, 
but be careful - don't give the ability at level 0, because the game will crash if the clone is cast from the side without a hero. Roots (72) bind the enemy and prevent him from moving, 
until the binder moves away from the target or dies.<br>
Spells that cannot be cast and will cause the game to crash or have no effect include: Resurrection, Animate Dead, Sacrifice, Death Cloud, Titan Thunder and Death Stare. 
Teleport works, but makes the battle unwinnable for that player - the target stack "disappears" but still counts for the battle. He cannot move or attack in melee 
(or be attacked), but if he is a shooter, he can still shoot. You can also give spell Paralysis (74) and Petrification (70).<br>
<strong>In columns 4..14 for (k) you can set:</strong><br>
Any integer value from 0 to 100. This is the percentage chance of the spell working.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-19"></span><details class="erm-comment"><summary>Casts Advanced spell after attack (K) &lt;75&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">After any melee attack, there is a chance that the target will be enchanted with this spell for 3 rounds, regardless of the presence of immunity.<br>
<em class="erm-strong">Note 1:</em> this ability does not work for ranged attacks. However, it will work if the shooter goes into melee. 
You can use (p), (c), (j) or (J) to cast a spell on a ranged attack.<br>
<em class="erm-strong">Note 2:</em>  if you grant this ability multiple times (with different or the same spells), a maximum of one spell will trigger per action. 
If you have 3 spells with a 50% chance each, any of them can be cast on the target after an attack. If you need more spells, you can use abilities (c), (p), (j), (J), (a) 
or (k). They can be combined for greater effect.<br>
<strong>In column 3 for (K) you can set:</strong><br>
#xx : casts a spell
<a href="../../tables/spells/#ref-form-spell" data-context="true">spell xx</a><br>
Almost all combat spells are available for this ability, including Quicksand, Fire Wall and Summon Elemental. Friendly Spells 
(for example, Shield) will be cast as a massive Shield on all allied troops every time creature attacks an enemy, but if spell does not have a mass effect 
(for example, Anti-Magic, Magic Mirror, Fire Shield), he will cast a spell on the enemy. Spell Clone (65) will create a clone of an enemy creature under your control, 
but be careful - don't give the ability at level 0, because the game will crash if the clone is cast from the side without a hero. Roots (72) bind the enemy and prevent him from moving, 
until the binder moves away from the target or dies.<br>
Spells that cannot be cast and will cause the game to crash or have no effect include: Resurrection, Animate Dead, Sacrifice, Death Cloud, Titan Thunder and Death Stare. 
Teleport works, but makes the battle unwinnable for that player - the target stack "disappears" but still counts for the battle. He cannot move or attack in melee 
(or be attacked), but if he is a shooter, he can still shoot. You can also give spell Paralysis (74) and Petrification (70).<br>
<strong>In columns 4..14 for (K) you can set:</strong><br>
Any integer value from 0 to 100. This is the percentage chance of the spell working.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-20"></span><details class="erm-comment"><summary>Summons clone (l) &lt;108&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">Summons a clone of a creature for battlefield from the beginning of the second round and again every round as long as there is free space around the creature. 
The number of creatures in the cloned stack is calculated as a percentage of the number of summoner creatures.<br>
The called stack might look like this:<br>
.#.<br>
.X#<br>
.#.<br>
. - empty cell<br>
# = possible position for the summoned clone<br>
X = creature with Summon ability<br>
The summoned stack does not spawn on an obstacle, but can spawn on a dead creature.<br>
<strong>In column 3 for (l) you can set:</strong><br>
#xx : xx = <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> to call. Creature can be the same type as the caller or any other.<br>
<strong>In columns 4..14 for (l) you can set:</strong><br>
any integer value from 0 to 255. This is the number of creatures that will appear on the summoned stack as a percentage of summoners. 
So if you set it to 25 and 12 creatures are summoned, the summoner stack will be 3 (25% of 12 = 3).</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-21"></span><details class="erm-comment"><summary>Evasion (L) &lt;76&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">You can set it in two ways:<br>
1) Fixed evasion with variable chance of triggering<br>
2) Fixed percentage chance of triggering with variable deviation<br>
For the first method, the modifier must be between 0 and 99, and this is the percentage of damage minus 1. So, #33 means that the damage will be reduced by 34%. 
The level bonus is the percentage chance of the ability triggering against attacks.<br>
For the second method, the modifier must be between 100 and 200, and this is the proc percentage minus 100. So, #133 means that the ability will have a 33% chance to proc against attacks. 
The level bonus is the percentage of damage reduction.<br>
<u>Example</u>:<br>
L    #33    0    10    20   …<br>
means that dodging 33% damage will work with a 0% chance at level 0, 10% chance at level 1, etc.<br>
L    #133    0    10    20   …<br>
means it has a 33% chance to proc and reduces damage by 0% at level 0, 10% at level 1, etc.<br>
You can only use one type of evasion on a creature, not both, but creature can also have a full block ability in addition to Evasion.<br>
<strong>In column 3 for (L) you can set:</strong><br>
#xx : xx = damage percentage minus one if 0..99<br>
#xx : xx = chance of the ability to trigger minus 100, if 100..200<br>
<strong>In columns 4..14 for (L) you can set:</strong><br>
Any integer value from 0 to 100. for method 1 this is the chance of the ability triggering, for method 2 - the percentage of damage reduction.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-22"></span><details class="erm-comment"><summary>No obstacle penalty (o) &lt;111&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note"><strong>In column 3 for (o) you can set:</strong><br>
+ ( or = ) : &lt;43&gt; ( or &lt;61&gt; ) Give or not the ability No penalty obstacles.<br>
<em class="erm-strong">Note:</em> you cannot take this ability away from creatures that already have it (such as Archmages)<br>
<strong>In columns 4..14 for (o) you can set:</strong><br>
0 (do not give bonus)<br>
1 (give bonus)</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-23"></span><details class="erm-comment"><summary>Casts Expert (mass) spell before attacking (p) &lt;112&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">Before an attack (melee or ranged), there is a chance that this spell will be cast on the target for 3 rounds, regardless of whether they are immune.<br>
<em class="erm-strong">Note:</em> if you grant this ability multiple times (with different or the same spells), a maximum of one spell will trigger per action. 
If you have 3 spells with a 50% chance each, any of them can be cast on the target after an attack. If you need more spells, 
you can use abilities (c), (J), (j), (a), (k) or (K). They can be combined for greater effect.<br>
<strong>In column 3 for (p) you can set:</strong><br>
#xx : casts a spell <a href="../../tables/spells/#ref-form-spell" data-context="true">spell xx</a><br>
Almost all combat spells are available for this ability, including Quicksand, Fire Wall and Summon Elemental. Friendly Spells 
(for example, Shield) will be cast as a massive Shield on all allied troops every time creature attacks an enemy, but if spell does not have a mass effect 
(for example, Anti-Magic, Magic Mirror, Fire Shield), he will cast a spell on the enemy. Spell Clone (65) will create a clone of an enemy creature under your control, 
but be careful - don't give the ability at level 0, because the game will crash if the clone is cast from the side without a hero. 
Roots (72) bind the enemy and prevent him from moving until the binder moves away from the target or dies.<br>
Spells that cannot be cast and will cause the game to crash or not work include: Resurrection, Animate Dead, Sacrifice, Death Cloud, Titan Thunder and Death Stare. 
Teleport works, but makes the battle unwinnable for that player - the target stack "disappears" but still counts in the battle. He cannot move or attack in melee 
(or be attacked), but if he is a shooter, he can still shoot. The spells Paralyze (74), Petrify (70) or Blind (62) have little utility with the ability (p), 
because their effect is immediately canceled by the attack: use ability (a) on them.<br>
<strong>In columns 4..14 for (p) you can set:</strong><br>
Any integer value from 0 to 100. This is the percentage chance of the spell working.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-24"></span><details class="erm-comment"><summary>Regeneration (r) &lt;114&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">This ability allows you to set the percentage chance for a creature to regenerate lost health each round. 
You can also choose the maximum amount of health to restore (up to 255).<br>
<strong>In column 3 for (r) you can set:</strong><br>
#xx : xx = percentage chance (0..100) for a creature to regenerate lost health at the start of each round.<br>
<strong>In columns 4..14 for (r) you can set:</strong><br>
Any integer between 0 and 255. This is the maximum health that will be regenerated if regeneration occurs.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-25"></span><details class="erm-comment"><summary>Additional Answers (R) &lt;82&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note"><strong>In column 3 for (R) you can set:</strong><br>
+ : &lt;43&gt; Add to the number of creature responses already available (for example, +1 for Griffins will give them 3 responses per round)<br>
= : &lt;61&gt; Set the number of answers for each round<br>
<strong>In columns 4..14 for (R) you can set:</strong><br>
Any integer value between 0 and 254 (use 254 as a sort of infinite answer)</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-26"></span><details class="erm-comment"><summary>Enchanted by spell(s) &lt;115&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">Applies creature spell (for example, Slayer) for the entire battle (999 rounds).<br>
<em class="erm-strong">Note:</em> spell can be cleared.<br>
You can also set spells that affect your entire army (for example, mass Bless).<br>
<strong>In column 3 for (s) you can set:</strong><br>
#xx : cast <a href="../../tables/spells/#ref-form-spell" data-context="true">spell xx</a><br>
Any spell can be cast on creatures, even ones that don't affect the battle like Call Boat or Stealth.<br>
However, only these spells will be useful:<br>
xx = 27 : Shield<br>
xx = 28 : Air Shield<br>
xx = 29 : Fire Shield <br>
xx = 30 : Air Defense <br>
xx = 31 : Fire Protection<br>
xx = 32 : Water protection <br>
xx = 33 : Earth protection <br>
xx = 34 : Anti-Magic<br>
xx = 36 : Magic Mirror <br>
xx = 41 : Bless <br>
xx = 43 Bloodlust<br>
xx = 44 : Precision <br>
xx = 46 : Stone Skin <br>
xx = 48 : Prayer<br>
xx = 49 : Mirth<br>
xx = 51 : Luck<br>
xx = 53 : Haste<br>
xx = 55 : Slayer<br>
xx = 56 : Frenzy<br>
xx = 58 : Counterstrike<br>
<strong>In columns 4..14 for (s) you can set:</strong><br>
0 : no magic<br>
1 : casts Basic version<br>
2 : casts Advanced version<br>
3 : casts the Expert version, but the “mass” spell only affects this creature<br>
4: casts Expert version on the entire army. Immunity is ignored<br>
5: casts the Expert version on the entire army, except those immune to this spell.<br>
6: Casts Expert version on the entire army except those immune to this spell, but ignores the immunity of a creature with this ability.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-27"></span><details class="erm-comment"><summary>Calls creature once (u) &lt;117&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">Will summon creatures for battlefield from the beginning of the second round if there is an empty square nearby for the summoned creature.<br>
The called stack might look like this:<br>
.#.<br>
.X#<br>
.#.<br>
. - empty cell<br>
# = possible position for the summoned creature<br>
X = creature with Summon ability<br>
The summoned creature does not spawn on an obstacle, but can spawn on a dead creature.<br>
<strong>In column 3 for (u) you can set:</strong><br>
#xx : xx = <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> to call. Creature can be the same type as the caller or any other.<br>
<strong>In columns 4..14 for (u) you can set:</strong><br>
any integer value from 0 to 255. This is the number of creatures that will appear on the summoned stack as a percentage of summoners. 
So if you set it to 25 and 12 creatures are summoned, the summoner stack will be 3 (25% of 12 = 3).</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-28"></span><details class="erm-comment"><summary>Calls creature multiple times (U) &lt;85&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">Creature will spawn creatures on battlefield several times, starting with the second round and again every four rounds (for example, rounds 2, 6, 10, 14, etc.), 
if there is an empty cell nearby. The number of creatures is calculated as a percentage of the number of summoners.<br>
The called stack might look like this:<br>
.#.<br>
.X#<br>
.#.<br>
. - empty cell<br>
# = possible position for the summoned creature<br>
X = creature with Summon ability<br>
The summoned creature does not spawn on an obstacle, but can spawn on a dead creature.<br>
<strong>In column 3 for (U) you can set:</strong><br>
#xx : xx = <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> to call. Creature can be the same type as the caller or any other.<br>
<strong>In columns 4..14 for (U) you can set:</strong><br>
any integer value from 0 to 255. This is the number of creatures that will appear on the summoned stack as a percentage of summoners. 
So if you set it to 25 and 12 creatures are summoned, the summoner stack will be 3 (25% of 12 = 3).</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-29"></span><details class="erm-comment"><summary>Magic Immunity (w) &lt;199&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">Grants immunity to a specific spell, all spells of a certain level and below (for example, all level 1 spells, or all levels 4, 3, 2 and 1), 
or to all spells of a certain school of magic (for example, all Water spells). There are also several groups of spells that can also be given immunity to 
(for example, immunity to Lightning or immunity to Fire damage)<br>
<strong>In column 3 for (w) you can set:</strong><br>
0 : &lt;48&gt; Removes all immunity to allied spells. You can use this ability with other immunities, e.g. 
so that Black Dragons do not resist friendly spells, except for Water magic. Use 0 first, then a certain resistance.<br>
<u>Example</u>:<br>
83    w    0    1    1    1    1   …<br>
83    w    w    1    1    1    1   …<br>
1 : &lt;49&gt; Immunity to all level 1 spells except allied ones.<br>
2 : &lt;50&gt; Immunity to all level 1 and 2 spells, except allied ones.<br>
3 : &lt;51&gt; Immunity to all spells of levels 1, 2 and 3, except allied ones.<br>
4 : &lt;52&gt; Immunity to all spells of levels 1, 2, 3 and 4, except allied ones.<br>
5 : &lt;53&gt; Immunity to all spells of levels 1, 2, 3, 4 and 5, except allied ones.<br>
6 : &lt;54&gt; Immunity to all level 1 spells, including allied ones.<br>
7 : &lt;55&gt; Immunity to all level 1 and 2 spells, including allied ones.<br>
8 : &lt;56&gt; Immunity to all level 1, 2 and 3 spells, including allied ones.<br>
9 : &lt;57&gt; Immunity to all level 1, 2, 3 and 4 spells, including allied ones.<br>
: : &lt;58&gt; Immunity to all level 1, 2, 3, 4 and 5 spells, including allied ones.<br>
B : &lt;66&gt; Immunity to Blindness<br>
C : &lt;67&gt; Immunity to cold spells (Ice Bolt and Ring of Cold)<br>
D : &lt;68&gt; Immunity to all targeted hit spells except:<br>
Magic Arrow, Lightning Strike, Chain Lightning, Meteor Shower, Implosion, Fireball, Armageddon, Fire Shield damage, Inferno, Ice Bolt and Frost Ring.<br>
H : &lt;72&gt; Hypnosis Immunity<br>
I : &lt;73&gt; Explosion Immunity<br>
K : &lt;75&gt; Berserker Immunity<br>
L : &lt;76&gt; Immunity to Lightning spells : Lightning Bolt, Titan Thunder, Chain Lightning.<br>
m : &lt;109&gt; Immunity to Blindness, Berserk, Sadness, Hypnosis and Forgetfulness.<br>
M : &lt;77&gt; Immunity to Meteor Shower<br>
N : &lt;78&gt; Spell Immunity Remove useful spells (e.g. Serpents)<br>
O : &lt;79&gt; Immunity to all Fire strike magics (except Magic Missile):<br>
Fire Wall, Fireball, Mines, Armageddon, Fire Shield Damage, Inferno.<br>
p : &lt;112&gt; Immunity to hostile Dispel Spells<br>
P : &lt;80&gt; Immunity to any Dispel Spells<br>
R: &lt;82&gt; Armageddon Immunity<br>
S : &lt;83&gt; Slow Immunity<br>
A : &lt;65&gt; Immunity to all Air spells except allies<br>
E : &lt;69&gt; Immunity to all Earth spells except allied ones<br>
F: &lt;70&gt; Immunity to all Fire spells except allied ones<br>
W : &lt;87&gt; Immunity to all Water spells except allied ones<br>
a : &lt;97&gt; Immunity to all Air spells, including allied ones<br>
e : &lt;101&gt; Immunity to all Earth spells, including allied ones<br>
f : &lt;102&gt; Immunity to all Fire spells, including allied ones<br>
w : &lt;119&gt; Immunity to all Air spells, including allied ones.<br>
<strong>In columns 4..14 for (w) you can set:</strong><br>
0: has no immunity<br>
1: has immunity</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-30"></span><details class="erm-comment"><summary>Resistance magic (W) &lt;87&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">Gives a chance to completely avoid any enemy spell. Also included are area effect spells like Meteor Shower 
(exception: resistance does not trigger for Chain Lightning if creature is not the target stack).<br>
<strong>In column 3 for (W) you can set:</strong><br>
+ : &lt;43&gt; Add bonus to resistance chance (0..100)<br>
= : &lt;61&gt; Set resistance chance (0..100)<br>
% : &lt;37&gt; Percentage bonus to resistance chance. For creatures with natural resistances, a percentage of their normal resistance is added 
(for example, for Dwarves, %50 will add 50% of 20, i.e. 10, in total they will receive only 30% resistance). Other creatures have a natural resistance of 0, so the command will have no effect.<br>
<strong>In columns 4..14 for (W) you can set:</strong><br>
Any integer value from 0 to 255.</blockquote></div></details></li>
</ol>

</div>
</section>
:::

## Related reference {#related}

[HE:C](../../receivers/he/) · [BM](../../receivers/bm/)



## Related commands and tables {#reference-links}

[Creature table](../../tables/creatures/) · [Battle start and completion (BA)](../../triggers/ba/) · [Stack experience abilities](../../tables/stack-experience-abilities/) · [EA:B modifiers](../../tables/stack-experience-modifiers/) · [Heroes (HE)](../he/#command-c-experience-modes)

<!-- llm:end erm.receivers.ea 3 -->

