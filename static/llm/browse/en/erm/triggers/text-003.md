# Adventure-map magic (MG)

ID: erm.triggers.mg
URL: /en/erm/triggers/mg/
Part: 1/1
Source references: old-help:tr-mg.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.mg 1 -->
## Trigger MG {#ref-tr-mg}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>MG</strong> (spellcasting on the map)</span></div><br>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mg-red"></span><span class="erm-tone-red">!?MG#;</span> 
- trigger when casting spells on the map.<br>
<span class="erm-tone-red">!?MG0;</span> - triggers before application<br>
<span class="erm-tone-red"><strong>!?MG1;</strong></span> - triggers after casting</strong></div>
Actions:
<dl><dd> - the player presses “cast spell”</dd>
<dd> - triggered <strong>!?MG0;</strong></dd>
<dd> - a magic book opens to select a spell.</dd>
<dd> - superimposed spell</dd>
<dd> - triggered <strong>!?MG1;</strong> (the number of the spell is entered in <strong>v997</strong>)</dd></dl>
<u>Example:</u>
<pre class="erm-example"><code class="language-erm">ZVSE
!?MG0;
!!IF:M^Magic is ready to be used^;
!?MG1;
!!VRy-10:Sv997; - setting the spell number from v997 to y-1
!!IF:M^Magic has been used. Spell number: %Y-10^;</code></pre>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong> This trigger is inactive for AI players.
Even if the cast of the spell is cancelled, !?MG1 will still work, as well as return the spell number.</div>

</div>
</section>
:::

## When it fires {#event}

0 before opening the spellbook to select a spell; 1 after the casting attempt. v997 contains the spell ID after MG1.

## Declaration {#syntax}

```erm
!?MG0; / !?MG1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MG0` | `OnBeforeAdventureMagic` | 30322 |
| `MG1` | `OnAfterAdventureMagic` | 30323 |

## Limitations and ordering {#limits}

MG1 also fires on cancellation. Its occurrence does not prove successful casting; the classic trigger does not run for AI.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)
<!-- llm:end erm.triggers.mg 1 -->

# Interface hints (MM)

ID: erm.triggers.mm
URL: /en/erm/triggers/mm/
Part: 1/1
Source references: old-help:tr-mm.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.mm 1 -->
## Trigger MM {#ref-tr-mm}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>MM</strong> (text in battle)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mm-red"></span><span class="erm-tone-red">!?MM0; (!?MM;) </span>- trigger to control text in battle<br>
<span class="erm-tone-red">!?MM1; </span>- trigger to control text in the town<br>
<span class="erm-tone-red">!?MM2; </span>- trigger to control the text on the map</strong></div>

<div class="erm-paragraph"><strong>!?MM0</strong> trigger fires when WoG tries to show hint text in a text field (for example, "Fly here")<br>
Also, this trigger only fires BEFORE selecting an action. So, for example, if I cast spell, the target selection prompts do not trigger trigger <strong>!?MM0;</strong><br>
Once the target is identified and spell is conjured, <strong>!?MM0;</strong> runs until the next action.</div>
<div class="erm-paragraph"><strong>!?MM1;</strong> – you can run ERM code when the player moves the mouse pointer in the town window. Trigger is triggered when pointing at an object and when leaving it. Also, this trigger only comes AFTER the normal description (standard tooltip text).</div>
<div class="erm-paragraph"><strong>!?MM2;</strong> – triggers in the adventure map window with each click <span class="erm-anchor" id="ref-tr-mm-vc"></span><img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> (anywhere).</div>
<span class="erm-anchor" id="ref-tr-mm-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/mm/#ref-rec-mm">!!MM</a>, <a href="../#ref-era-new-events-1-2">Extending the functionality of !?MM in ERA</a></div>

</div>
</section>
:::

## When it fires {#event}

0 battle hints, 1 town hints, 2 adventure map. MM modifies text in the relevant context.

## Declaration {#syntax}

```erm
!?MM0; / !?MM1; / !?MM2;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MM0` | `OnBattleMouseHint` | 30317 |
| `MM1` | `OnTownMouseHint` | 30318 |

## Limitations and ordering {#limits}

MM0 does not fire for every spell-target selection stage. MM1 can fire on mouse enter and leave; its frequency does not equal the number of player actions.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Battle hint text (MM)](../../receivers/mm/) · [ERM triggers and events](../)
<!-- llm:end erm.triggers.mm 1 -->

# Music theme changes (MP)

ID: erm.triggers.mp
URL: /en/erm/triggers/mp/
Part: 1/1
Source references: old-help:tr-mp.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.mp 1 -->
## Trigger MP {#ref-tr-mp}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>MP</strong><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a> (mp3 control)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mp-red"></span><span class="erm-tone-red">!?MP;</span> - management of mp3 files.</strong></div>
<div class="erm-paragraph">Trigger fires whenever the game or ERM/Lua calls a function <em class="erm-tone-purple erm-legacy-event">ChangeMp3Theme</em>. In a trigger, function parameters can be changed using <a href="../../receivers/mp/#ref-rec-mp-era-s">!!MP:S</a>, and the default response to the function (on/off) using <span><a href="../../receivers/mp/#ref-rec-mp-era-r">!!MP:R</a></span>.<br>
<strong><u>Comment</u>:</strong> for ERA parameter <em>"UseOnlyOneCpuCore"</em> in the file <em class="erm-legacy-file">heroes3.ini</em> the default is 0, which allows you to run <a href="../../compatibility/#ref-cont-hd">HD mod</a> in modes with high processor load.<br>
Please note that it is better to remove all ID3 tags from the mp3 to avoid possible gaming problems.</div>
<span class="erm-anchor" id="ref-tr-mp-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/mp/#ref-rec-mp-era">!!MP</a></div>
</div>
</section>
:::

## When it fires {#event}

Fires when ChangeMp3Theme is called. MP:S changes parameters; MP:R controls the default reaction.

## Declaration {#syntax}

```erm
!?MP;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MP` | `OnMp3MusicChange` | 30320 |

## Limitations and ordering {#limits}

This is an MP3 music event; SN covers sound effects. Guard against re-entry when triggering another theme change.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/) · [MP3 music (MP)](../../receivers/mp/#command-s-1-2-3) · [MP3 music (MP)](../../receivers/mp/#command-r) · [MP3 music (MP)](../../receivers/mp/)
<!-- llm:end erm.triggers.mp 1 -->

# Magic resistance (MR)

ID: erm.triggers.mr
URL: /en/erm/triggers/mr/
Part: 1/1
Source references: old-help:tr-mr.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.mr 1 -->
## Trigger MR {#ref-tr-mr}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>MR</strong> (magic resistance)</span></div>

<div class="erm-paragraph">
<span class="erm-anchor" id="ref-tr-mr-red"></span><span class="erm-tone-red"><strong>!?MR#;</strong></span> - combat trigger for magic resistance with ERM<br>
<span class="erm-tone-red">!?MR0;</span> - triggered before resistance calculation<br>
<span class="erm-tone-red">!?MR1;</span> - triggers after calculating resistance</div>
<div class="erm-paragraph">The procedure is as follows:
</div><dl><dd> - we have the base damage of the spell (<span class="erm-anchor" id="ref-tr-mr-n2"></span><strong class="erm-tone-purple erm-strong">M S D</strong>)</dd>
<dd> - !?MR0 is triggered; (<strong class="erm-tone-purple erm-strong">M S D F</strong>[=<strong class="erm-tone-purple erm-strong">D</strong>])</dd>
<dd> - WoG calculates adjusted damage due to the creature's standard resistance (<strong class="erm-tone-purple erm-strong">S M D</strong>→<strong class="erm-tone-purple erm-strong">F</strong>)</dd>
<dd> - !?MR1 is triggered; (<strong class="erm-tone-purple erm-strong">M S D F</strong>)</dd>
<dd> - end of correction (<strong class="erm-tone-purple erm-strong">F</strong>)</dd>
</dl>
Here <strong class="erm-tone-purple erm-strong">M</strong> – type of creature, <strong class="erm-tone-purple erm-strong">S</strong> – number of the spell, <strong class="erm-tone-purple erm-strong">D</strong> – base damage, <strong class="erm-tone-purple erm-strong">F</strong> – 
adjusted damage (see <a href="../../receivers/mr/#ref-rec-mr">!!MR</a>).<br>
WoG's standard damage correction function calculates F from D and returns it.<br>
For a creature without resistance F=D
<div class="erm-paragraph"><strong><span class="erm-tone-red">!?MR2;</span> - trigger for resistance to Dwarven style magic.</strong><br>
Triggered when calculating magic resistance according to the Dwarven style.<br>
You can use other receivers in addition to !!MR.<br>
Commands <a href="../../receivers/mr/#ref-rec-mr-n">!!MR:N</a> and <a href="../../receivers/mr/#ref-rec-mr-m">!!MR:M</a> work as before (described in triggers !?MR0 and 
!?MR1).<br>
<a href="../../receivers/mr/#ref-rec-mr-f">!!MR:F</a> used as a percentage (0..100) of the chance to resist the spell.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">ZVSE
!?MR2;
!!MR:F100; - all creatures are completely immune to all spells.</code></pre>
<span class="erm-anchor" id="ref-tr-mr-bold"></span><em class="erm-strong">Notes:</em> (by <strong>!?MR2</strong>)
</div><span class="erm-anchor" id="ref-tr-mr-t0"></span><ul class="erm-margin-top-zero"><li>Trigger never works for units under Anti-Magic;</li>
<li>When casting Mass Friendly Magic, trigger does not work on friendly creatures on which the enemy has cast Hypnotize;</li>
<li>Trigger does not work on enemy creatures on which we cast Hypnotize when casting Mass Hostile Magic;</li>
<li>Trigger does not intercept mass Dispel Spells and some other spells.</li></ul>

</div>
</section>
:::

## When it fires {#event}

0 precedes standard damage correction for resistance; 1 follows it. In MR2, MR:F means a percentage chance of dwarf-style full resistance.

## Declaration {#syntax}

```erm
!?MR0; / !?MR1; / !?MR2;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MR0` | `OnMagicBasicResistance` | 30307 |
| `MR1` | `OnMagicCorrectedResistance` | 30308 |
| `MR2` | `OnDwarfMagicResistance` | 30309 |

## Limitations and ordering {#limits}

F is damage in MR0/1 but a percentage in MR2. Anti-Magic and some mass spells bypass MR2.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Spell resistance (MR)](../../receivers/mr/) · [Spell resistance (MR)](../../receivers/mr/#command-m-n-s) · [Spell resistance (MR)](../../receivers/mr/#command-f)
<!-- llm:end erm.triggers.mr 1 -->

# Wandering monsters (MW)

ID: erm.triggers.mw
URL: /en/erm/triggers/mw/
Part: 1/1
Source references: old-help:tr-mw.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.mw 1 -->
## Trigger MW {#ref-tr-mw}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>MW</strong> (wandering creatures)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mw-red"></span><span class="erm-tone-red">!?MW#;</span> - trigger for wandering creatures.<br>
<span class="erm-tone-red">!?MW0;</span> - Called when reaching a destination or hero.<br>
<span class="erm-tone-red">!?MW1;</span> - Called when the stray creature dies.</strong></div>
<div class="erm-paragraph"><strong>!?MW0</strong> - is called on the next turn, after reaching a point or attacking the hero, and only if the corresponding flag is set.<br>
v997 contains the number of the wandering creature - the trigger caller.</div>
<div class="erm-paragraph"><strong>!?MW1</strong> - summoned during the turn after the death of the creature. Fires only if the corresponding flag is set.<br>
v997 contains the number of the killed roaming creature.</div>
<span class="erm-anchor" id="ref-tr-mw-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/mw/#ref-rec-mw">!!MW</a></div>
</div>
</section>
:::

## When it fires {#event}

0 reaching a destination/hero, 1 monster death. v997 is the wandering-monster ID. Corresponding MW settings must enable these events.

## Declaration {#syntax}

```erm
!?MW0; / !?MW1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MW0` | `OnWanderingMonsterReach` | 30305 |
| `MW1` | `OnWanderingMonsterDeath` | 30306 |

## Limitations and ordering {#limits}

The classic implementation fires on the next turn after arrival or death, not immediately.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Wandering monsters (MW)](../../receivers/mw/)
<!-- llm:end erm.triggers.mw 1 -->

# Object visits (OB)

ID: erm.triggers.ob
URL: /en/erm/triggers/ob/
Part: 1/1
Source references: old-help:tr-ob.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.ob 1 -->
## Trigger OB {#ref-tr-ob}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>OB</strong> (objects)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-ob-red"></span><span class="erm-tone-red">!?OB#1/#2/#3;</span> - trigger when visiting an object at a certain point #1/#2/#3 (respectively, X Y L).<br>
<span class="erm-tone-red">!?OB#1/#2;</span> - trigger when visiting any object of a certain type and subtype.<br>
<span class="erm-tone-red">!?OB#1;</span> - trigger when visiting any object of a certain type.</strong><br>
</div><div class="erm-paragraph">Works for any object with an "input" (<a href="../../receivers/tr/#ref-rec-tr-e">yellow checkered</a> in the editor).<br>
<u>Note</u>: This trigger includes creatures, artifacts and resources, but not heroes 
(for heroes use trigger <a href="../he/#ref-tr-he">!?HE</a>)</div>
<div class="erm-paragraph">Object trigger options:
</div><span class="erm-anchor" id="ref-tr-ob-t0"></span><ol class="erm-margin-top-zero">
<li>!?OB#1/#2/#3; - will work when visiting an object at a certain point.</li>
<li>!?OB#1/#2; - will work when visiting <a href="../../tables/objects/#ref-form-objects" data-context="true">object</a> type #1 / subtype #2</li>
<li>!?OB#1; - will work when visiting <a href="../../tables/objects/#ref-form-objects" data-context="true">object</a> type #1</li>
</ol>
If several variants of the trigger !?OB are used for one object, then trigger "variant 2" is triggered first, 
and then options "1" and "3". Options "1" and "3" are executed in the order they appear in the script.<br>
When trigger "option 2" is triggered, the object coordinates are written to v998, v999, v1000, as X Y L respectively.<br>
This way you can get the coordinates of any other visited objects without specifying them.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?OB101; - any treasure chest on the map
!!CH998:...; - change the options of the visited chest.</code></pre>
You can use reference coordinates for all receivers that require precise coordinates using this pattern:
<span class="erm-legacy-code"><strong class="erm-tone-purple erm-legacy-strong">!!XX</strong><span class="erm-anchor" id="ref-tr-ob-dred"></span><strong class="erm-tone-red">@</strong>:…;</span> , where
<pre>      <strong class="erm-tone-purple erm-legacy-strong">XX</strong> - receiver name,
      <strong class="erm-tone-red">@</strong> = number <em>v</em>-variable storing the X coordinate (v[@]=X, v[@+1]=Y, v[@+2]=Level)</pre>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">...
!!OB10:...; 10 is the number of the v-variable storing the X coordinate</code></pre>
It is also possible through <a href="../../variables/#ref-cont-flags-var-ref">indirect links</a>:
<pre class="erm-example"><code class="language-erm">...
!!OBv11:...; the value v11 is accepted as a reference, so v[v11]=X, v[v11+1]=Y, v[v11+2]=Level.</code></pre>

<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">
Post-trigger <strong>OB</strong></span></div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>!$OB#1/#2/#3;</strong></span> - post-trigger for an object at a certain point on the map.<br>
<strong><span class="erm-tone-red">!$OB#1/#2;</span></strong> - post-trigger for any <a href="../../tables/objects/#ref-form-objects" data-context="true">object</a> type #1 / subtype #2.<br>
<span class="erm-tone-red"><strong>!$OB#1;</strong></span> - post-trigger for any <a href="../../tables/objects/#ref-form-objects" data-context="true">object</a> type #1.<br>
The principle of operation of the trigger is the same as that of a conventional trigger !?OB…; but this trigger is triggered after the standard properties of the object are executed.<br>
For example, post-trigger is used in a dwelling, triggering after the purchase of any creature.
The post-trigger for the castle will trigger after the end of the battle if town was attacked.<br>
<strong></strong></div><span class="erm-anchor" id="ref-tr-ob-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-tr-ob-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!$OB16;
; after visiting the creature bank, variables v998/v999/v1000 contain the coordinates of the visited object
!!CB998:G0/d/?y1 G1/d/?y2 G2/d/?y3 G3/d/?y4 G4/d/?y5 G5/d/?y6 G6/d/?y7; y1..y7 - number of guards in the units guarding the bank
!!OB998&amp;y1=0/y2=0/y3=0/ y4=0/y5=0/y6=0/y7=0:S; a ban on visiting the facility for all players if there are no guards (the bank is robbed)</code></pre></div></details>
<span class="erm-anchor" id="ref-tr-ob-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/ob/#ref-rec-ob">!!OB</a>, <a href="../../tables/objects/#ref-form-objects" data-context="true">object table</a></div>

</div>
</section>
:::

## When it fires {#event}

Select an object type, type/subtype, or exact entrance coordinates. The object must have an entrance cell. Monsters, resources, and artifacts qualify; heroes use HE.

## Declaration {#syntax}

```erm
!?OBtype; / !?OBtype/subtype; / !?OBx/y/level;
```

## Limitations and ordering {#limits}

The !$OB post-trigger runs after the default reaction. The three forms do not simply execute from general to specific: type/subtype runs first, followed by position and type handlers in script order. v998/v999/v1000 identify the visited object’s coordinates.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Map tiles (TR)](../../receivers/tr/#command-e-p) · [Visiting a hero (HE)](../he/) · [Game object table](../../tables/objects/) · [Variables, strings and arrays](../../variables/) · [Map objects (OB)](../../receivers/ob/)

<!-- llm:end erm.triggers.ob 1 -->

# Adventure-map tile hint (OnAdventureMapTileHint)

ID: erm.triggers.onadventuremaptilehint
URL: /en/erm/triggers/onadventuremaptilehint/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onadventuremaptilehint 1 -->
## Timing and arguments {#event}

x1..x3 are object coordinates; x4/x5 type/subtype or -1; x6..x8 hovered tile coordinates. Change text through MM, not numeric arguments. OnAdvMapTileHint is a registered alias for the same ID.

## Declaration {#declaration}

```erm
!?FU(OnAdventureMapTileHint);
```

## Identity and compatibility {#identity}

ID `77040`; registered as `TRIGGER_ADVMAP_TILE_HINT`. Aliases: OnAdvMapTileHint. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onadventuremaptilehint 1 -->

