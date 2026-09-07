---
{"title":"Combat stack fields","summary":"Hex offsets relative to a structure pointer in the legacy WoG snapshot. This describes a layout, not universal UN:C addresses. Unidentified fields are not an API. Verify structure size and layout in the target build.","translationStatus":"reviewed"}
---

## Structure of the combat stack {#ref-form-combatmon}

:::erm
<section class="erm-reference" lang="en">
<div>
<div>
<div class="erm-align-left erm-paragraph">
<span class="erm-source-title">Battle stack structure</span></div>
<div class="erm-paragraph">   <span class="erm-anchor" id="ref-form-combatmon-wt"></span><code class="erm-legacy-label">HEX converter:</code> <span class="erm-anchor" id="ref-form-combatmon-inputhex"></span><input class="erm-radix-input" data-erm-radix="16" type="text" value="" inputmode="text" aria-label="Enter the hex value of the offset you need.." title="Enter the hex value of the offset you need..">
<span class="erm-anchor" id="ref-form-combatmon-inputdec"></span><output class="erm-radix-result" aria-label="The decimal value of the offset you specified" title="The decimal value of the offset you specified"></output></div>
<span class="erm-anchor" id="ref-form-combatmon-q1"></span><div class="erm-tone-quote erm-note">All offsets are specified in hex notation.</div></div>

<div>
<pre>
	<span class="erm-anchor" id="ref-form-combatmon-n2"></span><strong class="erm-tone-purple erm-strong">Offset Description</strong>
   // <span class="erm-anchor" id="ref-form-combatmon-dred"></span><strong class="erm-tone-red">+00</strong> db (1) when attacked already (?)
   // <strong class="erm-tone-red">+01</strong> db
   // <strong class="erm-tone-red">+02</strong> db (0x0C) <em class="erm-tone-purple erm-legacy-event">44188C</em>
   // <strong class="erm-tone-red">+03</strong> db
   // <strong class="erm-tone-red">+08</strong> dd = player's total stack count
   // <strong class="erm-tone-red">+08</strong> db = Creature visibility (4 - visible, 8 - invisible)
   // <strong class="erm-tone-red">+10</strong> dd = -1 after attack and/or response (???)
   // <strong class="erm-tone-red">+1C</strong> dd = <a href="../battlefield/#ref-form-bf" data-context="true">position</a> on battlefield (where to run/shoot)
   // <strong class="erm-tone-red">+20</strong> db = built-in ability to damage with Fire Shield
   // <strong class="erm-tone-red">+24</strong> dd = parent clone stack number
   // <strong class="erm-tone-red">+28</strong> dd = -1 (stack number of the child clone)
   // <strong class="erm-tone-red">+2C</strong> dd = number of rounds until clone disappears
   // <strong class="erm-tone-red">+30</strong> dd? Are there numbers for the number of creatures? (0 - yes, 1 - no)
   // <strong class="erm-tone-red">+30</strong> db - <em class="erm-tone-purple erm-legacy-event">43E33C</em>
   // <strong class="erm-tone-red">+34</strong> dd = <a href="../creatures/#ref-form-creature" data-context="true">creature type</a>
   // <strong class="erm-tone-red">+38</strong> dd = creature position on battlefield (where it attacks)
   // <strong class="erm-tone-red">+3C</strong> dd = animation number
   // <strong class="erm-tone-red">+40</strong> dd = animation frame number (<em class="erm-tone-purple erm-legacy-event">43E236</em>)
   // <strong class="erm-tone-red">+44</strong> dd = stack orientation (0 = as attacker, 1 = as defender)
   // <strong class="erm-tone-red">+4C</strong> dd? number of creatures
   // <strong class="erm-tone-red">+50</strong> dd? number of creatures before hitting them in current. attack
   // <strong class="erm-tone-red">+54</strong> dd? irretrievable loss of the number of creatures
   // <strong class="erm-tone-red">+58</strong> dd? loss of health of the last creature
   // <strong class="erm-tone-red">+5C</strong> dd? hero slot number (0..6), -1 → will be deleted after the battle
   // <strong class="erm-tone-red">+60</strong> dd? strength at the beginning of the battle
   // <strong class="erm-tone-red">+64</strong> dd? base speed with bonuses of land, specialists, etc. (<a href="../../receivers/bm/#ref-rec-bm-u6">BM:U6</a>)
   // <strong class="erm-tone-red">+6C</strong> dd? full health (Spanish as a basis for treatment)
   // <strong class="erm-tone-red">+70</strong> dd <em class="erm-tone-purple erm-legacy-event">44150F</em> <em class="erm-tone-purple erm-legacy-event">441744</em> (dropped Luck)
   // loaded copy of H3CreatureInfo
   // <strong class="erm-tone-red">+74</strong> dd creature faction (-1 for advanced elementals)
   // <strong class="erm-tone-red">+78</strong> dd = creature level (0..6)
   // <strong class="erm-tone-red">+7C</strong> dd? voice acting
   // <strong class="erm-tone-red">+80</strong> dd? combat def
   // <strong class="erm-tone-red">+84</strong> dd = <span class="erm-anchor" id="ref-form-combatmon-1"></span><details class="erm-comment"><summary>creature flags</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-form-combatmon-t0"></span><blockquote class="erm-margin-top-zero erm-note">
// 00000001 - 0x00 occupies 2 cells
// 00000002 - 0x01 flies
// 00000004 - 0x02 shoots
// 00000008 - 0x03 extended attack radius (two cells)
// 00000010 - 0x04 alive creature (can be restored to a vampire)
// 00000020 - 0x05 CATAPULT - can destroy walls
// 00000040 - 0x06 SIEGE WEAPON - does not move (5508CB)
// 00000080 - 0x07 KING_1
// 00000100 - 0x08 KING_2
// 00000200 - 0x09 KING_3
// 00000400 - 0x0A ??? 00020000 + 40, 41, 83 - not sensitive to psychosis. attack
// 00000800 - 0x0B beam shooting (like creatures 35, 74, 75)
// 00001000 - 0x0C hits in melee as in ranged combat
// 00002000 - 0x0D NOT USED
// 00004000 - 0x0E ??? IMMUNITY TO FIRE SPELLS
// 00008000 - 0x0F shoots twice
// 00010000 - 0x10 attack without response
// 00020000 - 0x11 ... not subject to low morality (?)
// Creatures 32,33,56-69,112-117,120,121,123,125,127,129,141,145-149
// 00040000 - 0x12 evil spirits
// 00080000 - 0x13 hits all nearby enemies
// 00100000 - 0x14 extended radius of firing units
// 00200000 - 0x15 stack killed? <em class="erm-tone-purple erm-legacy-event">41E617</em> sorcerer, firebird - can he still cast?
// 00400000 - 0x16 <em class="erm-tone-purple erm-legacy-event">421BDC</em>, <em class="erm-tone-purple erm-legacy-event">421FC4</em> (something with a challenge)
// 00800000 - 0x17 CLONE - dies immediately
// 01000000 - 0x18 harpy witches
// 02000000 - 0x19 is left (already) waiting RESET - MAY WAIT AGAIN
// 04000000 - 0x1A set. after an attack RESET - CAN ATTACK AGAIN
// 08000000 - 0x1B - selected protection
// 10000000 - 0x1C - cannot be resurrected ???
// 20000000 - 0x1D + <em class="erm-tone-purple erm-legacy-event">43DFAF</em>
// 40000000 - 0x1E + <em class="erm-tone-purple erm-legacy-event">43E06F</em>
// 80000000 - 0x1F DRAGON</blockquote></div></details>
   // <strong class="erm-tone-red">+88</strong> dd = creature name
   // <strong class="erm-tone-red">+8C</strong> dd = plural name
   // <strong class="erm-tone-red">+90</strong> dd = creature description (e.g. "No penalty in melee")
   // <strong class="erm-tone-red">+B0</strong> dd = FightValue
   // <strong class="erm-tone-red">+B4</strong> dd = AIValue
   // <strong class="erm-tone-red">+B8</strong> dd = gain
   // <strong class="erm-tone-red">+BC</strong> dd = growth from hordes
   // <strong class="erm-tone-red">+C0</strong> dd = creature health
   // <strong class="erm-tone-red">+C4</strong> dd = creature speed
   // <strong class="erm-tone-red">+C8</strong> dd = attack with bonuses
   // <strong class="erm-tone-red">+CC</strong> dd = protection with bonuses
   // <strong class="erm-tone-red">+D0</strong> dd = min. damage
   // <strong class="erm-tone-red">+D4</strong> dd = max. damage
   // <strong class="erm-tone-red">+D8</strong> dd = ammunition
   // <strong class="erm-tone-red">+DC</strong> dd = number of spells (0 = none) FOR RESURRECTION INCREASE
   // Stack state flags dd ?
   // <strong class="erm-tone-red">+E8</strong> db = 1, you need to hit with a Fire Shield (ifrits do not display it)
   // <strong class="erm-tone-red">+E9</strong> db = 1, if at least someone in the squad died
   // <strong class="erm-tone-red">+EA</strong> db = 1 if the entire stack was killed
   // <strong class="erm-tone-red">+EC</strong> dd = number of the creature's current spell. round (0x50 Acid Breath)
   // <strong class="erm-tone-red">+F0</strong> db = 1 before attacking it <em class="erm-tone-purple erm-legacy-event">441434</em>, <em class="erm-tone-purple erm-legacy-event">44016F</em>
   // <strong class="erm-tone-red">+F4</strong> dd = side(<a href="../../receivers/bm/#ref-rec-bm-i">BM:I</a>)
   // <strong class="erm-tone-red">+F8</strong> dd = side stack number on battlefield
   // <strong class="erm-tone-red">+FC</strong> dd = ? (last_animation_time)
   // <strong class="erm-tone-red">+100</strong> dd - Creature displacement in Y <em class="erm-tone-purple erm-legacy-event">43DEA4</em>
   // <strong class="erm-tone-red">+104</strong> dd - Creature's displacement in X <em class="erm-tone-purple erm-legacy-event">43DEAD</em>
   // From where it should be, in pixels
   // <strong class="erm-tone-red">+110</strong> dd? Random animation playback frequency
   // <strong class="erm-tone-red">+158</strong> dd? something with animation
   // <strong class="erm-tone-red">+164</strong> dd - Loaded creature def → <em class="erm-legacy-file">ctroll.def</em> (troll)
   // <strong class="erm-tone-red">+168</strong> dd - load. def projectile (init. in <em class="erm-tone-purple erm-legacy-event">43DA8E</em>)
   // <strong class="erm-tone-red">+170</strong> dd - Moving sound (loaded wav?)
   // <strong class="erm-tone-red">+174</strong> dd - Attack sound
   // <strong class="erm-tone-red">+178</strong> dd - Damage sound
   // <strong class="erm-tone-red">+17C</strong> dd - Shot sound
   // <strong class="erm-tone-red">+180</strong> dd - Sound of Death
   // <strong class="erm-tone-red">+184</strong> dd - Defense sound
   // <strong class="erm-tone-red">+188</strong> dd - extraSound1
   // <strong class="erm-tone-red">+18C</strong> dd - extraSound2
   // <strong class="erm-tone-red">+194</strong> dd = number of spells already cast (to display the color of the number of creatures)
   // <strong class="erm-tone-red">+198</strong> dd*? <span class="erm-anchor" id="ref-form-combatmon-2"></span><details class="erm-comment"><summary>there is spell (duration) or not, by numbers</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
// <strong class="erm-tone-red">+198</strong> dd = Summon Boat
// <strong class="erm-tone-red">+19C</strong> dd = Scuttle Boat
// <strong class="erm-tone-red">+1A0</strong> dd = Visions
// <strong class="erm-tone-red">+1A4</strong> dd = View Earth
// <strong class="erm-tone-red">+1A8</strong> dd = Disguise
// <strong class="erm-tone-red">+1AC</strong> dd = View Air
// <strong class="erm-tone-red">+1B0</strong> dd = Fly
// <strong class="erm-tone-red">+1B4</strong> dd = Water Walk
// <strong class="erm-tone-red">+1B8</strong> dd = Dimension Door
// <strong class="erm-tone-red">+1BC</strong> dd = Town Portal

// <strong class="erm-tone-red">+1C0</strong> dd = Quicksand
// <strong class="erm-tone-red">+1C4</strong> dd = Land Mine
// <strong class="erm-tone-red">+1C8</strong> dd = Force Field
// <strong class="erm-tone-red">+1CC</strong> dd = Fire Wall
// <strong class="erm-tone-red">+1D0</strong> dd = Earthquake
// <strong class="erm-tone-red">+1D4</strong> dd = Magic Arrow
// <strong class="erm-tone-red">+1D8</strong> dd = Ice Bolt
// <strong class="erm-tone-red">+1DC</strong> dd = Lightning Bolt
// <strong class="erm-tone-red">+1E0</strong> dd = Implosion
// <strong class="erm-tone-red">+1E4</strong> dd = Chain Lightning
// <strong class="erm-tone-red">+1E8</strong> dd = Frost Ring
// <strong class="erm-tone-red">+1EC</strong> dd = Fireball
// <strong class="erm-tone-red">+1F0</strong> dd = Inferno
// <strong class="erm-tone-red">+1F4</strong> dd = Meteor Shower
// <strong class="erm-tone-red">+1F8</strong> dd = Death Ripple
// <strong class="erm-tone-red">+1FC</strong> dd = Destroy Undead
// <strong class="erm-tone-red">+200</strong> dd = Armageddon
// <strong class="erm-tone-red">+204</strong> dd = Shield
// <strong class="erm-tone-red">+208</strong> dd = Air Shield
// <strong class="erm-tone-red">+20C</strong> dd = Fire Shield
// <strong class="erm-tone-red">+210</strong> dd = Protection from Air
// <strong class="erm-tone-red">+214</strong> dd = Protection from Fire
// <strong class="erm-tone-red">+218</strong> dd = Protection from Water
// <strong class="erm-tone-red">+21C</strong> dd = Protection from Earth
// <strong class="erm-tone-red">+220</strong> dd = Anti-Magic
// <strong class="erm-tone-red">+224</strong> dd = Dispel
// <strong class="erm-tone-red">+228</strong> dd = Magic Mirror
// <strong class="erm-tone-red">+22C</strong> dd = Cure
// <strong class="erm-tone-red">+230</strong> dd = Resurrection
// <strong class="erm-tone-red">+234</strong> dd = Animate Dead
// <strong class="erm-tone-red">+238</strong> dd = Sacrifice
// <strong class="erm-tone-red">+23C</strong> dd = Bless
// <strong class="erm-tone-red">+240</strong> dd = Curse
// <strong class="erm-tone-red">+244</strong> dd = Bloodlust
// <strong class="erm-tone-red">+248</strong> dd = Precision
// <strong class="erm-tone-red">+24C</strong> dd = Weakness
// <strong class="erm-tone-red">+250</strong> dd = Stone Skin
// <strong class="erm-tone-red">+254</strong> dd = Disrupting Ray
// <strong class="erm-tone-red">+258</strong> dd = Prayer
// <strong class="erm-tone-red">+25C</strong> dd = Mirth
// <strong class="erm-tone-red">+260</strong> dd = Sorrow
// <strong class="erm-tone-red">+264</strong> dd = Luck
// <strong class="erm-tone-red">+268</strong> dd = Misfortune
// <strong class="erm-tone-red">+26C</strong> dd = Haste
// <strong class="erm-tone-red">+270</strong> dd = Slow
// <strong class="erm-tone-red">+274</strong> dd = Slayer
// <strong class="erm-tone-red">+278</strong> dd = Frenzy
// <strong class="erm-tone-red">+27C</strong> dd = Titan's Lightning Bolt
// <strong class="erm-tone-red">+280</strong> dd = Counterstrike
// <strong class="erm-tone-red">+284</strong> dd = Berserk
// <strong class="erm-tone-red">+288</strong> dd = Hypnotize
// <strong class="erm-tone-red">+28C</strong> dd = Forgetfulness
// <strong class="erm-tone-red">+290</strong> dd = Blind
// <strong class="erm-tone-red">+294</strong> dd = Teleport
// <strong class="erm-tone-red">+298</strong> dd = Remove Obstacle
// <strong class="erm-tone-red">+29C</strong> dd = Clone
// <strong class="erm-tone-red">+2A0</strong> dd = Summon fire element
// <strong class="erm-tone-red">+2A4</strong> dd = Summon earth element 
// <strong class="erm-tone-red">+2A8</strong> dd = Summon water element
// <strong class="erm-tone-red">+2AC</strong> dd = Summon air element

// <strong class="erm-tone-red">+2B0</strong> dd = Petrification <em class="erm-tone-purple erm-legacy-event">443D3A</em> <em class="erm-tone-purple erm-legacy-event">43E0EB</em> <em class="erm-tone-purple erm-legacy-event">441B0D</em> (1 = no response to attack)
// <strong class="erm-tone-red">+2B4</strong> dd = Poison
// <strong class="erm-tone-red">+2B8</strong> dd = Roots
// <strong class="erm-tone-red">+2BC</strong> dd = Disease
// <strong class="erm-tone-red">+2C0</strong> dd = Paralysis
// <strong class="erm-tone-red">+2C4</strong> dd = Old age
// <strong class="erm-tone-red">+2C8</strong> dd = Cloud of Death
// <strong class="erm-tone-red">+2CC</strong> dd = Lightning Strike
// <strong class="erm-tone-red">+2D0</strong> dd = Remove useful spells
// <strong class="erm-tone-red">+2D4</strong> dd = Death Glare
// <strong class="erm-tone-red">+2D8</strong> dd = Acid breath</blockquote></div></details>
   // <strong class="erm-tone-red">+2DC</strong> dd*? <span class="erm-anchor" id="ref-form-combatmon-3"></span><details class="erm-comment"><summary>spell power</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
// <strong class="erm-tone-red">+2DC</strong> dd = Summon Boat
// <strong class="erm-tone-red">+2E0</strong> dd = Scuttle Boat
// <strong class="erm-tone-red">+2E4</strong> dd = Visions
// <strong class="erm-tone-red">+2E8</strong> dd = View Earth
// <strong class="erm-tone-red">+2EC</strong> dd = Disguise
// <strong class="erm-tone-red">+2F0</strong> dd = View Air
// <strong class="erm-tone-red">+2F4</strong> dd = Fly
// <strong class="erm-tone-red">+2F8</strong> dd = Water Walk
// <strong class="erm-tone-red">+2FC</strong> dd = Dimension Door
// <strong class="erm-tone-red">+300</strong> dd = Town Portal

// <strong class="erm-tone-red">+304</strong> dd = Quicksand
// <strong class="erm-tone-red">+308</strong> dd = Land Mine
// <strong class="erm-tone-red">+30C</strong> dd = Force Field
// <strong class="erm-tone-red">+310</strong> dd = Fire Wall
// <strong class="erm-tone-red">+314</strong> dd = Earthquake
// <strong class="erm-tone-red">+318</strong> dd = Magic Arrow
// <strong class="erm-tone-red">+31C</strong> dd = Ice Bolt
// <strong class="erm-tone-red">+320</strong> dd = Lightning Bolt
// <strong class="erm-tone-red">+324</strong> dd = Implosion
// <strong class="erm-tone-red">+328</strong> dd = Chain Lightning
// <strong class="erm-tone-red">+32C</strong> dd = Frost Ring
// <strong class="erm-tone-red">+330</strong> dd = Fireball
// <strong class="erm-tone-red">+334</strong> dd = Inferno
// <strong class="erm-tone-red">+338</strong> dd = Meteor Shower
// <strong class="erm-tone-red">+33C</strong> dd = Death Ripple
// <strong class="erm-tone-red">+340</strong> dd = Destroy Undead
// <strong class="erm-tone-red">+344</strong> dd = Armageddon
// <strong class="erm-tone-red">+348</strong> dd = Shield
// <strong class="erm-tone-red">+34C</strong> dd = Air Shield
// <strong class="erm-tone-red">+350</strong> dd = Fire Shield
// <strong class="erm-tone-red">+354</strong> dd = Protection from Air
// <strong class="erm-tone-red">+358</strong> dd = Protection from Fire
// <strong class="erm-tone-red">+35C</strong> dd = Protection from Water
// <strong class="erm-tone-red">+360</strong> dd = Protection from Earth
// <strong class="erm-tone-red">+364</strong> dd = Anti-Magic
// <strong class="erm-tone-red">+368</strong> dd = Dispel
// <strong class="erm-tone-red">+36C</strong> dd = Magic Mirror
// <strong class="erm-tone-red">+370</strong> dd = Cure
// <strong class="erm-tone-red">+374</strong> dd = Resurrection
// <strong class="erm-tone-red">+378</strong> dd = Animate Dead
// <strong class="erm-tone-red">+37C</strong> dd = Sacrifice
// <strong class="erm-tone-red">+380</strong> dd = Bless
// <strong class="erm-tone-red">+384</strong> dd = Curse
// <strong class="erm-tone-red">+388</strong> dd = Bloodlust
// <strong class="erm-tone-red">+38C</strong> dd = Precision
// <strong class="erm-tone-red">+390</strong> dd = Weakness
// <strong class="erm-tone-red">+394</strong> dd = Stone Skin
// <strong class="erm-tone-red">+398</strong> dd = Disrupting Ray
// <strong class="erm-tone-red">+39C</strong> dd = Prayer
// <strong class="erm-tone-red">+3A0</strong> dd = Mirth
// <strong class="erm-tone-red">+3A4</strong> dd = Sorrow
// <strong class="erm-tone-red">+3A8</strong> dd = Luck
// <strong class="erm-tone-red">+3AC</strong> dd = Misfortune
// <strong class="erm-tone-red">+3B0</strong> dd = Haste
// <strong class="erm-tone-red">+3B4</strong> dd = Slow
// <strong class="erm-tone-red">+3B8</strong> dd = Slayer
// <strong class="erm-tone-red">+3BC</strong> dd = Frenzy
// <strong class="erm-tone-red">+3C0</strong> dd = Titan's Lightning Bolt
// <strong class="erm-tone-red">+3C4</strong> dd = Counterstrike
// <strong class="erm-tone-red">+3C8</strong> dd = Berserk
// <strong class="erm-tone-red">+3CC</strong> dd = Hypnotize
// <strong class="erm-tone-red">+3D0</strong> dd = Forgetfulness
// <strong class="erm-tone-red">+3D4</strong> dd = Blind
// <strong class="erm-tone-red">+3D8</strong> dd = Teleport
// <strong class="erm-tone-red">+3DC</strong> dd = Remove Obstacle
// <strong class="erm-tone-red">+3E0</strong> dd = Clone
// <strong class="erm-tone-red">+3E4</strong> dd = Summon fire element
// <strong class="erm-tone-red">+3E8</strong> dd = Summon earth element 
// <strong class="erm-tone-red">+3EC</strong> dd = Summon water element
// <strong class="erm-tone-red">+3F0</strong> dd = Summon air element

// <strong class="erm-tone-red">+3F4</strong> dd = Petrification <em class="erm-tone-purple erm-legacy-event">443D3A</em> <em class="erm-tone-purple erm-legacy-event">43E0EB</em> <em class="erm-tone-purple erm-legacy-event">441B0D</em> (1 = no response to attack)
// <strong class="erm-tone-red">+3F8</strong> dd = Poison
// <strong class="erm-tone-red">+3FC</strong> dd = Roots
// <strong class="erm-tone-red">+400</strong> dd = Disease
// <strong class="erm-tone-red">+404</strong> dd = Paralysis
// <strong class="erm-tone-red">+408</strong> dd = Old age
// <strong class="erm-tone-red">+40C</strong> dd = Cloud of Death
// <strong class="erm-tone-red">+410</strong> dd = Lightning Strike
// <strong class="erm-tone-red">+414</strong> dd = Remove useful spells
// <strong class="erm-tone-red">+418</strong> dd = Death Glare
// <strong class="erm-tone-red">+41C</strong> dd = Acid breath</blockquote></div></details>
   // <strong class="erm-tone-red">+420</strong> dd Spell Influence Queue
   // <strong class="erm-tone-red">+44C</strong> dd Number of active spells (to display when clicked <span class="erm-anchor" id="ref-form-combatmon-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">)
   // <strong class="erm-tone-red">+450</strong> float = color shift for clone, petrification, bloodlust (see <a href="../creature-flags/#ref-form-flaggedabilities-note1" data-context="true">details</a>)
   // <strong class="erm-tone-red">+454</strong> dd <em class="erm-tone-purple erm-legacy-event">441B17</em> (number of responses to attack; 0 = does not respond to attack)
   // settings for griffins <em class="erm-tone-purple erm-legacy-event">46D6A0</em>
   // * info on some spell effects:
   // <strong class="erm-tone-red">+458</strong> dd Bless adds to max damage
   // <strong class="erm-tone-red">+45C</strong> dd Curse reduces to minimum damage
   // <strong class="erm-tone-red">+460</strong> dd Antimagic effect
   // <strong class="erm-tone-red">+464</strong> dd Bloodlust adds to Attack with bonuses
   // <strong class="erm-tone-red">+468</strong> dd Precision adds to Attack with bonuses
   // <strong class="erm-tone-red">+46C</strong> dd Weakness effect
   // <strong class="erm-tone-red">+470</strong> dd bonus Stoneskin
   // <strong class="erm-tone-red">+474</strong> dd effect of Destruction Ray
   // <strong class="erm-tone-red">+478</strong> dd bonus Prayers
   // <strong class="erm-tone-red">+47C</strong> dd effect of Joy
   // <strong class="erm-tone-red">+480</strong> dd effect of Sadness
   // <strong class="erm-tone-red">+484</strong> dd bonus Good Luck
   // <strong class="erm-tone-red">+488</strong> dd effect of Failure
   // <strong class="erm-tone-red">+48C</strong> dd flags KING1,2,3 (1 = KING_1, 2 = KING_2, 3 = KING_3)
   // used to calculate the mortgage Slayer. Bonus 8 to Attack: 0x<em class="erm-tone-purple erm-legacy-event">4421D2</em>
   // <strong class="erm-tone-red">+490</strong> dd number of squares traversed before hitting (resets after the first hit)
   // <strong class="erm-tone-red">+494</strong> dd number of extras attack responses added by Counterstrike
   // <strong class="erm-tone-red">+498</strong> float = calculated Frenzy bonus
   // <strong class="erm-tone-red">+49C</strong> float = estimated counterattack damage when removing Blindness
   // <strong class="erm-tone-red">+4A0</strong> float = estimated damage of Fire Shield
   // <strong class="erm-tone-red">+4A4</strong> float = Poison effect
   // <strong class="erm-tone-red">+4A8</strong> float = air protection effect
   // <strong class="erm-tone-red">+4AC</strong> float = Fire protection effect
   // <strong class="erm-tone-red">+4B0</strong> float = water protection effect
   // <strong class="erm-tone-red">+4B4</strong> float = Earth protection effect
   // <strong class="erm-tone-red">+4B8</strong> float = Shield bonus
   // <strong class="erm-tone-red">+4BC</strong> float = Air Shield bonus
   // <strong class="erm-tone-red">+4C0</strong> db = Blinded - reduce defense (reset after?) when revived (set before impact)
   // <strong class="erm-tone-red">+4C1</strong> db = Paralyzed - reduce defense (reset after?) when revived (set before impact)
   // <strong class="erm-tone-red">+4C4</strong> dd = Forgetfulness - level (&gt;2 = cannot shoot)
   // <strong class="erm-tone-red">+4C8</strong> float = Slow bonus
   // <strong class="erm-tone-red">+4CC</strong> dd = Haste bonus (subtracted from speed when removed)
   // <strong class="erm-tone-red">+4D0</strong> dd = effect of Disease (on defense)
   // <strong class="erm-tone-red">+4D4</strong> dd = Disease effect (on attack)
   // <strong class="erm-tone-red">+4DC</strong> dd = bonus value when choosing protection
   // <strong class="erm-tone-red">+4E0</strong> dd = spell, which will cast creature (Fairytale dragon)
   // <strong class="erm-tone-red">+4E4</strong> dd = Magic Mirror effect
   // <strong class="erm-tone-red">+4E8</strong> dd = Morale
   // <strong class="erm-tone-red">+4EC</strong> dd = Luck <em class="erm-tone-purple erm-legacy-event">44152A</em>
   // <strong class="erm-tone-red">+4F0</strong> db? fold this round
   // <strong class="erm-tone-red">+4F1</strong> db - falls into the area where the effect is applied (<em class="erm-tone-purple erm-legacy-event">43DF88</em>)
   // <strong class="erm-tone-red">+4F4</strong> dd is a list of stacks held by the roots of this dendroid
   // <strong class="erm-tone-red">+504</strong> dd list of dendroids that hold this stack by roots
   // <strong class="erm-tone-red">+514</strong> dd list of stacks affected by the unicorn aura
   // <strong class="erm-tone-red">+524</strong> dd list of unicorns that have stack in their aura
</pre>



</div></div>
</section>
:::

## Purpose {#meaning}

Hex offsets relative to a structure pointer in the legacy WoG snapshot. This describes a layout, not universal UN:C addresses. Unidentified fields are not an API. Verify structure size and layout in the target build.

## Values {#values}

| Hex | Bytes | Field |
| --- | --- | --- |
| `1C` {#offset-1c} | 4 | Target hex |
| `24` {#offset-24} | 4 | Clone parent stack |
| `28` {#offset-28} | 4 | Child clone |
| `2C` {#offset-2c} | 4 | Rounds until clone expiry |
| `34` {#offset-34} | 4 | Creature ID |
| `38` {#offset-38} | 4 | Position |
| `3C` {#offset-3c} | 4 | Animation |
| `40` {#offset-40} | 4 | Animation frame |
| `44` {#offset-44} | 4 | Facing: 0 attacker, 1 defender |
| `4C` {#offset-4c} | 4 | Creature count |
| `54` {#offset-54} | 4 | Permanent losses |
| `58` {#offset-58} | 4 | Top creature lost health |
| `5C` {#offset-5c} | 4 | Hero army slot |
| `60` {#offset-60} | 4 | Initial creature count |
| `64` {#offset-64} | 4 | Base speed with bonuses |
| `6C` {#offset-6c} | 4 | Full health for healing |
| `74` {#offset-74} | 4 | Creature town |
| `78` {#offset-78} | 4 | Level 0–6 |
| `84` {#offset-84} | 4 | [Bit flags](../creature-flags/) |
| `88` {#offset-88} | 4 | Name pointer |
| `8C` {#offset-8c} | 4 | Plural name pointer |
| `90` {#offset-90} | 4 | Description pointer |
| `B0` {#offset-b0} | 4 | Fight value |
| `B4` {#offset-b4} | 4 | AI value |
| `B8` {#offset-b8} | 4 | Growth |
| `BC` {#offset-bc} | 4 | Horde growth |
| `C0` {#offset-c0} | 4 | Creature health |
| `C4` {#offset-c4} | 4 | Speed |
| `C8` {#offset-c8} | 4 | Attack |
| `CC` {#offset-cc} | 4 | Defense |
| `D0` {#offset-d0} | 4 | Minimum damage |
| `D4` {#offset-d4} | 4 | Maximum damage |
| `D8` {#offset-d8} | 4 | Shots |
| `DC` {#offset-dc} | 4 | Spell casts |
| `EC` {#offset-ec} | 4 | Creature spell this round |
| `F4` {#offset-f4} | 4 | Battle side |
| `F8` {#offset-f8} | 4 | Side-relative stack index |
| `100` {#offset-100} | 4 | Image Y offset |
| `104` {#offset-104} | 4 | Image X offset |
| `164` {#offset-164} | 4 | Loaded creature DEF |
| `168` {#offset-168} | 4 | Loaded projectile DEF |
| `170` {#offset-170} | 4 × 8 | Sounds: move, attack, hit, shoot, death, defend, two extras |
| `194` {#offset-194} | 4 | Active spell count |
| `198` {#offset-198} | 4 × 81 | Duration by spell ID |
| `2DC` {#offset-2dc} | 4 × 81 | Power by spell ID |
| `450` {#offset-450} | 4 float | Color correction strength |

## Related commands and tables {#related}

[BM](../../receivers/bm/) · [All tables](../)

## Related commands and tables {#reference-links}

[Battlefield hexes](../battlefield/) · [Creature table](../creatures/) · [Battle stack (BM)](../../receivers/bm/) · [Battle stack (BM)](../../receivers/bm/#command-i-o-t) · [Creature bit flags](../creature-flags/#values) · [Battle stack (BM)](../../receivers/bm/#command-a-d-h-s) · [Battle stack (BM)](../../receivers/bm/#command-b-n) · [Battle stack (BM)](../../receivers/bm/#command-c-1-2-3-4-5) · [Battle stack (BM)](../../receivers/bm/#command-e-f) · [Battle stack (BM)](../../receivers/bm/#command-g-1-2) · [Battle stack (BM)](../../receivers/bm/#command-j-k-l) · [Battle stack (BM)](../../receivers/bm/#command-m-1-2-3) · [Battle stack (BM)](../../receivers/bm/#command-p-r) · [Battle stack (BM)](../../receivers/bm/#command-q-1-2-3) · [Battle stack (BM)](../../receivers/bm/#command-u) · [Battle stack (BM)](../../receivers/bm/#command-v-z) · [Spell table](../spells/) · [Battle actions (BG)](../../triggers/bg/) · [Creature bit flags](../creature-flags/) · [Variables and expressions (VR)](../../receivers/vr/) · [ERM examples](../../examples/) · [Projectiles and beams](../projectiles/) · [Physical damage calculation (MF)](../../triggers/mf/) · [ERM debugging and compatibility](../../compatibility/) · [BM:V animations](../combat-animations/)
