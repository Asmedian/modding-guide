---
{"title":"AI destinations (AI)","summary":"AI receiver: ai destinations, command parameters, and limitations.","translationStatus":"reviewed","displayTitle":"AI destinations (AI)"}
---

## Receiver AI {#ref-rec-ai}

:::erm
<section class="erm-reference" lang="en"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ai-text"></span><div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">
<div class="erm-align-center erm-paragraph">Receiver<strong> AI </strong>(AI - controller)</div></span>
</div><div class="erm-align-left erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-ai-red"></span><span class="erm-tone-red"><br>
!!AI:XXXX;</span></strong> 
- <strong>allows you to set a destination for the computer player by specifying it 
significance.<br></strong>
This receiver gives you some control over the AI's movement. You can 
use it to force AI heroes to move to a specific location on the map. 
Depending on the set significance of the point, the AI may deviate from the path for 
collecting treasure, attacking weaker creatures or heroes, capturing a mine, or 
towns. Even using maximum significance, AI cannot always be forced 
go to the desired point if the circumstances are stronger (for example, he has an army, 
he lost the last town, but there is an empty town nearby), but this is rare. 
Another option for using this receiver is to set up waypoints for both 
patrolling the area. You can also link the coordinates of the enemy hero and 
coordinates of the destination point, and hero AI will relentlessly pursue the hero 
player.<br>
This command slows down quite noticeably 
actions of the computer, while the AI remains unpredictable - it can 
"disobey" the order to go to this point. That is using this command 
irrational.<br><br>
</div><hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ai-d"></span><span class="erm-anchor" id="command-d-1-2-3"></span><strong><span class="erm-tone-red">D#1/#2/#3</span></strong><br>
Delete destination<br>
         #1 – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a> 
(-1 = any)<br>
         #2 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player number</a> 
(-1 = any)<br>
         #3 – destination point number (-1 = delete all points 
assignments for this hero or player)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ai-s"></span><span class="erm-anchor" id="command-s-1-2-3-1-2-3-4-5"></span><strong><span class="erm-tone-red">S#1/#2/#3/$1/$2/$3/$4/$5</span></strong><br>
Set new destination<br>
         #1 – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">hero number</a> (-1 = any) <br>
         #2 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">player number</a> (-1 = any)<br>
         #3 – sequential point number<br>
         $1 – X<br>
         $2 – Y<br>
         $3 – L<br>
         $4 – significance of the point (500000 – significant, 5000000 – very 
significant)<br>
         $5 is a flag. Values:</div><pre>
	0 = no flag,
	1 = start from this point,
	2 = do not delete this point after visiting,
	3 = start from this point and do not delete it after visiting.</pre> 
<strong></strong><br><span class="erm-anchor" id="ref-rec-ai-1"></span><details class="erm-comment"><summary>Comments (<span class="erm-anchor" id="ref-rec-ai-show1"></span><strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">
<ol><li> The order works like this. If you set destinations numbered 2, 4, 5, 6, 88, 99 and set flag 1 
for number 6, hero will move like this: 6, 88, 99, 2, 4, 5 and then if you 
set the “Do not delete” flag (for example, for 88, 4 and 5), hero will run like this: 
88, 4, 5, 88, 4, 5, 88, 4, 5…</li>
<li> You can set any player (-1) and this will mean that hero will go to the point regardless 
owner.</li>
<li> You can set any hero (-1) and this will mean that all heroes will move towards this point.</li>
<li> If the first point is also the last, and is set to “not deleted” after visiting, on 
A phantom clone of the hero will appear on the map.</li>
<li> If hero is not defined and there are multiple destinations, then the first hero AI will move to 
first point. After reaching the point, the second hero will begin to move towards the next destination. 
Therefore, it is better to assign a specific hero to avoid chaos.</li></ol></div></details>
<hr>








</div>

</div>
</section>
:::

## Related commands and tables {#reference-links}

[Hero table](../../tables/heroes/) · [Player colors](../../tables/players/)
