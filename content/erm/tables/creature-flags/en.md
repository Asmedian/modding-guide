---
{"title":"Creature bit flags","summary":"MA:X and BM:F masks. Preserve other bits when changing one property. Combat-state bits cannot safely be assigned arbitrarily to a living stack.","translationStatus":"reviewed"}
---

## Flag abilities of creatures {#ref-form-flaggedabilities}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-left erm-paragraph"><span class="erm-source-title">Flag abilities of creatures</span></div>
<span class="erm-anchor" id="ref-form-flaggedabilities-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note">Used by teams <a href="../../receivers/ma/#ref-rec-ma-x">MA:X</a> and 
<a href="../../receivers/bm/#ref-rec-bm-f">BM:F</a><br>
See also: <a href="../creatures/#ref-form-creature">Creature table</a></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-second-center" width="100%">
	<span class="erm-anchor" id="ref-form-flaggedabilities-n2"></span><tr class="erm-tone-purple erm-strong">
		<td width="25">#</td>
		<td width="10%">Meaning</td>
		<td>Ability</td>
	</tr>
	<tr>
		<td>0</td>		
		<td>1</td>
		<td>Wide - occupies two cells.</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">1</span></td>		
		<td><span class="erm-tone-red">2</span></td>
		<td><span class="erm-tone-red">Creature can fly.</span></td>
	</tr>
	<tr>
		<td>2</td>		
		<td>4</td>
		<td>Creature can fire. If you give this ability to a non-shooter, you will receive several error messages 
		("invalid resource"). Possible only with additional graphics.</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">3</span></td>		
		<td><span class="erm-tone-red">8</span></td>
		<td><span class="erm-tone-red">Extended attack radius (two cells). It's like the breath of a dragon. 
		This flag does not work for shooting, only in hand-to-hand combat.</span></td>
	</tr>
	<tr>
		<td>4</td>		
		<td>16</td>
		<td>Alive creature. Makes the creature sensitive to Blessing, Joy, Death Wave, Morale 
		and other things that work only for the living.</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">5</span></td>		
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">Catapult (specialty X1). Creature can attack the town walls.</span></td>
	</tr>
	<tr>
		<td>6</td>		
		<td>64</td>
		<td>Siege weapon. Can't move. Teleporting will result in a crash from the game. 
		Stack is not required to kill to achieve victory. There is no indication of the number of creatures near the squad.</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">7</span></td>		
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">King 1 is all level 7 creatures and neutral dragons, 
		not belonging to KING 2 or KING 3, creatures carrying additional. spell damage Slayer.</span></td>
	</tr>
	<tr>
		<td>8</td>		
		<td>256</td>
		<td>King 2 - Angels, Archangels, Devils, Archdevils; creatures carrying additional spell damage Slayer adv. or higher level.</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">9</span></td>		
		<td><span class="erm-tone-red">512</span></td>
		<td><span class="erm-tone-red">King 3 - Giants, Titans; creatures carrying additional spell damage Slayer exp. level.</span></td>
	</tr>
	<tr>
		<td>10</td>		
		<td>1024</td>
		<td>Immunity to mind spells (like Sadness, Frenzy, etc.).</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">11</span></td>		
		<td><span class="erm-tone-red">2048</span></td>
		<td><span class="erm-tone-red">Creature - 35 (Arch Mage), 74 (Beholder), 75 (Evil Eye). 
		The shot animation with this flag becomes a continuous straight beam.</span></td>
	</tr>
	<tr>
		<td>12</td>		
		<td>4096</td>
		<td>No melee penalties (for shooters)</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">13</span></td>		
		<td><span class="erm-tone-red">8192</span></td>
		<td><span class="erm-tone-red">The game never checks. Perhaps it was used before, but has now lost its meaning.</span></td>
	</tr>
	<tr>
		<td>14</td>		
		<td>16384</td>
		<td>Immunity to fire spells, incl. positive (Ifrits).</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">15</span></td>		
		<td><span class="erm-tone-red">32768</span></td>
		<td><span class="erm-tone-red">Double strike (upgraded Crossbowmen or Crusaders).</span></td>
	</tr>
	<tr>
		<td>16</td>		
		<td>65536</td>
		<td>No answer (Cerberus or Hydra).</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">17</span></td>		
		<td><span class="erm-tone-red">131072</span></td>
		<td><span class="erm-tone-red">No morale penalties (Elementals, Golems).</span></td>
	</tr>
	<tr>
		<td>18</td>		
		<td>262144</td>
		<td>Undead (all Necropolis creatures, creature with this flag have no morality, 
		takes damage from Destroy Undead and does not take damage from Death Wave).</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">19</span></td>		
		<td><span class="erm-tone-red">524288</span></td>
		<td><span class="erm-tone-red">Attacks everyone around, does not work together with Dragon's Breath.</span></td>
	</tr>
	<tr>
		<td>20</td>		
		<td>1048576</td>
		<td>Extended firing radius. This is a Magog ability/Lychees/Power Lich. 
		Used only by AI, has no value to the player.</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">21</span></td>		
		<td><span class="erm-tone-red">2097152</span></td>
		<td><span class="erm-tone-red">Stack does not get the right to move during the battle. Once the battle is over, stack will disappear. 
		Stack does not require killing to achieve victory. There is no indication of the number of creatures near the squad. 
		Immunity to some spells. This flag is automatically set when creature dies. 
		If you set this flag yourself, then removing it will resurrect creature. 
		When receiving damage while in a “dead” state, the number of creatures and health of the last creature on the stack is reduced. 
		Therefore, after resurrection there can be 0 creatures. But this does not prevent you from installing using
		<a href="../../receivers/bm/#ref-rec-bm-n"><span class="erm-tone-red">BM:N</span></a> as many creatures as needed. 
		If creature really died, then removing the flag creature will not resurrect, 
		but can lead to various failures in the AI. Teleports correctly.</span></td>
	</tr>
	<tr>
		<td>22</td>		
		<td>4194304</td>
		<td>At the end of the battle or if you die, stack will disappear. 
		Elementals summoned by a spell in battle have this flag.</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">23</span></td>		
		<td><span class="erm-tone-red">8388608</span></td>
		<td><span class="erm-tone-red">If stack receives any damage, it will die. Stack is colored blue (as with the spell Clone).</span></td>
	</tr>
	<tr>
		<td>24</td>		
		<td>16777216</td>
		<td>In this round of battle, the unit received morale</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">25</span></td>		
		<td><span class="erm-tone-red">33554432</span></td>
		<td><span class="erm-tone-red">Stack is in a waiting state.</span></td>
	</tr>
	<tr>
		<td>26</td>		
		<td>67108864</td>
		<td>In this round of battle, stack has already taken an action.</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">27</span></td>		
		<td><span class="erm-tone-red">134217728</span></td>
		<td><span class="erm-tone-red">Stack is in the protective position.</span></td>
	</tr>
	<tr>
		<td>28</td>		
		<td>268435456</td>
		<td>The flag is displayed to the stack when it has been sacrificed. The squad's body disappears upon death.</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">29</span></td>		
		<td><span class="erm-tone-red">536870912</span></td>
		<td><span class="erm-tone-red">Creatures with this flag do not change their color when cloned or petrified<a href="./#ref-form-flaggedabilities-note1"><span class="erm-anchor" id="ref-form-flaggedabilities-black"></span><span class="erm-tone-text">*</span></a>.</span></td>
	</tr>
	<tr>
		<td>30</td>		
		<td>1073741824</td>
		<td>Stack painted gray<a href="./#ref-form-flaggedabilities-note1"><span class="erm-tone-text">**</span></a>.</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">31</span></td>		
		<td><span class="erm-tone-red">2147483648</span></td>
		<td><span class="erm-tone-red">Dracon. A unit with this flag is affected by a Vial of Dragon Blood and the influence of the Dragon Hero (Mutare)</span></td>
	</tr>
</table></div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-form-flaggedabilities-note1"></span><strong>*</strong> - <strong>Flag 29</strong> the squad on battlefield says that the squad has a Bloodlust animation, and therefore DEF needs to be drawn with a palette shifted to red.<br>
At offset 1104 (0x450) in <a href="../combat-stack-structure/#ref-form-combatmon">stack structure</a> is a real number (float, 4 bytes) from 0 to 1.0, which tells how much closer to red the color of each pixel in the HSV color model should be shifted. 
0 – not at all, 0.8 – 80%, 1.0 – completely red. Brightness and saturation also increase with increasing field value.<br>If the flag is set, then the Petrification or Clone flag is no longer checked during rendering. 
Therefore, when casting Bloodlust on a clone, the clone itself is temporarily drawn without blue tones.</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-form-flaggedabilities-note2"></span><strong>**</strong> - <strong>Flag 30</strong> means saturation correction in the HSV model.<br>
If the field in the stack structure 0x450 (float, 4 bytes) &lt; 1.0, then multiplication (×0 – completely in gray, ×0.5 – lose half the saturation).<br>
If &gt; 1.0, then the new saturation is calculated using the following formula:
</div><blockquote class="erm-note"><code>SATURATION = 1 - [(1 - old_saturation) / field_value]</code></blockquote>
If flag 29 is set, then flag 30 is not processed.<br>
In the original, during the Petrification animation, the values change from 1.0 to 0.0 in increments of 0.1 (the same step for Bloodlust).
<br>
</div>
</section>
:::

## Purpose {#meaning}

MA:X and BM:F masks. Preserve other bits when changing one property. Combat-state bits cannot safely be assigned arbitrarily to a living stack.

## Values {#values}

| Bit | Mask | Meaning |
| --- | --- | --- |
| 0 {#bit-0} | `1` | Two hexes |
| 1 {#bit-1} | `2` | Flying |
| 2 {#bit-2} | `4` | Shooter; shooting assets required |
| 3 {#bit-3} | `8` | Two-hex melee breath |
| 4 {#bit-4} | `16` | Living creature |
| 5 {#bit-5} | `32` | Catapult: attack walls |
| 6 {#bit-6} | `64` | Immobile siege engine; teleporting is unsafe |
| 7 {#bit-7} | `128` | King 1: Slayer vulnerability |
| 8 {#bit-8} | `256` | King 2: advanced Slayer |
| 9 {#bit-9} | `512` | King 3: expert Slayer |
| 10 {#bit-10} | `1024` | Mind spell immunity |
| 11 {#bit-11} | `2048` | Continuous beam when shooting |
| 12 {#bit-12} | `4096` | No melee penalty |
| 13 {#bit-13} | `8192` | Not checked by the old engine |
| 14 {#bit-14} | `16384` | Fire spell immunity |
| 15 {#bit-15} | `32768` | Double strike |
| 16 {#bit-16} | `65536` | No retaliation |
| 17 {#bit-17} | `131072` | No morale penalty |
| 18 {#bit-18} | `262144` | Undead |
| 19 {#bit-19} | `524288` | Attack all adjacent; incompatible with breath |
| 20 {#bit-20} | `1048576` | Area shooting flag used by AI |
| 21 {#bit-21} | `2097152` | No turns; internal dead-stack state |
| 22 {#bit-22} | `4194304` | Summoned stack; removed after combat |
| 23 {#bit-23} | `8388608` | Clone: destroyed by any damage |
| 24 {#bit-24} | `16777216` | Morale already occurred this round |
| 25 {#bit-25} | `33554432` | Waiting |
| 26 {#bit-26} | `67108864` | Already acted |
| 27 {#bit-27} | `134217728` | Defending |
| 28 {#bit-28} | `268435456` | Sacrificed stack; corpse disappears |
| 29 {#bit-29} | `536870912` | Red hue correction: Bloodlust |
| 30 {#bit-30} | `1073741824` | Saturation correction: Stone Gaze |
| 31 {#bit-31} | `2147483648` | Dragon nature |

## Related commands and tables {#related}

[BM:F / MA:X](../../receivers/bm/) · [All tables](../)

## Related commands and tables {#reference-links}

[Creature-type attributes (MA)](../../receivers/ma/#command-x) · [Battle stack (BM)](../../receivers/bm/#command-e-f) · [Creature table](../creatures/) · [Battle stack (BM)](../../receivers/bm/#command-b-n) · [Combat stack fields](../combat-stack-structure/) · [Battle stack (BM)](../../receivers/bm/#command-a-d-h-s) · [Battle stack (BM)](../../receivers/bm/#command-c-1-2-3-4-5) · [Battle stack (BM)](../../receivers/bm/#command-g-1-2) · [Battle stack (BM)](../../receivers/bm/#command-i-o-t) · [Battle stack (BM)](../../receivers/bm/#command-j-k-l) · [Battle stack (BM)](../../receivers/bm/#command-m-1-2-3) · [Battle stack (BM)](../../receivers/bm/#command-p-r) · [Battle stack (BM)](../../receivers/bm/#command-q-1-2-3) · [Battle stack (BM)](../../receivers/bm/#command-u) · [Battle stack (BM)](../../receivers/bm/#command-v-z) · [Battle stack (BM)](../../receivers/bm/) · [Spell table](../spells/) · [Battlefield hexes](../battlefield/) · [Battle actions (BG)](../../triggers/bg/) · [Variables and expressions (VR)](../../receivers/vr/) · [ERM examples](../../examples/) · [Projectiles and beams](../projectiles/) · [Physical damage calculation (MF)](../../triggers/mf/) · [ERM debugging and compatibility](../../compatibility/) · [BM:V animations](../combat-animations/) · [Creature-type attributes (MA)](../../receivers/ma/#command-a) · [Creature-type attributes (MA)](../../receivers/ma/#command-b) · [Creature-type attributes (MA)](../../receivers/ma/#command-c-1-2) · [Creature-type attributes (MA)](../../receivers/ma/#command-d) · [Creature-type attributes (MA)](../../receivers/ma/#command-e) · [Creature-type attributes (MA)](../../receivers/ma/#command-f) · [Creature-type attributes (MA)](../../receivers/ma/#command-g) · [Creature-type attributes (MA)](../../receivers/ma/#command-h) · [Creature-type attributes (MA)](../../receivers/ma/#command-i) · [Creature-type attributes (MA)](../../receivers/ma/#command-l) · [Creature-type attributes (MA)](../../receivers/ma/#command-m) · [Creature-type attributes (MA)](../../receivers/ma/#command-n) · [Creature-type attributes (MA)](../../receivers/ma/#command-o) · [Creature-type attributes (MA)](../../receivers/ma/#command-p) · [Creature-type attributes (MA)](../../receivers/ma/#command-r) · [Creature-type attributes (MA)](../../receivers/ma/#command-s) · [Creature-type attributes (MA)](../../receivers/ma/#command-u) · [Creature-type attributes (MA)](../../receivers/ma/#command-v) · [Resources](../resources/) · [Town types](../towns/) · [Repeated function calls (DO)](../../receivers/do/)
