---
{"title":"Hero movement (HM)","summary":"Fires before each step. -1 selects every hero; the general handler precedes a hero-specific handler. v998/v999/v1000 hold the current hero’s coordinates.","translationStatus":"reviewed"}
---

## Trigger HM {#ref-tr-hm}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>HM</strong> (hero step)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-tr-hm-red"></span><span class="erm-tone-red">!?HM#;</span> - control over every step of the hero.</strong><br>
         # – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a> (-1 – any)<br>
Trigger is called before each hero's step (not after). You can check the location of the hero from the variables <strong>v998</strong>,<strong>v999</strong>,<strong>v1000</strong>. 
The movement cannot be undone.<br>
At the moment this trigger figures out the following: 
current hero (<a href="../../receivers/he/#ref-rec-he">!!HE-1</a>), 
its coordinates (<strong>v998</strong>, <strong>v999</strong>, <strong>v1000</strong> → X Y L); also flag <strong>1000</strong> is set to 1 (True), 
if a human player walks, or to 0 (False) - if AI.<br>
If you use !?HM-1; and !?HM5; (for example), then !?HM-1 will act first, and then !?HM5.<br>
<u>Example:</u>
<pre class="erm-example"><code class="language-erm">!?HM-1;
!!IF:M^Movement!^; - message when moving any hero
!?HM0;
!!IF:M^Moving Orrin!^; - message when moving Orrin</code></pre></div>

</div>
</section>
:::

## When it fires {#event}

Fires before each step. -1 selects every hero; the general handler precedes a hero-specific handler. v998/v999/v1000 hold the current hero’s coordinates.

## Declaration {#syntax}

```erm
!?HM#;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `HM` | `OnHeroMove` | 30400 |

## Limitations and ordering {#limits}

The legacy trigger cannot cancel movement. It fires frequently; do not open a dialog on every step without a suitable condition.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Hero table](../../tables/heroes/) · [Heroes (HE)](../../receivers/he/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.4.1, +](../../compatibility/#era3-v-3-4-1-l1753) — (CURRENT_HERO) constant (-1) can be safely used in triggers from now. Previosly this global value could be overwritten by nested events. Example: !?HM0; current hero is Orrin !!HE(HERO_XERON):Ed100000; Level up for Xeron…
<!-- ERA3-GENERATED:END -->
