---
{"title":"Text resources: ERT, ERS and JSON","summary":"External text, option labels and script localization.","translationStatus":"reviewed"}
---

## ERS {#ref-cont-ers}

:::erm
<section class="erm-reference" lang="en">
<div>
<h3 class="erm-align-center">.ERS files</h3>
<div class="erm-paragraph">If you are creating a new script for WoG'ification, you can add it to the WoG options dialog with a ".ers" file. 
This file must have the same name as the script, for example, <em class="erm-legacy-file">script78.erm</em> must have an ers file <em class="erm-legacy-file">script78.ers</em>. 
This file is a table containing information about the script number, the internal script number used to enable or disable 
(the number may differ from the script number), place of appearance in the WoG'ification settings dialog and description text.<br>
Description of each field:<br>
<strong>1.</strong> <strong><span class="erm-tone-purple">Comment</span></strong> - you can write whatever you want here. 
Usually, I insert the name or description of the script, but this field is only for you, it has no effect and is not shown in the game.<br>
<strong>2.</strong> <span class="erm-tone-purple"><strong>Script number</strong></span> (for example, for <em class="erm-legacy-file">script78.erm</em> write 78 in the field)<br>
<strong>3.</strong> <span class="erm-tone-purple"><strong>Page</strong></span>, on which it will be located (0..7). 
Typically the value is 7 (Other Scripts), but you can use other numbers.<br>
<strong>4.</strong> <span class="erm-tone-purple"><strong>Group</strong></span>: 0 = top right, 1 = bottom right, 2 = top left, 3 = bottom left<br>
<strong>5.</strong> <span class="erm-tone-purple"><strong>Number</strong></span> (first = 0, second = 1, etc.). You can enter -1, 
so that the option is placed directly after the last script in the table. I usually use -1.<br>
<strong>6.</strong> <span class="erm-tone-purple"><strong>Default Status</strong></span>: 0 = disabled, 1 = enabled<br>
<strong>7.</strong> <strong><span class="erm-tone-purple">Default status for online play</span></strong> (if you click on the "Network Default" button)<br>
<strong>8.</strong> <span class="erm-tone-purple"><strong>Option ERM</strong></span> for <span class="erm-tone-purple"><strong>UN:P</strong></span>, used to determine status. 
You can read it with the command <span class="erm-anchor" id="ref-cont-ers-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!UN</span>:<a href="../../receivers/un/#ref-rec-un-p">P#</a>/?v1;</strong>, 
where # is the ERM number. I used numbers 0-10 for the built-in options (right click, Commanders, Shooting Towers, etc.). 
11-99 - for corresponding scripts. If the script is below 11, I added 100. So script 1 is numbered 101, script 2 is numbered 102, etc. 
I also used ERM numbers for additional options (for example, many options use Map Rules), starting from 111.<br>
<strong>9</strong>. <strong><span class="erm-tone-purple">Text</span></strong> - name of the option in the WoG'ification menu<br>
<strong>10.</strong> <span class="erm-tone-purple"><strong>Hint</strong></span> - text at the bottom of the screen that appears when you hover the mouse over an option<br>
<strong>11.</strong> <span class="erm-tone-purple"><strong>Text message</strong></span> by right clicking on the option.<br>
<span class="erm-anchor" id="ref-cont-ers-bold"></span><em class="erm-strong">Note</em>: any WoG'ification script is a checkbox (on or off), except for a few scripts, 
which Slava combined into groups (for example, Basic Settings). You can't do the same with a .ers file, because... it's built into WoG.</div></div>
</section>
:::

## ERT {#ref-cont-ert}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title"> Support for script localizations<br>
.ERT files<br>
(Glory)</span></strong></div>
<div class="erm-paragraph">I was asked to simplify the methods of translating texts in a script.  <br>
The fact is that if the author changes his script, he will have to spend a lot 
time to check the entire script and translate the messages. I suggested doing 
a separate file for each script (optional) that will store everything 
script text elements.<br>
Now, you can make script##.ert files, which 
has a special format:<br>
<strong>Number(integer) <em>[tab]</em> Text <em>[tab]</em> Any 
comment...</strong><br>
Two columns are required, the others are optional (comments do not load or 
are saved into the game).<br>
One line - one element.<br>
Number means the number that will be used in the script to access 
text.<br>
The number must be in the range from 0 to 1000000.<br>
If the number is 0 (or empty), the line is ignored and not loaded.<br>
If the number is between 1 and 1000, the text will be automatically copied to 
appropriate <em>z</em>-a variable when loading the script (also 
before following instructions).<br>
So, if you have the following line:<br>
<strong>123<em>[tab]</em>This is the text<em>[tab]</em>Comment</strong><br>
and your script has the following statement:<br>
<strong>!#IF:M1/z123;</strong><br>
You will see a "This is text" message when loading the map.<br>
This is the method to initialize <em>z</em>- a variable in the file.<br>
Was:<br>
<strong>!#VRz321:S^Hello, wanderer!^;</strong><br>
…<br>
Now you remove this script line and add the line to the ert file:<br>
<strong>321<em>[tab]</em>Hello, wanderer!<em>[tab]</em>Initial message when hero 
included in...</strong><br>
To access the text you use the same method as for
<em>z</em>-variables, but with a number greater than 1000.<br>
If your script has <em>z</em>-variable used 
to store name or text, you can free this variable and not 
use it at all if you add a line to the ert file 
with a number greater than 1000 and change the code.<br>
Then if you had something like:<br>
<strong>!#IF:M^You are not ready yet.^;</strong><br>
you should change your script to:<br>
<strong>!#IF:M1/z123456;</strong><br>
and add the line to the ert file:<br>
<strong>123456<em>[tab]</em>You're not ready yet.<em>[tab]</em>Comment</strong><br>
You cannot use these additional <em>z</em>-variables 
to change any standard game texts (names of artifacts, etc.). 
The restrictions are the same as in local <em>z</em>-variables (z-1…z-10). 
With one exception. You can use additional <em>z</em>-variables 
as a hint text in <strong><a href="../../receivers/ht/#ref-rec-ht">HT:</a>T</strong>,<strong>P</strong>,<strong>V</strong>,<strong>W</strong>,<strong><a href="../../receivers/ob/#ref-rec-ob">OB</a>:H</strong>, 
<strong><a href="../../receivers/ho/#ref-rec-ho">HO</a>:H</strong>. The only limitation is that in this case the number should not be 
above 32000.<br>
You can compare additional <em>z</em>-variables in 
sections <strong>&amp;</strong> and<strong> |</strong>.<br>
You can also use references to other variables:<br>
<strong>3333<em>[tab]</em>Hello %Z55555!<em>[tab]</em>…<br>
55555<em>[tab]</em>Orrin<em>[tab]</em></strong><br>
You can include additional <em>z</em>-variables in 
messages via %Z (as usual).<br>
ERT file is loaded if available and correct 
the corresponding .erm file has been loaded.<br>
All additional <em>z</em>-variables are common to 
all .ert files. So, if you use the same 
numbers in several .ert files, you will get 
corresponding message, and the map will not load.<br>
Variables above 1000 have no length limit (regular ones are limited to 255 characters).</div>
<div class="erm-paragraph"><strong>I recommend dividing the space between additional <em>z</em>-variables 
in the following way:</strong><br>
Numbers 1000…10000 are reserved for now<br>
Numbers 10000…20000 (100 variables per script for hint needs).<br>
Script00 10000…10099,<br>
Script01 10100…10199…<br>
(number 1##00 … 1##99, where ## is the script number)<br>
Numbers 20000...100000 are reserved for now.<br>
Numbers 100000…200000 (1000 variables per script for various texts).<br>
Script00 100000…100999,<br>
Script01 101000…101999,<br>
(number 1##000 … 1##999, where ## is the script number)</div></div>
</section>
:::

## JSON {#ref-cont-json}

:::erm
<section class="erm-reference" lang="en">
<div>
<h3 class="erm-align-center">.json files<a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
<em class="erm-legacy-file">(Excerpt from ERA change history based on json files)</em></h3>

<div class="erm-paragraph"><u>2.9.11</u>: Added %T(translated_string_key_from_json) interpolation in ^...^ lines. Now translations without parameters can be inserted directly.
<pre class="erm-example"><code class="language-erm">!!IF:M^Welcome to {%T(mymod.woody_castle_object)}!^;</code></pre></div>

<div class="erm-paragraph"><u>2.8.4</u>: All language files <em class="erm-legacy-file">Lang/*.json</em> are also loaded from the map catalog (for example, <em class="erm-legacy-file">Maps/Arrogance/Lang/arrogance.json</em>), and are also recorded in saves and loaded when the game is loaded. In this way, cards can be issued with translation support.</div>

<div class="erm-paragraph"><u>2.8.3</u>: Improved json file syntax (<em class="erm-legacy-file">Mod\Lang\*.json</em>, UTF-8 encoding).<br>
Nested objects are supported.<br>
In json, objects are sets of the form “Key - Value” between curly braces.
</div><span class="erm-anchor" id="ref-cont-json-q1"></span><blockquote class="erm-tone-quote erm-note"><pre class="erm-legacy-code">{
   "wogrev": {
	"no_gold_message": "No more gold, @name@!",
	"no_mercy": "There will be no mercy!"
   }
}</pre></blockquote>

The above document is similar to the following:
<blockquote class="erm-tone-quote erm-note"><pre class="erm-legacy-code">{
   "wogrev.no_gold_message": "No more gold, @name@!",
   "wogrev.no_mercy": "There will be no mercy!"
}</pre></blockquote>

But instead of constantly repeating with the input name prefix, nested keys are used.
<pre class="erm-example"><code class="language-erm">!!SN:T^wogrev.no_gold_message^/?z2/^name^/^Geralt^;
!!IF:M^%Z2^;</code></pre>

<div class="erm-paragraph"><u>2.6.2</u>: Added support for localizing ERM scripts.<br>
All <em class="erm-legacy-file">Lang/*.json</em> files are loaded and combined into one dictionary of the “Key - Value” type, 
which stores translation strings.
Json files should be saved in UTF-8 encoding, preferably with Unix line-end markers (#10 = 0x0A as line separator).<br>
The file format is as follows:
</div><blockquote class="erm-tone-quote erm-note"><pre class="erm-legacy-code">{
   "unique global key-id string": "line feed",
   "another key": "newline of another line"
}</pre></blockquote>

During loading, the text is automatically converted from UTF-8 encoding (Unicode, e.g. Chinese, Polish) to the local ANSI encoding used by the player's OS. For the Russian-speaking segment of users, this is most often Windows-1251 (Cyrillic, also known as CP-1251).<br>
This way you have the ability to deliver a translation that other people can open and edit without losing data or turning lines into unreadable text.<br>
Characters that cannot be represented in the user's OS encoding will be replaced in the game with '?'.
<div class="erm-paragraph"><u>Case Study</u>:
</div><blockquote class="erm-tone-quote erm-note"><pre class="erm-legacy-code">{
   "eqs.this_day_savegame_name": "@day@_@player@",
   "eqs.end_turn_autosave_name": "@day@_@player@_End",
   "eqs.quicksave_name": "@day@_@player@_Quick",
   "eqs.saved_msg": "Saved!",
   "eqs.quicksaved_msg": "Quick save!"
}</pre></blockquote>

It is recommended to prefix each key with an abbreviation of the mod or the name of the author, for example "pm." for Phoenix-Fashion.
<div class="erm-paragraph">Translations can also contain substituted parameters in the form "@parameter name@". Such parameters are replaced with specific values during translation.
ERA-team <a href="../../receivers/sn/#ref-rec-sn-era-t">!!SN:T</a> This is precisely what is used to obtain a translation using a key.
<pre class="erm-example"><code class="language-erm">!!SN:T(key)/?(z-variable where to write the translation)/(parameter name 1)/(parameter value 1)/(parameter name 2)/(parameter value 2)...;</code></pre></div>

<div class="erm-paragraph"><u>2.47.0</u>: Added the ability to globally redirect resources via JSON files.<br>
<em class="erm-legacy-file">Data\Redirections\*.json</em></div>
<div class="erm-paragraph">Format:
</div><blockquote class="erm-tone-quote erm-note"><pre class="erm-legacy-code">{
   "old resource name": "new resource name",
   "old resource name": "new resource name"...
}</pre></blockquote>

Folder <em class="erm-legacy-file">Data\Redirections\Missing\*.json</em> works in a similar way, but redirects only apply to missing resources.<br>
For example, you can delete some pictures like <em class="erm-legacy-file">zpic1005.pcx</em> and redirect them to others still present in the lod/pac files.<br>
You can write such redirects if your mod depends on another graphics mod, but you want to give users the ability to use it separately.


</div>
</section>
:::

## ERT {#ert}

ERT stores numeric IDs, text and optional comments, separated by tabs. It accompanies the same-named ERM file; IDs above 1000 are read as extended z values. The ID space is shared: duplicates across files conflict. For new mods, JSON keys and SN:T are more convenient when ERT compatibility is unnecessary.

## ERS {#ers}

ERS describes script settings in the WoG options interface rather than ERM handler bodies. Keep option IDs and text aligned. ERA 3.0.3 removed the old short ERS filename restriction.

## JSON and SN:T {#json}

Mod translations live in Lang/*.json. Use unique key prefixes and SN:T for parameterized text. Save files in the expected encoding; renaming an extension does not convert text.

## Archive resources {#resources}

h3sprite.lod contains graphic resources; h3bitmap.lod contains bitmap images and tables. UN32.def and UN44.def identify specialty icons; TB%town%%building%.DEF is a town-building filename pattern. Ivor’s post 69738 confirms these names. Post 70142 confirms the roles of MMArchive and DEF Tool; its old download links and versions are not current recommendations.

## Related material {#links}

[Variables](../../variables/) · [Localization SN:T](../../receivers/sn/#ref-rec-sn-era-t) · [Forum: Ivor 69738](https://wforum.heroes35.net/showthread.php?tid=3727&pid=69738#pid69738) · [Ivor 70142](https://wforum.heroes35.net/showthread.php?tid=3727&pid=70142#pid70142)

## Related commands and tables {#reference-links}

[General game operations (UN)](../../receivers/un/#command-p-p-option) · [Object-type hints (HT)](../../receivers/ht/) · [Map objects (OB)](../../receivers/ob/) · [Hero interaction permissions (HO)](../../receivers/ho/) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-istring-result-t-key-result-name-value)
