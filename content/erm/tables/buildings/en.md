---
{"title":"Town building IDs","summary":"Building ID for CA and bit in the building array. Town type determines special buildings. IF:Q building pictures use a different numbering system.","translationStatus":"reviewed"}
---

## Table of buildings {#ref-form-buldings}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-left erm-paragraph"><span class="erm-source-title">Buildings table<br></span></div>

<div class="table-wrap erm-reference-table"><table width="100%">
	<tr>
		<td width="5%"><span class="erm-tone-purple"><strong>Byte</strong></span></td>
		<td width="5%"><span class="erm-tone-purple"><strong>Bit</strong></span></td>
		<td width="5%"><span class="erm-tone-purple"><strong>Building number</strong></span></td>
		<td width="85%"><span class="erm-tone-purple"><strong> Building name</strong></span></td>
	</tr>
	<tr>
		<td class="erm-align-center" rowspan="8">0</td>
		<td>01</td>
		<td>0</td>
		<td>Mage Guild Level 1</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">02</span></td>
		<td><span class="erm-tone-red">1</span></td>
		<td><span class="erm-tone-red">Mage Guild Level 2</span></td>
	</tr>
	<tr>
		<td>04</td>
		<td>2</td>
		<td>Mage Guild Level 3</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">08</span></td>
		<td><span class="erm-tone-red">3</span></td>
		<td><span class="erm-tone-red">Mage Guild Level 4</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td>4</td>
		<td>Level 5 Mage Guild</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">5</span></td>
		<td><span class="erm-tone-red">Tavern</span></td>
	</tr>
	<tr>
		<td>64</td>
		<td>6</td>
		<td>Shipyard (0,4,7,8); ??? (1,2,3,5,6)</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">7</span></td>
		<td><span class="erm-tone-red">Fort</span></td>
	</tr>
	<tr>
		<td class="erm-align-center" rowspan="8"><span class="erm-tone-red">1</span></td>
		<td>01</td>
		<td>8</td>
		<td>Stronghold</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">02</span></td>
		<td><span class="erm-tone-red">9</span></td>
		<td><span class="erm-tone-red">Town</span></td>
	</tr>
	<tr>
		<td>04</td>
		<td>10</td>
		<td>Village government</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">08</span></td>
		<td><span class="erm-tone-red">11</span></td>
		<td><span class="erm-tone-red">Prefecture</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td>12</td>
		<td>Municipality</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">13</span></td>
		<td><span class="erm-tone-red">Capitol</span></td>
	</tr>
	<tr>
		<td>64</td>
		<td>14</td>
		<td>Trading Post</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">15</span></td>
		<td><span class="erm-tone-red">Resource storage</span></td>
	</tr>
	<tr>
		<td class="erm-align-center" rowspan="8">2</td>
		<td>01</td>
		<td>16</td>
		<td>Forge</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">02</span></td>
		<td><span class="erm-tone-red">17</span></td>
		<td><span class="erm-tone-red">Lighthouse (0), Mysterious Pond (1), Artifact Dealers (2,5,8), ??? (3), Cover of Darkness (4), 
		Backdoor (6), Cage of the War Gods (7)</span></td>
	</tr>
	<tr>
		<td>04</td>
		<td>18</td>
		<td>Horde build for unimproved creatures: Griffins, Dwarves, Stones 
		Gargoyles, Imps, Skeletons, Troglodytes, Goblins, Gnolls, Little Fairies</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">08</span></td>
		<td><span class="erm-tone-red">19</span></td>
		<td><span class="erm-tone-red">Horde build for upgraded creatures: Royal Griffins, War Dwarves, 
		Obsidian Gargoyles, Imps, Skeleton Warriors, Hell Troglodytes, Hobgoblins, Gnoll Marauders, Fairies</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td>20</td>
		<td>Shipyard with boat (0,4,7,8); ??? (1,2,3,5,6)</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">21</span></td>
		<td><span class="erm-tone-red">Stables (0), Fountain of Luck (1), Observation Tower (2), Sulfur Clouds (3), 
		Necromancy Booster (4), Whirlpool Mana (5), Freelancer's Guild (6), Marks of Fear (7), University Magic (8)</span></td>
	</tr>
	<tr>
		<td>64</td>
		<td>22</td>
		<td>Brotherhood of the Sword (0), Dwarven Treasury (1), Library (2), Castle Gate (3), Skeleton Transformer (4), 
		Summoning Portal (5), Ballist Court (6), Bloody Obelisk (7), ??? (8)</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">23</span></td>
		<td><span class="erm-tone-red">??? (0,1,4,7,8), Wall of Knowledge (2), Order of Fire (3), Martial Arts Academy (5), Temple Valhalla (6)</span></td>
	</tr>
	<tr>
		<td class="erm-align-center" rowspan="8"><span class="erm-tone-red">3</span></td>
		<td>01</td>
		<td>24</td>
		<td>??? (0,2,4,5,6,7,8), Horde build for unupgraded creatures: Dendroid Guardians, Hell Hounds</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">02</span></td>
		<td><span class="erm-tone-red">25</span></td>
		<td><span class="erm-tone-red">??? (0,2,4,5,6,7,8), Horde build for upgraded creatures: Dendroid Soldiers, Cerberus</span></td>
	</tr>
	<tr>
		<td>04</td>
		<td>26</td>
		<td>Grail</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">08</span></td>
		<td><span class="erm-tone-red">27</span></td>
		<td><span class="erm-tone-red">??? (all)</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td>28</td>
		<td>??? (all)</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">29</span></td>
		<td><span class="erm-tone-red">??? (all)</span></td>
	</tr>
	<tr>
		<td>64</td>
		<td>30</td>
		<td>1st level housing</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">31</span></td>
		<td><span class="erm-tone-red">2nd level housing</span></td>
	</tr>
	<tr>
		<td class="erm-align-center" rowspan="8">4</td>
		<td>01</td>
		<td>32</td>
		<td>3rd level housing</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">02</span></td>
		<td><span class="erm-tone-red">33</span></td>
		<td><span class="erm-tone-red">4th level housing</span></td>
	</tr>
	<tr>
		<td>04</td>
		<td>34</td>
		<td>Level 5 housing</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">08</span></td>
		<td><span class="erm-tone-red">35</span></td>
		<td><span class="erm-tone-red">Level 6 housing</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td>36</td>
		<td>Level 7 housing</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">37</span></td>
		<td><span class="erm-tone-red">Improved housing level 1</span></td>
	</tr>
	<tr>
		<td>64</td>
		<td>38</td>
		<td>Improved housing level 2</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">39</span></td>
		<td><span class="erm-tone-red">Improved dwelling level 3</span></td>
	</tr>
	<tr>
		<td class="erm-align-center" rowspan="4"><span class="erm-tone-red">5</span></td>
		<td>01</td>
		<td>40</td>
		<td>Improved dwelling level 4</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">02</span></td>
		<td><span class="erm-tone-red">41</span></td>
		<td><span class="erm-tone-red">Improved dwelling level 5</span></td>
	</tr>
	<tr>
		<td>04</td>
		<td>42</td>
		<td>Improved dwelling level 6</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">08</span></td>
		<td><span class="erm-tone-red">43</span></td>
		<td><span class="erm-tone-red">Improved dwelling level 7</span></td>
	</tr>
</table></div>
</div>
</section>
:::

## Purpose {#meaning}

Building ID for CA and bit in the building array. [Town type](../towns/) determines special buildings. [IF:Q building pictures](../building-pictures/) use a different numbering system.

## Values {#values}

| ID | Byte | Mask | Building |
| --- | --- | --- | --- |
| 0 {#id-0} | 0 | 1 | Mage Guild level 1 |
| 1 {#id-1} | 0 | 2 | Mage Guild level 2 |
| 2 {#id-2} | 0 | 4 | Mage Guild level 3 |
| 3 {#id-3} | 0 | 8 | Mage Guild level 4 |
| 4 {#id-4} | 0 | 16 | Mage Guild level 5 |
| 5 {#id-5} | 0 | 32 | Tavern |
| 6 {#id-6} | 0 | 64 | Shipyard: towns 0, 4, 7, 8 |
| 7 {#id-7} | 0 | 128 | Fort |
| 8 {#id-8} | 1 | 1 | Citadel |
| 9 {#id-9} | 1 | 2 | Castle |
| 10 {#id-10} | 1 | 4 | Village Hall |
| 11 {#id-11} | 1 | 8 | Town Hall |
| 12 {#id-12} | 1 | 16 | City Hall |
| 13 {#id-13} | 1 | 32 | Capitol |
| 14 {#id-14} | 1 | 64 | Marketplace |
| 15 {#id-15} | 1 | 128 | Resource Silo |
| 16 {#id-16} | 2 | 1 | Blacksmith |
| 17 {#id-17} | 2 | 2 | Lighthouse (0); Mystic Pond (1); Artifact Merchants (2,5,8); Cover of Darkness (4); Escape Tunnel (6); Cage of Warlords (7) |
| 18 {#id-18} | 2 | 4 | Base-creature horde building |
| 19 {#id-19} | 2 | 8 | Upgraded-creature horde building |
| 20 {#id-20} | 2 | 16 | Shipyard with boat: towns 0,4,7,8 |
| 21 {#id-21} | 2 | 32 | Stables (0); Fountain of Fortune (1); Lookout Tower (2); Brimstone Stormclouds (3); Necromancy Amplifier (4); Mana Vortex (5); Freelancers Guild (6); Glyphs of Fear (7); Magic University (8) |
| 22 {#id-22} | 2 | 64 | Brotherhood of the Sword (0); Treasury (1); Library (2); Castle Gate (3); Skeleton Transformer (4); Portal of Summoning (5); Ballista Yard (6); Blood Obelisk (7) |
| 23 {#id-23} | 2 | 128 | Wall of Knowledge (2); Order of Fire (3); Battle Scholar Academy (5); Hall of Valhalla (6) |
| 24 {#id-24} | 3 | 1 | Second base-creature horde building: Rampart/Inferno |
| 25 {#id-25} | 3 | 2 | Second upgraded-creature horde building: Rampart/Inferno |
| 26 {#id-26} | 3 | 4 | Grail building |
| 27 {#id-27} | 3 | 8 | Unassigned in the source |
| 28 {#id-28} | 3 | 16 | Unassigned in the source |
| 29 {#id-29} | 3 | 32 | Unassigned in the source |
| 30 {#id-30} | 3 | 64 | Level 1 dwelling |
| 31 {#id-31} | 3 | 128 | Level 2 dwelling |
| 32 {#id-32} | 4 | 1 | Level 3 dwelling |
| 33 {#id-33} | 4 | 2 | Level 4 dwelling |
| 34 {#id-34} | 4 | 4 | Level 5 dwelling |
| 35 {#id-35} | 4 | 8 | Level 6 dwelling |
| 36 {#id-36} | 4 | 16 | Level 7 dwelling |
| 37 {#id-37} | 4 | 32 | Upgraded level 1 dwelling |
| 38 {#id-38} | 4 | 64 | Upgraded level 2 dwelling |
| 39 {#id-39} | 4 | 128 | Upgraded level 3 dwelling |
| 40 {#id-40} | 5 | 1 | Upgraded level 4 dwelling |
| 41 {#id-41} | 5 | 2 | Upgraded level 5 dwelling |
| 42 {#id-42} | 5 | 4 | Upgraded level 6 dwelling |
| 43 {#id-43} | 5 | 8 | Upgraded level 7 dwelling |

## Related commands and tables {#related}

[CA:B](../../receivers/ca/) · [All tables](../)

## Related commands and tables {#reference-links}

[Towns (CA)](../../receivers/ca/#command-b) · [Towns (CA)](../../receivers/ca/#command-g-g-1-2-g-1-2-3) · [Towns (CA)](../../receivers/ca/#command-h) · [Towns (CA)](../../receivers/ca/#command-i) · [Towns (CA)](../../receivers/ca/#command-m1-1-2-3) · [Towns (CA)](../../receivers/ca/#command-n-text-n-z) · [Towns (CA)](../../receivers/ca/#command-o-p-1-2-3) · [Towns (CA)](../../receivers/ca/#command-r) · [Towns (CA)](../../receivers/ca/#command-t-u) · [Towns (CA)](../../receivers/ca/) · [Game object table](../objects/) · [Town types](../towns/) · [Spell table](../spells/) · [Hero table](../heroes/) · [Creature table](../creatures/) · [Player colors](../players/)
