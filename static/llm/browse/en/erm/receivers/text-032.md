# ERA services, memory and sound (SN)

ID: erm.receivers.sn
URL: /en/erm/receivers/sn/
Part: 1/3
Source references: old-help:rec-sn.htm, old-help:rec-sn-era.htm, era-changelog:era-iii-changelog.txt, old-help:era-api.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.sn 1 -->
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
<li>Setting syntax (without modifier <em>"d"</em>) and receiving (<strong>?</strong>) values;</li>
<li>Variables <em>y+</em>, <em>v</em>, <em>w</em>, <em>x</em>, <em>z+</em>, <em>f..t</em>, <em>e</em>;</li>
<li>Global named variables of the form i^…^ (for numbers) and s^…^ (for strings);</li>
<li>String literals in the form ^...^ with support for specifiers %Y, %V, %W, %X, %Z, %I(...), %S(...), %T(...), %E with positive indices.</li>
</ul>
<div class="erm-paragraph">Also, it is worth noting that, unlike standard <em>z</em>-variables (up to 511 characters long), ERA string literals (^…^ or ^%S(…)^) can be up to 1 million long. characters.</div>
<div class="erm-paragraph">Moreover, for all commands new receivers ERA (<a href="./#ref-rec-sn-era">SN</a>/<a href="../mp/#ref-rec-mp-era">MP</a>/<a href="../rd/#ref-rec-rd">RD</a>) support implemented:
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
Initially, the command was created as an intermediate option for performing fast loops. 
Now it is preferable to use the link for these purposes <a href="../../conditions/#ref-rec-iee">!!if</a> / <a href="../../loops/#ref-rec-re">!!re</a>.</blockquote>
<div class="erm-paragraph">To perform transitions, command “shortcuts” (tags) are implemented, which are replaced with the serial number of the receiver inside the current trigger, 
in front of which they stand (counting starts from 0). All commands are included in the “counter” of commands <span class="erm-anchor" id="ref-rec-sn-era-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!XX</span></strong>-similar receivers. The labels themselves are not assigned a serial number, like a command inside a trigger.<br>
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
<li>^<a href="./#ref-rec-sn-era" title="The command is available on ERA3+">art</a>^</li>
<li>^<a href="./#ref-rec-sn-era" title="The command is available on ERA3+">spell</a>^</li></ul>
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
<strong><u>Comment</u>:</strong> the command is different from similar commands <a href="../ob/#ref-rec-ob-h">OB:H</a> and receiver <a href="../ht/#ref-rec-ht">HT</a> that does not require use <em>z</em>-variables.
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

<!-- llm:end erm.receivers.sn 1 -->

