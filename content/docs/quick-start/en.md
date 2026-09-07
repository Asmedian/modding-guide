---
{"title":"Quick Start","summary":"A safe path from a working installation to the first verifiable mod resource.","translationStatus":"reviewed"}
---

## 1. Prepare the environment {#prepare}

Use a separate Heroes III installation with ERA instead of your only playable copy. Keep a known-good state and record the platform version so you can distinguish a project error from behavior that differs between releases.

Start the game once before adding your own changes. If the clean setup does not work, fix that baseline before continuing with mod development.

## 2. Create a minimal mod {#skeleton}

Create a dedicated project directory inside the mods directory. The smallest useful structure depends on your first resource, but separating data and localization early is helpful:

```text
Mods/
└─ MyFirstMod/
   ├─ Data/
   └─ Lang/
```

Do not edit the original game archives for this first check. A separate directory is much easier to disable, compare, or remove without side effects.

## 3. Choose a small test {#first-change}

A good first change is one replaceable text or image resource whose exact name and path you know. Change only one thing per launch. This verifies three conditions at once: the mod is active, the path is correct, and the game can read the format.

## 4. Verify the result {#verify}

Write down the expected effect before starting the game. Check that exact effect, then inspect ERA logs if the launch or replacement fails. If nothing changes:

1. verify the exact file name and case;
2. verify the directory nesting;
3. check whether another mod replaces the same resource;
4. temporarily disable unrelated mods and try again.

## Next step {#next}

Continue with **Mod structure** for the `Data` and `Lang` directories, archives, and precedence rules. Avoid adding several formats or complex tools until one small replacement works reliably.

