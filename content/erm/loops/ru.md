---
{"title":"Циклы: re, br, co и DO","summary":"Границы цикла, шаг, вложенность и повторный вызов функции.","translationStatus":"reviewed"}
---

## re-br-co {#ref-rec-re}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресиверы <strong>RE</strong>/<strong>BR</strong>/<strong>CO</strong></span><a href="../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
<span>(повторить – прервать – продолжить)</span></div>
<div class="erm-paragraph"><br>ERA дала возможность, помимо всего прочего, использовать для написания ERM-скриптов скоростные циклы высокого уровня через новые ресиверы: <a href="./#ref-rec-re">!!re</a>, <a href="./#ref-rec-re-br-co">!!br</a>, <a href="./#ref-rec-re-br-co">!!co</a>.</div>
<hr>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-rec-re-red"></span><span class="erm-tone-red">!!re $1[/#2/#3/#4]:;<br>
   …<br>
!!en:;</span></strong><br>
Повторяет блок кода. Только первый аргумент ($1) обязателен.
</div><pre>         $1 – переменная счётчика цикла (любая числовая локальная или глобальная переменная)
         #2 – начальное значение счётчика (опционально). По умолчанию: значение переменной-счётчика цикла.
         #3 – конечное значение счётчика (опционально). По умолчанию: начальное значение счётчика цикла.
         #4 – шаг цикла (опционально). По умолчанию: 1, если установлено значение для #3, в противном случае будет равно 0.</pre>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">; Бесконечный цикл раздражающих сообщений:
!!re i:;
  !!IF:M^Дай денег, по-братски!^;
!!en:;</code></pre>
<strong></strong><span class="erm-anchor" id="ref-rec-re-2"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-re-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Сначала инициализируется переменная счётчика цикла.<br>
Значения #2 и #3 запоминаются для всего цикла и не будут оцениваться на каждой итерации (повторе).<br>
Шаг определяет, какое значение необходимо добавить в переменную счётчика после каждой итерации. 
Он также определяет тип условия остановки итерации.<br>
Положительный шаг проверяет, является ли значение $1&gt;#3.<br>
Отрицательный шаг проверяет, является ли значение $1&lt;#3.
<pre class="erm-example"><code class="language-erm">; Распустить армию текущему герою
!!re i/0/6:;
  !!HE-1:C0/i/-1/0;
!!en:;

; Показать 10, 8, 6, 4, 2 (1 и 0 не будут показаны)
!!re i/10/1/-2:;
  !!IF:M^%Vi^;
!!en:;</code></pre>
</div></details>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-re-br-co"></span>Логика работы ресивера такова:
</div><span class="erm-anchor" id="ref-rec-re-t0"></span><ul class="erm-margin-top-zero">
<li>На <strong><span class="erm-tone-red">!!re</span></strong> ("<em>repeat</em>" – повторить) проверяется, вышел ли счётчик за пределы конечного значения #3? Если да, то выполнение передаётся соответствующему блоку !!en.</li>
<li>Счётчик на <strong><span class="erm-tone-red">!!en</span></strong> увеличивается на шаг, и, если условие остановки не выполняется, будет выполнен следующий ресивер после ближайшего !!re.</li>
<li><strong><span class="erm-tone-red">!!co</span></strong> ("<em>continue</em>" – продолжить) с условием (опционально) немедленно переходит к ресиверу цикла !!en, который, в свою очередь, будет выполняться в соответствии с логикой работы.</li>
<li><strong><span class="erm-tone-red">!!br</span></strong> ("<em>break</em>" – прервать) с условием (опционально) немедленно переходит за ресивер цикла !!en.</li>
</ul>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">; Показать номер 1го пустого слота героя, если он найден
!!re i/0/6:;
  !!HE-1:C0/i/?t/?k; получить тип монстров в слоте i и их кол-во
  !!if|t=-1/k=0:;
    !!IF:M^Номер свободного слота %Vi^;
    !!br:; прервать и выйти из цикла
  !!en:;
!!en:;
!!IF&amp;i&gt;6:M^Свободных слотов не найдено^;</code></pre>
Максимально допустимо 16 вложенных блоков <a href="../conditions/#ref-rec-iee">!!if</a> / <a href="./#ref-rec-re">!!re</a>.<br>
<span class="erm-anchor" id="ref-rec-re-bold"></span><em class="erm-strong">Замечание:</em> <a href="./#ref-rec-re">!!re</a> не поддерживает непосредственное использование условий, однако ничто не мешает вам использовать "обёртывание" цикла ресивером <a href="../conditions/#ref-rec-iee">!!if</a>.
<pre class="erm-example"><code class="language-erm">!!if&amp;условие:;
  !!re ...:;
    ...
  !!en:;
!!en:;</code></pre>
<div class="erm-paragraph">Циклы для большинства задач имеют тип WHILE DO, то есть с возможностью нуля итераций. Но тем не менее, !!re позволяет писать любые: от FOR <em>i</em> FROM <em>x</em> TO <em>y</em> BY <em>step</em>, до LOOP и DO WHILE.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!re i;
  ...
  !!br&amp;условие выхода:; это DO ... WHILE
!!en:;

!!re i;
  !!br&amp;условие выхода:; это WHILE ... DO
  ...
!!en:;</code></pre></div>
<div class="erm-paragraph">Для ресиверов контроля циклов <a href="./#ref-rec-re-br-co">!!br</a> / <a href="./#ref-rec-re-br-co">!!co</a> существует поддержка уровней циклов.<br>
<span class="erm-anchor" id="ref-rec-re-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!br</span> 1:;</strong> равнозначно <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!br</span>:;</strong> и означает прервать текущий (наиболее вложенный) цикл.<br>
<strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!br</span> 2:;</strong> прервёт цикл на уровень выше, а <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!br</span> 3:;</strong> – ещё выше по уровню, и т.д. …<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!re i/0/6:; цикл 2го уровня
  !!re j/0/4:; цикл 1го уровня
    !!IF:M^%Vi %Vj^;
      !!if&amp;i=3:; Последнее показанное сообщение будет "3 0"
        !!br 2:; прервать цикл 2го уровня
      !!en;
  !!en:;
!!en:;</code></pre>
</div>





</div>
</section>
:::

## Цикл re {#repeat}

`!!re счётчик/начало/конец/шаг;` повторяет блок до парного `!!en;`. Конечная граница включается. Начало и конец вычисляются при входе, а не на каждой итерации. При положительном шаге выход наступает, когда счётчик больше конца; при отрицательном — когда меньше. Возможны ноль итераций. Направление шага должно соответствовать границам.

## Необязательные параметры {#defaults}

Обязателен только счётчик. Без начала используется его текущее значение, без конца — начальное значение. Если конец указан, шаг по умолчанию равен 1; иначе он равен 0. Нулевой шаг требует явного выхода, иначе получится бесконечный цикл. У самого `re` нет обычного суффикса условия: оберните цикл в `if`.

## Пропуск и выход {#control}

`!!co;` переходит к завершающему `en`, поэтому увеличение счётчика сохраняется. `!!br;` выходит за `en`. У обеих команд возможны условия. Уровень `1` обозначает текущий цикл; `!!br 2:;` выходит из двух вложенных циклов. Общий предел вложенности `if` и `re` — 16.

## Сумма диапазона {#example}

Функция возвращает сумму чисел от 1 до переданного положительного предела. При пределе меньше 1 цикл не выполняется.
```erm
ZVSE2
!?FU(MyMod_Sum);
!#VA(limit:x) (result:x);
!!VR(result):S0;
!!re (index:y)/1/(limit);
  !!VR(result):+(index);
!!en;
```

## Циклический вызов DO {#do}

`!!DOфункция/начало/конец/шаг:Pаргументы;` вызывает ERM-функцию на каждом шаге. Внутри неё `x16` содержит текущее значение счётчика; для обычных аргументов остаются `x1..x15`. Не считайте `x16` всегда номером итерации от 1: его значение задают начало и шаг. Изменение `x16` влияет на ход цикла. Для нового кода `re` обычно проще, если отдельная функция не нужна.

[Ресивер DO](../receivers/do/) · [Функции](../functions/)

## Поправка конечной границы {#stop-modifier}

С ERA 3.0.4 пятый аргумент `!!re counter/start/stop/step/stop_modifier;` прибавляется к конечной границе. Для индексов 0..count-1: `!!re i/0/(count)/1/-1;`. Границы вычисляются один раз при входе; изменение count внутри тела не пересчитывает предел.

## Связанные команды и таблицы {#reference-links}

[Циклические вызовы (DO)](../receivers/do/#command-p-1-15) · [Вызовы функций (FU)](../receivers/fu/) · [Отладка и совместимость ERM](../compatibility/) · [Циклические вызовы (DO)](../receivers/do/) · [Условия и ветвления](../conditions/)
