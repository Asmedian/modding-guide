---
{"title":"Global events (GE)","summary":"GE receiver: global events, command parameters, and limitations.","translationStatus":"reviewed"}
---

## Receiver GE {#ref-rec-ge}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="modern-strings"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ge-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>GE</strong> (global events)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-ge-red"></span><span class="erm-tone-red">!!GE#:XXXX;</span> 
- receiver for global events (# - event number).</strong> 
Number – the first number in the message text (for example, “100Hello!” will be shown as “Hello!”, 
and the event will be numbered 100). Used to change the parameters of global (timed) events.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-ge-1"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-ge-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Resetting the player’s starting resources to zero without any explanations or pictures (the instructions cannot be used):
<pre class="erm-example"><code class="language-erm">!?GE1; - there must be a global event starting with 1.
!!OW:R0/0/0; - reset all resources of player 0 (red)
!!OW:R0/1/0;
!!OW:R0/2/0;
!!OW:R0/3/0;
!!OW:R0/4/0;
!!OW:R0/5/0;
!!OW:R0/6/0;</code></pre></div></details>
<span class="erm-anchor" id="ref-rec-ge-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/ge/#ref-tr-ge">!?GE</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-b"></span><span class="erm-anchor" id="command-b-1-2"></span>B#1/$2</strong></span><br>
Set/check/get the number of resource #1 (<a href="../../tables/resources/#ref-form-resource" data-context="true">0..6</a>) 
by $2 (can be negative)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-d"></span><span class="erm-anchor" id="command-d-1-2"></span>D#1/#2</strong></span><br>
Disable (#2 = 1) or enable (#2 = 0) event for <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player #1</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-e"></span><span class="erm-anchor" id="command-e-n"></span>E$</strong></span><br>
Install <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">players</a>who are allowed to receive the event.<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-ge-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ge-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">If you use $ starting with d parameter it will be 
mean like "or", i.e. you can allow players to receive an event, 
without changing the other players.<br>
Example: E3 allows only the red and blue players to receive the event, 
while Ed3 allows the red and blue player to receive the event, with the remaining colors, 
set in the event itself in the editor remain unchanged.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-f"></span><span class="erm-anchor" id="command-f-r"></span>F$</strong></span><br>
Set/check/get the day of first appearance on $</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-h"></span><span class="erm-anchor" id="command-h-q"></span>H#</strong></span><br>
Apply or check if events are allowed for human players (1 = allowed, 0 = disabled)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-m"></span><span class="erm-anchor" id="command-m-text-m-m-1"></span>M^Text^</strong></span><br>
Set text message. It can't be longer 
original. Can contain any characters except "^" and ";"</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>M#</strong></span><br>
Set the event text to the same as in the global event numbered #.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>M-1</strong></span><br>
Do not show the message recorded in the event itself</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-n"></span>N$</strong></span><br>
Install <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">players</a>, which can NOT trigger an event.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ge-3"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ge-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If you use $ starting with the parameter d, it will mean like "AND" 
i.e. you can prevent players from receiving the event without changing other players.<br>
Example: N3 prohibits only the red and blue players from receiving the event, 
while Nd3 prohibits the red and blue player from receiving the event, and the remaining colors, 
set in the event itself in the editor remain unchanged.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-q"></span>Q#</strong></span><br>
Apply or check if an event is allowed for computer players (1 = allowed, 0 = disabled)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-r"></span>R$</strong></span><br>
Set/check/get the interval between appearances on $.</div>
<hr>


















</div>
</div>
</section>
:::

## Notes on modern ERA versions {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!GE#:subcommands;</code></div>
<div class="erm-paragraph">In the table, <code>$</code> denotes a read/write parameter, <code>#</code> an input, and <code>?$</code> an output. Individual commands define their identifiers and ranges.</div>
<hr>
<div class="erm-paragraph">Resource 0..6 and amount; a negative reward removes resources.</div>
<hr>
<div class="erm-paragraph">Allowed (E) or forbidden (N) player mask. Prefix d adjusts the listed permissions while preserving others, rather than simply adding a number to the mask.</div>
<hr>
<div class="erm-paragraph">F is the first game day; R is the repeat interval.</div>
<hr>
<div class="erm-paragraph">H allows the event for humans; Q for AI: 1 allowed, 0 forbidden.</div>
<hr>
<div class="erm-paragraph">Message text, another global event’s text by number, or suppress the message (-1). In the classic implementation a new literal must not exceed the original text length.</div>
<hr>
<div class="erm-paragraph">Player ID and event prohibition: 1 forbid, 0 allow.</div>
<hr>
<div class="erm-paragraph">The number is the first number in the event text, not its position in the editor list. The event must already exist on the map; the receiver edits its settings.</div>
<hr>
<div class="erm-paragraph">ERA 3.9.15 rewrote message handling to accept arbitrary strings. Numeric references to another event’s message (such as GE:M30) are disabled. -1 instead of an empty string is deprecated; pass <code>^^</code>. Numeric forms above are retained for reading legacy scripts.</div></section>
:::

## Related reference {#related}

[GE](../../triggers/ge/)



## Related commands and tables {#reference-links}

[Global map event (GE)](../../triggers/ge/) · [Resources](../../tables/resources/) · [Player colors](../../tables/players/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l441) — Rewritten WoG "ApplyString" and "NewMesMan" functions, allowing any string in multiple ERM commands (CA, LE, GE, etc). Disabled syntax of setting event message to the one from event with given ID (ex, "GE:M30" for event …
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3995) — Introduces many new d-modifiers for all ERM commands, except for GE:E/N, LE:E/N. d+# - integer addition d-# - integer substraction d*# - integer multiplication d:# - integer division d|# sets bits from # (bitwise OR oper…
<!-- ERA3-GENERATED:END -->
