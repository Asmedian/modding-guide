# Framework functions

ID: erm.framework.functions
URL: /en/erm/framework/functions/
Part: 1/2
Source references: era-framework:lib-9999-era---stdlib.erm, era-framework:lib-end--9999-era---stdlib.erm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.functions 1 -->
## Reading the reference {#contract}

All 185 function declarations were examined as complete bodies from both stdlib files. Event/final handlers are separated from callable helpers. `requires-review` identifies a specific discrepancy or risk explained on its page. Pass output arguments with `?`; never retain temporary string/array addresses across events.

## Internal functions {#internal}

| Function | Status | Purpose |
| --- | --- | --- |
| [ClearEventChainData](./cleareventchaindata/) | internal | Clears the internal event-context stack and its position when loading a save. |
| [SaveEventData](./saveeventdata/) | internal | Pushes integer arguments onto the event stack. RestoreEventData must receive the same number of outputs in the same order. A zero-argument call exits before RestoreErmTracking. |
| [RestoreEventData](./restoreeventdata/) | internal | Restores integers to ? outputs. This snapshot reads savedNumArgs but repeats the buffer-size check instead of validating it. Save/restore calls must match exactly. |
| [SavePrevKeyModsState](./saveprevkeymodsstate/) | internal | Saves 11 key and modifier globals for a nested event. |
| [RestorePrevKeyModsState](./restoreprevkeymodsstate/) | internal | Restores key and modifier globals after a nested event. |
| [GetKeyModsState](./getkeymodsstate/) | internal | Polls left/right Alt, Ctrl and Shift with GetKeyState and updates key_*; each combined flag is the OR of both sides. |
| [CollectMouseEventData](./collectmouseeventdata/) | internal | Copies CM context to mouse_* and dlg_action. Exit-button release is normalized to ordinary LMB release; a DL keyboard event places its key code in key. |
| [SavePrevMouseEventData](./saveprevmouseeventdata/) | internal | Saves/restores ten mouse_* values. mouse_hero_1 and dlg_action are not included, so the pair does not restore the entire context. |
| [RestorePrevMouseEventData](./restoreprevmouseeventdata/) | internal | Saves/restores ten mouse_* values. mouse_hero_1 and dlg_action are not included, so the pair does not restore the entire context. |
| [EnterMouseEvent](./entermouseevent/) | internal | Saves previous keyboard/mouse context, then reads modifiers and CM for the new event. |
| [LeaveMouseEvent](./leavemouseevent/) | internal | Restores mouse context followed by keyboard context from the final handlers. |
| [CompareStrings_Bridge_INTERNAL](./comparestrings-bridge-internal/) | internal | String-comparator bridge: converts addresses to ERM strings and invokes the callback with state and an output. A null address becomes an empty string. |

## Event handlers {#events}

| Function | Status | Purpose |
| --- | --- | --- |
| [OnSavegameRead](./onsavegameread/) | event-handler | Clears event-chain state after save data is read. |
| [OnKeyPressed](./onkeypressed/) | event-handler | Saves keyboard context and updates key/modifiers. KeyPressed also stores isDown; the final handler restores previous state. |
| [OnKeyReleased](./onkeyreleased/) | event-handler | Saves keyboard context and updates key/modifiers. KeyPressed also stores isDown; the final handler restores previous state. |
| [OnAdventureMapRightMouseClick](./onadventuremaprightmouseclick/) | event-handler | Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id. |
| [OnTownMouseClick](./ontownmouseclick/) | event-handler | Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id. |
| [OnHeroScreenMouseClick](./onheroscreenmouseclick/) | event-handler | Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id. |
| [OnHeroesMeetScreenMouseClick](./onheroesmeetscreenmouseclick/) | event-handler | Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id. |
| [OnBattleScreenMouseClick](./onbattlescreenmouseclick/) | event-handler | Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id. |
| [OnAdventureMapLeftMouseClick](./onadventuremapleftmouseclick/) | event-handler | Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id. |
| [OnRecruitDlgMouseClick](./onrecruitdlgmouseclick/) | event-handler | Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id. |
| [OnTownHallMouseClick](./ontownhallmouseclick/) | event-handler | Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id. |
| [OnKingdomOverviewMouseClick](./onkingdomoverviewmouseclick/) | event-handler | Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id. |
| [OnBattleMouseHint](./onbattlemousehint/) | event-handler | Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id. |
| [OnTownMouseHint](./ontownmousehint/) | event-handler | Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id. |
| [OnCustomDialogEvent](./oncustomdialogevent/) | event-handler | Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id. |
| [OnAfterErmInstructions](./onaftererminstructions/) | event-handler | Creates the Framework daily timer and resets last-day tracking. |
| [OnEveryDay](./oneveryday/) | event-handler | Adds day, weekDay (1..7), once, owner, isAi arguments. once is TRUE only for the first invocation that day, not for every player. |
| [OnBeforeBattle](./onbeforebattle/) | event-handler | Resets battle_round to INT_MIN before actual combat. |
| [OnBeforeBattleUniversal](./onbeforebattleuniversal/) | event-handler | Refreshes battle_* and resets current/acting stack context. May run in theoretical AI combat with no combat manager. |
| [OnSetupBattlefield](./onsetupbattlefield/) | event-handler | Refreshes battle_* during battlefield setup. |
| [OnBattleRound](./onbattleround/) | event-handler | Updates battle_round from the current round context. |
| [OnBeforeBattleStackTurn](./onbeforebattlestackturn/) | event-handler | Stores activeStack in battle_current_stack. |
| [OnBattleStackObtainsTurn](./onbattlestackobtainsturn/) | event-handler | Converts side/index to a global stack ID and accounts for hypnosis when determining the current side. |
| [OnBeforeBattleAction](./onbeforebattleaction/) | event-handler | Reads BG:N/Q into battle_acting_stack/side and updates visible/quick combat flags. |
| [OnStartOrLoad](./onstartorload/) | event-handler | Updates maxArtifacId, maxHeroId, maxMonsterId, maxSpellId. The source spells maxArtifacId without the second t. |
| [OnBattleReplay](./onbattlereplay/) | event-handler | Resets round/acting stack and refreshes combat parameters for replay. |
| [OnAfterErmInstructions_Quit](./onaftererminstructions-quit/) | quit-handler | Final handler for OnAfterErmInstructions: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnAfterLoadGame_Quit](./onafterloadgame-quit/) | quit-handler | Final handler for OnAfterLoadGame: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnKeyPressed_Quit](./onkeypressed-quit/) | quit-handler | Final handler for OnKeyPressed: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnKeyReleased_Quit](./onkeyreleased-quit/) | quit-handler | Final handler for OnKeyReleased: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnAdventureMapRightMouseClick_Quit](./onadventuremaprightmouseclick-quit/) | quit-handler | Final handler for OnAdventureMapRightMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnTownMouseClick_Quit](./ontownmouseclick-quit/) | quit-handler | Final handler for OnTownMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnHeroScreenMouseClick_Quit](./onheroscreenmouseclick-quit/) | quit-handler | Final handler for OnHeroScreenMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnHeroesMeetScreenMouseClick_Quit](./onheroesmeetscreenmouseclick-quit/) | quit-handler | Final handler for OnHeroesMeetScreenMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnBattleScreenMouseClick_Quit](./onbattlescreenmouseclick-quit/) | quit-handler | Final handler for OnBattleScreenMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnAdventureMapLeftMouseClick_Quit](./onadventuremapleftmouseclick-quit/) | quit-handler | Final handler for OnAdventureMapLeftMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnRecruitDlgMouseClick_Quit](./onrecruitdlgmouseclick-quit/) | quit-handler | Final handler for OnRecruitDlgMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnTownHallMouseClick_Quit](./ontownhallmouseclick-quit/) | quit-handler | Final handler for OnTownHallMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnKingdomOverviewMouseClick_Quit](./onkingdomoverviewmouseclick-quit/) | quit-handler | Final handler for OnKingdomOverviewMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnBattleMouseHint_Quit](./onbattlemousehint-quit/) | quit-handler | Final handler for OnBattleMouseHint: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnTownMouseHint_Quit](./ontownmousehint-quit/) | quit-handler | Final handler for OnTownMouseHint: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnCustomDialogEvent_Quit](./oncustomdialogevent-quit/) | quit-handler | Final handler for OnCustomDialogEvent: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnBeforeBattle_Quit](./onbeforebattle-quit/) | quit-handler | Final handler for OnBeforeBattle: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |
| [OnBeforeBattleUniversal_Quit](./onbeforebattleuniversal-quit/) | quit-handler | Final handler for OnBeforeBattleUniversal: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context. |

## Arrays {#arrays}

| Function | Status | Purpose |
| --- | --- | --- |
| [NewIntArray](./newintarray/) | public | Creates an integer array: P?result, Psize/?result, or Psize/fill/?result. Storage may follow the output; the default is M_TRIGGER_LOCAL, extended to the caller context. Default fill is 0. |
| [NewStrArray](./newstrarray/) | public | Creates a string array using the NewIntArray overloads. Fill is a string, empty by default. Returns an array ID, not a memory address. |
| [Array_Push](./array-push/) | public | Appends up to 15 values and grows the array. Values must match its element type. An invalid array is skipped. |
| [Array_Pop](./array-pop/) | public | Removes trailing elements; up to 15 outputs receive values from last to first. With no outputs, removes one element. Missing values become 0 or empty strings. |
| [Array_Move](./array-move/) | requires-review | Moves length elements from offset to destInd within an array without resizing; handles overlap and clips at the end. This snapshot declares destInd with !#VR instead of !#VA: verify the library correction before use. |
| [Array_Splice](./array-splice/) | requires-review | Deletes a range and inserts up to 13 values, resizing the array. Negative startIndex counts from the end; omitted numItemsToDelete removes the remainder, while a negative count preserves that many trailing items. Depends on Array_Move. |
| [Array_Copy](./array-copy/) | public | Replaces dstArray with srcArray contents and resizes it. Both arrays must exist and share an element type. |
| [Array_Clone](./array-clone/) | public | Creates an array copy owned by the caller trigger and returns its ID. Strings are copied as values. |
| [Array_Merge](./array-merge/) | public | Appends one or more arrays to dstArray. All element types must match; the destination is modified. |
| [Array_Slice](./array-slice/) | public | Copies a range to a new array. Negative start/count mean an end-relative start/trailing exclusion. Default storage is M_TRIGGER_LOCAL. An empty or invalid source returns NULL; check the result. |
| [Array_Join](./array-join/) | public | Joins integer or string elements using gluePtr, empty by default. Returns an ERM string and uses/clears s^result^ and s^temp^. |
| [Array_Sort](./array-sort/) | public | Sorts an array or inclusive startInd..endInd range in ascending order. Defaults to 0..size-1; bounds are clipped. |
| [Array_CustomSort](./array-customsort/) | public | Stable sort using callback(value1,value2,state,?result), with negative/zero/positive results defining order. String values are z indices. State defaults to 0; the inclusive range defaults to the entire array. |
| [Array_SortedUnique](./array-sortedunique/) | public | Sorts an integer array and removes duplicates, shrinking it. String arrays are rejected. |
| [Array_Shuffle](./array-shuffle/) | public | Shuffles items in place using VR:R and swaps. String pointers are swapped without copying text. Verify RNG synchronization for multiplayer logic. |
| [Array_Revert](./array-revert/) | public | Reverses the entire array or an inclusive range, defaulting to 0..size-1. Supports integers and strings. |
| [Array_Fill](./array-fill/) | public | Fills an integer array with startValue, startValue+step…; step defaults to 0. The inclusive range defaults to the whole array. It writes raw 32-bit values; do not pass a string array. |
| [Array_Resize](./array-resize/) | public | Resizes an array. New items receive 0/empty text or fillValue; existing items remain, truncated items are removed. |
| [Array_EnsureMinSize](./array-ensureminsize/) | public | Grows an array to minSize when needed and fills new items. Never shrinks it. |
| [Array_CountValue](./array-countvalue/) | public | Returns the number of value matches. For strings, caseInsensitive defaults to FALSE; uses lstrcmpA/lstrcmpiA. |
| [Array_IndexOf](./array-indexof/) | public | Returns the first matching index or -1. Integers compare exactly; strings optionally use caseInsensitive. |
| [Array_Find](./array-find/) | public | Calls callback(value,?found,listId,customArg) until the first TRUE. Returns an index or -1; string values are ERM strings. found and optional customArg default to 0. |

## Numbers, bits and randomness {#math}

| Function | Status | Purpose |
| --- | --- | --- |
| [Pow](./pow/) | public | Exponentiation. Both inputs and output are floats; the result is copied from e1 with VR:C without numeric conversion. |
| [Sqrt](./sqrt/) | public | Float square root. Input/output are floating point and e1 changes. Negative inputs have no real square root. |
| [IntLog2](./intlog2/) | public | Returns ceil(log2(value)), or 0 when value<=0. Also used to identify a single set bit. |
| [ConstructBitMask](./constructbitmask/) | public | Combines up to 15 bit positions 0..31 into a mask; the last argument is the output. Repeated positions do not double a bit because OR is used. Requires a position and an output. |
| [DeconstructBitMask](./deconstructbitmask/) | public | Returns a new local integer array of set-bit positions 0..31, with lifetime extended to the caller context. |
| [PackUnion](./packunion/) | public | PackUnion takes value/width pairs and a final ?result; UnpackUnion takes packedValue and ?value/width pairs. Fields start at the low bit, totaling at most 32. Checks for widths 0 and 32 differ from the stated 1..32 contract; use positive fields below 32 bits and validate the total. |
| [UnpackUnion](./unpackunion/) | public | PackUnion takes value/width pairs and a final ?result; UnpackUnion takes packedValue and ?value/width pairs. Fields start at the low bit, totaling at most 32. Checks for widths 0 and 32 differ from the stated 1..32 contract; use positive fields below 32 bits and validate the total. |
| [Tm32Encode](./tm32encode/) | public | Reversible 32-bit mixing, inverted by Tm32Decode. Changes fast variables f and g. This is not encryption. |
| [Tm32Decode](./tm32decode/) | public | Inverts Tm32Encode for a 32-bit value. Changes f and g. |
| [Hash32](./hash32/) | public | Hashes dataLen bytes at data (or a string) into 32 bits. The caller must supply accessible memory and a valid length; no cryptographic properties are promised. |
| [MakeRngSeed](./makerngseed/) | public | Derives a deterministic seed from up to 15 integers; the last argument is the output. The same input sequence produces the same seed. |
| [SplitMix32](./splitmix32/) | public | P?seed/?result yields an int32; P?seed/min/max/?result yields an inclusive-range value. Seed changes and must use ?. Does not use the ordinary VR:R state. |

## Strings {#strings}

| Function | Status | Purpose |
| --- | --- | --- |
| [Trim](./trim/) | public | Trims spaces and control bytes 0..32 from both ends; returns a new ERM string. |
| [GetStrAtAddr](./getstrataddr/) | public | Copies a null-terminated string at strAddr into an output ERM string; NULL yields empty text. Non-null memory must be readable. |
| [CompareStrings](./comparestrings/) | public | Compares two ERM strings with language operators and returns -1, 0, or 1. |
| [StrToUpper](./strtoupper/) | public | Creates an upper/lower-case string with CharUpperA/CharLowerA. This is Windows ANSI conversion, not general Unicode normalization. |
| [StrToLower](./strtolower/) | public | Creates an upper/lower-case string with CharUpperA/CharLowerA. This is Windows ANSI conversion, not general Unicode normalization. |
| [Substr](./substr/) | public | Returns a substring: start is zero-based or end-relative when negative; count is a length, or a trailing exclusion when negative. |
| [StrPos](./strpos/) | public | Finds the first needlePtr in haystackPtr from offset (default 0). Returns a zero-based offset or -1. |
| [StrReplace](./strreplace/) | public | Replaces all patternPtr occurrences in sourcePtr with replacementPtr and returns a string. Call only inside a trigger. |
| [Interpolate](./interpolate/) | public | Expands current ERM variables in a string template. Timing matters: a template and already expanded text are different inputs. |
| [DecorateInt](./decorateint/) | public | Formats an integer using era.locale.thousand_separator. ignoreSmallNumbers=DONT_DECORATE_SMALL_INTS leaves values up to 9999 ungrouped. Output is a string. |
| [FormatQuantity](./formatquantity/) | public | Formats a quantity with locale settings and K/M/G suffixes. maxLen defaults to 5 logical characters and maxDigits to 4; negative values are supported. |

## Files, INI and JSON {#files}

| Function | Status | Purpose |
| --- | --- | --- |
| [FileExists](./fileexists/) | public | Checks path attributes and returns TRUE only for the requested kind: FileExists for files, DirExists for directories. Access failure also returns FALSE. |
| [DirExists](./direxists/) | public | Checks path attributes and returns TRUE only for the requested kind: FileExists for files, DirExists for directories. Access failure also returns FALSE. |
| [DeleteFile](./deletefile/) | public | Deletes a file using DeleteFileA; TRUE means deletion succeeded. Does not delete directory trees. |
| [ClearIniCache](./clearinicache/) | public | Forgets one INI cache. The next read/write reloads the file from disk. Does not delete the file. |
| [EmptyIniCache](./emptyinicache/) | public | Replaces the INI cache with empty contents for recreation. Call SaveIni to write it to disk. |
| [CreateDir](./createdir/) | public | Calls CreateDirectoryA for one directory without returning its result. Does not guarantee creation of missing parent directories. |
| [SaveIni](./saveini/) | public | Writes the INI cache to disk and creates parent directories. Loads the original file first if no cache exists. |
| [MergeIniWithDefault](./mergeiniwithdefault/) | public | Adds missing source keys to the target cache without replacing existing values. Persist separately with SaveIni. |
| [WriteIniInts](./writeiniints/) | public | Takes up to 7 key/value pairs after the path and section. Writes only to cache; call SaveIni. WriteIniInts formats decimal text, while WriteIniStrings takes string values. |
| [WriteIniStrings](./writeinistrings/) | public | Takes up to 7 key/value pairs after the path and section. Writes only to cache; call SaveIni. WriteIniInts formats decimal text, while WriteIniStrings takes string values. |
| [ReadIniStrings](./readinistrings/) | public | Takes up to 4 key/?value/default triples after path and section. An empty stored string also uses default. ReadIniInts converts nonempty text to an integer; this is not a separate numeric-validity check. |
| [ReadIniInts](./readiniints/) | public | Takes up to 4 key/?value/default triples after path and section. An empty stored string also uses default. ReadIniInts converts nonempty text to an integer; this is not a separate numeric-validity check. |
| [ReadJsonIntArray](./readjsonintarray/) | public | Reads JSON keys prefix.0, prefix.1… until the first missing key. Passing the second argument with ? creates a local array; otherwise the existing array is cleared and filled. ReadJsonIntArray converts strings to integers. |
| [ReadJsonStrArray](./readjsonstrarray/) | public | Reads JSON keys prefix.0, prefix.1… until the first missing key. Passing the second argument with ? creates a local array; otherwise the existing array is cleared and filled. ReadJsonIntArray converts strings to integers. |
| [LoadIntGlobalsFromJson](./loadintglobalsfromjson/) | public | Takes up to 14 names after JSON and global-variable prefixes. Resolves values as ERM constants first, then as integers; a missing key leaves the global unchanged. |
| [ScanDir](./scandir/) | public | Clears a supplied string array and fills names excluding . and ... itemsType is SCAN_* (files and directories by default); fullPaths prefixes the path (FALSE). The early exit after FindFirstFileA does not restore v1 in this snapshot. |
| [GetModList](./getmodlist/) | public | Returns a local array of active VFS mods. toLower and reverse default to FALSE. With zero mods the output is not initialized; initialize it to NULL and check it. |

## Game operations {#game}

| Function | Status | Purpose |
| --- | --- | --- |
| [SaveGame](./savegame/) | public | Saves using a name without extension. Defaults: appendExtension=TRUE, compressFile=TRUE, saveToData=FALSE, markInList=TRUE. Calls the native save address and may change the dialog selection. |
| [DisableErrors](./disableerrors/) | public | Enables WOG_OPT_MUTE_ERRORS and clears WOG_OPT_LAST_ERROR. Use only around a controlled operation. |
| [EnableErrors](./enableerrors/) | requires-review | Reads the last error flag, but this snapshot sets WOG_OPT_MUTE_ERRORS=TRUE again. Its comment promises to enable messages; the code does not. Restore explicitly with UN:P/FALSE or use a corrected library. |
| [Battle_RedrawGridShadow](./battle-redrawgridshadow/) | public | Refreshes movement-range shading after a speed change. Requires an existing combat manager. |
| [BattleStack_Shoot](./battlestack-shoot/) | public | Forces attackerStackId to shoot defenderStackId, temporarily changing/restoring the attacker target-position field. Validate both stacks first. |
| [BattleStack_MakeActive](./battlestack-makeactive/) | public | Passes control to stack 0..41 and runs regeneration if needed. An in-range index alone does not guarantee a live stack exists. |

<!-- llm:end erm.framework.functions 1 -->

