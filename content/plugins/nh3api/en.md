---
{"title":"NH3API","summary":"The NH3API C++17 executable interface, its CMake and ERA modules, supported toolchains, and the compatibility limits a plugin must keep explicit.","translationStatus":"reviewed"}
---

## Scope and target {#scope}

[NH3API](https://github.com/void2012/NH3API) is an open-source C++17 library by void_17 for modding Heroes of Might and Magic III. Its main target is the Windows x86 Complete executable used with HD Mod. The repository describes the library as being based on an IDA database and names recovered in part from the Dreamcast build.

That target matters. The types and wrappers make native work readable, but their layout and addresses still describe a particular executable family. Treat every direct structure access and hook as a binary compatibility claim.

## Repository map {#modules}

| Path | Use |
| --- | --- |
| `nh3api/core.hpp` | Umbrella include for the central game, interface, global, and patcher declarations |
| `nh3api/core/` | Typed subsystems such as adventure, combat, heroes, maps, resources, dialogs, and game-compatible containers |
| `nh3api/era/era.hpp` | Optional ERA III wrapper: events, localization, ERM, persistence, resources, diagnostics, memory, and plugin registration |
| `nh3api/era/era.lib` | ERA import library for MSVC and Clang-CL |
| `nh3api/era/libera.a` | ERA import library for MinGW and GNU-style Clang |
| `nh3api/core/nh3api_std/patcher_x86.hpp` | Patcher x86 interface, hook and patch ownership, and patch diagnostics |
| `debugging/nh3api_std.natvis` | Visual Studio visualization for NH3API container types |

Include only what the module needs. `core.hpp` is the simple starting point; narrower headers can reduce coupling and compilation work later.

## Add the library with CMake {#cmake}

Pin the repository under your source tree or as a submodule, then add its root directory and link the interface target:

```cmake
add_subdirectory(external/NH3API)
target_link_libraries(MyPlugin PRIVATE nh3api)
```

For ERA III support, set the option before `add_subdirectory`:

```cmake
set(NH3API_CMAKE_USE_ERA ON CACHE BOOL "Build ERA support module" FORCE)
add_subdirectory(external/NH3API)
target_link_libraries(MyPlugin PRIVATE nh3api)
```

The current CMake project identifies itself as NH3API 1.2.0, requires CMake 3.14 and C++17, and adds `-m32` for non-MSVC builds. MSVC projects must still select the x86/Win32 platform themselves.

## Use the core and ERA entry points {#includes}

For the executable declarations and patcher:

```cpp
#include <nh3api/core.hpp>
```

For ERA services:

```cpp
#include <nh3api/era/era.hpp>
```

Call `Era::ConnectEra` as early as the minimal DLL entry path permits, then register named handlers and move substantial initialization into a suitable event. The [plugin quick start](../getting-started/) contains a complete minimal skeleton; the [ERA API map](../era-api/) groups the wrapper by responsibility.

## Toolchain support {#toolchains}

| Toolchain | Minimum documented by NH3API 1.2 |
| --- | --- |
| MSVC | 19.14 / Visual Studio 2017 with C++17 |
| MinGW GCC | 9.0 with C++17 |
| MinGW Clang | 9.0 with C++17 |
| Clang-CL | 15.0.0 with Visual Studio 2019 or newer |

The repository documents separate Windows XP-compatible choices, including the `v141_xp` toolset for MSVC. That compiler target is independent of this website's browser baseline and must be tested with the plugin's actual dependencies.

## Patcher workflow {#patcher}

The patcher header instructs a module to acquire `GetPatcher()` once, create a uniquely named `PatcherInstance`, and create patches or hooks through that owner. It exposes high-level hooks, safe/extended low-level hooks, raw writes, apply/undo/destroy operations, blocking, and a patch list dump.

Use the highest-level hook that preserves the original calling contract. Do not copy the README's demonstration address into unrelated code: verify the exact executable bytes and document what owns the address before shipping.

## Debugging and reproducibility {#debugging}

Add `debugging/nh3api_std.natvis` to a Visual Studio project to inspect NH3API containers. For runtime failures, combine the native debugger with ERA's `GenerateDebugInfo` report and the patcher dump. Record the plugin binary hash, compiler, build type, NH3API commit, ERA version, executable, and active plugin list.

The source snapshot used for this page is commit `454cfe2bf34b54155168c17f9bbd627df596ad7a` from 2026-09-06. Re-check upstream declarations and release notes before adopting a newer revision.

## License and compatibility boundary {#license}

The repository declares Apache License 2.0 and also carries an additional legal-information notice in its README. Read the repository's current `LICENSE` and legal section before redistributing source or binaries; this guide does not reinterpret those terms.

NH3API support does not imply that a plugin is compatible with every Heroes III edition or executable. Publish the tested matrix and fail cleanly when a required ERA version, patcher, plugin, or executable signature is absent.
