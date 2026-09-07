---
{"title":"Town building-cost tables","summary":"Reads seven resource costs: common buildings 0..16, special buildings 17..25, dwellings 30..43.","translationStatus":"reviewed"}
---

## Purpose and applicability {#purpose}

Reads seven resource costs: common buildings 0..16, special buildings 17..25, dwellings 30..43.

## Code {#code}

```erm
!?FU(MyMod_ReadBuildingCost);
!#VA(townType:x) (building:x) (resource:x) (cost:x);
!!VR(cost):S-1;
!!FU|(townType)<0/(townType)>8/(building)<0/(building)>43/(resource)<0/(resource)>6:E;
!!FU&(building)>=26/(building)<=29:E;
!!if&(building)>=30;
  !!VR(offset:y):S(townType) *14 +(building) -30 *28;
  !!VR(base:y):S6985856;
!!el&(building)>=17;
  !!VR(offset:y):S(townType) *9 +(building) -17 *28;
  !!VR(base:y):S6980420;
!!el;
  !!VR(offset:y):S(building) *28;
  !!VR(base:y):S6979936;
!!en;
!!VR(resourceOffset:y):S(resource) *4;
!!VR(offset):+(resourceOffset);
!!UN:C(base)/(offset)/4/?(cost);
```

## Version and limitations {#limits}

The address is supported by a historical recipe for h3wog.exe-based WoG/ERA. It has not been executed in the installed game and is not guaranteed for another EXE or plugin. Validate the build and original bytes before use; executable patches can survive map changes. This is a price table by town type. Whether construction is allowed also depends on the specific town, day and player; it is not merely a gold check.

## Addresses and offsets {#addresses}

`6979936` · `6980420` · `6985856` · `28`

## Provenance and related commands {#sources}

[igrik, #111440](https://wforum.heroes35.net/showthread.php?tid=5118&pid=111440#pid111440) · [daemon_n, #134580](https://wforum.heroes35.net/showthread.php?tid=5118&pid=134580#pid134580)

[UN:C](../) · [SN](../../receivers/sn/) · [Compatibility](../../compatibility/)

This example skips positions 26–29: the Grail and reserved positions are outside the nine-special-buildings-per-town table used here. It returns -1. The original forum version did not restrict this range.
