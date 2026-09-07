---
{"title":"Commander special bonuses","summary":"CO uses bonus indices and bit masks; mask = 2 to the power of the index.","translationStatus":"reviewed"}
---

## Commander Rewards {#ref-form-cobo}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-left erm-paragraph">
<span class="erm-source-title">Commander Bonuses</span></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-second-center" width="100%">
	<span class="erm-anchor" id="ref-form-cobo-n2"></span><tr class="erm-tone-purple erm-strong">
		<td width="5%">Bit</td>
		<td width="5%">Number</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>1</td>
		<td>0</td>
		<td>Attack + Defense = decrease enemy defense by 50%</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">2</span></td>
		<td><span class="erm-tone-red">1</span></td>
		<td><span class="erm-tone-red">Attack + Health = Fear</span></td>
	</tr>
	<tr>
		<td>4</td>
		<td>2</td>
		<td>Attack + Damage = always maximum damage</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">8</span></td>
		<td><span class="erm-tone-red">3</span></td>
		<td><span class="erm-tone-red">Attack + Magic Power = unanswered blow</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td>4</td>
		<td>Attack + Speed = Shooting</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">5</span></td>
		<td><span class="erm-tone-red">Protection + Health = meets all</span></td>
	</tr>
	<tr>
		<td>64</td>
		<td>6</td>
		<td>Defense + Damage = hits all enemies around</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">7</span></td>
		<td><span class="erm-tone-red">Defense + Magic Power = Fire Shield</span></td>
	</tr>
	<tr>
		<td>256</td>
		<td>8</td>
		<td>Defense + Speed = Block</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">512</span></td>
		<td><span class="erm-tone-red">9</span></td>
		<td><span class="erm-tone-red">Health + Damage = Double Strike</span></td>
	</tr>
	<tr>
		<td>1024</td>
		<td>10</td>
		<td>Health + Magic Power = Paralysis</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">2048</span></td>
		<td><span class="erm-tone-red">11</span></td>
		<td><span class="erm-tone-red">Health + Speed = Regeneration</span></td>
	</tr>
	<tr>
		<td>4096</td>
		<td>12</td>
		<td>Damage + Magic Power = death glare</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">8192</span></td>
		<td><span class="erm-tone-red">13</span></td>
		<td><span class="erm-tone-red">Damage + Speed = Cavalry Bonus</span></td>
	</tr>
	<tr>
		<td>16384</td>
		<td>14</td>
		<td>Magic Power + Speed = Flight</td>
	</tr>
</table></div>
<br>
 </div>
</section>
:::

## Purpose {#meaning}

CO uses bonus indices and bit masks; mask = 2 to the power of the index.

## Values {#values}

| ID | Meaning |
| --- | --- |
| `0 / 1` | Enemy defense -50% |
| `1 / 2` | Fear |
| `2 / 4` | Maximum damage |
| `3 / 8` | No retaliation |
| `4 / 16` | Shooting |
| `5 / 32` | Unlimited retaliation |
| `6 / 64` | Attack all adjacent enemies |
| `7 / 128` | Fire shield |
| `8 / 256` | Block |
| `9 / 512` | Double strike |
| `10 / 1024` | Paralysis |
| `11 / 2048` | Regeneration |
| `12 / 4096` | Death stare |
| `13 / 8192` | Jousting bonus |
| `14 / 16384` | Flight |

## Catalogs {#related}

[Reference tables](../) · [Framework constants](../../framework/constants/)

## Related commands and tables {#reference-links}

[Hero classes](../hero-classes/)
