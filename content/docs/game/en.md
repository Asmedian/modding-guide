---
{"title":"Game architecture for mod authors","summary":"The smallest useful model of startup, virtual resources, and caching for diagnosing a content mod.","translationStatus":"reviewed"}
---

## A useful model {#model}

Most content work does not require a map of every Heroes III memory structure. Four layers are enough: original game files, mod directories and archives, ERA’s lookup layer, and resources already decoded in memory.

Changing a file affects a future lookup, but it does not necessarily replace an object the game already decoded and cached. A reliable test therefore begins with a complete restart.

## Startup stages {#startup}

ERA source initializes subsystems in a sequence: early setup, settings, the virtual file system, additional modules, and events around WoG. A resource may become available only after its archive or redirection rule is registered.

## Resource lookup {#lookup}

The LOD/PAC manager walks registered archives and can resolve name redirections. Configuration under `Data/Redirections` establishes global rules, including a mode for resources that would otherwise be missing. Audio and video fallbacks are checked after media lists load.

## Cache and lifetime {#cache}

`ResLib.pas` describes a shared decoded-resource manager. Entries are indexed by relative path, reference counted, and placed in a collection queue. The practical conclusion is simple: restart the game when testing a replacement instead of judging a screen that was already open.

## Where to stop {#limits}

If a task requires memory addresses, binary patches, or calls to internal functions, it is no longer an ordinary resource replacement. Such changes must be tied to an exact executable version and belong in the future plugin documentation.

