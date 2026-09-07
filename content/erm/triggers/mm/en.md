---
{"title":"Interface hints (MM)","summary":"0 battle hints, 1 town hints, 2 adventure map. MM modifies text in the relevant context.","translationStatus":"reviewed"}
---

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
