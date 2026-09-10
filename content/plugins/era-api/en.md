---
{"title":"ERA plugin API","summary":"A practical map of ERA's exported services for events, localization, ERM, save data, resources, diagnostics, and managed patching.","translationStatus":"reviewed"}
---

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
