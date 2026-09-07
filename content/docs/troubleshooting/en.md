---
{"title":"Troubleshooting","summary":"A repeatable path from a clean startup to a precise report for a conflict or invalid resource.","translationStatus":"reviewed"}
---

## Record a baseline {#baseline}

Before changing anything, record the ERA and game versions, enabled mods, and their order. Run without the mod under development, open the test map, and retain the logs. This baseline separates an installation problem from a new content problem.

If the clean run is already unstable, pause resource work. Updating the platform, changing the mod list, and editing a file in the same test creates three independent causes.

## Reduce the case to one change {#minimal-case}

Keep one mod, one changed resource, and one short scenario. For graphics, use one screen or object; for a table, one row; for mod order, one pair of conflicting directories. Exit the game completely between trials.

Compare the exact path, size, modification time, and checksum as well as the screen. If a loose file works but the archive version does not, the fault is in packaging or the internal path rather than in the asset contents.

## Classify the failure {#classify}

1. **The file was not selected.** Check its name, path, enabled state, priority, and redirections.
2. **The file was selected but cannot be decoded.** Check format, encoding, dimensions, entry counts, and loader-specific constraints.
3. **The file was decoded but the effect stayed stale.** Exclude cache and already-created game objects with a full restart.
4. **The failure depends on another mod.** Find the shared path and test both orders.
5. **The crash happens before the menu.** Compare logs and revert the last independent change.

## Use the matching tool {#tools}

For archives, make a trial export and re-import with MMArchive. Inspect a DEF in Def Preview before validating the build in Heroes3 Def Tool. Edit tables with Txt Tables Editor or Object TXT Files Editor only after preserving the source encoding and structure. `VfsTest.exe` is present as a separate utility in the installed bundle; verify its exact compatibility with your build on a copy of the game.

A tool does not replace a controlled game scenario. Successfully opening a file proves only that this one program could read it.

## Write a useful report {#report}

Include versions, mod list and order, the exact changed path, expected and actual behavior, minimal steps, and the relevant log excerpt. Share a checksum or a small original test file rather than the whole game or a third-party distribution. For a binary patch, always name the EXE version and application method.

A good report lets another person reproduce the fault without guessing and test one claim per run.

