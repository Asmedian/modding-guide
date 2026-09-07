---
{"title":"Spell power inside combat","summary":"Attacker and defender spell-power fields live in the combat manager. This example reads them without changing permanent hero skills.","translationStatus":"reviewed"}
---

## Purpose and applicability {#purpose}

Attacker and defender spell-power fields live in the combat manager. This example reads them without changing permanent hero skills.

## Code {#code}

```erm
!?FU(MyMod_ReadBattleSpellPower);
!#VA(attacker:x) (defender:x);
!!UN:C6919200/4/?(combat:y);
!!FU&(combat)=0:E;
!!UN:C(combat)/21460/4/?(attacker);
!!UN:C(combat)/21464/4/?(defender);
```

## Version and limitations {#limits}

The address is supported by a historical recipe for h3wog.exe-based WoG/ERA. It has not been executed in the installed game and is not guaranteed for another EXE or plugin. Validate the build and original bytes before use; executable patches can survive map changes. Requires an existing actual-combat manager. Temporary combat values can differ from displayed hero skills.

## Addresses and offsets {#addresses}

`6919200` · `21460` · `21464`

## Provenance and related commands {#sources}

[Berserker, #128056](https://wforum.heroes35.net/showthread.php?tid=5118&pid=128056#pid128056) · [daemon_n, #136063](https://wforum.heroes35.net/showthread.php?tid=5118&pid=136063#pid136063)

[UN:C](../) · [SN](../../receivers/sn/) · [Compatibility](../../compatibility/)
