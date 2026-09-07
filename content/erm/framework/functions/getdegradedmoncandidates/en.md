---
{"title":"GetDegradedMonCandidates","summary":"Scans all supported types and returns a local array of creatures upgrading to monId. Multiple candidates are possible; a full scan is expensive with extended limits.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Scans all supported types and returns a local array of creatures upgrading to monId. Multiple candidates are possible; a full scan is expensive with extended limits.

## Call contract {#signature}

```erm
!!FU(GetDegradedMonCandidates):P(monId)/(degradesList);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `monId` | input |
| x2 | `degradesList` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ExtendArrayLifetime`.

## Related functions {#calls}

[GetMaxMonsterId](../getmaxmonsterid/) · [GetUpgradedMonster](../getupgradedmonster/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3038–3054, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[MON_FIRST](../../constants/monsters/#const-mon-first) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
