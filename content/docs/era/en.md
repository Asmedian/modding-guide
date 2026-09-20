---
{"title":"The ERA platform","summary":"ERA’s role between Heroes III, mods, resources, and extensions during game startup.","translationStatus":"reviewed"}
---

## What ERA does {#role}

ERA extends the startup and runtime behavior of Heroes III. It initializes its own subsystems, loads settings, establishes a virtual resource layer, and emits lifecycle events. For a content mod author, the practical result is that changes can remain separate from the original game files.

This does not mean every file can live anywhere. The resource name, supported format, directory, and load order still decide whether a replacement is found.

## Virtual resources {#vfs}

The archive manager loads extra PAC files from `Data`, searches registered archives, and applies resource redirections. A separate resource manager caches decoded data and tracks active references. “Where is the file stored?” and “Which resource is the game using?” are therefore related but distinct questions.
