---
{"title":"ERM scripts","summary":"Game events, ERM commands, and the ERA ERM Framework library.","translationStatus":"reviewed"}
---

## About the reference {#ref-cont-abouthelp}

:::erm
<section class="erm-reference" lang="en">
<div>


<h3 class="erm-align-center"><a href="./#ref-cont-abouthelp-o" title="Go to the directory change history"><span class="erm-tone-blue">About the guide...</span></a></h3>

<div class="erm-paragraph">Translation of ERM help, design of the reference book: <span class="erm-anchor" id="ref-cont-abouthelp-n1"></span><span class="erm-tone-purple erm-strong erm-source-title">DracoLich</span><br>
Finalization of design and material: <span class="erm-anchor" id="ref-cont-abouthelp-n2"></span><span class="erm-tone-purple erm-strong erm-source-title">Bes</span><br>
Thank you: <span class="erm-tone-purple erm-strong">Algor<span class="erm-anchor" id="ref-cont-abouthelp-black"></span><em class="erm-tone-text">,</em> Berserker<em class="erm-tone-text">,</em> daemon_n<em class="erm-tone-text">,</em> Demiurg<em class="erm-tone-text">,</em> Etoprostoya<em class="erm-tone-text">,</em> 
Hippocamus<em class="erm-tone-text">,</em> Igor<em class="erm-tone-text">,</em> igrik<em class="erm-tone-text">,</em> Master<em class="erm-tone-text">,</em> myoffice91<em class="erm-tone-text">,</em> Night<em class="erm-tone-text">,</em> sergroj<em class="erm-tone-text">,</em> 
ShadowTheAge<em class="erm-tone-text">,</em> SnoRT<em class="erm-tone-text">,</em> Valery<em class="erm-tone-text">,</em> wessonsm<em class="erm-tone-text">,</em> XEPOMAHT<em class="erm-tone-text">,</em> 
D'yacon<em class="erm-tone-text">,</em> Mikhanik</span>... and to all those who in one way or another took part in improving the reference, but were not mentioned here.<br>
Please leave comments and any errors you find at <a href="http://wforum.heroes35.net/showthread.php?tid=914">forum</a><br>
 </div>

<div class="erm-paragraph">The reference book uses the following <strong>notation system</strong>:<br>
If any parameter is displayed as <strong>#</strong>, then it cannot be verified or obtained, it can only be installed.<br>
If any parameter is displayed as <strong>?$</strong>, then it can only be written to a variable; it cannot be set or checked.<br>
If any parameter is displayed as <strong>$</strong>, then it can be installed, verified or retrieved.<br>
This is all true unless the command comment states otherwise.</div>

<div class="erm-paragraph"><strong>Install</strong> value - direct recording of the value.<br>
<strong>Check</strong> value - checking the value and writing the result to flag 1.<br>
<strong>Get</strong> value - writing a value to a variable.<br>
<u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!!OW:R0/6/9000;	 - set Red's gold to 9000.
!!OW:R0/6/=9000; - flag 1 will be true if Red has exactly 9000 gold, and false if not.
!!OW:R0/6/?v1;	 - write the amount of Red gold into the variable v1.</code></pre></div>

<div class="erm-paragraph">If you wish <strong>install</strong> any<strong> parameter</strong> to the value <strong>0</strong>, you can simply not specify anything in place of the number.
<pre class="erm-example"><code class="language-erm">;Command !!OW:R/6/9000; is equivalent to the command !!OW:R0/6/9000;</code></pre>
If a command contains many parameters, and their zero value means “nothing” (for example, for <a href="receivers/if/#ref-rec-if-g">IF:G</a>), you
you can simply omit further parameters.<br>
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
<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-abouthelp-o"></span>
<u></u></div><span class="erm-anchor" id="ref-cont-abouthelp-1"></span><details class="erm-comment"><summary>History of directory changes (<span class="erm-anchor" id="ref-cont-abouthelp-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph"><strong>Version 2.10a</strong><br>
+ Added information for DW:O<br>
* Fixed a bug in the table of creature dwellings<br>
* Some edits/additions to the reference book</div>

<div class="erm-paragraph"><strong>Version 2.10</strong><br>
+ Added an article with examples of using UN:C/SN:E<br>
+ Added commander structure table<br>
+ Added an extended description of 29 and 30 special flags of creatures<br>
+ Added additional material for !?MF<br>
+ Added information for BM:F, BU:O, IF:Q, LE:S, MR:F, OW:C<br>
+ Updated information in the article "Flags and Variables"<br>
+ Added a separate hex value converter<br>
+ Added contents page of the directory<br>
* Fixed the description of the "mirrors" of landscape cells for TR:T<br>
* Corrected description for GD:T<br>
* Fixed errors in the combat obstacles table<br>
* Fixed errors in the Dungeon building table<br>
* Some edits/additions to the reference book</div>

<div class="erm-paragraph"><strong>Version 2.9e</strong><br>
+ Added description of exported ERA functions<br>
+ Added information on DL<br>
* Changed the default priority for opening descriptions of SN/MP receivers<br>
* Some edits to the reference book</div>

<div class="erm-paragraph"><strong>Version 2.9d</strong><br>
+ Added key code table<br>
+ Added a table describing creature resources<br>
+ Added table of creature projectile types<br>
+ Added an article on colored text in dialogues<br>
+ Added section on new ERA triggers<br>
+ Added information for MO:G<br>
* Corrected inaccuracies in the article "Used variables"<br>
* The names of creatures used in the reference book have been brought to uniformity<br>
* Improved navigation for some articles<br>
* Some corrections/additions to the reference book</div>

<div class="erm-paragraph"><strong>Version 2.9c</strong><br>
+ Added a table of displacements by hero structure (for HE:Z)<br>
+ Added a table of offsets according to the stack structure in battle (for BM:Z)<br>
+ Added information for OW:H T<br>
* Minor fixes, examples added</div>

<div class="erm-paragraph"><strong>Version 2.9b</strong><br>
+ Optimization of graphic elements of the directory<br>
* Updated home page header</div>

<div class="erm-paragraph"><strong>Version 2.9a</strong><br>
+ Added information on new ERA triggers<br>
+ Added description of the logic for triggering events/hooks<br>
+ Added description of new functionality !!MP/!?MP<br>
* Minor corrections to the reference book</div>


<div class="erm-paragraph"><strong>Version 2.9</strong><br>
+ Added description of new ERA commands<br>
+ Added a list of all ERA triggers and named events<br>
+ Added information on json files<br>
+ Corrected description of UN:G2<br>
* Minor corrections/additions, examples added</div>


<div class="erm-paragraph"><strong>Version 2.8.2</strong><br>
* Corrected description of BM:C, FU:C, OW:W, CB, IF:N<br>
* Fixed incorrect table link for CE:D U, UN:A<br>
* Fixed some links on the Contents page<br>
+ Added article on bits of map objects<br>
+ Added tables with a 16-digit numbering system for artifacts, heroes, spells<br>
* The letter “Y” is placed where it should be<br>
* Some pages are supplemented with graphic elements<br>
* Changed the design of ERM code examples<br>
* Revised list of tables<br>
* Improved navigation in some tables<br>
* Optimized some directory pictures<br>
* Improved layout and style of the reference book text</div>

<div class="erm-paragraph"><strong>Version 2.8.1e</strong><br>
* Fixed incorrect table link for OB:D E<br>
* Minor corrections/additions, examples added<br> 
* Improved navigation in several tables<br>
+ Added a table for numbering creatures in the 16-digit system</div>

<div class="erm-paragraph"><strong>Version 2.8.1d</strong><br>
* Minor changes in descriptions<br>
* Improved (hopefully :) ) list of tables</div>

<div class="erm-paragraph"><strong>Version 2.8.1c</strong><br>
* Fixed incorrect page (squad experience) of the previous version<br>
* Screenshots in training UN:C from Deacon are made of higher quality with less weight.<br>
* In the Lite version, graphics from IF, BF, QW and curse tables have been removed, and some animations have been replaced with static frames</div>

<div class="erm-paragraph"><strong>Version 2.8.1b</strong><br>
* Some corrections to command descriptions that were incorrectly described in the original help.</div>

<div class="erm-paragraph"><strong>Version 2.8.1</strong><br>
* Corrected description of video requirements in dialogues<br>
* Updated battlefield<br>
+ Added lost command CD:B2<br>
+ Added pictures to the table of Cursors and Animations on battlefield</div>

<div class="erm-paragraph"><strong>Version 2.8e</strong><br>
* Fixed some stylistic errors<br>
* Added "lost" page with article<br>
+ The list of pictures of hero specializations has been completed (previously it was offered by yourself 
find the right hero)<br>
+ Added information to HE:P about showing the destination point</div>

<div class="erm-paragraph"><strong>Version 2.8d</strong><br>
* Fixed description of commands VR:M4 M5 M6 (incorrect syntax in English
file)<br>
* Fixed incorrect comment to BA:S<br>
* Commands IF:A R S moved according to the alphabet<br>
* In the command TR:T the river image was specified incorrectly.<br>
* High-quality images of soil subtypes and magic crystals have been returned<br>
* Fixed rare incorrect links<br>
* Comments made more obviously pushy<br>
* The table of curses and blessings has been shortened by cutting out less useful ones
phrases<br>
* Removed unnecessary highlighting of letters in names<br>
+ Added a list of options for the Warlord's Banner in EX:R<br>
+ Added command VR:R$/#;<br>
+ Added links to triggers for all corresponding receivers, triggers, not
those who had a similar receiver received links from the main<br>
+ Added information about the vision of creatures in TR:V<br>
+ Added pictures of roads for TR:T; which work correctly in Phoenix<br>
+ Added information about incorrect processing of comparison syntax in
corresponding section of the article Flags and variables<br>
+ These same descriptions have been added :P</div>

<div class="erm-paragraph"><strong>Version 2.8c</strong><br>
* The examples tag has been changed from bold to monospace<br>
+ Added article to training<br>
+ Comments and explanations are made drop-down (resulting in more compact
pages)<br>
+ Description of the command when hovering the mouse over an option in the header<br>
+ Improved content section</div>

<div class="erm-paragraph"><strong>Version 2.8b</strong><br>
* All pages have been converted to windows-1251 encoding<br>
* Correction of broken links<br>
+ Added an article-translation of a message for mapmakers<br>
+ Added tables of contents to all long articles and tables</div>

<div class="erm-paragraph"><strong>Version 2.8a</strong><br>
* Complete design change<br>
* Fixed incorrect information about HE:M<br>
+ Added details for UN:I</div>

<div class="erm-paragraph"><strong>Version 2.7</strong><br>
Bugs and fonts fixed.</div>

<div class="erm-paragraph"><strong>Version 2.6</strong><br>
Minor bugs fixed, some tables organized, information added</div>

<div class="erm-paragraph"><strong>Version 2.5</strong><br>
Bugs from the previous version have been fixed</div>

<div class="erm-paragraph"><strong>Version 2.4</strong><br>
Added TE teams</div>

<div class="erm-paragraph"><strong>Version 2.3</strong><br>
Added creature experience table<br>
Added description of the memory write command (UN:C)<br>
Design changes</div>

<div class="erm-paragraph"><strong>Version 2.2</strong><br>
Added new information about teams</div>

<div class="erm-paragraph"><strong>Version 2.1.1</strong><br>
Added information about some commands</div>

<div class="erm-paragraph"><strong>Version 2.1.0</strong><br>
Improved page stability<br>
Translation errors fixed<br>
Added additional information</div>

<div class="erm-paragraph"><strong>Version 2.0</strong><br>
The directory is formatted as CHM<br>
Added adjustments, training and additional information</div>

<div class="erm-paragraph"><strong>Version 1.1</strong><br>
Typo corrections, various adjustments</div>

<div class="erm-paragraph"><strong>Version 1.0</strong><br>
All commands have been translated, formatted in HTML<br>
 </div></div></details>



</div>
</section>
:::

## References {#ref-cont-links}

:::erm
<section class="erm-reference" lang="en">
<div>
<h3 class="erm-align-center">Links</h3>
<dl><strong><ul>
<li><a href="http://wakeofthegods.strategyplanet.gamespy.com/">Of. New Life of Heroes website</a><br>
</li><li><a href="http://wforum.heroes35.net">Of. forum "New Life of Heroes"</a><br>
</li><li><a href="http://forum.df2.ru">Old forum</a><br>
</li><li><a href="http://heroes.obninsk.ru">WoG Heroes Files 3.58f</a><br>
</li><li><a href="http://wforum.heroes35.net/files/wog358_sources.rar">WoG 3.58f source code</a>
</li><li><a href="http://www.dracolich.narod.ru">ERM assistance</a><br>
</li><li><a href="http://h3disk.narod.ru/index1.htm">Lots of stuff for Heroes 3.58</a>
</li></ul></strong></dl></div>
</section>
:::

## ERM-HELP {#ref-cont-main}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center erm-paragraph"><img src="../../assets/erm/e6c4b5fd05dd22e7.gif" alt="ERM-HELP version 2.10b ERM Version: 2914 (WoG 3.58f, TE, ERA2)" loading="lazy" decoding="async" class="erm-figure" width="392" height="73"><span class="erm-source-title"><br>
ERM-HELP</span><br>
<span>version 2.10b<br>
<u><strong>ERM Version: 2914 (WoG 3.58f, TE, ERA2)</strong></u></span></div>
<div class="erm-align-left erm-paragraph"><strong><u>Introduction</u><br>
ERM</strong> means <strong>Event Related Model</strong> (event-related module) and 
is an addition to the game <strong>Heroes 3: Breath of Death™</strong>.<br>
ERM is a new technology that allows dynamic changes in the game depending on 
actions of the player or computer.<br>
At the moment, 78 official scripts have been prepared, affecting a wide variety of 
aspects of the game.<br>
You can create your own scripts, and this help can help in this matter.<br>
Beginners are advised to read <a href="learn/">training</a>.
</div><div class="erm-paragraph">
Early versions lacked support for online play (only one player and 
hotseat), but WoG now fully supports online play over TCP/IP. 
Exceptions for now are only for some scripts, but unsupported scripts 
turn off automatically.<br>
 </div><span class="erm-anchor" id="ref-cont-main-1"></span><div>
<span class="erm-source-title"><a href="./#ref-cont-abouthelp">About this help</a><br>
<a href="./#ref-cont-wogteam" data-context="true">WoG-team</a><br>
<a href="./#ref-cont-links" data-context="true">Links</a></span></div>

</div>
</section>
:::

## About {#ref-cont-wogteam}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-center"><span class="erm-anchor" id="ref-cont-wogteam-n2"></span><h3 class="erm-tone-purple erm-strong">WoG Team</h3></div>
<div class="erm-align-center">
<span class="erm-anchor" id="ref-cont-wogteam-wt"></span><span class="erm-legacy-label"><strong>ERM idea:</strong></span><br>
Slava Salnikov (ZVS)<br>
<br>
<span class="erm-legacy-label"><strong>Programmers:</strong></span><br>
Alexander Karpeko<br>
Alexander Trifonov<br>
Slava Salnikov<br>
<br>
<span class="erm-legacy-label"><strong>Main artists:</strong></span><br>
Alexey Pichulin<br>
Alexey Vasiliev (Darkloke)<br>
Bruno<br>
Dieter Averbeck<br>
Mathias Launhardt<br>
Petr Alekseev (Arstahd)<br>
<br>
<span class="erm-legacy-label"><strong>Artists:</strong></span><br>
Alexander Karpeko<br>
Artem Gagarin<br>
Bianor<br>
Jerry Kowalczyk (Treupp)<br>
Jonas Gustafsson<br>
Konstantin Nochev (Dutch)<br>
Mandi (Kitten Angel)<br>
Sergey Vakhrameev<br>
Slava Salnikov<br>
Victoria Kalinina (Candy)<br>
<br>
<strong>
<span class="erm-legacy-label">ERM programming and/or<br>level designers:</span></strong><br>
Alexander Karpeko<br>
Alexander Trifonov<br>
Alexandra Balakhura<br>
Alexey Pichulin<br>
Alexis Koz<br>
Anders Jonsson<br>
Andrey Adutskevich (Perfecto)<br>
Bruno<br>
COX<br>
Dieter Averbeck<br>
Dmitry Lelikov<br>
Donald X.Vaccarino<br>
Jack Stebaev (AsPiN)<br>
Marc Lasch<br>
Petr Alekseev (Arstahd)<br>
Petyo Georgiev (Petronius)<br>
Qurqirish Dragon<br>
Rich Reed (Space8999)<br>
Robert Bergerfjall (Overlord)<br>
Sir Four<br>
Slava Salnikov<br>
Steven Lynch<br>
Thomas Franz (samot) <br>
Timothy Pulver<br>
Tobyn<br>
<br>
<strong>
<span class="erm-legacy-label">WoG &amp; ERM documentation:</span></strong><br>
Alexey Pichulin<br>
Bruno<br>
Darkloke<br>
George Toganel (Pushtiu')<br>
Jack Stebaev (AsPiN)<br>
Kamil Belau (Acid Dragon)<br>
Marcus the Red<br>
Yura Metelyov (Ennin)<br>
Slava Salnikov<br>
Timothy Pulver<br>
<br>
<span class="erm-legacy-label"><strong>Leading ERM testers:</strong></span><br>
Donald X.Vaccarino<br>
Gangrail<br>
Jonas Gustafsson<br>
Roland Rollig (Rasputin)<br>
Stefan Pavlov (Ste)<br>
Steve Hanna (ByteBandit)<br>
Timothy Pulver<br>
<br>
<span class="erm-legacy-label"><strong>Testers:</strong></span><br>
All of us and<br>
<a href="http://www.yahoogroups.com/wakeofgods">
<span class="erm-tone-text">WakeOfGods fan group</span></a><br>
<br>
<span class="erm-legacy-label"><strong>Webmaster:</strong></span><br>
Alexey Pichulin<br>
<br>
<span class="erm-legacy-label"><strong>Web artists:</strong></span><br>
Alexey Pichulin<br>
Dmitry Lelikov<br>
<br>
<strong><span class="erm-legacy-label">Special thanks:</span></strong><br>
Alex 2k<br>
Alexander the Artist<br>
Alexander Bass<br>
Alexey Kryuchkov (GreyMage)<br>
Andrew Svietlichnyy<br>
Andrew Yang<br>
Angelspit<br>
Dan Lind<br>
Glover<br>
Paul Lipka (Lipa)<br>
Psycomonkee<br>
Sergey Gorbanyov<br>
Simon Mooncalf<br>
Slaim Master<br>
Theo van Bekkum<br>
Xerobull
</div></div>
</section>
:::

## ERM-HELP {#ref-index}

:::erm
<section class="erm-reference" lang="en">
<div>


</div>
</section>
:::

## ERM Help {#ref-titre}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="table-wrap erm-reference-table"><table width="100%"><tr>
  <td><span>
	<div class="table-wrap erm-reference-table"><table width="100%">
	<tr><td><a href="./#ref-cont-main" title="Home">Home</a></td></tr>
	<tr><td><a href="start/#ref-cont-adv" title="Articles about ERM, WoG/ERA files and more..">Articles</a></td></tr>
	<tr><td><a href="variables/#ref-cont-flags" title="Flags and Variables">Flag, variable</a></td></tr>
	<tr><td><a href="variables/#ref-cont-usedvar" title="Table of variables used">Spanish AC</a></td></tr>
	<tr><td><a href="index/#ref-cont-list" data-context="true" title="Mini alphabetical index of the most popular options">Contents</a></td></tr>
	</table></div>
  </span></td>
  <td><span>
<span class="erm-anchor" id="ref-titre-1"></span><details class="erm-comment"><summary><img src="../../assets/erm/95e7fab0dd85c3ef.png" alt="Show command codes for map objects..." loading="lazy" decoding="async" class="erm-figure" title="Show command codes for map objects..."></summary><div class="erm-comment-body">
	<div class="table-wrap erm-reference-table"><table width="100%">
	<tr>
	<td><a href="receivers/cb/#ref-rec-cb" title="Setting parameters for the Creature Bank">CB</a></td>
	<td><a href="receivers/ch/#ref-rec-ch" title="Setting Treasure Chest Options">CH</a></td>
	<td><a href="receivers/dw/#ref-rec-dw" title="Setting parameters for external Creature Dwellings">DW</a></td>
	<td><a href="receivers/fr/#ref-rec-fr" title="Setting parameters for Campfires on the map">FR</a></td>
	<td><a href="receivers/gd/#ref-rec-gd" title="Configuring Mystic Gardens Options">GD</a></td>
	<td><a href="receivers/gr/#ref-rec-gr" title="Setting up Garrisons parameters">GR</a></td>
	<td><a href="receivers/kt/#ref-rec-kt" title="Configuring Tree of Knowledge settings">KT</a></td>
	<td><a href="receivers/ln/#ref-rec-ln" title="Setting up the Canopy (cellar) parameters on the map">LN</a></td>
	<td><a href="receivers/ml/#ref-rec-ml" title="Configuring Windmill Parameters">ML</a></td>
	<td><a href="receivers/mn/#ref-rec-mn" title="Setting up the parameters of Mines (Beacon)">MN</a></td>
	<td><a href="receivers/mt/#ref-rec-mt" title="Configuring Obelisk Parameters">MT</a></td>
	<td><a href="receivers/pa/#ref-rec-pa" title="Configuring Pandora&#x27;s Box settings on the map">PA</a></td>
	<td><a href="receivers/pm/#ref-rec-pm" title="Setting up Pyramid or new WoG objects">PM</a></td>
	</tr>
	<tr>
	<td><a href="receivers/qu/#ref-rec-qu" title="Setting the Seer&#x27;s Hut or Border Guard Settings">QU</a></td>
	<td><a href="receivers/sc/#ref-rec-sc" title="Setting up Scientist parameters on the map">SC</a></td>
	<td><a href="receivers/sg/#ref-rec-sg" title="Setting the parameters of the Sign (Bottles)">SG</a></td>
	<td><a href="receivers/sk/#ref-rec-sk" title="Setting the parameters of the Skeleton (corpse) on the map">SK</a></td>
	<td><a href="receivers/sp/#ref-rec-sp" title="Setting the parameters of the Magic Stream on the map">SP</a></td>
	<td><a href="receivers/sr/#ref-rec-sr" title="Setting the parameters of Magic Shrines">SR</a></td>
	<td><a href="receivers/st/#ref-rec-st" title="Setting the parameters of the Knowledge Stone">ST</a></td>
	<td><a href="receivers/sw/#ref-rec-sw" title="Setting attributes for Swan Pond">SW</a></td>
	<td><a href="receivers/sy/#ref-rec-sy" title="Setting up Shipyard parameters on the map">SY</a></td>
	<td><a href="receivers/ur/#ref-rec-ur" title="Setting up Universities on the map">UR</a></td>
	<td><a href="receivers/wg/#ref-rec-wg" title="Configuring settings for the Cart">WG</a></td>
	<td><a href="receivers/wh/#ref-rec-wh" title="Configuring Witch&#x27;s Hut Options">WH</a></td>
	<td><a href="receivers/wm/#ref-rec-wm" title="Setting the Water Wheel Parameters">WM</a></td>
	</tr>
	<tr>
	<td colspan="6"></td>
	<td><a href="receivers/wt/#ref-rec-wt" title="Configuring Warrior Tombs settings">WT</a></td>
	<td colspan="6"></td>
	</tr>
	<tr>
	<td colspan="13"><img src="../../assets/erm/b1442e85b03bdcaf.gif" alt="blank" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr>
	<td colspan="6"></td>
	<td><a href="./#ref-titre"><img src="../../assets/erm/4aad318c4c154c76.png" alt="Return basic command codes..." loading="lazy" decoding="async" class="erm-figure" title="Return basic command codes..."></a></td>
	<td colspan="6"></td>
	</tr></table></div>
<img src="../../assets/erm/b1442e85b03bdcaf.gif" alt="CB CH DW FR GD GR KT LN ML MN MT PA PM QU SC SG SK SP SR ST SW SY UR WG WH WM WT" loading="lazy" decoding="async" class="erm-figure" width="0" height="50"></div></details>
<div class="table-wrap erm-reference-table"><table width="100%">
	<tr>
	<td><a href="triggers/ae/#ref-tr-ae" title="Trigger removing and putting on an artifact">AE</a></td>
	<td><a href="receivers/ai/#ref-rec-ai" title="AI movement control">AI</a></td>
	<td><a href="receivers/ar/#ref-rec-ar" title="Used to configure a resource or artifact on the map">AR</a></td>
	<td><a href="receivers/ba/#ref-rec-ba" title="Setting up battle attributes. Typically used after trigger !?BA0">BA</a></td>
	<td><a href="receivers/bf/#ref-rec-bf" title="Allows you to customize the battlefield (place obstacles/objects, or remove them)">BF</a></td>
	<td><a href="receivers/bg/#ref-rec-bg" title="Setting/receiving parameters in battle">BG</a></td>
	<td><a href="receivers/bh/#ref-rec-bh" title="Combat parameters: for the hero from any side">BH</a></td>
	<td><a href="receivers/bm/#ref-rec-bm" title="Combat parameters: for any creature squad (stack), placing mines on battlefield">BM</a></td>
	<td><a href="triggers/br/#ref-tr-br" title="Trigger each battle round">BR</a></td>
	<td><a href="receivers/bu/#ref-rec-bu" title="Universal combat commands (end battle, summon creature, show message, etc.)">BU</a></td>
	<td><a href="receivers/ca/#ref-rec-ca" title="Setting up town parameters (from name and appearance to buildings and hero in the garrison)">CA</a></td>
	<td><a href="receivers/cd/#ref-rec-cd" title="Setting parameters for the destruction of castles by the player, dependencies of buildings or their prohibition, etc.">CD</a></td>
	<td><a href="receivers/ce/#ref-rec-ce" title="Used to change the parameters of town events">CE</a></td>
	</tr>
	<tr>
	<td><a href="receivers/cm/#ref-rec-cm" title="Operations on mouse click information">CM</a></td>
	<td><a href="receivers/co/#ref-rec-co" title="Configuring Commander Options">CO</a></td>
	<td><span><span class="erm-tone-accent">DC</span></span></td>
	<td><a href="receivers/dl/#ref-rec-dl" title="Allows you to customize your own (non-standard) dialogs">DL</a></td>
	<td><a href="receivers/do/#ref-rec-do" title="Calling a cyclic function">DO</a></td>
	<td><a href="receivers/ea/#ref-rec-ea" title="Ability to customize bonus lines of creatures using ERM">EA</a></td>
	<td><a href="receivers/ex/#ref-rec-ex" title="Creature experience support">EX</a></td>
	<td><a href="receivers/fu/#ref-rec-fu" title="Calling a function, interrupting code execution">FU</a></td>
	<td><a href="receivers/ge/#ref-rec-ge" title="Used to change global event parameters">GE</a></td>
	<td><a href="triggers/gm/#ref-tr-gm" title="Trigger loads and saves (autosave)">GM</a></td>
	<td><a href="receivers/he/#ref-rec-he" title="Customizing hero parameters (from name and skills to his troops, artifacts and murder)">HE</a></td>
	<td><a href="receivers/hl/#ref-rec-hl" title="Control when leveling up the hero. Must be used in trigger !?HL">HL</a></td>
	<td><a href="triggers/hm/#ref-tr-hm" title="Trigger hero movements">HM</a></td>
	</tr>
	<tr>
	<td><a href="receivers/ho/#ref-rec-ho" title="Setting parameters for interactions with heroes">HO</a></td>
	<td><a href="receivers/ht/#ref-rec-ht" title="Setting up hints for any objects on a map of a certain type">HT</a></td>
	<td><a href="conditions/#ref-rec-iee" title="The If-else-endif construct is used to set conditions without using new functions">IEE</a></td>
	<td><a href="receivers/if/#ref-rec-if" title="Working with flags, specifying hero variables; setting up dialogues with the player, displaying messages and pictures, extended WoG dialogues">IF</a></td>
	<td><a href="receivers/ip/#ref-rec-ip" title="Game support via TCP/IP">IP</a></td>
	<td><a href="receivers/le/#ref-rec-le" title="Configuring local event settings on the map">LE</a></td>
	<td><a href="receivers/ma/#ref-rec-ma" title="Setting the parameters of all creatures of a certain type">MA</a></td>
	<td><a href="receivers/mc/#ref-rec-mc" title="Installing macros (named links to your data)">MC</a></td>
	<td><a href="receivers/mf/#ref-rec-mf" title="Controlling physical damage received by the stack">MF</a></td>
	<td><a href="triggers/mg/#ref-tr-mg" title="Trigger casting spells on the adventure map by the player">MG</a></td>
	<td><a href="receivers/mm/#ref-rec-mm" title="Setting battle text or getting mouse position on battlefield">MM</a></td>
	<td><a href="receivers/mo/#ref-rec-mo" title="Setting the parameters of creatures in a specific position on the map">MO</a></td>
	<td><a href="receivers/mp/#ref-rec-mp-era" title="Control of playback of mp3 tracks">MP</a></td>
	</tr>
	<tr>
	<td><a href="receivers/mr/#ref-rec-mr" title="Magic resistance control. Works only with trigger !?MR">MR</a></td>
	<td><a href="receivers/mw/#ref-rec-mw" title="Setting Up Roaming Creatures">MW</a></td>
	<td><a href="receivers/ob/#ref-rec-ob" title="Setting object parameters in specific coordinates">OB</a></td>
	<td><a href="receivers/ow/#ref-rec-ow" title="Used for commands aimed at a specific player to configure resources; commands that control heroes and life time without castles, etc.">OW</a></td>
	<td><a href="triggers/pi/#ref-tr-pi" title="Trigger-instruction (post-instruction)">PI</a></td>
	<td><a href="receivers/po/#ref-rec-po" title="Used to work with numerical information for any map square">PO</a></td>
	<td><a href="receivers/qw/#ref-rec-qw" title="Configuring Hero&#x27;s Journal Options">QW</a></td>
	<td><a href="loops/#ref-rec-re" title="New high-level speed cycles: RE/BR/CO">RE</a></td>
	<td><a href="receivers/rd/#ref-rec-rd" title="Setting up the game dialogue for hiring creatures">RD</a></td>
	<td><a href="receivers/sn/#ref-rec-sn-era" title="Information on new teams in ERA">SN</a></td>
	<td><a href="receivers/ss/#ref-rec-ss" title="Setting Spell Options">SS</a></td>
	<td><a href="triggers/th/#ref-tr-th" title="Trigger entrance/exit to the town hall">TH</a></td>
	<td><a href="receivers/tl/#ref-rec-tl" title="Multiplayer turn time controller.
Real time timer">TL</a></td>
	</tr>
	<tr>
	<td><a href="receivers/tm/#ref-rec-tm" title="Equivalent to ERM for time events in game cards (code repetition at intervals, start/end of action on a specific game date)">TM</a></td>
	<td><a href="receivers/tr/#ref-rec-tr" title="Setting up territories or changing the passability of squares">TR</a></td>
	<td><span><span class="erm-tone-accent">VA</span></span></td>
	<td colspan="3"></td>
	<td></td>
	<td colspan="3"></td>
	<td><a href="receivers/vc/#ref-rec-vc" title="Used to control variables, functions, timers, etc. used in the script">VC</a></td>
	<td><a href="receivers/vr/#ref-rec-vr" title="Used to configure numeric and string variables (setting, comparison and mathematical and logical operations with them)">VR</a></td>
	<td><a href="receivers/un/#ref-rec-un" title="A universal command to influence the map and/or the game (from working with combo artifacts and controlling visibility on the map to the appearance of the cursor and directly working with the game memory)">UN</a></td>
	</tr></table></div>
	<td><span>
	<div class="table-wrap erm-reference-table"><table width="100%">
	<tr><td><a href="triggers/#ref-cont-triggers" title="List of ERM triggers">Triggers</a></td></tr>
	<tr><td><a href="receivers/#ref-cont-receivers" title="List of ERM receivers">Receivers</a></td></tr>
	<tr><td><div><a href="receivers/#ref-cont-receiversa" title="Receiver table for objects">Dr. objects</a></div></td></tr>
	<tr><td><a href="triggers/#ref-era-new-events" title="Description of new ERA triggers, named events">Events</a></td></tr>
	<tr><td><a href="tables/#ref-cont-form" data-context="true" title="List of tables">Tables</a></td>
	</tr></table></div>
  </span></td>
  </span></td></tr>
</table></div>
<a href="../../assets/erm/eb127b364e491583.eot"></a>
<a href="../../assets/erm/1b20b818be881cf1.ttf"></a></div>
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
