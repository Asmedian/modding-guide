---
{"title":"H3API","summary":"An independent C++ library for Heroes III 3.2: purpose, integration, layout, and compatibility.","translationStatus":"reviewed"}
---

## Independent library {#status}

**H3API** is RoseKavalier's independent project for native Heroes III plugins. [NH3API](../nh3api/) has another author, its own codebase, and different C++ requirements. Choose a library based on the target EXE, declarations you need, and a verified build environment.

Source repository: [RoseKavalier/H3API](https://github.com/RoseKavalier/H3API). When combining H3API and NH3API, check conflicting declarations and structure layouts.

## Purpose and target {#scope}

H3API is a set of header and source files produced by reverse engineering the Heroes of Might and Magic III version 3.2 executable. It provides C++ descriptions of game structures and functions that were used to build native plugins.

This is a low-level interface to a specific 32-bit program. A matching structure name does not establish compatibility with another executable: verify the target EXE, addresses, sizes, and alignments.

## Repository layout {#layout}

| Path | Purpose |
| --- | --- |
| `include/H3API.hpp` | Main header for the static library |
| `include/` | Game types, functions, and constants |
| `single_header/H3API.hpp` | Amalgamated header for use without building the library |
| `CMakeLists.txt` | x86 static-library configuration |
| `doc/` | Additional material |

The code uses the `h3` namespace; game structures generally have an `H3` prefix, while constants and enumerations live in `H3Constants`. The author's structure comments document member offsets and alignment.

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

## Building {#build}

The README gives this basic CMake sequence:

```cmake
cmake ..
cmake --build .. --config Release
```

It lists Visual Studio 2008, 2013, 2015, 2017, and 2019 as tested for building the static library. The author recommends Visual Studio 2015 or newer for fuller C++11 support and better optimization. C++11 features in the source are guarded with `_H3API_CPLUSPLUS11_`.

## Checking compatibility {#migration}

For each build, record the H3API revision, compiler, target executable, and verified hooks. The README asks contributors to support changes with addresses and examples and to document member offsets and function parameters.

If you study [NH3API](../nh3api/) for a similar task, check contracts, namespaces, and binary layouts: these independent projects do not offer drop-in header replacements. [ERA API](../era-api/) services are integrated separately when your plugin needs them.
