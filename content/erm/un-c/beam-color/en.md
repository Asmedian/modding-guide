---
{"title":"Reading beam color","summary":"For unmodified h3wog.exe: creatures 35..121; 0 green, 1 white, 2 black.","translationStatus":"reviewed"}
---

## Purpose and applicability {#purpose}

For unmodified h3wog.exe: creatures 35..121; 0 green, 1 white, 2 black.

## Code {#code}

```erm
!?FU(MyMod_ReadBeamColor);
!#VA(creature:x) (result:x);
!!VR(result):S2;
!!FU|(creature)<35/(creature)>121:E;
!!UN:C4453793/(creature)/1/?(result);
```

## Version and limitations {#limits}

The address is supported by a historical recipe for h3wog.exe-based WoG/ERA. It has not been executed in the installed game and is not guaranteed for another EXE or plugin. Validate the build and original bytes before use; executable patches can survive map changes. A beam requires creature flag 2048. Changing color does not make a creature a shooter. Recipe by Chortos-2, posted by Ivor.

## Addresses and offsets {#addresses}

`4453793`

## Provenance and related commands {#sources}

[Ivor, #70514](https://wforum.heroes35.net/showthread.php?tid=3727&pid=70514#pid70514)

[UN:C](../) · [SN](../../receivers/sn/) · [Compatibility](../../compatibility/)
