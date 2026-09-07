---
{"title":"ERM debugging and compatibility","summary":"Version differences, execution context and script validation.","translationStatus":"reviewed"}
---

## HoMM 3 HD {#ref-cont-hd}

:::erm
<section class="erm-reference" lang="en">
<div><h3 class="erm-align-center">HoMM 3 HD</h3>
<div class="erm-paragraph"><strong>HoMM 3 HD</strong> (HD-mod) is an unofficial addition (global functional patch) to the game <strong>Heroes of Might and Magic 3</strong>.</div>
<div class="erm-paragraph">The HD mod was originally created to change the game's original 800x600 resolution to a higher resolution, but now its functionality is much broader. 
The HD mod does not affect the original gameplay, but improves the functional part of the interface, makes the game much more convenient, fixes a number of bugs in the original game and 
adds functionality indispensable for online games.</div>
<div class="erm-paragraph">All extensions and fixes are optional, each player will be able to customize the game according to their needs. 
All minor graphics changes are made while maintaining the original style.</div>
<div class="erm-paragraph">The HD mod does not affect the files of the original game on which it is installed at all. 
(that is, the absolutely unchanged original can be launched from the same folder in which the HD mod is installed).</div>
<div class="erm-paragraph">More complete information on the HD mod can be found on the website dedicated to the project, at <a href="https://www.sites.google.com/site/heroes3hd/">link</a>.</div>
</div>
</section>
:::

## Tournament Edition {#ref-cont-te}

:::erm
<section class="erm-reference" lang="en">
<div><h3 class="erm-align-center">Tournament Edition, TE</h3>
<div class="erm-paragraph"><strong>HoMM3 TE</strong> - this <strong>Heroes of Might and Magic 3 Tournament Edition</strong> - 
project based <strong>Heroes 3.5 WoG</strong>.</div>
<div class="erm-paragraph">The history of the project is as follows.<br>
After the release of the third part of the game <strong>Heroes of Might and Magic</strong> companies <strong>New World Computing</strong>, 
a group of enthusiasts led by <span class="erm-anchor" id="ref-cont-te-n1"></span><strong class="erm-tone-purple erm-strong">Slava Salnikov</strong> aka <strong class="erm-tone-purple erm-strong">ZVS</strong> developed an add-on, 
dubbed <strong>HoMM3.5 In the Wake of Gods</strong> (abbreviated as <strong>WoG</strong>). 
During its creation, a special programming language was developed - <strong>ERM</strong> (<strong>Event Related Model</strong>), 
with which anyone can make further changes to the game. But <strong>WoG</strong>, 
like the whole series <strong>HMM</strong>, more focused on playing against computer opponents, 
to create and play exciting maps and campaigns. Therefore, in the spring of 2002, St. Petersburg players 
<strong class="erm-tone-purple erm-strong">A_K_Zyzop</strong> (<strong class="erm-tone-purple erm-strong">Alexander Karpeko</strong>, one of <a href="../#ref-cont-wogteam" data-context="true">WoG-Team</a>) 
and <strong class="erm-tone-purple erm-strong">Horn</strong> (<strong class="erm-tone-purple erm-strong">Alex Vinogradov</strong>) decided to create another version of the game, designed for tournaments 
(both full-time and correspondence) by <strong>HMM</strong>. The project developed unevenly, almost stopped twice, 
but with a way out <strong>WoG</strong> version 3.58f introduced new features that spurred the development of the project. 
The support of the project by the leader was also important <strong>WoG-team</strong> <strong class="erm-tone-purple erm-strong">Slava Salnikov</strong>.</div>
<div class="erm-paragraph">The project is designed to collect all the best from the Heroic Series and, adding new features, 
get an interesting balanced multiplayer strategy.<br>
Three "whales" <strong>HoMM TE</strong> - this <strong>variety of strategies</strong>, <strong>balance</strong> and <strong>user-friendly interface</strong>. 
All changes made to the game are aimed at achieving these goals.</div>
<div class="erm-paragraph">You can find out more on the subforum dedicated to the project at <a href="http://forum.df2.ru/index.php?showforum=39">link</a>.</div>
</div>
</section>
:::

## What is an era? {#ref-era-index}

:::erm
<section class="erm-reference" lang="en">
<div>
<div>
<div class="table-wrap erm-reference-table"><table width="100%">
	<tr><td class="erm-align-center"><a href="http://wforum.heroes35.net/index.php">
	<img src="../../../assets/erm/e6e925ba34038af1.gif" alt="logo" loading="lazy" decoding="async" class="erm-figure"></a></td></tr>
</table></div>
</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-index-n1"></span><strong class="erm-tone-purple erm-strong">ERA</strong> is a technical extension for “Heroes of Might and Magic: In the Wake of Gods”, version 3.5.</div>

<h3>
Main tasks solved by the project:</h3>
<ul>
<li> Ability to use third-party plug-ins and patches;</li>
<li> Correcting errors in the game and the ERM scripting language, simplifying development and debugging, increasing script compatibility;</li>
<li> ERM Language Extension <a href="../receivers/sn/#ref-rec-sn-era">new teams</a> and <a href="../triggers/#ref-era-new-events">events</a>;</li>
<li> <a href="../receivers/if/#ref-era-color-text">Colored text</a> in game dialogues;</li>
<li> Simplifying the creation and installation of mods;</li>
<li> <a href="../receivers/sn/#ref-era-api">Unification</a> and standardization of game engine development.</li>
</ul>

<h3>What does the user get?</h3>
<ul>
<li> The ability to freely and safely combine modules and patches to suit your taste;</li>
<li> Correction of such annoying game errors as high CPU load, crashes, disabling ERM scripts, etc.;</li>
<li> The ability to enjoy colored text in dialogues;</li>
<li> Ability to use advanced scripts and mods with access to external functions, keyboard and game memory;</li>
<li> Useful features, such as automatic highlighting of the latest file in the loading dialog, accelerated game launch, etc.</li>
</ul>

<h3>What does a programmer get?</h3>
<ul>
<li> Complete sources of the project and related programs;</li>
<li> Modules in Object Pascal and C++ for faster writing of plugins;</li>
<li> New ERM events including keyboard handling;</li>
<li> Unlimited extended ERM memory with the ability to automatically allocate and deallocate blocks to overcome compatibility issues and index control;</li>
<li> Ability to generate new events in plugins and ERM scripts and use third-party extensions;</li>
<li> The ability to quickly load and recompile EPM scripts using a hotkey without disrupting the progress of the game;</li>
<li> The ability to export main scripts from a saved game using a hotkey for their further analysis and refinement;</li>
<li> Ability to load dynamic libraries (DLL) from ERM, obtain addresses of machine functions and call them. All basic calling conventions and returning integer or fractional results are supported;</li>
<li> API for installing interceptors, securely writing to memory, working with cached ini files, user sections in saved files, getting game state, etc.;</li>
<li> Toolkit for creating and converting patches;</li>
<li> Automatic loading of LOD archives and the ResMan utility will allow you to create mods without being tied to the WoG installer;</li>
<li> Support for ERM/Era Events in plugins with the ability to execute ERM commands on the fly.</li>
</ul>
</div>
</section>
:::

## Choosing a contract {#baseline}

Pages combine legacy Help 2.10b, ERA source, ERA 2/3 changes and the supplied Framework. Newer behavior is marked explicitly. Framework requires ERA 3.9.15+, which does not mean every command was introduced in that version. ZVSE2 selects ERM 2.0, introduced in ERA 3.0.0.

## Porting a legacy script {#porting}

Check y/e/z scopes, shared v/f..t variables, special flags 996..1000 and reserved indices. Prefix your functions and i^/s^ globals. Preserve technical-name case. Modern FU/DO argument gaps retain positions; a missing argument is not a universal d0.

## Strings and messages {#strings}

ERA 3.9.15 accepts arbitrary strings in CA/LE/GE and fixes DL:H and IF:L; old numeric references to another event’s message are disabled. The fast string buffer grew from 1 to 3 MB, but individual z-buffer and resource limits remain. Artifact SN:H was added in 3.0.3.

## Combat, previews and UI {#battle}

Do not use BM/EA before battle structures are ready. OnStackToStackDamage also serves previews and AI: inspect theoretical. BG1 may already see the next stack; OnBattleActionEnd provides action-completion timing. Current registration aliases OnCombatRound to OnBattleRound despite older descriptions distinguishing them.

## Networking and saves {#network}

Local CM, keyboard and TL events are not automatically replayed on another PC. Distinguish the active player from this PC’s player, and AI from remote humans. ERA 3.9.14 fixed OnGameEnter/OnGameLeave in the network cycle. Never carry pointers, DLL handles or temporary arrays from an old process through a savegame.

## Diagnosing a failure {#errors}

Start with the first ERM error and current function: header, semicolon, argument count, GET/SET and ranges. Temporarily reduce the handler to one action. Check if/re/en pairing and nesting for control flow. For SN:E verify the address, ABI, argument widths and memory lifetime. ERA diagnostics live in Debug/Era; the hook report is erm hooks.txt.

## Minimum mod checks {#checklist}

Check a new map, loading, repeated events, return to menu and another start without restarting the process. For combat include tactics, waiting, morale, quick combat and AI. For UI include cancellation and switching heroes/towns. Verify results and absence of side effects, not merely absence of error messages.

## Framework snapshot findings {#framework}

requires-review cards record concrete issues: EnableErrors sets MUTE=TRUE, H3Dlg_UpdateItemRange ignores min/max, and Array_Move has a questionable destInd declaration. Findings are tied to the inspected source; check whether your library has fixed them.

<!-- ERA3-GENERATED:START -->
## Current ERA 3 rules {#current-era3}

The archived ERM Help describes historical behavior. The rules below and the versioned entries take precedence for ERA 3.9.30. Game entity names use the official English ERM Help terminology.

- ERA 3.9.29 supports `SN:F^plugin:function^/...` for calling an export from a particular `.era` or `.dll`; the extension may be omitted.
- Since ERA 3.9.22, `CM:H` returns a valid hero ID outside click events and `undefined` when no hero meeting dialog is active.
- ERA 3.9.16 rewrote `IF:D`, `IF:F`, and `IF:E`: string parameters accept variables or literals and are copied to internal storage. ERA 3.9.17 fixed the order of parameters 3 and 4 in `IF:D`.
- `BM:C` and `BM:Q` automatically redraw shadows, the grid, and selection (3.9.18–3.9.19). `BM:C` uses the side controlling the actual casting stack.
- Network PvP battles require deterministic randomness. `VR:R` accepts a fourth `free_param` that separates independent random sequences (3.9.16).
- Since 3.3, `re/if/en` instructions may omit the trailing colon before `;`; `VR:S?$` is supported again.
- `SN:Q` is deprecated since 3.4.0 and `SN:G` since 3.1.0. New scripts should not use them.
- Since 3.2.0, `OnBattleRound` is an alias of `OnCombatRound`, and `v997` contains a valid battle round throughout combat.
- `IF:N` is the current complex-dialog interface. `IF:Q` remains for compatibility and has corrected picture-selection rules.
- `UN:U` ends a search with `x = -1` and supports the fast six-parameter form; `TR:T` accepts any number of arguments.
- Receiver parameters support global named variables. Trigger-local strings and arrays live until the whole handler chain for the same trigger ends.

## Complete ERA 3 ERM change history {#era3-changelog}

The entries below preserve the exact wording from `era iii changelog.txt`, grouped by version and connected to the affected reference pages.


### ERA 3.9.30 {#era3-version-3-9-30}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-30-l7"><summary><code>+</code> <strong>added</strong> · lines 7–16: Added the following exported functions to era.dll: (* Returns current language/locale string. The buffer must be freed by calling Era.MemFree *) …</summary><div class="era-change-body"><pre>Added the following exported functions to era.dll:

  (* Returns current language/locale string. The buffer must be freed by calling Era.MemFree *)
  function GetLanguage: {O} pchar; stdcall;

  (* Changes code page (encoding) used to decode UTF-8 strings in language json files *)
  function SetCodePage (NewCodePage: cardinal): TInt32Bool; stdcall;

  (* Returns current code page (encoding), used to decode UTF-8 strings in language json files *)
  function GetCodePage: cardinal; stdcall;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

</section>
:::

### ERA 3.9.29 {#era3-version-3-9-29}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-29-l21"><summary><code>+</code> <strong>added</strong> · lines 21–27: Extended SN:F syntax with possibility to call arbitrary plugin or dll functions: SN:F^plugin_name:function_name^/... If plugin name is provided w…</summary><div class="era-change-body"><pre>Extended SN:F syntax with possibility to call arbitrary plugin or dll functions: SN:F^plugin_name:function_name^/...

  If plugin name is provided without a dot, &quot;.era&quot; and &quot;.dll&quot; are tested one by one. Otherwise the name is used as is. The result is cached.

  Example:

  SN:F^era:ShowMessage^/^Hello, world!^; even &#x27;era.dll&#x27; itself can be called this way, though it&#x27;s recommended to skip dll name at all in this case</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

</section>
:::

### ERA 3.9.27 {#era3-version-3-9-27}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-27-l39"><summary><code>-</code> <strong>fixed</strong> · lines 39–39: Fixed text truncation in multiline text dialogs.</summary><div class="era-change-body"><pre>Fixed text truncation in multiline text dialogs.</pre></div></details>

</section>
:::

### ERA 3.9.26 {#era3-version-3-9-26}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-26-l44"><summary><code>+</code> <strong>added</strong> · lines 44–66: Implemented detailed game context dumping in &quot;exception context.txt&quot; on crash. The format is the following: &gt; Game context: &#91;Dialog Name&#93; dialog …</summary><div class="era-change-body"><pre>Implemented detailed game context dumping in &quot;exception context.txt&quot; on crash.

  The format is the following:

  &gt; Game context: &#91;Dialog Name&#93; dialog (tag1, tag2...)

  Possible dialog names:

    &quot;Adventure Map&quot;, &quot;Adventure Actions&quot;, &quot;Adventure Popup&quot;, &quot;Combat Settings&quot;, &quot;Combat Log&quot;, &quot;Combat&quot;, &quot;Dialog&quot;, &quot;Dimension Door&quot;, &quot;Sink Ship,&quot;, &quot;Hero&quot;, &quot;Hill Fort&quot;, &quot;Hero LevelUp&quot;, &quot;Kingdom Overview&quot;, &quot;Puzzle&quot;, &quot;Journal&quot;, &quot;Dwelling&quot;, &quot;Altar of Sacrifice&quot;, &quot;Skeleton Transformer,&quot;, &quot;Scenario Info&quot;, &quot;Saving&quot;, &quot;Spell Book&quot;, &quot;Hero Meeting&quot;, &quot;Adventure Settings&quot;, &quot;Select Town&quot;, &quot;Town&quot;, &quot;Thieves Guild&quot;, &quot;Town Hall&quot;, &quot;Mage Guild,&quot;, &quot;Leave Creatures&quot;, &quot;Garrison&quot;, &quot;Blacksmith&quot;, &quot;Shipyard / WoG DL&quot;, &quot;Building Info&quot;, &quot;Tavern&quot;, &quot;Fort&quot;, &quot;Resource Exchange&quot;, &quot;Resource Transfer,&quot;, &quot;Buy Artifacts&quot;, &quot;Sell Artifacts&quot;, &quot;Freelancers Guild&quot;, &quot;University&quot;, &quot;Monster Info&quot;, &quot;World Overview&quot;.

  By default singleplayer human turn is assumed. Possible tags:

    - AI turn: on AI turn only
    - HotSeat: if game type is Hot Seat
    - Network: for any network game type (TCP, direct connection, lobby, etc)
    - Host:    if current PC is a host in a network game
    - Client:  if current PC is a clent in a network game
    - Combat   if combat takes place

    - AI vs AI:       for full AI combat
    - AI vs Human:    combat, where AI hero attacked human
    - Human vs AI:    combat, where human hero attack AI
    - Human vs Human: combat, where human hero attack human</pre></div></details>

</section>
:::

### ERA 3.9.25 {#era3-version-3-9-25}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-25-l73"><summary><code>+</code> <strong>added</strong> · lines 73–74: Implemented possibility to terminate game process on any ERM error, which may be helpful in case of automatically closing error messages in netwo…</summary><div class="era-change-body"><pre>Implemented possibility to terminate game process on any ERM error, which may be helpful in case of automatically closing error messages in network games.
    The possibility is controlled by &#x27;Debug.AbortOnErmError&#x27; option.</pre></div></details>

<details class="era-change" id="era3-v-3-9-25-l76"><summary><code>+</code> <strong>added</strong> · lines 76–76: Moved ERM error description and context to translatable text with `era.debug.erm_error_debug_dump_confirmation` key.</summary><div class="era-change-body"><pre>Moved ERM error description and context to translatable text with `era.debug.erm_error_debug_dump_confirmation` key.</pre></div></details>

<details class="era-change" id="era3-v-3-9-25-l77"><summary><code>+</code> <strong>added</strong> · lines 77–77: Added last ERM error tracking. The error is saved to &quot;log.txt&quot; and &quot;erm memory dump.txt&quot;.</summary><div class="era-change-body"><pre>Added last ERM error tracking. The error is saved to &quot;log.txt&quot; and &quot;erm memory dump.txt&quot;.</pre></div></details>

<details class="era-change" id="era3-v-3-9-25-l78"><summary><code>+</code> <strong>added</strong> · lines 78–78: Debug dump will be created in case of dialog autoclosing due to timeout (network game, gosolo mode), but no more than once per second.</summary><div class="era-change-body"><pre>Debug dump will be created in case of dialog autoclosing due to timeout (network game, gosolo mode), but no more than once per second.</pre></div></details>

<details class="era-change" id="era3-v-3-9-25-l81"><summary><code>+</code> <strong>added</strong> · lines 81–82: Added new option &quot;Debug.ExternalCrashHandlerPath&quot; to &quot;heroes 3.ini&quot;. Specify path to a program, to be run on game crash. The only argument is a p…</summary><div class="era-change-body"><pre>Added new option &quot;Debug.ExternalCrashHandlerPath&quot; to &quot;heroes 3.ini&quot;. Specify path to a program, to be run on game crash. The only argument is a path
    to game directory. Working directory is also set to game directory, thus crash handler may use relative paths.</pre></div></details>

<details class="era-change" id="era3-v-3-9-25-l95"><summary><code>*</code> <strong>changed</strong> · lines 95–95: Exported `Ask` function will return false if dialog is closed automatically on timeout (in multiplayer or gosolo mode).</summary><div class="era-change-body"><pre>Exported `Ask` function will return false if dialog is closed automatically on timeout (in multiplayer or gosolo mode).</pre></div></details>

</section>
:::

### ERA 3.9.24 {#era3-version-3-9-24}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-24-l102"><summary><code>+</code> <strong>added</strong> · lines 102–102: Implemented detailed game, Era and plugins allocated memory tracking. Memory report is written to &quot;log.txt&quot; on crash or &quot;OnGenerateDebugInfo&quot; eve…</summary><div class="era-change-body"><pre>Implemented detailed game, Era and plugins allocated memory tracking. Memory report is written to &quot;log.txt&quot; on crash or &quot;OnGenerateDebugInfo&quot; event (triggered by F11).</pre><p>Related pages: [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

</section>
:::

### ERA 3.9.23 {#era3-version-3-9-23}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-23-l124"><summary><code>+</code> <strong>added</strong> · lines 124–129: Improved Era crash handling and debug reports generation: - Era preallocates 5 MB and reservers another 15 MB for debug report generation in out-…</summary><div class="era-change-body"><pre>Improved Era crash handling and debug reports generation:

  - Era preallocates 5 MB and reservers another 15 MB for debug report generation in out-of-memory situations.
  - Improved ERM memory dumping. Only 1 MB is necessary to generate report of arbitrary size.
  - Added Era memory manager statistics logging during crashes because of running out of memory. It&#x27;s written to &quot;log.txt&quot;.
  - Fixed wrong &quot;Total sections size&quot; field calculation when generating crash report during game saving.</pre></div></details>

</section>
:::

### ERA 3.9.22 {#era3-version-3-9-22}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-22-l138"><summary><code>+</code> <strong>added</strong> · lines 138–138: Improved CM:H to always return valid hero IDs from SwapManager even in non-click events (undefined if no hero meeting dialog is active).</summary><div class="era-change-body"><pre>Improved CM:H to always return valid hero IDs from SwapManager even in non-click events (undefined if no hero meeting dialog is active).</pre><p>Related pages: [Mouse-event context (CM)](../receivers/cm/) · [ERM triggers and events](../triggers/)</p></div></details>

</section>
:::

### ERA 3.9.21 {#era3-version-3-9-21}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-21-l155"><summary><code>+</code> <strong>added</strong> · lines 155–180: Added the following functions to Era Erm Framework: !?FU(ReadJsonIntArray); ; Reads integer array from json config into either existing dynamic a…</summary><div class="era-change-body"><pre>Added the following functions to Era Erm Framework:

  !?FU(ReadJsonIntArray);
  ; Reads integer array from json config into either existing dynamic array or into automatically created local one.
  !#VA(jsonKeyPtr:x); JSON full key like &quot;test.guards&quot; for { &quot;test&quot;: { &quot;guards&quot;: &#91;1, 2, 3, 4&#93; } }
  !#VA(intArray:x);   IN/OUT. Either existing dynamic array ID or ?(localArrayId:y).

  Example:

  !?FU(OnAfterErmInstructions);
  !!FU(ReadJsonIntArray):P^test.guards^/?(arr:y);
  !!FU(Array_Join):P(arr)/?(text:z)/^, ^;
  !!IF:M^%(text)^;


  !?FU(ReadJsonStrArray);
  ; Reads string array from json config into either existing dynamic array or into automatically created local one.
  !#VA(jsonKeyPtr:x); JSON full key like &quot;test.names&quot; for { &quot;test&quot;: { &quot;names&quot;: &#91;&quot;daemon&quot;, &quot;corwin&quot;, &quot;deo&quot;&#93; } }
  !#VA(strArray:x);   IN/OUT. Either existing dynamic array ID or ?(localArrayId:y).

  Example:

  !?FU(OnAfterErmInstructions);
  !!FU(ReadJsonStrArray):P^test.names^/?(arr:y);
  !!FU(Array_Join):P(arr)/?(text:z)/^, ^;
  !!IF:M^%(text)^;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-21-l185"><summary><code>-</code> <strong>fixed</strong> · lines 185–185: Fixed images path prefix to use backward slashes as path delimiters in IF:D dialogs.</summary><div class="era-change-body"><pre>Fixed images path prefix to use backward slashes as path delimiters in IF:D dialogs.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-9-21-l186"><summary><code>-</code> <strong>fixed</strong> · lines 186–186: Fixed IF:D dialog: cancel button should be enabled by default.</summary><div class="era-change-body"><pre>Fixed IF:D dialog: cancel button should be enabled by default.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

</section>
:::

### ERA 3.9.19 {#era3-version-3-9-19}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-19-l197"><summary><code>+</code> <strong>added</strong> · lines 197–197: Added automatic grid and selection redraw after using BM:Q on inactive stack.</summary><div class="era-change-body"><pre>Added automatic grid and selection redraw after using BM:Q on inactive stack.</pre><p>Related pages: [Battle stack (BM)](../receivers/bm/)</p></div></details>

<details class="era-change" id="era3-v-3-9-19-l199"><summary><code>+</code> <strong>added</strong> · lines 199–208: Added the following functions to Era Erm Framework: !?FU(EmptyIniCache); ; Replaces ini file cache in memory with an empty one. Use it for recrea…</summary><div class="era-change-body"><pre>Added the following functions to Era Erm Framework:

  !?FU(EmptyIniCache);
  ; Replaces ini file cache in memory with an empty one. Use it for recreating ini files from scratch, when you don&#x27;t need previously cached data and original file on disk
  !#VA(filePathPtr:x); Absolute or relative path to ini file

  !?FU(MergeIniWithDefault);
  ; Loads two ini files and merges source ini entries with target ini entries in cache without overwriting existing entries
  !#VA(targetPathPtr:x); Absolute or relative path to destination ini file (main settings)
  !#VA(sourcePathPtr:x); Absolute or relative path to source ini file (default settings)</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-19-l210"><summary><code>+</code> <strong>added</strong> · lines 210–235: Refactored and improved ini handling API. The following functions were exported/updated: (* Forgets all cached data for specified ini file. Any r…</summary><div class="era-change-body"><pre>Refactored and improved ini handling API. The following functions were exported/updated:

  (* Forgets all cached data for specified ini file. Any read/write operation will lead to its re-reading and re-parsing *)
  procedure ClearIniCache (const FileName: pchar); stdcall;

  (* Forgets all cached data for all ini files *)
  procedure ClearAllIniCache; stdcall;

  (* Replaces ini file cache in memory with an empty one. Use it for recreating ini files from scratch, when you don&#x27;t need previously cached data and original file on disk *)
  procedure EmptyIniCache (const FileName: pchar); stdcall;

  (* Reads entry from in-memory cache. Automatically loads ini file from disk if it&#x27;s not cached yet *)
  function ReadStrFromIni (const Key: pchar; const SectionName: pchar; FilePath: pchar; out Res: pchar): boolean; stdcall;

  (* Writes and entry to in-memory cache. Automatically loads ini file from disk if it&#x27;s not cached yet *)
  function WriteStrToIni (const Key, Value, SectionName: pchar; FilePath: pchar): boolean; stdcall;

  (* Loads and parses ini file. Creates in-memory cache for it to prevent further disk accesses. Returns true only if file existed, was successfully read and parsed.
     Creates empty cache entry in case of any error *)
  function LoadIni (FilePath: pchar): boolean; stdcall;

  (* Saves cached ini to the specified file on a disk. Automatically recreates all directories in a path to the file. Loads file contents from disk if it was not cached earlier. *)
  function SaveIni (FilePath: pchar): boolean; stdcall;

  (* Loads two ini files and merges source ini entries with target ini entries in cache without overwriting existing entries *)
  procedure MergeIniWithDefault (TargetPath, SourcePath: pchar); stdcall;</pre></div></details>

<details class="era-change" id="era3-v-3-9-19-l238"><summary><code>*</code> <strong>changed</strong> · lines 238–238: &quot;OnRemoteEvent&quot; is not triggered for FU:D call anymore. Era now uses FireRemoteEvent to synchronize the creation of objects on adventure map in m…</summary><div class="era-change-body"><pre>&quot;OnRemoteEvent&quot; is not triggered for FU:D call anymore. Era now uses FireRemoteEvent to synchronize the creation of objects on adventure map in multiplayer.</pre><p>Related pages: [Function calls (FU)](../receivers/fu/) · [Framework events](../framework/events/)</p></div></details>

</section>
:::

### ERA 3.9.18 {#era3-version-3-9-18}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-18-l245"><summary><code>+</code> <strong>added</strong> · lines 245–245: Added &quot;Tools/UN C to bin&quot; utility for conversion of UN:C ERM commands into binary patches.</summary><div class="era-change-body"><pre>Added &quot;Tools/UN C to bin&quot; utility for conversion of UN:C ERM commands into binary patches.</pre><p>Related pages: [General game operations (UN)](../receivers/un/) · [UN:C — memory access](../un-c/)</p></div></details>

<details class="era-change" id="era3-v-3-9-18-l246"><summary><code>+</code> <strong>added</strong> · lines 246–246: Implemented automatic shadow/grid/selection border redraw after calling BM:C.</summary><div class="era-change-body"><pre>Implemented automatic shadow/grid/selection border redraw after calling BM:C.</pre><p>Related pages: [Battle stack (BM)](../receivers/bm/)</p></div></details>

</section>
:::

### ERA 3.9.17 {#era3-version-3-9-17}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-17-l254"><summary><code>-</code> <strong>fixed</strong> · lines 254–254: Fixed IF:D command: parameters 3 and 4 were mixed up in places.</summary><div class="era-change-body"><pre>Fixed IF:D command: parameters 3 and 4 were mixed up in places.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

</section>
:::

### ERA 3.9.16 {#era3-version-3-9-16}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-16-l263"><summary><code>+</code> <strong>added</strong> · lines 263–264: Introduced another directory for ERM global library scripts: &quot;Data/s/lib_end&quot;. Scripts from this directory will be loaded after all other map/glo…</summary><div class="era-change-body"><pre>Introduced another directory for ERM global library scripts: &quot;Data/s/lib_end&quot;. Scripts from this directory will be loaded after all other map/global/library scripts.
    Likewise &quot;lib&quot; directory, these scripts do not depend on UN:P5 WoG option state.</pre><p>Related pages: [General game operations (UN)](../receivers/un/) · [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-9-16-l266"><summary><code>+</code> <strong>added</strong> · lines 266–270: Improved CombatManager::CastSpell function (used also in BM:C) by temporarily setting CombatManager-&gt;ControlSide to the side, controlling casting…</summary><div class="era-change-body"><pre>Improved CombatManager::CastSpell function (used also in BM:C) by temporarily setting CombatManager-&gt;ControlSide to the side, controlling casting stack.
    Casting stack may differ from active stack (it may be counter attack or arbitrary script logic). In native game casting stack is always current active stack.
    &quot;Fire wall&quot;, &quot;land mines&quot;, &quot;quick sands&quot;, &quot;force field&quot; and many other spells rely on which side is considered friendly (current). The bug with friendly master-gremlins, casting &quot;land mines&quot; from enemy hero side seems to be also fixed.

    If stack is hypnotized, it&#x27;s effective side is the side of controlling (hypnotizing) hero.</pre><p>Related pages: [Battle stack (BM)](../receivers/bm/) · [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-9-16-l272"><summary><code>+</code> <strong>added</strong> · lines 272–279: Rewritten IF:D, IF:F, IF:E commands (multipurpose dialog implementation). Features: -) Whenever string is accepted as a parameter, it may be any …</summary><div class="era-change-body"><pre>Rewritten IF:D, IF:F, IF:E commands (multipurpose dialog implementation). Features:

  -) Whenever string is accepted as a parameter, it may be any string or string literal. The value will be copied to global settings, no more dependency on z-variables.
  -) Dialog IDs are totally ignored (better use 0 or -1 for them for readability). There is only one copy of dialog settings in memory.
  -) Dialog settings are totally cleared before IF:D and after IF:E execution.
  -) Fixed bugs with phantom empty strings instead of image paths or hints.
  -) IF:F accepts 0..6 parameters. Empty parameter means &quot;remove hint&quot;.
  -) IF:E accepts the following syntaxes: IF:E(v-var index to store result) or IF:E?(any integer variable to store result).</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-9-16-l281"><summary><code>?</code> <strong>note</strong> · lines 281–306: Note on generating random values in battles. Era uses deterministic random number generator in network PvP battles in order to prevent most of po…</summary><div class="era-change-body"><pre>Note on generating random values in battles. Era uses deterministic random number generator in network PvP battles in order to prevent most of possible desynchronizations.
    Generator state depends on current round ID, autoincrementing action ID (0, 1, 2...) and range bounds (minimum and maximum value to generate).
    It means, that generating several random values in the same range in one action produces the same results:

    rand(1, 10) =&gt; 6
    rand(1, 10) =&gt; 6

    This behavior is undesirable in case of multiple generations in a loop. For instance, you loop through all enemy stacks and check if rand(1, 100) &lt; 10.

    rand(1, 100) =&gt; 30
    ...
    rand(1, 100) =&gt; 30.

    Either the effect will work on all stacks, or on none of them. The fix is an introduction of extra parameter for random number generation.
    It will be used by engine in network PvP battles only. See VR:C0/(min)/(max)/(freeParam) or RandomRangeWithFreeParam API function.
    We can used any deterministic value here like loop counter (0, 1, 2...) or stack ID (0..41).
    We can even XOR it with unique pre-generated constant (but it&#x27;s not obligatory). For single generation we can use random pre-generated constant like 1069019607.

    rand(1, 100, 0) =&gt; 30
    rand(1, 100, 1) =&gt; 94
    rand(1, 100, 2) =&gt; 5
    rand(1, 100, 3) =&gt; 67
    ...
    rand(1, 100, 1069019607) =&gt; 52

    It&#x27;s recommended to supply this free parameter for looped number generations in battle and for functions, generating random items (spells, effects), which are used in battles.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-9-16-l308"><summary><code>+</code> <strong>added</strong> · lines 308–324: Extended VR:R command with optional 4-th parameter: VR:R(dummy)/(min)/(max)/(free_param); See the above note about generating random values in Pv…</summary><div class="era-change-body"><pre>Extended VR:R command with optional 4-th parameter: VR:R(dummy)/(min)/(max)/(free_param);

  See the above note about generating random values in PvP battles.

  Example:

  !?FU(OnBattleScreenMouseClick)&amp;i^mouse_action^=(MOUSE_RMB_PRESSED);
  ; The effect will be seen in network battles only and will not influence singleplayer
  !#VA(v&#91;3&#93;:y);
  !!VR(effectId:y):S1833290248; // Unique generated int32 value for our sequence, use any offline/online generator

  !!re i/0/(v&#91;SIZE&#93;)/1/-1;
    !!VR(freeParam:y):S(effectId) Xi;
    !!VR(v&#91;i&#93;):R0/1/100/(freeParam);
  !!en;

  !!IF:L^%(v&#91;0&#93;) %(v&#91;1&#93;) %(v&#91;2&#93;)^;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-16-l328"><summary><code>+</code> <strong>added</strong> · lines 328–331: Updated &quot;Era Erm Framework&quot;: -) Added support for area shooting creatures to BattleStack_Shoot function. -) Synchronized with Launcher &quot;Era Erm F…</summary><div class="era-change-body"><pre>Updated &quot;Era Erm Framework&quot;:

  -) Added support for area shooting creatures to BattleStack_Shoot function.
  -) Synchronized with Launcher &quot;Era Erm Framework&quot; version.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-16-l333"><summary><code>+</code> <strong>added</strong> · lines 333–377: Added the following export types and functions to era.dll: (* Customizable dialog with up to 4 external/internal pictures (bmp/jpg/png/pcx/pcx16,…</summary><div class="era-change-body"><pre>Added the following export types and functions to era.dll:

  (*
    Customizable dialog with up to 4 external/internal pictures (bmp/jpg/png/pcx/pcx16,def?), optional input field and 4 selectable buttons with checkboxes.
    All pointers may be null. All fields must be writable by dialog processing routines and must be considered &quot;dirty&quot; after dialog processing except the field, where result
    values are written.
  *)
  PMultiPurposeDlgSetup = ^TMultiPurposeDlgSetup;
  TMultiPurposeDlgSetup = packed record
    Title:             pchar;                 // Top dialog title
    InputFieldLabel:   pchar;                 // If specified, user will be able to enter arbitrary text in input field
    ButtonsGroupLabel: pchar;                 // If specified, right buttons group will be displayed
    InputBuf:          pchar;                 // OUT. Field to write a pointer to a temporary buffer with user input. Copy this text to safe location immediately
    SelectedItem:      integer;               // OUT. Field to write selected item index to (0-3 for buttons, -1 for Cancel)
    ImagePaths:        array &#91;0..3&#93; of pchar; // All paths are relative to game root directory or custom absolute paths
    ImageHints:        array &#91;0..3&#93; of pchar;
    ButtonTexts:       array &#91;0..3&#93; of pchar;
    ButtonHints:       array &#91;0..3&#93; of pchar;
    ShowCancelBtn:     TInt32Bool;
  end;

  TShowMultiPurposeDlgFunc = procedure (Setup: PMultiPurposeDlgSetup); stdcall;

  (* Displayes customizable configured multipurpose dialog and returns selected button ID (1..4) or -1 for Cancel *)
  function ShowMultiPurposeDlg (Setup: PMultiPurposeDlgSetup): integer; stdcall;

  (* Replaces current multipurpose dialog handler/implementor. Returns old handler if any *)
  function SetMultiPurposeDlgHandler (NewImpl: TShowMultiPurposeDlgFunc): {n} TShowMultiPurposeDlgFunc; stdcall;

  (* Creates new plugin API instance for particular DLL plugin. Pass real dll name with extension. Returns plugin instance or NULL is plugin is already created *)
  function CreatePlugin (Name: pchar) : {On} TPlugin; stdcall;

  (* Installs new hook at specified address. Returns pointer to bridge with original code if any. Optionally specify address of a pointer to write applied patch structure
     pointer to. It will allow to rollback the patch later. MinCodeSize specifies original code size to be erased (nopped). Use 0 in most cases. *)
  function Hook (Addr: pointer; HandlerFunc: THookHandler; {n} AppliedPatch: ppointer; MinCodeSize, HookType: integer): {n} pointer; stdcall;

  (* Returns true if applied patch was overwritten *)
  function IsPatchOverwritten (AppliedPatch: pointer): TInt32Bool; stdcall;

  (* Returns applied patch size in bytes (number of ovewritten bytes) *)
  function GetAppliedPatchSize (AppliedPatch: pointer): integer; stdcall;

  (* Generates random value in specified range with additional custom parameter used only in deterministic generators to produce different outputs for sequence of generations. For instance, if you need to generate random value in battle for each enemy stack, you could use stack ID or loop variable for FreeParam. In network battles multiple random value generations with the same parameters produce the same output until next action is performed. This function allows to bring back randomness to multiple same time generations. *)

  function RandomRangeWithFreeParam (MinValue, MaxValue, FreeParam: integer): integer; stdcall;</pre></div></details>

<details class="era-change" id="era3-v-3-9-16-l381"><summary><code>+</code> <strong>added</strong> · lines 381–385: Added the following translatable strings to &quot;era.json&quot;: - &#x27;era.debug.game_saving_exception_warning&#x27;: shown on savegame writing exception - &#x27;era.d…</summary><div class="era-change-body"><pre>Added the following translatable strings to &quot;era.json&quot;:

  - &#x27;era.debug.game_saving_exception_warning&#x27;:   shown on savegame writing exception
  - &#x27;era.debug.debug_dump_confirmation&#x27;:         shown on any ERM error
  - &#x27;era.incompatible_savegame_version_warning&#x27;: shown if game saving was performed on too old Era engine</pre></div></details>

<details class="era-change" id="era3-v-3-9-16-l387"><summary><code>*</code> <strong>changed</strong> · lines 387–387: From now on, Era always asks permission to load global scripts on map start or scripts reloading if map has internal scripts. The permission text…</summary><div class="era-change-body"><pre>From now on, Era always asks permission to load global scripts on map start or scripts reloading if map has internal scripts. The permission text was changed from &quot;skip&quot; to &quot;load&quot; by default. The following language key must be re-translated: &#x27;era.global_scripts_vs_map_scripts_warning&#x27;. WoG Option 5 is always set to 3 (ask for loading global scripts if map has internal scripts) before any scripts are loaded, thus there is no more necessity to keep it in WoG Options. UN:P5/# instruction in map internal scripts controls, wether map author forces global scripts loading or not.</pre><p>Related pages: [General game operations (UN)](../receivers/un/) · [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-9-16-l389"><summary><code>+</code> <strong>added</strong> · lines 389–389: Included updated sources codes for the following plugins: &quot;Buttons&quot;, &quot;Erm Hooker&quot;, &quot;WoG Native Dialogs&quot;, &quot;Game Bug Fixes Extended&quot;. Thanks to bar…</summary><div class="era-change-body"><pre>Included updated sources codes for the following plugins: &quot;Buttons&quot;, &quot;Erm Hooker&quot;, &quot;WoG Native Dialogs&quot;, &quot;Game Bug Fixes Extended&quot;. Thanks to baratorch and Hota team for sharing their header files.</pre></div></details>

<details class="era-change" id="era3-v-3-9-16-l396"><summary><code>*</code> <strong>changed</strong> · lines 396–396: Updated &quot;wog native dialogs.era&quot; plugin to be more tolerant of unsupported image types for IF:E dialogs.</summary><div class="era-change-body"><pre>Updated &quot;wog native dialogs.era&quot; plugin to be more tolerant of unsupported image types for IF:E dialogs.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-9-16-l398"><summary><code>*</code> <strong>changed</strong> · lines 398–398: &quot;load only these scripts.txt&quot; file support is deprecated. It will be removed in Era 4.X versions. Duplicate entries in this file are ignored from…</summary><div class="era-change-body"><pre>&quot;load only these scripts.txt&quot; file support is deprecated. It will be removed in Era 4.X versions. Duplicate entries in this file are ignored from now.</pre><p>Related pages: [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-9-16-l399"><summary><code>*</code> <strong>changed</strong> · lines 399–400: Updated &quot;Era Erm Framework&quot; mod to use &quot;lib_end&quot; directory for some scripts. &#91;!&#93; Savegame file format was changed. Added format checking. Old sav…</summary><div class="era-change-body"><pre>Updated &quot;Era Erm Framework&quot; mod to use &quot;lib_end&quot; directory for some scripts.
&#91;!&#93; Savegame file format was changed. Added format checking. Old savegames will be loaded without scripts/plugins data.</pre><p>Related pages: [Framework functions](../framework/functions/) · [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-9-16-l402"><summary><code>-</code> <strong>fixed</strong> · lines 402–402: Fixed crash in network game in savegame dialog: RMB on some dialog items leaded to an invalid attempt to update ScreenLog without having initiali…</summary><div class="era-change-body"><pre>Fixed crash in network game in savegame dialog: RMB on some dialog items leaded to an invalid attempt to update ScreenLog without having initialized textWidget field.</pre></div></details>

</section>
:::

### ERA 3.9.15 {#era3-version-3-9-15}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-15-l421"><summary><code>+</code> <strong>added</strong> · lines 421–421: Released new mod &quot;Easy Cheats&quot; with really easy to type and remember cheats and built-in ERM console. Type &quot;help&quot; in chat input for details.</summary><div class="era-change-body"><pre>Released new mod &quot;Easy Cheats&quot; with really easy to type and remember cheats and built-in ERM console. Type &quot;help&quot; in chat input for details.</pre></div></details>

<details class="era-change" id="era3-v-3-9-15-l423"><summary><code>+</code> <strong>added</strong> · lines 423–430: Updated erm_hooker.era plugin to version 3.0. - Switched to modern patching API from era.dll. - Implemented protection from overlapping patches. …</summary><div class="era-change-body"><pre>Updated erm_hooker.era plugin to version 3.0.

  - Switched to modern patching API from era.dll.
  - Implemented protection from overlapping patches.
  - Implemented protection from patch restoration if patched code was changed by third-party code.
  - Improved patch bridge code.
  - Added version reporting (RMB on Credits in game menu).
  - Patch report file (Debug/Era/erm hooks.txt) uses human readable ERM function names instead of numeric IDs now.</pre></div></details>

<details class="era-change" id="era3-v-3-9-15-l432"><summary><code>+</code> <strong>added</strong> · lines 432–434: Added support for ERM script libraries. Scripts, located in &quot;Data/s/lib&quot; directory are considered library scripts. They are loaded before other g…</summary><div class="era-change-body"><pre>Added support for ERM script libraries. Scripts, located in &quot;Data/s/lib&quot; directory are considered library scripts. They are loaded before other global scripts and before     all map scripts (both internal and external). Such scripts must be propertly written, use only named variables and functions with prefixes. They must not influence the gameplay, interface or other scripts. They should be treated as a callable collection of functions, together with related constants and data structures.

  Era Erm Framework scripts are moved to &quot;Data/s/lib&quot; and can be used in maps now, even in maps, disabling global ERM scripts.</pre><p>Related pages: [Framework functions](../framework/functions/) · [Introduction to ERM](../start/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l436"><summary><code>+</code> <strong>added</strong> · lines 436–436: Fixed DL:H command. Any string is accepted as hint. The hint is copied to a dialog internal location and automatically freed on dialog closing. N…</summary><div class="era-change-body"><pre>Fixed DL:H command. Any string is accepted as hint. The hint is copied to a dialog internal location and automatically freed on dialog closing. No more need to use global z-variables for custom dialog hints. Hints are not interpolated at show time anymore.</pre><p>Related pages: [Custom dialogs (DL)](../receivers/dl/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l438"><summary><code>+</code> <strong>added</strong> · lines 438–438: Modified &quot;IF:L&quot; command to allow any string as argument and automatically escape &#x27;%&#x27; character. Previously strings with &#x27;%&#x27; led to garbage result…</summary><div class="era-change-body"><pre>Modified &quot;IF:L&quot; command to allow any string as argument and automatically escape &#x27;%&#x27; character. Previously strings with &#x27;%&#x27; led to garbage results or even crashes.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l439"><summary><code>+</code> <strong>added</strong> · lines 439–439: Modified &quot;HE:B0&quot;, &quot;HE:B1&quot;, &quot;HE:B3&quot; commands to allow any string as argument.</summary><div class="era-change-body"><pre>Modified &quot;HE:B0&quot;, &quot;HE:B1&quot;, &quot;HE:B3&quot; commands to allow any string as argument.</pre><p>Related pages: [Heroes (HE)](../receivers/he/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l441"><summary><code>+</code> <strong>added</strong> · lines 441–444: Rewritten WoG &quot;ApplyString&quot; and &quot;NewMesMan&quot; functions, allowing any string in multiple ERM commands (CA, LE, GE, etc). Disabled syntax of setting…</summary><div class="era-change-body"><pre>Rewritten WoG &quot;ApplyString&quot; and &quot;NewMesMan&quot; functions, allowing any string in multiple ERM commands (CA, LE, GE, etc).

  Disabled syntax of setting event message to the one from event with given ID (ex, &quot;GE:M30&quot; for event with ID 30).
  Deprecated syntax of using -1 instead of empty string.</pre><p>Related pages: [Global events (GE)](../receivers/ge/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l446"><summary><code>+</code> <strong>added</strong> · lines 446–446: Extended SN:K(str)/(ind)/&#91;?&#93;(strchar or char code) syntax. If result is integer variable, char code is returned instead.</summary><div class="era-change-body"><pre>Extended SN:K(str)/(ind)/&#91;?&#93;(strchar or char code) syntax. If result is integer variable, char code is returned instead.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l448"><summary><code>+</code> <strong>added</strong> · lines 448–452: Extended &#x27;VR:F&#x27; command with the 4-th parameter. VR(intVar):F(minValue)/(maxValue)/(showErrors)/(defaultValue); If (defaultValue) is specified an…</summary><div class="era-change-body"><pre>Extended &#x27;VR:F&#x27; command with the 4-th parameter.

  VR(intVar):F(minValue)/(maxValue)/(showErrors)/(defaultValue);

  If (defaultValue) is specified and variable does not fit (minValue)..(maxValue) range, it will be set to (defaultValue).</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l454"><summary><code>+</code> <strong>added</strong> · lines 454–454: Improved stability of dynamic ERM commands execution using &#x27;ExecErmCmd&#x27; API. Added support for all ERM 2 variables in command parameters.</summary><div class="era-change-body"><pre>Improved stability of dynamic ERM commands execution using &#x27;ExecErmCmd&#x27; API. Added support for all ERM 2 variables in command parameters.</pre></div></details>

<details class="era-change" id="era3-v-3-9-15-l455"><summary><code>+</code> <strong>added</strong> · lines 455–455: Extended ERM fast memory buffer for string literals and string arguments in ERM commands and triggers from 1 MB to 3 MB.</summary><div class="era-change-body"><pre>Extended ERM fast memory buffer for string literals and string arguments in ERM commands and triggers from 1 MB to 3 MB.</pre></div></details>

<details class="era-change" id="era3-v-3-9-15-l457"><summary><code>+</code> <strong>added</strong> · lines 457–459: Added possibility to increase buffer size for compiled erm scripts using heroes3.ini setting. The default value is 128 MB. Single ERM command nee…</summary><div class="era-change-body"><pre>Added possibility to increase buffer size for compiled erm scripts using heroes3.ini setting. The default value is 128 MB. Single ERM command need ~0.5 KB.

  CompiledErmBufSize = 134217728; maximum size of a buffer for compiled erm scripts (does not influence dynamic compilation on the fly using PersistErmCmd or ExecErmCmd)</pre><p>Related pages: [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l461"><summary><code>+</code> <strong>added</strong> · lines 461–461: Disabled ERM tracking for Era Erm Framework mouse and keyboard handling code.</summary><div class="era-change-body"><pre>Disabled ERM tracking for Era Erm Framework mouse and keyboard handling code.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l462"><summary><code>+</code> <strong>added</strong> · lines 462–462: Improved ERM tracking report formatting.</summary><div class="era-change-body"><pre>Improved ERM tracking report formatting.</pre></div></details>

<details class="era-change" id="era3-v-3-9-15-l464"><summary><code>+</code> <strong>added</strong> · lines 464–468: Added new event &quot;OnBeforeLoadGame&quot; for plugins. It occurs right after old game leaving and before new game loading. TOnBeforeLoadGameEvent = pack…</summary><div class="era-change-body"><pre>Added new event &quot;OnBeforeLoadGame&quot; for plugins. It occurs right after old game leaving and before new game loading.

  TOnBeforeLoadGameEvent = packed record
    FileName: pchar;
  end;</pre><p>Related pages: [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l479"><summary><code>+</code> <strong>added</strong> · lines 479–532: Added the following functions to Era Erm Framework: !?FU(Interpolate); ; Interpolates ERM variables inside given string (%v1, etc). Can be used f…</summary><div class="era-change-body"><pre>Added the following functions to Era Erm Framework:

  !?FU(Interpolate);
  ; Interpolates ERM variables inside given string (%v1, etc). Can be used for nested translation strings like %T(...) is json.
  !#VA(strPtr:x);    Source string.
  !#VA(resultPtr:x); OUT. Result string.

  Example:

  !!VRi^edu_age^:S33;
  !!VRs^edu_name^:S^Xeon^;
  !!VR(templateStr:z):S^%%s(edu_name) is %%i(edu_age) years old^;
  !!IF:M(templateStr); displays &quot;%s(edu_name) is %i(edu_age) years old&quot;
  !!FU(Interpolate):P(templateStr)/?(interpolatedStr:z);
  !!IF:M(interpolatedStr); displays &quot;Xeon is 33 years old&quot;

  !?FU(Trim);
  ; Trims #0..#32 characters (space and control characters) from both sides of the string.
  !#VA(strPtr:x);    Source string.
  !#VA(resultPtr:x); OUT. Result string.

  Example:

  !!VR(text:z):S^    Hello World    ^;
  !!FU(Trim):P(text)/?(text);
  !!IF:M^%(text)^; displays &quot;Hello World&quot; without leading and trailing spaces

  !?FU(StrPos);
  ; Finds the first occurance of needle string in the haystack string. Returns offset from string start or -1 for faulure
  !#VA(haystackPtr:x); String to search in
  !#VA(needlePtr:x);   String to seacrh for
  !#VA(result:x);      Result offset in the haystack string or -1.
  !#VA(offset:x);      Zero-based offset in haystack string to start search from. Default: 0.

  Example:

  !!VR(text:z):S^Hello World^;
  !!FU(StrPos):P(text)/^World^/?(substrPos:y);
  !!IF:M^%(substrPos)^; displays &quot;6&quot;


  !?FU(StrReplace);
  ; Replaces all occurencies of Pattern string in the Source string with Replacement string. Returns final string.
  ; Can be used inside triggers only.
  !#VA(sourcePtr:x);      Original string to perform replacements in
  !#VA(patternPtr:x);     What string to replace
  !#VA(replacementPtr:x); Replacement string
  !#VA(result:x);         Result string index

  Example:

  !!VR(text:z):S^You should cast the spell. Spell casting increases your intelligence^;
  !!FU(StrReplace):P(text)/^cast^/^learn^/?(text);
  !!IF:M^%(text)^; You should learn the spell. Spell learning increases your intelligence</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l534"><summary><code>+</code> <strong>added</strong> · lines 534–537: Added the following constants to Era Erm Framework: CHAT_EVENT_TYPE_XXX for &#x27;OnChat&#x27; event subtype CHAT_EVENT_RESULT_XXX for &#x27;OnChat&#x27; event resul…</summary><div class="era-change-body"><pre>Added the following constants to Era Erm Framework:

  CHAT_EVENT_TYPE_XXX   for &#x27;OnChat&#x27; event subtype
  CHAT_EVENT_RESULT_XXX for &#x27;OnChat&#x27; event result</pre><p>Related pages: [Game chat (OnChat)](../triggers/onchat/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l539"><summary><code>+</code> <strong>added</strong> · lines 539–579: Added the following exported functions to era.dll: (* Compiles single ERM command without !! prefix and conditions and saves its compiled code in…</summary><div class="era-change-body"><pre>Added the following exported functions to era.dll:

  (* Compiles single ERM command without !! prefix and conditions and saves its compiled code in persisted memory storage.
     Returns non-nil opaque pointer on success and nil on failure. Trailing semicolon is optional *)
  function PersistErmCmd (CmdStr: pchar): {n} pointer; stdcall;

  (* Executes previously compiled and persisted ERM command. Use PersistErmCmd API for compilation *)
  procedure ExecPersistedErmCmd (PersistedCmd: pointer); stdcall;

  (* Translates given string. Returns static translated string address, which will never be deallocated *)
  function trStatic (const Key: pchar): pchar; stdcall;

  (* Translates given string. Pass parameters as pairs of (key, value). Returns temporary string address, which must be immediately copied to a safe location *)
  function trTemp (const Key: pchar; Params: pointer to array of pchar; LastParamIndex: integer): pchar; stdcall;

  (* Returns human readable string for ERM event ID. Usually it&#x27;s ERM trigger human readable name or ERM function name.
     The caller MUST free returned memory block using MemFree from era.dll *)
  function GetTriggerReadableName (EventId: integer): {O} pchar; stdcall;

  (* Installs new hook at specified address. Returns pointer to bridge with original code. Optionally specify address of a pointer to write applied patch structure pointer to.
     It will allow to rollback the patch later.
     Handler function must use stdcall convention. It receives hook context pointer and must return non-zero value in order to execute overwritten code.  *)
  function HookCode (Addr: pointer; HandlerFunc: THookHandler; {n} AppliedPatch: ppointer): pointer; stdcall;

  type
    PHookContext = ^THookContext;
    THookContext = packed record
      EDI, ESI, EBP, ESP, EBX, EDX, ECX, EAX: integer;
      RetAddr:                                pointer;
    end;

    THookHandler = function (Context: PHookContext): LONGBOOL; stdcall;

  (* Calculates number of bytes to be overwritten during hook placement *)
  function CalcHookPatchSize (Addr: pointer): integer; stdcall;

  (* The patch will be rollback and internal memory and freed. Do not use it anymore *)
  procedure RollbackAppliedPatch ({O} AppliedPatch: pointer); stdcall;

  (* Frees applied patch structure. Use it if you don&#x27;t plan to rollback it anymore *)
  procedure FreeAppliedPatch ({O} AppliedPatch: pointer); stdcall;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l581"><summary><code>*</code> <strong>changed</strong> · lines 581–593: Modified some exported function signatures. Many of them now use TInt32Bool type (32 bit 0 or 1) instead of boolean for better compatiblity with …</summary><div class="era-change-body"><pre>Modified some exported function signatures. Many of them now use TInt32Bool type (32 bit 0 or 1) instead of boolean for better compatiblity with ERM.

  type
    TIsCommanderIdFunc       = function (MonId: integer): TInt32Bool stdcall;
    TIsElixirOfLifeStackFunc = function (Stack: Heroes.PBattleStack): TInt32Bool stdcall;

  function IsCommanderId (MonId: integer): TInt32Bool; stdcall;
  function SetIsCommanderIdFunc (NewImpl: TIsCommanderIdFunc): {n} TIsCommanderIdFunc; stdcall;
  function IsElixirOfLifeStack (Stack: Heroes.PBattleStack): TInt32Bool; stdcall;
  function SetIsElixirOfLifeStackFunc (NewImpl: TIsElixirOfLifeStackFunc): {n} TIsElixirOfLifeStackFunc; stdcall;

  (* Returns 32-character unique key for current game process. The ID will be unique between multiple game runs. *)
  procedure GetProcessGuid: static_pchar; stdcall;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l595"><summary><code>*</code> <strong>changed</strong> · lines 595–595: Increase performance of &quot;Substr&quot; function from Era Erm Framework.</summary><div class="era-change-body"><pre>Increase performance of &quot;Substr&quot; function from Era Erm Framework.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l598"><summary><code>-</code> <strong>fixed</strong> · lines 598–598: Fixed bug: &quot;OnWinGame&quot; and &quot;OnLoseGame&quot; events were not executed after &quot;OnGameLeave&quot;, because ERM engine was disabled by that time. Now &quot;OnWinGam…</summary><div class="era-change-body"><pre>Fixed bug: &quot;OnWinGame&quot; and &quot;OnLoseGame&quot; events were not executed after &quot;OnGameLeave&quot;, because ERM engine was disabled by that time. Now &quot;OnWinGame&quot; and &quot;OnLoseGame&quot; occur right before &quot;OnGameLeave&quot;.</pre><p>Related pages: [Winning the game (OnWinGame)](../triggers/onwingame/) · [Framework events](../framework/events/) · [Losing the game (OnLoseGame)](../triggers/onlosegame/) · [Leaving the game (OnGameLeave)](../triggers/ongameleave/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-15-l600"><summary><code>-</code> <strong>fixed</strong> · lines 600–600: Fixed ERM bug. Local array item access by variable index lacked lazy evaluation support. Constructions like &quot;!!if&amp;v1&lt;&gt;v1/(array&#91;hugeValueVar&#93;)&quot; u…</summary><div class="era-change-body"><pre>Fixed ERM bug. Local array item access by variable index lacked lazy evaluation support. Constructions like &quot;!!if&amp;v1&lt;&gt;v1/(array&#91;hugeValueVar&#93;)&quot; used to produce runtime warnings. For now invalid item index is changed into 0, producing runtime error only in case of real item access.</pre></div></details>

<details class="era-change" id="era3-v-3-9-15-l605"><summary><code>-</code> <strong>fixed</strong> · lines 605–605: Fixed bug: ERM memory context was lost in exceptions because of new fast exit to main menu implementation.</summary><div class="era-change-body"><pre>Fixed bug: ERM memory context was lost in exceptions because of new fast exit to main menu implementation.</pre></div></details>

<details class="era-change" id="era3-v-3-9-15-l606"><summary><code>-</code> <strong>fixed</strong> · lines 606–606: Fixed WoG complete AI battle detection. Autoclosing dialog timer is not compared to 0 anymore. The &quot;gosolo&quot; cheat works in battles again without …</summary><div class="era-change-body"><pre>Fixed WoG complete AI battle detection. Autoclosing dialog timer is not compared to 0 anymore. The &quot;gosolo&quot; cheat works in battles again without ERM errors.</pre></div></details>

<details class="era-change" id="era3-v-3-9-15-l608"><summary><code>-</code> <strong>fixed</strong> · lines 608–608: Deprecated exported &#x27;ApiHook&#x27; and &#x27;Hook&#x27; functions. &#x27;Hook&#x27; will show error message, while ApiHook is preserved for legacy only. Use &#x27;HookCode&#x27; in…</summary><div class="era-change-body"><pre>Deprecated exported &#x27;ApiHook&#x27; and &#x27;Hook&#x27; functions. &#x27;Hook&#x27; will show error message, while ApiHook is preserved for legacy only. Use &#x27;HookCode&#x27; instead or patcher_x86 API directly.</pre></div></details>

<details class="era-change" id="era3-v-3-9-15-l610"><summary><code>-</code> <strong>fixed</strong> · lines 610–610: Fixed old event handling bug. Triggering ERM event with disabled ERM resulted in global event not being generated either. For example, Era and pl…</summary><div class="era-change-body"><pre>Fixed old event handling bug. Triggering ERM event with disabled ERM resulted in global event not being generated either. For example, Era and plugins could not handle &#x27;OnSavegameRead&#x27; event if ERM was disabled at the moment of savegame loading.</pre><p>Related pages: [Reading save data (OnSavegameRead)](../triggers/onsavegameread/) · [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

</section>
:::

### ERA 3.9.14 {#era3-version-3-9-14}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-14-l641"><summary><code>+</code> <strong>added</strong> · lines 641–657: Added runtime API for controlling ERM tracking. It can be used to omit well tested library from final ERM tracking log or for tracking particular…</summary><div class="era-change-body"><pre>Added runtime API for controlling ERM tracking. It can be used to omit well tested library from final ERM tracking log or for tracking particular code units only.

  Added new option &quot;Debug.AllowRuntimeErmTrackingControl&quot; to heroes3.ini. The option enables or disables runtime control on ERM tracking. It&#x27;s enabled by default and should be disabled in case of complex bug tracking, where no code can be trusted.

  The following functions were exported in era.dll:

  // Pauses ERM tracking. All previously tracked info is preserved.
  procedure DisableErmTracking; stdcall;

  // Resumes ERM tracking.
  procedure EnableErmTracking; stdcall;

  // Sets ERM tracking to value, specified in heroes3.ini (the one used before runtime manipulations)
  procedure RestoreErmTracking; stdcall;

  // Clears all previously recorded tracks.
  procedure ResetErmTracking; stdcall;</pre></div></details>

<details class="era-change" id="era3-v-3-9-14-l659"><summary><code>+</code> <strong>added</strong> · lines 659–659: Added automatical ERM tracking reset and settings restoration on game start or load.</summary><div class="era-change-body"><pre>Added automatical ERM tracking reset and settings restoration on game start or load.</pre></div></details>

<details class="era-change" id="era3-v-3-9-14-l662"><summary><code>+</code> <strong>added</strong> · lines 662–671: Added support for &quot;OnGameEnter&quot; and &quot;OnGameLeave&quot; events in network games. Previously savegame transfer and loading on remote side used to trigge…</summary><div class="era-change-body"><pre>Added support for &quot;OnGameEnter&quot; and &quot;OnGameLeave&quot; events in network games. Previously savegame transfer and loading on remote side used to trigger &quot;OnAfterSavegameLoad&quot;, but not &quot;OnGameLeave&quot; + &quot;OnGameEnter&quot;. That&#x27;s why using erm_hooker plugin with &quot;OnGameEnter&quot; event resulted in unset hooks after the first end of turn.

  In network games the sequence of events after remote side end of turn is the following:

  &quot;OnGameLeave&quot;     - here were restore UN:C patches and erm_hooker unset hooks
  &quot;OnSavegameRead&quot;  - reading transferred savegame
  &quot;OnAfterLoadGame&quot; - fully loaded trasferred savegame
  &quot;OnGameEnter&quot;     - install UN:C patches and ERM hooks once again

&#91;!&#93; Warning. Using &quot;OnGameEnter&quot; for ERM hooks in network games does not work in Era &lt; 3.9.14.</pre><p>Related pages: [General game operations (UN)](../receivers/un/) · [Entering the game (OnGameEnter)](../triggers/ongameenter/) · [Framework events](../framework/events/) · [Leaving the game (OnGameLeave)](../triggers/ongameleave/) · [Reading save data (OnSavegameRead)](../triggers/onsavegameread/) · [ERM triggers and events](../triggers/) · [UN:C — memory access](../un-c/)</p></div></details>

<details class="era-change" id="era3-v-3-9-14-l673"><summary><code>+</code> <strong>added</strong> · lines 673–673: ERM execution is disabled after &quot;OnGameLeave&quot; event. MP3 and real time triggers are not executed outside of game main loop anymore. Previously tr…</summary><div class="era-change-body"><pre>ERM execution is disabled after &quot;OnGameLeave&quot; event. MP3 and real time triggers are not executed outside of game main loop anymore. Previously triggers were executed in the context of game main menu.</pre><p>Related pages: [Leaving the game (OnGameLeave)](../triggers/ongameleave/) · [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-14-l676"><summary><code>*</code> <strong>changed</strong> · lines 676–676: &quot;OnAdvMapTileHint&quot; was renamed to &quot;OnAdventureMapTileHint&quot;. The previous name is deprecated, but is kept for compatibility reasons.</summary><div class="era-change-body"><pre>&quot;OnAdvMapTileHint&quot; was renamed to &quot;OnAdventureMapTileHint&quot;. The previous name is deprecated, but is kept for compatibility reasons.</pre><p>Related pages: [Framework events](../framework/events/) · [Adventure-map tile hint (OnAdventureMapTileHint)](../triggers/onadventuremaptilehint/)</p></div></details>

<details class="era-change" id="era3-v-3-9-14-l677"><summary><code>*</code> <strong>changed</strong> · lines 677–677: Deprecated &#x27;OnAbnormalGameLeave&#x27; event. HD mod way to return from combat screen to main game menu is not supported anymore.</summary><div class="era-change-body"><pre>Deprecated &#x27;OnAbnormalGameLeave&#x27; event. HD mod way to return from combat screen to main game menu is not supported anymore.</pre><p>Related pages: [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-14-l679"><summary><code>-</code> <strong>fixed</strong> · lines 679–679: IP selection dialog will no be shown in multiplayer setup screen if PC has only one IP address available.</summary><div class="era-change-body"><pre>IP selection dialog will no be shown in multiplayer setup screen if PC has only one IP address available.</pre></div></details>

<details class="era-change" id="era3-v-3-9-14-l680"><summary><code>-</code> <strong>fixed</strong> · lines 680–680: Fixed ERM commands tracking with &#x27;;&#x27; inside string literals (ex. ^...;...^).</summary><div class="era-change-body"><pre>Fixed ERM commands tracking with &#x27;;&#x27; inside string literals (ex. ^...;...^).</pre></div></details>

</section>
:::

### ERA 3.9.13 {#era3-version-3-9-13}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-13-l687"><summary><code>+</code> <strong>added</strong> · lines 687–687: Improved exceptions tolerance for ERM engine (triggers and commands). ERM memory clean up is performed in case of exception, allowing to reuse ER…</summary><div class="era-change-body"><pre>Improved exceptions tolerance for ERM engine (triggers and commands). ERM memory clean up is performed in case of exception, allowing to reuse ERM engine later after recovery. Exceptions may be used, for instance, to trigger fast quit from deeply nested dialogs.</pre></div></details>

<details class="era-change" id="era3-v-3-9-13-l689"><summary><code>+</code> <strong>added</strong> · lines 689–689: Improved crash/exception handling. HD and WoG handlers are not called at all. Era&#x27;s handler is called only once. Crash reports become more stable…</summary><div class="era-change-body"><pre>Improved crash/exception handling. HD and WoG handlers are not called at all. Era&#x27;s handler is called only once. Crash reports become more stable and accurate. Previosly multiple exception could take place and override the same logs.</pre></div></details>

<details class="era-change" id="era3-v-3-9-13-l691"><summary><code>+</code> <strong>added</strong> · lines 691–707: Added experimental (may be subject of removal) exported function to quit from any dialog to main game menu. // Exits adventure manager dialogs an…</summary><div class="era-change-body"><pre>Added experimental (may be subject of removal) exported function to quit from any dialog to main game menu.

  // Exits adventure manager dialogs and/or all subdialogs and immediately returns to game menu screen by raising special exception.
  // TargetScreen: -1 (root screen), 102 - Load Menu, 103..107, where 107 is restart map, etc *)
  procedure FastQuitToGameMenu (TargetScreen: integer); stdcall;

  Example usage script, implementing CTRL + L hotkey to got to Game Load screen from adventure map or battle screen:

  !#DC(GAME_MENU_TARGET_LOAD_GAME) = 102;

  !?FU(OnKeyPressed_AdvMap)&amp;i^key_ctrl^/i^key^=(KEY_L);
  !#VA(key:x) (block:x);
  !!SN:F^FastQuitToGameMenu^/(GAME_MENU_TARGET_LOAD_GAME);

  !?FU(OnKeyPressed_Battle)&amp;i^key_ctrl^/i^key^=(KEY_L);
  !#VA(key:x) (block:x);
  !!SN:F^FastQuitToGameMenu^/(GAME_MENU_TARGET_LOAD_GAME);</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [ERA services, memory and sound (SN)](../receivers/sn/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-9-13-l709"><summary><code>+</code> <strong>added</strong> · lines 709–710: Commanders without UNDEAD flag are also handled by Elixir of Life now. Plugins may override IsElixirOfLifeStack exported function to implement ot…</summary><div class="era-change-body"><pre>Commanders without UNDEAD flag are also handled by Elixir of Life now. Plugins may override IsElixirOfLifeStack exported function
    to implement other behavior.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-9-13-l712"><summary><code>+</code> <strong>added</strong> · lines 712–722: Added exported functions to era.dll, more steps on moving WoG hard-coded mechanics into replacable API format. API setters return previously set …</summary><div class="era-change-body"><pre>Added exported functions to era.dll, more steps on moving WoG hard-coded mechanics into replacable API format.
  API setters return previously set implementation functions or null.

  type
    TIsCommanderIdFunc       = function (MonId: integer): boolean stdcall;
    TIsElixirOfLifeStackFunc = function (Stack: Heroes.PBattleStack): boolean stdcall;

  function IsCommanderId (MonId: integer): boolean; stdcall;
  function SetIsCommanderIdFunc (NewImpl: TIsCommanderIdFunc): {n} TIsCommanderIdFunc; stdcall;
  function IsElixirOfLifeStack (Stack: Heroes.PBattleStack): boolean; stdcall;
  function SetIsElixirOfLifeStackFunc (NewImpl: TIsElixirOfLifeStackFunc): {n} TIsElixirOfLifeStackFunc; stdcall;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

</section>
:::

### ERA 3.9.12 {#era3-version-3-9-12}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-12-l727"><summary><code>+</code> <strong>added</strong> · lines 727–759: Implemented advanced ERM memory synchronization means in network games. Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for f…</summary><div class="era-change-body"><pre>Implemented advanced ERM memory synchronization means in network games.

  Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for further synchronization.
  Syntax:
    !!IP:M^var_name_1^/^var_name_2^/...;
    !!IP:M0/^array_var_name_1^/^array_var_name_2^/...;

  The second syntax allows to mark global variables, holding IDs of global dynamic arrays (SN:M) for synchronization.
  While array IDs may differ on remote sides, it&#x27;s possible to synchronize array contents, when array IDs are stored in named global variables.
  Array MUST exist on the side, calling !!IP:M and global variable with array ID MAY have zero value on remote side. The array will be created from scratch
  in this case. If arrays exist on both sides, their item types (string/int) and storage types (temp, trigger local, stored) MUST be the same.

  Added !!IP:S command to perform synchronization of all marked variables and arrays. Use !!IP:D to specify targets for synchronization.
  After calling it marked variables cache is cleared.
  !!IP:S is automatically called right before sending &#x27;start battle&#x27; network event with !!IP:D-1.

  Example of pre-battle ERM memory synchronization between remote sides:

  !#FU(NewIntArray):P?i^edu_intArray^/(M_STORED);                            &#91;create globally stored dynamic integer array with ID in i^edu_intArray^&#93;

  !?FU(OnBeforeBattle);                                                      &#91;occurs on attacker&#x27;s local side only&#93;
  !!VRi^edu_randomInt^:R0/0/100000;                                          &#91;generate random variable&#93;
  !!VRs^edu_randomStr^:S^the random %i(edu_randomInt)^;                      &#91;generate random string&#93;
  !!FU(Array_Push):Pi^edu_intArray^/100/200/300/400/500;                     &#91;initialize dynamic integer array&#93;
  !!FU(NewStrArray)&amp;i^edu_strArray^=(NULL):P?i^edu_strArray^/(M_STORED);     &#91;conditionally initialize dynamic string array&#93;
  !!FU(Array_Push):Pi^edu_strArray^/^Corwin^/^Deo^/^Bers^/^Silver^/^Bes^;    &#91;fill dynamic string array with values&#93;
  !!IP:M^edu_randomInt^/^edu_randomStr^ M0/^edu_intArray^ M0/^edu_strArray^; &#91;mark global variables and arrays for synchronization&#93;
  !!IP:S; &#91;May be skipped here, because it will be executed automatically soon, but it&#x27;s usefull when you synchronize data on demand in battle or on adv map&#93;

  !?FU(OnBeforeBattleUniversal);                                                    &#91;occurs on both network sides&#93;
  !!IF:M^%i(edu_randomInt) %s(edu_randomStr)^;                                      &#91;display global variables, which must be synchronized by this time&#93;
  !!FU(Array_Join):Pi^edu_intArray^/?(text1:z)/^ ^ Pi^edu_strArray^/?(text2:z)/^ ^; &#91;display global arrays, which must be synchornized by this time&#93;
  !!IF:M^%(text1) %(text2)^;</pre><p>Related pages: [Network synchronization (IP)](../receivers/ip/) · [Function handler (FU)](../triggers/fu/) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [ERA services, memory and sound (SN)](../receivers/sn/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-12-l761"><summary><code>+</code> <strong>added</strong> · lines 761–761: Added GAME_TYPE_XXX constants to Era Erm Framework (see UN:V 5-th parameter).</summary><div class="era-change-body"><pre>Added GAME_TYPE_XXX constants to Era Erm Framework (see UN:V 5-th parameter).</pre><p>Related pages: [General game operations (UN)](../receivers/un/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-12-l763"><summary><code>+</code> <strong>added</strong> · lines 763–766: Added the following global variables to Era Erm Framework: i^battle_isActingSideUiUser^: bool. Is TRUE if acting side player is local human and t…</summary><div class="era-change-body"><pre>Added the following global variables to Era Erm Framework:

  i^battle_isActingSideUiUser^: bool. Is TRUE if acting side player is local human and thus can use all UI actions.
                                      Use it to prevent non-active network player from performing state changing UI actions.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-12-l769"><summary><code>*</code> <strong>changed</strong> · lines 769–799: The order of network battle events: !?FU(OnBeforeBattle); on attacker side only, battle may be cancelled !?FU(OnBeforeBattleUniversal); on attack…</summary><div class="era-change-body"><pre>The order of network battle events:

  !?FU(OnBeforeBattle);               on attacker side only, battle may be cancelled
  !?FU(OnBeforeBattleUniversal);      on attacker side, battle may still be cancelled
  !?FU(OnBeforeBattleBeforeDataSend); on attacker side only, IP:V/W/M commands may be used
  ; IP:S is called automatically with IP:D-1
  ; battle start network packet is sent asynchronously
  ; other battle triggers occur on attackers side without any waiting
  ; battle screen is shown and becomes active

  -------------------------------------------------------------------
  ; defender receives synchronized advanced ERM variables
  ; defender receives battle start network event with regular IP:V/W variables for synchronization
  !?FU(OnBeforeBattleAfterDataReceived); on defender side only
  !?FU(OnBeforeBattleForThisPcDefender); on defender side only
  !?FU(OnBeforeBattleUniversal);         on defender side
  ; battle screen is shown and becomes active
  ; ...
  ; battle ends
  -------------------------------------------------------------------

  ; defender level up and artifact capturing screens
  !?FU(OnAfterBattleBeforeDataSend); on defender side only
  ; IP:S is called automatically with IP:D-1
  ; end of battle event is sent to attacker asynchronously
  !?FU(OnAfterBattleUniversal);      on defender side

  -------------------------------------------------------------------
  !?FU(OnAfterBattleAfterDataReceived); on attacker side only
  !?FU(OnAfterBattle); on attacker side only
  !?FU(OnAfterBattleUniversal); on attacker side</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Network synchronization (IP)](../receivers/ip/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-12-l802"><summary><code>+</code> <strong>added</strong> · lines 802–862: Added the following functions to Era Erm Framework: !?FU(Array_Move); ; Copies part of the array into another part of the array, overwriting exis…</summary><div class="era-change-body"><pre>Added the following functions to Era Erm Framework:

  !?FU(Array_Move);
  ; Copies part of the array into another part of the array, overwriting existing values in a smart way.
  ; The parts may have overlapping indexes. The size of array never changes.
  ; Example: X X X &#91;A B C&#93; X X {X X X} =&gt; X X X &#91;A B C&#93; X X {A B C}
  ; Example: X X X &#91;A {B C&#93; X} X X X X =&gt; X X X &#91;A {A B&#93; C} X X X X
  !#VA(list:x);    Array ID.
  !#VA(offset:x);  Index to start copy from.
  !#VA(length:x);  Number of items to copy.
  !#VR(destInd:x); Position in array to copy items to (overwriting existing values).

  Example:

  !?FU(OnAfterErmInstructions);
  !!FU(NewIntArray):P?(intArr:y);
  !!FU(Array_Push):P(intArr)/100/200/300/400/500/600;
  !!FU(Array_Move):P(intArr)/1/2/4;
  !!FU(Array_Join):P(intArr)/?(text:z)/^ ^;
  !!IF:M^%(text)^; 100 &#91;200 300&#93; 400 &#91;200 300&#93;

  !!FU(NewStrArray):P?(strArr:y);
  !!FU(Array_Push):P(strArr)/^Corwin^/^Deo^/^Bes^/^Druid^/^Solmyr2000^/^Silver^/^gamecreator^;
  !!FU(Array_Move):P(strArr)/4/3/1;
  !!FU(Array_Join):P(strArr)/?(text:z)/^ ^;
  !!IF:M^%(text)^; Corwin Solmyr2000 Silver gamecreator Solmyr2000 Silver gamecreator


  !?FU(Array_Splice);
  ; Deletes specified number of items from start index and inserts new items in the same position afterwards.
  ; The function can be used for items deletion, insertion or replacement.
  !#VA(list:x);              ID of array to perform splicing in.
  !#VA(startIndex:x);        Index of first item to delete. If it&#x27;s negative, it means &quot;from array end&quot;. Thus -1 is the last array item.
  !#VA(numItemsToDelete:x);  Optional. Number of items to delete.
  ;                          If not specified, all items are deleted from start index till array end.
  ;                          If it is positive, then that many elements will be removed.
  ;                          If it is negative, then the end of the removed portion will be that many elements from the end of the array.
  ;                          If it is zero, no elements will be removed.
  !#VA(firstItemToInsert:x); ... Up to 13 arguments to insert in the position of deleted items.

  Example:

  !?FU(OnAfterErmInstructions);
  !!FU(NewIntArray):P?(intArr:y);
  !!FU(Array_Push):P(intArr)/100/200/300/400/500/600;
  !!FU(Array_Splice):P(intArr)/3/1/-7/-6/-5;
  !!FU(Array_Join):P(intArr)/?(text:z)/^ ^;
  !!IF:M^%(text)^; 100 200 300 -7 -6 -5 400 500 600

  !!FU(NewStrArray):P?(strArr:y);
  !!FU(Array_Push):P(strArr)/^Corwin^/^Deo^/^Bes^/^Druid^/^Solmyr2000^/^Silver^/^gamecreator^;
  !!FU(Array_Splice):P(strArr)/-5/2/^why^/^not^;
  !!FU(Array_Join):P(strArr)/?(text:z)/^ ^;
  !!IF:M^%(text)^; Corwin Deo why not Solmyr2000 Silver gamecreator


  !?FU(ActivateNextStack);
  ; Finds and activates next stack. Returns TRUE on success and FALSE if nobody can move in this phase.
  ; TRUE is returned before round end and before waiting phase start.
  ; Credits: Archer
  !#VA(result:x);</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-12-l864"><summary><code>+</code> <strong>added</strong> · lines 864–873: Implemented possibility to select desired IP for multiplayer gaming. Vanilla game uses the first found IP address for PC, while PC may belong to …</summary><div class="era-change-body"><pre>Implemented possibility to select desired IP for multiplayer gaming.
    Vanilla game uses the first found IP address for PC, while PC may belong to multiple networks: LAN, WLAN, Virtual LAN, Internet (white IP address).
    Era will show radio dialog if necessary to allow user to specify the desired network to play in.

    A new option was added to heroes3.ini for this purpose:

    AutoSelectPcIpMask = IP mask like 192.168.5.* or 10.13.*
    ------------------
    If specified (non empty), Era will automatically select the first IP, matching the mask (? for any single character, * for any number of characters)
    without displaying radio dialog. If no PC address matches the mask, the dialog will still be shown.</pre></div></details>

<details class="era-change" id="era3-v-3-9-12-l875"><summary><code>+</code> <strong>added</strong> · lines 875–881: Added the following exported functions to era.dll: // Allocates new function ID and binds it to specified name if name is free, otherwise returns…</summary><div class="era-change-body"><pre>Added the following exported functions to era.dll:

  // Allocates new function ID and binds it to specified name if name is free, otherwise returns already binded ID.
  // This function can be used to implement custom ERM events in plugins.
  // The result is 1 if new ID was allocated, 0 otherwise.
  function AllocErmFunc (FuncName: pchar; {i} out FuncId: integer): TDwordBool; stdcall;
  typedef bool (__stdcall* TAllocErmFunc) (const char* EventName, int32_t &amp;EventId);</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-12-l883"><summary><code>+</code> <strong>added</strong> · lines 883–883: Added new event for plugins/Lua: &#x27;OnAfterReloadLanguageData&#x27;. It occurs whenever Era reloads all language json data from disk.</summary><div class="era-change-body"><pre>Added new event for plugins/Lua: &#x27;OnAfterReloadLanguageData&#x27;. It occurs whenever Era reloads all language json data from disk.</pre><p>Related pages: [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-12-l885"><summary><code>+</code> <strong>added</strong> · lines 885–932: Rewritten creature regeneration ability support. (!) Plugins should not hook regeneration code and should use Era &#x27;SetRegenerationAbility&#x27; API in…</summary><div class="era-change-body"><pre>Rewritten creature regeneration ability support.
  (!) Plugins should not hook regeneration code and should use Era &#x27;SetRegenerationAbility&#x27; API instead.

  Era introduces term &quot;Standard regeneration ability&quot;, which value is calculated for any battle stack using the following formula:
    Max(0.4 * Average upgraded 7-level creature HP &#91;9 towns only&#93;, 20% of current stack Hit Points attribute = 0.2 * BM:H)

  For SoD average 7-level creature health is 250 and 0.4 * 250 = 100. It means, that standard regeneration ability heals at least 150 HP
  and at most 20% of maximum HP, so that it will never be too imbalanced for commanders, henchmen or super bosses.
  Because all 9 towns are taken into account, the regeneration value will scale if scripts multiply all creature health by the same amount.
  For instance, enabling &#x27;Double creature health&#x27; option will change standard regeneration value minimum to 100 * 2 = 200.

  Any creature can be assigned a regeneration ability with a certain application chance (0-100%) and two additional values:
  fixed hit points and hit points in percents. The maximum of those two will be used for healing. Negative value for fixed hit points
  mean &quot;use standard formula&quot;. In this case hit points in percents are ignored.

  The Elixir of Life artifact has effect of standard regeneration ability. If it&#x27;s regeneraion value is greater, than the native one, it
  will be used instead.

  The following creatures for now have standard regeneration ability with 100% chance: Wight, Wraith, Troll, Hell Hydra,
  Commander (if Regeneration perk is aquired).

  Additionally introduced new ERM event &#x27;OnBattleStackRegeneration&#x27; with three parameters: (stackId, finalValue, stdValue).
  It occurs when real regeneration takes place (once per round per each stack) and may be used to change regeneration points for any creature
  and thus implement any complex regeneration logics for any stack, even stacks without native regeneration ability.

  - &#x27;stackId&#x27;    is 0..41.
  - &#x27;finalValue&#x27; is final heal points to use. Negative values will be treated as 0.
  - &#x27;stdValue&#x27;   standard regeneration value, calculated by above mentioned formula.

  Script writes may modify finalValue argument in order to assign/remove/change regeneration value for current event.

  Usage:

  !?FU(OnBattleStackRegeneration);
  !#VA(stackId:x) (finalValue:x) (stdValue:x);
  !!BM(stackId):T?(monType:y);

  ; Castle creatures get 15 HP regeneration ability, but only if applied abilities had effect &lt; 15 HP
  !!VR(finalValue)&amp;(monType)&gt;=(MON_PIKEMAN)/(monType)&lt;=(MON_ARCHANGEL)/(finalValue)&lt;15:S15;

  ; Azure dragons got native regeneration ability
  !!VR(finalValue)&amp;(monType)=(MON_AZURE_DRAGON):S(stdValue);

  ; Sacred Phoenixes got full HP regeneration ability
  !!VR(finalValue)&amp;(monType)=(MON_SACRED_PHOENIX):S999999;

  ; Imps will never be able to regenerate
  !!VR(finalValue)|(monType)=(MON_IMP)/(monType)=(MON_FAMILIAR):S0;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Battle stack (BM)](../receivers/bm/) · [Variables and expressions (VR)](../receivers/vr/) · [Stack regeneration amount (OnBattleStackRegeneration)](../triggers/onbattlestackregeneration/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/) · [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-9-12-l934"><summary><code>+</code> <strong>added</strong> · lines 934–942: Exported function &#x27;SetRegenerationAbility&#x27; in era.dll for plugins only (like new creature plugins) and/or global map-mods. All plugins should use…</summary><div class="era-change-body"><pre>Exported function &#x27;SetRegenerationAbility&#x27; in era.dll for plugins only (like new creature plugins) and/or global map-mods.
  All plugins should use this function to turn on/off regeneration ability instead of manually hooking game code.

  // Assigns or removes regeneration ability from specified creature. The chance of regeneration is usually 0..100, where
  // 0 means no regeneration ability at all and 100 means always.
  // HitPoints is fixed hit points amount or -1 to use standard formula
  // HpPercents is 0..100 value and means percent of battle stack hit points attribute.
  // The final value will be maximum of HitPoints and StackHitPoints * HpPercents / 100.
  void (__stdcall) SetRegenerationAbility (int32_t MonId, int32_t Chance, int32_t HitPoints, int32_t HpPercents);</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-9-12-l944"><summary><code>+</code> <strong>added</strong> · lines 944–950: Exported function &#x27;SetStdRegenerationEffect&#x27; in era.dll for plugins only (like new creature plugins) and/or global map-mods. The function changes…</summary><div class="era-change-body"><pre>Exported function &#x27;SetStdRegenerationEffect&#x27; in era.dll for plugins only  (like new creature plugins) and/or global map-mods.
  The function changes parameters of standard regeneration effect.

  // Level7Percents is 0..100 percentage value of average 7 level creature. Default is 40. 40% of 250 is 100 HP.
  // HpPercents is 0..100 value and means percent of battle stack hit points attribute.
  // The final value will be maximum of above mentioned parameters, converted to hit points.
  void (__stdcall) SetStdRegenerationEffect (int32_t Level7Percents, int32_t int32_t HpPercents);</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-9-12-l953"><summary><code>-</code> <strong>fixed</strong> · lines 953–953: Fixed bug: local static string arrays indexes were incorrectly calculated for non-const indexes in ERM 2 scripts, ex. (arr&#91;i&#93;).</summary><div class="era-change-body"><pre>Fixed bug: local static string arrays indexes were incorrectly calculated for non-const indexes in ERM 2 scripts, ex. (arr&#91;i&#93;).</pre><p>Related pages: [Introduction to ERM](../start/)</p></div></details>

</section>
:::

### ERA 3.9.11 {#era3-version-3-9-11}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-11-l960"><summary><code>*</code> <strong>changed</strong> · lines 960–960: Changed &quot;OnBeforeBattleAction&quot; event to trigger before Enchantress, Hell steed and creature experience mass spells processing.</summary><div class="era-change-body"><pre>Changed &quot;OnBeforeBattleAction&quot; event to trigger before Enchantress, Hell steed and creature experience mass spells processing.</pre><p>Related pages: [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-11-l961"><summary><code>*</code> <strong>changed</strong> · lines 961–961: Fixed v997 in &quot;OnBeforeBattleAction&quot; and &quot;OnAfterBattleAction&quot; events. It is equal to Era combat round counter now.</summary><div class="era-change-body"><pre>Fixed v997 in &quot;OnBeforeBattleAction&quot; and &quot;OnAfterBattleAction&quot; events. It is equal to Era combat round counter now.</pre><p>Related pages: [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

</section>
:::

### ERA 3.9.10 {#era3-version-3-9-10}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-10-l966"><summary><code>*</code> <strong>changed</strong> · lines 966–966: Introduced &quot;OnAbnormalGameLeave&quot; event to be called by plugins or HD mod in case of extreme game loop (0x4B0BA0) breaking using goto and manual s…</summary><div class="era-change-body"><pre>Introduced &quot;OnAbnormalGameLeave&quot; event to be called by plugins or HD mod in case of extreme game loop (0x4B0BA0) breaking using goto and manual stack cleaning. Improved compatibility with current HD mod versions: &quot;OnGameLeave&quot; event will be called for ERM correctly.</pre><p>Related pages: [Framework events](../framework/events/) · [Leaving the game (OnGameLeave)](../triggers/ongameleave/) · [ERM triggers and events](../triggers/)</p></div></details>

</section>
:::

### ERA 3.9.9 {#era3-version-3-9-9}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-9-l971"><summary><code>+</code> <strong>added</strong> · lines 971–1012: Added the following functions to Era Erm Framework: !?FU(Hash32); ; Calculates int32 digest (hash sum) of arbitrary sequence of bytes. !#VA(data:…</summary><div class="era-change-body"><pre>Added the following functions to Era Erm Framework:

  !?FU(Hash32);
  ; Calculates int32 digest (hash sum) of arbitrary sequence of bytes.
  !#VA(data:x);    Pointer to data first byte or string
  !#VA(dataLen:x); Length of data in bytes
  !#VA(result:x);  Result hash

  !?FU(MakeRngSeed);
  ; Generates deterministic int32 seed for pseudo random number generator, consuming up to 15 arbitrary int32 parameters.
  ; Example: FU(MakeRngSeed):P(x)/(y)/(z)/(heroId)/?(seed:y); get prng seed, which will be the same for given coordinates and hero
  !#VA(firstArg:x);

  !?FU(SplitMix32);
  ; Generates new random value using SplitMix32 algorithm and modifies input seed value.
  ; Possible syntaxes:
  ;  FU:P?(seed:y) ?(result:y);             Generate random int32 value (negative or positive)
  ;  FU:P?(seed:y)/(min)/(max) ?(result:y); Generate random int32 value in &#91;min..max&#93; range
  !#VA(seed:x);   OUT. Previous generator seed. Pass by reference (using ?), because this value will change after generation
  !#VA(min:x);    Minimum value.
  !#VA(max:x);    Maximum value.
  !#VA(result:x); OUT. Result number

  Examples:

  !?FU(OnAfterErmInstructions);
  !!FU(MakeRngSeed):P1/2/3/?(seed:y); generate deterministic seed from coordinates 1/2/3
  !!IF:M^Seed: %(seed)^;

  !!FU(SplitMix32):P?(seed)/-10/10/?(value:y); generate 3 random values in -10..10 range using SplitMix32 algorithm and generated seed
  !!IF:M^Random value: %(value)^;

  !!FU(SplitMix32):P?(seed)/-10/10/?(value:y);
  !!IF:M^Random value: %(value)^;

  !!FU(SplitMix32):P?(seed)/-10/10/?(value:y);
  !!IF:M^Random value: %(value)^;

  !!VR(text:z):S^apple^ M4/?(strLen:y);
  !!SN:B(text)/?(textAddr:y);
  !!FU(Hash32):P(textAddr)/(strLen)/?(hash:y);
  !!IF:M^The hash of &quot;%(text)&quot; &#91;%(strLen)&#93; is %(hash)^;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Variables and expressions (VR)](../receivers/vr/) · [ERA services, memory and sound (SN)](../receivers/sn/) · [Function calls (FU)](../receivers/fu/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-9-l1014"><summary><code>+</code> <strong>added</strong> · lines 1014–1019: Added the following exported function to era.dll: // Calculates data hash sum of arbitrary length function Hash32 (Data: pchar; DataSize: integer…</summary><div class="era-change-body"><pre>Added the following exported function to era.dll:
  // Calculates data hash sum of arbitrary length
  function Hash32 (Data: pchar; DataSize: integer): integer; stdcall;

  // Generates new random value using SplitMix32 algorithm and provided Seed value. Seed is passed by reference and modified on return.
  function SplitMix32 (var Seed: integer; MinValue, MaxValue: integer): integer; stdcall;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

</section>
:::

### ERA 3.9.7 {#era3-version-3-9-7}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-7-l1031"><summary><code>+</code> <strong>added</strong> · lines 1031–1054: Added support for arrays and primitive types in language json files, because they are often used as config files. Numbers are converted to string…</summary><div class="era-change-body"><pre>Added support for arrays and primitive types in language json files, because they are often used as config files. Numbers are converted to strings, booleans are converted to &quot;0&quot; and &quot;1&quot;, null values are ignored (the same, as key-value pair didn&#x27;t exist at all). Arrays are treated as objects with monotonically increasing string keys (&quot;0&quot;, &quot;1&quot;, &quot;2&quot;).

  Example json:

  {
    &quot;creatures&quot;: &#91;
      {
        &quot;id&quot;: 2000
      },

      {
        &quot;id&quot;:       150,
        &quot;name&quot;:     &quot;SuperRobot&quot;,
        &quot;isGod&quot;:    true,
        &quot;power&quot;:    77.345,
        &quot;copyFrom&quot;: null
      }
    &#93;
  }

  Example script:

  !?FU(OnAfterErmInstructions);
  !!IF:M^%T(creatures.0.id) %T(creatures.1.id) %T(creatures.1.name) %T(creatures.1.isGod) %T(creatures.1.power) %T(creatures.1.copyFrom)^;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [Introduction to ERM](../start/)</p></div></details>

</section>
:::

### ERA 3.9.6 {#era3-version-3-9-6}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-6-l1066"><summary><code>+</code> <strong>added</strong> · lines 1066–1071: Added new exported function to era.dll: // Changes current language code in memory without altering ini files or reloading already loaded data Se…</summary><div class="era-change-body"><pre>Added new exported function to era.dll:
  // Changes current language code in memory without altering ini files or reloading already loaded data
  SetLanguage (NewLanguage: pchar): TDwordBool; stdcall;

  // Reloads all json files from &quot;Lang&quot; directory and current language subdirectory.
  ReloadLanguageData; stdcall;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-9-6-l1073"><summary><code>-</code> <strong>fixed</strong> · lines 1073–1073: Fixed &quot;SN:H&quot; command and &quot;OnAdvMapTileHint&quot; event behavior. No hint is applied and no event is generated if tile is not visible by current player…</summary><div class="era-change-body"><pre>Fixed &quot;SN:H&quot; command and &quot;OnAdvMapTileHint&quot; event behavior. No hint is applied and no event is generated if tile is not visible by current player.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

</section>
:::

### ERA 3.9.5 {#era3-version-3-9-5}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-5-l1080"><summary><code>*</code> <strong>changed</strong> · lines 1080–1080: Updated wog native dialogs plugin by igrik to latest version.</summary><div class="era-change-body"><pre>Updated wog native dialogs plugin by igrik to latest version.</pre></div></details>

<details class="era-change" id="era3-v-3-9-5-l1081"><summary><code>*</code> <strong>changed</strong> · lines 1081–1081: Updated Era Erm Framework to the one from H3 Launcher 2.927.</summary><div class="era-change-body"><pre>Updated Era Erm Framework to the one from H3 Launcher 2.927.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-5-l1083"><summary><code>*</code> <strong>changed</strong> · lines 1083–1083: Updated Erm Editor Sublime to version 4143.</summary><div class="era-change-body"><pre>Updated Erm Editor Sublime to version 4143.</pre></div></details>

</section>
:::

### ERA 3.9.4 {#era3-version-3-9-4}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-4-l1092"><summary><code>-</code> <strong>fixed</strong> · lines 1092–1092: Fixed map description truncation in scrollbar text dialogs without scroll bars.</summary><div class="era-change-body"><pre>Fixed map description truncation in scrollbar text dialogs without scroll bars.</pre></div></details>

<details class="era-change" id="era3-v-3-9-4-l1094"><summary><code>+</code> <strong>added</strong> · lines 1094–1154: Added the following functions to Era ERM Framework: !?FU(BattleStack_MakeActive); ; Makes specified stack active/acting. !#VA(stackId:x); Stack I…</summary><div class="era-change-body"><pre>Added the following functions to Era ERM Framework:

  !?FU(BattleStack_MakeActive);
  ; Makes specified stack active/acting.
  !#VA(stackId:x); Stack ID to pass control to.

  !?FU(PrepareMultiPicDialog);
  ; Initializes IF:N dialog pictures. Call IF:N to show it afterwards.
  ; Automatically skips pairs with NO_PIC_TYPE type and pairs with PIC_TYPE_MONSTER type and negative subtype.
  ; Ignores more than 8 non-empty pairs. Always safe to call.
  ;
  ; Supports three call syntaxes:
  ;   P; dialog without pictures
  ;   P(first picture type)/(first picture subtype)/(second picture type)...
  ;   P(ID of dynamic array, containing picture pairs)

  !?FU(Array_CountValue);
  ; Returns number of array items, equal to specified value.
  !#VA(list:x);            Array ID.
  !#VA(value:x);           Value to count. Strings are supported.
  !#VA(result:x);          Result.
  !#VA(caseInsensitive:x); Optional. If true, strings will be compared case insensitively. Default: false.

  !?FU(Array_IndexOf);
  ; Returns index of the first array item with specified value or -1 in case of failure.
  !#VA(list:x);            Array ID.
  !#VA(value:x);           Value to search for.
  !#VA(result:x);          Result index or -1 in case of failure.
  !#VA(caseInsensitive:x); Optional. If true, strings will be compared case insensitively. Default: false.

  !?FU(Array_Find);
  ; Returns index of the first array item, for which custom callback function returns (TRUE) or -1 in case of failure.
  !#VA(list:x);      Array ID.
  !#VA(callback:x);  Callback function F(itemValue, ?result, &#91;listId&#93;, &#91;customArg&#93;), where result is (TRUE) or (FALSE). (FALSE) is passed by default.
                  ;  listID is array ID and customArg is anything, specified as custom argument to Array_Find. Zero by default.
  !#VA(result:x);    Result index or -1 in case of failure.
  !#VA(customArg:x); Custom argument to pass to callback as the 4-th parameter.

  Examples:

  !?PI;
  !!FU(NewStrArray):P?(list:y);
  !!FU(Array_Push):P(list)/^banana^/^daemon^/^apple^/^juice^/^Apple^/^orange^/^apple^;
  !!FU(Array_CountValue):P(list)/^apple^/?(numOccurencies:y)/(TRUE);
  !!IF:M^%(numOccurencies)^; displays 3, because &#x27;apple&#x27; occured 3 times in the array

  !!FU(NewStrArray):P?(list:y);
  !!FU(Array_Push):P(list)/^banana^/^daemon^/^juice^/^Apple^/^orange^/^apple^;
  !!FU(Array_IndexOf):P(list)/^apple^/?(itemIndex:y);
  !!IF:M^%(itemIndex)^; displays 5, index of the last array item

  !!FU(NewStrArray):P?(list:y);
  !!FU(Array_Push):P(list)/^banana^/^daemon^/^juice^/^Apple^/^orange^/^apple^;
  !!FU(Array_Find):P(list)/(edu_FilterDaemons)/?(itemIndex:y);
  !!IF:M^%(itemIndex)^; displays 1, because function edu_FilterDaemons returns (TRUE) only for &#x27;daemon_n&#x27; and &#x27;daemon&#x27; strings.

  !?FU(edu_FilterDaemons);
  !#VA(strPtr:x);
  !#VA(result:x);

  !!VR(result)|z(strPtr)=^daemon_n^/z(strPtr)=^daemon^:S(TRUE);</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [After ERM instructions (PI)](../triggers/pi/) · [Flags, messages and choices (IF)](../receivers/if/) · [Variables and expressions (VR)](../receivers/vr/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-4-l1156"><summary><code>*</code> <strong>changed</strong> · lines 1156–1156: Increased ERM engine static memory buffer size from 3 MB to 10 MB. The buffer is used for temporary strings storage during events and commands ex…</summary><div class="era-change-body"><pre>Increased ERM engine static memory buffer size from 3 MB to 10 MB. The buffer is used for temporary strings storage during events and commands execution.</pre><p>Related pages: [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-4-l1158"><summary><code>*</code> <strong>changed</strong> · lines 1158–1158: Removed &#x27;$OnGameLeave&#x27; private event support, used by HD-mod earlier. Added support for &#x27;OnGameLeave&#x27; event as a replacement.</summary><div class="era-change-body"><pre>Removed &#x27;$OnGameLeave&#x27; private event support, used by HD-mod earlier. Added support for &#x27;OnGameLeave&#x27; event as a replacement.</pre><p>Related pages: [Leaving the game (OnGameLeave)](../triggers/ongameleave/) · [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-4-l1159"><summary><code>-</code> <strong>fixed</strong> · lines 1159–1159: Fixed bug, causing &#x27;TServiceMemAllocator.Alloc failed. No page allocated&#x27; error. Memory was leaking if interpolated conditions where used in ERM …</summary><div class="era-change-body"><pre>Fixed bug, causing &#x27;TServiceMemAllocator.Alloc failed. No page allocated&#x27; error. Memory was leaking if interpolated conditions where used in ERM event conditions.</pre><p>Related pages: [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-4-l1160"><summary><code>-</code> <strong>fixed</strong> · lines 1160–1160: Fixed bug: x-variables modifications in &quot;_Quit&quot; events were not transferred to the results of original events.</summary><div class="era-change-body"><pre>Fixed bug: x-variables modifications in &quot;_Quit&quot; events were not transferred to the results of original events.</pre><p>Related pages: [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-4-l1161"><summary><code>-</code> <strong>fixed</strong> · lines 1161–1161: Fixed bug: custom network events and FU:D didn&#x27;t work in battle.</summary><div class="era-change-body"><pre>Fixed bug: custom network events and FU:D didn&#x27;t work in battle.</pre><p>Related pages: [Function calls (FU)](../receivers/fu/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-4-l1162"><summary><code>-</code> <strong>fixed</strong> · lines 1162–1162: Fixed issues with HD-mod way of loading game from battle. OnGameEnter/OnGameLeave counter will not be corrupted if HD mod generates &quot;OnGameLeave&quot;…</summary><div class="era-change-body"><pre>Fixed issues with HD-mod way of loading game from battle. OnGameEnter/OnGameLeave counter will not be corrupted if HD mod generates &quot;OnGameLeave&quot; event for ERA before quitting game loop. No more need in dollar prefix for event name.</pre><p>Related pages: [Entering the game (OnGameEnter)](../triggers/ongameenter/) · [Framework events](../framework/events/) · [Leaving the game (OnGameLeave)](../triggers/ongameleave/) · [ERM triggers and events](../triggers/)</p></div></details>

</section>
:::

### ERA 3.9.3 {#era3-version-3-9-3}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-3-l1167"><summary><code>+</code> <strong>added</strong> · lines 1167–1183: Rewrote game random number generator (RNG) engine. Main changes: - All RNGs are not thread safe now. They should be used in the main thread only.…</summary><div class="era-change-body"><pre>Rewrote game random number generator (RNG) engine.

  Main changes:
  - All RNGs are not thread safe now. They should be used in the main thread only.
  - There are two main RNGs: the global one (rand/srand/VR:R) and the unique one (VR:T).
  - ERA uses 3 different engines for the global RNG and switches them dynamicly to provide qualitative outputs, the same battle obstacles, as they are in original Heroes 3, and network PvP battles stability.
  - VR:T generator cannot be seeded anymore. It serves as the source of unpredictable randomness.
  - At the start of game process, all generators are seeded with cryptographically safe random seeds.
  - Most of the time Xoroshiro128** engine is used for global RNG. It has both excellent speed and qualitative output.
  - The global generator engine is switched to native C rand implementation only for the phase of placing battle obstacles.
  - In network PvP battles the global generator is switched to deterministic one. Deterministic generator uses only the following information: unique battle ID, combat round ID, combat action ID, minimum and maximum value to generate. Thus any attempt to generate a sequence of numbers in the same range will produce the same result for each generation. It&#x27;s recommended to replace dwarf-style resistence mechanics with golem-style resistence mechanics.
  - Global RNG is seeded with unique value at battle start/replay, thus the first action and autocasted spells are not deterministic anymore.
  - Using random functions in before battle and before battlefield visible phases does not influence battle obstacles placing anymore.
  - Extended &quot;Debug.Rng&quot; setting in &quot;heroes 3.ini&quot;. 0 means no debugging, 1 is for seeding, 2 is for seeding and random_range, 3 enables debugging of all rand/srand/random_range calls.
  - rand() is guaranteed to return 0..32767 value, as it does in original Heroes 3. But random_range (VR:R/VR:T) call can return any value in int32 range (-2147483648..2147483647).
  - ERA intercepts all rand/srand calls. Previously a few functions were not tracked.
  - Deterministic RNG for network PvP battles is enabled for the whole battle (excluding obstacles placing stage). Bad morale probability and magic resistence additionaly depend on stack ID, thus producing different results for different stacks. Stack damage calculation additionally depends on iteration counter (game generates up to 10 random values for each stack damage event).</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-3-l1185"><summary><code>+</code> <strong>added</strong> · lines 1185–1185: Added new event: &quot;OnBeforePlaceBattleObstacles&quot;, occuring after &quot;OnBeforeBattlefieldVisible&quot; event. Global RNG is switched to the native one befo…</summary><div class="era-change-body"><pre>Added new event: &quot;OnBeforePlaceBattleObstacles&quot;, occuring after &quot;OnBeforeBattlefieldVisible&quot; event. Global RNG is switched to the native one before calling ERM event and the generator is seeded with the following value: (110291 * map_tile_x + 167801 * map_tile_y + 81569). Thus the same obstacle types and positions are guaranteed for each particular map tile. Using RNG functions in this event will influence obstacles generation. Modder may implement unique obstacles for each battle at this phase or use custom deterministic seed formula.</pre><p>Related pages: [Before placing battle obstacles (OnBeforePlaceBattleObstacles)](../triggers/onbeforeplacebattleobstacles/) · [Framework events](../framework/events/) · [Before showing the battlefield (OnBeforeBattlefieldVisible)](../triggers/onbeforebattlefieldvisible/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-3-l1187"><summary><code>+</code> <strong>added</strong> · lines 1187–1187: Added new event &quot;OnAfterPlaceBattleObstacles&quot;, occuring after all obstacles are placed on battlefield. Random number generated is switched back t…</summary><div class="era-change-body"><pre>Added new event &quot;OnAfterPlaceBattleObstacles&quot;, occuring after all obstacles are placed on battlefield. Random number generated is switched back to the qualitative one. New custom obstacles may be added in this phase.</pre><p>Related pages: [After placing battle obstacles (OnAfterPlaceBattleObstacles)](../triggers/onafterplacebattleobstacles/) · [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-3-l1189"><summary><code>+</code> <strong>added</strong> · lines 1189–1203: Implemented easy-to-use means to generate remote Era events with arbitrary data. The whole process of data compressing/decompressing/splitting/jo…</summary><div class="era-change-body"><pre>Implemented easy-to-use means to generate remote Era events with arbitrary data. The whole process of data compressing/decompressing/splitting/joining is hidden from clients. Support for progress callbacks is implemented. The following exported function was added to era.dll:

  (* Generates remote Era event. Returns 1 if at least an attempt to call remote event was done. False for invalid/empty/too long event name *)
  function FireRemoteNetworkEvent (
    DestPlayerId:                   integer; // Destination player ID or -1 for all players
    EventName:                      pchar;   // Event name like &quot;OnSomethingHappened&quot;
    {n} Data:                       pointer; // Pointer to buffer with data to send
    DataSize:                       integer; // Size of the buffer with data
    {n} ProgressHandler:            TNetworkStreamProgressHandler; // Progress handler function or null
    {n} ProgressHandlerCustomParam: pointer                        // Custom parameter for progress handler function
  ): TDwordBool; stdcall;

  Big amounts of data are divided into smaller packets and sent one by one. In this case ProgressHandler function is called after successful packet sending, allowing to abort the stream or update interface. Small packets will be joined automatically on remote side and single event will be generated. Moreover, the data is sent in compressed form, increasing transferring speed. HD Mod Lobby is fully supported.

  TNetworkStreamProgressHandler = function (BytesSent, TotalBytes: integer; {n} CustomParam: pointer): TDwordBool; stdcall;</pre><p>Related pages: [Framework events](../framework/events/) · [ERA services, memory and sound (SN)](../receivers/sn/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-3-l1205"><summary><code>+</code> <strong>added</strong> · lines 1205–1205: Erm &quot;FU:D&quot; command was fully rewritten. Fixed bug: HD mod used to disable FU:D on adventure map. From now FU:D supports arbitrary string paramete…</summary><div class="era-change-body"><pre>Erm &quot;FU:D&quot; command was fully rewritten. Fixed bug: HD mod used to disable FU:D on adventure map. From now FU:D supports arbitrary string parameters and d-modifiers.</pre><p>Related pages: [Function calls (FU)](../receivers/fu/)</p></div></details>

<details class="era-change" id="era3-v-3-9-3-l1207"><summary><code>+</code> <strong>added</strong> · lines 1207–1207: ERA will retrieve final addresses to monster, spell, artifact and skill structures in OnAfterStructRelocations event using native pointers to tho…</summary><div class="era-change-body"><pre>ERA will retrieve final addresses to monster, spell, artifact and skill structures in OnAfterStructRelocations event using native pointers to those structures. Credits: Xeromant.</pre><p>Related pages: [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-3-l1209"><summary><code>-</code> <strong>fixed</strong> · lines 1209–1210: Fixed issues with HD-mod way of loading game from battle. OnGameEnter/OnGameLeave counter will not be corrupted if HD mod generates &quot;$OnGameLeave…</summary><div class="era-change-body"><pre>Fixed issues with HD-mod way of loading game from battle. OnGameEnter/OnGameLeave counter will
    not be corrupted if HD mod generates &quot;$OnGameLeave&quot; event for ERA before quitting game loop.</pre><p>Related pages: [Entering the game (OnGameEnter)](../triggers/ongameenter/) · [Framework events](../framework/events/) · [Leaving the game (OnGameLeave)](../triggers/ongameleave/) · [ERM triggers and events](../triggers/)</p></div></details>

</section>
:::

### ERA 3.9.2 {#era3-version-3-9-2}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-2-l1218"><summary><code>+</code> <strong>added</strong> · lines 1218–1219: Added new &quot;OnAfterBuildTownBuilding&quot; event, occuring right after town building was built. x-parameters: Town ID, Building ID.</summary><div class="era-change-body"><pre>Added new &quot;OnAfterBuildTownBuilding&quot; event, occuring right after town building was built.
    x-parameters: Town ID, Building ID.</pre><p>Related pages: [After construction (OnAfterBuildTownBuilding)](../triggers/onafterbuildtownbuilding/) · [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-2-l1221"><summary><code>+</code> <strong>added</strong> · lines 1221–1228: Added new &quot;OnKeyReleased&quot; event, occuring on keyboard key release. Parameters: keyCode, preventDefault. Example: !?FU(OnKeyReleased); !#VA(key:x)…</summary><div class="era-change-body"><pre>Added new &quot;OnKeyReleased&quot; event, occuring on keyboard key release.
    Parameters: keyCode, preventDefault.

    Example:

    !?FU(OnKeyReleased);
    !#VA(key:x) (preventDefault:x);
    !!IF:M^Released key %(key)^;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Key release (OnKeyReleased)](../triggers/onkeyreleased/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-2-l1230"><summary><code>+</code> <strong>added</strong> · lines 1230–1241: Added new events to Era Erm Framework: &quot;OnKeyReleased_AdvMap&quot;, &quot;OnKeyReleased_Battle&quot;, &quot;OnKeyReleased_HeroScreen&quot;, &quot;OnKeyReleased_HeroMeetingScre…</summary><div class="era-change-body"><pre>Added new events to Era Erm Framework: &quot;OnKeyReleased_AdvMap&quot;, &quot;OnKeyReleased_Battle&quot;, &quot;OnKeyReleased_HeroScreen&quot;,
    &quot;OnKeyReleased_HeroMeetingScreen&quot;, &quot;OnKeyReleased_Town&quot;, occuring right after &quot;OnKeyReleased&quot; events and taking two arguments:
    x1 - key code
    x2 - prevent default reaction (0 - no, 1 - yes).

    Example:

    !?FU(OnKeyReleased_Battle)&amp;x1=(KEY_F1):;
    !#VA(key:x) (preventDefault:x);

    !!VR(preventDefault):S(TRUE);
    !!IF:M^Released F1 in battle!^;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Key release (OnKeyReleased)](../triggers/onkeyreleased/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-2-l1243"><summary><code>+</code> <strong>added</strong> · lines 1243–1269: Added the following functions to Era Erm Framework: !?FU(H3Dlg_GetCurrentDlgId); ; Returns topmost dialog unique ID (DLG_XXX constant). It may be…</summary><div class="era-change-body"><pre>Added the following functions to Era Erm Framework:

  !?FU(H3Dlg_GetCurrentDlgId);
  ; Returns topmost dialog unique ID (DLG_XXX constant). It may be message box, custom dialog or any in-game dialog.
  !#VA(result:x);

  !?FU(AddArtToHero);
  ; Adds artifact to hero, trying to equip it first and fallbacking to putting in backpack. Returns success flag.
  ; Automatically builds combo arts and checks scenario win conditions.
  !#VA(hero:x);   ID of hero to equip artifact to.
  !#VA(art:x);    ID of artifact to equip.
  !#VA(artMod:x); Artifact modifier or (NO_ART_MOD). For spell scrolls its spell ID. For other artifacts the value is usually ignored.
                ; Custom artifact modifiers may be implemented. Artifact modifier is always carried with artifact by game functions.
  !#VA(result:x); Boolean. Success flag.

  !?FU(GetArtAtSlot);
  ; Returns hero artifact and artifact modifier at given slot.
  !#VA(hero:x);   Hero ID or (CURRENT_HERO)
  !#VA(slot:x);   Slot ID (backpack is supported).
  !#VA(artId:x);  OUT. Artifact ID.
  !#VA(artMod:x); OUT. Artifact modifier.

  !?FU(ChangeArtModAtSlot);
  ; Changes artifact modifier in specified hero slot. Usually modifier is spell ID for spell scrolls or (NO_ART_MOD).
  !#VA(hero:x);   Hero ID or (CURRENT_HERO)
  !#VA(slot:x);   Slot ID (backpack is supported).
  !#VA(artMod:x); Artifact modifier.</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-2-l1271"><summary><code>+</code> <strong>added</strong> · lines 1271–1284: The following functions were changed in Era Erm Framework: !?FU(EquipArtToSlot); ; Tries to put artifact to specified hero doll slot, triggering …</summary><div class="era-change-body"><pre>The following functions were changed in Era Erm Framework:

  !?FU(EquipArtToSlot);
  ; Tries to put artifact to specified hero doll slot, triggering OnEquipArt event. Returns success flag.
  !#VA(hero:x);   ID of hero to equip artifact to.
  !#VA(art:x);    ID of artifact to equipt.
  !#VA(artMod:x); Artifact modifier or (NO_ART_MOD). For spell scrolls it&#x27;s spell ID. For other artifacts the value is usually ignored.
                ; Custom artifact modifiers may be implemented. Artifact modifier is always carried with artifact by game functions.
  !#VA(slot:x);   ID of hero doll slot to put artifact in or (NO_ART_SLOT) for autodetection.
  !#VA(result:x); Boolean. Success flag.

  !?FU(GetHeroPrimarySkillsWithoutArts);
  ; ...
  The function correctly handles artifact modifiers now, including spell IDs of magic scrolls.</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-2-l1286"><summary><code>+</code> <strong>added</strong> · lines 1286–1286: Added KEY_ENTER constant to Era Erm Framework, as alias to KEY_RETURN.</summary><div class="era-change-body"><pre>Added KEY_ENTER constant to Era Erm Framework, as alias to KEY_RETURN.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-9-2-l1288"><summary><code>+</code> <strong>added</strong> · lines 1288–1290: Added new exported functions to era.dll: - PcxPngExists (const PcxName: pchar): integer; stdcall; Tries to load PNG replacement for pcx file name…</summary><div class="era-change-body"><pre>Added new exported functions to era.dll:
  - PcxPngExists (const PcxName: pchar): integer; stdcall;
    Tries to load PNG replacement for pcx file name and returns success flag (0 or 1).</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-9-2-l1292"><summary><code>+</code> <strong>added</strong> · lines 1292–1292: Added support for LMB popup dialogs positioning at click coordinates.</summary><div class="era-change-body"><pre>Added support for LMB popup dialogs positioning at click coordinates.</pre></div></details>

<details class="era-change" id="era3-v-3-9-2-l1294"><summary><code>-</code> <strong>fixed</strong> · lines 1294–1294: Fixed crash in OnAICalcStackAttackEffect event, occuring on attempt to get tower stack ID by invalid position (251, 254, 255). Credits: daemon_n.</summary><div class="era-change-body"><pre>Fixed crash in OnAICalcStackAttackEffect event, occuring on attempt to get tower stack ID by invalid position (251, 254, 255). Credits: daemon_n.</pre><p>Related pages: [AI attack evaluation (OnAICalcStackAttackEffect)](../triggers/onaicalcstackattackeffect/) · [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

</section>
:::

### ERA 3.9.1 {#era3-version-3-9-1}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-1-l1300"><summary><code>+</code> <strong>added</strong> · lines 1300–1300: Improved RMB popups positioning in all game screens for dialogs with text and 0..3 pictures.</summary><div class="era-change-body"><pre>Improved RMB popups positioning in all game screens for dialogs with text and 0..3 pictures.</pre></div></details>

<details class="era-change" id="era3-v-3-9-1-l1302"><summary><code>+</code> <strong>added</strong> · lines 1302–1303: Added &quot;Tools/PngCrush&quot; utility to optimize png images and &quot;optimize_png.bat&quot; script for batch image optimization. Either copy &quot;pngcrush.exe&quot; and …</summary><div class="era-change-body"><pre>Added &quot;Tools/PngCrush&quot; utility to optimize png images and &quot;optimize_png.bat&quot; script for batch image optimization.
    Either copy &quot;pngcrush.exe&quot; and &quot;optimize_png.bat&quot; to root directory with png files and subdirectories or run &quot;optimize_png.bat&quot;, passing path to png directory as the only argument.</pre><p>Related pages: [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-9-1-l1311"><summary><code>-</code> <strong>fixed</strong> · lines 1311–1311: Fixed SoD bug: text and pictures were not properly centered in dialogs with text and 0-3 pictures.</summary><div class="era-change-body"><pre>Fixed SoD bug: text and pictures were not properly centered in dialogs with text and 0-3 pictures.</pre></div></details>

</section>
:::

### ERA 3.9 {#era3-version-3-9}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-9-l1333"><summary><code>+</code> <strong>added</strong> · lines 1333–1338: Added support for shadows in PNG frames for adventure map objects and battle creatures. Shadow can now be implemented not only in the form of bla…</summary><div class="era-change-body"><pre>Added support for shadows in PNG frames for adventure map objects and battle creatures. Shadow can now be implemented not only in the form of black color with alpha channel,
    but using the following opaque reserved colors:
    - #FF00FF (50%   shadow opacity)
    - #FF96FF (37.5% shadow opacity)
    - #FF64FF (25%   shadow opacity)
    - #FF32FF (12.5% shadow opacity)</pre></div></details>

<details class="era-change" id="era3-v-3-9-l1340"><summary><code>+</code> <strong>added</strong> · lines 1340–1345: Added support for separate DEF PNG frames redirections. Command template: SN:R^defname.def:groupIndex_frameIndex.png^/^new path to png, relative …</summary><div class="era-change-body"><pre>Added support for separate DEF PNG frames redirections.
    Command template: SN:R^defname.def:groupIndex_frameIndex.png^/^new path to png, relative to root directory.png^.
    Prefer to use single backslashes as path separators in order to avoid &quot;a\test.png&quot; and &quot;a/test.png&quot; to be loaded and cached as different images.

  Example:
  !!SN:R^cefres.def:1_0.png^/^Data\Defs\cefres.def\5_6.png^;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-9-l1347"><summary><code>+</code> <strong>added</strong> · lines 1347–1373: Added the following functions to Era Erm Framework: !?FU(ShowAnimatedDefDlg); ; Displays message dialog with OK button, text and leading animated…</summary><div class="era-change-body"><pre>Added the following functions to Era Erm Framework:

  !?FU(ShowAnimatedDefDlg);
  ; Displays message dialog with OK button, text and leading animated def.
  !#VA(textPtr:x);    Text to show
  !#VA(defNamePtr:x); Optional. Name of def to show animation for or empty string.

  !?FU(GetHeroPrimarySkillsWithoutArts);
  ; Returns hero real primary skills without artifacts. Enequips all artifacts to get values and reequipts afterwards,
  ; thus triggering OnEquipArt and OnUnequipArt events.
  !#VA(hero:x);      Hero ID or (CURRENT_HERO).
  !#VA(attack:x);    Out. Attack value.
  !#VA(defense:x);   Out. Defense value.
  !#VA(power:x);     Out. Power value.
  !#VA(knowledge:x); Out. Knowledge value.

  !?FU(EquipArtToSlot);
  ; Tries to put artifact to specified hero doll slot, triggering OnEquipArt event. Returns success flag.
  !#VA(hero:x);   ID of hero to equip artifact to.
  !#VA(art:x);    ID of artifact to equipt.
  !#VA(slot:x);   ID of hero doll slot to put artifact in or (NO_ART_SLOT) for autodetection.
  !#VA(result:x); Boolean. Success flag.

  !?FU(UnequipArtFromSlot);
  ; Tries to unquip artifact from specified hero doll slot, triggering OnUnequipArt event.
  !#VA(hero:x);   ID of hero to equip artifact to.
  !#VA(slot:x);   ID of hero doll slot to put artifact in.</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-9-l1377"><summary><code>+</code> <strong>added</strong> · lines 1377–1379: Restored default positioning of adventure map hint dialogs. They will not be centered anymore, but appear at the place of mouse click. In additio…</summary><div class="era-change-body"><pre>Restored default positioning of adventure map hint dialogs. They will not be centered anymore, but appear at the place of mouse click.
    In addition most of popup dialogs with text and 1..3 pictures will appear
    at the place of mouse click, but only in adventure map screen, town screen, hero screen, hero meeting screen and battle screen.</pre></div></details>

<details class="era-change" id="era3-v-3-9-l1383"><summary><code>-</code> <strong>fixed</strong> · lines 1383–1383: Fixed WoG bug: Blood Dragons used to have only 20% aging chance instead of 40%.</summary><div class="era-change-body"><pre>Fixed WoG bug: Blood Dragons used to have only 20% aging chance instead of 40%.</pre></div></details>

</section>
:::

### ERA 3.8.10 {#era3-version-3-8-10}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-8-10-l1391"><summary><code>+</code> <strong>added</strong> · lines 1391–1391: Added artifact level constants to Era Erm Framework. See ART_LEVEL_XXX.</summary><div class="era-change-body"><pre>Added artifact level constants to Era Erm Framework. See ART_LEVEL_XXX.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

</section>
:::

### ERA 3.8.8 {#era3-version-3-8-8}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-8-8-l1402"><summary><code>+</code> <strong>added</strong> · lines 1402–1402: Png def frames/pcx replacements honor def/pcx redirections (SN:R) from now.</summary><div class="era-change-body"><pre>Png def frames/pcx replacements honor def/pcx redirections (SN:R) from now.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

</section>
:::

### ERA 3.8.5 {#era3-version-3-8-5}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-8-5-l1418"><summary><code>+</code> <strong>added</strong> · lines 1418–1426: Added new event &quot;OnBattleActionEnd&quot;, occuring right after battle action, but before checking if battle is ended, before selecting next active sta…</summary><div class="era-change-body"><pre>Added new event &quot;OnBattleActionEnd&quot;, occuring right after battle action, but before checking if battle is ended, before selecting next active stack and before starting new round or autoclosing the moat.

  Events order is the following:
  &quot;OnBeforeBattleAction&quot;
  &gt;&gt;&gt; &quot;OnBattleActionEnd&quot; &lt;&lt;&lt;
  &quot;OnBattleRound&quot;
  &quot;OnBeforeBattleStackTurn&quot;
  &quot;OnBattleStackObtainsTurn&quot;
  &quot;OnAfterBattleAction&quot;</pre><p>Related pages: [Battle action completion (OnBattleActionEnd)](../triggers/onbattleactionend/) · [Framework events](../framework/events/) · [Before a stack turn (OnBeforeBattleStackTurn)](../triggers/onbeforebattlestackturn/) · [Passing control to a stack (OnBattleStackObtainsTurn)](../triggers/onbattlestackobtainsturn/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-8-5-l1428"><summary><code>+</code> <strong>added</strong> · lines 1428–1429: The following changes were made to Era Erm Framework: - Added (DLG_CMD_SET_DEF) constant.</summary><div class="era-change-body"><pre>The following changes were made to Era Erm Framework:
  - Added (DLG_CMD_SET_DEF) constant.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-8-5-l1431"><summary><code>*</code> <strong>changed</strong> · lines 1431–1431: Updated Erm editor.</summary><div class="era-change-body"><pre>Updated Erm editor.</pre></div></details>

</section>
:::

### ERA 3.8.4 {#era3-version-3-8-4}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-8-4-l1436"><summary><code>+</code> <strong>added</strong> · lines 1436–1439: Era uses two separate Mersenne Twister generators now. The first one is used as native rand()/srand()/VR:R replacement for all cases except of pr…</summary><div class="era-change-body"><pre>Era uses two separate Mersenne Twister generators now.
  The first one is used as native rand()/srand()/VR:R replacement for all cases except of pre-battle configuration, network PvP battle and VR:T command.
  The second one is used for VR:T and always produces unique values, not influenced by game generator reseeding.
  Pre-battle configuration uses original rand() implementation in order to keep battlefield obstacles the same, as mapmaker saw them during development. During network PvP battle fully deterministic random generator is used as was described earlier in changelog with additional unique integer field for each battle. That generator depends mostly on round and action counters.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

</section>
:::

### ERA 3.8.3 {#era3-version-3-8-3}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-8-3-l1448"><summary><code>-</code> <strong>fixed</strong> · lines 1448–1448: Fixed HE:P command. Previosly if new coordinates were the same as previous hero coordinates, no visual update was performed.</summary><div class="era-change-body"><pre>Fixed HE:P command. Previosly if new coordinates were the same as previous hero coordinates, no visual update was performed.</pre><p>Related pages: [Heroes (HE)](../receivers/he/)</p></div></details>

</section>
:::

### ERA 3.8.2 {#era3-version-3-8-2}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-8-2-l1454"><summary><code>+</code> <strong>added</strong> · lines 1454–1454: Updated &quot;wog native dialogs.era&quot; plugin. Credits: igrik.</summary><div class="era-change-body"><pre>Updated &quot;wog native dialogs.era&quot; plugin. Credits: igrik.</pre></div></details>

<details class="era-change" id="era3-v-3-8-2-l1457"><summary><code>*</code> <strong>changed</strong> · lines 1457–1459: The following changes were made to Era Erm Framework: - (MON_ANTICHRIST) constant was renamed to (MON_HELL_BARON). Credits: Archer30. - Changed &quot;…</summary><div class="era-change-body"><pre>The following changes were made to Era Erm Framework:
  - (MON_ANTICHRIST) constant was renamed to (MON_HELL_BARON). Credits: Archer30.
  - Changed &quot;GetMaxMonsterId&quot; function to use SoD address instead of WoG for better compatibility with other plugins.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-8-2-l1461"><summary><code>+</code> <strong>added</strong> · lines 1461–1461: Updated Erm Editor.</summary><div class="era-change-body"><pre>Updated Erm Editor.</pre></div></details>

</section>
:::

### ERA 3.8.1 {#era3-version-3-8-1}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-8-1-l1515"><summary><code>+</code> <strong>added</strong> · lines 1515–1517: Implemented stable multiplayer battles support by introducing deterministic pseudo random number generator in PvP battles. Thanks to ZVS for idea…</summary><div class="era-change-body"><pre>Implemented stable multiplayer battles support by introducing deterministic pseudo random number generator in PvP battles. Thanks to ZVS for idea.
    Deterministic generator influences all calls to rand() function, including native creature abilities, stack experience abilities and VR:R command.
    The state of generator is formed by the following values: &#91;Combat round, Min value to generate, Combat ID, Max value to generate, Combat action ID&#93;, where Combat ID is truly random value for each combat, Combat round is round counter and Combat action ID is action counter.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-8-1-l1519"><summary><code>+</code> <strong>added</strong> · lines 1519–1519: Added &quot;DebugRng&quot; option to heroes3.ini. If set to 1, rand/srand/VR:R commands will generate debug messages.</summary><div class="era-change-body"><pre>Added &quot;DebugRng&quot; option to heroes3.ini. If set to 1, rand/srand/VR:R commands will generate debug messages.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-8-1-l1524"><summary><code>+</code> <strong>added</strong> · lines 1524–1524: Added new Javascript utility to convert UN:C patches into binary patches. See &quot;Tools/UncToBin/index.html&quot;.</summary><div class="era-change-body"><pre>Added new Javascript utility to convert UN:C patches into binary patches. See &quot;Tools/UncToBin/index.html&quot;.</pre><p>Related pages: [General game operations (UN)](../receivers/un/) · [UN:C — memory access](../un-c/)</p></div></details>

<details class="era-change" id="era3-v-3-8-1-l1526"><summary><code>+</code> <strong>added</strong> · lines 1526–1526: Added missing constants to Era Erm Framework. New constants for hero classes: HERO_CLASS_XXX.</summary><div class="era-change-body"><pre>Added missing constants to Era Erm Framework. New constants for hero classes: HERO_CLASS_XXX.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-8-1-l1527"><summary><code>+</code> <strong>added</strong> · lines 1527–1527: Updated Erm Editor.</summary><div class="era-change-body"><pre>Updated Erm Editor.</pre></div></details>

<details class="era-change" id="era3-v-3-8-1-l1529"><summary><code>-</code> <strong>fixed</strong> · lines 1529–1529: Fixed game random number generator behavior: reseeding does not influence Mersenne Twister generator state anymore. VR:T will not return the same…</summary><div class="era-change-body"><pre>Fixed game random number generator behavior: reseeding does not influence Mersenne Twister generator state anymore. VR:T will not return the same values after battle.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

</section>
:::

### ERA 3.7.0 {#era3-version-3-7-0}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-7-0-l1579"><summary><code>+</code> <strong>added</strong> · lines 1579–1608: Added new SN:H syntax to work with spell texts. !!SN:H^spell^/#spell_id/#spell_text_type/$text where #spell_text_type is one of SPELL_TEXT_XXX co…</summary><div class="era-change-body"><pre>Added new SN:H syntax to work with spell texts.

    !!SN:H^spell^/#spell_id/#spell_text_type/$text

    where #spell_text_type is one of SPELL_TEXT_XXX constants.

    This command deprecates SS usage for texts.
    Deletion syntax works partially. The settings are reset, but text will be restored on savegame load only.

    Example:

    !?FU(OnAfterErmInstructions);
    ; List all spell, displaying all texts
    !!re i/(SPELL_FIRST)/(SPELL_LAST_WOG);
      !!SN:H^spell^/i/(SPELL_TEXT_NAME)/?(text0:z);
      !!SN:H^spell^/i/(SPELL_TEXT_SHORT_NAME)/?(text1:z);
      !!SN:H^spell^/i/(SPELL_TEXT_DESCR)/?(text2:z);
      !!SN:H^spell^/i/(SPELL_TEXT_DESCR_BASIC)/?(text3:z);
      !!SN:H^spell^/i/(SPELL_TEXT_DESCR_ADVANCED)/?(text4:z);
      !!SN:H^spell^/i/(SPELL_TEXT_DESCR_EXPERT)/?(text5:z);
      !!SN:H^spell^/i/(SPELL_TEXT_SOUND)/?(text6:z);
      !!IF:M^Spell %i:
    %(text0)
    %(text1)
    %(text2)
    %(text3)
    %(text4)
    %(text5)
    %(text6)^;
    !!en;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-7-0-l1610"><summary><code>+</code> <strong>added</strong> · lines 1610–1610: SN:V#1/#2/#3 command now applies &quot;mod 32&quot; operation to argument #2, allowing to use commands on XXL maps without errors.</summary><div class="era-change-body"><pre>SN:V#1/#2/#3 command now applies &quot;mod 32&quot; operation to argument #2, allowing to use commands on XXL maps without errors.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-7-0-l1612"><summary><code>+</code> <strong>added</strong> · lines 1612–1619: Added global exported functions to work with ERA global named ERM variables (i^..^ and s^...^): int (__stdcall) GetAssocVarIntValue (const char *…</summary><div class="era-change-body"><pre>Added global exported functions to work with ERA global named ERM variables (i^..^ and s^...^):

  int (__stdcall) GetAssocVarIntValue (const char *VarName);
  char* (__stdcall) GetAssocVarStrValue (const char *VarName);
  void (__stdcall) SetAssocVarIntValue (const char *VarName, int NewValue);
  void (__stdcall) SetAssocVarStrValue (const char *VarName, const char *NewValue);

  Do not forget to call (__stdcall) MemFree (void* Addr) to release memory, returned by string functions.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-7-0-l1621"><summary><code>+</code> <strong>added</strong> · lines 1621–1629: Added global exported functions to work with ERA shared global in-memory registry. The registry can be used by plugins to exchange config values …</summary><div class="era-change-body"><pre>Added global exported functions to work with ERA shared global in-memory registry.
    The registry can be used by plugins to exchange config values and signals.

  int (__stdcall) GetEraRegistryIntValue (const char *VarName);
  char* (__stdcall) GetEraRegistryStrValue (const char *VarName);
  void (__stdcall) SetEraRegistryIntValue (const char *VarName, int NewValue);
  void (__stdcall) SetEraRegistryStrValue (const char *VarName, const char *NewValue);

  Do not forget to call (__stdcall) MemFree (void* Addr) to release memory, returned by string functions.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-7-0-l1632"><summary><code>*</code> <strong>changed</strong> · lines 1632–1632: &quot;Failed to load image at %s&quot; message will not be displayed anymore for missing images in wog native dialogs.</summary><div class="era-change-body"><pre>&quot;Failed to load image at %s&quot; message will not be displayed anymore for missing images in wog native dialogs.</pre></div></details>

<details class="era-change" id="era3-v-3-7-0-l1633"><summary><code>*</code> <strong>changed</strong> · lines 1633–1633: Updated Erm Editor and Era Erm Framework.</summary><div class="era-change-body"><pre>Updated Erm Editor and Era Erm Framework.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

</section>
:::

### ERA 3.6.0 {#era3-version-3-6-0}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-6-0-l1638"><summary><code>+</code> <strong>added</strong> · lines 1638–1659: Implemented def frames replacement with png images. Replacement occurs on the fly when game asks to draw def frame. Real def frame may be missing…</summary><div class="era-change-body"><pre>Implemented def frames replacement with png images. Replacement occurs on the fly when game asks to draw def frame.
    Real def frame may be missing, but a def file itself must exist. It may have any dimensions, but preferrable height should
    be greater or equal to maximum height of all frames. Png frame may have different size, but will be always drawn at (0, 0) def coordinates.

    Current supported def types: interface defs, interface defs with multiple frame groups.
    Supported features: horizontal mirroring.

    Png frame path template: &quot;Data/Defs/&#91;defname.def&#93;/&#91;group_index&#93;_&#91;frame_index&#93;.png&quot;.
    Group and frame indexes are counted from 0.
    Example: &quot;Data/Defs/zmenulg.def/0_2.png&quot;. It&#x27;s a &quot;Load Game&quot; menu item, group 0, frame 2.

    All png formats are supported, including all types of transparency.
    The fastest drawing is performed for png without transparency and 32 bit HD mode.

    Era Markup Language (EML) fully supports defs with png frames. Thus any png image can be displayed in almost any place, where text is output.
    Frames are automatically trimmed before displaying.
    Example: &quot;{~&gt;cndrgn.def:12:2 block mirror}&quot;

    Note: Heroes 3 engine redraws dialog buttons on every mouse move, thus buttons with partial transparency are drawn many times on the same background.

&#91;!&#93; The only recommended way of providing changed artifacts/spells/monster icons in mods is png frames usage.
    Png frames have priority over def files even if frame is located in a mod with a lower priority.</pre></div></details>

</section>
:::

### ERA 3.5.0 {#era3-version-3-5-0}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-5-0-l1676"><summary><code>+</code> <strong>added</strong> · lines 1676–1714: Rewritten part of old ERM engine, which was responsible for conditions evaluations. - It&#x27;s now possible to use spaces and line feeds to decorate …</summary><div class="era-change-body"><pre>Rewritten part of old ERM engine, which was responsible for conditions evaluations.

  - It&#x27;s now possible to use spaces and line feeds to decorate complex conditions.

  Example:

  !!if|i^Master_Warrior_Hero%(hero)^         &lt;&gt; (prevWasMasterWarrior)/
       i^Master_Mage_Hero%(hero)^            &lt;&gt; (prevWasMasterMage)/
       i^Master_Adventurer_Hero%(hero)^      &lt;&gt; (prevWasMasterAdventurer)/
       i^Grandmaster_Warrior_Hero%(hero)^    &lt;&gt; (prevWasGrandmasterWarrior)/
       i^Grandmaster_Mage_Hero%(hero)^       &lt;&gt; (prevWasGrandmasterMage)/
       i^Grandmaster_Adventurer_Hero%(hero)^ &lt;&gt; (prevWasGrandmasterAdventurer);
    ; ...
  !!en;

  - It&#x27;s now possible to use numbers in the left side of comparisons. Previosly they were treated as flags.

  Example 1:

  !!IF&amp;1000&gt;=(goldLeft):M^You have enough gold to buy the map^;

  Example 2:

  !#DC(EDU_MOD_VERSION) = 317;

  !!if &amp; (EDU_MOD_VERSION) &lt; 320;
    !!IF:M^You use old version of Edu mod. Please, update it^;
  !!en;

  - Single numeric or string values are casted to boolean now. For numbers it&#x27;s the same as &lt;&gt; 0. For strings it&#x27;s the same as &lt;&gt; ^^ (empty string).

  Examples:

  !!HE(CURRENT_HERO):W?(movePoints:y);
  !!IF&amp;(movePoints):M^Ok, you have some movement points^; same as &amp;(movePoints)&lt;&gt;0
  ; Please, use &gt;= operator in real code for anything, that can become negative. It&#x27;s just an example

  !!VR(inputText:z):S^test^;
  !!IF&amp;(inputText)/(inputText)&lt;&gt;^secret password^:M^You have entered wrong password!^; same as &amp;(inputText)&lt;&gt;^^/(inputText)&lt;&gt;^secret password^</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/) · [Heroes (HE)](../receivers/he/) · [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

</section>
:::

### ERA 3.4.3 {#era3-version-3-4-3}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-4-3-l1718"><summary><code>+</code> <strong>added</strong> · lines 1718–1727: Added new ERM command VR:B. It converts any number to boolean (1 or 0). Any non-zero value becomes 1. Example: !!OW:R(CURRENT_PLAYER)/(RES_GOLD)/…</summary><div class="era-change-body"><pre>Added new ERM command VR:B. It converts any number to boolean (1 or 0). Any non-zero value becomes 1.

  Example:

  !!OW:R(CURRENT_PLAYER)/(RES_GOLD)/?(goldAmount:y);
  !!VR(hasGold:y):S(goldAmount) B; now hasGold = (TRUE) or (FALSE)

  !!if&amp;(hasGold)=(TRUE);
    !!IF:M^I know you have some gold in your pockets!^;
  !!en;</pre><p>Related pages: [Players (OW)](../receivers/ow/) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

</section>
:::

### ERA 3.4.2 {#era3-version-3-4-2}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-4-2-l1732"><summary><code>+</code> <strong>added</strong> · lines 1732–1746: Added the following functions to Era Erm Framework: !?FU(RadioDlg_GetNumItems); ; Returns number of items, added to dialog !#VA(result:x); !?FU(R…</summary><div class="era-change-body"><pre>Added the following functions to Era Erm Framework:

  !?FU(RadioDlg_GetNumItems);
  ; Returns number of items, added to dialog
  !#VA(result:x);

  !?FU(RadioDlg_GetItemValue);
  ; Returns value of specified item or throws error in case of invalid index.
  !#VA(itemInd:x);
  !#VA(result:x);

  !?FU(RadioDlg_GetItemTag);
  ; Returns tag of specified item or throws error in case of invalid index.
  !#VA(itemInd:x);
  !#VA(result:x);</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-4-2-l1748"><summary><code>+</code> <strong>added</strong> · lines 1748–1748: Updated ERM Editor.</summary><div class="era-change-body"><pre>Updated ERM Editor.</pre></div></details>

</section>
:::

### ERA 3.4.1 {#era3-version-3-4-1}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-4-1-l1753"><summary><code>+</code> <strong>added</strong> · lines 1753–1758: (CURRENT_HERO) constant (-1) can be safely used in triggers from now. Previosly this global value could be overwritten by nested events. Example:…</summary><div class="era-change-body"><pre>(CURRENT_HERO) constant (-1) can be safely used in triggers from now. Previosly this global value could be overwritten by nested events.

  Example:
  !?HM0; current hero is Orrin
  !!HE(HERO_XERON):Ed100000;     Level up for Xeron, current hero used to become Xeron in previous Era versions
  !!HE(CURRENT_HERO):N?(hero:y); (hero) is always (HERO_ORRIN), starting from Era 3.4.1</pre><p>Related pages: [Hero movement (HM)](../triggers/hm/) · [Heroes (HE)](../receivers/he/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-4-1-l1760"><summary><code>+</code> <strong>added</strong> · lines 1760–1841: Implemented high level API for WoG radio dialogs (IF:G). Configure dialog before showing. Optionally assign value and tag to each item. Optionall…</summary><div class="era-change-body"><pre>Implemented high level API for WoG radio dialogs (IF:G). Configure dialog before showing. Optionally assign value and tag to each item.
    Optionally add special &quot;cancel&quot; item. The result is item index, value and tag. No need to convert bits anymore.

    Example 1:

    !?FU(OnAfterErmInstructions);
    !!FU(RadioDlg_Reset):P;
    !!FU(RadioDlg_SetTitle):P^What primary skill would you like to increase?^;
    !!FU(RadioDlg_AddCancelButton):P;

    !!FU(RadioDlg_AddItem):P^Attack^/(SKILL_ATTACK)/^attack^;
    !!FU(RadioDlg_AddItem):P^Defense^/(SKILL_DEFENSE)/^defense^;
    !!FU(RadioDlg_AddItem):P^Knowledge^/(SKILL_KNOWLEDGE)/^knowledge^;
    !!FU(RadioDlg_AddItem):P^Power^/(SKILL_POWER)/^power^;

    !!FU(RadioDlg_SelectItemByTag):P^knowledge^;
    !!FU(RadioDlg_Show):P?(item:y)/?(value:y)/?(tag:z);
    !!IF:M^Item: %(item). Value: %(value). Tag: %(tag)^;

    Example 2:

    !?FU(OnAfterErmInstructions);
    !!FU(RadioDlg_Reset):P;
    !!FU(RadioDlg_SetTitle):P^Select your starting hero:^;
    !!FU(RadioDlg_AddCancelButton):P;

    !!FU(RadioDlg_AddItem):P^Orrin^/(HERO_ORRIN);
    !!FU(RadioDlg_AddItem):P^Xeron^/(HERO_XERON);
    !!FU(RadioDlg_AddItem):P^Gird^/(HERO_GIRD);
    !!FU(RadioDlg_AddItem):P^Valeska^/(HERO_VALESKA);

    !!FU(RadioDlg_SelectItemByValue):P(HERO_GIRD); Preselect Gird from start
    !!FU(RadioDlg_Show):P?(item:y)/?(hero:y);

    !!if&amp;(hero)&gt;=(HERO_FIRST);
      !!IF:M^Selected hero: %(hero)^;
    !!en;

    API:

    !?FU(RadioDlg_Reset);
    ; Resets all radio dialog settings to empty values.

    !?FU(RadioDlg_SetTitle);
    ; Changes radio dialog title.

    !?FU(RadioDlg_AddCancelButton);
    ; Adds cancel button to dialog. Decreases maximum number of items in dialog by one.

    !?FU(RadioDlg_SelectItem);
    ; Sets new selected item by its index.
    !#VA(itemInd:x);

    !?FU(RadioDlg_SelectItemByValue);
    ; Finds the first item with specified value and selects it.
    !#VA(itemValue:x);

    !?FU(RadioDlg_SelectItemByTag);
    ; Finds the first item with specified tag and selects it.
    !#VA(itemTagPtr:x); Tag string

    !?FU(RadioDlg_AddItem);
    ; Adds new item to radio dialog.
    !#VA(itemCaptionPtr:x); Optional. New item caption. Empty/spacy captions are valid. Default: ^^.
    !#VA(itemValue:x);      Optional. Numeric value, associated with item. Default: 0.
    !#VA(itemTagPtr:x);     Optional. String tag, associated with item. Default: ^^.
    !#VA(selectItem:x);     Optional. Boolean. If TRUE, item will be selected. Default: FALSE.

    !?FU(RadioDlg_AddItems);
    ; Adds up to 5 items to radio dialog. For detailed arguments description see (RadioDlg_AddItem).
    !#VA(firstItemCaptionPtr:x);
    !#VA(firstItemValue:x);
    !#VA(firstItemTagPtr:x);

    !?FU(RadioDlg_Show);
    ; Display previously configured radio dialog with single possible choice.
    ; Currently maximum RADIO_DLG_MAX_ITEMS (-1 for cancel button) items can be added to the dialog.
    ; Returns selected item index, value and tag. Item index is (NO_RADIO_DLG_ITEM) if no items are present for selection
    ; or Cancel button was pressed.
    !#VA(resultItem:x);   Default: (NO_RADIO_DLG_ITEM).
    !#VA(resultValue:x);  Default: -1.
    !#VA(resultTagPtr:x); Default: ^^.</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

</section>
:::

### ERA 3.4.0 {#era3-version-3-4-0}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-4-0-l1845"><summary><code>+</code> <strong>added</strong> · lines 1845–1846: Added possibility to use animated defs in DL-dialogs. Just append &quot; animated&quot; to dialog item name to make it animated. Example: &quot;Def&quot; =&gt; &quot;Def ani…</summary><div class="era-change-body"><pre>Added possibility to use animated defs in DL-dialogs. Just append &quot; animated&quot; to dialog item name to make it animated. Example: &quot;Def&quot; =&gt; &quot;Def animated&quot;.
    Up to 10 animated defs are supported for each dialog. Animation speed is 10 frames per second. One single DEF group of frames is used.</pre></div></details>

<details class="era-change" id="era3-v-3-4-0-l1848"><summary><code>+</code> <strong>added</strong> · lines 1848–1848: Added possibility to specify frames group index for defs in DL-dialogs. Write frame index as GROUP_INDEX * 100000 + FRAME_INDEX. Group indexes ar…</summary><div class="era-change-body"><pre>Added possibility to specify frames group index for defs in DL-dialogs. Write frame index as GROUP_INDEX * 100000 + FRAME_INDEX. Group indexes are counted from 0.</pre></div></details>

<details class="era-change" id="era3-v-3-4-0-l1864"><summary><code>+</code> <strong>added</strong> · lines 1864–1877: Implemented block-style images support for Era Markup Language (EML). Use &quot;block&quot; attribute to mark image in text as block-style. New line before…</summary><div class="era-change-body"><pre>Implemented block-style images support for Era Markup Language (EML).

  Use &quot;block&quot; attribute to mark image in text as block-style. New line before and after image will be forced automatically.
  Vertical space in text is also automatically reserved for block images. Moreover, they can be partially scrolled without vanishing effect, occuring for inline images.

  Examples:

  !!IF:M^{~text align=center}{~Orange}Fire camping{~}

  ----
  {~&gt;CDEVIL.def:0:0 valign=&quot;middle&quot; block}
  ----

  {~&gt;cndrgn.def:12:2 block}{~}^;</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l1879"><summary><code>+</code> <strong>added</strong> · lines 1879–1879: Added support for 65536-color pcx images (pcx16) in DL-dialogs. Default loading mode is 256 colors (pcx8). To load image as pcx16 change its name…</summary><div class="era-change-body"><pre>Added support for 65536-color pcx images (pcx16) in DL-dialogs. Default loading mode is 256 colors (pcx8). To load image as pcx16 change its name in dialogs editor to &#x27;****.pcx.pcx16&#x27;. Real file name in lod/pac archive should be left as is. The engine will recognise new extension, transform it into &#x27;.pcx&#x27; and load image as pcx16.</pre></div></details>

<details class="era-change" id="era3-v-3-4-0-l1881"><summary><code>+</code> <strong>added</strong> · lines 1881–1893: Improved ERM 2 compiler. It became possible to use named local variables and quick variables (f..t) as arrays subscripts. Syntax: (array&#91;index&#93;) …</summary><div class="era-change-body"><pre>Improved ERM 2 compiler. It became possible to use named local variables and quick variables (f..t) as arrays subscripts.
  Syntax: (array&#91;index&#93;) or (array&#91;i&#93;).
  Index value is evaluated BEFORE current receiver, thus do not change it in receiver itself like &quot;!!MO998:G?i G(array&#91;i&#93;)&quot;.

  A new magic constant &#x27;SIZE&#x27; was added to return array size. Usage: (array&#91;SIZE&#93;). It&#x27;s compiled into count of array items.
  Thus looping through all array items became easy:

  !!re i/0/(array&#91;SIZE&#93;)/1/-1; Note the last -1, meaning loop from index 0 to SIZE - 1
    !!IF:M^%(array&#91;i&#93;)^;
  !!en;

  Note, that regular constants are also supported:
  !!IF:M^%(array&#91;PLAYER_TEAL&#93;)^;</pre><p>Related pages: [Neutral map monsters (MO)](../receivers/mo/) · [Flags, messages and choices (IF)](../receivers/if/) · [Variables, strings and arrays](../variables/) · [ERM syntax: ZVSE and ZVSE2](../syntax/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l1895"><summary><code>+</code> <strong>added</strong> · lines 1895–1913: Implemented automatical static and dynamic index checking for ERM 2.0 arrays. Invalid indexes are reported and forced to valid range. Example: !#…</summary><div class="era-change-body"><pre>Implemented automatical static and dynamic index checking for ERM 2.0 arrays. Invalid indexes are reported and forced to valid range.

  Example:

  !#VA(msgType&#91;7&#93;:y) (msgColor&#91;7&#93;:y);

  !!re i/(PLAYER_FIRST)/(PLAYER_LAST);
    !!VR(msgType&#91;i&#93;):S(PIC_TYPE_FLAG); Here we get error. Array size is 7, while number of game players is 8. i = 7 is outside of valid 0..6 range
    !!VR(msgColor&#91;i&#93;):Si;              Here we get error. Array size is 7, while number of game players is 8. i = 7 is outside of valid 0..6 range
  !!en;

  Let&#x27;s rewrite the example without bugs:

  !#VA(msgType&#91;NUM_PLAYERS&#93;:y) (msgColor&#91;NUM_PLAYERS&#93;:y);

  !!re i/(PLAYER_FIRST)/(PLAYER_LAST);
    !!VR(msgType&#91;i&#93;):S(PIC_TYPE_FLAG);
    !!VR(msgColor&#91;i&#93;):Si;
  !!en;</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l1915"><summary><code>+</code> <strong>added</strong> · lines 1915–1944: Event DL/(OnCustomDialogEvent) now receive all mouse/keyboard parameters, accessible via !!CM and tracks clicks outside dialogs main area. Check …</summary><div class="era-change-body"><pre>Event DL/(OnCustomDialogEvent) now receive all mouse/keyboard parameters, accessible via !!CM and tracks clicks outside dialogs main area.
    Check CM:T or i^dlg_action^ value for:
      (DLG_ACTION_INDLG_CLICK)
      (DLG_ACTION_OUTDLG_CLICK)
      (DLG_ACTION_MOUSE_WHEEL)
      (DLG_ACTION_KEY_PRESSED)

    Example:

      !?DL&amp;i^dlg_action^=(DLG_ACTION_OUTDLG_CLICK);
      !!IF:M^You clicked outside dialog!^;

    For (DLG_ACTION_MOUSE_WHEEL) action CM:S or i^mouse_action^ can be one of:
      (MOUSE_WHEEL_UP)
      (MOUSE_WHEEL_DOWN)

    Example:

      !?DL&amp;i^dlg_action^=(DLG_ACTION_MOUSE_WHEEL);
      !!IF:M^Wheel: %i(mouse_action)^; display 1/-1 for wheel up/down

    Keyboard presses in dialog can be handled now using Era Erm Framework:

      !?DL&amp;i^dlg_action^=(DLG_ACTION_KEY_PRESSED)/i^key^=(KEY_Q);
      !!IF:M^Good buy any dialog!^;
      !!DLi^dlg_id^:C(TRUE);

    Added two global variables to Era Erm Framework:
    - i^dlg_action^ with CM:T value (action type). Specially useful for DL-dialog events. See DLG_ACTION_XXX constants.
    - i^dlg_id^ with active DL-dialog ID.</pre><p>Related pages: [Mouse-event context (CM)](../receivers/cm/) · [Custom dialog events (DL)](../triggers/dl/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l1946"><summary><code>+</code> <strong>added</strong> · lines 1946–1947: !!VR:F command can be called with 3 parameters now: !!VR(var):F(minValue)/(maxValue)/(showErrors); If the third parameter is specified and not (F…</summary><div class="era-change-body"><pre>!!VR:F command can be called with 3 parameters now: !!VR(var):F(minValue)/(maxValue)/(showErrors);
    If the third parameter is specified and not (FALSE), values outside specified range are reported using regular ERM error reporting dialog.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l1949"><summary><code>+</code> <strong>added</strong> · lines 1949–1958: Added new ERM events: - &quot;OnWinGame&quot; occurs when human player wins scenario. - &quot;OnLoseGame&quot; occurs when human player loses scenario. - &quot;OnTransfer…</summary><div class="era-change-body"><pre>Added new ERM events:
  - &quot;OnWinGame&quot;  occurs when human player wins scenario.
  - &quot;OnLoseGame&quot; occurs when human player loses scenario.

  - &quot;OnTransferHero&quot; occurs when hero data from the previous campaign scenario is transferred to the next zone.
                     The events occurs after instructions but before PI (OnAfterErmInstructions).
                     The only argument is ID of hero, which is transferred from the previous scenario.

  - &quot;OnAfterHeroGainLevel&quot; occurs after AI/Human hero level-up. Dialog is already closed. Use (ERM_FLAG_IS_HUMAN) and (CURRENT_HERO) constants.
                           The only argument is Hero ID.</pre><p>Related pages: [Winning the game (OnWinGame)](../triggers/onwingame/) · [Framework events](../framework/events/) · [Losing the game (OnLoseGame)](../triggers/onlosegame/) · [Transferring a campaign hero (OnTransferHero)](../triggers/ontransferhero/) · [After a hero level-up (OnAfterHeroGainLevel)](../triggers/onafterherogainlevel/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l1960"><summary><code>+</code> <strong>added</strong> · lines 1960–1963: Added extra parameter to &quot;OnKeyPressed&quot; event. &quot;OnKeyPressed&quot; occurs multiple times, when you hold the key, while it&#x27;s sometimes necessary to cat…</summary><div class="era-change-body"><pre>Added extra parameter to &quot;OnKeyPressed&quot; event. &quot;OnKeyPressed&quot; occurs multiple times, when you hold the key, while it&#x27;s sometimes necessary to catch only the first time, when key state changes to DOWN and ignore other events until key state changes to UP. The third event argument serves this purpose and is TRUE only when the key changes its state to DOWN.

 !?FU(OnKeyPressed);
 !#VA(key:x) (preventDefault:x) (isDown:x);</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Key press (OnKeyPressed)](../triggers/onkeypressed/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l1965"><summary><code>+</code> <strong>added</strong> · lines 1965–1976: Implemented two universal events for handling human local events: &quot;OnBeforeLocalEvent&quot; and &quot;OnAfterLocalEvent&quot;. They occur before any !?LE/!$LE t…</summary><div class="era-change-body"><pre>Implemented two universal events for handling human local events: &quot;OnBeforeLocalEvent&quot; and &quot;OnAfterLocalEvent&quot;. They occur before any !?LE/!$LE trigger respecively
    and receive 3 parameters: x, y and z coordinates.

    Example:

    !?FU(OnBeforeLocalEvent);
    !#VA(x:x) (y:x) (z:x);
    !!IF:M^OnBeforeLocalEvent %(x) %(y) %(z)^;

    !?FU(OnAfterLocalEvent);
    !#VA(x:x) (y:x) (z:x);
    !!IF:M^OnAfterLocalEvent %(x) %(y) %(z)^;</pre><p>Related pages: [Local-event visit (LE)](../triggers/le/) · [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Before a local event (OnBeforeLocalEvent)](../triggers/onbeforelocalevent/) · [Framework events](../framework/events/) · [After a local event (OnAfterLocalEvent)](../triggers/onafterlocalevent/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l1978"><summary><code>+</code> <strong>added</strong> · lines 1978–2006: Added the following new functions to Era Erm Framework: !?FU(IsDllLoaded); ; Returns (TRUE) is specified DLL is loaded. The check is fast and doe…</summary><div class="era-change-body"><pre>Added the following new functions to Era Erm Framework:

  !?FU(IsDllLoaded);
  ; Returns (TRUE) is specified DLL is loaded. The check is fast and does not lead to loading dll.
  !#VA(dllFileNamePtr:x); DLL file name with extension (*.dll, *.era, *.ani, etc).
  !#VA(result:x);         Boolean. (TRUE) if DLL is loaded.

  !?FU(FileExists);
  ; Returns true if file (not directory) exists.
  !#VA(filePathPtr:x); Absolute or relative path to file
  !#VA(result:x);      Boolean. (TRUE) if file exists and is not a directory

  !?FU(DirExists);
  ; Returns true if a directory (not a file) exists.
  !#VA(dirPathPtr:x); Absolute or relative path to directory
  !#VA(result:x);     Boolean. (TRUE) if directory exists and is not a directory

  !?FU(DeleteFile);
  ; Deletes specified file and returns success flag.
  !#VA(filePathPtr:x); Absolute or relative path to directory
  !#VA(result:x);      Boolean. (TRUE) if file existed and was deleted.

  !?FU(ClearIniCache);
  ; Erases all cached ini file data from memory. You can safely delete ini file afterwards.
  !#VA(filePathPtr:x); Absolute or relative path to ini file

  !?FU(CreateDir);
  ; Creates new directory if it does not exist.
  !#VA(dirPathPtr:x); Absolute or relative path to directory</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l2008"><summary><code>+</code> <strong>added</strong> · lines 2008–2011: The following improvements were introduced in &quot;Era Erm Framework&quot; mod: - Added new globally saved parameters for &quot;OnKeyPressed&quot; event: i^key_down…</summary><div class="era-change-body"><pre>The following improvements were introduced in &quot;Era Erm Framework&quot; mod:

  - Added new globally saved parameters for &quot;OnKeyPressed&quot; event:
  i^key_down^: boolean. TRUE only when the key changes its state from UP to DOWN the first time until being released.</pre><p>Related pages: [Key press (OnKeyPressed)](../triggers/onkeypressed/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l2013"><summary><code>+</code> <strong>added</strong> · lines 2013–2031: Added the following exported functions to era.dll: - function IsCampaign: TDwordBool; !!SN:F^IsCampaign^; v1 = (TRUE) or (FALSE) - procedure GetC…</summary><div class="era-change-body"><pre>Added the following exported functions to era.dll:

  - function IsCampaign: TDwordBool;

  !!SN:F^IsCampaign^; v1 = (TRUE) or (FALSE)

  - procedure GetCampaignFileName (Buf: pchar);

  !!SN:F^GetCampaignFileName^/?(campaignFileName:z); will crash if it&#x27;s not campaign

  - procedure GetMapFileName (Buf: pchar);

  !!SN:F^GetMapFileName^/?(mapFileName:z);

  - function GetCampaignMapInd: integer;
    Returns campaign map zone index (index in original zone maps list, starting from 0).

  !!SN:F^GetCampaignMapInd^;  will crash if it&#x27;s not campaign
  !!IF:M^%v1^;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l2033"><summary><code>+</code> <strong>added</strong> · lines 2033–2034: Fixed transferring of WoG commanders with heroes in campaigns. Previously transferring didn&#x27;t work if hero was inactive in transition zone. &quot;OnTr…</summary><div class="era-change-body"><pre>Fixed transferring of WoG commanders with heroes in campaigns. Previously transferring didn&#x27;t work if hero was inactive in transition zone.
    &quot;OnTransferHero&quot; is called for all transferred heroes, even for inactive ones, which will be used in other zones.</pre><p>Related pages: [Transferring a campaign hero (OnTransferHero)](../triggers/ontransferhero/) · [Framework events](../framework/events/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l2038"><summary><code>+</code> <strong>added</strong> · lines 2038–2038: Updated ERM editor.</summary><div class="era-change-body"><pre>Updated ERM editor.</pre></div></details>

<details class="era-change" id="era3-v-3-4-0-l2040"><summary><code>*</code> <strong>changed</strong> · lines 2040–2042: Fixed non-working &quot;OnBeforeBattleReplay&quot; and &quot;OnAfterBattleReplay events&quot;. Newest &quot;BattleReplay&quot; plugin by igrik is required. After battle end wh…</summary><div class="era-change-body"><pre>Fixed non-working &quot;OnBeforeBattleReplay&quot; and &quot;OnAfterBattleReplay events&quot;. Newest &quot;BattleReplay&quot; plugin by igrik is required.
    After battle end when user clicks &quot;Cancel&quot; button, &quot;OnBeforeBattleReplay&quot; is generated. Battle state is reset and &quot;OnBattleReplay&quot; event
    is generated, where you can revert global variables to pre-battle state, because OnBeforeBattleUniversal will not be called twice.</pre><p>Related pages: [Before battle replay (OnBeforeBattleReplay)](../triggers/onbeforebattlereplay/) · [Framework events](../framework/events/) · [Battle replay (OnBattleReplay)](../triggers/onbattlereplay/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l2044"><summary><code>*</code> <strong>changed</strong> · lines 2044–2068: Renamed &quot;OnTownHallMouseClick&quot; to more accurate &quot;OnTownFortMouseClick&quot;. &#91;!&#93; SN:Q is deprecated and shoudn&#x27;t be used for new scripts because it ma…</summary><div class="era-change-body"><pre>Renamed &quot;OnTownHallMouseClick&quot; to more accurate &quot;OnTownFortMouseClick&quot;.

&#91;!&#93; SN:Q is deprecated and shoudn&#x27;t be used for new scripts because it may break any ERM library/mod/script functionality.
    ERM interpreter and Era Erm Framework were updated to support SN:Q in old scripts.
    If an event has at least single Lua/Erm/plugin handler, whenever it ends or SN:Q is called, an &quot;OriginalEventName_Quit&quot; trigger is called with the same x-arguments.
    In quit triggers SN:Q works as FU:E.

    Example:

    !?FU(OnAfterErmInstructions);
    !!FU(ex_OnSomeCustomEvent):P;

    !?FU(ex_OnSomeCustomEvent);
    !!IF:M^Trigger 1^;
    !!SN:Q; skip Trigger 2, trigger &quot;ex_OnSomeCustomEvent_Quit&quot; event

    !?FU(ex_OnSomeCustomEvent);
    !!IF:M^Trigger 2^;

    !?FU(ex_OnSomeCustomEvent_Quit);
    !!IF:M^Quit Trigger Handler^;
    !!SN:Q; works as FU:E here

    !?FU(ex_OnSomeCustomEvent_Quit);
    !!IF:M^Another Quit Trigger Handler^;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [ERA services, memory and sound (SN)](../receivers/sn/) · [Function calls (FU)](../receivers/fu/) · [Framework events](../framework/events/) · [Town fort mouse click (OnTownFortMouseClick)](../triggers/ontownfortmouseclick/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l2071"><summary><code>-</code> <strong>fixed</strong> · lines 2071–2071: Fixed bug in Era Erm Framework: NewIntArray and NewStrArray function were ignoring (storageType) argument.</summary><div class="era-change-body"><pre>Fixed bug in Era Erm Framework: NewIntArray and NewStrArray function were ignoring (storageType) argument.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-4-0-l2072"><summary><code>-</code> <strong>fixed</strong> · lines 2072–2072: Fixed bug in Era Erm Framework: mouse/keyboard event data was not restored on trigger end.</summary><div class="era-change-body"><pre>Fixed bug in Era Erm Framework: mouse/keyboard event data was not restored on trigger end.</pre><p>Related pages: [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

</section>
:::

### ERA 3.3.0 {#era3-version-3-3-0}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-3-0-l2081"><summary><code>+</code> <strong>added</strong> · lines 2081–2083: Implemented transparency support for colored texts using {~RRGGBBAA}...{~} tags, where AA stands for alpha channel, which determines text opacity…</summary><div class="era-change-body"><pre>Implemented transparency support for colored texts using {~RRGGBBAA}...{~} tags, where AA stands for alpha channel, which determines text opacity. 0 means transparant, 255 is fully opaque, $80 is 50% transparent. Old-style tags in {~RRGGBB} format works as fully opaque.

Example: !!IF:L^{~FF0000}{~FF0000C0}{~FF000080}{~FF000040}You&#x27;ve{~} found{~} some{~} gold{~}^;</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2112"><summary><code>+</code> <strong>added</strong> · lines 2112–2116: Updated &quot;game bug fixes extended&quot; plugin by igrik: - Removed screen redraw when AI visits teleports if &quot;do not show enemy movement&quot; option is on.…</summary><div class="era-change-body"><pre>Updated &quot;game bug fixes extended&quot; plugin by igrik:
  - Removed screen redraw when AI visits teleports if &quot;do not show enemy movement&quot; option is on.
  - Stack experience marks are drawn in leave/join creature dialogs, but only for hero slots.
  - Fixed bugs caused by ALT usage during stack combining in leave/join creature dialogs.
  - Other fixes.</pre></div></details>

<details class="era-change" id="era3-v-3-3-0-l2118"><summary><code>+</code> <strong>added</strong> · lines 2118–2121: Updated &quot;wog native dialogs&quot; by igrik: - Removed possibility to show settings window from main menu by F5 key. Removed automatical MAX selection …</summary><div class="era-change-body"><pre>Updated &quot;wog native dialogs&quot; by igrik:
  - Removed possibility to show settings window from main menu by F5 key. Removed automatical MAX selection in creature recruiting dialogs.
  - It&#x27;s possible to select pictures in native H3 selection dialogs using keyboard arrow keys LEFT and RIGHT.
  - Leaving monsters/artefacts on map is trigged by CTRL + RMB instead of single RMB now.</pre></div></details>

<details class="era-change" id="era3-v-3-3-0-l2125"><summary><code>+</code> <strong>added</strong> · lines 2125–2125: Event &quot;OnKeyPressed&quot; now handles ALT key.</summary><div class="era-change-body"><pre>Event &quot;OnKeyPressed&quot; now handles ALT key.</pre><p>Related pages: [Key press (OnKeyPressed)](../triggers/onkeypressed/) · [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2132"><summary><code>+</code> <strong>added</strong> · lines 2132–2139: ERM syntax can be safely beautified for all Era 3.X versions by skipping trailing &quot;:&quot; before &quot;;&quot;. !!re 0/7/1; ... !!en; !!if&amp;(heroId)=(HERO_XERON…</summary><div class="era-change-body"><pre>ERM syntax can be safely beautified for all Era 3.X versions by skipping trailing &quot;:&quot; before &quot;;&quot;.
  !!re 0/7/1;
    ...
  !!en;

  !!if&amp;(heroId)=(HERO_XERON);
    ...
  !!en;</pre><p>Related pages: [ERM syntax: ZVSE and ZVSE2](../syntax/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2141"><summary><code>+</code> <strong>added</strong> · lines 2141–2141: Restored VR:S?$ syntax support from Era 2.</summary><div class="era-change-body"><pre>Restored VR:S?$ syntax support from Era 2.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2143"><summary><code>+</code> <strong>added</strong> · lines 2143–2144: Extended !!OW:C command with the following syntax: OW:C?(owner)/?(thisPcOwner). It became possible to get not only current player, who may play a…</summary><div class="era-change-body"><pre>Extended !!OW:C command with the following syntax: OW:C?(owner)/?(thisPcOwner).
    It became possible to get not only current player, who may play at remote PC, but also this PC human player, who possibly waits for his turn and triggers interface events.</pre><p>Related pages: [Players (OW)](../receivers/ow/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2146"><summary><code>+</code> <strong>added</strong> · lines 2146–2170: Added new ERM command SN:B to work with binary buffers on a low level. It allows to: - get address of local or static global ERM variable; - read…</summary><div class="era-change-body"><pre>Added new ERM command SN:B to work with binary buffers on a low level. It allows to:
    - get address of local or static global ERM variable;
    - read/write integer/string from/to specific address.

    !!SN:B(intAddress) or ?(intVar) or (strVar) or ?(strVar)&#91;/?(addressValue) or (dummy)/$valueAtAddress&#93;

    The first argument determines variable address to work with. For strings it&#x27;s always first string character address, regardless GET/SET syntax.
    For floats/ints SET syntax mean value of variable as address. GET syntax means address of specified variable.

    !!VR(test:y):S8943200;
    !!SN:B(test);  means use 8943200 as address
    !!SN:B?(test); means use address of (test) y-variable.

    !!VR(text:z):S^hello world^;
    !!SN:B(text);  means use address of (text) first character
    !!SN:B?(text); means use address of (text) first character too.

    Example:
    Let us declare integer y-variable and determine its address to use with external API function.
    !!VR(fileHandle:y):S(INVALID_HANDLE_VALUE);
    !!SN:B?(fileHandle)/?(fileHandleAddr:y); (fileHandlerAddr) is now address of (fileHandle) variable.

    Let us read last savegame name from H3 static buffer
    !!SN:B(ADDR_MARKED_SAVEGAME_NAME)/d/?(lastSavegameName:z);
    !!IF:M^You last savegame name was %(lastSavegameName)^;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2172"><summary><code>+</code> <strong>added</strong> · lines 2172–2176: Added new events to &quot;Era Erm Framework&quot; mod: - &quot;OnStartOrLoad&quot;: occures after map start or savegame is loaded. Safe alternative to &quot;OnGameStart&quot;,…</summary><div class="era-change-body"><pre>Added new events to &quot;Era Erm Framework&quot; mod:

  - &quot;OnStartOrLoad&quot;: occures after map start or savegame is loaded. Safe alternative to &quot;OnGameStart&quot;, which is triggered before adventure map display.
  The event occurs after (OnAfterErmInstructions, OnAfterErmInited) and after (OnAfterLoadGame) event.
  The only argument is (isNewGame:x), which is (TRUE) for map start and (FALSE) for map loading.</pre><p>Related pages: [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2178"><summary><code>+</code> <strong>added</strong> · lines 2178–2178: Added many new constants to &quot;Era Erm Framework&quot; mod for bits, bit masks, game managers addresses, dialog item ids, etc.</summary><div class="era-change-body"><pre>Added many new constants to &quot;Era Erm Framework&quot; mod for bits, bit masks, game managers addresses, dialog item ids, etc.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2180"><summary><code>+</code> <strong>added</strong> · lines 2180–2212: The following improvements were introduced in &quot;Era Erm Framework&quot; mod: - &quot;OnKeyPressed&quot; event and all mouse click events were improved, storing k…</summary><div class="era-change-body"><pre>The following improvements were introduced in &quot;Era Erm Framework&quot; mod:

  - &quot;OnKeyPressed&quot; event and all mouse click events were improved, storing keyboard special keys in global variables.
  i^key^:            Pressed key virtual key code (not scan code) for &quot;OnKeyPressed&quot; event only. Use KEY_XXX constants for it.
  i^key_leftAlt^:    TRUE if left ALT is pressed.
  i^key_rightAlt^:   TRUE if right alt is pressed.
  i^key_alt^:        TRUE if any alt is pressed.
  i^key_leftCtrl^:   TRUE if left control is pressed.
  i^key_rightCtrl^:  TRUE if right control is pressed.
  i^key_ctrl^:       TRUE if any control is pressed.
  i^key_leftShift^:  TRUE if left shift is pressed.
  i^key_rightShift^: TRUE if right shift is pressed.
  i^key_shift^:      TRUE if any shift is pressed.

  - All mouse click events were improved, storing event parameters in global variables.
  i^mouse_x^:         Cursor x-coordinate in game window.
  i^mouse_y^:         Cursor y-coordinate in game window.
  i^mouse_battleHex^: Battle hex ID for battle clicks.
  i^mouse_flags^:     Mouse flags mask: set of MOUSE_FLAG_XXX constants.
  i^mouse_hero_0^:    Hero screen hero ID or hero meeting screen left hero ID.
  i^mouse_hero_1^:    Hero meeting screen right hero ID.
  i^mouse_item^:      Clicked dialog item ID (CM:I). See ITEM_XXX constants.
  i^mouse_mapX^:      Map tile x-coordinate.
  i^mouse_mapY^:      Map tile y-coordinate.
  i^mouse_mapZ^:      Map tile z-coordinate.
  i^mouse_action^:    Action ID. One of MOUSE_XXX constants like MOUSE_LMB_RELEASED or MOUSE_RMB_PRESSED.

  Examples:
  !?FU(OnKeyPressed_AdvMap)&amp;i^key^=(KEY_F)/i^key_ctrl^=(TRUE);
  !!IF:M^CTRL+F on adventure map!^;

  !?FU(OnAdventureMapRightMouseClick)&amp;i^mouse_item^=(ITEM_ADVMAP_HERO_LIST_MOVE_BAR_2)/i^mouse_action^=(MOUSE_RMB_PRESSED)/i^key_ctrl^=(TRUE);
  !!IF:N(NO_PIC_TYPE)/(NO_PIC_TYPE)/(NO_PIC_TYPE)/(NO_PIC_TYPE) N(MSG_TYPE_POPUP)/^ctrl + RMB on the second hero move bar!^;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Mouse-event context (CM)](../receivers/cm/) · [Key press (OnKeyPressed)](../triggers/onkeypressed/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2214"><summary><code>+</code> <strong>added</strong> · lines 2214–2411: Added the following functions to &quot;Era Erm Framework&quot; mod: !?FU(GetTimeMsec); ; Returns current time in milliseconds (time from computer start, ov…</summary><div class="era-change-body"><pre>Added the following functions to &quot;Era Erm Framework&quot; mod:

  !?FU(GetTimeMsec);
  ; Returns current time in milliseconds (time from computer start, overflowing each 49.71 days)
  !#VA(result:x);

  !?FU(PackUnion);
  ; Safely packs union fields into single 32-bits integer, allowing to store multiple values in a single variable.
  ; Arguments are pairs of (field value, field size in bits). The first field is written at bit 0-th position.
  ; The last argument is result.
  ; Example: P(x)/8/ (y)/8/ (z)/8/ (heroId)/8/ ?(result:y);

  !?FU(UnpackUnion);
  ; Safely unpacks single 32-bits integer value into multiple field values.
  ; The first argument is packed value.
  ; Other arguments are pairs of (?field value, field size in bits). The first field is read at bit 0-th position.
  ; Example: P45683/ ?(x:y)/8/ ?(y:y)/8/ ?(z:y)/8/ ?(heroId:y)/8;

  !?FU(Array_Shuffle);
  ; Randomly shuffles all items in the list.
  !#VA(list:x); Array ID.

  !?FU(Array_Merge);
  ; Given destination array and arbitrary number of source arrays. Appends all items from all source arrays
  ; to the destination array.
  ; Example. Given listA = &#91;100, 200, 300&#93;, listB = &#91;500, 600&#93;. P(listA)/(listB) =&gt; &#91;100, 200, 300, 500, 600&#93;
  !#VA(dstArray:x);          Destination array to append new items to.
  !#VA(firstArrayToMerge:x); ... Arrays to merge with the first one

  Examples:
  !!FU(NewStrArray):P?(listA:y);
  !!FU(Array_Push):P(listA)/^one^/^two^/^three^;
  !!FU(NewStrArray):P?(listB:y);
  !!FU(Array_Push):P(listB)/^wog^/^era^;
  !!FU(Array_Merge):P(listA)/(listB)/(listB);
  !!FU(Array_Join):P(listA)/?(text:z)/^ ^;
  !!IF:M^%(text)^; &quot;one two three wog era wog era&quot;

  !?FU(Array_Slice);
  ; Returns part of original array as new trigger-local array.
  !#VA(list:x);   Array to get slice of.
  !#VA(start:x);  Initial index, starting from zero. Negative offset means &#x27;from the end&#x27;.
  !#VA(count:x);  Number of items to copy. Negative value means &quot;skipping&quot; that number of items from list end.
  !#VA(result:x); Result array.
  !#VA(arrayStorageType:x); OPT. Special storage type for result like M_STORED. Default: M_TRIGGER_LOCAL.

  Examples:
  !!FU(NewStrArray):P?(listA:y);
  !!FU(Array_Push):P(listA)/^one^/^two^/^three^/^four^/^five^;
  !!FU(Array_Slice):P(listA)/-4/-1/?(listB:y);
  !!FU(Array_Join):P(listB)/?(text:z)/^ ^;
  !!IF:M^%(text)^; &quot;two three four&quot;

  !?FU(Substr);
  ; Returns substring from existing string.
  !#VA(strPtr:x); Original string.
  !#VA(start:x);  Initial offset, starting from zero. Negative offset means &#x27;from the end&#x27;.
  !#VA(count:x);  OPT. Number of characters to copy. Negative value means &quot;skipping&quot; that number of characters from string end.
  !#VA(result:x); Result substring.

  Examples:
  !!VRs^message^:S^Have a nice day dear Perry^;
  !!FU(Substr):Ps^message^/-5/(INT_MAX)/?s^submessage^; copy up to 5 characters from the end
  !!IF:M^%s(submessage)^; &quot;Perry&quot;

  !!VRs^message^:S^Have a nice day dear Perry^;
  !!FU(Substr):Ps^message^/5/(INT_MAX)/?s^submessage^; copy, skipping the first 5 characters
  !!IF:M^%s(submessage)^; &quot;a nice day dear Perry&quot;

  !!VRs^message^:S^Have a nice day dear Perry^;
  !!FU(Substr):Ps^message^/5/-6/?s^submessage^; copy from 6-th character to the end, not including the last 6 characters
  !!IF:M^%s(submessage)^; &quot;a nice day dear&quot;

  !?FU(ScanDir);
  ; Reads directory contents, filling specified list with file names.
  ; Example: P^Np3^/(fileList)/(SCAN_FILES_ONLY);
  !#VA(dirPathPtr:x); Absolute or relative path to directory to scan.
  !#VA(fileList:x);   ID of array to store file names in.
  !#VA(itemsType:x);  OPT. Type of items to collect: files, directories or both. One of SCAN_XXX constants. Default: SCAN_FILES_AND_DIRS.
  !#VA(fullPaths:x);  OPT boolean. If true, result items will be have dirPath predended. Default: false.

  !?FU(SaveIni);
  ; Saves ini file, if it was earlier cached in memory (any read/write operation was performed).
  !#VA(filePathPtr:x); Absolute or relative path to ini file

  !?FU(WriteIniInts);
  ; Writes multiple integer values to ini file in memory, but postpones saving data to disk. Call &quot;SaveIni&quot; to flush cached data.
  ; Example: P^Runtime/my mod.ini^/^hero levels^/(HERO_ORRIN)/13/(HERO_XERON)/41;
  !#VA(filePathPtr:x);    Absolute or relative path to ini file
  !#VA(sectionNamePtr:x); Section name in ini file.
  !#VA(firstKeyPtr:x);    ... Up to 7 key, value pairs to write.
  !#VA(firstValue:x);

  !?FU(WriteIniStrings);
  ; Writes multiple string values to ini file in memory, but postpones saving data to disk. Call &quot;SaveIni&quot; to flush cached data.
  ; Example: P^Runtime/my mod.ini^/^custom hero names^/^%(HERO_ORRIN)^/^Perrin R^/^%(HERO_XERON)^/^Berson^;
  !#VA(filePathPtr:x);    Absolute or relative path to ini file
  !#VA(sectionNamePtr:x); Section name in ini file.
  !#VA(firstKeyPtr:x);    ... Up to 7 key, value pairs to write.
  !#VA(firstValue:x);

  !?FU(ReadIniStrings);
  ; Reads multiple string values from ini file or from memory if ini file was read/written to earlier.
  ; Example: P(filePath)/(sectionName)/^%(HERO_ORRIN)^/?(orrinName:z)/^Orrin^/^%(HERO_XERON)^/?(xeronName:z)/^Xeron^;
  !#VA(filePathPtr:x);    Absolute or relative path to ini file
  !#VA(sectionNamePtr:x); Section name in ini file.
  !#VA(firstKeyPtr:x);    ... Up to 4 (key, ?value, defaultValue) tripples to read.
  !#VA(firstValue:x);
  !#VA(firstValueDefault:x);

  !?FU(ReadIniInts);
  ; Reads multiple integer values from ini file or from memory if ini file was read/written to earlier.
  ; Example: P(filePath)/^hero levels^/^%(HERO_ORRIN)^/?(orrinLevel:y)/1/^%(HERO_XERON)^/?(xeronLevel:y)/1;
  !#VA(filePathPtr:x);    Absolute or relative path to ini file
  !#VA(sectionNamePtr:x); Section name in ini file.
  !#VA(firstKeyPtr:x);    ... Up to 4 (key, ?value, defaultValue) tripples to read.
  !#VA(firstValue:x);
  !#VA(firstValueDefault:x);

  !?FU(GetMaxMonsterId);
  ; Returns ID of the last supported monster in game.
  !#VA(result:x);

  !?FU(GetUpgradedMonster);
  ; Returns ID of upgraded monster or NO_MON if no upgrade exists.
  !#VA(monId:x);  ID of monster to get upgrade for.
  !#VA(result:x); OUT. ID of upgraded monster or -1.

  !?FU(GetDegradedMonCandidates);
  ; Returns temporary list of all monsters, which can be upgraded to specified monster.
  ; There may exist multiple monster, upgrading to the same type. Function performance is low.
  !#VA(monId:x);        Upgraded monster ID.
  !#VA(degradesList:x); ID of temporary SN:M array with degraded monster candidates.

  !?FU(BattleStack_Shoot);
  ; Forces one stack to shoot at another one.
  !#VA(attackerStackId:x) (defenderStackId:x);
  !!BM(attackerStackId):Z?(attackerStackStruct:y);
  !!BM(defenderStackId):Z?(defenderStackStruct:y);
  !!SN:E4453920/(CALLCONV_THISCALL)/(attackerStackStruct)/(defenderStackStruct);

  !?FU(GetMaxHeroId);
  ; Returns ID of the last supported hero in game.
  !#VA(result:x);

  !?FU(LoadIntGlobalsFromJson);
  ; Loads global mod/script settings from json config right into prefixed named global variables.
  ; Supports usage of any constant name instead of numbers in JSON. For example, you want to load
  ; json values &quot;umt.randomizationIntervalDays&quot; and &quot;umt.playAltThemesSequently&quot; to global variables
  ; i^umt_randomizationIntervalDays^ and i^umt_playAltThemesSequently^ and want to be able to write in json:
  ; &quot;umt.playAltThemesSequently&quot;: &quot;TRUE&quot;.
  ;
  ; Example: P^umt.^/^umt_^/^randomizationIntervalDays^/^playAltThemesSequently^;
  !#VA(jsonKeysPrefixPtr:x);   Name of json keys prefix like ^mix.globals.^ for {&quot;mix&quot;: {&quot;globals&quot;: { ... }}}
  !#VA(globalVarsPrefixPtr:x); Name of global variables prefix. Usually mod prefix like &quot;mix_&quot; or &quot;umt_&quot;.
  !#VA(firstKeyNamePtr:x);     ... Up to 14 json key names to read and convert into global variables

  !?FU(SaveGame);
  !#VA(fileNamePtr:x);     File name without extension to save game to.
  !#VA(appendExtension:x); OPT boolean. If true, automatical extension will be appended to file name. Default: TRUE.
  !#VA(compressFile:x);    OPT boolean. If true, saved file is gzipped. Otherwise the file is written without compression. Default: TRUE.
  !#VA(saveToData:x);      OPT boolean. If true, saving is performed to Data directory instead of &quot;Games&quot; directory. Default: FALSE.
  !#VA(markInList:x);      OPT boolean. If true, saved game will be marked in Save/Load dialogs as selected. Default: TRUE.

  !?FU(ClearScreenLog);
  ; Clears green screen log messages

  !?FU(H3Dlg_GetRootDlg);
  ; Returns root dialog object or NULL. Most of the time it&#x27;s Adventure Map dialog.
  !#VA(result:x);

  !?FU(H3Dlg_GetCurrentDlg);
  ; Returns topmost dialog object or NULL. It may be message box, custom dialog or any in-game dialog.
  !#VA(result:x);

  !?FU(H3Dlg_SendCmdToItem);
  ; Sends command to h3 dialog item like DL:A.
  !#VA(h3Dlg:x);      H3 dialog object address.
  !#VA(itemId:x);     Dialog item ID.
  !#VA(cmdSubtype:x); Command subtype. See DLG_CMD_XXX constants.
  !#VA(param:x);      User-specified value. Some numeric parameter or string in case of DLG_CMD_SET_TEXT.
  !#VA(cmdType:x);    Optional. Type of command/action. Default: (DLG_CMD_TYPE_DEFAULT)

  !?FU(H3Dlg_DrawItemOnScreen);
  ; WoG function, drawing dialog item or the whole dialog on the screen.
  !#VA(h3Dlg:x);
  !#VA(itemId:x); Dialog item ID or (ALL_ITEMS).

  !?FU(H3Dlg_UpdateItemRange);
  ; Sends update command (0/0) to dialog items in specified range. Additionally forces dialog to update its internal state.
  ; Use the function after sending commands to native H3 dialogs and before trying to redraw them.
  !#VA(h3Dlg:x);     H3 dialog object address
  !#VA(minItemId:x); Minimal item ID to update
  !#VA(maxItemId:x); Maximal item ID to update

  !?FU(AdvMap_SetHint);
  ; Immediately shows adventure map hint with new text. Chat box text may become hidden until new character input.
  !#VA(newHint:x); New hint string.</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Variables and expressions (VR)](../receivers/vr/) · [Battle stack (BM)](../receivers/bm/) · [ERA services, memory and sound (SN)](../receivers/sn/) · [Custom dialogs (DL)](../receivers/dl/) · [Framework functions](../framework/functions/) · [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2413"><summary><code>+</code> <strong>added</strong> · lines 2413–2413: OnKeyPressed event does not occur anymore in dialogs where an input element has focus. It became possible to handle keyboard safely without routi…</summary><div class="era-change-body"><pre>OnKeyPressed event does not occur anymore in dialogs where an input element has focus. It became possible to handle keyboard safely without routine checks for chat enter/leave events.</pre><p>Related pages: [Key press (OnKeyPressed)](../triggers/onkeypressed/) · [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2415"><summary><code>+</code> <strong>added</strong> · lines 2415–2435: Added GetProcessGuid exported function, allowing to retrieve unique 32-character ID of game process run. Each game process start will generate di…</summary><div class="era-change-body"><pre>Added GetProcessGuid exported function, allowing to retrieve unique 32-character ID of game process run.
    Each game process start will generate different value. Modders can use this value to check, whether player restarted the game process or not.

    procedure GetProcessGuid (Buf: pchar); stdcall;

    Usage:
    !!SN:F^GetProcessGuid^/?(processGuid:z);
    !!IF:M^%(processGuid)^;

&#91;!&#93; Be sure not to use stack experience commands for battle stacks in OnBeforeBattle(Universal) triggers. Use them starting from &quot;OnSetupBattlefield&quot; event.
&#91;!&#93; Starting from version 5.2 RC 14 HD mod does not influence Era &quot;OnGameEnter&quot; and &quot;OnGameLeave&quot; events, which work reliably now.

&#91;!&#93; HE:L command was rewritten to support #/^...^ Era 3 syntax. Automatical adventure map redrawing was removed.
    From now command supports any ERM string. HE:L3 does not need the second argument.

&#91;!&#93; Improved &quot;OnAdvMapTileHint&quot; event. It will not occur on RMB popup anymore and will have extended arguments:

  !?FU(OnAdvMapTileHint);
  !#VA(x:x) (y:x) (z:x);             Object entrance coordinates
  !#VA(objType:x) (objSubtype:x);    Type and subtype of object. For active hero it&#x27;s object under hero.
  !#VA(tileX:x) (tileY:x) (tileZ:x); Real tile coordinates.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [Flags, messages and choices (IF)](../receivers/if/) · [Function handler (FU)](../triggers/fu/) · [Heroes (HE)](../receivers/he/) · [Framework events](../framework/events/) · [Entering the game (OnGameEnter)](../triggers/ongameenter/) · [Leaving the game (OnGameLeave)](../triggers/ongameleave/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2437"><summary><code>*</code> <strong>changed</strong> · lines 2437–2437: &quot;OnAdvMapTileHint&quot; event objSubtype argument is -1 for no object instead of previous 65535.</summary><div class="era-change-body"><pre>&quot;OnAdvMapTileHint&quot; event objSubtype argument is -1 for no object instead of previous 65535.</pre><p>Related pages: [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2438"><summary><code>*</code> <strong>changed</strong> · lines 2438–2438: Exported function WriteStrToIni creates empty ini in memory if no file exists on disk.</summary><div class="era-change-body"><pre>Exported function WriteStrToIni creates empty ini in memory if no file exists on disk.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2441"><summary><code>-</code> <strong>fixed</strong> · lines 2441–2441: Fixed Era 2.0 bug: calling SN:E with floating point result used to leave garbage value in FPU stack.</summary><div class="era-change-body"><pre>Fixed Era 2.0 bug: calling SN:E with floating point result used to leave garbage value in FPU stack.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-3-0-l2446"><summary><code>-</code> <strong>fixed</strong> · lines 2446–2447: Fixed EA:E, command, used to return on the first GET-parameter. From now E?(exp:y)/d/?(monType:y)/?(monNum:y) returns valid data. Use either SET …</summary><div class="era-change-body"><pre>Fixed EA:E, command, used to return on the first GET-parameter. From now E?(exp:y)/d/?(monType:y)/?(monNum:y) returns valid data.
    Use either SET syntax for all 4 commands to change data or GET/mixed syntax to get data.</pre><p>Related pages: [Creature experience and bonuses (EA)](../receivers/ea/)</p></div></details>

</section>
:::

### ERA 3.2.0 {#era3-version-3-2-0}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-2-0-l2458"><summary><code>+</code> <strong>added</strong> · lines 2458–2461: Updated &quot;wog native dialogs&quot; plugin. Added support to override any zsetup00.txt part using json config files. See example of full WoG Options tab…</summary><div class="era-change-body"><pre>Updated &quot;wog native dialogs&quot; plugin. Added support to override any zsetup00.txt part using json config files.
    See example of full WoG Options tabs/pages replacement in Mods/WoG/Lang/wog options.json.example.
    Added support for controlling, which pictures may be selected in IF:N-like dialogs.
    Fixed possible crashes, related to usage freed language data buffers. Credits: igrik.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2465"><summary><code>+</code> <strong>added</strong> · lines 2465–2465: Updated events and constants autocompletion files in Sublime Text Erm Editor.</summary><div class="era-change-body"><pre>Updated events and constants autocompletion files in Sublime Text Erm Editor.</pre><p>Related pages: [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2469"><summary><code>+</code> <strong>added</strong> · lines 2469–2470: Added support for d- syntax in function parameters. !!FU(edu_Test):Pd-200; will pass -200, previously 200</summary><div class="era-change-body"><pre>Added support for d- syntax in function parameters.
    !!FU(edu_Test):Pd-200; will pass -200, previously 200</pre><p>Related pages: [Function calls (FU)](../receivers/fu/) · [Framework functions](../framework/functions/) · [ERM syntax: ZVSE and ZVSE2](../syntax/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2481"><summary><code>+</code> <strong>added</strong> · lines 2481–2493: Improved Heroes 3 complex dialogs support. Credits: Berserker, igrik. IF:N(msgType)/^text^&#91;/?result/(textAlignment)/(preselectedPicId)/(selectabl…</summary><div class="era-change-body"><pre>Improved Heroes 3 complex dialogs support. Credits: Berserker, igrik.
    IF:N(msgType)/^text^&#91;/?result/(textAlignment)/(preselectedPicId)/(selectablePicsMask)&#93;.
      selectablePicsMask - bit mask of pictures, allowed for selection. Default value is -1 (all pictures).

    To make the first and the forth pictures selectable only specify mask 1 ^ 0 + 1 ^ 3 = 1 + 8 = 9.
    This setting allows some pictures to act as decoration only and the others to act as selectable items.

    Example:
    ; Let&#x27;s display selection of two army types in the center and two resource costs at the edges.
    ; Monster pictures will be selectable, resource pictures will not be selectable.
    !!FU(ConstructBitMask):P(DLG_RESULT_PIC_2)/(DLG_RESULT_PIC_3)/?(selectablePicsMask:y);
    !!IF:N(PIC_TYPE_RES_CRYSTAL)/100/(PIC_TYPE_MONSTER)/(MON_CYCLOPS)/(PIC_TYPE_MONSTER)/(MON_EFREETI)/(PIC_TYPE_RES_SULFUR)/100;
    !!IF:N(MSG_TYPE_CHOOSE_PIC)/^What army do you want to call?^/?(choice:y)/(TEXT_ALIGN_CENTER)/(DLG_NO_SELECTION)/(selectablePicsMask);</pre><p>Related pages: [Function calls (FU)](../receivers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2495"><summary><code>+</code> <strong>added</strong> · lines 2495–2496: Added new events &quot;OnBeforeBattleReplay&quot; and &quot;OnAfterBattleReplay&quot;, depending on third-party plugins like &quot;BattleReplay&quot; by igrik. The engine now …</summary><div class="era-change-body"><pre>Added new events &quot;OnBeforeBattleReplay&quot; and &quot;OnAfterBattleReplay&quot;, depending on third-party plugins like &quot;BattleReplay&quot; by igrik.
    The engine now handles &quot;OnBeforeBattleReplay&quot; to fix issues with battlefield obstacles generation.</pre><p>Related pages: [Before battle replay (OnBeforeBattleReplay)](../triggers/onbeforebattlereplay/) · [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2498"><summary><code>+</code> <strong>added</strong> · lines 2498–2502: Duplicate constant declarations with the same value are allowed from now. !#DC(TRUE) = 1; !#DC(TRUE) = 1; does not produce error !#DC(TRUE) = 3; …</summary><div class="era-change-body"><pre>Duplicate constant declarations with the same value are allowed from now.

  !#DC(TRUE) = 1;
  !#DC(TRUE) = 1; does not produce error
  !#DC(TRUE) = 3; error: constant TRUE is already defined with value 1</pre><p>Related pages: [ERM syntax: ZVSE and ZVSE2](../syntax/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2504"><summary><code>+</code> <strong>added</strong> · lines 2504–2535: Added new ERM command VR:F in the form of !!VR(numericVar):F(minValue)/(maxValue). It&#x27;s used to force value to be in specific range and can be us…</summary><div class="era-change-body"><pre>Added new ERM command VR:F in the form of !!VR(numericVar):F(minValue)/(maxValue).
    It&#x27;s used to force value to be in specific range and can be used instead of ToRange, Min and Max math functions.
    All arguments must be of the same type.

    (numericVar) - any integer or float variable.
    (minValue)   - minimum range value (integer or float).
    (maxValue)   - maximum range value (integer or float).

    If range is invalid (minValue) &gt; (maxValue), the result is (minValue).

    Examples:
    !!VR(value:y):S77 F10/100; force 77 to be in 10..100 range
    !!IF:M^%(value)^;          displays 77

    !!VR(value:y):S444 F10/100; force 444 to be in 10..100 range
    !!IF:M^%(value)^;           displays &quot;100&quot; (maximum possible value)

    !!VR(value:y):S-7 F10/100; force -7 to be in 10..100 range
    !!IF:M^%(value)^;           displays &quot;10&quot; (minimum possible value)

    !!VR(value:y):S4 F6/2; force 4 to be in invalid 6..2 range
    !!IF:M^%(value)^;      displays &quot;6&quot; (range start value is used in case of invalid range)

    !!VR(value1:y):S93;
    !!VR(value2:y):S50;
    !!VR(value1):F(INT_MIN)/(value2); value1 = minimum of (value1, value2)
    !!IF:M^%(value)^;                 displays &quot;50&quot; (the smallest of 2 values)

    !!VR(value1:y):S93;
    !!VR(value2:y):S50;
    !!VR(value1):F(value2)/(INT_MAX); value1 = maximum of (value1, value2)
    !!IF:M^%(value)^;                 displays &quot;93&quot; (the biggest of 2 values)</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2537"><summary><code>+</code> <strong>added</strong> · lines 2537–2537: Added possibility to call functions, returning float values using SN:F. Simply prepend dot (&quot;.&quot;) before function name.</summary><div class="era-change-body"><pre>Added possibility to call functions, returning float values using SN:F. Simply prepend dot (&quot;.&quot;) before function name.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2539"><summary><code>+</code> <strong>added</strong> · lines 2539–2556: Added possibility to return strings from functions using P?(someStr) syntax. New VR:Z command serves this purpose. If (someStr) is string variabl…</summary><div class="era-change-body"><pre>Added possibility to return strings from functions using P?(someStr) syntax. New VR:Z command serves this purpose.
    If (someStr) is string variable, then an appropriate x-argument is set to 0 before function execution.
    It&#x27;s expected, that function will assign z-string index of result to x-argument. It can be local string,
    global string, trigger local string, ERT string. The value of this string will be assigned to (someStr) variable
    on function exit.

    Example:

    !?FU(test_AppendHeroName);
    !#VA(introTextPtr:x); text to append hero name to
    !#VA(resultPtr:x);    result string
    !!VR(result:z):Sz(introTextPtr) +^Corwin^;
    !!VR(resultPtr):Z(result); create trigger local variable with result and assign its index to resultPtr argument

    !?FU(OnAfterErmInstructions);
    !!VR(greetingBeginning:z):S^Hello, ^;
    !!FU(test_AppendHeroName):P(greetingBeginning)/?(greeting:z);
    !!IF:M^%(greeting)^; display &quot;Hello, Corwin&quot;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2560"><summary><code>+</code> <strong>added</strong> · lines 2560–2572: Added new ERM command SN:C(constantName)/?(constantValue)&#91;/?(constantExists)&#93; It allows to get constant value by name in runtime. It&#x27;s possible t…</summary><div class="era-change-body"><pre>Added new ERM command SN:C(constantName)/?(constantValue)&#91;/?(constantExists)&#93;
  It allows to get constant value by name in runtime. It&#x27;s possible to use constants in json configs, for instance.

  Short example:
  !!SN:C^OBJ_MONSTER^/?(constValue:y)/?(constExists:y);
  !!IF:M^OBJ_MONSTER = %(constValue). Constant exists: %(constExists)^; OBJ_MONSTER = 54. Constant exists: 1

  Let&#x27;s allow to use constants in json configuration file for key &#x27;edu.banned_obj_type&#x27;.
  !!VR(key:z):S^edu.banned_obj_type^;            Prepare key to load from json
  !!SN:T(key)/?(valueStr:z);                     Load translation for given key as string
  !!SN:C(valueStr)/?(value:y)/?(constExists:y);  Try to find constant with the same name as value
  !!VR(value)&amp;(constExists)=(FALSE):V(valueStr); If no constant is found, convert string value to integer
  !!IF:M^edu.banned_obj_type = %(value)^;        Display loaded config value</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [Flags, messages and choices (IF)](../receivers/if/) · [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2574"><summary><code>+</code> <strong>added</strong> · lines 2574–2576: Added new constants to &quot;Era Erm Framework&quot; mod: - ARG_SYNTAX_GET, ARG_SYNTAX_SET, ARG_SYNTAX_ADD for FU:S argument syntax types. - Numerous other…</summary><div class="era-change-body"><pre>Added new constants to &quot;Era Erm Framework&quot; mod:
  - ARG_SYNTAX_GET, ARG_SYNTAX_SET, ARG_SYNTAX_ADD for FU:S argument syntax types.
  - Numerous other new constants.</pre><p>Related pages: [Function calls (FU)](../receivers/fu/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2578"><summary><code>+</code> <strong>added</strong> · lines 2578–2581: Added new events to &quot;Era Erm Framework&quot; mod: - &quot;OnAfterBattleSetup&quot;, occuring right after &quot;OnBeforeBattle&quot; and &quot;OnBeforeBattleUniversal&quot; events. …</summary><div class="era-change-body"><pre>Added new events to &quot;Era Erm Framework&quot; mod:

  - &quot;OnAfterBattleSetup&quot;, occuring right after &quot;OnBeforeBattle&quot; and &quot;OnBeforeBattleUniversal&quot; events.
  New event allows to be sure, that basic battle parameters (heroes, quick battle, coordinates) are set up.</pre><p>Related pages: [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2583"><summary><code>+</code> <strong>added</strong> · lines 2583–2616: The following improvements were introduced in &quot;Era Erm Framework&quot; mod: - &quot;OnBeforeBattle&quot; and &quot;OnBeforeBattleUniversal&quot; events were improved, sto…</summary><div class="era-change-body"><pre>The following improvements were introduced in &quot;Era Erm Framework&quot; mod:

  - &quot;OnBeforeBattle&quot; and &quot;OnBeforeBattleUniversal&quot; events were improved, storing most of prebattle parameters in global variables.
  i^battle_isQuick^:       (TRUE) if quick battle is enabled, (FALSE) otherwise
  i^battle_x^:             Battle x-coordinate
  i^battle_y^:             Battle y-coordinate
  i^battle_z^:             Battle z-coordinate
  i^battle_owner_0^:       Left side owner or (NO_OWNER)
  i^battle_owner_1^:       Right side owner or (NO_OWNER)
  i^battle_hero_0^:        Left side hero or (NO_HERO)
  i^battle_hero_1^:        Right side hero or (NO_HERO). Any negative value is normalized into (NO_HERO)
  i^battle_ai_0^:          (TRUE) if left side is controlled by AI, (FALSE) otherwise.
  i^battle_ai_1^:          (TRUE) if right side is controlled by AI, (FALSE) otherwise.
  i^battle_human_0^:       (TRUE) if left side is controlled by human, (FALSE) otherwise.
  i^battle_human_1^:       (TRUE) if right side is controlled by human, (FALSE) otherwise.
  i^battle_remote_0^:      (TRUE) if left side is controlled by remote human, (FALSE) otherwise.
  i^battle_remote_1^:      (TRUE) if right side is controlled by remote human, (FALSE) otherwise.
  i^battle_local_0^:       (TRUE) if left side is controlled by local human or AI, (FALSE) otherwise.
  i^battle_local_1^:       (TRUE) if right side is controlled by local human or AI, (FALSE) otherwise.
  i^battle_localHuman_0^:  (TRUE) if left side is controlled by local human, (FALSE) otherwise.
  i^battle_localHuman_1^:  (TRUE) if right side is controlled by local human, (FALSE) otherwise.
  i^battle_hasHuman^:      (TRUE) if least one side is controlled by human, (FALSE) otherwise.
  i^battle_humanOnly^:     (TRUE) if all sides are controlled by humans, (FALSE) otherwise.
  i^battle_aiOnly^:        (TRUE) if all sides are controlled by AI, (FALSE) otherwise.
  i^battle_isVisible^:     (TRUE) if at least one side is human and quick battle is off, (FALSE) otherwise.
  i^battle_isNetwork^:     (TRUE) if it&#x27;s network human vs human battle, (FALSE) otherwise.
  i^battle_type^:          Battle type bit mask: a collection of BATTLE_TYPE_FLAG_XXX constants.
  i^battle_current_side^:  Current/active stack battle side (BATTLE_LEFT = 0 or BATTLE_RIGHT = 1). Changes in &quot;OnBeforeBattleStackTurn&quot; and &quot;OnBattleStackObtainsTurn&quot; events.
  i^battle_current_stack^: Current/active stack ID. Changes in &quot;OnBeforeBattleStackTurn&quot; and &quot;OnBattleStackObtainsTurn&quot; events.
  i^battle_acting_stack^:  ID of stack, performing action. It&#x27;s set in &quot;OnBeforeBattleAction&quot; only.
  i^battle_acting_side^:   Side (BATTLE_LEFT = 0 or BATTLE_RIGHT = 1) of stack, performing action. It&#x27;s set in &quot;OnBeforeBattleAction&quot; only.

  - i^battle_round^ keeps current valid round and can be used throughout battle triggers and in OnBattleRound condition
  like !?FU(OnBattleRound)&amp;i^battle_round^=0 instead of v997.</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework events](../framework/events/) · [Before a stack turn (OnBeforeBattleStackTurn)](../triggers/onbeforebattlestackturn/) · [Passing control to a stack (OnBattleStackObtainsTurn)](../triggers/onbattlestackobtainsturn/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2618"><summary><code>+</code> <strong>added</strong> · lines 2618–2727: Added the following functions to &quot;Era Erm Framework&quot; mod: !?FU(NewIntArray); ; Creates and returns trigger local array of integers. ; Alternative…</summary><div class="era-change-body"><pre>Added the following functions to &quot;Era Erm Framework&quot; mod:

  !?FU(NewIntArray);
  ; Creates and returns trigger local array of integers.
  ; Alternative function arguments:
  ;  (?result)                     The result array will have 0 items.
  ;  (size)/(?result)              The result array will have (size) items with 0 value.
  ;  (size)/(fillValue)/(?result)  The result array will have (size) items will (fillValue) value
  ;  You may optionally specify (storageType) parameter after (?result) argument with value like M_STORED or M_TEMP.

  !?FU(NewStrArray);
  ; Creates and returns trigger local array of strings.
  ; Alternative function arguments:
  ;  (?result)                     The result array will have 0 items.
  ;  (size)/(?result)              The result array will have (size) items with ^^ value.
  ;  (size)/(fillValue)/(?result)  The result array will have (size) items will (fillValue) value
  ;  You may optionally specify (storageType) parameter after (?result) argument with value like M_STORED or M_TEMP.

  !?FU(Array_Push);
  ; Adds new items to the end of the array, resizing it automatically.
  !#VA(list:x);      ID of array to push items to
  !#VA(firstItem:x); ... Up to 15 arguments to append to list

  !?FU(Array_Pop);
  ; Removes items from the end of the array one by one, returning their values and resizing array automatically.
  ; At least single item is removed from the array, if possible.
  ; Example: P{list}/?{lastItem}/?{beforeLastItem}.
  !#VA(list:x);      ID of array to pop items from.
  !#VA(firstItem:x); OUT parameters... Up to 15 arguments to pop from the list. If item cannot be popped, it will be assigned zero value or empty string.

  -------- EXAMPLES ---------

  !!FU(NewStrArray):P?(list:y);                                            create trigger-local string array
  !!FU(Array_Push):P(list)/^igrik^/^PerryR^/^Panda^;                       fill it with 3 values
  !#VA(items&#91;4&#93;:z);                                                        declare array of 4 local z-strings
  !!FU(Array_Pop):P(list)/?(items&#91;0&#93;)/?(items&#91;1&#93;)/?(items&#91;2&#93;)/?(items&#91;3&#93;); pop items from array one by one
  !!IF:M^%(items&#91;0&#93;) %(items&#91;1&#93;) %(items&#91;2&#93;) %(items&#91;3&#93;)^;                 displays &quot;Panda PerryR igrik &quot;
                                                         ;                 now (list) contains no items
  ------ END EXAMPLES -------

  !?FU(H3Dlg_StopAnimation);
  ; Stops current dialogs animation

  !?FU(H3Dlg_ResumeAnimation);
  ; Resumes stopped dialogs animation

  !?FU(H3Dlg_ShowPopup);
  ; Shows H3 dialog as RMB popup.
  !#VA(h3Dlg:x); H3 dialog object address

  !?FU(H3Dlg_Coords);
  ; Allows to access H3 dialog display coordinates. Automatically fixed invalid coordinates.
  !#VA(h3Dlg:x); H3 dialog object address.
  !#VA(x:x);     X-coordinate, supports GET/SET/ADD syntax
  !#VA(y:x);     Y-coordinate, supports GET/SET/ADD syntax

  !?FU(DL_FindById);
  ; Returns DL dialog object address by DL id or (NULL) .
  !#VA(dlgId:x);
  !#VA(result:x);

  !?FU(DL_Destroy);
  ; Destroys DL dialog object.
  !#VA(dlgObj:x);

  !?FU(DL_ShowPopup);
  ; Shows DL dialog as RMB popup.
  ; The dialog will be destroyed after showing. Call DL:N again to recreate it.
  ; © GrayFace
  !#VA(dlgId:x); DL dialog ID.

  Example:
  !?FU(OnAdventureMapRightMouseClick);
  !!CM:R(FALSE);           disable default reaction
  !!DL89:N^cmenu.txt^;     load custom DL dialog
  !!FU(DL_ShowPopup):P89;  display DL dialog while right mouse button is holded

  !?FU(DL_Coords);
  ; Allows to access DL-dialog display coordinates. Call DL:N before trying to access coordinates.
  ; © igrik
  !#VA(dlgId:x); DL dialog ID
  !#VA(x:x);     X-coordinate, supports GET/SET/ADD syntax
  !#VA(y:x);     Y-coordinate, supports GET/SET/ADD syntax

  !?FU(DL_GetSize);
  ; Returns DL-dialog width and height.
  !#VA(dlgId:x);  DL dialog ID
  !#VA(width:x);  OUT. Dialog width
  !#VA(height:x); OUT. Dialog height

  !?FU(DL_AlignDlg);
  ; Aligns dialog display position. Call DL:N before trying to use this function.
  !#VA(dlgId:x);     DL dialog ID
  !#VA(alignment:x); Bit-mask of TEXT_ALIGN_XXX constants.

  !?FU(DecorateInt);
  ; Converts integer to string, separating each three digit group by &quot;era.locale.thousand_separator&quot; characer.
  ; Example: P74276689 =&gt; &quot;74 276 689&quot;
  !#VA(value:x);              Number to decorate.
  !#VA(resultPtr:x);          OUT. Result string.
  !#VA(ignoreSmallNumbers:x); Optional boolean. If set to DONT_DECORATE_SMALL_INTS, values &lt;= 9999 are not decorated. Default: false.

  !?FU(FormatQuantity);
  ; Formats given positive or negative quantity to human-readable string with desired constraints on length and maximal number of digits.
  ; Uses game locale settings and metric suffixes like &quot;K&quot;, &quot;M&quot; and &quot;G&quot;.
  ; Example: P-1234567890/6/4 =&gt; &quot;-1.23G&quot;
  !#VA(value:x);     Quantity to format.
  !#VA(resultPtr:x); OUT. Result string.
  !#VA(maxLen:x);    Optional. Maximum desired string length in logical characters. Default: 5.
  !#VA(maxDigits:x); Optional. Maximum number of digits to use in result (the more digits to display, the slower the number is read by humans). Default: 4.</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Mouse-event context (CM)](../receivers/cm/) · [Custom dialogs (DL)](../receivers/dl/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2729"><summary><code>+</code> <strong>added</strong> · lines 2729–2759: Changed the following functions in &quot;Era Erm Framework&quot; mod: !?FU(Array_Join); ; Concatenates array items into single string, using passed glue st…</summary><div class="era-change-body"><pre>Changed the following functions in &quot;Era Erm Framework&quot; mod:

  !?FU(Array_Join);
  ; Concatenates array items into single string, using passed glue string. Works with both numeric and string arrays.
  ; Example: &#91;&#x27;one&#x27;, &#x27;two&#x27;, &#x27;three&#x27;&#93; with glue &#x27; --- &#x27; become &#x27;one --- two --- three&#x27;.
  !#VA(list:x);      Array ID.
  !#VA(resultPtr:x); OUT. Result string
  !#VA(gluePtr:x);   Optional. Glue string. Default: &#x27;&#x27;.

  !?FU(GetStrAtAddr);
  ; Reads null terminated string at specified address into s^result^ variable.
  ; Null address (0) results in empty string.
  !#VA(strAddr:x);   Address of null-terminated string in memory or 0.
  !#VA(resultPtr:x); String variable, to copy string contents to.

  !?FU(StrToUpper);
  ; Converts given string to upper case.
  !#VA(strPtr:x);    Source string.
  !#VA(resultPtr:x); OUT. Result string.

  !?FU(StrToLower);
  ; Converts given string to lower case.
  !#VA(strPtr:x);    Source string.
  !#VA(resultPtr:x); OUT. Result string.

  !?FU(MonCountToFuzzyText);
  ; Converts monster quantity to stringish value range like &quot;50-99&quot; or &quot;2K+&quot; with maximum length restriction.
  ; Example P777/?{result}/(MON_FUZZY_COUNT_SHORT) =&gt; &quot;500-999&quot;.
  !#VA(monNum:x);         Number of monsters to convert to text.
  !#VA(resultPtr:x);      OUT. Result string
  !#VA(maxTextLength:x);  Optional. Result length restriction in the form of MON_FUZZY_COUNT_XXX constant. Default: MON_FUZZY_COUNT_SHORT</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2761"><summary><code>+</code> <strong>added</strong> · lines 2761–2775: Added exported function &quot;ToStaticStr&quot; ({n} Str: pchar): {n} pchar; It accepts pointer to null-terminated string or null. Returns null on null arg…</summary><div class="era-change-body"><pre>Added exported function &quot;ToStaticStr&quot; ({n} Str: pchar): {n} pchar;
    It accepts pointer to null-terminated string or null. Returns null on null argument. Otherwise returns permanent static string address for given string contents.
    The result is always the same for the same string contents. The result is read only and will never be deallocated.

    The function serves two purposes:
    - Convert string from temporary buffer into static buffer with endless lifetime without wasting memory for
      multiple calls for the same string contents.
    - The result can be treated as unique string hash/ID. Thus comparing two results of &quot;ToStaticStr&quot; can be
      performed using pointers only.

    For instance, you write plugin, where you need static string addresses for dialog items, hints, in-game structures.
    You get those string from json language file and want to support F12 reloading key.
    Simply use ToStaticStr(tr(...)). If translation is not changed during the game, ToStaticStr will return the same buffer
    addresses for the same string contents. Otherwise memory cunsumption will be growing, but F12 key will work well.
    No crashes, no dangling pointers.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2777"><summary><code>+</code> <strong>added</strong> · lines 2777–2782: Added exported function &quot;DecorateInt&quot;, which converts integer to string, separating each three digit group by &quot;era.locale.thousand_separator&quot; cha…</summary><div class="era-change-body"><pre>Added exported function &quot;DecorateInt&quot;, which converts integer to string, separating each three digit group by &quot;era.locale.thousand_separator&quot; character.
    function DecorateInt (Value: integer; Buf: pchar; IgnoreSmallNumbers: integer): integer; stdcall;

    Returns final string length in bytes.
    Specify IgnoreSmallNumbers to leave values &lt;= 9999 as is. Uses game locale settings.
    Example: 2138945 =&gt; &quot;2 138 945&quot;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2784"><summary><code>+</code> <strong>added</strong> · lines 2784–2800: Added exported function &quot;FormatQuantity&quot;, which formats given positive or negative quantity to human-readable string with desired constraints on …</summary><div class="era-change-body"><pre>Added exported function &quot;FormatQuantity&quot;, which formats given positive or negative quantity to human-readable string with desired constraints on length
    and maximal number of digits. Uses game locale settings and metric suffixes like &quot;K&quot;, &quot;M&quot; and &quot;G&quot;.

    function FormatQuantity (Value: integer; Buf: pchar; BufSize: integer; MaxLen, MaxDigits: integer): integer;

    Returns final string length in bytes;
    MaxLen    - maximum desired string length in logical characters.
    MaxDigits - maximum number of digits to use in result (the more digits to display, the slower the number is read by humans).
    Optimal settings, for damage or neutrals quantity, for instance, will be MaxLen = 5, MaxDigits = 4.

    Examples:
     FormatQuantity(1234567890, 10, 10) = &#x27;1234567890&#x27;
     FormatQuantity(-1234567890, 6, 4)  = &#x27;-1.23G&#x27;
     FormatQuantity(123, 2, 4)          = &#x27;0K&#x27;
     FormatQuantity(1234567890, 6, 2)   = &#x27;1G&#x27;
     FormatQuantity(1234567890, 1, 2)   = &#x27;9&#x27;
     FormatQuantity(1234567890, 1, 0)   = &#x27;&#x27;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2802"><summary><code>*</code> <strong>changed</strong> · lines 2802–2802: Restored old IF:Q functionality for message types MSG_TYPE_CHOOSE_PIC and MSG_TYPE_CHOOSE_PIC_OR_CANCEL: the third picture cannot be selected.</summary><div class="era-change-body"><pre>Restored old IF:Q functionality for message types MSG_TYPE_CHOOSE_PIC and MSG_TYPE_CHOOSE_PIC_OR_CANCEL: the third picture cannot be selected.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2803"><summary><code>*</code> <strong>changed</strong> · lines 2803–2803: Trigger-local strings and array lifetime was increased. Such items are disposed only after the whole chain of same trigger handlers is processed.</summary><div class="era-change-body"><pre>Trigger-local strings and array lifetime was increased. Such items are disposed only after the whole chain of same trigger handlers is processed.</pre><p>Related pages: [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2806"><summary><code>*</code> <strong>changed</strong> · lines 2806–2808: Totally disabled old buggy &quot;OnBattleRound&quot; event behavior. From now &quot;OnBattleRound&quot; is an alias of &quot;OnCombatRound&quot;. v997 contains valid battle ro…</summary><div class="era-change-body"><pre>Totally disabled old buggy &quot;OnBattleRound&quot; event behavior. From now &quot;OnBattleRound&quot; is an alias of &quot;OnCombatRound&quot;.
    v997 contains valid battle round throughout the whole battle. Do not use &quot;OnCombatRound&quot; in plugins, it&#x27;s an alias for
    ERM only. Use &quot;OnBattleRound&quot; instead.</pre><p>Related pages: [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2810"><summary><code>*</code> <strong>changed</strong> · lines 2810–2810: (TRUE) and (FALSE) ERM constants are now predefined.</summary><div class="era-change-body"><pre>(TRUE) and (FALSE) ERM constants are now predefined.</pre></div></details>

<details class="era-change" id="era3-v-3-2-0-l2812"><summary><code>-</code> <strong>fixed</strong> · lines 2812–2815: Fixed re/FU/DO/OB/...dozens of commands... didn&#x27;t support global named variables in receiver parameters. Examples: !!FUi^edu_someFunc^:P; !!OBi^e…</summary><div class="era-change-body"><pre>Fixed re/FU/DO/OB/...dozens of commands... didn&#x27;t support global named variables in receiver parameters.
    Examples:
    !!FUi^edu_someFunc^:P;
    !!OBi^edu_x^/i^edu_y^/i^edu_z^:T?(objType:y);</pre><p>Related pages: [Function calls (FU)](../receivers/fu/) · [Map objects (OB)](../receivers/ob/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2817"><summary><code>-</code> <strong>fixed</strong> · lines 2817–2817: Fixed bug: FU:S used to return corrupted values.</summary><div class="era-change-body"><pre>Fixed bug: FU:S used to return corrupted values.</pre><p>Related pages: [Function calls (FU)](../receivers/fu/)</p></div></details>

<details class="era-change" id="era3-v-3-2-0-l2819"><summary><code>-</code> <strong>fixed</strong> · lines 2819–2819: Fixed IF:Q with message type 7 (MSG_TYPE_CHOOSE_PIC): result is now valid 1/0 flag, not 1/2 value, as it was before.</summary><div class="era-change-body"><pre>Fixed IF:Q with message type 7 (MSG_TYPE_CHOOSE_PIC): result is now valid 1/0 flag, not 1/2 value, as it was before.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

</section>
:::

### ERA 3.1.1 {#era3-version-3-1-1}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-1-1-l2861"><summary><code>+</code> <strong>added</strong> · lines 2861–2879: Added new functions to &quot;Era Erm Framework&quot; mod: !?FU(Array_Copy); ; Resizes destination array to match source array size and copies all source it…</summary><div class="era-change-body"><pre>Added new functions to &quot;Era Erm Framework&quot; mod:

  !?FU(Array_Copy);
  ; Resizes destination array to match source array size and copies all source items into destination array.
  ; Both arrays must have the same items type.
  !#VA(srcArray:x); ID of array to copy items from (source).
  !#VA(dstArray:x); ID of array to copy items to (destination).

  !?FU(Array_Clone);
  ; Creates trigger local copy of array.
  !#VA(srcArray:x); ID of array to clone.
  !#VA(result:x);   ID of result trigger local array.

  !?FU(Tm32Encode);
  ; Fast and reversable int32 hashing. Link: https://stackoverflow.com/questions/664014/what-integer-hash-function-are-good-that-accepts-an-integer-hash-key
  !#VA(value:x) (result:x);

  !?FU(Tm32Decode);
  !#VA(value:x) (result:x);</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-1-1-l2881"><summary><code>+</code> <strong>added</strong> · lines 2881–2894: Updated the following functions of &quot;Era Erm Framework&quot; mod: !?FU(MonCountToFuzzyText); ; Converts monster quantity to stringish value range like …</summary><div class="era-change-body"><pre>Updated the following functions of &quot;Era Erm Framework&quot; mod:

  !?FU(MonCountToFuzzyText);
  ; Converts monster quantity to stringish value range like &quot;50-99&quot; or &quot;2K+&quot; of maximum 7 characters length.
  ; Returns result in s^result^
  !#VA(monNum:x);
  !#VA(withDescription:x); ?boolean. If true, the result will be native H3 text like &quot;A pack (10-19) of&quot;. Default: false.

  !?FU(DeconstructBitMask);
  ; Deconstructs bit mask into list of bit/flag positions (each with 0..31 value).
  ; For example, P137/(list) will fill the list with &#91;0, 3, 7&#93; values, because
  ; 2 ^ 0 + 2 ^ 3 + 2 ^ 7 = 1 + 8 + 128 = 137. It means, that bits 0, 3 and 7 are set.
  !#VA(mask:x);   Bit mask.
  !#VA(result:x); Will contain new trigger local array ID with bit/flag positions.</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-1-1-l2896"><summary><code>*</code> <strong>changed</strong> · lines 2896–2896: Removed type checking from SN:M(array)/(itemIndex)/(value), allowing to use integer addresses to set string item values.</summary><div class="era-change-body"><pre>Removed type checking from SN:M(array)/(itemIndex)/(value), allowing to use integer addresses to set string item values.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

</section>
:::

### ERA 3.1.0 {#era3-version-3-1-0}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-1-0-l2902"><summary><code>+</code> <strong>added</strong> · lines 2902–2904: Updated &quot;wog native dialogs&quot; plugin. Added support for IF:B/P dialogs and extended IF:Q/IF:N dialogs. Implemented advanced battle log dialog. To …</summary><div class="era-change-body"><pre>Updated &quot;wog native dialogs&quot; plugin. Added support for IF:B/P dialogs and extended IF:Q/IF:N dialogs.
    Implemented advanced battle log dialog. To open it press &quot;H&quot; or click LMB on log bar in battle.
    Improved compatibility with majaczek&#x27;s plugins. Credits: igrik.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l2906"><summary><code>+</code> <strong>added</strong> · lines 2906–2906: Updated &quot;quest dialog&quot; plugin. Provided compatibility with improved Heroes 3 dialogs. Credits: igrik.</summary><div class="era-change-body"><pre>Updated &quot;quest dialog&quot; plugin. Provided compatibility with improved Heroes 3 dialogs. Credits: igrik.</pre></div></details>

<details class="era-change" id="era3-v-3-1-0-l2908"><summary><code>+</code> <strong>added</strong> · lines 2908–2909: Implemented support for IF:Q with message type 7 (MSG_TYPE_CHOOSE_PIC) and 3-picture selection. The result is 1, 2, 3 or 0 for cancel. Prefer to …</summary><div class="era-change-body"><pre>Implemented support for IF:Q with message type 7 (MSG_TYPE_CHOOSE_PIC) and 3-picture selection. The result is 1, 2, 3 or 0 for cancel.
    Prefer to use IF:N instead for better dialog control.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l2911"><summary><code>+</code> <strong>added</strong> · lines 2911–2929: Implemented extended complex dialogs support in ERM. Credits: igrik, Berserker. IF:N(msgType)/^text^&#91;/?result/(textAlignment)/(preselectedPicId)&#93;…</summary><div class="era-change-body"><pre>Implemented extended complex dialogs support in ERM. Credits: igrik, Berserker.
    IF:N(msgType)/^text^&#91;/?result/(textAlignment)/(preselectedPicId)&#93;.
    Display dialog with up to selectable 8 pictures.

    msgType           is one of MSG_TYPE_XXX constants (message, question, popup, picture selection with optional cancel button).
    textAlignment     is bit mask of TEXT_ALIGN_XXX flags. Both vertical and horisontal alignment are supported. -1 means &quot;use default&quot;.
    preselectedPicId  is preselected picture index: 0-7 or -1 for none
    result            will contain -1 in most cases, (TRUE) or (FALSE) for questions, 0-7 (picture index) for picture selection and -1 for cancelled selection.

    Example:

    !?FU(OnAfterErmInstructions);
    !!IF:N(PIC_TYPE_SPELL)/(SPELL_TOWN_PORTAL)/(PIC_TYPE_RES_GOLD)/300/
          (PIC_TYPE_RES_WOOD)/5/(PIC_TYPE_RES_MERCURY)/10/(PIC_TYPE_RES_ORE)/15/
          (PIC_TYPE_RES_SULFUR)/20/(PIC_TYPE_RES_CRYSTAL)/25/(PIC_TYPE_MONEY)/5000;

    !!IF:N(MSG_TYPE_CHOOSE_PIC_OR_CANCEL)/^Take anything you need, bro!^/?(chosenItem:y)/(TEXT_ALIGN_LEFT);

    !!IF:M^%(chosenItem)^;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l2931"><summary><code>+</code> <strong>added</strong> · lines 2931–2937: IF:N and IF:Q dialogs with pictures now support special picture type flag: (PIC_TYPE_FLAG_DISPLAY_ZEROS). If it&#x27;s set, zero quantities (resources…</summary><div class="era-change-body"><pre>IF:N and IF:Q dialogs with pictures now support special picture type flag: (PIC_TYPE_FLAG_DISPLAY_ZEROS).
    If it&#x27;s set, zero quantities (resources, monsters, experience, etc) will be displayed like &quot;0 Archangels&quot; instead of &quot;Archangels&quot; or empty caption.

    Example:
    !!VR(picType:y):S(PIC_TYPE_EXPERIENCE) |(PIC_TYPE_FLAG_DISPLAY_ZEROS);
    !!VR(picSubtype:y):S0;
    !!IF:Q2/(picType)/(picSubtype)/(MSG_TYPE_QUESTION)/^Wanna nothing?^;</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l2939"><summary><code>+</code> <strong>added</strong> · lines 2939–2940: Updated &quot;Era Erm Framework&quot; mod constants: data types, wog flags and options, town constants, game limits, magic levels, battle actions, hero art…</summary><div class="era-change-body"><pre>Updated &quot;Era Erm Framework&quot; mod constants: data types, wog flags and options, town constants, game limits,
    magic levels, battle actions, hero artifact slots, dialog IDs, picture types, text alignment and many others.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l2942"><summary><code>+</code> <strong>added</strong> · lines 2942–2942: Added file &quot;9999 era - key codes.erm&quot; to &quot;Era Erm Framework&quot; with 150+ key codes constants.</summary><div class="era-change-body"><pre>Added file &quot;9999 era - key codes.erm&quot; to &quot;Era Erm Framework&quot; with 150+ key codes constants.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l2944"><summary><code>+</code> <strong>added</strong> · lines 2944–2945: Added &quot;OnAfterErmInited&quot; event to &quot;Era Erm Framework&quot;, occuring right in the end of !?PI / &quot;OnAfterErmInstructions&quot; event. The event allows to pe…</summary><div class="era-change-body"><pre>Added &quot;OnAfterErmInited&quot; event to &quot;Era Erm Framework&quot;, occuring right in the end of !?PI / &quot;OnAfterErmInstructions&quot; event.
    The event allows to perform actions after most scripts initialized their variables and performed basic map/memory configuration.</pre><p>Related pages: [After ERM instructions (PI)](../triggers/pi/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/) · [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l2947"><summary><code>+</code> <strong>added</strong> · lines 2947–2956: Added new events to &quot;Era Erm Framework&quot;: &quot;OnKeyPressed_AdvMap&quot;, &quot;OnKeyPressed_Battle&quot;, &quot;OnKeyPressed_HeroScreen&quot;, &quot;OnKeyPressed_HeroMeetingScreen…</summary><div class="era-change-body"><pre>Added new events to &quot;Era Erm Framework&quot;: &quot;OnKeyPressed_AdvMap&quot;, &quot;OnKeyPressed_Battle&quot;, &quot;OnKeyPressed_HeroScreen&quot;,
    &quot;OnKeyPressed_HeroMeetingScreen&quot;, &quot;OnKeyPressed_Town&quot;, occuring right after &quot;OnKeyPressed&quot; events and taking two arguments:
    x1 - key code
    x2 - prevent default reaction (0 - no, 1 - yes).

    Example:
    !?FU(OnKeyPressed_Battle)&amp;x1=(KEY_F1):;
    !#VA(key:x) (preventDefault:x);
    !!VR(preventDefault):S(TRUE);
    !!IF:M^Pressed F1 in battle!^;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Key press (OnKeyPressed)](../triggers/onkeypressed/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l2958"><summary><code>+</code> <strong>added</strong> · lines 2958–2958: SN:F now supports &#x27;user32.dll&#x27; functions.</summary><div class="era-change-body"><pre>SN:F now supports &#x27;user32.dll&#x27; functions.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l2960"><summary><code>+</code> <strong>added</strong> · lines 2960–3011: Added new functions to &quot;Era Erm Framework&quot;. !?FU(Array_SortedUnique); ; Leaves only unique sorted integer items in the array. ; Calling on &#91;15, 4…</summary><div class="era-change-body"><pre>Added new functions to &quot;Era Erm Framework&quot;.
  !?FU(Array_SortedUnique);
  ; Leaves only unique sorted integer items in the array.
  ; Calling on &#91;15, 4, 3, 3, 1, 20, 15&#93; list will rearrange and truncate list to the following:
  ; &#91;1, 3, 4, 15, 20&#93;
  !#VA(list:x); Array ID

  !?FU(Array_EnsureMinSize);
  ; Checks, if array has at least specified minimal size and increasing the size if not, filling new items
  ; with optional default value.
  !#VA(list:x);      Array ID.
  !#VA(minSize:x);   Minimal desired array size.
  !#VA(fillValue:x); Optional. Fill value for new items. Default: ^^ or 0.

  !?FU(ConstructBitMask);
  ; Accepts up to 15 bit/flag positions (0..31). Returns mask with corresponding bit flags set.
  ; Actually, given Xi arguments, returns Sum(2 ^ xi).
  ; For example, P0/3/7/?(mask:y) will give 2 ^ 0 + 2 ^ 3 + 2 ^ 7 = 1 + 8 + 128 = 137.
  !#VA(args:x);   ... Up to 15 bit/flag positions.
  !#VA(result:x); The last argument will contain the result mask.

  !?FU(DeconstructBitMask);
  ; Deconstructs bit mask into list of bit/flag positions (each with 0..31 value).
  ; For example, P137/(list) will fill the list with &#91;0, 3, 7&#93; values, because
  ; 2 ^ 0 + 2 ^ 3 + 2 ^ 7 = 1 + 8 + 128 = 137. It means, that bits 0, 3 and 7 are set.
  !#VA(mask:x); Bit mask.
  !#VA(list:x); Array ID to fill with bit/flag positions.

  !?FU(MonCountToFuzzyText);
  ; Converts monster quantity to human readable value range like &quot;50-99&quot; or &quot;2K+&quot;.
  ; Returns result in s^result^
  !#VA(monNum:x);

  !?FU(DisableErrors);
  ; Disables ERM error messages and resets error option.

  !?FU(EnableErrors);
  ; Enables ERM error messages and returns last error flag (TRUE or FALSE).
  !#VA(result:x);

  !?FU(StrToUpper);
  ; Converts given string to upper case. Result is returned in s^result^.
  !#VA(strPtr:x);

  !?FU(StrToLower);
  ; Converts given string to lower case. Result is returned in s^result^.
  !#VA(strPtr:x);

  !?FU(GetStrAtAddr);
  ; Reads null terminated string at specified address into s^result^ variable.
  ; Null address (0) results in empty string.
  !#VA(strAddr:x);</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3013"><summary><code>+</code> <strong>added</strong> · lines 3013–3021: Added Era exported function ShowErmError (Error: pchar); stdcall; The function shows regular ERM error dialog and can be used for ERM scripts err…</summary><div class="era-change-body"><pre>Added Era exported function ShowErmError (Error: pchar); stdcall;
    The function shows regular ERM error dialog and can be used for ERM scripts error reporting and debugging.

    Example:

    !!if|(baseFaction)&lt;(NO_TOWN)/(baseFaction)&gt;(MIX_MAX_POSSIBLE_FACTION_ID):;
      !!SN:F^ShowErmError^/^Invalid &quot;baseFaction&quot; argument: %(baseFaction)^;
      !!FU:E;
    !!en;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [Function calls (FU)](../receivers/fu/) · [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3023"><summary><code>+</code> <strong>added</strong> · lines 3023–3048: Added possibility to extend lifetime of trigger-local SN:M array to parent scope. It&#x27;s now possible to return trigger-local arrays to caller func…</summary><div class="era-change-body"><pre>Added possibility to extend lifetime of trigger-local SN:M array to parent scope. It&#x27;s now possible to return
    trigger-local arrays to caller function without necessity to free that array afterwards. Thus automatical memory
    management is preserved.

    Example:
    ; Deep level function returns trigger-local array of 3 strings to another function, which in its case returns the same array
    ; to &quot;OnAfterErmInstructions&quot; trigger. The array will be freed after &quot;OnAfterErmInstructions&quot; execution block ends.

    !?FU(FuncB);
    !#VA(result:x);
    !!SN:M(M_AUTO_ID)/3/(M_STR)/(M_TRIGGER_LOCAL)/?(result);
    !!SN:V(result)/0/^one^/^two^/^three^;
    !!SN:F^ExtendArrayLifetime^/(result);

    !?FU(FuncA);
    !#VA(result:x);
    !!FU(FuncB):P?(result);
    !!SN:F^ExtendArrayLifetime^/(result);

    !?(OnAfterErmInstructions);
    !!FU(FuncA):P?(arr:y);
    !!FU(Array_Join):P(arr)/^ ^;
    !!IF:M^%s(result)^; Display &quot;one two three&quot;

    !?(OnAfterErmInstructions);
    ; here the (arr) array is already deleted</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [ERA services, memory and sound (SN)](../receivers/sn/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3050"><summary><code>+</code> <strong>added</strong> · lines 3050–3055: Added support for local z-strings as function parameters. They will be converted to temporary read-only z-variable indexes. Example: !!VR(str:z):…</summary><div class="era-change-body"><pre>Added support for local z-strings as function parameters. They will be converted to temporary read-only z-variable indexes.

    Example:
    !!VR(str:z):S^haVe A nIce day!^;
    !!FU(StrToUpper):P(str); here z-1 will be converted into something like &quot;10000002&quot; which is z10000002 index
    !!IF:M^%s(result)^; Display &quot;HAVE A NICE DAY!&quot;</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/) · [Function calls (FU)](../receivers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework functions](../framework/functions/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3057"><summary><code>+</code> <strong>added</strong> · lines 3057–3063: Added possibility to define ERM 2 constant aliases. Example: !#DC(PIC_TYPE_RES_FIRST) = (PIC_TYPE_RES_WOOD); !#DC(PIC_TYPE_RES_LAST) = (PIC_TYPE_…</summary><div class="era-change-body"><pre>Added possibility to define ERM 2 constant aliases.
    Example:

    !#DC(PIC_TYPE_RES_FIRST) = (PIC_TYPE_RES_WOOD);
    !#DC(PIC_TYPE_RES_LAST)  = (PIC_TYPE_RES_MITHRIL);

    Now (PIC_TYPE_RES_FIRST) will have the same value as (PIC_TYPE_RES_WOOD) constant.</pre></div></details>

<details class="era-change" id="era3-v-3-1-0-l3065"><summary><code>+</code> <strong>added</strong> · lines 3065–3071: Added possiblity to use constants in local array declarations. Previously array size could be number only. Now it&#x27;s possible to specify constant …</summary><div class="era-change-body"><pre>Added possiblity to use constants in local array declarations. Previously array size could be number only.
    Now it&#x27;s possible to specify constant name instead of number without parenthesis.

    Example:
    !#DC(MAX_DWELLING_ALT_CREATURES) = 4;

    !#VA(dwellingMonTypes&#91;MAX_DWELLING_ALT_CREATURES&#93;:y); Define array of 4 items to hold dwelling monster types</pre></div></details>

<details class="era-change" id="era3-v-3-1-0-l3073"><summary><code>+</code> <strong>added</strong> · lines 3073–3075: Added support for e-variables in VR:C. !!VR(floats&#91;3&#93;:e):C0/0/0; Do not forget, that no integer-float conversion is performed in VR:C, all values…</summary><div class="era-change-body"><pre>Added support for e-variables in VR:C. !!VR(floats&#91;3&#93;:e):C0/0/0;
    Do not forget, that no integer-float conversion is performed in VR:C, all values are copied as is. The only safe constant
    for e-variables is 0.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3077"><summary><code>+</code> <strong>added</strong> · lines 3077–3077: Improved TR:T to allow any number of arguments.</summary><div class="era-change-body"><pre>Improved TR:T to allow any number of arguments.</pre><p>Related pages: [Map tiles (TR)](../receivers/tr/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3079"><summary><code>+</code> <strong>added</strong> · lines 3079–3093: Improved UN:U command. It does not raise error if no more objects are found, but sets x-coordinate to -1 instead. Thus no premature objects count…</summary><div class="era-change-body"><pre>Improved UN:U command. It does not raise error if no more objects are found, but sets x-coordinate to -1 instead. Thus no premature
    objects counting is required. A new syntax with 6 parameters was added to allow using arbitrary integer variables instead of v-variables.
    !!UN:U(objectType)/(objectSubtype)/(direction like -1/-2 or object index)/(x)/(y)/(z).

    Example:
    ; Let&#x27;s traverse through all map monsters, doubling their quantity

    !#VA(x:y) (y:y) (z:y); define variables to store object coordinates
    !!VR(x):S-1;           setting x-coordinate to -1 will force to start search from scratch

    !!re i; endless loop
      !!UN:U(OBJ_MONSTER)/(ANY_OBJ)/-1/(x)/(y)/(z); find next monster, (x) = -1 on failure
      !!br&amp;(x)&lt;0:;                                  exit loop if nothing found
      !!MO(x)/(y)/(z):Gd*2;                         double monsters quantity
    !!en:;</pre><p>Related pages: [General game operations (UN)](../receivers/un/) · [Variables and expressions (VR)](../receivers/vr/) · [Neutral map monsters (MO)](../receivers/mo/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3095"><summary><code>+</code> <strong>added</strong> · lines 3095–3102: Heroes 3 &quot;DisplayComplexDialog&quot; function (4F7D20) was improved. The last argument &quot;closeTimeoutMsec&quot; was overloaded to &quot;Opts&quot;. Opts is: 16 bits f…</summary><div class="era-change-body"><pre>Heroes 3 &quot;DisplayComplexDialog&quot; function (4F7D20) was improved. The last argument &quot;closeTimeoutMsec&quot; was overloaded to &quot;Opts&quot;.
    Opts is:
    16 bits for closeTimeoutMsec,
    4 bits for msgType (1 - ok, 2 - question, 4 - popup, etc), // 0 is treated as 1.
    4 bits for text alignment bit mask (0..15),
    8 bits for internal H3 usage, usually 0

    Thus it&#x27;s became possible to display dialogs with up to 8 images and of any type (message, question, popup, picture selection).</pre></div></details>

<details class="era-change" id="era3-v-3-1-0-l3104"><summary><code>+</code> <strong>added</strong> · lines 3104–3120: Added exported function FindNextObject (ObjType, ObjSubtype: integer; var x, y, z: integer; Direction: integer): integer; stdcall; It works the s…</summary><div class="era-change-body"><pre>Added exported function FindNextObject (ObjType, ObjSubtype: integer; var x, y, z: integer; Direction: integer): integer; stdcall;
    It works the same as UN:U with fast search syntax, but does not raise error on no more objects, returns success flag and allows
    to use non-v variables to store coordinates. You won&#x27;t need to count objects before searching for them anymore.

    Direction is -1 for FORWARD and -2 for BACKWARD.

    Example:
    ; Let&#x27;s traverse through all map monsters, doubling their quantity

    !#VA(x:y) (y:y) (z:y); define variables to store object coordinates
    !!VR(x):S-1;           setting x-coordinate to -1 will force to start search from scratch

    !!re i; endless loop
      !!SN:F^FindNextObject^/(OBJ_MONSTER)/(ANY_OBJ)/?(x)/?(y)/?(z)/-1; find next monster, v1 is (TRUE) on success
      !!br&amp;v1=(FALSE):;                                                 exit loop if nothing found
      !!MO(x)/(y)/(z):Gd*2;                                             double monsters quantity
    !!en:;</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/) · [ERA services, memory and sound (SN)](../receivers/sn/) · [Neutral map monsters (MO)](../receivers/mo/) · [General game operations (UN)](../receivers/un/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3124"><summary><code>*</code> <strong>changed</strong> · lines 3124–3125: x16 can now be allocated as local named variable. Previosly the following code would lead to error: !!VA(args&#91;16&#93;:x);</summary><div class="era-change-body"><pre>x16 can now be allocated as local named variable. Previosly the following code would lead to error:
    !!VA(args&#91;16&#93;:x);</pre><p>Related pages: [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3127"><summary><code>*</code> <strong>changed</strong> · lines 3127–3127: SN:G is DEPRECATED and may be removed in future versions.</summary><div class="era-change-body"><pre>SN:G is DEPRECATED and may be removed in future versions.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3129"><summary><code>-</code> <strong>fixed</strong> · lines 3129–3129: Fixed SN:O. No more boat/hero hiding.</summary><div class="era-change-body"><pre>Fixed SN:O. No more boat/hero hiding.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3130"><summary><code>-</code> <strong>fixed</strong> · lines 3130–3130: Fixed HE receiver to support any ERM variable like !!HEi^heroId^.</summary><div class="era-change-body"><pre>Fixed HE receiver to support any ERM variable like !!HEi^heroId^.</pre><p>Related pages: [Heroes (HE)](../receivers/he/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3131"><summary><code>-</code> <strong>fixed</strong> · lines 3131–3131: Fixed VR:C indexes checking, allowing to override protected memory by commands like VRy-99:C1/2/3;</summary><div class="era-change-body"><pre>Fixed VR:C indexes checking, allowing to override protected memory by commands like VRy-99:C1/2/3;</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3133"><summary><code>-</code> <strong>fixed</strong> · lines 3133–3142: Fixed ERM 2 compiler part, responsible for local z-arrays indexes allocation. Previosly !#VA(names&#91;3&#93;:z) used to allocate array of &#91;z-3, z-4, z-5…</summary><div class="era-change-body"><pre>Fixed ERM 2 compiler part, responsible for local z-arrays indexes allocation.
    Previosly !#VA(names&#91;3&#93;:z) used to allocate array of &#91;z-3, z-4, z-5&#93; (decreasing indexes).
    Now the appropriate array will be &#91;z-5, z-4, z-3&#93; (increasing indexes). Thus it&#x27;s possible to use
    safely index arithmetics like:

    !#VA(names&#91;3&#93;:z);
    !!VR(names&#91;2&#93;):S^Have a nice day!^;
    !!VRi:S2;                     i is array item logical index
    !!VR(itemPtr:y):S(@array) +i; itemPtr holds real z-index of array item
    !!IF:M^%z(itemPtr)^;          display i-th item value</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [ERM syntax: ZVSE and ZVSE2](../syntax/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3144"><summary><code>-</code> <strong>fixed</strong> · lines 3144–3145: Fixed UN:C. It didn&#x27;t accept negative size argument, while -1, -2 and -4 are valid sizes. Prefer to use (UNC_XXX) constants to specify valid data…</summary><div class="era-change-body"><pre>Fixed UN:C. It didn&#x27;t accept negative size argument, while -1, -2 and -4 are valid sizes.
    Prefer to use (UNC_XXX) constants to specify valid data type.</pre><p>Related pages: [General game operations (UN)](../receivers/un/) · [UN:C — memory access](../un-c/)</p></div></details>

<details class="era-change" id="era3-v-3-1-0-l3149"><summary><code>-</code> <strong>fixed</strong> · lines 3149–3150: Fixed check for multiplayer in attack type selection dialog, causing wrong &quot;This feature does not work in Human vs Human network baced battle&quot; me…</summary><div class="era-change-body"><pre>Fixed check for multiplayer in attack type selection dialog, causing wrong
    &quot;This feature does not work in Human vs Human network baced battle&quot; message.</pre></div></details>

<details class="era-change" id="era3-v-3-1-0-l3152"><summary><code>-</code> <strong>fixed</strong> · lines 3152–3157: Removed rest files from &quot;Animated Trees&quot; mod. Credits: Archer30. &#91;!&#93; Note, that SN:O does not work with global named variables. &#91;!&#93; Note, that v1…</summary><div class="era-change-body"><pre>Removed rest files from &quot;Animated Trees&quot; mod. Credits: Archer30.

&#91;!&#93; Note, that SN:O does not work with global named variables.

&#91;!&#93; Note, that v1 must not be used to store anything non-temporal, because from Era 2.X it&#x27;s changed in every SN:E/SN:F call.
    It&#x27;s a dirty variable for fast result return. Use v2/v3/v4 instead.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [Variables, strings and arrays](../variables/)</p></div></details>

</section>
:::

### ERA 3.0.5 {#era3-version-3-0-5}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-0-5-l3162"><summary><code>+</code> <strong>added</strong> · lines 3162–3163: Updated &quot;wog native dialogs&quot; plugin. All localized string were moved to json file. Added possibility to tune fonts, used in different dialogs. Cr…</summary><div class="era-change-body"><pre>Updated &quot;wog native dialogs&quot; plugin. All localized string were moved to json file.
    Added possibility to tune fonts, used in different dialogs. Credits: igrik.</pre></div></details>

<details class="era-change" id="era3-v-3-0-5-l3168"><summary><code>+</code> <strong>added</strong> · lines 3168–3168: SN:V now supports negative indexes, meaning n-th from end, the same as SN:M.</summary><div class="era-change-body"><pre>SN:V now supports negative indexes, meaning n-th from end, the same as SN:M.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-0-5-l3170"><summary><code>+</code> <strong>added</strong> · lines 3170–3181: Added possibility to query SN:M arrays information. !!SN:M#1/(?)$2/(?)$3/?($4)&#91;/?$5&#93;; #1 - array ID $2 - items count $3 - items type (0 - integer…</summary><div class="era-change-body"><pre>Added possibility to query SN:M arrays information.
    !!SN:M#1/(?)$2/(?)$3/?($4)&#91;/?$5&#93;;
    #1 - array ID
    $2 - items count
    $3 - items type (0 - integers, 1 - strings)
    $4 - items storage type (-1 - trigger local, 0 - temporary, 1 - with savegame stored contents)
    $5 - unsafe temporary address of array first item in memory
    At least single #2..#4 parameter should use GET syntax. SET-syntax parameters are ignored in this case.

    Example:
    !!SN:M(array)/d/?(itemsType:y)/d; check if it&#x27;s array of integers or strings
    !!if&amp;(itemsType)=(M_INT):; ...</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-0-5-l3183"><summary><code>+</code> <strong>added</strong> · lines 3183–3190: Added new constants to &quot;Era Erm Framework&quot; mod: - TOWN_XXX constants for each town type in the game. - CALLCONV_XXX constants for possible SN:E c…</summary><div class="era-change-body"><pre>Added new constants to &quot;Era Erm Framework&quot; mod:
  - TOWN_XXX constants for each town type in the game.
  - CALLCONV_XXX constants for possible SN:E calling conventions.
  - BATTLE_XXX constants for battle sides and stack limits.
  - FLOAT_INF and FLOAT_NEG_INF, representing infinity values for float numbers.
  Usage:
  !!VR(inf:e):C(FLOAT_INF);                   Assign positive infinity to (inf) variable without type conversion
  !!IF&amp;(someValue)=(inf):M^Value is too big^; Check some e-var for positive infinity</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [ERA services, memory and sound (SN)](../receivers/sn/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-0-5-l3192"><summary><code>+</code> <strong>added</strong> · lines 3192–3202: Extended OnEveryDay trigger in &quot;Era Erm Framework&quot; mod. The following global variables are automatically set: - i^timerDay^: 1..+inf - i^timerWee…</summary><div class="era-change-body"><pre>Extended OnEveryDay trigger in &quot;Era Erm Framework&quot; mod. The following global variables are automatically set:
    - i^timerDay^:        1..+inf
    - i^timerWeekDay^:    1..7
    - i^timerMonthDay^:   1..28
    - i^timerWeek^:       1..+inf
    - i^timerMonthWeek^:  1..4
    - i^timerMonth^:      1..+inf
    - i^timerOnce^:       0..1
    - i^timerOwner^:      0..7
    - i^timerIsAi^:       0..1
    - i^timerIsHuman^:    0..1</pre><p>Related pages: [Start of a game day (OnEveryDay)](../triggers/oneveryday/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-0-5-l3204"><summary><code>+</code> <strong>added</strong> · lines 3204–3235: Added mathemetical functions to &quot;Era Erm Framework&quot; mod. !?FU(Pow); ; Raises value to specified power. All arguments and result are floats. ; Exa…</summary><div class="era-change-body"><pre>Added mathemetical functions to &quot;Era Erm Framework&quot; mod.

  !?FU(Pow);
  ; Raises value to specified power. All arguments and result are floats.
  ; Example: 2^3 = 8, i.e. 2 * 2 * 2 = 8
  !#VA(base:x) (power:x) (result:x);

  !?FU(Sqrt);
  ; Returns value square root. All arguments and result are floats.
  !#VA(value:x) (result:x);

  !?FU(IntLog2);
  ; Returns Ceil(Log2(N)) or 0 for invalid values (&lt;= 0).

  Examples:

  !!FU(IntLog2):P100/?(res:y);
  !!IF:M^%(res)^; displays 7, because 2^7 = 128 and 2^6 = 64
  ; It means that 7 bits are necessary to hold data with 100 possible values.
  ; It also means, that if one value is 100x greater than the other one, then
  ; it would take 7 multiplications by 2 before the second value will become &gt;= the first one.


  !!VR(base:e):S123 :10; base = 12.3
  !!VR(power:e):S35 :10; power = 3.5
  !!FU(Pow):P(base)/(power)/?(float:e);
  !!IF:M^%(float)^; 12.3 ^ 3.5 = 6526.31287


  !!VR(value:e):S123 :10;
  !!FU(Sqrt):P(value)/?(float:e);
  !!IF:M^%(float)^; 12.3 ^ 0.5 = 3.507. I.e. 3.507 * 3.507 = 12.3</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Variables and expressions (VR)](../receivers/vr/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-0-5-l3237"><summary><code>+</code> <strong>added</strong> · lines 3237–3354: Added functions for SN:M arrays handling to &quot;Era Erm Framework&quot; mod. !?FU(Array_Join); ; Concatenates array items into single string, using passe…</summary><div class="era-change-body"><pre>Added functions for SN:M arrays handling to &quot;Era Erm Framework&quot; mod.

  !?FU(Array_Join);
  ; Concatenates array items into single string, using passed glue string. Works with both numeric and string arrays.
  ; Example: &#91;&#x27;one&#x27;, &#x27;two&#x27;, &#x27;three&#x27;&#93; with glue &#x27; --- &#x27; become &#x27;one --- two --- three&#x27;.
  ; Returns s^result^
  ; Uses s^_^
  !#VA(list:x);    Array ID.
  !#VA(gluePtr:x); Optional. Glue string. Default: &#x27;&#x27;.

  Example:

  ; Create list with names of the first 10 heroes
  !!SN:M(M_AUTO_ID)/10/(M_STR)/(M_TRIGGER_LOCAL)/?(names:y);

  !!re i/0/10/1/-1:;
    !!HEi:B0/?(heroName:z);
    !!SN:V(names)/i/(heroName);
  !!en:;

  ; Display joined list items
  !!FU(Join):P(names)/^
  ^;
  !!VR(textPtr:y):Zs^result^;
  !!IF:M^%z(textPtr)^;


  !?FU(Array_Sort);
  ; Sorts array items in ascending order. Allows to sort specific array subrange.
  !#VA(list:x);     Array ID.
  !#VA(startInd:x); Optional Start index of array subrange to sort. Default: 0.
  !#VA(endInd:x);   Optional End index of array subrange to sort. Default: numItems - 1.

  Example:
  ; Let (names) variable hold SN:M array ID with heroes names (see example with Join function)
  !!FU(Array_Sort):P(names); will sort it


  !?FU(Array_CustomSort);
  ; Sorts array items in ascending order user custom comparator function. Allows to sort specific array subrange.
  ; It&#x27;s possible to perform any complex sorting in any direction and by unlimited number of criteria, using this method.
  ; It&#x27;s a stable sorting method, i.e. items, which we be reported as equal, will retain their relative position to each other.
  ; For example, if sorting &#x27;Ann&#x27;, &#x27;David&#x27; and &#x27;Ken&#x27; by name length, the result will be &#x27;Ann&#x27;, &#x27;Ken&#x27;, &#x27;David&#x27; and not &#x27;Ken&#x27;, &#x27;Ann&#x27;, &#x27;David&#x27;.
  ; When sorting string array, comparator function will receive z-indexes of strings as arguments.
  !#VA(list:x);        Array ID.

  !#VA(compareFunc:x); Comparison ERM function ID. It will be called multiple times with the following arguments:
                     ; (value1, value2, state), where &#x27;state&#x27; is any custom value, you specify on call to Array_CustomSort.
                     ; Usually state is some array ID or external structure address, that client use to compare items.
                     ;
                     ; The function must return value:
                     ; &lt; 0 if value1-item should be placed before value2-item
                     ; &gt; 0 if value1-item should be placed after value2-item
                     ; 0 if the ordering between two items should be left as is.

  !#VA(state:x);    Optional. Custom value to be always passed to comparison function as the third argument. Default: 0.
  !#VA(startInd:x); Optional. Start index of array subrange to sort. Default: 0.
  !#VA(endInd:x);   Optional. End index of array subrange to sort. Default: numItems - 1.

  Example 1. Sorting monsters IDs array by HP of each monster

  !!SN:M(M_AUTO_ID)/10/(M_INT)/(M_TRIGGER_LOCAL)/?(mons:y);
  !!SN:V(mons)/0/39/12/20/92/78/17/13/43/6/32;
  !!FU(Array_CustomSort):P(mons)/(tst_CompareByMonHp);
  !!FU(Array_Join):P(mons)/^ ^;
  !!IF:M^Monster IDs: %s(result)^;

  !?FU(tst_CompareByMonHp);
  !#VA(mon1:x) (mon2:x) (state:x) (result:x);
  !!VR(result):S0;

  !!MA:P(mon1)/?(hp1:y);
  !!MA:P(mon2)/?(hp2:y);

  !!if&amp;(hp1)&gt;(hp2):;
    !!VR(result):S1;
  !!el&amp;(hp1)&lt;(hp2):;
    !!VR(result):S-1;
  !!en;

  Example 2. Sorting visitor names by name length

  !!SN:M(M_AUTO_ID)/4/(M_STR)/(M_TRIGGER_LOCAL)/?(visitors:y);
  !!SN:V(visitors)/0/^Laura^/^Den^/^Agriel^/^Ken^;
  !!FU(Array_CustomSort):P(visitors)/(tst_CompareByStrLen);
  !!FU(Array_Join):P(visitors)/^ ^;
  !!IF:M^Visitors: %s(result)^;

  !?FU(tst_CompareByStrLen);
  !#VA(str1Ptr:x) (str2Ptr:x) (state:x) (result:x);
  !!VRz(str1Ptr):M4/?(str1Len:y);
  !!VRz(str2Ptr):M4/?(str2Len:y);
  !!VR(result):S(str1Len) -(str2Len);


  !?FU(Array_Revert);
  ; Reverts order of itmes in the array. Allows to reverse the order of specific array subrange only.
  !#VA(list:x);     Array ID.
  !#VA(startInd:x); Optional Start index of array subrange. Default: 0.
  !#VA(endInd:x);   Optional End index of array subrange. Default: numItems - 1.

  Example:
  ; Let (names) variable hold SN:M array ID with heroes names (see example with Join function)
  !!FU(Array_Revert):P(names); will revert items order


  !?FU(Array_Fill);
  ; Fills array or arrays subrange with incrementing/decrementing values.
  ; Example: FU(Array_Fill):P(array)/100/2; Will fill items with 100, 102, 104, 106...
  !#VA(list:x);       Array ID.
  !#VA(startValue:x); Starting value to fill with.
  !#VA(step:x);       Value to add to increase filler on each step. Default: 0.
  !#VA(startInd:x);   Optional. Start index of array subrange. Default: 0.
  !#VA(endInd:x);     Optional. End index of array subrange. Default: numItems - 1.

  Example:
  ; Let (array) is some array of integer numbers. Let&#x27;s fill it with 100, 98, 96...
  !!FU(Array_Fill):P(array)/100/-2;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [ERA services, memory and sound (SN)](../receivers/sn/) · [Heroes (HE)](../receivers/he/) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [Creature-type attributes (MA)](../receivers/ma/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-0-5-l3356"><summary><code>*</code> <strong>changed</strong> · lines 3356–3356: Creating array using SN:M with 5 parameters does not change v1 anymore.</summary><div class="era-change-body"><pre>Creating array using SN:M with 5 parameters does not change v1 anymore.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-0-5-l3357"><summary><code>*</code> <strong>changed</strong> · lines 3357–3357: Extracted all Era supplied ERM scripts into &quot;Era Erm Framework&quot; mod.</summary><div class="era-change-body"><pre>Extracted all Era supplied ERM scripts into &quot;Era Erm Framework&quot; mod.</pre><p>Related pages: [Framework functions](../framework/functions/) · [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-0-5-l3358"><summary><code>*</code> <strong>changed</strong> · lines 3358–3358: Extracted ERM testing code into separate mod &quot;Era Erm Tests&quot;.</summary><div class="era-change-body"><pre>Extracted ERM testing code into separate mod &quot;Era Erm Tests&quot;.</pre></div></details>

<details class="era-change" id="era3-v-3-0-5-l3359"><summary><code>*</code> <strong>changed</strong> · lines 3359–3359: Updated ERM editor snippets and autocompletion files. Added fast &#x27;ifm&#x27;, &#x27;ifl&#x27; and &#x27;snm&#x27; snippets.</summary><div class="era-change-body"><pre>Updated ERM editor snippets and autocompletion files. Added fast &#x27;ifm&#x27;, &#x27;ifl&#x27; and &#x27;snm&#x27; snippets.</pre></div></details>

<details class="era-change" id="era3-v-3-0-5-l3361"><summary><code>-</code> <strong>fixed</strong> · lines 3361–3364: Applied fixes to ERM constants (Era Erm Framework mod): Fixed constant name: MON_SUPREMEARCHANGEL =&gt; MON_SUPREME_ARCHANGEL. Fixed constant MON_LA…</summary><div class="era-change-body"><pre>Applied fixes to ERM constants (Era Erm Framework mod):
  Fixed constant name: MON_SUPREMEARCHANGEL =&gt; MON_SUPREME_ARCHANGEL.
  Fixed constant MON_LAST_WOG =&gt; 196 instead of 197. Credits: igrik.
  Fixed primary skills constants. Credits: Algor.</pre><p>Related pages: [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-0-5-l3366"><summary><code>-</code> <strong>fixed</strong> · lines 3366–3366: Fixed crash on !#VA(-varName) syntax usage.</summary><div class="era-change-body"><pre>Fixed crash on !#VA(-varName) syntax usage.</pre></div></details>

<details class="era-change" id="era3-v-3-0-5-l3367"><summary><code>-</code> <strong>fixed</strong> · lines 3367–3367: Fixed ERM memory dump generation: slots reporting use to contain information about reserved items.</summary><div class="era-change-body"><pre>Fixed ERM memory dump generation: slots reporting use to contain information about reserved items.</pre></div></details>

<details class="era-change" id="era3-v-3-0-5-l3368"><summary><code>-</code> <strong>fixed</strong> · lines 3368–3368: Fixed x-variables reporting in ERM tracking module. Previosly garbage x0 value was output as the first one.</summary><div class="era-change-body"><pre>Fixed x-variables reporting in ERM tracking module. Previosly garbage x0 value was output as the first one.</pre></div></details>

</section>
:::

### ERA 3.0.4 {#era3-version-3-0-4}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-0-4-l3374"><summary><code>+</code> <strong>added</strong> · lines 3374–3375: Extended town income limits from -32768..32767 to -2147483648..+2147483648 and added new event OnCalculateTownIncome with three parameters: Town …</summary><div class="era-change-body"><pre>Extended town income limits from -32768..32767 to -2147483648..+2147483648 and added new event OnCalculateTownIncome
    with three parameters: Town ID, Income (gold amount), Account resource silo? (0 or 1).</pre><p>Related pages: [Calculating town income (OnCalculateTownIncome)](../triggers/oncalculatetownincome/) · [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-0-4-l3377"><summary><code>+</code> <strong>added</strong> · lines 3377–3383: Introduced extended !!re syntax: !!re counter/start/stop/step/stop_modifier, where stop_modifier is any integer value, that will be added to stop…</summary><div class="era-change-body"><pre>Introduced extended !!re syntax: !!re counter/start/stop/step/stop_modifier, where stop_modifier is any integer value,
    that will be added to stop value. New syntax allows to express such loops as FROM 0 to SOME_VAR - 1, for instance.

    Example:
    !!re i/0/(numStacks)/1/-1:;
      ...
    !!en:;</pre></div></details>

<details class="era-change" id="era3-v-3-0-4-l3385"><summary><code>+</code> <strong>added</strong> · lines 3385–3385: !!re allows to use any variables now, including global named s/i variables.</summary><div class="era-change-body"><pre>!!re allows to use any variables now, including global named s/i variables.</pre></div></details>

<details class="era-change" id="era3-v-3-0-4-l3387"><summary><code>+</code> <strong>added</strong> · lines 3387–3389: Improved ERM stability. Now all non-specified parameters are treated as 0 in X# syntax and ignored in X$ syntax. As a result, !!DL:A without the …</summary><div class="era-change-body"><pre>Improved ERM stability. Now all non-specified parameters are treated as 0 in X# syntax and ignored in X$ syntax.
    As a result, !!DL:A without the 4-th parameter will not randomly crash anymore and !!TR may be used with any number of parameters,
    while exactly 8 were required previously. Note, that many ERM commands still require exact number of obligatory parameters.</pre><p>Related pages: [Custom dialogs (DL)](../receivers/dl/) · [Map tiles (TR)](../receivers/tr/)</p></div></details>

<details class="era-change" id="era3-v-3-0-4-l3391"><summary><code>+</code> <strong>added</strong> · lines 3391–3391: !!DL:A was improved, accepting any string including string literal as the 3-d parameter.</summary><div class="era-change-body"><pre>!!DL:A was improved, accepting any string including string literal as the 3-d parameter.</pre><p>Related pages: [Custom dialogs (DL)](../receivers/dl/)</p></div></details>

<details class="era-change" id="era3-v-3-0-4-l3393"><summary><code>+</code> <strong>added</strong> · lines 3393–3395: Included updated &quot;wog native dialogs&quot; plugin by igrik. From now plugins exports function __cdecl int UseWin32InputControl (int newState). The fun…</summary><div class="era-change-body"><pre>Included updated &quot;wog native dialogs&quot; plugin by igrik. From now plugins exports function __cdecl int UseWin32InputControl (int newState).
    The function allows to switch between Heroes 3 native input control and Windows input control. The latter allows to input Asian and &#x27;{&#x27;, &#x27;}&#x27; characters.
    Mode can be switched any time even using ERM. UseWin32InputControl returns previous state.</pre></div></details>

<details class="era-change" id="era3-v-3-0-4-l3399"><summary><code>*</code> <strong>changed</strong> · lines 3399–3400: Changed ERM error report generating: not only ERM memory dump is made, but the whole debug information is saved, like if you press F11 manually.</summary><div class="era-change-body"><pre>Changed ERM error report generating: not only ERM memory dump is made, but the whole debug information is saved, like
    if you press F11 manually.</pre></div></details>

<details class="era-change" id="era3-v-3-0-4-l3402"><summary><code>-</code> <strong>fixed</strong> · lines 3402–3402: Fixed WoG bug, disallowing to set dialog hints twice using DL:H command. Credits: gamecreator.</summary><div class="era-change-body"><pre>Fixed WoG bug, disallowing to set dialog hints twice using DL:H command. Credits: gamecreator.</pre><p>Related pages: [Custom dialogs (DL)](../receivers/dl/)</p></div></details>

<details class="era-change" id="era3-v-3-0-4-l3403"><summary><code>-</code> <strong>fixed</strong> · lines 3403–3403: Fixed bug in ERM caching engine: GET-syntax could produce garbage values on cache hit.</summary><div class="era-change-body"><pre>Fixed bug in ERM caching engine: GET-syntax could produce garbage values on cache hit.</pre></div></details>

<details class="era-change" id="era3-v-3-0-4-l3404"><summary><code>-</code> <strong>fixed</strong> · lines 3404–3404: Fixed bug in ERM engine, causing crashes in !!UR:S and a few other possible commands.</summary><div class="era-change-body"><pre>Fixed bug in ERM engine, causing crashes in !!UR:S and a few other possible commands.</pre><p>Related pages: [University (UR)](../receivers/ur/)</p></div></details>

<details class="era-change" id="era3-v-3-0-4-l3405"><summary><code>-</code> <strong>fixed</strong> · lines 3405–3405: Fixed bug: IF:N$ used to cause ERM errors and crashes. Credits: helgtla.</summary><div class="era-change-body"><pre>Fixed bug: IF:N$ used to cause ERM errors and crashes. Credits: helgtla.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-0-4-l3406"><summary><code>-</code> <strong>fixed</strong> · lines 3406–3406: Fixed bug: HE:P used to return unsigned 65535 instead of signed -1.</summary><div class="era-change-body"><pre>Fixed bug: HE:P used to return unsigned 65535 instead of signed -1.</pre><p>Related pages: [Heroes (HE)](../receivers/he/)</p></div></details>

<details class="era-change" id="era3-v-3-0-4-l3407"><summary><code>-</code> <strong>fixed</strong> · lines 3407–3407: Fixed bug: ERM compiler didn&#x27;t process post-triggers.</summary><div class="era-change-body"><pre>Fixed bug: ERM compiler didn&#x27;t process post-triggers.</pre><p>Related pages: [ERM syntax: ZVSE and ZVSE2](../syntax/)</p></div></details>

</section>
:::

### ERA 3.0.3 {#era3-version-3-0-3}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-0-3-l3414"><summary><code>+</code> <strong>added</strong> · lines 3414–3415: Added command SN:H^art^/art ID/0 (name) or 1 (description)/$text allowing to get/set any artifact name/description without z-variables dependency…</summary><div class="era-change-body"><pre>Added command SN:H^art^/art ID/0 (name) or 1 (description)/$text
    allowing to get/set any artifact name/description without z-variables dependency.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-0-3-l3420"><summary><code>+</code> <strong>added</strong> · lines 3420–3425: Added OnBeforeBattleStackTurn event. It occurs right before OnBattleRegenerationPhase event. Parameters: Stack ID (0..41). Change the first param…</summary><div class="era-change-body"><pre>Added OnBeforeBattleStackTurn event. It occurs right before OnBattleRegenerationPhase event.
    Parameters: Stack ID (0..41). Change the first parameter to give turn to another stack.

    Note, that similar OnBattleStackObtainsTurn event occurs when stack becomes active and is not related to regeneration phase at all.
    Normally OnBattleStackObtainsTurn occurs after OnBattleRegenerationPhase but may also be triggered manually by calling
    464F10 (THISCALL, ecx = CombatManager, Side 0..1, StackInd 0..20).</pre><p>Related pages: [Before a stack turn (OnBeforeBattleStackTurn)](../triggers/onbeforebattlestackturn/) · [Framework events](../framework/events/) · [Passing control to a stack (OnBattleStackObtainsTurn)](../triggers/onbattlestackobtainsturn/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-0-3-l3427"><summary><code>-</code> <strong>fixed</strong> · lines 3427–3428: HE:P without 4-th parameter now works as in WoG 3.58f for compatibility reasons. If hero belongs to current player, teleport sound is played and …</summary><div class="era-change-body"><pre>HE:P without 4-th parameter now works as in WoG 3.58f for compatibility reasons. If hero belongs to current player,
    teleport sound is played and screen redrawn. Otherwise teleportation is silent without visual update.</pre><p>Related pages: [Heroes (HE)](../receivers/he/)</p></div></details>

<details class="era-change" id="era3-v-3-0-3-l3430"><summary><code>-</code> <strong>fixed</strong> · lines 3430–3430: Fixed bug: each reloading reduced ERT strings length by one. Credits: ArnoVanClaire.</summary><div class="era-change-body"><pre>Fixed bug: each reloading reduced ERT strings length by one. Credits: ArnoVanClaire.</pre></div></details>

<details class="era-change" id="era3-v-3-0-3-l3434"><summary><code>*</code> <strong>changed</strong> · lines 3434–3434: IF:N fix was improved. Credits: igrik.</summary><div class="era-change-body"><pre>IF:N fix was improved. Credits: igrik.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-0-3-l3435"><summary><code>*</code> <strong>changed</strong> · lines 3435–3435: Era exported functions with boolean results now return int32 0 or 1 (0 or -1 previously).</summary><div class="era-change-body"><pre>Era exported functions with boolean results now return int32 0 or 1 (0 or -1 previously).</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

</section>
:::

### ERA 3.0.2 {#era3-version-3-0-2}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-0-2-l3440"><summary><code>+</code> <strong>added</strong> · lines 3440–3447: Added new ERM event &#x27;OnAdvMapTileHint&#x27;, allowing to get/set hint for any tile, mouse is currently over. Parameters: x, y, z, object type, object …</summary><div class="era-change-body"><pre>Added new ERM event &#x27;OnAdvMapTileHint&#x27;, allowing to get/set hint for any tile, mouse is currently over.
    Parameters: x, y, z, object type, object subtype. All parameters are given for object entrance.
    Example:

    !?FU(OnAdvMapTileHint); display tile coordinates and original hint
    !#VA(x:x) (y:x) (z:x) (objType:x) (objSubtype:x);
    !!MM:M?(existingHint:z);
    !!MM:M^%(x) %(y) %(z) %(objType) %(objSubtype): %(existingHint)^;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Battle hint text (MM)](../receivers/mm/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-0-2-l3450"><summary><code>+</code> <strong>added</strong> · lines 3450–3450: Restored short !!HE:X6 syntax support and fixed ERM HE:X7 bug: short syntax worked as X7/a/d/0/0/0/0 instead of X7/0/a/d/0/0/0.</summary><div class="era-change-body"><pre>Restored short !!HE:X6 syntax support and fixed ERM HE:X7 bug: short syntax worked as X7/a/d/0/0/0/0 instead of X7/0/a/d/0/0/0.</pre><p>Related pages: [Heroes (HE)](../receivers/he/)</p></div></details>

<details class="era-change" id="era3-v-3-0-2-l3452"><summary><code>-</code> <strong>fixed</strong> · lines 3452–3452: Fixed bug in &quot;era - testlib.erm&quot;: !?FU(et_ExpectError) didn&#x27;t restore error suppression option.</summary><div class="era-change-body"><pre>Fixed bug in &quot;era - testlib.erm&quot;: !?FU(et_ExpectError) didn&#x27;t restore error suppression option.</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework functions](../framework/functions/)</p></div></details>

</section>
:::

### ERA 3.0.1 {#era3-version-3-0-1}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-0-1-l3457"><summary><code>+</code> <strong>added</strong> · lines 3457–3458: Added first ERA ERM tests. Tests library in &quot;Tests/1000 era - testlib.erm&quot; and tests, covering found bugs and part of new functionality in &quot;Tests…</summary><div class="era-change-body"><pre>Added first ERA ERM tests. Tests library in &quot;Tests/1000 era - testlib.erm&quot; and tests, covering found
    bugs and part of new functionality in &quot;Tests/era - tests.erm&quot;.</pre></div></details>

<details class="era-change" id="era3-v-3-0-1-l3460"><summary><code>+</code> <strong>added</strong> · lines 3460–3465: Added new 3 magic constants. All are safe to use inside strings and as parameters: (FILE) expands into current script file name. (LINE) expands t…</summary><div class="era-change-body"><pre>Added new 3 magic constants. All are safe to use inside strings and as parameters:
    (FILE) expands into current script file name.
    (LINE) expands to current line number in script file.
    (CODE) expands to excerpt of escaped current line source code.
    These constants are specially useful for debugging, bug reporting and automated tests. See
    &quot;Tests/era - tests.erm&quot; for examples.</pre><p>Related pages: [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-0-1-l3467"><summary><code>+</code> <strong>added</strong> · lines 3467–3467: Added new constants: TRUE, FALSE, SN_M_* (for SN:M parameters).</summary><div class="era-change-body"><pre>Added new constants: TRUE, FALSE, SN_M_* (for SN:M parameters).</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-0-1-l3469"><summary><code>+</code> <strong>added</strong> · lines 3469–3472: Added new escape sequences for string literals (^...^): &#x27;%\:&#x27; expands into &#x27;;&#x27; (usually forbidden character for literals, marking receiver end). …</summary><div class="era-change-body"><pre>Added new escape sequences for string literals (^...^):
    &#x27;%\:&#x27; expands into &#x27;;&#x27; (usually forbidden character for literals, marking receiver end).
    &#x27;%\&quot;&#x27; expands into &#x27;^&#x27; (usually forbidden character for literals, marking end of literal).
    &#x27;%%&#x27;  expands into &#x27;%&#x27; (used to prevent possible variable interpolation, %%y5 =&gt; %y5, not y5 value).</pre><p>Related pages: [ERM syntax: ZVSE and ZVSE2](../syntax/)</p></div></details>

<details class="era-change" id="era3-v-3-0-1-l3474"><summary><code>+</code> <strong>added</strong> · lines 3474–3485: !!FU/DO receivers can now be really called without arguments. For all WoG 3.58 ERM receivers except SN/MP calling subcommand without parameters a…</summary><div class="era-change-body"><pre>!!FU/DO receivers can now be really called without arguments.
    For all WoG 3.58 ERM receivers except SN/MP calling subcommand without parameters actually passes single
    parameter with 0 value.
    Example:
    !!CM:R; is the same as !!CM:R0;

    This is not suitable for functions, which could rely on arguments counting to implement default parameter values
    and optional parameters.
    From now !!FU:P; passes no parameters and !!FU:P6; passes single parameter.

&#91;!&#93; Old-style ERM macros ($...$) are deprecated, though improved and fully working.
    Note, that macro names are not cleared until game process is restarted, so prefer not to use them at all.</pre><p>Related pages: [Function calls (FU)](../receivers/fu/) · [Mouse-event context (CM)](../receivers/cm/)</p></div></details>

<details class="era-change" id="era3-v-3-0-1-l3487"><summary><code>*</code> <strong>changed</strong> · lines 3487–3487: !!SN:U was renamed to !!SN:V (Vector).</summary><div class="era-change-body"><pre>!!SN:U was renamed to !!SN:V (Vector).</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-0-1-l3489"><summary><code>+</code> <strong>added</strong> · lines 3489–3507: !!SN:M was greatly improved. Negative indexes allow to access elements from the end of array. -1 - the last element -2 - the one before last, etc…</summary><div class="era-change-body"><pre>!!SN:M was greatly improved. Negative indexes allow to access elements from the end of array.
    -1 - the last element
    -2 - the one before last, etc.
    It became easy to access list tail like !!SN:M(arrayId)/-1/^New value^;

    SN:M arrays resizing was improved so, that from now they can be used as lists without performance penalty.
    Memory is allocated by blocks, growing exponentially, so most of the time no allocation is really performed,
    just remembering new number of items.

    Examples:
    ; Create new list with 3 items, stored in saved games. Put its ID in i^heroNames^ global variable.
    !!SN:M(SN_M_AUTO_ID)/3/(SN_M_STR)/(SN_M_STORED)/?i^heroNames^;

    ; Set all items values at once
    !!SN:Vi^heroNames^/0/^Corwin^/^Deo^/^Bers^;

    ; Wait, forgot about &#x27;Salamandre&#x27;, add him too
    !!SN:Mi^heroNames^/d1;              increased list size by 1
    !!SN:Mi^heroNames^/-1/^Salamandre^; and written new item to the end</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-0-1-l3509"><summary><code>+</code> <strong>added</strong> · lines 3509–3510: Updated ERM Editor, based on Sublime Text. &#91;!&#93; !!FU:C is deprecated and not supported anymore. It may be reused in future.</summary><div class="era-change-body"><pre>Updated ERM Editor, based on Sublime Text.
&#91;!&#93; !!FU:C is deprecated and not supported anymore. It may be reused in future.</pre><p>Related pages: [Function calls (FU)](../receivers/fu/)</p></div></details>

<details class="era-change" id="era3-v-3-0-1-l3515"><summary><code>+</code> <strong>added</strong> · lines 3515–3516: All function x-parameters, which were not passed, are now initialised with zeroes. This behavior is suitable for optional arguments. Just don&#x27;t p…</summary><div class="era-change-body"><pre>All function x-parameters, which were not passed, are now initialised with zeroes. This behavior is suitable for
    optional arguments. Just don&#x27;t pass odd arguments in !!FU:P/!!DO:P/etc, and they will have 0 value.</pre><p>Related pages: [Function calls (FU)](../receivers/fu/) · [Repeated function calls (DO)](../receivers/do/)</p></div></details>

<details class="era-change" id="era3-v-3-0-1-l3518"><summary><code>+</code> <strong>added</strong> · lines 3518–3546: Added new syntax to !!FU:A command. Set default values for parameters. !!FU:A#1/&#91;#2.../#3...&#93;; #1 - default value for the first parameter (x1) #2…</summary><div class="era-change-body"><pre>Added new syntax to !!FU:A command. Set default values for parameters.
    !!FU:A#1/&#91;#2.../#3...&#93;;
    #1 - default value for the first parameter (x1)
    #2 - default value for the second parameter...
    The command changes values only if the are not specified during function call.

    Example:
    ; Find object with given type and subtype
    !?FU(acl_FindObj);
    ; Declare two optional parameters
    !#VA / (objType:x) (objSubtype:x);
    ; Provide default -1 value for both parameters
    !!FU:A(NO_OBJ)/(NO_OBJ);
    ...

    Another example with string parameters.
    &#x27;Ptr&#x27; means &#x27;pointer&#x27;, index of z-variable.

    !?FU(acl_ShowMessage);
    !#VA / (messagePtr);

    !!FU:A?(numArgs:y);    get number of passed arguments
    !!VR(message:z):S^OK^; set up default message text
    !!VR(message)&amp;(numArgs)&gt;=(@messagePtr):Sz(messagePtr); override message text with provided value, if it&#x27;s passed

    !!IF:M^%(message)^;    display message

    The last line works, because @messagePtr for the first argument (x1) will return 1.
    This is handy way to check if particular parameter was passed.</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [Function calls (FU)](../receivers/fu/) · [Framework functions](../framework/functions/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-0-1-l3548"><summary><code>+</code> <strong>added</strong> · lines 3548–3577: It&#x27;s proposed to decorate functions declarations in the following variants: ; Bried function description like: ; Hides rectangular area on the ma…</summary><div class="era-change-body"><pre>It&#x27;s proposed to decorate functions declarations in the following variants:

  ; Bried function description like:
  ; Hides rectangular area on the map.
  !?FU(es_HideMapSquare);
  !#VA(x1:x) (y1:x) (x2:x) (y2:x) (level:x); fast declare all parameters without description

  ; Alternative declaration with arguments explained:
  !?FU(es_HideMapSquare);
  !#VA(x1:x); top-left x-coordinate
  !#VA(y1:x); top-left y-coordinate
  !#VA(x2:x); bottom-right x-coordinate
  !#VA(y2:x); bottom-right y-coordinate

  Remember, that everything in !#VA before closing &#x27;;&#x27; and except of (variableName) is simply deleted
  from compiled code.

  For functions with optional arguments it&#x27;s proposed to separate optional arguments from required ones by &#x27;/&#x27;.

  ; Adds monsters stack to hero army. Default quantity is 1.
  !?FU(es_AddMonster);
  !#VA(hero:x) (monType:x) / (monNum:x);
  !!FU:A0/0/1; specify default argument values
  !!HE(hero):C2/(monType)/(monNum)/1;

  Alternatively argument optionality may be specified in its description.
  !?FU(es_AddMonster);
  !#VA(hero:x);    hero ID
  !#VA(monType:x); monster type
  !#VA(monNum:x);  optional. Default: 1</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Heroes (HE)](../receivers/he/) · [Function calls (FU)](../receivers/fu/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-0-1-l3579"><summary><code>-</code> <strong>fixed</strong> · lines 3579–3579: Added missing 1000 era - const.erm and 1000 era - stdlib.erm files to WoG mod.</summary><div class="era-change-body"><pre>Added missing 1000 era - const.erm and 1000 era - stdlib.erm files to WoG mod.</pre></div></details>

<details class="era-change" id="era3-v-3-0-1-l3582"><summary><code>-</code> <strong>fixed</strong> · lines 3582–3582: Fixed bug: ERM must stop evaluating cached receiver parameters after first error.</summary><div class="era-change-body"><pre>Fixed bug: ERM must stop evaluating cached receiver parameters after first error.</pre></div></details>

</section>
:::

### ERA 3.0.0 {#era3-version-3-0-0}

:::erm
<section class="erm-reference era-changelog-group" lang="en">
<details class="era-change" id="era3-v-3-0-0-l3587"><summary><code>+</code> <strong>added</strong> · lines 3587–3825: Introduced advanced ERM precompilation mode, called ERM 2.0 and activated via &quot;ZVSE2&quot; first line signature. Main features: - Named local variable…</summary><div class="era-change-body"><pre>Introduced advanced ERM precompilation mode, called ERM 2.0 and activated via &quot;ZVSE2&quot; first line signature.
  Main features:
    - Named local variables to write human readable code instead of cryptic one.
      Example: !!HE-1:C0/0/?(monType:y)/?(monNum:y) instead of !!HE-1:C0/0/?y23/?y24;

    - Global named constants instead of magic numbers to write self-explaining code:
      Example: !?FU(OnKeyPressed)&amp;x1=(KEY_1) instead of !?FU(OnKeyPressed)&amp;x1=49; what is 49???

    - Strict distinguishing naming for functions, local variables and constants. No way to mix up.
      Example: thisIsVariable, THIS_IS_CONSTANT, ThisIsFunction and era_ThisIsFunctionAgain.

  ==== Named global constants ====
  Constant is named value, that is defined once and never changes. Like 13 (Archangel monster type).
  Constant can be used anywere, where numbers can be used. Era currently supports only integer numeric
  constants, written in all capitals: (MON_ARCHANGEL), (OBJ_MINE), (PLAYER_RED).
  Allowed characters are: &#91;A-Z0-9_&#93;.
  To define a constant use the following instruction !#DC(CONSTANT_NAME) = 777; where 777 is arbitrary number.
  Examples:
  !#DC(PLAYER_BLUE)     = 1;
  !#DC(SKILL_FIRST_AID) = 27;

  To use a constant simply write its name in parentheses:
  !!OW:R(CURRENT_PLAYER)/(RES_GOLD)/d1000; give 1000 gold to current player

  will be compiled to

  !!OW:R-1/6/d1000; give 1000 gold to current player

  --- Naming ---
  Scripts writers must use unique prefix before constant names to prevent names collisions. Any constants without prefix
  may be added to ERA in the future and break your script.
  Example:
  ; for mod Battle Heroes let&#x27;s use prefix &quot;BH_&quot;
  !#DC(BH_ART_RING_OF_POWER) = 160;

  !#DC(BH_CLASS_WARRIOR) = 1;
  !#DC(BH_CLASS_MAGE)    = 2;
  !#DC(BH_CLASS_RANGER)  = 3;

  --- Globality ---
  Constants are global. It means, that one script can use constants of another script. To ensure, that your constants
  are always loaded before other scripts, place them in the script with high priority (ex. &quot;1000 - phoenix consts.erm&quot;).

  --- Standard constants ---
  ERA provides file &quot;1000 - era consts.erm&quot; with many predefined constants, covering most values, mentioned in ERM help.
  Look through it before defining your own constant for secondary skill, monster or player color.


  ==== Named local variables ====
  Each ERM trigger (!?XX before next !?XX) can now declare and use own named local variables, allocated from
  x1..x16, y1..y100, z-1..z-10, e1..e100 sets.
  Named variables are replaced with regular variables during scripts compilation and do not influence the performance at all.
  Example: (day) may be compiled to y5;

  --- Naming ---
  Names of variables must be in so called &quot;camelCase&quot; and contain only &#91;a-zA-Z0-9&#93; characters. They must be wrapped
  in parantheses the same way, as function names are wrapped.
  Example of valid variables: (hero), (monNum), (isAutocombatMode), (specialObject7).

  --- Declaration ---
  Variables must be declared on the first usage: i.e their type (x, y, z, e, v) and array length (for arrays) must be specified.
  If you write &#x27;&#91;some number&#93;&#x27; after variable name, variable will become an array (sequence of variables) with specified length.
  If you write &#x27;:e&#x27; after variable name or array length, it will mean, that variable type is &quot;e&quot; (floating point numbers).

  Examples:
  !!HE-1:N?(hero:y); give some y-variable name &quot;hero&quot; and write current hero ID to it
  !#VA(arts&#91;4&#93;:y);   allocate 4 y-variables with sequential indexes and name the array &quot;arts&quot;

  !#VA instruction is pseudo-command, that is dropped from final compiled code and that can be used to hold variables declarations.
  Example:
  !?FU(acm_Sum);
  ; The function calculates sum of two numbers
  !#VA(first:x) (second:x) (result:x); &#91;bind &quot;first&quot; to x1, &quot;second&quot; to x2, &quot;result&quot; to x3&#93;
  !!VR(result):S(first) +(second);     &#91;calculate result&#93;

  --- Usage ---
  It&#x27;s allowed to specify the same type and array length for variables in every variable usage place, but it&#x27;s not necessary.
  After you declared variable, there is no more any need to write its type/length.
  Example:
  !!HE-1:N?(hero:y);
  !!HE(hero):K1; kill hero with ID in (hero) variable.

  will be compiled to something like that:
  !!HE-1:N?y5;
  !!HEy5:K1;

  --- Arrays ---
  If you need not a single variable, but sequence of variables, for instance to hold &#91;x, y, l&#93; coordinates of objects,
  then you need an array. Specify array length in square brackets right after variable name during declaration.
  !#VA(coords&#91;3&#93;:y); allocate 3 y-variables named &#x27;coords&#x27;

  Items or elements of arrays are zero-indexed and can be accessed by direct index.
  For 3-items array possible indexes are 0, 1, 2.
  Example:
  !!CM:P?(coords&#91;0&#93;)/?(coords&#91;1&#93;)/?(coords&#91;2&#93;);

  will be compiled to something like that:
  !!CM:P?y50/?y51/?y52;

  If you don&#x27;t specify array index, the first array element will be used. It means that
  (test) and (test&#91;0&#93;) have the same sense. Regular variables are considered arrays of length 1.

  --- Negative array indexes ---
  Negative array index means n-th item from the end. -1 will point to the last item, -2 to the one before the last one and so on.
  Example:
  ; allocate array of 10 y-variables and assign the last one value 2000
  !#VA(array&#91;10&#93;:y);
  !!VR(array&#91;-1&#93;):S2000;

  will be compiled to something like that:
  ; allocate y1..y10
  !!VRy10:S2000;

  --- Releasing local variables ---
  If you don&#x27;t need large variable array anymore, but want to declare another big array, then free the previous one.
  Syntax: !#VA(-variableName); will forget about specified variableName, allowing to reuse indexes, allocated for that variable.

  Example:
  !#VA(myArts&#91;100&#93;:y); allocate y1..y100 to hold artifact IDs
  ...;                 use them
  !#VA(-myArts);       release &#x27;myArts&#x27; name and y1..y100 indexes.
  !#VA(coords&#91;3&#93;:y);   allocate y1..y3 as &#x27;coords&#x27; variable

  --- Getting variable address (real index) ---
  It&#x27;s often necessary to get real index of variable or even array element. When you want to output &quot;2&quot; instead of
  y2, use address operator &#x27;@&#x27;.

  Example:
  ; Initialize array with 3 artifacts
  !#VA(arts&#91;3&#93;:y);
  !!VR(arts):C(ART_SKULL_HELMET)/(ART_HELM_OF_CHAOS)/(ART_DEAD_MANS_BOOTS);

  ; Select one artifact randomly
  ; same as R0/0/2, generates random number in 0..2 range and assigns it to artPtr variable.
  !!VR(artPtr:y):R0/(@arts)/(@arts&#91;-1&#93;);

  ; Give artifact to hero
  !!HE-1:Ay(artPtr);

  will be compiled to something like that:

  !!VRy1:C20/21/56;
  !!VRy4:R0/0/2;
  !!HE-1:Ayy4;

  Address operator &quot;@&quot; compiles to real (final) variable index. For instance, for array &quot;test&#91;10&#93;:y&quot; mapped to y50..y59
  (@test&#91;1&#93;) will compile to &quot;51&quot;.

  Example of declaring array of 10 y-variables and initializing all of them with -1.
  !#VA(monTypes&#91;10&#93;:y);

  !!re i/(@monTypes)/(@monTypes&#91;-1&#93;):; repeat from i = first array index to i = last array index
    !!VRyi:S-1; set -1 for current array item
  !!en:;

  In other programming languages variables, holding other variables addresses/indexes are usually called &quot;pointers&quot;
  and abbreviated as &quot;ptr&quot; or &quot;Ptr&quot;. We will rewrite the previous example with named variable in place of quick &quot;i&quot; var
  just for learning purposes.

  !!re (monTypePtr:y)/(@monTypes)/(@monTypes&#91;-1&#93;):; repeat from (monTypePtr) = first array index to (monTypePtr) = last array index
    !!VRy(monTypePtr):S-1; set -1 for current array item
  !!en:;

  --- Naming function arguments ---
  Indexes for named local variables are allocated starting from the smallest possible value.
  It means, that we can name even function arguments if we declare them in the same order, as arguments will be passed.
  Example:

  !?FU(BH_GetHeroSecSkill);
  !#VA(hero:x) (skill:x) (result:x); now hero = x1, skill = x2, result = x3
  !!HE(hero):S(skill)/?(result);

  !?FU(...); some event
  !!FU(BH_GetHeroSecSkill):P(HERO_XERON)/(SKILL_FIRST_AID)/?(xeronFirstAidLevel:y); so what&#x27;s the level of First Aid skill Xeron has? )

  --- Redeclaration ---
  If you need to declare variable in both branches of if-then block, specify type/length in both of them.

  !!if&amp;(day)&gt;90:;
    !!VR(price:y):S(day) *100;
    ...
  !!el:;
    !!VR(price:y):S(day) *(difficultyLevel) +300;
    ...
  !!en:;

  --- Reusing same name in other trigger ---
  Variable names are local to nearest trigger only. New trigger starts with no declared variables.
  Example:

  !?FU(OnHeroScreenMouseClick);
  !!CM:F?(flags:y); flags = y1

  !?FU(OnHeroScreenMouseClick);
  !#VA(flags&#91;23&#93;:e); flags is array, binded to e1..e23

  --- Interpolation ---
  To substitute local variables in string literals use %(varName) syntax. Example:
  !!VR(price:y):S600;
  !!VR(heroName:z):S^Robin Hood^;
  !!IF:Q2/^Would you like to hire %(heroName) for %(price) gold only?^;

  %y(varName) syntax is also supported and compiles to something like %yy5.


  ==== Named functions ====
  Function names must consist of &#91;A-Za-z0-9_&#93; characters only, start with letter and contain at least
  single lower case letter (a-z).
  There are two allowed naming methods:
  1) Start function with capital letter. (CalcHeroArmyPower), (ShowUpgradeDialog).
  ERA reserves right to declare prefixless functions, starting with &quot;On&quot; for events. This method is not
  recommended, due to possible names collisions in different mods. Two mods may declare functions
  will the same names and thus produce hard to debug bugs.

  2) Start function with any case unique prefix with &#x27;_&#x27; character. Prefix is usually mod abbreviation.
  For instance, for &quot;Dwellings Extended&quot; mod the following functions are used:
  !?FU(dex_SetDwellingSlotByTownType);
  !?FU(dex_DwellingPopulation);
  ...

  --- Generating new events ---
  You can call function, even if it has no handlers. For instance, in Upgrade All Creatures mod you
  want to allow other scripts to be able to notify, what monster can be upgraded to in particular town.
  Just call not existing function like !!FU(auc_OnDetermineMonsterUpgrade):P... in your script with all
  necessary parameters and other scripts will be able to write new event handlers like:

  !?FU(auc_OnDetermineMonsterUpgrade);
  ...

  --- Passing function as handlers or callbacks ---
  You can use function as ordinary constant, compiled to number. You can assign it to variable or pass to
  another function.
  !!VR(spellHandler:y):S(newmagic_DesintegrationSpellHandler);
  !!FU(spellHandler):P;

  will compile to something like that

  !!VRy20:S95003;
  !!FUy20:P;</pre><p>Related pages: [Heroes (HE)](../receivers/he/) · [Function handler (FU)](../triggers/fu/) · [Players (OW)](../receivers/ow/) · [Variables and expressions (VR)](../receivers/vr/) · [Mouse-event context (CM)](../receivers/cm/) · [Flags, messages and choices (IF)](../receivers/if/) · [Key press (OnKeyPressed)](../triggers/onkeypressed/) · [Framework events](../framework/events/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3827"><summary><code>+</code> <strong>added</strong> · lines 3827–3832: Added 1000 era - stdlib.erm script, which will contain safe for all extra ERM functionality. Currently !?FU(OnEvenyDay) event is enhanced. Its ha…</summary><div class="era-change-body"><pre>Added 1000 era - stdlib.erm script, which will contain safe for all extra ERM functionality.
    Currently !?FU(OnEvenyDay) event is enhanced. Its handlers will receive 5 parameters:

    !?FU(OnEveryDay);
    !#VA(day:x1) (weekDay:x) (once:x) (owner:x) (isAi:x);
    !!IF:M^%(day) %(weekDay) %(once) %(owner) %(isAi)^;</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Start of a game day (OnEveryDay)](../triggers/oneveryday/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/) · [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3834"><summary><code>+</code> <strong>added</strong> · lines 3834–3837: Added 1000 era - consts.erm script with lots of constants to be used in ERM 2.0 scripts. ERM Editor, based on Sublime Text, supports constants au…</summary><div class="era-change-body"><pre>Added 1000 era - consts.erm script with lots of constants to be used in ERM 2.0 scripts.
    ERM Editor, based on Sublime Text, supports constants autocompletion.
    Remember, that constants without mod name prefix are reserved for ERA.
    Prefer BH_GOLD_PER_VICTORY to GOLD_PER_VICTORY for Battle Heroes mod, for instance.</pre><p>Related pages: [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3839"><summary><code>+</code> <strong>added</strong> · lines 3839–3843: Floating point variables (e-variables) are passed to ERM commands as raw 4 bytes value, treated by most commands as integer, which may cause many…</summary><div class="era-change-body"><pre>Floating point variables (e-variables) are passed to ERM commands as raw 4 bytes value,
    treated by most commands as integer, which may cause many bugs, unless you know, what you are doing.
    The exception is !!VR:S command, allowing transparent conversion integer-float. To copy float value,
    stored in raw format in integer variable to e-variable and vice versa use !!VR:C command. It acts same
    as VR:S, but without data conversion.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3845"><summary><code>+</code> <strong>added</strong> · lines 3845–3851: New command !!VR$1:S#2/#3. Convert float to integer using specific rounding mode. $1 - integer variable. #2 - float variable #3 - rounding mode: …</summary><div class="era-change-body"><pre>New command !!VR$1:S#2/#3. Convert float to integer using specific rounding mode.
    $1 - integer variable.
    #2 - float variable
    #3 - rounding mode:
      &lt; 0 for floor operation (round towards negative infinity),
      0 for normal round (round half away from zero),
      &gt; 0 for ceil operation (round towards positive infinity).</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3853"><summary><code>+</code> <strong>added</strong> · lines 3853–3857: !!VR: +/-/*/:/% convert both arguments to float if any is float before calculation and convert back to base var type on return. Thus !!VR(koef:e)…</summary><div class="era-change-body"><pre>!!VR: +/-/*/:/% convert both arguments to float if any is float before calculation and convert back
    to base var type on return.
    Thus
    !!VR(koef:e):S25 :10; koef = 2.5
    !!VR(gold:y):S2 *koef; gold = 5, not 4</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3859"><summary><code>+</code> <strong>added</strong> · lines 3859–3862: New command !!VR$1:~#2 Unsets bits #2 in $1 integer variable. Example: !!VR(flags):~17; unset bits/flags 1 + 16 from (flags) variable.</summary><div class="era-change-body"><pre>New command !!VR$1:~#2
    Unsets bits #2 in $1 integer variable.
    Example:
    !!VR(flags):~17; unset bits/flags 1 + 16 from (flags) variable.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3864"><summary><code>+</code> <strong>added</strong> · lines 3864–3869: New command !!VR$1:Z#2. Creates trigger local temporary z-variable with given contents and assigns its index to integer variable. $1 - integer va…</summary><div class="era-change-body"><pre>New command !!VR$1:Z#2. Creates trigger local temporary z-variable with given contents and assigns its index to integer variable.
    $1 - integer variable.
    #2 - any string.

    The command can be used to create temporal z-variables to change, for example, artifact description,
    show message and restore description.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3871"><summary><code>+</code> <strong>added</strong> · lines 3871–3888: ^....^ literal in any ERM command is interpolated and replaced by temporal z-variable index before receiver execution. This z-variable is release…</summary><div class="era-change-body"><pre>^....^ literal in any ERM command is interpolated and replaced by temporal z-variable index before receiver
    execution. This z-variable is released right after receiver is executed.
    Don&#x27;t use string literals in WoG 3.58 hint/description setting commands, because such descriptions have short life time.

    From now it&#x27;s possible to pass strings to functions.

    !?FU(ES_Ask);
    ; Shows question dialog with caption. Returns boolean (1 on success and 0 on failure).
    !#VA(captionPtr:x) (questionPtr:x) (result:x);
    !!IF:Q1/^{%z(captionPtr)}

    %z(questionPtr)^;
    !!VR(result):S0;
    !!VR(result)&amp;1:S1;

    !?OB(OBJ_TOWN)/(ANY_OBJ);
    !!FU(ES_Ask):P^Sphinx asks you:^/^Do you really want to die, fighting my guards?^/?(answer:y);
    !!HE(CURRENT_HERO)&amp;(answer)=1:K1; let him die )))</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Variables and expressions (VR)](../receivers/vr/) · [Object visits (OB)](../triggers/ob/) · [Heroes (HE)](../receivers/he/) · [Framework functions](../framework/functions/) · [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3890"><summary><code>+</code> <strong>added</strong> · lines 3890–3897: Only regular ERT variables are interpolated automatically. Regular z-variables and temporal ert variables are not interpolated in receivers. It m…</summary><div class="era-change-body"><pre>Only regular ERT variables are interpolated automatically.
    Regular z-variables and temporal ert variables are not interpolated in receivers.
    It means, that !!VRz2:S^%%y5^; z2 is now really &quot;%y5&quot;

    Previously interpolation would be performed again and again recursively, converting %y5 into y5 value like 0.
    and even later using z2 in any command would run interpolation again.

    !!IF:M1/z2; will display &quot;%y5&quot;, not y5 value.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [Variables, strings and arrays](../variables/) · [ERM syntax: ZVSE and ZVSE2](../syntax/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3900"><summary><code>+</code> <strong>added</strong> · lines 3900–3900: VR:R/T now both support syntaxes with 1/2/3 arguments.</summary><div class="era-change-body"><pre>VR:R/T now both support syntaxes with 1/2/3 arguments.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3901"><summary><code>+</code> <strong>added</strong> · lines 3901–3901: VR:T uses Mersenne Twister qualitive generator, but it&#x27;s not synchronized in multiplayer.</summary><div class="era-change-body"><pre>VR:T uses Mersenne Twister qualitive generator, but it&#x27;s not synchronized in multiplayer.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3902"><summary><code>+</code> <strong>added</strong> · lines 3902–3902: VR:M1. -1 as length means &quot;till string end&quot;.</summary><div class="era-change-body"><pre>VR:M1. -1 as length means &quot;till string end&quot;.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3904"><summary><code>+</code> <strong>added</strong> · lines 3904–3905: VR:M2 does not store token index in global variable anymore. Token index, that was ignored earlier, works now as expected. Token delimiters are &#91;…</summary><div class="era-change-body"><pre>VR:M2 does not store token index in global variable anymore. Token index, that was ignored earlier, works now as expected.
   Token delimiters are &#91;#1..#31, &#x27; &#x27;, &#x27;,&#x27;, &#x27;.&#x27;&#93;. Don&#x27;t use for huge text, because performance is O(n^2), where n is tokens number.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3907"><summary><code>+</code> <strong>added</strong> · lines 3907–3907: VR:M3 Base/radix is enforced to be in 2..16 range.</summary><div class="era-change-body"><pre>VR:M3 Base/radix is enforced to be in 2..16 range.</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3909"><summary><code>+</code> <strong>added</strong> · lines 3909–3935: ERM interpolation (expanding variables starting with % in string literals ^...^ and ERT strings) was fully rewritten. Upper case registry for old…</summary><div class="era-change-body"><pre>ERM interpolation (expanding variables starting with % in string literals ^...^ and ERT strings) was fully rewritten.
    Upper case registry for old ERM variables is supported, but deprecated.
    %X1 is good, but %x1 is better.

    All new s^...^, i^...^ and named local variables are supported.
    Indirect references is supported.

    %s(named global variable)
    %i(named global variable)
    %xy7
    %zi^named global variable^
    %z(namedLocalVar)
    %(namedLocalVar)

    Quick vars are supported:
    %i %g %k

    Interpolation of %Vf...t is the same as in WoG 3.58, but %vf...t means real v-indexing
    %vi means v-var with i-index.
    %f means quick &#x27;f&#x27; var.
    %i means quick &#x27;i&#x27; var.

    %F5 means flag 5
    %Fx16 means flag with x16 index

    Function IDs and constants can be interpolated in the same way, as named local variables:
    %(CONST_NAME), %(era_FuncName), %(money), %y(moneyPtr)</pre><p>Related pages: [Variables, strings and arrays](../variables/) · [ERM syntax: ZVSE and ZVSE2](../syntax/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3937"><summary><code>+</code> <strong>added</strong> · lines 3937–3937: IF:M# now works with any string</summary><div class="era-change-body"><pre>IF:M# now works with any string</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3938"><summary><code>+</code> <strong>added</strong> · lines 3938–3938: IF:N1/# now works with any string, not z1 only.</summary><div class="era-change-body"><pre>IF:N1/# now works with any string, not z1 only.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3939"><summary><code>+</code> <strong>added</strong> · lines 3939–3939: IF:N# now works with any string.</summary><div class="era-change-body"><pre>IF:N# now works with any string.</pre><p>Related pages: [Flags, messages and choices (IF)](../receivers/if/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3940"><summary><code>+</code> <strong>added</strong> · lines 3940–3940: BA:B now can work with any string and integer.</summary><div class="era-change-body"><pre>BA:B now can work with any string and integer.</pre><p>Related pages: [Battle configuration (BA)](../receivers/ba/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3942"><summary><code>+</code> <strong>added</strong> · lines 3942–3942: Call SN:F^GenerateDebugInfo^ to generate Debug directory contents, the same way as F11 does.</summary><div class="era-change-body"><pre>Call SN:F^GenerateDebugInfo^ to generate Debug directory contents, the same way as F11 does.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3944"><summary><code>+</code> <strong>added</strong> · lines 3944–3945: Exported &quot;NameTrigger&quot; function (void NameTrigger(int TriggerId, const char* Name)), allowing plugins to give name to any ERM trigger, which can …</summary><div class="era-change-body"><pre>Exported &quot;NameTrigger&quot; function (void NameTrigger(int TriggerId, const char* Name)), allowing plugins to
    give name to any ERM trigger, which can be used in ERM like !?FU(OnYourNewEvent).</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3947"><summary><code>+</code> <strong>added</strong> · lines 3947–3948: Updated &quot;wog native dialogs&quot; plugin by igrik. From now it&#x27;s possible to select item in message dialogs using mouse double click.</summary><div class="era-change-body"><pre>Updated &quot;wog native dialogs&quot; plugin by igrik. From now it&#x27;s possible to select item in message dialogs
    using mouse double click.</pre></div></details>

<details class="era-change" id="era3-v-3-0-0-l3954"><summary><code>+</code> <strong>added</strong> · lines 3954–3955: Rewritten ert-strings storage implementation. Removed limit on 50000 strings. Increased add/delete operations performance (from linear search to …</summary><div class="era-change-body"><pre>Rewritten ert-strings storage implementation. Removed limit on 50000 strings. Increased add/delete operations
    performance (from linear search to binary tree search). Savegames format was changed.</pre></div></details>

<details class="era-change" id="era3-v-3-0-0-l3957"><summary><code>+</code> <strong>added</strong> · lines 3957–3961: Added VR:C alternative for SN:M arrays. New command !!SN:V#1/#2/$3...up to $21 allows to set/check/get/modify many items of dynamic array (workin…</summary><div class="era-change-body"><pre>Added VR:C alternative for SN:M arrays. New command !!SN:V#1/#2/$3...up to $21 allows to set/check/get/modify
    many items of dynamic array (working with Vector).
    #1 - SN:M array ID.
    #2 - starting index
    $3... - items at starting index, starting index + 1, starting index + 2, etc.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3963"><summary><code>+</code> <strong>added</strong> · lines 3963–3964: Added new command !!VR:R0/#min/#max, generating random value in specified range and assigning its to variable. Example: !!VRy1:R0/100/300; set y1…</summary><div class="era-change-body"><pre>Added new command !!VR:R0/#min/#max, generating random value in specified range and assigning its to variable.
    Example: !!VRy1:R0/100/300; set y1 to random value in 100..300 range</pre><p>Related pages: [Variables and expressions (VR)](../receivers/vr/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3966"><summary><code>*</code> <strong>changed</strong> · lines 3966–3967: The following exported functions now return 4-bytes LONGBOOL value, 0 for false, -1 (0xFFFFFFFF) for true. &quot;ReadStrFromIni&quot;, &quot;WriteStrToIni&quot;, &quot;Sa…</summary><div class="era-change-body"><pre>The following exported functions now return 4-bytes LONGBOOL value, 0 for false, -1 (0xFFFFFFFF) for true.
    &quot;ReadStrFromIni&quot;, &quot;WriteStrToIni&quot;, &quot;SaveIni&quot;, &quot;PatchExists&quot;, &quot;PluginExists&quot;, &quot;Ask&quot;.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3969"><summary><code>+</code> <strong>added</strong> · lines 3969–3971: Added &quot;1000 - era consts.erm&quot; script to WoG mod with standard Era constants, including players, player bits, heroes, resources, objects, monsters…</summary><div class="era-change-body"><pre>Added &quot;1000 - era consts.erm&quot; script to WoG mod with standard Era constants, including players,
    player bits, heroes, resources, objects, monsters, artifacts, spells. The file contents may be corrected
    and widened in the future. All constants were registered in Erm Editor, based on Sublime Text.</pre><p>Related pages: [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3973"><summary><code>+</code> <strong>added</strong> · lines 3973–3974: Added &quot;1000 - era stdlib.erm&quot; script with universal ERM functions and events. Currently &quot;OnEveryDay&quot; event is enhanced with the following x-argum…</summary><div class="era-change-body"><pre>Added &quot;1000 - era stdlib.erm&quot; script with universal ERM functions and events. Currently &quot;OnEveryDay&quot;
    event is enhanced with the following x-arguments: day, week day, once(0..1), owner (color), isAi (0..1).</pre><p>Related pages: [Start of a game day (OnEveryDay)](../triggers/oneveryday/) · [Framework events](../framework/events/) · [ERM triggers and events](../triggers/) · [Introduction to ERM](../start/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3976"><summary><code>*</code> <strong>changed</strong> · lines 3976–3978: Fixed WoG bug with tactics detection on the very first round. Do not use BU:R in !?BR or !?FU(OnCombatRound) for zero round, because a few struct…</summary><div class="era-change-body"><pre>Fixed WoG bug with tactics detection on the very first round. Do not use BU:R in !?BR or !?FU(OnCombatRound) for zero round,
    because a few structures are not initialized at this moment and random crash may occur. First round code was moved after
    combat theme initialization and tactics popup message appearance.</pre><p>Related pages: [Battle rounds (BR)](../triggers/br/) · [Function handler (FU)](../triggers/fu/) · [Battlefield operations (BU)](../receivers/bu/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3980"><summary><code>+</code> <strong>added</strong> · lines 3980–3980: All *.ers files are loaded without name/quantity constraints. Previously only script00.ers..script99.ers were processed.</summary><div class="era-change-body"><pre>All *.ers files are loaded without name/quantity constraints. Previously only script00.ers..script99.ers were processed.</pre></div></details>

<details class="era-change" id="era3-v-3-0-0-l3982"><summary><code>+</code> <strong>added</strong> · lines 3982–3983: HE:P command behavior was fixed. Teleport function with sound is called only if any coordinate was really changed. Advanced d-modifiers are suppo…</summary><div class="era-change-body"><pre>HE:P command behavior was fixed. Teleport function with sound is called only if any coordinate
    was really changed. Advanced d-modifiers are supported for the first three parameters.</pre><p>Related pages: [Heroes (HE)](../receivers/he/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3985"><summary><code>+</code> <strong>added</strong> · lines 3985–3990: HE:C0 command was rewritten. -1 and -2 values for creature type are not treated as &quot;upgrade&quot;/&quot;degrade&quot; anymore. Command supports any d-modifiers …</summary><div class="era-change-body"><pre>HE:C0 command was rewritten.
    -1 and -2 values for creature type are not treated as &quot;upgrade&quot;/&quot;degrade&quot; anymore. Command supports any d-modifiers now.
    Exp. modifier parameter is now SET-only. Previosly !!HE:C0/0/?y1/?y2/d5000/2 would not increase slot experience.
    In fact, any GET syntax used to make ERM engine ignore stack experience at all. This bug was fixed.
    Creature Type &lt; 0 or Number &lt;= 0 will be normalized to Type -1, Number 0 automatically.
    Note, that in all cases the returned stack experience value is the one before applying any changes.</pre><p>Related pages: [Heroes (HE)](../receivers/he/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3992"><summary><code>+</code> <strong>added</strong> · lines 3992–3993: Rewritten HE:X command to accept any number of parameters and understand any d-modifiers. Example: !!HE-1:X0/27 Xd1; become master of gold dragon…</summary><div class="era-change-body"><pre>Rewritten HE:X command to accept any number of parameters and understand any d-modifiers.
    Example: !!HE-1:X0/27 Xd1; become master of gold dragons</pre><p>Related pages: [Heroes (HE)](../receivers/he/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l3995"><summary><code>+</code> <strong>added</strong> · lines 3995–4005: Introduces many new d-modifiers for all ERM commands, except for GE:E/N, LE:E/N. d+# - integer addition d-# - integer substraction d*# - integer …</summary><div class="era-change-body"><pre>Introduces many new d-modifiers for all ERM commands, except for GE:E/N, LE:E/N.
    d+# - integer addition
    d-# - integer substraction
    d*# - integer multiplication
    d:# - integer division
    d|# sets bits from # (bitwise OR operation)
    d&amp; leaves only # bits, if any (bitwise AND operation)
    d~ unsets bits, specified in #. d~17 unsets bits 1 and 16
    d%# calculates division modulo. 10%4 = 2, for instance.
    d&lt;&lt;# shifts original value bits to the left by # positions (bitwise logical shift left).
    d&gt;&gt;# shifts original value bits to the right by # positions (bitwise logical shift right).</pre><p>Related pages: [Global events (GE)](../receivers/ge/) · [Local map events (LE)](../receivers/le/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l4007"><summary><code>+</code> <strong>added</strong> · lines 4007–4016: Function parameters (FU:P, DO:P), which were passed using GET-syntax, are now initialized with original variable value. The behavior is similar t…</summary><div class="era-change-body"><pre>Function parameters (FU:P, DO:P), which were passed using GET-syntax, are now initialized with
    original variable value. The behavior is similar to pass-by-reference in other programming languages.
    Example:
    !?FU(Add3):;
    ; (value:x)
    !!VR(value:x):+3;

    !?CM0;
    !!VR(numHeads:y):S10;
    !!FU(Add3):P?(numHeads:y); 10 is passed to function as the first argument, 13 is result</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Variables and expressions (VR)](../receivers/vr/) · [Mouse clicks (CM)](../triggers/cm/) · [Function calls (FU)](../receivers/fu/) · [Repeated function calls (DO)](../receivers/do/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l4018"><summary><code>+</code> <strong>added</strong> · lines 4018–4036: Enhanced !!RD:I with new named parameters syntax. !!RD:I^parameter name^/?$parameter_value; ============================== Featured parameters: =…</summary><div class="era-change-body"><pre>Enhanced !!RD:I with new named parameters syntax.
    !!RD:I^parameter name^/?$parameter_value;
    ============================== Featured parameters: ==============================
    ^dlgId^        - Unique recruit dialog ID. Used to distinguish between nested dialogs (yep, it&#x27;s possible). Reusable.
    ^townId^       - ID of town, for which dialog is opened or -1.
    ^dwellingId^   - ID of town dwelling, for which dialog is opened or -1. 0..6 non upgraded, 7..13 for upgraded.
                     Horde buildings (+X population) are treated as dwellings, they influence.
    ^slot^         - Active logical slot index.
    ^cost^         - Cost of single monster in current slot in gold.
    ^resource^     - Special resource for monster in current slot.
    ^resourceCost^ - Cost of single monster in current slot in special resource.
    ^quantity^     - Number of monsters, currently selected for recruitment.
    ^maxQuantity^  - Maximal number of monsters, the player can afford.

    Example:
    !?FU(OnRecruitDlgMouseClick);
    !!RD:I^dlgId^/?(dlgId:y) I^townId^/?(townId:y) I^dwellingId^/?(dwellingId:y) I^slot^/?(slot:y) I^cost^/?(cost:y);
    !!RD:I^resource^/?(resource:y) I^resourceCost^/?(resourceCost:y) I^quantity^/?(quantity:y) I^maxQuantity^/?(maxQuantity:y);
    !!IF:M^(dlgId:y) (townId:y) (dwellingId:y) (slot:y) (cost:y) (resource:y) (resourceCost:y) (quantity:y) (maxQuantity:y)^;</pre><p>Related pages: [Creature recruitment (RD)](../receivers/rd/) · [Function handler (FU)](../triggers/fu/) · [Flags, messages and choices (IF)](../receivers/if/) · [Recruitment mouse click (OnRecruitDlgMouseClick)](../triggers/onrecruitdlgmouseclick/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l4038"><summary><code>+</code> <strong>added</strong> · lines 4038–4040: Enhanced !!UN:C command. It supports all d-modifiers now. New syntax with offset from address is available: !!UN:C#addr/#offset/#size/$value; Era…</summary><div class="era-change-body"><pre>Enhanced !!UN:C command. It supports all d-modifiers now. New syntax with offset from address is available:
    !!UN:C#addr/#offset/#size/$value;
    Era always calls GetRealAddr for #addr, thus !!UN:C supports all extended/relocated game structures.</pre><p>Related pages: [General game operations (UN)](../receivers/un/) · [UN:C — memory access](../un-c/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l4042"><summary><code>+</code> <strong>added</strong> · lines 4042–4043: WoG interface and WoG campaigns were extracted to appropriate standalone mods. ERA is now mostly Vanilla game with enhanced ERM engine and other …</summary><div class="era-change-body"><pre>WoG interface and WoG campaigns were extracted to appropriate standalone mods. ERA is now mostly Vanilla game with
    enhanced ERM engine and other modding capabilities.</pre></div></details>

<details class="era-change" id="era3-v-3-0-0-l4045"><summary><code>+</code> <strong>added</strong> · lines 4045–4045: Added !!BM:Z?$addr command to get battle stack structure address.</summary><div class="era-change-body"><pre>Added !!BM:Z?$addr command to get battle stack structure address.</pre><p>Related pages: [Battle stack (BM)](../receivers/bm/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l4046"><summary><code>+</code> <strong>added</strong> · lines 4046–4046: Added !!HE:Z?$addr command to get hero structure address.</summary><div class="era-change-body"><pre>Added !!HE:Z?$addr command to get hero structure address.</pre><p>Related pages: [Heroes (HE)](../receivers/he/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l4047"><summary><code>+</code> <strong>added</strong> · lines 4047–4047: Introduced ERM 2.0 support for scripts, beginning with &#x27;ZVSE2&#x27;.</summary><div class="era-change-body"><pre>Introduced ERM 2.0 support for scripts, beginning with &#x27;ZVSE2&#x27;.</pre><p>Related pages: [Introduction to ERM](../start/) · [ERM syntax: ZVSE and ZVSE2](../syntax/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l4048"><summary><code>+</code> <strong>added</strong> · lines 4048–4048: Doubled stack size for h3era.exe executable to allow trigger depth level up to 150, but better avoid such depth.</summary><div class="era-change-body"><pre>Doubled stack size for h3era.exe executable to allow trigger depth level up to 150, but better avoid such depth.</pre></div></details>

<details class="era-change" id="era3-v-3-0-0-l4053"><summary><code>+</code> <strong>added</strong> · lines 4053–4054: Added new plugins events &quot;OnAfterLoadLods&quot;, occured right after lods/pacs are loaded and &quot;OnAfterLoadMedia&quot;, occured when lod/pacs/snd/vids are l…</summary><div class="era-change-body"><pre>Added new plugins events &quot;OnAfterLoadLods&quot;, occured right after lods/pacs are loaded and &quot;OnAfterLoadMedia&quot;, occured
    when lod/pacs/snd/vids are loaded.</pre><p>Related pages: [Framework events](../framework/events/) · [ERM triggers and events](../triggers/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l4056"><summary><code>*</code> <strong>changed</strong> · lines 4056–4056: ERA is recommended to be installed over Heroes 3 Complete only. Removed resources, which are already present in Complete lods.</summary><div class="era-change-body"><pre>ERA is recommended to be installed over Heroes 3 Complete only. Removed resources, which are already present in Complete lods.</pre></div></details>

<details class="era-change" id="era3-v-3-0-0-l4058"><summary><code>-</code> <strong>fixed</strong> · lines 4058–4059: Restored functionality of Data\Redirections\Missing\*.json files, which are used to setup redirections for missing resources only.</summary><div class="era-change-body"><pre>Restored functionality of Data\Redirections\Missing\*.json files, which are used to setup redirections
    for missing resources only.</pre></div></details>

<details class="era-change" id="era3-v-3-0-0-l4061"><summary><code>+</code> <strong>added</strong> · lines 4061–4061: ERM quick vars (f..t) are now local to triggers. Use them safely.</summary><div class="era-change-body"><pre>ERM quick vars (f..t) are now local to triggers. Use them safely.</pre><p>Related pages: [Variables, strings and arrays](../variables/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l4063"><summary><code>+</code> <strong>added</strong> · lines 4063–4063: Update ERM Editor.</summary><div class="era-change-body"><pre>Update ERM Editor.</pre></div></details>

<details class="era-change" id="era3-v-3-0-0-l4064"><summary><code>+</code> <strong>added</strong> · lines 4064–4064: Rewritten core of ERM engine. Greatly improved old macro support ($macronam$). Just for perfection.</summary><div class="era-change-body"><pre>Rewritten core of ERM engine. Greatly improved old macro support ($macronam$). Just for perfection.</pre></div></details>

<details class="era-change" id="era3-v-3-0-0-l4074"><summary><code>+</code> <strong>added</strong> · lines 4074–4084: Added new event &quot;OnDetermineMonInfoDlgUpgrade&quot;, occured, when game determines wether to show upgrade button in monster info dialog. Parameters: M…</summary><div class="era-change-body"><pre>Added new event &quot;OnDetermineMonInfoDlgUpgrade&quot;, occured, when game determines wether to show upgrade button
    in monster info dialog. Parameters: MonType, UpgradedType or -1, Town ID or -1, Hero ID or -1.
    -1 for UpgradedType means no upgrade button (because of wrong town type or appropriate building being not built, or monster having no upgrade).
    You can change this value to allow universal Jelu-like behavior or any upgrade system.
    Example:

    ZVSE2

    !?FU(OnDetermineMonInfoDlgUpgrade);
    !#VA(monType:x) (upgType:x) (town:x) (hero:x);
    !!VR(upgType):S(MON_GOLD_DRAGON); allow upgrade anything into Gold Dragons</pre><p>Related pages: [Function handler (FU)](../triggers/fu/) · [Variables and expressions (VR)](../receivers/vr/) · [Choosing a creature upgrade (OnDetermineMonInfoDlgUpgrade)](../triggers/ondeterminemoninfodlgupgrade/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/) · [ERM triggers and events](../triggers/) · [ERM syntax: ZVSE and ZVSE2](../syntax/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l4088"><summary><code>+</code> <strong>added</strong> · lines 4088–4088: SN:D may be used now in battle, being equal to BU:R.</summary><div class="era-change-body"><pre>SN:D may be used now in battle, being equal to BU:R.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [Battlefield operations (BU)](../receivers/bu/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l4090"><summary><code>+</code> <strong>added</strong> · lines 4090–4119: Added support for trigger local dynamic arrays. !!SN:M-1/#/#/-1 will allocate new dynamic array with ID, that will be automatically released afte…</summary><div class="era-change-body"><pre>Added support for trigger local dynamic arrays. !!SN:M-1/#/#/-1 will allocate new dynamic array
    with ID, that will be automatically released after current trigger is exited. Thus no
    corresponding !!SN:M# is necessary to release this temporary array. It can be used, for instance,
    for large calculations or to pass string arguments to function.

    Example:
    !?FU(OnAdventureMapRightMouseClick);
    !!SN:M-1/4/1/-1;        &#91;allocate 4 strings array (-1 = auto ID, 4 = 4 items, 1 = of string type, -1 = local to current trigger)&#93;
    !!VR(dlgStrings:y):Sv1; &#91;save array ID&#93;

    ; Setup strings
    !!SN:M(dlgStrings)/0/^Select commander bonus:^;
    !!SN:M(dlgStrings)/1/^1) Attack^;
    !!SN:M(dlgStrings)/2/^2) Speed^;
    !!SN:M(dlgStrings)/3/^3) Health^;

    !!FU(PM_ShowDialog):P(dlgStrings); &#91;pass 4 string to dialog showing function&#93;
    ; here array with (dlgStrings) ID will be automatically freed, same as SN:M(dlgStrings);

    !?FU(PM_ShowDialog);
    ; (dlgStrings:x) - dynamic array of 4 strings
    ; (items&#91;3&#93;:z)
    !!SN:M(dlgStrings)/0/?(caption:z);
    !!SN:M(dlgStrings)/1/?(items&#91;0&#93;);
    !!SN:M(dlgStrings)/2/?(items&#91;1&#93;);
    !!SN:M(dlgStrings)/3/?(items&#91;2&#93;);
    !!IF:M^{(caption)}
    (items&#91;0&#93;)
    (items&#91;1&#93;)
    (items&#91;2&#93;)^;</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/) · [Function handler (FU)](../triggers/fu/) · [Variables and expressions (VR)](../receivers/vr/) · [Flags, messages and choices (IF)](../receivers/if/) · [Framework events](../framework/events/) · [Framework functions](../framework/functions/)</p></div></details>

<details class="era-change" id="era3-v-3-0-0-l4121"><summary><code>-</code> <strong>fixed</strong> · lines 4121–4121: Fixed memory leakage in SN:M dynamic arrays deallocation and a few other places.</summary><div class="era-change-body"><pre>Fixed memory leakage in SN:M dynamic arrays deallocation and a few other places.</pre><p>Related pages: [ERA services, memory and sound (SN)](../receivers/sn/)</p></div></details>

</section>
:::
<!-- ERA3-GENERATED:END -->
