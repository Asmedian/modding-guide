# Framework events

ID: erm.framework.events
URL: /en/erm/framework/events/
Part: 1/1
Source references: era-framework:lib-9999-era---stdlib.erm, era-framework:lib-end--9999-era---stdlib.erm, era-source:erm.pas, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.events 1 -->
## Loading the library {#installation}

Requires matching Framework lib and lib_end files for ERA 3.9.15+. The initial file prepares context before mod scripts; the final file restores it and dispatches additional events. Do not call *_Quit manually.

## OnAfterErmInited {#onaftererminited}

```erm
!?FU(OnAfterErmInited);
```
No arguments. After the complete OnAfterErmInstructions chain, before OnStartOrLoad(TRUE).

## OnStartOrLoad {#onstartorload}

```erm
!?FU(OnStartOrLoad);
```
x1 is TRUE for a new game, FALSE for loading. Joins temporary-data initialization after start and load.

## OnAfterBattleSetup {#onafterbattlesetup}

```erm
!?FU(OnAfterBattleSetup);
```
No arguments. After OnBeforeBattleUniversal; base coordinates, heroes and battle flags have been refreshed. BM/EA readiness still depends on the combat phase.

## OnKeyPressed_AdvMap {#onkeypressed-advmap}

```erm
!?FU(OnKeyPressed_AdvMap);
```
x1 is key, x2 mutable prevention flag. Filtered by the current main dialog AdvMap. The reliable contract contains two arguments.

## OnKeyPressed_Battle {#onkeypressed-battle}

```erm
!?FU(OnKeyPressed_Battle);
```
x1 is key, x2 mutable prevention flag. Filtered by the current main dialog Battle. The reliable contract contains two arguments.

## OnKeyPressed_HeroScreen {#onkeypressed-heroscreen}

```erm
!?FU(OnKeyPressed_HeroScreen);
```
x1 is key, x2 mutable prevention flag. Filtered by the current main dialog HeroScreen. The reliable contract contains two arguments.

## OnKeyPressed_HeroMeetingScreen {#onkeypressed-heromeetingscreen}

```erm
!?FU(OnKeyPressed_HeroMeetingScreen);
```
x1 is key, x2 mutable prevention flag. Filtered by the current main dialog HeroMeetingScreen. The reliable contract contains two arguments.

## OnKeyPressed_Town {#onkeypressed-town}

```erm
!?FU(OnKeyPressed_Town);
```
x1 is key, x2 mutable prevention flag. Filtered by the current main dialog Town. The reliable contract contains two arguments.

## OnKeyReleased_AdvMap {#onkeyreleased-advmap}

```erm
!?FU(OnKeyReleased_AdvMap);
```
x1 is key, x2 mutable prevention flag. Filtered by the current main dialog AdvMap. The reliable contract contains two arguments.

## OnKeyReleased_Battle {#onkeyreleased-battle}

```erm
!?FU(OnKeyReleased_Battle);
```
x1 is key, x2 mutable prevention flag. Filtered by the current main dialog Battle. The reliable contract contains two arguments.

## OnKeyReleased_HeroScreen {#onkeyreleased-heroscreen}

```erm
!?FU(OnKeyReleased_HeroScreen);
```
x1 is key, x2 mutable prevention flag. Filtered by the current main dialog HeroScreen. The reliable contract contains two arguments.

## OnKeyReleased_HeroMeetingScreen {#onkeyreleased-heromeetingscreen}

```erm
!?FU(OnKeyReleased_HeroMeetingScreen);
```
x1 is key, x2 mutable prevention flag. Filtered by the current main dialog HeroMeetingScreen. The reliable contract contains two arguments.

## OnKeyReleased_Town {#onkeyreleased-town}

```erm
!?FU(OnKeyReleased_Town);
```
x1 is key, x2 mutable prevention flag. Filtered by the current main dialog Town. The reliable contract contains two arguments.

## Extending engine events {#extensions}

OnEveryDay gains five arguments and timer* globals. Keyboard and mouse events gain global context; OnKeyPressed_* forwards only x1/x2, not x3 from the engine event. OnKeyReleased_Quit forwards a third argument absent from the engine contract: do not use it as isDown. Framework’s OnTownHallMouseClick is stale relative to the engine’s OnTownFortMouseClick.

## Contracts and handlers {#links}

[Engine events](../../triggers/) · [Globals](../globals/) · [Library handlers](../functions/#events)

<!-- llm:end erm.framework.events 1 -->

