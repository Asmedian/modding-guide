---
{"title":"Projectiles and beams","summary":"A projectile image type differs from creature type and shooter flags.","translationStatus":"reviewed"}
---

## Projectile Types {#ref-form-weapon}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-left erm-paragraph"><span class="erm-source-title">Types of projectiles corresponding to their standard images in battle, for specific creatures<br></span><span><br>
<a href="../creatures/#ref-form-creature">Creature table</a>
</span></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-first-center" width="100%">
	<span class="erm-anchor" id="ref-form-weapon-n2"></span><tr class="erm-tone-purple erm-strong">
		<td width="15%">Number</td>
		<td>Creature</td>
	</tr>
	<tr>
		<td>0</td>
		<td>Archer</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">1</span></td>
		<td><span class="erm-tone-red">Monk</span></td>
	</tr>
	<tr>
		<td>2</td>
		<td>Elf</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">3</span></td>
		<td><span class="erm-tone-red">Master Gremlin</span></td>
	</tr>
	<tr>
		<td>4</td>
		<td>Mage</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">5</span></td>
		<td><span class="erm-tone-red">Titan</span></td>
	</tr>
	<tr>
		<td>6</td>
		<td>Gog</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">7</span></td>
		<td><span class="erm-tone-red">Lich</span></td>
	</tr>
	<tr>
		<td>8</td>
		<td>Medusa</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">9</span></td>
		<td><span class="erm-tone-red">Orc</span></td>
	</tr>
	<tr>
		<td>10</td>
		<td>Cyclops</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">11</span></td>
		<td><span class="erm-tone-red">Lizardman</span></td>
	</tr>
	<tr>
		<td>12</td>
		<td>Ice Elemental</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">13</span></td>
		<td><span class="erm-tone-red">Halfling</span></td>
	</tr>
	<tr>
		<td>14</td>
		<td>Catapult (specialty X1)</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">15</span></td>
		<td><span class="erm-tone-red">Ballista (specialty X1)</span></td>
	</tr>
</table></div>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong> projectile type 16 uses DEF with an empty name (even without the .def extension), 
if there is one in <em class="erm-legacy-file">h3sprite.lod</em> (if it's not there, the game crashes).</div>
</div>
</section>
:::

## Purpose {#meaning}

A projectile image type differs from creature type and shooter flags.

## Values {#values}

| ID | Meaning |
| --- | --- |
| `0` | Archer |
| `1` | Monk |
| `2` | Elf |
| `3` | Master Gremlin |
| `4` | Mage |
| `5` | Titan |
| `6` | Gog |
| `7` | Lich |
| `8` | Medusa |
| `9` | Orc |
| `10` | Cyclops |
| `11` | Lizardman |
| `12` | Ice Elemental |
| `13` | Halfling |
| `14` | Catapult |
| `15` | Ballista |

## Applicability {#limits}

Historical type 16 looks for an empty-name DEF and crashes when it is missing. Beams use flag 2048; colors are 0 green, 1 white, 2 black. The original recipe’s ranges apply to unmodified h3wog.exe, not every expanded creature. [Memory recipe](../../un-c/projectile-type/).

## Catalogs {#related}

[Reference tables](../) · [Framework constants](../../framework/constants/)

## Related commands and tables {#reference-links}

[Creature table](../creatures/)
