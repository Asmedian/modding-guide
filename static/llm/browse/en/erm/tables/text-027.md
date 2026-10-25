# CM:I click areas

ID: erm.tables.dialog-items
URL: https://asmedian.github.io/modding-guide/en/erm/tables/dialog-items/
Part: 3/3
Source references: old-help:form-cmi.htm, old-help:rec-cm.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.tables.dialog-items 3 -->
| 39–43 | Heroes 1–5 |
| 1000 | Entire resource and date bar |
| 1001–1007 | Amounts: wood, mercury, ore, sulfur, crystal, gems, gold |
| 1008 | Date |
| 1009–1015 | Resource icons in the same order |
| 2000 | Empty status panel |
| 2100 / 2102 / 2103 | Resource pickup: background / icon / amount |
| -1 / 2190 / 2191 / 2193 | Waiting player: text / background / flag / hourglass |
| 2001–2006 | Hero status: portrait, name, attack, defense, spell power, knowledge |
| 2008 / 2009 / 2010 | Hero status: morale / luck / mana |
| 2011–2024 | Hero status: alternating army slot and count, slots 1–7 |
| 2001 / 2002 / 2003 / 2004 / 2006 / 2008 | Town status: portrait / name / hall / fortification / income / garrison hero |
| 2009–2022 | Town status: alternating army slot and count, slots 1–7 |

## Town screen {#town}

| ID | Area |
| --- | --- |
| 0–43 | [Building IDs](../buildings/); availability depends on town |
| 115–121 | Garrison slots 1–7 |
| 123 / 125 | Garrison hero / visiting hero |
| 140–146 | Visiting hero army slots 1–7 |
| 147 / 148 | Main / lower town background |
| 149 / 150 / 151 | Town name / castle picture / hint line |
| 152 / 153 / 154 | Town list up / down / split army |
| 155–157 | Town list: top, middle, bottom |
| 158 / 159 / 160 | Hall icon / castle icon / daily income |
| 164–170 / 171 | Creature icons for levels 1–7 / Portal of Summoning |
| 172–178 / 179 | Growth for levels 1–7 / Portal of Summoning |
| 1001–1015 | Resources and date, as on the adventure map |
| 30720 | OK |

## Hero screen {#hero}

| ID | Area |
| --- | --- |
| 0 / 1 | Empty area / name |
| 2–20 | Equipment: head, shoulders, neck, right hand, left hand, torso, right ring, left ring, feet, misc 1–4, ballista, cart, tent, catapult, spellbook, misc 5 |
| 40–44 | Visible backpack slots 1–5 |
| 45 | Hero portrait |
| 46–49 / 50–53 | Values / icons of attack, defense, spell power, knowledge |
| 68–74 | Army slots 1–7 |
| 77 / 78 | Backpack: scroll left / right |
| 79–86 / 87–94 / 95–102 | Secondary skills 1–8: icons / names / levels |
| 103–106 | Primary skill labels |
| 107 | Blessings and curses icon |
| 108–111 | Labels: experience, mana, quest log, dismiss |
| 112 / 113 / 115 | Experience / mana / hint line |
| 116–120 | Icons: morale, luck, specialty, experience, mana |
| 122 / 124 / 126 | Loose formation / tight formation / tactics |
| 127–129 | Split army / quest log / dismiss |
| 130–137 / 138 | Heroes 1–8 in the list / current hero |
| 139 / 140 / 141 | Divine bonuses / level and class / flag |
| 30720 | OK |

## Hero exchange {#exchange}

| ID | Area |
| --- | --- |
| 0 / 300 / 301 / 30720 | Empty area / hint line / central arrows / OK |
| 115–118 | Primary skill icons |
| 1 / 2 | Left / right hero portrait |
| 3–6 / 8–11 | Left / right hero primary skills |
| 13–19 / 20–26 | Left / right army slots |
| 27–45 / 46–64 | Left / right equipment: same order as in the hero screen |
| 65–71 / 72–78 | Left / right army slot counts |
| 81 / 82 / 83 / 84 | Experience left / right; mana left / right |
| 85 / 86 / 87 / 88 | Quest log left / right; name, level and class left / right |
| 89–93 / 94–98 | Left / right backpack |
| 99 / 101; 100 / 102 | Backpack scrolling for left; right hero |
| 103 / 104 | Split left / right army |
| 105 / 106; 107 / 108; 109 / 110; 111 / 112 | Left / right icons: specialty; morale; luck; experience |
| 113 | The old table assigns this to both mana icons; verify the actual dialog |
| 200–207 / 208–215 | Left / right hero secondary skills |

## Combat screen {#combat}

| ID | Area |
| --- | --- |
| 0 / 1 | Background outside the grid / gaps between hexes |
| 2000 | Button frame |
| 2001–2004 | Surrender / retreat / options / quick combat |
| 2005–2007 | Combat log / scroll up / down |
| 2008–2010 | Cast / wait / defend |
| 2200 | Spellbook |
| 2205 / 2207 | Primary skills in spell dialog |
| 2214 | Creature picture in spell dialog |
| 2216 / 2217 / 2218 | Middle / bottom / top slot of the spell dialog |
| 2230 / 30722 | Next stack / start combat in tactics phase |

## Related commands and tables {#reference-links}

[Mouse-event context (CM)](../../receivers/cm/#command-i) · [Mouse-event context (CM)](../../receivers/cm/#command-a-1-2) · [Mouse-event context (CM)](../../receivers/cm/#command-d) · [Mouse-event context (CM)](../../receivers/cm/#command-f) · [Mouse-event context (CM)](../../receivers/cm/#command-h-1-2) · [Mouse-event context (CM)](../../receivers/cm/#command-mz) · [Mouse-event context (CM)](../../receivers/cm/#command-p-1-2-3) · [Mouse-event context (CM)](../../receivers/cm/#command-r) · [Mouse-event context (CM)](../../receivers/cm/#command-s-t) · [Mouse clicks (CM)](../../triggers/cm/) · [Flags, messages and choices (IF)](../../receivers/if/#command-q-text-q-type-subtype-type-subtype-mode-text) · [Battlefield hexes](../battlefield/)
<!-- llm:end erm.tables.dialog-items 3 -->

# IF:Q picture types

ID: erm.tables.dialog-pictures
URL: https://asmedian.github.io/modding-guide/en/erm/tables/dialog-pictures/
Part: 1/1
Source references: old-help:form-picts.htm, old-help:rec-if.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.tables.dialog-pictures 1 -->
## Pictures for IF:Q {#ref-form-picts}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-left erm-paragraph"><span class="erm-source-title">Types of pictures</span></div>
<span class="erm-anchor" id="ref-form-picts-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note"><span>Used by the command <a href="../../receivers/if/#ref-rec-if-q">IF:Q</a></span>
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
		<td>- morale</td>
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
<!-- llm:end erm.tables.dialog-pictures 1 -->

# DL dialog templates

ID: erm.tables.dialog-templates
URL: https://asmedian.github.io/modding-guide/en/erm/tables/dialog-templates/
Part: 1/1
Source references: old-help:rec-dl.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.tables.dialog-templates 1 -->
## Table format {#format}

Use a tab-separated table with at least 14 columns. The first two rows and column 0 are ignored. Keep empty trailing columns: hints need their own field. A # in column 1 starts a dialog or ends the previous one.

## Dialog header {#header}

Columns: 1 `#`, 2 unique ID, 3 X, 4 Y (-1 centered), 5 width, 6 height, 7 maximum item count, 8 player color (-1 current), 9 background PCX (empty for standard), 10 hint-display item ID.

## Items {#items}

Common ordinary-item fields: 1 type, 2 ID, 3 X, 4 Y, 5 width, 6 height. Followed by:

| Type | Remaining fields |
| --- | --- |
| P | PCX, flag 2048, hint |
| D | DEF, frame, flag 16, hint |
| B | DEF, hotkey code, hint |
| T | text, font, color, background, alignment, flag 8, hint |
| S | text, font, color, scroll color (0 normal/other blue), hint |
| E | text, font, hint |
| V | field 5: internal video ID; no dimensions or hint |

Animated type A is unsupported by the legacy format.

## Item behavior {#constraints}

Button DEFs need at least two frames; the second is used while pressed/disabled. Item 30721 handles Escape closure. Only one video is supported, drawn above other items and required to fit the dialog. Legacy S hints work with ID=-1. Do not duplicate dialog IDs across files.

## Related commands and tables {#reference-links}

[Custom dialogs (DL)](../../receivers/dl/#command-a-item-command-value-1) · [Custom dialogs (DL)](../../receivers/dl/#command-c) · [Custom dialogs (DL)](../../receivers/dl/#command-e-h) · [Custom dialogs (DL)](../../receivers/dl/#command-n-template-txt-s) · [Custom dialogs (DL)](../../receivers/dl/#command-p-function) · [Custom dialogs (DL)](../../receivers/dl/) · [ERM debugging and compatibility](../../compatibility/) · [Custom dialog events (DL)](../../triggers/dl/) · [Mouse cursors](../cursors/#c1) · [DL text alignment](../text-alignment/) · [Game videos](../videos/)
<!-- llm:end erm.tables.dialog-templates 1 -->

# Game dialog identifiers

ID: erm.tables.dialog-types
URL: https://asmedian.github.io/modding-guide/en/erm/tables/dialog-types/
Part: 1/1
Source references: old-help:form-gamestate.htm, old-help:era-api.htm, era-source:era.pas, era-framework:lib-end--9999-era---stdlib.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.tables.dialog-types 1 -->
## Dialog Game IDs {#ref-form-gamestate}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-left erm-paragraph"><span class="erm-source-title">Game Dialog ID Table</span></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-zebra" width="100%">
<span class="erm-anchor" id="ref-form-gamestate-n2"></span><tr class="erm-tone-purple erm-strong"><td width="70">ID</td><td>Game dialogue</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4205280</td><td>Adventure Map (KP)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6053040</td><td>town window</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5117840</td><td>hero window</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5957344</td><td>hero meeting window</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4662240</td><td>battle window</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4782512</td><td>other dialogs (including IF:M Q; and all new ones from <a href="../../compatibility/#ref-cont-hd">HD fashion</a>)</td></tr>
<tr><td class="erm-align-center">???</td><td>WoG dialogs (without plugin) <span class="erm-tone-purple erm-legacy-event" title="WoG Native Dialog">WND</span>)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4304960</td><td>WoG dialogues* (with WND: creature experience, sphinx, curses, IF:B D G, etc.)</td></tr>
<tr>
	<td></td><td><span class="erm-tone-muted erm-legacy-gray"><strong>Adventure Map (KP)**</strong></span></td>
</tr>
<tr><td class="erm-tone-purple erm-legacy-event">5755920</td><td>save window</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5884864</td><td>book of spells</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4789216</td><td>"measurement door" mode</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4790240</td><td>"sink the ship" mode</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6039360</td><td>town selection window (without <a href="../../compatibility/#ref-cont-hd">HD</a>; for the Town Portal or through the Gate Inferno)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5217680</td><td>hero level up window</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5378592</td><td>kingdom view window</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5976864</td><td>KP settings window</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4216352</td><td>action window at the checkpoint</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6275296</td><td>overview of the world (including spells View Earth/air)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5425744</td><td>riddle card</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6068832</td><td>thieves guild</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5675664</td><td>script info</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6100112</td><td>garrison window</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6099296</td><td>window for abandoning creatures (including mines)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5570288</td><td>creature dwellings/machine factory</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5637600</td><td>sacrificial altar</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6228784</td><td>university</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6105344</td><td>shipyard</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6183568</td><td>black market/artifact dealer (purchase)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6167072</td><td>market (exchange of resources)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6175376</td><td>market (transfer of resources to the player)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6241984</td><td>creature/unit statistics window</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5144224</td><td>hill fort</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6201472</td><td>mercenary guild</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6126720</td><td>tavern</td></tr>
<tr><td colspan="2"><span class="erm-anchor" id="ref-form-gamestate-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">** Dialogues of the same name outside the CP have the same IDs and are not mentioned further in the table</div></td></tr>
<tr>
	<td></td><td><span class="erm-tone-muted erm-legacy-gray"><strong>Window of the town</strong></span></td>
</tr>
<tr><td class="erm-tone-purple erm-legacy-event">6087968</td><td>mages guild</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6081760</td><td>council chamber</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6119232</td><td>information about the construction</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6147920</td><td>fort/town</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6102528</td><td>blacksmith</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5661104</td><td>skeleton converter</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6193120</td><td>artifact dealer (selling)</td></tr>
<tr>
	<td></td><td><span class="erm-tone-muted erm-legacy-gray"><strong>Hero Window</strong></span></td>
</tr>
<tr><td class="erm-tone-purple erm-legacy-event">4304960</td><td>commander window (with WND)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5432976</td><td>log window (without plugin for new dialog)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4304960</td><td>log window (with plugin for new dialog)</td></tr>
<tr>
	<td></td><td><span class="erm-tone-muted erm-legacy-gray"><strong>Battle window</strong></span></td>
</tr>
<tr><td class="erm-tone-purple erm-legacy-event">4649504</td><td>battle settings window</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4658576</td><td>battle statistics</td></tr>
</table></div>

</div>
</section>
:::

## Purpose {#meaning}

Identifiers returned by GetGameState in the legacy installation. WND and HD plugins may replace dialogs; one number can identify several windows. These values depend on the implementation, not row order.

## Values {#values}

| ID | Dialog |
| --- | --- |
| 4205280 | Adventure map |
| 6053040 | Town screen |
| 5117840 | Hero screen |
| 5957344 | Hero exchange |
| 4662240 | Combat screen |
| 4782512 | Standard message dialogs, including IF:M/Q and newer HD dialogs |
| 4304960 | WoG dialogs with WND |
| 5755920 | Save dialog |
| 5884864 | Spellbook |
| 4789216 | Dimension Door targeting |
| 4790240 | Scuttle Boat targeting |
| 6039360 | Town selection without HD |
| 5217680 | Hero level-up |
| 5378592 | Kingdom overview |
| 5976864 | Adventure options |
| 4216352 | Adventure actions |
| 6275296 | World view |
| 5425744 | Puzzle map |
| 6068832 | Thieves’ Guild |
| 5675664 | Scenario information |
| 6100112 | Garrison |
| 6099296 | Leave creatures, including mines |
| 5570288 | Creature dwelling or war machine factory |
| 5637600 | Altar of Sacrifice |
| 6228784 | University |
| 6105344 | Shipyard |
| 6183568 | Black Market or Artifact Merchant: buy |
| 6167072 | Marketplace: trade resources |
| 6175376 | Marketplace: send resources |
| 6241984 | Creature or stack statistics |
| 5144224 | Hill Fort |
| 6201472 | Freelancer’s Guild |
| 6126720 | Tavern |
| 6087968 | Mage Guild |
| 6081760 | Town Hall |
| 6119232 | Building information |
| 6147920 | Fort or castle |
| 6102528 | Blacksmith |
| 5661104 | Skeleton Transformer |
| 6193120 | Artifact Merchant: sell |
| 4304960 | Commander with WND |
| 5432976 | Quest log without replacement plugin |
| 4304960 | Quest log with replacement plugin |
| 4649504 | Combat options |
| 4658576 | Combat statistics |

## API contract {#api}

`GetGameState` writes two consecutive 32-bit integers: `RootDlgId` (root dialog) and `CurrentDlgId` (current dialog). Allocate two cells; passing a separately allocated single variable overwrites adjacent memory. Framework passes `?(mainDialogs[2]:y)` and reads the current dialog from `mainDialogs[1]`. The API is a `stdcall` procedure: read the output structure instead of relying on a return value in `v1`.

## Related commands and tables {#related}

[SN:F / GetGameState](../../receivers/sn/#command-f-export-args) · [All tables](../)


## Related commands and tables {#reference-links}

[ERA services, memory and sound (SN)](../../receivers/sn/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-f-export-args) · [ERM triggers and events](../../triggers/) · [Flags, messages and choices (IF)](../../receivers/if/) · [ERM debugging and compatibility](../../compatibility/)
<!-- llm:end erm.tables.dialog-types 1 -->

