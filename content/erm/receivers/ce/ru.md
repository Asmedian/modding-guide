---
{"title":"Городские события (CE)","summary":"Ресивер CE: городские события, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер CE {#ref-rec-ce}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ce-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>CE</strong> (событие в городе)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-ce-red"></span><span class="erm-tone-red"><br>
!!CE#:XXXX;</span> 
- настройка события в городе.</strong><br>
# - номер события. Это число, идущее первым в тексте сообщения. Оно не 
влияет на текст самого сообщения.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-b"></span><span class="erm-anchor" id="command-b-1-2"></span><span class="erm-tone-red"><strong>B#1/$2</strong></span><br>
Установить/проверить/получить кол-во 
<a href="../../tables/resources/#ref-form-resource" data-context="true">ресурсов #1</a> в $2 (может быть отрицательным).</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-c"></span><span class="erm-anchor" id="command-c-1-2"></span><span class="erm-tone-red"><strong>C#1/$2</strong></span><br>
Установить/проверить/получить "подарочных" монстров кол-вом $2 в жилище уровня #1 (0..6)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-d"></span><span class="erm-anchor" id="command-d-u"></span><span class="erm-tone-red"><strong>D#</strong></span><br>
Не строить здание # (<a href="../../tables/building-pictures/#ref-form-buldingsintowns" data-context="true">0..40</a>)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-e"></span><span class="erm-anchor" id="command-e-n"></span><span class="erm-tone-red"><strong>E$</strong></span><br>
Установить возможность активации события для <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">
игроков</a> 
$ (побитно - складывайте биты необходимых игроков).<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ce-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ce-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
	Если вы используете $, начинающееся с параметра d, 
это будет означать как "или", т.е. вы можете дать возможность игрокам 
активировать событие, без изменения остальных игроков. Пример: E3 даёт 
возможность активировать событие только красному и синему игроку, в то время как 
Ed3 разрешает активирование события красному и синему игроку, причём остальные 
цвета, установленные в самом событии в редакторе не считаются исключенными.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-f"></span><span class="erm-anchor" id="command-f-r"></span><span class="erm-tone-red"><strong>F$</strong></span><br>
Установить/проверить/получить день первого появления на $</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-h"></span><span class="erm-anchor" id="command-h-q"></span><span class="erm-tone-red"><strong>H#</strong></span><br>
Применить или проверить, разрешение на использования события игроком – человеком 
(если # = 1, значит можно)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-m"></span><span class="erm-anchor" id="command-m-text-m-m-1"></span><span class="erm-tone-red"><strong>M^ТЕКСТ^</strong></span><br>
Установить послание ТЕКСТ. Длина текста не должна превышать оригинальный. Может 
содержать любые символы, кроме "^" и ";"</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M#</strong></span><br>
Установить текст события такой же, как и в глобальном событии номер #</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>M-1</strong></span><br>
Не выводить сообщение на экран</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-n"></span><span class="erm-tone-red"><strong>N$</strong></span><br>
Установить, что 
<a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">игрок(и)</a> $ НЕ могут активировать 
событие (складывайте биты нужных игроков).<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ce-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ce-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
	Если вы используете $, начинающийся с d, это будет 
расцениваться как значение "или", т.е. вы можете запретить игрокам активировать 
событие без изменения остальных игроков. Пример: N3 запрещает красному и синему 
игроку активировать событие и разрешает всем остальным. Nd3 запрещает 
активирование события красному и синему игроку, но не изменяя исключения для 
других игроков.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-q"></span><span class="erm-tone-red"><strong>Q#</strong></span><br>
Применить событие для компьютерных игроков, если # = 1.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-r"></span><span class="erm-tone-red"><strong>R$</strong></span><br>
Установить/проверить/получить интервал между появлениями события в $</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ce-u"></span><span class="erm-tone-red"><strong>U#</strong></span><br>
Построить здание # (<a href="../../tables/building-pictures/#ref-form-buldingsintowns" data-context="true">0..40</a>)</div>

<hr>














</div>

</div>
</section>
:::

## Связанные материалы {#related}

[GE](../../triggers/ge/)



## Связанные команды и таблицы {#reference-links}

[Ресурсы](../../tables/resources/) · [Картинки зданий по городам](../../tables/building-pictures/) · [Цвета игроков](../../tables/players/)
