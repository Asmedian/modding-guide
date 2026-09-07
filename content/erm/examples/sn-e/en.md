---
{"title":"SN:E — calling by address","summary":"Resolve GetKeyState from user32.dll, check the export, then call with left Shift code 160. The pressed state is bit 15 of the SHORT result; the example does not mutate game state.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Resolve GetKeyState from user32.dll, check the export, then call with left Shift code 160. The pressed state is bit 15 of the SHORT result; the example does not mutate game state.

## Example {#code}

```erm
ZVSE2
!?FU(MyMod_ReadShift);
!#VA(pressed:x);
!!VR(pressed):S0;
!!SN:L^user32.dll^/?(module:y);
!!FU&(module)=0:E;
!!SN:A(module)/^GetKeyState^/?(getKeyState:y);
!!FU&(getKeyState)=0:E;
!!VR(savedV1:y):Sv1;
!!SN:E(getKeyState)/1/160;
!!VR(pressed):Sv1 Sd>>15 &1;
!!VRv1:S(savedV1);
```

## Parameters and result {#contract}

Call `!!FU(MyMod_ReadShift):P?(pressed:y);`. Requires Windows and ERA. UI handlers are local; keyboard state is not automatically synchronized multiplayer gameplay. The example was checked against source but not separately run in game.

## Related {#related}

[SN](../../receivers/sn/) · [Framework function](../../framework/functions/getkeymodsstate/) · [Other examples](../)

## Related commands and tables {#reference-links}

[ERA services, memory and sound (SN)](../../receivers/sn/#command-l-library-handle-ahandle-export-address) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-d-o-x-y-level) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-eaddress-convention-args) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-f-export-args) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-g-label-q) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-h-monname-h-secskill) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-istring-result-t-key-result-name-value) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-m-m-m-index-m-address-index) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-r-old-new) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [ERM debugging and compatibility](../../compatibility/) · [MP3 music (MP)](../../receivers/mp/) · [Creature recruitment (RD)](../../receivers/rd/) · [General game operations (UN)](../../receivers/un/#command-q-1-r) · [Conditions and branches](../../conditions/) · [Loops: re, br, co, and DO](../../loops/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-h-spec-h-art-h-spell) · [Creature table](../../tables/creatures/) · [General game operations (UN)](../../receivers/un/#command-g0-skill-text-z-g1-monster-text-z-g2-hero-field-value) · [Game object table](../../tables/objects/) · [Map objects (OB)](../../receivers/ob/#command-b-h) · [Object-type hints (HT)](../../receivers/ht/) · [Secondary skills](../../tables/secondary-skills/) · [Hero table](../../tables/heroes/) · [Function calls (FU)](../../receivers/fu/#command-e) · [ERM triggers and events](../../triggers/) · [Text resources: ERT, ERS and JSON](../../tables/text-resources/) · [Variables and expressions (VR)](../../receivers/vr/#command-mask-or-xmask-sd-bits-sd-bits) · [Map-cell data (PO)](../../receivers/po/)
