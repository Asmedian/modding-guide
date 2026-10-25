# General game operations (UN)

ID: erm.receivers.un
URL: https://asmedian.github.io/modding-guide/en/erm/receivers/un/
Part: 3/4
Source references: old-help:rec-un.htm, era-changelog:era-iii-changelog.txt
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.receivers.un 3 -->
Example: copy the path to z10. Let our Heroes be installed in <em class="erm-legacy-file">C:\HOMM\WOG</em>, command <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!UN</span>:J9/2/10;</strong><br>
We receive the following text in z10:
<pre class="erm-example"><code class="language-erm">C:\HOMM\WOG</code></pre></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j10"></span>J10</strong></span><br>
Add variables to <em class="erm-legacy-file">WOGERMLOG.TXT</em><br>
This command can be used at any time (write all non-zero variables to a file)</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j11"></span><span class="erm-anchor" id="command-j11-j13-k1-k2-m"></span>J11/$</strong></span><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Set/check/get mouse behavior on click <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> on the enemy stack in battle.<br>
       $ = 0 – the window remains on the screen (WoG-style).<br>
       $ = 1 – the window closes when the mouse button is released (SoD-style)<br>
Command information is saved in the game.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-un-j13"></span><span class="erm-tone-red"><strong>J13/$</strong></span><a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Resetting commanders (depending on the current state <a href="./#ref-rec-un-p2">WoG options</a> 3 and 6).</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-k"></span>K#/$</strong></span><br>
Set New Week options<br>
K1/$ – ban ($ = 1) all “Week …” (creatures/imps) or allow ($ = 0)<br>
K2/$ – set a message when a new week begins in the text variable $<br>
</div><span class="erm-anchor" id="ref-rec-un-48"></span><details class="erm-comment"><summary><u><strong>Comment (<span class="erm-anchor" id="ref-rec-un-show48"></span><strong class="erm-toggle-label">show</strong>)</strong></u></summary><div class="erm-comment-body">
This command does NOT cancel the appearance of the Imp week/month if Inferno is built with Grail. However, this can be circumvented by using the following code:
<pre class="erm-example"><code class="language-erm">; Removing the Grail bonus Inferno
!!UN:C5015000/1/10; (original = 3)</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-l"></span><span class="erm-anchor" id="command-l-x-y-level-time-l-player-obelisk"></span>L#1/#2/#3/#4</strong></span><br>
Move your gaze to position<br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L<br>
         #4 – waiting time (1000 = 1 
second)<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-20"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show20"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Example 
	using the command - the usual Eye of the Magician, opening the card, 
but this command only shifts the gaze. Also if you use this command 
in the trigger of an object that has standard, non-ERM functions, a window may open 
exchange between the hero and his phantom clone. To avoid this, turn off 
object properties by command <a href="../ob/#ref-rec-ob-s">
OB:S</a>, and after completing this, turn the receiver back on (if necessary).</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-l1"></span>L#1/#2/$</strong></span><br>
Set/check/get whether the obelisk is visited?
</div><pre>        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player number</a> (0..7)
	-2 = for everyone
	-1 = for current
        #2 – obelisk number (0..47; -1 = all)
        $ – obelisk visited (1) or not (0)</pre>
<div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../mt/#ref-rec-mt">!!MT</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-m"></span>M#[/$]</strong></span><br>
Set the parameters “Month...”<br>
M0 – normal, unchanged month<br>
M1 – ban creature months *2 and /2<br>
M2/$ – set month
<a href="../../tables/creatures/#ref-form-creature" data-context="true">creature $</a>*2<br>
M3 – set plague month (all creatures /2)<br>
<span class="erm-anchor" id="ref-rec-un-bold"></span><em class="erm-strong">Note:</em> month of Bes, if Grail is built in Inferno, this command does NOT cancel (but there is another way out — see <a href="./#ref-rec-un-k">here</a>).</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-n"></span>N…</strong></span><br>
Find out the name:<br>
<span class="erm-tone-red"><strong>N0/z#/$</strong></span> – name <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact</a> ($=number)<br>
<span class="erm-tone-red"><strong>N1/z#/$</strong></span> – name <a href="../../tables/spells/#ref-form-spell" data-context="true">spells</a> ($=number)<br>
<span class="erm-tone-red"><strong>N2/z#/$1/$2</strong></span> 
– <a href="../../tables/buildings/#ref-form-buldings" data-context="true">building name</a> ($2) in the town $1 (0..8)<br>
<span class="erm-tone-red"><strong>N3/z#/$1/$2</strong></span> 
– name <a href="../../tables/creatures/#ref-form-creature" data-context="true">creature</a> ($1) (single: $2=0, 
several: $2 = 1)<br>
<span class="erm-tone-red"><strong>N4/z#/$</strong></span> – name <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">secondary skill</a> ($=number)<br>
This command allows you to get the name of an artifact, spell, building, creature 
or secondary skill by its number and enter it in <em>z</em>-variable for further 
use in messages.<br>
<u>
</u><br></div><span class="erm-anchor" id="ref-rec-un-21"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-un-show21"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#UN:N0/z100/5;
!#UN:N1/z101/6;
!#UN:N2/102/7/1;
!#UN:N3/103/8/0;
!#UN:N3/104/8/1;
!#IF:M^=%Z100=%Z101=%Z102=%Z103=%Z104=^;</code></pre></div></details>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>N5/#1/#2/#3/#4</strong></span><br>
Write down <em>z</em>-a variable to the general section of the INI file:
</div><pre>        #1 – number <em>z</em>-variable for recording
        #2 – option number (any positive value)
        #3 – optional parameter - number <em>z</em>-variable for writing to the user section
        #4 – optional parameter - number <em>z</em>-a variable storing the file name (without the ".INI" part) can be given an absolute path.
<em>Note:</em> if you use option #4, you must use option #3.</pre>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>N6/#1/#2//#3/#4</strong></span><br>
Read <em>z</em>-variable from the general section of the INI file:
</div><pre>        #1 – number <em>z</em>-variable for saving text
        #2 – option number (any positive value)
        #3 – optional parameter - number <em>z</em>-variable to use a custom section instead of a common one.
        #4 – optional parameter - number <em>z</em>-a variable storing the file name (without the ".INI" part) can be given an absolute path.
<em>Note:</em> if you use option #4, you must use option #3.</pre>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-un-22"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show22"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">You can save and load global or local <em>z</em>-variables. The option number must be unique to the save procedure 
or download (one option number per <em>z</em>-variable). So, if you saved 
<em>z</em>-variable as option 123456, you can load the saved value into any 
another <em>z</em>-variable using the same option 123456.<br>
The value is not saved when saving the game, but is written to the external INI 
file (<em class="erm-legacy-file">wog,ini</em>, if parameter 4 is omitted). You can use this command without 
problems as instructions. So, to write the variable z-1, named 
"Main_variable", to file <em class="erm-legacy-file">My.var</em> to a folder <em class="erm-legacy-file">GAMES</em> (section "MyLocalSettings") 
with option 4, use:
<pre class="erm-example"><code class="language-erm">!!VRy1:S4;
!!VRz-1:S^Main_variable^;
!!VRz-2:S^MyLocalSettings^;
!!VRz-3:S^GAMES\My.var^;
!!UN:N5/z-1/y1/-2/-3;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-o"></span><span class="erm-anchor" id="command-o-x-y-level-hint-refresh"></span>O$1/$2/$3</strong></span><br>
Delete object
</div><pre>        $1 – X
        $2 – Y
        $3 – L (level)
<em>Additional syntax:</em>
<span class="erm-tone-red"><strong>O$1/$2/$3[/#4/#5]</strong></span>
Delete object in X/Y/L And the description. (if set)
        #4 – remove description?
	1 – yes
	0 – no (default)
        #5 - update?
	1 – yes (default)
	0 – no</pre>
<u></u> <span class="erm-anchor" id="ref-rec-un-23"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show23"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
In both cases X/Y/L means the lower right corner of the object.<br>
There are several tables for each feature on the map. And cross-references don't always exist. 
Heroes usually use coordinate searches. When you delete an object, some tables remain (storing information about the deleted object). 
If you then add a new object in the same location, the new information will be added to the table. 
But then, when the game needs to get information about this new object, it will start searching the table by position. 
Obviously, information about the old (deleted) object will be found first.<br>
I recommend setting up the old object, removing it, putting in a new one, and setting it up again.<br>
Please keep in mind that this problem may only apply to objects of the same type and may not occur in every case.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-p"></span><span class="erm-anchor" id="command-p-p-option"></span>P$</strong></span><br>
Set the behavior of level 8 dwellings<br>
         $ = 1 – 8th level housing (does not work after hiring)<br>
         $ = 0 – as usual<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-24"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show24"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Behavior like a normal dwelling means that the dwelling 
Level 8 will function like any other dwelling in the game, i.e. you must visit the dwelling to recruit creatures every week, 
and if they are of the 8th level, then they will only be added to the corresponding creatures of the eighth level in the corresponding castle with the corresponding dwelling of the 7th level.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-un-p2"></span><span class="erm-tone-red"><strong>P#/$</strong></span><br>
Setting WoG options<br>
         # - option number<br>
         $ - option status<br>
Some options:<br>
                   # = 0 – behavior of level 8 dwellings (see above)<br>
                   # = 1 – shooting tower experience: like SoD (1) or like WoG (0)<br>
                   # = 2 – you can leave creatures on the map (1 – you can’t, 0 – you can)<br>
                   # = 3 – commanders: 1 – prohibit, 0 – allow.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-un-25"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show25"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Now, if the card has internal scripts and does not have a command <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/#</strong>, 
The map launches under WoG 3.56 conditions (without commanders, etc.). But if the card has this command (it doesn't matter 
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/0</strong> or <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/1</strong>), the map is accepted as new and runs under WoG 3.57 conditions 
(so, all internal features of WoG are set from the WoG configuration settings file or using the UN:P commands). 
The problem with the inability to enable commanders in the instructions has now been fixed <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/0</strong> when used in a timer trigger.</div></details>
<div>                   # = 4 – destruction of locks: prohibit (1) or allow (0)<br>
                   # = 5 – WoGify: none (0), all cards in WoG format (1), all cards in any format (2)<br>
                   # = 6 – heroes start with commanders or not (0 – with, 1 – without (must be hired)</div>
<u></u><span class="erm-anchor" id="ref-rec-un-26"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show26"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">For the commander to be hired in the town for 100 gold, instead of being automatically received by the hero at the beginning of the game, 
need to use <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">UN</span>:P6/1</strong> in front of the command <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">UN</span>:P3/0</strong>.</div></details>
<div>                   # = 7 – dwellings accumulate creatures: 0 – no, 1 – yes<br>
                   # = 8 – houses accumulate guards: 0 – no, 1 – yes<br>
                   # = 9 – creation of Sylvan Centaurs: 1 - allowed, 0 - not</div>
<u></u><span class="erm-anchor" id="ref-rec-un-27"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show27"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
If the option is enabled, Sylvan Centaurs can be created for free by clicking <span class="erm-key">Ctrl</span> + <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> by a stack of Centaur Captains or Grand Elves in the HERO WINDOW (!). 
An equal number of Centaurs and Elves will be replaced by an equal number of Sylvan Centaurs.<br>
That is 10 Grand Elves plus 10 Centaur Captains = 10 Sylvan Centaurs.<br>
<em class="erm-strong">Note:</em> Sylvan centaurs do not retain any experience from pre-merging centaurs or elves.</div></details>
<div>                   # = 10 – left units will join back (1) or not (0)</div>
<u></u><span class="erm-anchor" id="ref-rec-un-28"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show28"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">If active, units left by right click will rejoin the hero if he attacks them.<br>
<em class="erm-strong">Note:</em> all party experience will be lost when leaving the creatures.</div></details>
<div class="erm-paragraph">
WoGified and non-WoGified WoG maps without scripts will use 
WoG options above.<br>
Non-WoGified WoG maps with scripts will have disabled commanders 
default. To enable them you must use <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!UN</span>:P3/0</strong> after the start of the map. 
Setting this command with instructions - <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/0</strong> - Will NOT allow commanders on this map.<br>
To set mercenary commanders for 1000 gold, use the command <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">UN</span>:P6/1</strong> in front of the command <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">UN</span>:P3/0</strong>. You can paste both commands on one line:
<pre class="erm-example"><code class="language-erm">!!UN:P6/1 P3/0;</code></pre><br>
                   # = 900 – stack experience: 0 – disabled, 1 – enabled<br>
                   # = 901 – stack experience system: <br>
                       0 – each creature receives the full amount of experience;<br>
                       1 – high division: 
creatures of a small level receive more experience than creatures of a large level; <br>
                       2 - low division: high level creatures gain more experience than creatures 
small level; <br>
                       3 - divided equally among all creatures<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-29"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show29"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
Currently the default experience system is 0. Other options have been used previously to find the best one to use. Even though 
rejected, they remain in the game so anyone can experiment with 
this option. If you decide to use an alternative system, you may 
You will also need to set a higher multiplier with the command <a href="../ea/#ref-rec-ea-h">EA:H</a> for human players, and 
<a href="../ea/#ref-rec-ea-a">EA:A</a> (it's also possible
<a href="../ea/#ref-rec-ea-s">EA:S</a> and/or <a href="../ea/#ref-rec-ea-t">EA:T</a>) for 
computer players, because experience will begin to be shared among all creatures in battle, and 
will be significantly less.</div></details>
<div class="erm-paragraph">                   
# = 902 – you can throw artifacts onto the map: 0 – no, 1 – yes<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-30"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show30"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
You can use the old option 2 and the new 902 together:
<div class="table-wrap erm-reference-table"><table width="45%">
<tr>
	<td colspan="2">
	<div class="erm-align-center erm-paragraph">Option number</div></td>
	<td class="erm-align-center" rowspan="2" width="83%">Effect</td>
</tr>
<tr>
	<td colspan="2">
	<div class="erm-align-center erm-paragraph">Status</div></td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">
	<div class="erm-align-center erm-paragraph">2</div></td>
	<td class="erm-align-center" width="9%">902</td>
	<td class="erm-align-center" width="83%"> </td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">0</td>
	<td class="erm-align-center" width="9%">0</td>
	<td class="erm-align-center" width="83%">you can leave troops</td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">0</td>
	<td class="erm-align-center" width="9%">1</td>
	<td class="erm-align-center" width="83%">you can leave troops or artifacts</td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">1</td>
	<td class="erm-align-center" width="9%">0</td>
	<td class="erm-align-center" width="83%">you can't leave anything</td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">1</td>
	<td class="erm-align-center" width="9%">1</td>
	<td class="erm-align-center" width="83%">you can leave artifacts</td>
</tr></table></div></div></details>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-un-cheat"></span>
                   
# = 903 – cheat codes and cheat menu: 0 – allow, 1 – disable<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-31"></span><details class="erm-comment"><summary>Comment (<span class="erm-anchor" id="ref-rec-un-show31"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">Disables cheats and cheat menus (if enabled). 
If the cheat menu is enabled, it will be shown even if disabled by this option, but will not have any effect.<br>
<em>Note</em>: Although cheats are disabled in multiplayer, this option will prevent players from using cheats when loading through single player.</div></details><br>
<div>                   
<span class="erm-anchor" id="ref-rec-un-p904"></span># = 904, 905 – settings for the appearance of error messages. If 1, any message 
no error message will appear, but option 905 will be set to 1 in any case. 
If option 904 = 0, a message will be shown and option 905 will be set to 1. 
Moreover, if the message is canceled, script execution will not be terminated (in 
section of the current trigger). So, you can use "risky" commands.
<u></u><span class="erm-anchor" id="ref-rec-un-32"></span><details class="erm-comment"><summary>
Example (<span class="erm-anchor" id="ref-rec-un-show32"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body"><blockquote class="erm-note">
	<pre class="erm-example"><code class="language-erm">!?FU...
...
!!UN:P904/1 P905/0; cancel error message
!!HE-1:N?v99; get hero number in v99
!!UN:P905/?i;
!!FU&amp;i&gt;0:E; exit if error

If you are using the standard version..
!?FU...
...
!!HE-1:N?v99;
..the error will appear if hero is not involved in the trigger.</code></pre></blockquote></div></details></div><br>
<div>                   
# = 906 – creatures gain experience: 0 – they can get it, 1 – they can’t.<br>
<em>Note:</em> if you set this option to 1 and the experience system will be 
is enabled, creatures will not gain experience in battles, but you will be able to set 
experience through ERM.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-q"></span><span class="erm-anchor" id="command-q-1-r"></span>Q#</strong></span><br>
Win or lose the game for the CURRENT player<br>
         # = 0 – lose<br>
         # = 1 – win<br>
<em>Extended syntax:</em><br>
<span class="erm-tone-red"><strong>Q#/1</strong></span><br>
If you use the second phantom parameter, winning or losing the game is done by other functions.<br>
Use if the previous one does not work.<br>
<u>
</u><br></div><span class="erm-anchor" id="ref-rec-un-33"></span><details class="erm-comment"><summary>Example (<span class="erm-anchor" id="ref-rec-un-show33"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!UN:Q0/1; - loss of the current player
!!UN:Q1/1; - victory of the current player</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-r"></span>R#</strong></span><br>
Refresh screen<br>
         # = 1 – update the map and hero screen (everything on the right side)<br>
         # = 2 – update the resource line<br>
         # = 3 – refresh inside the hero window. 

<!-- llm:end erm.receivers.un 3 -->

