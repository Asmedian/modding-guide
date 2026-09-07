---
{"title":"Reading projectile type","summary":"For unmodified h3wog.exe: creatures 2..197, one byte per entry. The example only reads the value.","translationStatus":"reviewed"}
---

## Purpose and applicability {#purpose}

For unmodified h3wog.exe: creatures 2..197, one byte per entry. The example only reads the value.

## Code {#code}

```erm
!?FU(MyMod_ReadProjectile);
!#VA(creature:x) (result:x);
!!VR(result):S16;
!!FU|(creature)<2/(creature)>197:E;
!!UN:C7961526/(creature)/1/?(result);
```

## Version and limitations {#limits}

The address is supported by a historical recipe for h3wog.exe-based WoG/ERA. It has not been executed in the installed game and is not guaranteed for another EXE or plugin. Validate the build and original bytes before use; executable patches can survive map changes. Type 16 requires an empty-name DEF; missing it crashes shooting. Original formula: creature + 7961526. Recipe by Chortos-2, posted by Ivor; limits come from allowed post 70514.

## Addresses and offsets {#addresses}

`7961526`

## Provenance and related commands {#sources}

[Ivor, #70514](https://wforum.heroes35.net/showthread.php?tid=3727&pid=70514#pid70514)

[UN:C](../) · [SN](../../receivers/sn/) · [Compatibility](../../compatibility/)

## Related commands and tables {#reference-links}

[Creature table](../../tables/creatures/)
