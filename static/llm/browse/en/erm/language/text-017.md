# Variables, strings and arrays

ID: erm.variables
URL: https://asmedian.github.io/modding-guide/en/erm/variables/
Part: 1/5
Source references: old-help:cont-flags.htm, old-help:cont-usedvar.htm, era-changelog:era-iii-changelog.txt, era-framework:lib-9999-era---stdlib.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.variables 1 -->
## Flags & Variables {#ref-cont-flags}

:::erm
<section class="erm-reference" lang="en">
<div>

<span class="erm-anchor" id="ref-cont-flags-text"></span><div>
<span class="erm-anchor" id="ref-cont-flags-up"></span>
<h3 class="erm-align-center">Flags and Variables</h3>
<h3><span class="erm-anchor" id="ref-cont-flags-vved"></span>Introduction</h3>
<div class="erm-paragraph">Flags and variables are the most important feature of ERM for transforming Heroes into a highly dynamic game that responds to player input. 
ERM scripts can be written without using flags and variables, but this will be a purely local approach.</div>

<h3><span class="erm-anchor" id="ref-cont-flags-fl"></span>Conditional flags</h3>
<div class="erm-paragraph">A flag is a Boolean variable with two possible values: True (1) and False (0). 
At the beginning, all flags are set to False (0). The value 1 (True) is usually called "set", 0 (false) - "clear".</div>

<h4><span class="erm-anchor" id="ref-cont-flags-fl-set"></span>Setting flags</h4>
<div class="erm-paragraph">There are 1000 conditional flags in ERM and each of them has its own number from 1 to 1000. 
The flags are set by the IF receiver using <a href="../receivers/if/#ref-rec-if-v">option V</a>. 
To set the flag to True, use the value 1, and to set it to False, use the value 0.<br>
<u>For example</u>:
<pre class="erm-example"><code class="language-erm">!!IF:V4/1; set flag 4 to True (1)</code></pre>
In addition to option V, there are also several receiver options IF (A,S,R) for setting the first 10 flags at a time. 
Look <a href="../receivers/if/#ref-rec-if">receiver IF</a> for details.</div>

<h4><span class="erm-anchor" id="ref-cont-flags-fl-us"></span>Using Conditional Flags</h4>
<div class="erm-paragraph">Usually flags are used to check for something as a condition. For example, if you want 
so that when visiting an object a message is shown on the map <em>only</em> for the first time to any hero, and never again, 
you can use flags for this purpose; the message will be shown if the flag was false (not set) 
and with a further command you changed its value to True (1), so that the next time the object is visited, the message will not be shown. 
The symbol for defining a flag (or variable) is &amp; (ampersand), which necessarily precedes the value of the flag (variable) in receivers, 
or preceding a semicolon in triggers. The ampersand indicates that the flag needs to be checked. If the test for the flag is "true" 
(i.e. set to 1), the flag number is simply used. If the test is for a "false" flag (i.e. set to 0), 
use a minus (-) before the number. So, if you want flag #5 to be True, you would use &amp;5, 
and if the flag is needed as #5 - false, you should use &amp;-5.<br>
<u>Example code</u>:
<pre class="erm-example"><code class="language-erm">ZVSE
!?OB10/14/0; - check if the object is visited at 10/14/0
!!IF&amp;-5:M^Come in. I was waiting for you.^; - show this message if flag #5 is false
!!IF:V5/1; - set flag No. 5 to true</code></pre></div>

<h4><span class="erm-anchor" id="ref-cont-flags-fl-ch"></span>Checking Multiple Flags</h4>
<div class="erm-paragraph">Sometimes you need to check more than one flag or variable. To do this, separate each flag (variable) with a slash (<span class="erm-key">/</span>). 
If there are multiple flags or variables to check, all conditions must be met before the receiver is executed. For example, if you want 
so that it works when flag No. 7 is true, flag No. 8 is false, and flag 10 is true, if at least one of the flags has a different value, the message will not appear.<br>
<u>Example code</u>:
<pre class="erm-example"><code class="language-erm">ZVSE
!?OB10/14/0; - check if the object is visited at 10/14/0
!!IF&amp;7/-8/10:M^Come in. I was waiting for you.^; - this message will be shown only if flags 7 and 10 are true and flag 8 is false.</code></pre></div>

<h4><span class="erm-anchor" id="ref-cont-flags-fl-init"></span>Initializing Flags</h4>
<div class="erm-paragraph">Upon initialization, flags 1..500 will be reset to False (0), but flags 501..1000 will retain their last value if you started a new map without restarting the game itself. 
They can be used for campaigns where you want to use flag values ​​for subsequent maps in the campaign. If you avoid the potential 
that the flags will be different from False (i.e. you want all flags to be 0), set the flags from 500 onwards to 0 at the beginning of the map 
(or at the beginning of the script - the command <a href="../receivers/if/#ref-rec-if-v">IF:V</a>) that you want to use.</div>

<h4><span class="erm-anchor" id="ref-cont-flags-fl-spec"></span>Special flags</h4>
<div class="erm-paragraph">Some flags have specialized meanings in the game.<br>
<strong>Flag 1</strong> used by some commands to store the result and determine the result of conditional flags (check value) (see above). 
Therefore, it is not recommended to use flag 1 for later values. Or, to be sure, don't use this flag at all, because there are others.</div>
<div class="erm-paragraph"><strong>Flag 996</strong> automatically cleared (set to false) when any option !!LE is executed and set to 1 (true), 
if there is no local event there (in the location defined by the LE command) (remember that events disappear after the first visit).</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-flags-mp"></span><strong>Flag 997</strong> and <strong>998</strong> store the following:<br>
<strong>Flag 997</strong> stores multiplayer battle status.<br>
= 0 (false) if this is a battle on this computer,<br>
= 1 (true) if this is an online battle.</div>
<div class="erm-paragraph">If <strong>flag 997</strong>=1, then <strong>flag 998</strong>=0, AI is attacking a human player on another computer.<br>
Note that the battle only starts on one PC, but that PC is remote from the current active player.<br>
Flag <strong>998=1</strong>, if the battle is human versus human. This identifies a multiplayer battle.</div>
<div class="erm-paragraph">You can use both flags in BA0 or BA50 triggers, for example:
<pre class="erm-example"><code class="language-erm">!?BA0&amp;997/998; The script will work if it is a Human vs. Human battle (multiplayer)
...</code></pre></div>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-flags-999"></span>Flag 999</strong>, which is set to 1 if the current player (who activated trigger) is the player "here" 
and 0 if he or she is on another PC. AI is always set to 0. If flag 999 is set, you can be sure that this battle is human vs. AI, 
and the person at this computer. Works for all triggers.<br>
However, please note that for a network battle in a battle, flag 999=1 is only for the side who initiated the battle. 
For the other side, the 999 flag will always be set to false, even if it is their turn in the battle.</div>
<div class="erm-paragraph"><strong>Flag 1000</strong> has two meanings depending on where it is used (trigger battle or not). For non-battle this flag will be set to true, 
when the hero's owner, a human player, visits an object on the map, trigger, as an object or subject. If computer (AI) hero visited the object, flag 1000 will be set to false. 
Again, you can set the value of this flag, but this is not safe since you can check this value in a specific script, hero whether the player or the AI.<br>
Therefore, if you check the conditional flags, -1000 means AI, and 1000 means human.</div>
<div class="erm-paragraph">For combat triggers (eg. <a href="../triggers/ba/#ref-tr-ba">!?BA</a>, <a href="../triggers/bg/#ref-tr-bg">!?BG</a>, <a href="../triggers/bf/#ref-tr-bf">!?BF</a>, etc.) flag 1000 checks, 
real or theoretical (AI) battle. If flag 1000=1 (true), this means that the battle is real (there is at least one human opponent). 
If 1000=0 (false), it means a theoretical AI battle.</div>

<h4><span class="erm-anchor" id="ref-cont-flags-fl-show"></span>Show flag values in messages</h4>
<div class="erm-paragraph">To show the value of a flag (0 or 1) in a message, use <strong>%F</strong>, then - the flag number to display the status (1..1000). 
To show the value of flag #4 in a message, you must use %F4. Showing the value of a flag can be useful as a means of helping you debug a broken script.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!IF:M^The value of flag 4 is %F4.^;</code></pre></div>

<h4><span class="erm-anchor" id="ref-cont-flags-fl-eq"></span>Comparison of values</h4>
<div class="erm-paragraph">To compare game parameters to a specific value, you can use the following method: ...[comparison sign] value...<br>
The result of the comparison is written to flag 1. You can use this for further messages.</div>
<div class="erm-paragraph">Example of comparing values using <a href="../receivers/ge/#ref-rec-ge">receiver GE</a>:<br>
!!GE100:F5 – set the day of first occurrence: 5 for the Global event (standard syntax).<br>
!!GE100:F=5 – check if the day of first occurrence is 5 and set the conditional flag 1 to 0 if not true, to 1 if true.<br>
!!GE100:F&lt;&gt;5 – check if the day of first occurrence is not 5 and set the conditional flag 1 to 0 if not true, to 1 if true.<br>
!!GE100:F&gt;&lt;5 – see previous description.<br>
!!GE100:F&gt;5 – check if the day of first occurrence is more than 5 and set the conditional flag 1 to...<br>
!!GE100:F&gt;=5 – check if the day of first occurrence is greater than or equal to 5 and set the conditional flag 1 to...<br>
!!GE100:F=&gt;5 – see previous description.<br>
!!GE100:F&lt;5 – check if day of first occurrence is less than 5 and set conditional flag 1 to...<br>
!!GE100:F&lt;=5 – check if day of first occurrence is less than or equal to 5 and set conditional flag 1 to...<br>
!!GE100:F=&lt;5 – see previous description.</div>
<span class="erm-anchor" id="ref-cont-flags-q2"></span><blockquote class="erm-tone-quote erm-note">For WoG 3.58f there is a bug with checks. Only the checks =, &gt;, &gt;= are compared correctly. 
The rest must be compared by writing to a variable, because they are evaluated incorrectly by the game engine.</blockquote>

<h3><span class="erm-anchor" id="ref-cont-flags-var"></span>Variables</h3>
<div class="erm-paragraph">Variables are similar to flags because... they can be set and tested, but differ from them in that they can take on many more values ​​than true and false. 
In most cases, variables are used instead of any number. Also, the contents of the variables (set values) 
can be changed at any time by simply setting a new value. There are several other different types of variables that can be used for different tasks in a script.</div>
<div class="erm-paragraph">If a command parameter is shown as $, this means that this value can be written to a variable. If the parameter is shown as #, it means 
that it can only be set, but not read. And if it is shown as ?$, this means that the parameter can be read, but not set.</div>

<h4><span class="erm-anchor" id="ref-cont-flags-var-typ"></span>Variable types and their possible values</h4>
<div class="erm-paragraph">a - not yet used<br>
b - not yet used<br>
c - stores the value of the current day (game day number)<br>
d - adds or subtracts values from a variable<br>
<a href="./#ref-cont-flags-e">e1…e100</a> - floating point variables<br>
<a href="./#ref-cont-flags-y">e-1…e-100</a> - basic floating point trigger variables<br>
<a href="./#ref-cont-flags-v">f…t</a> - standard variables (also called quick variables)<br>
<a href="./#ref-cont-flags-v">v1…v10000</a> - standard variables<br>
<a href="./#ref-cont-flags-w">w1…w200</a> - hero variables (unique for each hero)<br>
<a href="./#ref-cont-flags-x">x1…x16</a> - function parameters (depending on the function)<br>
<a href="./#ref-cont-flags-y">y1…y100</a> - functional variables (unique for each function)<br>
<a href="./#ref-cont-flags-y">y-1…y-100</a> - main trigger variables<br>
<a href="./#ref-cont-flags-z">z1…z1000</a> - text variables<br>
<a href="./#ref-cont-flags-z">z-1…z-10</a> - function text variables (unique for each function)<br>

</div><span class="erm-anchor" id="ref-cont-flags-1"></span><details class="erm-comment"><summary><strong>Note</strong><a href="../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(<span class="erm-anchor" id="ref-cont-flags-show1"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-cont-flags-t0"></span><ul class="erm-margin-top-zero">
<li>y-, e- are now global variables;</li>
<li>y1...y100, e1...e100, z-1...z-10 – local variables for any triggers and functions 
(a kind of guaranteed set of integer, real and string values);</li>
<li>x1…x16 are available for any triggers (events). See description for details <a href="../receivers/sn/#ref-rec-sn-era-x">SN:X</a>.</li></ul></div></details>
<div class="erm-paragraph">All integer variables can take values from -2147483647 to +2147483647.<br>
Floating point variables have a range of -3.4x10<sup>38</sup> up to +3.4×10<sup>38</sup> (precision to 7 decimal digits)<br>
Text variables can be up to 511 characters long.</div>

<h4><span class="erm-anchor" id="ref-cont-flags-var-set"></span>Writing Variables</h4>
<div class="erm-paragraph">There are several ways to write variables.<br><a href="../receivers/vr/#ref-rec-vr">Receiver VR</a> can be used to set the value of any variable, 
and can also be used for <a href="../receivers/vr/#ref-rec-vr-mat">arithmetic</a> operations with variables such as addition, subtraction, multiplication or division.</div>
<blockquote class="erm-tone-quote erm-note"><strong>Exception</strong> – variables <em>z</em>, which are used only to set text, as opposed to numeric variables.</blockquote>
<div class="erm-paragraph">An example of setting the value 17 of the variable v5:
<pre class="erm-example"><code class="language-erm">!!VRv5:S17;</code></pre></div>
<div class="erm-paragraph">The second way to write values to variables is to read values from game objects or settings, such as the hero number, gold value, number of gems player 4, 
or a type or subtype of any object. To set a value through this path, a question mark (?) is used after the command, followed by a variable in which the value will be stored.<br>
<u>Examples</u>:
</div><span class="erm-anchor" id="ref-cont-flags-step"></span><div class="erm-indent">Setting the object type at coordinates x=10, y=15, level=1 (Underground) to variable j:
<pre class="erm-example"><code class="language-erm">!!OB10/15/1:T?j;</code></pre></div>
<div class="erm-indent">Setting the number of crystals (resource type = 4) that the green player (number 3) currently has in the variable v12:
<pre class="erm-example"><code class="language-erm">!!OW:R3/4/?v12;</code></pre></div>
<div class="erm-paragraph">The third way to set a variable is by internal reference. Some ERM commands require a number <em>v</em> or <em>z</em>-a variable, not a letter. 
In this case, instead of using a question mark, you simply enter the parameter number and the value of the command for that variable 
(for example, if a command needs a number for <em>v</em>-variable, you set the value 17, which will be set to the variable v17).</div>

<h4><span class="erm-anchor" id="ref-cont-flags-var-us"></span>Using Variables Instead of Numbers</h4>
<div class="erm-paragraph">Since you can set the values of variables, you can use those variables instead of numbers in your code. Almost anywhere you can just enter a number, 
you can use any variable containing the value to be used as long as it is acceptable within the option's range of values. 
Exceptions are variables <em>z</em>, used for text values, such as a hero's name, an artifact's name, or a word or phrase. 
Obviously they will have to be used with non-numeric commands.<br>
Usage example <em>v</em>-variables for setting hero spell points:
<pre class="erm-example"><code class="language-erm">!!VRv200:R50; - generate a random value between 0 and 50 into the variable v200
!!HE155:Iv200; - set hero number 155 spell points to the value generated in the variable v200</code></pre>
Usage example <em>z</em>-variables: adding "Sir" to the hero's name:
<pre class="erm-example"><code class="language-erm">!!VRz50:S^Sir ^; - set the word "Sir" to the variable z50
!!HE-1:B0/?z51; - set the current hero name to the variable z51
!!VRz52:S50 +z51; - add the contents of z51 to z50 and write to the variable z52
!!HE-1:B0/z52; - set the current hero to the name located in the variable z52</code></pre>
<span class="erm-anchor" id="ref-cont-flags-bold"></span><em class="erm-strong">Note:</em> both previous code examples should have trigger.</div>

<h4><span class="erm-anchor" id="ref-cont-flags-var-cond"></span>Conditions with variables</h4>
<div class="erm-paragraph">Like flags, you can use the values of one or more variables as conditions. The principle of operation is the same, however, instead of the flag number 
(with or without a minus sign in front) you enter the name of the variable. Next, after the comparison sign (=, &gt;, &lt;, &lt;&gt;, &gt;= or &lt;=) is the number (or variable) with which you want to compare.</div>
<div class="erm-paragraph">Example condition, if v1 is greater than or equal to 7, show message:
<pre class="erm-example"><code class="language-erm">!!IF&amp;v1&gt;=7:M^You were wise to make this choice, hero!^;</code></pre></div>
<div class="erm-paragraph">An example of a condition comparing the text set in the variable z1 with the text in the variable z2, and if they are the same, show a message:
<pre class="erm-example"><code class="language-erm">!!IF&amp;z1=z2:M^You entered the same values!^;</code></pre></div>

<h4><span class="erm-anchor" id="ref-cont-flags-var-ch"></span>Checking Multiple Variables</h4>
<div class="erm-paragraph">Executed in the same way as with flags, separating each condition with a slash (<span class="erm-key">/</span>). You can mix and compare flags and variables in one condition, 
as in the example below, which gives the current hero artifact Armor of Wonder, but only if the conditions are met (flags and variables with a certain value are set):
<pre class="erm-example"><code class="language-erm">!!HE-1&amp;7/v2&gt;6/-1/y4=v8:A31;</code></pre></div>
<div class="erm-paragraph">In the example above, the hero will receive artifact only if all the specified conditions are met:
</div><ol class="erm-margin-top-zero">
<li> Flag 7 must be True (1);</li>
<li> The value in the variable v2 must be greater than 6;</li>
<li> Flag 1 must be false (0);</li>
<li> The values of the variables y4 and v8 must be equal.</li></ol>


<h4>The test syntax is OR condition: |</h4>
<div class="erm-paragraph">!(!|?|#)XX&amp;c1/c2/c3|c4/c5/c6:…;<br>
The complete condition will be: (c1 AND c2 AND c3) OR c4 OR c5 OR c6<br>
<strong><u>Comment</u>:</strong><br>
- there can be one OR section, or it must be after the AND section<br>
- if there is only an OR section, the full condition will be true if at least one OR condition is true<br>
- there can be up to 16 AND conditions and up to 16 OR conditions</div>

<h3><span class="erm-anchor" id="ref-cont-flags-var-another"></span>Other types of variables</h3>
<div class="erm-paragraph">As previously mentioned, there are several different types of variables, each used for different code needs.</div>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-flags-v"></span>Standard variables (f..t) and (v1..v10000)</strong> can be used almost everywhere, 
but certain commands require a number <em>v</em>-a variable to record the result. Both types are used to write integer values.</div>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-flags-w"></span>Hero Variables (w1..w200)</strong> store the same type of information as <em>v</em>-variables, but they are unique for each hero, 
That is two different heroes can have different values ​​written in their w1 variables (or w2, w10 or more... up to w200). 
To set or test one or more <em>w</em>-variables, you must first set the number of the hero whose value will be taken with the command IF:W.<br>
For example, to set or check w5 for hero 27 (Gem), you must first insert<pre class="erm-example"><code class="language-erm">!!IF:W27;</code></pre>in front of the receiver(s) operating with the variable w5.<br>
For the current hero, use -1 instead of a number. Yes,<pre class="erm-example"><code class="language-erm">!!IF:W-1;</code></pre>
means that the next calls to the w variables are for the current hero (before using another command IF:W)<br>
See also: <a href="../receivers/if/#ref-rec-if-w">IF:W</a>, <a href="../receivers/vr/#ref-rec-vr">receiver VR</a><br>
</div><blockquote class="erm-tone-quote erm-note"><strong>Exception:</strong> command <a href="../receivers/ht/#ref-rec-ht-w">!!HT:W</a>, where only the first 100 can be used <em>w</em>-variables.</blockquote>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-flags-x"></span>Variables - function parameters (x1..x16)</strong> also store the same value types as the variables v and w (numeric). 
But these variables exist only inside functions (code after the function trigger) and pass values ​​into the function using the P command (P - parameters). 
See <a href="../receivers/fu/#ref-rec-fu">receiverFU</a> for detailed information about functions. If you call a function from another function, any <em>x</em>-variables that were not set (as new parameters), 
store their old value in the new function. When used with <a href="../receivers/do/#ref-rec-do">receiver DO</a>, parameter x16 stores the function circle number.</div>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-flags-y"></span>Local variables (y1..y100)</strong> similar to <em>x</em>-variables are those that are used only in functions. But they are unique for each function. 
So if you have 4 different functions, each has its own values <em>y</em>-variables. Like most other variables, they store only numeric values. 
These variables can also be used outside the function, but remember that when another trigger fires (<a href="../triggers/hl/#ref-tr-hl">HL</a>, <a href="../triggers/ba/#ref-tr-ba">BA</a> etc.) in the middle of your script, 
the values of these variables may be destroyed.</div>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-flags-e"></span>Floating point variables (e1..e100)</strong> They are mainly used as <em>y</em>-variables:
</div><dl><dd>- are not recorded in the saved game;</dd>
<dd>- unique for each function;</dd>
<dd>- set to 0 at the start of each function/function circle;</dd>
<dd>- are restored when exiting another function.</dd></dl>
<div class="erm-paragraph">You can use them to set parameters, but the main feature is the use of floating point expressions and then writing them to an integer.<br>
You can use <a href="../receivers/vr/#ref-rec-vr-mat">arithmetic</a> operations <a href="../receivers/vr/#ref-rec-vr">VR receiver</a> for <em>e</em>-floating point variables, but all numbers in the expression must be integers.<br>
You can also show the value <em>e</em>-variable in the message using the %E# command. In this case, only 3 decimal places will be shown.</div>
<blockquote class="erm-tone-quote erm-note">Bug - ERM does not handle weak comparisons <em>e</em>-variables: &lt;=, &gt;=, =&gt;, =&lt;.</blockquote>
<div class="erm-paragraph"><u>Example</u>:
<pre class="erm-example"><code class="language-erm">!#VRe5:S32;
!#IF:M^e5 now has the value "%E5"^; [ e5=32.0 ]
!#VRe5:*5;
!#IF:M^e5 now has the value "%E5"^; [ e5=160.0 ]
!#VRe5::200;
!#IF:M^e5 now has the value "%E5"^; [ e5=0.8 ]
!#VRe5:+e5*10+5:10;
!#IF:M^e5 now has the value "%E5"^; [ e5=2.1 ]
!#VRv100:Se5;
!#IF:M^v100 now has the value "%V100"^; [ v100=2 ]</code></pre></div>

<h4>Trigger Local Variables</h4>
<div class="erm-paragraph">y-1…y-100 - integer variables<br>
e-1…e-100 - floating point variables<br>
You can use these variables where <em>y</em> and <em>e</em>-variables could have been used earlier.<br>
Features:
</div><ol class="erm-margin-top-zero">
<li>They are NOT saved when you save the game. In fact, each section of the trigger will be completely completed, and you will not be able to save and load the game while the trigger is running.</li>

<!-- llm:end erm.variables 1 -->

