---
{"title":"H3API","summary":"The deprecated Heroes III 3.2 C++ interface: its purpose, integration modes, and a migration path to NH3API.","translationStatus":"reviewed"}
---

## Status: deprecated {#status}

**This guide marks H3API as deprecated.** The page remains for maintaining existing plugins and understanding older code. Use [NH3API](../nh3api/) for a new ERA plugin: it is the actively documented option here, with dedicated ERA integration, modern CMake, and explicit compatibility boundaries.

The original [RoseKavalier/H3API repository](https://github.com/RoseKavalier/H3API) remains a useful historical source. Do not combine H3API and NH3API in one project without carefully checking conflicting declarations and structure layouts.

## Purpose and target {#scope}

H3API is a set of header and source files produced by reverse engineering the Heroes of Might and Magic III version 3.2 executable. It provides C++ descriptions of game structures and functions that were used to build native plugins.

This is a low-level interface to a specific 32-bit program. A matching structure name does not establish compatibility with another executable: verify the target EXE, addresses, sizes, and alignments before using an old plugin.

## Integration modes {#integration}

The repository documents two modes. The header-only option includes the amalgamated file:

```cpp
#include "externals/h3api/single_header/H3API.hpp"
```

Alternatively, H3API can be built as a static library; the project adds the main include directory and links `H3API.lib`:

```cpp
#include <H3API.hpp>
```

The supplied CMake project selects x86 because Heroes III and the described structures depend on 32-bit sizes and alignment.

## Building an old project {#build}

The README gives this basic CMake sequence:

```cmake
cmake ..
cmake --build .. --config Release
```

It lists Visual Studio 2008, 2013, 2015, 2017, and 2019 as tested for building the static library. The author recommends Visual Studio 2015 or newer for fuller C++11 support and better optimization. Those statements describe upstream H3API; they do not guarantee that a particular plugin is compatible with current ERA.

## Moving to NH3API {#migration}

When maintaining an old project, first pin its working H3API revision, compiler, target executable, and baseline build. Migrate in small stages: types and constants, structure access, hooks, and then ERA integration. Compare structure sizes and test on a separate game copy after every stage.

Do not replace includes mechanically: similarly named entities can have different namespaces, contracts, or supported versions. Start with the [NH3API overview](../nh3api/) and prefer the [ERA API](../era-api/) whenever a platform service already solves the task without direct memory access.
