---
{"title":"Battle actions (BG)","summary":"BG0 precedes an action; BG1 is associated with action completion and passing control. Read action parameters through BG; v997 stores the round.","translationStatus":"reviewed"}
---

## Trigger BG {#ref-tr-bg}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>BG </strong>(action in battle)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-bg-red"></span><span class="erm-tone-red">!?BG#;</span> 
- this combat trigger is triggered with every stack or hero action 
(witchcraft, flight or surrender).<br>
<span class="erm-tone-red">!?BG1</span>; - triggers when a move is transferred from one creature to another<br>
<span class="erm-tone-red">!?BG0;</span> - triggers before an action</strong></div>
<div class="erm-paragraph">Variable <strong>v997</strong> stores the number of the current round:<br>
        v997=0 – first round (after tactical setup)<br>
        v997=1 – second round<br>
        v997=2 – third round<br>
        …</div>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong> you can use this trigger with receiver <a href="../../receivers/bg/#ref-rec-bg">!!BG</a> 
to find the creature's stack number (<a href="../../receivers/bg/#ref-rec-bg-n">!!BG:N</a>) and 
use this number to change creature settings (<a href="../../receivers/bm/#ref-rec-bm">!!BM</a>).
Also, if hero runs away from the battlefield, trigger will trigger first <strong>!?BG0;</strong> and then, after clicking on OK in the loss window, it fires <strong>!?BG1</strong>.</div>

</div>
</section>
:::

## When it fires {#event}

BG0 precedes an action; BG1 is associated with action completion and passing control. Read action parameters through BG; v997 stores the round.

## Declaration {#syntax}

```erm
!?BG0; / !?BG1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `BG0` | `OnBeforeBattleAction` | 30303 |
| `BG1` | `OnAfterBattleAction` | 30304 |

## Limitations and ordering {#limits}

BG:N during BG1 may already refer to the next stack. OnBattleActionEnd provides a more precise action-completion point.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Current battle action (BG)](../../receivers/bg/) · [Current battle action (BG)](../../receivers/bg/#command-n) · [Battle stack (BM)](../../receivers/bm/)
