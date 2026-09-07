---
{"title":"Reading game resolution","summary":"Reads width and height from the two-byte fields used by the legacy HD implementation.","translationStatus":"reviewed"}
---

## Purpose and applicability {#purpose}

Reads width and height from the two-byte fields used by the legacy HD implementation.

## Code {#code}

```erm
!?FU(MyMod_ReadScreenSize);
!#VA(width:x) (height:x);
!!UN:C4199496/2/?(width);
!!UN:C4199503/2/?(height);
```

## Version and limitations {#limits}

The address is supported by a historical recipe for h3wog.exe-based WoG/ERA. It has not been executed in the installed game and is not guaranteed for another EXE or plugin. Validate the build and original bytes before use; executable patches can survive map changes.

## Addresses and offsets {#addresses}

`4199496` · `4199503`

## Provenance and related commands {#sources}

[igrik, #97016](https://wforum.heroes35.net/showthread.php?tid=5118&pid=97016#pid97016)

[UN:C](../) · [SN](../../receivers/sn/) · [Compatibility](../../compatibility/)
