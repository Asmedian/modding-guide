---
{"title":"Getting started with ERA plugins","summary":"Build a minimal 32-bit C++17 `.era` module with CMake and NH3API, then deploy and diagnose it without hiding compatibility assumptions.","translationStatus":"reviewed"}
---

## Prepare an isolated target {#prerequisites}

Use a separate Heroes III + ERA installation for development. The current NH3API line targets the 32-bit Windows x86 executable and requires C++17. For the shortest documented route, install CMake and one supported compiler: MSVC 19.14 or newer, MinGW GCC 9 or newer, or Clang/Clang-CL in the ranges listed by NH3API.

With Visual Studio generators, select the `Win32` platform explicitly. A successful 64-bit DLL build is still unusable inside the 32-bit game process.

## Keep source and delivery separate {#layout}

```text
MyPlugin/
├─ CMakeLists.txt
├─ external/
│  └─ NH3API/
├─ src/
│  └─ dllmain.cpp
└─ dist/
   └─ EraPlugins/
      └─ MyPlugin.era
```

Pin NH3API to a reviewed commit or release instead of silently following a moving branch. Do not store the game installation or proprietary game binaries in the project repository.

## Configure the build {#cmake}

NH3API 1.2.0 exposes the interface target `nh3api`, requires C++17, and builds the optional ERA support module when `NH3API_CMAKE_USE_ERA` is enabled. The module links `era.lib` for MSVC/Clang-CL or `libera.a` for GNU-style toolchains.

```cmake
cmake_minimum_required(VERSION 3.14)
project(MyPlugin LANGUAGES CXX)

set(NH3API_CMAKE_USE_ERA ON CACHE BOOL "Build ERA support module" FORCE)
add_subdirectory(external/NH3API)

add_library(MyPlugin SHARED src/dllmain.cpp)
target_link_libraries(MyPlugin PRIVATE nh3api)
set_target_properties(MyPlugin PROPERTIES
  OUTPUT_NAME "MyPlugin"
  PREFIX ""
  SUFFIX ".era"
)
```

For a Visual Studio toolchain, configure and build an x86 release like this:

```powershell
cmake -S . -B build -A Win32
cmake --build build --config Release
```

## Register, then wait for the lifecycle event {#entry-point}

Keep `DllMain` small. Microsoft documents that it runs while the loader lock is held; postpone file discovery, UI, thread coordination, and other substantial work. The minimal example connects the ERA wrapper and registers a handler, then performs its visible work after ERA fires `OnAfterWoG`.

```cpp
#include <nh3api/era/era.hpp>

namespace
{
void __stdcall OnAfterWoG(Era::TEvent*)
{
    Era::ShowMessage("MyPlugin is active");
}
}

extern "C" NH3API_DLLEXPORT
BOOL APIENTRY DllMain(HINSTANCE module, DWORD reason, LPVOID)
{
    if (reason == DLL_PROCESS_ATTACH)
    {
        Era::ConnectEra(module, "MyPlugin.era");
        Era::RegisterHandler(&OnAfterWoG, "OnAfterWoG");
    }
    return TRUE;
}
```

This verifies loading and event delivery; it is not a reason to begin patching addresses. Remove the dialog once the lifecycle is confirmed.

## Deploy one artifact {#deploy}

Copy the release build to `EraPlugins/MyPlugin.era`. Make sure `MyPlugin.dll` with the same basename is absent: ERA rejects duplicate `.era` and `.dll` variants. Start the same short scenario once without the plugin and once with it.

If loading fails, first check architecture, filename, unresolved runtime dependencies, and the ERA version. If loading succeeds but the handler does not run, verify the extension, event spelling, and that registration completed before `OnAfterWoG`.

## Diagnose before adding hooks {#diagnostics}

Call `Era::GenerateDebugInfo()` from a safe user-triggered or event-driven path when you need ERA's scripts, plugins, patches, and context report. Keep the compiler/linker output and exact NH3API commit with the report. Visual Studio users can also add NH3API's `debugging/nh3api_std.natvis` to inspect its game-compatible container types.

Once the clean module works, continue with the [ERA API map](../era-api/) and only then the [NH3API executable interface](../nh3api/).

## Release checklist {#release}

- Build `Release` for x86 and test the exact delivered file.
- Ship one extension for one basename; prefer `.era`.
- State the tested ERA, executable, NH3API commit, HD Mod, and other required plugins.
- Keep translations and configuration outside the binary where ERA services support them.
- Test install, update, disable, and removal on a clean copy.
- Record every absolute address and why an exported API or named event could not replace it.
