---
{"title":"GetMaxSpellId","summary":"Returns SPELL_LAST_WOG, not a dynamic limit from a spell-expansion plugin.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns SPELL_LAST_WOG, not a dynamic limit from a spell-expansion plugin.

## Call contract {#signature}

```erm
!!FU(GetMaxSpellId):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3209–3216, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[SPELL_LAST_WOG](../../constants/spells/#const-spell-last-wog)
