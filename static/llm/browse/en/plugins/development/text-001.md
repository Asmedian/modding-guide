# ERA plugins

ID: plugins.overview
URL: /en/plugins/
Part: 1/1
Source references: era-source:plugin-loader, era-source:era.pas, nh3api:readme, h3api:readme
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body plugins.overview 1 -->
## What a plugin changes {#role}

An ERA plugin is a native Windows module loaded into the Heroes III process. Unlike an ERM script, it can call exported ERA services, subscribe to named events, use the patcher, and work with executable structures. That access enables engine-level changes, but a bad pointer, incorrect calling convention, or incompatible hook can terminate the whole game process.

Use a plugin when the change genuinely needs native code, an ERA event handler, a binary patch, or direct game structures. Prefer resources, JSON localization, or ERM when those layers can express the same behavior with less version coupling.

## How ERA loads plugins {#loading}

The inspected ERA 3.9.30 source uses the `EraPlugins` directory. It loads non-empty `.era` files before WoG initialization, then loads legacy `.dll` plugins after WoG initialization and immediately fires `OnAfterWoG`. The current NH3API ERA wrapper describes `.era` as the modern extension and `.dll` as deprecated.

Do not place both `Name.era` and `Name.dll` in the directory. ERA checks for the same basename with the other extension and treats that pair as a duplicate instead of choosing one silently.

## The working architecture {#architecture}

| Layer | Responsibility |
| --- | --- |
| Plugin | A 32-bit native module placed under `EraPlugins`, normally with the `.era` extension |
| ERA API | Events, localization, ERM integration, savegame sections, resource redirection, diagnostics, and managed patch operations |
| Patcher x86 | Named patch ownership, high- and low-level hooks, reversible patches, and patch diagnostics |
| NH3API | C++17 declarations for game structures and functions, the patcher interface, and an optional ERA module |
| H3API | Independent C++ library describing the Heroes III 3.2 executable |
| Mod package | The plugin, its data and translations, compatibility notes, and a reproducible way to identify the build |

NH3API models the executable and wraps integrations; it does not make every hard-coded address portable. H3API is a separate library with its own layout and build requirements. Use ERA APIs when an exported service covers the task.

## Choose the narrowest interface {#choice}

Start with the [ERA API](./era-api/) for lifecycle events, translations, settings, save data, and resource services. For typed C++ access to game structures, study the independent [H3API](./h3api/) and [NH3API](./nh3api/) libraries and select one for your build environment. Raw address patches require verification against the exact executable and dependency versions.

The [getting-started guide](./getting-started/) builds a minimal `.era` module that registers an ERA handler and postpones real work until `OnAfterWoG`.

## Compatibility is part of the feature {#compatibility}

It is recommended to state the minimum supported ERA version in plugin code, and the minimum HD Mod version if the plugin depends on it.

Test from a separate game copy. Keep a baseline without the plugin, add one change at a time, and retain ERA's generated debug information with the exact plugin build. Never ask users to replace unrelated binaries just to hide a compatibility failure.
<!-- llm:end plugins.overview 1 -->

# ERA plugin API

ID: plugins.era-api
URL: /en/plugins/era-api/
Part: 1/1
Source references: era-source:era.pas, era-source:plugin-exports, era-source:plugin-loader, nh3api:era-header
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body plugins.era-api 1 -->
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
<!-- llm:end plugins.era-api 1 -->

# Getting started with ERA plugins

ID: plugins.getting-started
URL: /en/plugins/getting-started/
Part: 1/1
Source references: era-source:plugin-loader, nh3api:readme, nh3api:cmake, nh3api:era-header, windows-api:dll-best-practices
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body plugins.getting-started 1 -->
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

## Deploy one plugin {#deploy}

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
<!-- llm:end plugins.getting-started 1 -->

