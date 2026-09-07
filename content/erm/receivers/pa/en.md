---
{"title":"Pandora box (PA)","summary":"PA receiver: pandora box, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Pandora box (PA)"}
---

## Receiver PA {#ref-rec-pa}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-pa-text"></span><div>

<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>PA</strong><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(Pandora's Box)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-pa-red"></span><span class="erm-tone-red">!!PA#1/#2/#3:XXXX;</span> 
- changing the attributes of Pandora's Box on the map in X Y L coordinates (#1/#2/#3).</strong> Pandora's Box - <a href="../../tables/objects/#ref-form-objects" data-context="true">type 6</a>.<br> 
<em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>!!PA#:XXXX;</strong></span> 
- Pandora's Box by coordinates in variables v[#], v[#+1], v[#+2]</div>
<div class="erm-paragraph">The PA receiver can be used to configure Events.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-pa-1"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-pa-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
When installing a Pandora's Box or Event on a card using ERM, be sure to call <a href="./#ref-rec-pa-i">PA:I</a> after the object is created. 
Otherwise, you will not be able to customize or interact with the object (most likely the game will crash).</div></details>
<span class="erm-anchor" id="ref-rec-pa-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../le/#ref-rec-le">!!LE</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-a"></span><span class="erm-anchor" id="command-a-a"></span><span class="erm-tone-red"><strong>A</strong></span><br>
Clear the list of artifacts.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>A#/$</strong></span><br>
Set/check/get qty. &lt;<a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifacts #</a> in $.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-c"></span><span class="erm-anchor" id="command-c-1-2-3-g-1-2-3"></span><span class="erm-tone-red"><strong>C#1/$2/$3</strong></span><br>
Set/check/get number of creatures in position:<br>
         #1 – position (0..6)<br>
         $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
         $3 – quantity</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-e"></span><span class="erm-anchor" id="command-e-f-1-2-3-4"></span><span class="erm-tone-red"><strong>E$</strong></span><br>
Set/check/gain experience in $.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-f"></span><span class="erm-tone-red"><strong>F#1/$2/$3/$4</strong></span><br>
Set/check/get Attack/pr/The Power of Magic/Knowledge into $1/$2/$3/$4.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-g"></span><span class="erm-tone-red"><strong>G#1/$2/$3</strong></span><br>
Set/check/get the number of guards<br>
         #1 – position (0..6)<br>
         $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature type</a><br>
         $3 – quantity<br>
<strong><u>Comments</u>:</strong> Security is turned on and off manually.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-i"></span><span class="erm-anchor" id="command-i"></span><span class="erm-tone-red"><strong>I</strong></span><br>
Initialize Pandora's Box.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-pa-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-pa-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Pandora's Boxes and Events share the same list of objects and have a total limit of 1024 objects per map.<br>
PA:I will cause an error when trying to add an object over the limit.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-m"></span><span class="erm-anchor" id="command-m-m-text-m0"></span><span class="erm-tone-red"><strong>M^text^</strong></span><br>
Set standard ERM string as message text. 
The line may contain variable mapping codes.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M$</strong></span><br>
Set/get the message text into a string variable.<br>
<em>Extended syntax:</em><br>
<span class="erm-tone-red"><strong>M0</strong></span><br>
Delete message.<br>
<em>Advanced syntax (for advanced users):</em><br>
<span class="erm-tone-red"><strong>M$</strong></span><br>
Set the text at the $ pointer as the message text or get a pointer to the message text.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-n"></span><span class="erm-anchor" id="command-n-n-n"></span><span class="erm-tone-red"><strong>N</strong></span><br>
Clear list of secondary skills</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>N$</strong></span><br>
Set/get the levels of all secondary skills in 28 variables, starting with $:<br>
         0 - no<br>
         1 - basic<br>
         2 - advanced<br>
         3 - expert<br>
You must pass a variable as a parameter, not some index.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-pa-2"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-pa-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!PAx/y/l:N?v1; get all skill levels in v1..v28
!!PAx/y/l:Ny-17; set the levels of all skills from y-17..y-44</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>N#/$</strong></span><br>
Set/check/get # level <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">secondary skill #</a> in $:<br>
         0 - no<br>
         1 - basic<br>
         2 - advanced<br>
         3 - expert</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-o"></span><span class="erm-anchor" id="command-o-p-r-u"></span><span class="erm-tone-red"><strong>O$</strong></span><br>
Set/check/get morale in $.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-p"></span><span class="erm-tone-red"><strong>P$</strong></span><br>
Set/check/get spell points in $.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-r"></span><span class="erm-tone-red"><strong>R#/$</strong></span><br>
Set/check/get qty. <a href="../../tables/resources/#ref-form-resource" data-context="true">resource #</a> in $.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-s"></span><span class="erm-anchor" id="command-s-s"></span><span class="erm-tone-red"><strong>S</strong></span><br>
Clear Spell List</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>S#/$</strong></span><br>
Set/check/get availability <a href="../../tables/spells/#ref-form-spell" data-context="true">spells #</a> in $:<br>
         0 – spell not given<br>
         1 – spell is given</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-u"></span><span class="erm-tone-red"><strong>U$</strong></span><br>
Set/check/get lucky in $.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-x"></span><span class="erm-anchor" id="command-x"></span><span class="erm-tone-red"><strong>X$</strong></span><br>
Set/check/get whether security is enabled:<br>
      $ = 0 – security is disabled;<br>
      everything else – security is on</div>

<hr>

















</div>
</div>
</section>
:::

## Related reference {#related}

[LE](../../receivers/le/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/) · [Game object table](../../tables/objects/) · [Local map events (LE)](../le/) · [Artifact table](../../tables/artifacts/) · [Creature table](../../tables/creatures/) · [Secondary skills](../../tables/secondary-skills/) · [Resources](../../tables/resources/) · [Spell table](../../tables/spells/)
