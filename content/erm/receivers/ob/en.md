---
{"title":"Map objects (OB)","summary":"OB receiver: map objects, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Map objects (OB)"}
---

## Receiver OB {#ref-rec-ob}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>

<span class="erm-anchor" id="ref-rec-ob-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>OB</strong> (objects)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-ob-red"></span><span class="erm-tone-red">!!OB#1/#2/#3:XXXX;</span> — object receiver at X/Y/L coordinates. It activates or deactivates the object and sets its type and other general properties.</strong><br>
<strong>
</strong></div><span class="erm-anchor" id="ref-rec-ob-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ob-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">With this receiver, you can set/check/get the object type, its subtype and control word. 
This is enough to create a copy of any object, although different in appearance, but identical in properties.</div>
<span class="erm-anchor" id="ref-rec-ob-q1"></span><div class="erm-tone-quote erm-note"><span class="erm-anchor" id="ref-rec-ob-bold"></span><em class="erm-strong">How can I check whether a human player or the AI is visiting an object?</em></div>
When a human player's hero visits an object, flag 1000 is set to 1 (true), and for an AI-controlled hero - to 0 (false).<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?OB...;
!!IF&amp;1000:M^Player^;
!!IF&amp;-1000:M^AI^;</code></pre></div></details>
<div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/ob/#ref-tr-ob">!?OB</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-b"></span><span class="erm-anchor" id="command-b-h"></span>B</strong></span><br>
Remove a right-click tooltip about an object.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-c"></span><span class="erm-anchor" id="command-c"></span>C$</strong></span><br>
Set/check/get the object's <a href="../../tables/object-control-words/#ref-cont-conwords">control word</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ob-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ob-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<em><strong>Control word</strong></em> - object code in the game, meaning a certain internal parameter of the object.<br>
For example, “Sea Chest” can store the following values for this command:<br>
0 = empty<br>
1 = 1500 gold<br>
2 = 1000 gold and artifact
<ul><li>Example of <em>identifying</em> an artifact in the chest:
<pre class="erm-example"><code class="language-erm">!!OB998:C?y1;
!!VRy2:Sy1 &amp;7;
!!VRv1&amp;y2=2:Sy1 :8 &amp;255 -1;</code></pre>
Now v1 stores <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact number</a>, if one is present.<br></li>
<li>Example of <em>setting</em> an artifact in the chest:
<pre class="erm-example"><code class="language-erm">!!OB998:Cx; where 'x' is the number of the artifact.</code></pre>
The number is calculated using this formula:<br>
<span class="erm-tone-purple">8×<em><strong>z</strong></em> – 8190</span>, where <em><strong>z</strong></em> - <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact number</a>.<br>
We enter the resulting number instead of <em><strong>x</strong></em>, and now the chest contains 1000 gold and your artifact.</li></ul></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-d"></span><span class="erm-anchor" id="command-d-e"></span>D#</strong></span><br>
Ban player <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">colour #</a> from using this object</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-e"></span>E#</strong></span><br>
Allow player <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">colour #</a> to use this object</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-h"></span>H$</strong></span><br>
Set a tooltip for any <a href="../../tables/objects/#ref-form-objects" data-context="true">object</a> (on <span class="erm-anchor" id="ref-rec-ob-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">).<br>
Take the tooltip text from z-variable $ ($ is the <em>z</em>-variable number)<br>
<strong><u>Comment</u>:</strong> a hint can be displayed even if the object is hidden by fog.</div>
<div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../ht/#ref-rec-ht">!!HT</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-m"></span><span class="erm-anchor" id="command-m-1-2-3"></span>M$1/$2/$3</strong></span><br>
This command can disable many standard game messages and questions for an object at any time:<br>
         $1 –
<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">which player</a> (-1 – for everyone)<br>
         $2 – cancel (1) next message when visiting<br>
         $3 – next status $2 after the virtual or real appearance of the message<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ob-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ob-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This is not a real cancel, it is an AUTO reply (default is “no”). All messages via <a href="../if/#ref-rec-if">receiver IF</a> will be shown as usual.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!OB1/2/0:M-1/1/0;</code></pre>
The next hero to visit the object at coordinates (1/2/0), regardless of the player's colour, will not receive a message/question or other words, 
will appear as if the player clicked "no".</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-r"></span><span class="erm-anchor" id="command-r-s"></span>R</strong></span><br>
Allow ALL players to use this object</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-s"></span>S</strong></span><br>
Prevent ALL players from using this object<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ob-4"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ob-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
When an object is disabled on the map, when it is visited, ERM receivers for the corresponding object WILL be executed. 
This command disables only the standard properties of an object.<br>
<strong>IMPORTANT:</strong> Be careful - do not use the OB:S command for objects with two inputs (2 yellow cells).</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-t"></span><span class="erm-anchor" id="command-t-u"></span>T$</strong></span><br>
Set/check/get <a href="../../tables/objects/#ref-form-objects" data-context="true">object type</a></div>
<span class="erm-anchor" id="ref-rec-ob-5"></span><details class="erm-comment"><summary><strong>Comment</strong><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(<span class="erm-anchor" id="ref-rec-ob-show5"></span><u class="erm-toggle-label">show</u>)</summary><div class="erm-comment-body">Sometimes it is not possible using the commands [<a href="./#ref-rec-ob-t">T</a>] and [<a href="./#ref-rec-ob-u">U</a>] to determine the object type/subtype,
if a hero is standing on the object. To do this, you can use this function:
<pre class="erm-example"><code class="language-erm">!?FU(GetRealObjectOnMap);
; Getting the actual type of object on the map (for example, under the hero)
; x1/x2/x3 - coordinates of the object on the map
; ?x4/?x5 - return values: object type/subtype
; get MapItem
!!UN:C6918840/-4/?y1;
!!UN:Cy1/92/-4/?y2;
!!SN:E4228816/2/y2/x1/x2/x3;
!!VRy3:Sv1;
; get object subtype
!!UN:Cy3/34/2/?x5;
; get the correct object type
!!SN:E5231136/2/y3;
!!VRx4:Sv1;
!!UN&amp;x4=0:Cy3/30/2/?x4;</code></pre></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-u"></span>U$</strong></span><br>
Set/check/get <a href="../../tables/objects/#ref-form-objects" data-context="true">object subtype</a></div>
<hr>

















</div>
</div>
</section>
:::

## Related reference {#related}

[OB](../../triggers/ob/) · [PA](../../receivers/pa/) · [HT](../../receivers/ht/)



## Related commands and tables {#reference-links}

[Object visits (OB)](../../triggers/ob/) · [Object control words](../../tables/object-control-words/) · [Artifact table](../../tables/artifacts/) · [Player colors](../../tables/players/) · [Game object table](../../tables/objects/) · [Object-type hints (HT)](../ht/) · [Flags, messages and choices (IF)](../if/) · [ERM debugging and compatibility](../../compatibility/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.2.0, -](../../compatibility/#era3-v-3-2-0-l2812) — Fixed re/FU/DO/OB/...dozens of commands... didn't support global named variables in receiver parameters. Examples: !!FUi^edu_someFunc^:P; !!OBi^edu_x^/i^edu_y^/i^edu_z^:T?(objType:y);
<!-- ERA3-GENERATED:END -->
