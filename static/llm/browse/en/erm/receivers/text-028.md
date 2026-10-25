# Pandora box (PA)

ID: erm.receivers.pa
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/pa/
Part: 1/1
Source references: old-help:rec-pa.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.pa 1 -->
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
When setting a Pandora's Box or Event on a card using ERM, be sure to call <a href="./#ref-rec-pa-i">PA:I</a> after the object is created. 
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
<strong><u>Comments</u>:</strong> Guards is turned on and off manually.</div>
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
Set/check/get whether guards is enabled:<br>
      $ = 0 – guards is disabled;<br>
      everything else – guards is on</div>

<hr>

















</div>
</div>
</section>
:::

## Related reference {#related}

[LE](../../receivers/le/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/) · [Game object table](../../tables/objects/) · [Local map events (LE)](../le/) · [Artifact table](../../tables/artifacts/) · [Creature table](../../tables/creatures/) · [Secondary skills](../../tables/secondary-skills/) · [Resources](../../tables/resources/) · [Spell table](../../tables/spells/)
<!-- llm:end erm.receivers.pa 1 -->

# Pyramids and new objects (PM)

ID: erm.receivers.pm
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/pm/
Part: 1/1
Source references: old-help:rec-pm.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.pm 1 -->
## Receiver PM {#ref-rec-pm}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-pm-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>PM</strong>  (pyramids and new objects) </span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-pm-red"></span><span class="erm-tone-red">!!PM#1/#2/#3:XXXX;</span> 
- Pyramid or <a href="../../tables/wog-object-variants/#ref-form-newobj" data-context="true">new object</a> in #1/#2/#3.</strong> Pyramid - <a href="../../tables/objects/#ref-form-objects-pir" data-context="true">type 63</a>.<br>
<em>Extended syntax:<br>
</em><strong><span class="erm-tone-red">!!PM$:XXXX;</span> - Pyramid or <a href="../../tables/wog-object-variants/#ref-form-newobj" data-context="true">
new object</a> 
in v$/v($+1)/v($+2)</strong></div>
<div class="erm-paragraph">This receiver has a dual purpose. It is used to set a spell, 
obtained after defeating the Pyramid guards, but can also be used to attract AI to the object, 
or vice versa, prevent the AI from visiting it.<br>
AI will visit the Pyramid (new object) if:
</div><span class="erm-anchor" id="ref-rec-pm-t0"></span><ol class="erm-margin-top-zero"><li>He has enough army to defeat the guards;</li>
<li>He has the wisdom of an expert;</li>
<li>If this object is NOT visited by any player;</li>
<li>If this object is NOT visited by this player.</li></ol>
<div class="erm-paragraph">We can't control the first 2 points, but we can control the last two.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-pm-p"></span><span class="erm-anchor" id="command-p-1-1"></span>P#1/$1</strong></span><br>
Set/check/get the flag “Visited by player”
</div><pre>        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">visiting player</a>
        $1 – Status:
	0 – not visited
	1 – visited</pre>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-pm-s"></span><span class="erm-anchor" id="command-s"></span>S$</strong></span><br>
Set/check/get a bonus <a href="../../tables/spells/#ref-form-spell" data-context="true">spell</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-pm-v"></span><span class="erm-anchor" id="command-v"></span>V$</strong></span><br>
Set/check/get the flag “Not visited”<br>
        0 = visited<br>
        1 = not visited<br>
<u></u></div><span class="erm-anchor" id="ref-rec-pm-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-pm-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can use PM:V to "attract" the AI to new objects (including <a href="../../tables/wog-object-variants/#ref-form-newobj-sphinx" data-context="true">Sphinx</a>).<br>
You can set this bit and wait for the AI to arrive.</div></details>
<hr>

















</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/)



## Related commands and tables {#reference-links}

[WoG object variants](../../tables/wog-object-variants/) · [Game object table](../../tables/objects/#values) · [Player colors](../../tables/players/) · [Spell table](../../tables/spells/) · [WoG object variants](../../tables/wog-object-variants/#values)
<!-- llm:end erm.receivers.pm 1 -->

# Map-cell data (PO)

ID: erm.receivers.po
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/po/
Part: 1/1
Source references: old-help:rec-po.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.po 1 -->
## Receiver PO {#ref-rec-po}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-po-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>PO</strong> (parameters of squares) </span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-po-red"></span><span class="erm-tone-red">!!PO#1/#2/#3:XXXX;</span> </strong>–<strong> set/check 
square in X Y L.</strong> Used to set or verify information of any 
square of the card.<br>
<em>Extended syntax:</em><br>
<strong><span class="erm-tone-red">!!PO$:XXXX;</span> – X Y L are respectively equal to v[$], v[$+1], v[$+2].</strong><br>
Can be useful if you want to control the number of heroes or 
players who can visit the facility (for a bonus, etc.).<br>
All commands, with the possible exception of counting, are needed only for convenience; 
they ALL can be used to store any numeric data.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-po-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-po-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?OB63/3; – trigger for each “Destroyed Tower” on the map
; X=v998, Y=v999, L=v1000
!!FU100:P; – call function 100

!?FU100; function body 100 
!!HE-1:O?y1 N?y2; 	y1=owner, y2=number
!!OB998:T?y3 U?y4; 	y3=object type, y4=object subtype
!!PO998:Hy2 Oy1 Ty3 Sy4; record information about the last visitor, his “color”, object type/subtype.</code></pre>
</div></details>
<span class="erm-anchor" id="ref-rec-po-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/ob/#ref-tr-ob">!?OB</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-b"></span><span class="erm-anchor" id="command-b"></span>B#/$</strong></span><br>
Set/check/get a large integer value 
(-2147483648…2147483647). You can set 2 values.<br>
         # – value number (0 and 1)<br>
         $ – numeric value<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-po-3"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-po-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
To remember two numbers, Y1 and Y2, in PO:B0, you need to do this:
<pre class="erm-example"><code class="language-erm">!!VRv3:S46000*y1 +y2;
!!PO...:B0/v3;</code></pre>
Here Y1 and Y2 each can be no more than 45999.<br>
Let's now "get" these numbers back:
<pre class="erm-example"><code class="language-erm">!!PO...:B0/?v3;
!!VRy1:Sv3 :46000;
!!VRy1:Sv3 %46000;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-c"></span><span class="erm-anchor" id="command-c-1-2-3-4-5"></span>C$1/$2/$3/$4/$5</strong></span><br>
Count all “objects on the map” with common data (the result will be written to v1).</div><pre>
        $1 – data compared with the value recorded via PO:T
        $2 – data compared with the value recorded via PO:S
        $3 – data compared with the value recorded via PO:H
        $4 – data compared with the value recorded via PO:O
        $5 – data compared with the value recorded via PO:N</pre>
<div class="erm-paragraph">To ignore any parameter use -1.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-po-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-po-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The command “walks” across the entire map and looks for objects that match your request.<br>
This command can be very useful if you want to control visitors to a particular object.<br>
In the basic WoG scripts, the following system for using data for PO receiver commands was adopted:<br>
<span class="erm-anchor" id="ref-rec-po-erm"></span><span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!PO</strong>..:C<a href="../../tables/objects/#ref-form-objects" data-context="true">type</a>/<a href="../../tables/objects/#ref-form-objects" data-context="true">subtype</a>/<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero</a>/<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">owner</a>/$5;</span><br>
<u>Example</u>:<br>
Using such a system, you can quickly count all objects of a certain type:
<pre class="erm-example"><code class="language-erm">!!PO0/0/0:C63/3/45/-1/-1;</code></pre>
Now v1 stores the number of objects of type 63 and subtype 3 visited by Solmir (45), regardless of its owner.</div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-h"></span><span class="erm-anchor" id="command-h-n-o-s-t"></span>H$</strong></span><br>
Set/check/get custom number (0..255)<br>
At the beginning of the game this value is 255 for all squares.<br>
<strong><u>Comment</u>:</strong> in basic WoG scripts this parameter is mainly used for 
<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero numbers</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-n"></span>N$</strong></span><br>
Set/check/get custom number (0..15)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-o"></span>O$</strong></span><br>
Set/check/get custom number (-8..8)<br>
At the beginning of the game this value is -1 for all squares.<br>
<strong><u>Comment</u>:</strong> in basic WoG scripts this parameter is mainly used to write the number corresponding to the number 
<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a>.<br>
<span class="erm-anchor" id="ref-rec-po-n1"></span><strong class="erm-tone-purple erm-strong">Glory</strong>:<em>"Information on the square on the map can be used for color: positive values for any bonus, 
and negative for the opposite – fine</em>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-s"></span>S$</strong></span><br>
Set/check/get custom number (0..255)<br>
<strong><u>Comment</u>:</strong> in basic WoG scripts this parameter is mainly used to record 
<a href="../../tables/objects/#ref-form-objects" data-context="true">object subtype</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-t"></span>T$</strong></span><br>
Set/check/get custom number (0..255)<br>
<strong><u>Comment</u>:</strong> in basic WoG scripts this parameter is mainly used to record 
<a href="../../tables/objects/#ref-form-objects" data-context="true">object type</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-v"></span><span class="erm-anchor" id="command-v"></span>V#/$</strong></span><br>
Set/check/get integer value (-32768…32767). You can set up to 4 values.<br>
         # – value number to set (0..3)<br>
         $ – value to set/KONTROL/Regewad<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-po-4"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-po-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Let's, for example, remember three numbers less than 100. Let them be 19, 37 and 46
<pre class="erm-example"><code class="language-erm">!!VRv1:S19;
!!VRv2:S37;
!!VRv3:S46;
!!VRv100:Sv1*100+v2*100+v3; = 193746
Now let's return them from v100...
!!VRv1:Sv100:10000; = 19
!!VRv2:Sv100%10000:100; = 37
!!VRv3:Sv100%1000; = 46</code></pre></div></details>
<hr>
















</div>
</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [HT](../../receivers/ht/)



## Related commands and tables {#reference-links}

[Object visits (OB)](../../triggers/ob/) · [Game object table](../../tables/objects/) · [Hero table](../../tables/heroes/) · [Player colors](../../tables/players/)
<!-- llm:end erm.receivers.po 1 -->

# Prison (PR)

ID: erm.receivers.pr
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/pr/
Part: 1/1
Source references: old-help:rec-pr.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.pr 1 -->
## Receiver PR {#ref-rec-pr}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-pr-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver 
<strong>PR</strong> 
(prison)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-pr-red"></span><span class="erm-tone-red">!!PR#1/#2/#3:XXXX;</span> 
- prison in coordinates X Y L (#1, #2, #3).</strong> 
Prison – <a href="./#ref-rec-pr" data-context="true">type 62</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-pr-h"></span><span class="erm-anchor" id="command-h"></span>H$</strong></span><br>
Set/check/get the hero's number in custody.</div>

<hr>

















</div> 

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)
<!-- llm:end erm.receivers.pr 1 -->

