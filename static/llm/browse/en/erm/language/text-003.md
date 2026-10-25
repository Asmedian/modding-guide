# SN:F — calling an export

ID: erm.examples.sn-f
URL: https://asmedian.github.io/modding-guide/en/erm/examples/sn-f/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm, old-help:rec-sn-era.htm, era-changelog:era-iii-changelog.txt, windows-api:getkeystate
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.examples.sn-f 1 -->
## Purpose {#purpose}

SN:F resolves and caches GetKeyState. Copy the result from v1 into the output argument immediately, then restore v1. Export names and ABI cannot be selected by superficial similarity.

## Example {#code}

```erm
ZVSE2
!?FU(MyMod_ReadShift);
!#VA(pressed:x);
!!VR(savedV1:y):Sv1;
!!SN:F^GetKeyState^/160;
!!VR(pressed):Sv1 Sd>>15 &1;
!!VRv1:S(savedV1);
```

## Parameters and result {#contract}

Call `!!FU(MyMod_ReadShift):P?(pressed:y);`. Requires Windows and ERA. UI handlers are local; keyboard state is not automatically synchronized multiplayer gameplay. The example was checked against source but not separately run in game.

## Related {#related}

[SN](../../receivers/sn/) · [Framework function](../../framework/functions/getkeymodsstate/) · [Other examples](../)

## Related commands and tables {#reference-links}

[ERA services, memory and sound (SN)](../../receivers/sn/#command-l-library-handle-ahandle-export-address) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-d-o-x-y-level) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-eaddress-convention-args) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-f-export-args) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-g-label-q) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-h-monname-h-secskill) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-istring-result-t-key-result-name-value) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-m-m-m-index-m-address-index) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-r-old-new) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [ERM debugging and compatibility](../../compatibility/) · [MP3 music (MP)](../../receivers/mp/) · [Creature recruitment (RD)](../../receivers/rd/) · [General game operations (UN)](../../receivers/un/#command-q-1-r) · [Conditions and branches](../../conditions/) · [Loops: re, br, co, and DO](../../loops/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-h-spec-h-art-h-spell) · [Creature table](../../tables/creatures/) · [General game operations (UN)](../../receivers/un/#command-g0-skill-text-z-g1-monster-text-z-g2-hero-field-value) · [Game object table](../../tables/objects/) · [Map objects (OB)](../../receivers/ob/#command-b-h) · [Object-type hints (HT)](../../receivers/ht/) · [Secondary skills](../../tables/secondary-skills/) · [Hero table](../../tables/heroes/) · [Function calls (FU)](../../receivers/fu/#command-e) · [ERM triggers and events](../../triggers/) · [Text resources: ERT, ERS and JSON](../../tables/text-resources/) · [Variables and expressions (VR)](../../receivers/vr/#command-mask-or-xmask-sd-bits-sd-bits) · [Map-cell data (PO)](../../receivers/po/)
<!-- llm:end erm.examples.sn-f 1 -->

# ERA ERM Framework

ID: erm.framework
URL: https://asmedian.github.io/modding-guide/en/erm/framework/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm, era-framework:lib-end--9999-era---stdlib.erm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework 1 -->
## Files and load order {#layout}

Framework requires ERA 3.9.15+. Place the three lib files in Data/s/lib and the final file in Data/s/lib_end, preserving names. Constants and initial handlers must load before mod scripts; final handlers must load afterwards. Do not copy individual functions without their dependencies.

## References {#reference}

[185 functions and handlers](./functions/) · [Events](./events/) · [Globals](./globals/) · [1,838 constants](./constants/)

## Event-local array {#example}

The helpers below create three integers, change the second item, and read the second item; the default lifetime is local.

```erm
ZVSE2
!?FU(MyMod_ArrayExample);
!!FU(NewIntArray):P3/10/?(items:y);
!!SN:V(items)/1/20;
!!SN:V(items)/1/?(second:y);
```

## Implementation status {#review}

The catalog distinguishes public, internal, event-handler, quit-handler and requires-review. The last status explains a concrete discrepancy between code and stated behavior. For example, EnableErrors sets the error-muting flag in the supplied snapshot. This documents the implementation; it does not patch the library.
<!-- llm:end erm.framework 1 -->

# Functions and parameters

ID: erm.functions
URL: https://asmedian.github.io/modding-guide/en/erm/functions/
Part: 1/1
Source references: old-help:rec-fu.htm, old-help:rec-do.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.functions 1 -->
## Declaration and call {#call}

`!?FU(MyMod_Name);` declares a function and `!!FU(MyMod_Name):P...;` calls it. Named functions reduce numeric-ID collisions, but identical names still combine handlers. Use a mod-specific prefix. Classic `!?FU12345;` and `!!FU12345:P;` remain relevant when reading older scripts.

## Argument order {#arguments}

`P` arguments populate `x1..x16` in order. `!#VA(value:x) (result:x);` gives readable names to the first two slots. `!!FU:A?variable;` returns the actual number of supplied arguments. Set optional-argument defaults explicitly using this count; do not rely on incidental contents of omitted slots.

## Output parameters {#return}

Pass a variable with `?` to receive the final value of the corresponding `x` parameter. The function assigns its result using `VR`. `FU:Sindex/?type` distinguishes GET (0), SET (1), and relative assignment (2). The function must define which contract it supports.
```erm
ZVSE2
!?FU(MyMod_Double);
!#VA(value:x) (result:x);
!!VR(result):S(value) *2;

!?FU(OnAfterErmInstructions);
!!FU(MyMod_Double):P21/?(answer:y);
!!IF:M^%(answer)^;
```

## Local state and nested calls {#scope}

Local `y` variables belong to a call. A nested function must not treat the caller’s local index as global storage. Pass values as arguments. String pointers and temporary arrays have their own lifetimes; do not retain an address to a temporary result beyond its owning context.

## Exit and network calls {#exit-network}

`!!FU:E;` exits the current handler or function. `FU:D` invokes a function on the network opponent’s computer and is not equivalent to local `P`. Passing arguments does not automatically synchronize all globals and gameplay changes. Network scenarios must account for `IP` and the event’s execution side.

[FU receiver](../receivers/fu/) · [Framework](../framework/functions/)

## Related commands and tables {#reference-links}

[Repeated function calls (DO)](../receivers/do/#command-p-1-15) · [Function calls (FU)](../receivers/fu/) · [ERM debugging and compatibility](../compatibility/) · [Repeated function calls (DO)](../receivers/do/) · [Loops: re, br, co, and DO](../loops/) · [Function calls (FU)](../receivers/fu/#command-a) · [Function calls (FU)](../receivers/fu/#command-c) · [Function calls (FU)](../receivers/fu/#command-d-1-16) · [Function calls (FU)](../receivers/fu/#command-e) · [Function calls (FU)](../receivers/fu/#command-p-1-16) · [Function calls (FU)](../receivers/fu/#command-s) · [Function handler (FU)](../triggers/fu/) · [Network synchronization (IP)](../receivers/ip/#command-f-1-2-v-1-2) · [Network synchronization (IP)](../receivers/ip/)
<!-- llm:end erm.functions 1 -->

# ERM Hooker — custom events

ID: erm.hooker
URL: https://asmedian.github.io/modding-guide/en/erm/hooker/
Part: 1/1
Source references: erm-forum:un-c-page-1.html, era-changelog:era-iii-changelog.txt, erm-hooker:author-api-1.0.0
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.hooker 1 -->
## When a hook is needed {#purpose}

erm_hooker.era binds a machine-code location to an ERM function. Check the event catalog first: an existing On* event usually provides a more stable contract. Verify hook addresses for the specific EXE and plugins; never select an arbitrary byte inside an instruction.

## Installing and removing {#api}

SetHook(address, handler) returns nonzero on success; an occupied address fails. UnsetHook(address) removes an existing hook and reports whether one existed. Call through SN:E convention 1. The wrappers below do not choose an address: a caller that has verified the build must provide it.

## Wrappers with export checks {#example}

```erm
ZVSE2
!?FU(MyMod_SetHook);
!#VA(address:x) (handler:x) (success:x);
!!VR(success):S0;
!!SN:L^EraPlugins\erm_hooker.era^/?(module:y);
!!FU&(module)=0:E;
!!SN:A(module)/^SetHook^/?(setHook:y);
!!FU&(setHook)=0:E;
!!VR(savedV1:y):Sv1;
!!SN:E(setHook)/1/(address)/(handler);
!!VR(success):Sv1;
!!VRv1:S(savedV1);

!?FU(MyMod_UnsetHook);
!#VA(address:x) (removed:x);
!!VR(removed):S0;
!!SN:L^EraPlugins\erm_hooker.era^/?(module:y);
!!FU&(module)=0:E;
!!SN:A(module)/^UnsetHook^/?(unsetHook:y);
!!FU&(unsetHook)=0:E;
!!VR(savedV1:y):Sv1;
!!SN:E(unsetHook)/1/(address);
!!VR(removed):Sv1;
!!VRv1:S(savedV1);
```

## Handler context {#context}

`!!SN:X?(context:y)/?(executeOriginal:y);` reads the context pointer and whether overwritten code should execute, default 1. Four-byte offsets: EDI 0, ESI 4, EBP 8, ESP 12, EBX 16, EDX 20, ECX 24, EAX 28, RetAddr 32. Disabling original code requires a correct RetAddr. This order differs from some patcher_x86 structures; do not mix them.

## Lifecycle and ownership {#lifetime}

Track successful installation and remove only hooks owned by your mod. The plugin automatically removes hooks on start, load and exit (historically ERA 2.55+). OnGameEnter installation in modern builds handles network reloads; support was fixed in ERA 3.9.14. Plugin 3.0 in ERA 3.9.15 added overlap protection and restoration checks for bytes changed by other code. PrintHooks writes Debug/Era/erm hooks.txt.

## Plugin contract {#evidence}

The API is documented in [Berserker’s documentation reproduced in this post](https://www.h3wog.com/archiver/tid-58865.html); [igrik’s example](https://wforum.heroes35.net/showthread.php?tid=5118&pid=98296#pid98296) also confirms the context. Lifecycle changes were cross-checked against the supplied ERA changelog.
<!-- llm:end erm.hooker 1 -->

# Command and symbol index

ID: erm.index
URL: https://asmedian.github.io/modding-guide/en/erm/index/
Part: 1/1
Source references: era-source:erm.pas, era-framework:lib-9999-era---consts.erm, old-help:cont-list.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.index 1 -->
:::erm
<section class="erm-reference"><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-text"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-1"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-2"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-3"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-4"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-5"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-7"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-8"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-9"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-10"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-11"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-12"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-13"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-14"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-15"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-16"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-17"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-18"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-19"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-20"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-21"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-22"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-23"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-24"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-26"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list-28"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-list"></span></section>
:::

## Topic catalogs {#references}

[Triggers](../triggers/) · [Receivers](../receivers/) · [Functions](../framework/functions/) · [Globals](../framework/globals/) · [Constants](../framework/constants/) · [Tables](../tables/)

## Find a symbol {#catalog}

Filter by code, name or letter. The index includes subcommands, events and aliases, Framework functions, globals and every constant. Exact names are identical in RU and EN.

## Related commands and tables {#reference-links}

[General game operations (UN)](../receivers/un/#command-j3-file-j4-j5) · [Map artifacts and resources (AR)](../receivers/ar/) · [General game operations (UN)](../receivers/un/#command-a-a) · [General game operations (UN)](../receivers/un/) · [Map artifacts and resources (AR)](../receivers/ar/#command-v) · [Map artifacts and resources (AR)](../receivers/ar/#command-x) · [Map artifacts and resources (AR)](../receivers/ar/#command-m-text) · [General game operations (UN)](../receivers/un/#command-j6-class-artifact-j7-slot-artifact) · [Creature banks (CB)](../receivers/cb/) · [Battle configuration (BA)](../receivers/ba/) · [Battle stack (BM)](../receivers/bm/#command-v-z) · [Battle configuration (BA)](../receivers/ba/#command-m-1-2-1-2) · [Battle configuration (BA)](../receivers/ba/#command-q) · [Battlefield operations (BU)](../receivers/bu/#command-s-1-2-3-4-5-6) · [Battle configuration (BA)](../receivers/ba/#command-h) · [Current battle action (BG)](../receivers/bg/#command-a) · [Battle hero actions (BH)](../receivers/bh/#command-m) · [Battle hero actions (BH)](../receivers/bh/#command-c-1-2-3-4) · [Battle hero actions (BH)](../receivers/bh/#command-q-1-2-3) · [Current battle action (BG)](../receivers/bg/#command-n) · [Battle configuration (BA)](../receivers/ba/#command-s) · [Battle configuration (BA)](../receivers/ba/#command-d) · [Battle stack (BM)](../receivers/bm/) · [Battlefield operations (BU)](../receivers/bu/#command-v) · [General game operations (UN)](../receivers/un/#command-j11-j13-k1-k2-m) · [Battle hint text (MM)](../receivers/mm/#command-d) · [Battlefield hexes](../tables/battlefield/) · [Battlefield operations (BU)](../receivers/bu/#command-g) · [Battlefield obstacles](../tables/obstacles/) · [Battlefield setup (BF)](../receivers/bf/#command-o-1-2) · [Battlefield operations (BU)](../receivers/bu/#command-e) · [Battlefield operations (BU)](../receivers/bu/#command-t) · [Battlefield operations (BU)](../receivers/bu/#command-d) · [Battle hint text (MM)](../receivers/mm/) · [Battlefield operations (BU)](../receivers/bu/#command-mz) · [Battle stack (BM)](../receivers/bm/#command-p-r) · [Battlefield setup (BF)](../receivers/bf/#command-c) · [Current battle action (BG)](../receivers/bg/#command-d) · [Battle configuration (BA)](../receivers/ba/#command-b) · [Battle configuration (BA)](../receivers/ba/#command-o-1-2) · [Heroes (HE)](../receivers/he/#command-y-1-2-3-4-z) · [Wandering monsters (MW)](../receivers/mw/) · [Sign and ocean bottle (SG)](../receivers/sg/) · [General game operations (UN)](../receivers/un/#command-v-1-2-3-4-5-6-7-x-1-2) · [Shipyard (SY)](../receivers/sy/) · [Windmill (ML)](../receivers/ml/) · [Water wheel (WM)](../receivers/wm/) · [General game operations (UN)](../receivers/un/#command-g0-skill-text-z-g1-monster-text-z-g2-hero-field-value) · [Object visits (OB)](../triggers/ob/) · [Garrison (GR)](../receivers/gr/) · [Heroes (HE)](../receivers/he/) · [Heroes (HE)](../receivers/he/#command-a) · [Heroes (HE)](../receivers/he/#command-b0-b1-b2-b3) · [Hero interaction permissions (HO)](../receivers/ho/) · [Heroes (HE)](../receivers/he/#command-s-s-s-1-2-1) · [Heroes (HE)](../receivers/he/#command-t-1-2-3-4-5-u-1-2-3) · [Heroes (HE)](../receivers/he/#command-m-m-1) · [Heroes (HE)](../receivers/he/#command-n-o-1-p-1-2-3-4) · [Heroes (HE)](../receivers/he/#command-g-w-1-i-1) · [Heroes (HE)](../receivers/he/#command-c-experience-modes) · [Heroes (HE)](../receivers/he/#command-r-refresh) · [Flags, messages and choices (IF)](../receivers/if/#command-w-x) · [Heroes (HE)](../receivers/he/#command-h-1-2-3) · [Heroes (HE)](../receivers/he/#command-e-2-1-f-1-2-3-4-1) · [Hero interaction permissions (HO)](../receivers/ho/#command-h) · [Heroes (HE)](../receivers/he/#command-l1-file-l2-file-l0-l3-l4-l5-1-2) · [Heroes (HE)](../receivers/he/#command-v-v) · [Heroes (HE)](../receivers/he/#command-x-2-3-4-5-6-7) · [ERA services, memory and sound (SN)](../receivers/sn/#command-h-spec-h-art-h-spell) · [Heroes (HE)](../receivers/he/#command-k-k1) · [Heroes (HE)](../receivers/he/#command-c2-c-1-14-d) · [General game operations (UN)](../receivers/un/#command-j0-spell-j1-level-experience-j2) · [Level-up skill selection (HL)](../receivers/hl/) · [Global events (GE)](../receivers/ge/) · [Towns (CA)](../receivers/ca/) · [Towns (CA)](../receivers/ca/#command-i) · [Towns (CA)](../receivers/ca/#command-m1-1-2-3) · [Towns (CA)](../receivers/ca/#command-h) · [Towns (CA)](../receivers/ca/#command-g-g-1-2-g-1-2-3) · [Town hall (TH)](../triggers/th/) · [General game operations (UN)](../receivers/un/#command-t-town-tier-upgrade-monster-u-type-subtype-count) · [Towns (CA)](../receivers/ca/#command-b) · [Towns (CA)](../receivers/ca/#command-n-text-n-z) · [Towns (CA)](../receivers/ca/#command-t-u) · [Town demolition and building dependencies (CD)](../receivers/cd/) · [Towns (CA)](../receivers/ca/#command-r) · [Towns (CA)](../receivers/ca/#command-o-p-1-2-3) · [Warrior tomb (WT)](../receivers/wt/) · [Hero movement (HM)](../triggers/hm/) · [Tree of knowledge (KT)](../receivers/kt/) · [Flags, messages and choices (IF)](../receivers/if/) · [Flags, messages and choices (IF)](../receivers/if/#command-q-text-q-type-subtype-type-subtype-mode-text) · [Flags, messages and choices (IF)](../receivers/if/#command-g-single-result-mask-title-item1-item12) · [Flags, messages and choices (IF)](../receivers/if/#command-d-1-15-f-1-2-3-4-5-e) · [Creature recruitment (RD)](../receivers/rd/) · [Flags, messages and choices (IF)](../receivers/if/#command-b-1-2-p) · [Flags, messages and choices (IF)](../receivers/if/#command-l-text-m-text-m0-4-text-m1-z) · [Creature dwellings (DW)](../receivers/dw/) · [Supplementary quest log (QW)](../receivers/qw/) · [General game operations (UN)](../receivers/un/#command-r5-r6-r7) · [Saving and loading (GM)](../triggers/gm/) · [Spell attributes (SS)](../receivers/ss/) · [Adventure-map magic (MG)](../triggers/mg/) · [Players (OW)](../receivers/ow/#command-s) · [ERA services, memory and sound (SN)](../receivers/sn/) · [MP3 music (MP)](../receivers/mp/) · [Players (OW)](../receivers/ow/) · [AI destinations (AI)](../receivers/ai/) · [ERM syntax: ZVSE and ZVSE2](../syntax/) · [Variables, strings and arrays](../variables/) · [Learning stone (ST)](../receivers/st/) · [General game operations (UN)](../receivers/un/#command-h-x-y-level-player-radius-s-x-y-level-player-radius) · [General game operations (UN)](../receivers/un/#command-l-x-y-level-time-l-player-obelisk) · [Bits, masks and hexadecimal](../tables/bits/) · [Commanders (CO)](../receivers/co/) · [Object control words](../tables/object-control-words/) · [Campfire (FR)](../receivers/fr/) · [Swan pond (SW)](../receivers/sw/) · [Object control words](../tables/object-control-words/#values) · [Variables and expressions (VR)](../receivers/vr/) · [Variables and expressions (VR)](../receivers/vr/#command-mask-or-xmask-sd-bits-sd-bits) · [Local map events (LE)](../receivers/le/) · [Classic ERM macros (MC)](../receivers/mc/) · [Mines (MN)](../receivers/mn/) · [Mystical garden (GD)](../receivers/gd/) · [Creature-type attributes (MA)](../receivers/ma/) · [ERA services, memory and sound (SN)](../receivers/sn/#command-h-monname-h-secskill) · [Projectiles and beams](../tables/projectiles/) · [Neutral map monsters (MO)](../receivers/mo/) · [Mouse-event context (CM)](../receivers/cm/) · [Lean-to (LN)](../receivers/ln/) · [General game operations (UN)](../receivers/un/#command-n0-z-id-n1-z-id-n2-z-town-building-n3-z-monster-plural-n4-z-skill) · [Obelisk (MT)](../receivers/mt/) · [General game operations (UN)](../receivers/un/#command-q-1-r) · [Map objects (OB)](../receivers/ob/) · [WoG object variants](../tables/wog-object-variants/) · [General game operations (UN)](../receivers/un/#command-i-x-y-level-type-subtype-refresh) · [General game operations (UN)](../receivers/un/#command-o-x-y-level-hint-refresh) · [Army stack experience (EX)](../receivers/ex/) · [Creature experience and bonuses (EA)](../receivers/ea/) · [Map-cell data (PO)](../receivers/po/) · [Pyramids and new objects (PM)](../receivers/pm/) · [Object-type hints (HT)](../receivers/ht/) · [Hero level-up (HL)](../triggers/hl/) · [Players (OW)](../receivers/ow/#command-r) · [Shrine of magic (SR)](../receivers/sr/) · [Network synchronization (IP)](../receivers/ip/) · [Battle configuration (BA)](../receivers/ba/#command-e) · [Function calls (FU)](../receivers/fu/#command-d-1-16) · [Map skeleton (SK)](../receivers/sk/) · [Town events (CE)](../receivers/ce/) · [Spell resistance (MR)](../receivers/mr/) · [Object quests (QU)](../receivers/qu/) · [Treasure chest (CH)](../receivers/ch/) · [Game timers (TM)](../receivers/tm/) · [Wagon (WG)](../receivers/wg/) · [Map tiles (TR)](../receivers/tr/) · [ERM triggers and events](../triggers/) · [Object control words](../tables/object-control-words/#type-62) · [University (UR)](../receivers/ur/) · [Scholar (SC)](../receivers/sc/) · [Physical damage (MF)](../receivers/mf/) · [Flags, messages and choices (IF)](../receivers/if/#command-a0100010000-s0100010000-r0100010000-v) · [Function calls (FU)](../receivers/fu/) · [Repeated function calls (DO)](../receivers/do/) · [Witch hut (WH)](../receivers/wh/) · [Loops: re, br, co, and DO](../loops/) · [ERM debugging and compatibility](../compatibility/) · [Pandora box (PA)](../receivers/pa/)
<!-- llm:end erm.index 1 -->

