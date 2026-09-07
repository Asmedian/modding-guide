---
{"title":"Variable-usage logging (VC)","summary":"VC receiver: variable-usage logging, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Variable-usage logging (VC)"}
---

## Instruction VC {#ref-rec-vc}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-vc-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Instructions <strong>VC</strong> (control of variables)</span></div>
<div class="erm-paragraph">
<br>Used for registration <a href="../../variables/#ref-cont-flags-fl">flags</a>, <a href="../../variables/#ref-cont-flags-var">variables</a>, 
<a href="../fu/#ref-rec-fu">functions</a> and <a href="../do/#ref-rec-do">circular functions</a>, used in the script.<br>
This allows you to save the used values to an external file <em class="erm-legacy-file">ERMVarsUsed.LOG</em> for later use.<br>
<strong>Attention:</strong> this receiver should be used as an instruction - <span class="erm-anchor" id="ref-rec-vc-erm"></span><strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VC</span></strong> -, otherwise this syntax will not make sense.<br>
<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-vc-1"></span><details class="erm-comment"><summary>Comments and notes (<span class="erm-anchor" id="ref-rec-vc-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Note that the write and save operation is only triggered when the ERM compiler executes these commands. 
i.e. during the process of WoG'ification of the map, before the first day. So, you only need to start the game to record all the variables used.<br>
You can use the commands [<a href="./#ref-rec-vc-b">B</a>] and [<a href="./#ref-rec-vc-e">E</a>] in pairs more than once to analyze different parts of the script. The effect will be the same.<br>
<div class="erm-paragraph"><u>Example</u>: variable v10 and v12 will be written, and v11 will be skipped:
<pre class="erm-example"><code class="language-erm">!#VC:C B;	clear list, start recording
!!VRv10:...;	use the variable v10
!#VC:E;		stop recording
!!VRv11:...;	use the variable v11
!#VC:B;		let's start recording
!!VRv12:...;	use the variable v12
!#VC:E W C;	stop recording, write the ERMVarsUsed.LOG file, clear the list</code></pre>
As you can see, the list is cleared at the beginning and at the end of the operation.</div>

<div class="erm-paragraph">You can also use [ sections multiple times<a href="./#ref-rec-vc-y">Y</a>] and [<a href="./#ref-rec-vc-n">N</a>].
<pre class="erm-example"><code class="language-erm">!#VC:C B;
!!VRv10:...;
!!VRv11:...;
!#VC:Y;
!!VRv11:...;
!!VRv12:...;
!#VC:N;
!!VRv12:...;
!!VRv14:...;
!#VC:Y;
!!VRv14:...;
!#VC:N;
!!VRv13:...;
!#VC:E W C;</code></pre>
These variables will be designated as repeating: v11 and v14; - and regular variables: v10,v12,v13<br>
(v12 is not designated as a cross-reference, since it was not used before verification.)</div>
<div class="erm-paragraph">The VC instruction allows you to register the following types of elements:
</div><span class="erm-anchor" id="ref-rec-vc-t0"></span><ol class="erm-margin-top-zero">

<li>flags: 1..1000</li>
<li><em>v</em>-variables: v1…v10000</li>
<li><em>w</em>-variables: w1…w100</li>
<li><em>z</em>-variables: z1…z1000<br>
Marked:<br>
- 'p' if used as a parameter<br>
- '&amp;' if used in a section <strong>&amp;</strong><br>
- '|' if used in section <strong>|</strong><br>
- '*' if repeated<br>
</li><li>Timers: TM1…TM100 <br>
- marked 't' if trigger was found<br>
- marked 'r' if receiver or instruction were found</li>
<li>Functions/cycles: FU1…FU30000, DO1…DO30000<br>
- marked 't' if trigger (the function itself) was found<br>
- marked 'r' if receiver or an instruction calling the function was found<br>
- marked 'd' if receiver or the instruction causing the loop was found</li></ol>
<div class="erm-paragraph">VC cannot write indirect variables like: <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!VR</span>vx10:…;</strong><br>
The variable number is unknown at this time because x10 is currently undefined.<br>
This means that if you want to check your script, and if such indirect variables were used in it, 
then you have to check it manually, line by line. To avoid such work in the future, you can initialize all the necessary variables at the beginning, 
for example:<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>…:S0;</strong> at the beginning of the script to record this variable.</div>
<div class="erm-paragraph">You can record variables from multiple script files. Let's say you can put <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>:C B;</strong> to file <em class="erm-legacy-file">script00.erm</em> and 
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>:E W C;</strong> in <em class="erm-legacy-file">script40.erm</em>and you will get a complete list of variables in all scripts from 0 to 40.<br>
The log file is created when the map is loaded and is called <em class="erm-legacy-file">ERMVarsUsed.LOG</em>. If the file 
already exists with the same name, it will be overwritten.<br>
<br>
We recommend using the Y and N sections to record the /timers/type variables used in your script and in other scripts.<br>
To do this, you must set your script number higher than other scripts, write variables in all other scripts, and use sections 
Y and N in your script.<br>
<u>Example</u>:<br>
You have scripts 0,1,2,3,4,5...50 and you need to check your script for matching variables.<br>
</div><ol class="erm-margin-top-zero">
<li>Set your script number, for example, <em class="erm-legacy-file">script99.erm</em> (condition met: 99 &gt; 50).</li>
<li>Add "start recording" to the beginning of the first script (<em class="erm-legacy-file">script00.erm</em>):<br>
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>:C B;</strong></li>
<li>Add "start checking for duplicate variables" to the beginning of your script (<em class="erm-legacy-file">script99.erm</em>):<br>
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>:Y;</strong></li>
<li>Add "stop checking for duplicate variables" at the end of your script (<em class="erm-legacy-file">script99.erm</em>):<br>
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>:N;</strong></li>
<li>Add "stop recording and record" to the end of your script (<em class="erm-legacy-file">script99.erm</em>):<br>
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>:E W C;</strong></li>
</ol>
So, if your script uses variables/timers/scope of activities that have already been used in previous scripts, they will be noted in the log file.<br>
If you want to do the same operation for internal map scripts, set the script number to the day of the event and do the above.</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vc-red"></span><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vc-b"></span><span class="erm-anchor" id="command-b-e-c-w"></span>B</strong></span><br>
Start logging used variables</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vc-c"></span>C</strong></span><br>
Clear list of used ERM variables</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vc-e"></span>E</strong></span><br>
Stop registering variables</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vc-n"></span>N</strong></span><br>
Stop section checking</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vc-w"></span>W</strong></span><br>
Write variables to <em class="erm-legacy-file">ERMVarsUsed.LOG</em></div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vc-y"></span><span class="erm-anchor" id="command-y-n"></span>Y</strong></span><br>
Start section checking</div>
<hr>
















</div>
</div>
</section>
:::

## Related commands and tables {#reference-links}

[Variables, strings and arrays](../../variables/) · [Function calls (FU)](../fu/) · [Repeated function calls (DO)](../do/)
