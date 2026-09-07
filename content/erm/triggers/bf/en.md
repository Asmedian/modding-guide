---
{"title":"Battlefield setup (BF)","summary":"The battlefield-configuration point before combat. BF can place obstacles.","translationStatus":"reviewed"}
---

## Trigger BF {#ref-tr-bf}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>BF</strong> (battlefield)</span></div>

<div class="erm-paragraph"><span><strong><span class="erm-anchor" id="ref-tr-bf-red"></span><span class="erm-tone-red">!?BF;</span>- called during 
preparing the battlefield, right before the battle itself.<br></strong>
Can be used with receiver <a href="../../receivers/bf/#ref-rec-bf">!!BF</a></span><span> to set a customized battlefield.<br>
Does not work if there are no human players in the battle.</span></div>

</div>
</section>
:::

## When it fires {#event}

The battlefield-configuration point before combat. BF can place obstacles.

## Declaration {#syntax}

```erm
!?BF;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `BF` | `OnSetupBattlefield` | 30800 |

## Limitations and ordering {#limits}

Legacy Help excludes battles without a human. Do not call BU:R to redraw at this stage.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Battlefield setup (BF)](../../receivers/bf/)
