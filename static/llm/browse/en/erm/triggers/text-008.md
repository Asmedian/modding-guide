# Transferring a campaign hero (OnTransferHero)

ID: erm.triggers.ontransferhero
URL: /en/erm/triggers/ontransferhero/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.ontransferhero 1 -->
## Timing and arguments {#event}

x1 is the transferred hero, after ERM instructions and before PI. May include inactive campaign heroes; existence does not imply presence on the map.

## Declaration {#declaration}

```erm
!?FU(OnTransferHero);
```

## Identity and compatibility {#identity}

ID `77049`; registered as `TRIGGER_TRANSFER_HERO`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.ontransferhero 1 -->

# Winning the game (OnWinGame)

ID: erm.triggers.onwingame
URL: /en/erm/triggers/onwingame/
Part: 1/1
Source references: era-source:erm.pas, era-source:triggers.pas, era-source:adverm.pas, old-help:era-new-events.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.onwingame 1 -->
## Timing and arguments {#event}

For a human victory, immediately before OnGameLeave in the current implementation. No arguments. Earlier behavior after OnGameLeave was fixed.

## Declaration {#declaration}

```erm
!?FU(OnWinGame);
```

## Identity and compatibility {#identity}

ID `77047`; registered as `TRIGGER_WIN_GAME`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- llm:end erm.triggers.onwingame 1 -->

# After ERM instructions (PI)

ID: erm.triggers.pi
URL: /en/erm/triggers/pi/
Part: 1/1
Source references: old-help:tr-pi.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.pi 1 -->
## Trigger PI {#ref-tr-pi}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>PI</strong> (post-instructions)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-pi-red"></span><span class="erm-tone-red">!?PI;</span> 
- post-instruction.</strong><br>This trigger fires a little later than execution 
instructions, but before performing basic card settings. Another feature of this 
trigger - it only fires when a new map starts, not when the game loads 
(as are the instructions).<br>
<u>Example:</u>
<pre class="erm-example"><code class="language-erm">ZVSE
!#IF:M^Instructions^;
!?PI;
!!IF:M^Post-instruction^;</code></pre>
When you start a map, you will receive two messages: "Instructions" and then 
"post-instruction". When the first message appears, the card has almost no 
settings, and when the second message appears, almost all card settings will be 
completed. If you load a saved game, you will not receive any messages.</div>

</div>
</section>
:::

## When it fires {#event}

Runs after initialization instructions for a new map.

## Declaration {#syntax}

```erm
!?PI;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `PI` | `OnAfterErmInstructions` | 30370 |

## Limitations and ordering {#limits}

Does not fire when loading a save. Temporary resources need a load handler for restoration.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

<!-- llm:end erm.triggers.pi 1 -->

# Sound playback (SN)

ID: erm.triggers.sn
URL: /en/erm/triggers/sn/
Part: 1/1
Source references: old-help:tr-sn.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.sn 1 -->
## Trigger SN {#ref-tr-sn}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>SN</strong> (sound)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-sn-red"></span><span class="erm-tone-red">!?SN;</span></strong> <strong>- trigger, triggered when 
playing any sound (WAV, M82, but <u>not MP3!</u>).</strong> <br>
Trigger fires every time the game tries to play sound.</div>
<span class="erm-anchor" id="ref-tr-sn-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/sn/#ref-rec-sn">!!SN</a></div>

</div>
</section>
:::

## When it fires {#event}

Intercepts an attempt to play a WAV/M82 sound effect. SN provides the playback parameters.

## Declaration {#syntax}

```erm
!?SN;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `SN` | `OnSoundPlay` | 30321 |

## Limitations and ordering {#limits}

MP3 uses the separate MP event. This handler may fire frequently and from different game windows.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[ERA services, memory and sound (SN)](../../receivers/sn/)
<!-- llm:end erm.triggers.sn 1 -->

# Town hall (TH)

ID: erm.triggers.th
URL: /en/erm/triggers/th/
Part: 1/1
Source references: old-help:tr-th.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.th 1 -->
## Receiver TH {#ref-tr-th}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>TH</strong> (town hall)</span></div>
<br>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-th-red"></span><span class="erm-tone-red">!?TH#;</span> - triggered upon entering the town hall (Town Hall, City Hall, or Capitol).<br>
<span class="erm-tone-red">!?TH0;</span> - triggers when you enter it.<br>
<span class="erm-tone-red">!?TH1;</span> - triggers when exiting it.</strong></div>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong><br>
1. You can use !?TH1 to check the constructed building in the town.<br>
2. You can also use this trigger to reset the construction flag using the command 
<a href="../../receivers/ca/#ref-rec-ca-r">CA:R</a> to receive additional buildings that day.</div>
<span class="erm-anchor" id="ref-tr-th-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/ca/#ref-rec-ca">!!CA</a>, events <a href="../#ref-era-new-events-2-26">OnTownHallMouseClick</a> and <a href="../#ref-era-new-events-2-31">OnBuildTownBuilding</a></div>

</div>
</section>
:::

## When it fires {#event}

0 enters the town hall; 1 leaves it. Changes can be associated with visiting the construction screen.

## Declaration {#syntax}

```erm
!?TH0; / !?TH1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `TH0` | `OnEnterTownHall` | 30324 |
| `TH1` | `OnLeaveTownHall` | 30325 |

## Limitations and ordering {#limits}

Leaving the hall does not mean a building was constructed. Use OnBuildTownBuilding/OnAfterBuildTownBuilding for construction.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Towns (CA)](../../receivers/ca/#command-r) · [Towns (CA)](../../receivers/ca/) · [ERM triggers and events](../)
<!-- llm:end erm.triggers.th 1 -->

# Real-time timer (TL)

ID: erm.triggers.tl
URL: /en/erm/triggers/tl/
Part: 1/1
Source references: old-help:tr-tl.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.tl 1 -->
## Receiver TH {#ref-tr-tl}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>TL</strong><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(real time timer)</span></div>
<div class="erm-paragraph"><br><strong><span class="erm-anchor" id="ref-tr-tl-red"></span><span class="erm-tone-red">!?TL#; </span>- </strong>
<strong>Real time timer.</strong><br>
    # = <strong>0</strong> - fires every second<br>
    # = <strong>1</strong> - triggers every 2 seconds<br>
    # = <strong>2</strong> - triggers every 5 seconds<br>
    # = <strong>3</strong> - triggers every 10 seconds<br>
    # = <strong>4</strong> - triggers every 60 seconds</div>
<div class="erm-paragraph"><u>Example</u>:<br>
To see how this works, use the following code:
<pre class="erm-example"><code class="language-erm">!?TL0;
!!IF:L^1 second ticked^;
!?TL1;
!!IF:L^2 seconds ticked^;
!?TL2;
!!IF:L^5 seconds have passed^;
!?TL3;
!!IF:L^Already 10 seconds^;
!?TL4;
!!IF:L^Exactly a minute has passed!^;</code></pre></div>
</div>
</section>
:::

## When it fires {#event}

Index 0 means 1 second, 1 means 2 seconds, 2 means 5 seconds, 3 means 10 seconds, and 4 means 60 seconds.

## Declaration {#syntax}

```erm
!?TL#;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `TL0` | `OnEverySecond` | 30900 |
| `TL1` | `OnEvery2Seconds` | 30901 |
| `TL2` | `OnEvery5Seconds` | 30902 |
| `TL3` | `OnEvery10Seconds` | 30903 |
| `TL4` | `OnEveryMinute` | 30904 |

## Limitations and ordering {#limits}

These are not game days. Do not treat wall-clock timing as an automatically synchronized condition for multiplayer gameplay.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/)
<!-- llm:end erm.triggers.tl 1 -->

# Game timer (TM)

ID: erm.triggers.tm
URL: /en/erm/triggers/tm/
Part: 1/1
Source references: old-help:tr-tm.htm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.triggers.tm 1 -->
## Trigger TM {#ref-tr-tm}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>TM</strong> (timer)</span></div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-tr-tm-red"></span><span class="erm-tone-red"><strong>!?TM#;</strong></span> <strong>- trigger for the timer code.</strong><br>
Triggers when timer number # is triggered.<br>
         # = timer number (1..100)</div>
<div class="erm-paragraph">To set the timer use receiver <a href="../../receivers/tm/#ref-rec-tm">!!TM</a>.</div>

</div>
</section>
:::

## When it fires {#event}

Fires for timer 1..100 previously configured with the TM receiver.

## Declaration {#syntax}

```erm
!?TM#;
```

## Limitations and ordering {#limits}

OnEveryDay fires before regular timers and needs no TM setup. Declaring !?TM does not enable the timer.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Game timers (TM)](../../receivers/tm/)
<!-- llm:end erm.triggers.tm 1 -->

