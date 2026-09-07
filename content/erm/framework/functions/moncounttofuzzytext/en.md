---
{"title":"MonCountToFuzzyText","summary":"Returns an approximate count: 1–4, 5–9, 10–19, 20–49, 50–99, 100–249, 250–499, 500–999 and K+/M+. MON_FUZZY_COUNT_ selects formatting; 0 falls into 1–4 and negative input is an error.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns an approximate count: 1–4, 5–9, 10–19, 20–49, 50–99, 100–249, 250–499, 500–999 and K+/M+. MON_FUZZY_COUNT_* selects formatting; 0 falls into 1–4 and negative input is an error.

## Call contract {#signature}

```erm
!!FU(MonCountToFuzzyText):P(monNum)/(resultPtr)/(maxTextLength);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `monNum` | input |
| x2 | `resultPtr` | output / mutable |
| x3 | `maxTextLength` | input |

## State and dependencies {#context}

Named globals: [s^result^](../../globals/#global-s-result).

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[IntLog2](../intlog2/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2950–3019, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[INT_MAX](../../constants/data-types/#const-int-max) · [MON_FUZZY_COUNT_EXTRA_SHORT](../../constants/special-enums/#const-mon-fuzzy-count-extra-short) · [MON_FUZZY_COUNT_HUMAN_FRIENDLY](../../constants/special-enums/#const-mon-fuzzy-count-human-friendly) · [MON_FUZZY_COUNT_SHORT](../../constants/special-enums/#const-mon-fuzzy-count-short) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int) · [SIZEOF_PTR](../../constants/data-types/#const-sizeof-ptr)
