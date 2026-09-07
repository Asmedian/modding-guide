---
{"title":"Network synchronization (IP)","summary":"IP receiver: network synchronization, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Network synchronization (IP)"}
---

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
That's all. Working principle: team <a href="../fu/#ref-rec-fu-d">FU:D</a> immediately transmits everything <em>x</em>-parameters to another 
computer and call function 12345 there. So the command <span class="erm-anchor" id="ref-rec-ip-erm"></span><span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!BM</strong>v10:M...;</span> will work for 
one computer and team <span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!BM</strong>x1:M...;</span> on the other. If you do it right 
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
then load the game, the host player becomes undefined, so install this 
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

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l727) — Implemented advanced ERM memory synchronization means in network games. Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for further synchronization. Syntax: !!IP:M^var_name_1^/^var_name_2^/...; !!IP:M…
- [ERA 3.9.12, *](../../compatibility/#era3-v-3-9-12-l769) — The order of network battle events: !?FU(OnBeforeBattle); on attacker side only, battle may be cancelled !?FU(OnBeforeBattleUniversal); on attacker side, battle may still be cancelled !?FU(OnBeforeBattleBeforeDataSend); …
<!-- ERA3-GENERATED:END -->
