# ERA services, memory and sound (SN)

ID: erm.receivers.sn
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/sn/
Part: 3/3
Source references: old-help:rec-sn.htm, old-help:rec-sn-era.htm, era-changelog:era-iii-changelog.txt, old-help:era-api.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.sn 3 -->
<li><span class="erm-anchor" id="ref-era-api-execerm"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ExecErmCmd</strong></span> (CmdStr: PCHAR); STDCALL;</code><br>
Executes the specified single ERM command in the format <span class="erm-anchor" id="ref-era-api-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">XX</span>:...</strong> no conditions.<br>
<u>Example</u>:
<div class="erm-tone-quote erm-legacy-code erm-note"><div class="erm-paragraph"><code>ExecErmCmd('IF:L^Hello, World!^;');</code></div></div></li>
<li><span class="erm-anchor" id="ref-era-api-exterm"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ExtractErm</strong></span>; STDCALL;</code><br>
Exports all standard scripts (00..99) to a folder <em class="erm-legacy-file">Data\s\ExtractedScripts</em>.</li>
<li><span class="erm-anchor" id="ref-era-api-error"></span><code>PROCEDURE <span class="erm-tone-red"><strong>FatalError</strong></span> (Err: PCHAR); STDCALL;</code><br>
Displays a critical error message and silently terminates the current process.</li>
<li><span class="erm-anchor" id="ref-era-api-firevnt"></span><code>PROCEDURE <span class="erm-tone-red"><strong>FireEvent</strong></span> (EventName: PCHAR; {n} EventData: POINTER; DataSize: INTEGER); STDCALL;</code><br>
Generates an event and notifies all subscribed handlers about it. <code>EventData</code> points to the event parameter block (if any), and <code>DataSize</code> determines the size of this block. 
Through this mechanism, you can pass valuable information about the event to handlers.</li>
<li><span class="erm-anchor" id="ref-era-api-firerm"></span><code>PROCEDURE <span class="erm-tone-red"><strong>FireErmEvent</strong></span> (EventID: INTEGER); STDCALL;</code><br>
Generates a new ERM event by calling the ERM function with the specified number. This call does not save negative <em>z</em>-variables.<br>
ERA requires plugin creators to retain previous event settings (<a href="./#ref-rec-sn-era-x">SN:X</a>) through the function <a href="./#ref-era-api-savent">SaveEventParams</a> BEFORE the call <em class="erm-tone-purple erm-legacy-event">FireErmEvent</em> and 
restore via function <a href="./#ref-era-api-resent">RestoreEventParams</a> AFTER the call, so that each new event has its own set <a href="./#ref-rec-sn-era-x">SN:X</a> parameters.</li>
<li><span class="erm-anchor" id="ref-era-api-txtunload"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ForceTxtUnload</strong></span> (Name: PCHAR); STDCALL;</code><br>
Forces the game to unload the txt table from memory.<br>
<span class="erm-anchor" id="ref-era-api-bold"></span><em class="erm-strong">Note:</em> use with caution!</li>
<li><span class="erm-anchor" id="ref-era-api-getbtn"></span><code>FUNCTION <span class="erm-tone-red"><strong>GetButtonID</strong></span> (ButtonName: PCHAR): INTEGER; STDCALL;</code><br>
The function makes it possible to obtain a unique identifier (ID) of a custom button by the specified name in the game dialog. If such a name has not been registered, the function will return -1.<br>
<u></u><span class="erm-anchor" id="ref-era-api-9"></span><details class="erm-comment"><summary>More details (<span class="erm-anchor" id="ref-era-api-show9"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
In ERA it has become possible to have custom buttons in most game dialogs. Custom buttons are described in <em class="erm-legacy-file">*.btn</em> files that are loaded from the folder <em class="erm-legacy-file">Data\Buttons</em> at the start of the game. Everyone <em class="erm-legacy-file">*.btn</em> the file (pure txt format) contains lines (one per button) in the following format:
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-api-n3"></span><strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Button screen</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Unique button name</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">DEF buttons</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">X</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Y</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Width</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Height</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Long description</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Short description</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Hotkey code</strong></div>
, where <code>[Button screen]</code> can take one of the following values:
<span class="erm-anchor" id="ref-era-api-t0"></span><ul class="erm-margin-top-zero">
<li><code>Advmap</code> (for adventure map)</li>
<li><code>Town</code> (for town)</li>
<li><code>Hero</code> (for hero screen)</li>
<li><code>Heroes</code> (for the hero meeting screen)</li>
<li><code>Battle</code> (for battle screen)</li>
<li><code>Dummy</code> (if the button is not used)</li></ul>
Each such configured button is automatically assigned its own unique ID.<br>
<u>Example</u>:
<div class="erm-tone-quote erm-legacy-code erm-note"><div class="erm-paragraph"><code>Hero;SecSkills.ScrollUp;ScrollUp.def;300;303;12;44;sss.scroll_up;sss.scroll_up;38</code></div></div>
</div></details></li>
<li><span class="erm-anchor" id="ref-era-api-getgame"></span><span class="erm-anchor" id="ref-era-api-state"></span><code>PROCEDURE <span class="erm-tone-red"><strong>GetGameState</strong></span> (VAR GameState: TGameState); STDCALL;</code><br>
Gets the current game state as a pair <a href="../../tables/dialog-types/#ref-form-gamestate" data-context="true">dialog identifiers</a>: main parent and current child (0 = no dialogs have been created yet).<br>
The function is useful for determining in which dialog a keystroke occurs.<br>
By default, the function ID of the current dialog will be placed in the variable v1.<br>
<u></u><span class="erm-anchor" id="ref-era-api-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-era-api-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?FU(OnKeyPressed)&amp;x1=81; "Q" key pressed
!!SN:F^GetGameState^/?y1; y1 - ID of the parent dialog, y2 - current (v1 will also receive the ID of the current dialog)
!!FU&amp;v1&lt;&gt;4662240:E;	way out if not a fight
!!VRx2:S1;		prohibition of standard reaction</code></pre>
<u>Explanation of the example</u>: <a href="./#ref-rec-sn-era-f">SN:F</a> calls an external function <em class="erm-tone-purple erm-legacy-event">GetGameState</em>. <strong>?y1</strong> means passing the address y1 in memory as a parameter (y1 takes 4 bytes, y2 also four).
And the function actually works with the address of an 8-byte structure consisting of two fields:<br>
- parent dialog (ID); falls on y1<br>
- child (current) dialog (ID); falls on y2<br>
If the current dialogue is the battle screen and the key is pressed <span class="erm-key">Q</span>, then cancel the click processing by setting the 2nd parameter of the event <a href="../../triggers/#ref-era-new-events-2-3">OnKeyPressed</a> at 1.</div></details></li>
<li><span class="erm-anchor" id="ref-era-api-getaddr"></span><code>FUNCTION <span class="erm-tone-red"><strong>GetRealAddr</strong></span> (Addr: POINTER): POINTER; STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-killproc"></span><code>PROCEDURE <span class="erm-tone-red"><strong>KillThisProcess</strong></span>; STDCALL;</code><br>
Silently kills the current process.</li>
<li><span class="erm-anchor" id="ref-era-api-loadimg"></span><code>FUNCTION <span class="erm-tone-red"><strong>LoadImageAsPcx16</strong></span> (FilePath, PcxName: PCHAR; Width, Height, MaxWidth, MaxHeight, ResizeAlg: INTEGER): {OU} Heroes.PPcx16Item; STDCALL;</code><br>
The function makes it possible to load any PNG/JPG/BMP-files as game files PCX-Images suitable for replacing in-game images or for displaying in dialogs. It supports size limit (0 - no limit) and .
<span class="erm-anchor" id="ref-era-api-10"></span><details class="erm-comment"><summary>scaling algorithms</summary><div class="erm-comment-body">
<blockquote class="erm-margin-top-zero erm-note"><span class="erm-anchor" id="ref-era-api-step"></span><div class="erm-indent">RESIZE_ALG_NO_RESIZE = 0; // Do not apply any restrictions and do not change the image size<br>
RESIZE_ALG_STRETCH = 1; // Set the width and height of the image to the width and height of the window, scale disproportionately<br>
RESIZE_ALG_CONTAIN = 2; // Resize the image so that at least one of its sizes is the same as the window size, and the other is smaller than or equal to the window size<br>
RESIZE_ALG_DOWNSCALE = 3; // Only compress images proportionally, do not stretch small images<br>
RESIZE_ALG_UPSCALE = 4; // Only scale small images proportionally, leave large images as is<br>
RESIZE_ALG_COVER = 5; // NOT IMPLEMENTED<br>
RESIZE_ALG_FILL = 6; // Use the image as a tile to fill the entire window<br>

Use ALG_STRETCH to set fixed sizes, ALG_FILL to fill the window with tiles, and ALG_DOWNSCALE for custom dialogs to shrink large images proportionally.</div></blockquote></div></details><br>
<u></u><span class="erm-anchor" id="ref-era-api-2"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-era-api-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Let's take our JPG image for the DL dialogue.
<pre class="erm-example"><code class="language-erm">!!SN:F^LoadImageAsPcx16^/^Data\Pics\test.jpg^/^rW3.cust.pcx^/400/300/0/0/1;
!!VRy1:Sv1; y1 - image resource
... call the DL dialog where rW3 is used.cust.pcx
!!SN:F^DecRef^/y1; free image resource</code></pre></div></details></li>
<li><span class="erm-anchor" id="ref-era-api-loadtxt"></span><code>FUNCTION <span class="erm-tone-red"><strong>LoadTxt</strong></span> (Name: PCHAR): {n} PTxtFile; STDCALL;</code><br>
Loads a txt table using game tools.</li>
<li><span class="erm-anchor" id="ref-era-api-color"></span><code>PROCEDURE <span class="erm-tone-red"><strong>NameColor</strong></span> (Color32: INTEGER; Name: PCHAR); STDCALL;</code><br>
The function must be called in an event <em class="erm-tone-purple erm-legacy-event">OnAfterCreateWindow</em> and is designed to create or redefine color names for <a href="../if/#ref-era-color-text">color text ERA</a>.<br>
<u>Example</u>:
<div class="erm-tone-quote erm-legacy-code erm-note"><div class="erm-paragraph"><code>NameColor($000000, 'bl'); now you can use {~bl}...{~} for black text</code></div></div></li>
<li><span class="erm-anchor" id="ref-era-api-pexist"></span><code>FUNCTION <span class="erm-tone-red"><strong>PatchExists</strong></span> (Name: STRING): BOOLEAN; STDCALL;</code><br>
<code>FUNCTION <span class="erm-tone-red"><strong>PluginExists</strong></span> (Name: STRING): BOOLEAN; STDCALL;</code><br>
Check for the presence of a patch/plugin in ERA.<br>
<u></u><span class="erm-anchor" id="ref-era-api-3"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-era-api-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!SN:F^PatchExists^/^fix erm tr r roads.bin^;
!!IF&amp;v1=0:M^The patch that fixes the bug of the TR:R command was not found!^;</code></pre></div></details></li>
<li><span class="erm-anchor" id="ref-era-api-readsavsec"></span><code>FUNCTION <span class="erm-tone-red"><strong>ReadSavegameSection</strong></span> (DataSize: INTEGER; {n} Dest: POINTER; SectionName: PCHAR): INTEGER; STDCALL;</code><br>
The function must be called in an event <a href="../../triggers/#ref-era-new-events-2-2">OnSavegameRead</a> and serves to read user data from a named file section. 
Consecutive readings from the same section are allowed. Returns the number of bytes read.</li>
<li><span class="erm-anchor" id="ref-era-api-wrtsavsec"></span><code>PROCEDURE <span class="erm-tone-red"><strong>WriteSavegameSection</strong></span> (DataSize: INTEGER; {n} Data: POINTER; SectionName: PCHAR); STDCALL;</code><br>
The function must be called in an event <a href="../../triggers/#ref-era-new-events-2-1">OnSavegameWrite</a> and serves to write user data to a named file section. 
Consecutive recording to the same section is allowed.</li>
<li><span class="erm-anchor" id="ref-era-api-readstr"></span><code>FUNCTION <span class="erm-tone-red"><strong>ReadStrFromIni</strong></span> (Key, SectionName, FilePath, Res: PCHAR): BOOLEAN; STDCALL;</code><br>
Reads a value from the specified ini file into a buffer <code>Res</code>. On the first reading, the ini file is analyzed, cached, and further queries lead to selections from the associative array, 
which occur very quickly and without accessing the hard drive.</li>
<li><span class="erm-anchor" id="ref-era-api-wrtstr"></span><code>FUNCTION <span class="erm-tone-red"><strong>WriteStrToIni</strong></span> (Key, Value, SectionName, FilePath: PCHAR): BOOLEAN; STDCALL;</code><br>
Writes the value to the ini file. Each function call writes the entire file to disk.</li>
<li><span class="erm-anchor" id="ref-era-api-recall"></span><code>FUNCTION <span class="erm-tone-red"><strong>RecallAPI</strong></span> (Context: PHookHandlerArgs; NumArgs: INTEGER): INTEGER; STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-redir"></span><code>PROCEDURE <span class="erm-tone-red"><strong>RedirectFile</strong></span> (OldFileName, NewFileName: PCHAR); STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-glbredir"></span><code>PROCEDURE <span class="erm-tone-red"><strong>GlobalRedirectFile</strong></span> (OldFileName, NewFileName: PCHAR); STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-redirmem"></span><code>PROCEDURE <span class="erm-tone-red"><strong>RedirectMemoryBlock</strong></span> (OldAddr: POINTER; BlockSize: INTEGER; NewAddr: POINTER); STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-regist"></span><code>PROCEDURE <span class="erm-tone-red"><strong>RegisterHandler</strong></span> (Handler: TEventHandler; EventName: PCHAR); STDCALL;</code><br>
Registers a handler for the specified event. Handlers are called in the order in which they are registered. The list of events can be viewed in the file <em class="erm-legacy-file">Tools\Era\SDK\triggers.txt</em>. 
Two key events in which the code for initializing modules and registering handlers should be located: <em class="erm-tone-purple erm-legacy-event">OnBeforeWoG</em>, <em class="erm-tone-purple erm-legacy-event">OnAfterWoG</em>.</li>
<li><span class="erm-anchor" id="ref-era-api-reload"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ReloadErm</strong></span>; STDCALL;</code><br>
Causes a complete reboot and recompilation of all erm/ert scripts (00..99). Same as pressing a key <span class="erm-key">F12</span>.</li>
<li><span class="erm-anchor" id="ref-era-api-savent"></span><code>PROCEDURE <span class="erm-tone-red"><strong>SaveEventParams</strong></span>; STDCALL;</code><br>
Saves <a href="./#ref-rec-sn-era-x">SN:X</a> event parameters in the stack structure.</li>
<li><span class="erm-anchor" id="ref-era-api-resent"></span><code>PROCEDURE <span class="erm-tone-red"><strong>RestoreEventParams</strong></span>; STDCALL;</code><br>
Restores saved files <a href="./#ref-rec-sn-era-x">SN:X</a> parameters from the stack structure.</li>
<li><span class="erm-anchor" id="ref-era-api-savini"></span><code>FUNCTION <span class="erm-tone-red"><strong>SaveIni</strong></span> (FilePath: PCHAR): BOOLEAN; STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-wrtcode"></span><code>PROCEDURE <span class="erm-tone-red"><strong>WriteAtCode</strong></span> (Count: INTEGER; Src, Dst: POINTER); STDCALL;</code><br>
Performs a secure copy of a block of memory from a source to a destination.</li>
</ul>












</div>
</div>
</section>
:::

## Notes on modern ERA versions {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!SN:subcommands;</code></div>
<div class="erm-paragraph">In the table, <code>$</code> denotes a read/write parameter, <code>#</code> an input, and <code>?$</code> an output. Individual commands define their identifiers and ranges.</div>
<hr>
<div class="erm-paragraph">P plays a sound named by z. S reads/replaces the filename in sound-event context. Legacy limits: 8.3 names, up to 10 seconds; not every game sound fires the SN trigger.</div>
<hr>
<div class="erm-paragraph">L loads a DLL and returns its handle; 0 means failure. A resolves an exported function address. Loading is not merely an existence check: use IsDllLoaded for that.</div>
<hr>
<div class="erm-paragraph">Calls a native function. Conventions: 0 Pascal, 1 Cdecl/Stdcall, 2 Thiscall, 3 Fastcall. Add 4 for a float result in e1; ordinary results go to v1. Arguments must exactly match the native signature.</div>
<hr>
<div class="erm-paragraph">Resolves/caches an export by name using Stdcall; supports ERA, kernel32 and user32. A leading dot requests a float result. Since ERA 3.9.29, plugin:function selects another module; omitted extensions try .era and .dll. Do not keep persistent data in v1 across calls.</div>
<hr>
<div class="erm-paragraph">Low-level buffer: an integer first argument is an address without ?, or its variable address with ?. A string always means its first-character address. Two arguments obtain the address; three (d in the second) read/write a value. Validate buffer size and lifetime.</div>
<hr>
<div class="erm-paragraph">Looks up a named constant at runtime. Check exists before using the value; useful for symbolic JSON settings.</div>
<hr>
<div class="erm-paragraph">D redraws the active supported hero/town/meeting/map window. O replaces object-part coordinates with its entrance; multiple entrances follow object selection rules. Modern ERA fixes old hero/boat hiding, but O does not support named globals.</div>
<hr>
<div class="erm-paragraph">G is a deprecated in-handler jump; never cross structured-block boundaries. Q stops the event chain, but modern _Quit handlers still run. Q is deprecated because it can skip other handlers and break libraries.</div>
<hr>
<div class="erm-paragraph">Creature text: 0 singular/1 plural/2 description. Skills: 0 name/1 basic/2 advanced/3 expert description. Support text and GET; prefix the category with - to restore defaults.</div>
<hr>
<div class="erm-paragraph">Object hints: exact coordinates outrank type/subtype, then type/-1, -1/subtype, -1/-1. Modern ERA does not expose hints for tiles hidden from the current player.</div>
<hr>
<div class="erm-paragraph">Specialty: hero and text kind 0 name/1 short/2 full (the game uses full). Artifact text uses 0 for name and 1 for description; use SPELL_TEXT_* constants for spells. Spell text includes name, short name, unskilled/basic/advanced/expert descriptions, and sound.</div>
<hr>
<div class="erm-paragraph">I interpolates ERM variables in a string. T retrieves localized JSON text with @name@ substitutions; a missing key returns the key text. Keep these interpolation mechanisms distinct.</div>
<hr>
<div class="erm-paragraph">Redirects a resource. An empty replacement clears it. Redirections are saved with the map and cleared on exit; cached resources may require reopening a window. PNG frames use def:group_frame.png.</div>
<hr>
<div class="erm-paragraph">Delete array; size (GET=-1 if absent); read/write an item; obtain its address. Negative item indices count from the end. Addresses become invalid after resize/deletion.</div>
<hr>
<div class="erm-paragraph">Create: id=-1 automatic, type 0 integers/1 strings, storage -1 trigger-local/0 temporary/1 saved. Modern five-argument form returns the ID explicitly without changing v1. Recreating an existing ID destroys its contents.</div>
<hr>
<div class="erm-paragraph">M with 4/5 arguments and GET among size/type/storage reads metadata; SET values there are ignored. V accesses several consecutive items. Store array IDs, not transient array addresses.</div>
<hr>
<div class="erm-paragraph">String length; character at zero-based index; memory-block copy. Modern ERA returns a character code to an integer destination. Copying does not validate destination capacity for you.</div>
<hr>
<div class="erm-paragraph">No arguments clear the entire associative store; a key alone deletes it; key/value reads or writes. Each key has independent integer/string values; missing values read 0/empty. Prefix mod keys and delete selectively.</div>
<hr>
<div class="erm-paragraph">Low-level view of x1..x16. Passing a string stores its address; reading a string interprets the number as an address. Use x directly for ordinary event parameters; treating arbitrary numbers as pointers can crash.</div>
<hr>
<div class="erm-paragraph">SN combines legacy sound commands and ERA extensions. Check version differences before applying legacy Help limits: syntax, local arrays, strings and generators have changed.</div></section>
:::

## Related reference {#related}

[SN:E](../../examples/sn-e/) · [SN:F](../../examples/sn-f/) · [Framework](../../framework/) · [UN:C](../../un-c/)



## Related commands and tables {#reference-links}

[Sound playback (SN)](../../triggers/sn/) · [Game event sounds](../../tables/sounds/) · [ERM debugging and compatibility](../../compatibility/) · [MP3 music (MP)](../mp/) · [Creature recruitment (RD)](../rd/) · [General game operations (UN)](../un/#command-q-1-r) · [Conditions and branches](../../conditions/) · [Loops: re, br, co, and DO](../../loops/) · [Creature table](../../tables/creatures/) · [General game operations (UN)](../un/#command-g0-skill-text-z-g1-monster-text-z-g2-hero-field-value) · [Game object table](../../tables/objects/) · [Map objects (OB)](../ob/#command-b-h) · [Object-type hints (HT)](../ht/) · [Secondary skills](../../tables/secondary-skills/) · [Hero table](../../tables/heroes/) · [Function calls (FU)](../fu/#command-e) · [ERM triggers and events](../../triggers/) · [Text resources: ERT, ERS and JSON](../../tables/text-resources/) · [Variables and expressions (VR)](../vr/#command-mask-or-xmask-sd-bits-sd-bits) · [Map-cell data (PO)](../po/)

<!-- llm:end erm.receivers.sn 3 -->

