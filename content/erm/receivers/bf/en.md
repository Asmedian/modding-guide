---
{"title":"Battlefield setup (BF)","summary":"BF receiver: battlefield setup, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Battlefield setup (BF)"}
---

## Receiver BF {#ref-rec-bf}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>

<span class="erm-anchor" id="ref-rec-bf-text"></span><div>

<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>BF</strong> (battlefield)</span></div>
<div class="erm-paragraph"><br>
<span class="erm-anchor" id="ref-rec-bf-red"></span><span class="erm-tone-red"><strong>!!BF:XXXX;</strong></span> <strong>- installations <a href="../../tables/battlefield/#ref-form-bf" data-context="true">battlefields</a>.</strong><br>
This command allows you to customize the battlefield and can only be used after trigger <a href="../../triggers/bf/#ref-tr-bf">!?BF</a>, 
because Preparation of the battlefield begins before the battle, although the placement of obstacles IS POSSIBLE during the battle itself.<br>
<strong></strong><br></div><span class="erm-anchor" id="ref-rec-bf-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bf-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
We also noticed that <a href="../vr/#ref-rec-vr-r">VR:R</a> doesn't work inside the BF trigger, or rather plays the same series of numbers for every battle. 
The first number generated in a battle is always the same number generated in any other battle. 
Although, the team <a href="../vr/#ref-rec-vr-t">VR:T</a> works great, but obviously can only be used once in the !?BF trigger.<br>
<strong>Reply from <span class="erm-anchor" id="ref-rec-bf-n1"></span><strong class="erm-tone-purple erm-strong">Slava Salnikov</strong> aka <strong class="erm-tone-purple erm-strong">ZVS</strong>:</strong><br>
I think this is done on purpose so that you can use the same battle pattern every time you load the map. 
But there is a way around this:<br>
1. Generate a number with the command VR:T → n<br>
2. Now we generate n-random numbers with the command VR:R and skip them<br>
3. Now you are ready to use VR:R in your script.</div></details>
<span class="erm-anchor" id="ref-rec-bf-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/bf/#ref-tr-bf">!?BF</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bf-c"></span><span class="erm-anchor" id="command-c"></span><span class="erm-tone-red"><strong>C</strong></span><br>
Clear battlefield (each square is available)
<br>
<strong><u>Comment</u>:</strong> If you need to remove a specific obstacle without erasing the rest battlefield, try casting spell "Remove Obstacle" on it.<br>
<span class="erm-anchor" id="ref-rec-bf-bold"></span><em class="erm-strong">Note:</em> If you use the command during a castle siege, town will lose all walls and towers (will be considered broken).</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bf-m"></span><span class="erm-anchor" id="command-m-1-11-12"></span><strong><span class="erm-tone-red">
M#1/#2/#3/#4/#5/#6/#7/#8/#9/#10/#11(/#12)</span></strong><br>
Place a rock at a specific position on battlefield<br>
         #1 – bit position from 0 to 16<br>
         #2 – bit position from 17 to 33<br>
         #3 – bit position from 34 to 50…<br>
        …<br>
         #11 – bit position from 170 to 186<br>
         #12 – <a href="../../tables/obstacles/#ref-form-obstacles" data-context="true">type of obstacle</a> (0..90)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bf-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-bf-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This command includes the functionality <a href="./#ref-rec-bf-c">BF:C</a>.<br>
If the 12th parameter is omitted, obstacle 84 is used.<br>
You can also place an "invisible" obstacle by setting #12 to -1. It is invisible and occupies 1 cell. 
So, you can create a special background for the battlefield, taking into account the impassability of some places, which are made impassable through the script using invisible obstacles. 
Such obstacles cannot be removed with the spells "Remove Obstacle" and "Remove Spells".<br>
<u>Example</u>: (<a href="../../tables/battlefield/#ref-form-bf-s1" data-context="true">see screenshot</a>)<br>
Beaten position: let there be rocks in the top row of the battlefield: 11111111111111111 = 131071 (1+2+4+8+…+65536)<br>
In the rest - let there be only one rock at the beginning and one at the end: 100000000000000001 = 65537 (65536+1)
<pre class="erm-example"><code class="language-erm">ZVSE
!?BF;
!!BF:M131071/65537/65537/65537/65537/65537/65537/65537/65537/65537/131071;</code></pre></div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red">
<span class="erm-anchor" id="ref-rec-bf-o"></span><span class="erm-anchor" id="command-o-1-2"></span><strong>O#1/#2</strong></span><br>
Place a separate object<br>
         #1 – <a href="../../tables/obstacles/#ref-form-obstacles" data-context="true">type of obstacle</a> (0..90)<br>
         #2 – <a href="../../tables/battlefield/#ref-form-bf" data-context="true">position</a> (0..186)<br>
<strong><u>Comment</u>:</strong> some obstacles look proper only on their “native” soil</div>

<hr>
<div class="erm-paragraph"><strong>Battlefield:</strong><br><img src="../../../../assets/erm/7176e1b1eafc3a84.png" alt="Battlefield:" loading="lazy" decoding="async" class="erm-figure"></div>









</div>
</div>
</section>
:::

## Related reference {#related}

[BF](../../triggers/bf/) · [BU](../../receivers/bu/)



## Related commands and tables {#reference-links}

[Battlefield hexes](../../tables/battlefield/) · [Battlefield setup (BF)](../../triggers/bf/) · [Variables and expressions (VR)](../vr/#command-r-r-r0-min-max-free-t) · [Battlefield obstacles](../../tables/obstacles/)
