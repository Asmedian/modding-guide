---
{"title":"Visiting a hero (HE)","summary":"Responds to visiting or attacking the selected hero. The selector is a hero ID.","translationStatus":"reviewed"}
---

## Trigger HE {#ref-tr-he}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>HE</strong> (hero's visit)</span></div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-tr-he-red"></span><span class="erm-tone-red"><strong>!?HE#;</strong></span><strong> - triggers when visiting (attack or 
visit) of a certain hero number #</strong> (<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">0..155</a>)<br>
To change the hero's parameters, use receiver <a href="../../receivers/he/#ref-rec-he">!!HE</a>.</div>
</div>
</section>
:::

## When it fires {#event}

Responds to visiting or attacking the selected hero. The selector is a hero ID.

## Declaration {#syntax}

```erm
!?HE#;
```

## Limitations and ordering {#limits}

Use OnBeforeHeroInteraction and OnAfterHeroInteraction for detailed interaction control; OB does not cover heroes.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Hero table](../../tables/heroes/) · [Heroes (HE)](../../receivers/he/)
