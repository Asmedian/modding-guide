---
{"title":"Grail coordinates","summary":"Reads Grail data through the game-manager pointer. Latin y variables replace accidental Cyrillic lookalikes in the original post.","translationStatus":"reviewed"}
---

## Purpose and applicability {#purpose}

Reads Grail data through the game-manager pointer. Latin y variables replace accidental Cyrillic lookalikes in the original post.

## Code {#code}

```erm
!?FU(MyMod_ReadGrail);
!#VA(grailX:x) (grailY:x) (grailZ:x) (buried:x);
!!UN:C6919480/4/?(manager:y);
!!FU&(manager)=0:E;
!!UN:C(manager)/128656/2/?(grailX);
!!UN:C(manager)/128658/2/?(grailY);
!!UN:C(manager)/128660/1/?(grailZ);
!!UN:C(manager)/128662/1/?(buried);
```

## Version and limitations {#limits}

The address is supported by a historical recipe for h3wog.exe-based WoG/ERA. It has not been executed in the installed game and is not guaranteed for another EXE or plugin. Validate the build and original bytes before use; executable patches can survive map changes.

## Addresses and offsets {#addresses}

`6919480` · `128656` · `128658` · `128660` · `128662`

## Provenance and related commands {#sources}

[SergOz, #111370](https://wforum.heroes35.net/showthread.php?tid=5118&pid=111370#pid111370)

[UN:C](../) · [SN](../../receivers/sn/) · [Compatibility](../../compatibility/)
