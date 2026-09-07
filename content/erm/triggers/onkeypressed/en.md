---
{"title":"Key press (OnKeyPressed)","summary":"x1 is the key code; x2 blocks the default action (0/1, mutable); x3 is isDown, TRUE only on the initial press and FALSE on auto-repeat. See Framework KEY_ constants.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

x1 is the key code; x2 blocks the default action (0/1, mutable); x3 is isDown, TRUE only on the initial press and FALSE on auto-repeat. See Framework KEY_* constants.

## Declaration {#declaration}

```erm
!?FU(OnKeyPressed);
```

## Identity and compatibility {#identity}

ID `77003`; registered as `TRIGGER_KEYPRESS`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1960) — Added extra parameter to "OnKeyPressed" event. "OnKeyPressed" occurs multiple times, when you hold the key, while it's sometimes necessary to catch only the first time, when key state changes to DOWN and ignore other eve…
- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l2008) — The following improvements were introduced in "Era Erm Framework" mod: - Added new globally saved parameters for "OnKeyPressed" event: i^key_down^: boolean. TRUE only when the key changes its state from UP to DOWN the fi…
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2125) — Event "OnKeyPressed" now handles ALT key.
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2180) — The following improvements were introduced in "Era Erm Framework" mod: - "OnKeyPressed" event and all mouse click events were improved, storing keyboard special keys in global variables. i^key^: Pressed key virtual key c…
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2413) — OnKeyPressed event does not occur anymore in dialogs where an input element has focus. It became possible to handle keyboard safely without routine checks for chat enter/leave events.
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l2947) — Added new events to "Era Erm Framework": "OnKeyPressed_AdvMap", "OnKeyPressed_Battle", "OnKeyPressed_HeroScreen", "OnKeyPressed_HeroMeetingScreen", "OnKeyPressed_Town", occuring right after "OnKeyPressed" events and taki…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3587) — Introduced advanced ERM precompilation mode, called ERM 2.0 and activated via "ZVSE2" first line signature. Main features: - Named local variables to write human readable code instead of cryptic one. Example: !!HE-1:C0/0…
<!-- ERA3-GENERATED:END -->
