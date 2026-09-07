---
{"title":"Введение в ERM","summary":"Как скрипт подключается к карте и реагирует на события Heroes III.","translationStatus":"reviewed"}
---

## Дополнительная информация {#ref-cont-adv}

:::erm
<section class="erm-reference" lang="ru">
<div>
<span class="erm-source-title">
<div class="erm-align-center erm-paragraph"><strong>Подборка статей и материалов справочника</strong></div>
<dl>
<dt><span class="erm-tone-blue">°</span> <span class="erm-anchor" id="ref-cont-adv-none"></span><a href="../learn/">Обучение</a></dt>
<dt><span class="erm-tone-blue">°</span> <a href="../variables/#ref-cont-flags">Флаги и переменные</a></dt>
<dt><span class="erm-tone-blue">°</span> <a href="../variables/#ref-cont-usedvar">Использованные переменные</a></dt>
<dt><span class="erm-tone-blue">°</span> <a href="../triggers/#ref-cont-triggersol">Общая информация о триггерах</a></dt>
<dt><span class="erm-tone-blue">°</span> <a href="../syntax/#ref-cont-receiversol">Общая информация о ресиверах</a></dt>
<dt>  <span class="erm-anchor" id="ref-cont-adv-wt"></span><span class="erm-legacy-label">Дополнительная информация</span>…</dt>
<dt><span class="erm-anchor" id="ref-cont-adv-t0"></span><ul class="erm-margin-top-zero">
	<li><a href="../receivers/if/#ref-cont-db">по диалоговым окнам</a></li>
	<li><a href="../receivers/if/#ref-era-color-text">по цветному тексту в диалогах</a></li>
	<li><a href="../receivers/ea/#ref-cont-stackexpbonus">об опыте существ</a></li>
	<li><a href="../tables/object-control-words/#ref-cont-conwords">по контрольным словам объектов</a></li>
	<li><a href="../receivers/ss/#ref-cont-sschange">о нестандартных значениях вторичных навыков</a></li>
	<li><a href="./#ref-cont-mapmakers">для картостроителя</a></li>
	<li><a href="./#ref-cont-wog">о файлах .wog</a></li>
	<li><a href="../tables/text-resources/#ref-cont-ers">о файлах .ers</a></li>
	<li><a href="../tables/text-resources/#ref-cont-ert">о файлах .ert</a></li>
	<li><a href="../tables/text-resources/#ref-cont-json">о файлах .json</a></li>
	<li><a href="../triggers/#ref-cont-logicevent">о логике срабатывания событий в игре</a></li>
	<li><a href="../un-c/#ref-cont-unc">по работе с памятью</a></li>
	<li><a href="../un-c/#ref-cont-unc-lib">по использованию UN:C (готовые решения)</a></li>
	<li><a href="../receivers/sn/#ref-era-api">по функциям и процедурам ERA (API)</a></li>
	<li><a href="../tables/combat-stack-structure/#ref-form-combatmon">о структуре боевого стека</a></li>
	<li><a href="../tables/hero-structure/#ref-form-advhero">о структуре героя на карте приключений</a></li>
	<li><a href="../un-c/commander-structure/#ref-form-commstr">о структуре командира</a></li></ul></dt>
</dl>
</span></div>
</section>
:::

## Mapmakers_tools {#ref-cont-mapmakers}

:::erm
<section class="erm-reference" lang="ru">
<div>

<span class="erm-anchor" id="ref-cont-mapmakers-text"></span><div>
<h3 class="erm-align-center">Инструментарий картостроителя</h3>
<span class="erm-anchor" id="ref-cont-mapmakers-q1"></span><blockquote class="erm-tone-quote erm-note"><em>Эта статья описывает инструментарий и методики, которые могу быть полезны для картостроителей и скриптеров.</em></blockquote>

<h3><span class="erm-anchor" id="ref-cont-mapmakers-1"></span>Авто-загрузка настроенных опций WoGа для вашей карты.</h3>
<span class="erm-anchor" id="ref-cont-mapmakers-t0"></span><ol class="erm-margin-top-zero">
<li>Откройте меню WoG опций и выберите желаемые опции</li>
<li>Сохраните файл в папку Maps со своим именем файла. Обычно используется название, как у карты. 
Так, если ваша карта названа <em class="erm-legacy-file">Conquer the World.h3m</em>, вы можете назвать <em class="erm-legacy-file">Conquer the World.dat</em>.</li>
<li>Создайте глобальное событие в карте (назовите как хотите).</li>
<li>Настройте событие так, чтобы ни один игрок не был включен в список разрешённых, и установите день появления на 600.</li>
<li>В теле события напишите следующее (предполагая, что вы используете <em class="erm-legacy-file">Conquer the World.dat</em>):
<pre class="erm-example"><code class="language-erm">ZVSE
!#UN:J3/^maps\Conquer the World.dat^;</code></pre></li>
<li>Нажмите «ОК» чтобы сохранить событие.</li>
<li>Сохраните карту.</li>
<li>Когда вы запаковываете карту, включите в архив ваш файл настройки (например, <em class="erm-legacy-file">Conquer the World.dat</em>).</li></ol>
<div class="erm-paragraph">Теперь вместе с картой игрок автоматически скачает файл WoG'ификации, и будет играть по вашим правилам.</div>

<h3><span class="erm-anchor" id="ref-cont-mapmakers-2"></span>Создание и включение портретов героев в вашу карту</h3>
<div class="erm-paragraph">Даже, если вы не писатель скриптов, вам может захотеться включить свой портрет героя в карту.</div>
<ol class="erm-margin-top-zero">
<li>Сначала вам нужно создать большой и маленький портреты героев правильного размера и типа.<br>
Портрет состоит из двух графических файлов формата PCX (256 цветов), поэтому вам понадобится графический редактор, поддерживающий данный тип формата.<br>
Один файл используется в качестве большого портрета, и один для маленького (он используется в списке героев, к примеру).<br>
Большой должен быть размером 58×64 (ширина × высота, в пикселях).<br>
Маленький – 48×32 (ширина × высота).<br>
Поместите оба файла в папку <em class="erm-legacy-file">Heroes3\Data</em> и запакуйте их вместе с картой.<br>
Не забудьте также включить напоминание игрокам, чтобы они скопировали файлы в папку <em class="erm-legacy-file">Data</em> (можете даже создать событие в первый день, чтобы никто не упустил этот момент.)
<div class="erm-paragraph">Для примера, назовем большой файл <em class="erm-legacy-file">sylvia.pcx</em>, и маленький <em class="erm-legacy-file">sylvia-s.pcx</em></div></li>
<li>Создайте глобальное событие на карте (назовите как хотите).</li>
<li>Настройте событие так, чтобы ни один игрок не был включен в список разрешённых, и установите день появления на 600.</li>
<li>Узнайте внутренний номер героя, портрет которому хотите сменить. В нашем примере, мы используем Сильвию, чей номер = 3.<br>
В итоге, у нас получается..
<pre class="erm-example"><code class="language-erm">!#HE3:L1^sylvia-s.pcx^;</code></pre>
Если бы номер героя был 17, мы бы написали..
<pre class="erm-example"><code class="language-erm">!#HE17:...;</code></pre></li>
<li>В тело события поместите следующее (учитывая номер своего героя):
<pre class="erm-example"><code class="language-erm">ZVSE
!#HE3:L1^sylvia-s.pcx^;	[Установить маленький портрет для Сильвии]
!#HE3:L2^sylvia.pcx^;	[Установить большой портрет для Сильвии]</code></pre></li>
<li>Нажмите «ОК», чтобы сохранить событие.</li>
<li>Сохраните свою карту.</li></ol>
<div class="erm-paragraph">Если хотите установить несколько портретов для разных героев, дописывайте дополнительные строки в событие. Вам необходимо лишь одно "ZVSE" в самом начале текста.</div>
<div class="erm-paragraph"><strong>ВАЖНО:</strong> если вы редактируете героя, используя своё изображение, НЕ включайте галочку "Настроить" возле портрета героя в редакторе карт, т.к. она перекроет ERM-команды и ваши настроенные портреты.</div>

<h3><span class="erm-anchor" id="ref-cont-mapmakers-3"></span>Включение WoG "Cheat" Menu, для теста карты или скрипта</h3>
<div class="erm-paragraph">Заскриптованное чит-меню было добавлено в WoG'ификацию.<br>
Для включения его в карту, выполните следующее:
</div><ol class="erm-margin-top-zero">
<li>Создайте глобальное событие (назовите как хотите).</li>
<li>Настройте событие так, чтобы ни один игрок не был включен в список разрешённых, и установите день появления на 600.</li>
<li>В тексте события напишите следующее:
<pre class="erm-example"><code class="language-erm">ZVSE
!#UN:P77/1;</code></pre></li>
<li>Нажмите «ОК», чтобы сохранить событие.</li>
<li>Сохраните свою карту.<br>
Или вставьте эти строки в неиспользуемый скрипт WoG'ификации (например, <em class="erm-legacy-file">script99.erm</em>), если хотите, чтобы оно было активно для всех карт.</li></ol>
<div class="erm-paragraph">Для использования WoG Cheat Menu, нажмите <span class="erm-key">Alt</span> и кликните на любом следующем объекте:
</div><ol class="erm-margin-top-zero">
<li>Герой на карте;</li>
<li>герой в вашем списке героев;</li>
<li>город на карте;</li>
<li>город в вашем списке городов.</li></ol>
<div class="erm-paragraph">Появится меню с выбором нескольких вариантов действия.</div>
<div class="erm-paragraph">Вы можете использовать <span class="erm-key">Alt</span> и в окне героя. В зависимости от того, куда вы нажмёте, будут разные варианты действия.<br>
Например, если вы хотите изменить атаку героя, зажмите <span class="erm-key">Alt</span> и щёлкните по 'Атака'. А если хотите дать артефакт – с зажатым <span class="erm-key">Alt</span> щёлкните по слоту артефакта.</div>
<div class="erm-paragraph">Примечание: если опция "Отключить Чит-коды и чит-меню" включена, это меню будет также отключено.</div>


</div></div>
</section>
:::

## Файлы *.wog {#ref-cont-wog}

:::erm
<section class="erm-reference" lang="ru">
<div>
<h3 class="erm-align-center">Файлы *.wog</h3>
<div class="erm-paragraph">Файлы <strong>*.wog</strong> – это переименованные архивы <strong>*.rar</strong>. Можно использовать любой уровень компрессии в <strong>WinRAR</strong>. 
Внутри могут быть любые файлы, но архивы <u>должны</u> содержаться следующие управляющие файлы:
</div><ul>
<li><div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-wog-n3"></span><strong class="erm-tone-purple">H3BITMAP.TXT</strong><br>
Список файлов для заливки в <em class="erm-legacy-file">h3bitmap.lod</em>, каждый следующий файл на новой строке.</div></li>
<li><div class="erm-paragraph"><strong class="erm-tone-purple">H3SPRITE.TXT</strong><br>
Список файлов для заливки в <em class="erm-legacy-file">h3sprite.lod</em>, каждый следующий файл на новой строке.</div></li>
<li><div class="erm-paragraph"><strong class="erm-tone-purple">INSTMULT.TXT</strong><br>
Назначение неизвестно. Во всех архивах имеют вот такой вид:
</div><span class="erm-anchor" id="ref-cont-wog-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">[PICS]</div>
<div class="erm-paragraph">[MUSIC]</div></code></div></li>
</ul>
<div class="erm-paragraph">Следующие файлы не являются обязательными, но с их помощью можно более гибко и информативно организовать процесс установки wog-файлов:</div>
<ul>
<li><div class="erm-paragraph"><strong class="erm-tone-purple">INFORM.TXT</strong><br>
	<strong>[GeneralName]</strong><br>
На новой строке идёт название файла, под которым он будет отображаться при установке.</div>
	<div class="erm-paragraph"><strong>[WhatAboutVrotAbout]</strong><br>
На новой строке идёт дополнительная информация - обычно это информация об авторе и краткое описание.<br>
Переводов строки не должно быть, иначе текст на новой строке игнорируется.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">[GeneralName]<br>
ERM Help &amp; Scripter</div>
<div class="erm-paragraph">[WhatAboutVrotAbout]<br>
Packed on 25.08.2004</div></code></div>
</li><li><div class="erm-paragraph"><strong class="erm-tone-purple">ACTION.TXT</strong><br>
	<strong>[REGEDIT]</strong><br>
Используется для изменения реестра.<br>
На первой строке идёт путь к ключу. Ключ создаётся внутри <em class="erm-legacy-file">HKEY_LOCAL_MACHINE</em>.<br>
Затем идёт список присваиваемых атрибутов вида <em>"Атрибут"="Значение"</em> для строковых ключей и <em>"Атрибут"=dword:значение</em> - для чисел.<br>
Похоже, возможно создавать только один ключ и параметры внутри него.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">[REGEDIT]<br>
Software\New Life of Heroes\Heroes of Might and Magic III\3.5<br>
"WoG_Version"="3.53"</div>
<div class="erm-paragraph">[REGEDIT]<br>
Software\MegaSoft\ERM Scripter<br>
"SynCompletionProposal1_Width"=dword:350<br>
"SynCompletionProposal2_Width"=dword:350</div></code></div>
Если атрибут пуст, устанавливается <em>(значение по умолчанию)</em> у ключа.
<div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">[REGEDIT]</div>
<div class="erm-paragraph">Software\Hi<br>
""="Hi!"</div></code></div>
	<div class="erm-paragraph"><strong>[INSTALL]</strong><br>
Здесь идут команды вида: <span class="erm-legacy-code"><strong class="erm-tone-red erm-legacy-strong">XXXX</strong> "параметр" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"параметр 2"</span>, где:<br>
<strong class="erm-tone-red erm-legacy-strong">XXXX</strong> - определённая команда.<br>
<strong class="erm-tone-purple erm-legacy-strong">W+</strong> означает, что операция производится в папке Героев.<br>
Некоторые команды поддерживают другие базовые папки:<br>
<strong class="erm-tone-purple erm-legacy-strong">P+</strong> – меню "Пуск" → "Программы"<br>
<strong class="erm-tone-purple erm-legacy-strong">I+</strong> – Рабочий стол<br>
Если ничего из вышеперечисленного не указано, операция производится во временной папке ОС.</div>
<ul>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">VERS</strong> "параметр"<br>
Неизвестно. Возможно, версия синтаксиса. Обычно используется параметр "C" или "A" (латиница).</div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">DELL</strong> "файл" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"путь к папке"<br>
Удаляет файл(ы) в папке. В параметре "файл" можно указать любую маску.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">DELL "*.*" W+"erm_help\images\"</div></code></div>
<div class="erm-paragraph">Можно удалять и папки:
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">DELL "format" W+"erm_help\"</div></code></div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">UNRA</strong> "файл" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"путь к папке"<br>
Извлекает файл из архива в заданную папку. Если папки, куда производится копирование, не существует, то она создаётся.<br>
В качестве параметра "файл" могут идти некоторые маски, например, "*.*".<br>
<span class="erm-anchor" id="ref-cont-wog-bold"></span><em class="erm-strong">Замечание:</em> не все маски поддерживаются. Так, например, команда <span class="erm-legacy-code"><strong class="erm-tone-red erm-legacy-strong">UNRA</strong> "script*.*" <strong class="erm-tone-purple erm-legacy-strong">W+</strong></span> извлечёт все файлы, 
а не только те, что начинаются на "script".
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">UNRA "Mapmaker Tools.txt" W+"erm_s\"</div></code></div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">EXEC</strong> "файл" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"путь к папке"<br>
Запускает указанный файл из указанной папки. В параметре "файл" можно указывать маску.<br>
<em class="erm-strong">Замечание:</em> файлы запускаются в конце установки, поэтому вы не сможете удалить запущенные файлы после запуска.</div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">CMPC</strong> "файлы" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"путь к папке"<br>
Копирует файлы в папку. В параметре "файлы" можно использовать маску. Он должен содержать полный путь к файлам относительно игровой папки.<br>
<em class="erm-strong">Замечание:</em> копирование не происходит, если папки, куда производится копирование, не существует.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">CMPC "erm_help\*.*" W+"erm_help\backup\"</div></code></div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">SRCH</strong> "файл" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"сообщение"<br>
Проверяет существование указанного файла. Если файл не существует, выводит указанное сообщение. Может искать файл по маске. 
Если хоть один файл, удовлетворяющий маске, существует, сообщение не выводится.<br>
Сообщение может состоять из нескольких строк, но вместо перевода строки надо использовать "@@".<br>
Во всех официальных wog-файлах эта команда используется просто для вывода сообщений.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">SRCH "--------.---" W+"ERM Help и Tools успешно установлены!@@Этот текст будет уже на новой строке."</div></code></div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">MDIR</strong> "название папки" <strong class="erm-tone-purple erm-legacy-strong">W+</strong>"путь"<br>
Создаёт папку в указанном месте. Поддерживает и W+, и P+, и I+.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">MDIR "New Life of Heroes" P+</div></code></div></li>
	<li><div class="erm-paragraph"><strong class="erm-tone-red erm-legacy-strong">ICON</strong> "название ярлыка" <strong class="erm-tone-purple erm-legacy-strong">I+</strong>"путь к файлу"<br>
Создаёт ярлык. Поддерживает только P+ и I+. Если ранее шла команда MDIR, то ярлык создаётся внутри той папке, которая была указана в команде.
</div><div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">MDIR "New Life of Heroes" P+<br>
ICON "ERM Script Editor для Heroes III In the Wake of Gods" P+"erm_s\erm_s.exe"</div></code></div></li></ul>
</li></ul>


</div>
</section>
:::

## Событие → обработчик → команды {#model}

Триггер определяет момент выполнения. Например, `!?BA0;` реагирует на начало боя. Ресивер задаёт действие: `!!HE` работает с героем, `!!OW` — с игроком, `!!IF` — с сообщениями и флагами. Одинаковый двухбуквенный код может обозначать триггер и ресивер; смысл определяет префикс. Обработчик продолжается до следующего объявления триггера. Несколько обработчиков одного события выполняются последовательно.

## Где хранится скрипт {#placement}

Глобальные скрипты мода размещаются в `Mods/<ModName>/Data/s/` с расширением `.erm`. Карта также может содержать ERM в тексте временных событий. Заголовок `ZVSE` или `ZVSE2` должен находиться в начале скрипта. Для библиотеки используются `Data/s/lib/` и завершающая часть `Data/s/lib_end/`: порядок загрузки нужен для подготовки и восстановления контекста вокруг обычных обработчиков.

Храните свои имена с уникальным префиксом, например `MyMod_`. Файлы библиотек и обычные скрипты имеют разные роли; код, меняющий игровую механику, не следует выдавать за универсальную библиотеку.

## Новая игра и загрузка сохранения {#initialization}

Инструкции `!#` выполняются при инициализации новой карты. `!?PI;` / `!?FU(OnAfterErmInstructions);` срабатывает после инструкций. Это не обработчик каждой загрузки сохранения: для неё предусмотрен `!?GM0;` / `!?FU(OnAfterLoadGame);`. Состояние, сохранённое в игре, и временные ресурсы процесса восстанавливайте по-разному: адрес памяти нельзя считать действительным после перезапуска.

## Минимальный обработчик {#example}

Скрипт ниже выводит сообщение при начале новой карты. Он иллюстрирует заголовок, именованный триггер и команду сообщения.
```erm
ZVSE2

!?FU(OnAfterErmInstructions);
!!IF:M^ERM: ready^;
```

## Проверка изменений {#checking}

Проверяйте скрипт на отдельной карте: новая игра, сохранение и загрузка, повторное срабатывание события. Для кода боя отдельно проверяйте автобой, ИИ и сетевую игру. Если появляется ERM-ошибка, сначала проверьте заголовок, `;`, парность `if/re` и `en`, диапазоны идентификаторов и доступность контекста события.

[Синтаксис](../syntax/) · [Совместимость](../compatibility/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../triggers/) · [Триггеры и события ERM](../triggers/#use) · [Начало и завершение боя (BA)](../triggers/ba/) · [Посещение объекта (OB)](../triggers/ob/) · [Посещение героя (HE)](../triggers/he/) · [Переменные, строки и массивы](../variables/) · [Синтаксис ERM: ZVSE и ZVSE2](../syntax/) · [Общие игровые операции (UN)](../receivers/un/#command-j3-file-j4-j5)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.16, +](../compatibility/#era3-v-3-9-16-l263) — Introduced another directory for ERM global library scripts: "Data/s/lib_end". Scripts from this directory will be loaded after all other map/global/library scripts. Likewise "lib" directory, these scripts do not depend …
- [ERA 3.9.16, +](../compatibility/#era3-v-3-9-16-l266) — Improved CombatManager::CastSpell function (used also in BM:C) by temporarily setting CombatManager->ControlSide to the side, controlling casting stack. Casting stack may differ from active stack (it may be counter attac…
- [ERA 3.9.16, *](../compatibility/#era3-v-3-9-16-l387) — From now on, Era always asks permission to load global scripts on map start or scripts reloading if map has internal scripts. The permission text was changed from "skip" to "load" by default. The following language key m…
- [ERA 3.9.16, *](../compatibility/#era3-v-3-9-16-l398) — "load only these scripts.txt" file support is deprecated. It will be removed in Era 4.X versions. Duplicate entries in this file are ignored from now.
- [ERA 3.9.16, *](../compatibility/#era3-v-3-9-16-l399) — Updated "Era Erm Framework" mod to use "lib_end" directory for some scripts. &#91;!&#93; Savegame file format was changed. Added format checking. Old savegames will be loaded without scripts/plugins data.
- [ERA 3.9.15, +](../compatibility/#era3-v-3-9-15-l432) — Added support for ERM script libraries. Scripts, located in "Data/s/lib" directory are considered library scripts. They are loaded before other global scripts and before all map scripts (both internal and external). Such…
- [ERA 3.9.15, +](../compatibility/#era3-v-3-9-15-l457) — Added possibility to increase buffer size for compiled erm scripts using heroes3.ini setting. The default value is 128 MB. Single ERM command need ~0.5 KB. CompiledErmBufSize = 134217728; maximum size of a buffer for com…
- [ERA 3.9.13, +](../compatibility/#era3-v-3-9-13-l691) — Added experimental (may be subject of removal) exported function to quit from any dialog to main game menu. // Exits adventure manager dialogs and/or all subdialogs and immediately returns to game menu screen by raising …
- [ERA 3.9.12, +](../compatibility/#era3-v-3-9-12-l885) — Rewritten creature regeneration ability support. (!) Plugins should not hook regeneration code and should use Era 'SetRegenerationAbility' API instead. Era introduces term "Standard regeneration ability", which value is …
- [ERA 3.9.12, -](../compatibility/#era3-v-3-9-12-l953) — Fixed bug: local static string arrays indexes were incorrectly calculated for non-const indexes in ERM 2 scripts, ex. (arr&#91;i&#93;).
- [ERA 3.9.7, +](../compatibility/#era3-v-3-9-7-l1031) — Added support for arrays and primitive types in language json files, because they are often used as config files. Numbers are converted to strings, booleans are converted to "0" and "1", null values are ignored (the same…
- [ERA 3.9.1, +](../compatibility/#era3-v-3-9-1-l1302) — Added "Tools/PngCrush" utility to optimize png images and "optimize_png.bat" script for batch image optimization. Either copy "pngcrush.exe" and "optimize_png.bat" to root directory with png files and subdirectories or r…
- [ERA 3.3.0, +](../compatibility/#era3-v-3-3-0-l2214) — Added the following functions to "Era Erm Framework" mod: !?FU(GetTimeMsec); ; Returns current time in milliseconds (time from computer start, overflowing each 49.71 days) !#VA(result:x); !?FU(PackUnion); ; Safely packs …
- [ERA 3.1.0, +](../compatibility/#era3-v-3-1-0-l2944) — Added "OnAfterErmInited" event to "Era Erm Framework", occuring right in the end of !?PI / "OnAfterErmInstructions" event. The event allows to perform actions after most scripts initialized their variables and performed …
- [ERA 3.1.0, +](../compatibility/#era3-v-3-1-0-l3013) — Added Era exported function ShowErmError (Error: pchar); stdcall; The function shows regular ERM error dialog and can be used for ERM scripts error reporting and debugging. Example: !!if|(baseFaction)<(NO_TOWN)/(baseFact…
- [ERA 3.0.5, *](../compatibility/#era3-v-3-0-5-l3357) — Extracted all Era supplied ERM scripts into "Era Erm Framework" mod.
- [ERA 3.0.1, +](../compatibility/#era3-v-3-0-1-l3460) — Added new 3 magic constants. All are safe to use inside strings and as parameters: (FILE) expands into current script file name. (LINE) expands to current line number in script file. (CODE) expands to excerpt of escaped …
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l3827) — Added 1000 era - stdlib.erm script, which will contain safe for all extra ERM functionality. Currently !?FU(OnEvenyDay) event is enhanced. Its handlers will receive 5 parameters: !?FU(OnEveryDay); !#VA(day:x1) (weekDay:x…
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l3834) — Added 1000 era - consts.erm script with lots of constants to be used in ERM 2.0 scripts. ERM Editor, based on Sublime Text, supports constants autocompletion. Remember, that constants without mod name prefix are reserved…
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l3969) — Added "1000 - era consts.erm" script to WoG mod with standard Era constants, including players, player bits, heroes, resources, objects, monsters, artifacts, spells. The file contents may be corrected and widened in the …
- [Все связанные записи](../compatibility/#era3-changelog)
<!-- ERA3-GENERATED:END -->
