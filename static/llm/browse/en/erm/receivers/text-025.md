# MP3 music (MP)

ID: erm.receivers.mp
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/mp/
Part: 1/1
Source references: old-help:rec-mp.htm, old-help:rec-mp-era.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.mp 1 -->
## Receiver MP {#ref-rec-mp}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-legacy-c-p-s"></span><span class="erm-anchor" id="command-p0"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mp-text"></span><div>

<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MP</strong> (mp3 – control)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mp-red"></span><span class="erm-tone-red">!!MP:XXXX;</span> 
</strong>–<strong> mp3 - control.</strong><br>
Used to set your own mp3 file for playback in the game.<br>
This command can only be used within a trigger body <a href="../../triggers/mp/#ref-tr-mp">!?MP</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-mp-c"></span><span class="erm-anchor" id="command-c-z"></span><span class="erm-tone-red"><strong>C</strong></span><br>
Stop the currently playing track.<br>
<span class="erm-tone-red"><strong>C$</strong></span><br>
Set/get current game theme<br>
       $ – game number <a href="../../tables/music/#ref-form-mp3" data-context="true">mp3 track</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>P^^</strong></span><br>
Play a specific game theme<br>
<strong><u>Comment</u>:</strong> Do not include the ".mp3" extension in the name, it will be added automatically.</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>P1/$</strong></span><br>
Play a specific game theme<br>
       
$ – game number <a href="../../tables/music/#ref-form-mp3" data-context="true">mp3 track</a><br>
</div>

<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mp-s"></span><span class="erm-anchor" id="command-s-1-2-3"></span>S</strong></span><br>
Play track<br>
<span class="erm-tone-red"><strong>S#/^File_name^</strong></span><br>
File_name – name of the mp3 file, or<br>
<span class="erm-tone-red"><strong>S#/$<br>
       
</strong></span>$ – text variable number (z)<br>
        # – 1..199 (this is your track number) (<a href="../../tables/music/#ref-form-mp3" data-context="true">tracks 
games</a>)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mp-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mp-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Do not include the ".mp3" extension in the name, it will be added automatically.<br>
Principle of use: when any action in the game is played, a certain 
music (see <a href="../../tables/music/#ref-form-mp3" data-context="true">MP3 list</a>), and you can replace it with this receiver.<br>
For example, the Castle corresponds to melody No. 1. We replace it like this:
<pre class="erm-example"><code class="language-erm">!!MP:S1/^..\data\Sample^; 
; instead of Castle music, your file in the MP3 folder will sound there.</code></pre>
Change the file path if necessary:
<pre class="erm-example"><code class="language-erm">!!MP:S1/^Sample^; - file in the main Heroes folder
!!MP:S1/^..\maps\Sample^; - file in the Maps folder</code></pre>
Standard mp3 tracks work correctly, but problems are observed with our own ones. 
Obviously they must have some restrictions, but they are not stated anywhere.<strong><br>
 </strong></div></details>
<hr>
















</div>


</div>
</section>
:::

## Receiver MP {#ref-rec-mp-era}

:::erm
<section class="erm-reference" lang="en">
<div>


<span class="erm-anchor" id="ref-rec-mp-era-text"></span><div>
<span class="erm-anchor" id="ref-rec-mp-era-q2"></span><blockquote class="erm-tone-quote erm-legacy-code erm-note">Receiver <strong>!!MP</strong> (as well as trigger !?MP), starting from <a href="../../compatibility/#ref-era-index">ERA</a> version 2.8.7, has been completely redesigned.<br>
See <a href="./#ref-rec-mp">description of the old implementation !!MP</a></blockquote>

<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MP</strong><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a> (new implementation of mp3 control)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mp-era-red"></span><span class="erm-tone-red">!!MP:XXXX;</span> 
</strong>–<strong> mp3 - control.</strong><br>
Used to control playback of mp3 files in the game.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mp-era-3"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-mp-era-show3"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Here's how you can design your own dialogues using audio (example from <span class="erm-anchor" id="ref-rec-mp-era-n1"></span><strong class="erm-tone-purple erm-strong">Algor</strong>'a):
<pre class="erm-example"><code class="language-erm">!!MP:C?z1;
!!SN:W^old_track^/z1;		[save current music track]
!!MP:P^my_mp3_track^/1/0;	[turning on your track (from the MP3 folder) from the beginning (1) and without repeating (0)]
!!IF:M^Dialogue with sound^; [can also be used to call extended dialogs DL:S]
!!SN:W^old_track^/?z1;
!!MP:Pz1/0/1;			[return the previous track from where it stopped (0) and repeat at the end (1)]</code></pre></div></details>
<span class="erm-anchor" id="ref-rec-mp-era-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: trigger <a href="../../triggers/mp/#ref-tr-mp">!?MP</a><br></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-mp-era-c"></span><span class="erm-anchor"></span><span class="erm-tone-red"><strong>C?z#<br>C?s^name^</strong></span><br>
Get the name of the current game <a href="../../tables/music/#ref-form-track" data-context="true">topics</a> to z# (or to a string named variable)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mp-era-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mp-era-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The topic name will be in lowercase and without the mp3 extension.<br>
The command can be used at any time.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">; An example of getting a track into a named variable
!!MP:C?s^theme^;
!!IF:M^The track %S(theme).mp3^ is currently playing;</code></pre></div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-mp-era-p"></span><span class="erm-anchor" id="command-p-name-1-2"></span><span class="erm-tone-red"><strong>Pz#/#1/#2<br>P^name^/#1/#2</strong></span><br>
Play a specific game theme.
</div><pre>        ^name^ – name <a href="../../tables/music/#ref-form-track" data-context="true">mp3 track</a> (no mp3 extension)
        #1 – playback position tracking (1 = no, 0 = yes)
        #2 – repeat track (0 = no, 1 = yes)</pre>
<strong></strong><span class="erm-anchor" id="ref-rec-mp-era-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mp-era-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
The command calls the function <em class="erm-tone-purple erm-legacy-event">ChangedMp3Theme</em> and generates an event <em class="erm-tone-purple erm-legacy-event">OnMp3MusicChange</em> (i.e. <a href="../../triggers/mp/#ref-tr-mp">!?MP</a>).<br>
If #1=1, playback of the track starts from the beginning after resuming from a pause.<br>
If #1=0 – the current position of the track playback is remembered, and after resuming from a pause it will continue from where it stopped.<br>
Parameter #2 controls automatic playback of the theme after it ends (only with #1=0).<br>
Note that parameters #1 and #2 are completely ignored if a track with the same name is currently playing. You may have to pause the current track before starting another one to start playback from the beginning or without repeating.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!MP:P^cstletown^/0/1; play the Castle game theme on a loop</code></pre></div></details>

<div class="erm-paragraph"><span class="erm-tone-red"><strong>P0/#</strong></span><br>
Pause (0) or resume (1) the current game theme.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!!MP:P0/0; Silence is the key to a sound sleep ;-)</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-mp-era-r"></span><span class="erm-anchor" id="command-r"></span>
<span class="erm-tone-red"><strong>R$</strong></span><br>
Set/get game theme changing mode (0 = disable, 1 = enable)<br>
Can be used to prevent music changes for a while.<br>
<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?MP;
!!MP:R0; The current track will never change</code></pre></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-mp-era-s"></span><span class="erm-anchor"></span>
<span class="erm-tone-red"><strong>S?z#/#1/#2<br>S?^name^/#1/#2</strong></span><br>
Set/get settings for trigger <a href="../../triggers/mp/#ref-tr-mp">!?MP</a>
</div><pre>        ^name^ – name <a href="../../tables/music/#ref-form-track" data-context="true">mp3 track</a> (set/get)
        #1 – playback position tracking (1 = no, 0 = yes)
        #2 – repeat track (0 = no, 1 = yes)</pre>
<u>Examples</u>:
<pre class="erm-example"><code class="language-erm">!?MP;
!!MP:S?z2/d/0; All game themes will not be repeated

!?MP;
!!MP:S^mainmenu^/0/1; Play the theme from the SoD main menu throughout the game</code></pre>
<hr>
















</div>


</div>
</section>
:::

## Related reference {#related}

[MP](../../triggers/mp/)



## Related commands and tables {#reference-links}

[Music theme changes (MP)](../../triggers/mp/) · [Music: IDs and MP3 names](../../tables/music/) · [ERM debugging and compatibility](../../compatibility/)
<!-- llm:end erm.receivers.mp 1 -->

# Spell resistance (MR)

ID: erm.receivers.mr
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/mr/
Part: 1/1
Source references: old-help:rec-mr.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.mr 1 -->
## Receiver MR {#ref-rec-mr}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mr-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MR</strong> (stack magic resistance)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mr-red"></span><span class="erm-tone-red">!!MR:XXXX;</span> - receiver to control ERM magic resistance.</strong><br>
You can call this receiver ONLY from a trigger <a href="../../triggers/mr/#ref-tr-mr">!?MR</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-d"></span><span class="erm-anchor" id="command-d"></span>D$</strong></span><br>
Base (no resistance) damage<br>
If you change it after the trigger <a href="../../triggers/mr/#ref-tr-mr">!?MR0</a>, your value will be used as the spell's base damage to calculate the creature's resistance.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-f"></span><span class="erm-anchor" id="command-f"></span>F$</strong></span><span class="erm-tone-red"><strong></strong></span><br>
Final (adjusted) damage<br>
If you check it in <a href="../../triggers/mr/#ref-tr-mr">!?MR0</a>, it must be equal to the value of parameter D.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mr-2"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mr-show2"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Setting this value in the trigger !?MR0 will not affect the damage, since the damage is calculated after this trigger. 
It is useful to use this command in trigger !?MR1. This way you can ignore the usual WoG resistance and set your value.<br>
<span class="erm-anchor" id="ref-rec-mr-bold"></span><em class="erm-strong">Note:</em> "Death Ripple" is processed first in triggers !?MR, and then also in <a href="../../triggers/mf/#ref-tr-mf">!?MF1</a>, 
and therefore changes in damage through MR:F are not final for this spell - take this into account when writing scripts.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-m"></span><span class="erm-anchor" id="command-m-n-s"></span>M$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Creature type</a><br>
Typically you can use this to get the creature number, but you can also set a value to "simulate" resistance 
(in fact, only Golems and Elementals have resistance)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-n"></span>N$</strong></span><br>
Stack number at battlefield (0..41)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mr-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mr-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
This command should return the number of the stack that was magicked, but in fact it returns garbage.<br>
<em class="erm-strong">Note:</em> this bug has been fixed in <a href="../../compatibility/#ref-era-index">ERA</a>.<br>
Here is a working script with which you can generate the action MR:N..
<pre class="erm-example"><code class="language-erm">
!?FU29999; function for getting stack ID
;vx1 - stack number (default is -1)
!!UN:C42147184/4/?y1; 
!!VRy1:+56; 
!!UN:Cy1/4/?y2; get a battlefield cell where spell is cast.
!!FU|y2&lt;0/y2&gt;186:E;
!!BU:Ey2/?y3; get stack ID in cell y2
!!FU&amp;y3=-1:E;
!!VRvx1:Sy3;

!?MR1;
!!VRv2:S-1;
!!FU29999:Pv2; get stack ID in v2
!!FU&amp;v2=-1:E;
...</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-s"></span>S$</strong></span><br>
<a href="../../tables/spells/#ref-form-spell" data-context="true">Spell number</a><br>
Again, getting the spell number is most useful, but if you set it, you can attract Elemental resistance as well. 
But the base damage is calculated before the trigger works, so changing the spell won't change the damage.</div>
<hr>

















</div>
</div>
</section>
:::

## Related reference {#related}

[MR](../../triggers/mr/) · [MF](../../receivers/mf/)



## Related commands and tables {#reference-links}

[Magic resistance (MR)](../../triggers/mr/) · [Physical damage calculation (MF)](../../triggers/mf/) · [Creature table](../../tables/creatures/) · [ERM debugging and compatibility](../../compatibility/) · [Spell table](../../tables/spells/)
<!-- llm:end erm.receivers.mr 1 -->

# Obelisk (MT)

ID: erm.receivers.mt
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/mt/
Part: 1/1
Source references: old-help:rec-mt.htm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.mt 1 -->
## Receiver MT {#ref-rec-mt}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mt-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>MT</strong> 
(obelisk)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mt-red"></span><span class="erm-tone-red">!!MT#1/#2/#3:XXXX;</span></strong> – <strong>obelisk at X Y L.</strong> 
Obelisk – <a href="../../tables/objects/#ref-form-objects" data-context="true">type 57</a>.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-mt-1"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-mt-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Using low level command <a href="../un/#ref-rec-un-c">UN:C</a> we can, for example, get the coordinates of the buried Grail when visiting the obelisk:
<pre class="erm-example"><code class="language-erm">!?OB57&amp;1000;
!!UN:C6919480/4/?y1;
!!VRy1:+128656;
!!UN:Cy1/2/?y2; y2 - x
!!VRy1:+2;
!!UN:Cy1/2/?y3; y3 - y
!!VRy1:+2;
!!UN:Cy1/1/?y4; y4 - z
!!VRy1:+2;
!!UN:Cy1/1/?y5; y5=1 Grail buried, y5=0 Grail dug</code></pre>
</div></details>
<span class="erm-anchor" id="ref-rec-mt-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: command <a href="../un/#ref-rec-un-l1" title="Control of visits to the obelisk">!!UN:L</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mt-n"></span><span class="erm-anchor" id="command-n"></span>N$</strong></span><br>
Obelisk number (0...)</div>
<hr>
















</div>
</div>
</section>
:::

## Related reference {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Related commands and tables {#reference-links}

[Game object table](../../tables/objects/) · [General game operations (UN)](../un/#command-cbase-size-cbase-offset-size) · [General game operations (UN)](../un/)
<!-- llm:end erm.receivers.mt 1 -->

