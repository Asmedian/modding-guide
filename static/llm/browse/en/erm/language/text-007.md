# ERM syntax: ZVSE and ZVSE2

ID: erm.syntax
URL: https://asmedian.github.io/modding-guide/en/erm/syntax/
Part: 1/1
Source references: old-help:cont-zvse.htm, old-help:cont-receiversol.htm, era-changelog:era-iii-changelog.txt, old-help:cont-ingener.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.syntax 1 -->
## Receivers: General {#ref-cont-receiversol}

:::erm
<section class="erm-reference" lang="en">
<div>


<span class="erm-anchor" id="ref-cont-receiversol-text"></span><div>
<h3 class="erm-align-center">Receivers</h3>
<h3><span class="erm-anchor" id="ref-cont-receiversol-intro"></span>Introduction</h3>
<div class="erm-paragraph">Receivers ("<em>receiver</em>", from English - receiver.) - ERM codes that act on heroes, objects, events, timers, functions, 
messages or game settings.<br>
Most receivers have multiple options, which can be used for a variety of things.<br>
For example, <a href="../receivers/le/#ref-rec-le">receiverLE</a> affects local events on the map and has several different commands for changing event properties.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-use"></span>How to use receivers</h3>
<div class="erm-paragraph">Receivers are placed in time events after the trigger that fires them. 
They are executed once until the event ends or another trigger is reached. You can write one or more commands on one line, 
but for the clarity and readability of your script (as well as for finding errors), it is better to write a command on each line.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-synt"></span>Receiver syntax</h3>
<div class="erm-paragraph">All receivers begin with a double exclamation mark "!!" and end with a semicolon ";". 
Immediately after the "!!" follows the two-letter code of the receiver, as <a href="../receivers/ar/#ref-rec-ar">AR</a> for artifacts, 
<a href="../receivers/he/#ref-rec-he">HE</a> for heroes, etc. The next part after this code depends on the type of receiver. 
Some receivers have one or more parameters before the colon ( <strong>:</strong> ), each parameter is an integer. Next, after the colon comes the option 
receiver. Options take many forms and may include one or more parameters each; they are presented on the pages of the Directory further as XXXX. 
Replace XXXX with the appropriate command or commands. After the last command you must put a semicolon ";"</div>
<div class="erm-paragraph">All ERM commands (receivers and instructions) must have at least one option to work correctly.<br>
<u>Example syntax</u>:
<pre class="erm-example"><code class="language-erm">!!LE12/21/0:E1000;</code></pre>
In the example above, the local event is at coordinates x=12, y=21 and level=0 (top) 
will become modified and will give 1000 experience for the hero.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-2nd-synt"></span>Related syntax</h3>
<div class="erm-paragraph">Often you don't want to move a value, but simply add or subtract a value. For example, if you want to give the hero experience, 
you will set the hero’s amount of experience without taking into account the current value, i.e. experience will be set to the new, set value. 
The same will happen with player resources. To add or subtract, we use an extended syntax: put a small <em>d</em> as a number prefix.<br>
<u>Extended syntax example</u>:
<pre class="erm-example"><code class="language-erm">!!HE-1:Ed500;</code></pre>
In this example, 500 experience will be added to the experience you already have.<br>
If we had used E500 instead of Ed500, the hero's experience would be 500 instead of increased by 500.<br>
To take away 500 experience, use Ed-500 accordingly.<br>
If you want to leave the parameter unchanged, use d0 or just d.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-synt-date"></span>Current date syntax</h3>
<div class="erm-paragraph">Based on the principle of using a prefix <em>d</em>, we can use the prefix <em>c</em> (again, only a small one!) in order to 
so that the current day number is added to the number. In other words, <em>c</em> equal to the current day. For example,<br>
c=4 is month 1, week 1, day 4;<br>
c=8 is month 1, week 2, day 1;<br>
c=30 is month 2, week 1, day 2</div>
<div class="erm-paragraph"><u>Example</u>:<br>
We need an event that will start five days after any player action. 
Let's set the day of his appearance <a href="../receivers/ge/#ref-rec-ge">receiver GE</a>, option F$. 
Let the event number be 100 (the first number in the event message), use:
<pre class="erm-example"><code class="language-erm">!!GE100:Fc5;</code></pre>
This event will fire 5 days after the command is executed (it will run after, for example, visiting a local event).</div>
<div class="erm-paragraph">Moreover, you can use both prefixes together (<em>d</em> should come first):
<pre class="erm-example"><code class="language-erm">!!GE100:Fdc5;</code></pre></div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-empty"></span>Empty parameters</h3>
<div class="erm-paragraph">If a command has four parameters, you MUST fill them all in, separating each one with a slash key. <span class="erm-key">/</span>. 
You cannot omit a command parameter, otherwise it will not work and will throw an error message. 
However, in some cases you can omit the exact number and just leave the space after the slash blank. 
When you omit a parameter, it is assumed that you entered zero, and if zero is a valid value for the parameter, the command will work.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!IF:D1/5//4;</code></pre>
The command above is an example of using the advanced dialog box. It has more parameters than any other ERM option, 
but you don't have to fill them all. We use three out of a possible 16. It is for this command that entering 0 means “leave unchanged” 
but many other commands simply assume a value of zero, which was not always intended.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-many"></span>Multiple commands</h3>
<div class="erm-paragraph">In most cases, you can put multiple commands after a single receiver header (the part before the colon). 
Commands do not need to be separated by spaces, but for greater readability it is recommended. In some cases, for example 
setting and managing variables <a href="../receivers/vr/#ref-rec-vr">VR receiver</a>, multiple commands does not always work correctly. 
So, if you use multiple commands, make sure they execute correctly and produce the correct result. 
If one of your commands shows or sets text, you must put it last. 
If you paste any other command after the text (as part of a single receiver) you will get an error.<br>
<u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!!OW:R-1/5/d-1 R-1/6/d-500; take something from the player
!!LE10/12/0:E1000 M^Hero studies by visiting the elder...^;</code></pre></div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-comm"></span>Adding comments to your code</h3>
<div class="erm-paragraph">Anything in the script after the semicolon and before the next receiver or trigger is considered a comment and is ignored by the ERM processor. 
Some people put their comments in square brackets to make the script and comments easier for others to read, but this is not required.<br>
<u>Example code with comment</u> (after the semicolon):
<pre class="erm-example"><code class="language-erm">ZVSE
!?LE10/23/1; Event at x=10, y=23, level=1(Underground)
!!HE-1:B0/?z5; Save the hero's name into the text variable z5
!!IF:M^A cry was heard: "%Z5... %Z5... help me!"^; show game window</code></pre>
The message above shows the hero's name for added personalization.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-var-use"></span>Using variables in receivers</h3>
<div class="erm-paragraph">Variables can be used to replace any # or $, except the # before the colon in receivers <a href="../receivers/ce/#ref-rec-ce">CE</a> and <a href="../receivers/ge/#ref-rec-ge">GE</a>. 
All other # and $ in receivers, before and after the colon, can be replaced by a variable of the appropriate type.<br>
Many receivers that are specific to a specific point on the map can also use variable references. 
Namely, the first <em>v</em>-the variable stores the X-coordinate of the object; second <em>v</em>-variable – Y-coordinate of the object; in the third <em>v</em>-the variable should be Level.<br>
<u>Example of using variable references</u>: (with receiver <a href="../receivers/ob/#ref-rec-ob">OB</a>)
<pre class="erm-example"><code class="language-erm">...
!!VRv10:S25; [set x-coordinate]
!!VRv11:S14; [set y-coordinate]
!!VRv12:S0; [set map level]
!!OB10:S; ["disable" object in v10/v11/v12]</code></pre>

</div><h3><span class="erm-anchor" id="ref-cont-receiversol-instr"></span>Instructions</h3>
<div class="erm-paragraph">The instructions are identical to the receivers, except that they begin with a combination of exclamation marks and a number (!#) and work only once, 
when loading the map for the first time. Most receivers also work as instructions, but some (especially object-specific receivers) 
do not work at all and cause error messages or the game crashes. The instructions are executed once when loading the map, 
in the order of appearance in time events, regardless of triggers, receivers and comments before and after them. 
You can use instructions to call functions and all normal receivers (non-instructions), being part of the function, will work fine, 
however, you MUST include the function in a temporary event BEFORE the statement calling it, otherwise it will not work 
(you won't get an error message, the function just won't work).<br>
<u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!#VRv10:S25; set v10 to 25

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
!?FU25;
!!IF:M^Loading script...^;
!#FU25:P; show message before showing card</code></pre>
</div>








</div>
</div>
</section>
:::

## ZVSE {#ref-cont-zvse}

:::erm
<section class="erm-reference" lang="en">
<div><h3 class="erm-align-center">ZVSE</h3>
<div class="erm-paragraph">These four characters are the header of any script. Thanks to them, the game recognizes 
scripts and distinguishes them from ordinary events. When working on your script 
remember - ZVSE must be at the very beginning of the code, otherwise... the code will be 
ignored.</div>
<div class="erm-paragraph">See also:<br>
<a href="../triggers/#ref-cont-triggersol">Triggers: general information</a><br>
<a href="./#ref-cont-receiversol">Receivers: general information</a><br>
</div></div>
</section>
:::

## Header and language mode {#header}

`ZVSE` identifies classic ERM. `ZVSE2` enables ERM 2.0, introduced in **ERA 3.0.0** with named locals, constants, and stricter syntax checking. The digit 2 refers to the ERM language mode, not ERA II. Changing the header does not automatically fix an old script; check the new mode’s restrictions and string handling.

## Four prefixes {#prefixes}

| Form | Purpose |
| --- | --- |
| `!?` | Declares an event handler or function |
| `!!` | Executes a command inside a handler |
| `!#` | Initialization instruction; also preprocessor declarations `VA` and `DC` |
| `!$` | Post-trigger where supported by the event |

Commands end with `;`. A newline is not a terminator. Syntax is case-sensitive: `!!IF` is the dialog receiver, while `!!if` opens a conditional block.

## Command anatomy {#anatomy}

`!!HE-1:E?y1;` contains prefix `!!`, receiver `HE`, selector `-1`, a colon, subcommand `E`, and output argument `?y1`. Here `-1` selects the current hero; another receiver may assign a different meaning to that value. Arguments within a subcommand are separated by `/`. Reference signatures use `#`, `$`, and ellipses as placeholders, not literal script text.

## Reading, writing, and relative changes {#access}

Where supported, `?variable` reads a value, a number or variable writes it, and prefix `d` adds to the current value. `E500` sets hero experience to 500; `Ed500` adds 500. `d0` preserves the value only where relative assignment is supported. Not every subcommand accepts all modes. An empty argument generally means zero, not “skip”.

## Names and constants {#declarations}

`(name:y)` allocates a local number and `(name:z)` a local string; subsequent references use `(name)`. `!#VA` declares parameters or variables explicitly, and `!#DC` declares a global named constant. Avoid taking names used by libraries.
```erm
ZVSE2
!#DC(MYMOD_REWARD) = 250;

!?FU(MyMod_AddReward);
!#VA(hero:x);
!!HE(hero):Ed(MYMOD_REWARD);
```

## Comments and text {#comments}

String literals use `^...^`. Ordinary text between a terminated command and the next ERM command acts as a comment. Put comments after `;` and avoid accidentally including command prefixes. A string literal follows interpolation rules rather than ordinary comment rules.

[Strings and variables](../variables/) · [Conditions](../conditions/)

## Related commands and tables {#reference-links}

[Local map events (LE)](../receivers/le/) · [Map artifacts and resources (AR)](../receivers/ar/) · [Heroes (HE)](../receivers/he/) · [Global events (GE)](../receivers/ge/) · [Variables and expressions (VR)](../receivers/vr/) · [Town events (CE)](../receivers/ce/) · [Map objects (OB)](../receivers/ob/) · [ERM triggers and events](../triggers/)

<!-- llm:end erm.syntax 1 -->

