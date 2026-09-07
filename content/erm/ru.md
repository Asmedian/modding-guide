---
{"title":"ERM-скрипты","summary":"События игры, команды ERM и библиотека ERA ERM Framework.","translationStatus":"reviewed"}
---

## О справочнике {#ref-cont-abouthelp}

:::erm
<section class="erm-reference" lang="ru">
<div>


<h3 class="erm-align-center"><a href="./#ref-cont-abouthelp-o" title="Перейти к истории изменений справочника"><span class="erm-tone-blue">О справочнике…</span></a></h3>

<div class="erm-paragraph">Перевод ERM-помощи, оформление справочника: <span class="erm-anchor" id="ref-cont-abouthelp-n1"></span><span class="erm-tone-purple erm-strong erm-source-title">DracoLich</span><br>
Доработка оформления и материала: <span class="erm-anchor" id="ref-cont-abouthelp-n2"></span><span class="erm-tone-purple erm-strong erm-source-title">Bes</span><br>
Спасибо: <span class="erm-tone-purple erm-strong">Algor<span class="erm-anchor" id="ref-cont-abouthelp-black"></span><em class="erm-tone-text">,</em> Berserker<em class="erm-tone-text">,</em> daemon_n<em class="erm-tone-text">,</em> Demiurg<em class="erm-tone-text">,</em> Etoprostoya<em class="erm-tone-text">,</em> 
Hippocamus<em class="erm-tone-text">,</em> Igor<em class="erm-tone-text">,</em> igrik<em class="erm-tone-text">,</em> Master<em class="erm-tone-text">,</em> myoffice91<em class="erm-tone-text">,</em> Night<em class="erm-tone-text">,</em> sergroj<em class="erm-tone-text">,</em> 
ShadowTheAge<em class="erm-tone-text">,</em> SnoRT<em class="erm-tone-text">,</em> Valery<em class="erm-tone-text">,</em> wessonsm<em class="erm-tone-text">,</em> XEPOMAHT<em class="erm-tone-text">,</em> 
Д'якон<em class="erm-tone-text">,</em> Миханик</span>… и всем тем, кто так или иначе принял участие в улучшении справки, но небыл здесь упомянут.<br>
Комментарии и обнаруженные ошибки оставляйте на <a href="http://wforum.heroes35.net/showthread.php?tid=914">форуме</a><br>
 </div>

<div class="erm-paragraph">В справочнике используется следующая <strong>система обозначений</strong>:<br>
Если какой-либо параметр отображен как <strong>#</strong>, то его нельзя проверить или получить, можно лишь установить.<br>
Если какой-либо параметр отображен как <strong>?$</strong>, то он может быть только записан в переменную, установить или проверить его нельзя.<br>
Если какой-либо параметр отображен как <strong>$</strong>, то он может быть установлен, проверен или получен.<br>
Всё это верно, если в комментарии команды не указывается иное.</div>

<div class="erm-paragraph"><strong>Установить</strong> значение - прямая запись значения.<br>
<strong>Проверить</strong> значение - проверка значения и запись результата во флаг 1.<br>
<strong>Получить</strong> значение - запись значения в переменную.<br>
<u>Примеры</u>:
<pre class="erm-example"><code class="language-erm">!!OW:R0/6/9000;	 - установить золото Красного равным 9000.
!!OW:R0/6/=9000; - флаг 1 будет истиной, если у Красного ровно 9000 золота, и Ложью, если не так.
!!OW:R0/6/?v1;	 - записать кол-во золота Красного в переменную v1.</code></pre></div>

<div class="erm-paragraph">Если вы желаете <strong>установить</strong> какой-либо<strong> параметр</strong> на значение <strong>0</strong>, вы можете просто не указывать ничего вместо цифры.
<pre class="erm-example"><code class="language-erm">;Команда !!OW:R/6/9000; эквивалентна команде !!OW:R0/6/9000;</code></pre>
Если в команде присутствует множество параметров, причём их нулевое значение означает "ничего" (например, для <a href="receivers/if/#ref-rec-if-g">IF:G</a>), вы
можете просто опустить дальнейшие параметры.<br>
Например…
<pre class="erm-example"><code class="language-erm">!!IF:G1/1/0/33/34/35/36/37;		#1
!!IF:G1/1/0/33/34/35/36/37////////;	#2</code></pre>
Вариант команды #1 эквивалентен варианту #2, потому что здесь 0 означает "ничего". 
Дальнейшие параметры просто автоматически устанавливаются на 0.</div>

<div class="erm-paragraph">В некоторых опциях вы можете встретить расширение синтаксиса, с припиской - "без обновления". 
Это означает, что экран не будет перерисован заново при выполнении команды, что очень полезно для боевых скриптов 
(иначе возникают некоторые неполадки в обрисовке) и скриптов, выполняющих множество действий (ускорение действий).</div>

<div class="erm-paragraph">Для просмотра <strong><u>примеров</u></strong> и <strong><u>комментариев</u></strong>, 
кликните на этом слове (такой блок информации раскроется ниже).</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-abouthelp-o"></span>
<u></u></div><span class="erm-anchor" id="ref-cont-abouthelp-1"></span><details class="erm-comment"><summary>История изменений справочника (<span class="erm-anchor" id="ref-cont-abouthelp-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph"><strong>Версия 2.10a</strong><br>
+ Добавлена информация для DW:O<br>
* Исправлена ошибка в таблице жилищ существ<br>
* Некоторые правки/дополнения по справочнику</div>

<div class="erm-paragraph"><strong>Версия 2.10</strong><br>
+ Добавлена статья с примерами по использованию UN:C/SN:E<br>
+ Добавлена таблица структуры командира<br>
+ Добавлено расширенное описание по 29 и 30 спец.флагам существ<br>
+ Добавлен дополнительный материал для !?MF<br>
+ Добавлена информация для BM:F, BU:O, IF:Q, LE:S, MR:F, OW:C<br>
+ Дополнена информация в статье "Флаги и переменные"<br>
+ Добавлен отдельный конвертер hex-значений<br>
+ Дополнена страница Содержания справочника<br>
* Исправлено описание "зеркал" клеток ландшафта для TR:T<br>
* Исправлено описание для GD:T<br>
* Исправлены ошибки в таблице боевых препятствий<br>
* Исправлены ошибки в таблице строений Подземелья<br>
* Некоторые правки/дополнения по справочнику</div>

<div class="erm-paragraph"><strong>Версия 2.9e</strong><br>
+ Добавлено описание экспортируемых функций ERA<br>
+ Дополнена информация по DL<br>
* Изменён по умолчанию приоритет открытия описания ресиверов SN/MP<br>
* Некоторые правки по справочнику</div>

<div class="erm-paragraph"><strong>Версия 2.9d</strong><br>
+ Добавлена таблица кодов клавиш<br>
+ Добавлена таблица описания ресурсов монстров<br>
+ Добавлена таблица типов снарядов монстров<br>
+ Добавлена статья по цветному тексту в диалогах<br>
+ Дополнен раздел по новым триггерам ERA<br>
+ Добавлена информация для MO:G<br>
* Исправлены неточности в статье "Использованные переменные"<br>
* Имена существ, используемых в справочнике, приведены к единообразию<br>
* Улучшена навигация для некоторых статей<br>
* Некоторые исправления/дополнения по справочнику</div>

<div class="erm-paragraph"><strong>Версия 2.9c</strong><br>
+ Добавлена таблица смещений по структуре героя (для HE:Z)<br>
+ Добавлена таблица смещений по структуре стека в бою (для BM:Z)<br>
+ Добавлена информация для OW:H T<br>
* Небольшие исправления, добавлены примеры</div>

<div class="erm-paragraph"><strong>Версия 2.9b</strong><br>
+ Оптимизация графических элементов справочника<br>
* Обновлена шапка главной страницы</div>

<div class="erm-paragraph"><strong>Версия 2.9a</strong><br>
+ Добавлена информация по новым триггерам ERA<br>
+ Добавлено описание логики срабатывания событий/хуков<br>
+ Добавлено описание нового функционала !!MP/!?MP<br>
* Небольшие исправления по справочнику</div>


<div class="erm-paragraph"><strong>Версия 2.9</strong><br>
+ Добавлено описание новых команд ERA<br>
+ Добавлен список всех триггеров и именованных событий ERA<br>
+ Добавлена информация по json-файлам<br>
+ Поправлено описание UN:G2<br>
* Небольшие исправления/дополнения, добавлены примеры</div>


<div class="erm-paragraph"><strong>Версия 2.8.2</strong><br>
* Поправлено описание BM:C, FU:C, OW:W, CB, IF:N<br>
* Исправлена неверная ссылка к таблице для CE:D U, UN:A<br>
* Исправлены некоторые ссылки на странице Содержания<br>
+ Добавлена статья по битам объектов карты<br>
+ Добавлены таблицы с 16-чной системой нумерации артефактов, героев, заклинаний<br>
* Проставлена, там где положено, буква «Ё»<br>
* Некоторые страницы дополнены графическими элементами<br>
* Изменено оформление примеров кода ERM<br>
* Пересмотрен список таблиц<br>
* Улучшена навигация в некоторых таблицах<br>
* Оптимизированы некоторые картинки справочника<br>
* Доработана вёрстка и стилистика текста справочника</div>

<div class="erm-paragraph"><strong>Версия 2.8.1e</strong><br>
* Исправлена неверная ссылка к таблице для OB:D E<br>
* Небольшие исправления/дополнения, добавлены примеры<br> 
* Улучшена навигация в нескольких таблицах<br>
+ Добавлена таблица нумерации существ в 16-чной системе</div>

<div class="erm-paragraph"><strong>Версия 2.8.1d</strong><br>
* Незначительные изменения в описаниях<br>
* Улучшен (надеюсь :) ) список таблиц</div>

<div class="erm-paragraph"><strong>Версия 2.8.1c</strong><br>
* Исправлена некорректная страница (опыт отрядов) предыдущей версии<br>
* Скрины в обучении UN:C от Дьякона сделаны более качественными при меньшем "весе".<br>
* В Lite версии убрана графика из IF, BF, QW и таблицы проклятий, а также некоторые анимации заменены на статичные кадры</div>

<div class="erm-paragraph"><strong>Версия 2.8.1b</strong><br>
* Некоторые корректировки описаний команд, неверно описанных в оригинальной справке.</div>

<div class="erm-paragraph"><strong>Версия 2.8.1</strong><br>
* Поправлено описание требований к видео в диалогах<br>
* Обновлено поле боя<br>
+ Добавлена утерянная команда CD:B2<br>
+ Добавлены картинки в таблицу Курсоров и Анимаций на поле боя</div>

<div class="erm-paragraph"><strong>Версия 2.8е</strong><br>
* Поправлены некоторые стилистические ошибки<br>
* Добавлена "потерянная" страница со статьей<br>
+ Заполнен список картинок специализаций героев (раньше предлагалось самому 
найти нужного героя)<br>
+ Добавлена информация к HE:P о показе точки назначения</div>

<div class="erm-paragraph"><strong>Версия 2.8d</strong><br>
* Исправлено описание команд VR:M4 M5 M6 (неверный синтаксис в английском
файле)<br>
* Поправлен неверный комментарий к BA:S<br>
* Команды IF:A R S перенесены соответственно алфавиту<br>
* В команде TR:T была неверно указана картинка реки.<br>
* Возвращены высококачественные картинки подтипов почв и магических кристаллов<br>
* Исправлены редкие неверные ссылки<br>
* Комментарии сделаны более явно "нажимательными"<br>
* Укорочена таблица проклятий и благословений вырезкой малополезных
словосочетаний<br>
* Убраны ненужные выделения букв в названиях<br>
+ Добавлен список опций Знамени Полководца в EX:R<br>
+ Добавлена команда VR:R$/#;<br>
+ Добавлены ссылки на триггеры всем соответственным ресиверам, триггеры, не
имевшие подобного ресивера, получили ссылки с главной<br>
+ Добавлена информация о зрении монстров в TR:V<br>
+ Добавлены картинки дорог для TR:T; которые корректно работают в Фениксе<br>
+ Добавлена информация о некорректной обработке синтаксиса сравнения в
соответствующих раздел статьи Флаги и переменные<br>
+ Добавлены вот эти самые описания :P</div>

<div class="erm-paragraph"><strong>Версия 2.8c</strong><br>
* Тег примеров был изменен с жирного шрифта на моноширинный<br>
+ Добавлена статья в обучение<br>
+ Комментарии и пояснения сделаны раскрывающимися (в итоге - более компактные
страницы)<br>
+ Описание команды при наводке мышью на опцию в заголовке<br>
+ Улучшен раздел содержание</div>

<div class="erm-paragraph"><strong>Версия 2.8b</strong><br>
* Все страницы переведены на кодировку windows-1251<br>
* Поправка нерабочих ссылок<br>
+ Добавлена статья-перевод послания для картостроителей<br>
+ Добавлены оглавления во все длинные статьи и таблицы</div>

<div class="erm-paragraph"><strong>Версия 2.8a</strong><br>
* Полное изменение оформления<br>
* Исправлена неверная информация о HE:M<br>
+ Добавлены детали для UN:I</div>

<div class="erm-paragraph"><strong>Версия 2.7</strong><br>
Исправлены ошибки, шрифты.</div>

<div class="erm-paragraph"><strong>Версия 2.6</strong><br>
Исправлены мелкие недочеты, упорядочены некоторые таблицы, добавлена информация</div>

<div class="erm-paragraph"><strong>Версия 2.5</strong><br>
Исправлены ошибки предыдущей версии</div>

<div class="erm-paragraph"><strong>Версия 2.4</strong><br>
Добавлены команды TE</div>

<div class="erm-paragraph"><strong>Версия 2.3</strong><br>
Добавлена таблица опыта существ<br>
Добавлено описание команды записи в память (UN:C)<br>
Изменения оформления</div>

<div class="erm-paragraph"><strong>Версия 2.2</strong><br>
Добавлена новая информация о командах</div>

<div class="erm-paragraph"><strong>Версия 2.1.1</strong><br>
Добавлена информация о некоторых командах</div>

<div class="erm-paragraph"><strong>Версия 2.1.0</strong><br>
Повышена стабильность работы страниц<br>
Исправлены ошибки перевода<br>
Добавлена дополнительная информация</div>

<div class="erm-paragraph"><strong>Версия 2.0</strong><br>
Справочник оформлен в виде CHM<br>
Добавлены корректировки, обучение и дополнительная информация</div>

<div class="erm-paragraph"><strong>Версия 1.1</strong><br>
Исправления опечаток, разнообразные корректировки</div>

<div class="erm-paragraph"><strong>Версия 1.0</strong><br>
Сделан перевод всех команд, оформлен в HTML<br>
 </div></div></details>



</div>
</section>
:::

## Ссылки {#ref-cont-links}

:::erm
<section class="erm-reference" lang="ru">
<div>
<h3 class="erm-align-center">Ссылки</h3>
<dl><strong><ul>
<li><a href="http://wakeofthegods.strategyplanet.gamespy.com/">Оф. сайт New Life of Heroes</a><br>
</li><li><a href="http://wforum.heroes35.net">Оф. форум "Новой жизни героев"</a><br>
</li><li><a href="http://forum.df2.ru">Старый форум</a><br>
</li><li><a href="http://heroes.obninsk.ru">Файлы Героев WoG 3.58f</a><br>
</li><li><a href="http://wforum.heroes35.net/files/wog358_sources.rar">Исходный код WoG 3.58f</a>
</li><li><a href="http://www.dracolich.narod.ru">ERM-помощь</a><br>
</li><li><a href="http://h3disk.narod.ru/index1.htm">Множество всего для Героев 3.58</a>
</li></ul></strong></dl></div>
</section>
:::

## ERM-HELP {#ref-cont-main}

:::erm
<section class="erm-reference" lang="ru">
<div><div class="erm-align-center erm-paragraph"><img src="../../assets/erm/e6c4b5fd05dd22e7.gif" alt="ERM-HELP version 2.10b Версия ERM: 2914 (WoG 3.58f, TE, ERA2)" loading="lazy" decoding="async" class="erm-figure" width="392" height="73"><span class="erm-source-title"><br>
ERM-HELP</span><br>
<span>version 2.10b<br>
<u><strong>Версия ERM: 2914 (WoG 3.58f, TE, ERA2)</strong></u></span></div>
<div class="erm-align-left erm-paragraph"><strong><u>Введение</u><br>
ERM</strong> означает <strong>Event Related Model</strong> (событийно-связанный модуль) и 
является дополнением к игре <strong>Герои 3: Дыхание Смерти™</strong>.<br>
ERM - новая технология, позволяющая динамическое изменение игры в зависимости от 
действий игрока или компьютера.<br>
На данный момент подготовлено 78 официальных скриптов, влияющих на самые разные 
аспекты игры.<br>
Вы можете создавать свои скрипты, и данная справка может помочь в этом деле.<br>
Новичкам рекомендуется почитать <a href="learn/">обучение</a>.
</div><div class="erm-paragraph">
В ранних версиях отсутствовала поддержка сетевой игры (только один игрок и 
хот-сит), но теперь WoG полностью поддерживает сетевую игру по TCP/IP. 
Исключения пока что только для некоторых скриптов, но неподдерживаемые скрипты 
отключаются автоматически.<br>
 </div><span class="erm-anchor" id="ref-cont-main-1"></span><div>
<span class="erm-source-title"><a href="./#ref-cont-abouthelp">О данной справке</a><br>
<a href="./#ref-cont-wogteam" data-context="true">WoG-team</a><br>
<a href="./#ref-cont-links" data-context="true">Ссылки</a></span></div>

</div>
</section>
:::

## About {#ref-cont-wogteam}

:::erm
<section class="erm-reference" lang="ru">
<div><div class="erm-align-center"><span class="erm-anchor" id="ref-cont-wogteam-n2"></span><h3 class="erm-tone-purple erm-strong">Команда WoG</h3></div>
<div class="erm-align-center">
<span class="erm-anchor" id="ref-cont-wogteam-wt"></span><span class="erm-legacy-label"><strong>Идея ERM:</strong></span><br>
Слава Сальников (ZVS)<br>
<br>
<span class="erm-legacy-label"><strong>Программисты:</strong></span><br>
Александр Карпеко<br>
Александр Трифонов<br>
Слава Сальников<br>
<br>
<span class="erm-legacy-label"><strong>Главные художники:</strong></span><br>
Алексей Пичулин<br>
Алексей Васильев (Darkloke)<br>
Bruno<br>
Dieter Averbeck<br>
Mathias Launhardt<br>
Петр Алексеев (Arstahd)<br>
<br>
<span class="erm-legacy-label"><strong>Художники:</strong></span><br>
Александр Карпеко<br>
Артем Гагарин<br>
Bianor<br>
Jerry Kowalczyk (Treupp)<br>
Jonas Gustafsson<br>
Константин Ночев (Dutch)<br>
Mandi (Kitten Angel)<br>
Сергей Вахрамеев<br>
Слава Сальников<br>
Виктория Калинина (Candy)<br>
<br>
<strong>
<span class="erm-legacy-label">ERM программирование и/или<br>дизайнеры уровней:</span></strong><br>
Александр Карпеко<br>
Александр Трифонов<br>
Александра Балахура<br>
Алексей Пичулин<br>
Alexis Koz<br>
Anders Jonsson<br>
Андрей Адуцкевич (Perfecto)<br>
Bruno<br>
COX<br>
Dieter Averbeck<br>
Дмитрий Леликов<br>
Donald X.Vaccarino<br>
Jack Stebaev (AsPiN)<br>
Marc Lasch<br>
Петр Алексеев (Arstahd)<br>
Petyo Georgiev (Petronius)<br>
Qurqirish Dragon<br>
Rich Reed (Space8999)<br>
Robert Bergerfjall (Overlord)<br>
Sir Four<br>
Слава Сальников<br>
Steven Lynch<br>
Thomas Franz (samot) <br>
Timothy Pulver<br>
Tobyn<br>
<br>
<strong>
<span class="erm-legacy-label">WoG &amp; ERM документация:</span></strong><br>
Алексей Пичулин<br>
Bruno<br>
Darkloke<br>
George Toganel (Pushtiu')<br>
Jack Stebaev (AsPiN)<br>
Kamil Belau (Acid Dragon)<br>
Marcus the Red<br>
Yura Metelyov (Ennin)<br>
Слава Сальников<br>
Timothy Pulver<br>
<br>
<span class="erm-legacy-label"><strong>Ведущие ERM тестеры:</strong></span><br>
Donald X.Vaccarino<br>
Gangrail<br>
Jonas Gustafsson<br>
Roland Rollig (Rasputin)<br>
Stefan Pavlov (Ste)<br>
Steve Hanna (ByteBandit)<br>
Timothy Pulver<br>
<br>
<span class="erm-legacy-label"><strong>Тестеры:</strong></span><br>
Все мы и<br>
<a href="http://www.yahoogroups.com/wakeofgods">
<span class="erm-tone-text">WakeOfGods fan group</span></a><br>
<br>
<span class="erm-legacy-label"><strong>Веб-мастер:</strong></span><br>
Алексей Пичулин<br>
<br>
<span class="erm-legacy-label"><strong>Веб-художники:</strong></span><br>
Алексей Пичулин<br>
Дмитрий Леликов<br>
<br>
<strong><span class="erm-legacy-label">Особые благодарности:</span></strong><br>
Alex 2k<br>
Alexander the Artist<br>
Alexander Bass<br>
Алексей Крючков (GreyMage)<br>
Andrew Svietlichnyy<br>
Andrew Yang<br>
Angelspit<br>
Dan Lind<br>
Glover<br>
Paul Lipka (Lipa)<br>
Psycomonkee<br>
Sergey Gorbanyov<br>
Simon Mooncalf<br>
Slaim Master<br>
Theo van Bekkum<br>
Xerobull
</div></div>
</section>
:::

## ERM-HELP {#ref-index}

:::erm
<section class="erm-reference" lang="ru">
<div>


</div>
</section>
:::

## ERM Help {#ref-titre}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="table-wrap erm-reference-table"><table width="100%"><tr>
  <td><span>
	<div class="table-wrap erm-reference-table"><table width="100%">
	<tr><td><a href="./#ref-cont-main" title="Главная">Главная</a></td></tr>
	<tr><td><a href="start/#ref-cont-adv" title="Статьи о ERM, файлов WoG/ERA и не только..">Статьи</a></td></tr>
	<tr><td><a href="variables/#ref-cont-flags" title="Флаги и переменные">Флаг, перем.</a></td></tr>
	<tr><td><a href="variables/#ref-cont-usedvar" title="Таблица использованных переменных">Исп. перем.</a></td></tr>
	<tr><td><a href="index/#ref-cont-list" data-context="true" title="Мини-алфавитный указатель наиболее востребованных опций">Содержание</a></td></tr>
	</table></div>
  </span></td>
  <td><span>
<span class="erm-anchor" id="ref-titre-1"></span><details class="erm-comment"><summary><img src="../../assets/erm/95e7fab0dd85c3ef.png" alt="Показать коды команд для объектов карты…" loading="lazy" decoding="async" class="erm-figure" title="Показать коды команд для объектов карты…"></summary><div class="erm-comment-body">
	<div class="table-wrap erm-reference-table"><table width="100%">
	<tr>
	<td><a href="receivers/cb/#ref-rec-cb" title="Настройка параметров для Банка существ">CB</a></td>
	<td><a href="receivers/ch/#ref-rec-ch" title="Настройка параметров Сундуков сокровищ">CH</a></td>
	<td><a href="receivers/dw/#ref-rec-dw" title="Настройка параметров для внешних Жилищ существ">DW</a></td>
	<td><a href="receivers/fr/#ref-rec-fr" title="Настройка параметров для Костров на карте">FR</a></td>
	<td><a href="receivers/gd/#ref-rec-gd" title="Настройка параметров Мистических садов">GD</a></td>
	<td><a href="receivers/gr/#ref-rec-gr" title="Настройка параметров Гарнизонов">GR</a></td>
	<td><a href="receivers/kt/#ref-rec-kt" title="Настройка параметров Древа знаний">KT</a></td>
	<td><a href="receivers/ln/#ref-rec-ln" title="Настройка параметров Навеса (погреба) на карте">LN</a></td>
	<td><a href="receivers/ml/#ref-rec-ml" title="Настройка параметров Ветряных мельниц">ML</a></td>
	<td><a href="receivers/mn/#ref-rec-mn" title="Настройка параметров Шахт (Маяка)">MN</a></td>
	<td><a href="receivers/mt/#ref-rec-mt" title="Настройка параметров Обелисков">MT</a></td>
	<td><a href="receivers/pa/#ref-rec-pa" title="Настройка параметров Ящика Пандоры на карте">PA</a></td>
	<td><a href="receivers/pm/#ref-rec-pm" title="Настройка параметров Пирамиды или новых объектов WoG">PM</a></td>
	</tr>
	<tr>
	<td><a href="receivers/qu/#ref-rec-qu" title="Настройка параметров Хижины Провидца или Стража Границы">QU</a></td>
	<td><a href="receivers/sc/#ref-rec-sc" title="Настройка параметров Учёного на карте">SC</a></td>
	<td><a href="receivers/sg/#ref-rec-sg" title="Настройка параметров Знака (Бутыли)">SG</a></td>
	<td><a href="receivers/sk/#ref-rec-sk" title="Настройка параметров Скелета (трупа) на карте">SK</a></td>
	<td><a href="receivers/sp/#ref-rec-sp" title="Настройка параметров Магического ручья на карте">SP</a></td>
	<td><a href="receivers/sr/#ref-rec-sr" title="Настройка параметров Магических святынь">SR</a></td>
	<td><a href="receivers/st/#ref-rec-st" title="Настройка параметров Камня знаний">ST</a></td>
	<td><a href="receivers/sw/#ref-rec-sw" title="Установка атрибутов для Лебединого пруда">SW</a></td>
	<td><a href="receivers/sy/#ref-rec-sy" title="Настройка параметров Верфи на карте">SY</a></td>
	<td><a href="receivers/ur/#ref-rec-ur" title="Настройка параметров Университетов на карте">UR</a></td>
	<td><a href="receivers/wg/#ref-rec-wg" title="Настройка параметров для Телеги">WG</a></td>
	<td><a href="receivers/wh/#ref-rec-wh" title="Настройка параметров Хижины ведьмы">WH</a></td>
	<td><a href="receivers/wm/#ref-rec-wm" title="Настройка параметров Водяного колеса">WM</a></td>
	</tr>
	<tr>
	<td colspan="6"></td>
	<td><a href="receivers/wt/#ref-rec-wt" title="Настройка параметров Гробниц воинов">WT</a></td>
	<td colspan="6"></td>
	</tr>
	<tr>
	<td colspan="13"><img src="../../assets/erm/b1442e85b03bdcaf.gif" alt="blank" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr>
	<td colspan="6"></td>
	<td><a href="./#ref-titre"><img src="../../assets/erm/4aad318c4c154c76.png" alt="Вернуть основные коды команд…" loading="lazy" decoding="async" class="erm-figure" title="Вернуть основные коды команд…"></a></td>
	<td colspan="6"></td>
	</tr></table></div>
<img src="../../assets/erm/b1442e85b03bdcaf.gif" alt="CB CH DW FR GD GR KT LN ML MN MT PA PM QU SC SG SK SP SR ST SW SY UR WG WH WM WT" loading="lazy" decoding="async" class="erm-figure" width="0" height="50"></div></details>
<div class="table-wrap erm-reference-table"><table width="100%">
	<tr>
	<td><a href="triggers/ae/#ref-tr-ae" title="Триггер снятия и одевания артефакта">AE</a></td>
	<td><a href="receivers/ai/#ref-rec-ai" title="Контроль движений ИИ">AI</a></td>
	<td><a href="receivers/ar/#ref-rec-ar" title="Используется для настройки ресурса или артефакта на карте">AR</a></td>
	<td><a href="receivers/ba/#ref-rec-ba" title="Настройка атрибутов битвы. Обычно используется после триггера !?BA0">BA</a></td>
	<td><a href="receivers/bf/#ref-rec-bf" title="Позволяет настроить поле битвы (разместить препядствия/объекты, или убрать их)">BF</a></td>
	<td><a href="receivers/bg/#ref-rec-bg" title="Настройка/получение параметров в бою">BG</a></td>
	<td><a href="receivers/bh/#ref-rec-bh" title="Боевые параметры: для героя с любой стороны">BH</a></td>
	<td><a href="receivers/bm/#ref-rec-bm" title="Боевые параметры: для любого отряда монстров (стека), размещение мин на поле боя">BM</a></td>
	<td><a href="triggers/br/#ref-tr-br" title="Триггер каждого раунда битвы">BR</a></td>
	<td><a href="receivers/bu/#ref-rec-bu" title="Боевые универсальные команды (закончить бой, вызвать монстра, показать сообщение и пр.)">BU</a></td>
	<td><a href="receivers/ca/#ref-rec-ca" title="Настройка параметров города (от названия и внешнего вида до построек и героя в гарнизоне)">CA</a></td>
	<td><a href="receivers/cd/#ref-rec-cd" title="Настройка параметров разрушения замков игроком, зависимостей построек или их запрете, и пр.">CD</a></td>
	<td><a href="receivers/ce/#ref-rec-ce" title="Используется для изменения параметров городских событий">CE</a></td>
	</tr>
	<tr>
	<td><a href="receivers/cm/#ref-rec-cm" title="Операции над информацией о кликах мышью">CM</a></td>
	<td><a href="receivers/co/#ref-rec-co" title="Настройка параметров командиров">CO</a></td>
	<td><span><span class="erm-tone-accent">DC</span></span></td>
	<td><a href="receivers/dl/#ref-rec-dl" title="Позволяет настраивать собственные (нестандартные) диалоги">DL</a></td>
	<td><a href="receivers/do/#ref-rec-do" title="Вызов циклической функции">DO</a></td>
	<td><a href="receivers/ea/#ref-rec-ea" title="Возможность настройки бонусных линий существ с помощью ERM">EA</a></td>
	<td><a href="receivers/ex/#ref-rec-ex" title="Поддержка опыта существ">EX</a></td>
	<td><a href="receivers/fu/#ref-rec-fu" title="Вызов функции, прерывание выполнения кода">FU</a></td>
	<td><a href="receivers/ge/#ref-rec-ge" title="Используется для изменения параметров глобального события">GE</a></td>
	<td><a href="triggers/gm/#ref-tr-gm" title="Триггер загрузок и сохранений (автосохраненний)">GM</a></td>
	<td><a href="receivers/he/#ref-rec-he" title="Настройка параметров героя (от имени и навыков до его войск, артефактов и убийства)">HE</a></td>
	<td><a href="receivers/hl/#ref-rec-hl" title="Контроль при повышении уровня героя. Нужно использовать в триггере !?HL">HL</a></td>
	<td><a href="triggers/hm/#ref-tr-hm" title="Триггер движения героя">HM</a></td>
	</tr>
	<tr>
	<td><a href="receivers/ho/#ref-rec-ho" title="Настройка параметров взаимодействий с героями">HO</a></td>
	<td><a href="receivers/ht/#ref-rec-ht" title="Настройка подсказок для любых объектов на карте определённого типа">HT</a></td>
	<td><a href="conditions/#ref-rec-iee" title="Конструкция If-else-endif используется для установки условий без использования новых функций">IEE</a></td>
	<td><a href="receivers/if/#ref-rec-if" title="Работа с флагами, указания переменных героя; настройка диалогов с игроком, показ сообщений и картинок, расширенных диалогов WoG">IF</a></td>
	<td><a href="receivers/ip/#ref-rec-ip" title="Поддержка игры по TCP/IP">IP</a></td>
	<td><a href="receivers/le/#ref-rec-le" title="Настройка параметров локального события на карте">LE</a></td>
	<td><a href="receivers/ma/#ref-rec-ma" title="Настройка параметров всех существ определённого типа">MA</a></td>
	<td><a href="receivers/mc/#ref-rec-mc" title="Установка макросов (именных ссылок на ваши данные)">MC</a></td>
	<td><a href="receivers/mf/#ref-rec-mf" title="Контроль получаемого стеком физического повреждения">MF</a></td>
	<td><a href="triggers/mg/#ref-tr-mg" title="Триггер колдовства заклинаний на карте приключений игроком">MG</a></td>
	<td><a href="receivers/mm/#ref-rec-mm" title="Настройка текста в битве или получения позиции мыши на поле боя">MM</a></td>
	<td><a href="receivers/mo/#ref-rec-mo" title="Настройка параметров монстров в конкретной позиции на карте">MO</a></td>
	<td><a href="receivers/mp/#ref-rec-mp-era" title="Контроль воспроизведения mp3-трэков">MP</a></td>
	</tr>
	<tr>
	<td><a href="receivers/mr/#ref-rec-mr" title="Контроль сопротивления магии. Работает только с триггером !?MR">MR</a></td>
	<td><a href="receivers/mw/#ref-rec-mw" title="Настройка бродячих монстров">MW</a></td>
	<td><a href="receivers/ob/#ref-rec-ob" title="Настройка параметров объекта в определённых координатах">OB</a></td>
	<td><a href="receivers/ow/#ref-rec-ow" title="Используется для команд, направленных на определённого игрока, для настройки ресурсов; команд, контролирующих героев и время жизни без замков, и пр.">OW</a></td>
	<td><a href="triggers/pi/#ref-tr-pi" title="Триггер-инструкция (пост-инструкция)">PI</a></td>
	<td><a href="receivers/po/#ref-rec-po" title="Используется для работы с числовой информацией для любого квадрата карты">PO</a></td>
	<td><a href="receivers/qw/#ref-rec-qw" title="Настройка параметров Журнала героя">QW</a></td>
	<td><a href="loops/#ref-rec-re" title="Новые скоростные циклы высокого уровня: RE/BR/CO">RE</a></td>
	<td><a href="receivers/rd/#ref-rec-rd" title="Настройка игрового диалога найма существ">RD</a></td>
	<td><a href="receivers/sn/#ref-rec-sn-era" title="Информация по новым командам в ERA">SN</a></td>
	<td><a href="receivers/ss/#ref-rec-ss" title="Настройка параметров заклинаний">SS</a></td>
	<td><a href="triggers/th/#ref-tr-th" title="Триггер входа/выхода в городской холл">TH</a></td>
	<td><a href="receivers/tl/#ref-rec-tl" title="Мультиплеерный контроллер времени хода.
Таймер реального времени">TL</a></td>
	</tr>
	<tr>
	<td><a href="receivers/tm/#ref-rec-tm" title="Эквивалент ERM для временны́х событий в игровых картах (повторение кода через интервал, старт/оканчание действия в конкретную игровую дату)">TM</a></td>
	<td><a href="receivers/tr/#ref-rec-tr" title="Настройка территорий или изменение проходимости квадратов">TR</a></td>
	<td><span><span class="erm-tone-accent">VA</span></span></td>
	<td colspan="3"></td>
	<td></td>
	<td colspan="3"></td>
	<td><a href="receivers/vc/#ref-rec-vc" title="Используется для контроля переменых, функций, таймеров и др., используемых в скрипте">VC</a></td>
	<td><a href="receivers/vr/#ref-rec-vr" title="Используется для настройки числовых и строковых переменных (настройка, сравнение и матем. и логич. операции с ними)">VR</a></td>
	<td><a href="receivers/un/#ref-rec-un" title="Универсальная команда влияния на карту и/или игру (от работы с комбо-артефактами и контроля видимости на карте до внешнего вида курсора и непосредственной работы с памятью игры)">UN</a></td>
	</tr></table></div>
	<td><span>
	<div class="table-wrap erm-reference-table"><table width="100%">
	<tr><td><a href="triggers/#ref-cont-triggers" title="Перечень триггеров ERM">Триггеры</a></td></tr>
	<tr><td><a href="receivers/#ref-cont-receivers" title="Перечень ресиверов ERM">Ресиверы</a></td></tr>
	<tr><td><div><a href="receivers/#ref-cont-receiversa" title="Таблица ресивероя для объектов">Др. объекты</a></div></td></tr>
	<tr><td><a href="triggers/#ref-era-new-events" title="Описание новых триггеров ERA, именованных событий">События</a></td></tr>
	<tr><td><a href="tables/#ref-cont-form" data-context="true" title="Список таблиц">Таблицы</a></td>
	</tr></table></div>
  </span></td>
  </span></td></tr>
</table></div>
<a href="../../assets/erm/eb127b364e491583.eot"></a>
<a href="../../assets/erm/1b20b818be881cf1.ttf"></a></div>
</section>
:::

## С чего начать {#reference}

ERM связывает игровые события с командами: посещение объекта, начало боя или нажатие клавиши запускает обработчик, а его ресиверы читают и изменяют состояние игры. Справочник охватывает классический ERM и расширения ERA. Для новых скриптов доступны именованные события, переменные и константы ERM 2.0.

- [Введение](start/) — размещение скрипта и модель выполнения.
- [Синтаксис](syntax/) — заголовок, команды, параметры и комментарии.
- [Переменные](variables/) — области видимости, строки, массивы.
- [Условия](conditions/), [циклы](loops/) и [функции](functions/) — управление выполнением.

## Найти команду или событие {#catalogs}

- [Триггеры и события](triggers/) — когда выполняется код; старые коды и зарегистрированные имена.
- [Ресиверы](receivers/) — синтаксис, параметры и ограничения команд.
- [Таблицы](tables/) — идентификаторы объектов, ресурсов и игровых сущностей.
- [Алфавитный указатель](index/) — поиск по названию и ERM-коду.

## ERA ERM Framework {#framework}

Framework — библиотека ERM с функциями, константами и подготовленным контекстом событий. Предоставленный файл библиотеки требует **ERA 3.9.15+**. Наличие команды в ERA не означает, что соответствующая функция Framework установлена.

[Обзор](framework/) · [Функции](framework/functions/) · [События](framework/events/) · [Глобальные переменные](framework/globals/) · [Константы](framework/constants/)

## Прикладные задачи {#practice}

[Примеры](examples/) показывают отдельные приёмы. [UN:C](un-c/) посвящён памяти, [SN:E](examples/sn-e/) — вызову по адресу, [SN:F](examples/sn-f/) — вызову экспортированных функций, [ERM Hooker](hooker/) — собственным точкам перехвата. Для адресных операций сначала сверяйте версию исполняемого файла и наличие нужного плагина.

[Совместимость](compatibility/) объясняет, почему одинаковый синтаксис не гарантирует одинакового поведения в WoG и разных версиях ERA.

## Связанные команды и таблицы {#reference-links}

[Синтаксис ERM: ZVSE и ZVSE2](syntax/) · [Локальные события (LE)](receivers/le/) · [Артефакты и ресурсы на карте (AR)](receivers/ar/) · [Герои (HE)](receivers/he/) · [Глобальные события (GE)](receivers/ge/) · [Переменные и выражения (VR)](receivers/vr/) · [Городские события (CE)](receivers/ce/) · [Объекты карты (OB)](receivers/ob/) · [Триггеры и события ERM](triggers/) · [Триггеры и события ERM](triggers/#use) · [Начало и завершение боя (BA)](triggers/ba/) · [Посещение объекта (OB)](triggers/ob/) · [Посещение героя (HE)](triggers/he/) · [Переменные, строки и массивы](variables/)
