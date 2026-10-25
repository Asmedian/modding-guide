# Heroes (HE)

ID: erm.receivers.he
URL: /en/erm/receivers/he/
Part: 1/3
Source references: old-help:rec-he.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.he 1 -->
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
New command <a href="./#ref-rec-he-a4">HE:A4</a>, added in 3.58, will correctly give spells to the hero.
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
You can also get qty ($3). Finding the number allows you to quickly check whether hero has creatures of a given type, without using <a href="../do/#ref-rec-do">loops</a>. 
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

<!-- llm:end erm.receivers.he 1 -->

