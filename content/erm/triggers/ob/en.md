---
{"title":"Object visits (OB)","summary":"Select an object type, type/subtype, or exact entrance coordinates. The object must have an entrance cell. Monsters, resources, and artifacts qualify; heroes use HE.","translationStatus":"reviewed"}
---

## Trigger OB {#ref-tr-ob}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>OB</strong> (objects)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-ob-red"></span><span class="erm-tone-red">!?OB#1/#2/#3;</span> - trigger when visiting an object at a certain point #1/#2/#3 (respectively, X Y L).<br>
<span class="erm-tone-red">!?OB#1/#2;</span> - trigger when visiting any object of a certain type and subtype.<br>
<span class="erm-tone-red">!?OB#1;</span> - trigger when visiting any object of a certain type.</strong><br>
</div><div class="erm-paragraph">Works for any object with an "input" (<a href="../../receivers/tr/#ref-rec-tr-e">yellow checkered</a> in the editor).<br>
<u>Note</u>: This trigger includes creatures, artifacts and resources, but not heroes 
(for heroes use trigger <a href="../he/#ref-tr-he">!?HE</a>)</div>
<div class="erm-paragraph">Object trigger options:
</div><span class="erm-anchor" id="ref-tr-ob-t0"></span><ol class="erm-margin-top-zero">
<li>!?OB#1/#2/#3; - will work when visiting an object at a certain point.</li>
<li>!?OB#1/#2; - will work when visiting <a href="../../tables/objects/#ref-form-objects" data-context="true">object</a> type #1 / subtype #2</li>
<li>!?OB#1; - will work when visiting <a href="../../tables/objects/#ref-form-objects" data-context="true">object</a> type #1</li>
</ol>
If several variants of the trigger !?OB are used for one object, then trigger "variant 2" is triggered first, 
and then options "1" and "3". Options "1" and "3" are executed in the order they appear in the script.<br>
When trigger "option 2" is triggered, the object coordinates are written to v998, v999, v1000, as X Y L respectively.<br>
This way you can get the coordinates of any other visited objects without specifying them.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?OB101; - any treasure chest on the map
!!CH998:...; - change the options of the visited chest.</code></pre>
You can use reference coordinates for all receivers that require precise coordinates using this pattern:
<span class="erm-legacy-code"><strong class="erm-tone-purple erm-legacy-strong">!!XX</strong><span class="erm-anchor" id="ref-tr-ob-dred"></span><strong class="erm-tone-red">@</strong>:…;</span> , where
<pre>      <strong class="erm-tone-purple erm-legacy-strong">XX</strong> - receiver name,
      <strong class="erm-tone-red">@</strong> = number <em>v</em>-variable storing the X coordinate (v[@]=X, v[@+1]=Y, v[@+2]=Level)</pre>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">...
!!OB10:...; 10 is the number of the v-variable storing the X coordinate</code></pre>
It is also possible through <a href="../../variables/#ref-cont-flags-var-ref">indirect links</a>:
<pre class="erm-example"><code class="language-erm">...
!!OBv11:...; the value v11 is accepted as a reference, so v[v11]=X, v[v11+1]=Y, v[v11+2]=Level.</code></pre>

<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">
Post-trigger <strong>OB</strong></span></div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>!$OB#1/#2/#3;</strong></span> - post-trigger for an object at a certain point on the map.<br>
<strong><span class="erm-tone-red">!$OB#1/#2;</span></strong> - post-trigger for any <a href="../../tables/objects/#ref-form-objects" data-context="true">object</a> type #1 / subtype #2.<br>
<span class="erm-tone-red"><strong>!$OB#1;</strong></span> - post-trigger for any <a href="../../tables/objects/#ref-form-objects" data-context="true">object</a> type #1.<br>
The principle of operation of the trigger is the same as that of a conventional trigger !?OB…; but this trigger is triggered after the standard properties of the object are executed.<br>
For example, post-trigger is used in a dwelling, triggering after the purchase of any creature.
The post-trigger for the castle will trigger after the end of the battle if town was attacked.<br>
<strong></strong></div><span class="erm-anchor" id="ref-tr-ob-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-tr-ob-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!$OB16;
; after visiting the creature bank, variables v998/v999/v1000 contain the coordinates of the visited object
!!CB998:G0/d/?y1 G1/d/?y2 G2/d/?y3 G3/d/?y4 G4/d/?y5 G5/d/?y6 G6/d/?y7; y1..y7 - number of guards in the units guarding the bank
!!OB998&amp;y1=0/y2=0/y3=0/ y4=0/y5=0/y6=0/y7=0:S; a ban on visiting the facility for all players if there are no guards (the bank is robbed)</code></pre></div></details>
<span class="erm-anchor" id="ref-tr-ob-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/ob/#ref-rec-ob">!!OB</a>, <a href="../../tables/objects/#ref-form-objects" data-context="true">object table</a></div>

</div>
</section>
:::

## When it fires {#event}

Select an object type, type/subtype, or exact entrance coordinates. The object must have an entrance cell. Monsters, resources, and artifacts qualify; heroes use HE.

## Declaration {#syntax}

```erm
!?OBtype; / !?OBtype/subtype; / !?OBx/y/level;
```

## Limitations and ordering {#limits}

The !$OB post-trigger runs after the default reaction. The three forms do not simply execute from general to specific: type/subtype runs first, followed by position and type handlers in script order. v998/v999/v1000 identify the visited object’s coordinates.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Map tiles (TR)](../../receivers/tr/#command-e-p) · [Visiting a hero (HE)](../he/) · [Game object table](../../tables/objects/) · [Variables, strings and arrays](../../variables/) · [Map objects (OB)](../../receivers/ob/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3871) — ^....^ literal in any ERM command is interpolated and replaced by temporal z-variable index before receiver execution. This z-variable is released right after receiver is executed. Don't use string literals in WoG 3.58 h…
<!-- ERA3-GENERATED:END -->
