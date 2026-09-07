---
{"title":"Battlefield operations (BU)","summary":"BU receiver: battlefield operations, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Battlefield operations (BU)"}
---

## Receiver BU {#ref-rec-bu}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-bu-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>BU</strong> 
(universal battle parameters)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-bu-red"></span><span class="erm-tone-red"><br>
!!BU:XXXX;</span> 
- set/check/get some universal battle parameters.</strong> </div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-c"></span><span class="erm-anchor" id="command-c"></span><span class="erm-tone-red"><strong>C?$</strong><br>

</span>Used to accurately determine whether the battle is over or not<br>
         $ = 1 if yes<br>
         $ = 0 if not.<br>
Rational use in <a href="../../triggers/bg/#ref-tr-bg">!?BG1</a>;</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-d"></span><span class="erm-anchor" id="command-d"></span><span class="erm-tone-red"><strong>D#/?$</strong></span><br>
Receive or check <a href="../../tables/battlefield/#ref-form-bf" data-context="true">position 
#</a> for dead creatures ($ will contain the number of the dead stack).<br>
         $ = stack number of dead creatures<br>
           -1 if not at all 
creatures in position<br>
           -2 if in position 
live stack</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-e"></span><span class="erm-anchor" id="command-e"></span><span class="erm-tone-red"><strong>E#/?$</strong></span><br>
Get or check $stack number on live creatures in 
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">positions #</a>. If there are living creatures in this 
no position, $ = -1.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-g"></span><span class="erm-anchor" id="command-g"></span><span class="erm-tone-red"><strong>G$</strong></span><br>
Set/check/get special landscapes and their bonuses in battle.<br>
     $ – <a href="../../tables/battle-terrain/#ref-form-bug" data-context="true">landscape type</a><br>
<u></u></div><span class="erm-anchor" id="ref-rec-bu-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bu-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you set this parameter before processing the battle, the game will select the correct background. 
If you change this value during battle, the background will not change, but the bonuses of the set terrain will still work.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-m"></span><span class="erm-anchor" id="command-mz"></span><span class="erm-tone-red"><strong>Mz#</strong></span><br>
Add a message to the battle<br>
         z# – <em>z</em>-variable with text<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bu-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bu-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This command is different from the command <a href="../mm/#ref-rec-mm-m">MM:M</a> the fact that the MM:M message is only shown in the battle log, without saving it, 
when, as through BU:M, the text is shown and added to the event table, i.e. You can use the up and down arrows to scroll through and find that message later.<br>
Remember that you cannot eliminate the original text.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-o"></span><span class="erm-anchor" id="command-o"></span><span class="erm-tone-red"><strong>O#/?$</strong></span><br>
Receive or check <a href="../../tables/obstacle-flags/#ref-form-obstacles-bit" data-context="true">obstacle flags</a> ($) for <a href="../../tables/battlefield/#ref-form-bf" data-context="true">positions #</a> to battlefield.<br>
         $ = 0 if there are no obstacles<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bu-5"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bu-show5"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The command can be used to check obstacle bits on a battlefield hex of interest.<br>
So, if there is a mine at the position, then we get $ = 9 (1+8)<br>
<span class="erm-anchor" id="ref-rec-bu-bold"></span><em class="erm-strong">Note:</em> for the Force field for the initial cell (bottom), the game sets the value $=35 (1+2+32), and for the rest - $=34 (2+32). 
The same goes for all obstacles set by the team. <a href="../bf/#ref-rec-bf-o">BF:O</a>, in which the initial cell will have $=3 (1+2), and all others will have $=2 (when the obstacle occupies more than 1 cell).<br>
<span class="erm-anchor" id="ref-rec-bu-4"></span><details class="erm-comment"><summary><strong>Additionally</strong><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(<span class="erm-anchor" id="ref-rec-bu-show4"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
When working with obstacles, the BU:O command cannot always help. For example, when you need to check the cells at the gate (during a siege).

<pre class="erm-example"><code class="language-erm">!!UN:C6919200/4/?y50; Battle Manager
!!SN:E4625904/2/y50/[hex index]; We write down in v1 whether it is possible to stand in this place. 0 - possible, 1 - impossible.
; If the gate is not breached, the value for the attacker will be 1, otherwise - 0.</code></pre>
</div></details></div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-r"></span><span class="erm-anchor" id="command-r"></span><span class="erm-tone-red"><strong>R</strong></span><br>
Update battlefield after any action<br>
<em class="erm-strong">Note:</em> do not use this command in a trigger <a href="../../triggers/bf/#ref-tr-bf">!?BF</a>.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-bu-3"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-bu-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Unfortunately, this command does not update the active stack's movement grid. However, this can be done using the features <a href="../../compatibility/#ref-era-index">ERA</a>:
<pre class="erm-example"><code class="language-erm">; Update shadow of possible movement after changing stack speed
!!UN:C6919200/4/?y2;    [Battle Manager]
!!SN:E4797616/2/y2/0/1; [update battlefield grid]
!!BU:R;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-s"></span><span class="erm-anchor" id="command-s-1-2-3-4-5-6"></span><span class="erm-tone-red"><strong>S#1/#2/#3/#4/#5/#6</strong></span><br>
Summon creatures to battlefield<br>
         #1 –
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
         #2 – number of creatures<br>
         #3 –
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">position</a><br>
         #4 – side (0 – left hero, 
1 – right)<br>
         #5 – hero slot number (-1 – 
missing (will disappear after the battle))<br>
         #6 – update (1 – yes, 0 – no)<br>
The position must be correct, free from 
other creatures and obstacles, and there cannot be more than 20 stacks on each side.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-t"></span><span class="erm-anchor" id="command-t"></span><span class="erm-tone-red"><strong>T?$</strong></span><br>
Check if the battle has a tactical phase<br>
         $ = 1 if yes<br>
         $ = 0 if not</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-v"></span><span class="erm-anchor" id="command-v"></span><span class="erm-tone-red"><strong>V#</strong></span><br>
Win the battle<br>
         # - winning side<br>
                   
0 = right (defender)<br>
                   
1 = left (attacking)</div>

<hr>













</div>
</div>
</section>
:::

## Related reference {#related}

[BF](../../receivers/bf/) · [BM](../../receivers/bm/)



## Related commands and tables {#reference-links}

[Battle actions (BG)](../../triggers/bg/) · [Battlefield hexes](../../tables/battlefield/) · [BU:G special battle terrain](../../tables/battle-terrain/) · [Battle hint text (MM)](../mm/#command-mz-m-z) · [Obstacle flags](../../tables/obstacle-flags/) · [Battlefield setup (BF)](../bf/#command-o-1-2) · [ERM debugging and compatibility](../../compatibility/) · [Battlefield setup (BF)](../../triggers/bf/) · [Creature table](../../tables/creatures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.0.0, *](../../compatibility/#era3-v-3-0-0-l3976) — Fixed WoG bug with tactics detection on the very first round. Do not use BU:R in !?BR or !?FU(OnCombatRound) for zero round, because a few structures are not initialized at this moment and random crash may occur. First r…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4088) — SN:D may be used now in battle, being equal to BU:R.
<!-- ERA3-GENERATED:END -->
