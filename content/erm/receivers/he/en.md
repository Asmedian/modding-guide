---
{"title":"Heroes (HE)","summary":"HE receiver: heroes, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Heroes (HE)"}
---

## Receiver HE {#ref-rec-he}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-a1-1-2"></span><span class="erm-anchor" id="command-a2-1-2-a3-a4"></span><span class="erm-anchor" id="command-c0-1-2-3-4-c1-1-2-3-4"></span><span class="erm-anchor" id="command-c2-c-1-14-d"></span><span class="erm-anchor" id="command-l1-file-l2-file-l0-l3-l4-l5-1-2"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-he-text"></span><div>
<span class="erm-anchor" id="ref-rec-he-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>HE</strong> (hero options)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-he-red"></span><span class="erm-tone-red">!!HE#:XXXX;</span> – hero with number #.</strong> Hero - <a href="../../tables/objects/#ref-form-objects" data-context="true">type 34</a>.<br>
Each hero in the game has its own unique <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">number</a>.<br>
<em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>!!HE#1/#2/#3:XXXX;</strong></span> – hero in certain coordinates X Y L<br>
<span class="erm-tone-red"><strong>!!HE-1:XXXX;</strong></span> – hero, which activated trigger. 
This command greatly simplifies the script, since you do not need to save the hero’s coordinates every time you call the HE receiver.<br>
Used to change stats, troops, inventory, skills, location and just anything imaginable on the hero. 
Also allows you to cast a curse or blessing.<br>
<strong><u>Comment</u>:</strong> you can use indirect links to heroes (copies of information):
<pre class="erm-example"><code class="language-erm">!!HE-10:...; apply changes to the attacking hero
!!HE-20:...; apply changes to the defending hero</code></pre></div>
<span class="erm-anchor" id="ref-rec-he-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/he/#ref-tr-he">!?HE</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-a"></span><span class="erm-anchor" id="command-a"></span>A#</strong></span><br>
Get/let/remove artifact<br>
        # – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact number</a><br>
If # &gt; 0, artifact will be added<br>
If # &lt; 0, artifact will be removed from all slots.<br>
<span class="erm-anchor" id="ref-rec-he-bold"></span><em class="erm-strong">Note:</em> The artifact received by this command will not be equipped automatically, but will be placed in the backpack. 
If the backpack is completely full (contains 64 artifacts), then hero specified by the artifact command will not receive.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-38"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show38"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE106:A-1; - remove all scrolls with spells from Dessa (hero #106)</code></pre></div></details>
<u></u> <span class="erm-anchor" id="ref-rec-he-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body"><ul>
<li>If you remove artifact, which adds spell to the hero, using ERM 
(HE:A- or <a href="./#ref-rec-he-a3">HE:A3</a>), spell will disappear from the hero’s book forever.<br>
</li><li>If you delete artifact with the command !!HE:A-, the bonuses will be removed correctly, but if you delete it with the command HE:A3, it will not remove the bonuses.<br>
</li><li>If you delete the combo-artifact with the command HE:A-, the blocked slots will be unlocked, but if you delete it with the command HE:A3, the block will not be removed!</li></ul></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>A1/$1/$2</strong></span><br>
Put on artifact<br>
        $1 – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact number</a><br>
        $2 – <a href="../../tables/artifact-slots/#ref-form-ap" data-context="true">position</a>where to wear<br>
If the slot is busy, flag 1 is set to 0.<br>
To find out which artifact is located in a specific slot, use the syntax to get the first parameter ($1):<br>
<span class="erm-anchor" id="ref-rec-he-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>:A1/?@/x;</strong> - where @ - <a href="../../variables/#ref-cont-flags-var">variable</a> to save the result, 
x - number of the person being checked <a href="../../tables/artifact-slots/#ref-form-ap" data-context="true">slot</a>. 
If there is no artifact, the value of the variable is -1.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-he-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body"><ul>
<li>If you use HE:A1 to equip the hero with a artifact that grants any spells (Tome of Magic, Spell Scroll or Speaker's Hat), 
then they will not be added until the player himself removes and puts back artifact. 
New team <a href="./#ref-rec-he-a4">HE:A4</a>, added in 3.58, will correctly give spells to the hero.
</li><li>If you use the HE:A1 command to equip an artifact, it will be equipped regardless of whether it is blocked or occupied. 
Again, command HE:A4 will only equip artifacts to slots that are not blocked or occupied.</li></ul></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>A2/$1/?$2/?$3</strong></span><br>
Count the number of artifacts (receive or check):<br>
        $1 – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact number</a><br>
        $2 – get $1 number of artifacts from the hero (receive or check)<br>
        $3 – get a number of $1 artifacts equipped on the hero (receive or check)<br>
Quantity cannot be set. When you try to set the quantity, nothing will happen.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-a3"></span><span class="erm-tone-red"><strong>A3/$1/$2/$3</strong></span><br>
Delete multiple copies of an artifact:<br>
        $1 – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact number</a> <br>
        $2 – number of copies to delete<br>
        $3 – remove first those worn (1) or in the backpack (0)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-he-39"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show39"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body"><ul>
<li>If artifact gave spell, it will not be deleted from the hero’s book
</li><li>If artifact was deleted by this command, then all closed slots and bonuses will remain in their original places.
</li><li>Removing with this command does not update the number of artifacts in the backpack in memory, which may result in the inability to place any new artifact 
(even if nominally there is still room in the backpack; backpack capacity is 64 objects)</li></ul>
<u>Example</u> from <span class="erm-anchor" id="ref-rec-he-n1"></span><strong class="erm-tone-purple erm-strong">Algor</strong>'a:<br>
Correctly removing an equipped scroll with a spell.<br>
Spell will be removed from the hero if it was given only by this scroll.
<pre class="erm-example"><code class="language-erm">!!HE-1:A3/y1/1/1 A4/1080 A3/1080/1/1;
; y1 - scroll number = 1001 + [spell number]</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-a4"></span><span class="erm-tone-red"><strong>A4/#</strong></span><br>
Put on <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact #</a>. You can now add artifact spells automatically. 
The problem of blocked slots has also been resolved. In fact, this uses the internal artifact retrieval function. 
If artifact can be equipped, it is equipped.</div>
<hr><div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-he-b0"></span><span class="erm-anchor" id="command-b0-b1-b2-b3"></span>
<span class="erm-tone-red"><strong>B0/$</strong></span><br>
Set/get hero name<br>
        $ is a text variable.<br>
<em class="erm-strong">Note:</em> The name will not change in the biography!</div>
<hr><div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-he-b1"></span>
<span class="erm-tone-red"><strong>B1/$</strong></span><br>
Set/get hero biography<br>
        $ is a text variable.<br>
If the hero's bio or name is the same as the default, you will receive an empty text variable rather than the standard text.</div>
<hr><div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-he-b2"></span>
<span class="erm-tone-red"><strong>B2/$</strong></span><br>
Set/get hero class<br>
        $ – class (<a href="../../tables/hero-classes/#ref-form-heroesclasses" data-context="true">0..17</a>)<br>
Divide the resulting value by 2 and you get <a href="../../tables/towns/#ref-form-towns" data-context="true">town type</a> hero.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-3"></span><details class="erm-comment"><summary>Additionally (<span class="erm-anchor" id="ref-rec-he-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">A value of 18, 19, 20 will set the hero's appearance to a boat - dark, light and narrow, respectively. With a value of 18, you can enter the hero window, 
in the case of 19 and 20, this will lead to a critical error (even simply pointing the cursor at the changed hero), entering the battle will also cause a critical error in all three forms. 
Class 21,22 is a trace from the movement of the player's boat; any calls to the program to obtain a hero class will end in the game crashing 
(hovering the cursor, entering the hero window, etc.). Class above 23 is almost the same as 21, but with the next numbered player's flag on top of the current flag. 
In general, it follows DEFs from <em class="erm-legacy-file">H3sprite.lod</em>, adding/replacing the hero with a new animation.<br>
<u>Example</u>:
Let's find out, based on the hero's class, who he is in life ;-)
<pre class="erm-example"><code class="language-erm">!!HE-1:B0/?z1 B2/?v2;   get the name (in z1) and class (in v2) of the current hero
!!VRv2:%2;		we get the remainder of division by 2
!!VRz2&amp;v2=0:S^warrior^;	
!!VRz2&amp;v2=1:S^maga^;
!!IF:M^Hero %Z1 chose path %Z2.^;</code></pre></div>
<div class="erm-paragraph">It is worth noting that it is possible to change the name of the hero classes using the options <a href="../../compatibility/#ref-era-index">ERA</a>.<br>
Here is an example of a finished function from <strong class="erm-tone-purple erm-strong">igrik</strong>'a: </div><span class="erm-anchor" id="ref-rec-he-44"></span><details class="erm-comment"><summary>(<span class="erm-anchor" id="ref-rec-he-show44"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?FU(WOG_CreateERMHook);
!!SN:Ex1/1/5083661/(SetHeroClassName1);
!!SN:Ex1/1/5093760/(SetHeroClassName2);
!!SN:Ex1/1/5094903/(SetHeroClassName2);
!!SN:Ex1/1/5119462/(SetHeroClassName3);

!?FU(SetHeroClassName1);
!!SN:X?y1/0; !!VRy2:Sy1 +24;
!!FU(GetHeroClassName):Py2/?y4;
!!VRy3:Sy1 +28; !!UN:Cy3/4/y4;
!!VRy5:Sy1 +32; !!UN:Cy5/4/5083660;

!?FU(SetHeroClassName2);
!!SN:X?y1; !!VRy2:Sy1 +24;
!!FU(GetHeroClassName):Py2/?y4;
!!VRy3:Sy1 +28; !!UN:Cy3/4/y4;

!?FU(SetHeroClassName3);
!!SN:X?y1; !!VRy2:Sy1 +28;
!!FU(GetHeroClassName):Py2/?y4;
!!VRy3:Sy1 +24; !!UN:Cy3/4/y4;

!?FU(GetHeroClassName);
; x1 - pointer to the hero structure
; x2 - address of the link to the text (returned)
!!UN:Cx1/4/?y1; 
!!VRy1:+26; 
!!UN:Cy1/4/?x1; [x1 - now hero number]

** we set all the names of hero classes from ERT
!!SN:E7824928/1/[ERT variable number];  [all heroes will have the class name from the specified ERT variable]
!!SN&amp;x1=28:E7824928/1/[ERT variable number];  [hero 28 Malkom will have his class name from another ERT variable]
!!VRx2:Sv1;</code></pre></div></details>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>B3/?$</strong></span><br>
Get the original hero biography into a text variable (z).<br>
This command will always get the default text, regardless of whether you changed the bio text or not.<br>
You can only use get syntax, like this:
<pre class="erm-example"><code class="language-erm">!!HE0:B3/?z25; write Orrin's biography to the variable z25</code></pre></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-c"></span><span class="erm-anchor" id="command-c-experience-modes"></span>C0/#1/$2/$3</strong></span><br>
Change creatures<br>
        #1 – slot number (0..6)<br>
        $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
        $3 – number of creatures
<pre class="erm-example"><code class="language-erm">; Dismiss the entire army of the current hero:
!!HE-1:C0/0/-1/0 C0/1/-1/0 C0/2/-1/0 C0/3/-1/0 C0/4/-1/0 C0/5/-1/0 C0/6/-1/0;</code></pre></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>C1/#1/$2/$3</strong></span><br>
Change Creatures: All Creatures <a href="../../tables/creatures/#ref-form-creature" data-context="true">like #</a> will be changed to<br>
        $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
        $3 – quantity<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-4"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:C1/0/1/d20; add 20 units to each slot with spearmen (d20) and replace all spearmen (0) with halberdiers (1)</code></pre>
If you use -1 in $2 or 0 in $3, all creatures of that type will be removed from the hero:
<pre class="erm-example"><code class="language-erm">!!HE-1:C1/143/-1/0; drive all Thieves out of the army</code></pre>
You can also get qty ($3). Finding the number allows you to quickly check whether hero has creatures of a given type, without using <a href="../do/#ref-rec-do">cycles</a>. 
But, if hero has several units, you will receive the number of creatures of this type in the last (!) slot with such creatures.
<br>For example, active hero has the following army:<br> 
<img src="../../../../assets/erm/f46ad655a407bf5b.gif" alt="!!HE-1:C1/0/1/d20; add 20 units to each slot with spearmen (d20) and replace all spearmen (0) with halberdiers (1) If you use -1 in $2 or 0 in $3, all creatures" loading="lazy" decoding="async" class="erm-figure" width="466" height="78"><br>
<pre class="erm-example"><code class="language-erm">Then the command !!HE-1:C1/94/?y11/?y12; will give us y11=94, y12=9 - i.e. will find us Cyclops (94)
Ah, here is the command !!HE-1:C1/96/?y11/?y12; will return y11=0, y12=0 - there are no Creatures in the army (96)</code></pre></div></details>
<hr>
<div class="erm-paragraph"><em>Syntax extension for C0 and C1 commands:<br>
</em><span class="erm-tone-red"><strong>C#/#1/$2/$3/$4/$5</strong></span> <br>
        $4 – amount of experience (default 0)<br>
        $5 – experience modifier (default 0)<br></div>
<div class="erm-paragraph">        Supported values for $5:<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-5"></span><details class="erm-comment"><summary>Mod 0 (<span class="erm-anchor" id="ref-rec-he-show5"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Use this mod to add creatures that already have experience. New creatures will have $4 experience, 
but old creatures (if you "add" creatures) will retain their experience. The result of the amount of experience on creature can be calculated:<br>
<span class="erm-anchor" id="ref-rec-he-step"></span><div class="erm-indent erm-paragraph"><strong>Experience</strong> = [Experience of Old * number of Old Creatures + Experience of New * number of New] / [number of Old + number of New]
</div><ol>
	<li>Let's say you have a stack of Monks with 1000 experience (hereinafter - at creature) and want to add 5 Monks with 3000 experience.<br>
	The result will be: (1000*10+300*5)/15=1666
	<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d100/5000/0; Add 100 creatures with 5000 experience to the 0th stack.</code></pre></li>
	<li>If you add creatures of different types, only the experience of the new creatures is taken into account.<br>
	So, if you have 10 Griffins with 1000 experience and want to add 5 Monks with 3000 experience. The result will be 3000;</li>
</ol>
This is used to avoid a problem where you move stacks from one slot to another and the experience gets mixed up.<br>
Let's say you put a stack of Griffins in slot 1 and then change them to Monks, accidentally forgetting to change the experience 
(so it's a Monk stack, although the system thinks it's a Griffin stack). Now, adding Monks, 
the system will think that you have changed the type of creatures and will only take the experience of new creatures.
<span class="erm-anchor" id="ref-rec-he-q2"></span><blockquote class="erm-tone-quote erm-note"><strong>Exception:</strong> if the stack has not yet gained experience, the experience will be averaged as if you had added them without changing the type (like mod 1, see below).</blockquote>
<em class="erm-strong">Note:</em> do not use the "d" parameter for $4 with mod 0.</div></details>
<u></u> <span class="erm-anchor" id="ref-rec-he-6"></span><details class="erm-comment"><summary>Mod 1 (<span class="erm-anchor" id="ref-rec-he-show6"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Similar to mod 0, except that there is no check for the type of creature. So the command always works according to the formula (above), 
regardless of experience and creatures you have.<br>
<u>Example</u>:<br>
You want to set creatures in the slot as Spearmen and they must have the experience (by creature) of the previous creatures in the slot (whoever they are) plus 7 new creatures with 
50 experience points.
<pre class="erm-example"><code class="language-erm">!!HE...:C0/1/0/d7/50/1;</code></pre>
<em class="erm-strong">Note:</em> do not use the "d" parameter for $4 with mod 1.</div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-7"></span><details class="erm-comment"><summary>Mod 2 (<span class="erm-anchor" id="ref-rec-he-show7"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Use this mod to set the experience for the entire stack.<br>
The stack will have $4 experience.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d/5000/2; Stack has 5000 experience</code></pre>
<em class="erm-strong">Note:</em> if you use the "d" option for $4 with mod 2, the experience will be added to the existing one (like mod 3, see below).</div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-8"></span><details class="erm-comment"><summary>Mod 3 (<span class="erm-anchor" id="ref-rec-he-show8"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Use this mod to add experience to your stack.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d/5000/3; The stack will receive an additional 5000 experience.</code></pre>
New creatures will receive the experience of old creatures plus $4. Experience is not distributed.<br>
So, if you have a stack with 10 Monks with 1000 experience, you want to add 5 monks and add 3000 experience with mod 3, the result will be: 1000+3000=4000.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d5/3000/3; The stack will receive +5 creatures and +3000 experience.</code></pre>
You can also use this mod to add creatures to the stack without reducing the stack's experience, 
or changing the type of creatures on the stack, keeping the experience unchanged.<br>
You can use this modifier to temporarily change a creature's type, 
since after returning to his normal state he will retain all his experience.<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/1/0/d/0/3;
!!HE...:C0/1/99/d/0/3;
!!HE...:C0/1/0/d/0/3;</code></pre>
<em class="erm-strong">Note:</em> if you use the "d" parameter for $4 with mod 3, it works like this:<br>
<blockquote class="erm-note">Stack Experience = OldExperience+OldExperience+AdditionalExperience.</blockquote>
So, if you had a stack with 2000 experience, and add 1000 experience using this method, you get 2000+2000+1000=5000.<br>
Then if you add another 1000 exp you get 5000+5000+1000=11000.</div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-9"></span><details class="erm-comment"><summary>Mod 4 (<span class="erm-anchor" id="ref-rec-he-show9"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Use this mod to add experience levels (ranks) to your stack.<br>
New creatures will receive the experience of old creatures plus experience equal to the $4 rank.<br>
Experience is not distributed.<br>
So if you had a stack of 10 Monks with 1000 experience and want to add 5 Monks and 3 levels of experience, the result is 1000+3ranks = ????<br>
We use the following calculations:<br>
 - we have E experience<br>
 - get the current level of experience stack L0<br>
 - we get the amount of experience E0 for level L0<br>
 - we get: dE as E-E0<br>
 - we have a level L bonus<br>
 - we get the resulting level L1 as L0+L<br>
 - we get the amount of experience E1 for level L1<br>
 - we get the final experience E as E1+dE<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d/5/4; The stack will receive +5 experience levels.</code></pre>
<em class="erm-strong">Note:</em> Don't use the "d" parameter for $4 with mod 4.</div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-10"></span><details class="erm-comment"><summary>Mod 5 (<span class="erm-anchor" id="ref-rec-he-show10"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Use this mod if you are upgrading creatures.<br>
Similar to mod 3, but the experience of new creatures is equivalent to the improvement of creatures. 
New experience will be old experience multiplied by the upgrade multiplier plus the experience bonus.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d/500/5; The stack will have experience as improved + 500 experience.</code></pre>
<em class="erm-strong">Note:</em> Don't use the "d" parameter for $4 with mod 5.</div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-11"></span><details class="erm-comment"><summary>Mod 10 (<span class="erm-anchor" id="ref-rec-he-show11"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Use this mod to add additional creatures with experience levels (ranks).<br>
This is similar to mod 0, but $4 shows additional levels (ranks) of experience for new creatures.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d100/5/10; Add 100 creatures with experience level 5 to the stack.</code></pre>
<em class="erm-strong">Note:</em> Don't use the "d" parameter for $4 with mod 10.</div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-12"></span><details class="erm-comment"><summary>Mod 11 (<span class="erm-anchor" id="ref-rec-he-show12"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Same as mod 10, but independent of the type of creatures.<br>
Similar to mod 1, but you add creatures with $4 experience rank.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/3/d100/5/11; Add 100 creatures with experience rank 5 to the stack, but also change their type to Marksmen.</code></pre></div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-13"></span><details class="erm-comment"><summary>Mod 12 (<span class="erm-anchor" id="ref-rec-he-show13"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Use this mod to set the experience level (rank) for the entire stack.<br>
Similar to mod 2, but $4 means experience level (rank)<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d/5/12; The stack will have 5 levels (ranks) of experience.</code></pre></div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-14"></span><details class="erm-comment"><summary>Mod 13 (<span class="erm-anchor" id="ref-rec-he-show14"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Use this mod to set the equivalent experience percentage for a new type of creature.<br>
Similar to mod 3, but assumes that you have changed the type of creature and the experience of new creatures is taken as a percentage of that of old creatures.<br>
So, if you have a stack of Monks with X experience and change the stack to Angels, the new experience will be X*MaxAngels/MaxMonks+dE, 
where MaxAngels is the maximum experience of Angels and MaxMonks is the maximum experience of Monks, dE is the added experience.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/../d/1000/13; The new stack will receive the corresponding experience that the old stack has, plus 1000 experience.</code></pre>
<blockquote class="erm-note"><strong>NewExperience</strong> = [Old Experience]*[Experience of New Creatures at Rank 10] / [Experience of Old Creatures at Rank 10 + Extra Experience].</blockquote></div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-15"></span><details class="erm-comment"><summary>Mod 14 (<span class="erm-anchor" id="ref-rec-he-show15"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Similar to mod 13, but adds experience levels (ranks).<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/../d/3/14; The new stack will receive the corresponding experience from the old stack plus 3 levels (ranks) of experience.</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>C2/#1/#2/#3</strong></span><br>
Add a new stack of creatures to the hero:<br>
        #1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
        #2 – number of creatures<br>
        #3 = 1 (ask human to join if all slots are occupied), = 0 (use AI, 
i.e. if all stacks are occupied, replace the less significant one automatically)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>C#1/#2/…/#14</strong></span><br>
Change Creatures: Give the player a choice of creatures. The C command is used with 14 parameters:<br>
        #1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 
1 (-1 means no) <br>
        #2 – number of creatures 1<br>
        #3 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 2 (-1 means no)<br>
        #4 – number of creatures 2<br>
        #5 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 3 (-1 means no)<br>
        #6 – number of creatures 3<br>
        #7 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 4 (-1 means no)<br>
        #8 – number of creatures 4<br>
        #9 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 5 (-1 means no)<br>
        #10 – number of creatures 5<br>
        #11 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 6 (-1 means no)<br>
        #12 – number of creatures 6<br>
        #13 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 7 (-1 means no)<br>
        #14 – number of creatures 7<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-16"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show16"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This will be presented as a dialog for placing creatures on the map:
<pre class="erm-example"><code class="language-erm">!!HE-1:C5/6/7/8/9/10/11/12/13/14/15/16/17/18;
!!HE-1:C1/2/-1/0/-1/0/-1/0/-1/0/-1/0/-1/0;</code></pre></div></details>

<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-d"></span>D</strong></span><br>
Call a dialogue to improve the hero's army (no parameters)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-e"></span><span class="erm-anchor" id="command-e-2-1-f-1-2-3-4-1"></span>E$</strong></span><br>
Set/check/get the hero's experience in $<br>
<a href="../../tables/hero-levels/#ref-form-heroeslevels" data-context="true">Hero experience table</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>E$1/$2</strong></span><br>
Set/check/gain hero experience (optional syntax)<br>
        $1 – experience points<br>
        $2 – <a href="../../tables/hero-levels/#ref-form-heroeslevels" data-context="true">level</a> hero<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-17"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show17"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:Ed/d2; - add level 2 to the hero
In this case, the actual level gain does not occur.</code></pre></div></details>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>E$1/$2/1</strong></span><br>
Same as HE:E$1/$2, but without updating. For standard syntax, an update occurs, even with a simple check.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-f"></span>F$1/$2/$3/$4</strong></span><br>
Set/check/get primary skills<br>
        $1 – attack<br>
        $2 – protection<br>
        $3 – magic power<br>
        $4 – knowledge</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>F?$1/?$2/?$3/?$4/1</strong></span><br>
Additional syntax for testing primary skills. Add /1 to the end of the command to get values ​​without artifact effects.<br>
        $1 – attack<br>
        $2 – protection<br>
        $3 – magic power<br>
        $4 – knowledge<br>
You can only use get or check syntax.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-40"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show40"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:F?v100/?v101/?v102/?v103/1;</code></pre></div></details>
<div class="erm-paragraph">The command takes away only the standard values of artifacts. If artifact was modified using a script, the values ​​may not be retrieved correctly.<br>
You can also set the values, but nothing will happen.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-g"></span><span class="erm-anchor" id="command-g-w-1-i-1"></span>G$</strong></span><br>
Set the hero's initial movement points<br>
        $ – initial movement points<br>
If you set the options <a href="./#ref-rec-he-w">HE:W</a> and HE:G are the same, you can dig Grail.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-h"></span><span class="erm-anchor" id="command-h-1-2-3"></span>H$1/$2/$3/$4</strong></span><br>
Set up an army of a recruitable hero.<br>
        $1 – slot number (0, 1, 2)<br>
        $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> (-1 – no creature)<br>
        $3 – min. number of creatures<br>
        $4 – max. number of creatures (may be $3 for a certain number)<br>
The team can install an army of a hero that none of the players currently have in the tavern. 
If he is in a tavern, no changes to his starting army will occur until next week.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-18"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show18"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#HE0:H0/98/3/3 H1/-1/2/2 H2/-1/0/0; Set Orrin's army to Gnolls at the beginning of the game
The command can be executed at any time during the game.</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-i"></span>I$</strong></span><br>
Set/check/get the mana amount.<br>
Use the "d" option to make changes easier if you want to add or subtract mana.<br>
The amount of mana can be negative.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-24"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show24"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:Id-1; take 1 mana point from the current hero</code></pre></div></details>

<div class="erm-paragraph"><span class="erm-tone-red"><strong>I$/1</strong></span><br>
Same as HE:I$, but without updating. In standard syntax, it causes an update even if you did a check.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-k"></span><span class="erm-anchor" id="command-k-k1"></span>K</strong></span><br>
Immediately kill the hero (for example, when visiting a well, fall into it :) )</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>K1</strong></span><br>
Same as HE:K, but without update</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-l"></span>L#^Portrait.pcx^</strong></span><br>
Install hero portrait from external files<br>
        # = 1 – set small portrait – <em class="erm-legacy-file">file.pcx</em><br>
        # = 2 – set a large portrait – <em class="erm-legacy-file">file.pcx</em><br>
<u></u> </div><span class="erm-anchor" id="ref-rec-he-19"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-he-show19"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph"><em class="erm-legacy-file">File.pcx</em> will be searched in the directory <em class="erm-legacy-file">DATA</em>, but you can change the subdirectory.<br>
For example: <em class="erm-legacy-file">^p\name.pcx^</em> - in a folder <em class="erm-legacy-file">p</em> directories <em class="erm-legacy-file">DATA</em>. 
Or <em class="erm-legacy-file">^..\maps\1.pcx^</em> - in the directory <em class="erm-legacy-file">Maps</em> in the game folder.<br>
<strong>IMPORTANT!</strong> The full length of the file name cannot be more than 12 characters (including the path to the folder: dots and slashes are counted).<br>
You can also set portrait from file <em class="erm-legacy-file">DATA\H3bitmap.lod</em>, simply indicating the full name of the portrait.<br>
<u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!!HE-1:L1^..\Mods\WoG\Data\p\1.pcx^; the path to the portrait is too long and causes an error
...
!!HE18:L1^HPS045WZ.pcx^ L2^HPL045WZ.pcx^; give Enova the face of Solmir</code></pre>
The screen will be updated automatically if you change the hero's portrait.<br>
<u>Image requirements</u>: <em>256 colors; Dimensions:  58×64 (large), 48×32 (small)</em></div>
<div class="erm-paragraph">It is worth noting that it is possible to obtain hero portraits using the capabilities <a href="../../compatibility/#ref-era-index">ERA</a>.<br>
Here is an example of a ready-made function for this: 
</div><span class="erm-anchor" id="ref-rec-he-42"></span><details class="erm-comment"><summary>(<span class="erm-anchor" id="ref-rec-he-show42"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; getting hero portraits into specified z-variables

!?FU(Hero_GetPortret_Names); 
; x1 - hero number
; x2 - number Z of the variable for recording a small portrait
; x3 - number Z of the variable for recording a large portrait
!!SN:E7411341/1/x1;
!!VRy10:Sv1 +52;
!!UN:Cy10/1/?y11;
!!VRx1&amp;y11&gt;=0:Sy11;
!!VRx1&amp;y11&lt;0:S256 +y11;
!!UN:C6806760/4/?y1;
!!VRzx2:S^^;
!!VRzx3:S^^;
!!VRx1:*92 +y1 +48;
!!UN:Cx1/4/?y2;
!!VRx1:+4;
!!UN:Cx1/4/?y3;
!!VRx2:*512+9597416;
!!VRx3:*512+9597416;
!!DO(Hero_GetPortret_Names_CopyF)/1/512/1:Py2/x2 Py3/x3;


!?FU(Hero_GetPortret_Names_CopyF); 
!!UN:Cx1/1/?y1 Cx2/1/y1;
!!VRx16&amp;y1=0:S600;
!!VRx1:+1;
!!VRx2:+1;</code></pre></div></details>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>L0/$</strong></span><br>
Set a portrait for the hero, like his <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero $</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-l3"></span><span class="erm-tone-red"><strong>L3</strong></span><br>
Restore original portraits<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE18:L3; return Enova to her native appearance</code></pre></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>L4/$</strong></span><br>
Install both portraits from the game from <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero $</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>L5/$1/$2</strong></span><br>
Set hero portrait from variable<br>
        $1 – text variable (z) for a large image (0 – do not change)<br>
        $2 – text variable (z) for a small image (0 – do not change)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-m"></span><span class="erm-anchor" id="command-m-m-1"></span>M#1/$2</strong></span><br>
Set/check/get the hero's spell status<br>
        #1 – <a href="../../tables/spells/#ref-form-spell" data-context="true">spell</a><br>
        $2 – value (0 = delete, 1 = give (when checking for presence 1 = yes, 0 = no))<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-he-20"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show20"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
To check whether spell has been studied/received or actually studied, there are 2 methods:
<ol><li>You can check for spell that hero has studied OR has on a scroll or artifact with a spell, 
using<strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>:M#/?$</strong>.<br>
In any case, the variable will become = 1 if hero has spell.</li>
<li>You can check for spell, which is learned by the hero, but NOT from a scroll or artifact, 
using <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>:M=#/1</strong>.<br>
Flag 1 will be set to True (1) if hero has learned spell.<br>
If hero knows spell thanks to a scroll/artifact, flag 1 will be set to False (0).</li>
</ol></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-n"></span><span class="erm-anchor" id="command-n-o-1-p-1-2-3-4"></span>N?$</strong></span><br>
Check or get <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a>.<br>
Do not try to establish the hero's number. It won't work, or it will cause instability.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-o"></span>O$</strong></span><br>
Set/check/get the hero's master (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a>).<br>
        $ – number of the player controlling the hero.<br>
If the hero is not on the map or he is not hired, the owner is -1.<br>
<strong></strong>
</div><span class="erm-anchor" id="ref-rec-he-21"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-he-show21"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">If you try to give a hero to a player who already has 8 active 
heroes, the command will simply be cancelled. <a href="../ow/#ref-rec-ow-h">Check</a> player's heroes to ensure that the transfer is completed successfully.<br>
Using the second phantom parameter in this command (for example, <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>..:O5/1</strong>), 
you will instantly change the owner of the hero. You can use this to set up an idle hero to protect neutral creatures, 
but make sure to return to the -1 owner after the battle. If you change the owner of an unrecruited hero using a temporary owner (from 0 to 7), 
this can be recognized via HE:O, but <a href="../ba/#ref-rec-ba-o">!!BA:O</a> will receive the value -1.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-p"></span>P$1/$2/$3</strong></span><br>
Set/check/get the coordinates of the hero (if you set the coordinates, it will be something like a teleport). 
You can also “pull” an unhired hero into the game by indicating the coordinates of his appearance and then assigning him an owner.<br>
<em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>P$1/$2/$3/$4</strong></span><br>
Move enemy hero (not your color) with sound and update operation:<br>
        if $4&lt;&gt;0 – move the hero with sound and update (ala Teleport)<br>
        if $4 = 0 – old style (hero immediately moves to point)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-41"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-he-show41"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<ul><li>Old command style (no $4) <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>..:P$1/$2/$3;</strong> works like <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>..:P$1/$2/$3/0;</strong></li>
<li>The specified number for $4 will be interpreted by the game as <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">players' bats</a>, 
which will open the destination along with the teleported hero.</li></ul></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-r"></span><span class="erm-anchor" id="command-r-refresh"></span>R0/$</strong></span><br>
Set/check/get hero morality (until next battle)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r1"></span><span class="erm-tone-red"><strong>R1/$</strong></span><br>
Set/check/get the hero's luck (until next battle)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r2"></span><span class="erm-tone-red"><strong>R2/$</strong></span><br>
Set/check/get the hero's gender<br>
        $ = 0 – man<br>
        $ = 1 – woman</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r3"></span><span class="erm-tone-red"><strong>R3/$1</strong></span><br>
Set/check/get the hero's accessibility in the tavern for ALL PLAYERS.<br>
        $1 – allow (1) or deny (0) hero to hire<br>
<em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>R3/$1/$2</strong></span><br>
Set/check/get the availability of the hero in the tavern for each player.<br>
        $2 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">players</a>who can hire<br>
$2 only matters if you resolved the hero.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r4"></span><span class="erm-tone-red"><strong>R4/$</strong></span><br>
Set/check whether it is possible to deploy troops at the beginning of the battle if there are tactics.<br>
An example of a command is the button at the bottom right of the hero window.<br>
        $=1 – allow<br>
        $=0 – disable</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r5"></span><span class="erm-tone-red"><strong>R5/$</strong></span><br>
Set maximum morale<br>
        $ = 0 – not installed<br>
        $ = 1 – installed</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r6"></span><span class="erm-tone-red"><strong>R6/$</strong></span><br>
Set maximum luck<br>
        $ = 0 – maximum luck is not given<br>
        $ = 1 – maximum luck is given</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-he-r7"></span><span class="erm-tone-red"><strong>R7/$</strong></span><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Set a visited object modifier that temporarily changes the hero’s parameters.<br>
        $ = <a href="../../tables/hero-visits/#ref-form-he-r" data-context="true">binary word, bit mask</a><br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-22"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show22"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
In most cases, setting or clearing these bits will not change luck, morale, turn points, or magic - it will only set 
(or clears) the record of the hero’s visit to an object in a given period, for example, this week, before the next battle, etc. 
The command will set or clear the text associated with visiting this object if you click on luck or morale in the hero window 
(eg "Visit Temple +1"), but you will still have to set temporary luck or morale with the commands HE:R0 and HE:R1.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-ref"></span><span class="erm-tone-red"><strong>R#1/$/#2</strong></span><br>
Update command (for all commands HE:R)<br>
        #1 – team number R<br>
        $ – value<br>
        #2 – update flag<br>
             = 0 – no (default)<br>
             = 1 – yes<br>
Adventure screen does not update automatically after HE:R commands. 
If you want to update it, use this syntax with the "update" flag (#2 = 1)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-s"></span><span class="erm-anchor" id="command-s-s-s-1-2-1"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
Set/check the number of secondary skills to display.<br>
        $ – number of skills that will be shown (0..8)<br>
If you only want to show one skill, first change its position to slot 1 and then limit the number of skills shown to one using this command.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>S#1/$2</strong></span><br>
Set/check/get secondary skills<br>
        #1 – <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">skill number</a><br>
        $2 – skill level (0 – none, 1 – basic, 2 – advanced, 3 – expert).<br>
You can install all the secondary skills (28) at once, but only the first 8 will be shown on the hero screen.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-45"></span><details class="erm-comment"><summary>Additionally (<span class="erm-anchor" id="ref-rec-he-show45"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Using low level command <a href="../un/#ref-rec-un-c">UN:C</a> We can provide the ability for the hero to programmatically learn all 28 skills:
<pre class="erm-example"><code class="language-erm">!!UN:C5091278/1/27 C5121386/1/27; [level up]
!!UN:C4881872/1/27; [visit the witch's hut]
!!UN:C6229127/1/27 C6229840/1/27; [university]</code></pre>
</div></details>
<div class="erm-paragraph">Also, you can <a href="../ss/#ref-cont-sschange">change skill parameters</a> setting other values from those specified in $2.<br>
<em>Extended syntax:</em><br>
<span class="erm-tone-red"><strong>S$1/$2/1</strong></span><br>
        $1 – number in the hero’s skills window (0 = none, 1..8 = slot number)<br>
        $2 – skill number (<a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">0..27</a>)<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-he-23"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show23"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can use three variations of the syntax:
<pre class="erm-example"><code class="language-erm">!!HE#:S?#1/#2/1; - find out in which slot skill #2 is shown in variable #1
!!HE#:S#1/?#2/1; - find out which skill is in slot #1 in variable #2
!!HE#:S#1/#2/1; - set slot #1 to show skill #2</code></pre>
In the latter case, if other skills occupy this slot, the skill will remain without a slot. 
You can use this command twice to change the positions of two skills.<br>
When you install skills with this command, you must follow the following rules:
<span class="erm-anchor" id="ref-rec-he-t0"></span><ul class="erm-margin-top-zero"><li>you can move any two displayed skills to change their positions</li>
<li>you <em>shouldn't</em> set skill to show if it is below base level (no skill)</li>
<li>you must set the skills to be shown in a specific order (no empty spaces).</li></ul>
Therefore, you cannot use the command to hide skills that are already showing. You also cannot show a skill if hero does not know it. 
Trying to do this will cause a "phantom" skill (usually Basic Wisdom), which will result in a crash from the game when you click on it.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-t"></span><span class="erm-anchor" id="command-t-1-2-3-4-5-u-1-2-3"></span>T$1/$2/$3/$4/$5</strong></span><br>
Challenge one type of creature to battle<br>
        $1 – X<br>
        $2 – Y<br>
        $3 – L<br>
        $4 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
        $5 – number of creatures<br>
X, Y and L are only used for terrain type and corresponding bonuses.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-u"></span>U$1/$2/$3</strong></span><br>
Set/check/get the position and patrol radius for the AI. Patrol Center X = $1, Y = $2 (level fixed). 
The radius will be set to $3 (you can free the hero from the patrol by setting $3 = -1)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-v"></span><span class="erm-anchor" id="command-v-v"></span>V#1/$2</strong></span><br>
Set/check/get whether hero visited objects <a href="../../tables/hero-visits/#ref-form-he-v" data-context="true">type #1</a> 
($2 is used as <a href="../../tables/bits/#ref-form-hex" data-context="true">bit</a> mask: 1 for the first object, 2 for the second, 4 for the third, etc.)<br>
<em>Syntax extension:</em><span class="erm-tone-red"><strong><br>
V#1/#2/$3<br>
       
</strong></span>#1 – <a href="../../tables/hero-visits/#ref-form-he-v" data-context="true">object type</a><br>
        #2 – object number (0..31)<br>
        $3 – visited by the hero (1) or not (0)<br>
<u>
</u>
</div><span class="erm-anchor" id="ref-rec-he-25"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show25"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:V0/0/0; - establish that the Stone of Knowledge number 0 was not visited by the hero
!!HE-1:V6/2/0; - establish that Library of Enlightenment number 2 was not visited by the hero
!!HE-1:V5/2; - establish that all Trees Knowledges, except the second one, will not be visited by the hero (only the second one is visited)</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-w"></span>W$</strong></span><br>
Change/get hero movement points<br>
         $ – points to change (W0, Wd-10, W?i, W&gt;=100...)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-26"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show26"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This number is not the number of steps that hero can take, but a significantly larger number (usually between 1500 and 2000, depending on the speed of the troops), 
the game is installed automatically. It is problematic to calculate the options for soil bonuses and penalties (plus Path Finding, Logistics, Boots of Speed, etc.). 
On grass with mixed creatures, 1 step is equal to 100 hero movement points.<br>
In Breath of Death and WoG, computer heroes receive additional movement points at higher difficulty levels. 
On Expert they get 125 extra points, on Impossible - 75. </div></details>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>W$/1</strong></span><br>
Same as HE:W$, but without updating. In the standard syntax, update is called even if you perform a check.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-x"></span><span class="erm-anchor" id="command-x-2-3-4-5-6-7"></span>X#1/$2/$3/$4/$5/$6/$7</strong></span><br>
Change the hero's specialty. Set/check/get all special installations.<br>
Types of specialties (#1):<br>
</div><span class="erm-anchor" id="ref-rec-he-27"></span><details class="erm-comment"><summary><u>#1 = 0</u> – specialist in secondary skill</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">secondary skill number</a><br>
     $3...$7 are ignored.</div></details><br>
<span class="erm-anchor" id="ref-rec-he-28"></span><details class="erm-comment"><summary><u>#1 = 1</u> – creature specialist</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">type of creatures</a>     <br>
     $3…$7 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-29"></span><details class="erm-comment"><summary><u>#1 = 2</u> – resource specialist</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/resources/#ref-form-resource" data-context="true">resource type</a><br>
     $3…$7 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-30"></span><details class="erm-comment"><summary><u>#1 = 3</u> - spell specialist</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/spells/#ref-form-spell" data-context="true">spell number</a><br>
     $3…$7 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-31"></span><details class="erm-comment"><summary><u>#1 = 4</u> – creature expert</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
     $3 – attack bonus<br>
     $4 – protection bonus<br>
     $5 – damage bonus<br>
     $6...$7 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-32"></span><details class="erm-comment"><summary><u>#1 = 5</u> – speed</summary><div class="erm-comment-body">     $2 = 2 <br>
     $3…$7 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-33"></span><details class="erm-comment"><summary><u>#1 = 6</u> – improvement specialist</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature 1</a> to improve<br>
     $6 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature 2</a> to improve<br>
     $7 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature</a> improved<br>
     $3…$5 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-34"></span><details class="erm-comment"><summary><u>#1 = 7</u> - dragon specialist</summary><div class="erm-comment-body">
     $2 = 0<br>
     $3 – attack bonus<br>
     $4 – protection bonus<br>
     $5...$7 ignored</div></details><br>
<span class="erm-anchor" id="ref-rec-he-35"></span><details class="erm-comment"><summary><u>#1 = 8</u> – extra-VoG – specialty</summary><div class="erm-comment-body">
    $2 =<br>
            1 - Cover of Darkness<br>
            2 - Builder<br>
    $3…$7 ignored</div></details><br><br>
<u></u>
<span class="erm-anchor" id="ref-rec-he-36"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show36"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">You can use the "d" option for settings that you ignore or cannot change:
<pre class="erm-example"><code class="language-erm">!!HE#:X8/2/d/d/d/d/d; or so !!HE#:X8/2;</code></pre>
To check the current settings use:
<pre class="erm-example"><code class="language-erm">!!HE#:X?y5/?y6/?y7/?y8/?y9/?y10/?y11;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-y"></span><span class="erm-anchor" id="command-y-1-2-3-4-z"></span>Y$1/$2/$3/$4</strong></span><br>
Blessings and curses.     <br>
        $1 – blessing/curse number (<a href="../../tables/blessings/#ref-form-bless" data-context="true">1..65</a>)<br>
        $2 – spell power (not used for blindness and slot blocking)<br>
        $3 – duration in days<br>
        $4 – what to do with it (0 – delete, 1 – give, 2 – add/subtract)<br>
<pre class="erm-example"><code class="language-erm">!!HE#:Y0/0/0/3; - removal of all curses and blessings</code></pre>
<u></u></div><span class="erm-anchor" id="ref-rec-he-37"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-he-show37"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Each hero can only have one spell of each type.<br>
So when you add or subtract (subtracting is adding a negative value), 
this means that the strength and duration will be changed by the sum of the old and new values. 
If you remove a curse, the strength and duration parameters do not matter.<br>
<span class="erm-indent">Curse of a locked slot.<br>
$2 - slot number for the block (-1 = random slot).<br>
If the slot contains artifact, it will be hidden and will appear in the same place when the curse ends. 
But (!) when removing the curse, the “closed slot” is not unlocked. 
If you use the command to remove all curses, everything is in order.<br>
The slots table is unlike any other table, the results were obtained experimentally - <a href="../../tables/artifact-slots/#ref-form-ap3" data-context="true">slot number</a><br>
If you close a combat vehicle and the hero already has one, one of the miscellaneous slots (1..3) will close depending on the number of the combat vehicle. 
Moreover, outwardly it will look like an empty slot, but at the end of the curse artifact will return. 
If you pick up a car in your inventory while the curse is active, town will appear under it, and you will not be able to put it back.</span></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-z"></span>Z?$</strong></span><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
The command returns the memory address <a href="../../tables/hero-structure/#ref-form-advhero" data-context="true">structures of the specified hero</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-he-43"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-he-show43"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?FU(Hero_Param);
; Sample function for working with hero parameters:
; x1 - hero number
; x2 - offset to the specified parameter
; x3 - number of bytes (1, 2, 4)
; x4 - return value
; x5 - function operating mode (0=set/1=get)
!!HEx1:Z?y1;
!!UN&amp;x5=0:Cy1/x2/x3/x4; set-mode
!!UN&amp;x5=1:Cy1/x2/x3/?x4; get-mode

; Using this function you can find out the total number of artifacts Ash (x1=61) in the backpack (x2=980; x3=1 byte)
!!FU(Hero_Param):P28/980/1/?y10/1; the result will be entered in y10

; And so you can make Ash fly (x2=274; x3=4bytes) without any conventions
!!FU(Hero_Param):P28/274/4/3/0; here "3" is exp. level. witchcraft</code></pre></div></details>
<hr>













</div>
</div>
</section>
:::

## Related reference {#related}

[Framework](../../framework/functions/) · [CO](../../receivers/co/) · [EA](../../receivers/ea/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [Hero table](../../tables/heroes/) · [Visiting a hero (HE)](../../triggers/he/) · [Artifact table](../../tables/artifacts/) · [Artifact slots](../../tables/artifact-slots/) · [Variables, strings and arrays](../../variables/) · [Hero classes](../../tables/hero-classes/) · [Town types](../../tables/towns/) · [ERM debugging and compatibility](../../compatibility/) · [Creature table](../../tables/creatures/) · [Repeated function calls (DO)](../do/) · [Hero experience thresholds](../../tables/hero-levels/) · [Spell table](../../tables/spells/) · [Player colors](../../tables/players/) · [Players (OW)](../ow/#command-h-h) · [Battle configuration (BA)](../ba/#command-o-1-2) · [Hero visits and bits](../../tables/hero-visits/) · [Secondary skills](../../tables/secondary-skills/) · [General game operations (UN)](../un/#command-cbase-size-cbase-offset-size) · [Spell attributes (SS)](../ss/) · [Bits, masks and hexadecimal](../../tables/bits/) · [Resources](../../tables/resources/) · [Hero blessings and curses](../../tables/blessings/) · [Hero structure fields](../../tables/hero-structure/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l439) — Modified "HE:B0", "HE:B1", "HE:B3" commands to allow any string as argument.
- [ERA 3.8.3, -](../../compatibility/#era3-v-3-8-3-l1448) — Fixed HE:P command. Previosly if new coordinates were the same as previous hero coordinates, no visual update was performed.
- [ERA 3.5.0, +](../../compatibility/#era3-v-3-5-0-l1676) — Rewritten part of old ERM engine, which was responsible for conditions evaluations. - It's now possible to use spaces and line feeds to decorate complex conditions. Example: !!if|i^Master_Warrior_Hero%(hero)^ <> (prevWas…
- [ERA 3.4.1, +](../../compatibility/#era3-v-3-4-1-l1753) — (CURRENT_HERO) constant (-1) can be safely used in triggers from now. Previosly this global value could be overwritten by nested events. Example: !?HM0; current hero is Orrin !!HE(HERO_XERON):Ed100000; Level up for Xeron…
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2415) — Added GetProcessGuid exported function, allowing to retrieve unique 32-character ID of game process run. Each game process start will generate different value. Modders can use this value to check, whether player restarte…
- [ERA 3.1.0, -](../../compatibility/#era3-v-3-1-0-l3130) — Fixed HE receiver to support any ERM variable like !!HEi^heroId^.
- [ERA 3.0.5, +](../../compatibility/#era3-v-3-0-5-l3237) — Added functions for SN:M arrays handling to "Era Erm Framework" mod. !?FU(Array_Join); ; Concatenates array items into single string, using passed glue string. Works with both numeric and string arrays. ; Example: &#91;'one'…
- [ERA 3.0.4, -](../../compatibility/#era3-v-3-0-4-l3406) — Fixed bug: HE:P used to return unsigned 65535 instead of signed -1.
- [ERA 3.0.3, -](../../compatibility/#era3-v-3-0-3-l3427) — HE:P without 4-th parameter now works as in WoG 3.58f for compatibility reasons. If hero belongs to current player, teleport sound is played and screen redrawn. Otherwise teleportation is silent without visual update.
- [ERA 3.0.2, +](../../compatibility/#era3-v-3-0-2-l3450) — Restored short !!HE:X6 syntax support and fixed ERM HE:X7 bug: short syntax worked as X7/a/d/0/0/0/0 instead of X7/0/a/d/0/0/0.
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3548) — It's proposed to decorate functions declarations in the following variants: ; Bried function description like: ; Hides rectangular area on the map. !?FU(es_HideMapSquare); !#VA(x1:x) (y1:x) (x2:x) (y2:x) (level:x); fast …
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3587) — Introduced advanced ERM precompilation mode, called ERM 2.0 and activated via "ZVSE2" first line signature. Main features: - Named local variables to write human readable code instead of cryptic one. Example: !!HE-1:C0/0…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3871) — ^....^ literal in any ERM command is interpolated and replaced by temporal z-variable index before receiver execution. This z-variable is released right after receiver is executed. Don't use string literals in WoG 3.58 h…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3982) — HE:P command behavior was fixed. Teleport function with sound is called only if any coordinate was really changed. Advanced d-modifiers are supported for the first three parameters.
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3985) — HE:C0 command was rewritten. -1 and -2 values for creature type are not treated as "upgrade"/"degrade" anymore. Command supports any d-modifiers now. Exp. modifier parameter is now SET-only. Previosly !!HE:C0/0/?y1/?y2/d…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3992) — Rewritten HE:X command to accept any number of parameters and understand any d-modifiers. Example: !!HE-1:X0/27 Xd1; become master of gold dragons
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4046) — Added !!HE:Z?$addr command to get hero structure address.
<!-- ERA3-GENERATED:END -->
