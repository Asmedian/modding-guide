---
{"title":"Mouse-event context (CM)","summary":"CM receiver: mouse-event context, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Mouse-event context (CM)"}
---

## Receiver CM {#ref-rec-cm}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-cm-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver 
<strong>CM</strong> (info by mouse click)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-cm-red"></span><span class="erm-tone-red"><br>
!!CM:XXXX;</span> 
- set/check/get information by clicking.</strong> <br>
Must follow the trigger <a href="../../triggers/cm/#ref-tr-cm">!?CM</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cm-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-cm-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	If you want to show a dialog box that is not 
will linger on the screen (as with a normal click <span class="erm-anchor" id="ref-rec-cm-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">), 
use the command <a href="../if/#ref-rec-if-q">IF:Q</a> with option 4. This will create 
a text window without buttons that will disappear immediately after releasing the mouse button. 
If you don't need an image, use -1 values ​​for the image type/subtype.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-a"></span><span class="erm-anchor" id="command-a-1-2"></span><strong><span class="erm-tone-red">A$1/$2</span></strong><br>
Absolute cursor position in pixels<br>
         $1 – X<br>
         $2 – Y</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-d"></span><span class="erm-anchor" id="command-d"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
Set/check/get a position on battlefield<br>
         $ - 
	<a href="../../tables/battlefield/#ref-form-bf" data-context="true">item number</a><br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cm-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-cm-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
	Field grid squares have values from 0 to 186, background and 
the outer squares have a value of -1. The left hero has square number 252, 
right - 253.<br>
The central and upper towers have position values of 254 and 255 respectively.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-f"></span><span class="erm-anchor" id="command-f"></span><span class="erm-tone-red"><strong>F$</strong></span><br>
Mouse click flags<br>
         0 = <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> (left mouse button)<br>
         1 = <span class="erm-key">Shift</span> + <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
         4 = <span class="erm-key">Ctrl</span> + <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
         32 = <span class="erm-key">Alt</span> + <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
         512 = <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> (right mouse button)<br>
Numbers can be combined, for example 5 would mean 
what should be pressed <span class="erm-key">Shift</span>+<span class="erm-key">Ctrl</span>+<img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">.<br>
The right button cannot be combined with anything.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-cm-h"></span><span class="erm-anchor" id="command-h-1-2"></span>H$1/$2</strong></span><br>
Get hero number<br>
        $1 – number of the left hero<br>
        $2 – number of the right hero<br>
You can only receive or check them.<br>
You can also use this option in body <a href="../../triggers/cm/#ref-tr-cm">
!?CM2</a> to get the left hero as active, the second one is a phantom, he is not 
exists.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-i"></span><span class="erm-anchor" id="command-i"></span><span class="erm-tone-red"><strong>I$</strong></span><br>
Conventionally designated 
	<a href="../../tables/dialog-items/#ref-form-cmi" data-context="true">place</a>, where the cursor is placed when clicked.<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-cm-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-cm-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Some areas will not register when right clicked, and some have a value of 0.<br>
This command always gets the correct value in the town screen, even if one building overlaps another. 
It is also set to -1 if no building is found under the cursor.<br>
A description of a town area marked "inactive" means that the object registers when clicked, but has no game function. 
Such objects are different for each town.
<br>
The area number when clicking on a mage guild always takes the value of the highest level of the guild 
(i.e. if you have the 3rd level of the mage guild, when you click anywhere in the guild, the value of the area will be equal to the value of the third level of the guild). 
Also, improved dwellings always take on the values ​​of improved. 
In addition, the buildings of hordes of creatures, when they are built, replace their number with their number 
dwellings. Other objects behave in exactly the same way: for example, the Tavern (5) of the Castle is transformed into the Brotherhood of the Sword (22) when it is rebuilt.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-m"></span><span class="erm-anchor" id="command-mz"></span><span class="erm-tone-red"><strong>Mz#</strong></span><br>
Set the text – description in the town window, changing the usual one to your own. You can 
use shared (z1…z1000) or local (z-1…z-10) <em>z</em>-variables.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-p"></span><span class="erm-anchor" id="command-p-1-2-3"></span><span class="erm-tone-red"><strong>P$1/$2/$3</strong></span><br>
Position on the map<br>
         $1 – X<br>
         $2 – Y<br>
         $3 – L (level)<br>
Only works for adventure map and minimap (<a href="../../tables/dialog-items/#ref-form-cmi" data-context="true">area numbers</a> of which there are 1 and 37, respectively).</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-r"></span><span class="erm-anchor" id="command-r"></span><span class="erm-tone-red"><strong>R$</strong></span><br>
Enable/disable standard action<br>
         0 – disable<br>
         1 – enable<br>
If you want to right click on the adventure map for 
anything, you can use this command to disable the default 
dialogue about abandonment of creatures.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-s"></span><span class="erm-anchor" id="command-s-t"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
$action subtype:<br>
	       10 – OK button released in town screen<br>
	       12 – pressed <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
	       13 – released <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
	       14 – pressed <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-t"></span><span class="erm-tone-red"><strong>T$</strong></span><br>
Action type (usually 512)</div>

<hr>














</div>

</div>
</section>
:::

## Related reference {#related}

[CM](../../triggers/cm/) · [Framework](../../framework/events/)



## Related commands and tables {#reference-links}

[Mouse clicks (CM)](../../triggers/cm/) · [Flags, messages and choices (IF)](../if/#command-q-text-q-type-subtype-type-subtype-mode-text) · [Battlefield hexes](../../tables/battlefield/) · [CM:I click areas](../../tables/dialog-items/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.22, +](../../compatibility/#era3-v-3-9-22-l138) — Improved CM:H to always return valid hero IDs from SwapManager even in non-click events (undefined if no hero meeting dialog is active).
- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1915) — Event DL/(OnCustomDialogEvent) now receive all mouse/keyboard parameters, accessible via !!CM and tracks clicks outside dialogs main area. Check CM:T or i^dlg_action^ value for: (DLG_ACTION_INDLG_CLICK) (DLG_ACTION_OUTDL…
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2180) — The following improvements were introduced in "Era Erm Framework" mod: - "OnKeyPressed" event and all mouse click events were improved, storing keyboard special keys in global variables. i^key^: Pressed key virtual key c…
- [ERA 3.2.0, +](../../compatibility/#era3-v-3-2-0-l2618) — Added the following functions to "Era Erm Framework" mod: !?FU(NewIntArray); ; Creates and returns trigger local array of integers. ; Alternative function arguments: ; (?result) The result array will have 0 items. ; (siz…
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3474) — !!FU/DO receivers can now be really called without arguments. For all WoG 3.58 ERM receivers except SN/MP calling subcommand without parameters actually passes single parameter with 0 value. Example: !!CM:R; is the same …
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3587) — Introduced advanced ERM precompilation mode, called ERM 2.0 and activated via "ZVSE2" first line signature. Main features: - Named local variables to write human readable code instead of cryptic one. Example: !!HE-1:C0/0…
<!-- ERA3-GENERATED:END -->
