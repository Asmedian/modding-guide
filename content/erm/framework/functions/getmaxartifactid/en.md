---
{"title":"GetMaxArtifactId","summary":"This snapshot simply returns ART_LAST_WOG. Despite its comment about extensions, it does not query a dynamic plugin limit.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

This snapshot simply returns ART_LAST_WOG. Despite its comment about extensions, it does not query a dynamic plugin limit.

## Call contract {#signature}

```erm
!!FU(GetMaxArtifactId):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3199–3208, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ART_LAST_WOG](../../constants/artifacts/#const-art-last-wog)
