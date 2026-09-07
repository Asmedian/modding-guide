---
{"title":"Object-type hints (HT)","summary":"HT receiver: object-type hints, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver HT {#ref-rec-ht}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ht-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>HT</strong> (hint text)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-ht-red"></span><span class="erm-tone-red">!!HT$1/$2:XXXX;</span> 
- allows you to set a tooltip </strong>(text by <span class="erm-anchor" id="ref-rec-ht-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> )<strong> for all map objects of a certain type and subtype.</strong>
</div><span class="erm-anchor" id="ref-rec-ht-t0"></span><pre class="erm-margin-top-zero">	$1 – <a href="../../tables/objects/#ref-form-objects" data-context="true">object type</a> (can be variable)
	$2 – <a href="../../tables/objects/#ref-form-objects" data-context="true">subtype</a> (-1 = all) (can be variable)</pre>
<strong></strong><span class="erm-anchor" id="ref-rec-ht-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ht-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
First, a hint for a specific object is always searched.<br>
If it is not found, then it is searched by the type and subtype of any HT (W,V) command<br>
If not found, then it is searched by type and any subtype.<br>
The command does not check for object visibility, i.e. you can get a hint text even by clicking on an unknown point with a given description. Use trigger <a href="../../triggers/cm/#ref-tr-cm">!?CM</a> and team <a href="../tr/#ref-rec-tr-v">!!TR:V</a> to eliminate such cases.  
<br>
<u>Simple example</u> - setting tooltip text for all objects of a certain type and subtype (no changes):
<pre class="erm-example"><code class="language-erm">ZVSE
!#VRz100:S^Bat Fang^;
!#VRv25:S0;
!#HT98/1:V25/0/100;
This example changes the tooltip text of all Stronghold towns on the map to "Fang of the Bat" when the game starts.</code></pre><br>
More <u>complete example</u>An illustration of all three commands is shown below. Place this ERM code in an event on the test card 
and insert three columns of three types of mushroom buildings on the map with four mushroom buildings in a column:<br>

<pre class="erm-example"><code class="language-erm">ZVSE
!#HT63/18:V10/0/10; !#VRz10:S^Initialization 63/18^;
!#HT63/18:V10/1/11; !#VRz11:S^One 63/18^;
!#HT63/18:V10/2/12; !#VRz12:S^Two 63/18^;
!#HT63/18:V10/3/13; !#VRz13:S^Three 63/18^;
!#VRv10:S0;
!?OB63/18;
!!VRv10:+1;

!#HT63/14:W10/0/20; !#VRz20:S^Initialization 63/14^;
!#HT63/14:W10/1/21; !#VRz21:S^One 63/14^;
!#HT63/14:W10/2/22; !#VRz22:S^Two 63/14^;
!#HT63/14:W10/3/23; !#VRz23:S^Three 63/14^;
!#HT63/14:W10/4/24; !#VRz24:S^Four 63/14^;
!#HT63/14:W10/5/25; !#VRz25:S^Five 63/14^;
!?OB63/14;
!!IF:W-1;
!!VRw10:+1;

!#HT63/30:P0/30; !#VRz30:S^Initialization 63/30^;
!#HT63/30:P1/31; !#VRz31:S^One 63/30^;
!#HT63/30:P2/32; !#VRz32:S^Two 63/30^;
!#HT63/30:P3/33; !#VRz33:S^Three 63/30^;
!#HT63/30:P4/34; !#VRz34:S^Four 63/30^;
!#HT63/30:P5/35; !#VRz35:S^Five 63/30^;
!?OB63/30;
!!PO998:Nd1;
</code></pre></div></details>
<span class="erm-anchor" id="ref-rec-ht-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: team <a href="../ob/#ref-rec-ob-h">!!OB:H</a></div>

<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ht-p"></span><span class="erm-anchor" id="command-p-1-2"></span>P$1/$2</strong></span><br>
The hint depends on <a href="../po/#ref-rec-po-n">PO:N</a> – numbers<br>
        $1 – number (0..15). If the number is equal to the number PO:N, then the variable z$2 is used as the tooltip text;<br>
        $2 – number <em>z</em>-variable (1..1000) containing the hint (0 = delete)<br>
Use this method when you need to set a tooltip for an object without changing the other tooltips of other similar objects.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ht-t"></span><span class="erm-anchor" id="command-t"></span>T$</strong></span><br>
Set a tooltip for all objects of a certain type and subtype in <em>z</em>-variable (0 = delete)<br>
For example, you can set a tooltip for an artifact: 
<span class="erm-anchor" id="ref-rec-ht-erm"></span><span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!HT</strong>5/<a href="../../tables/artifacts/#ref-form-a1" data-context="true" title="... artifact number"><strong>#</strong></a>:T$;</span><br>
This tooltip will only be used if no other tooltip types are installed.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ht-v"></span><span class="erm-anchor" id="command-v-1-2-3"></span>V$1/$2/$3</strong></span><br>
Hint depending on <em>v</em>-variable<br>
         $1 – number <em>v</em>-variable<br>
         $2 – value (0..3). If the variable v$1 is equal to $2, then use z$3 in the hint <br>
         $3 – number <em>z</em>-variable (1..1000) containing text (0 = delete)<br>
Use this method when you want to change the tooltip for an object after the hero has visited it.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ht-w"></span><span class="erm-anchor" id="command-w-1-2-3"></span>W$1/$2/$3</strong></span><br>
Hint depending on <em>w</em>-variable<br>
         $1 – number <em>w</em>-current hero variable<br>
         $2 – value. If the W-variable ($1) of the current hero is equal to $2, then use z$3 in the hint<br>
         $3 – number <em>z</em>-variable (1..1000) containing text (0 = delete)<br>
Use this command when you want to change the object's tooltip for each hero who has or has not visited the object.<br><br>
<span class="erm-anchor" id="ref-rec-ht-bold"></span><em class="erm-strong">Note:</em> hero variables w101...w200 do not work with HT:W. Here you can only use w1…w100!</div>
<hr>
















</div>


</div>
</section>
:::

## Related reference {#related}

[PO](../../receivers/po/) · [TR](../../receivers/tr/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [Mouse clicks (CM)](../../triggers/cm/) · [Map tiles (TR)](../tr/#command-v) · [Map objects (OB)](../ob/#command-b-h) · [Map-cell data (PO)](../po/#command-h-n-o-s-t) · [Artifact table](../../tables/artifacts/)
