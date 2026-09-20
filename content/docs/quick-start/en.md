---
{"title":"Quick Start","summary":"From an installed ERA game to the first working ERM script in your own mod.","translationStatus":"reviewed"}
---

## 1. Prepare the environment {#prepare}

If you do not have ERA and the tools yet, start with [Installation](../era/installation/). Use a separate working Heroes III installation with ERA and confirm that the game starts before adding your mod.

## 2. Create the mod directory {#skeleton}

Create a new directory for your mod named `MyFirstMod` inside `Mods`. Avoid Cyrillic characters and special characters in the directory name.

```text
Mods/
└─ MyFirstMod/
   └─ Data/
      └─ s/
```

Do not edit the original game archives: a separate mod directory is easier to disable and test.

## 3. Enable the mod {#enable}

Open Mod Manager and enable `MyFirstMod`. Confirm that it appears in the active mod list; otherwise the game will not load its files.

## 4. Add the first script {#first-change}

Create `example.erm` with this ERM code:

```erm
ZVSE2
!#IF:M^Hello World!^;
```

You can also use the game entry event handler. Both variants display the same message:

```erm
ZVSE2
!?FU(OnGameEnter);
!!IF:M^Hello World!^;
```

Adding a prefix to the filename is recommended, for example `mfm_example.erm` (an abbreviation of the mod name). Files with identical names at identical paths in different mods override one another. Place the file under `Mods/MyFirstMod/Data/s/`.

## 5. If it does not work {#verify}

You can test the example when starting any map; start a new game. Before launching, note the expected result: a “Hello World!” message. If it does not appear:

1. confirm that `MyFirstMod` is enabled in Mod Manager;
2. check the exact filename and extension;
3. check the directory nesting: `Mods/MyFirstMod/Data/s/mfm_example.erm` if you used the recommended name;
4. check whether another mod overrides the same file;
5. inspect any error message and the [troubleshooting guide](../troubleshooting/).

## Next step {#next}

Continue with [Mod structure](../era/mod-structure/) to learn what the directories contain and where other resources belong.
