---
{"title":"Player colors","summary":"IDs from the standard WoG set. These numbers identify entries in this table, not another entity type.","translationStatus":"reviewed"}
---

## Players' Colors {#ref-form-gamerscolor}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-left erm-paragraph"><span class="erm-source-title">Player colors</span></div>
<div class="erm-paragraph"><a href="./#ref-form-gamerscolor-bit">Player colors bit by bit</a></div>

<div class="table-wrap erm-reference-table"><table width="100%">
<span class="erm-anchor" id="ref-form-gamerscolor-n2"></span><tr class="erm-tone-purple erm-strong">
	<td width="1%">Player number</td>
	<td width="40"></td>
	<td>Color</td></tr>
<tr>
	<td class="erm-align-center">-1</td>
	<td class="erm-align-center"></td>
	<td><span class="erm-tone-muted">Neutral <small>(used only with reservations from the command itself)</small></span></td></tr>
<tr>
	<td class="erm-align-center">0</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/711cb5478c1c6fbe.gif" alt="0" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Red</td></tr>
<tr>
	<td class="erm-align-center">1</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/5382e710daf45d51.gif" alt="1" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Blue</td></tr>
<tr>
	<td class="erm-align-center">2</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/945670126865124c.gif" alt="2" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Brown</td></tr>
<tr>
	<td class="erm-align-center">3</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/cf4ca88fa8ea9551.gif" alt="3" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Green</td></tr>
<tr>
	<td class="erm-align-center">4</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/2b3444359d51fd77.gif" alt="4" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Orange</td></tr>
<tr>
	<td class="erm-align-center">5</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/2a0db15fe937fc4a.gif" alt="5" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Purple</td></tr>
<tr>
	<td class="erm-align-center">6</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/34f564e0de2f1a54.gif" alt="6" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Turquoise</td></tr>
<tr>
	<td class="erm-align-center">7</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/1135f038e48c0304.gif" alt="7" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Pink</td></tr>
</table></div>

</div>
</section>
:::

## Player colors are bitwise {#ref-form-gamerscolor-bit}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-left erm-paragraph"><span class="erm-source-title">Player colors bit by bit</span></div>
<div class="erm-paragraph"><a href="./#ref-form-gamerscolor">Player table</a>
</div><span class="erm-anchor" id="ref-form-gamerscolor-bit-q1"></span><div class="erm-tone-quote erm-note">Each player is given its own specific bit value.</div>

<div class="table-wrap erm-reference-table"><table width="100%">
<span class="erm-anchor" id="ref-form-gamerscolor-bit-n2"></span><tr class="erm-tone-purple erm-strong">
	<td width="1%">Bit</td>
	<td width="40"></td>
	<td>Player color</td></tr>
<tr>
	<td class="erm-align-center">1</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/711cb5478c1c6fbe.gif" alt="0" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Red</td></tr>
<tr>
	<td class="erm-align-center">2</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/5382e710daf45d51.gif" alt="1" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Blue</td></tr>
<tr>
	<td class="erm-align-center">4</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/945670126865124c.gif" alt="2" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Brown</td></tr>
<tr>
	<td class="erm-align-center">8</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/cf4ca88fa8ea9551.gif" alt="3" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Green</td></tr>
<tr>
	<td class="erm-align-center">16</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/2b3444359d51fd77.gif" alt="4" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Orange</td></tr>
<tr>
	<td class="erm-align-center">32</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/2a0db15fe937fc4a.gif" alt="5" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Purple</td></tr>
<tr>
	<td class="erm-align-center">64</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/34f564e0de2f1a54.gif" alt="6" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Turquoise</td></tr>
<tr>
	<td class="erm-align-center">128</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/1135f038e48c0304.gif" alt="7" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
	<td>Pink</td></tr>
</table></div>
<div class="erm-paragraph"><u>Example:</u> the sum of the bits for red, green and turquoise will be = 1+8+64 = 73.<br>
All players = 255.</div>

</div>
</section>
:::

## Players' Colors {#ref-form-if-flags}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-left erm-paragraph"><span class="erm-source-title">Player flags</span></div>
<span class="erm-anchor" id="ref-form-if-flags-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note"><span>Used by the team <a href="../../receivers/if/#ref-rec-if-q">IF:Q</a></span>
</div>

<div class="table-wrap erm-reference-table"><table width="100%">
	<span class="erm-anchor" id="ref-form-if-flags-n2"></span><tr class="erm-tone-purple erm-strong">
		<td width="1%">Number</td>
		<td width="40"></td>
		<td>Signature for the flag</td>
	</tr>
	<tr>
		<td class="erm-align-center">0</td>
		<td class="erm-align-center"><img src="../../../../assets/erm/711cb5478c1c6fbe.gif" alt="0" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
		<td>Red</td>
	</tr>
	<tr>
		<td class="erm-align-center">1</td>
		<td class="erm-align-center"><img src="../../../../assets/erm/5382e710daf45d51.gif" alt="1" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
		<td>Blue</td>
	</tr>
	<tr>
		<td class="erm-align-center">2</td>
		<td class="erm-align-center"><img src="../../../../assets/erm/945670126865124c.gif" alt="2" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
		<td>Brown</td>
	</tr>
	<tr>
		<td class="erm-align-center">3</td>
		<td class="erm-align-center"><img src="../../../../assets/erm/cf4ca88fa8ea9551.gif" alt="3" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
		<td>Green</td>
	</tr>
	<tr>
		<td class="erm-align-center">4</td>
		<td class="erm-align-center"><img src="../../../../assets/erm/2b3444359d51fd77.gif" alt="4" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
		<td>Orange</td>
	</tr>
	<tr>
		<td class="erm-align-center">5</td>
		<td class="erm-align-center"><img src="../../../../assets/erm/2a0db15fe937fc4a.gif" alt="5" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
		<td>Purple</td>
	</tr>
	<tr>
		<td class="erm-align-center">6</td>
		<td class="erm-align-center"><img src="../../../../assets/erm/34f564e0de2f1a54.gif" alt="6" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
		<td>Turquoise</td>
	</tr>
	<tr>
		<td class="erm-align-center">7</td>
		<td class="erm-align-center"><img src="../../../../assets/erm/1135f038e48c0304.gif" alt="7" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
		<td>Pink</td>
	</tr>
	<tr>
		<td class="erm-align-center">8</td>
		<td class="erm-align-center"><img src="../../../../assets/erm/6b52b7e1573104a4.gif" alt="8" loading="lazy" decoding="async" class="erm-figure erm-player-flag"></td>
		<td>Human or computer</td>
	</tr>
</table></div>

</div>
</section>
:::

## Purpose {#meaning}

IDs from the standard WoG set. These numbers identify entries in this table, not another entity type.

## IDs and hexadecimal values {#values}

| ID | HEX | Name |
| --- | --- | --- |
| `-1` {#id-minus-1} | `-1` | Neutral |
| `0` {#id-0} | `0` | Red |
| `1` {#id-1} | `1` | Blue |
| `2` {#id-2} | `2` | Tan |
| `3` {#id-3} | `3` | Green |
| `4` {#id-4} | `4` | Orange |
| `5` {#id-5} | `5` | Purple |
| `6` {#id-6} | `6` | Teal |
| `7` {#id-7} | `7` | Pink |

## Scope {#scope}

HEX is the same ID in hexadecimal, not a different identifier. Check the actual limit in mods that expand the set. Names may differ across game translations; the technical ID is preserved.

## Related tables {#related}

[All tables](../) · [Framework constants](../../framework/constants/)
