---
{"title":"GetModList","summary":"Returns a local array of active VFS mods. toLower and reverse default to FALSE. With zero mods the output is not initialized; initialize it to NULL and check it.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns a local array of active VFS mods. toLower and reverse default to FALSE. With zero mods the output is not initialized; initialize it to NULL and check it.

## Call contract {#signature}

```erm
!!FU(GetModList):P(arrayId)/(toLower)/(reverse);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `arrayId` | output / mutable |
| x2 | `toLower` | output / mutable |
| x3 | `reverse` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ExtendArrayLifetime`, `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[Array_Revert](../array-revert/) · [NewStrArray](../newstrarray/) · [StrToLower](../strtolower/) · [Substr](../substr/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1932–1986, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_STDCALL](../../constants/calling-conventions/#const-callconv-stdcall) · [FALSE](../../constants/universal/#const-false) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int)
