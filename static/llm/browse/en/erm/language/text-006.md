# Introduction to ERM

ID: erm.start
URL: https://asmedian.github.io/modding-guide/en/erm/start/
Part: 1/1
Source references: old-help:cont-zvse.htm, old-help:cont-triggersol.htm, old-help:tr-pi.htm, old-help:tr-gm.htm, era-changelog:era-iii-changelog.txt, old-help:cont-adv.htm, old-help:cont-mapmakers.htm, old-help:cont-wog.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.start 1 -->
## Further Information {#ref-cont-adv}

:::erm
<section class="erm-reference" lang="en">
<div>
<span class="erm-source-title">
<div class="erm-align-center erm-paragraph"><strong>A selection of articles and reference materials</strong></div>
<dl>
<dt><span class="erm-tone-blue">°</span> <span class="erm-anchor" id="ref-cont-adv-none"></span><a href="../learn/">Learning</a></dt>
<dt><span class="erm-tone-blue">°</span> <a href="../variables/#ref-cont-flags">Flags and Variables</a></dt>
<dt><span class="erm-tone-blue">°</span> <a href="../variables/#ref-cont-usedvar">Variables used</a></dt>
<dt><span class="erm-tone-blue">°</span> <a href="../triggers/#ref-cont-triggersol">General information about triggers</a></dt>
<dt><span class="erm-tone-blue">°</span> <a href="../syntax/#ref-cont-receiversol">General information about receivers</a></dt>
<dt>  <span class="erm-anchor" id="ref-cont-adv-wt"></span><span class="erm-legacy-label">Additional information</span>…</dt>
<dt><span class="erm-anchor" id="ref-cont-adv-t0"></span><ul class="erm-margin-top-zero">
	<li><a href="../receivers/if/#ref-cont-db">by dialog boxes</a></li>
	<li><a href="../receivers/if/#ref-era-color-text">by colored text in dialogues</a></li>
	<li><a href="../receivers/ea/#ref-cont-stackexpbonus">about the experience of beings</a></li>
	<li><a href="../tables/object-control-words/#ref-cont-conwords">by control words of objects</a></li>
	<li><a href="../receivers/ss/#ref-cont-sschange">about non-standard values of secondary skills</a></li>
	<li><a href="./#ref-cont-mapmakers">for the mapmaker</a></li>
	<li><a href="./#ref-cont-wog">about .wog files</a></li>
	<li><a href="../tables/text-resources/#ref-cont-ers">about .ers files</a></li>
	<li><a href="../tables/text-resources/#ref-cont-ert">about .ert files</a></li>
	<li><a href="../tables/text-resources/#ref-cont-json">about .json files</a></li>
	<li><a href="../triggers/#ref-cont-logicevent">about the logic of triggering events in the game</a></li>
	<li><a href="../un-c/#ref-cont-unc">on working with memory</a></li>
	<li><a href="../un-c/#ref-cont-unc-lib">on using UN:C (ready-made solutions)</a></li>
	<li><a href="../receivers/sn/#ref-era-api">by ERA functions and procedures (API)</a></li>
	<li><a href="../tables/combat-stack-structure/#ref-form-combatmon">about the structure of the combat stack</a></li>
	<li><a href="../tables/hero-structure/#ref-form-advhero">about the structure of the hero on the adventure map</a></li>
	<li><a href="../un-c/commander-structure/#ref-form-commstr">about the commander's structure</a></li></ul></dt>
</dl>
</span></div>
</section>
:::

## Mapmakers_tools {#ref-cont-mapmakers}

:::erm
<section class="erm-reference" lang="en">
<div>

<span class="erm-anchor" id="ref-cont-mapmakers-text"></span><div>
<h3 class="erm-align-center">Mapper Toolkit</h3>
<span class="erm-anchor" id="ref-cont-mapmakers-q1"></span><blockquote class="erm-tone-quote erm-note"><em>This article describes tools and techniques that can be useful for mappers and scripters.</em></blockquote>

<h3><span class="erm-anchor" id="ref-cont-mapmakers-1"></span>Auto-loading of customized WoG options for your card.</h3>
<span class="erm-anchor" id="ref-cont-mapmakers-t0"></span><ol class="erm-margin-top-zero">
<li>Open the WoG options menu and select the desired options</li>
<li>Save the file to the Maps folder with your file name. Usually the name is used like a map. 
So, if your card is named <em class="erm-legacy-file">Conquer the World.h3m</em>, you can call <em class="erm-legacy-file">Conquer the World.dat</em>.</li>
<li>Create a global event in the map (name it whatever you want).</li>
<li>Set the event so that no players are allowed on the list and set the spawn day to 600.</li>
<li>In the event body write the following (assuming you are using <em class="erm-legacy-file">Conquer the World.dat</em>):
<pre class="erm-example"><code class="language-erm">ZVSE
!#UN:J3/^maps\Conquer the World.dat^;</code></pre></li>
<li>Click "OK" to save the event.</li>
<li>Save the map.</li>
<li>When you package the card, include your configuration file (for example, <em class="erm-legacy-file">Conquer the World.dat</em>).</li></ol>
<div class="erm-paragraph">Now, along with the map, the player will automatically download the WoG-ification file and will play according to your rules.</div>

<h3><span class="erm-anchor" id="ref-cont-mapmakers-2"></span>Create and include hero portraits in your map</h3>
<div class="erm-paragraph">Even if you're not a script writer, you may want to include your character portrait in the map.</div>
<ol class="erm-margin-top-zero">
<li>First you need to create a large and small character portrait of the correct size and type.<br>
The portrait consists of two graphics files in PCX format (256 colors), so you will need a graphics editor that supports this type of format.<br>
One file is used as a large portrait, and one for a small one (it is used in the list of heroes, for example).<br>
Large should be 58x64 (width x height, in pixels).<br>
Small – 48×32 (width × height).<br>
Place both files in a folder <em class="erm-legacy-file">Heroes3\Data</em> and pack them with the card.<br>
Don't forget to also include a reminder for players to copy the files to the folder <em class="erm-legacy-file">Data</em> (You can even create an event on the first day so that no one misses this moment.)
<div class="erm-paragraph">For example, let's call a large file <em class="erm-legacy-file">sylvia.pcx</em>, and small <em class="erm-legacy-file">sylvia-s.pcx</em></div></li>
<li>Create a global event on the map (name it whatever you want).</li>
<li>Set the event so that no players are allowed on the list and set the spawn day to 600.</li>
<li>Find out the internal number of the hero whose portrait you want to change. In our example, we are using Sylvia, whose number = 3.<br>
In the end, we get...
<pre class="erm-example"><code class="language-erm">!#HE3:L1^sylvia-s.pcx^;</code></pre>
If the hero's number was 17, we would write...
<pre class="erm-example"><code class="language-erm">!#HE17:...;</code></pre></li>
<li>Place the following in the event body (taking into account your hero number):
<pre class="erm-example"><code class="language-erm">ZVSE
!#HE3:L1^sylvia-s.pcx^;	[Set small portrait for Sylvia]
!#HE3:L2^sylvia.pcx^;	[Set large portrait for Sylvia]</code></pre></li>
<li>Click OK to save the event.</li>
<li>Save your card.</li></ol>
<div class="erm-paragraph">If you want to set several portraits for different heroes, add additional lines to the event. You only need one "ZVSE" at the very beginning of the text.</div>
<div class="erm-paragraph"><strong>IMPORTANT:</strong> If you edit a hero using your own image, DO NOT check the "Customize" checkbox next to the hero's portrait in the map editor, because it will override ERM commands and your customized portraits.</div>

<h3><span class="erm-anchor" id="ref-cont-mapmakers-3"></span>Enabling WoG "Cheat" Menu to test a map or script</h3>
<div class="erm-paragraph">A scripted cheat menu has been added to WoG'ification.<br>
To include it in the map, do the following:
</div><ol class="erm-margin-top-zero">
<li>Create a global event (name it whatever you want).</li>
<li>Set the event so that no players are allowed on the list and set the spawn day to 600.</li>
<li>In the event text, write the following:
<pre class="erm-example"><code class="language-erm">ZVSE
!#UN:P77/1;</code></pre></li>
<li>Click OK to save the event.</li>
<li>Save your card.<br>
Or paste these lines into an unused WoG'ification script (for example, <em class="erm-legacy-file">script99.erm</em>) if you want it to be active for all cards.</li></ol>
<div class="erm-paragraph">To use WoG Cheat Menu, click <span class="erm-key">Alt</span> and click on any of the following objects:
</div><ol class="erm-margin-top-zero">
<li>Hero on the map;</li>
<li>hero in your hero list;</li>
<li>town on the map;</li>
<li>town in your list of towns.</li></ol>
<div class="erm-paragraph">A menu will appear with several action options to choose from.</div>
<div class="erm-paragraph">You can use <span class="erm-key">Alt</span> and in the hero window. Depending on where you click, there will be different options for action.<br>
For example, if you want to change a hero's attack, hold <span class="erm-key">Alt</span> and click on 'Attack'. And if you want to give artifact - with the <span class="erm-key">Alt</span> Click on the artifact slot.</div>
<div class="erm-paragraph">Note: If the "Disable Cheat Codes and Cheat Menus" option is enabled, this menu will also be disabled.</div>


</div></div>
</section>
:::

## Files *.wog {#ref-cont-wog}

:::erm
<section class="erm-reference" lang="en">
<div>
<h3 class="erm-align-center">*.wog files</h3>
<div class="erm-paragraph">Files <strong>*.wog</strong> – these are renamed archives <strong>*.rar</strong>. Any compression level can be used <strong>WinRAR</strong>. 
There can be any files inside, but archives <u>should</u> contains the following control files:
</div><ul>
<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-wog-n3"></span><strong class="erm-tone-purple">H3BITMAP.TXT</strong><br>
List of files to upload to <em class="erm-legacy-file">h3bitmap.lod</em>, each next file is on a new line.</div></li>
<li><div class="erm-paragraph"><strong class="erm-tone-purple">H3SPRITE.TXT</strong><br>
List of files to upload to <em class="erm-legacy-file">h3sprite.lod</em>, each next file is on a new line.</div></li>
<li><div class="erm-paragraph"><strong class="erm-tone-purple">INSTMULT.TXT</strong><br>
Destination unknown. All archives look like this:
</div><span class="erm-anchor" id="ref-cont-wog-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">[PICS]</div>
<div class="erm-paragraph">[MUSIC]</div></code></div></li>
</ul>
<div class="erm-paragraph">The following files are not required, but with their help you can organize the process of installing wog files more flexibly and informatively:</div>
<ul>
<li><div class="erm-paragraph"><strong class="erm-tone-purple">INFORM.TXT</strong><br>
	<strong>[GeneralName]</strong><br>
The new line contains the name of the file under which it will be displayed during installation.</div>
	<div class="erm-paragraph"><strong>[WhatAboutVrotAbout]</strong><br>
The new line contains additional information - usually information about the author and a brief description.<br>
There should be no line breaks, otherwise the text on the new line is ignored.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">[GeneralName]<br>
ERM Help &amp; Scripter</div>
<div class="erm-paragraph">[WhatAboutVrotAbout]<br>
Packed on 25.08.2004</div></code></div>
</li><li><div class="erm-paragraph"><strong class="erm-tone-purple">ACTION.TXT</strong><br>
	<strong>[REGEDIT]</strong><br>
Used to modify the registry.<br>
The first line contains the path to the key. The key is created internally <em class="erm-legacy-file">HKEY_LOCAL_MACHINE</em>.<br>
Then there is a list of assigned attributes of the form <em>"Attribute"="Value"</em> for string keys and <em>"Attribute"=dword:value</em> - for numbers.<br>
It looks like it is possible to create only one key and parameters within it.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">[REGEDIT]<br>
Software\New Life of Heroes\Heroes of Might and Magic III\3.5<br>
"WoG_Version"="3.53"</div>
<div class="erm-paragraph">[REGEDIT]<br>
Software\MegaSoft\ERM Scripter<br>
"SynCompletionProposal1_Width"=dword:350<br>
"SynCompletionProposal2_Width"=dword:350</div></code></div>
If the attribute is empty, set <em>(default value)</em> at the key.
<div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">[REGEDIT]</div>
<div class="erm-paragraph">Software\Hi<br>
""="Hi!"</div></code></div>
	<div class="erm-paragraph"><strong>[INSTALL]</strong><br>
Here are commands like: <span class="erm-legacy-code"><strong class="erm-tone-red erm-legacy-strong">XXXX</strong> "parameter" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"parameter 2"</span>, where:<br>
<strong class="erm-tone-red erm-legacy-strong">XXXX</strong> - a specific command.<br>
<strong class="erm-tone-purple erm-legacy-strong">W+</strong> means that the operation is performed in the Heroes folder.<br>
Some commands support other base folders:<br>
<strong class="erm-tone-purple erm-legacy-strong">P+</strong> – “Start” menu → “Programs”<br>
<strong class="erm-tone-purple erm-legacy-strong">I+</strong> – Desk<br>
If none of the above is specified, the operation is performed in the OS temporary folder.</div>
<ul>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">VERS</strong> "parameter"<br>
Unknown. Possibly the syntax version. Usually the parameter "C" or "A" (Latin) is used.</div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">DELL</strong> "file" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"path to folder"<br>
Deletes file(s) in a folder. In the "file" parameter you can specify any mask.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">DELL "*.*" W+"erm_help\images\"</div></code></div>
<div class="erm-paragraph">You can also delete folders:
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">DELL "format" W+"erm_help\"</div></code></div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">UNRA</strong> "file" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"path to folder"<br>
Extracts a file from an archive into a specified folder. If the folder where the copy is made does not exist, then it is created.<br>
Some masks can be used as the “file” parameter, for example, “*.*”.<br>
<span class="erm-anchor" id="ref-cont-wog-bold"></span><em class="erm-strong">Note:</em> not all masks are supported. So, for example, the command <span class="erm-legacy-code"><strong class="erm-tone-red erm-legacy-strong">UNRA</strong> "script*.*" <strong class="erm-tone-purple erm-legacy-strong">W+</strong></span> will extract all files, 
and not just those that start with "script".
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">UNRA "Mapmaker Tools.txt" W+"erm_s\"</div></code></div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">EXEC</strong> "file" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"path to folder"<br>
Runs the specified file from the specified folder. You can specify a mask in the "file" parameter.<br>
<em class="erm-strong">Note:</em> files are run at the end of the installation, so you won't be able to delete running files after run.</div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">CMPC</strong> "files" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"path to folder"<br>
Copies files to a folder. You can use a mask in the "files" parameter. It must contain the full path to the files relative to the game folder.<br>
<em class="erm-strong">Note:</em> copying does not occur if the folder where the copy is being made does not exist.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">CMPC "erm_help\*.*" W+"erm_help\backup\"</div></code></div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">SRCH</strong> "file" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"message"<br>
Checks the existence of the specified file. If the file does not exist, displays the specified message. Can search for a file by mask. 
If at least one file that matches the mask exists, no message is displayed.<br>
The message can consist of several lines, but instead of a line feed, you must use "@@".<br>
In all official wog files, this command is used simply to display messages.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">SRCH "--------.---" W+"ERM Help and Tools have been successfully installed!@@This text will already be on a new line."</div></code></div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">MDIR</strong> "folder name" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"path"<br>
Creates a folder in the specified location. Supports both W+, P+, and I+.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">MDIR "New Life of Heroes" P+</div></code></div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">ICON</strong> "shortcut name" <strong class="erm-tone-purple erm-legacy-strong">I+</strong>"path to file"<br>
Creates a shortcut. Supports P+ and I+ only. If the MDIR command was previously issued, then the shortcut is created inside the folder that was specified in the command.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">MDIR "New Life of Heroes" P+<br>
ICON "ERM Script Editor for Heroes III In the Wake of Gods" P+"erm_s\erm_s.exe"</div></code></div></li></ul>
</li></ul>


</div>
</section>
:::

## Event → handler → commands {#model}

A trigger selects when code runs. For example, `!?BA0;` responds to battle initialization. A receiver specifies an operation: `!!HE` accesses heroes, `!!OW` players, and `!!IF` messages and flags. The same two-letter code can identify a trigger and a receiver; its prefix determines the role. A handler extends to the next trigger declaration. Multiple handlers of the same event execute in sequence.

## Where scripts live {#placement}

Global mod scripts use the `.erm` extension and live under `Mods/<ModName>/Data/s/`. A map can also embed ERM in timed-event text. `ZVSE` or `ZVSE2` must appear at the beginning of the script. Libraries use `Data/s/lib/` and the final `Data/s/lib_end/` stage; their loading order allows context to be prepared and restored around ordinary handlers.

Give your own names a unique prefix such as `MyMod_`. Libraries and gameplay scripts have different roles; code that changes gameplay should not be treated as a universal utility library.

## New games and saved games {#initialization}

Instructions prefixed with `!#` run when a new map is initialized. `!?PI;` / `!?FU(OnAfterErmInstructions);` follows the instructions. It is not a handler for every saved-game load: use `!?GM0;` / `!?FU(OnAfterLoadGame);` for that event. Saved gameplay state and temporary process resources require different restoration strategies; a memory address must not be assumed valid after restarting the process.

## A minimal handler {#example}

This script displays a message when a new map starts. It demonstrates the header, a named trigger, and the message command.
```erm
ZVSE2

!?FU(OnAfterErmInstructions);
!!IF:M^ERM: ready^;
```

## Checking changes {#checking}

Use a separate test map and check new-game initialization, save/load, and repeated event execution. Battle code also needs checks for quick combat, AI, and multiplayer. For an ERM error, first check the header, semicolons, paired `if/re` and `en` blocks, identifier ranges, and whether the event context is available.

[Syntax](../syntax/) · [Compatibility](../compatibility/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../triggers/) · [ERM triggers and events](../triggers/#use) · [Battle start and completion (BA)](../triggers/ba/) · [Object visits (OB)](../triggers/ob/) · [Visiting a hero (HE)](../triggers/he/) · [Variables, strings and arrays](../variables/) · [ERM syntax: ZVSE and ZVSE2](../syntax/) · [General game operations (UN)](../receivers/un/#command-j3-file-j4-j5)

<!-- llm:end erm.start 1 -->

