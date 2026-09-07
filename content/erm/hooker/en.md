---
{"title":"ERM Hooker — custom events","summary":"Installing hooks, register context and removing code hooks.","translationStatus":"reviewed"}
---

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
