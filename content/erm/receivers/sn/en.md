---
{"title":"ERA services, memory and sound (SN)","summary":"SN receiver: era services, memory and sound, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"ERA services, memory and sound (SN)"}
---

## Receiver !!SN {#ref-rec-sn}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-baddress-resultaddress-value"></span><span class="erm-anchor" id="command-c-constant-value-exists"></span><span class="erm-anchor" id="command-kstring-length-kstring-index-char-kbytes-source-destination-dummy"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-sn-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>SN</strong> (game sounds)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-sn-red"></span><span class="erm-tone-red">!!SN:XXXX;</span> - allows you 
play external or internal audio file of almost any type.</strong><br>
If you try to play the sound, trigger will work <a href="../../triggers/sn/#ref-tr-sn">
!?SN</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-sn-1"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-sn-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can replace the player's audio event using ERM.<br>
There are some restrictions. First: sound files cannot be longer than 10 
seconds Files with a longer duration will only play the first 10 
seconds Second, when the game tries to play sound, it checks to see if it's playing 
the same sound now. If so, another copy is launched. If not, sound 
produced again. The maximum allowed name length is the first 12 characters, 
assuming the file is DOS, the first 8 characters are the name, and 3 characters after the dot 
there is permission and is in the folder <em class="erm-legacy-file">DATA</em>. So, if 
you expect the sound to be played rarely, this is not a problem at all, otherwise - 
make sure of this.<br>
<strong></strong><span class="erm-anchor" id="ref-rec-sn-2"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-sn-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Here's a quick overview of how to change sounds for objects.<br>
For example, we can change the sound when visiting the knowledge stone.<br>
First we need a file with a new sound. We will use an audio file, 
named for example <em class="erm-legacy-file">1.wav</em>. Then we need a "hidden" file to avoid 
message "resource not found" (you can find the file <em class="erm-legacy-file">ZQUIET.WAV</em> in a folder <em class="erm-legacy-file">DATA</em>).<br>
Now place some knowledge stones on the map and 
add script:
<pre class="erm-example"><code class="language-erm">ZVSE
!?OB100; 		  is the stone of knowledge visited?
!!VRz10:S^..\data\1.wav^; external WAV or 82M file
!!SN:P10; 		  play!
!?SN; 			  trigger sound
!!SN:S?z100; 		  set the name of the playing file
!!VRz99:S^Gazebo.wav^; 	  stone of knowledge?
!!FU&amp;z100&lt;&gt;z99:E; 	  continue if it is a knowledge stone
!!VRz100:S^ZQUIET.WAV^;   nothing, just silence
!!SN:S100; 		  silence...</code></pre></div></details></div></details>

<a href="../../tables/sounds/#ref-form-sound" data-context="true">List of sounds</a><br>
 will not call trigger <a href="../../triggers/sn/#ref-tr-sn">
!?SN</a>…<span class="erm-anchor" id="ref-rec-sn-3"></span><details class="erm-comment"><summary>Some sounds</summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-rec-sn-t0"></span><blockquote class="erm-margin-top-zero erm-note">- casting other spells on the map, except for viewing air and earth<br>
- construction of a building in the town,<br>
- digging (in search of the Grail)<br>
- start of the battle<br>
- battle sound<br>
- activation of cheat codes<br>
- being “near” the dwelling (for example, the singing of a monastery, the noise of a guardhouse, etc.) 
or any ANY other object (for example, a windmill) where you can 
hear the sound file playing [Most of the dwellings from Armageddon's Blade 
(for example, Sorcerers, Rusty Dragons), and WoG-dwellings (along with level 8), all 
have the same sound as Baraki.]<br>
- teleport sound<br>
- hero's horse running<br>
- mouse click (for example, on “View Kingdom”)</blockquote></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-sn-p"></span><span class="erm-anchor" id="command-pz-s"></span>
P#<br></strong></span>Play a sound file named in z#.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-sn-4"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-sn-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Here you can specify a variable without a prefix <em>z</em>. ERM only takes into account the index.<br>
B <a href="../../compatibility/#ref-era-index">ERA</a> it is recommended to write with the prefix <em>z</em>.
<pre class="erm-example"><code class="language-erm">!!VRz1:S^view.wav^;
!!SN:P1; similar to !!SN:Pz1;</code></pre>
</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-sn-s"></span>
S$</strong></span><br>
Set/check/get the name of the audio file being played in <em>z</em>-variable ($ – its number).</div>
<hr>
















</div>
</div>
</section>
:::

## Receiver SN: New instructions {#ref-rec-sn-era}

:::erm
<section class="erm-reference" lang="en">
<div>


<span class="erm-anchor" id="ref-rec-sn-era-text"></span><div>									
<span class="erm-anchor" id="ref-rec-sn-era-q2"></span><blockquote class="erm-tone-quote erm-legacy-code erm-note">By expanding the standard receiver <strong>!!SN</strong> major new commands have been introduced for <a href="../../compatibility/#ref-era-index">ERA</a>.<br>
See <a href="./#ref-rec-sn" title="Sound playback control (WAV/82M)">description of standard commands !!SN</a></blockquote>

<span class="erm-anchor" id="ref-rec-sn-era-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>SN</strong><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>: new commands</span></div>
<div class="erm-paragraph">
<br>All ERA commands can work with the following ERM elements:
</div><span class="erm-anchor" id="ref-rec-sn-era-t0"></span><ul class="erm-margin-top-zero">
<li>Positive and negative numbers;</li>
<li>Installation syntax (without modifier <em>"d"</em>) and receiving (<strong>?</strong>) values;</li>
<li>Variables <em>y+</em>, <em>v</em>, <em>w</em>, <em>x</em>, <em>z+</em>, <em>f..t</em>, <em>e</em>;</li>
<li>Global named variables of the form i^…^ (for numbers) and s^…^ (for strings);</li>
<li>String literals in the form ^...^ with support for specifiers %Y, %V, %W, %X, %Z, %I(...), %S(...), %T(...), %E with positive indices.</li>
</ul>
<div class="erm-paragraph">Also, it is worth noting that, unlike standard <em>z</em>-variables (up to 511 characters long), ERA string literals (^…^ or ^%S(…)^) can be up to 1 million long. characters.</div>
<div class="erm-paragraph">Moreover, for all teams new receivers ERA (<a href="./#ref-rec-sn-era">SN</a>/<a href="../mp/#ref-rec-mp-era">MP</a>/<a href="../rd/#ref-rec-rd">RD</a>) support implemented:
</div><ul class="erm-margin-top-zero"><li>concatenation of string variables (d, where <strong>#</strong> - z-variable or ^text^);</li>
<li>numerical operations with modifier <em>d</em> (d+, d-, d*, d:);</li>
<li>set/get operations for named variables (SN:W-keys) of numeric (i^name^) and string (s^name^) types.</li></ul>
<strong></strong><span class="erm-anchor" id="ref-rec-sn-era-1"></span><details class="erm-comment"><summary>Examples (<span class="erm-anchor" id="ref-rec-sn-era-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!SN:W^Gold^/y1 W^Gold^/d-500 W^Gold^/d*11 W^Gold^/d:10; Gold = y1 -500 * 1.1

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
!!SN:W^report^/^Today we ran into strangers... They were ^;
!!SN:W^report^/d&amp;^orcs!^;
!!IF:M^%S(report)^;</code></pre>
On the screen we will see:<span class="erm-anchor" id="ref-rec-sn-era-dl3"></span><span class="erm-game-text">Today we ran into strangers... They were orcs!</span></div></details>
<div class="erm-paragraph">The ERA kernel passes commands a set of integers (<em>4 bytes each</em>). In case of strings or get value syntax, 
these numbers represent variable addresses. Variable address is a numeric value that describes the location of data in RAM.<br>
Maximum number of command parameters: 64.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-sn-era-2"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-sn-era-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!SN:Xv1; pass number to v1
!!SN:X?v1; pass variable address v1
!!SN:Xz1; pass variable address z1
!!SN:X^text^; save the text and send its address
!!SN:Xe1 X?y1; convert value from float format to dec</code></pre></div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-l"></span><span class="erm-anchor" id="command-l-library-handle-ahandle-export-address"></span><span class="erm-anchor" id="ref-rec-sn-era-red"></span><span class="erm-tone-red"><strong>SN:L</strong></span><br>
Loading dynamic library (DLL)</div>
<div class="table-wrap erm-reference-table"><span class="erm-anchor" id="ref-rec-sn-era-le"></span><table class="erm-align-left"><tr class="erm-legacy-code-line">
<span class="erm-anchor" id="ref-rec-sn-era-dl2"></span><td class="erm-game-text"><strong>L</strong></td>
<td>path to the library</td>
<td><strong>/</strong>?</td>
<td>handle to the loaded library</td>
</tr></table></div><br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!SN:L^HD_WOG.dll^/?y2; game with HD_mod? (y2=0 – game without HD)</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-a"></span><span class="erm-tone-red"><strong>SN:A</strong></span><br>
Get the address of a machine function from the library </div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>A</strong></td>
<td>handle to the loaded library</td>
<td><strong>/</strong></td>
<td><a href="./#ref-era-api">function name</a></td>
<td><strong>/</strong>?</td>
<td>function address</td>
</tr></table></div><br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!SN:L^kernel32.dll^/?y1;
!!SN:Ay1/^lstrcpyA^/?y2;</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-e"></span><span class="erm-anchor" id="command-eaddress-convention-args"></span><span class="erm-tone-red"><strong>SN:E</strong></span><br>
Execute machine function</div>
<span class="erm-anchor" id="ref-rec-sn-era-q1"></span><pre class="erm-tone-quote erm-note"><strong>Calling Agreement:</strong>
   0 (PASCAL)
   1 (CDECL or STDCALL)
   2 (THISCALL)
   3 (FASTCALL)</pre>
<div class="erm-paragraph">By default, the function expects an integer result, which will be placed in the variable v1. If the function returns a real result, 
then you need to add 4 to the agreement number (the result itself will be saved in e1). All system libraries use the convention <em class="erm-legacy-file">STDCALL</em>.</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>E</strong></td>
<td>function address</td>
<td><strong>/</strong></td>
<td>calling agreement</td>
<td><strong>/</strong>arguments...</td>
</tr></table></div><br>
<u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!!SN:L^kernel32.dll^/?y1;
!!SN:Ay1/^lstrcpyA^/?y2;
!!SN:Ey2/1/z1/z2; Copy the contents of z2 to z1. Analogue !!VRz1:Sz2;</code></pre>
Get the ID of the current game dialogue:
<pre class="erm-example"><code class="language-erm">!!SN:L^Era.dll^/?y2; received the ERA library descriptor in y2
!!SN:Ay2/^GetGameState^/?y3; y3 - address of the GetGameState function
!!SN:Ey3/1/?y4/?y5; y4 - ID of the parent dialog, y5 - ID of the current dialog</code></pre>
Calculating the square root using the example of a third-party module:
<pre class="erm-example"><code class="language-erm">!!SN:L^math.era^/?y1;
!!SN:Ay1/^sqrt^/?y2;
!!VRe2:S169; we will take the square root of 169
!!SN:Ey2/5/e2; here 5 is STDCALL agreement (1+4)
!!IF:M^e1=%E1^;</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-f"></span><span class="erm-anchor" id="command-f-export-args"></span><span class="erm-tone-red"><strong>SN:F</strong></span><br>
Execute a function with the specified arguments to execute it from the library <em class="erm-legacy-file">era.dll</em> or <em class="erm-legacy-file">kernel32.dll</em> 
(ERA itself will select the required library for the function and cache its address by name).<br>
It is not necessary, in most cases, to use the command sequence SN:L→SN:A→SN:E.</div>
<div class="erm-tone-quote erm-note erm-paragraph">Convention used <em class="erm-legacy-file">STDCALL</em>.</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>F</strong></td>
<td><a href="./#ref-era-api">function name</a></td>
<td><strong>/</strong></td>
<td>arguments of the f-tion...</td>
</tr></table></div><br>
<u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!!SN:F^ReadStrFromIni^/^key^/^section name^/^Data\test.ini^/?z2; analogue of command UN:N6

!!SN:F^CopyFileA^/^heroes3.ini^/^heroes3.ini.bak^/0; make a backup copy of the game settings file

!!SN:F^GetButtonID^/^testBtn^; v1 will get the button ID

!!SN:F^PluginExists^/^era_hooker^; if v1=0, then the plugin was not found</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-d"></span><span class="erm-anchor" id="command-d-o-x-y-level"></span><span class="erm-tone-red"><strong>SN:D</strong></span><br>
Redraw (update) the screen of the hero, town, meeting of two heroes, adventure maps.<br>
<strong><u>Comment</u>:</strong> the command is more secure than its counterpart <a href="../un/#ref-rec-un-r">UN:R</a>.<br>
The command should be used directly in the above game windows, because Each game window has its own update function and only for it.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?CM2; hero screen
!!CM:I?y1 T?y2;
!!FU|y1&lt;&gt;30720/y2&lt;&gt;512:E; if you right-clicked on the Exit button
!!HE-1:L4/148; 		  make the current hero's face like Gelu
!!SN:D;
</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-g"></span><span class="erm-anchor" id="command-g-label-q"></span><span class="erm-tone-red"><strong>SN:G[name]</strong></span><br>
Go to a specific command of the current trigger.</div>
<blockquote class="erm-tone-quote erm-note">Today, the SN:G command is considered obsolete and its use in scripts is highly discouraged!<br>
Initially, the command was created as an intermediate option for performing fast cycles. 
Now it is preferable to use the link for these purposes <a href="../../conditions/#ref-rec-iee">!!if</a> / <a href="../../loops/#ref-rec-re">!!re</a>.</blockquote>
<div class="erm-paragraph">To perform transitions, command “shortcuts” (tags) are implemented, which are replaced with the serial number of the receiver inside the current trigger, 
in front of which they stand (counting starts from 0). All teams are included in the “counter” of teams <span class="erm-anchor" id="ref-rec-sn-era-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!XX</span></strong>-similar receivers. The labels themselves are not assigned a serial number, like a command inside a trigger.<br>
The usage syntax is as follows:
</div><dl><dd><span class="erm-anchor" id="ref-rec-sn-era-n2"></span><strong class="erm-tone-purple erm-strong">[label_name]</strong> – use of the label (will be replaced by the number of the receiver for which the label is declared)</dd>
<dd><strong class="erm-tone-purple erm-strong">[:label_name]</strong> – tag announcement (the current receiver number is remembered and associated with the tag name)</dd></dl>
<div class="erm-paragraph">Any free text is allowed as a label name. Labels can be used both before and after they are declared.<br>
Labels are only used with the SN:G command to execute loops and conditions.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">...
!!VRv1:S0 R10;
!!SN&amp;v1&gt;5:G[jump];
!!FU:E; "ERM fence" =)
[:jump]
!!IF:M^You jumped over the fence :)^;</code></pre>
<strong>IMPORTANT:</strong> It is not permitted to use SN:G to "jump" either from or into structure blocks.<br>
<u>Example</u>:<br>
There is a command to interrupt the loop <a href="../../loops/#ref-rec-re-br-co">!!br</a>. You can emulate SN:G like this:
<pre class="erm-example"><code class="language-erm">!!re i/1/1; execute the block once
  ...
  !!br&amp;condition:; conditional exit from block
  ...
!!en:;</code></pre></div>
<div class="erm-paragraph"><em>Old syntax:</em><br>
<span class="erm-tone-red"><strong>SN:G#</strong></span> - transition to command # (0...) of the current trigger.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-sn-era-6"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-sn-era-show6"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?CM0;
; RMB on the adventure map
;0 !!SN:G2; go to team number 2
;1 !!IF:M^You will never see this text!^;
;2 !!IF:M^Are you reading this text now?^;
; The numbering of trigger commands is given for clarity.</code></pre></div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-h"></span><span class="erm-anchor" id="command-h-monname-h-secskill"></span><span class="erm-anchor" id="command-h-object-x-y-level-h-object-type-subtype"></span><span class="erm-anchor" id="command-h-spec-h-art-h-spell"></span><span class="erm-tone-red"><strong>SN:H^xxx^…</strong></span><br>
The command allows you to work with names/hints/descriptions without the need to store the text in the highlighted <em>z</em>-variables.<br>
Currently the following types of commands SN:H are implemented:
</div><ul class="erm-margin-top-zero">
<li>^<a href="./#ref-rec-sn-era-h-mon">monname</a>^</li>
<li>^<a href="./#ref-rec-sn-era-h-obj">object</a>^</li>
<li>^<a href="./#ref-rec-sn-era-h-skl">secskill</a>^</li>
<li>^<a href="./#ref-rec-sn-era-h-spec">spec</a>^</li>
<li>^<a href="./#ref-rec-sn-era" title="The team is available on ERA3+">art</a>^</li>
<li>^<a href="./#ref-rec-sn-era" title="The team is available on ERA3+">spell</a>^</li></ul>
<div class="erm-paragraph">Text Retrieval Mode works with all of these types of commands, allowing you to get the actual text/description in <em>z</em>-variables for subsequent output:
<pre class="erm-example"><code class="language-erm">...
!!SN:H^monname^/13/2/?z2;	get in z2 description of the archangel</code></pre>
To delete (current values or previously set via SN:H) or restore (standard text) hints/descriptions, use the syntax <span class="erm-tone-red"><strong>^-xxx^</strong></span> …<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!SN:H^-spec^/5/2/^^; restore description of Sorchet's specialty</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-h-mon"></span><span class="erm-tone-red"><strong>H^monname^/#1/#2/^text^</strong></span><br>
<span class="erm-tone-red"><strong>H^monname^/#1/#2/?z#</strong></span><br>
Changing the name of creatures, their descriptions.
</div><pre>        #1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature number</a>
        #2 – text type:
	0 – name of the creature in units.
	1 – plural name of the creature.
	2 – special text (description)</pre>
<strong><u>Comment</u>:</strong> the command is different from its counterpart <a href="../un/#ref-rec-un-g1">UN:G1</a> that does not require use <em>z</em>-variables.
<div class="erm-paragraph"><u>Example</u>:
<pre class="erm-example"><code class="language-erm">Let's change the names and descriptions of the spearmen:
!?PI;
!!SN:H^monname^/0/0/^Weak^;
!!SN:H^monname^/0/1/^Patients^;		rename spearman (1 = plural)
!!SN:H^monname^/0/2/^Spreads infection^;  change description (2) of the spearman</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-h-obj"></span><span class="erm-tone-red"><strong>H^object^/X/Y/L/^text^</strong></span><br>
Set a tooltip for an object on the map in X Y L coordinates.<br>
<span class="erm-tone-red"><strong>H^object^/#1/#2/^text^</strong></span><br>
Set a tooltip for an object of a certain type/subtype.
</div><pre>        #1 – <a href="../../tables/objects/#ref-form-objects" data-context="true">type</a> (-1 = skip) 
        #2 – <a href="../../tables/objects/#ref-form-objects" data-context="true">subtype</a> (-1 = skip)</pre>
<div class="erm-paragraph">If several options for setting hints for one object are used, then the priority of searching for a hint is as follows:
</div><ol><li>object with exact coordinates</li>
<li>object with specified type/subtype</li>
<li>object with the specified type and subtype -1</li>
<li>object with type -1 and specified subtype</li>
<li>object with type/subtype as -1</li></ol>
<strong><u>Comment</u>:</strong> the team is different from similar teams <a href="../ob/#ref-rec-ob-h">OB:H</a> and receiver <a href="../ht/#ref-rec-ht">HT</a> that does not require use <em>z</em>-variables.
<div class="erm-paragraph"><u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!VRz1:S^{Icy Lake}
Be careful, the ice is very thin!^;
!!SN:H^object^/121/-1/^%Z1^; set your own hint for object 121 (frozen lake)</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-h-skl"></span><span class="erm-tone-red"><strong>H^secskill^/#1/#2/^text^</strong></span><br>
<span class="erm-tone-red"><strong>H^secskill^/#1/#2/?z#</strong></span><br>
Ability to set secondary skill text:
</div><pre>        #1 – <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">secondary skill</a> (0..27)
        #2 – text type:
	0 – skill name
	1 – basic level (description)
	2 – advanced level (description)
	3 – expert level (description)</pre>
<strong><u>Comment</u>:</strong> the command is different from its counterpart <a href="../un/#ref-rec-un-g">UN:G0</a> that does not require use <em>z</em>-variables.
<div class="erm-paragraph">
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!VRz5:S^test^;
!!SN:H^secskill^/21/0/^%Z5^;	set skill training (21) name from z5
!!IF:M1/z5;			show text from z5
!!SN:H^-secskill^/21/0/^^;	return default training name
!!SN:H^secskill^/21/0/?z5;	get in z5 the current skill name
!!IF:M1/z5;			show text from z5</code></pre>
You will receive two different messages:<em class="erm-game-text">test</em> and <em class="erm-game-text">Learning</em>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-h-spec"></span><span class="erm-tone-red"><strong>H^spec^/#1/#2/^text^</strong></span><br>
<span class="erm-tone-red"><strong>H^spec^/#1/#2/?z#</strong></span><br>
Customize your text for the hero's specialization
</div><pre>        #1 – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero</a>
        #2 – text type for specialization:
	0 – name (not used in the game)
	1 – brief description (not used in the game)
	2 – full description</pre>
<strong><u>Comment</u>:</strong> the command is different from its counterpart <a href="../un/#ref-rec-un-g2">UN:G2</a> that does not require use <em>z</em>-variables.
<div class="erm-paragraph"><u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!HE-1:N?y1 B0/?z1;			get the number and name of the current hero
!!SN:H^spec^/y1/2/^{~red}Coder{~}
Specialization %Z1: fierce coding!^; set description (2) of special gear for the same hero</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-i"></span><span class="erm-anchor" id="command-istring-result-t-key-result-name-value"></span><span class="erm-tone-red"><strong>SN:I</strong></span><br>
Dynamic interpolation of string variables.<br>
The command can be used to interpolate string variables received from external sources such as ini files and the command <a href="./#ref-rec-sn-era-t">SN:T</a> 
(although its use is recommended only for debugging and porting).</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>I</strong></td>
<td>string variable</td>
<td><strong>/</strong>?</td>
<td>z#</td>
</tr></table></div><br>
<u>Example</u>:<br>
Let's say the variable z2 stores the following: <strong class="erm-inline-code"><span class="erm-tone-red">%Y5 %V996 text %Z5</span></strong><br>
We need to see what values each variable currently contains.<br>
To do this we use the following:
<pre class="erm-example"><code class="language-erm">!!SN:Iz2/?z3;</code></pre>
Now z3 contains all the information from z2, including all values of the interpolated variables.

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-o"></span><span class="erm-tone-red"><strong>SN:O?X/?Y/?L</strong></span><br>
Get the coordinates of the object's entrance on the map.<br>
The command is passed three numeric variables with the coordinates of the object, in which the coordinates of the object’s input will be written.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-sn-era-5"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-sn-era-show5"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<ul class="erm-margin-top-zero"><li>If you click on an object without an input, the command returns the coordinate of the object where you clicked;</li>
<li>If you click on an object with two or more inputs, it returns the coordinate of the input that is closest to the lower right edge of the object.<br>
If you click on any of the object’s inputs, it returns the coordinate of the same input.<br>
<span class="erm-anchor" id="ref-rec-sn-era-bold"></span><em class="erm-strong">Note:</em> The command causes the game to crash if you click on an input where there is another hero.</li></ul>
<u>Example</u>:<br>
Let's find out the object's entry coordinates by clicking on another part of the object...
<pre class="erm-example"><code class="language-erm">!?CM0; click on the map
!!CM:R0 P?y1/?y2/?y3; get the coordinates of the object
!!VRv2:Cy1/y2/y3;     save a copy of the coordinates in v2/v3/v4
!!SN:O?y1/?y2/?y3;    we get the coordinates of the object's entrance
!!IF:M0/4/^%V2 %V3 %V4 =&gt; %Y1 %Y2 %Y3^; let's compare visually</code></pre></div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-q"></span><span class="erm-tone-red"><strong>SN:Q</strong></span><br>
Abort processing of the current event<br>
<strong><u>Comment</u>:</strong> the command is different from <a href="../fu/#ref-rec-fu-e">FU:E</a> in that it interrupts the entire chain of triggers of the same type.</div>
<div class="erm-paragraph"><u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?FU40000;
!!SN:Q; leave the FU40000 trigger chain

!?FU40000;
!!IF:M^this message will never be shown^;

!?CM0;
!!FU40000:P; call function 40000</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-r"></span><span class="erm-anchor" id="command-r-old-new"></span><span class="erm-tone-red"><strong>SN:R</strong></span><br>
Replaces resource names in the game on the fly.</div>
<div class="erm-tone-quote erm-note erm-paragraph">Convention used <em class="erm-legacy-file">STDCALL</em>.</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>R</strong></td>
<td>^old file name^</td>
<td>/</td>
<td>^new file name^</td>
</tr></table></div><br>
To reset file substitution, specify an empty value instead of the "new name" parameter.<br>
<strong></strong><span class="erm-anchor" id="ref-rec-sn-era-7"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-sn-era-show7"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The command is a wrapper over the exported function <em class="erm-tone-purple erm-legacy-event">RedirectFile</em> from <em class="erm-legacy-file">era.dll</em>. In more detail, SN:R is nothing more than:
<pre class="erm-example"><code class="language-erm">!!SN:L^Era.dll^/?y1 Ay1/^RedirectFile^/?y2 Ey2/1/^old^/^new^;</code></pre>
All file substitutions are local, saved in game saves and canceled when exiting the game script (map).<br>
The game dumps unused resources, so most resources can be dynamically replaced while you play.<br>
If resource is used in the Hero Window, perform the substitution before the window opens (i.e. <a href="../../triggers/#ref-era-new-events-2-4">before resource caching</a>).<br>
Custom game backgrounds can also be implemented, allowing the player to switch themes during gameplay 
(must load save game for visual update).<br>
Specifying a template <em class="erm-legacy-file">*.mp3</em> For the "old name" parameter, the substitution will occur for all mp3 files at once.</div></details>

<div class="erm-paragraph"><u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!#SN:R^cgriff.def^/^croc.def^; make Griffons look like Rocs (combat model only)

!!SN:R^SNOW.MP3^/^my_snow.mp3^; replacing the native theme for the “Snow” surface with your own track</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-t"></span><span class="erm-tone-red"><strong>SN:T^name^/?z#/#1/?$1.../#7/?$7</strong></span><br>
Allows you to get string translations by keys (arbitrary unique string identifiers).<br>
JSON files store “Key - Value” pairs, where the value is the translation text with optional parameters.
</div><pre>	(name) – key name
	z# – <em>z</em>-variable to get the result
	#1 – name of parameter 1
	$1 – value of parameter 1
	...
	...
	#7 – name of parameter 7
	$7 – value of parameter 7</pre>
<strong></strong><span class="erm-anchor" id="ref-rec-sn-era-8"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-sn-era-show8"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!OW:R-1/6/?y1; y1 = amount of gold the player has
!!SN:T^test.gold_amount_report^/?z2/^gold^/y1; 
!!IF:M^%Z2^; will show "You have 12850 gold left. Not bad!"</code></pre>
My test.json:<blockquote class="erm-tone-quote erm-note"><pre class="erm-legacy-code">{
  "test.gold_amount_report": "You have @gold@ gold left. Not bad!"
}</pre></blockquote></div></details>
<div class="erm-tone-quote erm-note erm-paragraph">See also: <a href="../../tables/text-resources/#ref-cont-json">Excerpt from ERA change history using json files</a>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-x"></span><span class="erm-anchor" id="command-xvalues"></span><span class="erm-tone-red"><strong>SN:X</strong></span><br>
Access new event options</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>X</strong></td>
<td>up to 16 parameters</td>
<td>…</td>
</tr></table></div><br>
New ERA events and events added by modules need to be able to communicate with scripts. 
This capability is provided by the command, which acts as a value store. The type of values ​​is determined by the way you work with them. 
So, you can set slot 0 to the value 5, and then get it to real <em>e</em>-variable. 
Since the work occurs at the machine level, then <em>e</em>- the variable will not be 5 at all, but undefined garbage. 
If a string variable (text) is received, the command treats the value in the slot as an address. Therefore, <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!SN</span>:X0; <span class="erm-tone-purple erm-legacy-strong">!!SN</span>:X?z1;</strong> will lead to departure 
because There is no string at address 0.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!SN:Xz1; write the address of the string variable z1 into the 1st parameter
!!SN:X?y1; receive in y1 address z1</code></pre>
Because in ERA, the variables x1..x16 are available for any triggers, SN:X parameters are x1..x16.<br>
<em class="erm-strong">Note:</em> At the moment, the SN:X command is obsolete, because Event parameters can be read/written by accessing directly x1..x16.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?(OnRecruitDlgRecalc);
!!VRx1:S777; = !!SN:X777;
!!VRy2:Sx1; = !!SN:X?y2;
!!VRy3:Cx1/x2; = !!SN:X?y3/?y4;</code></pre>
It is advisable to use the X command only for rarely required operations such as low-level type conversion or obtaining addresses...
<pre class="erm-example"><code class="language-erm">!!SN:X?y1 Xs^my text^ X?y2 Xy1; get in y2 the address of a named variable
Description of each command separately:
 » X?y1;		save the value of the 1st trigger parameter
 » Xs^my text^;	pass to x1 the address of the named string
 » X?y2;		get the address of a named variable
 » Xy1;			return the value of the 1st trigger parameter</code></pre>

<hr>
<h3><span class="erm-anchor" id="ref-rec-sn-era-m"></span><span class="erm-anchor" id="command-m-m-m-index-m-address-index"></span><span class="erm-anchor" id="command-m-id-size-type-storage-result"></span><span class="erm-anchor" id="command-m-id-size-type-storage-address-v-id-index-values"></span>Working with additional memory</h3>
<span class="erm-tone-red"><strong>SN:M…</strong></span>
<div class="erm-paragraph">ERM variables are static and limited in number. 
Staticity leads to the inability to organize dynamic data structures (for example, lists), 
which require functions for allocating and freeing memory, 
and the limited number leads to the need for strict accounting of indices without the possibility of going beyond their limits. 
Moreover, ERM strings in the form <em>z</em>-variables occupy exactly 512 bytes each, regardless of the size of their contents. 
ERA provides the programmer with up to 2 billion slots for arrays of new variables (numeric or string). 
The size of arrays can be changed using ERM. 
Since working with dynamic structures involves automatic allocation of slot numbers, 
then such a possibility exists. Slots with positive indices belong to the user, 
and with negative ones they are used for automatic memory allocation.<br>
<em class="erm-strong">Note:</em> SN:M commands do not support working with variables with indirect references...
<pre class="erm-example"><code class="language-erm">!!SN:My1/y2/xy3; will cause an EPM error

Safe way:
!!VRy4:Sxy3;
!!SN:My1/y2/y4;</code></pre></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-m1"></span><span class="erm-tone-red"><strong>M#</strong></span><br>
Removing a memory slot</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>M</strong></td>
<td>slot number starting from 0</td>
</tr></table></div><br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!SN:M5; remove 6th slot</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-m2"></span><span class="erm-tone-red"><strong>M#1/$2</strong></span><br>
Set/get slot size<br>
(Slot size is the number of elements in the array)</div>
<pre>        #1 – slot number
        $2 – number of elements</pre>
<div class="erm-paragraph">The command returns -1 if the slot does not exist.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!SN:M2/5; set the number of elements in slot 2 to 5.
!!SN:My1/?y2; get slot size y1 into variable y2.</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-m3"></span><span class="erm-tone-red"><strong>M#1/#2/$3</strong></span><br>
Working with slot element values<br>
</div><pre>        #1 – slot number
        #2 – element number, starting from 0
        $3 – value</pre>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!SN:M1/3; slot size 1 = 3 elements
!!SN:M1/0/111 M1/1/222 M1/2/333; contents of slot 1: 111, 222, 333
!!SN:M1/1/?y5; y5 - contents of the 1st element of slot 1
!!IF:M^%Y5^; will show: "222"</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-m4"></span><span class="erm-tone-red"><strong>M#1/?#2/#3</strong></span><br>
Getting the address of a slot element<br>
</div><pre>        #1 - slot number
        #2 - element address (receive only)
        #3 - element number</pre>
<div class="erm-paragraph"><strong><u>Comments</u>:</strong> If you delete a slot or change its size, the address will become invalid!<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-sn-era-9"></span><details class="erm-comment"><summary>Examples (<span class="erm-anchor" id="ref-rec-sn-era-show9"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!SN:M1/?y1/2; y1 contains the address of the 2nd element of slot 1</code></pre>
Here is another example when you need to copy a string value from an array to an array directly.<br>
As mentioned earlier, all ERA commands receive parameters in the form of 4-byte numbers. For strings, this is usually the address of the first character. When we write z1, the command receives the address of this variable. 
When a string value is ^text^, the string is first stored in a temporary buffer, then its address is passed to the command, after which the buffer is freed.
<pre class="erm-example"><code class="language-erm">!!SN:M(src array)/?y1/(src index); writes to y1 the address of the first character of the string in the specified array
!!SN:M(dst array)/(dst index)/y1; sets a new value for an array element (the address of the string is passed to the command)
; ERA commands that accept strings also digest pchar addresses equally well</code></pre>
Thus, long strings (&gt;512 bytes) can be copied among themselves and used as a buffer for accumulation:
<pre class="erm-example"><code class="language-erm">!!SN:M../../d&amp;^ string concatenation^;</code></pre></div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-m5"></span><span class="erm-tone-red"><strong>M#1/#2/#3/#4</strong></span><br>
Creating a new slot<br>
</div><pre>
        #1 – slot number: “-1” to automatically allocate a free number and place it in v1
        #2 – number of elements in the slot
        #3 – element type: 0 (number) and 1 (string)
        #4 – whether to remember the values in saved files:
	= 0 (no, when loading the game the contents of the elements will be random garbage)
	= 1 (yes, the contents should be saved as is)</pre>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong> the old contents of the slot (if any) are destroyed.<br>
If the values in saves are not remembered (#4=0), then file space is saved and saving speed increases.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!SN:M0/4/1/1; allocate an array of 4 lines in slot 0. Save their contents when loading
!!SN:M0/2/^hello^; set the value of the 2nd line of slot 0
!!SN:M0/3/^world^; set the value of the 3rd line of slot 0
!!SN:M0/2/?z1 M0/3/?z2; get the values of the 2nd and third rows in z1, z2
!!IF:M^%Z1 %Z2^; will display "hello world"
!!SN:M0; remove slot 0
!!SN:M-1/0/0/0; allocate an empty slot for a temporary array of numbers
!!VRy1:S1 R6; generated a random number 1..7
!!SN:Mv1/y1; set the size of the new slot to this number
!!VRy1:-1; y1 - index of the last element in the slot
!!SN:Mv1/y1/777; the value of the last element of the slot is 777</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-k1"></span><span class="erm-tone-red"><strong>SN:K…</strong></span><br>
The SN:K commands work both with strings (text variables) and with their addresses in memory. 
This makes SN:K lower-level and more functional than similar commands in some actions <a href="../vr/#ref-rec-vr-m">VR:M#</a>.</div>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>K#1/?#2</strong></span><br>
Getting the size of a string (including spaces)</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>K</strong></td>
<td>line or its address</td>
<td><strong>/</strong>?</td>
<td>line size</td>
</tr></table></div><br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!VRz1:S^123 4^;
!!SN:Kz1/?y1; y1 = 5</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-k2"></span><span class="erm-tone-red"><strong>K#1/#2/$3</strong></span><br>
Working with String Characters</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>K</strong></td>
<td>line or its address</td>
<td><strong>/</strong></td>
<td>character number, starting from 0</td>
<td><strong>/</strong>[?]</td>
<td>symbol meaning</td>
</tr></table></div><br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!VRz1:S^XYZ^;
!!SN:Kz1/2/^L^; set 2nd character of line z1 to "L"
!!IF:M^%Z1^; will show us "XYL"</code></pre>
<em class="erm-strong">Note:</em> The syntax for getting a character in the $3 parameter does not work correctly.

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-k3"></span><span class="erm-tone-red"><strong>K#1/#2/#3/#4</strong></span><br>
Copying a memory block</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>K</strong></td>
<td>number of bytes</td>
<td><strong>/</strong></td>
<td>source address</td>
<td><strong>/</strong></td>
<td>receiver address</td>
<td><strong>/</strong></td>
<td>arbitrary value</td>
</tr></table></div><br>
<strong><u>Comment</u>:</strong> Numeric and string variables are supported.
<div class="erm-paragraph"><u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!SN:K12/?v1/?y1/1; copy 12 bytes (3 numbers of 4 bytes) from v1, v2, v3 to y1, y2, y3
!!VRv1:C1/2/3; v1 = 1, v2 = 2, v3 = 3
!!SN:K12/?y1/?v1/1; restore values v1, v2, v3</code></pre>
</div>
<hr>
<h3><span class="erm-anchor" id="ref-rec-sn-era-w"></span><span class="erm-anchor" id="command-w-w-key-w-key"></span>Working with associative memory</h3>
<span class="erm-tone-red"><strong>SN:W[…]</strong></span>
<div class="erm-paragraph">Very often it is necessary to create variables for specific heroes, specific map cells or objects at the request of the player.<br>
Allocating static memory for all heroes, all objects, or all cells has significant disadvantages: 
excessive memory consumption, slow game saving process, limited size.<br>
All these problems are solved by working with a global store of Key-Value pairs, reminiscent of ini files.<br>
Each key can correspond to 1 numeric and 1 string value.<br>
Values 0/empty are not written to saves, saving space.<br>
When requesting a non-existent key, 0/empty will be returned, depending on the type of receiver.<br>
<u>Example</u>:<br>
Let's create a key and write values of different types into it, but they will not intersect:
<pre class="erm-example"><code class="language-erm">!!SN:W^name^/y1 W^name^/z1;
!!SN:W^name^/?y2 W^name^/?z2; y2=y1, z2=z1</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-w1"></span><span class="erm-tone-red"><strong>W</strong></span><br>
Complete clearing of associative memory</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-w2"></span><span class="erm-tone-red"><strong>W^name^/$</strong></span><br>
Working with a variable</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>W</strong></td>
<td>variable name</td>
<td><strong>/</strong>[?]</td>
<td>variable value</td>
</tr></table></div><br>
<u>Example</u>:<br>
Let right-clicking on an adventure map display the number of clicks on that cell.<br>
In fact, this is an analogue of the command <a href="../po/#ref-rec-po">!!PO</a> upon request.
<pre class="erm-example"><code class="language-erm">!?CM0;
!!CM:R0 P?y1/?y2/?y3;
!!SN:W^Map%Y1/%Y2/%Y3^/?y4;
!!VRy4:+1;
!!IF:L^{~gold}You clicked this cell %Y4 times{~}^;
!!SN:W^Map%Y1/%Y2/%Y3^/y4;</code></pre>
<em class="erm-strong">Note:</em> You cannot use the percent symbol (%) inside %I().

<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-w3"></span><span class="erm-tone-red"><strong>W^name^</strong></span><br>
Deleting a variable
</div>
<hr>

</div>
</div>
</section>
:::

## Description API ERA {#ref-era-api}

:::erm
<section class="erm-reference" lang="en">
<div>


<span class="erm-anchor" id="ref-era-api-text"></span><div>
<span class="erm-anchor" id="ref-era-api-up"></span>

<h3 class="erm-align-center">Description of exported ERA functions</h3>
<div class="erm-paragraph">The basic functions and procedures of ERA will be described below. More complete technical documentation is located in the catalog <em class="erm-legacy-file">Game\Tools\Era\</em>, or you can ask specific questions directly at <a href="http://wforum.heroes35.net/forumdisplay.php?fid=182">official forum</a> project.</div>
<ul>
<li><span class="erm-anchor" id="ref-era-api-hook"></span><code>PROCEDURE <span class="erm-anchor" id="ref-era-api-red"></span><span class="erm-tone-red"><strong>Hook</strong></span> (HandlerAddr: POINTER; HookType: INTEGER; PatchSize: INTEGER; CodeAddr: POINTER); STDCALL;</code><br>
A universal function for installing software interceptors in code. The most convenient and automated mode: <code>HookType = HOOKTYPE_BRIDGE</code>, 
in which a low-level adapter to a high-level function will be generated automatically.<br>
<u>High-level function example</u>:
<span class="erm-anchor" id="ref-era-api-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note"><div class="erm-paragraph"><code>PROCEDURE Hook_X (Context: PHookHandlerArgs): LONGBOOL; STDCALL;</code></div>
The function returns a flag indicating that the default code overwritten by the interceptor should be executed. This code must not contain jumps, but can contain any commands for working with the stack. 
A high-level hook can modify registers by accessing the THookHandlerArgs structure. Through it, the return address to the original code can also be changed.</div></li>
<li><span class="erm-anchor" id="ref-era-api-apihook"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ApiHook</strong></span>; STDCALL;</code><br>
Determines the minimum patch size independently, as opposed to the function <em class="erm-tone-purple erm-legacy-event">Hook</em>.<br>
And <em class="erm-tone-purple erm-legacy-event">ApiHook</em>, and <em class="erm-tone-purple erm-legacy-event">Hook</em> functions return the new address of the erased code in bridge mode (<code>BRIDGE</code>), 
which allows you to also call original functions, bypassing installed interceptors.</li>
<li><span class="erm-anchor" id="ref-era-api-clall"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ClearAllIniCache</strong></span>; STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-clini"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ClearIniCache</strong></span>; STDCALL;</code><br>
Completely clears the cache of ini files loaded into memory.</li>
<li><span class="erm-anchor" id="ref-era-api-execerm"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ExecErmCmd</strong></span> (CmdStr: PCHAR); STDCALL;</code><br>
Executes the specified single ERM command in the format <span class="erm-anchor" id="ref-era-api-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">XX</span>:...</strong> no conditions.<br>
<u>Example</u>:
<div class="erm-tone-quote erm-legacy-code erm-note"><div class="erm-paragraph"><code>ExecErmCmd('IF:L^Hello, World!^;');</code></div></div></li>
<li><span class="erm-anchor" id="ref-era-api-exterm"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ExtractErm</strong></span>; STDCALL;</code><br>
Exports all standard scripts (00..99) to a folder <em class="erm-legacy-file">Data\s\ExtractedScripts</em>.</li>
<li><span class="erm-anchor" id="ref-era-api-error"></span><code>PROCEDURE <span class="erm-tone-red"><strong>FatalError</strong></span> (Err: PCHAR); STDCALL;</code><br>
Displays a critical error message and silently terminates the current process.</li>
<li><span class="erm-anchor" id="ref-era-api-firevnt"></span><code>PROCEDURE <span class="erm-tone-red"><strong>FireEvent</strong></span> (EventName: PCHAR; {n} EventData: POINTER; DataSize: INTEGER); STDCALL;</code><br>
Generates an event and notifies all subscribed handlers about it. <code>EventData</code> points to the event parameter block (if any), and <code>DataSize</code> determines the size of this block. 
Through this mechanism, you can pass valuable information about the event to handlers.</li>
<li><span class="erm-anchor" id="ref-era-api-firerm"></span><code>PROCEDURE <span class="erm-tone-red"><strong>FireErmEvent</strong></span> (EventID: INTEGER); STDCALL;</code><br>
Generates a new ERM event by calling the ERM function with the specified number. This call does not save negative <em>z</em>-variables.<br>
ERA requires plugin creators to retain previous event settings (<a href="./#ref-rec-sn-era-x">SN:X</a>) through the function <a href="./#ref-era-api-savent">SaveEventParams</a> BEFORE the call <em class="erm-tone-purple erm-legacy-event">FireErmEvent</em> and 
restore via function <a href="./#ref-era-api-resent">RestoreEventParams</a> AFTER the call, so that each new event has its own set <a href="./#ref-rec-sn-era-x">SN:X</a> parameters.</li>
<li><span class="erm-anchor" id="ref-era-api-txtunload"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ForceTxtUnload</strong></span> (Name: PCHAR); STDCALL;</code><br>
Forces the game to unload the txt table from memory.<br>
<span class="erm-anchor" id="ref-era-api-bold"></span><em class="erm-strong">Note:</em> use with caution!</li>
<li><span class="erm-anchor" id="ref-era-api-getbtn"></span><code>FUNCTION <span class="erm-tone-red"><strong>GetButtonID</strong></span> (ButtonName: PCHAR): INTEGER; STDCALL;</code><br>
The function makes it possible to obtain a unique identifier (ID) of a custom button by the specified name in the game dialog. If such a name has not been registered, the function will return -1.<br>
<u></u><span class="erm-anchor" id="ref-era-api-9"></span><details class="erm-comment"><summary>More details (<span class="erm-anchor" id="ref-era-api-show9"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
In ERA it has become possible to have custom buttons in most game dialogs. Custom buttons are described in <em class="erm-legacy-file">*.btn</em> files that are loaded from the folder <em class="erm-legacy-file">Data\Buttons</em> at the start of the game. Everyone <em class="erm-legacy-file">*.btn</em> the file (pure txt format) contains lines (one per button) in the following format:
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-api-n3"></span><strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Button screen</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Unique button name</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">DEF buttons</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">X</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Y</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Width</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Height</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Long description</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Short description</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Hotkey code</strong></div>
, where <code>[Button screen]</code> can take one of the following values:
<span class="erm-anchor" id="ref-era-api-t0"></span><ul class="erm-margin-top-zero">
<li><code>Advmap</code> (for adventure map)</li>
<li><code>Town</code> (for town)</li>
<li><code>Hero</code> (for hero screen)</li>
<li><code>Heroes</code> (for the hero meeting screen)</li>
<li><code>Battle</code> (for battle screen)</li>
<li><code>Dummy</code> (if the button is not used)</li></ul>
Each such configured button is automatically assigned its own unique ID.<br>
<u>Example</u>:
<div class="erm-tone-quote erm-legacy-code erm-note"><div class="erm-paragraph"><code>Hero;SecSkills.ScrollUp;ScrollUp.def;300;303;12;44;sss.scroll_up;sss.scroll_up;38</code></div></div>
</div></details></li>
<li><span class="erm-anchor" id="ref-era-api-getgame"></span><span class="erm-anchor" id="ref-era-api-state"></span><code>PROCEDURE <span class="erm-tone-red"><strong>GetGameState</strong></span> (VAR GameState: TGameState); STDCALL;</code><br>
Gets the current game state as a pair <a href="../../tables/dialog-types/#ref-form-gamestate" data-context="true">dialog identifiers</a>: main parent and current child (0 = no dialogs have been created yet).<br>
The function is useful for determining in which dialog a keystroke occurs.<br>
By default, the function ID of the current dialog will be placed in the variable v1.<br>
<u></u><span class="erm-anchor" id="ref-era-api-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-era-api-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?FU(OnKeyPressed)&amp;x1=81; "Q" key pressed
!!SN:F^GetGameState^/?y1; y1 - ID of the parent dialog, y2 - current (v1 will also receive the ID of the current dialog)
!!FU&amp;v1&lt;&gt;4662240:E;	way out if not a fight
!!VRx2:S1;		prohibition of standard reaction</code></pre>
<u>Explanation of the example</u>: <a href="./#ref-rec-sn-era-f">SN:F</a> calls an external function <em class="erm-tone-purple erm-legacy-event">GetGameState</em>. <strong>?y1</strong> means passing the address y1 in memory as a parameter (y1 takes 4 bytes, y2 also four).
And the function actually works with the address of an 8-byte structure consisting of two fields:<br>
- parent dialog (ID); falls on y1<br>
- child (current) dialog (ID); falls on y2<br>
If the current dialogue is the battle screen and the key is pressed <span class="erm-key">Q</span>, then cancel the click processing by setting the 2nd parameter of the event <a href="../../triggers/#ref-era-new-events-2-3">OnKeyPressed</a> at 1.</div></details></li>
<li><span class="erm-anchor" id="ref-era-api-getaddr"></span><code>FUNCTION <span class="erm-tone-red"><strong>GetRealAddr</strong></span> (Addr: POINTER): POINTER; STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-killproc"></span><code>PROCEDURE <span class="erm-tone-red"><strong>KillThisProcess</strong></span>; STDCALL;</code><br>
Silently kills the current process.</li>
<li><span class="erm-anchor" id="ref-era-api-loadimg"></span><code>FUNCTION <span class="erm-tone-red"><strong>LoadImageAsPcx16</strong></span> (FilePath, PcxName: PCHAR; Width, Height, MaxWidth, MaxHeight, ResizeAlg: INTEGER): {OU} Heroes.PPcx16Item; STDCALL;</code><br>
The function makes it possible to load any PNG/JPG/BMP-files as game files PCX-Images suitable for replacing in-game images or for displaying in dialogs. It supports size limit (0 - no limit) and .
<span class="erm-anchor" id="ref-era-api-10"></span><details class="erm-comment"><summary>scaling algorithms</summary><div class="erm-comment-body">
<blockquote class="erm-margin-top-zero erm-note"><span class="erm-anchor" id="ref-era-api-step"></span><div class="erm-indent">RESIZE_ALG_NO_RESIZE = 0; // Do not apply any restrictions and do not change the image size<br>
RESIZE_ALG_STRETCH = 1; // Set the width and height of the image to the width and height of the window, scale disproportionately<br>
RESIZE_ALG_CONTAIN = 2; // Resize the image so that at least one of its sizes is the same as the window size, and the other is smaller than or equal to the window size<br>
RESIZE_ALG_DOWNSCALE = 3; // Only compress images proportionally, do not stretch small images<br>
RESIZE_ALG_UPSCALE = 4; // Only scale small images proportionally, leave large images as is<br>
RESIZE_ALG_COVER = 5; // NOT IMPLEMENTED<br>
RESIZE_ALG_FILL = 6; // Use the image as a tile to fill the entire window<br>

Use ALG_STRETCH to set fixed sizes, ALG_FILL to fill the window with tiles, and ALG_DOWNSCALE for custom dialogs to shrink large images proportionally.</div></blockquote></div></details><br>
<u></u><span class="erm-anchor" id="ref-era-api-2"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-era-api-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Let's take our JPG image for the DL dialogue.
<pre class="erm-example"><code class="language-erm">!!SN:F^LoadImageAsPcx16^/^Data\Pics\test.jpg^/^rW3.cust.pcx^/400/300/0/0/1;
!!VRy1:Sv1; y1 - image resource
... call the DL dialog where rW3 is used.cust.pcx
!!SN:F^DecRef^/y1; free image resource</code></pre></div></details></li>
<li><span class="erm-anchor" id="ref-era-api-loadtxt"></span><code>FUNCTION <span class="erm-tone-red"><strong>LoadTxt</strong></span> (Name: PCHAR): {n} PTxtFile; STDCALL;</code><br>
Loads a txt table using game tools.</li>
<li><span class="erm-anchor" id="ref-era-api-color"></span><code>PROCEDURE <span class="erm-tone-red"><strong>NameColor</strong></span> (Color32: INTEGER; Name: PCHAR); STDCALL;</code><br>
The function must be called in an event <em class="erm-tone-purple erm-legacy-event">OnAfterCreateWindow</em> and is designed to create or redefine color names for <a href="../if/#ref-era-color-text">color text ERA</a>.<br>
<u>Example</u>:
<div class="erm-tone-quote erm-legacy-code erm-note"><div class="erm-paragraph"><code>NameColor($000000, 'bl'); now you can use {~bl}...{~} for black text</code></div></div></li>
<li><span class="erm-anchor" id="ref-era-api-pexist"></span><code>FUNCTION <span class="erm-tone-red"><strong>PatchExists</strong></span> (Name: STRING): BOOLEAN; STDCALL;</code><br>
<code>FUNCTION <span class="erm-tone-red"><strong>PluginExists</strong></span> (Name: STRING): BOOLEAN; STDCALL;</code><br>
Check for the presence of a patch/plugin in ERA.<br>
<u></u><span class="erm-anchor" id="ref-era-api-3"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-era-api-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!SN:F^PatchExists^/^fix erm tr r roads.bin^;
!!IF&amp;v1=0:M^The patch that fixes the bug of the TR:R command was not found!^;</code></pre></div></details></li>
<li><span class="erm-anchor" id="ref-era-api-readsavsec"></span><code>FUNCTION <span class="erm-tone-red"><strong>ReadSavegameSection</strong></span> (DataSize: INTEGER; {n} Dest: POINTER; SectionName: PCHAR): INTEGER; STDCALL;</code><br>
The function must be called in an event <a href="../../triggers/#ref-era-new-events-2-2">OnSavegameRead</a> and serves to read user data from a named file section. 
Consecutive readings from the same section are allowed. Returns the number of bytes read.</li>
<li><span class="erm-anchor" id="ref-era-api-wrtsavsec"></span><code>PROCEDURE <span class="erm-tone-red"><strong>WriteSavegameSection</strong></span> (DataSize: INTEGER; {n} Data: POINTER; SectionName: PCHAR); STDCALL;</code><br>
The function must be called in an event <a href="../../triggers/#ref-era-new-events-2-1">OnSavegameWrite</a> and serves to write user data to a named file section. 
Consecutive recording to the same section is allowed.</li>
<li><span class="erm-anchor" id="ref-era-api-readstr"></span><code>FUNCTION <span class="erm-tone-red"><strong>ReadStrFromIni</strong></span> (Key, SectionName, FilePath, Res: PCHAR): BOOLEAN; STDCALL;</code><br>
Reads a value from the specified ini file into a buffer <code>Res</code>. On the first reading, the ini file is analyzed, cached, and further queries lead to selections from the associative array, 
which occur very quickly and without accessing the hard drive.</li>
<li><span class="erm-anchor" id="ref-era-api-wrtstr"></span><code>FUNCTION <span class="erm-tone-red"><strong>WriteStrToIni</strong></span> (Key, Value, SectionName, FilePath: PCHAR): BOOLEAN; STDCALL;</code><br>
Writes the value to the ini file. Each function call writes the entire file to disk.</li>
<li><span class="erm-anchor" id="ref-era-api-recall"></span><code>FUNCTION <span class="erm-tone-red"><strong>RecallAPI</strong></span> (Context: PHookHandlerArgs; NumArgs: INTEGER): INTEGER; STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-redir"></span><code>PROCEDURE <span class="erm-tone-red"><strong>RedirectFile</strong></span> (OldFileName, NewFileName: PCHAR); STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-glbredir"></span><code>PROCEDURE <span class="erm-tone-red"><strong>GlobalRedirectFile</strong></span> (OldFileName, NewFileName: PCHAR); STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-redirmem"></span><code>PROCEDURE <span class="erm-tone-red"><strong>RedirectMemoryBlock</strong></span> (OldAddr: POINTER; BlockSize: INTEGER; NewAddr: POINTER); STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-regist"></span><code>PROCEDURE <span class="erm-tone-red"><strong>RegisterHandler</strong></span> (Handler: TEventHandler; EventName: PCHAR); STDCALL;</code><br>
Registers a handler for the specified event. Handlers are called in the order in which they are registered. The list of events can be viewed in the file <em class="erm-legacy-file">Tools\Era\SDK\triggers.txt</em>. 
Two key events in which the code for initializing modules and registering handlers should be located: <em class="erm-tone-purple erm-legacy-event">OnBeforeWoG</em>, <em class="erm-tone-purple erm-legacy-event">OnAfterWoG</em>.</li>
<li><span class="erm-anchor" id="ref-era-api-reload"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ReloadErm</strong></span>; STDCALL;</code><br>
Causes a complete reboot and recompilation of all erm/ert scripts (00..99). Same as pressing a key <span class="erm-key">F12</span>.</li>
<li><span class="erm-anchor" id="ref-era-api-savent"></span><code>PROCEDURE <span class="erm-tone-red"><strong>SaveEventParams</strong></span>; STDCALL;</code><br>
Saves <a href="./#ref-rec-sn-era-x">SN:X</a> event parameters in the stack structure.</li>
<li><span class="erm-anchor" id="ref-era-api-resent"></span><code>PROCEDURE <span class="erm-tone-red"><strong>RestoreEventParams</strong></span>; STDCALL;</code><br>
Restores saved files <a href="./#ref-rec-sn-era-x">SN:X</a> parameters from the stack structure.</li>
<li><span class="erm-anchor" id="ref-era-api-savini"></span><code>FUNCTION <span class="erm-tone-red"><strong>SaveIni</strong></span> (FilePath: PCHAR): BOOLEAN; STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-wrtcode"></span><code>PROCEDURE <span class="erm-tone-red"><strong>WriteAtCode</strong></span> (Count: INTEGER; Src, Dst: POINTER); STDCALL;</code><br>
Performs a secure copy of a block of memory from a source to a destination.</li>
</ul>












</div>
</div>
</section>
:::

## Notes on modern ERA versions {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!SN:subcommands;</code></div>
<div class="erm-paragraph">In the table, <code>$</code> denotes a read/write parameter, <code>#</code> an input, and <code>?$</code> an output. Individual commands define their identifiers and ranges.</div>
<hr>
<div class="erm-paragraph">P plays a sound named by z. S reads/replaces the filename in sound-event context. Legacy limits: 8.3 names, up to 10 seconds; not every game sound fires the SN trigger.</div>
<hr>
<div class="erm-paragraph">L loads a DLL and returns its handle; 0 means failure. A resolves an exported function address. Loading is not merely an existence check: use IsDllLoaded for that.</div>
<hr>
<div class="erm-paragraph">Calls a native function. Conventions: 0 Pascal, 1 Cdecl/Stdcall, 2 Thiscall, 3 Fastcall. Add 4 for a float result in e1; ordinary results go to v1. Arguments must exactly match the native signature.</div>
<hr>
<div class="erm-paragraph">Resolves/caches an export by name using Stdcall; supports ERA, kernel32 and user32. A leading dot requests a float result. Since ERA 3.9.29, plugin:function selects another module; omitted extensions try .era and .dll. Do not keep persistent data in v1 across calls.</div>
<hr>
<div class="erm-paragraph">Low-level buffer: an integer first argument is an address without ?, or its variable address with ?. A string always means its first-character address. Two arguments obtain the address; three (d in the second) read/write a value. Validate buffer size and lifetime.</div>
<hr>
<div class="erm-paragraph">Looks up a named constant at runtime. Check exists before using the value; useful for symbolic JSON settings.</div>
<hr>
<div class="erm-paragraph">D redraws the active supported hero/town/meeting/map window. O replaces object-part coordinates with its entrance; multiple entrances follow object selection rules. Modern ERA fixes old hero/boat hiding, but O does not support named globals.</div>
<hr>
<div class="erm-paragraph">G is a deprecated in-handler jump; never cross structured-block boundaries. Q stops the event chain, but modern _Quit handlers still run. Q is deprecated because it can skip other handlers and break libraries.</div>
<hr>
<div class="erm-paragraph">Creature text: 0 singular/1 plural/2 description. Skills: 0 name/1 basic/2 advanced/3 expert description. Support text and GET; prefix the category with - to restore defaults.</div>
<hr>
<div class="erm-paragraph">Object hints: exact coordinates outrank type/subtype, then type/-1, -1/subtype, -1/-1. Modern ERA does not expose hints for tiles hidden from the current player.</div>
<hr>
<div class="erm-paragraph">Specialty: hero and text kind 0 name/1 short/2 full (the game uses full). Artifact text uses 0 for name and 1 for description; use SPELL_TEXT_* constants for spells. Spell text includes name, short name, unskilled/basic/advanced/expert descriptions, and sound.</div>
<hr>
<div class="erm-paragraph">I interpolates ERM variables in a string. T retrieves localized JSON text with @name@ substitutions; a missing key returns the key text. Keep these interpolation mechanisms distinct.</div>
<hr>
<div class="erm-paragraph">Redirects a resource. An empty replacement clears it. Redirections are saved with the map and cleared on exit; cached resources may require reopening a window. PNG frames use def:group_frame.png.</div>
<hr>
<div class="erm-paragraph">Delete array; size (GET=-1 if absent); read/write an item; obtain its address. Negative item indices count from the end. Addresses become invalid after resize/deletion.</div>
<hr>
<div class="erm-paragraph">Create: id=-1 automatic, type 0 integers/1 strings, storage -1 trigger-local/0 temporary/1 saved. Modern five-argument form returns the ID explicitly without changing v1. Recreating an existing ID destroys its contents.</div>
<hr>
<div class="erm-paragraph">M with 4/5 arguments and GET among size/type/storage reads metadata; SET values there are ignored. V accesses several consecutive items. Store array IDs, not transient array addresses.</div>
<hr>
<div class="erm-paragraph">String length; character at zero-based index; memory-block copy. Modern ERA returns a character code to an integer destination. Copying does not validate destination capacity for you.</div>
<hr>
<div class="erm-paragraph">No arguments clear the entire associative store; a key alone deletes it; key/value reads or writes. Each key has independent integer/string values; missing values read 0/empty. Prefix mod keys and delete selectively.</div>
<hr>
<div class="erm-paragraph">Low-level view of x1..x16. Passing a string stores its address; reading a string interprets the number as an address. Use x directly for ordinary event parameters; treating arbitrary numbers as pointers can crash.</div>
<hr>
<div class="erm-paragraph">SN combines legacy sound commands and ERA extensions. Check version differences before applying legacy Help limits: syntax, local arrays, strings and generators have changed.</div></section>
:::

## Related reference {#related}

[SN:E](../../examples/sn-e/) · [SN:F](../../examples/sn-f/) · [Framework](../../framework/) · [UN:C](../../un-c/)



## Related commands and tables {#reference-links}

[Sound playback (SN)](../../triggers/sn/) · [Game event sounds](../../tables/sounds/) · [ERM debugging and compatibility](../../compatibility/) · [MP3 music (MP)](../mp/) · [Creature recruitment (RD)](../rd/) · [General game operations (UN)](../un/#command-q-1-r) · [Conditions and branches](../../conditions/) · [Loops: re, br, co, and DO](../../loops/) · [Creature table](../../tables/creatures/) · [General game operations (UN)](../un/#command-g0-skill-text-z-g1-monster-text-z-g2-hero-field-value) · [Game object table](../../tables/objects/) · [Map objects (OB)](../ob/#command-b-h) · [Object-type hints (HT)](../ht/) · [Secondary skills](../../tables/secondary-skills/) · [Hero table](../../tables/heroes/) · [Function calls (FU)](../fu/#command-e) · [ERM triggers and events](../../triggers/) · [Text resources: ERT, ERS and JSON](../../tables/text-resources/) · [Variables and expressions (VR)](../vr/#command-mask-or-xmask-sd-bits-sd-bits) · [Map-cell data (PO)](../po/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.30, +](../../compatibility/#era3-v-3-9-30-l7) — Added the following exported functions to era.dll: (* Returns current language/locale string. The buffer must be freed by calling Era.MemFree *) function GetLanguage: {O} pchar; stdcall; (* Changes code page (encoding) u…
- [ERA 3.9.29, +](../../compatibility/#era3-v-3-9-29-l21) — Extended SN:F syntax with possibility to call arbitrary plugin or dll functions: SN:F^plugin_name:function_name^/... If plugin name is provided without a dot, ".era" and ".dll" are tested one by one. Otherwise the name i…
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l446) — Extended SN:K(str)/(ind)/&#91;?&#93;(strchar or char code) syntax. If result is integer variable, char code is returned instead.
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l539) — Added the following exported functions to era.dll: (* Compiles single ERM command without !! prefix and conditions and saves its compiled code in persisted memory storage. Returns non-nil opaque pointer on success and ni…
- [ERA 3.9.15, *](../../compatibility/#era3-v-3-9-15-l581) — Modified some exported function signatures. Many of them now use TInt32Bool type (32 bit 0 or 1) instead of boolean for better compatiblity with ERM. type TIsCommanderIdFunc = function (MonId: integer): TInt32Bool stdcal…
- [ERA 3.9.13, +](../../compatibility/#era3-v-3-9-13-l691) — Added experimental (may be subject of removal) exported function to quit from any dialog to main game menu. // Exits adventure manager dialogs and/or all subdialogs and immediately returns to game menu screen by raising …
- [ERA 3.9.13, +](../../compatibility/#era3-v-3-9-13-l709) — Commanders without UNDEAD flag are also handled by Elixir of Life now. Plugins may override IsElixirOfLifeStack exported function to implement other behavior.
- [ERA 3.9.13, +](../../compatibility/#era3-v-3-9-13-l712) — Added exported functions to era.dll, more steps on moving WoG hard-coded mechanics into replacable API format. API setters return previously set implementation functions or null. type TIsCommanderIdFunc = function (MonId…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l727) — Implemented advanced ERM memory synchronization means in network games. Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for further synchronization. Syntax: !!IP:M^var_name_1^/^var_name_2^/...; !!IP:M…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l875) — Added the following exported functions to era.dll: // Allocates new function ID and binds it to specified name if name is free, otherwise returns already binded ID. // This function can be used to implement custom ERM ev…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l934) — Exported function 'SetRegenerationAbility' in era.dll for plugins only (like new creature plugins) and/or global map-mods. All plugins should use this function to turn on/off regeneration ability instead of manually hook…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l944) — Exported function 'SetStdRegenerationEffect' in era.dll for plugins only (like new creature plugins) and/or global map-mods. The function changes parameters of standard regeneration effect. // Level7Percents is 0..100 pe…
- [ERA 3.9.9, +](../../compatibility/#era3-v-3-9-9-l971) — Added the following functions to Era Erm Framework: !?FU(Hash32); ; Calculates int32 digest (hash sum) of arbitrary sequence of bytes. !#VA(data:x); Pointer to data first byte or string !#VA(dataLen:x); Length of data in…
- [ERA 3.9.9, +](../../compatibility/#era3-v-3-9-9-l1014) — Added the following exported function to era.dll: // Calculates data hash sum of arbitrary length function Hash32 (Data: pchar; DataSize: integer): integer; stdcall; // Generates new random value using SplitMix32 algorit…
- [ERA 3.9.6, +](../../compatibility/#era3-v-3-9-6-l1066) — Added new exported function to era.dll: // Changes current language code in memory without altering ini files or reloading already loaded data SetLanguage (NewLanguage: pchar): TDwordBool; stdcall; // Reloads all json fi…
- [ERA 3.9.6, -](../../compatibility/#era3-v-3-9-6-l1073) — Fixed "SN:H" command and "OnAdvMapTileHint" event behavior. No hint is applied and no event is generated if tile is not visible by current player.
- [ERA 3.9.3, +](../../compatibility/#era3-v-3-9-3-l1189) — Implemented easy-to-use means to generate remote Era events with arbitrary data. The whole process of data compressing/decompressing/splitting/joining is hidden from clients. Support for progress callbacks is implemented…
- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1288) — Added new exported functions to era.dll: - PcxPngExists (const PcxName: pchar): integer; stdcall; Tries to load PNG replacement for pcx file name and returns success flag (0 or 1).
- [ERA 3.9, +](../../compatibility/#era3-v-3-9-l1340) — Added support for separate DEF PNG frames redirections. Command template: SN:R^defname.def:groupIndex_frameIndex.png^/^new path to png, relative to root directory.png^. Prefer to use single backslashes as path separators…
- [ERA 3.8.8, +](../../compatibility/#era3-v-3-8-8-l1402) — Png def frames/pcx replacements honor def/pcx redirections (SN:R) from now.
- [All related entries](../../compatibility/#era3-changelog)
<!-- ERA3-GENERATED:END -->
