---
{"title":"Object quests (QU)","summary":"QU receiver: object quests, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"Object quests (QU)"}
---

## Receiver QU {#ref-rec-qu}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="command-q4-1-2-3-4-5"></span><span class="erm-anchor" id="command-q5-q5-q6-q6-q7-q8-q9"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-qu-text"></span><div>

<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Receiver <strong>QU</strong>
<a href="../../compatibility/#ref-era-index" title="Works only with ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(task object)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-qu-red"></span><span class="erm-tone-red">!!QU#1/#2/#3:XXXX;</span> 
- Task object. Designed to change the attributes of the Seer's Hut or the Border Guard on the map in X Y L coordinates (#1/#2/#3).</strong><br> 
<em>Syntax extension:</em><br>
<span class="erm-tone-red"><strong>!!QU#:XXXX;</strong></span> 
- Object-task by coordinates in variables v[#], v[#+1], v[#+2]</div>
<u></u><span class="erm-anchor" id="ref-rec-qu-1"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-qu-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
When installing the Seer's Hut on the map (<a href="../../tables/objects/#ref-form-objects-t83" data-context="true">type 83</a>) or 
Border Guard (<a href="../../tables/objects/#ref-form-objects" data-context="true">type 9</a>) using ERM, 
don't forget to call <a href="./#ref-rec-qu-q">QU:I</a> after the object is created. 
Otherwise, you will not be able to customize or interact with the object (most likely the game will crash).</div></details>
<span class="erm-anchor" id="ref-rec-qu-q1"></span><span class="erm-anchor" id="command-q1-q2-1-2-3-4-q3-1-2"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../ob/#ref-rec-ob">!!OB</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-d"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
Set/check/get the last day of the assignment at $.<br>
<strong><u>Comment</u>:</strong> the object must have a job (checked using <a href="./#ref-rec-qu-i">QU:Q</a>), otherwise this command will cause an ERM error.</div>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-i"></span><span class="erm-anchor" id="command-i-d-n"></span><span class="erm-tone-red"><strong>I</strong></span><br>
Initialize the object.</div>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-m"></span><span class="erm-anchor" id="command-m"></span><span class="erm-tone-red"><strong>M#/^text^</strong></span><br>
Set standard ERM string as message text. The line may contain variable mapping codes.
</div><pre>        # = 0 - message with offer
        # = 1 - progress message
        # = 2 - completion message</pre>
<div class="erm-paragraph"><strong><u>Comment</u>:</strong> the object must have a job (checked using <a href="./#ref-rec-qu-q">QU:Q</a>), otherwise this command will cause an ERM error.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M#/$</strong></span><br>
Set/get the message text into a string variable.<br>
<em>Extended syntax:</em><br>
<span class="erm-tone-red"><strong>M#/0</strong></span><br>
Delete message.<br>
<em>Advanced syntax (for advanced users):</em><br>
<span class="erm-tone-red"><strong>M#/$</strong></span><br>
Set the text at the $ pointer as the message text or get a pointer to the message text.<br>
<strong><u>Comment</u>:</strong> the object must have a job (checked using <a href="./#ref-rec-qu-q">QU:Q</a>), 
otherwise this command will cause an ERM error.</div>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-n"></span><span class="erm-tone-red"><strong>N$</strong></span><br>
Set/check/get the number of the name of the seer (0..47). See file <em class="erm-legacy-file">seerhut.txt</em> See game resources for a complete list of names.<br>
<strong><u>Comment</u>:</strong> There are only 48 names in the game. I wonder if more can be added...</div>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-q"></span><span class="erm-anchor" id="command-q-q0"></span><span class="erm-tone-red"><strong>Q?$</strong></span><br>
Check/get job type in $:</div><pre>
        0 - no task
        1 - reach level
        2 - achieve primary skills indicators
        3 - kill the hero
        4 - kill creature on the adventure map
        5 - bring artifacts
        6 - bring creatures
        7 - bring resources
        8 - visit by a certain hero
        9 - be a player of a certain color
</pre>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q0</strong></span><br>
Delete task<br>
<strong><u>Comment</u>:</strong> you can't call without a task <a href="./#ref-rec-qu-d">QU:D</a> and <a href="./#ref-rec-qu-m">QU:M</a>.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q1/$</strong></span><br>
Set/check/gain experience level to be reached in $.<br>
<strong><u>Comment</u>:</strong>  this will set the job type even when checking, because checking this for other job types is pointless.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q2/$1/$2/$3/$4</strong></span><br>
Set/check/get Attack/pr/The Power of Magic/Knowledge to be achieved at $1/$2/$3/$4.<br>
<strong><u>Comment</u>:</strong>  this will set the job type even when checking, because checking this for other job types is pointless.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q3/$1/$2</strong></span><br>
Set/check/get <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a>, 
to kill, $1 and <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">players</a>who completed the task, $2.<br>
<strong><u>Comment</u>:</strong>  this will set the job type even when checking, because checking this for other job types is pointless.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q4/$1/$2/$3/$4/$5</strong></span><br>
Set/check/get the coordinates of the creature to be killed to $1/$2/$3; number <a href="../../tables/creatures/#ref-form-creature" data-context="true">creatures</a>, 
displayed in the quest log, $4; and <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a>, who killed creature, at $5.<br>
The presence of a creature at the specified coordinates is not necessary.<br>
Please note that $4 may not correspond to the actual type of creature, this value is purely for beauty.<br>
If another creature appears at the specified coordinates and is killed, then the player who killed the previous creature will lose the right to complete the task.<br>
<strong><u>Comment</u>:</strong>  this will set the job type even when checking, because checking this for other job types is pointless.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q5</strong></span><br>
Clear the list of artifacts to bring</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q5/#/$</strong></span><br>
Set/check/get qty. <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifacts #</a>, which need to be brought, in $.<br>
<strong><u>Comment</u>:</strong>  this will set the job type even when checking, because checking this for other job types is pointless.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q6</strong></span><br>
Clear the list of creatures to bring.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q6/#/$</strong></span><br>
Set/check/get qty. <a href="../../tables/creatures/#ref-form-creature" data-context="true">creatures #</a>, which need to be brought, in $.<br>
<strong><u>Comment</u>:</strong>  this will set the job type even when checking, because checking this for other job types is pointless.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q7/#/$</strong></span><br>
Set/check/get qty. <a href="../../tables/resources/#ref-form-resource" data-context="true">resources #</a>, which need to be brought, in $.<br>
<strong><u>Comment</u>:</strong>  this will set the job type even when checking, because checking this for other job types is pointless.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q8/$</strong></span><br>
Set/check/get <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a>, which should visit this object.<br>
<strong><u>Comment</u>:</strong>  this will set the job type even when checking, because checking this for other job types is pointless.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q9/$</strong></span><br>
Set/check/get <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player</a>, which should visit this object.<br>
<strong><u>Comment</u>:</strong>  this will set the job type even when checking, because checking this for other job types is pointless.</div>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-r"></span><span class="erm-anchor" id="command-r-1-2-3"></span><span class="erm-tone-red"><strong>R$1/$2/$3</strong></span><br>
Set/check/get the type of reward in the Seer's Hut in $1 and reward values to $2 and $3.<br>
The reward can be of the following types:
</div><pre>        0 - no reward
        1 - $2 experience
        2 - $2 spell points
        3 - $2 morale
        4 - $2 luck
        5 - $3 units <a href="../../tables/resources/#ref-form-resource" data-context="true">resource $2</a>
        6 - $3 points  <a href="../../framework/constants/hero-skills/#ref-form-primaryskill" data-context="true">primary skill $2</a>
        7 - <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">secondary skill $2</a> level $3
        8 - <a href="../../tables/artifacts/#ref-form-a1" data-context="true">artifact $2</a>
        9 - <a href="../../tables/spells/#ref-form-spell" data-context="true">spell $2</a>
        10 - $3 creatures <a href="../../tables/creatures/#ref-form-creature" data-context="true">like $2</a></pre>
<div class="erm-paragraph"><strong><u>Comments</u>:</strong> Please note, this command can only be called with all three parameters, 
even if only the first two are needed.<br>
Some values may contain garbage when checking rewards in preset huts (for example, the number of creatures). 
You will have to bring such values ​​to the correct size yourself.</div>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-v"></span><span class="erm-anchor" id="command-v-v"></span><span class="erm-tone-red"><strong>V$</strong></span><br>
Set/check/get <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">player colours</a>who visited this facility.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>V#/$</strong></span><br>
Set/check/get, whether visited <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player #</a> this object, in $:
</div><pre>        0 - did not visit
        1 - visited</pre>

<hr>

















</div>
</div>
</section>
:::

## Related reference {#related}

[UN:I](../../receivers/un/) · [H3Quests_RefreshData](../../framework/functions/h3quests-refreshdata/)



## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/) · [Game object table](../../tables/objects/#values) · [Game object table](../../tables/objects/) · [Map objects (OB)](../ob/) · [Hero table](../../tables/heroes/) · [Player colors](../../tables/players/) · [Creature table](../../tables/creatures/) · [Artifact table](../../tables/artifacts/) · [Resources](../../tables/resources/) · [Hero Skills](../../framework/constants/hero-skills/) · [Secondary skills](../../tables/secondary-skills/) · [Spell table](../../tables/spells/)
