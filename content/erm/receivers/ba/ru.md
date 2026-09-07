---
{"title":"Параметры сражения (BA)","summary":"Ресивер BA: параметры сражения, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Параметры сражения (BA)"}
---

## Ресивер BA {#ref-rec-ba}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ba-text"></span><div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Ресивер <strong>BA</strong> (атрибуты битвы)</span></div><br>
<strong><span class="erm-anchor" id="ref-rec-ba-red"></span><span class="erm-tone-red">!!BA:XXXX;</span> - используется для установки атрибутов битвы.</strong>
<div class="erm-paragraph">Вы можете использовать внутренние ссылки на героев (копию информации):<br>
<span class="erm-anchor" id="ref-rec-ba-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE-10:</span>…</strong> применяет изменения к копии информации атакующего героя.<br>
<strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE-20:</span>…</strong> применяет изменения к копии информации защищающегося героя.</div>
<div class="erm-paragraph"><em>Примечание:</em><br>
Проверка координат после битвы не сработает, так как герой исчезает с координат после боя. То же с монстрами - они исчезают сразу после их уничтожения. 
Простейший путь - проверять текущего хозяина героя - если он равен -1, значит, игрок проиграл битву.</div>
<span class="erm-anchor" id="ref-rec-ba-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/ba/#ref-tr-ba">!?BA</a></div>
<hr><div class="erm-paragraph">
<strong><span class="erm-tone-red"><span class="erm-anchor" id="ref-rec-ba-a"></span><span class="erm-anchor" id="command-a"></span>A$</span></strong><br>
Получить или проверить (НЕ установить), если битва – только ИИ<br>
         $ – 1 если это только теоретическая битва (полностью ИИ-битва)<br>
         $ – 0 если это настоящая или быстрая битва<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ba-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ba-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вы можете установить данный параметр, но это ни к чему не приведёт. Если происходит битва на карте (герой на героя, герой на монстров, герой на защищающийся объект…), 
всегда срабатывает триггер !?BA#; Также соответственный ресивер !!BA… работает прекрасно. НО. Если битва происходит БЕЗ игрока-человека 
(полностью ИИ-битва, не быстрая битва!), реальной симуляции не происходит. ИИ просто подсчитывает возможные потери, используя ИИ-ценность существ, не более. 
Это означает, что в таких битвах не могут быть использованы следующие ресиверы (соответственные триггеры также не будут работать в этом случае):<br>
<a href="../bg/#ref-rec-bg">!!BG</a>, <a href="../bm/#ref-rec-bm">!!BM</a>, 
<a href="../bh/#ref-rec-bh">!!BH</a>, <a href="../bu/#ref-rec-bu">!!BU</a>, <a href="../bf/#ref-rec-bf">!!BF</a><br>
Это важно для всех, кто хочет изменить ход битвы некими параметрами. Игра скорее всего просто вылетит.<br>
Даже в битве игроков-людей, менеджер битв не до конца определён в секции триггера !?BA; так, вы <strong>не можете</strong> использовать <br>
<pre class="erm-example"><code class="language-erm">!?BA0;
!!BH0:N?v426;</code></pre>
Ресивер BH должен использоваться в секции соответствующего триггера или позже.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ba-b"></span><span class="erm-anchor" id="command-b"></span>B#</strong></span><br>
Установить <a href="../../tables/battle-backgrounds/#ref-form-ba-b" data-context="true">фон #</a> поля битвы.<br>
<strong><br><span class="erm-anchor" id="ref-rec-ba-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ba-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Фон 21 – это чистое поле; я предполагаю, что здесь должен быть фон для битвы на Попутном ветре, но он не был доделан.<br>
Фон 24 (битва корабль на корабль) не изменяет клетки пространства между кораблями на непроходимое, если битва проводится не на воде и не против корабля. 
Т.е. по водному  пространству можно будет проходить монстрам, и стоять там же.<br></div></details></strong></div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>B^файл.pcx^</strong></span><br>
Установить свою картинку для поля боя.<br>
Файл фона ищется в папке <em class="erm-legacy-file">DATA</em>. Как обычно, имя файла + расширение не должно превышать 12 символов.</div>
<hr><div class="erm-paragraph">
<strong><span class="erm-tone-red"><span class="erm-anchor" id="ref-rec-ba-d"></span><span class="erm-anchor" id="command-d"></span>D#</span></strong><br>
Отменить или разрешить битву<br>
         # – 1  для отмены (автоматическая победа)<br>
         # – 0 для разрешения битвы</div>
<hr><div class="erm-paragraph">
<strong><span class="erm-tone-red"><span class="erm-anchor" id="ref-rec-ba-e"></span><span class="erm-anchor" id="command-e"></span>E$</span></strong><br>
Проверить на МП-битву:<br>
         $ – это статус битвы:<br>
            = 2 – битва ИИ против неактивного Человека (на удалённом компьютере)<br>
            = 1 – человек на человека (2 компьютера)<br>
            = 0 – если это любая другая битва (на данном компьютере)<br>
<strong></strong><br></div><span class="erm-anchor" id="ref-rec-ba-3"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ba-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Используйте эту команду для отключения скриптов, не поддерживающих МП-битвы.<br>
Если $ больше нуля, битву становится нелегко контролировать с помощью ERM.<br>
В Хот-сите данное значение всегда равно 0, то же самое для одиночной игры.</div></details>
<hr><div class="erm-paragraph">
<strong><span class="erm-tone-red"><span class="erm-anchor" id="ref-rec-ba-h"></span><span class="erm-anchor" id="command-h"></span>H#/$</span></strong><br>
Установить бьющихся героев<br>
         # – 0 для атакующего <br>
         # – 1 для защитника <br>
         $ – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер героя</a>. 
$ = -2, если нет героя (данное значения возможно только у защитника)<br>
Не пытайтесь установить атакующего героя как -2 (т.е. заставить его исчезнуть с поля боя). Игра просто вылетит на такой битве.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ba-m"></span><span class="erm-anchor" id="command-m-1-2-1-2"></span>M#1/#2/$1/$2</strong></span><br>
Установить/проверить/получить монстров в битве<br>
         #1 – атакующий монстр (0) или защищающийся (1)<br>
         #2 – слот (0..6)<br>
         $1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> ( -1, если слот пуст)<br>
         $2 – кол-во монстров</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ba-o"></span><span class="erm-anchor" id="command-o-1-2"></span>O$1/$2</strong></span><br>
Получить атакующего и защищающегося игрока<br>
         $1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">хозяин</a> атакующего<br>
         $2 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">хозяин</a> защитника (хозяин героя или монстра)<br>
<strong><u>Комментарий</u>:</strong> можно только проверить или получить, установка значения ничего не изменит.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ba-p"></span><span class="erm-anchor" id="command-p-1-2-3"></span>P$1/$2/$3</strong></span><br>
Позиция на карте (влияет только на фон и бонусы родной земли)<br>
        $1 – X; <br>
        $2 – Y; <br>
        $3 – L (уровень)<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-ba-4"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-ba-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!BA:P10/15/0; - установить, что битва проводится в квадрате 10/15/0 (не имеет значения, что расположено там)</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ba-q"></span><span class="erm-anchor" id="command-q"></span>Q$</strong></span><br>
Установить/проверить/получить флаг быстрой битвы<br>
         $ – 1 если быстрая битва активирована<br>
         $ – 0 если отключена</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ba-s"></span><span class="erm-anchor" id="command-s"></span>S$</strong></span><br>
Проверить/получить тип осадной битвы<br>
         $ – тип битвы,
<br>
            = 0 – обычная битва<br>
            = 1 – осада форта<br>
            = 2 – осада цитадели<br>
            = 3 – осада замка<br>
Правильное значение вы получите в триггере <a href="../../triggers/br/#ref-tr-br">!?BR</a> или позже. В триггере <a href="../../triggers/ba/#ref-tr-ba">!?BA</a> значение не определено.<br>
Вы можете установить параметр, но это ничего не изменит.</div>

<hr>










</div>
</div>
</section>
:::

## Связанные материалы {#related}

[BA](../../triggers/ba/) · [BM](../../receivers/bm/)



## Связанные команды и таблицы {#reference-links}

[Начало и завершение боя (BA)](../../triggers/ba/) · [Текущее действие в бою (BG)](../bg/) · [Боевой стек (BM)](../bm/) · [Действия героя в бою (BH)](../bh/) · [Управление полем боя (BU)](../bu/) · [Подготовка поля боя (BF)](../bf/) · [Фоны битвы](../../tables/battle-backgrounds/) · [Таблица героев](../../tables/heroes/) · [Таблица существ](../../tables/creatures/) · [Цвета игроков](../../tables/players/) · [Раунд боя (BR)](../../triggers/br/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3940) — BA:B now can work with any string and integer.
<!-- ERA3-GENERATED:END -->
