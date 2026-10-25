# ERM scripts

ID: erm.overview
URL: /en/erm/
Part: 1/1
Source references: old-help:cont-triggersol.htm, old-help:cont-receiversol.htm, era-changelog:era-iii-changelog.txt, era-framework:lib-9999-era---stdlib.erm, old-help:cont-abouthelp.htm, old-help:cont-links.htm, old-help:cont-main.htm, old-help:cont-wogteam.htm, old-help:index.htm, old-help:titre.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.overview 1 -->
## ERM-HELP {#ref-cont-main}

:::erm
<section class="erm-reference erm-help-intro" lang="en">
<div><div class="erm-align-left erm-paragraph"><strong><u>Introduction</u><br>
ERM</strong> means <strong>Event Related Model</strong> (event-related module) and
is an addition to the game <strong>Heroes 3: Breath of Death™</strong>.<br>
ERM is a new technology that allows dynamic changes in the game depending on
actions of the player or computer.<br>

You can create your own scripts, and this help can help in this matter.<br>
Beginners are advised to complete <a href="learn/">training</a>.
</div><div class="erm-paragraph">
Early versions lacked support for online play (only one player and
hotseat), but WoG now fully supports online play over TCP/IP.
Exceptions for now are only for some scripts, but unsupported scripts
turn off automatically.<br>
 </div><span class="erm-anchor" id="ref-cont-main-1"></span><div>
</div>

</div>
<div class="erm-paragraph">The reference book uses the following <strong>notation system</strong>:<br>
If any parameter is displayed as <strong>#</strong>, then it can only be set; it cannot be checked or retrieved.<br>
If any parameter is displayed as <strong>?$</strong>, then it can only be written to a variable; it cannot be set or checked.<br>
If any parameter is displayed as <strong>$</strong>, then it can be set, checked, or retrieved.<br>
This is all true unless the command comment states otherwise.</div>

<div class="erm-paragraph"><strong>Set</strong> value - direct recording of the value.<br>
<strong>Check</strong> value - checking the value and writing the result to flag 1.<br>
<strong>Get</strong> value - writing a value to a variable.<br>
<u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!!OW:R0/6/9000;	 - set Red's gold to 9000.
!!OW:R0/6/=9000; - flag 1 will be true if Red has exactly 9000 gold, and false if not.
!!OW:R0/6/?v1;	 - write the amount of Red gold into the variable v1.</code></pre></div>

<div class="erm-paragraph">To <strong>set</strong> a<strong> parameter</strong> to <strong>0</strong>, omit its numeric value.
<pre class="erm-example"><code class="language-erm">;Command !!OW:R/6/9000; is equivalent to the command !!OW:R0/6/9000;</code></pre>
If a command contains many parameters, and their zero value means “nothing” (for example, for <a href="receivers/if/#ref-rec-if-g">IF:G</a>), you can simply omit trailing parameters.<br>
For example...
<pre class="erm-example"><code class="language-erm">!!IF:G1/1/0/33/34/35/36/37;		#1
!!IF:G1/1/0/33/34/35/36/37////////;	#2</code></pre>
Command option #1 is equivalent to option #2 because here 0 means "nothing".
Further parameters are simply automatically set to 0.</div>

<div class="erm-paragraph">In some options you may find a syntax extension with the prefix “without updating”.
This means that the screen will not be redrawn when a command is executed, which is very useful for combat scripts
(otherwise some problems arise in the rendering) and scripts that perform many actions (acceleration of actions).</div>

<div class="erm-paragraph">To view <strong><u>examples</u></strong> and <strong><u>comments</u></strong>,
Click on this word (this block of information will open below).</div>
<span class="erm-anchor erm-legacy-alias" id="ref-titre-1"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-abouthelp"></span><span class="erm-anchor erm-legacy-alias" id="ref-cont-links"></span><span class="erm-anchor erm-legacy-alias" id="ref-index"></span><span class="erm-anchor erm-legacy-alias" id="ref-titre"></span>
</section>
:::

## Finding your way {#reference}

ERM connects game events to commands: visiting an object, starting a battle, or pressing a key runs a handler whose receivers read and change game state. This reference covers classic ERM and ERA extensions. New scripts can use named events, variables, and constants in ERM 2.0.

- [Introduction](start/) — script placement and execution.
- [Syntax](syntax/) — headers, commands, arguments, and comments.
- [Variables](variables/) — scope, strings, and arrays.
- [Conditions](conditions/), [loops](loops/), and [functions](functions/) — control flow.

## Find a command or event {#catalogs}

- [Triggers and events](triggers/) — execution points, legacy codes, and registered names.
- [Receivers](receivers/) — command syntax, parameters, and limitations.
- [Tables](tables/) — identifiers for objects, resources, and game entities.
- [Alphabetical index](index/) — lookup by name or ERM code.

## ERA ERM Framework {#framework}

Framework is an ERM library providing functions, constants, and prepared event context. The supplied library declares **ERA 3.9.15+** as its requirement. An ERA command being available does not imply that a corresponding Framework function is installed.

[Overview](framework/) · [Functions](framework/functions/) · [Events](framework/events/) · [Global variables](framework/globals/) · [Constants](framework/constants/)

## Practical tasks {#practice}

[Examples](examples/) demonstrate individual techniques. [UN:C](un-c/) covers memory, [SN:E](examples/sn-e/) calls functions by address, [SN:F](examples/sn-f/) calls exported functions, and [ERM Hooker](hooker/) creates custom interception points. Address-based operations require checking the executable version and the relevant plugin first.

[Compatibility](compatibility/) explains why identical syntax need not behave identically in WoG and different ERA versions.

## Related commands and tables {#reference-links}

[ERM syntax: ZVSE and ZVSE2](syntax/) · [Local map events (LE)](receivers/le/) · [Map artifacts and resources (AR)](receivers/ar/) · [Heroes (HE)](receivers/he/) · [Global events (GE)](receivers/ge/) · [Variables and expressions (VR)](receivers/vr/) · [Town events (CE)](receivers/ce/) · [Map objects (OB)](receivers/ob/) · [ERM triggers and events](triggers/) · [ERM triggers and events](triggers/#use) · [Battle start and completion (BA)](triggers/ba/) · [Object visits (OB)](triggers/ob/) · [Visiting a hero (HE)](triggers/he/) · [Variables, strings and arrays](variables/)
<!-- llm:end erm.overview 1 -->

# ERM debugging and compatibility

ID: erm.compatibility
URL: /en/erm/compatibility/
Part: 1/1
Source references: era-changelog:era-ii-changelog.txt, era-changelog:era-iii-changelog.txt, era-source:erm.pas, era-framework:lib-9999-era---stdlib.erm, old-help:cont-hd.htm, old-help:cont-te.htm, old-help:era-index.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.compatibility 1 -->
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
<strong class="erm-tone-purple erm-strong">A_K_Zyzop</strong> (<strong class="erm-tone-purple erm-strong">Alexander Karpeko</strong>, one of WoG-Team) 
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
<li> ERM Language Extension <a href="../receivers/sn/#ref-rec-sn-era">new commands</a> and <a href="../triggers/#ref-era-new-events">events</a>;</li>
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

<!-- ERA3-GENERATED:END -->
<!-- llm:end erm.compatibility 1 -->

