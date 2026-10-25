# Custom dialogs (DL)

ID: erm.receivers.dl
URL: /en/erm/receivers/dl/
Part: 1/2
Source references: old-help:rec-dl.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.dl 1 -->
## Receiver DL {#ref-rec-dl}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>



<span class="erm-anchor" id="ref-rec-dl-text"></span><div>
<span class="erm-anchor" id="ref-rec-dl-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>DL</strong><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon">(non-standard dialogues)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-dl-red"></span><span class="erm-tone-red">!!DL#:XXXX;</span> working with dialogue # (#&gt;0)</strong><br>
At the moment (TE) command is "raw", <u>full</u> 
functionality and description <u>none</u>.</div>
<span class="erm-anchor" id="ref-rec-dl-23"></span><details class="erm-comment"><summary><strong>Additionally</strong><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(<span class="erm-anchor" id="ref-rec-dl-show23"></span><u class="erm-toggle-label">hide</u>)</summary><div class="erm-comment-body">
When using user dialogs, tasks/desires often arise that cannot be solved using standard EPM capabilities. 
For such purposes, experienced scripters wrote special functions to influence the game’s memory:
<ul><li> Show/delete dialog on click <span class="erm-anchor" id="ref-rec-dl-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">
<pre class="erm-example"><code class="language-erm">!!SN:E5864096/1;                    [Stop the animation]
; y2 = dialog id
!!UN:Cy2/4/?v1;                     [v1 = find our dialogue in memory]
!!SN:E6245264/2/v1;                 [show window]
!!SN:E5864272/1;                    [Bringing back animation]
!!SN:E7518240/2/y2;                 [Destroy HDlg]</code></pre></li>
<li>By default, user dialogs are displayed in the center of the screen.<br>
To change the display coordinates of DL dialogs, use the following function:
<pre class="erm-example"><code class="language-erm">!!DL[No.]:N^Dialog.ini^;   [file with dialog settings]
!!FU(DL_ChangeCoords):P[№]/[X]/[Y];  [change dialog coordinates]
!!DL[No.]:S?v1;            [dialogue call]

!?FU(DL_ChangeCoords);
; x1 - WoG dialog id
; x2 - coord X (-1 center)
; x3 - coord Y (-1 center)
!!VRy1:Sv1;
!!SN:E7510739/1/x1;
!!VRy2:Sv1;
!!if&amp;y2&lt;&gt;0:;
  !!UN:Cy2/4/?y3;
  !!if&amp;x2&gt;=0:;  
    !!UN:Cy3/32/4/?y4;
    !!VRy5:Sy4 :2;
    !!VRx2:-y5;
    ; check for out of bounds X &lt; 0
    !!if&amp;x2&lt;0:;
      !!VRx2:S0; 
    !!el:  
      ; check for out of bounds X &gt; HD_X
      !!UN:C4199496/2/?y6;
      !!VRy7:Sy6 -16 -y4;
      !!VRx2&amp;x2&gt;y7:Sy7;
    !!en;
    ; set x coord
    !!UN:Cy3/24/4/x2;
  !!en:;
  !!if&amp;x3&gt;=0:;  
    !!UN:Cy3/36/4/?y8;
    !!VRy9:Sy8 :2;
    !!VRx3:-y9;
    ; check for out of bounds Y &lt; 0
    !!if&amp;x3&lt;0:;
      !!VRx3:S0; 
    !!el:  
      ; check for out of bounds Y &gt; HD_Y
      !!UN:C4199503/2/?y10;
      !!VRy11:Sy10 -16 -y8;
      !!VRx3&amp;x3&gt;y11:Sy11;
    !!en;    
    ; set y coord
    !!UN:Cy3/28/4/x3;
  !!en:;
!!en:;
!!VRv1:Sy1;</code></pre></li>
<li>If for some reason the DL dialog frame does not draw the colors corresponding to the player, then use the following function in the code:
<pre class="erm-example"><code class="language-erm">!?FU(test_DlgSetColor);
; x1 - dialogue number
!!SN:E7510739/1/x1;
!!UN:Cv1/4/?y1;
!!VRy2:Sy1 +76;
!!UN:Cy2/4/?y3;
!!OW:C?y4;
!!SN:E6288384/2/y1/512/13/y3/y4;</code></pre></li>
<li>When debugging DL dialogue elements, it is very popular to update the txt template on the fly (without restarting the game).<br>
Just execute the following code with any click or tap for convenience:
<pre class="erm-example"><code class="language-erm">!!VRz1:S^TEMPLATE.txt^; enter the name of your template here
!!SN:E5620400/3/z1;
!!VRv2:Sv1+24;
!!UN:Cv2/4/1;
!!SN:E5624576/3/v1;
; The template has been updated in memory - you can watch your DL dialogue again ;)</code></pre></li>
</ul>
</div></details>
<span class="erm-anchor" id="ref-rec-dl-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/dl/#ref-tr-dl">!?DL</a>, <a href="./#ref-rec-dl-format">Template format</a>, <a href="./#ref-rec-dl-name">Template elements</a>.</div>

<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-dl-a"></span><span class="erm-anchor" id="command-a-item-command-value-1"></span>A#1/#2/#3/1<br></strong></span>Change dialog element parameter<br>
        #1 – element number<br>
        #2 – parameter:<br>
</div><span class="erm-anchor" id="ref-rec-dl-t0"></span><blockquote class="erm-margin-top-zero erm-note"><span class="erm-anchor" id="ref-rec-dl-step"></span><div class="erm-indent">
<strong></strong><span class="erm-anchor" id="ref-rec-dl-1"></span><details class="erm-comment"><summary>Subtypes of any control (<span class="erm-anchor" id="ref-rec-dl-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
52 – set X position (without redrawing) (number/numeric variable)<br>
53 – set Y position (without redrawing) (number/numeric variable)<br>
61 – set width (without redrawing) (number/numeric variable)</div></details><br>
<strong></strong><span class="erm-anchor" id="ref-rec-dl-2"></span><details class="erm-comment"><summary>Subtypes def (<span class="erm-anchor" id="ref-rec-dl-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
9 – set the file name (text variable)<br>
4 – set frame (number/numeric variable)<br>
12 – set group (number/numeric variable)<br>
8 – set CloseDialog?<br>
10 – set the palette (devices)?<br>
13 – set the player color to use<br></div></details><br>
<u></u><span class="erm-anchor" id="ref-rec-dl-3"></span><details class="erm-comment"><summary>Button subtypes (<span class="erm-anchor" id="ref-rec-dl-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
9 – set the file name (text variable)<br>
10 – set the palette (devices)?<br>
13 – set the player color to use<br></div></details><br>
<u></u><span class="erm-anchor" id="ref-rec-dl-4"></span><details class="erm-comment"><summary>Subtypes pcx (<span class="erm-anchor" id="ref-rec-dl-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
11 – set the file name (text variable)<br>
10 – set the palette (devices)?<br>
13 – set the player color to use<br></div></details><br>
<u></u><span class="erm-anchor" id="ref-rec-dl-5"></span><details class="erm-comment"><summary>Scroll subtypes (<span class="erm-anchor" id="ref-rec-dl-show5"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
49 – set position (number/numeric variable)<br>
50 – set the number of positions (number/numeric variable)<br></div></details><br>
<u></u><span class="erm-anchor" id="ref-rec-dl-6"></span><details class="erm-comment"><summary>Input field subtypes (<span class="erm-anchor" id="ref-rec-dl-show6"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
51 – set maximum length (number/numeric variable)<br>
3 – set text (text variable)<br>
7 – get text ?</div></details></div>
</blockquote>
<div class="erm-paragraph">        #3 – value depends on #2<br>
The last element of the command [1] is update (a phantom parameter that is best not ignored)</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-dl-bold"></span><em class="erm-strong">Note:</em> the command can be called in a trigger <a href="../../triggers/dl/#ref-tr-dl">!?DL</a>, as well as for editing dialogue on the fly.<br>
Sets flag 1 to True after execution.</div>
<hr><div class="erm-paragraph">
<strong><span class="erm-tone-red"><span class="erm-anchor" id="ref-rec-dl-c"></span><span class="erm-anchor" id="command-c"></span>C#/$2/$3</span></strong><br>
Set special <a href="./#ref-rec-dl-cb">callback</a>-action OR change the mouse cursor.
</div><pre>        # - action type:
	= 1 - close the dialog and return this code as a result
	= (1000 + #) - set the cursor # (see. <a href="../../tables/cursors/#ref-form-mousepointers-c1" data-context="true">cursor table</a>)</pre>
<u></u><br><span class="erm-anchor" id="ref-rec-dl-7"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-dl-show7"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
For this command you don't need to set the dialog number in the trigger part<a href="../../triggers/dl/#ref-tr-dl">!?DL</a>. 
It will work for active dialogue and on any object.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!DL:C1; - close the dialog
!!DL:C1000; - change the cursor to an arrow (regular cursor)
!!DL:C1042; - change the cursor to "sink the ship"</code></pre>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-dl-cb"></span><strong>Callback</strong>-action (or function in programming) is an action, 
which will be executed (called if we are talking about a function) upon exiting the current block of code (usually a function).<br>
Using examples <span class="erm-anchor" id="ref-rec-dl-n1"></span><strong class="erm-tone-purple erm-strong">Glory</strong> it can be seen that with each dialog event (such as mouse movement) a certain ERM function is called, 
which controls all other logic. In the function we choose which actions to react to and what to ignore. 
Command <span class="erm-anchor" id="ref-rec-dl-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">DL</span>:C1</strong> would be a normal function if it closed the dialog and immediately exited the current block of code. 
But the code is executed right up to the end of the trigger.</div></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dl-e"></span><span class="erm-anchor" id="command-e-h"></span>E#1/#2</strong></span><br>
Enable Dialog Element<br>
        #1 – element number<br>
        #2 – enable (1) or disable (0)<br>
<strong><u>Comment</u>:</strong> When you turn off the button on the element, the next frame in the def source will be displayed.<br>
Sets flag 1 to True after execution</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dl-h"></span>H#1/#2</strong></span><br>
Set a tooltip for a dialog element<br>
        #1 – dialogue item number<br>
        #2 – tooltip (appears when you hover the mouse over an element)<br>
<u></u><br></div><span class="erm-anchor" id="ref-rec-dl-9"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-dl-show9"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Parameter #2 can be global or static <em>z</em>-variable.<br>
The command sets flag 1 to False after execution.<br>
<em class="erm-strong">Note:</em> If you set a hint for an element that has already been given a hint in the text dialog template, the game will crash. But if a tooltip for an element is NOT specified in the template (an empty line), it is normally set via <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!DL</span>:H…</strong> .</div></details>
<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dl-n"></span><span class="erm-anchor" id="command-n-template-txt-s"></span>Nz#<br>
N^text^</strong></span><br>
Dialogue Pattern Analysis<br>
        # – template file name (can be text or any <em>z</em>-variable)<br>
<u></u><br></div><span class="erm-anchor" id="ref-rec-dl-8"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-dl-show8"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The text is analyzed before use.<br>
This command loads the template file (if not already loaded), searches for the dialog 
(using Id) in the file and parses it.<br>
It doesn't show dialogue.<br>
The main purpose of this is to give us a chance to customize the loaded dialog before showing it.<br>
Result:<br>
Flag 1 = 1 if successful<br>
Flag 1 = 0 if errors occurred (dialog template not found, for example)<br>
The template format is described <a href="./#ref-rec-dl-format">below</a>.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dl-p"></span><span class="erm-anchor" id="command-p-function"></span>P$</strong></span><br>
Pass action to function $<br>
Function parameters:
</div><pre>        x1 – action:
	0 – mouse moves to another square
	12 – left button pressed
	13 – left button released
	14 – right button pressed
        x2 – X-coordinate of the clicked square
        x3 – Y-coordinate of the clicked square
        x4 – Level of the clicked square</pre>
<u>
</u><span class="erm-anchor" id="ref-rec-dl-10"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-dl-show10"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?OB8/11/0;
!!DL:P12345;
!!IF:M^Now spell is over.^;
!?FU12345;
!!if&amp;x1=0:;          the mouse moves
  !!OBx2/x3/x4:T?y1; get object type squared
  !!if&amp;y1=34:;       hero?
    !!DL:C1042;      cursor "Scuttle Boat"
  !!el:;
    !!DL:C1000;      arrow cursor
  !!en:;
  !!FU:E;
!!en:;
!!if&amp;x1=13:;         left button released
  !!OBx2/x3/x4:T?y1 C?y2;
  !!if&amp;y1=34:;       hero
    !!HEy2:K;        kill the hero
    !!DL:C1000;      arrow cursor
  !!en:;
  !!FU:E;
!!en:;
!!if&amp;x1=14:;         left button pressed
  !!DL:C1;
!!en:;</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<strong>
<span class="erm-tone-red">
<span class="erm-anchor" id="ref-rec-dl-s"></span>S$</span><br>

</strong>Show dialogue<br>
        $ – received object (active object when closing)<br>
Sets flag 1 to False after execution<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-dl-11"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-dl-show11"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Shows a dialog (with a specific number) and waits for it to close. Those. further commands will not be executed immediately, but only after the dialog is closed. You may not use the parameter at all, then the resulting item will simply be ignored. 
You can show one dialogue "from another" and the sequence can be endless, 
but you can only have ONE dialog of the same type on the screen. Those. you can't call dialog X from dialog X.</div></details>
<hr>
<h3><span class="erm-anchor" id="ref-rec-dl-format"></span>Template format.</h3>
<div class="erm-paragraph">This is a standard Hero 3 text table file.<br>
The first two lines are skipped (can be filled with text or left blank).<br>
The leftmost column is also ignored (can be filled with text or left empty).</div>
<div class="erm-paragraph">The template must have at least 14 columns. The last column in the item description 
(immediately after "flag") this is always the tooltip text - if a text item for the tooltip is present. 
A hint requires a place for itself even where it is not needed. If the column is empty, then there is no hint. 
If the template is “cut”, for example, to 13 columns, then for the “Text” item 
(as the “longest”), instead of an empty and “invisible” tooltip, the inscription will be displayed <span class="erm-anchor" id="ref-rec-dl-dl3"></span><span class="erm-game-text">…not 
found the text resourse…</span>.</div>
<div class="erm-paragraph">The dialogue begins with the following lines (in column order):
</div><blockquote class="erm-note">0: skipped (can be used for internal notes)<br>
1: '#' sign - means the beginning of a new dialog template<br>
2: xxx number - unique dialogue ID<br>
3: x position number - X position from top left corner (-1 = screen center)<br>
4: y position number - Y position from top left corner (-1 = screen center)<br>
5: dx number - horizontal size of the dialog<br>
6: dy number - vertical size of the dialog<br>
7: xxx number - number of dialogue items (you can use less, but not more than you chose)<br>
8: xxx number - set the color of the dialog frame to match the color of the player number (-1 = for the current player)<br>
9: text - the name of the PCX file that will be the background. 
<span class="erm-anchor" id="ref-rec-dl-20"></span><details class="erm-comment"><summary><strong>Note</strong> (<span class="erm-anchor" id="ref-rec-dl-show20"></span><u class="erm-toggle-label">hide</u>)</summary><div class="erm-comment-body">
If you do not specify the name of the PCX file (leave the field empty), the background will be created automatically to fit the specified dimensions of the dialog 
(standard background of game dialogues).<br></div></details><br>
10: XXX number - Id of the text item, which is used as a field with the 'hint' description 
(to ignore, enter an empty field value).</blockquote>
<div class="erm-paragraph">The following lines are parsed as dialogue items until there is a '#' sign in the first column. 
This could be just an empty line with a '#', or a line that starts a new dialog.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-dl-name"></span>The most important element is the first character in the first column.<br>
Currently supported elements:</div>
<div class="erm-paragraph"><u></u></div><span class="erm-anchor" id="ref-rec-dl-12"></span><details class="erm-comment"><summary>'P' - PCX drawing (<span class="erm-anchor" id="ref-rec-dl-show12"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
0: skipped<br>
1: 'P'…<br>
2: xxx number - unique Id of the item<br>
3: x position number - X position in the dialog from the top left corner<br>
4: y position number - Y position in the dialog from the top left corner<br>
5: dx number - horizontal point size<br>
6: dy number is the vertical size of the item<br>
7: text - PCX file name<br>
8: flags - for 'P' element the value is 2048<br>
9: 'hint' - text displayed in the description dialog box when hovering the cursor over this dialog element</div></details>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-dl-13"></span><details class="erm-comment"><summary>'D' - frame DEF of the drawing (<span class="erm-anchor" id="ref-rec-dl-show13"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
0: skipped<br>
1: 'D'…<br>
2: xxx number - unique Id of the item<br>
3: x position number - X position in the dialog from the top left corner<br>
4: y position number - Y position in the dialog from the top left corner<br>
5: dx number - horizontal point size<br>
6: dy number is the vertical size of the item<br>
7: text - DEF file name<br>
8: frame - images inside DEF for output<br>
9: flags - for 'D' element the value is 16<br>
10: 'hint' - text displayed in the description dialog box when hovering the cursor over this dialog element</div></details>
<div class="erm-paragraph">
<strong>'A' - animated DEF drawing</strong><br>
 Not supported yet</div>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-dl-14"></span><details class="erm-comment"><summary>'B' - button (special DEF) (<span class="erm-anchor" id="ref-rec-dl-show14"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
0: skipped<br>
1: 'B'…<br>
2: xxx number - unique Id of the item<br>
3: x position number - X position in the dialog from the top left corner<br>
4: y position number - Y position in the dialog from the top left corner<br>
5: dx number - horizontal point size<br>
6: dy number is the vertical size of the item<br>
7: text - DEF file name<br>
8: flags - for the 'B' element the value corresponds to the game code <span class="erm-anchor" id="ref-rec-dl-21"></span><details class="erm-comment"><summary><strong>hotkey</strong> (<span class="erm-anchor" id="ref-rec-dl-show21"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
<div class="erm-indent erm-paragraph"><img src="../../../../assets/erm/ce4395ac72421f21.png" alt="hkeys" loading="lazy" decoding="async" class="erm-figure"></div></div></details><br>
9: 'hint' - text displayed in the description dialog box when hovering the cursor over this dialog element<br>
<div class="erm-tone-quote erm-note erm-paragraph"><em class="erm-strong">Note</em>: button DEF must have at least 2 frames. When you click on 
button, the second frame is shown. Also, when disabling a button (translating an element 
dialog to off mode) the second frame is shown. For example, if you do 
DEF button with spells, the “Call Boat” spells will be displayed, and when 
When you press or turn it off, you will see the following spell - “Flood the boat”.<br>
When you press the button (without holding it down), you exit the dialog (exit to the previous dialog, 
if the dialog was opened from another dialog, and of course the button must be enabled).</div>
<div class="erm-paragraph"><u>Advice</u> from <strong class="erm-tone-purple erm-strong">Master</strong>'a: it is always better to give buttons negative identifiers (Id = -32768…-1). 
This is guaranteed to eliminate coincidences and conflicts with other elements of hero windows (other buttons, inscriptions, pictures, DEFs, etc.), 
many of which are not documented in the ERM reference. Negative Ids work completely fine, but are never encountered in hero code.</div></div></details>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-dl-15"></span><details class="erm-comment"><summary>'T' - text (<span class="erm-anchor" id="ref-rec-dl-show15"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
0: skipped<br>
1: 'T'…<br>
2: xxx number - unique Id of the item<br>
3: x position number - X position in the dialog from the top left corner<br>
4: y position number - Y position in the dialog from the top left corner<br>
5: dx number - horizontal point size<br>
6: dy number is the vertical size of the item<br>
7: text - text (can be empty and filled in later)<br>
8: font - font file name<br>
9: color - text color (<a href="./#ref-rec-dl-color">see below</a>)<br>
10: bkcol - <span class="erm-anchor" id="ref-rec-dl-25"></span><details class="erm-comment"><summary><strong>background colors</strong> (<span class="erm-anchor" id="ref-rec-dl-show25"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
<br>
<div class="table-wrap erm-reference-table"><table class="erm-tone-text">
<tr class="erm-small">
	<td width="20">0</td>
	<td width="20">-1</td>
	<td width="20">-4</td>
	<td width="20">-13</td>
	<td width="20">-18</td>
	<td width="20">4</td>
	<td width="20">33</td>
	<td width="20">-16</td>
	<td width="20">-14</td>
	<td width="20">9</td>
	<td width="20">35</td>

	<td width="20">6</td>
	<td width="20">2</td>
	<td width="20">24</td>
	<td width="20">22</td>
	<td width="20">3</td>
	<td width="20">-5</td>
	<td width="20">-11</td>
	<td width="20">23</td>
	<td width="20">8</td>

	<td width="20">12</td>
	<td width="20">11</td>
	<td width="20">16</td>
	<td width="20">25</td>
	<td width="20">10</td>

	<td width="20">-6</td>
	<td width="20">1</td>

	<td width="20">-12</td>
	<td width="20">-10</td>
	<td width="20">5</td>
	<td width="20">7</td>
	
	<td width="20">13</td>
</tr><tr>
	<td class="erm-align-center" height="22">-</td>
	<td style="background-color:black"></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td style="background-color:blue"></td>
	<td></td>
	<td></td>
	<td></td>

<!-- llm:end erm.receivers.dl 1 -->

