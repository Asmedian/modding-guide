# Variables, strings and arrays

ID: erm.variables
URL: https://asmedian.github.io/modding-guide/en/erm/variables/
Part: 2/5
Source references: old-help:cont-flags.htm, old-help:cont-usedvar.htm, era-changelog:era-iii-changelog.txt, era-framework:lib-9999-era---stdlib.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.variables 2 -->
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
but this is not recommended, because there is a risk that other commands may use them.</div>
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
By using this command, all <em>w</em>-variables refer to the selected hero until you change the hero. Use this command before setting, 
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


<!-- llm:end erm.variables 2 -->

