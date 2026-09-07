---
{"title":"Creature recruitment (RD)","summary":"RD receiver: creature recruitment, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Creature recruitment (RD)"}
---

## Receiver RD {#ref-rec-rd}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-rd-text"></span><div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">
<div class="erm-align-center erm-paragraph">Receiver<strong> RD</strong><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(dialogue for hiring creatures)</div></span>
</div><div class="erm-align-left erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-rd-red"></span><span class="erm-tone-red"><br>
!!RD:XXXX;</span></strong> 
- <strong>allows you to customize the game dialogue for hiring creatures yourself.<br></strong></div>
<div class="erm-paragraph">In addition to the commands for working with the hiring dialogue, ERA has implemented special events for servicing this dialogue:
</div><ul>
<li><span class="erm-anchor" id="ref-rec-rd-open-23"></span><strong><u>OnOpenRecruitDlg (<span class="erm-anchor" id="ref-rec-rd-show1"></span><strong class="erm-toggle-label">show</strong>)</u></strong><br><span class="erm-anchor" id="ref-rec-rd-1"></span><details class="erm-comment"><summary>OnOpenRecruitDlg</summary><div class="erm-comment-body">
Whenever a hiring dialog is created, the event is fired <em class="erm-tone-purple erm-legacy-event">OnOpenRecruitDlg</em> with the following parameters:
<pre>        x1 - selected/active creature slot (0..3)
        x2 - flags/options, which are a combination of bits that control the behavior of the dialog:
	= 1 – </pre><span class="erm-anchor" id="ref-rec-rd-10"></span><details class="erm-comment"><summary><small>CLOSE_ON_BUY</small></summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-rec-rd-t0"></span><blockquote class="erm-margin-top-zero erm-note"><span class="erm-anchor" id="ref-rec-rd-step"></span><div class="erm-indent">The dialog will close when the purchase button is clicked.<br>
Typically used in towns when there is only one recruit slot.<br>
Clear this flag to force the dialog to close manually.</div></blockquote></div></details>
<pre>	= 2 – </pre><span class="erm-anchor" id="ref-rec-rd-11"></span><details class="erm-comment"><summary><small>AUTO_UPDATE_ADVMAP</small></summary><div class="erm-comment-body">
<blockquote class="erm-margin-top-zero erm-note"><div class="erm-indent">The adventure map screen must be refreshed after hiring any recruit (even while the dialog box is displayed).<br>
This flag is used when hiring recruits in the external dwelling of creatures, which allows the player to see the number of new creatures in the status window.</div></blockquote></div></details>
<pre>        x3 - enable the dialog (1) or do not show it (0).</pre>
</div></details></li>
<li><span class="erm-anchor" id="ref-rec-rd-close-24"></span><strong></strong><br><span class="erm-anchor" id="ref-rec-rd-2"></span><details class="erm-comment"><summary>OnCloseRecruitDlg (<span class="erm-anchor" id="ref-rec-rd-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
When you close the hiring dialog, the corresponding event is fired <em class="erm-tone-purple erm-legacy-event">OnCloseRecruitDlg</em> (no parameters)
</div></details></li>
<li><span class="erm-anchor" id="ref-rec-rd-click-25"></span><strong></strong><br><span class="erm-anchor" id="ref-rec-rd-5"></span><details class="erm-comment"><summary>OnRecruitDlgMouseClick (<span class="erm-anchor" id="ref-rec-rd-show5"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
When you click the mouse in the hiring dialog, it starts <em class="erm-tone-purple erm-legacy-event">OnRecruitDlgMouseClick</em> (no parameters)
</div></details></li>
<li><span class="erm-anchor" id="ref-rec-rd-calc-28"></span><strong></strong><br><span class="erm-anchor" id="ref-rec-rd-3"></span><details class="erm-comment"><summary>OnRecruitDlgRecalc (<span class="erm-anchor" id="ref-rec-rd-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
When you change the position of the slider inside the dialogue or change the active slot, the number of recruits and the total cost in the event are recalculated <em class="erm-tone-purple erm-legacy-event">OnRecruitDlgRecalc</em>. 
All parameters can be changed:
<pre>        x1 - cost of the creature in gold
        x2 - resource identifier (0..5 or -1)
        x3 - quantity of resource</pre>
</div></details></li>
<li><span class="erm-anchor" id="ref-rec-rd-action-29"></span><strong></strong><br><span class="erm-anchor" id="ref-rec-rd-4"></span><details class="erm-comment"><summary>OnRecruitDlgAction (<span class="erm-anchor" id="ref-rec-rd-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
When recruiting several different creatures, it starts <em class="erm-tone-purple erm-legacy-event">OnRecruitDlgAction</em>
<pre>        x1 - number of recruits (read only)</pre>
</div></details></li>
</ul>
<div class="erm-paragraph">A clear example of creating a hiring dialogue <a href="./#ref-rec-rd-ex">see below</a></div>  
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-c"></span><span class="erm-anchor" id="command-c-slot-type-count-source-original"></span><strong><span class="erm-tone-red">C#1/$2[/$3/$4/#5]</span></strong><br>
Set up a hiring dialogue.
</div><pre>        #1 - dialogue slot (0..3)
        $2 - <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a> to hire in the specified slot (-1 = slot empty)
        $3 - current number of creatures to hire
        $4 - index of the source/storage where there is an available number of creatures
        #5 - modifier (0 = use original number of creatures)</pre>
<strong></strong><br><span class="erm-anchor" id="ref-rec-rd-12"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-rd-show12"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<ul>
<li>If #5=0, then this is the original number of recruited creatures, which is remembered immediately after the event <a href="./#ref-rec-rd-open-23">OnOpenRecruitDlg</a> (can only be received). The number of creatures, as a rule, is directly related to some source, for example, a dwelling in a town. Thus, by setting this value at the setup stage, you change the actual number of creatures.</li>
<li>For existing towns on the map, you can use the following formula by source:
	<blockquote class="erm-note">[<span class="erm-anchor" id="ref-rec-rd-wt"></span><strong class="erm-legacy-label">Source</strong>] = [Town ID (see. <a href="../ca/#ref-rec-ca-u">CA:U</a>)] × 14 + [level of living creatures in the town (0..6)] + [7 (only for improved)].</blockquote>
	For example, the source of the 2nd town on the map → 3rd improved housing: 1 * 14 + 3 + 7 = 24.</li>
<li>If the dialogue is called with special external sources (defined by the player), they will have the following indexes: 9000, 9001, 9002, 9003. For example, a modmaker sold his home in a town with a certain storage facility, where the number of creatures for hire is specified. Scripters will be able to see the source index as 9000.</li>
<li>Custom source (index ≥ 10000). Implementation based on player script. For this type of source, a unique memory block is allocated. Requires setting the initial number of recruits in <a href="./#ref-rec-rd-open-23">OnOpenRecruitDlg</a>, followed by receiving the final (remaining) quantity in <a href="./#ref-rec-rd-close-24">OnCloseRecruitDlg</a>.</li>
<li>The same source can be assigned to any number of dialogue slots. All these slots will display the same number of creatures and update at the same time. This is useful for implementing alternate creatures. Slots can have different types of creatures (and costs), but the total number of recruits is distributed among all slots.</li>
<li>The source index changes before the new number of creatures is applied. Yes <span class="erm-anchor" id="ref-rec-rd-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!RD</span>:C0/13/100/20000</strong> will change the source first to 20000 (custom), and then set the number of creatures as 100 archangels, without changing the initial housing growth/facilities/Etc..</li>
<li>If, for example, you set certain creatures for slots 0 and 3, but do not define creatures for slots 1 and 2 (type = -1), then the slots will shift so that the player will see only the first two slots with creatures.<br>
Dialogues without configured slots ($2≠-1) will not be shown.</li>
</ul>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!RD:C2/?y3; y3 = type of creature in the 3rd real dialogue slot

Increase by 10 times the number of creatures in the 1st slot of the recruitment dialogue:
!!RD:C0/?t/d*10; the type will not change, the quantity is multiplied by 10
!!RD:C0/?t/?i^numMons^;
!!IF:M^%I(numMons) recruits available for recruitment^;</code></pre></div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-f"></span><span class="erm-anchor" id="command-f"></span><strong><span class="erm-tone-red">F#/$</span></strong><br>
Convert real slot number to logical (used with command <a href="./#ref-rec-rd-c">C</a>)
</div><pre>        # - real (visible) slot (0..3)
        $ - logical slot (0..3, -1 = empty)</pre>
<strong></strong><br><span class="erm-anchor" id="ref-rec-rd-13"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-rd-show13"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The command is used in conjunction with mouse handling in the hiring dialog. The numbers of visible slots increase sequentially and must be converted to numbers of logical slots.
<u>Example</u>:<br>
Dialog with configured slots: <span class="erm-anchor" id="ref-rec-rd-dred"></span><strong class="erm-tone-red erm-legacy-code-box erm-inline-code">creature A</strong> <strong class="erm-tone-red erm-legacy-code-box erm-inline-code">slot is empty</strong> <strong class="erm-tone-red erm-legacy-code-box erm-inline-code">slot is empty</strong> <strong class="erm-tone-red erm-legacy-code-box erm-inline-code">creature B</strong>, 
- is displayed in the game like this: <span class="erm-anchor" id="ref-rec-rd-n3"></span><strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">creature A</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">creature B</strong>. Here "creature B" has a real slot number of 1, and a logical slot number of 3.</div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-i"></span><span class="erm-anchor" id="command-i-1-2-3-4"></span><strong><span class="erm-tone-red">I?$1/?$2/?$3/?$4</span></strong><br>
Get information on the current hiring conversation.
</div><pre>        $1 - unique dialogue number. Used to distinguish between nested dialogs.
        $2 - town identifier (see. <a href="../ca/#ref-rec-ca-u">CA:U</a>) for which a dialog opens (-1 = none/unknown).
        $3 - town dwelling identifier (0..6 - normal, 7..13 - improved; -1 = no/unknown)
	Horde buildings (+X growth) are treated as dwellings that they influence.
        $4 - number of the selected logical slot.</pre>
<strong></strong><br><span class="erm-anchor" id="ref-rec-rd-9"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-rd-show9"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Dialogue numbers are unique only among currently open hiring dialogs.<br>
After closing the entire chain of dialogues for hiring recruits, the dialogue numbers are returned to the reserve and can be assigned to new dialogues (a kind of reusability).</div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-m"></span><span class="erm-anchor" id="command-mkey"></span><strong><span class="erm-tone-red">M#/$</span></strong><br>
Access to the associative memory of the current dialogue.
</div><pre>        # is either an integer or a unique string. Same as <a href="../sn/#ref-rec-sn-era-w">SN:W</a>
        $ - set/get variable value</pre>
<div class="erm-paragraph">The command provides a full-featured equivalent <a href="../sn/#ref-rec-sn-era-w">SN:W</a> when working with the memory allocated for each created hiring dialog.<br>
The memory is freed after <a href="./#ref-rec-rd-close-24">OnCloseRecruitDlg</a> for each dialogue.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!RD:M^acm.mapX^/v998 M^acm.mapY^/v999 M^acm.mapZ^/v1000;
!!RD:M^mithril^/d*2;</code></pre></div>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-o"></span><span class="erm-anchor" id="command-o-town-dwelling-destination-target-flags"></span><strong><span class="erm-tone-red">O#1/#2/#3/#4[/#5]</span></strong><br>
Open a new hiring dialog (previous dialogs will remain in the background).
</div><pre>        #1 - town identifier (see. <a href="../ca/#ref-rec-ca-u">CA:U</a>; -1 = skip). Town will be used as the slot source.
        #2 - town dwelling identifier (0..13; -1 = skip). The home will be used as a source of slots.
        #3 - where to place recruits when hiring (determined by Lua/ERM script and processed manually):
	= 0 – to the town garrison
	= 1 – to the hero’s army
	= 2 – own implementation
        #4 - target identifier (hero, town or a special value for the Lua/ERM script)
        #5 - combination of flags <small class="erm-legacy-label">CLOSE_ON_BUY</small> and <small class="erm-legacy-label">AUTO_UPDATE_ADVMAP</small> (see )
	Do not set this option if you are using custom/standard settings.</pre>


<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-s"></span><span class="erm-anchor" id="command-s"></span><strong><span class="erm-tone-red">S#</span></strong><br>
Shift slots by # positions.<br>
In the hiring dialog, you can shift all slots by a specified number of positions to the right (# &gt; 0) or left (# &lt; 0).<br>
If a slot goes beyond the boolean values (0..3), it disappears.<br>
The shift is performed while saving all settings (type, quantity, source)<br>
<strong></strong><br></div><span class="erm-anchor" id="ref-rec-rd-15"></span><details class="erm-comment"><summary>Examples (<span class="erm-anchor" id="ref-rec-rd-show15"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<u>Example 1</u>. We have 0..1 slots with ordinary and improved creatures (the source is not important):<br>
<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">creature A</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">creature B</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">slot is empty</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">slot is empty</strong><br>
It is necessary to prepare two custom slots with Angels/Archangels in them.
<pre class="erm-example"><code class="language-erm">!!RD:S2;
!!RD:C0/12/2/12345 C1/13/2/54321;</code></pre>
We get the following:<br>
<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">2 angels</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">2 Archangels</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">creature A</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">creature B</strong>.<br>
<br>
<u>Example 2</u>. Remove the 1st slot with improved creatures and leave only unimproved ones.
<pre class="erm-example"><code class="language-erm">!!RD:C0/?t/?t/?y2; in y2 source value for the 1st slot, t - temporary fast variable
!!VRy2:%14; We calculate the housing identifier 0..13. If improved, then y2&gt;=7 
!!RD&amp;y2&gt;=7:S-1; shift 1 slot to the left if the 1st slot has a source of improved housing in the town</code></pre></div></details>

<hr>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-ex"></span>
Demo application script <a href="./#ref-rec-rd">!!RD</a> from <span class="erm-anchor" id="ref-rec-rd-n1"></span><code class="erm-tone-purple erm-strong">Berserker</code>'a<strong> ()</strong></div><span class="erm-anchor" id="ref-rec-rd-8"></span><details class="erm-comment"><summary>show</summary><div class="erm-comment-body">
In the Citadel, you can hire trolls instead of orcs in a ratio of 3:10 (1 troll = 3.333 orcs). For example, 8 orcs can be hired as 2 trolls + 1 orc or 1 troll + 4 orcs. That is hiring proceeds according to the principle - either a small number of some, or a large number of others. (<a href="../../tables/recruitment-dialog/#ref-form-rd-s1" data-context="true">see screenshot</a>)<br>
All values are updated in real time.
<pre class="erm-example"><code class="language-erm">** Demo implementation of a mod for alternative creatures **
!?FU(atm.UpdateSlots);
!!RD:C0/?y99/?y1/?y99/0; standard number of orcs
!!RD:M^rate_x^/?y2; number of trolls for...
!!RD:M^rate_y^/?y3; ...assigning the number of orcs
!!RD:M^percentage_left^/?e1; available number of creatures in %
!!VRe9:S1:100; e9 - epsilon (possible rounding error)
!!VRe2:Sy1 *y2 :y3 *e1 +e9; remaining number of trolls
!!VRy4:Se2; round up the remaining number of trolls
!!RD:C2/?y99/y4; update number of trolls
!!VRe3:Sy1 *e1 +e9; remaining number of orcs
!!VRy5:Se3; round up the remaining number of orcs
!!RD:C0/?y99/y5; update the number of orcs

!?FU(OnOpenRecruitDlg);
!!RD:I?y1/?y2/?y3;
!!FU|y2=-1/y3=-1:E; way out if there is no home in the town
!!FU&amp;y3&lt;&gt;2/y3&lt;&gt;9:E; exit if there is no 3rd level housing (simple or improved)
!!CA0/y2:T?y4; lock type
!!FU&amp;y4&lt;&gt;6:E; exit if not Stronghold
!!VRx2:S0; Cancel auto-close dialog when purchasing
!!RD:M^is_unequal_alt^/1; mark the dialogue as "ours"
!!VRe1:S1; number of available alter creatures (1 = 100%)
!!RD:M^percentage_left^/e1; save the number of available creatures in %
; remember course orcs/trolls
!!RD:M^rate_x^/3; 3 trolls...
!!RD:M^rate_y^/10; ...in exchange for 10 orcs
!!RD:C2/144/0/10000; troll slot setup
!!FU(atm.UpdateSlots):P;

!?FU(OnRecruitDlgAction);
!!RD:M^is_unequal_alt^/?y1; y1=1 if this is an atm dialog
!!FU&amp;y1&lt;&gt;1:E;
!!VRy2:Sx1; number of hired creatures
!!RD:I?y99/?y99/?y99/?y3; active slot
!!RD:M^rate_x^/?y4; trolls/orcs course
!!RD:M^rate_y^/?y5;
!!RD:C0/?y99/?y6/?y99/0; y6 - standard number of orcs
!!RD:M^percentage_left^/?e1; available number of creatures in %
!!if&amp;y3=2:;
  !!VRe2:Sy2 *y5 :y4 :y6; hired percentage
!!el:;
  !!VRe2:Sy2 :y6; hired percentage
!!en:;
!!VRe1:-e2;
!!RD:M^percentage_left^/e1; update remaining percentage
!!FU(atm.UpdateSlots):P;</code></pre>
</div></details>










</div>
</div>
</section>
:::

## Related reference {#related}

[Events](../../triggers/) · [CA](../../receivers/ca/)



## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/) · [Creature table](../../tables/creatures/) · [Towns (CA)](../ca/#command-t-u) · [ERA services, memory and sound (SN)](../sn/#command-w-w-key-w-key) · [RD recruitment dialog](../../tables/recruitment-dialog/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4018) — Enhanced !!RD:I with new named parameters syntax. !!RD:I^parameter name^/?$parameter_value; ============================== Featured parameters: ============================== ^dlgId^ - Unique recruit dialog ID. Used to d…
<!-- ERA3-GENERATED:END -->
