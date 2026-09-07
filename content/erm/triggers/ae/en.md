---
{"title":"Artifact equipment (AE)","summary":"0 unequips; 1 equips. The current hero owns the artifact, v998 is the artifact ID, and v999 its slot.","translationStatus":"reviewed"}
---

## Trigger AE {#ref-tr-ae}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>AE</strong> (putting on/taking off artifact)</span></div><br>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-ae-red"></span><span class="erm-tone-red">!?AE#;</span> - removing or putting on an artifact<br>
<span class="erm-tone-red">!?AE0;</span> - triggers when removing an artifact<br>
<span class="erm-tone-red">!?AE1;</span> - triggers when equipping an artifact</strong></div>
<div class="erm-paragraph">
Trigger is triggered when the player removes/equips artifact, or when 
artifact is taken and automatically dressed.<br>
This trigger can be useful for artifact scripts, for 
adding/subtracting the hero’s primary skills or secondary skill.<br>
Current hero (!!HE-1) – hero-owner of the artifact.<br>
    <strong>v998</strong> contains 
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact number</a><br>
    <strong>v999</strong> contains 
<a href="../../tables/artifact-slots/#ref-form-ap" data-context="true">item number</a> (slot) where artifact was placed.</div>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong><br>
This command does not work for a backpack.<br>
If you change one artifact to another, several additional ones will trigger 
triggers. Here they are:
</div><span class="erm-anchor" id="ref-tr-ae-t0"></span><ol class="erm-margin-top-zero">
<li>AE0 (start artifact)</li>
<li>AE1 (start artifact)</li>
<li>AE0 (start artifact)</li>
<li>AE1 (new artifact)</li>
<li>AE0 (new artifact)</li>
<li>AE1 (new artifact)</li>
</ol></div>
</section>
:::

## When it fires {#event}

0 unequips; 1 equips. The current hero owns the artifact, `v998` is the [artifact ID](../../tables/artifacts/), and `v999` its [slot](../../tables/artifact-slots/). Current hero `!!HE-1` owns the artifact. Automatically equipping a newly acquired artifact also fires the event.

## Declaration {#syntax}

```erm
!?AE0;
!?AE1;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `AE0` | `OnUnequipArt` | 30315 |
| `AE1` | `OnEquipArt` | 30316 |

## Limitations and ordering {#limits}

Rearranging backpack items is not equipment. Replacing one artifact with another fires multiple events; handlers must tolerate repeated calls.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[Artifact table](../../tables/artifacts/) · [Artifact slots](../../tables/artifact-slots/)
