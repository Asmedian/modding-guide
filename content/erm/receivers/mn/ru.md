---
{"title":"Шахты (MN)","summary":"Ресивер MN: шахты, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Шахты (MN)"}
---

## Ресивер MN {#ref-rec-mn}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mn-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>MN</strong> (шахты)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-mn-red"></span><span class="erm-tone-red">!!MN#1/#2/#3:XXXX;</span> 
- шахта в X Y L.</strong> Шахты - <a href="../../tables/mines/#ref-form-mines" data-context="true">тип 53</a>, <a href="../../tables/objects/#ref-form-objects" data-context="true">тип 220</a>.<em><br>
Примечание:</em> Маяк и Шахта (включая Заброшенную) обладают одинаковыми <a href="../../tables/object-control-words/#ref-cont-conwords-t42">контрольными словами</a>, 
и Маяк можно редактировать через !!MN. Его ресурс (MN:R) имеет номер 100. Если поставить номер 0..6, то Маяк начнёт приносить ресурсы, 
как шахта :)  Охрана маяка игнорируется.<br>Также интересно менять охрану заброшенной шахты - 
после стандартного сообщения о троглодитах будет происходить драка с заданными монстрами в заданных кол-вах. 
Если охрану убрать, то шахта берётся без боя.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mn-m"></span><span class="erm-anchor" id="command-m-1-2-3"></span>M#1/$2/$3</strong></span><br>
Изменить/проверить охранников<br>
        #1 – номер слота (0..6)<br>
        $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">
тип монстра</a> 
(-1 – пустой слот)<br>
        $3 – кол-во монстров</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mn-o"></span><span class="erm-anchor" id="command-o-o-1"></span>O$</strong></span> <br>
Установить/проверить хозяина<br>
Игрок (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a>)<br>
        -2 = текущий игрок<br>
        -1 = никто</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>O$/1</strong></span><br>
То же, что и MN:O$, но без обновления<br>
 </div><hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mn-r"></span><span class="erm-anchor" id="command-r-r-1"></span>R$</strong></span><br>
Установить/проверить тип производимого ресурса (<a href="../../tables/resources/#ref-form-resource" data-context="true">0..6</a>)</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>R$/1</strong></span><br>
То же, что и MN:R$, но без обновления</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-mn-bold"></span><em class="erm-strong">Замечание:</em> выставление шахте ресурса 7 ни к чему, кроме ошибок, не приводит - мифрил добываться не будет. Если вашей шахте поставить ресурс 100 (как для Маяка), то при её посещении произойдёт вылет игры.</div>
<hr>
















</div>

</div>
</section>
:::

## Связанные материалы {#related}

[DW](../../receivers/dw/)



## Связанные команды и таблицы {#reference-links}

[Типы шахт](../../tables/mines/) · [Таблица объектов в игре](../../tables/objects/) · [Контрольные слова объектов](../../tables/object-control-words/#type-42) · [Таблица существ](../../tables/creatures/) · [Цвета игроков](../../tables/players/) · [Ресурсы](../../tables/resources/)
