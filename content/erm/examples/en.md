---
{"title":"ERM examples","summary":"Small examples with explained preconditions and results.","translationStatus":"reviewed"}
---

## Feature Library {#ref-cont-lib}

:::erm
<section class="erm-reference" lang="en">
<div>


<span class="erm-anchor" id="ref-cont-lib-text"></span><div>

<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title">Function library UN:C</span></strong></div>
<div class="erm-align-left erm-paragraph"><span>Team <a href="../receivers/un/#ref-rec-un-c">UN:C</a> works with memory. Using it, you can edit even those areas of heroes 
which seemed beyond the reachable. Here are a few useful features that are not standard. Use it!</span></div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title"><strong><span class="erm-anchor" id="ref-cont-lib-portal1"></span>Controlling the type of creature hired in the Summoning Portal</strong></span></div>
<div class="erm-align-left erm-paragraph">
<pre class="erm-example"><code class="language-erm">!?FU20114&amp;x1=-1;
!!UN:C6919500/4/?y1;
!!VRy1:+56;
!!UN:Cy1/4/?y2;
!!VRy2:+60;
!!UN&amp;x3=0:Cy2/4/x2;
!!UN&amp;x3&lt;&gt;0:Cy2/4/?x2;
!?FU20114&amp;x1&lt;&gt;-1;
!!UN:C6933756/4/?y1;
!!VRy1:+2884;
!!UN:Cy1/4/?y2;
!!VRx1:*360 +60 +y2;
!!UN&amp;x3=0:Cx1/4/x2;
!!UN&amp;x3&lt;&gt;0:Cx1/4/?x2;</code></pre>
<em>Call:</em>
<pre class="erm-example"><code class="language-erm">!!FU20114:P#1/$/#2;
!!FU20114:P#1/$; (#2=0)</code></pre>
<strong>#1</strong>:     Town No. (-1 = current)<br>
<strong>$</strong>:        
<a href="../tables/creatures/#ref-form-creature" data-context="true">creature type</a>. -1 – means there is no Portal, 
or the type has not yet been generated (it will be generated when entering the castle window).<br>
<strong>#2</strong>:     0 - 
set $, any other value - get $.</div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">
<span class="erm-anchor" id="ref-cont-lib-portal2"></span>Controlling the number of creatures hired in the Summoning Portal</span></div>
<div class="erm-align-left erm-paragraph">
<pre class="erm-example"><code class="language-erm">!?FU20115&amp;x1=-1;
!!UN:C6919500/4/?y1;
!!VRy1:+56;
!!UN:Cy1/4/?y2;
!!VRy2:+64;
!!UN&amp;x3=0:Cy2/2/x2;
!!UN&amp;x3&lt;&gt;0:Cy2/2/?x2;
!?FU20115&amp;x1&lt;&gt;-1;
!!UN:C6933756/4/?y1;
!!VRy1:+2884;
!!UN:Cy1/4/?y2;
!!VRx1:*360 +64 +y2;
!!UN&amp;x3=0:Cx1/2/x2;
!!UN&amp;x3&lt;&gt;0:Cx1/2/?x2;</code></pre>
<em>Call:</em>
<pre class="erm-example"><code class="language-erm">!!FU20115:P#1/$/#2;
!!FU20115:P#1/$; (#2=0)</code></pre>
#1:     Town No. (-1 = current)<br>
<strong>$:</strong>     number of creatures<br>
<strong>#2:    </strong> 0 - set $, 
any other value - get $.<br>
<strong>
Note</strong> - if in the first week in town not once 
entered (or not the Portal), the type and number of creatures have not yet been generated, 
and the quantity will produce all sorts of garbage.</div>
<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title"><span class="erm-anchor" id="ref-cont-lib-he"></span>Reading the results of the dialogue HE:C</span></strong></div>
<div class="erm-align-left erm-paragraph"><em>Allows after command
<a href="../receivers/he/#ref-rec-he-c">HE:C</a> see what's left at the top 
(added) slots, and use it not only to add creatures, but also 
for leaving, without any special difficulties. For WoG 3.58f and <a href="../compatibility/#ref-cont-te"><span class="erm-anchor" id="ref-cont-lib-red"></span><span class="erm-tone-red">TE</span></a>.<br>
</em>
<pre class="erm-example"><code class="language-erm">!?FU20116;
!!UN:V=358/?i;
!!VRy1&amp;1:S8585652;
!!VRy1&amp;-1:S8647508;
!!UN:Cy1/4/?x1;
!!VRy1:+4;
!!UN:Cy1/4/?x3;
!!VRy1:+4;
!!UN:Cy1/4/?x5;
!!VRy1:+4;
!!UN:Cy1/4/?x7;
!!VRy1:+4;
!!UN:Cy1/4/?x9;
!!VRy1:+4;
!!UN:Cy1/4/?x11;
!!VRy1:+4;
!!UN:Cy1/4/?x13;
!!VRy1:+4;
!!UN:Cy1/4/?x2;
!!VRy1:+4;
!!UN:Cy1/4/?x4;
!!VRy1:+4;
!!UN:Cy1/4/?x6;
!!VRy1:+4;
!!UN:Cy1/4/?x8;
!!VRy1:+4;
!!UN:Cy1/4/?x10;
!!VRy1:+4;
!!UN:Cy1/4/?x12;
!!VRy1:+4;
!!UN:Cy1/4/?x14;</code></pre>
<em>Call:</em>
<pre class="erm-example"><code class="language-erm">!!FU20116:P?1/?2/?3/?4/?5/?6/?7/?8/?9/?10/?11/?12/?13/?14;</code></pre>
?1,?3…?13 - types of creatures in slots 1..7, respectively,<br>
?2,?4...?14 - their number.</div>

<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title"><span class="erm-anchor" id="ref-cont-lib-str"></span>Function for working with strings at a low level</span></strong></div>
<em>Sometimes when working with !!UN:C you need 
work with strings. We have to write functions for this. It's easy to write them 
and I decided to share:</em><br>
<br>
Getting an address <em>z</em>-variable number x1 (return to x2)<br>
Versions supported: <strong>3.58f, <a href="../compatibility/#ref-cont-te"><span class="erm-tone-red">TE</span></a></strong>
<pre class="erm-example"><code class="language-erm">!?FU12925;
!!UN:V?y1/?y2;
!!VRy3&amp;y1=358:S40225400;
!!VRy3&amp;y1=359:S9597416;
!!VRx2&amp;y3=0:S0;
!!FU&amp;y3=0:E;
!!VRx2:Sx1*512+y3;

!?FU12926; Copying a string by address. x1 - source, x2 - receiver.
!!DO12927/0/511/1:Px1/x2;

!?FU12927;
!!VRy1:Sx1+x16;
!!VRy2:Sx2+x16;
!!UN:Cy1/1/?y3 Cy2/1/y3;
!!VRx16&amp;y3=0:S511;</code></pre>
<div class="erm-paragraph"><em>And now immediately a useful script that uses them.</em></div>
<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title"><span class="erm-anchor" id="ref-cont-lib-def"></span>Playing any animation on a unit in battle</span></strong><br></div>
<br>
<em>This script allows you to play any animation (from DEF) on any unit in battle (i.e. 
not only from the list <a href="../tables/combat-animations/#ref-form-formatanimation" data-context="true">animations</a>). 
Requires feature 12925 to work (see above).<br>
</em>
<pre class="erm-example"><code class="language-erm">!?FU12930;
!!UN:V?y10/?y11;
!!VRy12&amp;y10=358:S69016332;
!!VRy12&amp;y10=359:S61479692;
!!UN&amp;y12&lt;&gt;0:Cy12/4/-1;
!!UN:C4454270/4/?y1;
!!VRy1:+660;
!!VRy2:Sy1+8;
!!VRx4:*256+x3;
!!FU12925:Px2/?y5;
!!UN:Cy1/4/?y3Cy2/4/?y4Cy1/4/y5Cy2/4/x4;
!!BMx1:V55;
!!UN:Cy1/4/y3Cy2/4/y4;</code></pre>

Using the function:<br>
<strong>x1</strong> - stack number in battle<br>
<strong>x2</strong> - number <em>z</em>-variable that stores the name of the def file for playback<br>
<strong>Note:</strong> Requires function 12925 from functions for working with strings<br>
<strong>x3</strong> - position relative to the creature:<br>
<strong>0</strong>: The bottom of the animation matches the bottom of the creature (like prayer)<br>
<strong>1</strong>: The center of the animation coincides with the center of the creature (for example, inferno)<br>
<strong>2</strong>: The animation is on top of the creature (I can’t think of an example)<br>
<strong>3</strong>: Animation is on the front of the creature (Gnomish Resistance triggered)<br>
<strong>4</strong>: The animation is in the corner near the attacking hero<br>
<strong>x4</strong> - Translucency (0 - none, i.e. the animation is opaque, 1 - animation 
translucent)<br>
For example, translucency is like prayer, resurrection, healing, 
fear...<br>
Opaque: Morality, curse, old age, illness, ... <br>
<br>
Any def files work, even from an adventure map, any. Animation 
plays once and then disappears.<div class="erm-paragraph"><em>Unfortunately the script is now 
It's better not to use it, because... There are some caching issues. "Good" 
Unfortunately, it was not possible to find a solution to this problem...</em></div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title"><strong><span class="erm-anchor" id="ref-cont-lib-str2"></span>Obtaining addresses of VoG variables</strong></span></div>
<div class="erm-align-left erm-paragraph"><em>When working with UN:C it may be necessary to obtain an address of some kind 
Z-variable.<br>
Here is a script that writes the address z1 to v4138.<br>
For WoG 3.58f and <a href="../compatibility/#ref-cont-te"><span class="erm-tone-red">TE</span></a></em></div>
<div class="erm-paragraph">
<pre class="erm-example"><code class="language-erm">!#UN:A0/9/?y10; [backup variable number Z]
!#UN&amp;y10&lt;0:A0/9/?z-1; [text backup (3.59)]

!#UN:A0/9/1; [art0.Name = z1]&gt;
!#UN:C6687592/4/?y1; [get artifact array address]
!#UN:Cy1/4/?v4138; [get art0. Name - address z1. The name comes first in the artifact info, so y1 points to art0.Name]
[v4138 stores the address z1]

!#UN&amp;y10&gt;=0:A0/9/y10; [restore variable number Z]
!#UN&amp;y10&lt;0:A0/9/z-1; [restore text (3.59)]</code></pre></div>

</div>
</div>
</section>
:::

## Example catalog {#catalog}

- [SN:E: call by address](./sn-e/)
- [SN:F: call an export](./sn-f/)
- [UN:C: memory recipes](../un-c/)
- [ERM Hooker: installation and removal](../hooker/)
- [Named locals and local arrays](../variables/#local-arrays)
- [Framework: dynamic arrays](../framework/#example)

## Checking an example {#validation}

Check new games and loading, repeated invocation and missing objects; for combat code, test tactics, quick combat and theoretical AI calculations. Reference signatures containing #/$ are templates; example blocks contain ERM code. ZVSE2 does not automatically load Framework.
