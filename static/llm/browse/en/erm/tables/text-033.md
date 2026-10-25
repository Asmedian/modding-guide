# Object control words

ID: erm.tables.object-control-words
URL: /en/erm/tables/object-control-words/
Part: 1/4
Source references: old-help:cont-conwords.htm, old-help:rec-ob.htm, old-help:rec-sk.htm, old-help:rec-mt.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.tables.object-control-words 1 -->
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
   6 – guards is turned on (regardless of the value <a href="../../receivers/ar/#ref-rec-ar-x">AR:X</a>), </div>
<span class="erm-anchor" id="ref-cont-conwords-6"></span><details class="erm-comment"><summary><strong>more details</strong> (<span class="erm-anchor" id="ref-cont-conwords-show6"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-cont-conwords-q2"></span><blockquote class="erm-tone-quote erm-note"><strong>Addition</strong> from <strong class="erm-tone-purple erm-strong">XEPOMAHT</strong>'a: for this type of artifact selection, the flag, number of creatures and their number are encoded in the control word. 
<pre>The format is (bit by bit):
<strong class="erm-legacy-label">0..3</strong>: selection type (6)
<strong class="erm-legacy-label">4..11</strong>: creature number (0..255)
<strong class="erm-legacy-label">12..16</strong>: not used
<strong class="erm-legacy-label">17..28</strong>: number of creatures (0..4096)
<strong class="erm-legacy-label">29..31</strong>: not used</pre></blockquote></div></details>
<div class="erm-paragraph">   values greater than 6 – artifact is not raised.<br>
In the absence of guards, a battle with zero Cerberus tries to start, which is automatically won (unearthed <code class="erm-tone-purple erm-strong">feanor</code>).
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
By setting values from 8 to 15, we can receive in the message instead of a resource picture pictures of artifacts, spells, flags, luck and morale - numbering, as in <a href="../dialog-pictures/#ref-form-picts" data-context="true">IF:Q</a>. 
Of course, artifacts and other things are not actually added to the hero, but they can be added using ERM. The second parameter for images is the number of resources.<br>
<strong class="erm-legacy-label">Bits 4-19</strong>: quantity of resource. Can be negative: -32768 to +32767. Matches the second parameter <a href="../../receivers/fr/#ref-rec-fr-b">FR:B</a>.<br>
<strong class="erm-legacy-label">Bits 20-31</strong> are ignored and are usually empty.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t14"></span><a href="../objects/#ref-form-objects" data-context="true">Type 14</a>. <strong>Swan Pond</strong><br>
It should be noted about such a widespread misconception that Swan Lake has parameters. For some reason WoG Team created receiver, editing it control word, 
with the ability to set the amount of luck and a personal number. In fact, there is no number by the lake, and why would he need one? And luck is always +2. Receiver still tries to edit control word, but to no avail. 
In fact, it (in a word) always contains -1, but nevertheless, we present its composition as it appears in the imagination of ERM developers:<br>

<!-- llm:end erm.tables.object-control-words 1 -->

