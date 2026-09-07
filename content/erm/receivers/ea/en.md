---
{"title":"Creature experience and bonuses (EA)","summary":"EA receiver: creature experience and bonuses, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Creature experience and bonuses (EA)"}
---

## Receiver EA {#ref-rec-ea}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ea-text"></span><div>
<span class="erm-anchor" id="ref-rec-ea-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>EA</strong> (creature experience)</span></div>
<div class="erm-paragraph"><br>
<span class="erm-anchor" id="ref-rec-ea-red"></span><span class="erm-tone-red"><strong>!!EA$:XXXX;</strong></span> - <strong>receiver to add bonus line support using ERM.</strong> $ - <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ea-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ea-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Settings are written to the saved game. In commands A, S and T, the creature type can be anything, for example 0, because this value is not used.<br>
<em>Additional syntax</em>: You can set the experience, experience line, and experience parameters for any creature in battle. 
To do this, use the stack number at battlefield with a negative sign:
<pre class="erm-example"><code class="language-erm">!!EA-1:...;	 stack 0
!!EA-2:...;	 stack 1
...
!!EA-42:...;	 stack 41</code></pre>
As before, you can use positive values to apply to creatures in general. 
You can set the experience parameters for any stack to battlefield directly in the trigger <a href="../../triggers/ba/#ref-tr-ba">!?BA0</a> 
(<a href="../../triggers/ba/#ref-tr-ba">!?BA50</a>) or later, during the battle itself.</div></details>
<span class="erm-anchor" id="ref-rec-ea-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also <a href="../../learn/">Learning: adding experience lines to creatures</a>.</div>
<hr>
<div class="erm-paragraph">
<strong>
<span class="erm-tone-red">
<span class="erm-anchor" id="ref-rec-ea-a"></span><span class="erm-anchor" id="command-a-h-s-t"></span>
A$1/$2</span></strong><br>
Set AI experience multiplier<br>
         $1 – difficulty: easy (0), normal (1), medium (2), hard (3), impossible (4).<br>
         $2 – value (used as a multiplier for the experience gained by AI hero creatures. It is equal to 1 (easy)…5 (impossible; default)).<br>
Any type of creature can be used as the stack number.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ea-b"></span><span class="erm-anchor" id="command-b-2-3-4-5-15"></span>B#1/$2/$3/$4/$5/$6/$7/$8/$9/$10/$11/$12/$13/$14/$15</strong></span><br>
Set/get experience line<br>
         #1 – bonus line (0..19) 
(can't get value)<br>
         $2 – flag value (1 – 
ability is on, 0 is off)<br>
         $3 –
<a href="../../tables/stack-experience-abilities/#ref-form-specexp1" data-context="true">ability</a><br>
         $4 – 
<a href="../../tables/stack-experience-modifiers/#ref-form-specexp5" data-context="true">modifier</a> (clarification of ability, for example, 
number of a creature, spell, something; in some cases it doesn't matter)<br>
         $5 – value for the first 
level (no experience)<br>
         …<br>
         $15 – value for 11 
level (maximum experience)
<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-ea-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ea-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Some abilities are applied to creatures in battle incorrectly (there is a picture, but no effect). 
For example: Reduced price of spells (price does not decrease), Champion Bonus (additional damage is calculated, but not dealt). 
Also possibly Death Glare and Lightning Strike.<br>
If $2 = 0, then, regardless of other parameters, the line will disappear.
<pre class="erm-example"><code class="language-erm">; remove bonus line #6 from Sorceresses (193)
!#EA193:B6/0/////////////;</code></pre></div></details>

<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ea-c"></span><span class="erm-anchor" id="command-c-l-m-p-u"></span>C$</strong></span><br>
Set/get the highest experience level. This is the maximum 
percentage of experience that creature can gain in one battle.
</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ea-d"></span><span class="erm-anchor" id="command-d"></span>EA#:D?$</strong></span><br>
<em><strong>Can only be used in combat</strong></em><span class="erm-tone-red"><strong></strong></span><br>
Check if the experience line has been copied to the stack at battlefield<br>
         # – stack number (-1..-42)<br>
	         $ – variable receiving the “copied” value<br>
	<u></u> </div><span class="erm-anchor" id="ref-rec-ea-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ea-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">If $ = 0, the settings are taken from the standard ones 
creature bonuses and were not copied to the temporary BF settings for the current 
stack. This may be needed when calling the stack.<br>
	* If $ is equal to a number between 1 and 7, the stack bonus lines have been copied and this 
there was a stack numbered from 0 to 6, respectively, in the attacker’s army.<br>
	* If $ is equal to a number between 8 and 14, the stack bonus lines have been copied and 
this was the stack numbered from 0 to 6, respectively, in the defending army.<br>
	* If $ is -1, this stack was not in the attacker's or defender's army, but 
its bonus lines have already been copied.<br>
	So if you call the stack and use this command, it will get the value 
0 (bonus lines were not copied). If you then used any command 
EA: [<a href="./#ref-rec-ea-m">M</a>] [<a href="./#ref-rec-ea-u">U</a>] [<a href="./#ref-rec-ea-l">L</a>] [<a href="./#ref-rec-ea-p">P</a>] 
[<a href="./#ref-rec-ea-c">C</a>] [<a href="./#ref-rec-ea-b">B</a>] [<a href="./#ref-rec-ea-o">O</a>] not for testing, 
and to install anything for that specific stack and then check again 
value EA:D, it will become equal to -1.<br>
	Normal order:<br>
	* Check for copying bonus lines using this command;<br>
	*If not, use it <a href="./#ref-rec-ea-o">EA:O</a> for copying;<br>
	* Now make any changes using EA: [<a href="./#ref-rec-ea-m">M</a>] [<a href="./#ref-rec-ea-u">U</a>] 
[<a href="./#ref-rec-ea-l">L</a>] [<a href="./#ref-rec-ea-p">P</a>] [<a href="./#ref-rec-ea-c">C</a>] [<a href="./#ref-rec-ea-b">B</a>].</div></details>

<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ea-e"></span><span class="erm-anchor" id="command-e-1-2-3-4"></span>E$1/$2/$3/$4</strong></span><br>
<em><strong>Can only be used in combat</strong></em><span class="erm-tone-red"><strong></strong></span><br>
Set experience for stack in battle<br>
         $1 – experience points<br>
         $2 – modifier (as for 
modifier 6 V <a href="../he/#ref-rec-he-c">HE:C</a>)<br>
         $3 –
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
         $4 – number of creatures<br>
You can use the d parameter in $3 and $4 to avoid changing the creature's type 
(will be automatically set to the correct type).<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!EA-2:E1000/2/d/d;
Set (2) experience points (1000) for the creature on stack #1 on the battlefield.</code></pre>
You can ONLY use this command on the battlefield stack (negative !!EA# values only).<br>
<span class="erm-anchor" id="ref-rec-ea-bold"></span><em class="erm-strong">Note:</em> using the command causes the stack parameters to be recalculated (Attack, Defense, Damage, Speed, etc.), due to which the bonuses of spells placed on the stack may be lost (for example, the speed bonus from Acceleration).</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ea-f"></span><span class="erm-anchor" id="command-f-f"></span>F$1/$2</strong></span><br>
Get the line number of a certain bonus, or find the first empty line<br>
         $1 –
<a href="../../tables/stack-experience-abilities/#ref-form-specexp1" data-context="true">ability number</a><br>
         $2 – line number (-1, 0..13)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ea-4"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ea-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">You can only get or check the second parameter, but not 
install it. Here's the standard view:
<pre class="erm-example"><code class="language-erm">!!EA...:F65/?v100;
This way we will get the number of the line containing the “Attack” bonus (65) of a certain creature.</code></pre>
If the line is not found, v100 will take the value of the empty line number. 
If you set $1 to 0, you will find the first empty bonus line. 
If $2 takes the value -1, there is no free space in the creature's abilities.</div></details>
<div class="erm-paragraph"><em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>F$1/$2/$3</strong></span><br>
        $1 – 
<a href="../../tables/stack-experience-abilities/#ref-form-specexp1" data-context="true">ability number</a><br>
        $2 – modifier (-1 = does not have 
values, the very first suitable line is selected)<br>
        $3 – variable to record the result
</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ea-h"></span>H$</strong></span><br>
Set experience multiplier for human players<br>
Used for heroes controlled by human players to customize the experience, 
received by each unit of the hero's army after a won battle. Standard 
value 100%. The value is saved when the game is saved. As stack number 
You can use any type of creature.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ea-l"></span>L$</strong></span><br>
Set/get experience scale and limit<br>
Allows you to customize the experience the creature needs to 
reaching rank 10, from this number the percentage of experience for each is calculated 
level in the game itself</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ea-m"></span>M$</strong></span><br>
Set/get experience multiplier. The value of $ is 1000 times smaller 
entered, i.e., to get 0.75, you need to enter 750. If you want 
set to 1, use M1000
</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ea-o"></span><span class="erm-anchor" id="command-o-mode"></span>EA#1:O$/#2;</strong></span><br>
<em><strong>Can only be used in b</strong></em><strong><em>oh</em></strong><br>
Copy all lines of bonuses and parameters of a creature or stack to battlefield to another 
creature or stack on battlefield.<br>
         #1 – target stack (<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature</a>)<br>
         $ – initial stack<br>
         #2 – copy type:<br>
	                   
0 (normal) - simply copy the original bonuses to the target creature.<br>
	                   
1 - if the target stack is battlefield (PB), then the parameters of the source squad 
will be copied 
targets and all similar creatures of friendly troops. If the target stack is a regular number 
creature, nothing will happen.<br>
                   
2 - if the target stack is on the PB, then the parameters of the original squad will be copied to the target and all 
similar creatures of enemy troops. If the target stack is a normal creature number, 
nothing will happen.<br>
	                   
3 - if the target stack is on the PB, then the parameters of the original squad will be copied to the target plus 
to all similar creatures of the attacking side. If the target is a regular creature number, then 
copy parameters to all similar creatures on the attacking side.<br>
	                   
4 - if the target stack is on the PB, then the parameters of the original squad will be copied to the target plus everyone 
similar creatures of the defending side. If the target is a regular creature number, then 
copy the parameters to all similar creatures of the defending side.<br>
	                   
5 - if the target stack is on the PB, then the parameters of the original squad will be copied to the target plus 
to all similar creatures to battlefield. If the target is a regular creature number, then 
copy the parameters of the original unit to all target similar creatures.<u><strong></strong><br>
</u>“Similar creatures” are the same (Gryphons and griffins).
</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
EA#:O$</strong></span><br>
<em><strong>Can only be used in b</strong></em><strong><em>oh</em></strong><span class="erm-tone-red"><strong></strong></span><br>
Copy all bonus lines and parameters<br>
         # – target stack or 
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature</a><br>
         $ – original 
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature</a><span><br>
K</span>The command copies all bonuses and experience parameters of one creature (on battlefield or a specific creature) to another stack or creature.<br>
<u>
</u><br></div><span class="erm-anchor" id="ref-rec-ea-5"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-ea-show5"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!EA-2:O0;</code></pre>
This command will set all bonuses and experience parameters of stack 1 to battlefield (-2) like the Spearmen.
All experience parameters (upgrade multiplier, etc.) will also be copied.
This command is useful if you summon a stack and want to give it special bonuses from other creatures or to dynamically change any experience parameter.
This command does not set experience points.</div></details>

<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ea-p"></span>P$</strong></span><br>
Set the value of the last experience level. After level 10, experience is still gained, and this number is the maximum experience a creature can gain.<br>
<u>
</u><br></div><span class="erm-anchor" id="ref-rec-ea-6"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ea-show6"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Moreover, this command allows you to set /check/get the number of experiences between the 10th (last) rank of the unit and the maximum limit of the creature's experience.<br>
Let's say that for rank 10 spearmen need 17,500 units of experience. Max. limit = 29750 experience units.<br>
Then using <span class="erm-anchor" id="ref-rec-ea-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!EA0</span>:P?y1;</strong>, we learn that ace spearmen will still be able to gain 12,250 units of experience in battle (29,750 - 17,500) before reaching the “leveling ceiling.”</div></details>

<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ea-r"></span><span class="erm-anchor" id="command-r-1-2"></span>R$1/$2</strong></span><br>
<em><strong>Can be used in battle</strong></em><span class="erm-tone-red"><strong></strong></span><br>
Artifact support for stacks in battle, set/check/get 
artifact and option:<br>
         $1 – artifact number<br>
         $2 – artifact option<br>
Currently only artifact number 156 is supported 
(banner) and options 0..8 ($2).
</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red">
<strong>
<span class="erm-anchor" id="ref-rec-ea-s"></span>S$1/$2</strong></span><br>
Set additional experience for AI<br>
         $1 – difficulty level number 
(0..4)<br>
         $2 – modifier<br>
	This is an additional experience modifier for the AI to add to its stacks. This is 50 
(easy), 100, 200, 300, 400 (impossible), respectively.
Any type of creature can be used as the stack number.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ea-t"></span>T$1/$2</strong></span><br>
Set garrison experience multiplier for AI<br>
         $1 – difficulty level (0..4)<br>
         $2 – value<br>
	Values: 10 (easy), 25, 50, 75, 100 (impossible), respectively. If 
EA:A value is 0, then AI experience gain would be zero regardless 
meanings. Any type of creature can be used as the stack number.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ea-u"></span>U$</strong></span><br>
Set/get experience multiplier when upgrading. Value in 1000 
times less than the value specified in $.</div>

<hr>


















</div>
</div>
</section>
:::

## Experience Bonuses: Optional {#ref-cont-stackexpbonus}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title"><strong>Creature Experience Bonuses</strong></span><br>
<span>version 2.2, June 30, 2004</span></div>
<div class="erm-paragraph">After a hero wins a battle, all his surviving troops gain experience.<br>
Creatures without a hero do not gain experience. Experience is equal to the experience gained by the hero. Thus, each creature receives an equal amount of experience per battle. 
Creatures do not gain experience from Knowledge Stones, Treasure Chests, or similar objects.</div>
<div class="erm-paragraph">If two beings with different experience levels connect, their experience is averaged. For example, you have a stack of 10 creatures with 10,000 experience, and you pair it with 20 creatures, 
having 1000 experience, as a result a stack of 30 creatures will have 4000 experience: (10x10000 + 20x1000) / 30 = 4000.</div>
<div class="erm-paragraph">To view creature experience details (current and future features), click on creature to bring up the creature information dialog, and then right-click on the creature's portrait. 
You can do this in the hero window, in the garrison, or on battlefield.<br>
<span class="erm-anchor" id="ref-cont-stackexpbonus-bold"></span><em class="erm-strong">Note:</em> creature stat bonuses are not visible (except in the experience window) anywhere outside of combat, and special ability bonuses are not shown in the creature's normal ability window.</div>
<div class="erm-paragraph">There are two text files that store stack experience:<br>
<em class="erm-legacy-file">Crexpmod.txt</em> - setting the experience required for a new level and losing experience when improving.<br>
<em class="erm-legacy-file">Crexpbon.txt</em> - setting all parameters and special skills obtained at each level.</div>
<div class="erm-paragraph">Text files must be placed in a folder <em class="erm-legacy-file">Heroes3\Data</em> for work.</div>
<div class="erm-paragraph">The easiest way to edit files is to open them with the latest ERM script.<br>
To do this, open the file as usual and then click <span class="erm-key">Ctrl</span>+<span class="erm-key">Alt</span>+<span class="erm-key">Q</span> to open the file as a table to edit columns.</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-stackexpbonus-n2"></span><strong class="erm-tone-purple erm-strong">CREXPMOD.TXT</strong><br>
This file can have one line per creature, if you want you can make fewer lines and use standard values.</div>
<div class="erm-paragraph"><strong>Column 1</strong>: creature type (using the creature table). Alternatively, you can use values -1...-7 to apply line settings to all creatures of a certain level: 
-1 = all 1st level creatures; -2 = all 2nd level creatures, etc. Based on internal creature level values, so creatures above level 7 will be considered level 7.
 Finally, you can use -8 to apply the string to all creatures in the game. Lines for certain creatures will be voided.</div>
<div class="erm-paragraph"><strong>Column 2</strong>: multiplier for calculating experience. Allows one creature to gain more or less experience per battle than another. 1.0 default</div>
<div class="erm-paragraph"><strong>Column 3</strong>: multiplier for adjusting experience when upgrading. The default is 0.5, but we are currently using 0.75, i.e. creature will lose 25% of its experience when upgraded.</div>
<div class="erm-paragraph"><strong>Column 4</strong>: full level 10 experience. This value is equal to full level 10 experience. The values ​​for each level below are calculated from this value. 
The values ​​we use now allow low-level creatures to level up faster than high-level creatures to compensate for the larger gain and lower stats.</div>
<div class="erm-paragraph"><strong>Column 5</strong>: experience cap per battle. This is the percentage of the creature's maximum experience that can be gained in one battle. 
For example, a value of 40 means that the stack cannot gain more than 40% of the total (level 10) experience from one battle, regardless of the amount of experience gained in it. 
This prevents a creature from going from level zero to level ten after one big battle. If you prefer not to have a limiter, simply set this value to 100.</div>
<div class="erm-paragraph"><strong>Column 6</strong>: Level 11 experience. This is an extra experience that can be obtained by creature after reaching level 10. Based on the “reserve” of experience - so, 
you can add several new creatures without immediately dropping to level 9. The current value gives troops of the first level 70% of the reserve, the second - 60%, etc., creatures of the 7th level have only 10% of the reserve.</div>
<div class="erm-paragraph"><strong>Column 7</strong>: comment. Can contain any text to remind the meaning of the string (for example, the name of the creature)</div>
<div class="erm-paragraph"><strong class="erm-tone-purple erm-strong">CREXPBON.TXT</strong><br>
This file can have multiple lines for each creature, you can also make fewer lines using standard values. The exact number of lines depends on the number of bonuses.</div>
<div class="erm-paragraph"><strong>Column 1</strong>: creature type (using the creature table). Alternatively, you can use values -1...-7 to apply line settings to all creatures of a certain level: 
-1 = all 1st level creatures; -2 = all 2nd level creatures, etc. Based on internal creature level values, so creatures above level 7 will be considered level 7. 
Finally, you can use -8 to apply the string to all creatures in the game. Lines for certain creatures will be voided.<br>
<em class="erm-strong">Note:</em> special flag abilities (bonus type f) cannot be set normally.</div>
<div class="erm-paragraph"><strong>Column 2</strong>: bonus type. This could be a stat bonus, a special flag ability, or another type of ability.<br>
<em class="erm-strong">Note:</em> the letter code is case sensitive, so "a" is different from "A". A blank space in this column means the line is ignored.</div>
<div class="erm-paragraph"><strong>Column 3</strong>: modifier. Varies depending on the type of bonus set in column 2. Possible modifiers: + , : , % , #xx (where xx could be a creature or a spell number).</div>
<div class="erm-paragraph"><strong>Column 4..14</strong>: bonus values at the corresponding level (0%...100%). Varies depending on the bonus type in column 2 and/or the modifier in column 3. 
If you set it to 0%, creature will have this bonus from the start of the game.<br>
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
Spells that cannot be cast and will cause the game to crash or have no effect include: Resurrection, Animate Undead, Sacrifice, Death Cloud, Titan Thunder and Death Glare. 
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
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-8"></span><details class="erm-comment"><summary>Death Glare (E) &lt;69&gt;</summary><div class="erm-comment-body">
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
R: &lt;82&gt; Unresponsive. Enemies do not respond to this creature's attacks<br>
M : &lt;77&gt; Immune to morality. Creature does not benefit from good or bad morale in battle.<br>
U : &lt;85&gt; Undead. Unliving creatures can be animated by the Raise Undead spell. "Immune to Mind Spells" and "Immune to Morale" must be set separately.<br>
A : &lt;65&gt; Attacks everyone around. Creature attacks all enemies near it.<br>
G : &lt;71&gt; Dracon. Creature will receive bonuses from Dragon Blood Vial and similar items.<br>
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
If you don't install this bonus line on a creature that already has its own resistance, it will be used as a normal resistance.<br>
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
<em class="erm-strong">Note:</em> you cannot take this ability away from creatures that already have it (such as Snipers).<br>
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
Spells that cannot be cast and will cause the game to crash or not work include: Resurrection, Raise Undead, Sacrifice, Death Cloud, Titan Thunder and Death Glare. 
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
Spells that cannot be cast and will cause the game to crash or not work include: Resurrection, Raise Undead, Sacrifice, Death Cloud, Titan Thunder and Death Glare. 
Teleport works, but makes the battle unwinnable for that player - the target stack "disappears" but still counts in the battle. He cannot move or attack in melee 
(or be attacked), but if he is a shooter, he can still shoot. The spells Paralyze (74), Petrify (70) or Blind (62) have little utility with ability j, 
because their effect is immediately canceled by the attack: use ability (a) on them.<br>
<strong>In columns 4..14 for (J) you can set:</strong><br>
Any integer value from 0 to 100. This is the percentage chance of the spell working.</blockquote></div></details></li>
<li><span class="erm-anchor" id="ref-cont-stackexpbonus-18"></span><details class="erm-comment"><summary>Casts Basic spell after attack (k) &lt;107&gt;</summary><div class="erm-comment-body">
<blockquote class="erm-note">After any melee attack, there is a chance that the target will be enchanted with this spell for 3 rounds, regardless of the presence of immunity.<br>
<em class="erm-strong">Note 1:</em> this ability does not work for ranged attacks. However, it will work if the shooter goes into melee. 
You can use (p), (c), (j) or (J) to cast a spell on a ranged attack.<br>
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
Spells that cannot be cast and will cause the game to crash or have no effect include: Resurrection, Animate Undead, Sacrifice, Death Cloud, Titan Thunder and Death Glare. 
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
Spells that cannot be cast and will cause the game to crash or have no effect include: Resurrection, Animate Undead, Sacrifice, Death Cloud, Titan Thunder and Death Glare. 
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
<blockquote class="erm-note">You can install it in two ways:<br>
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
Spells that cannot be cast and will cause the game to crash or not work include: Resurrection, Raise Undead, Sacrifice, Death Cloud, Titan Thunder and Death Glare. 
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

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.3.0, -](../../compatibility/#era3-v-3-3-0-l2446) — Fixed EA:E, command, used to return on the first GET-parameter. From now E?(exp:y)/d/?(monType:y)/?(monNum:y) returns valid data. Use either SET syntax for all 4 commands to change data or GET/mixed syntax to get data.
<!-- ERA3-GENERATED:END -->
