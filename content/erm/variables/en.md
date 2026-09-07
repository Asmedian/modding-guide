---
{"title":"Variables, strings and arrays","summary":"Data types, scope, named variables, flags and array lifetimes.","translationStatus":"reviewed"}
---

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
<div class="erm-paragraph">A flag is a conditional lever that has a True (1) or False (0) position. Like binary numbers, they have only two meanings. 
At the beginning, all flags are set to False (0). The value 1 (True) is usually called "installed", 0 (false) - "not installed".</div>

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
Flag <strong>998=1</strong>, if the battle is Man on Man. Here we have a real multiplayer battle.</div>
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
that it can only be installed, but not read. And if it is shown as ?$, this means that the parameter can be read, but not set.</div>

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
(for example, if a team needs a number for <em>v</em>-variable, you set the value 17, which will be set to the variable v17).</div>

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
To install or test one or more <em>w</em>-variables, you must first set the number of the hero whose value will be taken with the command IF:W.<br>
For example, if you want to install or test w5 hero 27 (Jem), you must first insert<pre class="erm-example"><code class="language-erm">!!IF:W27;</code></pre>in front of the receiver(s) operating with the variable w5.<br>
For the current hero, use -1 instead of a number. Yes,<pre class="erm-example"><code class="language-erm">!!IF:W-1;</code></pre>
means that the next calls to the w variables are for the current hero (before using another command IF:W)<br>
See also: <a href="../receivers/if/#ref-rec-if-w">IF:W</a>, <a href="../receivers/vr/#ref-rec-vr">receiver VR</a><br>
</div><blockquote class="erm-tone-quote erm-note"><strong>Exception:</strong> team <a href="../receivers/ht/#ref-rec-ht-w">!!HT:W</a>, where only the first 100 can be used <em>w</em>-variables.</blockquote>
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
<li>These variables are different for each trigger, and if one trigger is running inside another, they will have different values for these variables. 
You cannot pass values ​​from trigger to trigger using these variables.</li>
<li>All of these variables are set to 0 when any trigger starts.</li>
<li>All functions called from the same trigger will be able to exchange these variables, because they are tied to the trigger, but not to the function.</li>
</ol>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-flags-z"></span>Text variables (z1..z1000)</strong> store characters (one or more) and cannot be used to write numeric variables; 
they can write the number as text, but the number cannot be equated or arithmetic performed on it in any form. 
<em>Z</em>-variables can be concatenated, but are limited to 512 characters each. They can be compared with others <em>z</em>-variables. 
When two are compared <em>z</em>-variables, comparison is NOT case sensitive. So, if the variable z1 contains “This”, it will be equal to the variable z2, 
in which “this” or any other combination of large and small characters is written. When comparing empty lines or strings <em>z</em>-variables are ignored. 
500 new <em>z</em>-variables were added in ERM 2.60 (WoG 3.57) to the existing 500, but remember that z501-z1000 do not retain their value between different cards.<br>
To do this, use z301-z500.<br>
<em class="erm-strong">Note:</em> messages in test variables must not contain characters <strong>;</strong> and <strong>^</strong>.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!VRz567:S^Wrong text ; It contains ^special elements^. ^;
!!VRz567:S^This is the correct text. It contains no "special elements". ^;
!!IF:M^This is the correct text. It does not contain special elements. ^;</code></pre></div>
<div class="erm-paragraph"><strong>Local text variables (z-1..z-10)</strong> similar <em>y</em>-variables, but write the value as <em>z</em>-variables. 
If you set one variable value <em>z-</em>, then call a function that sets other values, then when you return to the initial function you will get the value of the variable, 
equal to the one set before the function call. So you can use variable passing from function to function, but you cannot use the return value. 
Just like regular ones <em>z</em>-variables, they are limited to 512 characters.</div>

<h4><span class="erm-anchor" id="ref-cont-flags-var-spec"></span>Special Variables</h4>
<div class="erm-paragraph">There are several variables in ERM that have special meaning. Like flags 1 and 1000, special variables can be set as you wish at any time, 
but this is not recommended, because there is a risk that other teams may use them.</div>
<div class="erm-paragraph"><strong>Variable v1</strong> used to record the result of some commands. This is not a common occurrence, you can use it in your scripts to store an expression, 
but for a short time; in other words, do not set a value to the variable v1 if you want to keep its value unchanged for a long time.</div>
<div class="erm-paragraph"><strong>Variable z1</strong> used to record text entered by the player in the extended dialog window. If you are not using advanced dialog boxes, 
You don't have to worry about this, but it's still best not to use z1 for long-term storage.</div>
<div class="erm-paragraph"><strong>Variables v998, v999, and v1000</strong> always record the position of an object or event visited by the current hero, or the coordinates of the hero 
(for example, in the trigger !?HM). It is better to leave these variables solely for comparing their values, or to copy their values ​​into other variables.</div>
<div class="erm-paragraph"><strong>Variable x16</strong> (used in functions called <a href="../receivers/do/#ref-rec-do">receiver DO</a>), stores the current function circle number. 
For example, if a function is repeated 12 times (from 1 to 12), the first time x16 will be equal to the value 1, the second time will be 2, etc. If you change the value of variable x16, 
you can "speed up" or "slow down" the function, or exit the function, by setting the value of x16 to the final value (or greater) used in the DO receiver.</div>

<h4><span class="erm-anchor" id="ref-cont-flags-var-init"></span>Initializing Variables</h4>
<div class="erm-paragraph">Like flags, all variables have a value of 0 at the start of the game. However, like flags, some variables will NOT be reset between maps without restarting the game itself. 
Again, this can help you create campaigns.</div>
<div class="erm-paragraph">When you start the game, the following variables will be set to 0 or will take the empty value "" (for <em>z</em>-variables): f…t, v1…v500, v1001-v10000, z1...z300, z501-z1000, w1-w50.</div>
<div class="erm-paragraph">The following variables will retain their current value between games (unless you restart the game): v501-v1000, z301-z500, w51-w200.</div>

<h4><span class="erm-anchor" id="ref-cont-flags-var-show"></span>Showing variables in messages</h4>
<div class="erm-paragraph">The values of variables (and flags) can be shown in messages using special code for each type of variable:</div>
<div class="erm-paragraph"><strong class="erm-tone-red">%F#</strong> → show the current state of the flag #<br>
<strong class="erm-tone-red">%V#</strong> → show value <em>v</em>-variable (# = 1..10000)<br>
<strong class="erm-tone-red">%V@</strong> → show the value of the “fast” variable (@ = f…t)<br>
<strong class="erm-tone-red">%W#</strong> → show the value of the hero variable (# = 1…200)<br>
<strong class="erm-tone-red">%X#</strong> → show the value of the function parameter variable (# = 1…16)<br>
<strong class="erm-tone-red">%Y#</strong> → show the value of a function variable <em>y</em> (# = 1…100)<br>
<strong class="erm-tone-red">%Z#</strong> → show text variable <em>z</em> (# = 1…500)<br>
<strong class="erm-tone-red">%$macro$</strong> → show the value of the variable associated with the macro name "macro"</div>
<div class="erm-paragraph"><em class="erm-strong">Note:</em> To show the value of variables, capital letters are always used after the % sign, and only in relation to fast variables, small letters are always used.<br>
Example of displaying a message with a quick variable <em>j</em>, the usual variable v21 and <em>z</em>-variable z100 in a text variable:
<pre class="erm-example"><code class="language-erm">!!IF:M^Sorry, %Z100, but you only have %Vj gold, you need %V21 gold to buy this artifact.^;</code></pre>
Here it is assumed that the variable z100 stores the name of the hero (let's say, this is Clancy), the variable j stores the amount of gold the player has (let's say, 750), 
the variable v21 contains the price of the artifact (say 2000), and the message will look like this:
</div><blockquote class="erm-margin-top-zero erm-note"><div class="table-wrap erm-reference-table"><table><tr><span class="erm-anchor" id="ref-cont-flags-dl"></span><td class="erm-game-text">Sorry Clancy, but you only have 750 gold, you need 2000 gold to buy this artifact.</td></tr></table></div></blockquote>
<h4><span class="erm-anchor" id="ref-cont-flags-var-as-part"></span>Injecting variables as part of text variables</h4>
<div class="erm-paragraph">Using the commands for displaying messages (see above), you can add variables as part of a text variable. This is a convenient way to contact <em>z</em>-variable.</div>
<div class="erm-paragraph">An example of combining several <em>z</em>-variables and <em>v</em>-variables together in one <em>z</em>-variable:
<pre class="erm-example"><code class="language-erm">!!VRz10:S^Clancy^; - set z10 to “Clancy”
!!VRz11:S^green^; - set z11 to “green”
!!VRz12:S^red^; - set z12 to “red”
!!VRv25:S1 R1000; - set a random value from 1 to 1000 in the variable v25
!!VRz100:S^%Z10 always wanted to have a %Z11 horse, but his horse was %Z12.
He was %V25 years old, and %Z10 had never seen a %Z11 horse in his entire life!^; - set this text to the variable z100
!!IF:M^%Z100.^; - show the text written in the variable z100</code></pre>
This involves generating a random number and writing it to the variable v25 (let it be 247), the player will be shown the following message:
</div><blockquote class="erm-margin-top-zero erm-note"><div class="table-wrap erm-reference-table"><table><tr><td class="erm-align-center erm-game-text">Clancy always wanted a green horse, but his horse was red.<br>
He was 247 years old and Clancy had never seen a green horse in his entire life!</td></tr></table></div></blockquote>

<h4><span class="erm-anchor" id="ref-cont-flags-var-ref"></span>Indirect references to variables</h4>
<div class="erm-paragraph">Receivers that require map coordinates (X, Y and Level) in the receiver body can be used with indirect variable references. 
This is one number that comes first and subsequent ones <em>v</em>-variables contain X, Y and Level to use. For example, if you have the value X stored in the variable v100, 
Y - in v101 and Level in v102, you can use the number 100 in the receiver for a point located at these coordinates.<br>
<u>Example of using local events with indirect references</u>:
<pre class="erm-example"><code class="language-erm">!!VRv100:S10; - number used as X
!!VRv101:S15; - number used as Y
!!VRv102:S0; - number used as Level
!!LE100:M^Strange... There is not a sound of life here.^; - set a message in an event whose coordinates lie in the values v100, v101, v102</code></pre></div>
<h3><span class="erm-anchor" id="ref-cont-flags-var-refs"></span>Indirect Variables</h3>
<div class="erm-paragraph">Sometimes it is useful to be able to refer to a variable (for example, a number between 1 and 1000 for v variables) whose number is stored in another variable. 
In this case, you can use a function repeat like in a DO receiver to write information to a variable. Instead of inserting a number after <em>v</em>, 
you can insert another variable and the value stored in it will be the variable number.<br>
Example index <em>v</em>-variables using <em>y</em>-variables:
<pre class="erm-example"><code class="language-erm">!!VRy10:S7;
!!VRvy10:S5;
!!IF:M^The value of the variable v7 is equal to %V7.^;</code></pre>
The following message will be shown:
</div><blockquote class="erm-margin-top-zero erm-note"><div class="table-wrap erm-reference-table"><table><tr><td class="erm-game-text">The value of the variable v7 is 5.</td></tr></table></div></blockquote>
<div class="erm-paragraph">This is because y10 is equal to 7. And vy10 means that <em>v</em>-the variable has a number stored in the variable y10, which has the value 7. 
Therefore, v7 becomes 5.</div>

<h3><span class="erm-anchor" id="ref-cont-flags-macros"></span>Macros</h3>
<div class="erm-paragraph">If you want to refer to a variable by a more meaningful name, you can set a macro with the MC receiver. The macro can be used almost anywhere, 
where the variable is used and interacts with the variable.<br>
A macro is a link with a name, delimited on both sides by dollar signs: <span class="erm-anchor" id="ref-cont-flags-erm"></span><strong class="erm-inline-code"><span class="erm-tone-blue">$treasure$</span></strong>.<br>
For more information on macros, see <a href="../receivers/mc/#ref-rec-mc">receiver MC</a>.</div>
<div class="erm-paragraph"><strong>Variables Guide</strong></div>
<div class="erm-paragraph">You can use any combination of variable numbers in your script, but it is preferable to use variables from some range, 
so that you can then apply the script to the map without fear of overlapping variables with each other (naturally, you will know which ones you used in the script, 
and you can change them if problems arise). It is also recommended to use fast variables for temporary data (needed only in this trigger), 
and for long-term ones - ordinary global ones. Also, it's a good idea to use <em>y</em>-variables in a function, this frees up more regular variables for your script. 
Hero Variables (<em>w</em>) will be useful only for special needs, there is no need to write any long-term data into them if the hero himself does not need them 
(i.e. the script will affect not only the hero).</div>

<h4>Usage <em>y</em>-variables outside functions
</h4><div class="erm-paragraph">There are a hundred <em>y</em>-variables [1..100]. You can use them almost anywhere. But each trigger function saves all current values <em>y</em>-variables in special slots, 
resetting them to 0, and after executing the last receiver, restores them back.</div>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">ZVSE
!#VRy15:S3;
...
!?...;
!!IF:M^%Y15^; seems 3
...
!!FU234:P;

!!IF:M^%Y15^; seems 3
...
!?FU234;
!!IF:M^%Y15^; will seem 0
!!VRy15:S5;
!!IF:M^%Y15^; seems 5
!?FU234;
!!IF:M^%Y15^; will seem 0
!!VRy15:S7;
!!IF:M^%Y15^; it seems 7</code></pre>

<h3><span class="erm-anchor" id="ref-cont-flags-add"></span>Additional examples:</h3>
<span class="erm-anchor" id="ref-cont-flags-q1"></span><div class="erm-tone-quote erm-note erm-paragraph"><em class="erm-strong">How to use hero variables?</em></div>
<div class="erm-paragraph">To use <em>w</em>-variables, you must first use the command !!IF for the hero you want to change or learn from (use -1 for the current hero). 
By using this command, everything <em>w</em>-variables are further searched for the specified hero until you change the hero. Use this command before installation, 
testing or inspection <em>w</em>-variables. So if you need to use <em>w</em>-hero variables #147 (Dracon), the command will be as follows:
<pre class="erm-example"><code class="language-erm">!!IF:W147;</code></pre>
Then you can set the w1 variable exactly like you would any other variable (see example below).</div>
<div class="erm-paragraph">You have 1 object and 1 event. If hero visited the object, the event will respond as expected.<br>
Place the Magic Well object at position 10/15/0.<br>
Let's set the event at 27/18/0.
<pre class="erm-example"><code class="language-erm">ZVSE
!?OB10/15/0;
!!IF:W-1;
!!VRw1:S1;

!?LE27/18/0;
!!IF:W-1;
!!IF&amp;w1=0:M^Bring me water from the magic well!^;
!!IF&amp;w1=1:M^You brought me water! I will thank you!^;</code></pre></div>
<div class="erm-tone-quote erm-note erm-paragraph"><em class="erm-strong">How can I find out the current day number?</em></div>
<div class="erm-paragraph">It's simple.
<pre class="erm-example"><code class="language-erm">!!VRv123:Sc;</code></pre>
The "c" modifier works the same as "d", but adds the current day.<br>
You can add the current day to any other values.
<pre class="erm-example"><code class="language-erm">!!HE-1:Fcd/c/1/2;</code></pre>
Add the number of the current day to the attack of the current hero, set the defense equal to the number of the current day.<br>
<em class="erm-strong">Note:</em> <em>c</em> - it is NOT a variable, you cannot set, check or get a value into it. 
If you want to check the day number, store it in another variable.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">This won't work:
!!VRy-1&amp;c&lt;=217:S0;
!!VRy-1&amp;c&gt;217:S1;

And this will be:
!!VRy-50:Sc;
!!VRy-1&amp;y-50&lt;=217:S0;
!!VRy-1&amp;y-50&gt;217:S1;
</code></pre></div>
<div class="erm-tone-quote erm-note erm-paragraph"><em class="erm-strong">Hint about generating a random value</em></div>
<div class="erm-paragraph">Let's talk about generating numbers from 1-100, but other than 42, 81 or 99.<br>
There are three unnecessary numbers here, so a number from 1 to 97 is generated.<br>
Then, if it is 42 or higher, add 1. Next, if it is 81 or higher, add 1. If it is 99 or higher, add 1.<br>
You now have a random value, from 1 to 100, but other than 42, 81, or 99.</div>
<div class="erm-paragraph">So if you want to generate a number from 1 to 100, excluding 10..19 and 73, you generate a number from 1 to 89, then if it is 10 or higher, 
add 10, if 73 or higher, add 1.</div>
<div class="erm-tone-quote erm-legacy-code erm-note">See also:<br>
<a href="../triggers/#ref-cont-triggersol">Triggers: general information</a><br>
<a href="../syntax/#ref-cont-receiversol">Receivers: general information</a></div>
</div>
</div>
</section>
:::

## Variables used {#ref-cont-usedvar}

:::erm
<section class="erm-reference" lang="en">
<div>


<span class="erm-anchor" id="ref-cont-usedvar-text"></span><div>
<span class="erm-anchor" id="ref-cont-usedvar-up"></span>
<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title">Variables used</span></strong><br>
<span>WoG scripts for Wake of Gods 3.58f (dated October 25, 2004)<br>
 </span></div>


<h3>Long-term timers, functions, macros and dialogs used:</h3>

<span class="erm-anchor" id="ref-cont-usedvar-q1"></span><blockquote class="erm-tone-quote erm-note">(<strong>####-####</strong>) - temporary variables are indicated in brackets;<br>
<span class="erm-anchor" id="ref-cont-usedvar-dred"></span><strong class="erm-tone-red"> ####-####</strong> - means that variables are reserved for map<wbr>builders, 
who will also want to use WoG scripts in their maps.</blockquote>

<div class="erm-align-justify erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-usedvar-v"></span>Regular variables (v1..v10000):</strong><br>
(v1-v10), v11-v12, (v13-v14), v15-v23, (v24-v34), v35-v36, v40-v45, 
(v50-v54), v70-v71, (v76), v88-v93, (v94-v95), v100, (v101-v111), v119-v142, 
(v143), v144-v147, v150, v157-v200, v205, v210-v250-v257, v266-v284, v295-v299, 
(v300-v308), v310-v312, v320-v359, (v360-v370), v372-v373, v381-v386, v388-v389, 
v400-v422, v424-v444, v450, (v451-v469), v487-v503, v508, v510-v559, 
(v564-v571), v572-v579, v587-v599, (v600-v739), v700-v761, v777, v800, 
v803-v844, v846-v883, v898-v899, (v900-v916), (v920-v934), v950-v966, v975-v976, 
(v991-v993), (v997-v1000), v1100-v1118, v1200-v1210, (v1211), v1212-v1214, 
v1218-v1220, v1222-v1257, v1260-v1265, v1270-v1275, v1300-v1327, v1332-v1336, 
v1340-v1359, v1400-v1412, v1600-v1983, v2000-v2074, v2100-v2135, v2200-v2207, 
v2300-v2408, v2550-v2561, v2600-v2622, v3300-v3314, v3320-v3407, v3500, 
v4101-v4136, v4500-v4603, v4740-v4756, <strong class="erm-tone-red">v5000-v5999</strong>, v7000-v7015, 
v7018-v7092, v7130-v7132, v7177-v7178, v7180-v7183, v7185-v7199, v7206-v7217, 
v7220-v7236, v7300-v7310, v7401-v7456, v8033, v8038-v8043, v9001-v9007, v9300</div>

<div class="erm-align-justify erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-usedvar-z"></span>Text variables used (z1..z1000):</strong><br>
(z1-z10), z11-z21, (z22-z44), z45-z46, (z47-z61), z62-z77, (z78-z90), 
z91-z140, (z141-z142), z143-z176, z190-z199, z201-z239, z241, (z242-z248), 
z250-z269, (z270-z279), z280-z299, (z300-z303), (z310-z319), (z326-z331), 
z332-z354, (z360-z366), z368-z383, (z390-z393), z400, z402-z406, z410-z439, 
z444, z448-z461, z469, (z470-z472), (z480-z492), z493-z495, z500-z698, 
z700-z708, z710-z729, z732-z745, z747-z752, z760-z768, z770-z786, z790-z791, 
z793-z798, z804-z841, z849-z850, <strong class="erm-tone-red">z850-z859</strong>, z860-z876, z890, z904-z907, 
z910-z937, z940-z941, z960-z989, z1000</div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-usedvar-w"></span>Hero variables (w1..w200):</strong><br>
w1-w18, w20-w33 w38-w43, w45, w47-w59, w61-w84, w90-w94, w110-w119, 
<strong class="erm-tone-red">w150-w175</strong></div>

<div class="erm-align-justify erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-usedvar-f"></span>Used flags (1..1000):</strong><br>
System flags (can only be checked): 996-1000 (990-995 reserved)<br>
(1-10), 21, 27, 32-37, 41-43, 49, 56-57, 74-79, 130-131, 140, 145-147, 160-162, 
170-172, 209, 211, 230-239, 266-271, 298-299, 341-366, (400-408), 409-410, 412, 
428-433, 490, <strong class="erm-tone-red">500-599</strong>, 600-603, 710-714, 781-791, 800-801, 870-874, 902-907, 
[990-1000]</div>

<div class="erm-align-justify erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-usedvar-fu"></span>Functions used (1..29999):</strong><br>
FU1-FU47, FU49-FU63, FU100, FU141-FU148, FU160-FU176, FU180-FU184, 
FU200-FU301, FU451, FU463-FU481, FU491-FU493, FU599-FU613, FU620-FU627, 
FU631-FU638, FU640-FU641, FU649-FU651, FU653-FU668, FU670-FU686, FU690-FU726, 
FU730-FU816, FU819-FU863, FU865-FU870, FU900-FU927, FU950, FU1000-FU1003, 
FU1100-FU1110, FU1400-FU1409, FU1872-FU1876, FU2300-FU2406, FU2826, 
FU3300-FU3321, FU3333-FU3334, FU3610-FU3619, FU3620-FU3630, FU3633-FU3638, 
FU3724-FU3733, FU4444, FU4850-FU4853, FU5000-FU5037, FU5200-FU5211, 
FU5219-FU5229, FU5244-FU5246, FU5248-FU5253, FU5260-FU5262, FU5300-FU5312, 
FU5400-FU5411, FU6100-FU6107, FU6200-FU6212, FU6300-FU6304, FU6664-FU6670, 
FU7000-FU7026, FU7030-FU7039, FU7050-FU7053, FU7060-FU7074, FU7100-FU7109, 
FU7120-FU7126, FU7795-FU7826, FU8000, FU8150-FU8166, FU8168, FU8170-FU8227, 
FU8230-FU8231, FU8700-FU8705, FU9600-FU9603, FU10799-FU10816, FU10850-FU10862, 
FU10900-FU10910, FU10920-FU10938, FU13500-FU13507, FU13520-FU13527, 
FU14000-FU14011, FU14800-FU14806, FU14900-FU14901, FU18001-FU18005, 
FU19000,FU20001-FU20003, FU20220-FU20230, FU20521-FU20523, FU20690-FU20701, 
FU21000-FU21014, FU22000-FU22001, FU22300-FU22343, <strong class="erm-tone-red">FU29000-FU29999</strong></div>

<div class="erm-align-justify erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-usedvar-tm"></span>Used timers (1..100):</strong><br>
TM1-TM3, TM10-TM11, TM13-TM14, TM18-TM19, <strong class="erm-tone-red">TM20-TM25</strong>, TM26, TM28, 
TM30-TM32, TM34, TM38, TM41-TM42, TM48, TM50-TM51, TM58, TM61-TM64, TM74-TM80, 
TM82, TM84-TM85 TM90, TM98-TM99</div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-usedvar-mc"></span>Macros used:</strong><br>
$AI$, $aknow$, $aname$, $apower$, $ban$, $cday$, $color$, $day$, $done$, 
$hcolour$, $he-she$,<br>
$hisher$, $hname$, $hnumber$, $hpower$, $hrname$, $hsex$, $lpos$, $man-woman$, 
$month$,<br>
$once$, $pithnum$, $pithy$, $pgold$, $sicon$, $skillnum$, $skname$, $slevel$, 
$spell$,<br>
$week$, $weekday$, $weeks$, $xpos$, $ypos$<br>
$red$, $blue$, $tan$, $green$, $orange$, $purple$, $teal$, $pink$<br>
$monday$, $tuesday$, $wednesday$, $thursday$, $friday$, $saturday$, $sunday$,</div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-usedvar-dl"></span>Dialogues used (1..100):</strong><br>
1, 3, 4, 7-11, 14-15, 20-22, 30-32, <strong class="erm-tone-red">50-59</strong>, 88, 100</div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-usedvar-po"></span>Numbers used</strong> <a href="../receivers/po/#ref-rec-po">PO</a> (by objects)<br>
Adventure Cave (type 63, subtype 57): H, N, O, S, T<br>
Altar of Summoning (type 63, subtype 20): N<br>
Artifacts (type 5): N<br>
Craftsman (type 63, subtype 52): N<br>
Creature Banks (type 16, 24, 25, 84, 85): S<br>
Creature Habitat (type 17, subtype 93 - Rift of the Elements): V3<br>
Death's Tomb (type 63, subtype 15): N<br>
Emerald Tower (type 63, subtype 65) : N<br>
Garrisons (types 33 and 219, subtypes 0 and 1): N<br>
Living Skull (type 63, subtype 50): N, O, V0<br>
Mines: N, S, V3<br>
Mirror of the Way Home (type 63, subtype 66): N<br>
Mystical Garden : N<br>
Obelisk : S, T<br>
Bunch of resources: N<br>
Sign : S<br>
Stone circle (type 63, subtype 21): N<br>
University : N<br>
War Machine Factory: H, O<br>
Artifact War Banner (type 5, subtype 156) : O<br>
Water Wheel : N<br>
Windmill : N<br>
Towns: B0, B1, H, O, S, T, V3<br>
Town (Conflux, first day only - temporary use): N<br>
Town (1 square above the entrance) : N<br>
Trees : B0, B1</div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-usedvar-nm"></span>ERM numbers of WoG options (0..1000):</strong><br>
Internal options: 0-10, 900-906 [907-1000 reserved]<br>
Reserved for mapmakers: <strong class="erm-tone-red">800-899</strong><br>
ERM scripts: 11-77, [78-99 reserved for new scripts], 100-250</div>

<div class="erm-paragraph"><strong>Temporary Variables and Flags</strong> (can also be used in other scripts):<br>
v1-v10, v13-v14, v24-v34, v50-v54, v76, v94-v95, v101-v111, v143, v300-v308, v360-v370,
v451-v469, v564-v571, v600-v739, v900-v916, v920-v934, (v998-v1000), v1211, v4711-v4712;<br>
z1-z9, z22-z44, z47-z61, z78-z90, z141-z142, z242-z248, z270-z279, z300-z303, z310-z319,<br>
z326-z331, z360-z366, z390-z393, z470-z472, z480-z492;<br>
(x1-x16), i..n;<br>
Flags: 1-10, 400-408, (1000).</div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-cont-usedvar-rez"></span>Reserved for mapmakers:</strong><br>
v5000-v5999<br>
z850-z859<br>
w150-w175<br>
Flags: 500-599<br>
FU29000-FU29999<br>
TM20-TM25<br>
Dialogues: 50-59<br>
ERM numbers: 800-899</div>

<div class="erm-paragraph">
<span class="erm-anchor" id="ref-cont-usedvar-script"></span></div><h3>Analysis by scripts:</h3>
⇒ <span class="erm-tone-purple">WOGIFY</span>, <span class="erm-tone-red">script00.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-1"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 132-133, 137-143, 165, 195, 196, 224, 239 (Commander's Banner), 241 (Dragon's Heart), 
242 (Replacement with Ghosts), 245 (Level 7+ creatures get 50% experience), 248 (Show WoG'ification message)<br>
<strong>Object:</strong> no, although there are many object replacements for use in other scripts, and chests, external dwelling values can be changed<br>
<strong>PO Numbers:</strong>  Artifact Warlord Banner (Type 5, Subtype 156): O<br>
<strong>Variables:</strong> v508, v600-v705, v950-v966, v3339, v3500<br>
<strong>Flags:</strong> 9,870 (used by Anders Mithral script), 995<br>
<strong>Functions:</strong> FU670-FU686, FU5209, FU22000-FU22001 (Set AI/Human experience multiplier),<br>
           FU8-FU9 
(Terrain compatibility), FU3333-FU3334 (bit conversion),<br>
           FU25-FU28 
(removal of prohibited artifacts), FU7777-FU7779 (Random spell),<br>
           FU29 (set multiplier to 50% for level 7+ creatures)<br>
<strong>Macros:</strong> $bit$, $spell$<br>
<strong>Macros for the Universal Timer:</strong> $month$,$weeks$,$week$,$day$,$weekday$,$AI$,$color$,$once$,<br>
 $red$,$blue$,$tan$,$green$,$orange$,$purple$,$teal$,$pink$,<br>
 $monday$,$tuesday$,$wednesday$,$thursday$,$friday$,$saturday$,$sunday$<br>
<strong>Dialogues:</strong> DG1, DG15<br>
<strong>Timers:</strong> TM19, TM79</div></details>
<br>
⇒ <span class="erm-tone-purple">CARD RULES</span>, <span class="erm-tone-red">script01.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-2"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 101, 111-130, 230<br>
<strong>Object:</strong> none, except for a few used as triggers for Thieves<br>
<strong>Variables:</strong> z280-z299, z326-z328, z332-z354, v1-v4, v549-v559, v564-v579, v600-v602, v610-v639, v700-v739, v1219, v1262, z680, z681-z697 (reserved for future rules!)<br>
<strong>Flags:</strong> 1-3<br>
<strong>Functions:</strong> FU690-FU726<br>
<strong>Timers:</strong> TM84<br>
<strong>Variables:</strong> v549-v559, v572-v579, z280-z299, and z332-z354 must not be modified by other scripts!</div></details>
<br>
⇒ <span class="erm-tone-purple">CHANGED ARTIFACTS</span>, <span class="erm-tone-red">script02.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-3"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 102<br>
<strong>Object:</strong> the following artifacts have been changed: Bird of Perception (63), Pendant of Life (103), Pendant of Death (104),Targ of the Rampaging Ogre (16),
Dead Man's Boots (56), Pendant of Total Recall (107), Emblem of Cognizance (65), Stoic Watchman (64), Pendant of Second Sight (101), 
Pendant of Holiness (102), Boots of Polarity (59), Garniture of Interference (57), Pendant of Dispassion (100), Pendant of Free Will (105), 
Diplomat's Ring (67), Surcoat of Counterpoise (58), Orb of Vulnerability (93), Sphere of Permanence (92), Statesman's Medal (66), Orb of Inhibition (126)<br>
<strong>Variables:</strong> v600-v628, v630-v631, v640-v648, z326-z331, z410-z428, i-l, w33<br>
<strong>Flags:</strong> 1, 2, 5, 710-714<br>
z410-z428 must not be changed by other scripts!<br>
Other variable variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU599-FU609, FU612-FU613<br>
<strong>Timers:</strong> TM85</div></details>
<br>
⇒ <span class="erm-tone-purple">CHANGED SECONDARY SKILLS</span>, <span class="erm-tone-red">script03.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-4"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 103, 215-218<br>
<strong>Variables:</strong> v35-v36, v487-v489, v587-v589, v900-v916, v920-v934, w43,<br>
z70-z73, z390-z391, z430-z431, z470-z472<br>
<strong>Flags:</strong> 2, 270-271,
v487-v489 and v587-v589 and z430-z431 must not be modified by other scripts!<br>
Flags 270-271 are common to other scripts that use Fnord's network detection function.<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
Warning: This code may be in the middle of another script, <br>
if hero gains a level or a battle is provoked<br>
<strong>Functions:</strong> FU649-FU651, FU653-FU668, FU8166<br>
<strong>Timers:</strong> TM74</div></details>
<br>
⇒ <span class="erm-tone-purple">TOWER ARKAN</span>, <span class="erm-tone-red">script04.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-5"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 104<br>
<strong>Object:</strong> type 63, subtype 9 (<a href="../tables/wog-object-variants/#ref-form-newobj-4" data-context="true">see</a>)<br>
<strong>Variables:</strong> v590, v600-v617, v618, z403<br>
<strong>Flags:</strong> 2-5<br>
z403 must not be changed by other scripts!<br>
v590 must always be 0! Some of my other scripts also use it as 0 to index tooltips.<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU620-FU627</div></details>
<br>
⇒ <span class="erm-tone-purple">BANK</span>, <span class="erm-tone-red">script05.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-6"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 105 (Loan Bank), 181 (Transfer of all resources), 225 (Mithril trade)<br>
<strong>Object:</strong> in the town, or <a href="../tables/wog-object-variants/#ref-form-newobj-5" data-context="true">Black Tower</a><br>
<strong>Variables:</strong> v493-v500, v592-v599<br>
v592-v599, z401 must be inviolable by other scripts!<br>
v590 must be 0! Some of my other scripts also use it as 0 to index tooltips.<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU631-FU638, FU14800-FU14801 (transfer all resources)<br>
<strong>Dialogues:</strong> DG4<br>
<strong>Timers:</strong> TM75</div></details>
<br>
⇒ <span class="erm-tone-purple">HOURGLASS OF ASMODEUS</span>, <span class="erm-tone-red">script06.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-7"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 106<br>
<strong>Object:</strong> modified artifact Clock of the Evil Hour (85)<br>
<strong>Flags</strong>: 1, 266-271<br>
<strong>Variables:</strong>v234, v247, v266-284, v1255-v1256,<br>
v4600 (used in conjunction with the Metamorphs script), v9300, z266-z269, z444<br>
<strong>Functions</strong>: FU6664-FU6670<br>
<strong>Macros:</strong> $xpos$, $ypos$, $lpos$, $hpower$, $apower$, $hsex$, $hnumber$, $aknow$, $hcolour$, $aname$, $hrname$, $hisher$</div></details>
<br>
⇒ <span class="erm-tone-purple">FISHING WELL</span>, <span class="erm-tone-red">script07.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-8"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 107<br>
<strong>Object:</strong> modified Magic Well (Object 49)<br>
<strong>Flags:</strong> 1-6<br>
<strong>Variables:</strong> v300-v305, v308, v998-v1000, z1-z2, z300-z303<br>
<strong>Functions:</strong> FU1100-FU1110, FU14000<br>
<strong>Dialogues:</strong> DG7-DG9</div></details>
<br>
⇒ <span class="erm-tone-purple">RAGGER</span>, <span class="erm-tone-red">script08.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-9"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 108<br>
<strong>Object:</strong> type 63, subtype 8 (<a href="../tables/wog-object-variants/#ref-form-newobj-8" data-context="true">see</a>)<br>
<strong>Variables:</strong> v590, v600-v612, z326-z330, z400<br>
<strong>Flags:</strong> 2<br>
v590 must be 0! Some of my other scripts also use it as 0 to index tooltips.<br>
z400 must not be changed by other scripts!<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU640-FU641</div></details>
<br>
⇒ <span class="erm-tone-purple">TIME MARKET</span>, <span class="erm-tone-red">script09.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-10"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 109<br>
<strong>Object:</strong>  type 63, subtype 51 (<a href="../tables/wog-object-variants/#ref-form-newobj-9" data-context="true">see</a>)<br>
<strong>Flags:</strong> 1-4, 1000<br>
<strong>Variables:</strong> v50-v54, v451-v469, w45, z1, z47-z61, z241-z248<br>
<strong>Functions:</strong> FU451<br>
<strong>Dialogues:</strong> DG14<br>
<strong>Macros:</strong> @hsex@, @slevel@, @pgold@, @sicon@, @cday@, @skillnum@, @pithnum@, @skname@, @hname@, @he-she@, @man-woman@, @pithy@</div></details>
<br>
⇒ <span class="erm-tone-purple">MAGIC MUSHROOMS</span>, <span class="erm-tone-red">script10.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-11"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Bruno<br>
<strong>WoG option number:</strong> 110<br>
<strong>Object:</strong> type 63, subtype: 14 (Mushrooms Air), 18 (Mushrooms Water), 23 (Mushrooms Earth) and 29 (Mushrooms Fire) (<a href="../tables/wog-object-variants/#ref-form-newobj-10" data-context="true">see</a>)<br>
<strong>Variables:</strong> v1-v3 for local use,<br>w20-w27 to record the skills of the heroes who visited the mushroom,<br>
z11-z17 and z159 for help texts<br>
<strong>Functions:</strong> FU10-FU11</div></details>
<br>
⇒ <span class="erm-tone-purple">PALACE OF DREAMS</span>, <span class="erm-tone-red">script11.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-12"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 11<br>
<strong>Object:</strong> type 63, subtype 33 (<a href="../tables/wog-object-variants/#ref-form-newobj-11" data-context="true">see</a>)<br>
<strong>Flags:</strong> 1-3<br>
<strong>Variables:</strong> v1-v2, v101-v111, z1, z3-z6, z450<br>
<strong>Functions:</strong> FU777-FU779</div></details>
<br>
⇒ <span class="erm-tone-purple">LIVING SKULL</span>, <span class="erm-tone-red">script12.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-13"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 12<br>
<strong>Object:</strong> type 63, subtype 50 (<a href="../tables/wog-object-variants/#ref-form-newobj-12" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N, O, V0<br>
<strong>Flags:</strong> 1, 21, 27<br>
<strong>Variables:</strong> v1-v4, v24-v34, v94, v95, z1, z22-z44, z454<br>
<strong>Functions:</strong> FU20-FU24, FU14900-FU14901<br>
<strong>Dialogues:</strong> 20-21<br>
Variables that should NOT be changed outside the script: z454</div></details>
<br>
⇒ <span class="erm-tone-purple">PLAYING CARDS IN THE TAVERN</span>, <span class="erm-tone-red">script13.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-14"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 13<br>
<strong>Object:</strong> modified Tavern (object 95)<br>
<strong>Functions:</strong> FU1-FU2<br>
<strong>Flags:</strong> 1, 400-408<br>
<strong>Variables:</strong> v400-v420, z201-z205, w41-w42</div></details>
<br>
⇒ <span class="erm-tone-purple">ALTAR OF TRANSFORMATION</span>, <span class="erm-tone-red">script14.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-15"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 14<br>
<strong>Object:</strong> type 63, subtype 20 (<a href="../tables/wog-object-variants/#ref-form-newobj-14" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N (for object 63/20)<br>
<strong>Flags:</strong> 1, 209-211<br>
<strong>Variables:</strong> v88-v95, v991-v993, x16, z451-z453<br>
<strong>Functions:</strong> FU18001-FU18005<br>
<strong>Timers:</strong> TM80</div></details>
<br>
⇒ <span class="erm-tone-purple">HOME OF A MYSTERIOUS CREATURE</span>, <span class="erm-tone-red">script15.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-16"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Dieter<br>
<strong>WoG option number:</strong> 15<br>
<strong>Object:</strong> type 63, subtype 3 (<a href="../tables/wog-object-variants/#ref-form-newobj-15" data-context="true">see</a>)<br>
<strong>Variables:</strong> v141-v143, z141-z143, w14<br>
<strong>Flags:</strong> 140,141<br>
<strong>Functions:</strong> FU141-FU145, FU148<br>
<strong>Timers:</strong> TM14<br>
Variables v141, z142, z143 and w14 must not be changed by other scripts!</div></details>
<br>
⇒ <span class="erm-tone-purple">COMBAT ACADEMY</span>, <span class="erm-tone-red">script16.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-17"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Anders<br>
<strong>WoG option number:</strong> 16<br>
<strong>Object:</strong> type 63, subtype 32 (<a href="../tables/wog-object-variants/#ref-form-newobj-16" data-context="true">see</a>)<br>
<strong>Flags:</strong> 1-10<br>
<strong>Variables:</strong> (v1-v2), v320-v342, v381-v383, v388 z382 (must not be used by other scripts),<br>
z1-z4, w38, [z116000-z116037]<br>
<strong>Functions:</strong> FU3610-FU3619, FU8165-FU8167<br>
<strong>Timers:</strong> TM30</div></details>
<br>
⇒ <span class="erm-tone-purple">POTION FOUNTAIN</span>, <span class="erm-tone-red">script17.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-18"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Bruno<br>
<strong>WoG option number:</strong> 17<br>
<strong>Object:</strong> type 63, subtype 48 (<a href="../tables/wog-object-variants/#ref-form-newobj-17" data-context="true">see</a>),<br>
type 63, subtype 2, and modified Fountain of Fortune (object 30)<br>
<strong>Variables:</strong> v1-v12, v40-v41, v1260-v1261, w10-w12, z1-z4, z18-z21<br>
<strong>Flags:</strong> 1, 902-907<br>
<strong>Functions:</strong> FU800-FU802, FU810-FU816</div></details>
<br>
⇒ <span class="erm-tone-purple">POOR MAN'S HOUSE</span>, <span class="erm-tone-red">script18.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-19"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 18<br>
<strong>Object:</strong> type 63, subtype 24 (<a href="../tables/wog-object-variants/#ref-form-newobj-18" data-context="true">see</a>)<br>
<strong>Variables:</strong> v590, v600-v606, z120, z326, z402, w13<br>
z402 must not be changed anywhere!<br>
v590 must be 0! Some of my other scripts also use it as 0 to index tooltips.<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU610-FU611</div></details>
<br>
⇒ <span class="erm-tone-purple">MASTER OF LIFE</span>, <span class="erm-tone-red">script19.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-20"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Sir Four<br>
<strong>WoG option number:</strong> 19<br>
<strong>Variables:</strong> no<br>
<strong>Functions:</strong> FU100<br>
<strong>Timers:</strong> TM2 (Universal Timer)</div></details>
<br>
⇒ <span class="erm-tone-purple">MONSTER WEEK</span>, <span class="erm-tone-red">script20.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-21"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 20, 134, 135, 136, 172, 200<br>
Flags 1, 56, 170-172, 412<br>
v variables: v1-v7, v166-200, v205, v361-v367, v372-373, v1200-1210,<br>
z variables: z190-z199, z495<br>
<strong>Functions:</strong> FU180-FU184, FU5300-FU5310, FU8000<br>
<strong>Timers</strong>: TM61-TM63</div></details>
<br>
⇒ <span class="erm-tone-purple">MERCENARY GUILD</span>, <span class="erm-tone-red">script21.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-22"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 21<br>
<strong>Object:</strong> modified Mercenaries Guild (object 213)<br>
<strong>Variables:</strong> z1-z5, v210-247, v249-257, v3405, z210-z231<br>
<strong>Flags:</strong> 49-51<br>
<strong>Functions:</strong> FU1400-FU1409<br>
<strong>
Dialogues:</strong> DG30-DG32<br>
<strong>Timers:</strong> TM64</div></details>
<br>
⇒ <span class="erm-tone-purple">DAMAGE OF MONSTERS</span>, <span class="erm-tone-red">script22.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-23"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 22<br>
<strong>Object:</strong> creatures (type 54)<br>
<strong>Variables:</strong> v1212-v1214, z119-z141, z469, (z480-z492)<br>
<strong>Flags:</strong> 2, 57<br>
<strong>Functions:</strong> FU2826</div></details>
<br>
⇒ <span class="erm-tone-purple">EXPANSION OF MAGIC</span>, <span class="erm-tone-red">script23.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-24"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 23<br>
<strong>Object:</strong> no, but many objects are used (piles of resources, treasure chests, mills, 
water mills, Star Axes, Gardens of Enlightenment, Mystical Gardens, Rock Knowledge, artifacts, warrior tombs, 
carts, skeletons, water chests, castaways, wreckage, ocean bottle, signs, 
scientists, universities, bonfires, pyramids, witch huts, shrines, trees of Knowledge)<br>
<strong>PO Numbers:</strong> N (for resource piles), N [check only] for Watermills and 
windmills to test for improvement with mithril.<br>
<strong>Flags:</strong> 1-3, 410, 872<br>
<strong>Variables:</strong> v1-v4, v310-v312, z1-z5<br>
<strong>Functions:</strong> FU849, FU5000-FU5037<br>
<strong>Timer:</strong> TM18</div></details>
<br>
⇒ <span class="erm-tone-purple">ADVANCED TIPS FOR EXTERNAL RESIDENCES</span>, <span class="erm-tone-red">script24.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-25"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 24<br>
<strong>Object:</strong> no, but external dwellings are used<br>
<strong>Flags:</strong> 1-3, 58<br>
<strong>Variables:</strong> v1,v94-v95, z1-z3<br>
<strong>Functions:</strong> FU2400-FU2406</div></details>
<br>
⇒ <span class="erm-tone-purple">CARD OPTIONS</span>, <span class="erm-tone-red">script25.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-26"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
Scripts: no Forts, Cartographer replacement, Spell ban, Artifact ban, 
Renaming towns, Buy all creatures, Universal creature improvement, 
Expanded creature improvement, Hero renaming, Hidden skills display, 
Show hero's mana, Overwrite characters and show text with right click, Cancel messages, 
Commander class selection, Expanded heroes, Option to disable autosave, 
Selection of types of neutral towns, Construction of two buildings, Quick battle options<br>
<strong>WoG option number:</strong> 25, 100, 131, 144-148, 150-164, 166-169, 173-180, 182-187, 
220-223, 226-228, 233, 234, 236-238, 240, 241, 243-244, 246-247<br>
<strong>Object:</strong> signs (extended)<br>
<strong>PO Numbers:</strong> Universal Upgrade: O, B0, B1, S (used for towns), S (used for signs)<br>
<strong>Variables:</strong> v975-v976, v1-v5, z1-z4<br>
v3300-v3303, v3310-v3312 (universal creature improvement), v3320-v3330 (disabling messages),<br>
v3393-v3402 (quick battle), v3341 (check for prohibited spells)<br>
Not used, but reserved (for script25): v3304-v3308, v3334-v3336, v3406-v3407<br>
<strong>Temporary</strong> <strong>Variables:</strong> v600-v646, z22-z31<br>
<strong>Flags:</strong> 1-4<br>
<strong>Functions:</strong> FU10799-FU10816   (FU10815 is not used, but is reserved for script25)<br>
  FU10920-FU10931 (buy all)<br>
  FU10932 (check for prohibited spells)<br>
  FU3300-FU3303 (universal creature improvement)<br>
  FU14802-FU14806 (showing hero skills and changing the order of skills)<br>
  FU18 (commander class selection)<br>
  FU3304 (expanded heroes)<br>
  FU50-FU53 (neutral town types selection)<br>
  FU54-FU56 (double buildings)<br>
  FU57 (Quick Battle Options)<br>
  FU10933-FU10936 (Commander's Banner: Quick Pick)<br>
  FU41-FU42 (rearrangements in the hero table)<br>
  FU10937 (hero renaming)<br>
  FU10938 (disable messages)<br>
<strong>Macros:</strong> $ban$<br>
<strong>Dialogues:</strong> 17, 25<br>
<strong>Timers:</strong> 34</div></details>
<br>
⇒ <span class="erm-tone-purple">CRAFTSMAN</span>, <span class="erm-tone-red">script26.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-27"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Dieter<br>
<strong>WoG option number:</strong> 26<br>
<strong>Object:</strong> type 63, subtype 52 (<a href="../tables/wog-object-variants/#ref-form-newobj-26" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N (for the Artisan object)<br>
<strong>Variables:</strong> v157-v164, v4101-v4136, z160-z166,<br>
<strong>Functions:</strong> FU160-FU176<br>
<strong>Flags:</strong> 160-162<br>
<strong>Timers:</strong> TM26</div></details>
<br>
⇒ <span class="erm-tone-purple">BOOK OF SPELLS</span>, <span class="erm-tone-red">script27.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-28"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Anders<br>
<strong>WoG option number:</strong> 27<br>
<strong>Object:</strong> artifact Book of Spells (0)<br>
<strong>Variables:</strong> (v1-v4), (v600-v611), (z1-z9), [z127000-z127003]<br>
<strong>Functions:</strong> FU3633-FU3638</div></details>
<br>
⇒ <span class="erm-tone-purple">SCHOOL OF MAGIC</span>, <span class="erm-tone-red">script28.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-29"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Anders<br>
<strong>WoG option number:</strong> 28<br>
<strong>Object:</strong> type 63, subtype 62 (<a href="../tables/wog-object-variants/#ref-form-newobj-28" data-context="true">see</a>)<br>
<strong>Flags:</strong> (1-10)<br>
<strong>Variables:</strong> v384-v386, v389, z383, w38 (must not be changed by other scripts),<br>
(v1-v5), (z1-z4), [z128000-z128076]<br>
<strong>Timers:</strong> TM30<br>
<strong>Functions:</strong> FU3620-FU3630, FU8165-FU8167</div></details>
<br>
⇒ <span class="erm-tone-purple">CHESTS</span>, <span class="erm-tone-red">script29.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-30"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 29<br>
<strong>Object:</strong> new chests (type 101, subtype 1)<br>
<strong>Variables:</strong> w63, w80, z326, v550-v559, v600-v646<br>
<strong>Flags:</strong> 2<br>
v550-v559 bit table used by several scripts. Should not be changed, but can be used.<br>
w63 from the Adventure Cave script and should not be changed.<br>
w80 must not be modified by other scripts.<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU840-FU848</div></details>
<br>
⇒ <span class="erm-tone-purple">ADVENTURE CAVE</span>, <span class="erm-tone-red">script30.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-31"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 30<br>
<strong>Object:</strong> type 63, subtype 57 (<a href="../tables/wog-object-variants/#ref-form-newobj-30" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> H, N, O, S, T (for Adventure Cave: type 63, subtype 57)<br>
<strong>Variables:</strong> z326-z330, z360-z366, z368-z379, z404, <br>
v150, v510-v548, v550-v559, v600-v669, v1263-v1265, w61-w78, i<br>
v510-v548, w61-w74, and z404 must not be changed anywhere!<br>
v550-v559 bit table, also used by Map Rules. Should not be changed, but can be used.<br>
Other variables can be used elsewhere, but will clutter up the code.<br>
<strong>Flags:</strong> 2, 600-603<br>
<strong>Functions:</strong> FU730-FU776, FU780-FU799, FU820-FU835<br>
<strong>Timers:</strong> TM90</div></details>
<br>
⇒ <span class="erm-tone-purple">CHESTS 2</span>, <span class="erm-tone-red">script31.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-32"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 31<br>
<strong>Object:</strong> new chests (type 101, subtype 5)<br>
<strong>Flags:</strong> 1-2, 409, 1000<br>
<strong>Variables:</strong> v1-v6, z1-z5, w52-w54, w64 (check only)<br>
<strong>Functions:</strong> FU5200-FU5208, FU5210-FU5211<br>
<strong>Timers:</strong> TM28</div></details>
<br>
⇒ <span class="erm-tone-purple">CHALLENGE STONES</span>, <span class="erm-tone-red">script32.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-33"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 32<br>
<strong>Object:</strong> type 63, subtype 21 (<a href="../tables/wog-object-variants/#ref-form-newobj-32" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N (for Challenge Stone: type 63, subtype 21)<br>
<strong>Variables:</strong> v1-9, v234, 247, v360-370, v998-1000, v1211 z1-4, z480-494<br>
All variables can be used except z493 and z494, which store the tooltip text.<br>
<strong>Flags:</strong> 1,2,4, 57 (flag "Creature Delirium")<br>
<strong>Functions:</strong> FU5219-FU5229<br>
<strong>Timers:</strong> TM98</div></details>
<br>
⇒ <span class="erm-tone-purple">LIVING SCROLLS</span>, <span class="erm-tone-red">script33.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-34"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 33<br>
<strong>Object:</strong> advanced spell scrolls (object 93)<br>
<strong>Variables:</strong> v1-v6, z1-z2, v1218, v1220, v1222-v1235, v1257, v9300<br>
<strong>Functions:</strong> FU5244-FU5426, FU5248-FU5255, FU5260-FU5262</div></details>
<br>
⇒ <span class="erm-tone-purple">PROPHECY CARDS</span>, <span class="erm-tone-red">script34.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-35"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Matthew<br>
<strong>WoG option number:</strong> 34<br>
<strong>Object:</strong> extended artifact Cards of Prophecy (47)<br>
<strong>Flags:</strong> 270,271<br>
z-<strong>Variables:</strong> z698, [z134001-z134025]<br>
v-<strong>Variables:</strong> v1300-v1327, v1332-v1336,<br>
<br> 
(also: v3393-v3400 from the Quick Battle script)<br>
<strong>Functions:</strong> FU13500-FU13507</div></details>
<br>
⇒ <span class="erm-tone-purple">EXPANSION OF MYSTICISM</span>, <span class="erm-tone-red">script35.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-36"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Anders<br>
<strong>WoG option number:</strong> 35<br>
<strong>Variables:</strong> (v1-v10), (z1-z9), [z135000-z135177]<br>
<strong>Flags:</strong> (1-10), 56, 172, 173, 412<br>
<strong>Functions:</strong> FU8150-FU8165, FU8230-FU8231<br>
<strong>Timers:</strong> TM30</div></details>
<br>
⇒ <span class="erm-tone-purple">MYTHRIL IMPROVEMENTS</span>, <span class="erm-tone-red">script36.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-37"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Anders<br>
<strong>WoG option number:</strong> 36, 149, 170, 171<br>
<strong>Object:</strong> resource Mithril (type 79, subtype 7), towns, mines, windmills, shipyards, lighthouses, watermills.<br>
<strong>PO Numbers:</strong> N (for Mines, Mystic Gardens, Watermills, Universities and Windmills), 
and also S and V3 for mines (V3 is used for compatibility with the future Mithril Smelting script (???)).<br>
<strong>Variables:</strong> (v1-v6), v70-v71, (z1-z9), z429, z805-z815, z919, [z136000-z136084]<br>
<strong>Flags:</strong> (1, 9, 10), 172, 410, 870-874<br>
<strong>Timers:</strong> TM99<br>
<strong>Functions:</strong> FU709, FU8170-FU8189<br>
PO:N numbers are installed at the entrances to mines, water mills and windmills.</div></details>
<br>
⇒ <span class="erm-tone-purple">CHANGED CREATURES</span>, <span class="erm-tone-red">script37.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-38"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Steven<br>
<strong>WoG option number:</strong> 37, 198, 199<br>
<strong>Flags:</strong> no<br>
<strong>Variables:</strong> v1, v1400-v1412, z860-z876<br>
<strong>Functions:</strong> FU4850-FU4853<br>
<strong>Timers:</strong> TM31-TM32</div></details>
<br>
⇒ <span class="erm-tone-purple">KARMIC BATTLES</span>, <span class="erm-tone-red">script38.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-39"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Dieter<br>
<strong>WoG option number:</strong> 38<br>
<strong>Variables:</strong> v490-v492, w49<br>
<strong>Flags:</strong> 490<br>
<strong>Functions:</strong> FU491-FU494<br>
Variables v490,v491 and flag 490 must not be changed by other scripts!</div></details>
<br>
⇒ <span class="erm-tone-purple">CHANGED HERO SPECIALIZATIONS</span>, <span class="erm-tone-red">script39.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-40"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Alexis<br>
<strong>WoG option number:</strong> 39<br>
<strong>Variables:</strong> v425-v444, v9001, w28-w32, z405-z406<br>
<strong>Functions:</strong> FU803-FU808, FU836-FU838, FU850-FU852<br>
<strong>Flags:</strong> 428, 429, 430<br>
<strong>Timers:</strong> TM77</div></details>
<br>
⇒ <span class="erm-tone-purple">FIRST MONEY</span>, <span class="erm-tone-red">script40.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-41"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Alexis<br>
<strong>WoG option number:</strong> 40<br>
<strong>Variables:</strong> v428-v429<br>
<strong>Timers:</strong> TM78</div></details>
<br>
⇒ <span class="erm-tone-purple">COMPLEX BATTLES</span>, <span class="erm-tone-red">script41.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-42"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Alexis<br>
<strong>WoG option number:</strong> 41<br>
<strong>Variables:</strong> v425-v427<br>
<strong>Functions:</strong> FU809,839</div></details>
<br>
⇒ <span class="erm-tone-purple">GARRISONS</span>, <span class="erm-tone-red">script42.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-43"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 42<br>
<strong>Object:</strong> garrisons (type 33 and 219, subtype 0 and 1)<br>
<strong>PO Numbers:</strong> N (garrisons: type 33 and 219, subtype 0 and 1)<br>
<strong>Variables:</strong> v1-v9, z1-z5, v1236-v1239, v1253-v1254<br>
<strong>Functions:</strong> FU10850-FU10862<br>
<strong>Timers:</strong> TM19 (shared with WoGification), TM48<br>
<strong>Dialogues:</strong> DG88</div></details>
<br>
⇒ <span class="erm-tone-purple">OBELISK RUNES</span>, <span class="erm-tone-red">script43.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-44"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 43<br>
<strong>Variables:</strong> no (local only)<br>
<strong>Functions:</strong> FU5311-FU5312<br>
<strong>PO Numbers:</strong> S, T (for object Obelisk)</div></details>
<br>
⇒ <span class="erm-tone-purple">EMERALD TOWER</span>, <span class="erm-tone-red">script44.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-45"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 44<br>
<strong>Object:</strong>  type 63, subtype 65 (<a href="../tables/wog-object-variants/#ref-form-newobj-45" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N (for the tower itself: type 63, subtype 65)<br>
<strong>Permanent</strong> <strong>Variables:</strong> z816-z841, v1240-v1252 v1255 used in script06.erm), v1270-v1271,<br>
<strong>Temporary</strong> <strong>Variables:</strong> v1-v6, v360-v369, z1-z5, z480-z490<br>
<strong>Functions:</strong> FU10900-FU10910<br>
<strong>Timers:</strong> TM38<br>
<strong>Dialogues:</strong> DG3</div></details>
<br>
⇒ <span class="erm-tone-purple">IMPROVING LOCKS</span>, <span class="erm-tone-red">script45.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-47"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Alexis<br>
<strong>WoG option number:</strong> 45<br>
<strong>Object:</strong> no, but used inside locks (object 98)<br>
<strong>Variables:</strong> v424-v429, v1600-v1983<br>
<strong>Flags:</strong> 432, 433<br>
<strong>Functions:</strong> FU819, FU859-FU863, FU865-FU869<br>
<strong>Timers:</strong> TM82</div></details>
<br>
⇒ <span class="erm-tone-purple">SERPENT BERSERKERS</span>, <span class="erm-tone-red">script46.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-48"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 46<br>
<strong>Permanent</strong> <strong>Variables:</strong> v295-v299, v4740-v4748, v4750-v4756, z940-z941<br>
<strong>Temporary</strong> <strong>Variables:</strong> v1-v6<br>
<strong>Flags:</strong> 2, 298, 299<br>
<strong>Functions:</strong> FU19000</div></details>
<br>
⇒ <span class="erm-tone-purple">CREATURES RELATIONS</span>, <span class="erm-tone-red">script47.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-49"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Matthew<br>
<strong>WoG option number:</strong> 47<br>
<strong>Variables:</strong> v1340-v1359<br>
<strong>Flags:</strong> 130-131<br>
<strong>Timers:</strong> TM13<br>
<strong>Functions:</strong> FU13520-FU13527</div></details>
<br>
⇒ <span class="erm-tone-purple">ADVANCED SECONDARY SKILLS</span>, <span class="erm-tone-red">script48.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-50"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Arstahd<br>
<strong>WoG option number:</strong> 48, 201-214<br>
<strong>Variables:</strong> s, r, j<br>
V-<strong>Variables:</strong> v7018-v7056, v7186-v7199<br>
Z-<strong>Variables:</strong> z1-z3, z700-z706, z722-z725<br>
Y-<strong>Variables:</strong> y1-y11<br>
W-<strong>Variables:</strong> w4-w9<br>
<strong>Functions:</strong> FU7000-FU7026<br>
<strong>Timers:</strong> TM50, TM51<br>
<strong>Flags:</strong> 1, 2</div></details>
<br>
⇒ <span class="erm-tone-purple">Squire</span>, <span class="erm-tone-red">script49.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-51"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Arstahd<br>
<strong>WoG option number:</strong> 49<br>
<strong>Variables:</strong> w117-w119, v7181, v7206-v7217, z1-z9, z910-z918<br>
<strong>Functions:</strong> FU7100-FU7109<br>
<strong>Timer</strong>: TM19 (from WoG's script00)</div></details>
<br>
⇒ <span class="erm-tone-purple">ENHANCED MONSTERS</span>, <span class="erm-tone-red">script50.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-52"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Arstahd<br>
<strong>WoG option number:</strong> 50<br>
<strong>Variables:</strong> i-m, y1-y12, v7000-v7015, v7183, z2, z500-z679<br>
<strong>Flags:</strong> 74, 75, 77, 78<br>
<strong>Functions:</strong> FU7050-FU7053, FU7060-FU7069<br>
<strong>Timers:</strong> TM50</div></details>
<br>
⇒ <span class="erm-tone-purple">ENHANCED COMMANDERS</span>, <span class="erm-tone-red">script51.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-53"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Arstahd<br>
<strong>WoG option number:</strong> 51<br>
<strong>Variables:</strong>  v7080-v7092, v7177, v7185, y1-y9<br>
<strong>Functions:</strong> FU7070-FU7074</div></details>
<br>
⇒ <span class="erm-tone-purple">MIRROR THE WAY HOME</span>, <span class="erm-tone-red">script52.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-54"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Sir Four<br>
<strong>WoG option number:</strong> 52<br>
<strong>Object:</strong> type 63, subtype 66 (<a href="../tables/wog-object-variants/#ref-form-newobj-52" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N (for Mirror Portal: type 63, subtype: 66)<br>
<strong>Variables:</strong> v1-6, v234, v247, v360-v370, v729-v730, z1-z4, z480-z494, z729<br>
All variables can be used except z729, which stores the tooltip text.<br>
<strong>Flags:</strong> 1, 2<br>
<strong>Functions:</strong> FU20521-FU20523</div></details>
<br>
⇒ <span class="erm-tone-purple">DUNGEON OF THE DRAGON MASTER</span>, <span class="erm-tone-red">script53.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-55"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Hermann the Weird<br>
<strong>WoG option number:</strong> 53<br>
<strong>Objects</strong>: Dragon Utopia expanded<br>
<strong>Variables:</strong> v8033, v8035-v8043, z455-z461<br>
<strong>Functions:</strong> FU20001-FU20003<br>
<br>
**Used by FU709 from script01 (map rules) to reduce the power of the Master's Dungeon...<br>
** Compatible with script 57 (neutral creatures).</div></details>
<br>
⇒ <span class="erm-tone-purple">ADVANCED COMBAT VEHICLES I</span>, <span class="erm-tone-red">script54.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-56"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Overlord<br>
<strong>WoG option number:</strong> 54<br>
Version 0.9 Variables<strong>:</strong> TM41, v591, v2000-v2074, FU900-FU927, w81-w83, (z1-z4)<br>
Version 2.3 Variables (?): w110-w116, v2550-v2561, (z1-z2), FU21000-FU21014</div></details>
<br>
⇒ <span class="erm-tone-purple">ADVANCED COMBAT VEHICLES AI</span>, <span class="erm-tone-red">script55.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-57"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Arstahd<br>
<strong>WoG option number:</strong> 55<br>
<strong>Objects</strong>: no<br>
<strong>Variables:</strong> y1-y10, v7180, v7220-v7236, z790-z791<br>
<strong>Flags:</strong> 79<br>
<strong>Functions:</strong> FU7120-FU7126</div></details>
<br>
⇒ <span class="erm-tone-purple">METAMORPHES</span>, <span class="erm-tone-red">script56.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-58"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 56<br>
<strong>Permanent</strong> <strong>Variables:</strong> v4500-v4603, z206-z209<br>
<strong>Temporary</strong> <strong>Variables:</strong> v1-v10, v13-v14, v24<br>
<strong>Functions:</strong> FU9600-FU9603</div></details>
<br>
⇒ <span class="erm-tone-purple">NEUTRAL CREATURES</span>, <span class="erm-tone-red">script57.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-59"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Authors:</strong> Alexandru Balahura, Timothy Pulver and Thomas Franz (samot)<br>
<strong>WoG option number:</strong> 57, 231, 232, 235<br>
<strong>PO Numbers:</strong> S (for creature banks: type 16, 24, 25, 84, 85)<br>
<strong>Variables:</strong> v100, v296, z745<br>
<strong>Functions:</strong> FU1000-FU1001-FU1003, FU5400-FU5411</div></details>
<br>
⇒ <span class="erm-tone-purple">ESPIONAGE</span>, <span class="erm-tone-red">script58.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-60"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Petyo<br>
<strong>WoG option number:</strong> 58<br>
<strong>PO Numbers:</strong> N (1 square above the entry square in town)<br>
<strong>Variables:</strong> v2100-v2135, v2200-v2207<br>
(z1-z7), (z200), z250-z265, z582-z584, z770-z786<br>
w50-w51,w55-w59, f-q<br>
<strong>Flags:</strong> 32-36<br>
<strong>Functions:</strong> FU463-FU481<br>
<strong>Dialogues:</strong> DG11</div></details>
<br>
⇒ <span class="erm-tone-purple">PIERCING SHOT</span>, <span class="erm-tone-red">script59.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-61"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Petyo<br>
<strong>WoG option number:</strong> 59<br>
<strong>Variables:</strong> (v51), v2600-v2622, z66-z69<br>
<strong>Flags:</strong> 341-366<br>
<strong>Functions:</strong> FU31-FU33</div></details>
<br>
⇒ <span class="erm-tone-purple">THE FORGOTTEN SHRINE</span>, <span class="erm-tone-red">script60.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-62"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Petyo<br>
<strong>WoG option number:</strong> 60<br>
Objects: type 63, subtype 22 (<a href="../tables/wog-object-variants/#ref-form-newobj-60" data-context="true">see</a>)<br>
<strong>Variables:</strong> v15-v23, v1100-v1118, z167-z168, w18<br>
<strong>Temporary</strong> <strong>Variables:</strong> m-o<br>
<strong>Flags:</strong> 37<br>
<strong>Functions:</strong> FU12-FU16</div></details>
<br>
⇒ <span class="erm-tone-purple">PROTECTION AGAINST THE ELEMENTS</span>, <span class="erm-tone-red">script61.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-63"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Petyo<br>
<strong>WoG option number:</strong> 61<br>
<strong>Variables:</strong> v15-v18, v2400-v2408<br>
<strong>Flags:</strong> 41-43<br>
<strong>Functions:</strong> FU1872-FU1876</div></details>
<br>
⇒ <span class="erm-tone-purple">STACK SEPARATION</span>, <span class="erm-tone-red">script62.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-64"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 62<br>
<strong>Variables:</strong> v3309, v3313-v3314, v3342-v3392, v3403-v3404, z1-z3<br>
<strong>Flags:</strong> 1, 3-4<br>
<strong>Functions:</strong> FU43-FU49, FU60-FU61</div></details>
<br>
⇒ <span class="erm-tone-purple">LANDSCAPE PASSABILITY</span>, <span class="erm-tone-red">script63.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-65"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 63<br>
<strong>Object:</strong> temporary installation of signs (type 91)<br>
<strong>PO Numbers:</strong> B0, B1 (trees)<br>
<strong>Constant Variables:</strong> v1270, v1272-v1275, w79<br>
<strong>Temporary Variables:</strong> v1-v4, z1<br>
<strong>Functions:</strong> FU14001-FU14011</div></details>
<br>
⇒ <span class="erm-tone-purple">TOBIN SCRIPTS</span>, <span class="erm-tone-red">script64.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-66"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">   (September 19, 2004)<br>
<strong>Author:</strong> Tobyn<br>
<strong>Scripts:</strong><br>
 (Universal Timer), Tobyn's library of functions, Advanced Witches' Huts, change of master,<br>
 Property expansion, First Aid expansion, Art of War, Modified Conflux/Rampart<br>
<strong>WoG option number:</strong> 64, 188-194<br>
<strong>Flags:</strong> 230-239 reserved (and 236-239 in use)<br>
<strong>Constant Variables:</strong> w47, w48, v2300-v2399 reserved (and v2301-v2334, v2360-v2399 in use)<br>
<strong>Temporary Variables:</strong> m-t, flag 1, v248<br>
<strong>Timers:</strong> TM1, TM2 (together both form the Universal Timer)<br>
<strong>Functions:</strong> FU2300-FU2399 reserved (and FU2333-FU2345 in use)<br>
<strong>Text variables:</strong> z232-z239 reserved (and z237-239 used)<br>
<strong>Macros:</strong> $month$,$weeks$,$week$,$day$,$weekday$,$AI$,$color$,$once$,<br>
        
$red$,$blue$,$tan$,$green$,$orange$,$purple$,$teal$,$pink$,<br>
        
$monday$,$tuesday$,$wednesday$,$thursday$,$friday$,$saturday$,$sunday$</div></details>
<br>
⇒ <span class="erm-tone-purple">PAID MONOLITHS</span>, <span class="erm-tone-red">script65.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-67"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Steven<br>
<strong>WoG option number:</strong> 65<br>
<strong>Objects:</strong> expanded monoliths (objects 45 and 43)</div></details>
<br>
⇒ <span class="erm-tone-purple">COMMANDER WITCH HUT</span>, <span class="erm-tone-red">script66.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-68"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald<br>
<strong>WoG option number:</strong> 66<br>
<strong>Objects:</strong> expanded Witch Huts (Object 113)<br>
<strong>Variables:</strong> v600-v627, z326, w40<br>
w40 must not be changed by other scripts!<br>
Other variable variables can be used elsewhere, but will clutter up the code.<br>
<strong>Functions:</strong> FU6300-FU6304<br>
<strong>Dialogues:</strong> 10</div></details>
<br>
⇒ <span class="erm-tone-purple">NEUTRAL CITY</span>, <span class="erm-tone-red">script67.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-69"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald and Jonas<br>
<strong>WoG option number:</strong> 67<br>
<strong>PO Numbers:</strong> type 17, subtype 93 (Elemental Rift): V3<br>
<strong>Variables:</strong> v501, z169-z176, z707-z708<br>
(v501, z169-z176 and z707-z709 must not be modified by other scripts!)<br>
<strong>Functions:</strong> FU6100-FU6107<br>
<strong>Timers:</strong> TM2 (Universal Timer)</div></details>
<br>
⇒ <span class="erm-tone-purple">NEW BATTLEFIELDS</span>, <span class="erm-tone-red">script68.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-70"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Donald with additions of Robert and Jonas<br>
<strong>WoG option number:</strong> 68<br>
<strong>Temporary</strong> <strong>Variables:</strong> v1<br>
<strong>Functions:</strong> FU62</div></details>
<br>
⇒ <span class="erm-tone-purple">SETTING ALLIANCES</span>, <span class="erm-tone-red">script69.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-71"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Sir Four<br>
<strong>WoG option number:</strong> 69<br>
<strong>Variables:</strong> v1-v10, v13, v777, z1-v9, z1000<br>
All variables can be used, except z1000, which stores command settings.<br>
<strong>Flags:</strong> 1,2<br>
<strong>Functions:</strong> FU20690-FU20701<br>
<strong>Timers:</strong> TM11</div></details>
<br>
⇒ <span class="erm-tone-purple">DEAD TOMB</span>, <span class="erm-tone-red">script70.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-72"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Rich Reed<br>
<strong>WoG option number:</strong> 70<br>
<strong>Object:</strong>  type 63, subtype 15 (<a href="../tables/wog-object-variants/#ref-form-newobj-70" data-context="true">see</a>)<br>
<strong>PO Numbers:</strong> N (for object 63/15)<br>
<strong>Variables:</strong> z849-z850, z890, v803-v844, w39<br>
<strong>Flags:</strong> 3, 800, 801</div></details>
<br>
⇒ <span class="erm-tone-purple">ADVANCED ARTIFACTS</span>, <span class="erm-tone-red">script71.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-73"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Arstahd<br>
<strong>WoG option number:</strong> 71, 219<br>
<strong>Objects:</strong> various advanced artifacts<br>
<strong>Variables:</strong> i, y1-y10, v7178, v7182, v7057-v7079, v7130-v7132,<br>
z1-z4, z920-z937, z960-z989<br>
<strong>Flags:</strong> 76<br>
<strong>Functions:</strong> FU7030-FU7039<br>
<strong>Timers:</strong> TM51</div></details>
<br>
⇒ <span class="erm-tone-purple">RANDOM HERO</span>, <span class="erm-tone-red">script72.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-74"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Bonizag<br>
<strong>WoG option number:</strong> 72<br>
<strong>Object:</strong> expanded creature stacks (object 54)<br>
<strong>Variables:</strong> v846, v849, v851, v855-v856, v867 for long-term storage,<br>
z1-z3, z78-z90 temporarily, w81-w83 (note: also used by Robert's War Machines script)<br>
<strong>Flags:</strong> 781, 783, 786 for long-term storage<br>
<strong>Functions:</strong> FU7797-FU7798, FU7825-FU7826</div></details>
<br>
⇒ <span class="erm-tone-purple">ADVANCED COMBAT VEHICLES III</span>, <span class="erm-tone-red">script73.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-75"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Bonizag<br>
<strong>WoG option number:</strong> 73<br>
<strong>Object:</strong> expanded creature stacks (Object 54)<br>
<strong>PO Numbers:</strong> H, O (Combat Vehicle Factory), T (Towns)<br>
<strong>Variables:</strong> v847, v850-v859, v862-v880, v883 for long-term storage, v1-v3, v7800-v7956 temporary,<br>
z1-z3, z78-z90 temporary, w81-w83 (note: also used by Robert's War Machines script)<br>
<strong>Flags:</strong> 781, 783-790 for long-term storage, 2,3,4 temporary<br>
<strong>Functions:</strong> FU7795-FU7820<br>
<strong>Timers:</strong> TM41</div></details>
<br>
⇒ <span class="erm-tone-purple">SUMMARY OF THE ELEMENTALS</span>, <span class="erm-tone-red">script74.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-76"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Bonizag<br>
<strong>WoG option number:</strong> 74<br>
<strong>Variables:</strong> w84, v848, v860-v861, v881-v882, v7600-v7756, v1 temporary, z1-z5 temporary<br>
<strong>Flags:</strong> 791<br>
<strong>Functions:</strong> FU7821-FU7824<br>
<strong>Timers:</strong> TM42</div></details>
<br>
⇒ <span class="erm-tone-purple">SECONDARY SKILLS TEXT</span>, <span class="erm-tone-red">script75.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-77"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Hermann the Weird<br>
<strong>WoG option number:</strong> 75<br>
<strong>Variables:</strong> Eagle Eye: z318, z270-z272; Scouting: z319, z273-z275;<br>
Resistance: z390, z276-z278; Learning: z391, z279, z310, z311; Tactics: z904-z907;<br>
Artillery: z738, z719-z721; Estates: z739, z741-z743; First Aid: z740, z716-z718;<br>
Luck: z747, z726-z728; Mysticism: z748, z710-z712; Navigation: z749-z752;<br>
Search Path: z713, z732-z734; Scholar: z714, z735-z737; Sorcery: z715, z796-z798;<br>
Protection: z744, z793-z795<br>
<strong>And more variables:</strong> Archery: z45, z46, z74; Logistics: z75-77; 
Diplomacy: z91-93;<br>
Leadership: z94-96; Wisdom: z97-99; Ballistics: z110-112; Necromancy: z113-115;<br>
Fire Magic: z116-118; Air Magic: z144-146; Water Magic: z147-149; Earth Magic: z150-152<br>
Offence: z153-155; Intelligence: z156-158<br>
<strong>Functions:</strong> FU17, FU19, FU34-FU36</div></details>
<br>
⇒ <span class="erm-tone-purple">SANCTUARY OF THE COMMANDER</span>, <span class="erm-tone-red">script76.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-78"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 76<br>
<strong>Object:</strong> expanded sanctuary (Object 80)<br>
<strong>Variables:</strong> no (local variables only)<br>
<strong>Functions:</strong> no</div></details>
<br>
⇒ <span class="erm-tone-purple">WOG CHEAT MENU</span>, <span class="erm-tone-red">script77.erm</span> ()<span class="erm-anchor" id="ref-cont-usedvar-79"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
<strong>Author:</strong> Timothy<br>
<strong>WoG option number:</strong> 77<br>
<strong>Flags:</strong> (1..9)<br>
<strong>Variables:</strong> v9002-v9007, (z1..z9)<br>
<strong>Functions:</strong> FU22300-FU22343</div></details>
 
</div></div>
</section>
:::

## Types and scopes {#types}

| Notation | Scope and purpose |
| --- | --- |
| `v1..v10000; f..t` | Shared integers. Quick f..t variables can also conflict with other code. |
| `w1..w200` | Variables of the selected hero; establish HE:W context first. |
| `x1..x16` | Arguments of the current event/function; call syntax determines direction. |
| `y1..y100; e1..e100` | Local integers / floating-point values of the current ERA handler. |
| `y-1..y-100; e-1..e-100` | Shared variables in ERA. The legacy term “main trigger” does not imply nested-call isolation. |
| `z1..z1000` | Shared fixed-buffer strings: up to 511 content bytes in ERA. Older WoG versions had a smaller limit. |
| `z-1..z-10` | Handler-local strings. Do not retain their index beyond the context lifetime. |
| `c` | Current game day. A special value, not a scratch variable. |
| `i^MyMod_value^` | Named integer in ERA shared storage; the mod owns its name and prefix. |
| `s^MyMod_text^` | Named dynamic string, separate from numbered z buffers. |

## Numbers and indices {#numeric}

Integers are signed 32-bit values from -2147483648 to 2147483647; e uses single precision, about seven significant decimal digits. Do not use e for exact large counters. A variable value, its index and its process-memory address are three distinct quantities.

## Named locals {#named}

In ZVSE2 declare a name on first use: `(hero:y)` or `!#VA(hero:y);`. Local names use camelCase and letters/digits; constants use uppercase, while functions may have an underscore prefix. Names compile to indices and do not enlarge the underlying pools. Declaration order of `:x` defines argument order. A new `!?` starts a new naming scope.

## Arrays of locals {#local-arrays}

An array occupies consecutive variables. Indices run 0..length-1; -1 means the last element. `(coords)` equals `(coords[0])`. `(@coords)` is the first ERM variable index, not a memory pointer. `!#VA(-coords);` releases the name and allocated indices at compilation time, not a dynamic array at runtime.

```erm
!?FU(MyMod_Coordinates);
!#VA(coords[3]:y);
!!VR(coords):C10/20/0;
!!VR(last:y):S(coords[-1]);
!!VR(firstIndex:y):S(@coords);
```

## Dynamic arrays {#dynamic-arrays}

SN:M creates M_INT or M_STR arrays; SN:V accesses items. M_STORED is saved with the game, M_TEMP belongs to the current session, and M_TRIGGER_LOCAL belongs to its context. Returning a local array requires the designated lifetime extension, already performed by NewIntArray/NewStrArray. An array ID is not its memory address. Releasing or resizing can invalidate item pointers.

## Strings and interpolation {#strings}

Write literals as `^text^`. In ZVSE2, `%(name)` interpolates a named variable; `%V1`, `%Y1`, `%Z1`, `%F1` are classic substitutions. `%%` produces a literal `%`. Indirect forms such as `y(index)` access a variable by index. Follow the specific command contract for text references: `VR:Z` produces a string index, whereas a low-level call may require a C-string pointer. They are not interchangeable.

## Flags and special context {#flags}

Classic flags 1..1000 are set through IF:V. `&5` tests true, `&-5` false. Flag 1 carries comparison results, and 996 reports a missing LE event. 997/998 concern network combat, 999 a local human, and 1000 changes meaning between map and battle: in combat it distinguishes actual from theoretical battle. Do not use these indices for persistent mod state. Historically flags 501..1000 could survive a new map: initialize your own data explicitly.

## Shared state and compatibility {#shared}

Legacy UsedVar tables describe a particular WoG package, not free indices in every modern build. Prefer prefixed i^/s^ storage and local y/e/z for new mods. Preserve v1 around SN:E/SN:F when its previous value is still needed. Framework temp/result strings are scratch storage, not mod data slots.

## Detailed contracts {#links}

[VR](../receivers/vr/) · [SN](../receivers/sn/) · [IF](../receivers/if/) · [Framework globals](../framework/globals/) · [Constants](../framework/constants/) · [Text files](../tables/text-resources/)

## Related commands and tables {#reference-links}

[Flags, messages and choices (IF)](../receivers/if/#command-a0100010000-s0100010000-r0100010000-v) · [Flags, messages and choices (IF)](../receivers/if/) · [Battle start and completion (BA)](../triggers/ba/) · [Battle actions (BG)](../triggers/bg/) · [Battlefield setup (BF)](../triggers/bf/) · [Global events (GE)](../receivers/ge/) · [ERM debugging and compatibility](../compatibility/) · [ERA services, memory and sound (SN)](../receivers/sn/#command-xvalues) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/#command-w-x) · [Object-type hints (HT)](../receivers/ht/#command-w-1-2-3) · [Function calls (FU)](../receivers/fu/) · [Repeated function calls (DO)](../receivers/do/) · [Hero level-up (HL)](../triggers/hl/) · [Classic ERM macros (MC)](../receivers/mc/) · [ERM triggers and events](../triggers/) · [ERM syntax: ZVSE and ZVSE2](../syntax/) · [Map-cell data (PO)](../receivers/po/) · [WoG object variants](../tables/wog-object-variants/#values)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.16, +](../compatibility/#era3-v-3-9-16-l272) — Rewritten IF:D, IF:F, IF:E commands (multipurpose dialog implementation). Features: -) Whenever string is accepted as a parameter, it may be any string or string literal. The value will be copied to global settings, no m…
- [ERA 3.9.15, +](../compatibility/#era3-v-3-9-15-l432) — Added support for ERM script libraries. Scripts, located in "Data/s/lib" directory are considered library scripts. They are loaded before other global scripts and before all map scripts (both internal and external). Such…
- [ERA 3.9.15, +](../compatibility/#era3-v-3-9-15-l436) — Fixed DL:H command. Any string is accepted as hint. The hint is copied to a dialog internal location and automatically freed on dialog closing. No more need to use global z-variables for custom dialog hints. Hints are no…
- [ERA 3.4.0, +](../compatibility/#era3-v-3-4-0-l1881) — Improved ERM 2 compiler. It became possible to use named local variables and quick variables (f..t) as arrays subscripts. Syntax: (array&#91;index&#93;) or (array&#91;i&#93;). Index value is evaluated BEFORE current receiver, thus do no…
- [ERA 3.3.0, +](../compatibility/#era3-v-3-3-0-l2146) — Added new ERM command SN:B to work with binary buffers on a low level. It allows to: - get address of local or static global ERM variable; - read/write integer/string from/to specific address. !!SN:B(intAddress) or ?(int…
- [ERA 3.2.0, +](../compatibility/#era3-v-3-2-0-l2618) — Added the following functions to "Era Erm Framework" mod: !?FU(NewIntArray); ; Creates and returns trigger local array of integers. ; Alternative function arguments: ; (?result) The result array will have 0 items. ; (siz…
- [ERA 3.2.0, *](../compatibility/#era3-v-3-2-0-l2803) — Trigger-local strings and array lifetime was increased. Such items are disposed only after the whole chain of same trigger handlers is processed.
- [ERA 3.2.0, -](../compatibility/#era3-v-3-2-0-l2812) — Fixed re/FU/DO/OB/...dozens of commands... didn't support global named variables in receiver parameters. Examples: !!FUi^edu_someFunc^:P; !!OBi^edu_x^/i^edu_y^/i^edu_z^:T?(objType:y);
- [ERA 3.1.0, +](../compatibility/#era3-v-3-1-0-l3023) — Added possibility to extend lifetime of trigger-local SN:M array to parent scope. It's now possible to return trigger-local arrays to caller function without necessity to free that array afterwards. Thus automatical memo…
- [ERA 3.1.0, +](../compatibility/#era3-v-3-1-0-l3050) — Added support for local z-strings as function parameters. They will be converted to temporary read-only z-variable indexes. Example: !!VR(str:z):S^haVe A nIce day!^; !!FU(StrToUpper):P(str); here z-1 will be converted in…
- [ERA 3.1.0, +](../compatibility/#era3-v-3-1-0-l3073) — Added support for e-variables in VR:C. !!VR(floats&#91;3&#93;:e):C0/0/0; Do not forget, that no integer-float conversion is performed in VR:C, all values are copied as is. The only safe constant for e-variables is 0.
- [ERA 3.1.0, +](../compatibility/#era3-v-3-1-0-l3079) — Improved UN:U command. It does not raise error if no more objects are found, but sets x-coordinate to -1 instead. Thus no premature objects counting is required. A new syntax with 6 parameters was added to allow using ar…
- [ERA 3.1.0, *](../compatibility/#era3-v-3-1-0-l3124) — x16 can now be allocated as local named variable. Previosly the following code would lead to error: !!VA(args&#91;16&#93;:x);
- [ERA 3.1.0, -](../compatibility/#era3-v-3-1-0-l3152) — Removed rest files from "Animated Trees" mod. Credits: Archer30. &#91;!&#93; Note, that SN:O does not work with global named variables. &#91;!&#93; Note, that v1 must not be used to store anything non-temporal, because from Era 2.X it's…
- [ERA 3.0.3, +](../compatibility/#era3-v-3-0-3-l3414) — Added command SN:H^art^/art ID/0 (name) or 1 (description)/$text allowing to get/set any artifact name/description without z-variables dependency.
- [ERA 3.0.1, +](../compatibility/#era3-v-3-0-1-l3518) — Added new syntax to !!FU:A command. Set default values for parameters. !!FU:A#1/&#91;#2.../#3...&#93;; #1 - default value for the first parameter (x1) #2 - default value for the second parameter... The command changes values onl…
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l3839) — Floating point variables (e-variables) are passed to ERM commands as raw 4 bytes value, treated by most commands as integer, which may cause many bugs, unless you know, what you are doing. The exception is !!VR:S command…
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l3864) — New command !!VR$1:Z#2. Creates trigger local temporary z-variable with given contents and assigns its index to integer variable. $1 - integer variable. #2 - any string. The command can be used to create temporal z-varia…
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l3871) — ^....^ literal in any ERM command is interpolated and replaced by temporal z-variable index before receiver execution. This z-variable is released right after receiver is executed. Don't use string literals in WoG 3.58 h…
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l3890) — Only regular ERT variables are interpolated automatically. Regular z-variables and temporal ert variables are not interpolated in receivers. It means, that !!VRz2:S^%%y5^; z2 is now really "%y5" Previously interpolation …
- [All related entries](../compatibility/#era3-changelog)
<!-- ERA3-GENERATED:END -->
