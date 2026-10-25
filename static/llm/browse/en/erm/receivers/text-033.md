# ERA services, memory and sound (SN)

ID: erm.receivers.sn
URL: /en/erm/receivers/sn/
Part: 2/3
Source references: old-help:rec-sn.htm, old-help:rec-sn-era.htm, era-changelog:era-iii-changelog.txt, old-help:era-api.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.sn 2 -->
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
A universal function for installing code hooks in code. The most convenient and automated mode: <code>HookType = HOOKTYPE_BRIDGE</code>, 
in which a low-level adapter to a high-level function will be generated automatically.<br>
<u>High-level function example</u>:
<span class="erm-anchor" id="ref-era-api-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note"><div class="erm-paragraph"><code>PROCEDURE Hook_X (Context: PHookHandlerArgs): LONGBOOL; STDCALL;</code></div>
The function returns a flag indicating that the default code overwritten by the hook should be executed. This code must not contain jumps, but can contain any commands for working with the stack. 
A high-level hook can modify registers by accessing the THookHandlerArgs structure. Through it, the return address to the original code can also be changed.</div></li>
<li><span class="erm-anchor" id="ref-era-api-apihook"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ApiHook</strong></span>; STDCALL;</code><br>
Determines the minimum patch size independently, as opposed to the function <em class="erm-tone-purple erm-legacy-event">Hook</em>.<br>
And <em class="erm-tone-purple erm-legacy-event">ApiHook</em>, and <em class="erm-tone-purple erm-legacy-event">Hook</em> functions return the new address of the erased code in bridge mode (<code>BRIDGE</code>), 
which allows you to also call original functions, bypassing installed hooks.</li>
<li><span class="erm-anchor" id="ref-era-api-clall"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ClearAllIniCache</strong></span>; STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-clini"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ClearIniCache</strong></span>; STDCALL;</code><br>
Completely clears the cache of ini files loaded into memory.</li>

<!-- llm:end erm.receivers.sn 2 -->

