---
{"title":"MP3 music (MP)","summary":"MP receiver: mp3 music, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"MP3 music (MP)"}
---

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
Used to install your own mp3 file for playback in the game.<br>
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
