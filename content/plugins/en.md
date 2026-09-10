---
{"title":"ERA plugins","summary":"A source-backed map of native ERA extensions: how they load, which API layers they use, and where binary compatibility becomes your responsibility.","translationStatus":"reviewed"}
---

## What a plugin changes {#role}

An ERA plugin is a native Windows module loaded into the Heroes III process. Unlike an ERM script, it can call exported ERA services, subscribe to named events, use the patcher, and work with executable structures. That access enables engine-level changes, but a bad pointer, incorrect calling convention, or incompatible hook can terminate the whole game process.

Use a plugin when the change genuinely needs native code, an ERA event handler, a binary patch, or direct game structures. Prefer resources, JSON localization, or ERM when those layers can express the same behavior with less version coupling.

## How ERA loads plugins {#loading}

The inspected ERA 3.9.30 source uses the `EraPlugins` directory. It loads non-empty `.era` files before WoG initialization, then loads legacy `.dll` plugins after WoG initialization and immediately fires `OnAfterWoG`. The current NH3API ERA wrapper describes `.era` as the modern extension and `.dll` as deprecated.

Do not place both `Name.era` and `Name.dll` in the directory. ERA checks for the same basename with the other extension and treats that pair as a duplicate instead of choosing one silently.

## The working architecture {#architecture}

| Layer | Responsibility |
| --- | --- |
| Plugin artifact | A 32-bit native module placed under `EraPlugins`, normally with the `.era` extension |
| ERA API | Events, localization, ERM integration, savegame sections, resource redirection, diagnostics, and managed patch operations |
| Patcher x86 | Named patch ownership, high- and low-level hooks, reversible patches, and patch diagnostics |
| NH3API | C++17 declarations for game structures and functions, the patcher interface, and an optional ERA module |
| Mod package | The plugin, its data and translations, compatibility notes, and a reproducible way to identify the build |

These layers are related but not interchangeable. NH3API models the executable and wraps integrations; it does not make every hard-coded address portable. ERA APIs are preferable when an exported service already covers the task.

## Choose the narrowest interface {#choice}

Start with the [ERA API](./era-api/) for lifecycle events, translations, settings, save data, and resource services. Add [NH3API](./nh3api/) when you need typed C++ access to game structures or the patcher interface. Keep raw address patches as the last resort and record the exact executable and dependency versions that were tested.

The [getting-started guide](./getting-started/) builds a minimal `.era` module that registers an ERA handler and postpones real work until `OnAfterWoG`.

## Compatibility is part of the feature {#compatibility}

A plugin should declare at least its supported ERA range, target game executable, required plugins or patches, and known conflicts. A build that works with one executable layout is not automatically compatible with another distribution, HD Mod version, or plugin set.

Test from a separate game copy. Keep a baseline without the plugin, add one change at a time, and retain ERA's generated debug information with the exact plugin build. Never ask users to replace unrelated binaries just to hide a compatibility failure.
