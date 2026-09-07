---
{"title":"Variables and expressions (VR)","summary":"VR receiver: variables and expressions, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Variables and expressions (VR)"}
---

## Receiver VR {#ref-rec-vr}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-f-min-max-errors-default-b"></span><span class="erm-anchor" id="command-m1-source-start-count-m2-source-index-m3-value-base"></span><span class="erm-anchor" id="command-mask-or-xmask-sd-bits-sd-bits"></span><span class="erm-anchor" id="command-value--value-value-value-value"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-vr-text"></span><div>
<span class="erm-anchor" id="ref-rec-vr-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>VR</strong> 
	(variables) </span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-vr-red"></span><span class="erm-tone-red">!!VR@:XXXX;</span> 
	- variable management.</strong> Used to manipulate variables 
(installation, comparison, mathematical operations).</div>
<span class="erm-anchor" id="ref-rec-vr-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: <a href="./#ref-rec-vr-string">commands over <em>z</em>-variables</a>, <a href="./#ref-rec-vr-addstring">connection <em>z</em>-variables</a>, 
<a href="../../variables/#ref-cont-flags-var-show">variables in messages</a>, <a href="../../variables/#ref-cont-flags">flags and variables</a></div>

<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vr-c"></span>
C$1/$2/$3/$4/$5/$6/$7/$8/$9/$10/$11/$12/$13/$14/$15/$16</strong></span><br>
Set/check <em>v</em>-variables<br>
         $ – value for <em>v</em>-variable @<br>
         $1 – set/check <em>v</em>-variable (@)<br>
         $2 – set/check <em>v</em>-variable (@+1)<br>
  <span class="erm-anchor" id="ref-rec-vr-step"></span><em class="erm-indent">…</em><br>
  <em class="erm-indent">…</em><br>
         $16 – install/test <em>v</em>-variable (@+15)<br>
The command supports up to 16 parameters.<br>
<span class="erm-anchor" id="ref-rec-vr-bold"></span><em class="erm-strong">Note:</em> in <a href="../../compatibility/#ref-era-index">ERA</a> support added <em>v</em>, <em>y</em>, <em>x</em> and <em>w</em>-variables.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-vr-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!VRv123:C23/v15/?i/y4;
Result:
v123 = 23, v124 = v15, i = v125, v126 = y4</code></pre>
<u>Example</u> from <span class="erm-anchor" id="ref-rec-vr-n1"></span><code class="erm-tone-purple erm-strong">Donald</code>'a:<br>
You can use this command to create a table; this is a simple method 
receiving a random spell. For example:
<pre class="erm-example"><code class="language-erm">!!VRv600:C0/3/5/15/27/31/32/35/37/41/42/43/46/53/54; - table of first level spell numbers
!!VRy1:S600 R14; - random number in the range 600..614
!!VRv1:Svy1; - now v1 stores a random spell of the first level</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vr-r"></span><span class="erm-anchor" id="command-r-r-r0-min-max-free-t"></span>Rx</strong></span><br>
Generate a random value from 0 to x (inclusive) and ADD it to the current value.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!VRi:R25; - a random number in the range [0..25] will be generated and added to the current value of the variable</code></pre>
</div><hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>R#/$</strong></span><br>
Set the random number generator to one value.<br>
       
$ – random number in the generator for synchronization.<br>
       
# – phantom parameter (not used)<br>
If you are not sure whether the random number generator is the same 
positions on both computers, you can simply restart them on the same beat.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vr-s"></span><span class="erm-anchor" id="command-s-c-1-16"></span>S#</strong></span><br>
Set variable @ to # (here and below # can mean the name of another variable).<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!VRv5:C0/0/0; write zeros to v5..v7
!!VRv5:S12; v5=12
!!VRv6:Sv5; v6=v5
!!VRv6:S?v7; v7=v6
We have: v5 = v6 = v7 = 12</code></pre></div>
<hr><div class="erm-paragraph"><span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-vr-t"></span>T$</strong></span><br>
Generate a random value from 0 to $ and add it to the current one 
the value of the variable. The value is based on the time value.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-14"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-vr-show14"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
When using this command, if you generate two or more values in one receiver, they may be equal, so use VR:R in such situations.<br>
Generator status is NOT automatically synchronized between remote PCs. Don't use the command in battle mode to make your code more compatible with multiplayer.</div></details>

<hr><h3><span class="erm-anchor" id="ref-rec-vr-log"></span>Logical bit operations</h3>
<div class="erm-paragraph">See also: <a href="../../tables/object-control-words/#ref-cont-conwords-logic">Logical bit operations in WoG</a></div>
<div class="erm-paragraph"><strong class="erm-tone-red"><span class="erm-anchor" id="ref-rec-vr-and"></span>&amp;$</strong></div>
<div class="table-wrap erm-reference-table"><span class="erm-anchor" id="ref-rec-vr-le"></span><table class="erm-align-left"><tr class="erm-legacy-code-line">
<span class="erm-anchor" id="ref-rec-vr-dl2"></span><td class="erm-game-text">AND</td>
<td>0 and 0 → <strong>0</strong></td>
<td>0 and 1 → <strong>0</strong></td>
<td>1 and 0 → <strong>0</strong></td>
<td>1 and 1 → <strong>1</strong></td>
</tr></table></div>
<div class="erm-paragraph">«<strong>&amp;</strong>» - bitwise AND operation on the bits of a variable, can be used for 
checking whether a certain <a href="../../tables/bits/#ref-form-hex" data-context="true">bit</a>.<br>
For example, let’s check whether the v1 variable has the 4th bit (16):<br>
<pre class="erm-example"><code class="language-erm">!!VRv1:&amp;16;
v1 will be set to 16 if the 4th bit exists, and to 0 if it does not exist.</code></pre> 
So, this command can be very useful, for example, when checking for <a href="../../tables/creature-flags/#ref-form-flaggedabilities" data-context="true">creature flags</a>.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-2"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-vr-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!BMx16:F?i; - write stack flags to variable i
!!VRi:&amp;134217728; - see if the "Protection" bit exists
!!IF&amp;i&gt;0:M^This stack has adopted a defensive stance^;</code></pre></div></details>
<div class="erm-paragraph">You can also remove a specific bit without removing the remaining bits in the variable.<br>
To do this, use: &amp;-(N+1), where N is the value of the bit to be removed.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-12"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-vr-show12"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
To remove the "live" flag from a creature (bit 16), use: -(16+1) = -17.
<pre class="erm-example"><code class="language-erm">...
!!VRv1:&amp;-17;</code></pre>
At the same time, many scripters often use this method of deleting a flag, when the same flag is added before the deletion itself. 
This method eliminates the situation when you remove a flag that the creature did not initially have (a kind of “foolproof” protection).
<pre class="erm-example"><code class="language-erm">...
!!VRv1:|16 -16;</code></pre></div></details>

<hr>
<div class="erm-paragraph"><strong class="erm-tone-red"><span class="erm-anchor" id="ref-rec-vr-or"></span>|$</strong></div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text">OR</td>
<td>0 and 0 → <strong>0</strong></td>
<td>0 and 1 → <strong>1</strong></td>
<td>1 and 0 → <strong>1</strong></td>
<td>1 and 1 → <strong>1</strong></td>
</tr></table></div>
<div class="erm-paragraph">«<strong>|</strong>» - bitwise OR operation on variable bits, can be used 
to set a specific bit without changing other bits. For example, set the 5th bit (32) to v1:
<pre class="erm-example"><code class="language-erm">!!VRv1:|32;</code></pre>
If v1 already has this bit, nothing will change. If not, the bit will be set.<br>
This may be useful for adding new ones <a href="../../tables/creature-flags/#ref-form-flaggedabilities" data-context="true">flags to creatures</a>if you don't know 
what flags they already have, and in fact, this is the only completely safe syntax for this action.</div>

<hr>
<div class="erm-paragraph"><strong class="erm-tone-red"><span class="erm-anchor" id="ref-rec-vr-xor"></span>X$</strong></div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text">XOR</td>
<td>0 and 0 → <strong>0</strong></td>
<td>0 and 1 → <strong>1</strong></td>
<td>1 and 0 → <strong>1</strong></td>
<td>1 and 1 → <strong>0</strong></td>
</tr></table></div>
<div class="erm-paragraph">Performs a bitwise exclusive OR on the bits of a variable.<br>
For example, X-1 inverts the bits of a variable.<br>
To test the difference between two variables, use the syntax: <strong><span class="erm-tone-purple erm-legacy-strong">!!VR</span></strong>@:X$,
where @ is a variable that is one of the variables for comparison and also receives the result of the comparison; 
$ is the second variable for comparison.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-3"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-vr-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Let's say v1=163 (10100011) and v2=106 (01101010). 
Then..
<pre class="erm-example"><code class="language-erm">!!VRv1:Xv2; in v2 still 106

 10100011
 01101010
;--------XOR
 11001001</code></pre>
So, v1=201 (11001001).<br>
Let's now invert the bit status of the variable:
<pre class="erm-example"><code class="language-erm">!!VRi:X256;
If the variable i has bit 8 (256) turned on, it will turn off, otherwise it will turn on.</code></pre></div></details>

<hr><h3><span class="erm-anchor" id="ref-rec-vr-mat"></span>Arithmetic operations with variables.</h3>
<div class="table-wrap erm-reference-table"><table class="erm-table-first-center">
	<tr><td width="30"><strong class="erm-tone-red">+#</strong></td><td>Add # to variable</td></tr>
	<tr><td><strong class="erm-tone-red">-#</strong></td><td>Subtract # from a variable</td></tr>
	<tr><td><strong class="erm-tone-red">*#</strong></td><td>Multiply variable by #</td></tr>
	<tr><td><strong class="erm-tone-red">:#</strong></td><td>Divide a variable by # (don't try to divide by 0)</td></tr>
	<tr><td><strong class="erm-tone-red">%#</strong></td><td>Set the variable to the value of the remainder when divided by #</td></tr>
</table></div>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!VRi:-1 +v15; - subtract one and add v15</code></pre>
<u></u><span class="erm-anchor" id="ref-rec-vr-13"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-vr-show13"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<ul>
	<li>You still can't divide by zero :) If this happens, an ERM error will appear: <span class="erm-anchor" id="ref-rec-vr-dl3"></span><span class="erm-game-text">Sorry. Division by zero :-)</span>.</li>
	<li>Finding the remainder when you have a negative dividend is the same as for a positive number, but the remainder is negative:
<pre class="erm-example"><code class="language-erm">!!VRv1:S-5;	Let v1=-5
!!VRv1:%2;	then the remainder of division by 2 will be = -1</code></pre>
That is for such operations the sign is taken from the dividend. The rest follows the formula: [Quotient] × [Divisor] + [Remainder] = [Dividend].</li>
	<li>There is a bug - after operations with a variable <em>i</em> for the same receiver arithmetic operations <strong>+</strong>/<strong>-</strong> do not work when followed by a space (fixed in <a href="../../compatibility/#ref-era-index">ERA</a>).
<pre class="erm-example"><code class="language-erm">!!VRi:S10;
!!VRy1:Si -1; [y1=10, which is not correct]
!!VRy2:Si +1; [y2=10, which is not correct]
!!VRy3:Si -j; [there will be an ERM error]
!!VRy4:Si +y1; [there will be an EPM error]</code></pre>
</li>
</ul></div></details>


<hr><h3><span class="erm-anchor" id="ref-rec-vr-string"></span>Commands over text variables</h3>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>!!VRz#</strong></span><br>
There are the following text variables:<br>
z1…z1000. They can be modified (any variable) for use.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vr-h"></span><span class="erm-anchor" id="command-h-flag-ustring"></span>H#</strong></span><br>
Determine whether it contains <em>z</em>-variable is an empty value or not.<br>
         # – flag number to save 
result      <br>
          = 1 – if there is text<br>
          = 0 – if the variable is empty<br>
All characters such as spaces and new lines will be ignored and considered empty.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-4"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-vr-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!VRz100:S^Great!^;
!!VRz101:S^^;
!!VRz102:S^ ^;
!!VRz100:H300; - flag 300 = 1
!!VRz101:H301; - flag 301 = 0
!!VRz102:H302; - flag 302 = 0</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-m"></span>
<span class="erm-tone-red"><strong>M#<br>!!VRz#:M1/z#1/#2/#3</strong></span><br>
Get subtext from variable z#1 and set it to z#<br>
         z# – variable where to save 
result<br>
         z#1 – source variable<br>
         #2 – position where to start 
copy (0 – default) (in characters)<br>
         #3 – subtext length for 
copy (in characters)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-5"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-vr-show5"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!VRz1:S^Let's try to copy this text^;
!!VRz2:M1/z1/8/10;</code></pre>
We get: z2 = “let’s try”</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-m2"></span>
<span class="erm-tone-red"><strong>!!VRz#:M2/z#1/#2</strong></span><br>
Get word with sequence number #2 from variable z#1 and set it to z#<br>
         z# – variable where the word will be saved<br>
         z#1 – source variable<br>
         #2 – word number (default – 0)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-6"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-vr-show6"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Separators: spaces, periods, commas, tabs, new lines - are not numbered.<br>
<u>Example</u>:<br>
“A variable that contains.. And many more        words”<br>
We will get the following words:
<pre class="erm-example"><code class="language-erm">0 -&gt; "Variable"
1 -&gt; “which”
2 -&gt; "contains"
3 -&gt; "I"
4 -&gt; “more”
5 -&gt; “a lot”
6 -&gt; “words”</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-m3"></span>
<span class="erm-tone-red"><strong>!!VRz#:M3/#1/#2<br>!!VRz#:M3/#1</strong></span><br>
Converts a number to text.<br>
         z# is a variable that will 
contain the result<br>
         #1 – any number (variable) 
for conversion<br>
         #2 – number system (according to 
default – 10)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-7"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-vr-show7"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!VRz1:M3/123; - z1 = "123"
!!VRz1:M3/123/10; - z1 = "123" (same as above)
!!VRz1:M3/-123; - z1 = "-123"
!!VRz1:M3/127/16; - z1 = “0x7F” (hexadecimal number system)</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-m4"></span><span class="erm-anchor" id="command-m4-length-m5-first-m6-last"></span>
<span class="erm-tone-red"><strong>!!VR#:M4/?$</strong></span><br>
Get text length<br>
         # – <em>z</em>-variable<br>
         $ – any numeric variable 
(to record length)<br>
Length includes spaces.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-m5"></span>
<span class="erm-tone-red"><strong>!!VR#:M5/?$</strong></span><br>
Get the number of spaces at the beginning of a text variable<br>
         # – <em>z</em>-variable<br>
         $ – any numeric variable 
(to record item number)<br>
Counting starts from 0 (no spaces). If 
the variable (text) is empty, position is -1.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-m6"></span>
<span class="erm-tone-red"><strong>!!VR#:M6/?$</strong></span><br>
Get the number of the last character (not space)<br>
         # – <em>z</em>-variable<br>
         $ – any numeric variable 
(to record item number)<br>
Counting starts from 0. If the variable is empty, the position is 0.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-8"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-vr-show8"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!VRz10:S^ Abc Where ^; - text
!!VRz10:M4/?y5; - get length in y5
!!VRz10:M5/?y6;	- get the sequence number of the first character (not space)
!!VRz10:M6/?y7;	- get the sequence number of the last character (not space)
Total: y5 = 12, y6 = 2, y7 = 8.</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-v"></span><span class="erm-anchor" id="command-vstring-zstring-sstring-string"></span>
<span class="erm-tone-red"><strong>!!VR$:Vz#</strong></span><br>
Convert text to an integer or floating point value.<br>
         $ – any variable for 
integration (f…t, v#, w#, x#, y#) or floating point (e)<br>
         z# – source variable (z)<br>
You can use the syntax ...e... (engineering 
floating point standard). If the value cannot be converted, 
then set to 0. Space characters are ignored.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-vr-9"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-vr-show9"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
«123» → 123<br>
«+123» → 123<br>
«-123» → -123<br>
«.325» → 0.325<br>
«-1.25e+1» → -12.5 (-1.25 * 10^1)</div></details> 
<hr> 
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-str-set"></span>
<span class="erm-tone-red"><strong>S^Text^</strong></span><br>
Set the text of a text variable.</div> 
<div class="erm-paragraph"><strong><span class="erm-tone-red">S#</span></strong><br>
Copy text from the z# variable to the current one.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-15"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-vr-show15"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Here you can specify a variable without a prefix <em>z</em>. ERM only takes into account the index.<br>
B <a href="../../compatibility/#ref-era-index">ERA</a> it is recommended to write with the prefix <em>z</em>.
<pre class="erm-example"><code class="language-erm">!!VRz2:S1; similar to !!VRz2:Sz1;</code></pre>
</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-u"></span>
<span class="erm-tone-red"><strong>!!VRz#1:Uz#2<br>!!VRz#1:U^text^</strong></span><br>
Subtext search in <em>z</em>-variables.<br>
Search for the word/characters/sign from variable z#2 or from the string ^text^ in the variable z#1, 
followed by setting flag 1 to TRUE if found.<br> 
In both cases <em>z</em>-variable can be of any type (regular, local, ERT).<br>
This command can be easily ERT'ified.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-10"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-vr-show10"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Case insensitive. So “Sword” will be found in “SWORD”. Spaces are ignored, so 
“Hello”, “Hello” and 
“Hello      ” - everyone will simply mean “hello”. 
But this command does not skip spaces if there is any text after them. So <br>
“Hello, it’s me” and “Hello, it’s me” will be different.<br>
<u></u><span class="erm-anchor" id="ref-rec-vr-11"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-vr-show11"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Here you will receive two messages: “Yes!” and “Yes again!”
<pre class="erm-example"><code class="language-erm">ZVSE
!#VRz100:S^ Sword

^;
!#VRz200:S^
This is a text about_sword

^;
!#VRz200:Uz100;
!#IF&amp;1:M^Yes!^;
!#VRz200:U^

SWORD
^;
!#IF&amp;1:M^Yes again!^;</code></pre></div></details></div></details>

<hr>
<h3><span class="erm-anchor" id="ref-rec-vr-addstring"></span>Connecting text variables</h3>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>+#</strong></span><br>
Connect the text variable z# to the current one (added to the end)</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>+^text^</strong></span><br>
Concatenate the text variable z# with a specific text (appends to the end)</div>
<hr>

















</div>
</div>
</section>
:::

## Notes on modern ERA versions {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!VRvariable:subcommands;</code></div>
<div class="erm-paragraph">In the table, <code>$</code> denotes a read/write parameter, <code>#</code> an input, and <code>?$</code> an output. Individual commands define their identifiers and ranges.</div>
<hr>
<div class="erm-paragraph">S assigns with numeric conversion by type; S?$ reads. C accesses consecutive variables and copies raw bits, including floats: integer 1 through C does not become float 1.0.</div>
<hr>
<div class="erm-paragraph">Addition, subtraction, multiplication, division and remainder execute in order. Zero divisors are invalid; remainder follows the dividend sign (-5 % 2 = -1).</div>
<hr>
<div class="erm-paragraph">&amp; retains shared bits, the vertical bar sets bits, X toggles them. ERM 2 shifts operate on bit patterns. Clear mask N with AND of its inverse; do not subtract an absent bit.</div>
<hr>
<div class="erm-paragraph">Classic R adds a random 0..# inclusive; two-argument R seeds the generator. Modern three-argument form selects min..max; the fourth free value affects network-PvP determinism. T uses an independent unpredictable generator and is unsuitable for synchronized gameplay logic.</div>
<hr>
<div class="erm-paragraph">F clamps a numeric range; min&gt;max returns min. Third argument controls error reporting, fourth replaces out-of-range values with default. Bound types must match. B turns nonzero into 1 and zero into 0.</div>
<hr>
<div class="erm-paragraph">For strings, H sets a nonempty-text flag ignoring spaces/newlines. U searches case-insensitively after trimming edge spaces and returns the result in flag 1.</div>
<hr>
<div class="erm-paragraph">Substring from zero-based start; zero-based word (space, dot, comma, tab and newline delimiters); number to text (base defaults to 10).</div>
<hr>
<div class="erm-paragraph">Length including spaces; first nonspace character (-1 for empty); last nonspace character (classic empty result 0).</div>
<hr>
<div class="erm-paragraph">V converts text to int/float, failure yields 0. Z creates a temporary ERM string and stores its index for FU return. S copies text, + appends; use explicit z variables.</div>
<hr>
<div class="erm-paragraph">Distinguish numeric arithmetic, raw copies and string indices from memory addresses. Modern additions follow the ERA III changelog; old arithmetic bugs involving i are fixed.</div></section>
:::

## Related reference {#related}

[Variables](../../variables/) · [SN](../../receivers/sn/)



## Related commands and tables {#reference-links}

[Variables, strings and arrays](../../variables/) · [ERM debugging and compatibility](../../compatibility/) · [Object control words](../../tables/object-control-words/#values) · [Bits, masks and hexadecimal](../../tables/bits/) · [Creature bit flags](../../tables/creature-flags/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.16, ?](../../compatibility/#era3-v-3-9-16-l281) — Note on generating random values in battles. Era uses deterministic random number generator in network PvP battles in order to prevent most of possible desynchronizations. Generator state depends on current round ID, aut…
- [ERA 3.9.16, +](../../compatibility/#era3-v-3-9-16-l308) — Extended VR:R command with optional 4-th parameter: VR:R(dummy)/(min)/(max)/(free_param); See the above note about generating random values in PvP battles. Example: !?FU(OnBattleScreenMouseClick)&i^mouse_action^=(MOUSE_R…
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l448) — Extended 'VR:F' command with the 4-th parameter. VR(intVar):F(minValue)/(maxValue)/(showErrors)/(defaultValue); If (defaultValue) is specified and variable does not fit (minValue)..(maxValue) range, it will be set to (de…
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l479) — Added the following functions to Era Erm Framework: !?FU(Interpolate); ; Interpolates ERM variables inside given string (%v1, etc). Can be used for nested translation strings like %T(...) is json. !#VA(strPtr:x); Source …
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l727) — Implemented advanced ERM memory synchronization means in network games. Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for further synchronization. Syntax: !!IP:M^var_name_1^/^var_name_2^/...; !!IP:M…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l802) — Added the following functions to Era Erm Framework: !?FU(Array_Move); ; Copies part of the array into another part of the array, overwriting existing values in a smart way. ; The parts may have overlapping indexes. The s…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l885) — Rewritten creature regeneration ability support. (!) Plugins should not hook regeneration code and should use Era 'SetRegenerationAbility' API instead. Era introduces term "Standard regeneration ability", which value is …
- [ERA 3.9.9, +](../../compatibility/#era3-v-3-9-9-l971) — Added the following functions to Era Erm Framework: !?FU(Hash32); ; Calculates int32 digest (hash sum) of arbitrary sequence of bytes. !#VA(data:x); Pointer to data first byte or string !#VA(dataLen:x); Length of data in…
- [ERA 3.9.4, +](../../compatibility/#era3-v-3-9-4-l1094) — Added the following functions to Era ERM Framework: !?FU(BattleStack_MakeActive); ; Makes specified stack active/acting. !#VA(stackId:x); Stack ID to pass control to. !?FU(PrepareMultiPicDialog); ; Initializes IF:N dialo…
- [ERA 3.9.3, +](../../compatibility/#era3-v-3-9-3-l1167) — Rewrote game random number generator (RNG) engine. Main changes: - All RNGs are not thread safe now. They should be used in the main thread only. - There are two main RNGs: the global one (rand/srand/VR:R) and the unique…
- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1230) — Added new events to Era Erm Framework: "OnKeyReleased_AdvMap", "OnKeyReleased_Battle", "OnKeyReleased_HeroScreen", "OnKeyReleased_HeroMeetingScreen", "OnKeyReleased_Town", occuring right after "OnKeyReleased" events and …
- [ERA 3.8.4, +](../../compatibility/#era3-v-3-8-4-l1436) — Era uses two separate Mersenne Twister generators now. The first one is used as native rand()/srand()/VR:R replacement for all cases except of pre-battle configuration, network PvP battle and VR:T command. The second one…
- [ERA 3.8.1, +](../../compatibility/#era3-v-3-8-1-l1515) — Implemented stable multiplayer battles support by introducing deterministic pseudo random number generator in PvP battles. Thanks to ZVS for idea. Deterministic generator influences all calls to rand() function, includin…
- [ERA 3.8.1, +](../../compatibility/#era3-v-3-8-1-l1519) — Added "DebugRng" option to heroes3.ini. If set to 1, rand/srand/VR:R commands will generate debug messages.
- [ERA 3.8.1, -](../../compatibility/#era3-v-3-8-1-l1529) — Fixed game random number generator behavior: reseeding does not influence Mersenne Twister generator state anymore. VR:T will not return the same values after battle.
- [ERA 3.5.0, +](../../compatibility/#era3-v-3-5-0-l1676) — Rewritten part of old ERM engine, which was responsible for conditions evaluations. - It's now possible to use spaces and line feeds to decorate complex conditions. Example: !!if|i^Master_Warrior_Hero%(hero)^ <> (prevWas…
- [ERA 3.4.3, +](../../compatibility/#era3-v-3-4-3-l1718) — Added new ERM command VR:B. It converts any number to boolean (1 or 0). Any non-zero value becomes 1. Example: !!OW:R(CURRENT_PLAYER)/(RES_GOLD)/?(goldAmount:y); !!VR(hasGold:y):S(goldAmount) B; now hasGold = (TRUE) or (…
- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1895) — Implemented automatical static and dynamic index checking for ERM 2.0 arrays. Invalid indexes are reported and forced to valid range. Example: !#VA(msgType&#91;7&#93;:y) (msgColor&#91;7&#93;:y); !!re i/(PLAYER_FIRST)/(PLAYER_LAST); !!VR…
- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1946) — !!VR:F command can be called with 3 parameters now: !!VR(var):F(minValue)/(maxValue)/(showErrors); If the third parameter is specified and not (FALSE), values outside specified range are reported using regular ERM error …
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2141) — Restored VR:S?$ syntax support from Era 2.
- [All related entries](../../compatibility/#era3-changelog)
<!-- ERA3-GENERATED:END -->
