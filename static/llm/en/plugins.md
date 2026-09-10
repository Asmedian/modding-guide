# ERA plugins

URL: /en/plugins/

A source-backed map of native ERA extensions: how they load, which API layers they use, and where binary compatibility becomes your responsibility.

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

---

# ERA plugin API

URL: /en/plugins/era-api/

A practical map of ERA's exported services for events, localization, ERM, save data, resources, diagnostics, and managed patching.

## Prefer exported behavior {#contract}

The ERA API is the first native interface to check before reading or rewriting game memory. Its exported functions express platform-level contracts: event delivery, translations, ERM interoperation, savegame sections, resource redirection, diagnostics, and patch ownership. The Pascal `Era.pas` unit and NH3API's `nh3api/era/era.hpp` expose the same broad surface in language-appropriate wrappers.

Register one plugin identity. In NH3API, `Era::ConnectEra(module, "Name.era")` calls `CreatePlugin` and fails on a duplicate registration. Keep the real filename stable so reports and patch ownership identify the same module across builds.

## Subscribe to named events {#events}

`RegisterHandler` adds a `stdcall` callback for an event name. The callback receives a `TEvent` containing `Name`, `Data`, and `DataSize`. Treat event data as event-specific: validate the expected size before casting it, and do not retain a pointer beyond the documented lifetime.

```cpp
void __stdcall OnReportVersion(Era::TEvent*)
{
    Era::ReportPluginVersion("MyPlugin v1.0.0");
}

// During minimal plugin registration:
Era::RegisterHandler(&OnReportVersion, "OnReportVersion");
```

`FireEvent` publishes a named event with an optional data pointer and byte count. Use a project-specific name for your own cross-plugin contract and publish the record layout, ownership, and lifetime. For platform events, use the exact names documented by ERA; the [Framework event catalog](../../erm/framework/events/) helps locate existing lifecycle concepts but does not replace the native event-data declaration.

## API families {#families}

| Need | Representative API | Key constraint |
| --- | --- | --- |
| Events | `RegisterHandler`, `FireEvent` | Exact event name, `stdcall` handler, event-specific data layout |
| Localization | `tr`, `trTemp`, `trStatic`, `ReloadLanguageData` | Copy temporary results immediately; do not modify static results |
| ERM bridge | `ExecErmCmd`, `AllocErmFunc`, `FireErmEvent`, `GetArgXVars`, associated variables | Preserve ERM variable and event conventions |
| Save data | `WriteSavegameSection`, `ReadSavegameSection` | Use a unique section name and version your binary payload |
| Resources | `RedirectFile`, `GlobalRedirectFile`, `PcxPngExists`, `LoadImageAsPcx16` | Distinguish current-save redirection from global redirection |
| Configuration | `ReadStrFromIni`, `WriteStrToIni`, `SaveIni`, registry-value helpers | Use platform helpers rather than competing caches |
| Compatibility | `GetVersionNum`, `PluginExists`, `PatchExists` | Check before relying on optional behavior |
| Diagnostics | `NotifyError`, `FatalError`, `GenerateDebugInfo`, `ReportPluginVersion` | Reserve fatal termination for an unrecoverable state |
| Patches | `Hook`, `Splice`, `WriteAtCode`, rollback/free helpers | Attach ownership to the registered plugin and record version assumptions |

This table is a route map, not a substitute for each declaration's parameter and ownership comments. Compile against the pinned header used by the project.

## Respect ownership and lifetime {#memory}

NH3API marks buffers allocated by `era.dll` with `ERA_MEM`; release those through `Era::MemFree`, not the plugin's allocator. `ERA_STATIC` values remain owned by ERA and must not be freed or modified. `trTemp` is a temporary-buffer API, while `trStatic` returns a persistent translation pointer. Copy data when your lifetime is longer than the API guarantee.

Apply the same discipline to savegame payloads and custom event data. A pointer value is not a portable serialization format; write an explicitly sized, versioned record and accept shorter data when migrating an older save.

## Keep patches reversible and attributable {#patching}

Use a named plugin/patcher instance so diagnostics can identify ownership. Prefer event callbacks and exported services over an absolute address. When a patch is unavoidable, verify original bytes, the calling convention, overwritten instruction size, and coexistence with other hooks before applying it.

ERA exposes rollback and release operations for applied patches. Decide whether a patch must be reversible before discarding its tracking structure, and never reuse a pointer after rollback/free.

## Gate optional behavior by version {#versioning}

Check `GetVersionNum` before calling an API introduced after your minimum ERA version. Check `PluginExists` or `PatchExists` before using an optional integration, but do not confuse file presence with semantic compatibility. Report your own version during `OnReportVersion` so a captured installation can be identified without guessing from a DLL timestamp.

The [minimal plugin guide](../getting-started/) shows registration and build setup. The [NH3API page](../nh3api/) explains how the C++ wrapper and executable declarations fit around this API.

---

# Getting started with ERA plugins

URL: /en/plugins/getting-started/

Build a minimal 32-bit C++17 `.era` module with CMake and NH3API, then deploy and diagnose it without hiding compatibility assumptions.

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

---

# NH3API

URL: /en/plugins/nh3api/

The NH3API C++17 executable interface, its CMake and ERA modules, supported toolchains, and the compatibility limits a plugin must keep explicit.

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
