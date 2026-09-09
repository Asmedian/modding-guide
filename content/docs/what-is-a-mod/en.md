---
{"title":"What Is a Mod?","summary":"What a Heroes III mod contains, how ERA loads its files, and why changes should remain separate from the original game.","translationStatus":"reviewed"}
---

## Definition {#definition}

A **mod** is a self-contained set of files that changes or extends the game: text, images, audio, maps, data tables, ERM scripts, and native plugins. It may replace one resource or introduce an entire gameplay system.

In ERA, a mod lives in its own directory under `Mods`. The platform loads its resources at startup and lets the game use them in place of matching original files. The base installation therefore remains unchanged.

## What a mod can contain {#contents}

- a `Data` directory with game resources and archives;
- a `Lang` directory with localized text;
- ERM scripts and configuration;
- plugins and supporting libraries when resource replacement is not enough;
- documentation, licensing, and compatibility notes.

The exact set depends on the goal. A simple translation needs no native code, while a complex mechanic may combine ERM with a plugin.

## Why isolation matters {#isolation}

Do not overwrite original game files by hand. A separate directory lets you enable or disable a mod, control loading order, diagnose conflicts, and move the project between installations. It also makes updates and removal predictable.

## Where to begin {#first-step}

Start with one small change whose result is easy to verify. Once it works reliably, continue with directory structure, resource precedence, and more advanced tools.
