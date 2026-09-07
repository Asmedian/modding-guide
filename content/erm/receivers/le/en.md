---
{"title":"Local map events (LE)","summary":"LE receiver: local map events, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Local map events (LE)"}
---

## Receiver LE {#ref-rec-le}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-b1-b2-b3-b4"></span><span class="erm-anchor" id="modern-strings"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-le-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>LE</strong> (local event)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-le-red"></span><span class="erm-tone-red">!!LE#1/#2/#3:XXXX;</span> - local event in X Y L.</strong> 
Used to change event parameters at certain map coordinates.<br>
<em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>!!LE$:XXXX;</strong></span> - coordinates in variables v[$], v[$+1], v[$+2]<br>
<u>
</u> </div><span class="erm-anchor" id="ref-rec-le-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-le-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">If the event was set as <em>"Delete after first visit""</em>, after visiting him, you will not be able to bring him back to life. 
It completely disappeared.<br>
Now there is a check to see if there is an ERM code associated with the event. If it exists, flag 999 is set to 0 and all commands are executed.<br>
If it is not there, flag 999 is set to 1 and all commands of the receiver !!LE are skipped.<br>
<em>Note:</em> You still cannot change the number of secondary skills and spells set in the event, but only change existing ones.</div>
<div class="erm-paragraph">You can use this receiver to edit Pandora's Box (<a href="../../tables/objects/#ref-form-objects" data-context="true">type 6</a>).</div></div></details>
<span class="erm-anchor" id="ref-rec-le-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/le/#ref-tr-le">!?LE</a>, receiver <a href="../pa/#ref-rec-pa">!!PA</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-le-a"></span><span class="erm-anchor" id="command-a-a"></span>A#1/$2</strong></span><br>
Set/check/get <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact</a> $2 in position #1 in the table of artifacts received in the event.<br>
You can only CHANGE artifact to something else. If there are no artifacts at the position, then nothing will happen.<br>
<em>Extended syntax:</em><br>
<span class="erm-tone-red"><strong>A$</strong></span> 
	- check/get number of artifacts<br>
You can set this parameter, but it will not lead to anything.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-b"></span>B</strong></span><br>
Artifact Bonus<br>
<span class="erm-tone-red"><strong>B1/$</strong></span> 
- check/get the number of artifacts in the artifacts table of the bonus sheet (cannot be set)<br>
<span class="erm-tone-red"><strong>B2/#/$</strong></span> 
- set/check/get <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact</a> $  at position # (0…) in the bonus table.<br>
<span class="erm-tone-red"><strong>B3/$</strong></span> 
- add <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact</a> $ to the end of the bonus table<br>
<span class="erm-tone-red"><strong>B4/$</strong></span> 
- remove artifact at position $ in the bonus table<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-le-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-le-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
There is, of course, a team <a href="./#ref-rec-le-a">LE:A</a>, but with its help you can only CHANGE artifacts in the bonus table. This new command allows you to install, 
add and remove artifact from local events and Pandora's Boxes.<br>
You can make a virtually unlimited artifact table for any local event or Pandora's Box.<br>
You cannot set the scroll as artifact, the game will “understand” this is not correct and will crash.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-c"></span><span class="erm-anchor" id="command-c-1-2-g-1-2"></span>C#1/$2/$3</strong></span><br>
Set/check/get the received 
	 creatures at position #1 (0..6) <a href="../../tables/creatures/#ref-form-creature" data-context="true">like $2</a> and quantity $3</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-d"></span><span class="erm-anchor" id="command-d-i-l"></span>D#1/#2</strong></span><br>
Allow/disable event for human players.<br>
        #2 = 1 – disable<br>
        #2 = 0 – allow<br>
For player #1 (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a>)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-e"></span><span class="erm-anchor" id="command-e-f-1-2-3-4-o-p-r-u"></span>E$</strong></span><br>
Set/check/get the number of experiences in $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-f"></span>F$1/$2/$3/$4</strong></span><br>
Set/check/get four 
<a href="../../framework/constants/hero-skills/#ref-form-primaryskill" data-context="true">primary skills</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-g"></span>G#1/$2/$3</strong></span><br>
Set/check/get
	<a href="../../tables/creatures/#ref-form-creature" data-context="true">security guards</a> in position #1 (0..6) type $2 and quantity $3<br>
The command only sets up the guards, but does not turn them on.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-i"></span>I#</strong></span><br>
Deny/allow event for AI<br>
        # = 0 – disable<br>
        # = 1 – allow</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-l"></span>L#</strong></span><br>
Cancel (# = 1) or do not cancel (# = 0) the event after the first 
visits</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-m"></span><span class="erm-anchor" id="command-m-text-m-mz-m1"></span>M^text^</strong></span><br>
Set message text. Can contain any characters except "^" and ";"</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>M#</strong></span><br>
Set message text from global event number #</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M-1</strong></span><br>
Don't show message on screen</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Mz#</strong></span><br>
Set/get message text from text variable</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M1/$<br>
M1/-1</strong></span><br>
Set and get text parameters.<br>
You can use this if the M command was used to set the message.<br>
M1/$ - number of text variable in $<br>
M1/-1 – cancel message (restore default) </div> 
<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-n"></span><span class="erm-anchor" id="command-n-n-1-2-s-s"></span>N#1/$2/$3</strong></span><br>
Set/check/get
<a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">secondary skill</a> $2, level $3 (0 = basic, 1 = advanced, 2 = exp) 
at position #1 in the table of secondary skills given by the event.<br>
You can only CHANGE the skill to another one. If there is no skill in a position, nothing will change.<br>
<em>Extended syntax:</em><br>
<span class="erm-tone-red"><strong>N$</strong></span> 
	- check/get the number of secondary skills<br>
You can set this parameter, but it will not lead to anything.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-o"></span>O$</strong></span><br>
Set/check/get moral (-3…3)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-p"></span>P$</strong></span><br>
Set/check/get spell points (may be negative)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-r"></span>R#1/$2</strong></span><br>
Set/check/get qty.
	<a href="../../tables/resources/#ref-form-resource" data-context="true">resources</a> #1in $2 (maybe negative)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-s"></span>S#1/$2</strong></span><br>
Set/check/get
<a href="../../tables/spells/#ref-form-spell" data-context="true">spell</a> $2 at position #1 on the Event Spell Table.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-le-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-le-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
To remove spell from a specific position, specify -1 as the spell number:
<pre class="erm-example"><code class="language-erm">!!LE998:S0/-1; remove spell from 1st position in the spell table</code></pre>
<span class="erm-anchor" id="ref-rec-le-bold"></span><em class="erm-strong">Note:</em> if there was initially nothing in the event at a specific position in the table, then all attempts to perform operations with this position will cause an error.</div></details><div class="erm-paragraph"><em>Extended syntax:</em><br>
<span class="erm-tone-red"><strong>S$</strong></span> 
	- check/get number of spells<br>
You can set this parameter, but it will not lead to anything.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-u"></span>U$</strong></span><br>
Set/check/get lucky (-3…3)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-x"></span><span class="erm-anchor" id="command-x"></span>X#</strong></span><br>
Activate guards if # is not zero, otherwise turn them off.</div>
<hr>


















</div>

</div>
</section>
:::

## Notes on modern ERA versions {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!LE#x/#y/#level:subcommands;</code></div>
<div class="erm-paragraph">In the table, <code>$</code> denotes a read/write parameter, <code>#</code> an input, and <code>?$</code> an output. Individual commands define their identifiers and ranges.</div>
<hr>
<div class="erm-paragraph">A$ reads artifact count; Aindex/art replaces an existing entry. Use B to add/remove.</div>
<hr>
<div class="erm-paragraph">Bonus-artifact count; zero-based entry; append ID; remove index. Scrolls are unsupported in this list.</div>
<hr>
<div class="erm-paragraph">C is creature reward, G guards: slot 0..6, type, count. G does not enable guards automatically.</div>
<hr>
<div class="erm-paragraph">D: player 0..7 and human access blocked 1/allowed 0. I: AI allowed 1/blocked 0. L: remove after first visit 1/retain 0.</div>
<hr>
<div class="erm-paragraph">Experience; four primary skills; morale; mana; resource by ID; luck. Negative rewards are supported where the game permits them; morale/luck range -3..3.</div>
<hr>
<div class="erm-paragraph">Text directly, from a global event, or z. M-1 hides the message; M1 accesses its string index and M1/-1 restores the default.</div>
<hr>
<div class="erm-paragraph">N$ and S$ read list sizes. N edits an existing skill slot: ID and mastery 0 basic/1 advanced/2 expert. S edits an existing spell; -1 removes it. These list sizes cannot be increased.</div>
<hr>
<div class="erm-paragraph">Nonzero enables guards; 0 disables them.</div>
<hr>
<div class="erm-paragraph">Also applies to Pandora boxes. This receiver cannot restore an event deleted after a visit. The short selector reads coordinates from three v variables.</div>
<hr>
<div class="erm-paragraph">ERA 3.9.15 rewrote message handling to accept arbitrary strings. Numeric references to another event’s message (such as GE:M30) are disabled. -1 instead of an empty string is deprecated; pass <code>^^</code>. Numeric forms above are retained for reading legacy scripts.</div></section>
:::

## Related reference {#related}

[PA](../../receivers/pa/) · [LE](../../triggers/le/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [Local-event visit (LE)](../../triggers/le/) · [Pandora box (PA)](../pa/) · [Artifact table](../../tables/artifacts/) · [Creature table](../../tables/creatures/) · [Player colors](../../tables/players/) · [Hero Skills](../../framework/constants/hero-skills/) · [Secondary skills](../../tables/secondary-skills/) · [Resources](../../tables/resources/) · [Spell table](../../tables/spells/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3995) — Introduces many new d-modifiers for all ERM commands, except for GE:E/N, LE:E/N. d+# - integer addition d-# - integer substraction d*# - integer multiplication d:# - integer division d|# sets bits from # (bitwise OR oper…
<!-- ERA3-GENERATED:END -->
