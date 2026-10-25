# Custom dialogs (DL)

ID: erm.receivers.dl
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/dl/
Part: 2/2
Source references: old-help:rec-dl.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.dl 2 -->
	<td style="background-color:Aqua"></td>

	<td></td>
	<td></td>
	<td></td>
	<td style="background-color:lime"></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>

	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>

	<td></td>
	<td></td>

	<td></td>
	<td></td>
	<td></td>
	<td></td>
	
	<td style="background-color:white"></td>
</tr><tr><td class="erm-small"> </td></tr></table></div>
</div></details><br>
11: alignment - <a href="../../tables/text-alignment/#ref-form-align" data-context="true">text alignment</a><br>
12: flags - for 'T' element the value is 8<br>
13: 'hint' - text displayed in the description dialog box when hovering the cursor over this dialog element</div></details>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-dl-16"></span><details class="erm-comment"><summary>'S' - vertically scrolling text (<span class="erm-anchor" id="ref-rec-dl-show16"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
0: skipped<br>
1: 'S'…<br>
2: xxx number - unique Id of the item<br>
3: x position number - X position in the dialog from the top left corner<br>
4: y position number - Y position in the dialog from the top left corner<br>
5: dx number - horizontal point size<br>
6: dy number is the vertical size of the item<br>
7: text - text (can be empty and filled in later)<br>
8: font - font file name<br>
9: color - text color (<a href="./#ref-rec-dl-color">see below</a>)<br>
10: color2 - scrollbar color (0 = do not color; any other value = color blue)<br>
11: 'hint' - text displayed in the description dialog box when hovering the cursor over this dialog element (works only if the scroll element has id=-1)<br></div></details>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-dl-17"></span><details class="erm-comment"><summary>'E' - edited text (<span class="erm-anchor" id="ref-rec-dl-show17"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
0: skipped<br>
1: 'E'…<br>
2: xxx number - unique Id of the item<br>
3: x position number - X position in the dialog from the top left corner<br>
4: y position number - Y position in the dialog from the top left corner<br>
5: dx number - horizontal point size<br>
6: dy number is the vertical size of the item<br>
7: text - text (can be empty and filled in later)<br>
8: font - font file name<br>
9: 'hint' - text displayed in the description dialog box when hovering the cursor over this dialog element</div></details>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-dl-18"></span><details class="erm-comment"><summary>'V' - SMK or BIK video (<span class="erm-anchor" id="ref-rec-dl-show18"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
0: skipped<br>
1: 'V'…<br>
2: xxx number - unique Id of the item<br>
3: x position number - X position in the dialog from the top left corner<br>
4: y position number - Y position in the dialog from the top left corner<br>
5: video number - internal number <a href="../../tables/videos/#ref-form-video" data-context="true">gaming video</a><br>
The video is displayed on top of any other dialogue items and does not support 'hint' descriptions. 
This means that you need to make sure that the video does not extend beyond the boundaries of the dialog window, 
to avoid problems with redrawing.<br>
You can also only use one video per conversation.</div></details>
<div class="erm-paragraph">
<em>Notes:</em><br>
You can store more than one dialog in a template file.<br>
You should not use the same dialog IDs in different template files. 
Each dialogue must have its own unique Id. This also means that some Ids will be busy with WoG dialogues.<br>
Item number 30721 is the default cancellation item. So, if the player presses the button <span class="erm-key">ESC</span> when the dialog is displayed, the dialog will close.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-dl-color"></span>
<u></u></div><span class="erm-anchor" id="ref-rec-dl-19"></span><details class="erm-comment"><summary>Text colors (<span class="erm-anchor" id="ref-rec-dl-show19"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<div class="table-wrap erm-reference-table"><table>
<tr class="erm-small">
	<td width="18"> </td>
	<td width="18">0</td>
	<td width="18">1</td>
	<td width="18">2</td>
	<td width="18">3</td>
	<td width="18">4</td>
	<td width="18">5</td>
	<td width="18">6</td>
	<td width="18">7</td>
	<td width="18">8</td>
	<td width="18">9</td>
	<td width="18">10</td>
	<td width="18">11</td>
	<td width="18">12</td>
	<td width="18">13</td>
	<td width="18">14</td>
	<td width="18">15</td>
	<td width="18">16</td><td></td>
</tr><tr>
	<td>Text color (for 'T' and 'S' elements)</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td style="background-color:white"></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td style="background-color:white"></td>
	<td></td>
	<td style="background-color:lime"></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr><tr><td><br><br><br><br><br><br><br><br><br><br></td><td colspan="18"><span class="erm-anchor" id="ref-rec-dl-24"></span><details class="erm-comment"><summary>more colors...</summary><div class="erm-comment-body">
<em>White: 17, 18, 30 <br>
Light yellow: 19, 21, 22<br>
Yellow: 20, 29<br>
Light green: -6<br>
Green: -10, -4, 25<br>
Blue: -8.26<br>
Blue: 24<br>
Purple: 28<br>
Red: 27<br>
Dark red: -2<br>
Black: -9, -7, -5, -3, -1, 23</em></div></details></td>
</tr></table></div>
</div></details>

</div>
</div>
</section>
:::

## Notes on modern ERA versions {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!DL#id:subcommands;</code></div>
<div class="erm-paragraph">In the table, <code>$</code> denotes a read/write parameter, <code>#</code> an input, and <code>?$</code> an output. Individual commands define their identifiers and ranges.</div>
<hr>
<div class="erm-paragraph">N loads/parses the template for the selected ID without displaying it; flag 1 reports success. S shows it and waits for closure, returning the active closing item.</div>
<hr>
<div class="erm-paragraph">Item commands: 52 X, 53 Y, 61 width; DEF 9 filename/4 frame/12 group/13 player color; PCX 11 filename; scroll 49 position/50 position count; input 51 length/3 text. Final 1 is the classic service parameter. ERA 3.0.4 accepts direct strings and fixes crashes from an omitted fourth argument.</div>
<hr>
<div class="erm-paragraph">C1 schedules active-dialog closure after the handler, without interrupting remaining ERM code. C(1000+cursor) changes the cursor.</div>
<hr>
<div class="erm-paragraph">E enables an item with 1 or disables it with 0. H assigns a hint; legacy code cannot replace a nonempty template hint, so leave it empty when creating the item.</div>
<hr>
<div class="erm-paragraph">Starts map-cell selection with callback: x1 action 0 move/12 LMB down/13 LMB up/14 RMB, x2/x3/x4 coordinates. DL:C1 ends this mode.</div>
<hr>
<div class="erm-paragraph">Dialog IDs must be unique across files. Do not open a second instance of the same ID from the first. Use Framework DL_* helpers for positioning, frame color and RMB display.</div></section>
:::

## Related reference {#related}

[DL](../../triggers/dl/) · [Template](../../tables/dialog-templates/) · [Framework](../../framework/functions/)



## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/) · [Custom dialog events (DL)](../../triggers/dl/) · [Mouse cursors](../../tables/cursors/#c1) · [DL text alignment](../../tables/text-alignment/) · [Game videos](../../tables/videos/)

<!-- llm:end erm.receivers.dl 2 -->

# Repeated function calls (DO)

ID: erm.receivers.do
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/do/
Part: 1/1
Source references: old-help:rec-do.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.do 1 -->
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
Instead of 66 you will get only 9 loops, with these values:<pre>
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
<div class="erm-tone-quote erm-note erm-paragraph">See also: loop receivers <a href="../../loops/#ref-rec-re">re/br/co</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-do-p"></span><span class="erm-anchor" id="command-p-1-15"></span><strong><span class="erm-tone-red">P$1[/$2/$3/../$16]</span></strong><br>
$1, $2 … $16 are used to set x1..x16. These parameters can be used anywhere (within the function) 
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
<strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!VR</span>x4:Sx1;</strong>, - the value will be copied to v4 after the end of the cyclic function (loop). 
The value of the variable (v4) itself is not passed to x4 when calling the function; instead, it passes the variable number (in the example x4 will be 4). 
In a DO receiver, the value of number (4) will be the same for each loop.<br>
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

<div class="erm-paragraph">Also, you can use the syntax "<strong>=$</strong>" to set the value on each DO loop. That is, if you change this variable inside the body of the function, the variable will be accepted into the next loop of the function as changed.<br>
<em class="erm-strong">Note:</em> use this syntax for cyclic. functions very carefully, otherwise your script will not work as intended, and you will not immediately understand the cause of the error.</div>
<u></u><span class="erm-anchor" id="ref-rec-do-6"></span><details class="erm-comment"><summary>Examples (<span class="erm-anchor" id="ref-rec-do-show6"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body"><div class="erm-paragraph">
<pre class="erm-example"><code class="language-erm">...
!!VRv35:S10;
!!DO3...:P=v35;
!?FU3;
!!VRv35:Sx1 +1;</code></pre>
In this case, you will get x1 values ​​of 10, 11, 12, 13... at the start of each loop.<br>
But if you write the code like
<pre class="erm-example"><code class="language-erm">...
!!VRv35:S10;
!!DO3...:Pv35;
!?FU3;
!!VRv35:Sx1 +1;</code></pre>
then x1 will be 10, 10, 10... at the beginning of each loop.<br>
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

<!-- llm:end erm.receivers.do 1 -->

# Creature dwellings (DW)

ID: erm.receivers.dw
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/dw/
Part: 1/1
Source references: old-help:rec-dw.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.dw 1 -->
## Receiver DW {#ref-rec-dw}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-dw-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>DW</strong> (home 
creatures)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-dw-red"></span><span class="erm-tone-red"><br>
!!DW#1/#2/#3:XXXX;</span> 
- creatures' home in X Y L.</strong> 
Housing – <a href="../../tables/creature-dwellings/#ref-form-creaturedwellings" data-context="true">type 17 and 20</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dw-g"></span><span class="erm-anchor" id="command-g-1-2-3"></span>G#1/$2/$3</strong></span><br>
Set guard creatures:<br>
         #1 – slot number (0..6)<br>
         #2 –
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 
(-1 – no)<br>
         #3 – number of creatures</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dw-m"></span><span class="erm-anchor" id="command-m-1-2-3"></span>M#1/$2/$3</strong></span><br>
Set creatures to hire:<br>
         #1 – slot (0..3) - you can 
set up to four different creatures in one dwelling<br>
         #2 –
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> 
(-1 – disable slot)<br>
         #3 – quantity to hire</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dw-o"></span><span class="erm-anchor" id="command-o-o-1"></span>O$</strong></span><br>
Set 
<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">owner $</a> (no update)<br>
<em>Extended syntax:</em><span class="erm-tone-red"><strong><br>
O$/1</strong></span><br>
Transfer control to another player, $ – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">owner</a><br>
<strong><u>Comment</u>:</strong> Unlike DW:O$, this syntax changes the owner of the dwelling by updating the internal game structures (all indicators in the weekly growth statistics in the towns of the corresponding faction are adjusted; the viewing radius around the dwelling is updated).<br>
<span class="erm-anchor" id="ref-rec-dw-bold"></span><em class="erm-strong">Note:</em> For correct operation of your scripts in network mode, use only this syntax.</div>

<hr>















</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[Creature dwellings on the map](../../tables/creature-dwellings/) · [Creature table](../../tables/creatures/) · [Player colors](../../tables/players/)
<!-- llm:end erm.receivers.dw 1 -->

