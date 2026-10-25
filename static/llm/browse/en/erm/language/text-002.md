# Conditions and branches

ID: erm.conditions
URL: /en/erm/conditions/
Part: 1/1
Source references: old-help:cont-triggersol.htm, old-help:cont-flags.htm, old-help:rec-iee.htm, old-help:rec-re.htm, old-help:rec-fu.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.conditions 1 -->
## IF ELSE END {#ref-rec-iee}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title">IF-ELSE-ENDIF construction</span></strong><a href="../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
<span>(if – otherwise – end_if)</span></div>
<div class="erm-paragraph"><br><strong>Construction <span class="erm-anchor" id="ref-rec-iee-red"></span><code class="erm-tone-red">IF-ELSE-ENDIF</code> used to set conditions without using new features or tons of triggers.</strong></div>

<hr>
<div class="erm-paragraph">
To get started <u>section IF</u>, use the following receiver/instruction:
<pre class="erm-example"><code class="language-erm">!!if&amp;condition:;</code></pre>
Note that 'if' is written in lowercase.<br>
The conditions are standard AND and OR, which you can still use in any receiver. 
If the condition is TRUE when executing the script, the next part will be executed. 
If FALSE, further portions are skipped until the beginning of the ELSE or ENDIF section is found.</div>

<div class="erm-paragraph">To get started <u>ELSE section</u>, use the following receiver/instruction:
<pre class="erm-example"><code class="language-erm">!!el:;   'el' is lowercase.</code></pre>
There are no conditions required for this receiver.
The ELSE section always expects an IF and "binds" to the last IF found in the script.<br>
</div><span class="erm-anchor" id="ref-rec-iee-2"></span><details class="erm-comment"><summary><strong>Syntax extension</strong><a href="../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(<span class="erm-anchor" id="ref-rec-iee-show2"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">
Added ELSEIF syntax for receiver !!el.<br>
If an ELSE section has a condition and it is not satisfied (the value is FALSE), the code continues to execute until the next ELSEIF section with a condition or until an ENDIF section is encountered.
<pre class="erm-example"><code class="language-erm">!!if&amp;v1&gt;=0:;
; commands if v1&gt;=0
!!el&amp;v2&lt;42:;
; commands if v1&lt;0 and v2&lt;42
!!el&amp;v3&lt;100/v3&gt;=0:;
; commands, if v1&lt;0, v2&gt;=42 and v3 is included in [0;100)
!!el:;
; commands, if v1&lt;0, v2&gt;=42 and v3 is not included in [0;100)
!!en:;</code></pre></div></details>


<div class="erm-paragraph">For <u>IF completion</u> or IF-ELSE section the following receiver/instruction is used:
<pre class="erm-example"><code class="language-erm">!!en:;   'en' is lowercase.</code></pre>
There are no conditions required for this receiver.<br>
The ENDIF section always expects an IF or IF-ELSE part, and "binds" to the last IF or IF-ELSE found in the script.</div>

<div class="erm-paragraph">You can nest IF-ELSE-ENDIF sections within each other, but no deeper than 10 levels (and no deeper than 16 for <a href="../compatibility/#ref-era-index">ERA</a>).<br>
Each trigger (and function) has its own IF-ELSE-ENDIF, so it is possible to exceed the 10-enable limit by calling functions.<br>
When you call a function in any IF-ELSE-ENDIF section, it (the section) remains active, 
and saves its own <em>y</em>-variables (like functions).</div>
<div class="erm-paragraph">
<strong></strong></div><span class="erm-anchor" id="ref-rec-iee-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-iee-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE
!?HM-1;
!!VRv10:S5;
!!if&amp;v10=5:;
  !!IF:M^First IF^;
  !!VRv10:S10;
  !!if&amp;v10&lt;&gt;10:;
    !!IF:M^Second IF^;
  !!el:;
    !!IF:M^Second ELSE^;
  !!en:;
  !!IF:M^Second IF ended^;
!!el:;
  !!IF:M^First ELSE^;
  !!VRv10:S99;
  !!if&amp;v10=99:;
    !!IF:M^Third IF^;
  !!el:;
    !!IF:M^Third ELSE^;
  !!en:;
  !!IF:M^Third IF ended^;
!!en:;
!!IF:M^First IF ended^;</code></pre>

You should see the following messages:
<pre class="erm-example"><code class="language-erm">First IF
Second ELSE
Second IF ended
The first IF is over</code></pre></div></details>


</div>
</section>
:::

## Comparisons {#comparison}

Place a condition after the selector and before the command’s `:`, or before a trigger’s `;`. Comparisons include `=`, `<>`, `<`, `>`, `<=`, and `>=`. For example, `!!IF&v1>0:M^positive^;` runs only when `v1` is positive. Each command’s condition is checked when that command is reached.

## Combining checks {#and-or}

`&` combines checks with AND and a vertical bar combines them with OR; `/` separates the checks. `&v1>=0/v1<8` requires both comparisons to succeed. Do not assume C or JavaScript operator precedence; express complicated logic using nested blocks.

## Flags {#flags}

`&1000` checks whether flag 1000 is true; `&-1000` checks whether it is false. Neither compares a variable with the number 1000. System flags may change with event context; flag 1000, for example, depends on the current player context. Use `!!IF:Vnumber/value;` to set a flag, after checking that another script does not own it.

## if, el, and en blocks {#blocks}

Lowercase `!!if`, `!!el`, and `!!en` implement branching. An `el` with a condition is an else-if branch. All branches end at the matching `if` block’s single `en`. ERA allows a combined nesting depth of 16 `if`/`re` blocks; a called function has its own block structure.
```erm
ZVSE2
!?FU(MyMod_Classify);
!#VA(value:x) (result:x);
!!if&(value)<0;
  !!VR(result):S-1;
!!el&(value)>0;
  !!VR(result):S1;
!!el;
  !!VR(result):S0;
!!en;
```

## Early exit {#exit}

`!!FU&condition:E;` exits the current function or handler when the condition succeeds. It is useful for guarding preconditions. Leaving a handler does not cancel the game’s default action; cancellation requires support from that particular event.

[Functions](../functions/) · [Loops](../loops/)

## Related commands and tables {#reference-links}

[Variables, strings and arrays](../variables/) · [Flags, messages and choices (IF)](../receivers/if/#command-a0100010000-s0100010000-r0100010000-v) · [Flags, messages and choices (IF)](../receivers/if/) · [Battle start and completion (BA)](../triggers/ba/) · [Battle actions (BG)](../triggers/bg/) · [Battlefield setup (BF)](../triggers/bf/) · [Global events (GE)](../receivers/ge/) · [ERM debugging and compatibility](../compatibility/) · [ERA services, memory and sound (SN)](../receivers/sn/#command-xvalues) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/#command-w-x) · [Object-type hints (HT)](../receivers/ht/#command-w-1-2-3) · [Function calls (FU)](../receivers/fu/) · [Repeated function calls (DO)](../receivers/do/) · [Hero level-up (HL)](../triggers/hl/) · [Classic ERM macros (MC)](../receivers/mc/) · [ERM triggers and events](../triggers/) · [ERM syntax: ZVSE and ZVSE2](../syntax/) · [ERM triggers and events](../triggers/#use) · [Object visits (OB)](../triggers/ob/) · [Visiting a hero (HE)](../triggers/he/) · [Function calls (FU)](../receivers/fu/#command-a) · [Function calls (FU)](../receivers/fu/#command-c) · [Function calls (FU)](../receivers/fu/#command-d-1-16) · [Function calls (FU)](../receivers/fu/#command-e) · [Function calls (FU)](../receivers/fu/#command-p-1-16) · [Function calls (FU)](../receivers/fu/#command-s) · [Function handler (FU)](../triggers/fu/) · [Network synchronization (IP)](../receivers/ip/#command-f-1-2-v-1-2) · [Network synchronization (IP)](../receivers/ip/) · [Loops: re, br, co, and DO](../loops/)
<!-- llm:end erm.conditions 1 -->

# ERM examples

ID: erm.examples
URL: /en/erm/examples/
Part: 1/1
Source references: era-changelog:era-iii-changelog.txt, era-framework:lib-9999-era---stdlib.erm, old-help:cont-lib.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.examples 1 -->
## Feature Library {#ref-cont-lib}

:::erm
<section class="erm-reference" lang="en">
<div>


<span class="erm-anchor" id="ref-cont-lib-text"></span><div>

<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title">Function library UN:C</span></strong></div>
<div class="erm-align-left erm-paragraph"><span>Command <a href="../receivers/un/#ref-rec-un-c">UN:C</a> works with memory. Using it, you can edit even those areas of heroes 
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
Opaque: Morale, curse, old age, illness, ... <br>
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
<!-- llm:end erm.examples 1 -->

# SN:E — calling by address

ID: erm.examples.sn-e
URL: /en/erm/examples/sn-e/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm, old-help:rec-sn-era.htm, era-changelog:era-iii-changelog.txt, windows-api:getkeystate
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.examples.sn-e 1 -->
## Purpose {#purpose}

Resolve GetKeyState from user32.dll, check the export, then call with left Shift code 160. The pressed state is bit 15 of the SHORT result; the example does not mutate game state.

## Example {#code}

```erm
ZVSE2
!?FU(MyMod_ReadShift);
!#VA(pressed:x);
!!VR(pressed):S0;
!!SN:L^user32.dll^/?(module:y);
!!FU&(module)=0:E;
!!SN:A(module)/^GetKeyState^/?(getKeyState:y);
!!FU&(getKeyState)=0:E;
!!VR(savedV1:y):Sv1;
!!SN:E(getKeyState)/1/160;
!!VR(pressed):Sv1 Sd>>15 &1;
!!VRv1:S(savedV1);
```

## Parameters and result {#contract}

Call `!!FU(MyMod_ReadShift):P?(pressed:y);`. Requires Windows and ERA. UI handlers are local; keyboard state is not automatically synchronized multiplayer gameplay. The example was checked against source but not separately run in game.

## Related {#related}

[SN](../../receivers/sn/) · [Framework function](../../framework/functions/getkeymodsstate/) · [Other examples](../)

## Related commands and tables {#reference-links}

[ERA services, memory and sound (SN)](../../receivers/sn/#command-l-library-handle-ahandle-export-address) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-d-o-x-y-level) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-eaddress-convention-args) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-f-export-args) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-g-label-q) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-h-monname-h-secskill) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-istring-result-t-key-result-name-value) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-m-m-m-index-m-address-index) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-r-old-new) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [ERM debugging and compatibility](../../compatibility/) · [MP3 music (MP)](../../receivers/mp/) · [Creature recruitment (RD)](../../receivers/rd/) · [General game operations (UN)](../../receivers/un/#command-q-1-r) · [Conditions and branches](../../conditions/) · [Loops: re, br, co, and DO](../../loops/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-h-spec-h-art-h-spell) · [Creature table](../../tables/creatures/) · [General game operations (UN)](../../receivers/un/#command-g0-skill-text-z-g1-monster-text-z-g2-hero-field-value) · [Game object table](../../tables/objects/) · [Map objects (OB)](../../receivers/ob/#command-b-h) · [Object-type hints (HT)](../../receivers/ht/) · [Secondary skills](../../tables/secondary-skills/) · [Hero table](../../tables/heroes/) · [Function calls (FU)](../../receivers/fu/#command-e) · [ERM triggers and events](../../triggers/) · [Text resources: ERT, ERS and JSON](../../tables/text-resources/) · [Variables and expressions (VR)](../../receivers/vr/#command-mask-or-xmask-sd-bits-sd-bits) · [Map-cell data (PO)](../../receivers/po/)
<!-- llm:end erm.examples.sn-e 1 -->

