---
{"title":"Function handler (FU)","summary":"The function body follows its declaration and is invoked with FU:P or DO:P. Inputs and outputs use x1..x16.","translationStatus":"reviewed"}
---

## Trigger FU {#ref-tr-fu}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger 
<strong>FU</strong> (function)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-fu-red"></span><span class="erm-tone-red">!?FU#;</span> - function number # (1..30000)</strong></div>
<div class="erm-paragraph">The code following this trigger becomes the function code.<br>
The function itself is called by the receiver <a href="../../receivers/fu/#ref-rec-fu">!!FU</a>.</div>
<div class="erm-paragraph">
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?FU25000; - trigger
!!IF:M^This is function code 25000 and you will see this message when you call function 25000!^; - function code
!#FU25000:P; - function call string</code></pre></div>

</div>
</section>
:::

## When it fires {#event}

The function body follows its declaration and is invoked with FU:P or DO:P. Inputs and outputs use x1..x16.

## Declaration {#syntax}

```erm
!?FU(MyMod_Function);
```

## Limitations and ordering {#limits}

Reusing a name adds handlers rather than an independent overload. Use a unique mod prefix.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Function calls (FU)](../../receivers/fu/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.21, +](../../compatibility/#era3-v-3-9-21-l155) — Added the following functions to Era Erm Framework: !?FU(ReadJsonIntArray); ; Reads integer array from json config into either existing dynamic array or into automatically created local one. !#VA(jsonKeyPtr:x); JSON full…
- [ERA 3.9.19, +](../../compatibility/#era3-v-3-9-19-l199) — Added the following functions to Era Erm Framework: !?FU(EmptyIniCache); ; Replaces ini file cache in memory with an empty one. Use it for recreating ini files from scratch, when you don't need previously cached data and…
- [ERA 3.9.16, +](../../compatibility/#era3-v-3-9-16-l308) — Extended VR:R command with optional 4-th parameter: VR:R(dummy)/(min)/(max)/(free_param); See the above note about generating random values in PvP battles. Example: !?FU(OnBattleScreenMouseClick)&i^mouse_action^=(MOUSE_R…
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l479) — Added the following functions to Era Erm Framework: !?FU(Interpolate); ; Interpolates ERM variables inside given string (%v1, etc). Can be used for nested translation strings like %T(...) is json. !#VA(strPtr:x); Source …
- [ERA 3.9.13, +](../../compatibility/#era3-v-3-9-13-l691) — Added experimental (may be subject of removal) exported function to quit from any dialog to main game menu. // Exits adventure manager dialogs and/or all subdialogs and immediately returns to game menu screen by raising …
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l727) — Implemented advanced ERM memory synchronization means in network games. Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for further synchronization. Syntax: !!IP:M^var_name_1^/^var_name_2^/...; !!IP:M…
- [ERA 3.9.12, *](../../compatibility/#era3-v-3-9-12-l769) — The order of network battle events: !?FU(OnBeforeBattle); on attacker side only, battle may be cancelled !?FU(OnBeforeBattleUniversal); on attacker side, battle may still be cancelled !?FU(OnBeforeBattleBeforeDataSend); …
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l802) — Added the following functions to Era Erm Framework: !?FU(Array_Move); ; Copies part of the array into another part of the array, overwriting existing values in a smart way. ; The parts may have overlapping indexes. The s…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l885) — Rewritten creature regeneration ability support. (!) Plugins should not hook regeneration code and should use Era 'SetRegenerationAbility' API instead. Era introduces term "Standard regeneration ability", which value is …
- [ERA 3.9.9, +](../../compatibility/#era3-v-3-9-9-l971) — Added the following functions to Era Erm Framework: !?FU(Hash32); ; Calculates int32 digest (hash sum) of arbitrary sequence of bytes. !#VA(data:x); Pointer to data first byte or string !#VA(dataLen:x); Length of data in…
- [ERA 3.9.7, +](../../compatibility/#era3-v-3-9-7-l1031) — Added support for arrays and primitive types in language json files, because they are often used as config files. Numbers are converted to strings, booleans are converted to "0" and "1", null values are ignored (the same…
- [ERA 3.9.4, +](../../compatibility/#era3-v-3-9-4-l1094) — Added the following functions to Era ERM Framework: !?FU(BattleStack_MakeActive); ; Makes specified stack active/acting. !#VA(stackId:x); Stack ID to pass control to. !?FU(PrepareMultiPicDialog); ; Initializes IF:N dialo…
- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1221) — Added new "OnKeyReleased" event, occuring on keyboard key release. Parameters: keyCode, preventDefault. Example: !?FU(OnKeyReleased); !#VA(key:x) (preventDefault:x); !!IF:M^Released key %(key)^;
- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1230) — Added new events to Era Erm Framework: "OnKeyReleased_AdvMap", "OnKeyReleased_Battle", "OnKeyReleased_HeroScreen", "OnKeyReleased_HeroMeetingScreen", "OnKeyReleased_Town", occuring right after "OnKeyReleased" events and …
- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1243) — Added the following functions to Era Erm Framework: !?FU(H3Dlg_GetCurrentDlgId); ; Returns topmost dialog unique ID (DLG_XXX constant). It may be message box, custom dialog or any in-game dialog. !#VA(result:x); !?FU(Add…
- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1271) — The following functions were changed in Era Erm Framework: !?FU(EquipArtToSlot); ; Tries to put artifact to specified hero doll slot, triggering OnEquipArt event. Returns success flag. !#VA(hero:x); ID of hero to equip a…
- [ERA 3.9, +](../../compatibility/#era3-v-3-9-l1347) — Added the following functions to Era Erm Framework: !?FU(ShowAnimatedDefDlg); ; Displays message dialog with OK button, text and leading animated def. !#VA(textPtr:x); Text to show !#VA(defNamePtr:x); Optional. Name of d…
- [ERA 3.7.0, +](../../compatibility/#era3-v-3-7-0-l1579) — Added new SN:H syntax to work with spell texts. !!SN:H^spell^/#spell_id/#spell_text_type/$text where #spell_text_type is one of SPELL_TEXT_XXX constants. This command deprecates SS usage for texts. Deletion syntax works …
- [ERA 3.4.2, +](../../compatibility/#era3-v-3-4-2-l1732) — Added the following functions to Era Erm Framework: !?FU(RadioDlg_GetNumItems); ; Returns number of items, added to dialog !#VA(result:x); !?FU(RadioDlg_GetItemValue); ; Returns value of specified item or throws error in…
- [ERA 3.4.1, +](../../compatibility/#era3-v-3-4-1-l1760) — Implemented high level API for WoG radio dialogs (IF:G). Configure dialog before showing. Optionally assign value and tag to each item. Optionally add special "cancel" item. The result is item index, value and tag. No ne…
- [All related entries](../../compatibility/#era3-changelog)
<!-- ERA3-GENERATED:END -->
