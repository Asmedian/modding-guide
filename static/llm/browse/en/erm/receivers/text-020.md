# Flags, messages and choices (IF)

ID: erm.receivers.if
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/if/
Part: 1/2
Source references: old-help:rec-if.htm, era-changelog:era-iii-changelog.txt, old-help:cont-db.htm, old-help:era-color-text.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.if 1 -->
## Receiver IF {#ref-rec-if}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-a0100010000-s0100010000-r0100010000-v"></span><span class="erm-anchor" id="modern-picture-dialog"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-if-text"></span><div>
<span class="erm-anchor" id="ref-rec-if-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>IF</strong> 
(flag and message manager) </span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-if-red"></span><span class="erm-tone-red"><br>
!!IF:XXXX;</span> 
- manager of conditional flags (1..1000), questions, display of messages and pictures.</strong><br>
Used to manage conditional flags, questions to the player, display 
messages and pictures, choosing a hero to use <em>w</em>-variables, extended 
dialog windows.<br>
* Commands [<a href="./#ref-rec-if-a">A</a>], [<a href="./#ref-rec-if-r">R</a>] and [<a href="./#ref-rec-if-s">S</a>] of this receiver only work with the first 10 flags.<br>
* Any trigger and receiver can depend on a maximum of 16 conditions.<br>
* Flag 1000 takes the value "Player" (0 = AI, 1 = human) when executed 
almost any action. Can be used in all receivers and 
triggers.</div>
<div class="erm-paragraph"><strong></strong></div><span class="erm-anchor" id="ref-rec-if-11"></span><details class="erm-comment"><summary>Note (<span class="erm-anchor" id="ref-rec-if-show11"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Because receiver IF includes text messages, ";" characters are not allowed in them. and "^".<br>
<u>Example</u>:<div>
<pre class="erm-example"><code class="language-erm">!!IF:M^This is an erroneous text; it contains ^forbidden characters^;</code></pre>
<pre class="erm-example"><code class="language-erm">!!VRz567:S^Wrong text; contains ^forbidden characters^;</code></pre>
<pre class="erm-example"><code class="language-erm">!!IF:M^This is correct text. It does not contain prohibited characters^;</code></pre></div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-if-select"></span>You should also point out that it is possible to highlight text within the dialog using parentheses (they are not displayed in the dialog): 
<span class="erm-anchor" id="ref-rec-if-erm"></span><strong class="erm-inline-code"><span class="erm-tone-red">{text}</span></strong>. One has only to enclose your text (or its individual words) in these brackets, and the words will be colored in 
<span class="erm-anchor" id="ref-rec-if-dl2"></span><span class="erm-game-text">golden yellow color</span>.
<pre class="erm-example"><code class="language-erm">!!IF:M^Among all the words, only {this} will be highlighted^;
!!IF:M^{This text will all be highlighted}^;</code></pre>
However, it’s worth saying here that “text selection” only works as long as both brackets are on the same line inside the dialog, or you haven’t added text wrapping yourself. In this case, the “selection” of the moved part of the sentence will be reset. Take this point into account when designing your dialogues.
<pre class="erm-example"><code class="language-erm">!!IF:M^{This part of the sentence will be highlighted,
and this part will remain simple}^;</code></pre>
To avoid such problems with your text, you can resort to this method of highlighting:
<pre class="erm-example"><code class="language-erm">!!IF:M^{Enough {before {each {word {open {bracket}^;</code></pre></div>
<div class="erm-paragraph">In addition, you can additionally color your text in the dialog using a special syntax: <a href="./#ref-era-color-text">see details</a>…</div></div></details>
<span class="erm-anchor" id="ref-rec-if-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: <a href="./#ref-rec-if-more">more details on the IF receiver</a>, <a href="./#ref-cont-db">additional information on dialogues</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-if-a"></span>Axxxxxxxxxx</strong></span><br>
Set the values of the first ten flags.<br>
Line XXXX contains 10 zeros and/or ones, respectively, "1" for the flag to be set as "True", and "0" for "False"<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!IF:A0100010000; Set all flags to 0 except the second and sixth.</code></pre>
At the start of the game all flags are set to "0"</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-b"></span><span class="erm-anchor" id="command-b-1-2-p"></span>B#/$1/$2</strong></span><br>
Setting or changing a single 
images or animations to show to the command <a href="./#ref-rec-if-p">IF:P</a>.<br>
        # – dialogue number (1..100)<br>
        $1 – text variable number, where 
file/image name written (BMP/GIF/JPG or AVI)<br>
	        $2 – for AVI – repeat again 
(1) or not (0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-d"></span><span class="erm-anchor" id="command-d-1-15-f-1-2-3-4-5-e"></span>D#/$1/$2/$3/$4/$5/$6/$7/$8/$9/$10/$11/$12/$13/$14/$15</strong></span><br>
Set or change advanced dialogs to be shown by command <a href="./#ref-rec-if-e">IF:E</a>.<br>
        # – dialogue number (1..100)<br>
*$ = number of variable z in which the text to be used is set<br>
        $1 – title text (white) on top 
dialog box (text is centered; multiple lines are allowed)<br>
        $2 – left description (yellow) above 
input windows (29 characters maximum, further cut off)<br>
        $3 – right description (yellow) about the window 
selection (29 characters maximum, further truncated)<br>
        $4 – picture/AVI 1 (left), file in <em class="erm-legacy-file">folder_heroes/maps</em><br>
        $5 – picture/AVI 2, file in <em class="erm-legacy-file">folder_heroes/maps</em><br>
        $6 – picture/AVI 3, file in <em class="erm-legacy-file">folder_heroes/maps</em><br>
        $7 – picture/AVI 4 (right), file in <em class="erm-legacy-file">folder_heroes/maps</em><br>
        $8 – description of picture 1 (with 
mouse hover)<br>
        $9 – description of picture 2 (with 
mouse hover)<br>
        $10 – description of picture 3 (with 
mouse hover)<br>
        $11 – description of picture 4 (with 
mouse hover)<br>
        $12 – choice 1 (input window) – text 
buttons<br>
        $13 – choice 2 (input window) – text 
buttons<br>
        $14 – choice 3 (input box) – text 
buttons<br>
        $15 – choice 4 (input box) – text 
buttons<br>
<strong>
</strong></div><span class="erm-anchor" id="ref-rec-if-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-if-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">If you use 0 or empty parameter it is 
means skip. The full path to the file, including the name (up to 256 characters) can be 
changed, but remember that it starts processing from <em class="erm-legacy-file">Maps</em>, so you can do this: <strong class="erm-tone-red erm-inline-code">^../data/mypic.bmp^</strong>. The maximum image size is 100*100, but may be smaller 
(center alignment automatically). Supports formats 
JPG, BMP. From video - supports small AVIs. The image setup is not saved with the game, so configure it before 
using IF:E</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-e"></span>E$1/$2</strong></span><br>
Show extended dialog, 
previously set by the command 
<a href="./#ref-rec-if-d">IF:D</a> 
(possibly <a href="./#ref-rec-if-f">IF:F</a>).<br>
        $1 – number <em>v</em>-variable for 
save selection<br>
        $2 – dialogue number<br>
<strong><u>Comment</u>:</strong> the variable will be 1, 2, 3 or 4 respectively if a selection is made, or -1 if exit is pressed.<br>
The text from the input window will be automatically entered into z1, even if there is no window.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-f"></span>F$1/$2/$3/$4/$5/$6</strong></span><br>
Adding tooltips text to the selection window 
in an extended dialogue. Command Expansion <a href="./#ref-rec-if-d">IF:D</a>.<br>
        #1 – dialogue number (1..100)<br>
        $2 – number <em>z</em>-variable with text for 
1st choice<br>
        $3 – number <em>z</em>-variable with text for 
2nd choice<br>
        $4 – number <em>z</em>-variable with text for 
3rd choice<br>
        $5 – number <em>z</em>-variable with text for 
4th choice<br>
        $6 – enable exit button (1) or 
no (0)<br>
<strong><u>Comment</u>:</strong> this setup is not saved when 
saving, so always make settings before using the command <a href="./#ref-rec-if-e">
IF:E</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-g"></span><span class="erm-anchor" id="command-g-single-result-mask-title-item1-item12"></span>G#1/#2/#3/#4/#5/#6/#7/#8/#9/#10/#11/#12/#13/#14/#15/#16</strong></span><br>
Set selection dialog (up to 12 options)<br>
        #1 – dialogue type:<br>
            1 – 
one-button (one choice)<br>
            0 – 
multi-button (several selections)<br>
        #2 – number <em>v</em>-variable where 
the result will be entered<br>
        #3 – initial status of buttons<br>
        #4 – number <em>z</em>-variable – title 
(top of window; no more than 3 lines recommended)<br>
        #5 – number <em>z</em>-variable named 1st 
item (0 – do not show)<br>
        #6 – number <em>z</em>-variable named 2nd 
item (0 – do not show)<br>
       …    <br>
        #16 – number <em>z</em>-variable with name 
12th subject (0 – do not show)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-if-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-if-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The status of the chosen one is calculated <a href="../../tables/bits/#ref-form-hex" data-context="true">bit by bit</a>.<br>
choice 1 = 1<br>
choice 2 = 2<br>
choice 3 = 4<br>
choice 4 = 8<br>
choice 5 = 16..<br>
So, all items will be equal = 4095. To set the item 2, 4, 5, 8 and 10 
the value will be 2+8+16+128=154. All disabled = 0.<br>
<u>Example</u>:<br>
<img src="../../../../assets/erm/507bc28814eae0c4.jpg" alt="The status of the chosen one is calculated bit by bit. choice 1 = 1 choice 2 = 2 choice 3 = 4 choice 4 = 8 choice 5 = 16.. So, all items will be equal = 4095. T" loading="lazy" decoding="async" class="erm-figure" width="401" height="336"></div></details>
<hr>
<div class="erm-paragraph"><strong><span class="erm-tone-red"><span class="erm-anchor" id="ref-rec-if-l"></span><span class="erm-anchor" id="command-l-text-m-text-m0-4-text-m1-z"></span>L^Text^</span></strong><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Add a message to the log on the screen.<br>
<strong>L^Text^</strong> - will add "text"<br>
<strong>L$</strong> – will add the value of the variable z$<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-if-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-if-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Looks like you clicked <span class="erm-key">Tab</span>, entered a message, and 
pressed <span class="erm-key">Enter</span>.<br>
The message appears below the previous one.<br>
Up to 20 messages per screen are possible.<br>
Each message remains on the screen for 20 seconds.<br>
Works both in the adventure screen and in battle.<br>
When you enter or leave a battle, the message remains on the screen.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-m"></span>M^Text^</strong></span><br>
Show message (text). The message can contain any characters 
except "^" and ";"<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-if-4"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-if-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<img src="../../../../assets/erm/6b9b390f8a081632.jpg" alt="ifm" loading="lazy" decoding="async" class="erm-figure" width="319" height="191"></div></details>
<div class="erm-paragraph"><em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>M0/4/^Hint^</strong></span> <br>
Allows you to show a message without images and buttons (with a normal click <span class="erm-anchor" id="ref-rec-if-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">). Can be used 
for hints in triggers <a href="../../triggers/cm/#ref-tr-cm">!?CM</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M1/$</strong></span><br>
Set or get message text<br>
        $ – text number <em>z</em>-variable</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-n"></span><span class="erm-anchor" id="command-ntype-subtype-n-text"></span>N#1/#2/#3/#4/#5/#6/#7/#8/#9/#10/#11/#12/#13/#14/#15/#16</strong></span><br>
A message with text and up to 8 pictures of any type available in the game.<br>
You can see something similar by setting <a href="../ge/#ref-rec-ge">global event</a> with multiple resources<br>
<em>The syntax is:</em><br>
<strong><span class="erm-tone-red">!!IF:N…</span></strong><br>
The dialogue is not shown, this is only a preparatory phase.<br>
If you set more than three parameters, the interpreter will understand them as 
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">type</a> and <a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">subtype</a> 
pictures the same way as in the command <a href="./#ref-rec-if-q">IF:Q</a>.<br>
You can set up to 8 pictures (16 parameters), but a minimum of 2 pictures (4 parameters).<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-if-13"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-if-show13"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!IF:N3/8/10/2/11/3/13/2/17/1000/21/99/22/4;</code></pre>
Means that the following will be shown: 3/8 – resource - sulfur, quantity 8, next – 
brown player's flag (10/2), then Luck, etc. As you can see there are 7 pictures.</div></details>
<div class="erm-paragraph"><em>Other syntax:</em><br>
If you have less than four parameters, the interpreter will interpret it as 
command to display the dialog that was prepared by the previous syntax.<br>
The only option here is the text to display:<br>
<strong><span class="erm-tone-red">!!IF:N^Text^</span></strong> - straight text, or<br>
<strong><span class="erm-tone-red">!!IF:N1/z1</span></strong> - text from z1.<br>
If you specify another <em>z</em>-variable, the dialog will still contain the value z1.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-if-12"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-if-show12"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
There is a maximum line limit - if the text contains more lines than shown in the following example, the game will crash:
<pre class="erm-example"><code class="language-erm">!!IF:N^ This is
Ooooh...
...
...
...
very
length...
...
...
ny
text^;
</code></pre></div></details>
<div class="erm-paragraph">For an example of displaying a finished dialog using IF:N, see <a href="./#ref-cont-db-n">here</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-p"></span>P#</strong></span><br>
Show single image/animation in 
extended dialog window previously set by the command <a href="./#ref-rec-if-b">IF:B</a><br>
        # – dialogue number</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-q"></span><span class="erm-anchor" id="command-q-text-q-type-subtype-type-subtype-mode-text"></span>Q#^Question^</strong></span><br>
Ask the player (question). The answer (yes = 1, cancel = 0) is entered in 
flag # (1..1000). The question can contain any characters except "^" and ";"<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-if-5"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-if-show5"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<img src="../../../../assets/erm/6d7babaee92f6d9e.jpg" alt="ifq2" loading="lazy" decoding="async" class="erm-figure" width="318" height="190"><br><br></div></details>
<div class="erm-paragraph"><strong><span class="erm-tone-red">Q#1/#2/#3/#4^text^</span></strong><br>
Show message or question with one picture<br>
        #1 – flag number<br>
        #2 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">picture type</a><br>
        #3 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">picture subtype</a><br>
        #4 – </div><span class="erm-anchor" id="ref-rec-if-6"></span><details class="erm-comment"><summary>message type</summary><div class="erm-comment-body">
	<blockquote class="erm-note">
	1 – message<br>2 – yes/no question (set to flag)<br>4 – message without buttons 
	(use this format with trigger <a href="../../triggers/cm/#ref-tr-cm">!?CM</a> for messages by right click and 
	use -1 for the image type and subtype if you don't need it)</blockquote>
</div></details>
<div class="erm-paragraph"><em>Note</em>: you must use the ^text^ parameter or the command will not work 
work.<br>If you don't want to use text, use ^^.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-if-7"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-if-show7"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<img src="../../../../assets/erm/b115f7b4877ac7b9.jpg" alt="ifq1" loading="lazy" decoding="async" class="erm-figure" width="312" height="376"></div></details>
<div class="erm-paragraph"><strong><span class="erm-tone-red">Q#1/#2/#3/#4/#5/#6^text^</span></strong><br>
Show message or question with two pictures<br>
        #1 – flag number<br>
        #2 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">picture type</a> 1<br>
        #3 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">picture subtype</a> 1<br>
        #4 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">picture type</a> 2<br>
        #5 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">picture subtype</a> 2<br>
        #6 – </div><span class="erm-anchor" id="ref-rec-if-8"></span><details class="erm-comment"><summary>message type</summary><div class="erm-comment-body">
	<blockquote class="erm-note">
	1 – message<br>
	2 – yes/no question (set to flag)<br>
	4 – message without buttons (use this format with a trigger <a href="../../triggers/cm/#ref-tr-cm">!?CM</a> for messages by right click and 
	use -1 for the image type and subtype if you don't need it)<br>
	7 – select one of the pictures:<br>
	     0 = right<br>
	     1 = left<br>
	10 – choice from two pictures + cancel button: the result will be entered into <em>v</em>-variable #. 
	It can take the following values:<br>
	     0 = exit pressed<br>
	     1 = left image selected<br>
	     2 = right picture selected</blockquote>
</div></details>
<div class="erm-paragraph"><em>Note</em>: you must use the ^text^ parameter or the command will not work 
work.<br>If you don't want to enter text, use ^^.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-if-9"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-if-show9"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<img src="../../../../assets/erm/09fec3c187adb052.jpg" alt="ifq4" loading="lazy" decoding="async" class="erm-figure" width="317" height="318"></div></details>
<div class="erm-paragraph"><strong><span class="erm-tone-red">Q#1/#2/#3/#4/#5/#6/#7/#8^text^</span></strong><br>
Show a message or question with three pictures<br>
        #1 – flag number<br>
        #2 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">picture type</a> 1<br>
        #3 – <a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">
picture subtype</a> 1<br>
        #4 – 
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">picture type</a>2<br>
        #5 – <a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">
picture subtype</a> 2<br>
        #6 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">picture type</a> 3<br>
        #7 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">picture subtype</a> 3<br>
        #8 – </div><span class="erm-anchor" id="ref-rec-if-10"></span><details class="erm-comment"><summary>message type</summary><div class="erm-comment-body">
	<blockquote class="erm-note">
	1 – message<br>
	2 – yes/no question (set to flag)<br>
	4 – message without buttons (use this format with a trigger <a href="../../triggers/cm/#ref-tr-cm">!?CM</a> for messages by right click and 
	use -1 for the image type and subtype if you don't need it)<br>
	Here, in the same way (as for a dialogue with two pictures), you can specify types 7 and 10, and then the player will be able to choose from the first two pictures of the dialogue, while the third will be just decorative :)</blockquote></div></details>
<div class="erm-paragraph"><em>Note</em>: you must use the ^text^ parameter or the command will not work 
work.<br>If you don't want to enter text, use ^^.</div>
<div class="erm-paragraph">
Instead of any ^text^ you can use a number <em>z</em>-variable.<br><em>The syntax is:</em><br>
<strong><span class="erm-tone-red">Q…/#/z#</span></strong><br>
where <strong>#</strong> – message type, <strong>z#</strong> – number <em>z</em>-variable with text.</div>
<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-if-s"></span>Sxxxxxxxxxx</strong></span><br>
Set some flags to true (reverse R syntax)<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!IF:S0100010000; – set the second and sixth to 1, leave the rest unchanged.</code></pre></div>
<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-if-r"></span>Rxxxxxxxxxx</strong></span><br>
Set some flags to false (syntax, reverse S)<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!IF:R0100010000; – set the second and sixth flags to 0, leave the rest unchanged.</code></pre></div>
<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-v"></span>V#1/#2</strong></span><br>
Set conditional flag #1 (1..1000) to value #2 (1 or 0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-w"></span><span class="erm-anchor" id="command-w-x"></span>W$</strong></span><br>

<!-- llm:end erm.receivers.if 1 -->

