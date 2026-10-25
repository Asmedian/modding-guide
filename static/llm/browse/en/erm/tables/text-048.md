# EA:B modifiers

ID: erm.tables.stack-experience-modifiers
URL: /en/erm/tables/stack-experience-modifiers/
Part: 1/1
Source references: old-help:form-specexp5.htm, old-help:rec-ea.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.tables.stack-experience-modifiers 1 -->
## Creature experience {#ref-form-specexp5}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-left erm-paragraph"><span class="erm-source-title">Creature Experience: Standard Modifications</span>
</div><span class="erm-anchor" id="ref-form-specexp5-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note">Used by the command <a href="../../receivers/ea/#ref-rec-ea-b">EA:B</a> for parameter $4<br>
See also <a href="../creatures/#ref-form-creature">Creature table</a></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-first-center" width="100%">
<span class="erm-anchor" id="ref-form-specexp5-n2"></span><tr class="erm-tone-purple erm-strong">
	<td width="10%">Sign</td><td width="30%">Description</td><td>Code</td></tr>
<tr>
	<td>+</td><td>Add</td><td>43</td></tr>
<tr>
	<td><span class="erm-tone-red">=</span></td>
	<td><span class="erm-tone-red">Set</span></td>
	<td><span class="erm-tone-red">61</span></td></tr>
<tr>
	<td>%</td><td>Interest</td><td>37</td></tr></table></div>

</div>
</section>
:::

## Purpose {#meaning}

Modifier $4 determines whether an ability value is added, assigned or interpreted as a percentage.

## Values {#values}

| Character | Code | Meaning |
| --- | --- | --- |
| `+` {#code-43} | 43 | Add |
| `=` {#code-61} | 61 | Set |
| `%` {#code-37} | 37 | Percent |

## Related commands and tables {#related}

[EA](../../receivers/ea/) · [All tables](../)

## Related commands and tables {#reference-links}

[Creature experience and bonuses (EA)](../../receivers/ea/#command-b-2-3-4-5-15) · [Creature table](../creatures/) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-a-h-s-t) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-c-l-m-p-u) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-d) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-e-1-2-3-4) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-f-f) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-o-mode) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-r-1-2) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Battle start and completion (BA)](../../triggers/ba/) · [Stack experience abilities](../stack-experience-abilities/) · [Heroes (HE)](../../receivers/he/#command-c-experience-modes)
<!-- llm:end erm.tables.stack-experience-modifiers 1 -->

# EA:B non-damaging spells

ID: erm.tables.stack-experience-spells
URL: /en/erm/tables/stack-experience-spells/
Part: 1/1
Source references: old-help:form-specexp3.htm, old-help:rec-ea.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.tables.stack-experience-spells 1 -->
## Creature experience {#ref-form-specexp3}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-left erm-paragraph"><span class="erm-source-title">Creature Experience: Non-Damage Spells</span>
</div><span class="erm-anchor" id="ref-form-specexp3-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note">Used by the command <a href="../../receivers/ea/#ref-rec-ea-b">EA:B</a> for parameter $4 when $3=99 (c)<br>
See also <a href="../creatures/#ref-form-creature">Creature table</a></div>
<div class="table-wrap erm-reference-table"><table width="100%">
<span class="erm-anchor" id="ref-form-specexp3-n2"></span><tr class="erm-tone-purple erm-strong"><td width="50%">Title</td>
	<td>Code</td></tr>
<tr><td>Old age</td>
	<td>75</td></tr>
<tr><td><span class="erm-tone-red">Acid breath</span></td>
	<td><span class="erm-tone-red">80</span></td></tr>
<tr><td>Berserk</td>
	<td>59</td></tr>
<tr><td><span class="erm-tone-red">Blind</span></td>
	<td><span class="erm-tone-red">62</span></td></tr>
<tr><td>Curse</td>
	<td>42</td></tr>
<tr><td><span class="erm-tone-red">Disease</span></td>
	<td><span class="erm-tone-red">73 </span> </td></tr>
<tr><td>Removing useful magic</td>
	<td>78</td></tr>
<tr><td><span class="erm-tone-red">Disrupting Ray</span></td>
	<td><span class="erm-tone-red">47</span></td></tr>
<tr><td>Forgetfulness</td>
	<td>61</td></tr>
<tr><td><span class="erm-tone-red">Hypnotize</span></td>
	<td><span class="erm-tone-red">60</span></td></tr>
<tr><td>Misfortune</td>
	<td>52</td></tr>
<tr><td><span class="erm-tone-red">Poison</span></td>
	<td><span class="erm-tone-red">71</span></td></tr>
<tr><td>Slow</td>
	<td>54</td></tr>
<tr><td><span class="erm-tone-red">Sorrow</span></td>
	<td><span class="erm-tone-red">50</span></td></tr>
<tr><td>Weakness</td>
	<td>45</td></tr></table></div>
</div>
</section>
:::

## Purpose {#meaning}

Values of $4 when $3=99 (c). These are spell IDs.

## Values {#values}

| ID | Spell |
| --- | --- |
| 75 | [Age](../spells/#id-75) |
| 80 | [Acid Breath](../spells/#id-80) |
| 59 | [Berserk](../spells/#id-59) |
| 62 | [Blind](../spells/#id-62) |
| 42 | [Curse](../spells/#id-42) |
| 73 | [Disease](../spells/#id-73) |
| 78 | [Dispel Beneficial Spells](../spells/#id-78) |
| 47 | [Disrupting Ray](../spells/#id-47) |
| 61 | [Forgetfulness](../spells/#id-61) |
| 60 | [Hypnotize](../spells/#id-60) |
| 52 | [Misfortune](../spells/#id-52) |
| 71 | [Poison](../spells/#id-71) |
| 54 | [Slow](../spells/#id-54) |
| 50 | [Sorrow](../spells/#id-50) |
| 45 | [Weakness](../spells/#id-45) |

## Related commands and tables {#related}

[EA](../../receivers/ea/) · [All tables](../)

## Related commands and tables {#reference-links}

[Creature experience and bonuses (EA)](../../receivers/ea/#command-b-2-3-4-5-15) · [Creature table](../creatures/) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-a-h-s-t) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-c-l-m-p-u) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-d) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-e-1-2-3-4) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-f-f) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-o-mode) · [Creature experience and bonuses (EA)](../../receivers/ea/#command-r-1-2) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Battle start and completion (BA)](../../triggers/ba/) · [Stack experience abilities](../stack-experience-abilities/) · [EA:B modifiers](../stack-experience-modifiers/) · [Heroes (HE)](../../receivers/he/#command-c-experience-modes)
<!-- llm:end erm.tables.stack-experience-spells 1 -->

# Terrain types

ID: erm.tables.terrain
URL: /en/erm/tables/terrain/
Part: 1/1
Source references: old-help:form-terrain.htm, era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.tables.terrain 1 -->
## Soil types: {#ref-form-terrain}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-left erm-paragraph"><span class="erm-source-title">Soil types</span></div><br>
<div class="table-wrap erm-reference-table"><table width="100%">
<span class="erm-anchor" id="ref-form-terrain-n2"></span><tr class="erm-tone-purple erm-strong">
	<td width="10%">#</td>
	<td width="10%"></td>
	<td>Title</td></tr>
<tr>
	<td>0</td>
	<td><img src="../../../../assets/erm/d5f3a0aaf58b5a44.gif" alt="dir" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Dirt</td></tr>
<tr>
	<td>1</td>
	<td><img src="../../../../assets/erm/d543f3bf6488355a.gif" alt="san" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Sand</td></tr>
<tr>
	<td>2</td>
	<td><img src="../../../../assets/erm/c9cd2a4650e67108.gif" alt="gra" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Grass</td></tr>
<tr>
	<td>3</td>
	<td><img src="../../../../assets/erm/30467aa87c81ac0c.gif" alt="sno" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Snow</td></tr>
<tr>
	<td>4</td>
	<td><img src="../../../../assets/erm/cb54af84a7d80efb.gif" alt="swa" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Swamp</td></tr>
<tr>
	<td>5</td>
	<td><img src="../../../../assets/erm/48ff56b93e06e9ca.gif" alt="roc" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Rocks</td></tr>
<tr>
	<td>6</td>
	<td><img src="../../../../assets/erm/0c99ab5cb16c4f4e.gif" alt="und" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Underground</td></tr>
<tr>
	<td>7</td>
	<td><img src="../../../../assets/erm/fdea2218b7f931a3.gif" alt="lav" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Lava</td></tr>
<tr>
	<td>8</td>
	<td><img src="../../../../assets/erm/1a0776cc2ff952be.gif" alt="wat" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Water</td></tr>
<tr>
	<td>9</td>
	<td><img src="../../../../assets/erm/b1442e85b03bdcaf.gif" alt="blank" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>abyss</td></tr></table></div>
</div>
</section>
:::

## Purpose {#meaning}

IDs from the standard WoG set. These numbers identify entries in this table, not another entity type.

## IDs and hexadecimal values {#values}

| ID | HEX | Name |
| --- | --- | --- |
| `0` {#id-0} | `0` | Dirt |
| `1` {#id-1} | `1` | Sand |
| `2` {#id-2} | `2` | Grass |
| `3` {#id-3} | `3` | Snow |
| `4` {#id-4} | `4` | Swamp |
| `5` {#id-5} | `5` | Rough |
| `6` {#id-6} | `6` | Subterranean |
| `7` {#id-7} | `7` | Lava |
| `8` {#id-8} | `8` | Water |
| `9` {#id-9} | `9` | Rock |

## Scope {#scope}

HEX is the same ID in hexadecimal, not a different identifier. Check the actual limit in mods that expand the set. Names may differ across game translations; the technical ID is preserved.

## Related tables {#related}

[All tables](../) · [Framework constants](../../framework/constants/)
<!-- llm:end erm.tables.terrain 1 -->

# DL text alignment

ID: erm.tables.text-alignment
URL: /en/erm/tables/text-alignment/
Part: 1/1
Source references: old-help:form-align.htm, old-help:rec-dl.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.tables.text-alignment 1 -->
## Text Align DL {#ref-form-align}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-paragraph"><span class="erm-source-title">Text alignment</span></div>
<span class="erm-anchor" id="ref-form-align-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note">Used for the 'Text' element in <a href="../../receivers/dl/#ref-rec-dl-name">DL</a>-templates</div>
<div class="table-wrap erm-reference-table"><table><tr><td width="75%">
	<div class="table-wrap erm-reference-table"><table class="erm-table-first-center" width="100%">
	<span class="erm-anchor" id="ref-form-align-n2"></span><tr class="erm-tone-purple erm-strong">
		<td width="5%">Value</td>
		<td class="erm-align-center" width="130">Alignment</td>
	</tr>
	<tr>
		<td height="45">-1<br>(3)</td><span class="erm-anchor" id="ref-form-align-top"></span><td class="erm-valign-top erm-align-left">Text</td>
	</tr>
	<tr>
		<td height="45">1</td><td class="erm-valign-top erm-align-center">Text</td>
	</tr>
	<tr>
		<td height="45">2</td><td class="erm-valign-top erm-align-right">Text</td>
	</tr>
	<tr>
		<td height="45">4<br>(7)</td><span class="erm-anchor" id="ref-form-align-vc"></span><td class="erm-valign-middle erm-align-left">Text</td>
	</tr>
	<tr>
		<td height="45">5</td><td class="erm-valign-middle erm-align-center">Text</td>
	</tr>
	<tr>
		<td height="45">6</td><td class="erm-valign-middle erm-align-right">Text</td>
	</tr>
	<tr>
		<td height="45">8<br>(0)</td><span class="erm-anchor" id="ref-form-align-btm"></span><td class="erm-valign-bottom erm-align-left">Text</td>
	</tr>
	<tr>
		<td height="45">9</td><td class="erm-valign-bottom erm-align-center">Text</td>
	</tr>
	<tr>
		<td height="45">10</td><td class="erm-valign-bottom erm-align-right">Text</td>
	</tr>
	</table></div></td>
<td></td></tr></table></div>
</div>
</section>
:::

## Purpose {#meaning}

DL template Text values select vertical and horizontal positioning inside the item rectangle.

## Values {#values}

| Value | Position |
| --- | --- |
| -1 / 3 | Top / left |
| 1 | Top / center |
| 2 | Top / right |
| 4 / 7 | Middle / left |
| 5 | Middle / center |
| 6 | Middle / right |
| 8 / 0 | Bottom / left |
| 9 | Bottom / center |
| 10 | Bottom / right |

## Related commands and tables {#related}

[DL](../../receivers/dl/) · [All tables](../)

## Related commands and tables {#reference-links}

[Custom dialogs (DL)](../../receivers/dl/) · [Custom dialogs (DL)](../../receivers/dl/#command-a-item-command-value-1) · [Custom dialogs (DL)](../../receivers/dl/#command-c) · [Custom dialogs (DL)](../../receivers/dl/#command-e-h) · [Custom dialogs (DL)](../../receivers/dl/#command-n-template-txt-s) · [Custom dialogs (DL)](../../receivers/dl/#command-p-function) · [ERM debugging and compatibility](../../compatibility/) · [Custom dialog events (DL)](../../triggers/dl/) · [Mouse cursors](../cursors/#c1) · [Game videos](../videos/)
<!-- llm:end erm.tables.text-alignment 1 -->

