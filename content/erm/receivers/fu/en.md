---
{"title":"Function calls (FU)","summary":"FU receiver: function calls, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Function calls (FU)"}
---

## Receiver FU {#ref-rec-fu}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-fu-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>FU</strong> (function)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-fu-red"></span><span class="erm-tone-red"><br>
!!FU#:XXXX;</span> 
- receiver functions – transfers control to the ERM code of the function.</strong><br>
         # = 1..30000</div>
<div class="erm-paragraph">Used to create a special section of code that can be accessed from multiple places and reused.<br>
The functions are called by the FU receiver. A trigger functions (<a href="../../triggers/fu/#ref-tr-fu">!?FU</a>) defines the beginning of the function code.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-fu-5"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-fu-show5"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you call a function with a statement, the function must be declared BEFORE the statement. For example, if you want 
call the FU100 function at the beginning of the map, you can put it as an instruction <span class="erm-anchor" id="ref-rec-fu-erm"></span><span class="erm-inline-code"><strong class="erm-tone-gold erm-legacy-strong">!#FU</strong>100:P;</span> 
but it will not work if the function has not been described previously. So the trigger function (and its code) should come first.
<pre class="erm-example"><code class="language-erm">ZVSE
!?FU100;
!!IF:M^This is function 100.^;
!#FU100:P;</code></pre>
The example above works fine, but if <span class="erm-inline-code"><strong class="erm-tone-gold erm-legacy-strong">!#FU</strong>100:P;</span> put first 
(right after ZVSE), it won't work. You will not receive an error message, but the function will not execute.<br>
You can use variables in the function receiver. So, you can, for example, use code like this: 
<span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!FU</strong>v10:P;</span> and a function with a number equal to the number written <em>now</em> in v10, 
will start working (if trigger of this function exists).<br>
<br>
<u>
</u><span class="erm-anchor" id="ref-rec-fu-1"></span><details class="erm-comment"><summary>Examples of functions (<span class="erm-anchor" id="ref-rec-fu-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<u>Example 1</u>
<pre class="erm-example"><code class="language-erm">!?FU1;
!!IF:M^Here we are at the beginning. %X1 %X16^;
!!VRx1:+1;
!!FU2:Px1;
!!IF:M^And here - at the end. %X1 %X16^;</code></pre>
<br><u>Example 2</u>
<pre class="erm-example"><code class="language-erm">...
!!VRv10:S5;
!!FUv10:P;</code></pre>
In this example, the function will be number 5 and will only work if trigger !?FU5 exists.<br>
<br>
Each function has 100 unique variables (y1..y100). You can set, check and get these variables. 
Each call creates individual variables, which will return to zero after the function is executed. 
So all operations on local variables can only take place in the function body.<br>
<br>
<u>Example 3</u>
<pre class="erm-example"><code class="language-erm">...
!!FU1:Pi/102/v10/35;
!?FU1;
!!IF:M^x1=%X1, x2=%X2^;</code></pre>
<br>
Here, if you call a function with parameters, the variables x1...x16 in the function body will have the corresponding values.
<pre class="erm-example"><code class="language-erm">...
!!FU1:P10/20;	will show "x1=10, x2=20"
!!VRv5:S33;
!!FU1:Pv5/0;	it will show "x1=33, x2=0"</code></pre>
The variables y1..y100 serve as local variables. You can use them inside a function for any need. 
All functions have their own unique local variables, even if you call new functions. 
When the function ends, <em>y</em>-variables are reset to 0.
<pre class="erm-example"><code class="language-erm">!!FU1:P;	call function 1

!?FU1;		y1 not configured (y1=0)
!!VRy1:S1;	y1=1
!!FU2:P;	call function 2
!!IF:M^y1=%Y1^; "y1=1" (y1 will return the original value 1, set before calling function 2)
!?FU2;		y1 not configured (y1=0)
!!VRy1:S2;	y1=2
!!IF:M^y1=%Y1^;	"y1=2"</code></pre>
You can add code (receivers) to an already existing function trigger, 
using the same triggers two or more times.<br>
<br>
<u>Example 4</u>
<pre class="erm-example"><code class="language-erm">!?FU1;
!!...receivers 1
...
!?FU1;
!!...receivers 2
...
!!FU1:...</code></pre>
The last call will execute all receivers 1 and then all receivers 2 in the same order.
</div></details></div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-fu-a"></span><span class="erm-anchor" id="command-a"></span>A?$</strong></span><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Returns the quantity <em>x</em>-arguments (not including x16 for <a href="../do/#ref-rec-do">DO:P</a>) obtained by the function.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-fu-10"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-fu-show10"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
That is makes it possible to request the number of arguments of functions called via FU:P, FU:D, DO:P.<br>
This mechanism allows you to write functions with optional parameters (parameters with default values) and 
functions with a variable number of arguments.<br>
<u>Example 1</u>:
<pre class="erm-example"><code class="language-erm">!?FU(KillHero);
; Kill the specified hero. Demonstration of optional parameters.
; [x1] - hero number (optional, -1 = default)
!!FU:A?k;       get the number of function arguments
!!VRx1&amp;k=0:S-1; set x1 to -1 if there are no arguments
!!HEx1:K;       kill the hero

!?CM0;
!!FU(KillHero):P; kill the current hero
!!FU(KillHero):P155; kill Xeron</code></pre><br>
<u>Example 2</u>:
<pre class="erm-example"><code class="language-erm"> !?FU(sum);
; Calculate the sum of all specified parameters
; x1..x[n] - arguments for summation
; x[n+1] - calculation result
!!FU:A?k;  count the number of arguments
!!VRxk:S0; set result = 0

!!VRi:S0;
[:for]
!!SN&amp;i&gt;=k:G[end-for]; repeat k times
!!VRxk:+xi; add the value of the next argument to the result
!!VRi:+1;
!!SN:G[for];
[:end-for]

!?CM0;
!!FU(sum):P100/200/300/400/?s; get 100 + 200 + 300 + 400 into variable "s"
!!IF:M^%Vs^; will show "1000"
</code></pre></div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fu-c"></span><span class="erm-anchor" id="command-c"></span>C$</strong></span><br>
Check for incorrect <em>y</em>-variables. Can be used without 
parameters, which is equivalent to !!FU:C0;<br>
         $ = 0 – allow checking (you can just FU:C)<br>
         $ =1 – disable checking (set by default at start)
<br>
The command will only check if you have used <em>y</em>-variables outside the function body (during execution), 
after all, this is often the main source of problems. The most logical way to use this command is as an instruction and it can 
be useful when testing scripts.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-fu-2"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-fu-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE
!#FU:C;
!#TM1:S1/999/1/1; - set timer 1 for red player
!?TM1;
!!VRy1:S1;
!!FU123:P;
!?FU123;
!!VRy1:S2;</code></pre>
In this example, when the timer starts, you will receive a message that 
<em>y</em>-variable is used outside the function body.</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-fu-d"></span><span class="erm-anchor" id="command-d-1-16"></span>D$1[/$2/$3/…/$16]</strong></span><br>
Support for online games. Calls a function on the network opponent's side. 
The syntax is the same as <a href="./#ref-rec-fu-p">FU:P</a>, and, accordingly, features 
the same. To access parameters, use the x# syntax (# = 
1..16). They can be used anywhere (within a function) like regular ones 
variables. When you call a function, all parameters that were not 
installed will be inherited.<br>
<em>Note:</em> parameter D$1 must be placed in the !!FU call (even if 
there are no values required to be passed to the function) for the command to work correctly.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-fu-3"></span><details class="erm-comment"><summary>Example 1 (<span class="erm-anchor" id="ref-rec-fu-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Let's say you use some specific commands that will have an effect on battlefield (for example, casting spells with 
using ERM). Again, if you do things on one side, there will be a problem because nothing happened on the other side. 
Now you can use remote calling for such cases. This means you are calling a function, 
but it runs not on this current computer, but on the second one (the opponent’s computer). Up to 16 parameters are passed.<br>
For example, on your side you have:
<pre class="erm-example"><code class="language-erm">...
!!BMv10:Mi/y5/5;</code></pre>
To execute correctly you must do some things:
<pre class="erm-example"><code class="language-erm">!!BMv10:Mi/y5/5;
!!FU12345:Dv10/i/y5/5;
!?FU12345;
!!BMx1:Mx2/x3/x4;
</code></pre>
That's all. Operating principle: FU:D transmits everything immediately <em>x</em>-parameters to another 
computer and call function 12345 there. So the command <span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!BM</strong>v10:M...;</span> will work for 
one computer and team <span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!BM</strong>x1:M...;</span> on the other. If you do it right 
you will get the same effect on both sides.<br>
Note that you can pass the values of some variables with the command <a href="../ip/#ref-rec-ip-v">IP:V</a> and then 
call FU:D to transfer more than 16 <em>x</em>-parameters to another computer.</div></details>
<u>
</u><span class="erm-anchor" id="ref-rec-fu-4"></span><details class="erm-comment"><summary>Example 2 (<span class="erm-anchor" id="ref-rec-fu-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE

!?BG0;
!!IF:M^Hello!^;
!!VRv99:S99;
!!VRv100:S100;
!!VRv101:S101;
!!IP:V99/100;
!!FU123:D1/2/3/4/5;

!?FU123;
!!IF:M^V99=%V99, V100=%V100, V101=%V101, X1=%X1, X2=%X2, X3=%X3, X4=%X4, X5=%X5^;
</code></pre>
You will see a message <em>"Hello!"</em> For any stack action, you will see a message next <em>
"V99=99, V100=100, V101=0, X1=1, X2=2, X3=3, X4=4, X5=5"</em> on another computer. 
Then you will receive a message <em>"Hello!"</em> on another computer.<br>
If you continue, the next message you receive will be <em>"V99=99, V100=100, 
V101=101, X1=1, X2=2, X3=3, X4=4, X5=5"</em>. So, v101 has changed. It's because you 
sent v99 and v100 over the network and called a function that will show the message 
(so v101 = 0). But then trigger !?BG0 worked on the defender’s side and 
v101 has been set to 101.<br>
This example is just a demonstration of actions, because this script:
<pre class="erm-example"><code class="language-erm">!?BG0;
!!IF:M^Hello!^:
!!VRv99:S99;
!!VRv100:S100;
!!VRv101:S101;</code></pre>...will work the same on both sides. But, if you run the script like 
reaction to a human action (usually a mouse click), you will need to think about 
transferring changes to another computer.</div></details><br>
See also: <a href="../ip/#ref-rec-ip">receiver IP</a>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fu-e"></span><span class="erm-anchor" id="command-e"></span>E</strong></span><br>
This command immediately exits the last running function or 
trigger.<br>
You can use this command to avoid 
restart the function.<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-fu-6"></span><details class="erm-comment"><summary>Example 1 (<span class="erm-anchor" id="ref-rec-fu-show6"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Was:<pre class="erm-example"><code class="language-erm">!?FU123;
...
!!VRv10:S0 T10; get random value
!?FU123&amp;v10&lt;5; continue only if random value is less than 5
...</code></pre>
Now you can use the following method:
<pre class="erm-example"><code class="language-erm">!?FU123;
...
!!VRv10:S0 T10; get random value
!!FU&amp;v10&gt;=5:E; exit the function only if the random value is greater than or equal to 5
...</code></pre></div></details>
<u></u><span class="erm-anchor" id="ref-rec-fu-7"></span><details class="erm-comment"><summary>Example 2 (<span class="erm-anchor" id="ref-rec-fu-show7"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE
!?LE3/4/0; all triggers for local events
!!IF:M^L0-0^;
!!FU123:P;
!!IF:M^L0-1^;
!!FU:E; 	exit
!!IF:M^L0-2^;

!?FU123;
!!IF:M^L1-0^;
!!FU124:P;

!!IF:M^L1-1^;
!!FU:E; 	exit
!!IF:M^L1-2^;

!?FU124;
!!IF:M^L2-0^;
!!FU125:P;
!!IF:M^L2-1^;
!!IF:M^L2-1a^;

!?FU125;
!!IF:M^L3-0^;
!!FU126:P;
!!IF:M^L3-1^;
!!FU:E; exit
!!IF:M^L3-2^;

!?FU126;
!!IF:M^L4-0^;
!!IF:M^L4-1^;

!!FU:E; exit
!!IF:M^L4-2^;
</code></pre>
<br>
You will receive the following messages:<pre class="erm-example"><code class="language-erm">L0-0
L1-0
L2-0
L3-0
L4-0
L4-1
L3-1
L2-1
L2-1a
L1-1
L0-1</code></pre></div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fu-p"></span><span class="erm-anchor" id="command-p-1-16"></span>P$1[/$2/$3/../$16]</strong></span><br>
Indicates the start of the function, allows you to access the parameters x1..x16.<br>
Option P must always exist to start a function:
<pre class="erm-example"><code class="language-erm">!!FU1:P; - that's right,
!!FU1;	 - wrong</code></pre></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-fu-s"></span><span class="erm-anchor" id="command-s"></span>S#/?$</strong></span><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Provides the ability to query the syntax that was used for a specific function parameter.
</div><pre>        # – argument index
        $ – syntax type:
	0 - get: for example <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!FU</span>..:P?y1;</strong>
	1 - install: for example <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!FU</span>..:P10;</strong>
	2 - add: applied through the prefix "<em>d</em>", for example <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!FU</span>..:Pd200;</strong></pre>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong> Using this command, scripters will be able to write functions that will act just like regular ERM commands. For example, one function to get/of installation/adding recruits to creature dwellings.
</div>
<hr>











</div>
</div>
</section>
:::

## Notes on modern ERA versions {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!FU(FunctionName):subcommands;</code></div>
<div class="erm-paragraph">In the table, <code>$</code> denotes a read/write parameter, <code>#</code> an input, and <code>?$</code> an output. Individual commands define their identifiers and ranges.</div>
<hr>
<div class="erm-paragraph">Number of supplied arguments, excluding the DO counter x16.</div>
<hr>
<div class="erm-paragraph">Legacy validation of y outside functions: 0 enables, 1 disables. Modern ERA local-variable contexts extend beyond classic WoG.</div>
<hr>
<div class="erm-paragraph">Remote call in multiplayer. Both sides must have the code; memory addresses are not transferable values.</div>
<hr>
<div class="erm-paragraph">Ends the current handler. Does not cancel the game action or stop other handlers of that event; SN:Q stops the chain.</div>
<hr>
<div class="erm-paragraph">Calls a function with x1..x16. Pass outputs using ?; see the function article for modern GET/SET/ADD rules.</div>
<hr>
<div class="erm-paragraph">Argument syntax by position: 0 GET, 1 SET, 2 ADD. Supports read/write helper APIs.</div>
<hr>
<div class="erm-paragraph">Use unique mod-prefixed names for your own functions. An instruction call runs in load order: its definition must already exist.</div></section>
:::

## Related reference {#related}

[FU](../../functions/) · [DO](../../receivers/do/)



## Related commands and tables {#reference-links}

[Function handler (FU)](../../triggers/fu/) · [ERM debugging and compatibility](../../compatibility/) · [Repeated function calls (DO)](../do/) · [Network synchronization (IP)](../ip/#command-f-1-2-v-1-2) · [Network synchronization (IP)](../ip/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.19, *](../../compatibility/#era3-v-3-9-19-l238) — "OnRemoteEvent" is not triggered for FU:D call anymore. Era now uses FireRemoteEvent to synchronize the creation of objects on adventure map in multiplayer.
- [ERA 3.9.9, +](../../compatibility/#era3-v-3-9-9-l971) — Added the following functions to Era Erm Framework: !?FU(Hash32); ; Calculates int32 digest (hash sum) of arbitrary sequence of bytes. !#VA(data:x); Pointer to data first byte or string !#VA(dataLen:x); Length of data in…
- [ERA 3.9.4, -](../../compatibility/#era3-v-3-9-4-l1161) — Fixed bug: custom network events and FU:D didn't work in battle.
- [ERA 3.9.3, +](../../compatibility/#era3-v-3-9-3-l1205) — Erm "FU:D" command was fully rewritten. Fixed bug: HD mod used to disable FU:D on adventure map. From now FU:D supports arbitrary string parameters and d-modifiers.
- [ERA 3.4.0, *](../../compatibility/#era3-v-3-4-0-l2044) — Renamed "OnTownHallMouseClick" to more accurate "OnTownFortMouseClick". &#91;!&#93; SN:Q is deprecated and shoudn't be used for new scripts because it may break any ERM library/mod/script functionality. ERM interpreter and Era E…
- [ERA 3.2.0, +](../../compatibility/#era3-v-3-2-0-l2469) — Added support for d- syntax in function parameters. !!FU(edu_Test):Pd-200; will pass -200, previously 200
- [ERA 3.2.0, +](../../compatibility/#era3-v-3-2-0-l2481) — Improved Heroes 3 complex dialogs support. Credits: Berserker, igrik. IF:N(msgType)/^text^&#91;/?result/(textAlignment)/(preselectedPicId)/(selectablePicsMask)&#93;. selectablePicsMask - bit mask of pictures, allowed for selecti…
- [ERA 3.2.0, +](../../compatibility/#era3-v-3-2-0-l2574) — Added new constants to "Era Erm Framework" mod: - ARG_SYNTAX_GET, ARG_SYNTAX_SET, ARG_SYNTAX_ADD for FU:S argument syntax types. - Numerous other new constants.
- [ERA 3.2.0, -](../../compatibility/#era3-v-3-2-0-l2812) — Fixed re/FU/DO/OB/...dozens of commands... didn't support global named variables in receiver parameters. Examples: !!FUi^edu_someFunc^:P; !!OBi^edu_x^/i^edu_y^/i^edu_z^:T?(objType:y);
- [ERA 3.2.0, -](../../compatibility/#era3-v-3-2-0-l2817) — Fixed bug: FU:S used to return corrupted values.
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3013) — Added Era exported function ShowErmError (Error: pchar); stdcall; The function shows regular ERM error dialog and can be used for ERM scripts error reporting and debugging. Example: !!if|(baseFaction)<(NO_TOWN)/(baseFact…
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3050) — Added support for local z-strings as function parameters. They will be converted to temporary read-only z-variable indexes. Example: !!VR(str:z):S^haVe A nIce day!^; !!FU(StrToUpper):P(str); here z-1 will be converted in…
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3474) — !!FU/DO receivers can now be really called without arguments. For all WoG 3.58 ERM receivers except SN/MP calling subcommand without parameters actually passes single parameter with 0 value. Example: !!CM:R; is the same …
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3509) — Updated ERM Editor, based on Sublime Text. &#91;!&#93; !!FU:C is deprecated and not supported anymore. It may be reused in future.
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3515) — All function x-parameters, which were not passed, are now initialised with zeroes. This behavior is suitable for optional arguments. Just don't pass odd arguments in !!FU:P/!!DO:P/etc, and they will have 0 value.
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3518) — Added new syntax to !!FU:A command. Set default values for parameters. !!FU:A#1/&#91;#2.../#3...&#93;; #1 - default value for the first parameter (x1) #2 - default value for the second parameter... The command changes values onl…
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3548) — It's proposed to decorate functions declarations in the following variants: ; Bried function description like: ; Hides rectangular area on the map. !?FU(es_HideMapSquare); !#VA(x1:x) (y1:x) (x2:x) (y2:x) (level:x); fast …
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4007) — Function parameters (FU:P, DO:P), which were passed using GET-syntax, are now initialized with original variable value. The behavior is similar to pass-by-reference in other programming languages. Example: !?FU(Add3):; ;…
<!-- ERA3-GENERATED:END -->
