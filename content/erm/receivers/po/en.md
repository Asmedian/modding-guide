---
{"title":"Map-cell data (PO)","summary":"PO receiver: map-cell data, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Map-cell data (PO)"}
---

## Receiver PO {#ref-rec-po}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-po-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>PO</strong> (parameters of squares) </span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-po-red"></span><span class="erm-tone-red">!!PO#1/#2/#3:XXXX;</span> </strong>–<strong> set/check 
square in X Y L.</strong> Used to install or verify information of any 
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
