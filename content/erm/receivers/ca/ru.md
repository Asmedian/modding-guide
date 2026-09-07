---
{"title":"Города (CA)","summary":"Ресивер CA: города, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Города (CA)"}
---

## Ресивер CA {#ref-rec-ca}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-m1-1-2-3"></span><span class="erm-anchor" id="command-m2-1-2-3"></span><span class="erm-anchor" id="modern-strings"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ca-text"></span><div>
<span class="erm-anchor" id="ref-rec-ca-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>CA</strong> (настройки замка)</span></div>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-red"></span><span class="erm-tone-red"><strong><br>
!!CA#1/#2/#3:XXXX;</strong></span><strong> 
- используется для изменений параметров замка в X Y L.</strong><em><br>
Расширение синтаксиса:<br>
</em><span class="erm-tone-red"><strong>!!CA#:XXXX;</strong></span> 
- замок в v[#], v[#+1], v[#+2]<em><br>
Расширение синтаксиса:<br>
</em><span class="erm-tone-red"><strong>!!CA0/#:XXXX;</strong></span> 
- город под номером # на карте (см. опцию <a href="./#ref-rec-ca-u">U</a>)<br>
<em>
Расширение синтаксиса:</em><br>
<span class="erm-tone-red"><strong>!!CA-1:XXXX;</strong></span> 
- текущий город. Можно использовать только в экране города!<br>
Город - <a href="../../tables/objects/#ref-form-objects" data-context="true">тип 98</a>. См. также: <a href="../../tables/towns/#ref-form-towns" data-context="true">таблица городов</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-b"></span><span class="erm-anchor" id="command-b"></span><span class="erm-tone-red"><strong>B#/$</strong></span><br>
Настройка зданий города:<br>
         # = 1 – построить <a href="../../tables/buildings/#ref-form-buldings" data-context="true">здание $</a><br>
         # = 2 – разрушить <a href="../../tables/buildings/#ref-form-buldings" data-context="true">здание $</a> <br>
         # = 3 – проверить, построено ли <a href="../../tables/buildings/#ref-form-buldings" data-context="true">здание $</a> (во флаг 1)<br>
         # = 4 – разрешить для постройки <a href="../../tables/buildings/#ref-form-buldings" data-context="true">здание $</a><br>
         # = 5 – запретить для постройки <a href="../../tables/buildings/#ref-form-buldings" data-context="true">здание $</a><br>
         # = 6 – построить 
<a href="../../tables/buildings/#ref-form-buldings" data-context="true">здание $</a> в городе, используя внутреннюю функцию<br>
Шестая опция - улучшение первой, она позволяет строить многоуровневые здания (гильдия магов, к примеру) без ошибок.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-g"></span><span class="erm-anchor" id="command-g-g-1-2-g-1-2-3"></span><span class="erm-tone-red"><strong>G$</strong></span><br>
Установить/проверить/получить уровень гильдии магов (в экране заклинаний) (0..4)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>G$1/$2</strong></span><br>
Установить/проверить/получить кол-во доступных заклинаний ($2) в $1 этаже гильдии магов</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>G$1/$2/$3</strong></span><br>
Установить/проверить/получить <a href="../../tables/spells/#ref-form-spell" data-context="true">заклинание</a> в слоте $2, уровня гильдии $1 в переменную $3.<br>
При улучшении гильдии добавленные (т.е. сверх доступного кол-ва заклинаний для этого уровня - 5 для 1го уровня, 4 для второго и т.д.) заклинания стираются</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-h"></span><span class="erm-anchor" id="command-h"></span><span class="erm-tone-red"><strong>H#/$</strong></span><br>
Установить/проверить/получить номер героя в гарнизоне города или гостя<br>
         # = 0 – герой в гарнизоне города<br>
         # = 1 – герой-гость<br>
         $ - <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер героя</a> (-1 = нет)<br>
Вы можете получить или установить героя. Если соберётесь установить, не забудьте убрать старого куда-либо.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ca-i"></span><span class="erm-anchor" id="command-i"></span>I#</strong></span><br>
Установить внешний вид замка. Вы можете только установить это значение.<br>
Значения для #:<br>
       0 = обычный (синхронизация с построенными зданиями, например, Капитолий или форт)<br>
       -1 = полностью разрушен<br>
       1 = слабо разрушен<br>
       2 = средне разрушен<br>
       3 = сильно разрушен</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-m"></span><span class="erm-tone-red"><strong>M1/$1/$2/$3</strong></span><br>
Установить/проверить/получить кол-во доступных монстров <br>
        $1 – уровень монстров (0..6)<br>
        $2 – кол-во неулучшенных<br>
        $3 – кол-во улучшенных</div>
<div class="erm-paragraph">Если построено улучшенное жилище, значение $2 не учитывается.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M2/$1/$2/$3</strong></span><br>
Установить/проверить/получить кол-во стражников<br>
         $1 – позиция (0..6)<br>
         $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a><br>
         $3 – кол-во</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-n"></span><span class="erm-anchor" id="command-n-text-n-z"></span><span class="erm-tone-red"><strong>N^Имя Города^<br>
Nz#<br>
N?z#</strong></span><br>
Установить/получить имя города</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-o"></span><span class="erm-anchor" id="command-o-p-1-2-3"></span><span class="erm-tone-red"><strong>O$</strong></span><br>
Установить/проверить/получить хозяина (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">-1, 0..7</a>)</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ca-p"></span><span class="erm-tone-red"><strong>P?$1/?$2/?$3</strong></span><br>
Проверить или получить координаты города<br>
        $1 = X; <br>
        $2 = Y; <br>
        $3 = L (уровень)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-r"></span><span class="erm-anchor" id="command-r"></span><span class="erm-tone-red"><strong>R$</strong></span><br>
Установить/проверить, может ли игрок строить сегодня в городе.<br>
         $ = 0, если может<br>
         $ = 1, если нет<br>
Вы можете использовать R0 для обнуления счётчика постройки любое кол-во раз в течение хода.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-t"></span><span class="erm-anchor" id="command-t-u"></span><span class="erm-tone-red"><strong>T$</strong></span><br>
Установить/проверить/получить <a href="../../tables/towns/#ref-form-towns" data-context="true">тип города</a> (истинный, не зависит от внешнего вида). 
Используйте команду <a href="./#ref-rec-ca-i">CA:I</a>, чтобы присвоить городу внешний вид, соответствующий его типу.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ca-1"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-ca-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE
!?HM-1;             при каждом шаге героя
!!CA12/12/0:T?y1;   проверяем тип замка в 12/12/0
!!VRy2:S8 -y1;      находим "обратный" замок
!!CA12/12/0:Ty2 I0; меняем тип замка на обратный, и синхронизируем его внешний вид</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ca-u"></span><span class="erm-tone-red"><strong>U$</strong></span><br>
Проверить/получить номер города на карте (не в окне игрока)<br>
Вы можете установить значение, но мы бы не рекомендовали ;)</div>

<hr>













</div>
</div>
</section>
:::

## Уточнения по современным версиям ERA {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!CA#x/#y/#level:подкоманды;</code></div>
<div class="erm-paragraph">В таблице <code>$</code> обозначает параметр с поддержкой чтения/записи, <code>#</code> — входной параметр, <code>?$</code> — выходной. Числа, имена и диапазоны уточняются для каждой команды.</div>
<hr>
<div class="erm-paragraph">Режимы: 1 построить, 2 разрушить, 3 проверить во флаг 1, 4 разрешить постройку, 5 запретить, 6 построить внутренней функцией. Для многоуровневых зданий используйте 6. $ — ID здания.</div>
<hr>
<div class="erm-paragraph">Один параметр — отображаемый этаж гильдии 0..4; два — этаж/число заклинаний; три — этаж/слот/ID заклинания. При улучшении гильдии сверхштатные заклинания могут стираться.</div>
<hr>
<div class="erm-paragraph">Герой гарнизона (0) или гость (1), -1 — отсутствует. Перед назначением другого героя корректно уберите прежнего.</div>
<hr>
<div class="erm-paragraph">Внешний вид: 0 синхронизировать со зданиями; -1 полностью разрушен; 1/2/3 степени разрушения. Только запись.</div>
<hr>
<div class="erm-paragraph">Доступные существа: уровень 0..6, обычные, улучшенные. При улучшенном жилище число обычных игнорируется.</div>
<hr>
<div class="erm-paragraph">Гарнизон: слот 0..6, тип существа, количество.</div>
<hr>
<div class="erm-paragraph">Имя города; поддерживается запись из z-переменной.</div>
<hr>
<div class="erm-paragraph">O — владелец -1 или 0..7. P — координаты X/Y/уровень, только чтение.</div>
<hr>
<div class="erm-paragraph">0 разрешает сегодня строить, 1 блокирует. R0 сбрасывает дневное ограничение.</div>
<hr>
<div class="erm-paragraph">T — настоящий тип города; после записи I0 синхронизирует внешний вид. U — индекс города на карте, используйте для чтения.</div>
<hr>
<div class="erm-paragraph">Другие селекторы: CAномер берёт координаты из v[номер..номер+2]; CA0/индекс выбирает город по ID; CA-1 — текущий город только в его экране.</div>
<hr>
<div class="erm-paragraph">ERA 3.9.15 переписала обработку сообщений: принимаются любые строки. Старый числовой способ подставить текст другого события (например GE:M30) отключён. -1 вместо пустой строки устарел; передавайте <code>^^</code>. Описанные выше числовые формы нужны для чтения старых скриптов.</div></section>
:::

## Связанные материалы {#related}

[OW](../../receivers/ow/)



## Связанные команды и таблицы {#reference-links}

[Таблица объектов в игре](../../tables/objects/) · [Типы городов](../../tables/towns/) · [ID городских зданий](../../tables/buildings/) · [Таблица заклинаний](../../tables/spells/) · [Таблица героев](../../tables/heroes/) · [Таблица существ](../../tables/creatures/) · [Цвета игроков](../../tables/players/)
