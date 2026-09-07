---
{"title":"Obstacle flags","summary":"BU:O returns a combination of cell flags; bit position differs from bit value.","translationStatus":"reviewed"}
---

## Obstacle bit table {#ref-form-obstacles-bit}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-left erm-paragraph"><span class="erm-source-title">Combat Obstacle Flags</span></div>
<span class="erm-anchor" id="ref-form-obstacles-bit-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note">Used by the team <a href="../../receivers/bu/#ref-rec-bu-o">BU:O</a></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-first-center" width="100%">
<span class="erm-anchor" id="ref-form-obstacles-bit-n2"></span><tr class="erm-tone-purple erm-strong">
	<td width="35">Bit</td>
	<td>Flag description</td>
</tr>
<tr>
	<td>1</td>
	<td>Magic obstacle</td></tr>
<tr>
	<td><span class="erm-tone-red">2</span></td>
	<td><span class="erm-tone-red">Obstacle</span></td></tr>
<tr>
	<td>4</td>
	<td>Quicksand (magic)</td></tr>
<tr>
	<td><span class="erm-tone-red">8</span></td>
	<td><span class="erm-tone-red">Mines (magic)</span></td></tr>
<tr>
	<td>16</td>
	<td>Fire Wall (magic)</td></tr>
<tr>
	<td><span class="erm-tone-red">32</span></td>
	<td><span class="erm-tone-red">Force Field (magic)</span></td></tr>
</table></div>

</div>
</section>
:::

## Purpose {#meaning}

BU:O returns a combination of cell flags; bit position differs from bit value.

## Values {#values}

| ID | Meaning |
| --- | --- |
| `1` | Magic obstacle |
| `2` | Obstacle |
| `4` | Quicksand |
| `8` | Land mines |
| `16` | Fire Wall |
| `32` | Force Field |

## Catalogs {#related}

[Reference tables](../) · [Framework constants](../../framework/constants/)

## Related commands and tables {#reference-links}

[Battlefield setup (BF)](../../receivers/bf/#command-o-1-2) · [Battlefield operations (BU)](../../receivers/bu/#command-o)
