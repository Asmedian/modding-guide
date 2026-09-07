---
{"title":"OnStartOrLoad","summary":"Updates maxArtifacId, maxHeroId, maxMonsterId, maxSpellId. The source spells maxArtifacId without the second t.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Updates maxArtifacId, maxHeroId, maxMonsterId, maxSpellId. The source spells maxArtifacId without the second t.

## Call contract {#signature}

```erm
!?FU(OnStartOrLoad);
```

## State and dependencies {#context}

Named globals: [i^maxArtifacId^](../../globals/#global-i-maxartifacid) · [i^maxHeroId^](../../globals/#global-i-maxheroid) · [i^maxMonsterId^](../../globals/#global-i-maxmonsterid) · [i^maxSpellId^](../../globals/#global-i-maxspellid).

## Related functions {#calls}

[GetMaxArtifactId](../getmaxartifactid/) · [GetMaxHeroId](../getmaxheroid/) · [GetMaxMonsterId](../getmaxmonsterid/) · [GetMaxSpellId](../getmaxspellid/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 292–300, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
