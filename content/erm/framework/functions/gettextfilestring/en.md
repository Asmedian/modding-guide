---
{"title":"GetTextFileString","summary":"Reads a zero-based row from loaded randtvrn, arraytxt, genrltxt, tcommand, artevent, crgen1, crgen4, dwelling, minename, objnames, towntype, plcolors, priskill, restypes, skilllev, advevent resources. Normalizes the name; unknown names return Wrong txt filename!. Does not validate row bounds.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Reads a zero-based row from loaded randtvrn, arraytxt, genrltxt, tcommand, artevent, crgen1, crgen4, dwelling, minename, objnames, towntype, plcolors, priskill, restypes, skilllev, advevent resources. Normalizes the name; unknown names return Wrong txt filename!. Does not validate row bounds.

## Call contract {#signature}

```erm
!!FU(GetTextFileString):P(txtFilename)/(rowIndex)/(string);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `txtFilename` | input |
| x2 | `rowIndex` | input |
| x3 | `string` | output / mutable |

## State and dependencies {#context}

Named globals: —.
  !!VR(address):S6968208;               [resources]
!!el&(text)=^`, `s^;
  !!VR(address):S6974640;               [object names]
; Special treatment for town type names
!!el&(text)=^`, `s^;
  !!VR(address):S6976900;               [player colour]
!!el&(text)=^`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[StrToLower](../strtolower/) · [Substr](../substr/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3217–3284, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[UNC_INT](../../constants/un-c-data-types/#const-unc-int)
