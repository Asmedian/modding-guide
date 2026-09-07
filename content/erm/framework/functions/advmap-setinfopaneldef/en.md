---
{"title":"AdvMap_SetInfoPanelDef","summary":"Shows text and a DEF frame in the map panel, defaulting to 5000 ms. Temporarily replaces and restores two native DEF-name operands. Changes z1/v1; without defName calls the text variant.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Shows text and a DEF frame in the map panel, defaulting to 5000 ms. Temporarily replaces and restores two native DEF-name operands. Changes z1/v1; without defName calls the text variant.

## Call contract {#signature}

```erm
!!FU(AdvMap_SetInfoPanelDef):P(text)/(defName)/(defFrameId)/(timeToDisplay);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `text` | input |
| x2 | `defName` | input |
| x3 | `defFrameId` | input |
| x4 | `timeToDisplay` | output / mutable |

## State and dependencies {#context}

Named globals: [i^radioDlg_captions^](../../globals/#global-i-radiodlg-captions) · [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [i^radioDlg_freeSpaceAlerted^](../../globals/#global-i-radiodlg-freespacealerted) · [s^radioDlg_title^](../../globals/#global-s-radiodlg-title) · [s^temp_text^](../../globals/#global-s-temp-text).

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Related functions {#calls}

[AdvMap_SetInfoPanelText](../advmap-setinfopaneltext/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2404–2455, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ADV_MANAGER](../../constants/game-managers/#const-adv-manager) · [CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [FALSE](../../constants/universal/#const-false) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_STORED](../../constants/erm-commands/#const-m-stored) · [M_STR](../../constants/erm-commands/#const-m-str) · [NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item) · [RADIO_DLG_FLAG_BTN_CANCEL](../../constants/radio-dialogs/#const-radio-dlg-flag-btn-cancel) · [RADIO_DLG_MAX_ITEMS](../../constants/radio-dialogs/#const-radio-dlg-max-items)
