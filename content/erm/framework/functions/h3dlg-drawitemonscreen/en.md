---
{"title":"H3Dlg_DrawItemOnScreen","summary":"Draws itemId or the entire dialog for ALL_ITEMS. The H3Dlg object must exist.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Draws itemId or the entire dialog for ALL_ITEMS. The H3Dlg object must exist.

## Call contract {#signature}

```erm
!!FU(H3Dlg_DrawItemOnScreen):P(h3Dlg)/(itemId);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `h3Dlg` | input |
| x2 | `itemId` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2152–2166, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [NULL](../../constants/universal/#const-null)
