---
{"title":"Map tiles (TR)","summary":"TR receiver: map tiles, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Map tiles (TR)"}
---

## Receiver TR {#ref-rec-tr}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-tr-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>TR</strong> (setting up territories)
</span></div>
<div class="erm-paragraph">
<strong><br>
<span class="erm-anchor" id="ref-rec-tr-red"></span><span class="erm-tone-red">!!TRx/y/l:XXXX;</span> 
- set the type of land (soil) or change the permeability of the square in the X Y L position.</strong> 
Used to set the type of land on the map or change the passability of this square.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tr-e"></span><span class="erm-anchor" id="command-e-p"></span>E$</strong></span><br>
Square – as an entrance (yellow square) or not<br>
         $ = 0 – yellow square<br>
         $ = 1 – no yellow square</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tr-g"></span><span class="erm-anchor" id="command-g"></span>G?$</strong></span><br>
A type of overlay landscaping on top of soil.<br>
You can only RECEIVE or CHECK.<br>
<u>
</u><br>
</div><span class="erm-anchor" id="ref-rec-tr-1"></span><details class="erm-comment"><summary>Possible landscapes (<span class="erm-anchor" id="ref-rec-tr-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
46      Magic Plains<br>
21      Cursed Ground<br>
227   Holy Ground<br>
224   Evil Fog<br>
222   Clover Field<br>
225   Favourable Winds<br>
228   Lucid Pools<br>
226   Fiery Fields<br>
231   Rocklands<br>
229   Magic Clouds</div></details>
<hr><div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-tr-p"></span>
P$<br></strong></span>Set/check/get the patency of the square (red square)<br>
         $ = 1 – means we pass<br>
         $ = 0 – do not pass</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-tr-t"></span><span class="erm-anchor" id="command-t-1-2-3-4-5-6-7-8"></span>
T$1/$2/$3/$4/$5/$6/$7/$8</strong></span><br>
Set/check/get terrain type<br>
         $1 – <a href="../../tables/terrain/#ref-form-terrain" data-context="true">terrain type</a>
<br>
         $2 – </div><span class="erm-anchor" id="ref-rec-tr-3"></span><details class="erm-comment"><summary>soil subtype</summary><div class="erm-comment-body"><blockquote class="erm-note">
<div class="erm-paragraph"><img src="../../../../assets/erm/0e5843b648a09023.gif" alt="dirtsand" loading="lazy" decoding="async" class="erm-figure" width="422" height="299"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/2a115150c138b4a2.gif" alt="grass" loading="lazy" decoding="async" class="erm-figure" width="439" height="303"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/49e53bd1fa7f8f5f.gif" alt="snow" loading="lazy" decoding="async" class="erm-figure" width="448" height="310"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/ce36992f383080fe.gif" alt="swamp" loading="lazy" decoding="async" class="erm-figure" width="435" height="303"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/f470fb5d64ecd86e.gif" alt="rock" loading="lazy" decoding="async" class="erm-figure" width="436" height="298"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/aed03ee79b0fc207.gif" alt="subtr" loading="lazy" decoding="async" class="erm-figure" width="439" height="307"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/89db327678cdca73.gif" alt="lava" loading="lazy" decoding="async" class="erm-figure" width="432" height="300"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/d10bfa6064055420.gif" alt="waterempt" loading="lazy" decoding="async" class="erm-figure"></div></blockquote></div></details>
         $3 – <span class="erm-anchor" id="ref-rec-tr-4"></span><details class="erm-comment"><summary>river type</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-rec-tr-t0"></span><blockquote class="erm-margin-top-zero erm-note">
	<strong>0</strong> = no<br>
	<strong>1</strong> = pure<br>
	<strong>2</strong> = frozen<br>
	<strong>3</strong> = cloudy<br>
	<strong>4</strong> = lava</blockquote></div></details><br>
         $4 – <span class="erm-anchor" id="ref-rec-tr-5"></span><details class="erm-comment"><summary>river subtype</summary><div class="erm-comment-body"><blockquote class="erm-note">
<div class="table-wrap erm-reference-table"><table width="50%">
	<span class="erm-anchor" id="ref-rec-tr-n2"></span><tr class="erm-tone-purple erm-align-center erm-strong">
		<td>Number</td>
		<td>Picture</td>
		<td>Number</td>
		<td>Picture</td>
	</tr>
	<tr class="erm-align-center">
		<td>00</td>
		<td><img src="../../../../assets/erm/c9c1ce98777b05f2.gif" alt="1" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>07</td>
		<td><img src="../../../../assets/erm/415c248d020a7620.gif" alt="8" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>01</td>
		<td><img src="../../../../assets/erm/f64fe86fa381a00d.gif" alt="2" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>08</td>
		<td><img src="../../../../assets/erm/6a804e3ffc400264.gif" alt="9" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>02</td>
		<td><img src="../../../../assets/erm/28aa3ab828a6a3f3.gif" alt="3" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>09</td>
		<td><img src="../../../../assets/erm/a0b3ed8ea1d20177.gif" alt="10" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>03</td>
		<td><img src="../../../../assets/erm/c623441dc87430be.gif" alt="4" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>10</td>
		<td><img src="../../../../assets/erm/a3722f2c46b27edb.gif" alt="11" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>04</td>
		<td><img src="../../../../assets/erm/280259abf8d93058.gif" alt="5" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>11</td>
		<td><img src="../../../../assets/erm/77b7e152461d2a28.gif" alt="12" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>05</td>
		<td><img src="../../../../assets/erm/bf487c063538315c.gif" alt="6" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>12</td>
		<td><img src="../../../../assets/erm/8e2e6b5eb6600aa0.gif" alt="13" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>06</td>
		<td><img src="../../../../assets/erm/1801c38f30bdb724.gif" alt="7" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
</table></div></blockquote></div></details><br>
         $5 – <span class="erm-anchor" id="ref-rec-tr-6"></span><details class="erm-comment"><summary>type of road</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
<strong>0</strong> = no<br>
<strong>1</strong> = mud<br>
<strong>2</strong> = gravel<br>
<strong>3</strong> = stone</blockquote></div></details><br>
         $6 – <span class="erm-anchor" id="ref-rec-tr-7"></span><details class="erm-comment"><summary>road subtype</summary><div class="erm-comment-body"><blockquote class="erm-note">
<div class="table-wrap erm-reference-table"><table width="30%">
	<tr class="erm-tone-purple erm-align-center erm-strong">
		<td>Number</td>
		<td>Picture</td>
		<td>Number</td>
		<td>Picture</td>
	</tr>
	<tr class="erm-align-center">
		<td>0</td>
		<td><img src="../../../../assets/erm/999a0801c67f4daa.gif" alt="r0" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>9</td>
		<td><img src="../../../../assets/erm/9254f298cb264702.gif" alt="r9" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>1</td>
		<td><img src="../../../../assets/erm/3e75fdb6c745ee1f.gif" alt="r1" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>10</td>
		<td><img src="../../../../assets/erm/85fee582fd32e5a7.gif" alt="r10" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>2</td>
		<td><img src="../../../../assets/erm/ebd91a762e587a63.gif" alt="r2" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>11</td>
		<td><img src="../../../../assets/erm/3117e518ebbb9774.gif" alt="r11" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>3</td>
		<td><img src="../../../../assets/erm/03c7821217b3af22.gif" alt="r3" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>12</td>
		<td><img src="../../../../assets/erm/fbb8d466fa46fd74.gif" alt="r12" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>4</td>
		<td><img src="../../../../assets/erm/26776ff15a46da63.gif" alt="r4" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>13</td>
		<td><img src="../../../../assets/erm/e28f759bff4d858a.gif" alt="r13" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>5</td>
		<td><img src="../../../../assets/erm/d4425d4c17480b3a.gif" alt="r5" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>14</td>
		<td><img src="../../../../assets/erm/6ee9305ce736c01f.gif" alt="r14" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>6</td>
		<td><img src="../../../../assets/erm/e26c1a8b977146bf.gif" alt="r6" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>15</td>
		<td><img src="../../../../assets/erm/20778034a0247886.gif" alt="r15" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>7</td>
		<td><img src="../../../../assets/erm/cbe69ab82f6ae4ad.gif" alt="r7" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>16</td>
		<td><img src="../../../../assets/erm/cdc545938fa2364e.gif" alt="r16" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>8</td>
		<td><img src="../../../../assets/erm/502dc4648f440637.gif" alt="r8" loading="lazy" decoding="async" class="erm-figure"></td>
		<td></td>
		<td></td>
	</tr>
</table></div>
<div class="erm-paragraph"><u>For version 3.58f, <a href="../../compatibility/#ref-cont-te">TE</a></u>: unfortunately, it looks like there is a coding error here, because for any type of road (0..16) the same fragment appears:
   <span class="erm-anchor" id="ref-rec-tr-vc"></span><img src="../../../../assets/erm/766702f37b6017ca.gif" alt="For version 3.58f, TE: unfortunately, it looks like there is a coding error here, because for any type of road (0..16) the same fragment appears: . Therefore, i" loading="lazy" decoding="async" class="erm-figure">.<br>
Therefore, it is impossible to make a road through the ERM, unless 
winding, diagonal, using various mirrors :).<br>
There are several ways to fix this though:
</div><ul class="erm-margin-top-zero">
<li>You can change the type of an already drawn road like this: !!TR…:Td/d/d/d/type_of the Road/d/d/d; 
- and the road fragment specified in the coordinates will turn into a fragment of the specified type.</li>
<li>You can use post-instructions to change the type of road drawn in the editor 
to 0 (which means "no road", but all bits of the square are preserved), and then, at 
doing something, to restore the road.</li>
<li>Or you can use this script, which eliminates this bug in the WoG script code:
<pre class="erm-example"><code class="language-erm">!?PI;
!!UN:C7570147/1/9;
!?GM0;
!!UN:C7570147/1/9;</code></pre></li></ul>
<u>For later versions of the game</u>: this bug has been fixed in <a href="../../compatibility/#ref-era-index">ERA</a>.</blockquote></div></details><br>
         $7 – <span class="erm-anchor" id="ref-rec-tr-8"></span><details class="erm-comment"><summary>mirror type</summary><div class="erm-comment-body"><blockquote class="erm-note">
<a href="../../tables/bits/#ref-form-hex" data-context="true">Bits</a>: 76543210<br>
--CcBbAa ("-" means "doesn't matter")<br>
a - horizontal soil mirror<br>
A - vertical soil mirror<br>
b - horizontal mirror for the river<br>
B - vertical mirror for the river <br>
c - horizontal mirror for the road <br>
C - vertical road mirror<br>
<br><u>Example</u>:<br>
<div class="table-wrap erm-reference-table"><table width="100%">
<tr>
	<td><img src="../../../../assets/erm/b1442e85b03bdcaf.gif" alt="blank" loading="lazy" decoding="async" class="erm-figure" width="140" height="0"></td><td width="95%"></td></tr>
<tr>
	<td><img src="../../../../assets/erm/6718d35488ddc512.gif" alt="↔ Mirror 0" loading="lazy" decoding="async" class="erm-figure" width="32"> ↔ Mirror 0</td>
	<td>Let's say here is our square...<br>
	This is what it will look like if mirror 0 is used</td></tr>
<tr>
	<td><img src="../../../../assets/erm/180c7cead9d18ee7.gif" alt="↔ Mirror 1" loading="lazy" decoding="async" class="erm-figure" width="32"> ↔ Mirror 1</td>
	<td>Then set the first bit (mirror = 1)<br>
	This mirror reflects a square horizontally</td></tr>
<tr>
	<td><img src="../../../../assets/erm/3efef80748341d8e.gif" alt="↔ Mirror 2" loading="lazy" decoding="async" class="erm-figure" width="32"> ↔ Mirror 2</td>
	<td>Or set the second bit (mirror = 2)<br>	
	The square will be reflected vertically</td></tr>
<tr>
	<td><img src="../../../../assets/erm/d1d227cbd2f2f530.gif" alt="↔ Mirror 3" loading="lazy" decoding="async" class="erm-figure" width="32"> ↔ Mirror 3</td>
	<td>Or set both bits (mirror = 3 [2+1] )<br>	
	The square will be reflected vertically and horizontally.</td></tr>
</table></div><br>
<u>
</u><span class="erm-anchor" id="ref-rec-tr-2"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-tr-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Let's make sure that every right-click on the map horizontally mirrors the terrain cell under the cursor..
<pre class="erm-example"><code class="language-erm">!?CM; trigger processing mouse clicks on the map
!!CM:S?y1 P?v2/?v3/?v4; look at the click coordinates on the map
!!FU&amp;y1&lt;&gt;14:E; only for PCM
!!TR2:Td/d/d/d/d/d/?y2/d; we get the bitmask of the cell mirrors
!!VRy2:X1; change the state of 1 bit (responsible for horizontal)
!!TR2:Td/d/d/d/d/d/y2/d; return the modified bitmask to the cell</code></pre></div></details><br><br>
The same is true for mirrors of roads and rivers.<br>
Horizontal mirror for rivers = 4<br>
Vertical mirror for rivers = 8<br>
Mirror of both types for rivers = 12 [8+4]<br>
Horizontal road mirror = 16<br>
Vertical mirror for roads = 32<br>
Both types of road mirror = 48 [32+16]<br>
You can combine all mirrors.<br>
Let's say a horizontal mirror for the soil, a vertical mirror for the river and 
mirror of both types for the road = 57 [1+8+16+32]</blockquote></div></details><br>
         $8 – <span class="erm-anchor" id="ref-rec-tr-9"></span><details class="erm-comment"><summary>accessibility bitmask</summary><div class="erm-comment-body"><blockquote class="erm-note">
<a href="../../tables/bits/#ref-form-hex" data-context="true">Bits</a>: 76543210<br>
???E???P ("?" means no information)<br>
P - passable square<br>
E - input<br>
These bits can be set individually via commands 
<a href="./#ref-rec-tr-p">TR:P</a> and <a href="./#ref-rec-tr-e">TR:E</a></blockquote></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tr-v"></span><span class="erm-anchor" id="command-v"></span>V$</strong></span><br>
Set/check/get square visibility (<a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">bit by bit</a>).<br>
Looks like <a href="../un/#ref-rec-un-s">UN:S</a> or <a href="../un/#ref-rec-un-h">UN:H</a>, but for 
a certain square. For example, if a square is seen as red, blue and purple 
player, then the value will be 1+2+32=35.<br>
Creatures also have visibility around them; their bit is 256. For example, by setting 
all squares around the creature have a flag of 255 (visible to everyone except 256 - creatures), attack 
creature can only be attacked directly (usually the attack radius is one cell, but you 
"blinded" the creatures)</div>
<hr>

















</div>
</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/)



## Related commands and tables {#reference-links}

[Terrain types](../../tables/terrain/) · [ERM debugging and compatibility](../../compatibility/) · [Bits, masks and hexadecimal](../../tables/bits/) · [Player colors](../../tables/players/) · [General game operations (UN)](../un/#command-h-x-y-level-player-radius-s-x-y-level-player-radius)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3077) — Improved TR:T to allow any number of arguments.
- [ERA 3.0.4, +](../../compatibility/#era3-v-3-0-4-l3387) — Improved ERM stability. Now all non-specified parameters are treated as 0 in X# syntax and ignored in X$ syntax. As a result, !!DL:A without the 4-th parameter will not randomly crash anymore and !!TR may be used with an…
<!-- ERA3-GENERATED:END -->
