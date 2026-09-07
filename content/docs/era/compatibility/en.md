---
{"title":"Mod compatibility and order","summary":"Declare dependencies, priority, and conflicts without relying on accidental load order.","translationStatus":"reviewed"}
---

## Two directions of order {#priority}

The bundled SD Mod Manager documentation highlights an important distinction: a mod with greater priority supplies a resource first, while “loaded after” describes the opposite direction in the displayed load order. If `Mod B` is loaded after `Mod A`, `Mod B` has greater priority and its file wins when both provide the same name.

Record both facts during diagnosis: the visible order and the expected owner of the exact resource. “My mod is last” is not useful without the manager name and complete list.

## compatibility fields {#fields}

| Field | Meaning |
| --- | --- |
| `requires` | Mods without which the current mod cannot run or has no useful meaning. The requirement also affects order. |
| `load_after` | Mods that should have lower priority, allowing the current mod to override matching resources. |
| `incompatible` | Combinations in which the game should not run or the combined result has no useful meaning. |

Values are stable mod directory names. SD Mod Manager also documents special handling for `WoG`: it is implicitly added to `requires` and `load_after` unless those fields are overridden. Verify this behavior against the manager version distributed with your mod.

## Declare rules for a reason {#declare}

A dependency is justified when a mod uses another mod’s resource, event, or configuration. Use `load_after` for an intentional override. Use `incompatible` for a confirmed conflict that order cannot resolve safely.

Do not build a long `load_after` list merely to “always win.” It makes the setup brittle and hides filename conflicts. Document the reason for every list item in the project notes.

## Test a small matrix {#matrix}

Test at least four states: base ERA only; ERA plus your mod; your mod plus every required dependency; and your mod with each likely conflicting mod in both permitted orders. Reuse one map and one startup scenario for every state.

If the problem follows order, identify the exact resource name supplied by both mods. If it happens before the main menu, compare clean and conflicting startup logs. Do not change the order, ERA version, and mod contents at the same time.

## Compatibility report {#report}

A useful report includes the ERA and Mod Manager versions, exact mod names and versions, their order, a minimal reproduction, and the relevant log difference. Include the executable version for binary changes. This turns “does not work together” into a reproducible case and supports a precise rule instead of a guess.

