---
{"title":"Object control words","summary":"The 32-bit OB:C field has a different layout for each object type. These are inspected legacy WoG fields; preserve unknown bits. Field capacity does not make every value valid. Use PO for custom data.","translationStatus":"reviewed"}
---

## Corrected source links {#source-link-corrections}

The original Skeleton entry (type 22) says SC:N / SC:A / SC:S. These are typos: the commands belong to [SK](../../receivers/sk/). The original wording is retained and the three link destinations are corrected. The MT:N link in the Obelisk entry (type 57) now correctly opens [MT:N](../../receivers/mt/#ref-rec-mt-n), not the mine receiver MN.

## Examination of control words of objects {#ref-cont-conwords}

:::erm
<section class="erm-reference" lang="en">
<div>

<span class="erm-anchor" id="ref-cont-conwords-text"></span><div>
<span class="erm-anchor" id="ref-cont-conwords-up"></span>

<h3 class="erm-align-center">Study of “control words” of map objects.</h3>
<span class="erm-anchor" id="ref-cont-conwords-ri"></span><div class="erm-align-right erm-paragraph"><em>Mikhanik © 2008</em></div>

<span class="erm-anchor" id="ref-cont-conwords-1"></span><h3>What is control word?</h3>

<div class="erm-paragraph">Control word is a 32-bit number (-2147483648..2147483647) (“a word” in assembler just means this amount of memory), 
which is one of the parameters of each field cell and can be edited by the command <a href="../../receivers/ob/#ref-rec-ob-c">OB:C</a>. Unlike parameters such as terrain type or permeability, it 
like <a href="../../receivers/po/#ref-rec-po">receiver PO</a>, specifies not the characteristics of the soil itself, but the characteristics of the object standing on it (and that is why it is used to access it <a href="../../receivers/ob/#ref-rec-ob">!!OB</a>). 
As you know, in Heroes 3 there are more than two hundred <a href="../objects/#ref-form-objects" data-context="true">object types</a>, and only 62 of them have such characteristics. This study aims to understand 
what parameters control word sets in each of these 62 cases. In principle, almost nothing new is contained here, since some ERM commands, in addition to <a href="../../receivers/ob/#ref-rec-ob-c">OB:C</a>, 
also edit control word. This will be indicated below. But there is still a little new.</div>

<h4>Binary representation of numbers in assembly language</h4>

<div class="erm-paragraph">Before we begin, we need to give those readers who are not familiar with assembly language an idea of the binary format of numbers in it. I will briefly touch on this topic from a purely practical perspective. 
(I think that everyone already knows the binary number system.) WoG uses mainly 32-bit numbers, that is, numbers with a length of no more than 32 binary digits. 
(In what follows, “bit” will just denote a binary sign. As is customary in assembler, bits are numbered from right to left, starting from 0.) But the fact is that the last bit is used to record the sign of the number (“+” or “-”), 
and only 31 bits are actually allocated for the number itself. But that's not all! If 863 is written as 1101011111, or 000000000000000000000001101011111, then -863 is not written as 100000000000000000000001101011111, 
and as 11111111111111111111110010100001, which is nothing more than the number 000000000000000000001101011110 = 862, in which the ones were replaced by zeros and vice versa. This is how all negative numbers are written, 
in particular, -1 is written as 32 ones, since its opposite number is 0. This allows us to fit into 32 bits the number -2147483648, which in a normal binary format would be written as -100000000000000000000000000000000, 
i.e. 32 digits and a “-” sign, and 32 bits would not fit. In addition (and this is the main thing), this format greatly simplifies calculations for the computer. But that doesn't matter to us.</div>

<h4><span class="erm-anchor" id="ref-cont-conwords-logic"></span>Logical bit operations in WoG</h4>

<div class="erm-paragraph">It is also necessary to explain how to handle binary numbers. In order to replace, say, bits 5 to 12 and not affect the rest (this will be needed later), they use logical operations. 
There are three of them in WoG: <a href="../../receivers/vr/#ref-rec-vr-and">VR:&amp;amp</a>, <a href="../../receivers/vr/#ref-rec-vr-or">VR:|</a> (sign <strong>|</strong> here - not <em>i</em> capital, and a special vertical stick, in the English layout - <span class="erm-key">Shift</span>+<span class="erm-key">\</span>) and <a href="../../receivers/vr/#ref-rec-vr-xor">VR:X</a>. Accordingly, programmers call them AND, OR and XOR, and scientifically they are called conjunction, disjunction and exclusive disjunction. 
They work like this: two numbers are taken (here - one from a variable, the other as a parameter, for example. <span class="erm-anchor" id="ref-cont-conwords-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!VR</span>y12:S86 |12;</strong> - here the initial numbers will be 86 and 12), then their first bits are taken, processed according to a certain rule, what happens is written into the first bit of the result. 
The same thing happens with the second bits, the third and all the rest. (Our result is again written to a variable.) 
These rules are:</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-center">
<span class="erm-anchor" id="ref-cont-conwords-n2"></span><tr class="erm-tone-purple erm-align-center erm-strong" style="background-color:#60b0b0">	
	<td>AND</td><td>OR</td><td>XOR</td></tr>
<tr>
	<td>0 and 0 → 0</td><td>0 and 0 → 0</td><td>0 and 0 → 0</td></tr>
<tr>
	<td>0 and 1 → 0</td><td>0 and 1 → 1</td><td>0 and 1 → 1</td></tr>
<tr>
	<td>1 and 0 → 0</td><td>1 and 0 → 1</td><td>1 and 0 → 1</td></tr>
<tr>
	<td>1 and 1 → 1</td><td>1 and 1 → 1</td><td>1 and 1 → 0</td></tr>
</table></div>


<div class="erm-paragraph">Now - how to use them in this case.<br>Let's show this all using the same example - write in the number y1 the number y2 in bits 5 to 12.
</div><ol>
<li> First, let's prepare the number y2.<br>
Since 8 bits are allocated for its recording, it should not be longer than them. Just in case, we'll cut it off. How to do this? Let's use the command:
<pre class="erm-example"><code class="language-erm">!!VRy2:&amp;255;</code></pre>
What is she doing? In binary notation, the number 255 looks like 00000000000000000000000011111111. Obviously, the first 8 bits of the number y2 will not change - see above, 
and the rest will turn to zero regardless of the original value. But that’s what we need!</li>
<li> Now let's prepare y1.<br>It needs to “clear space” for y2. Let's do it in a similar way:
<pre class="erm-example"><code class="language-erm">!!VRy1:&amp;-4081; , 
where -4081 = 11111111111111111111000000001111 has zeros from bits 5 to 12.</code></pre></li>
<li> You can insert y2 into y1.<br>To do this, we first remake y2 so that the bits we need are located not from 1 to 8, but from 5 to 12, in the same place where they should be in y1. 
This is equivalent to adding four zeros to y2, i.e. multiplying it by 10000 = 16:
<pre class="erm-example"><code class="language-erm">!!VRy2:*16;</code></pre></li>
<li> And finally, we combine y1 and y2.<br>To do this, note that in the VR command:<strong>|</strong> When connected to zero, the bits do not change.<br>
(In principle, VR:X has the same property, but it is not customary to use it that way.)<br>
And we have zeros from 1 to 4 and 13 to 32 bits in y2, and zeros in y1 from 5 to 12 bits. So after the command:
<pre class="erm-example"><code class="language-erm">!!VRy1:|y2;</code></pre>
... in y1 bits 1..4 and 6..32 will not change, and 5..12 will be replaced with bits from y2. And this is what we need.<br>
We get the final script:
<pre class="erm-example"><code class="language-erm">!!VRy2:&amp;255;
!!VRy1:&amp;-4081;
!!VRy2:*16;
!!VRy1:|y2;
; or
!!VRy2:&amp;255 *16;
!!VRy1:&amp;-4081 |y2;</code></pre></li>
</ol>
<div class="erm-paragraph">Let's set a more general task: write to y1 y2 in bits with no.<code><strong>a</strong></code> by no.<code><strong>b</strong></code>.<br>
The corresponding script looks like this:
<pre class="erm-example"><code class="language-erm">!!VRy2:&amp;f *g;
!!VRy1:&amp;h |y2; ,</code></pre>
where <strong>f</strong> = 2<sup>(b-a+1)</sup>-1, <strong>g</strong>=2<sup>(a-1)</sup>, <strong>h</strong>=-f×g-1=2<sup>(a-1)</sup>-2<sup>b</sup>-1.<br>
Use this script.</div>
<span class="erm-anchor" id="ref-cont-conwords-2"></span><h3>Structure of control words of different types of objects</h3>

<div> 
	<ul title="Quickly jump to the desired object...">
	<li><a href="./#ref-cont-conwords">------------ object selection ------------</a></li>
		<li><a href="./#ref-cont-conwords-t4">4. Arena</a></li>
		<li><a href="./#ref-cont-conwords-t5">5. Artifact</a></li>
		<li><a href="./#ref-cont-conwords-t6">6. Pandora's Box</a></li>
		<li><a href="./#ref-cont-conwords-t12">12. Campfire</a></li>
		<li><a href="./#ref-cont-conwords-t14">14. Swan Pond</a></li>
		<li><a href="./#ref-cont-conwords-t16">16. Creature Bank</a></li>
		<li><a href="./#ref-cont-conwords-t17">17-20. Creature Generators</a></li>
		<li><a href="./#ref-cont-conwords-t22">22. Corpse</a></li>
		<li><a href="./#ref-cont-conwords-t23">23. Marletto Tower</a></li>
		<li><a href="./#ref-cont-conwords-t24">24. Derelict Ship</a></li>
		<li><a href="./#ref-cont-conwords-t25">25. Dragon Utopia</a></li>
		<li><a href="./#ref-cont-conwords-t26">26. Event</a></li>
		<li><a href="./#ref-cont-conwords-t29">29. Flotsam</a></li>
		<li><a href="./#ref-cont-conwords-t30">30. Fountain of Fortune</a></li>
		<li><a href="./#ref-cont-conwords-t32">32. Garden of Revelation</a></li>
		<li><a href="./#ref-cont-conwords-t33">33. Garrison</a></li>
		<li><a href="./#ref-cont-conwords-t34">34. Hero</a></li>
		<li><a href="./#ref-cont-conwords-t39">39. Cellar / Lean To</a></li>
		<li><a href="./#ref-cont-conwords-t41">41. Library of Enlightenment</a></li>
		<li><a href="./#ref-cont-conwords-t42">42. Lighthouse</a></li>
		<li><a href="./#ref-cont-conwords-t44">44. Exit Monolith</a></li>
		<li><a href="./#ref-cont-conwords-t45">45. Double-sided monolith</a></li>
		<li><a href="./#ref-cont-conwords-t47">47. School of Magic</a></li>
		<li><a href="./#ref-cont-conwords-t48">48. Magic Spring</a></li>
		<li><a href="./#ref-cont-conwords-t51">51. Mercenary Camp</a></li>
		<li><a href="./#ref-cont-conwords-t53">53. Mine</a></li>
		<li><a href="./#ref-cont-conwords-t54">54. Creature</a></li>
		<li><a href="./#ref-cont-conwords-t55">55. Mystical Garden</a></li>
		<li><a href="./#ref-cont-conwords-t57">57. Obelisk</a></li>
		<li><a href="./#ref-cont-conwords-t59">59. Ocean Bottle</a></li>
		<li><a href="./#ref-cont-conwords-t61">61. Star Axis</a></li>
		<li><a href="./#ref-cont-conwords-t62">62. Prison</a></li>
		<li><a href="./#ref-cont-conwords-t63">63. Pyramid</a></li>
		<li><a href="./#ref-cont-conwords-t78">78. Refugee Camp</a></li>
		<li><a href="./#ref-cont-conwords-t79">79. Resource</a></li>
		<li><a href="./#ref-cont-conwords-t81">81. Scholar</a></li>
		<li><a href="./#ref-cont-conwords-t82">82. Sea Chest</a></li>
		<li><a href="./#ref-cont-conwords-t83">83. Seer's Hut</a></li>
		<li><a href="./#ref-cont-conwords-t84">84. Crypt</a></li>
		<li><a href="./#ref-cont-conwords-t85">85. Shipwreck</a></li>
		<li><a href="./#ref-cont-conwords-t86">86. Victim..</a></li>
		<li><a href="./#ref-cont-conwords-t87">87. Shipyard</a></li>
		<li><a href="./#ref-cont-conwords-t88">88-90. Shrines of Magic</a></li>
		<li><a href="./#ref-cont-conwords-t91">91. Sign</a></li>
		<li><a href="./#ref-cont-conwords-t93">93. Scroll with a spell</a></li>
		<li><a href="./#ref-cont-conwords-t98">98. Town</a></li>
		<li><a href="./#ref-cont-conwords-t100">100. Stone of knowledge</a></li>
		<li><a href="./#ref-cont-conwords-t101">101. Treasure chest</a></li>
		<li><a href="./#ref-cont-conwords-t102">102. Tree of knowledge</a></li>
		<li><a href="./#ref-cont-conwords-t103">103. Gate of the Underworld</a></li>
		<li><a href="./#ref-cont-conwords-t104">104. University</a></li>
		<li><a href="./#ref-cont-conwords-t105">105. Wagon</a></li>
		<li><a href="./#ref-cont-conwords-t107">107. School of War</a></li>
		<li><a href="./#ref-cont-conwords-t108">108. Warrior's Grave</a></li>
		<li><a href="./#ref-cont-conwords-t109">109. Water wheel</a></li>
		<li><a href="./#ref-cont-conwords-t112">112. Windmill</a></li>
		<li><a href="./#ref-cont-conwords-t113">113. Witch's Hut</a></li>
		<li><a href="./#ref-cont-conwords-t215">215. Quest Guard</a></li>
	<li>Giving resources..
		<li><a href="./#ref-cont-conwords-t12">12. Campfire</a></li>
		<li><a href="./#ref-cont-conwords-t29">29. Flotsam</a></li>
		<li><a href="./#ref-cont-conwords-t39">39. Cellar / Lean To</a></li>
		<li><a href="./#ref-cont-conwords-t53">53. Mine</a></li>
		<li><a href="./#ref-cont-conwords-t55">55. Mystical Garden</a></li>
		<li><a href="./#ref-cont-conwords-t79">79. Resource</a></li>
		<li><a href="./#ref-cont-conwords-t86">86. Victim..</a></li>
		<li><a href="./#ref-cont-conwords-t101">101. Treasure chest*</a></li>
		<li><a href="./#ref-cont-conwords-t105">105. Wagon</a></li>
		<li><a href="./#ref-cont-conwords-t109">109. Water wheel</a></li>
		<li><a href="./#ref-cont-conwords-t112">112. Windmill</a></li>
	</li>
	<li>With bonuses for the hero..
		<li><a href="./#ref-cont-conwords-t4">4. Arena</a></li>
		<li><a href="./#ref-cont-conwords-t14">14. Swan Pond</a></li>
		<li><a href="./#ref-cont-conwords-t23">23. Marletto Tower</a></li>
		<li><a href="./#ref-cont-conwords-t30">30. Fountain of Fortune</a></li>
		<li><a href="./#ref-cont-conwords-t32">32. Garden of Revelation</a></li>
		<li><a href="./#ref-cont-conwords-t41">41. Library of Enlightenment</a></li>
		<li><a href="./#ref-cont-conwords-t47">47. School of Magic</a></li>
		<li><a href="./#ref-cont-conwords-t51">51. Mercenary Camp</a></li>
		<li><a href="./#ref-cont-conwords-t61">61. Star Axis</a></li>
		<li><a href="./#ref-cont-conwords-t100">100. Stone of knowledge</a></li>
		<li><a href="./#ref-cont-conwords-t107">107. School of War</a></li>
		<li><a href="./#ref-cont-conwords-t30">30. Fountain of Fortune</a></li>
		<li><a href="./#ref-cont-conwords-t48">48. Magic Spring</a></li>
		<li><a href="./#ref-cont-conwords-t81">81. Scholar</a></li>
		<li><a href="./#ref-cont-conwords-t83">83. Seer's Hut</a></li>
		<li><a href="./#ref-cont-conwords-t88">88-90. Shrines of Magic</a></li>
		<li><a href="./#ref-cont-conwords-t101">101. Treasure chest</a></li>
		<li><a href="./#ref-cont-conwords-t102">102. Tree of knowledge</a></li>
		<li><a href="./#ref-cont-conwords-t104">104. University</a></li>
		<li><a href="./#ref-cont-conwords-t108">108. Warrior's Grave</a></li>
		<li><a href="./#ref-cont-conwords-t113">113. Witch's Hut</a></li>
	</li>
	<li>Guarded..
		<li><a href="./#ref-cont-conwords-t6">6. Pandora's Box*</a></li>
		<li><a href="./#ref-cont-conwords-t16">16. Creature Bank</a></li>
		<li><a href="./#ref-cont-conwords-t17">17-20. Creature Generators*</a></li>
		<li><a href="./#ref-cont-conwords-t24">24. Derelict Ship</a></li>
		<li><a href="./#ref-cont-conwords-t25">25. Dragon Utopia</a></li>
		<li><a href="./#ref-cont-conwords-t84">84. Crypt</a></li>
		<li><a href="./#ref-cont-conwords-t85">85. Shipwreck</a></li>
	</li>
	<li>Offshore:..
		<li><a href="./#ref-cont-conwords-t24">24. Derelict Ship</a></li>
		<li><a href="./#ref-cont-conwords-t29">29. Flotsam</a></li>
		<li><a href="./#ref-cont-conwords-t59">59. Ocean Bottle</a></li>
		<li><a href="./#ref-cont-conwords-t82">82. Sea Chest</a></li>
		<li><a href="./#ref-cont-conwords-t85">85. Shipwreck</a></li>
		<li><a href="./#ref-cont-conwords-t86">86. Victim..</a></li>
	</li>		
		<li>The same type according to the controlword..
		<li><a href="./#ref-cont-conwords-t4">4. Arena</a></li>
		<li><a href="./#ref-cont-conwords-t23">23. Marletto Tower</a></li>
		<li><a href="./#ref-cont-conwords-t32">32. Garden of Revelation</a></li>
		<li><a href="./#ref-cont-conwords-t41">41. Library of Enlightenment</a></li>
		<li><a href="./#ref-cont-conwords-t47">47. School of Magic</a></li>
		<li><a href="./#ref-cont-conwords-t51">51. Mercenary Camp</a></li>
		<li><a href="./#ref-cont-conwords-t61">61. Star Axis</a></li>
		<li><a href="./#ref-cont-conwords-t100">100. Stone of knowledge</a></li>
		<li><a href="./#ref-cont-conwords-t107">107. School of War</a></li>
	</li></ul>
</div>

<div class="erm-paragraph">Here we come to the main part of the study. All 62 types of objects containing control words are analyzed in detail here. Where appropriate, primary sources or relevant ERM commands are cited. 
It should be noted that I dug up some things myself, and if someone obtained this information independently of me, do not be offended. So...</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t4"></span><a href="../objects/#ref-form-objects" data-context="true">Type 4</a>. <strong>Arena</strong><br><img src="../../../../assets/erm/01259e6211a10e7f.png" alt="Type 4. Arena Control word is a number from 0 to 31, occupying the first 5 bits, the rest are ignored and are usually empty. Arena itself has no parameters, but" loading="lazy" decoding="async" class="erm-figure">
Control word is a number from 0 to 31, occupying the first 5 bits, the rest are ignored and are usually empty. 
Arena itself has no parameters, but, as is known, each hero can visit each Arena only once in his life, so they need to be distinguished. 
Whether hero has visited the Arena or not is edited by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V7</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t5"></span><a href="../artifacts/#ref-form-a1" data-context="true">Type 5</a>. <strong>Artifact</strong><br>
Several parameters are written to control word:<br>
<span class="erm-anchor" id="ref-cont-conwords-wt"></span><strong class="erm-legacy-label">Bits 0-14</strong>: matches the command <a href="../../receivers/ar/#ref-rec-ar-v">AR:V</a>: number of the spell in the scroll (0..32767) or (!) type of artifact selection (unearthed <span class="erm-anchor" id="ref-cont-conwords-n1"></span><code class="erm-tone-purple erm-strong">ShadowTheAge</code>):<br>
   0 – free selection,<br>
   1 – for 2000 gold,<br>
   2 – wisdom required,<br>
   3 – leadership required,<br>
   4 – 2500 gold and 3 wood,<br>
   5 – 3000 gold and 5 wood,<br>
   6 – security is turned on (regardless of the value <a href="../../receivers/ar/#ref-rec-ar-x">AR:X</a>), </div>
<span class="erm-anchor" id="ref-cont-conwords-6"></span><details class="erm-comment"><summary><strong>more details</strong> (<span class="erm-anchor" id="ref-cont-conwords-show6"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-cont-conwords-q2"></span><blockquote class="erm-tone-quote erm-note"><strong>Addition</strong> from <strong class="erm-tone-purple erm-strong">XEPOMAHT</strong>'a: for this type of artifact selection, the flag, number of creatures and their number are encoded in the control word. 
<pre>The format is (bit by bit):
<strong class="erm-legacy-label">0..3</strong>: selection type (6)
<strong class="erm-legacy-label">4..11</strong>: creature number (0..255)
<strong class="erm-legacy-label">12..16</strong>: not used
<strong class="erm-legacy-label">17..28</strong>: number of creatures (0..4096)
<strong class="erm-legacy-label">29..31</strong>: not used</pre></blockquote></div></details>
<div class="erm-paragraph">   values greater than 6 – artifact is not raised.<br>
In the absence of security, a battle with zero Cerberus tries to start, which is automatically won (unearthed <code class="erm-tone-purple erm-strong">feanor</code>).
Somewhere in the help for the SoD map editor it is written that at the beginning of the game 10-15% of artifacts are selected and a certain price is set for them. Or something like that.<br>
<strong class="erm-legacy-label">Bits 15-18</strong>: <span class="erm-anchor" id="ref-cont-conwords-dred"></span><del class="erm-tone-red"><span class="erm-tone-accent">Apparently they don't mean anything. Usually it's 0.</span></del></div>
<blockquote class="erm-tone-quote erm-note"><strong>Note</strong> from <strong class="erm-tone-purple erm-strong">XEPOMAHT</strong>'a: <strong class="erm-legacy-label">bits 15-18</strong> actually contain the resource type (for artifact selection type values equal to 4 or 5), 
also taken from the Control Word with a bit shift (by default there is 0 → tree).</blockquote>
<div class="erm-paragraph"><strong class="erm-legacy-label">Bits 19-30</strong>: personal artifact number (0..4095). Each number has its own separate data area where data is stored, 
accessed by commands <a href="../../receivers/ar/#ref-rec-ar">AR</a>:G M X.<br>
<strong class="erm-legacy-label">Bit 31</strong>: whether this number exists (1) or does not exist (0). There may not be a number if the artifact has neither protection nor a message. In this case, the commands <a href="../../receivers/ar/#ref-rec-ar">AR</a>:G M X do not work.<br>
31 bits determine the sign of the number, so there is a simple sign: if control word is negative, then these commands work, if not, they do not work. (The first to unearth such a sign was <code class="erm-tone-purple erm-strong">GrayFace</code>)</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/b9ee7384cccab247.png" alt="Type 6. Pandora&#x27;s Box Bits 0-9: personal number (0..1023). Again, corresponds to the command data area LE:A B C E F G M N O P R S U X. Bits 10-31 are ignored." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t6"></span><a href="../objects/#ref-form-objects" data-context="true">Type 6</a>. <strong>Pandora's Box</strong><br>
<strong class="erm-legacy-label">Bits 0-9</strong>: personal number (0..1023). Again, corresponds to the command data area <a href="../../receivers/le/#ref-rec-le">LE</a>:A B C E F G M N O P R S U X.<br>
<strong class="erm-legacy-label">Bits 10-31</strong> are ignored.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/aca11ff49be06851.png" alt="Type 12. Campfire Bits 0-3:resource type (0..15). Matches the first parameter of the command FR:B. Interestingly, although resources are numbered 0 to 7 (3 bits" loading="lazy" decoding="async" class="erm-figure">
<span class="erm-anchor" id="ref-cont-conwords-t12"></span><a href="../objects/#ref-form-objects" data-context="true">Type 12</a>. <strong>Campfire</strong><br>
<strong class="erm-legacy-label">Bits 0-3</strong>:resource type (0..15). Matches the first parameter of the command <a href="../../receivers/fr/#ref-rec-fr-b">FR:B</a>. Interestingly, although resources are numbered 0 to 7 (3 bits), the 4th bit is not ignored. 
By setting values from 8 to 15, we can receive in the message instead of a resource picture pictures of artifacts, spells, flags, luck and morality - numbering, as in <a href="../dialog-pictures/#ref-form-picts" data-context="true">IF:Q</a>. 
Of course, artifacts and other things are not actually added to the hero, but they can be added using ERM. The second parameter for images is the number of resources.<br>
<strong class="erm-legacy-label">Bits 4-19</strong>: quantity of resource. Can be negative: -32768 to +32767. Matches the second parameter <a href="../../receivers/fr/#ref-rec-fr-b">FR:B</a>.<br>
<strong class="erm-legacy-label">Bits 20-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t14"></span><a href="../objects/#ref-form-objects" data-context="true">Type 14</a>. <strong>Swan Pond</strong><br>
It should be noted about such a widespread misconception that Swan Lake has parameters. For some reason <a href="../../#ref-cont-wogteam" data-context="true">WoG Team</a> created receiver, editing it control word, 
with the ability to set the amount of luck and a personal number. In fact, there is no number by the lake, and why would he need one? And luck is always +2. Receiver still tries to edit control word, but to no avail. 
In fact, it (in a word) always contains -1, but nevertheless, we present its composition as it appears in the imagination of ERM developers:<br>
<strong class="erm-legacy-label">Bits 0-4</strong> contain the pond number (0..31), which corresponds <a href="../../receivers/sw/#ref-rec-sw-n">SW:N</a>.<br><img src="../../../../assets/erm/574c9d95ad62389a.png" alt="Type 14. Swan Pond It should be noted about such a widespread misconception that Swan Lake has parameters. For some reason WoG Team created receiver, editing it" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 5-12</strong> are ignored and are usually empty. (That is, in fact, they are filled by default, like everyone else, but when the luck bonus changes, for some reason they are reset to zero. 
Perhaps there should have been information about player visits here.)<br>
<strong class="erm-legacy-label">Bits 13-16</strong> correspond to the luck bonus - either from 0 to 15, or from -8 to +7. (Although the certificate indicates limit values from 1 to 3.)<br>
<strong class="erm-legacy-label">Bits 17-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t16"></span><a href="../creature-banks/#ref-form-cb" data-context="true">Type 16</a>. <strong>Creature Bank</strong><br>
<strong class="erm-legacy-label">Bits 0-4</strong> are ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 5-12</strong> contain information about players' visits (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>), which corresponds to <a href="../../receivers/cb/#ref-rec-cb-v">CB:V</a>. 
If visited, security is displayed in the tooltip.<br>
<strong class="erm-legacy-label">Bits 13-24</strong> contain a personal number (from 0 to 4095) referring to <a href="../../receivers/cb/#ref-rec-cb">CB</a>:A G M R.<br>
<strong class="erm-legacy-label">Bit 25</strong> contains whether the guards have been killed or not yet, and is edited by the command <a href="../../receivers/cb/#ref-rec-cb-t">CB:T</a>.<br>
<strong class="erm-legacy-label">Bits 26-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t17"></span><a href="../creature-dwellings/#ref-form-creaturedwellings" data-context="true">Types 17-20</a>. <strong>Creature generator</strong><br>
<strong class="erm-legacy-label">Bits 0-28</strong> contain a personal number (from 0 to 536870911) with all parameters <a href="../../receivers/dw/#ref-rec-dw">DW</a>.<br>
<strong class="erm-legacy-label">Bits 29-30</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/efdf82bd945a6de8.png" alt="Type 22. Corpse Bits 0-4: skeleton number (0..31) – SC:N. Bit 5 ignored and usually filled. Bits 6-15: artifact number (0..1023) – SC:A. Bit 16: is there artifa" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t22"></span><a href="../objects/#ref-form-objects" data-context="true">Type 22</a>. <strong>Corpse</strong><br>
<strong class="erm-legacy-label">Bits 0-4</strong>: skeleton number (0..31) – <a href="../../receivers/sk/#ref-rec-sk-n" title="Original Skeleton links say SC; the Skeleton receiver is SK.">SC:N</a>.<br>
<strong class="erm-legacy-label">Bit 5</strong> ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 6-15</strong>: artifact number (0..1023) – <a href="../../receivers/sk/#ref-rec-sk-a" title="Original Skeleton links say SC; the Skeleton receiver is SK.">SC:A</a>.<br>
<strong class="erm-legacy-label">Bit 16</strong>: is there artifact – <a href="../../receivers/sk/#ref-rec-sk-s" title="Original Skeleton links say SC; the Skeleton receiver is SK.">SC:S</a>.<br>
<strong class="erm-legacy-label">Bits 17-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/0237688e6f8182a3.png" alt="Type 23. Marletto Tower Just like Arena, bits 0-4 – number, the rest are ignored and are usually empty. The hero&#x27;s visit to the Marletto Tower is edited by the " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t23"></span><a href="../objects/#ref-form-objects" data-context="true">Type 23</a>. <strong>Marletto Tower</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>, <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty. The hero's visit to the Marletto Tower is edited by the team <a href="../../receivers/he/#ref-rec-he-v">HE:V1</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/54d228cc45ee2857.png" alt="Type 24. Derelict Ship The structure of the control word is completely identical to type 16. It&#x27;s interesting that while it&#x27;s common to visit a decrepit ship an" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t24"></span><a href="../objects/#ref-form-objects" data-context="true">Type 24</a>. <strong>Derelict Ship</strong><br>
The structure of the control word is completely identical to <a href="./#ref-cont-conwords-t16">type 16</a>. It's interesting that while it's common to visit a decrepit ship and give up the battle, after doing so, unlike the creature bank, 
Security information does not appear in the ship tooltip. And if you install <a href="../../receivers/cb/#ref-rec-cb-v">CB:V</a> on "visited" for the current player, this information will appear.
</div><div><img src="../../../../assets/erm/0520ec5e013dcdf9.png" alt="avsutop0" loading="lazy" decoding="async" class="erm-figure"></div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t25"></span><a href="../objects/#ref-form-objects" data-context="true">Type 25</a>. <strong>Dragon Utopia</strong><br>
And again a complete coincidence with <a href="./#ref-cont-conwords-t16">type 16</a>. You don't have to describe it.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t26"></span><a href="../objects/#ref-form-objects" data-context="true">Type 26</a>. <strong>Event</strong><br>
Event and Pandora's Box are described by one receiver, and I have already described Pandora's Box. We could reference it, but the event has several additional parameters, all of them in the control word.<br>
<strong class="erm-legacy-label">Bits 0-9</strong>: personal number (0..1023). Just like Pandora's box. Matches commands <a href="../../receivers/le/#ref-rec-le">LE</a>:A B C E F G M N O P R S U X.<br>
<strong class="erm-legacy-label">Bits 10-17</strong> contain information about which players CANNOT activate the event (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>) Compliant <a href="../../receivers/le/#ref-rec-le-d">LE:D</a>.<br>
<strong class="erm-legacy-label">Bit 18</strong>: Whether to allow the AI ​​to trigger the event. Compliant <a href="../../receivers/le/#ref-rec-le-i">LE:I</a>.<br>
<strong class="erm-legacy-label">Bit 19</strong>: whether to cancel the event after the first visit. Compliant <a href="../../receivers/le/#ref-rec-le-l">LE:L</a>.<br>
<strong class="erm-legacy-label">Bits 20-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t29"></span><a href="../objects/#ref-form-objects" data-context="true">Type 29</a>. <strong>Flotsam</strong><br>
For this object receiver has not yet been invented.<br><img src="../../../../assets/erm/124dcfa10c2ee6f5.png" alt="Type 29. Flotsam For this object receiver has not yet been invented. Control word Debris can take the following values: 0 – there is nothing, a message is displ" loading="lazy" decoding="async" class="erm-figure">
Control word Debris can take the following values:<br>
0 – there is nothing, a message is displayed that nothing was found.<br>
1 – 5 trees.<br>
2 – 5 wood and 200 gold.<br>
3 – 10 wood and 500 gold.<br>
Other values are not found in the game, and if you set a number greater than 3 (or less than 0), then the debris will disappear without any message or addition of resources. This can be used in ERM if needed, 
so that the object smoothly disappears when selected: take the fragments, give them a different DEF in the editor (patched), set them with a script control word more than 3, for example, 4, give them a different hint, 
and in the trigger for their visit we make the message or action we need. Nothing too complicated. (It should be noted here that the same behavior can be configured for chests with the command <a href="../../receivers/un/#ref-rec-un-b">UN:B</a>. 
But compare the algorithms:<br>
</div><ul>	<li>[change UN:B]→[change type]→[hero visits]→[restore UN:B];</li>
	<li>[change the type and control word (one receiver)]→[hero visits].</li></ul>
The second one is clearly shorter.

<div class="erm-paragraph"><img src="../../../../assets/erm/21fc97d921457a6c.png" alt="Type 30. Fountain of Fortune Again there is no receiver for this type. Since I had not come across anything on this topic, I myself disassembled control word of" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t30"></span><a href="../objects/#ref-form-objects" data-context="true">Type 30</a>. <strong>Fountain of Fortune</strong><br>
Again there is no receiver for this type. Since I had not come across anything on this topic, I myself disassembled control word of this type, and this is what I came up with:<br>
<strong class="erm-legacy-label">Bits 0-4</strong> are ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 5-12</strong> contain information about players' visits (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>). If the player has visited a fountain, a tooltip displays what it does.<br>
<strong class="erm-legacy-label">Bits 13-16</strong>: amount of luck – from -8 to +7.<br>
<strong class="erm-legacy-label">Bits 17-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/303edd7845dc3bde.png" alt="Type 32. Garden of Revelation Just like Arena: bits 0-4 – number, the rest are ignored and are usually empty. Whether hero Garden of Revelation has been visited" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t32"></span><a href="../objects/#ref-form-objects" data-context="true">Type 32</a>. <strong>Garden of Revelation</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty. Whether hero Garden of Revelation has been visited is determined by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V2</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/f29b7b602dd54547.png" alt="Type 33. Garrison Bits 0-25: personal number (0..67108863). All commands correspond to it GR. Bits 26-30 are ignored and are usually empty." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t33"></span><a href="../objects/#ref-form-objects" data-context="true">Type 33</a>. <strong>Garrison</strong><br>
<strong class="erm-legacy-label">Bits 0-25</strong>: personal number (0..67108863). All commands correspond to it <a href="../../receivers/gr/#ref-rec-gr">GR</a>.<br>
<strong class="erm-legacy-label">Bits 26-30</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/1f995c6e7ad10ca4.png" alt="Type 34. Hero Control word contains the hero number. Are taken into account all bits. Unfortunately, you cannot change the hero by changing the number. By placi" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t34"></span><a href="../heroes/#ref-form-numberheroes" data-context="true">Type 34</a>. <strong>Hero</strong><br>
Control word contains the hero number. Are taken into account <strong class="erm-legacy-label">all bits</strong>.<br>
Unfortunately, you cannot change the hero by changing the number. By placing an arbitrary yellow cell with type 34 and control word of a certain hero, we will create a clone of the hero who cannot be controlled, 
and if this cell is another hero, the clone will disappear when it is isolated.<br>
But we can exchange armies with him, even if the real hero is on the other end of the map.<br>
You can also “summon” an enemy or unhired hero and fight him. Moreover, after defeat, clones disappear only visually, but you can fight them again (although they will be neutral, 
and they will have a typical army of a killed hero - 1 creature level 1). And the “original” enemy hero, wherever he is, will also visually disappear (this is because the game does not have graphics for neutral heroes), 
but it will be possible to fight with him. True, unlike a clone, only once.<br>
By creating clones of our heroes, we can achieve their bifurcation: for example, if we create a clone of a hero sitting in the garrison and select it with the mouse (the “helmet” icon), then hero will appear at the entrance to town, 
i.e. in the guest slot while remaining in the garrison. In general, the game is not intended for this kind of experimentation.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/8c6ffb85b7b308ad.png" alt="Type 39. Someone&#x27;s cellar / Lean To Bits 0-4: personal number (0-31). Compliant LN:N. Bit 5 ignored and usually filled. Bits 6-9: quantity of resource (0-15). I" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t39"></span><a href="../objects/#ref-form-objects" data-context="true">Type 39</a>. <strong><strong>Someone's cellar</strong> / Lean To</strong><br>
<strong class="erm-legacy-label">Bits 0-4</strong>: personal number (0-31). Compliant <a href="../../receivers/ln/#ref-rec-ln-n">LN:N</a>.<br>
<strong class="erm-legacy-label">Bit 5</strong> ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 6-9</strong>: quantity of resource (0-15). If 0, the cellar is considered visited. Matches the second parameter <a href="../../receivers/ln/#ref-rec-ln-b">LN:B</a>.<br>
<strong class="erm-legacy-label">Bits 10-13</strong>: resource type (0-15). Matches the first parameter <a href="../../receivers/ln/#ref-rec-ln-b">LN:B</a>. For invalid types, see <a href="./#ref-cont-conwords-t12">Campfire</a>.<br>
<strong class="erm-legacy-label">Bits 14-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/424fc777f39ad48d.png" alt="Type 41. Library of Enlightenment Just like Arena: bits 0-4 – number, the rest are ignored and are usually empty. Whether hero has visited the Library is determ" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t41"></span><a href="../objects/#ref-form-objects" data-context="true">Type 41</a>. <strong>Library of Enlightenment</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty. Whether hero has visited the Library is determined by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V6</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/95da127f363ccd46.png" alt="Type 42. Lighthouse Bits 0-25: personal number (0..67108863). The number refers to the same data area as the Mine, and the Beacon is edited by the commands MN. " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t42"></span><a href="../objects/#ref-form-objects" data-context="true">Type 42</a>. <strong>Lighthouse</strong><br>
<strong class="erm-legacy-label">Bits 0-25</strong>: personal number (0..67108863). The number refers to the same data area as the Mine, and the Beacon is edited by the commands <a href="../../receivers/mn/#ref-rec-mn">MN</a>. 
The resource type for it is 100, but if you put something else, the Lighthouse keeper will start diligently mining this “something”. Security is ignored. (Thanks for this information <code class="erm-tone-purple erm-strong">sergroj</code>`u.)<br>
<strong class="erm-legacy-label">Bits 26-31</strong> are ignored (as are the guards).</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/8998e813e1280f6d.png" alt="Type 44. Exit monolith Control word represents the monolith number. Each subtype is numbered separately. It is not known what it affects, so it is difficult to " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t44"></span><a href="../one-way-monoliths/#ref-form-one-way-monolith" data-context="true">Type 44</a>. <strong>Exit monolith</strong><br>
Control word represents the monolith number. Each subtype is numbered separately. It is not known what it affects, so it is difficult to determine how many bits are used. 
The only thing that is clear is that if you set -1, the monolith stops working. For all other values ​​it works. This leads to the assumption that all bits are read.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/f30796cf63b01291.gif" alt="Type 45. Double-sided monolith Again, control word is a personal number with separate numbering of subtypes. Are taken into account all bits. The purpose of the" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t45"></span><a href="../two-way-monoliths/#ref-form-two-way-monolith" data-context="true">Type 45</a>. <strong>Double-sided monolith</strong><br>
Again, control word is a personal number with separate numbering of subtypes. Are taken into account <strong class="erm-legacy-label">all bits</strong>. The purpose of the number in the game is to prevent the monolith from teleporting into itself. 
Thus, if you give two monoliths the same number, they will not teleport into each other.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/84b3c6f9903ac7b7.png" alt="Type 47. School of Magic Just like Arena: bits 0-4 – number, the rest are ignored and are usually empty. Whether hero visited the School of Magic is determined " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t47"></span><a href="../objects/#ref-form-objects" data-context="true">Type 47</a>. <strong>School of Magic</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty.<br>
Whether hero visited the School of Magic is determined by the team <a href="../../receivers/he/#ref-rec-he-v">HE:V8</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t48"></span><a href="../objects/#ref-form-objects" data-context="true">Type 48</a>. <strong>Magic Spring</strong><br><img src="../../../../assets/erm/a5df2be0a0679eea.png" alt="Type 48. Magic Spring Bits 0-4: source number (0..31) – SP:N. Why it is needed is unclear. Bit 5 ignored and usually filled. Bit 6: visited (1) or not (0) – SP:" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-4</strong>: source number (0..31) – <a href="../../receivers/sp/#ref-rec-sp-n">SP:N</a>. Why it is needed is unclear.<br>
<strong class="erm-legacy-label">Bit 5</strong> ignored and usually filled.<br>
<strong class="erm-legacy-label">Bit 6</strong>: visited (1) or not (0) – <a href="../../receivers/sp/#ref-rec-sp-s">SP:S</a>.<br>
<strong class="erm-legacy-label">Bits 7-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/c866a86ce59e1abf.png" alt="Type 51. Mercenary Camp Just like Arena: bits 0-4 – number, the rest are ignored and are usually empty. Whether hero visited the Camp is determined by the team " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t51"></span><a href="../objects/#ref-form-objects" data-context="true">Type 51</a>. <strong>Mercenary Camp</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty. Whether hero visited the Camp is determined by the team <a href="../../receivers/he/#ref-rec-he-v">HE:V3</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/ab197513f5a6c9a4.png" alt="Type 53. Mine Bits 0-25: personal number (0..67108863) with all commands MN. Please note that the Mines are numbered in parallel with Lighthouses, as one type. " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t53"></span><a href="../mines/#ref-form-mines" data-context="true">Type 53</a>. <strong>Mine</strong><br>
<strong class="erm-legacy-label">Bits 0-25</strong>: personal number (0..67108863) with all commands <a href="../../receivers/mn/#ref-rec-mn">MN</a>. Please note that the Mines are numbered in parallel with <a href="./#ref-cont-conwords-t42">Lighthouses</a>, as one type.<br>
<strong class="erm-legacy-label">Bits 26-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t54"></span><a href="../creatures/#ref-form-creature" data-context="true">Type 54</a>. <strong>Creature</strong><br>
<strong class="erm-legacy-label">Bits 0-11</strong>: number of creatures (0..4095) – <a href="../../receivers/mo/#ref-rec-mo-g">MO:G</a>. 
Interestingly, if you set the value to 4095, when you click <span class="erm-anchor" id="ref-cont-conwords-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> a proposal appears to remove this stack from the map, because it is too large.<br>
<strong class="erm-legacy-label">Bits 12-15</strong>: probability of a creature not joining in tens of % (0..10) – <a href="../../receivers/mo/#ref-rec-mo-r">MO:R</a> with 2 parameters; if more than 10 – the same as 10.<br>
<strong class="erm-legacy-label">Bit 16</strong>: will creature join – <a href="../../receivers/mo/#ref-rec-mo-r">MO:R</a> with 1 parameter (and inverted); if empty, join with probability applies (previous point).<br>
<strong class="erm-legacy-label">Bit 17</strong>: if full, creature never escapes – <a href="../../receivers/mo/#ref-rec-mo-u">MO:U</a>.<br>
<strong class="erm-legacy-label">Bit 18</strong>: the number of creatures does not increase – <a href="../../receivers/mo/#ref-rec-mo-o">MO:O</a>.<br>
<strong class="erm-legacy-label">Bits 19-26</strong>: personal number (0..255) with commands <a href="../../receivers/mo/#ref-rec-mo">MO</a>:A B M.<br>
<strong class="erm-legacy-label">Bits 27-30</strong> are ignored and are usually empty.<br>
<strong class="erm-legacy-label">Bit 31</strong>: is there a number? Similarly with an artifact, if there is no artifact, resource, or message, the number is not set. Then <a href="../../receivers/mo/#ref-rec-mo">MO</a>:A B M don't work. 
This is also mentioned in the description <a href="../../receivers/mo/#ref-rec-mo">receiver MO</a>, and checking for negativity is also appropriate here.<br>
The creature type is specified in the object's subtype.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t55"></span><a href="../objects/#ref-form-objects" data-context="true">Type 55</a>. <strong>Mystical Garden</strong><br><img src="../../../../assets/erm/237e5338f415d321.png" alt="Type 55. Mystical Garden Bits 0-4: personal number (0..31) – GD:N. Bit 5 ignored and usually filled. Bits 6-9: bonus resource type (0..15) – GD:B. If you put 8." loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-4</strong>: personal number (0..31) – <a href="../../receivers/gd/#ref-rec-gd-n">GD:N</a>.<br>
<strong class="erm-legacy-label">Bit 5</strong> ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 6-9</strong>: bonus resource type (0..15) – <a href="../../receivers/gd/#ref-rec-gd-b">GD:B</a>. If you put 8..15, the game crashes.<br>
<strong class="erm-legacy-label">Bit 10</strong>: is there a bonus – <a href="../../receivers/gd/#ref-rec-gd-t">GD:T</a>.<br>
<strong class="erm-legacy-label">Bits 11-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/3e217521e012f28c.png" alt="Type 57. Obelisk Control word is a personal number from 0 to 47, which corresponds to MT:N. If you specify a number greater than 47, the program gets into memor" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t57"></span><a href="../objects/#ref-form-objects" data-context="true">Type 57</a>. <strong>Obelisk</strong><br>
Control word is a personal number from 0 to 47, which corresponds to <a href="../../receivers/mt/#ref-rec-mt-n" title="The label MT:N refers to the Obelisk receiver MT, not MN.">MT:N</a>. If you specify a number greater than 47, the program gets into memory not intended for Obelisks, 
therefore, the obelisk may turn out to be visited, and if not, then when visiting the Obelisk, the puzzle card still does not change. In addition, if you specify a very large value - on the order of tens of millions or more 
(the limit value is different each time) – the game crashes. Which Obelisks a particular player has visited is controlled by <a href="../../receivers/un/#ref-rec-un-l1">UN:L</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t59"></span><a href="../objects/#ref-form-objects" data-context="true">Type 59</a>. <strong>Ocean Bottle</strong><br><img src="../../../../assets/erm/3baab00b6520165a.png" alt="Type 59. Ocean Bottle Bits 0-29: personal number (0..1073741823) with command SG:M. It should be noted that if the text is not entered or erased (SG:M-1), then " loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-29</strong>: personal number (0..1073741823) with command <a href="../../receivers/sg/#ref-rec-sg-m">SG:M</a>. It should be noted that if the text is not entered or erased (<a href="../../receivers/sg/#ref-rec-sg-m">SG:M-1</a>), 
then a random one from RANDSIGN.TXT located in h3bitmap.lod is taken as a message. In this case, the text is generated immediately before the visit based on the coordinates of the Bottle, and, 
If you give two bottles the same number corresponding to a random text, then the text when you visit will almost certainly be different.<br>
<strong class="erm-legacy-label">Bits 30-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/c0c80ba766f81f82.png" alt="Type 61. Star Axis Just like Arena: bits 0-4 – number, the rest are ignored and are usually empty. Whether hero has visited the Wheel is determined by the comma" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t61"></span><a href="../objects/#ref-form-objects" data-context="true">Type 61</a>. <strong>Star Axis</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty. Whether hero has visited the Wheel is determined by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V4</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t62"></span><a href="../objects/#ref-form-objects" data-context="true">Type 62</a>. <strong>Prison</strong><br><img src="../../../../assets/erm/2e601a21168a053f.png" alt="Type 62. Prison Control word represents the number of the imprisoned hero. In this case, you can only put the numbers of heroes imprisoned in other prisons: if " loading="lazy" decoding="async" class="erm-figure">
Control word represents the number of the imprisoned hero. In this case, you can only put the numbers of heroes imprisoned in other prisons: if you put the number of a free or unhired hero, 
then a message is displayed that hero was once sitting here, but then the king freed him. (Apparently, somewhere in the hero’s parameters there is a byte that determines whether he is sitting or free.) 
The same is displayed for small incorrect numbers. With very large numbers (of the order of tens of millions or more), the game crashes.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/cd0e8c46f4866578.png" alt="Type 63. Pyramid Bit 0: are there guards – PM:V. Bits 1-4 are ignored and usually filled. Bits 5-12: which players visited (bit by bit) – PM:P. Bits 13-20: spel" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t63"></span><a href="../wog-object-variants/#ref-form-newobj" data-context="true">Type 63</a>. <strong>Pyramid</strong><br>
<strong class="erm-legacy-label">Bit 0</strong>: are there guards – <a href="../../receivers/pm/#ref-rec-pm-v">PM:V</a>.<br>
<strong class="erm-legacy-label">Bits 1-4</strong> are ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: which players visited (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>) – <a href="../../receivers/pm/#ref-rec-pm-p">PM:P</a>.<br>
<strong class="erm-legacy-label">Bits 13-20</strong>: spell number (0..255) – <a href="../../receivers/pm/#ref-rec-pm-s">PM:S</a>.<br>
<strong class="erm-legacy-label">Bits 21-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/c7dd34f429e9cda7.png" alt="Type 78. Refugee Camp Bits 0-15: number of creatures (-32768..32767). Bits 16-31 are ignored and are usually empty. The type of creatures is set in the camp sub" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t78"></span><a href="../objects/#ref-form-objects" data-context="true">Type 78</a>. <strong>Refugee Camp</strong><br>
<strong class="erm-legacy-label">Bits 0-15</strong>: number of creatures (-32768..32767).<br>
<strong class="erm-legacy-label">Bits 16-31</strong> are ignored and are usually empty.<br>
The type of creatures is set in the camp subtype.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t79"></span><a href="../resources/#ref-form-resource" data-context="true">Type 79</a>. <strong>Resource</strong><br>
Control word is designed exactly the same as the <a href="./#ref-cont-conwords-t5">artifact</a>, only <strong class="erm-legacy-label">bits 0-14</strong>, corresponding <a href="../../receivers/ar/#ref-rec-ar-v">AR:V</a>, contain the number of resources.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/b0494277d24d37a2.png" alt="Type 81. Scholar Bits 0-2: bonus type (0..7) – SC:T: 0 – primary skill; 1 – secondary skill; 2 – spell; 3..7 – Scholar does not give anything and smoothly disap" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t81"></span><a href="../objects/#ref-form-objects" data-context="true">Type 81</a>. <strong>Scholar</strong><br>
<strong class="erm-legacy-label">Bits 0-2</strong>: bonus type (0..7) – <a href="../../receivers/sc/#ref-rec-sc-t">SC:T</a>:<br>
0 – primary skill; 1 – secondary skill; 2 – spell;<br>
3..7 – Scholar does not give anything and smoothly disappears without a message. This can be used in the same way as the similar property <a href="./#ref-cont-conwords-t29">Wreckage</a>.<br>
<strong class="erm-legacy-label">Bits 3-5</strong>: primary skill type (0..7) – <a href="../../receivers/sc/#ref-rec-sc-p">SC:P</a>. If you set from 4 to 7, the primary skills do not change, but Scholar, judging by the pictures, 
teaches you how to build level 2 Mage Guilds in the Dungeon, Citadel, Fortress and Conjugation, respectively.<br>
<strong class="erm-legacy-label">Bits 6-12</strong>: secondary skill number (0..127) – <a href="../../receivers/sk/#ref-rec-sk-s" title="Original Skeleton links say SC; the Skeleton receiver is SK.">SC:S</a>. If you put the incorrect spell and install <a href="../../receivers/sc/#ref-rec-sc-t">SC:T1</a>, the game crashes when visiting.<br>
<strong class="erm-legacy-label">Bits 13-22</strong>: spell number (0..1023) – <a href="../../receivers/sc/#ref-rec-sc-l">SC:L</a>. If you put an incorrect, already studied or unlearned spell by this hero, primary skill will be studied.<br>
<strong class="erm-legacy-label">Bit 23</strong> ignored and usually empty.<br>
<strong class="erm-legacy-label">Bits 24-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t82"></span><a href="../objects/#ref-form-objects" data-context="true">Type 82</a>. <strong>Sea Chest</strong><br><img src="../../../../assets/erm/aa6b54cb2fcfe77e.png" alt="Type 82. Sea Chest There is no receiver for this type, but vigilant forum users with proud names Demiurg, DracoLich and Chertos-2 (or one of them; or two; all t" loading="lazy" decoding="async" class="erm-figure">
There is no receiver for this type, but vigilant forum users with proud names <code class="erm-tone-purple erm-strong">Demiurg</code>, <code class="erm-tone-purple erm-strong">DracoLich</code> and <code class="erm-tone-purple erm-strong">Chertos-2</code> 
(or one of them; or two; all three wrote posts about it, but no one claimed authorship), they finally deciphered the meaning of his control word. I present their discovery here. Naturally, in your own words.<br>
<strong class="erm-legacy-label">Bits 0-2</strong>: chest selection type (0..7): 0 – empty, 1 – 1500 gold, 2 – 1000 gold and artifact. If the value is set from 3 to 7, then the chest smoothly disappears without any message, 
and this can be used - see. <a href="./#ref-cont-conwords-t29">Flotsam</a>.<br>
<strong class="erm-legacy-label">Bits 3-12</strong>: artifact number (0..1023). If you set an incorrect value and set the selection type to 2, then the game crashes when selected. If the selection type is set to 0 or 1, the default here is -1, i.e. 1023.<br>
<strong class="erm-legacy-label">Bits 13-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/860eb101052c1faa.png" alt="Type 83. Seer&#x27;s Hut Control word is a personal number that refers to a data area that is inaccessible to us, where all the parameters of the hut are located. Ar" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t83"></span><a href="../objects/#ref-form-objects" data-context="true">Type 83</a>. <strong>Seer's Hut</strong><br>
Control word is a personal number that refers to a data area that is inaccessible to us, where all the parameters of the hut are located.<br>
Are taken into account <strong class="erm-legacy-label">all bits</strong>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/e8726705b0987cf0.png" alt="Type 84. Crypt The structure of the control word is completely identical type 16. The same remark is appropriate here as for dilapidated ship." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t84"></span><a href="../objects/#ref-form-objects" data-context="true">Type 84</a>. <strong>Crypt</strong><br>
The structure of the control word is completely identical <a href="./#ref-cont-conwords-t16">type 16</a>.<br>
The same remark is appropriate here as for <a href="./#ref-cont-conwords-t24">dilapidated ship</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t85"></span><a href="../objects/#ref-form-objects" data-context="true">Type 85</a>. <strong>Shipwreck</strong><br>
Same as <a href="./#ref-cont-conwords-t24">Derelict Ship</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/0556e4d87f5a5d03.png" alt="Type 86. Shipwreck Survivor Again, he&#x27;s ahead of me here. Demiurg. Nevertheless, let&#x27;s write: Bits 0-29: artifact number (0..1073741823). If you put very large " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t86"></span><a href="../objects/#ref-form-objects" data-context="true">Type 86</a>. <strong>Shipwreck Survivor</strong><br>
Again, he's ahead of me here. <code class="erm-tone-purple erm-strong">Demiurg</code>. Nevertheless, let's write:<br>
<strong class="erm-legacy-label">Bits 0-29</strong>: artifact number (0..1073741823). If you put very large incorrect values, like [2<sup>28</sup>+<a href="../artifacts/#ref-form-a1" data-context="true">artifact number</a>], 
then this artifact can even be lifted without crashing. True, click on it after that <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> I wouldn’t recommend trying to move it to another slot.<br>
<strong class="erm-legacy-label">Bits 30-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t87"></span><a href="../objects/#ref-form-objects" data-context="true">Type 87</a>. <strong>Shipyard</strong><br><img src="../../../../assets/erm/039fea092887dc67.png" alt="Type 87. Shipyard Bits 0-7: shipyard owner (0..255) – SY:O. Incorrect values ​​can turn the flag into the most unexpected colors, although this color is usually" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-7</strong>: shipyard owner (0..255) – <a href="../../receivers/sy/#ref-rec-sy-o">SY:O</a>. Incorrect values ​​can turn the flag into the most unexpected colors, although this color is usually white.<br>
<strong class="erm-legacy-label">Bits 8-15</strong>: X-coordinate for building a ship (0..255) – <a href="../../receivers/sy/#ref-rec-sy-p">SY:P</a>.<br>
<strong class="erm-legacy-label">Bits 16-23</strong>: Y-coordinate for building a ship (0..255) – <a href="../../receivers/sy/#ref-rec-sy-p">SY:P</a>. It should be noted that when a boat is purchased remotely, by clicking on the shipyard, 
then these parameters are ignored and the boat is built in the nearest water cell. If you put values that go beyond the edge of the card, it will not fly out, the boat will simply not be built anywhere. 
Most likely, other completely unrelated data will change instead.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t88"></span><a href="../objects/#ref-form-objects" data-context="true">Types 88-90</a>. <strong>Shrines of magical embodiment, gesture and thought</strong><br><img src="../../../../assets/erm/8cff49a5f9851782.png" alt="Types 88-90. Shrines of magical embodiment, gesture and thought Bits 0-4 are ignored and usually filled. Bits 5-12: which players visited the Shrine (bit by bit" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-4</strong> are ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: which players visited the Shrine (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>). If the player has visited the Shrine, he knows what is being studied there.<br>
<strong class="erm-legacy-label">Bits 13-22</strong>: number of the spell being studied (0..1024) – <a href="../../receivers/sr/#ref-rec-sr-s">SR:S</a>. If you enter an incorrect value, they write that you have already studied this spell. Although I haven't checked all the values.<br>
<strong class="erm-legacy-label">Bits 23-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/e05a43208f2dee30.png" alt="Type 91. Sign Same with Ocean bottle. Only Sign does not disappear after being picked up." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t91"></span><a href="../objects/#ref-form-objects" data-context="true">Type 91</a>. <strong>Sign</strong><br>
Same with <a href="./#ref-cont-conwords-t59">Ocean bottle</a>. Only Sign does not disappear after being picked up.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/131f6a5e5426e74a.gif" alt="Type 93. Scroll with a spell Control word represents spell number. Are taken into account all bits." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t93"></span><a href="../objects/#ref-form-objects" data-context="true">Type 93</a>. <strong>Scroll with a spell</strong><br>
Control word represents <a href="../spells/#ref-form-spell" data-context="true">spell number</a>.<br>
Are taken into account <strong class="erm-legacy-label">all bits</strong>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/410a259950773ad9.png" alt="Type 98. Town Bits 0-28: personal number (0..536870911) with all parameters. Bits 29-31 are ignored and are usually empty. If you assign one town the number of " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t98"></span><a href="../towns/#ref-form-towns" data-context="true">Type 98</a>. <strong>Town</strong><br>
<strong class="erm-legacy-label">Bits 0-28</strong>: personal number (0..536870911) with all parameters.<br>
<strong class="erm-legacy-label">Bits 29-31</strong> are ignored and are usually empty.<br>
If you assign one town the number of another, the following will happen:
</div><span class="erm-anchor" id="ref-cont-conwords-t0"></span><ol class="erm-margin-top-zero">
<li>If the number is not changed at the entrance:
	<ol><li>The tooltip will change when clicked <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> on this town square, but not on others; the hover tooltip will remain unchanged.</li>
	<li>When you click on this cell, town will be highlighted, the number of which is set; if it is already selected, the town menu will open, however, if town is not yours, when you hover over this cell, the cursor over the castle icon will not change. 
Town will not be highlighted (the very beginning of the sentence) if it is not yours and the selection is some hero and not town.</li></ol>
</li>
<li>	If the number is changed at the entrance:
	<ol><li>In addition to the previous one, the hover tooltip (on any town cell) will also change: the name of the town will change. The type of town will remain unchanged, it depends on the subtype of the cell at the entrance.</li>
	<li>The color of the flags will also change.</li>
	<li>If you go into a modified entrance, there will first be some checks related to the original town: so, if it does not belong to you and there are guards there, you will be forced to fight; 
	after the victory, or if there were no guards, you will become the owner of the town, which you can verify by putting the original number on the entrance.</li>
	<li>After which the menu of the original town will open. The hero who came in will not be there, because... it will be in the guest slot of the changed town.</li>
	<li>If you move a visiting hero to the garrison and back, he will move to the replaced town already on the global map.</li>
	<li>If you try to recruit a hero in your home town, the game will crash.</li>
	<li>The most severe glitches occur if you exchange numbers between two towns. Hero-the visitor can leave the town and at the same time remain in the guest slot, can get into the guest slots and garrisons of both towns at once, 
	find yourself in a guest slot and a garrison of one town at the same time and split into two... in a thousand other ways.</li></ol>
</li></ol>

<div class="erm-paragraph"><img src="../../../../assets/erm/8c8c6c4c74f49479.png" alt="Type 100. Stone of Knowledge Just like Arena: bits 0-4 – number, the rest are ignored and are usually empty. Whether hero has visited the Stone is determined by" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t100"></span><a href="../objects/#ref-form-objects" data-context="true">Type 100</a>. <strong>Stone of Knowledge</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong> – number, the rest are ignored and are usually empty. Whether hero has visited the Stone is determined by the team <a href="../../receivers/he/#ref-rec-he-v">HE:V0</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/0e23e7cd429987cb.png" alt="Type 101. Treasure Chest Bits 0-9: artifact number (0..1023) – CH:A. Bit 10: bonus type (0 – gold, 1 – artifact) – CH:S. Bits 11-14: indicator of the amount of " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t101"></span><a href="../objects/#ref-form-objects" data-context="true">Type 101</a>. <strong>Treasure Chest</strong><br>
<strong class="erm-legacy-label">Bits 0-9</strong>: artifact number (0..1023) – <a href="../../receivers/ch/#ref-rec-ch-a">CH:A</a>.<br>
<strong class="erm-legacy-label">Bit 10</strong>: bonus type (0 – gold, 1 – artifact) – <a href="../../receivers/ch/#ref-rec-ch-s">CH:S</a>.<br>
<strong class="erm-legacy-label">Bits 11-14</strong>: indicator of the amount of gold (0..15) – <a href="../../receivers/ch/#ref-rec-ch-b">CH:B</a>. Amount of gold = [indicator] * 500.<br>
<strong class="erm-legacy-label">Bits 15-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t102"></span><a href="../objects/#ref-form-objects" data-context="true">Type 102</a>. <strong>Tree of Knowledge</strong><br><img src="../../../../assets/erm/837a190b760e5ef2.png" alt="Type 102. Tree of Knowledge Bits 0-4: Tree number (0..31) – KT:N. Whether hero has visited the Tree is determined by the command HE:V5. Bits 5-12: information a" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-4</strong>: Tree number (0..31) – <a href="../../receivers/kt/#ref-rec-kt-n">KT:N</a>. Whether hero has visited the Tree is determined by the command <a href="../../receivers/he/#ref-rec-he-v">HE:V5</a>.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: information about players visiting (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>). A player who visits the Tree sees in the tooltip the type of level he receives.<br>
<strong class="erm-legacy-label">Bits 13-15</strong>: level gain type (0..3) – <a href="../../receivers/kt/#ref-rec-kt-s">KT:S</a>. If you set the selection type to 3, the game freezes when visiting the Tree, 
and in the tooltip (if you put in bits 5-12 that Wood has already been visited) it says that the Tree is nothing more than an improved generator of level 4 creatures.<br>
<strong class="erm-legacy-label">Bits 16-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/1c4a71943621227a.png" alt="Type 103. Gate of the Underworld Bits 0-29: personal Gate number (0..1073741823). The number refers to the data area where the coordinates of the target gates o" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t103"></span><a href="../objects/#ref-form-objects" data-context="true">Type 103</a>. <strong>Gate of the Underworld</strong><br>
<strong class="erm-legacy-label">Bits 0-29</strong>: personal Gate number (0..1073741823). The number refers to the data area where the coordinates of the target gates or the absence thereof are recorded - if there are more gates at one level, the part is disabled.<br>
<strong class="erm-legacy-label">Bits 30-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t104"></span><a href="../objects/#ref-form-objects" data-context="true">Type 104</a>. <strong>University</strong><br><img src="../../../../assets/erm/d60f94284d92a049.png" alt="Type 104. University Bits 0-4 are ignored and usually filled. Bits 5-12 are ignored and are usually empty. These bits usually contain information about player v" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-4</strong> are ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 5-12</strong> are ignored and are usually empty. These bits usually contain information about player visits, but I didn't notice any changes to the University control word when visiting. 
nor any changes to the University prompt when these bits are populated.<br>
<strong class="erm-legacy-label">Bits 13-24</strong>: personal number of the University (0..4095) with the command <a href="../../receivers/ur/#ref-rec-ur-s">UR:S</a>.<br>
<strong class="erm-legacy-label">Bits 25-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/233630a511ba7d92.png" alt="Type 105. Wagon Bits 0-4: number of resources (0..31) – second parameter WG:R. Bits 5-12: which players visited the cart (bit by bit). Bit13: is there anything " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t105"></span><a href="../objects/#ref-form-objects" data-context="true">Type 105</a>. <strong>Wagon</strong><br>
<strong class="erm-legacy-label">Bits 0-4</strong>: number of resources (0..31) – second parameter <a href="../../receivers/wg/#ref-rec-wg-r">WG:R</a>.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: which players visited the cart (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>).<br>
<strong class="erm-legacy-label">Bit13</strong>: is there anything in the cart – <a href="../../receivers/wg/#ref-rec-wg-s">WG:S</a>.<br>
<strong class="erm-legacy-label">Bit14</strong>: bonus type (0 – resources, 1 – artifact) – <a href="../../receivers/wg/#ref-rec-wg-b">WG:B</a>.<br>
<strong class="erm-legacy-label">Bits 15-24</strong>: artifact number (0..1023) – <a href="../../receivers/wg/#ref-rec-wg-a">WG:A</a>.<br>
<strong class="erm-legacy-label">Bits 25-28</strong>: resource type (0..15) – first parameter <a href="../../receivers/wg/#ref-rec-wg-r">WG:R</a>.<br>
<strong class="erm-legacy-label">Bits 29-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/ed174f90f0cc1eec.png" alt="Type 107. School of War Just like Arena: bits 0-4: – number, the rest are ignored and are usually empty. Whether hero visited the School is determined by the te" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t107"></span><a href="../objects/#ref-form-objects" data-context="true">Type 107</a>. <strong>School of War</strong><br>
Just like <a href="./#ref-cont-conwords-t4">Arena</a>: <strong class="erm-legacy-label">bits 0-4</strong>: – number, the rest are ignored and are usually empty. Whether hero visited the School is determined by the team <a href="../../receivers/he/#ref-rec-he-v">HE:V9</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/c88d56c26956009d.png" alt="Type 108. Warrior&#x27;s Tomb Bit 0: is there artifact – WT:S. Bits 1-4 are ignored and usually filled. Bits 5-12: which players visited the grave (bit by bit). Bits" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t108"></span><a href="../objects/#ref-form-objects" data-context="true">Type 108</a>. <strong>Warrior's Tomb</strong><br>
<strong class="erm-legacy-label">Bit 0</strong>: is there artifact – <a href="../../receivers/wt/#ref-rec-wt-s">WT:S</a>.<br>
<strong class="erm-legacy-label">Bits 1-4</strong> are ignored and usually filled.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: which players visited the grave (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>).<br>
<strong class="erm-legacy-label">Bits 13-22</strong>: artifact number (0..1023) – <a href="../../receivers/wt/#ref-rec-wt-a">WT:A</a>. If you enter an incorrect number, the game crashes when you try to search the grave.<br>
<strong class="erm-legacy-label">Bits 23-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/a83fa31e3072bfba.png" alt="Type 109. Water wheel Bits 0-4: indicator of the amount of gold (0..15) – WM:B. Amount of gold = [indicator] * 500. If the indicator is 0, then the miller says " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t109"></span><a href="../objects/#ref-form-objects" data-context="true">Type 109</a>. <strong>Water wheel</strong><br>
<strong class="erm-legacy-label">Bits 0-4</strong>: indicator of the amount of gold (0..15) – <a href="../../receivers/wm/#ref-rec-wm-b">WM:B</a>. Amount of gold = [indicator] * 500. If the indicator is 0, then the miller says that there is no gold.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: which players visited the wheel (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>). If a player visited the wheel, the tooltip for him will indicate whether he visited there this week.<br>
<strong class="erm-legacy-label">Bits 13-31</strong> are ignored and usually filled.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t112"></span><a href="../objects/#ref-form-objects" data-context="true">Type 112</a>. <strong>Windmill</strong><br><img src="../../../../assets/erm/22835f7bdfa045b8.png" alt="Type 112. Windmill Bits 0-3: resource type (0..15) – first parameter ML:B. If you set an incorrect value, the game crashes. Bit 4 ignored and usually empty. Bit" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Bits 0-3</strong>: resource type (0..15) – first parameter <a href="../../receivers/ml/#ref-rec-ml-b">ML:B</a>. If you set an incorrect value, the game crashes.<br>
<strong class="erm-legacy-label">Bit 4</strong> ignored and usually empty.<br>
<strong class="erm-legacy-label">Bits 5-12</strong>: which players visited the mill (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>). If the player visited the mill, the tooltip for him will indicate whether he visited there this week.<br>
<strong class="erm-legacy-label">Bits 13-16</strong>: number of resources (0..15) – second parameter <a href="../../receivers/ml/#ref-rec-ml-b">ML:B</a>. If 0, the miller says there are no resources.<br>
<strong class="erm-legacy-label">Bits 17-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/3785b9fba274d0c5.png" alt="Type 113. Witch&#x27;s Hut Bits 5-12: information about players visiting (bit by bit). A player who visits the hut sees the skill being learned in the tooltip for it" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t113"></span><a href="../objects/#ref-form-objects" data-context="true">Type 113</a>. <strong>Witch's Hut</strong><br>
<strong class="erm-legacy-label">Bits 5-12</strong>: information about players visiting (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>). A player who visits the hut sees the skill being learned in the tooltip for it.<br>
<strong class="erm-legacy-label">Bits 13-19</strong>: skill being learned (0..127). If you put an incorrect value in the tooltip, the skill will be named as (null), and the game will crash when visiting.<br>
<strong class="erm-legacy-label">Bits 20-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/bbee729dffc4a659.png" alt="Type 215. Quest Guard Control word represents the personal number of the Guardian. Are taken into account all bits. We cannot yet change the parameters of the G" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t215"></span><a href="../objects/#ref-form-objects" data-context="true">Type 215</a>. <strong>Quest Guard</strong><br>
Control word represents the personal number of the Guardian.<br>
Are taken into account <strong class="erm-legacy-label">all bits</strong>.<br>
We cannot yet change the parameters of the Guardians of the Passage and the Seer's Huts, but we can change their numbers as ready-made sets of parameters. 
Unfortunately, after opening the passage, the Guardian’s task (by analogy with the Seer’s Hut) is erased, and if we give two Guardians the same number, then only one of them can be opened: 
after opening one, the second will turn into a stone pillar and will not issue messages when visited, as happens with untuned Guardians. In principle, this can also be used.<br>
For example, in A Life of Adventures, when the hero has to choose two of the four elements of magic, it would be possible to assign the same number to the Guardians of the Passage that require the same keychains. 
Then there would be no extra entries in the journal and it would be possible to put a message like “You have already made your choice.” to the inaccessible Guardian after selection.</div>

<span class="erm-anchor" id="ref-cont-conwords-3"></span><h3>Why is all this needed?</h3>
<div class="erm-paragraph">As you can see, I first spent several paragraphs explaining how to correctly add 10 and 10 to get 100, and not 110101 (and not 20), and then I explained in a long and tedious manner where what bits mean what. 
The reader who reads all of this in its entirety, if there are any (which I don’t hope for; after all, I’m not writing fiction, but a kind of reference book), or who at least glanced at everything briefly, gets the impression that 
that the author suffers from a hybrid of graphomania and workaholism and has nowhere to devote his creative efforts except to all kinds of waste paper.<br>
In short, the reader asks himself the question: why is all this necessary?<br>
I answer. The study contains some useful and truly new information. For example, control word for the Fountain of Fortune and the location of personal numbers and visit information, for which there is often no ERM command. 
In the same cases when I parsed, say, Magic Spring, all of whose parameters are set through ERM, I also did a little useful. 
From the above location you can pick out as many as 27 free-to-write bits for those who don’t know what that is <a href="../../receivers/po/#ref-rec-po">!!PO</a> or just saving money.<br>
Besides, systematization is a great thing. Perhaps it will be useful to someone.<br>
Finally, I have a clear range of possible parameter values. Firstly, it is not always indicated in ERM Help, secondly, there are often incorrect values that sometimes give an interesting effect, and, 
finally, you can always say how many artifacts, spells or something else of that kind the game can “withstand”. So, the artifact is almost always allocated 10 bits 
(with the exception of the Castaway: there the artifact number takes up as much as 30 bits!), and therefore it will be quite difficult to make 1025 or more artifacts (you will have to involve ERM), but 1024 is welcome. 
A spell is also usually allocated 10 bits, only in the Pyramid only 8 are allocated for it. But the latter can be eliminated with an easy exe fix (although 256 spells can be cast without it), 
but 1025 or more different magics is already problematic.</div>

<h3>What's new with us?</h3>
<div class="erm-paragraph">But perhaps not everyone will want to fish out the dumplings of truth from the soup of verbiage, and especially for these lazy people, I will write down that very useful and new information concisely and concisely in a small list. 
Read for your health. So, in our program:
</div><ul>
<li>	Personal numbers for types 5, 6, 16 and many others: where to look for them and what to do with them. Lots of interesting facts.</li>
<li>	If you set the Bonfire of an Abandoned Camp with a value of 8-15 as a resource type, then... Read it, you’ll find out.</li>
<li>	Swan Pond has no parameters! Why then !!SW? Don't know. Probably for beauty.</li>
<li>	With some values of the control word Flotsam and Scientists (as well as unused chests - but everyone knows that) when visited, smoothly disappear without any message. 
You can’t achieve this smoothest disappearance using ERM tools – that’s the only way. But we can change the type and control word...</li>
<li>	Control word for the Fountain of Luck - for the first time in the arena!</li>
<li>	What does pampering with town and hero numbers lead to - a detailed description.</li>
<li>	If you indicate the amount of resource as 0 in Someone’s cellar (or mills), it is considered visited, unlike a cart, where you can always find 0 wood or ore.</li>
<li>	If you set the number of creatures to 4095, then by clicking <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> You will be prompted to remove it from the map, because... he's too big.</li>
<li>	The problems of generating random messages in Signs and Ocean Bottles are considered.</li>
<li>	It is told what will happen if you place a Scientist teaching primary skills number 4-7.</li>
<li>	Bits 5-12 of many objects contain information about their visits by players, but this is not always edited by ERM.</li></ul>
<div class="erm-paragraph">And also many other things that I considered unnecessary to catch.</div>
<div class="erm-paragraph">Let me finish here.</div>

</div>
</div>
</section>
:::

## Purpose {#meaning}

The 32-bit OB:C field has a different layout for each object type. These are inspected legacy WoG fields; preserve unknown bits. Field capacity does not make every value valid. Use PO for custom data.

## Values {#values}

| Object type | Fields and related commands |
| --- | --- |
| [4](../objects/#id-4) {#type-4} | 0–4: visit-object index (0–31); hero visitation uses HE:V7. |
| [5](../objects/#id-5) {#type-5} | 0–14: AR:V, scroll spell or pickup mode; 15–18: resource for modes 4/5; 19–30: extra-data index; 31: whether AR:G/M/X data exists. Mode 6 packs guards differently. |
| [6](../objects/#id-6) {#type-6} | 0–9: LE parameter-record index (0–1023). |
| [12](../objects/#id-12) {#type-12} | 0–3: resource kind; 4–19: signed amount −32768…32767. Values 8–15 change the message picture but do not grant an artifact or spell. |
| [14](../objects/#id-14) {#type-14} | SW writes 0–4 (index) and 13–16 (luck), but the legacy WoG study reports that gameplay ignores them and grants +2 luck. A successful write does not prove the effect changed. |
| [16](../objects/#id-16) {#type-16} | 5–12: player visits (CB:V); 13–24: bank record (CB:A/G/M/R); 25: guards defeated (CB:T). |
| [17](../objects/#id-17) {#type-17} | 0–28: DW record index. |
| [18](../objects/#id-18) {#type-18} | 0–28: DW record index. |
| [19](../objects/#id-19) {#type-19} | 0–28: DW record index. |
| [20](../objects/#id-20) {#type-20} | 0–28: DW record index. |
| [22](../objects/#id-22) {#type-22} | 0–4: skeleton index; 6–15: artifact ID; 16: artifact-present flag (SK). |
| [23](../objects/#id-23) {#type-23} | 0–4: visit-object index (0–31); hero visitation uses HE:V1. |
| [24](../objects/#id-24) {#type-24} | 5–12: player visits (CB:V); 13–24: bank record (CB:A/G/M/R); 25: guards defeated (CB:T). |
| [25](../objects/#id-25) {#type-25} | 5–12: player visits (CB:V); 13–24: bank record (CB:A/G/M/R); 25: guards defeated (CB:T). |
| [26](../objects/#id-26) {#type-26} | 0–9: LE record; 10–17: players forbidden to activate it; 18: AI allowed; 19: remove after first visit. |
| [29](../objects/#id-29) {#type-29} | Whole word: 0 empty, 1 gives 5 wood, 2 gives 5 wood and 200 gold, 3 gives 10 wood and 500 gold. Other values in legacy WoG remove it without reward or message. |
| [30](../objects/#id-30) {#type-30} | 5–12: player visits; 13–16: signed luck −8…+7. |
| [32](../objects/#id-32) {#type-32} | 0–4: visit-object index (0–31); hero visitation uses HE:V2. |
| [33](../objects/#id-33) {#type-33} | 0–25: GR record index. |
| [34](../objects/#id-34) {#type-34} | Whole word: hero ID. Replacing it does not create a valid independent hero and can corrupt army or garrison state. |
| [39](../objects/#id-39) {#type-39} | 0–4: LN index; 6–9: resource amount (0 means depleted); 10–13: resource kind. |
| [41](../objects/#id-41) {#type-41} | 0–4: visit-object index (0–31); hero visitation uses HE:V6. |
| [42](../objects/#id-42) {#type-42} | 0–25: MN record index. Mines and lighthouses share the record pool; the legacy lighthouse resource kind is 100. |
| [44](../objects/#id-44) {#type-44} | Exit-monolith index, numbered independently per subtype. −1 disables the exit in the inspected version. |
| [45](../objects/#id-45) {#type-45} | Whole word: monolith record index. Equal indices prevent a pair from teleporting to each other. |
| [47](../objects/#id-47) {#type-47} | 0–4: visit-object index (0–31); hero visitation uses HE:V8. |
| [48](../objects/#id-48) {#type-48} | 0–4: spring index (SP:N); 6: visited (SP:S). |
| [51](../objects/#id-51) {#type-51} | 0–4: visit-object index (0–31); hero visitation uses HE:V3. |
| [53](../objects/#id-53) {#type-53} | 0–25: MN record index. Mines and lighthouses share the record pool; the legacy lighthouse resource kind is 100. |
| [54](../objects/#id-54) {#type-54} | 0–11: count; 12–15: refusal probability in tens of percent; 16: joining mode; 17: never flees; 18: no growth; 19–26: extra-data index; 31: extra data exists. Creature type is the object subtype. |
| [55](../objects/#id-55) {#type-55} | 0–4: GD index; 6–9: resource; 10: reward available. Resource values 8–15 are invalid. |
| [57](../objects/#id-57) {#type-57} | Obelisk index 0–47 (MT:N); player visits are stored separately (UN:L). |
| [59](../objects/#id-59) {#type-59} | 0–29: SG:M text index. Unassigned text uses RANDSIGN.TXT; equal indices do not guarantee equal random messages. |
| [61](../objects/#id-61) {#type-61} | 0–4: visit-object index (0–31); hero visitation uses HE:V4. |
| [62](../objects/#id-62) {#type-62} | Imprisoned hero ID. Assigning a free hero ID does not imprison that hero. |
| [63](../objects/#id-63) {#type-63} | 0: guards; 5–12: player visits; 13–20: spell ID (PM). |
| [78](../objects/#id-78) {#type-78} | 0–15: signed creature count; object subtype selects the creature. |
| [79](../objects/#id-79) {#type-79} | 0–14: resource amount; 19–30 and 31: extra-data index and presence flag, as with artifacts. |
| [81](../objects/#id-81) {#type-81} | 0–2: reward kind; 3–5: primary skill; 6–12: secondary skill; 13–22: spell. Use valid IDs only (SC). |
| [82](../objects/#id-82) {#type-82} | 0–2: 0 empty, 1 gives 1500 gold, 2 gives 1000 gold and an artifact; 3–12: artifact ID. Modes 3–7 remove the chest without reward in legacy WoG. |
| [83](../objects/#id-83) {#type-83} | Whole word: quest record index. A shared index means shared data; completing one quest can clear another object’s parameters. |
| [84](../objects/#id-84) {#type-84} | 5–12: player visits (CB:V); 13–24: bank record (CB:A/G/M/R); 25: guards defeated (CB:T). |
| [85](../objects/#id-85) {#type-85} | 5–12: player visits (CB:V); 13–24: bank record (CB:A/G/M/R); 25: guards defeated (CB:T). |
| [86](../objects/#id-86) {#type-86} | 0–29: artifact ID. A wide field does not increase the number of valid game artifacts. |
| [87](../objects/#id-87) {#type-87} | 0–7: owner; 8–15: boat X; 16–23: boat Y (SY). Remote purchase may choose the nearest water hex. |
| [88](../objects/#id-88) {#type-88} | 5–12: player visits; 13–22: spell ID (10 bits, capacity 0–1023, not the valid spell set). |
| [89](../objects/#id-89) {#type-89} | 5–12: player visits; 13–22: spell ID (10 bits, capacity 0–1023, not the valid spell set). |
| [90](../objects/#id-90) {#type-90} | 5–12: player visits; 13–22: spell ID (10 bits, capacity 0–1023, not the valid spell set). |
| [91](../objects/#id-91) {#type-91} | 0–29: SG:M text index. Unassigned text uses RANDSIGN.TXT; equal indices do not guarantee equal random messages. |
| [93](../objects/#id-93) {#type-93} | Whole word: spell ID. |
| [98](../objects/#id-98) {#type-98} | 0–28: town record index. Replacing it can desynchronize ownership, visitors and garrison; use CA for normal changes. |
| [100](../objects/#id-100) {#type-100} | 0–4: visit-object index (0–31); hero visitation uses HE:V0. |
| [101](../objects/#id-101) {#type-101} | 0–9: artifact ID; 10: 0 gold / 1 artifact; 11–14: gold multiplier ×500 (CH). |
| [102](../objects/#id-102) {#type-102} | 0–4: tree index; 5–12: player visits; 13–15: payment kind. Use valid KT:S modes; mode 3 is reported to hang the legacy game. |
| [103](../objects/#id-103) {#type-103} | 0–29: subterranean-gate record containing the paired exit coordinates. |
| [104](../objects/#id-104) {#type-104} | 13–24: university index (UR:S). |
| [105](../objects/#id-105) {#type-105} | 0–4: resource amount; 5–12: visits; 13: reward present; 14: 0 resource / 1 artifact; 15–24: artifact ID; 25–28: resource (WG). |
| [107](../objects/#id-107) {#type-107} | 0–4: visit-object index (0–31); hero visitation uses HE:V9. |
| [108](../objects/#id-108) {#type-108} | 0: artifact present; 5–12: player visits; 13–22: artifact ID (WT). |
| [109](../objects/#id-109) {#type-109} | 0–4: gold multiplier ×500; 5–12: player visits (WM). |
| [112](../objects/#id-112) {#type-112} | 0–3: resource; 5–12: player visits; 13–16: amount (ML). |
| [113](../objects/#id-113) {#type-113} | 5–12: player visits; 13–19: secondary skill. |
| [215](../objects/#id-215) {#type-215} | Whole word: quest record index. A shared index means shared data; completing one quest can clear another object’s parameters. |

## Related commands and tables {#related}

[OB:C](../../receivers/ob/) · [All tables](../)

## Related commands and tables {#reference-links}

[Map objects (OB)](../../receivers/ob/#command-b-h) · [Map objects (OB)](../../receivers/ob/#command-c) · [Map objects (OB)](../../receivers/ob/#command-d-e) · [Map objects (OB)](../../receivers/ob/#command-m-1-2-3) · [Map objects (OB)](../../receivers/ob/#command-r-s) · [Map objects (OB)](../../receivers/ob/#command-t-u) · [Object visits (OB)](../../triggers/ob/) · [Artifact table](../artifacts/) · [Player colors](../players/) · [Game object table](../objects/) · [Object-type hints (HT)](../../receivers/ht/) · [Flags, messages and choices (IF)](../../receivers/if/) · [ERM debugging and compatibility](../../compatibility/)
