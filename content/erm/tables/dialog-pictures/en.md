---
{"title":"IF:Q picture types","summary":"The picture type determines the meaning of the next parameter. Town pictures use 22 + town type.","translationStatus":"reviewed"}
---

## Pictures for IF:Q {#ref-form-picts}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-left erm-paragraph"><span class="erm-source-title">Types of pictures</span></div>
<span class="erm-anchor" id="ref-form-picts-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note"><span>Used by the team <a href="../../receivers/if/#ref-rec-if-q">IF:Q</a></span>
</div>
<div class="table-wrap erm-reference-table"><table class="erm-table-second-center" width="100%">
	<span class="erm-anchor" id="ref-form-picts-n2"></span><tr class="erm-tone-purple erm-strong">
		<td width="20%">Title</td>
		<td>Type</td>
		<td>Subtype</td>
	</tr>
	<tr>
		<td>Resource</td>
		<td><a href="../resources/#ref-form-resource">0..7</a></td>
		<td>Qty</td>
	</tr>
	<tr>
		<td>Artifact</td>
		<td>8</td>
		<td><a href="../artifacts/#ref-form-a1">Artifact number</a></td>
	</tr>
	<tr>
		<td>Spell</td>
		<td>9</td>
		<td><a href="../spells/#ref-form-spell">Spell number</a></td>
	</tr>
	<tr>
		<td>Flag</td>
		<td>10</td>
		<td><a href="../players/#ref-form-if-flags">Flag number</a></td>
	</tr>
	<tr>
		<td>Luck<br><small>positive</small></td>
		<td>11</td>
		<td>+ good luck</td>
	</tr>
	<tr>
		<td>Luck<br><small>neutral</small></td>
		<td>12</td>
		<td>Doesn't matter</td>
	</tr>
	<tr>
		<td>Luck<br><small>negative</small></td>
		<td>13</td>
		<td>- good luck</td>
	</tr>
	<tr>
		<td>Moral<br><small>positive</small></td>
		<td>14</td>
		<td>+ morals</td>
	</tr>
	<tr>
		<td>Moral<br><small>neutral</small></td>
		<td>15</td>
		<td>Doesn't matter</td>
	</tr>
	<tr>
		<td>Moral<br><small>negative</small></td>
		<td>16</td>
		<td>- morality</td>
	</tr>
	<tr>
		<td>Experience</td>
		<td>17</td>
		<td>Qty [<a href="./#ref-form-picts" title="Experience with subtype &quot;-1&quot; gives a picture of experience with the caption &quot;+1 level&quot;.
(like the Tree of Knowledge)"> ? </a>]</td>
	</tr>
	<tr>
		<td>Secondary skill</td>
		<td>20</td>
		<td><a href="../secondary-skill-pictures/#ref-form-secondaryskill-if">Skill + level</a></td>
	</tr>
	<tr>
		<td>Creature</td>
		<td>21</td>
		<td><a href="../creatures/#ref-form-creature">Creature type</a></td>
	</tr>
	<tr>
		<td>Building in the town</td>
		<td>22…30<br><small>depending on <a href="../towns/#ref-form-towns">type of town</a></small></td>
		<td><a href="../buildings/#ref-form-buldings">Building number</a></td>
	</tr>
	<tr>
		<td>Primary skill</td>
		<td>31..34<br><small>depending on <a href="../../framework/constants/hero-skills/#ref-form-primaryskill">skill</a></small></td>
		<td>Qty</td>
	</tr>
	<tr>
		<td>Spell Points</td>
		<td>35</td>
		<td>Qty</td>
	</tr>
	<tr>
		<td>Coins</td>
		<td>36</td>
		<td>Qty</td>
	</tr>
</table></div><br>
</div>
</section>
:::

## Purpose {#meaning}

The picture type determines the meaning of the next parameter. Town pictures use 22 + town type.

## Values {#values}

| Type | Picture | Subtype |
| --- | --- | --- |
| 0–7 | Resource | [Amount](../resources/) |
| 8 | Artifact | [Artifact ID](../artifacts/) |
| 9 | Spell | [Spell ID](../spells/) |
| 10 | Flag | [Player color](../players/) |
| 11 / 12 / 13 | Luck: positive / neutral / negative | Value, except neutral |
| 14 / 15 / 16 | Morale: positive / neutral / negative | Value, except neutral |
| 17 | Experience | Amount; display depends on command |
| 20 | Secondary skill | [Skill and level](../secondary-skill-pictures/) |
| 21 | Creature | [Creature ID](../creatures/) |
| 22–30 | Town building | [Building picture ID](../building-pictures/) |
| 31–34 | Primary skill | Amount |
| 35 | Spell points | Amount |
| 36 | Coins | Amount |

## Related commands and tables {#related}

[IF:Q](../../receivers/if/) · [All tables](../)

## Related commands and tables {#reference-links}

[Flags, messages and choices (IF)](../../receivers/if/#command-q-text-q-type-subtype-type-subtype-mode-text) · [Resources](../resources/) · [Artifact table](../artifacts/) · [Spell table](../spells/) · [Player colors](../players/) · [Secondary skill pictures](../secondary-skill-pictures/) · [Creature table](../creatures/) · [Town types](../towns/) · [Town building IDs](../buildings/) · [Hero Skills](../../framework/constants/hero-skills/) · [Flags, messages and choices (IF)](../../receivers/if/#command-a0100010000-s0100010000-r0100010000-v) · [Flags, messages and choices (IF)](../../receivers/if/#command-b-1-2-p) · [Flags, messages and choices (IF)](../../receivers/if/#command-d-1-15-f-1-2-3-4-5-e) · [Flags, messages and choices (IF)](../../receivers/if/#command-g-single-result-mask-title-item1-item12) · [Flags, messages and choices (IF)](../../receivers/if/#command-l-text-m-text-m0-4-text-m1-z) · [Flags, messages and choices (IF)](../../receivers/if/#command-ntype-subtype-n-text) · [Flags, messages and choices (IF)](../../receivers/if/) · [Flags, messages and choices (IF)](../../receivers/if/#command-w-x) · [Bits, masks and hexadecimal](../bits/) · [ERM debugging and compatibility](../../compatibility/) · [Mouse clicks (CM)](../../triggers/cm/) · [Global events (GE)](../../receivers/ge/) · [Hero table](../heroes/) · [Variables, strings and arrays](../../variables/) · [General game operations (UN)](../../receivers/un/#command-n0-z-id-n1-z-id-n2-z-town-building-n3-z-monster-plural-n4-z-skill)
