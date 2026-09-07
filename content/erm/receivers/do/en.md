---
{"title":"Repeated function calls (DO)","summary":"DO receiver: repeated function calls, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Repeated function calls (DO)"}
---

## Receiver DO {#ref-rec-do}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-do-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>DO</strong> 
(cyclic function)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-do-red"></span><span class="erm-tone-red">!!DO#1/#2/#3/#4:XXXX;</span> 
- calls the function several times.</strong><br>
         #1 – function number<br>
         #2 – initial value<br>
         #3 – final value<br>
         #4 – step<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-do-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-do-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
As for <a href="../fu/#ref-rec-fu">FU</a>, if you call a cyclic function with an instruction, the body of the function must be described BEFORE the !#DO instruction.<br>
The variable x16 always stores the number of the current function circle. For example, if the delta of a function (final value minus initial value) is 12, 
the first time x16 will be equal to 1, the second time 2, etc. until 12. 
By changing the variable x16 you can actually slow down or speed up the execution of the function, or terminate it, 
by setting x16 to the final value of the function (more than the final value is possible). 
Remember - function parameters can only be set inside the function itself!
For every function everything <em>x</em>-variables (x1..x16) are unique, i.e. two different functions will have different values <em>x</em>-variables.<br>
<span class="erm-anchor" id="ref-rec-do-7"></span><details class="erm-comment"><summary><strong>Note</strong><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(<span class="erm-anchor" id="ref-rec-do-show7"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">Variables x1..x15 are set only once at the start of the function, and x16 - once for each circle of the cyclic function.<br>
Syntax "<strong>?$</strong>" is supported, but the values will be set at the end of the function execution, and not on each of its circles, as described <a href="./#ref-rec-do-more">below</a>.</div></details><br>
<br><u></u><span class="erm-anchor" id="ref-rec-do-2"></span><details class="erm-comment"><summary>Example 1 (<span class="erm-anchor" id="ref-rec-do-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!DO1/2/10/2:P5;
...
!?FU1;
!!IF:M^Variable x1=%X1 and x16=%X16^;
!!VRx1:+1;
!!VRx16:+1;</code></pre>
You should see the following:
<pre class="erm-example"><code class="language-erm"> Variable x1=5 and x16=2
 Variable x1=6 and x16=5
 Variable x1=7 and x16=8</code></pre></div></details><br>
<u></u><span class="erm-anchor" id="ref-rec-do-3"></span><details class="erm-comment"><summary>Example 2 (<span class="erm-anchor" id="ref-rec-do-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!DO2/1/66/1:P47/11; - set the value 47 for the variable x1
!?FU2;
!!VRv5:Sx1+1-x16;
!!IF:M^Variable values: x16=%X16 , and v5=%V5^;
!!VRx16:+7; - jump 8</code></pre>
Instead of 66 you will get only 9 cycles, with these values:<pre>
<strong>x16:</strong>	 1	 9	17	25	33	41	49	57	 65
<strong>v5:</strong>	47	39	31	23	15	 7	-1	-9	-17</pre>

Also <span class="erm-anchor" id="ref-rec-do-erm"></span><span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!VR</strong>x16:+7;</span> can be replaced (for example) by R7:
<pre class="erm-example"><code class="language-erm">!!VRx16:R7; - the next jump will be immediately on the seventh cycle</code></pre>
or (for example) with Rx2: 
<pre class="erm-example"><code class="language-erm">!!VRx16:Rx2; - adding a random number up to x2, in the case above x2 is 11.</code></pre></div></details>
</div></details>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-do-8"></span><details class="erm-comment"><summary>Questions and answers (<span class="erm-anchor" id="ref-rec-do-show8"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-rec-do-q1"></span><div class="erm-tone-quote erm-note"><span class="erm-anchor" id="ref-rec-do-bold"></span><em class="erm-strong">How does x16 affect "nested" DO receivers?</em></div>
Each DO-receiver has its own separate value x16.
<div class="erm-tone-quote erm-note"><em class="erm-strong">Let's say I have the following code: (this would reflect, say, checking a 10x11 array for something).
<pre class="erm-example"><code class="language-erm">!!DO1/1/10/1:P;
!?FU1;
!!DO2/20/30/1:P;
;point A
!?FU2;
;point B</code></pre>
My question is - will point B have a value x16 between 1 and 10 or between 20 and 30?</em></div>
Between 20 and 30.
<div class="erm-tone-quote erm-note"><em class="erm-strong">Also, at point A, will x16 take the value from DO1 or DO2?</em></div>
DO1 because the line is inside the FU1 function.
<div class="erm-tone-quote erm-note"><em class="erm-strong">I have a main function covering all heroes (DO1/0/155/1), 
but for each hero I have to recognize the creatures in his slots (DO2/0/6/1). How is this possible?</em></div>
This can be solved by simply “nesting” one function within another.</div></details>
<div class="erm-tone-quote erm-note erm-paragraph">See also: cycle receivers <a href="../../loops/#ref-rec-re">re/br/co</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-do-p"></span><span class="erm-anchor" id="command-p-1-15"></span><strong><span class="erm-tone-red">P$1[/$2/$3/../$16]</span></strong><br>
$1, $2 … $16 are used to install x1..x16. These parameters can be used anywhere (within the function) 
instead of using standard variables. When you call another function, all parameters will be inherited.<br>
The function starts working after specifying the P command, for example:
<pre class="erm-example"><code class="language-erm">!!DO1/1/15/1:P; - correct
!!DO1/1/15/1; - wrong</code></pre>
All ERM commands (receivers, instructions) for use have at least one 
parameter is required.</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-do-more"></span>
<strong><u></u></strong><br></div><span class="erm-anchor" id="ref-rec-do-4"></span><details class="erm-comment"><summary>DO receiver syntax extension (<span class="erm-anchor" id="ref-rec-do-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
FU and DO receivers have an extended syntax to remember some values. 
You can now use the syntax "<strong>?$</strong>" (get) to write a value to a variable. 
You can use <em>v</em>, <em>y-</em> or <em>y</em> variables for recording values.<br>
For example:
<pre class="erm-example"><code class="language-erm">!!FU...:Pv1/v2/v3/?v4;</code></pre>
Now, if you change the value of the variable x4 inside the function, for example: 
<strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!VR</span>x4:Sx1;</strong>, - the value will be copied to v4 after the end of the cyclic function (cycle). 
The value of the variable (v4) itself is not passed to x4 when calling the function; instead, it passes the variable number (in the example x4 will be 4). 
In a DO receiver, the value of number (4) will be the same for each cycle.<br>
So, if you set it inside the function body, the value will be copied to the destination variable after the loop ends 
and restored to the variable index at the beginning of the next loop.<br>
<u></u><span class="erm-anchor" id="ref-rec-do-5"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-do-show5"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?FU2;
!!VRx2:Sx2+17;
!!VRx3:Sx1+17;

!?FU1;
!!FU2:P13/?y-1/?y-2;

!#IF:M^%Y-1, %Y-2^;
!#FU1:P;
!#IF:M^%Y-1, %Y-2^;
You will see "0, 0" and then "16, 30"</code></pre></div></details>

<div class="erm-paragraph">Also, you can use the syntax "<strong>=$</strong>" to set the value on each DO cycle. That is, if you change this variable inside the body of the function, the variable will be accepted into the next cycle of the function as changed.<br>
<em class="erm-strong">Note:</em> use this syntax for cyclic. functions very carefully, otherwise your script will not work as intended, and you will not immediately understand the cause of the error.</div>
<u></u><span class="erm-anchor" id="ref-rec-do-6"></span><details class="erm-comment"><summary>Examples (<span class="erm-anchor" id="ref-rec-do-show6"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body"><div class="erm-paragraph">
<pre class="erm-example"><code class="language-erm">...
!!VRv35:S10;
!!DO3...:P=v35;
!?FU3;
!!VRv35:Sx1 +1;</code></pre>
In this case, you will get x1 values ​​of 10, 11, 12, 13... at the start of each cycle.<br>
But if you write the code like
<pre class="erm-example"><code class="language-erm">...
!!VRv35:S10;
!!DO3...:Pv35;
!?FU3;
!!VRv35:Sx1 +1;</code></pre>
then x1 will be 10, 10, 10... at the beginning of each cycle.<br>
You can use several of these variables in a function.</div>
<div class="erm-paragraph">You can use similar variables (see example below) with the syntax "<strong>?$</strong>" and "<strong>=$</strong>".
<pre class="erm-example"><code class="language-erm">!?FU2;
!!VRx2:Sx1 +17;
!!IF:M^x=%X1^;

!?FU1;
!!VRy-1:S33;
!!DO2/1/20/1:P=y-1/?y-1;

!#FU1:P;
You will see 33, 50, 67...</code></pre></div>
</div></details>

<hr>



</div></details>
</div></div>
</section>
:::

## Related reference {#related}

[Loops](../../loops/) · [FU](../../receivers/fu/)



## Related commands and tables {#reference-links}

[Function calls (FU)](../fu/) · [ERM debugging and compatibility](../../compatibility/) · [Loops: re, br, co, and DO](../../loops/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3515) — All function x-parameters, which were not passed, are now initialised with zeroes. This behavior is suitable for optional arguments. Just don't pass odd arguments in !!FU:P/!!DO:P/etc, and they will have 0 value.
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4007) — Function parameters (FU:P, DO:P), which were passed using GET-syntax, are now initialized with original variable value. The behavior is similar to pass-by-reference in other programming languages. Example: !?FU(Add3):; ;…
<!-- ERA3-GENERATED:END -->
