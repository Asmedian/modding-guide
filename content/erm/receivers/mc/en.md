---
{"title":"Classic ERM macros (MC)","summary":"MC receiver: classic erm macros, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver MC {#ref-rec-mc}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-s-name"></span><span class="erm-anchor" id="example"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MC</strong> (macros)
</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mc-red"></span><span class="erm-tone-red">!!MC#:S@Var@</span> 
- install a macro.</strong><br>
Used to assign a text name to a variable.<br>
Applicable to <a href="../../variables/#ref-cont-flags-var-typ">variables</a> f…t, v#, z# and w#.</div>
<strong></strong><span class="erm-anchor" id="ref-rec-mc-1"></span><details class="erm-comment"><summary>Note (<span class="erm-anchor" id="ref-rec-mc-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
First you must install the macro with the instruction before using the macro name:
<pre class="erm-example"><code class="language-erm">!#MCv100:S@Var100@;
The variable v100 now has a second name of “Var100”.</code></pre></div></details>
<div class="erm-paragraph">The length of a macro name is limited to eight characters. You can use a longer name, but only the first 8 characters will be used to search for the variable.<br>
You can change the macro name at any time if you set it not in the instructions, but in the receiver.<br>
You can use a macro name anywhere where you can use a variable. It must be enclosed between two characters <strong>$</strong>.
<pre class="erm-example"><code class="language-erm">!!HE-1:P?$Var100$/?v1000/?v999;
!!IF&amp;$Var100$=v1000/v100=5:...;</code></pre>

You can set the macro name as <em>z</em>-variable.<br>
To use macro names in a message they are as follows: <strong>$$</strong> and there is a sign ahead <strong>%</strong>:
<pre class="erm-example"><code class="language-erm">!!IF:M^This is %$player$ and its value is %$value$^;</code></pre></div>

</div>
</section>
:::

## Related reference {#related}

[VR](../../receivers/vr/)



## Related commands and tables {#reference-links}

[Variables, strings and arrays](../../variables/)
