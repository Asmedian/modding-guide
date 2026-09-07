---
{"title":"Conditions and branches","summary":"Variable and flag checks, AND/OR conditions, and if/el/en blocks.","translationStatus":"reviewed"}
---

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
