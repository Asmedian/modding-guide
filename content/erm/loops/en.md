---
{"title":"Loops: re, br, co, and DO","summary":"Loop bounds, steps, nesting, and repeated function calls.","translationStatus":"reviewed"}
---

## re-br-co {#ref-rec-re}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receivers <strong>RE</strong>/<strong>BR</strong>/<strong>CO</strong></span><a href="../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
<span>(repeat – interrupt – continue)</span></div>
<div class="erm-paragraph"><br>ERA made it possible, among other things, to use high-speed cycles through new receivers to write ERM scripts: <a href="./#ref-rec-re">!!re</a>, <a href="./#ref-rec-re-br-co">!!br</a>, <a href="./#ref-rec-re-br-co">!!co</a>.</div>
<hr>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-rec-re-red"></span><span class="erm-tone-red">!!re $1[/#2/#3/#4]:;<br>
   …<br>
!!en:;</span></strong><br>
Repeats a block of code. Only the first argument ($1) is required.
</div><pre>         $1 – loop counter variable (any numeric local or global variable)
         #2 – initial counter value (optional). Default: value of the loop counter variable.
         #3 – final counter value (optional). Default: initial value of the loop counter.
         #4 – cycle step (optional). Default: 1 if set to #3, otherwise 0.</pre>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">; An endless loop of annoying messages:
!!re i:;
  !!IF:M^Give me the money, brotherly!^;
!!en:;</code></pre>
<strong></strong><span class="erm-anchor" id="ref-rec-re-2"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-re-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
First, the loop counter variable is initialized.<br>
Values #2 and #3 are remembered for the entire loop and will not be evaluated on each iteration (repeat).<br>
The step determines what value needs to be added to the counter variable after each iteration. 
It also defines the type of iteration stopping condition.<br>
The positive step checks if the value is $1&gt;#3.<br>
The negative step checks whether the value $1&lt;#3.
<pre class="erm-example"><code class="language-erm">; Disband the current hero's army
!!re i/0/6:;
  !!HE-1:C0/i/-1/0;
!!en:;

; Show 10, 8, 6, 4, 2 (1 and 0 will not be shown)
!!re i/10/1/-2:;
  !!IF:M^%Vi^;
!!en:;</code></pre>
</div></details>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-re-br-co"></span>The logic of the receiver is as follows:
</div><span class="erm-anchor" id="ref-rec-re-t0"></span><ul class="erm-margin-top-zero">
<li>On <strong><span class="erm-tone-red">!!re</span></strong> ("<em>repeat</em>" – repeat) checks whether the counter has gone beyond the final value #3? If yes, then execution is transferred to the corresponding block !!en.</li>
<li>Counter on <strong><span class="erm-tone-red">!!en</span></strong> is incremented, and if the stopping condition is not met, the next receiver after the nearest !!re will be executed.</li>
<li><strong><span class="erm-tone-red">!!co</span></strong> ("<em>continue</em>" – continue) with the condition (optional) immediately goes to the loop receiver !!en, which, in turn, will be executed in accordance with the operating logic.</li>
<li><strong><span class="erm-tone-red">!!br</span></strong> ("<em>break</em>" – abort) with the condition (optional) immediately goes beyond the receiver cycle !!en.</li>
</ul>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">; Show the number of the 1st empty hero slot, if found
!!re i/0/6:;
  !!HE-1:C0/i/?t/?k; get the type of creatures in slot i and their number
  !!if|t=-1/k=0:;
    !!IF:M^Free slot number %Vi^;
    !!br:; interrupt and exit the loop
  !!en:;
!!en:;
!!IF&amp;i&gt;6:M^No free slots found^;</code></pre>
Maximum allowed 16 nested blocks <a href="../conditions/#ref-rec-iee">!!if</a> / <a href="./#ref-rec-re">!!re</a>.<br>
<span class="erm-anchor" id="ref-rec-re-bold"></span><em class="erm-strong">Note:</em> <a href="./#ref-rec-re">!!re</a> does not support direct use of conditions, but there is nothing stopping you from using the receiver to "wrap" the loop <a href="../conditions/#ref-rec-iee">!!if</a>.
<pre class="erm-example"><code class="language-erm">!!if&amp;condition:;
  !!re ...:;
    ...
  !!en:;
!!en:;</code></pre>
<div class="erm-paragraph">Loops for most tasks are of the WHILE DO type, that is, with the possibility of zero iterations. But nevertheless, !!re allows you to write any: from FOR <em>i</em> FROM <em>x</em> TO <em>y</em> BY <em>step</em>, to LOOP and DO WHILE.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!re i;
  ...
  !!br&amp;exit condition:; this is DO...WHILE
!!en:;

!!re i;
  !!br&amp;exit condition:; this is WHILE...DO
  ...
!!en:;</code></pre></div>
<div class="erm-paragraph">For cycle control receivers <a href="./#ref-rec-re-br-co">!!br</a> / <a href="./#ref-rec-re-br-co">!!co</a> There is support for loop levels.<br>
<span class="erm-anchor" id="ref-rec-re-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!br</span> 1:;</strong> equivalent <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!br</span>:;</strong> and means to interrupt the current (most nested) loop.<br>
<strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!br</span> 2:;</strong> will interrupt the cycle to a higher level, and <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!br</span> 3:;</strong> – even higher in level, etc. ...<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!re i/0/6:; 2nd level cycle
  !!re j/0/4:; 1st level cycle
    !!IF:M^%Vi %Vj^;
      !!if&amp;i=3:; The last message shown will be "3 0"
        !!br 2:; interrupt the 2nd level cycle
      !!en;
  !!en:;
!!en:;</code></pre>
</div>





</div>
</section>
:::

## The re loop {#repeat}

`!!re counter/start/end/step;` repeats a block through its matching `!!en;`. The end bound is inclusive. Start and end are evaluated on entry, not on each iteration. A positive step stops when the counter exceeds the end; a negative step stops when it falls below the end. Zero iterations are possible. Choose a step that agrees with the bounds.

## Optional parameters {#defaults}

Only the counter is required. Omitting the start uses the counter’s current value; omitting the end uses the start. The default step is 1 when an end is supplied, otherwise 0. A zero-step loop needs an explicit exit to avoid running forever. `re` does not accept an ordinary condition suffix; wrap it in `if`.

## Continue and break {#control}

`!!co;` jumps to the closing `en`, so the counter still advances. `!!br;` exits beyond `en`. Both accept conditions. Level `1` selects the innermost loop; `!!br 2:;` exits two nested loops. The combined `if` and `re` nesting limit is 16.

## Summing a range {#example}

This function returns the sum from 1 through a positive limit. A limit below 1 produces zero iterations.
```erm
ZVSE2
!?FU(MyMod_Sum);
!#VA(limit:x) (result:x);
!!VR(result):S0;
!!re (index:y)/1/(limit);
  !!VR(result):+(index);
!!en;
```

## Repeated calls with DO {#do}

`!!DOfunction/start/end/step:Parguments;` invokes an ERM function at each step. Inside it, `x16` holds the current counter value, leaving `x1..x15` for ordinary arguments. Do not assume `x16` always counts iterations from 1: start and step determine its value. Changing `x16` affects the loop. For new code, `re` is usually simpler when no separate function is needed.

[DO receiver](../receivers/do/) · [Functions](../functions/)

## Stop modifier {#stop-modifier}

Since ERA 3.0.4, the fifth argument in `!!re counter/start/stop/step/stop_modifier;` is added to the stop value. For 0..count-1 use `!!re i/0/(count)/1/-1;`. Bounds are evaluated on entry; changing count in the body does not recalculate the limit.

## Related commands and tables {#reference-links}

[Repeated function calls (DO)](../receivers/do/#command-p-1-15) · [Function calls (FU)](../receivers/fu/) · [ERM debugging and compatibility](../compatibility/) · [Repeated function calls (DO)](../receivers/do/) · [Conditions and branches](../conditions/)
