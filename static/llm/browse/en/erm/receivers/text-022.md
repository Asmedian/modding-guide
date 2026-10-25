# Network synchronization (IP)

ID: erm.receivers.ip
URL: /en/erm/receivers/ip/
Part: 1/1
Source references: old-help:rec-ip.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.ip 1 -->
## Receiver IP {#ref-rec-ip}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ip-text"></span><div> 
<div class="erm-align-center erm-paragraph">

<span class="erm-source-title">Receiver <strong>IP</strong> (network game service)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-ip-red"></span><span class="erm-tone-red">!!IP:XXXX;</span> - network service for battle.</strong><br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-ip-1"></span><details class="erm-comment"><summary>Description (<span class="erm-anchor" id="ref-rec-ip-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body"> 
You can now pass values during battle <em>v</em>-variables to another computer and <a href="../fu/#ref-rec-fu-d">call functions on its side</a>.<br>
Let's say you run a script that obeys a player (like splitting stacks). The script runs on one computer, 
since this is a reaction to a human action (mouse click). So whatever you change on your end will not be changed on the other computer.<br>
Now you can transfer all changes or values to another computer without running the script there.<br>
<u></u><span class="erm-anchor" id="ref-rec-ip-3"></span><details class="erm-comment"><summary>Example 1 (<span class="erm-anchor" id="ref-rec-ip-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
On one side you run a script based on mouse action:<pre class="erm-example"><code class="language-erm">...
!!VRv1234:S999;</code></pre>
On another computer, v1234 will still store the old value. For 
to fix this use:
<pre class="erm-example"><code class="language-erm">...
!!VRv1234:S999;
!!IP:V1234/1234;</code></pre>
The last command will immediately send the value v1234 to the other computer.<br><br>
Now to the second part of the problem.<br>
Let's say you use some specific commands that will have an effect on battlefield (for example, casting spells with 
using ERM). Again, if you do things on one side, there will be a problem because nothing happened on the other side. 
Now you can use remote calling for such cases. This means you are calling a function, 
but it runs not on this current computer, but on the second one (the opponent’s computer). Up to 16 parameters are passed.<br>
For example, on your side you have:
<pre class="erm-example"><code class="language-erm">...
!!BMv10:Mi/y5/5;</code></pre>
To execute correctly you must do some things:
<pre class="erm-example"><code class="language-erm">!!BMv10:Mi/y5/5;
!!FU12345:Dv10/i/y5/5;
!?FU12345;
!!BMx1:Mx2/x3/x4;
</code></pre>
That's all. Working principle: command <a href="../fu/#ref-rec-fu-d">FU:D</a> immediately transmits everything <em>x</em>-parameters to another 
computer and call function 12345 there. So the command <span class="erm-anchor" id="ref-rec-ip-erm"></span><span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!BM</strong>v10:M...;</span> will work for 
one computer and command <span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!BM</strong>x1:M...;</span> on the other. If you do it right 
you will get the same effect on both sides.<br>
Note that you can pass the values of some variables with the command <a href="./#ref-rec-ip-v">IP:V</a> and then 
call <a href="../fu/#ref-rec-fu-d">FU:D</a> for transmission of more than 16 <em>x</em>-parameters to another computer.<br><br></div></details>
<u>
</u><span class="erm-anchor" id="ref-rec-ip-4"></span><details class="erm-comment"><summary>Example 2 (<span class="erm-anchor" id="ref-rec-ip-show4"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE

!?BG0;
!!IF:M^Hello!^;
!!VRv99:S99;
!!VRv100:S100;
!!VRv101:S101;
!!IP:V99/100;
!!FU123:D1/2/3/4/5;

!?FU123;
!!IF:M^V99=%V99, V100=%V100, V101=%V101, X1=%X1, X2=%X2, X3=%X3, X4=%X4, X5=%X5^;
</code></pre>
You will see a message <em>"Hello!"</em> For any stack action, you will see a message next 
<em>"V99=99, V100=100, V101=0, X1=1, X2=2, X3=3, X4=4, X5=5"</em> on another computer. Then you will receive a message 
<em>"Hello!"</em> on another computer.<br>
If you continue, the next message you receive will be <em>"V99=99, V100=100, V101=101, X1=1, X2=2, X3=3, X4=4, X5=5"</em>. 
So, v101 has changed. This is because you sent v99 and v100 over the network and called a function that will show the message (so v101 = 0). 
But then trigger !?BG0 triggered on the defender's side and v101 was set to 101.<br>
This example is just a demonstration of actions, because this script:
<pre class="erm-example"><code class="language-erm">!?BG0;
!!IF:M^Hello!^:
!!VRv99:S99;
!!VRv100:S100;
!!VRv101:S101;</code></pre>...will work the same on both sides. But, if you run the script like 
reaction to a human action (usually a mouse click), you will need to think about 
transferring changes to another computer.</div></details></div></details>
<span class="erm-anchor" id="ref-rec-ip-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/ip/#ref-tr-ip">!?IP</a></div>
<hr>	
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ip-d"></span><span class="erm-anchor" id="command-d"></span>D$</strong></span><br>
Set the player to transmit information via !!IP. $ - number 
player (-1 = all players).<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ip-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-ip-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can pass variables and call certain functions not only in 
battle, but also on the map. Therefore you must identify the player you are sending to 
values with this command. It works in the same way as <em>w</em>- hero variables. 
So, if you set !!IP:D, it will remain so until you (or 
anyone else) do not change the value. Please note that if you save and 
then load the game, the host player becomes undefined, so set this 
command in each trigger that sends data. Also note that if 
you send to all players (-1), all variables sent and functions called 
will be launched on all PCs in the game, including yourself. First he will run 
all players in turn, and the last player will redirect to the initiator. This is good 
a way to notify all parties of any changes.</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ip-f"></span><span class="erm-anchor" id="command-f-1-2-v-1-2"></span>F$1/$2</strong></span><br>
Send flags to your opponent's side<br>
        $1 – number of the first flag to be transmitted<br>
        $2 – number of the last flag for 
transfers</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ip-r"></span><span class="erm-anchor" id="command-r"></span>R</strong></span><br>
Restart the random generator on both sides to one 
sequence</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ip-v"></span>V$1/$2</strong></span><br>
Send <em>v</em>-variables for the opponent's side<br>
        $1 – number one <em>v</em>-variable for 
transfers<br>
        $2 – last number <em>v</em>-variable for 
transfers</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ip-w"></span><span class="erm-anchor" id="command-w-1-2-3"></span>W$1/$2/$3</strong></span><br>
Send the hero's W-variable to the opponent's side<br>
        $1 – hero number<br>
        $2 – first <em>w</em>- variable to transfer<br>
        $3 – last <em>w</em>-variable for 
transfers</div>
<hr>
















	
	
</div>
</div>
</section>
:::

## Related reference {#related}

[IP](../../triggers/ip/) · [FU](../../receivers/fu/)



## Related commands and tables {#reference-links}

[Function calls (FU)](../fu/#command-d-1-16) · [Network battle data transfer (IP)](../../triggers/ip/)

<!-- llm:end erm.receivers.ip 1 -->

# Tree of knowledge (KT)

ID: erm.receivers.kt
URL: /en/erm/receivers/kt/
Part: 1/1
Source references: old-help:rec-kt.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.kt 1 -->
## Receiver KT {#ref-rec-kt}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-kt-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>KT</strong> 
(tree of knowledge)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-kt-red"></span><span class="erm-tone-red">!!KT#1/#2/#3:XXXX;</span> 
- tree of knowledge in X Y L.</strong> 
Tree of Knowledge – 
<a href="../../tables/objects/#ref-form-objects" data-context="true">type 102</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-kt-n"></span><span class="erm-anchor" id="command-n"></span>N$</strong></span><br>
Tree of knowledge number (0..31)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-kt-s"></span><span class="erm-anchor" id="command-s"></span>S$</strong></span><br>
Payment type<br>
         $ = 0 (free, free)<br>
         $ = 1 (2000 gold)<br>
         $ = 2 (10 gems)</div>
<hr>














</div>

</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/)
<!-- llm:end erm.receivers.kt 1 -->

# Local map events (LE)

ID: erm.receivers.le
URL: /en/erm/receivers/le/
Part: 1/1
Source references: old-help:rec-le.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.le 1 -->
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
There is, of course, a command <a href="./#ref-rec-le-a">LE:A</a>, but with its help you can only CHANGE artifacts in the bonus table. This new command allows you to set, 
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
	<a href="../../tables/creatures/#ref-form-creature" data-context="true">guards</a> in position #1 (0..6) type $2 and quantity $3<br>
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

<!-- llm:end erm.receivers.le 1 -->

