---
{"title":"Найм существ (RD)","summary":"Ресивер RD: найм существ, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Найм существ (RD)"}
---

## Ресивер RD {#ref-rec-rd}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-rd-text"></span><div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">
<div class="erm-align-center erm-paragraph">Ресивер<strong> RD</strong><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(диалог найма существ)</div></span>
</div><div class="erm-align-left erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-rd-red"></span><span class="erm-tone-red"><br>
!!RD:XXXX;</span></strong> 
- <strong>позволяет настраивать игровой диалог найма существ самостоятельно.<br></strong></div>
<div class="erm-paragraph">Помимо команд работы с диалогом найма, в ERA были реализованы специальные события по обслуживанию этого диалога:
</div><ul>
<li><span class="erm-anchor" id="ref-rec-rd-open-23"></span><strong><u>OnOpenRecruitDlg (<span class="erm-anchor" id="ref-rec-rd-show1"></span><strong class="erm-toggle-label">показать</strong>)</u></strong><br><span class="erm-anchor" id="ref-rec-rd-1"></span><details class="erm-comment"><summary>OnOpenRecruitDlg</summary><div class="erm-comment-body">
Всякий раз, когда создаётся диалог найма, запускается событие <em class="erm-tone-purple erm-legacy-event">OnOpenRecruitDlg</em> со следующими параметрами:
<pre>        x1 - выбранный/активный слот монстра (0..3)
        х2 - флаги/опции, представляющие собой комбинацию битов, управляющих поведением диалога:
	= 1 – </pre><span class="erm-anchor" id="ref-rec-rd-10"></span><details class="erm-comment"><summary><small>CLOSE_ON_BUY</small></summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-rec-rd-t0"></span><blockquote class="erm-margin-top-zero erm-note"><span class="erm-anchor" id="ref-rec-rd-step"></span><div class="erm-indent">Диалог закроется, когда будет нажата кнопка покупки.<br>
Обычно используется в городах, когда есть только один слот рекрута.<br>
Снимите этот флаг, чтобы принудительно закрывать диалог вручную.</div></blockquote></div></details>
<pre>	= 2 – </pre><span class="erm-anchor" id="ref-rec-rd-11"></span><details class="erm-comment"><summary><small>AUTO_UPDATE_ADVMAP</small></summary><div class="erm-comment-body">
<blockquote class="erm-margin-top-zero erm-note"><div class="erm-indent">Экран карты приключений необходимо обновлять после найма любого рекрута (даже когда отображается диалоговое окно).<br>
Этот флаг используется при найме рекрутов во внешнем жилище существ, что позволяет игроку видеть кол-во новых существ в окне статуса.</div></blockquote></div></details>
<pre>        x3 - включить диалог (1) или не показывать его (0).</pre>
</div></details></li>
<li><span class="erm-anchor" id="ref-rec-rd-close-24"></span><strong></strong><br><span class="erm-anchor" id="ref-rec-rd-2"></span><details class="erm-comment"><summary>OnCloseRecruitDlg (<span class="erm-anchor" id="ref-rec-rd-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Когда вы закрываете диалог найма, запускается соответствующее событие <em class="erm-tone-purple erm-legacy-event">OnCloseRecruitDlg</em> (без параметров)
</div></details></li>
<li><span class="erm-anchor" id="ref-rec-rd-click-25"></span><strong></strong><br><span class="erm-anchor" id="ref-rec-rd-5"></span><details class="erm-comment"><summary>OnRecruitDlgMouseClick (<span class="erm-anchor" id="ref-rec-rd-show5"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
При клике мышью в диалоге найма запускается <em class="erm-tone-purple erm-legacy-event">OnRecruitDlgMouseClick</em> (без параметров)
</div></details></li>
<li><span class="erm-anchor" id="ref-rec-rd-calc-28"></span><strong></strong><br><span class="erm-anchor" id="ref-rec-rd-3"></span><details class="erm-comment"><summary>OnRecruitDlgRecalc (<span class="erm-anchor" id="ref-rec-rd-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
При изменении положения ползунка внутри диалога или смене активного слота выполняется пересчёт кол-ва рекрутов и общей стоимости в событии <em class="erm-tone-purple erm-legacy-event">OnRecruitDlgRecalc</em>. 
Все параметры могут быть изменены:
<pre>        x1 - стоимость существа в золоте
        x2 - идентификатор ресурса (0..5 или -1)
        х3 - кол-во ресурса</pre>
</div></details></li>
<li><span class="erm-anchor" id="ref-rec-rd-action-29"></span><strong></strong><br><span class="erm-anchor" id="ref-rec-rd-4"></span><details class="erm-comment"><summary>OnRecruitDlgAction (<span class="erm-anchor" id="ref-rec-rd-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
При найме нескольких разных существ запускается <em class="erm-tone-purple erm-legacy-event">OnRecruitDlgAction</em>
<pre>        x1 - кол-во рекрутов (только чтение)</pre>
</div></details></li>
</ul>
<div class="erm-paragraph">Наглядный пример создания диалога найма <a href="./#ref-rec-rd-ex">см. ниже</a></div>  
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-c"></span><span class="erm-anchor" id="command-c-slot-type-count-source-original"></span><strong><span class="erm-tone-red">C#1/$2[/$3/$4/#5]</span></strong><br>
Настроить диалог найма.
</div><pre>        #1 - слот диалога (0..3)
        $2 - <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип существа</a> для найма в указанном слоте (-1 = слот пуст)
        $3 - текущее кол-во существ для найма
        $4 - индекс источника/хранилища, где имеется доступное кол-во существ
        #5 - модификатор (0 = использовать оригинальное кол-во существ)</pre>
<strong></strong><br><span class="erm-anchor" id="ref-rec-rd-12"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-rd-show12"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<ul>
<li>Если #5=0, то это оригинальное число нанимаемых монстров, которое запоминается сразу после события <a href="./#ref-rec-rd-open-23">OnOpenRecruitDlg</a> (можно только получить). Кол-во существ, как правило, напрямую связано с каким-либо источником, например, c жилищем в городе. Таким образом, устанавливая это значение на этапе настройки, вы меняете реальное кол-во существ.</li>
<li>Для существующих городов на карте можно использовать следующую формулу по источнику:
	<blockquote class="erm-note">[<span class="erm-anchor" id="ref-rec-rd-wt"></span><strong class="erm-legacy-label">Источник</strong>] = [Идентификатор города (см. <a href="../ca/#ref-rec-ca-u">CA:U</a>)] × 14 + [уровень жилища существ в городе (0..6)] + [7 (только для улучшенных)].</blockquote>
	К примеру, источник 2го города на карте → 3-е улучш.жилище: 1 * 14 + 3 + 7 = 24.</li>
<li>Если диалог вызывается со специальными внешними источниками (определил игрок), они будут иметь следующие индексы: 9000, 9001, 9002, 9003. Например, модмейкер реализовал своё жилище в городе с некием хранилищем, где задано кол-во существ для найма. Скриптеры смогут видеть такой индекс источника как 9000.</li>
<li>Пользовательский источник (индекс ≥ 10000). Реализация по скрипту игрока. Для такого вида источника выделяется уникальный блок памяти. Требует установки начального кол-ва рекрутов в <a href="./#ref-rec-rd-open-23">OnOpenRecruitDlg</a>, с последующим получением окончательного (оставшегося) кол-ва в <a href="./#ref-rec-rd-close-24">OnCloseRecruitDlg</a>.</li>
<li>Один и тот же источник может быть назначен любому числу слотов диалога. Все эти слоты будут отображать одинаковое кол-во существ и обновляться одновременно. Это полезно для реализации альтернативных существ. Слоты могут иметь разные типы существ (и стоимость), но общее кол-во новобранцев распределяется между всеми слотами.</li>
<li>Индекс источника изменяется до применения нового кол-ва монстров. Так <span class="erm-anchor" id="ref-rec-rd-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!RD</span>:C0/13/100/20000</strong> изменит источник сначала до 20000 (пользовательский), а затем установит кол-во монстров как 100 архангелов, не меняя первоначальный прирост жилища/объекта/и т.д.</li>
<li>Если для слотов 0 и 3, к примеру, установить определённых существ, а для слотов 1 и 2 существ не определять (тип = -1), то произойдёт сдвиг слотов так, что игрок увидит только два первых слота с существами.<br>
Диалоги без настроенных слотов ($2≠-1) не будут показаны.</li>
</ul>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!RD:C2/?y3; y3 = тип монстра в 3-ем реальном слоте диалога

Увеличить в 10 раз кол-во существ в 1-ом слоте диалога найма:
!!RD:C0/?t/d*10; тип не изменится, кол-во умножаем а 10
!!RD:C0/?t/?i^numMons^;
!!IF:M^Доступно %I(numMons) рекрутов для найма^;</code></pre></div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-f"></span><span class="erm-anchor" id="command-f"></span><strong><span class="erm-tone-red">F#/$</span></strong><br>
Перевести реальный номер слота в логический (используется с командой <a href="./#ref-rec-rd-c">C</a>)
</div><pre>        # - реальный (видимый) слот (0..3)
        $ - логический слот (0..3, -1 = пустой)</pre>
<strong></strong><br><span class="erm-anchor" id="ref-rec-rd-13"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-rd-show13"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Команда используется вместе с обработкой мыши в диалоге найма. Номера видимых слотов последовательно увеличиваются и их надо преобразовавать в номера логических слотов.
<u>Пример</u>:<br>
Диалог с настроенными слотами: <span class="erm-anchor" id="ref-rec-rd-dred"></span><strong class="erm-tone-red erm-legacy-code-box erm-inline-code">монстр А</strong> <strong class="erm-tone-red erm-legacy-code-box erm-inline-code">слот пуст</strong> <strong class="erm-tone-red erm-legacy-code-box erm-inline-code">слот пуст</strong> <strong class="erm-tone-red erm-legacy-code-box erm-inline-code">монстр Б</strong>, 
- отображается в игре так: <span class="erm-anchor" id="ref-rec-rd-n3"></span><strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">монстр А</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">монстр Б</strong>. Здесь "монстр Б" имеет реальный номер слота 1, а логический - 3.</div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-i"></span><span class="erm-anchor" id="command-i-1-2-3-4"></span><strong><span class="erm-tone-red">I?$1/?$2/?$3/?$4</span></strong><br>
Получить информацию по текущему диалогу найма.
</div><pre>        $1 - уникальный номер диалога. Используется для различения вложенных диалогов.
        $2 - идентификатор города (см. <a href="../ca/#ref-rec-ca-u">CA:U</a>), для которого открывается диалог (-1 = нет/неизвестно).
        $3 - идентификатор городского жилища (0..6 - обычное, 7..13 - улучш.; -1 = нет/неизвестно)
	Здания Орд (+ X прирост) рассматриваются как жилища, на которые они влияют.
        $4 - номер выбранного логического слота.</pre>
<strong></strong><br><span class="erm-anchor" id="ref-rec-rd-9"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-rd-show9"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Номера диалогов уникальны только среди открытых диалогов найма в текущий момент.<br>
После закрытия всей цепочки диалогов найма рекрутов номера диалогов возвращаются в резерв и могут быть назначены новым диалогам (эдакая многоразовость).</div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-m"></span><span class="erm-anchor" id="command-mkey"></span><strong><span class="erm-tone-red">M#/$</span></strong><br>
Доступ к ассоциативной памяти текущего диалога.
</div><pre>        # - либо целое число, либо уникальная строка. То же, что и <a href="../sn/#ref-rec-sn-era-w">SN:W</a>
        $ - установить/получить значение переменной</pre>
<div class="erm-paragraph">Команда обеспечивает полнофункциональный эквивалент <a href="../sn/#ref-rec-sn-era-w">SN:W</a> при работе с памятью, выделенной для каждого созданного диалога найма.<br>
Память освобождается после <a href="./#ref-rec-rd-close-24">OnCloseRecruitDlg</a> для каждого диалога.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!RD:M^acm.mapX^/v998 M^acm.mapY^/v999 M^acm.mapZ^/v1000;
!!RD:M^мифрил^/d*2;</code></pre></div>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-o"></span><span class="erm-anchor" id="command-o-town-dwelling-destination-target-flags"></span><strong><span class="erm-tone-red">O#1/#2/#3/#4[/#5]</span></strong><br>
Открыть новый диалог найма (предыдущие диалоги останутся в фоновом режиме).
</div><pre>        #1 - идентификатор города (см. <a href="../ca/#ref-rec-ca-u">CA:U</a>; -1 = пропустить). Город будет использоваться как источник слотов.
        #2 - идентификатор городского жилища (0..13; -1 = пропустить). Жилище будет использоваться как источник слотов.
        #3 - куда помещать рекрутов при найме (определяется сценарием Lua/ERM и обрабатыватся вручную):
	= 0 – в гарнизон города
	= 1 – в армию героя
	= 2 – своя реализация
        #4 - идентификатор цели (герой, город или спец. значение для сценария Lua/ERM)
        #5 - комбинация флагов <small class="erm-legacy-label">CLOSE_ON_BUY</small> и <small class="erm-legacy-label">AUTO_UPDATE_ADVMAP</small> (см. )
	Не устанавливайте этот параметр, если используете собственные/стандартные настройки.</pre>


<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-s"></span><span class="erm-anchor" id="command-s"></span><strong><span class="erm-tone-red">S#</span></strong><br>
Сдвиг слотов на # позиций.<br>
В диалоге найма можно сдвигать все слоты на указанное число позиций вправо (# &gt; 0) или влево (# &lt; 0).<br>
Если слот выходит за пределы логических значений (0..3), он исчезает.<br>
Сдвиг выполняется при сохранении всех настроек (тип, кол-во, источник)<br>
<strong></strong><br></div><span class="erm-anchor" id="ref-rec-rd-15"></span><details class="erm-comment"><summary>Примеры (<span class="erm-anchor" id="ref-rec-rd-show15"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<u>Пример 1</u>. Имеем 0..1 слоты с обычными и улучшенными существами (источник не важен):<br>
<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">монстр А</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">монстр Б</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">слот пуст</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">слот пуст</strong><br>
Необходимо подготовить два пользовательских слота с Ангелами/Архангелами в них.
<pre class="erm-example"><code class="language-erm">!!RD:S2;
!!RD:C0/12/2/12345 C1/13/2/54321;</code></pre>
Получаем следующее:<br>
<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">2 ангела</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">2 архангела</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">монстр А</strong> <strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">монстр Б</strong>.<br>
<br>
<u>Пример 2</u>. Удалить 1-й слот с улучшенными монстрами и оставить только неулучшенных.
<pre class="erm-example"><code class="language-erm">!!RD:C0/?t/?t/?y2; в y2 значение источника для 1го слота, t - временная быстрая переменная
!!VRy2:%14; вычисляем идентификатор жилища 0..13. Если улучшенное, то y2&gt;=7 
!!RD&amp;y2&gt;=7:S-1; сместить на 1 слоты влево, если у 1го слота источник - улучшенное жилище в городе</code></pre></div></details>

<hr>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-rd-ex"></span>
Демонстрационный скрипт применения <a href="./#ref-rec-rd">!!RD</a> от <span class="erm-anchor" id="ref-rec-rd-n1"></span><code class="erm-tone-purple erm-strong">Berserker</code>'а<strong> ()</strong></div><span class="erm-anchor" id="ref-rec-rd-8"></span><details class="erm-comment"><summary>показать</summary><div class="erm-comment-body">
В Цитадели можно нанимать троллей вместо орков в соотношении 3:10 (1 тролль = 3.333 орка). К примеру, 8 орков можно нанять как 2 тролля + 1 орк или 1 тролль + 4 орка. Т.е. найм идёт по принципу - либо малое число одних, либо большое других. (<a href="../../tables/recruitment-dialog/#ref-form-rd-s1" data-context="true">см. скриншот</a>)<br>
Все значения обновляются в реальном времени.
<pre class="erm-example"><code class="language-erm">** Демо-реализация мода на альтернативные существа **
!?FU(atm.UpdateSlots);
!!RD:C0/?y99/?y1/?y99/0; стандартное кол-во орков
!!RD:M^rate_x^/?y2; кол-во троллей для...
!!RD:M^rate_y^/?y3; ...присваивания кол-ву орков
!!RD:M^percentage_left^/?e1; доступное кол-во монстров в %
!!VRe9:S1:100; e9 - эпсилон (возможная ошибка округления)
!!VRe2:Sy1 *y2 :y3 *e1 +e9; оставшееся число троллей
!!VRy4:Se2; округляем оставшееся число троллей
!!RD:C2/?y99/y4; обновить кол-во троллей
!!VRe3:Sy1 *e1 +e9; оставшееся число орков
!!VRy5:Se3; округляем оставшееся число орков
!!RD:C0/?y99/y5; обновить кол-во орков

!?FU(OnOpenRecruitDlg);
!!RD:I?y1/?y2/?y3;
!!FU|y2=-1/y3=-1:E; выход, если нет жилища в городе
!!FU&amp;y3&lt;&gt;2/y3&lt;&gt;9:E; выход, если нет жилища 3го уровня (простого или улучш.)
!!CA0/y2:T?y4; тип замка
!!FU&amp;y4&lt;&gt;6:E; выход, если не Цитадель
!!VRx2:S0; отменить автозакрытие диалога при покупке
!!RD:M^is_unequal_alt^/1; пометить диалог как "наш"
!!VRe1:S1; кол-во доступных альтер-существ (1 = 100%)
!!RD:M^percentage_left^/e1; сохранить число доступных существ в %
; запомнить курс орки/тролли
!!RD:M^rate_x^/3; 3 тролля...
!!RD:M^rate_y^/10; ...взамен 10 орков
!!RD:C2/144/0/10000; настройка слота троллей
!!FU(atm.UpdateSlots):P;

!?FU(OnRecruitDlgAction);
!!RD:M^is_unequal_alt^/?y1; y1=1 если это atm-диалог
!!FU&amp;y1&lt;&gt;1:E;
!!VRy2:Sx1; кол-во нанятых монстров
!!RD:I?y99/?y99/?y99/?y3; активный слот
!!RD:M^rate_x^/?y4; курс тролли/орки
!!RD:M^rate_y^/?y5;
!!RD:C0/?y99/?y6/?y99/0; y6 - стандартное кол-во орков
!!RD:M^percentage_left^/?e1; доступное кол-во монстров в %
!!if&amp;y3=2:;
  !!VRe2:Sy2 *y5 :y4 :y6; нанятый процент
!!el:;
  !!VRe2:Sy2 :y6; нанятый процент
!!en:;
!!VRe1:-e2;
!!RD:M^percentage_left^/e1; обновить оставшийся процент
!!FU(atm.UpdateSlots):P;</code></pre>
</div></details>










</div>
</div>
</section>
:::

## Связанные материалы {#related}

[События / Events](../../triggers/) · [CA](../../receivers/ca/)



## Связанные команды и таблицы {#reference-links}

[Отладка и совместимость ERM](../../compatibility/) · [Таблица существ](../../tables/creatures/) · [Города (CA)](../ca/#command-t-u) · [Средства ERA, память и звук (SN)](../sn/#command-w-w-key-w-key) · [Диалог найма RD](../../tables/recruitment-dialog/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4018) — Enhanced !!RD:I with new named parameters syntax. !!RD:I^parameter name^/?$parameter_value; ============================== Featured parameters: ============================== ^dlgId^ - Unique recruit dialog ID. Used to d…
<!-- ERA3-GENERATED:END -->
