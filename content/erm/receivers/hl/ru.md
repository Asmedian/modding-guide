---
{"title":"Выбор навыков при повышении уровня (HL)","summary":"Ресивер HL: выбор навыков при повышении уровня, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер HL {#ref-rec-hl}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-hl-text"></span><div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Ресивер <strong>HL</strong> (уровень героя)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-hl-red"></span><span class="erm-tone-red">!!HL:XXXX;</span> - контроллер уровней героя.</strong> 
Позволяет вам контролировать, какие навыки (<a href="../../framework/constants/hero-skills/#ref-form-primaryskill" data-context="true">первичные</a> и 
<a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">вторичные</a>) получит герой при получении нового уровня. 
Вы не можете проверить или получить предлагаемые вторичные навыки, а лишь установить их.<br>
Должно быть использовано только после триггера <a href="../../triggers/hl/#ref-tr-hl">!?HL</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-hl-s"></span><span class="erm-anchor" id="command-s-1-2-3"></span>S$1/#2/#3</strong></span><br>
Установить первичный и вторичные навыки, которые может получить герой.<br>
        $1 – установить/проверить/получить <a href="../../framework/constants/hero-skills/#ref-form-primaryskill" data-context="true">первичный навык</a> +1 (0..3)<br>
        #2 – установить левый вторичный навык (-2, -1, <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">0..27</a>)<br>
            -2 = не изменять<br>
            -1 = нет навыка <br>
        #3 – установить правый вторичный навык (-2, -1, <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">0..27</a>)<br>
Ресивер работает только после триггера <a href="../../triggers/hl/#ref-tr-hl">!?HL</a> и действует только на текущий получаемый уровень.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!?HL-1; - получает ли любой герой уровень
!!HL:S0/-1/-1; - установить, что бонусный первичный навык – Атака, и нет выбора вторичных навыков.</code></pre></div>
<hr>

















</div>
</div>
</section>
:::

## Связанные материалы {#related}

[HL](../../triggers/hl/)



## Связанные команды и таблицы {#reference-links}

[Навыки героев](../../framework/constants/hero-skills/) · [Вторичные навыки](../../tables/secondary-skills/) · [Получение уровня героем (HL)](../../triggers/hl/)
