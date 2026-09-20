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

| Error | Description | Example |
| --- | --- | --- |
| ERM script error | The game reports the exact file and line containing the error. Correct the syntax indicated by the message. | ![ERA dialog identifying an ERM error and line number](../../../assets/diagnostics/screen-2.png) |
| Missing resource | The game reports the type and name of a resource it could not load. Check the filename requested by the script and that the resource exists in your mod archives. | ![ResourceManager cannot find a DEF resource](../../../assets/diagnostics/screen-1.png) |
| No visible change after an edit | Press `F12` to reload text and scripts during the game. Restart the game for other changes. | The old resource still appears after editing it. |
| Text displays incorrectly | For JSON, check file validity and whether the key used by the code exists in the file. | ![A localization key appears instead of its text in game](../../../assets/diagnostics/screen-3.png) |
| Game crashes on startup | A replacement text resource may be damaged: check the number of rows and their terminating characters. An invalid plugin or patch inside the mod is another possibility. | The game closes during startup. |
| Game closes without a notice | A possible stack overflow can result from a function recursively calling itself until the client closes immediately. Check the call chain. | The client exits without an error dialog. |

## Use the matching tool {#tools}

For archives, make a trial export and re-import with MMArchive. Inspect a DEF in Def Preview before validating the build in Heroes3 Def Tool. Edit tables with Txt Tables Editor or Object TXT Files Editor only after preserving the source encoding and structure.

A tool does not replace a controlled game scenario. Successfully opening a file proves only that this one program could read it.

## Write a useful report {#report}

Include versions, mod list and order, the exact changed path, expected and actual behavior, minimal steps, and the relevant log excerpt.

A good report lets another person reproduce the fault without guessing and test one claim per run.
