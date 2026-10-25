# Flags, messages and choices (IF)

ID: erm.receivers.if
URL: /en/erm/receivers/if/
Part: 2/2
Source references: old-help:rec-if.htm, era-changelog:era-iii-changelog.txt, old-help:cont-db.htm, old-help:era-color-text.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.if 2 -->
Each hero has 200 individual variables.<br>
They are called w# (# = 1..200)<br>
They can be used wherever f…t variables are.<br>
You must set a hero against whom these values will be checked ($ = 
<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">0..155</a>, -1 = current)<br>
Each time you use this command, you access the variables of a specific hero.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-if-15"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-if-show15"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!IF:W-1;	current hero
!!VRw55:S10;	write the value 10 to w55 of the current hero</code></pre></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-x"></span>X$</strong></span><br>
Ask the player the Sphinx question<br>
$ – question number (-1 – random)<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-if-14"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-if-show14"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">A dialog box with the Sphinx is called up. All 
questions and answers are taken from the file <em class="erm-legacy-file">ZSphinx.txt</em>. If you don't have TxtEditor, you 
you can use CmdEditor for any additions. First column - 
questions, the second - answers. Now there is a match between what the player wrote and the answer 
means the answer is correct. Flag 1 is set to true (1) if the response 
correct, false (0) if incorrect.</div></details>
<hr>
<h3 class="erm-align-center"><span class="erm-anchor" id="ref-rec-if-more"></span><em>Additional information for the IF receiver</em></h3>
<div class="erm-paragraph">In ERM messages (<a href="./#ref-rec-if-m">M</a>- and <a href="./#ref-rec-if-q">Q</a>-commands) you can use special display syntax:<br>
“%%” → percent sign “%”<br>
“%Dd” → current day of the week<br>
“%Dw” → current week <br>
“%Dm” → current month<br>
“%Da” → current day since the start of the game<br>
“%Gc” → current player color (in text)<br>
See also <a href="../../variables/#ref-cont-flags-var-show">show variables</a> in messages.
</div>

<h4>View title</h4><div class="erm-paragraph">
Sometimes you will know the number of a creature, artifact, building, secondary skill or 
spell, but you won’t know its name (especially if generated randomly). B 
In such situations, use the title view command - <a href="../un/#ref-rec-un-n">UN:N</a>. This command 
will allow you, by specifying the number, to receive the name (name) recorded in a specific <em>z</em>-a variable that can already be inserted in your dialog.</div>

<h4>Interpretation of values in IF:Q</h4><div class="erm-paragraph">
The game "translates" some values into IF:Q a little differently: negative 
values as "quantity per day" so this way you can't show 
negative amount of gold. But! If you subtract another 100,000 from such a number, then that’s it 
will work correctly.<br>
So:
<pre class="erm-example"><code class="language-erm">!#IF:Q1/6/200/1^Message^;	- gold: "200"
!#IF:Q1/6/-200/1^Message^;	- gold: "200 per day"
!#IF:Q1/6/-100200/1^Message^;	- gold: "-200"</code></pre>
Same for money:
<pre class="erm-example"><code class="language-erm">!#IF:Q1/36/-100/1^Message^;	- coins: "100 per day"
!#IF:Q1/36/-100100/1^Message^;- coins: "-100"</code></pre>
For creatures, you can set the number like this:<br>
[picture subtype] = [number of creatures]×65536 + <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a>
<pre class="erm-example"><code class="language-erm">!#IF:Q1/21/327686/1^Message^;	- 5 swordsmen (65536*5 +6)
!#IF:Q1/21/65542/1^Message^;	- 1 swordsman (65536*1 +6)
!#IF:Q1/21/6/1^Message^;	- swordsman</code></pre></div>
<hr>

</div>
</div>
</section>
:::

## Dialogs {#ref-cont-db}

:::erm
<section class="erm-reference" lang="en">
<div><h3 class="erm-align-center">Dialog boxes (receiver <a href="./#ref-rec-if">IF</a>)</h3>
<div class="erm-paragraph">If you need to show the player a message, ask a question, show a picture, or 
animation to the player, or let the player choose between options, or let him type 
anything (such as your name), you must use dialog boxes.</div>
<h3>Types of Dialog Boxes</h3>
<div class="erm-paragraph">There are two main types of dialog boxes that can be shown using 
ERM. The first is the standard dialogue that you regularly saw in the original 
Heroes. The second is an advanced dialog, which is used to show external 
pictures and animations, make it possible to enter data from the keyboard and select from 
any options. Your choice will determine the type of information you 
you can show. You can use both types to show only information 
or to show a picture and ask the player a question, in the end, a simple choice between 
"Yes" and "No" (Cancel). Standard dialog boxes are easier to use, 
than extended ones, which require additional commands.</div>
<h3>Using Standard Dialog Boxes</h3>
<div class="erm-paragraph">They are based on just two commands for a standard dialog box: <a href="./#ref-rec-if-m">IF:M</a>, 
which is used for single messages, and <a href="./#ref-rec-if-q">IF:Q</a>, which is used for 
Yes/No questions and for displaying pictures. In both cases, it all depends 
only according to your desire ;)</div>
<ul>
<li>An example of displaying a simple dialog box - a message with a command <a href="./#ref-rec-if-m">
IF:M</a> :
<span class="erm-anchor" id="ref-cont-db-m"></span><pre class="erm-example"><code class="language-erm">!!IF:M^In this mysterious country, flying creatures do not fly, but they do not respond to attacks.^;</code></pre>
This code will display the message you see below in white text, center aligned. 
Below there will be one OK button that the player must press to continue the game.
<div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/6b9b390f8a081632.jpg" alt="ifm" loading="lazy" decoding="async" class="erm-figure" width="319" height="191"></div></li>

<li>An example of displaying a simple question window with a command <a href="./#ref-rec-if-q">IF:Q</a> (without picture):
<span class="erm-anchor" id="ref-cont-db-q2"></span><pre class="erm-example"><code class="language-erm">!!IF:Q2^Special rules modify the game. Do you want to select them manually? 
(If not, one or two options will be selected at random.)^;</code></pre>
In this example, a dialog box appears with two buttons: OK and Cancel.
The number 2 after IF:Q means that flag 2 will take the value of the selected button, and will be set to False (0) if Cancel is pressed.<br>
Any flag can be selected for a question. See <a href="../../variables/#ref-cont-flags">flags and variables</a> for more information.
<div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/6d7babaee92f6d9e.jpg" alt="ifq2" loading="lazy" decoding="async" class="erm-figure" width="318" height="190"></div></li>

<li>Example of displaying a message with a picture (without a question):
<span class="erm-anchor" id="ref-cont-db-q-pic"></span><pre class="erm-example"><code class="language-erm">!!IF:Q2/20/53/1^{Mushrooms Water Magic}
Mushrooms Water Magic gives the Expert Water Magic skill until the end of the week...
You inhale fungal spores...
You have become a Water Magic Expert!^;</code></pre>
<div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/b115f7b4877ac7b9.jpg" alt="ifq1" loading="lazy" decoding="async" class="erm-figure" width="312" height="376"></div></li>

<li>An example of displaying a message and two pictures - the player must click on the picture to select it and press the OK button:
<span class="erm-anchor" id="ref-cont-db-q7-pic"></span><pre class="erm-example"><code class="language-erm">!!IF:Q2/5//8/141/7^Do you want to play for {resources} or {artifacts}?^;</code></pre>
<div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/09fec3c187adb052.jpg" alt="ifq4" loading="lazy" decoding="async" class="erm-figure" width="317" height="318"></div></li>
</ul>

<div class="erm-paragraph">However, there is another type of dialogue that uses standard game resources - this is the command <a href="./#ref-rec-if-n">IF:N</a>. 
There can be up to 8 pictures at the same time, the display parameters of which are the same as for <a href="./#ref-rec-if-q">IF:Q</a>.
<span class="erm-anchor" id="ref-cont-db-n"></span><span class="erm-anchor"></span><pre class="erm-example"><code class="language-erm">!!HE-1:B0/?z2;	get the name of the current hero in z2
!!VRz1:S^%Z2 teaches special spells...^;
!!IF:N9/10/9/11/9/12/9/13;
!!IF:N1/z1;</code></pre>
</div><div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/acb064539d0659c8.jpg" alt="ifn" loading="lazy" decoding="async" class="erm-figure" width="502" height="246"></div>
<div class="erm-paragraph">As you can see, there are many combinations with these receiver commands <a href="./#ref-rec-if">!!IF</a>. Experiment!</div>
<h3>Using the Advanced Dialog #1 - Multitasking Dialog</h3>
<div class="erm-paragraph">If you want to allow the player to enter text, allow him to select something 
from four options, and/or show certain pictures or animations, you 
should use advanced dialog boxes. In general, you need to write down 
some text in <em>z</em>-variable and then use it to set commands to 
extended dialog box. To set them, use the commands
<a href="./#ref-rec-if-d">IF:D</a> and <a href="./#ref-rec-if-f">IF:F</a>, and 
for display - by command <a href="./#ref-rec-if-e">IF:E</a>. Any option below can 
be connected into a multitasking dialog:</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-db-step"></span><strong class="erm-indent">1. Showing pictures:</strong> unlike the standard dialog box, 
extended cannot show internal ones, i.e. gaming, pictures, but only 
external pictures, with a certain type and size. If you need to show more 
internal picture of the game, use the key <span class="erm-key">Print Screen</span> and cut out the one you need 
picture. The path to the image can contain up to 256 characters, and starts with 
directories <em class="erm-legacy-file">Heroes3\Maps</em>. Pictures can be BMP, GIF or JPG with maximum 
size 100x100 pixels. If the image is smaller, it will be aligned to 
the center of the free space. If the image is larger, only 100x100 pixels 
will be shown. For BMP, the top left pixel will be interpreted as 
transparent. You can mix and change pictures as you wish. Command <a href="./#ref-rec-if-d">
IF:D</a> used to set images for the multitasking dialog box.</div>
<u>Example 1</u>:
<pre class="erm-example"><code class="language-erm">!!VRz10:S^The lands you travel to are beautiful.^;
!!VRz11:S^blue forest.jpg^;
!!VRz12:S^sparkling lake.bmp^;
!!VRz13:S^rainbow.gif^;
!!VRz14:S^mountains.jpg^;
!!VRz15:S^Dark Forest^;
!!VRz16:S^Crystal Lake^;
!!VRz17:S^Mystical Rain^;
!!VRz18:S^Misty Mountains^;
!!IF:D5/10/0/0/11/12/13/14/15/16/17/18/0/0/0/0;
!!IF:E1/5;</code></pre>
<div class="erm-paragraph">In this example, z10 contains the title text for the dialog, in 
z11..z14 the names of the pictures in the Maps folder are recorded, and the hints are recorded in z15..z18 
for each picture. We used dialog box No. 5 (first parameter), then 
number <em>z</em>-a variable containing the main text, followed by two 0s, meaning “Do not 
change these parameters." After this - <em>z</em>-variables with file names (11..14) and 
<em>z</em>-variables for hints (15..18). The last four parameters are also not 
are used in this example and we replace them with zeros.</div>
<div class="erm-paragraph"><strong class="erm-indent">2. Show animation:</strong> you can use the advanced dialog to 
displaying an animation or clip in AVI format. AVI animation can be shown instead 
pictures and can be combined with pictures (for example, you can show 
two animations and two pictures in one dialogue). Works 
AVI is just uncompressed, or poorly compressed (RLE, for example). 
Most compressions, including DivX and XviD, result in an error <em class="erm-legacy-file">zvslib1.dll</em>. 
This, by the way, makes it difficult to use AVI in add-ons, because even 
short AVI-uncompressed takes up megabytes.<br>
Differences between playing GIF and AVI in wog dialogues:
</div><ul><li>AVI plays stably, without streaks, unlike GiF.</li>
<li>On the other hand, in the format IF:D, when there are no selection items in the dialog 
($12..$15), GIF does not go beyond the dialogue, unlike AVI.</li></ul>
Like pictures, animation is limited to 100x100 
pixels. Again, use <a href="./#ref-rec-if-d">IF:D</a> to set animation for advanced 
dialog box.
<div class="erm-paragraph"><strong class="erm-indent">3. Checkboxes:</strong> if you want to give the player a choice between four (or 
more) options, you can use checkboxes. There you can enter a title 
messages (text will be yellow). Each checkbox option will have text in 
plate, and may also have a hint text (shown at the bottom of the dialog 
window when you hover over an option). And although you can't put a picture in 
the checkbox itself, you can correlate the selected option and the picture in it, which will 
shown above. When the dialog appears, no option will be selected. Player 
can only select one option, selecting another will automatically disable the previous one. 
After the player clicks OK, you can check which option was selected by 
the number is remembered in <em>v</em>-variable. The dialog is configured in the same way as images 
and animations:
<a href="./#ref-rec-if-d">IF:D</a> and <a href="./#ref-rec-if-f">IF:F</a> for 
adding hint text for checkboxes if you want.</div>
<div class="erm-paragraph"><strong class="erm-indent">4. Entering text:</strong> if you want to receive a text message from the player, 
you can show an input window. Above it you can enter a small message 
(text will be yellow). The text entered by the player into the input window will be entered into 
text variable (<em>z</em>-variable), and can be used for a town name 
or hero, hint text, sign text, part of another message, or maybe 
be checked whether the answer is correct or not. You can also use 
entered text with command
<a href="../un/#ref-rec-un-n">UN:N</a> to search, for example, for an artifact with the entered 
name, or creature, castle building, or skill name. <a href="./#ref-rec-if-d">
IF:D</a> 
used to set the text input window.</div>
<div class="erm-paragraph"><strong class="erm-indent">5. Header text:</strong> text at the top of the dialog box (white) can be 
set with command <a href="./#ref-rec-if-d">IF:D</a>, and yellow text for 
checkboxes can be used even if you did not use checkboxes in the dialog.</div>
<div class="erm-paragraph"><strong class="erm-indent">6. Cancel button:</strong> command <a href="./#ref-rec-if-f">IF:F</a> maybe 
be used to disable or enable the Cancel button (and the <span class="erm-key">Esc</span> on 
keyboard) for an enhanced multitasking dialog box.</div>
<u>Example 2</u>:
<pre class="erm-example"><code class="language-erm">!#IF:F1/z21/z22/z23/z24/0; - set hints and disable the cancel button.</code></pre><br>
<u>Example 3</u>:
<pre class="erm-example"><code class="language-erm">!#VRz199:S^..\Data\Zvs\Cmp.res^;
!#VRz10:S^Time to play!^;
!#VRz11:S^Your name^;
!#VRz12:S^Select your spell^;
!#VRz13:S^%Z199\21_001.BMP^;
!#VRz14:S^%Z199\21_002.BMP^;
!#VRz15:S^%Z199\21_003.BMP^;
!#VRz16:S^%Z199\21_004.BMP^;
!#VRz17:S^Bloodlust^;
!#VRz18:S^Bless^;
!#VRz19:S^Magic Arrow^;
!#VRz20:S^Slow^;
!#VRz21:S^Your hero will start with the spell Bloodlust^;
!#VRz22:S^Your hero will start with the spell Bless^;
!#VRz23:S^Your hero will start with the spell Magic Arrow^;
!#VRz24:S^Your hero will start with the spell Slow^;
!#IF:D1/z10/z11/z12/z13/z14/z15/z16/z17/z18/z19/z20/z17/z18/z19/z20;
!#IF:F1/z21/z22/z23/z24/0; - set hints and cancel cancel button
!#IF:E100/1; - write dialogue choice number 1 to v100
!#VRz400:Sz1; - your name
!#VRz400:H10; - Check if the line is left empty in flag 10
!#VRz400&amp;-10:S^DracoL1ch^; - if the line is empty, set the name to DracoL1ch</code></pre>
And this is what you will see in the end:
<div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/6810cee45b45dc9b.jpg" alt="ifdm" loading="lazy" decoding="async" class="erm-figure" width="432" height="336"></div>
<h3>Using Advanced Dialogs #2 - Single Image/Animation Dialog</h3>
<div class="erm-paragraph">If you want to show a single image or a single AVI file, you can 
use the second type of extended dialogs. These dialogues are easier for 
installations than multitasking ones (fewer parameters), and have the advantage of 
that can show an image or video of almost any size. Chief 
disadvantage - you cannot include any text along with the image or 
video. When you call this dialog, you get a simple message box with 
image or AVI in the center and the OK button below. The command to set this is 
messages - <a href="./#ref-rec-if-b">IF:B</a>, and the command to show is <a href="./#ref-rec-if-p">
IF:P</a>.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!VRz1:S^..\Data\Chaos.gif^;
!!IF:B99/1/0;
!!IF:P99;</code></pre>
</div><div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/73da468cd33716b7.jpg" alt="ifb" loading="lazy" decoding="async" class="erm-figure" width="181" height="266"></div><br>
But some command overlap <a href="./#ref-rec-if-d">IF:D</a> 
(used to set multitasking dialog) - if you are using 
command <a href="./#ref-rec-if-d">IF:D</a> 
instead of <a href="./#ref-rec-if-b">IF:B</a>, first picture or AVI in the table 
parameters will be shown by the command <a href="./#ref-rec-if-p">IF:P</a>, and 
additional pictures or animations will be ignored.
<h3>Advanced dialog #3: radio or checkbox dialog (up to 12 options)</h3>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!#VRz1:S^Check the rules for this game - your choice (page 1 of 2).^;
!#VRz2:S^Attack without counterstrike instead of flying^;
!#VRz3:S^Inverted creature speed^;
!#VRz4:S^Half cost of creatures on the 7th day^;
!#VRz5:S^Creation of a magical landscape by the heroes^;
!#VRz6:S^Double attack for all creatures^;
!#VRz7:S^Growing Armies^;
!#VRz8:S^Sale of wild boars in all external dwellings^;
!#VRz9:S^Start with level 5 heroes^;
!#VRz10:S^Duplicate artifacts^;
!#VRz11:S^Fog of War^;
!#IF:G0/100/4/1/2/3/4/5/6/7/8/9/10/11/0/0;</code></pre>
This is what the dialog will look like using the command <a href="./#ref-rec-if-g">IF:G</a>
<div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/507bc28814eae0c4.jpg" alt="ifg" loading="lazy" decoding="async" class="erm-figure" width="401" height="336"></div>



</div>
</section>
:::

## Color text {#ref-era-color-text}

:::erm
<section class="erm-reference" lang="en">
<div>
<h3 class="erm-align-center">Colored text<a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a></h3>

<div class="erm-paragraph">All game dialogues use a combination of two colors for text: <span class="erm-anchor" id="ref-era-color-text-dl3"></span><span class="erm-game-text">beige and white<span class="erm-anchor" id="ref-era-color-text-dl2"></span><span class="erm-game-text">golden yellow.</span></span><br>
By framing the text with special brackets: <span class="erm-anchor" id="ref-era-color-text-erm"></span><strong class="erm-inline-code"><span class="erm-tone-red">{word}</span></strong>, - you highlight it with such a “yellow” color. 
This practice is called "color cueing."</div>
<div class="erm-paragraph">ERA adds support for colored markers to the game in the following format: 
<strong class="erm-inline-code"><span class="erm-tone-red">{~name/color code}...text, including sublabels...{~}</span></strong><br>
The same principle is used as in HTML:<br>
Opening mark (<strong class="erm-inline-code"><span class="erm-tone-red">{~color}</span></strong>) paints text the specified color until it encounters a label of a different color or a closing label <strong class="erm-inline-code"><span class="erm-tone-red">{~}</span></strong>. 
The closing label returns the previous color.<br>
The following example will clearly illustrate the above:<br>
<pre class="erm-example"><code class="language-erm">!!IF:M^White {~red} Red {~gold} Gold {~} Red {~} White^;</code></pre>
In the dialog you will see it like this: <span class="erm-game-text">White <span class="erm-tone-red">Red <span class="erm-tone-accent">Golden</span> Red</span> White</span></div>
<div class="erm-paragraph">The text color can be specified either as a hexadecimal numeric value (xxxxxx, for example: ff0057) or via a registered color name.<br>
The full list of registered 147 standard html colors can be viewed at 
<a href="../../tables/text-colors/#ref-form-colors" data-context="true">table of standard colors</a>.</div>
<div class="erm-paragraph">In addition, third-party modules can register new names in the event <em class="erm-tone-purple erm-legacy-event">OnAfterCreateWindow</em>, 
and also for them there is a list of short synonyms of colors:
</div><div class="table-wrap erm-reference-table"><span class="erm-anchor" id="ref-era-color-text-step"></span><table class="erm-indent">
<tr><td width="30"><strong>r</strong></td><td width="60">Red</td><td width="20" style="background-color:red"></td></tr>
<tr><td><strong>o</strong></td><td>Orange</td><td style="background-color:orange"></td></tr>
<tr><td><strong>y</strong></td><td>Yellow</td><td style="background-color:yellow"></td></tr>
<tr><td><strong>g</strong></td><td>Green</td><td style="background-color:green"></td></tr>
<tr><td><strong>a</strong></td><td>Aqua</td><td style="background-color:aqua"></td></tr>
<tr><td><strong>b</strong></td><td>Blue</td><td style="background-color:blue"></td></tr>
<tr><td><strong>p</strong></td><td>Purple</td><td style="background-color:purple"></td></tr>
<tr><td><strong>w</strong></td><td>White</td><td style="background-color:white"></td></tr>
</table></div>

</div>
</section>
:::

## Notes on modern ERA versions {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!IF:subcommands;</code></div>
<div class="erm-paragraph">In the table, <code>$</code> denotes a read/write parameter, <code>#</code> an input, and <code>?$</code> an output. Individual commands define their identifiers and ranges.</div>
<hr>
<div class="erm-paragraph">A replaces the first ten flags; S sets marked flags, R clears them. V assigns flag 1..1000 to 0/1. Do not use system flags as persistent mod state.</div>
<hr>
<div class="erm-paragraph">Configure image/AVI: dialog ID 1..100, filename-string index, AVI repeat 1/0. P displays it.</div>
<hr>
<div class="erm-paragraph">D sets title, two labels, four images, four hints, four choices using z indices. F adds four choice hints and exit permission. E takes the v-output index and dialog ID; result is 1..4 or -1, input goes to z1. Configuration is not saved; prepare before showing.</div>
<hr>
<div class="erm-paragraph">Up to 12 choices: single 1 radio/0 multiple; result is a v index; mask is initial selection. A zero string index hides an item. Returns a bitmask, not an item index. Framework RadioDlg simplifies single selection.</div>
<hr>
<div class="erm-paragraph">L appends an on-screen log; M shows a message; M0/4 shows a buttonless popup; M1 uses a string. Account for active window and human control.</div>
<hr>
<div class="erm-paragraph">Four to sixteen numeric parameters prepare 2..8 picture pairs. The short text form shows the prepared dialog. Do not rely on legacy N1/zN: Help reports substitution of z1. Use PrepareMultiPicDialog for setup.</div>
<hr>
<div class="erm-paragraph">A question stores Yes/No in a flag. Picture modes: 1 message, 2 question, 4 RMB popup. With two pictures, mode 7 selects left=1/right=0; mode 10 writes to the v index in argument one: 0 cancel/1 left/2 right. A third picture is decorative. Text is required, at least ^^.</div>
<hr>
<div class="erm-paragraph">W selects the hero for w variables (-1 current). X asks a ZSphinx.txt question (-1 random), with correctness in flag 1.</div>
<hr>
<div class="erm-paragraph">For resource pictures, a negative value means daily income; display a negative quantity as -100000-abs(amount). Creature count packing: subtype=count×65536+monsterId. Store mod text in JSON and read with SN:T. ERA 3.9.30 gates old closing-} behavior behind Text.OldClosingBracketOpt; balance formatting tags.</div>
<hr>
<div class="erm-paragraph">ERA 3.2.0: <code>!!IF:N(msgType)/^text^/?result/textAlignment/preselectedPicId/selectablePicsMask;</code>. The mask controls which previously added pictures are selectable; -1 permits all. For the first and fourth pictures use 1+8=9. Other pictures may remain decorative.</div></section>
:::

## Related reference {#related}

[SN:T](../../receivers/sn/#ref-rec-sn-era-t) · [RadioDlg](../../framework/functions/radiodlg-show/)



## Related commands and tables {#reference-links}

[Bits, masks and hexadecimal](../../tables/bits/) · [ERM debugging and compatibility](../../compatibility/) · [Mouse clicks (CM)](../../triggers/cm/) · [Global events (GE)](../ge/) · [IF:Q picture types](../../tables/dialog-pictures/) · [Hero table](../../tables/heroes/) · [Variables, strings and arrays](../../variables/) · [General game operations (UN)](../un/#command-n0-z-id-n1-z-id-n2-z-town-building-n3-z-monster-plural-n4-z-skill) · [Creature table](../../tables/creatures/)

<!-- llm:end erm.receivers.if 2 -->

