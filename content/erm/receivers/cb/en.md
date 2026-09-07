---
{"title":"Creature banks (CB)","summary":"CB receiver: creature banks, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver CB {#ref-rec-cb}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-a1"></span><span class="erm-anchor" id="command-a2"></span><span class="erm-anchor" id="command-a3-a4"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-cb-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>CB</strong> (creature banks)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-cb-red"></span><span class="erm-tone-red">!!CB#1/#2/#3:XXXX;</span> 
- setting the parameters of the bank (storage) of creatures in X Y L.</strong> Creature Bank – <a href="../../tables/objects/#ref-form-objects-cb" data-context="true">type 16</a>.<br>
You can give an unlimited number of artifacts as a reward, except for scrolls with spells.
If you put a scroll as a reward, the game will crash.<br>
This receiver also works for Decrepit Ship (type 24), Dragon Utopia (type 25), Crypt (type 84), Shipwreck (type 85) (see. <a href="../../tables/objects/#ref-form-objects" data-context="true">objects</a>).</div>
<span class="erm-anchor" id="ref-rec-cb-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: table <a href="../../tables/creature-banks/#ref-form-cb" data-context="true">creature storage</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-a"></span><strong><span class="erm-tone-red">A</span></strong><br>
Bonus – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact</a><br>
<span class="erm-tone-red"><strong>A1/$</strong></span> - check/get the number of artifacts in the bonus table (cannot be installed!)<br>
<span class="erm-tone-red"><strong>A2/#/$</strong></span> - set/check/get <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact $</a> in position # (0...) in the bonus table<br>
<span class="erm-tone-red"><strong>A3/$</strong></span> - add <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact $</a> to the end of the bonus table<br>
<span class="erm-tone-red"><strong>A4/$</strong></span> - remove artifact in position $ (0...) in the bonus table.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-g"></span><span class="erm-anchor" id="command-g-1-2-3"></span><span class="erm-tone-red"><strong>G#1/$2/$3</strong></span><br>
Set/check/get <a href="../../tables/creatures/#ref-form-creature" data-context="true">security guards</a> in slot #1 (0..6), type $2 and quantity $3.<br>
<u></u><br></div><span class="erm-anchor" id="ref-rec-cb-1"></span><details class="erm-comment"><summary>Additionally (<span class="erm-anchor" id="ref-rec-cb-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">The creatures are located like this:<br>
</div><div class="table-wrap erm-reference-table"><table class="erm-table-offset">
<tr><td>3</td><td>6</td><td>0</td></tr>
<tr><td>5</td><td title="[X] - schematic location of the hero’s army">[X]</td><td>4</td></tr>
<tr><td>2</td><td> </td><td>1</td></tr>
</table></div>
Moreover, even if you have configured any creatures in slots 0..4 inclusive, then slots 5 and 6 will be occupied by spearmen. 
To avoid this, use a guard creature value of -1 with a count of 0 for slots 5 and 6.
<div class="erm-paragraph">It is worth noting that it is possible to change the type of protection of treasuries directly by making changes to the game memory.<br>
Here is a list of memory addresses and their default values (provided by <span class="erm-anchor" id="ref-rec-cb-n1"></span><strong class="erm-tone-purple erm-strong">Igor</strong>): </div><span class="erm-anchor" id="ref-rec-cb-4"></span><details class="erm-comment"><summary>(<span class="erm-anchor" id="ref-rec-cb-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!UN:C6750880/1/94;  Cyclops Vault
!!UN:C6750900/1/16;  Treasury of the Dwarves
!!UN:C6750920/1/4;   Griffin Conservatory
!!UN:C6751108/1/12;  Conservatory of Griffins award - Angels
!!UN:C6750940/1/42;  Sanctuary of Demons
!!UN:C6750960/1/76;  Medusa Warehouses
!!UN:C6750980/1/38;  Nag Bank
!!UN:C6751000/1/104; Hive Zmiev
!!UN:C6751124/1/108; Hive of the Wyrm Reward - Wyverns
!!UN:C6751020/1/115; Derelict Ship (Water Elemental)
!!UN:C6751040/1/60;  Shipwreck (Guardians)

** Crypt
!!UN:C6751060/1/56;  Corpse
!!UN:C6751064/1/58;  Zombie
!!UN:C6751068/1/60;  Wight
!!UN:C6751072/1/62;  Vampire

** Dragon Utopia
!!UN:C6751080/1/26;  Green dragon
!!UN:C6751084/1/82;  Red Dragon
!!UN:C6751088/1/27;  golden dragon
!!UN:C6751092/1/83;  Black Dragon</code></pre></div></details>
</div></details>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-m"></span><span class="erm-anchor" id="command-m-1-2"></span><span class="erm-tone-red"><strong>M$1/$2</strong></span><br>
Set/check/get bonus creatures <a href="../../tables/creatures/#ref-form-creature" data-context="true">like $1</a> and quantity $2 (1..127).<br>
To remove bonus creature, set type to -1 and quantity to 0.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-r"></span><span class="erm-anchor" id="command-r-1-2"></span><span class="erm-tone-red"><strong>R#1/$2</strong></span><br>
Set/check/get a resource bonus <a href="../../tables/resources/#ref-form-resource" data-context="true">type #1</a> and quantity $2. you 
you can install all 7 resources.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-t"></span><span class="erm-anchor" id="command-t"></span><span class="erm-tone-red"><strong>T$</strong></span><br>
Set/check/get whether the bank is visited (1) or not (0).<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cb-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-cb-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you enable the store again (set this command to 0), you need to set at least one guard, 
otherwise, the next hero who visits this vault will receive the entire reward without a battle.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-v"></span><span class="erm-anchor" id="command-v"></span><span class="erm-tone-red"><strong>V$</strong></span><br>
Set/check/get a word “Visited” for
<a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">player $</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cb-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-cb-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This is a beaten mask, for example, if the vault was visited by blue, red and green, and it was robbed by blue at once, 
$ will be equal to 2(blue)+1(red)+8(green)=11. These players will have an inscription on their home that it has been visited. Also, if the player visited the vault, 
but did not attack, its bits will still be included in the value edited by this option, and the number of guards will be indicated to the player in the tooltip.</div></details>

<hr>













</div>
</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/#values) · [Game object table](../../tables/objects/) · [Creature banks](../../tables/creature-banks/) · [Artifact table](../../tables/artifacts/) · [Creature table](../../tables/creatures/) · [Resources](../../tables/resources/) · [Player colors](../../tables/players/)
