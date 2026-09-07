---
{"title":"Battle stack (BM)","summary":"BM receiver: battle stack, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Battle stack (BM)"}
---

## Receiver BM {#ref-rec-bm}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-bm-text"></span><div>
<span class="erm-anchor" id="ref-rec-bm-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>BM</strong> (parameters of creatures in battle)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-bm-red"></span><span class="erm-tone-red">
!!BM#:XXXX;</span> 
- set/check/get some creature stack options.</strong><br>
# - stack number (0..41). The numbers used are 0..20 for the first (0) player and 21..41 for the second (1) player.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-a"></span><span class="erm-anchor" id="command-a-d-h-s"></span><span class="erm-tone-red"><strong>A$</strong><br>

</span>Attack (parameter) of the creature</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-b"></span><span class="erm-anchor" id="command-b-n"></span><span class="erm-tone-red"><strong>B$</strong></span><br>
Number of creatures on the stack (at the beginning of the battle)<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-bm-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-bm-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!BM0:B?v51; - write the initial number of creatures in v51
!!BM0:B100; - set the number of creatures at the beginning of the battle (creatures will not be added)
Losses are calculated as follows: The number of units at the beginning of the battle (BM:B) minus those left alive (BM:N) - there cannot be negative losses.</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-c"></span><span class="erm-anchor" id="command-c-1-2-3-4-5"></span><span class="erm-tone-red"><strong>C#1/#2/#3/#4/#5</strong></span><br>
Cast spell:<br>
         #1 – <a href="../../tables/spells/#ref-form-spell" data-context="true">spell number</a><br>
         #2 – <a href="../../tables/battlefield/#ref-form-bf" data-context="true">spell position</a><br>
         #3 – spell level (0..3): this is like skill level (no/baz/ADV./expert)<br>
         #4 – Spell Power (Strength/Duration): This is like Spell Hero Power<br>
         #5 – check for the existence of a creature (0 - do not perform, 1 - perform)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bm-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bm-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">The 5th parameter must be equal to 1 so as not to cause 
errors during execution, but most spells work with 0.<br>
There is a bug that it is impossible to apply Resurrection using this method (the game goes into a dark screen). </div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-d"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
Defense (parameter) of the creature</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-e"></span><span class="erm-anchor" id="command-e-f"></span><span class="erm-tone-red"><strong>E$</strong></span><br>
Number of spells (for sorcerer creatures)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bm-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bm-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This is the number of spells that creature can cast in one battle.<br>
For example, for Archangels this value is 1. After they resurrect someone, the value is set to 0.<br>
For trigger <a href="../../triggers/bg/#ref-tr-bg">!?BG</a>: value changes <strong>after</strong> trigger for casting a spell.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-f"></span><span class="erm-tone-red"><strong>F$</strong></span><br>
<a href="../../tables/creature-flags/#ref-form-flaggedabilities" data-context="true">Flags</a> creatures<br>
<u></u><br></div><span class="erm-anchor" id="ref-rec-bm-4"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bm-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
To check these bits use BM:F, then <a href="../vr/#ref-rec-vr-and">VR:&amp;</a> with 
the value of the corresponding bit that interests you. Remember that flags are 32-bit.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!BM0:F?i; write the values of the flags of the first stack to the variable i
!!VRi:&amp;33554432; check for waiting
!!IF&amp;i&gt;0:M^Stack is waiting for the best moment to act^;</code></pre>
However, it is worth adding that in this example the wait flag returns "true" while there is no general wait phase in the battle (when all units have already received the opportunity to take an action). And this universal phase can already be determined through:
<pre class="erm-example"><code class="language-erm">!!UN:C6919200/4/?y9;
!!VRy10:Sy9 +81380;
!!UN:Cy10/1/?y11; check for wait phase: 0=NO, 1=YES</code></pre>
Thus, in order to find out whether stack is waiting or not, when the general waiting phase has arrived, you need to check for the phase itself, check for special flags 26 (the stack was in use) and 27 (the stack was protected).</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-g"></span><span class="erm-anchor" id="command-g-1-2"></span><span class="erm-tone-red"><strong>G#/$1/$2</strong></span><br>
Set/check/get active spell parameters<br>
         # – <a href="../../tables/spells/#ref-form-spell" data-context="true">spell number</a><br>
         $1 – set/check/get duration<br>
         $2 – set/check/get spell power<br>
When setting the spell's duration to 0, the image still remains, but the effect of the spell disappears.<br>
<br></div><span class="erm-anchor" id="ref-rec-bm-5"></span><details class="erm-comment"><summary><strong>Additionally</strong> (<span class="erm-anchor" id="ref-rec-bm-show5"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
<strong>BM:G</strong> - This is a “sloppy” feature, and allows you to change hundreds of characteristics of a creature, not just the spells cast.<br>
<div class="erm-paragraph">Call: <span class="erm-anchor" id="ref-rec-bm-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!BM</span>x:G#/$/d;</strong>, where:<br>
    <strong>#</strong> - a certain numerical parameter (see the table below), using which you can change any information about the creature, both available (attack, health, etc.) and inaccessible (for example, sounds, animation).<br>
    <strong>$</strong> - value for parameter #.<br>
To avoid errors, "/d" at the end of the command is required.</div>
<span class="erm-anchor" id="ref-rec-bm-n2"></span><h4 class="erm-tone-purple erm-strong">Table of known values for BM:G:</h4>
<span class="erm-anchor" id="ref-rec-bm-q1"></span><blockquote class="erm-tone-quote erm-note"><span class="erm-tone-red">Red</span> string parameters are highlighted - to change you will need <a href="../../examples/#ref-cont-lib-str">functions for working with strings at a low level</a>.<br>
<span class="erm-tone-accent">Gray</span> It is highlighted that changing is problematic - we can only advise reading the data from one creature and putting it on another.</blockquote>
<div class="erm-paragraph"><strong>-100</strong>: Creature visibility (4 - visible, 8 - invisible)<br>
Units lose invisibility upon any action on battlefield. But it can be restored in the trigger <a href="../../triggers/bg/#ref-tr-bg">!?BG1</a>.<br>
<strong>-90</strong>: Are there numbers for the number of creatures? (0 = yes, 1 = no)<br>
Stack does not have a designation for the number of creatures, until it looks like it. At the same time, you can cast magic on him and beat him. 
Quantity is shown when clicked <span class="erm-anchor" id="ref-rec-bm-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> in the lower right corner of the picture (where it usually is, in general).<br>
<strong>-89</strong>: Creature type<br>
The unit’s parameters become the same as those of the creature whose number is set, but are immediately reduced to the standard parameters of the creature that is being changed. 
Squad name in menu when clicked <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> essentially changes; when he is beaten, his name remains changed. 
When the battle is over, the picture will show the configured stack, not the old one. If you change the type of creature, the battle becomes impossible to win 
(the logic of the game requires killing the one who attacked, and changing the type of creatures is equivalent to summoning another creature, without destroying the old one (according to the logic of the game again)). 
This problem renders the option virtually useless.<br>
<strong>-88</strong>: Creature's position <br>
If you change it, a copy will remain in the old place. The copy cannot walk or be attacked, it takes up space.<br>
<strong>-87</strong>: Animation number<br>
With a value of 2,6,9... (many other places) the game displays a black screen. Frames are taken in the same order as when created.<br>
<strong>-86</strong>: Frame number in animation<br>
The animation returns to normal when hovered over with the mouse<br>
<strong>-83</strong>: Number of creatures (real)<br>
<strong>-82</strong>: Number of creatures to display <br>
May not match the quantity. In this case, one thing will be written, but in reality something else. Default is <strong>-1</strong> – means “completely coincides with the real thing.”<br>
After any creature comes under attack, this value will become equal to the real quantity; the results of the battle show the actual number of killed; 
when attacking a modified creature, phantom creatures are not taken into account (i.e., if you change 10 creatures to 100 with this command and attack, then the damage will be done by these 10). 
But it can be restored in trigger !?BG1.<br>
<strong>-81</strong>: Irreversible loss.<br>
The number of creatures after a won battle (or after a payoff) is equal to the “current number of creatures” minus “irretrievable losses”. 
Losses can be recorded as irrevocable when used, for example, after Resurrection without the Earth Magic skill or with it, but at a basic level.<br>
<strong>-80</strong>: The difference between current health and full health.<br>
If 0 means the stack is healthy.<br>
<strong>-79</strong>: Hero slot number (0..6), -1 – will be deleted after the battle<br>
<strong>-78</strong>: Number of creatures at the beginning of the battle<br>
<strong>-73</strong>: Town-owner (creatures)<br>
<strong>-69</strong>: Creature flags<br>
<span class="erm-tone-red"><strong>-68</strong>: Creature name<br>
<strong>-67: </strong>Creature name (plural)<br>
<strong>-66</strong>: Status bar (e.g. "No melee penalty")</span><br>
<strong>-54</strong>: Health (full)<br>
<strong>-53</strong>: Speed<br>
<strong>-52</strong>: Attack<br>
<strong>-51</strong>: Protection<br>
<strong>-50</strong>: Min. damage<br>
<strong>-49</strong>: Max. damage<br>
<strong>-48</strong>: Ammunition<br>
<strong>-41</strong>: Owner (does not work quite correctly)<br>
<strong>-40</strong>: Stack number (0..21)<br>
<strong>-38</strong>: Creature's Y displacement<br>
<strong>-37</strong>: Creature's displacement in X<br>
From where creature should be. In pixels.<br>
<strong>-19</strong>: Offset along the OX axis of the rectangle with the number of creatures.<br>
<strong>-17</strong>: Random animation playback frequency.<br>
The less, the more often. So, a value of 200 will give a continuous animation.<br>
<span class="erm-tone-accent"><strong>-13</strong>: Creature animation<br>
<strong>-12</strong>: Projectile animation (see. <a href="../../tables/projectiles/#ref-form-weapon" data-context="true">table</a>)<br>
<strong>-10</strong>: Moving sound<br>
<strong>-9</strong>: Attack sound<br>
<strong>-8</strong>: Sound of damage<br>
<strong>-7</strong>: Shot sound<br>
<strong>-6</strong>: Sound of Death<br>
<strong>-5</strong>: Sound of protection</span><br>
<strong>-1</strong>: Number of active spells (to display the color of the number of creatures).<br>
[<span class="erm-anchor" id="ref-rec-bm-wt"></span><strong class="erm-legacy-label">0..65</strong>]: working with spells (normal operation of command BM:G)<br>
<strong>173</strong>: Number of active spells (to display when clicked <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">).<br>
<strong>212</strong>: Creature Morality<br>
<strong>213</strong>: Luck creatures<br>
Morale and luck are recalculated when the turn is transferred to another creature. Therefore only useful for receiving or checking. 
If you really need to change, then you can do it either before the attack, or every turn.</div></div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-h"></span><span class="erm-tone-red"><strong>H$</strong></span><br>
Maximum creature health</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-i"></span><span class="erm-anchor" id="command-i-o-t"></span><span class="erm-tone-red"><strong>I$</strong></span><br>
Hero Affiliation $: <br>
         0 – left<br>
         1 – right</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-j"></span><span class="erm-anchor" id="command-j-k-l"></span><span class="erm-tone-red"><strong>J?$</strong></span><br>
Get or check the number of active spells</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-k"></span><span class="erm-tone-red"><strong>K#</strong></span><br>
Deal # damage to a creature<br>
With this action trigger 
<a href="../../triggers/mf/#ref-tr-mf">!?MF</a> doesn't work</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-l"></span><span class="erm-tone-red"><strong>L$</strong></span><br>
Amount of creature health lost on the stack<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bm-6"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bm-show6"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
For example, if the Crossbowman has 10 health, and he was dealt 4 units. damage, then the command value will be 4.<br>
If you dealt 10 units. damage, then Archer dies, and the next Archer will have the value of this command 0.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-m"></span><span class="erm-anchor" id="command-m-1-2-3"></span><span class="erm-tone-red"><strong>M#1/#2/#3</strong></span><br>
Cast spell on a creature<br>
         #1 – <a href="../../tables/spells/#ref-form-spell" data-context="true">spell number</a><br>
         #2 – duration<br>
         #3 – skill level (0 – none, 1 – basic, 2 – advanced, 3 – expert)<br>
If you cast spell that creature already has, it will be ignored. But you can use "Dispel" :)<br>
<br></div><span class="erm-anchor" id="ref-rec-bm-7"></span><details class="erm-comment"><summary><strong>Additionally</strong> (<span class="erm-anchor" id="ref-rec-bm-show7"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
You can also cast special spells:<br>
70. Petrification<br>
71. Poison<br>
72. Roots<br>
73. Disease<br>
74. Paralysis<br>
75. Old age<br>
You can set these 6 spells with no problem, except that Bound creature will never be able to move (duration ignored), 
and the poisoned creature will not take damage in the first round of battle. And, of course, there are no spell casting graphics, 
although everything inside the creature is displayed correctly - the petrified creature looks like a stone and does not get a move, etc.<br>
You can set any other spell with this command, even those that do not matter in the battle - 
for example, you can give a creature Summon Ship for 3 rounds.<br>
The graphics will be shown when you right click on a creature, and will look like a "summon ship". Creature will have a green quantity indicator 
(i.e. positive spell), with the exception of spells shown in red (Magic Arrow, Implosion). 
The extra spells from number 76 seem to have been used for creature abilities that have an image and an effect, but do not permanently affect the stack 
(i.e. it is not shown when right clicking on creature). You can set these spells on creature with this command, but no picture will be shown 
(but, nevertheless, the name is shown when you hover over an empty square) or the game will crash (and this is not consistent - sometimes it crashes, sometimes you see an empty square).<br>
And if you use <a href="./#ref-rec-bm-c">BG:C</a>to try to “cast” one of these spells, either nothing happens or it crashes.<br>
76. Cloud of Death<br>
77. Lightning Bolt<br>
78. Removing useful spells<br>
79. Death Glare<br>
80. Acid breath</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-n"></span><span class="erm-tone-red"><strong>N$</strong></span><br>
Number of creatures on stack (current)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-o"></span><span class="erm-tone-red"><strong>O$</strong></span><br>
Creature slot number in the hero's army (0..6, -1)<br>
If $ = -1, the stack does not belong to the hero's army 
(summoned)<br>
<span class="erm-anchor" id="ref-rec-bm-bold"></span><em class="erm-strong">Note:</em> Stacks 20 and 41 always have a value of 0.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-p"></span><span class="erm-anchor" id="command-p-r"></span><span class="erm-tone-red"><strong>P$</strong></span><br>
Position on <a href="../../tables/battlefield/#ref-form-bf" data-context="true">battlefield</a><br>
Can be used as a teleporter</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-q"></span><span class="erm-anchor" id="command-q-1-2-3"></span><span class="erm-tone-red"><strong>Q#1/#2/#3</strong></span><br>
Place a patch of Quicksand or a mine in position<br>
         #1 – type (0 – sand, 1 – mines)<br>
         #2 – <a href="../../tables/battlefield/#ref-form-bf" data-context="true">position</a><br>
         #3 – update (1 – yes, 0 – no)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-bm-8"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bm-show8"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This command automatically checks if you can place a mine or sand. You can use stack number 0 for the left hero and 21 for the right one, 
to be sure of placing an obstacle (the stack can be dead - all you need is the side number (i.e. you can use 0-20 for the left hero and 21-41 for the right)</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-r"></span><span class="erm-tone-red"><strong>R$</strong></span><br>
Number of responses to attacks (check for Royal Griffins)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bm-9"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bm-show9"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This is the number of stack responses remaining until the end of the round. It is equal to one every round and after the answer is equal to 0. Royal griffins have 5000 answers every round.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-s"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
Creature speed.<br>
<strong><u>Comment</u>:</strong> the resulting value does not include magical speed effects.</div>
<div class="erm-tone-quote erm-note erm-paragraph">See also: team <a href="./#ref-rec-bm-u6">BM:U6</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-t"></span><span class="erm-tone-red"><strong>T$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature type</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-u"></span><span class="erm-anchor" id="command-u"></span><span class="erm-tone-red"><strong>U#/$</strong></span><br>
Change creature parameters<br>
         # = 1 – set/check/get minimum damage in $<br>
         # = 2 – set/check/get maximum damage in $<br>
         # = 3 – set/check/get the number of shots in $<br>
         # = 4 – change spell creatures to $<br>
         # = 5 - stack clone. If no stack clones exist, $ = -1. 
otherwise it is equal to 0..41 - the number of the clone stack of the sought stack (the sought one is # in <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!BM</span>#:U5/$;</strong>). 
If creature dies, its clones die too.<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-bm-10"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-bm-show10"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can only change spell creatures to related ones. For example, if creature casts spell on allied creatures 
(say, Ogre Shaman - Bloodlust), you can change spell to any single positive spell (for example, Mirth or Haste), 
but not attacking (Magic Arrow or Slow), otherwise the AI will never use it. However, if you need, 
To ensure that only human players have this feature, you can configure almost any spell without problems.<br>
This example is confirmed by the Commanders, they cast spell like Ogre shamans.<br>
Also remember that this command does not affect creatures that cast a random spell (for example, Fairy Dragon and Master Genie)</div></details> 
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-u6"></span><span class="erm-tone-red"><strong>U6/?$</strong></span><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Get the real stack speed (all bonuses/penalties are taken into account).</div>
<div class="erm-tone-quote erm-note erm-paragraph">See also: team <a href="./#ref-rec-bm-s">BM:S</a>.
</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-v"></span><span class="erm-anchor" id="command-v-z"></span><span class="erm-tone-red"><strong>V#</strong></span><br>
Show <a href="../../tables/combat-animations/#ref-form-formatanimation" data-context="true">animation #</a> for the stack.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-z"></span><span class="erm-tone-red"><strong>Z?$</strong></span><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
The command returns the memory address <a href="../../tables/combat-stack-structure/#ref-form-combatmon" data-context="true">structure of the specified stack</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bm-11"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-bm-show11"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; This function finds out the total number of spells (x2=404 and x3=4 bytes) cast on the first stack of the attacking side (x1=0)
!!FU(BattleStack_GetParam):P0/404/4/?y10; the result will be entered in y10

!?FU(BattleStack_GetParam);
; Sample function for getting combat stack parameters:
; x1 - stack number in the battle
; x2 - offset to the specified parameter
; x3 - number of bytes (1, 2, 4)
; x4 - return value
!!BMx1:Z?y1;
!!UN:Cy1/x2/x3/?x4;</code></pre></div></details>

<hr>














</div>
</div>
</section>
:::

## Related reference {#related}

[MA](../../receivers/ma/) · [UN:C](../../un-c/)



## Related commands and tables {#reference-links}

[Spell table](../../tables/spells/) · [Battlefield hexes](../../tables/battlefield/) · [Battle actions (BG)](../../triggers/bg/) · [Creature bit flags](../../tables/creature-flags/) · [Variables and expressions (VR)](../vr/) · [ERM examples](../../examples/) · [Projectiles and beams](../../tables/projectiles/) · [Physical damage calculation (MF)](../../triggers/mf/) · [Creature table](../../tables/creatures/) · [ERM debugging and compatibility](../../compatibility/) · [BM:V animations](../../tables/combat-animations/) · [Combat stack fields](../../tables/combat-stack-structure/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.19, +](../../compatibility/#era3-v-3-9-19-l197) — Added automatic grid and selection redraw after using BM:Q on inactive stack.
- [ERA 3.9.18, +](../../compatibility/#era3-v-3-9-18-l246) — Implemented automatic shadow/grid/selection border redraw after calling BM:C.
- [ERA 3.9.16, +](../../compatibility/#era3-v-3-9-16-l266) — Improved CombatManager::CastSpell function (used also in BM:C) by temporarily setting CombatManager->ControlSide to the side, controlling casting stack. Casting stack may differ from active stack (it may be counter attac…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l885) — Rewritten creature regeneration ability support. (!) Plugins should not hook regeneration code and should use Era 'SetRegenerationAbility' API instead. Era introduces term "Standard regeneration ability", which value is …
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2214) — Added the following functions to "Era Erm Framework" mod: !?FU(GetTimeMsec); ; Returns current time in milliseconds (time from computer start, overflowing each 49.71 days) !#VA(result:x); !?FU(PackUnion); ; Safely packs …
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4045) — Added !!BM:Z?$addr command to get battle stack structure address.
<!-- ERA3-GENERATED:END -->
