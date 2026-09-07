---
{"title":"NewStrArray","summary":"Creates a string array using the NewIntArray overloads. Fill is a string, empty by default. Returns an array ID, not a memory address.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Creates a string array using the NewIntArray overloads. Fill is a string, empty by default. Returns an array ID, not a memory address.

## Call contract {#signature}

```erm
!!FU(NewStrArray):P?(result:y);
!!FU(NewStrArray):P(size)/?(result:y);
!!FU(NewStrArray):P(size)/(fill)/?(result:y)/(storage);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `arg1` | input |
| x2 | `arg2` | input |
| x3 | `arg3` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ExtendArrayLifetime`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 337–375, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_STR](../../constants/erm-commands/#const-m-str) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
