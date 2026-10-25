# Creature experience and bonuses (EA)

ID: erm.receivers.ea
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/ea/
Part: 2/3
Source references: old-help:rec-ea.htm, old-help:cont-stackexpbonus.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ea 2 -->
<em class="erm-strong">Note:</em> bonuses of different levels do not stack. Only the bonus for the current level is given to the stack.</div>
<div class="erm-paragraph"><strong>Column 15</strong>: comments. You can enter anything there to describe the bonus line.<br>
<em class="erm-strong">Note:</em> If you are setting up or checking a bonus line through ERM, use the number in angle brackets &lt; &gt; instead of the letter. 
For example, if you are setting Attack, use 65 for the third parameter in the ERM command.</div>
<div class="erm-paragraph">Parameter bonuses (column 2):<br>
<strong>A : attack &lt;65&gt;<br>
D : protection &lt;68&gt;<br>
H : health &lt;72&gt;<br>
S : speed &lt;83&gt;<br>
m: min. damage &lt;109&gt;<br>
M: max. damage &lt;77&gt;<br>
O : number of shots &lt;79&gt;<br>
P: number of spells in battle &lt;80&gt;</strong> (applies only to creatures that already have their spells: Archangels have Resurrection, Master Djinn have a random useful spell, etc.)</div>
<div class="erm-paragraph">In column 3 for parameters you can set:<br>
<strong>+</strong> : &lt;43&gt; fixed stat bonus, e.g. +10 will add +10 to the creature's current stat<br>
<strong>=</strong> : &lt;61&gt; absolute parameter, i.e. =10 sets the creature's stat to 10 (even if the default is higher)<br>
<strong>%</strong> : &lt;37&gt; percentage bonus to the parameter. For example, %10 increases the creature's current stat by 10%.<br>
<em class="erm-strong">Note:</em> x.4 is rounded down and x.5 is rounded up, so 10% of 14 = 1.4 (rounded to 1) and 10% of 16 = 1.6 (rounded to 2).</div><div class="erm-paragraph">
In columns 4..14 for parameters you can set any integer value in the range 0..254.</div>
<div class="erm-paragraph">Special ability bonus (column 2):</div>
<div class="erm-paragraph">The following abilities can be given and are described below (click on the ability for details):<br>
</div><ol>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-1"></span><details class="erm-comment"><summary>Casts an expert (mass) spell after an attack (a) &lt;97&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">After any melee attack, there is a percentage chance that this spell will be cast on an Expert level target for three rounds, regardless of whether creature has resistance to it or not. 
If spell has a mass effect, it will be cast on all creatures of the enemy or your army (depending on the type of spell - impact or utility), regardless of whether they are immune.<br>
<em class="erm-strong">Note 1:</em> this ability does not work for ranged attacks. However, if the shooter creature goes into melee, the ability will work. Use (p), (c), (j) or (J) to make the shooter cast a spell.<br>
<em class="erm-strong">Note 2:</em> if you cast this ability multiple times (with the same or different spells), the maximum will be one spell per action. 
If you have 3 spells with a 50% chance each, any of them can be cast after an attack. If you need more spells to cast, you can also use the (c), (p), (j), (J), (k), or (K) abilities. 
They can be combined for greater effect.<br>
<strong>In column 3 for (a) you can set:</strong><br>
#xx : casts a spell <a href="../../tables/spells/#ref-form-spell" data-context="true">spell xx</a><br>
Almost all combat spells are available for this ability, including Quicksand, Fire Wall and Summon Elemental. 
Friendly spells (eg Shield) will be cast as a massive Shield on all allied troops whenever creature attacks an enemy, but if spell does not have a mass effect 
(for example, Anti-Magic, Magic Mirror, Fire Shield), he will cast a spell on the enemy. Spell Clone (65) will create a clone of an enemy creature you control, but be careful - don't give the ability at level 0, 
because the game will crash if a clone is cast from the side without a hero. Roots (72) bind the enemy and prevent him from moving until the binder moves away from the target or dies.<br>
Spells that cannot be cast and will cause the game to crash or have no effect include: Resurrection, Animate Dead, Sacrifice, Death Cloud, Titan Thunder and Death Stare. 
Teleport works, but makes the battle unwinnable for that player - the target stack "disappears" but still counts for the battle. He cannot move or attack in melee (or be attacked) 
but if he is a marksman, he can still shoot. You can also give spell Paralysis (74) and Petrification (70).<br>
<strong>In columns 4..14 you can set:</strong><br>
Any integer in the range 0..100. This is the percentage chance of the spell working.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-2"></span><details class="erm-comment"><summary>Reduces target's defense (b) &lt;98&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note"><strong>In column 3 for (b) you can set:</strong><br>
= : &lt;37&gt; The percentage of chance that the target's defense will decrease when attacked by this creature.<br>
<strong>In columns 4..14 for (b) you can set:</strong><br>
Any integer in the range 0..100. This is the percentage of how much protection will be removed during an attack. For Beasts, Ancient Beasts, and Wraith Beasts, you can adjust their defense reduction bonus up or down with this ability. 
If you do not set this bonus to a creature, the default ones are used (40 for Beasts, 80 for Ancient Beasts, 100 for Wraith Beasts). 
An example of increasing the bonus of Ancient Creatures:   97   b   =   80   82   85  …</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-3"></span><details class="erm-comment"><summary>Block (B) &lt;66&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note"><strong>In column 3 for (B) you can set:</strong><br>
+ (or =) : &lt;43&gt; (or &lt;61&gt;) Percentage chance (0..100) of triggering 
abilities.<br>
<strong>In columns 4..14 for (B) you can set:</strong><br>
Any integer from 0 to 100. This is the percentage chance of the block being triggered.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-4"></span><details class="erm-comment"><summary>Casts a non-target spell (c) &lt;99&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">After any attack (melee or ranged), there is a chance that this spell will be cast on the target creature for three rounds, regardless of spell immunity or whether the enemy already has it.<br>
<em class="erm-strong">Note:</em> if you grant this ability multiple times (with the same spell or with different spells), a maximum of one spell will be cast per action. 
The effects of the creatures themselves are included, such as Curse Black Knights, Weakness Serpents or Disease Zombie. If you have 3 spells with a 50% chance each, only the first spell will trigger 
(unlike other abilities where any one of them can work). If you need more than one spell, you can also use the (p), (j), (J), (a), (k), or (K) abilities. 
They can all be combined for greater effect.<br>
<strong>In column 3 for (c) you can set:</strong><br>
#xx : casts a spell <a href="../../tables/spells/#ref-form-spell" data-context="true">spell xx</a><br>
The following spells are available:<br>
78: remove useful spells<br>
42: Curse<br>
45: Weakness<br>
47: Disrupting Ray<br>
50: Sorrow<br>
52: Misfortune<br>
54: Slow<br>
59: Berserk<br>
60: Hypnotize<br>
61: Forgetfulness<br>
62: Blind<br>
71: Poison<br>
73: Disease<br>
75: Old Age<br>
80: Acid Breath<br>
<strong>In columns 4..14 for (c) you can set:</strong><br>
Any integer between 0 and 100. This will be the percentage chance of the spell working.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-5"></span><details class="erm-comment"><summary>Reduces the cost of spells (C) &lt;67&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note"><strong>In column 3 for (C) you can set:</strong><br>
+ : &lt;43&gt; add magic cost reduction bonus. For Mages and Archmages the default value is 2. For other creatures = 0. So, if you set +5, then for Mages the value will be 7, for other creatures - 5.<br>
= : &lt;61&gt; set a magic cost reduction bonus. For example, = 4 will set the required mana reduction to 4, regardless of creature type<br>
% : &lt;37&gt; percentage reduction bonus. For Mages and Archmages, a percentage of their normal value is added (for example, %50 will add 50% to 2, i.e. 1). For other creatures the usual value = 0, i.e. The command will have no effect on them.<br>
<strong>In columns 4..14 for (C) you can set:</strong><br>
Any integer from 0 to 255.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-6"></span><details class="erm-comment"><summary>Defense Bonus (d) &lt;100&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note"><strong>In column 3 for (d) you can put:</strong><br>
+ : &lt;43&gt; add a bonus to the normal defense bonus when choosing this action<br>
= : &lt;61&gt; a certain defense bonus for the “defend” action. You can set the bonus more or less than the standard one.<br>
% : &lt;37&gt; percentage bonus to defense on a defend action, e.g. if the stack has 20 defense, a 75% bonus will add 15 defense on a defend action<br>
<strong>In columns 4..14 for (d) you can set:</strong><br>
Any integer value.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-7"></span><details class="erm-comment"><summary>Double damage with Mortal Strike (e) &lt;101&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note"><strong>In column 3 for (c) you can set:</strong><br>
+ : &lt;43&gt; add bonus to Deathblow chance as a percentage (0..100). Death Knights have a base chance of 20%, all others have a base chance of 0%.<br>
= : &lt;61&gt; set the percentage of Deathblow drops (0..100)<br>
% : &lt;37&gt; percentage bonus to Deathblow chance. For Death Knights, adds a percentage to their current value (for example, for Death Knights, %50 will add 50% of 20, i.e. 10, giving them a total chance of 30%). 
For other creatures the value = 0, so % will have no effect.<br>
<strong>In columns 4..14 for (e) you can set:</strong><br>
Any integer value from 0 to 255.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-8"></span><details class="erm-comment"><summary>Death Stare (E) &lt;69&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">
<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-stackexpbonus-q1"></span><span class="erm-tone-quote erm-note">[only works for Mighty Gorgons and Nightmares]</span></div>
If you give a bonus to these creatures, you must set up an entire line with the normal chance to trigger.<br>
<strong>In column 3 for (E) you can set:</strong><br>
+ (or =) : &lt;43&gt; (or &lt;61&gt;) Percentage chance (0..100) for the ability to trigger.<br>
<strong>In columns 4..14 for (E) you can set:</strong><br>
Any integer value from 0 to 100.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-9"></span><details class="erm-comment"><summary>Flag abilities 1 (f) </summary><div class="erm-comment-body">
<blockquote class="erm-note"><strong>In column 3 for (f) you can set:</strong><br>
F : &lt;70&gt; Fly. If creature does not have a flight animation, it will simply walk through obstacles (such as Ghost Beasts)<br>
S : &lt;83&gt; Archery. If creature does not have a shooting animation, nothing will happen. Right now, the only creature that don't normally shoot but have a shooting animation are Centaurs and Centaur Captains. 
Only use 0 and 1 for them, not 2.<br>
B : &lt;66&gt; Dragon's Breath. Gives the creature a dragon attack - in melee it hits the target stack and which is located behind it.<br>
L: &lt;76&gt; Alive.<br>
1 : &lt;49&gt; King 1. Creature with this flag is vulnerable to the basic Executioner<br>
2 : &lt;50&gt; King 2. Creature with this flag is vulnerable to advanced Executioner<br>
3 : &lt;51&gt; King 3. Creature with this flag is vulnerable to expert Executioner<br>
P: &lt;80&gt; Mind Spell Immunity<br>
E : &lt;69&gt; No melee penalty for shooting creatures.<br>
I : &lt;73&gt; Immunity to Fire school spells<br>
D : &lt;68&gt; Double strike. Works for melee and marksmen.<br>
R: &lt;82&gt; No enemy retaliation. Enemies do not retaliate against this creature's attacks<br>
M : &lt;77&gt; Immune to morale. Creature does not benefit from good or bad morale in battle.<br>
U : &lt;85&gt; Undead. Unliving creatures can be animated by the Animate Dead spell. "Immune to Mind Spells" and "Immune to Morale" must be set separately.<br>
A : &lt;65&gt; Attacks everyone around. Creature attacks all enemies near it.<br>
G : &lt;71&gt; Dragon. Creature will receive bonuses from Vial of Dragon Blood and similar items.<br>
<strong>In column 4..14 for (f) you can set:</strong><br>
0 : No ability. Creature does not have an ability and will be removed if it has one.<br>
1: has the ability. Creature gains the ability if it didn't have it before.<br>
2 : Do not change the ability value. If creature already has the ability, it will remain. If he didn’t have it, then he won’t have it.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-10"></span><details class="erm-comment"><summary>Flag abilities 2 (f) </summary><div class="erm-comment-body">
<blockquote class="erm-note"><strong>In column 3 for (f) you can set:</strong><br>
b : &lt;98&gt; Strike and return. Any creature that moves for a melee attack will return to the starting square after attacking (like Harpies).<br>
<em class="erm-strong">Note:</em> you cannot remove this ability from Harpies, Harpy Witches, and Dark Dragons.<br>
c : &lt;99&gt; Takeoff run. Adds 5% damage for each square passed to the target (like Champions)<br>
f : &lt;102&gt; Fearlessness. Creature is immune to Fear.<br>
m : &lt;109&gt; Always positive morals.<br>
r : &lt;114&gt; Revival. 20% of creatures will be resurrected after all creatures die.<br>
For this ability, you must also set the number of resurrections with the P ability.<br>
For example, let's allow Spearmen to respawn 99 times:<br>
0    f    r    1    1   …<br>
0    P    =    99    99    99   …<br>
s : &lt;115&gt; Shoots close. Allows ranged creatures to use shooting while being close to the enemy.<br>
u : &lt;117&gt; Unicorn Aura of Magic Resistance. Adds 20% magic resistance to all creatures around the creature with this ability.<br>
<strong>In columns 4..14 for (f) you can set:</strong><br>
0 : No ability. Creature does not have an ability and will be removed if it has one.<br>
1: has the ability. Creature gains the ability if it didn't have it before.<br>
2 : Do not change the ability value. If creature already has the ability, it will remain. If he didn’t have it, then he won’t have it.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-11"></span><details class="erm-comment"><summary>Fear (F) &lt;70&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note"><strong>In column 3 for (F) you can set:</strong><br>
+ (or = ): &lt;43&gt; (or &lt;61&gt; ) Gives the ability of Fear or not.<br>
<em class="erm-strong">Note:</em> you cannot remove the Fear ability from creatures that already have it (such as Azure Dragons).<br>
<strong>In columns 4..14 for (F) you can set:</strong><br>
0 (do not give Fear ability)<br>
1 (give Fear ability)</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-12"></span><details class="erm-comment"><summary>Resistance magic (Golem) (g) &lt;103&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">Reduces damage dealt by targeted impact spells. If you set this ability to a creature that already has it (such as a Golem), you need to adjust it for all levels. 
Example for Golden Golems (only deal 15% damage), you should set the line:<br>
116    g    %    85    90    95   …<br>
Or if you want to lower its resistance, try<br>
116    g    %    80    85    90   …<br>
If you don't set this bonus line on a creature that already has its own resistance, it will be used as a normal resistance.<br>
<strong>In column 3 for (g) you can set:</strong><br>
% : &lt;37&gt; Magic resistance percentage</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-13"></span><details class="erm-comment"><summary>Additional Santa Gremlin Guards (G) &lt;71&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">Use this ability to increase the guards around the Santa Gremlins, or change the guards to improved ones (for example, Halberdiers for the Castle hero, Gremlin Master for the Tower hero, etc.)<br>
<em class="erm-strong">Note:</em> this ability cannot be used by creature other than Santa Gremlin.<br>
<strong>In column 3 for (G) you can set:</strong><br>
= : &lt;61&gt; use to upgrade guards<br>
+ : &lt;43&gt; use to add a certain number of guards<br>
% : &lt;37&gt; use to add guards to percentages<br>
<strong>In column 4..14 for (G) you can set:</strong><br>
For = in column 3, use 0 or 1. 1 will improve the guards.<br>
For +, use any integer value from 0 to 255. This will be the number of guards added.<br>
For %, use any integer value between 0 and 255. This is the percentage of extra guards on each stack.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-14"></span><details class="erm-comment"><summary>Hatred (h) &lt;104&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">You can also set the attack to decrease instead of increasing the attack, but the texts of the combat messages will not change.<br>
<strong>In column 3 for (h) you can set:</strong><br>
#xx : deals extra (or reduced) damage <a href="../../tables/creatures/#ref-form-creature" data-context="true">essence xx</a>.<br>
<strong>In columns 4..14 for (h) you can set:</strong><br>
1…200 (10% extra damage per 1)<br>
or 201…210 (10% less damage by 1)<br>
<u>Example</u>:<br>
-1    h    #52    5    …<br>
Means that all level 1 (-1) creatures hate (h) Ifrits (#52) and deal 50% extra damage to them (5*10)<br>
-2    h    #53    203    …<br>
Means that all creatures of level 2 (-2) “hate” Ifrit Sultans and deal 30% less damage ((200-203)*10)</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-15"></span><details class="erm-comment"><summary>No range penalty (i) &lt;105&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note"><strong>In column 3 for (i) you can set:</strong><br>
+ ( or = ) : &lt;43&gt; (or &lt;61&gt; ) Give ability No range penalty or not.
<em class="erm-strong">Note:</em> you cannot take this ability away from creatures that already have it (such as Sharpshooters).<br>
<strong>In columns 4..14 for (i) you can set:</strong><br>
0 (do not give ability)<br>
1 (give ability)</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-16"></span><details class="erm-comment"><summary>Casts Basic spell before attacking (j) &lt;106&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">Before an attack (melee or ranged), there is a chance that this spell will be cast on the target for 3 rounds, regardless of whether they are immune.<br>
Note: If you grant this ability multiple times (with different or the same spells), a maximum of one spell will trigger per action. 
If you have 3 spells with a 50% chance each, any of them can be cast on the target after an attack. If you need more spells, you can use abilities (c), (p), (J), (a), (k), or (K). 
They can be combined for greater effect.<br>
<strong>In column 3 for (j) you can set:</strong><br>
#xx : casts a spell <a href="../../tables/spells/#ref-form-spell" data-context="true">spell xx</a><br>
Almost all combat spells are available for this ability, including Quicksand, Fire Wall and Summon Elemental. 
Friendly spells (eg Shield) will be cast as a massive Shield on all allied troops every time creature attacks an enemy, 
but if spell does not have a mass effect (for example, Anti-Magic, Magic Mirror, Fire Shield), it will cast a spell on the enemy. 
Spell Clone (65) will create a clone of an enemy creature under your control, but be careful - do not give the ability at level 0, because the game will crash if the clone is cast from the side without a hero. 
Roots (72) bind the enemy and prevent him from moving until the binder moves away from the target or dies.<br>
Spells that cannot be cast and will cause the game to crash or not work include: Resurrection, Animate Dead, Sacrifice, Death Cloud, Titan Thunder and Death Stare. 
Teleport works, but makes the battle unwinnable for that player - the target stack "disappears" but still counts in the battle. He cannot move or attack in melee 
(or be attacked), but if he is a shooter, he can still shoot. The spells Paralyze (74), Petrify (70) or Blind (62) have little utility with ability j, 
because their effect is immediately canceled by the attack: use ability (a) on them.<br>
<strong>In columns 4..14 for (j) you can set:</strong><br>
Any integer value from 0 to 100. This is the percentage chance of the spell working.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-17"></span><details class="erm-comment"><summary>Cast Advanced spell before attacking (J) &lt;74&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">Before an attack (melee or ranged), there is a chance that this spell will be cast on the target for 3 rounds, regardless of whether they are immune.<br>
<em class="erm-strong">Note:</em> if you grant this ability multiple times (with different or the same spells), a maximum of one spell will trigger per action. 
If you have 3 spells with a 50% chance each, any of them can be cast on the target after an attack. If you need more spells, 
you can use abilities (c), (p), (j), (a), (k) or (K). They can be combined for greater effect.<br>
<strong>In column 3 for (J) you can set:</strong><br>#xx : casts a spell <a href="../../tables/spells/#ref-form-spell" data-context="true">spell xx</a><br>
Almost all combat spells are available for this ability, including Quicksand, Fire Wall and Summon Elemental. 
Friendly spells (eg Shield) will be cast as a massive Shield on all allied troops whenever creature attacks an enemy, but if spell does not have a massive 
effect (for example, Anti-Magic, Magic Mirror, Fire Shield), he will cast a spell on the enemy. Spell Clone (65) will create a clone of an enemy creature under your control, 
but be careful - don't give the ability at level 0, because the game will crash if the clone is cast from the side without a hero. Roots (72) bind the enemy and prevent him from moving, 
until the binder moves away from the target or dies.<br>
Spells that cannot be cast and will cause the game to crash or not work include: Resurrection, Animate Dead, Sacrifice, Death Cloud, Titan Thunder and Death Stare. 
Teleport works, but makes the battle unwinnable for that player - the target stack "disappears" but still counts in the battle. He cannot move or attack in melee 
(or be attacked), but if he is a shooter, he can still shoot. The spells Paralyze (74), Petrify (70) or Blind (62) have little utility with ability j, 
because their effect is immediately canceled by the attack: use ability (a) on them.<br>
<strong>In columns 4..14 for (J) you can set:</strong><br>
Any integer value from 0 to 100. This is the percentage chance of the spell working.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-18"></span><details class="erm-comment"><summary>Casts Basic spell after attack (k) &lt;107&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">After any melee attack, there is a chance that the target will be enchanted with this spell for 3 rounds, regardless of the presence of immunity.<br>
<em class="erm-strong">Note 1:</em> this ability does not work for ranged attacks. However, it will work if the shooter goes into melee. 
You can use (p), (c), (j) or (J) to cast a spell on a ranged attack.<br>

<!-- llm:end erm.receivers.ea 2 -->

