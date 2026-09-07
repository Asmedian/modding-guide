---
{"title":"DL dialog templates","summary":"Text-table structure, element fields and template limitations.","translationStatus":"reviewed"}
---

## Table format {#format}

Use a tab-separated table with at least 14 columns. The first two rows and column 0 are ignored. Keep empty trailing columns: hints need their own field. A # in column 1 starts a dialog or ends the previous one.

## Dialog header {#header}

Columns: 1 `#`, 2 unique ID, 3 X, 4 Y (-1 centered), 5 width, 6 height, 7 maximum item count, 8 player color (-1 current), 9 background PCX (empty for standard), 10 hint-display item ID.

## Items {#items}

Common ordinary-item fields: 1 type, 2 ID, 3 X, 4 Y, 5 width, 6 height. Followed by:

| Type | Remaining fields |
| --- | --- |
| P | PCX, flag 2048, hint |
| D | DEF, frame, flag 16, hint |
| B | DEF, hotkey code, hint |
| T | text, font, color, background, alignment, flag 8, hint |
| S | text, font, color, scroll color (0 normal/other blue), hint |
| E | text, font, hint |
| V | field 5: internal video ID; no dimensions or hint |

Animated type A is unsupported by the legacy format.

## Item behavior {#constraints}

Button DEFs need at least two frames; the second is used while pressed/disabled. Item 30721 handles Escape closure. Only one video is supported, drawn above other items and required to fit the dialog. Legacy S hints work with ID=-1. Do not duplicate dialog IDs across files.

## Related commands and tables {#reference-links}

[Custom dialogs (DL)](../../receivers/dl/#command-a-item-command-value-1) · [Custom dialogs (DL)](../../receivers/dl/#command-c) · [Custom dialogs (DL)](../../receivers/dl/#command-e-h) · [Custom dialogs (DL)](../../receivers/dl/#command-n-template-txt-s) · [Custom dialogs (DL)](../../receivers/dl/#command-p-function) · [Custom dialogs (DL)](../../receivers/dl/) · [ERM debugging and compatibility](../../compatibility/) · [Custom dialog events (DL)](../../triggers/dl/) · [Mouse cursors](../cursors/#c1) · [DL text alignment](../text-alignment/) · [Game videos](../videos/)
