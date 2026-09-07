---
{"title":"H3Dlg_SendCmdToItem","summary":"Sends a DLG_CMD_ to itemId; cmdType defaults to DLG_CMD_TYPE_DEFAULT. SET_TEXT/SET_DEF/SET_PCX interpret param as a string; other commands receive a number.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Sends a DLG_CMD_* to itemId; cmdType defaults to DLG_CMD_TYPE_DEFAULT. SET_TEXT/SET_DEF/SET_PCX interpret param as a string; other commands receive a number.

## Call contract {#signature}

```erm
!!FU(H3Dlg_SendCmdToItem):P(h3Dlg)/(itemId)/(cmdSubtype)/(param)/(cmdType);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `h3Dlg` | input |
| x2 | `itemId` | input |
| x3 | `cmdSubtype` | input |
| x4 | `param` | input |
| x5 | `cmdType` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2126–2151, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [DLG_CMD_SET_DEF](../../constants/h3-dialog-commands/#const-dlg-cmd-set-def) · [DLG_CMD_SET_PCX](../../constants/h3-dialog-commands/#const-dlg-cmd-set-pcx) · [DLG_CMD_SET_TEXT](../../constants/h3-dialog-commands/#const-dlg-cmd-set-text) · [DLG_CMD_TYPE_DEFAULT](../../constants/h3-dialog-commands/#const-dlg-cmd-type-default) · [NULL](../../constants/universal/#const-null)
