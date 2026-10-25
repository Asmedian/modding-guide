# Creature experience and bonuses (EA)

ID: erm.receivers.ea
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/ea/
Part: 1/3
Source references: old-help:rec-ea.htm, old-help:cont-stackexpbonus.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ea 1 -->
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
Also possibly Death Stare and Lightning Strike.<br>
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
and to set anything for that specific stack and then check again 
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
set it. Here's the standard view:
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
<em><strong>Can only be used in </strong></em><strong><em>battle</em></strong><br>
Copy all lines of bonuses and parameters of a creature or stack to battlefield to another 
creature or stack on battlefield.<br>
         #1 – target stack (<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature</a>)<br>
         $ – initial stack<br>
         #2 – copy type:<br>
	                   
0 (normal) - simply copy the original bonuses to the target creature.<br>
	                   
1 - if the target stack is on the battlefield, then the parameters of the source stack 
will be copied to the target and all similar creatures of friendly troops. If the target stack is a regular number 
creature, nothing will happen.<br>
                   
2 - if the target stack is on the battlefield, then the parameters of the original stack will be copied to the target and all 
similar creatures of enemy troops. If the target stack is a normal creature number, 
nothing will happen.<br>
	                   
3 - if the target stack is on the battlefield, then the parameters of the original stack will be copied to the target plus 
to all similar creatures of the attacking side. If the target is a regular creature number, then 
copy parameters to all similar creatures on the attacking side.<br>
	                   
4 - if the target stack is on the battlefield, then the parameters of the original stack will be copied to the target plus all similar creatures of the defending side. If the target is a regular creature number, then 
copy the parameters to all similar creatures of the defending side.<br>
	                   
5 - if the target stack is on the battlefield, then the parameters of the original stack will be copied to the target plus 
to all similar creatures on the battlefield. If the target is a regular creature number, then 
copy the parameters of the original unit to all target similar creatures.<u><strong></strong><br>
</u>“Similar creatures” are the same (Gryphons and griffins).
</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
EA#:O$</strong></span><br>
<em><strong>Can only be used in </strong></em><strong><em>battle</em></strong><span class="erm-tone-red"><strong></strong></span><br>
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

<!-- llm:end erm.receivers.ea 1 -->

