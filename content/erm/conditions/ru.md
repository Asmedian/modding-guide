---
{"title":"Условия и ветвления","summary":"Проверки переменных и флагов, AND/OR и блоки if/el/en.","translationStatus":"reviewed"}
---

## IF ELSE END {#ref-rec-iee}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title">Конструкция IF-ELSE-ENDIF</span></strong><a href="../compatibility/#ref-cont-te" title="Работает только с HoMM3:TE или позднее.."><img src="../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
<span>(если – иначе – конец_если)</span></div>
<div class="erm-paragraph"><br><strong>Конструкция <span class="erm-anchor" id="ref-rec-iee-red"></span><code class="erm-tone-red">IF-ELSE-ENDIF</code> используется для установки условий без использования новых функций или тонн триггеров.</strong></div>

<hr>
<div class="erm-paragraph">
Чтобы начать <u>секцию IF</u>, используйте следующий ресивер/инструкцию:
<pre class="erm-example"><code class="language-erm">!!if&amp;условие:;</code></pre>
Заметьте, что 'if' написано в нижнем регистре.<br>
Условия - стандартные И и ИЛИ, которые вы можете и сейчас использовать в любом ресивере. 
Если при выполнении скрипта значение условия ИСТИНА, выполянется дальнейшая часть. 
Если оно ЛОЖЬ, дальнейшая часть пропускается до нахождения начала секции ELSE или ENDIF.</div>

<div class="erm-paragraph">Чтобы начать <u>секцию ELSE</u>, используйте следующий ресивер/инструкцию:
<pre class="erm-example"><code class="language-erm">!!el:;   'el' в нижнем регистре.</code></pre>
Для данного ресивера не нужны условия.
Секция ELSE всегда ожидает IF и "привязывается" к последнему найденному в скрипте IF.<br>
</div><span class="erm-anchor" id="ref-rec-iee-2"></span><details class="erm-comment"><summary><strong>Расширение синтаксиса</strong><a href="../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(<span class="erm-anchor" id="ref-rec-iee-show2"></span><u class="erm-toggle-label">показать</u>)</summary><div class="erm-comment-body">
Добавлен синтаксис ELSEIF для ресивера !!el.<br>
Если секции ELSE имеет условие и оно не выполняется (значение ЛОЖЬ), код продолжает выполняться до следующей секции ELSEIF с условием или пока не встретится секция ENDIF.
<pre class="erm-example"><code class="language-erm">!!if&amp;v1&gt;=0:;
; команды, если v1&gt;=0
!!el&amp;v2&lt;42:;
; команды, если v1&lt;0 и v2&lt;42
!!el&amp;v3&lt;100/v3&gt;=0:;
; команды, если v1&lt;0, v2&gt;=42 и v3 входит в [0;100)
!!el:;
; команды, если v1&lt;0, v2&gt;=42 и v3 не входит в [0;100)
!!en:;</code></pre></div></details>


<div class="erm-paragraph">Для <u>завершения IF</u> или IF-ELSE секции используется следующий ресивер/инструкция:
<pre class="erm-example"><code class="language-erm">!!en:;   'en' в нижнем регистре.</code></pre>
Для данного ресивера не нужны условия.<br>
Секция ENDIF всегда ожидает часть IF или IF-ELSE, и "привязывается" к последнему найденному в скрипте IF или IF-ELSE.</div>

<div class="erm-paragraph">Вы можете включать секции IF-ELSE-ENDIF друг в друга, но не глубже 10 уровней (и не глубже 16 - для <a href="../compatibility/#ref-era-index">ERA</a>).<br>
Каждый триггер (и функция) имеет свои IF-ELSE-ENDIF, таким образом можно превысить лимит 10 включений вызовом функций.<br>
Когда вы вызываете функцию в какой-либо секции IF-ELSE-ENDIF, она (секция) остается активной, 
и сохраняет свои собственные <em>y</em>-переменные (как и у функций).</div>
<div class="erm-paragraph">
<strong></strong></div><span class="erm-anchor" id="ref-rec-iee-1"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-iee-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE
!?HM-1;
!!VRv10:S5;
!!if&amp;v10=5:;
  !!IF:M^Первый IF^;
  !!VRv10:S10;
  !!if&amp;v10&lt;&gt;10:;
    !!IF:M^Второй IF^;
  !!el:;
    !!IF:M^Второй ELSE^;
  !!en:;
  !!IF:M^Второй IF закончился^;
!!el:;
  !!IF:M^Первое ELSE^;
  !!VRv10:S99;
  !!if&amp;v10=99:;
    !!IF:M^Третье IF^;
  !!el:;
    !!IF:M^Третье ELSE^;
  !!en:;
  !!IF:M^Третий IF закончился^;
!!en:;
!!IF:M^Первый IF закончился^;</code></pre>

Вы должны увидеть следующие сообщения:
<pre class="erm-example"><code class="language-erm">Первый IF
Второй ELSE
Второй IF закончился
Первый IF закончился</code></pre></div></details>


</div>
</section>
:::

## Сравнения {#comparison}

Условие ставится после селектора и перед `:` у команды или перед `;` у триггера. Поддерживаются `=`, `<>`, `<`, `>`, `<=`, `>=`. Например, `!!IF&v1>0:M^positive^;` выполняется только при положительном `v1`. Условие проверяется в момент выполнения соответствующей команды.

## Несколько проверок {#and-or}

`&` объединяет проверки через И, вертикальная черта — через ИЛИ; отдельные проверки разделяются `/`. Условие `&v1>=0/v1<8` требует выполнения обеих проверок. Не переносите приоритет операторов из C или JavaScript: для сложной логики используйте вложенные блоки.

## Флаги {#flags}

Условие `&1000` проверяет истинность флага 1000, а `&-1000` — ложность. Это не сравнение с числом 1000. Системные флаги могут меняться при событиях; например, значение флага 1000 зависит от контекста текущего игрока. Свой флаг можно устанавливать через `!!IF:Vномер/значение;`, но сначала проверьте, не занят ли он другим скриптом.

## Блоки if, el, en {#blocks}

Строчные команды `!!if`, `!!el` и `!!en` создают ветвление. `el` с условием играет роль else-if. Все ветви завершаются одним `en` соответствующего `if`. ERA допускает суммарно 16 вложенных блоков `if`/`re`; вызванная функция имеет собственную структуру блоков.
```erm
ZVSE2
!?FU(MyMod_Classify);
!#VA(value:x) (result:x);
!!if&(value)<0;
  !!VR(result):S-1;
!!el&(value)>0;
  !!VR(result):S1;
!!el;
  !!VR(result):S0;
!!en;
```

## Досрочный выход {#exit}

`!!FU&условие:E;` завершает текущую функцию или обработчик при выполнении условия. Это удобно для проверки предусловий. Выход из обработчика не означает отмену стандартного действия игры: для отмены нужна поддержка конкретного события.

[Функции](../functions/) · [Циклы](../loops/)

## Связанные команды и таблицы {#reference-links}

[Переменные, строки и массивы](../variables/) · [Флаги, сообщения и выбор (IF)](../receivers/if/#command-a0100010000-s0100010000-r0100010000-v) · [Флаги, сообщения и выбор (IF)](../receivers/if/) · [Начало и завершение боя (BA)](../triggers/ba/) · [Действие в бою (BG)](../triggers/bg/) · [Подготовка поля боя (BF)](../triggers/bf/) · [Глобальные события (GE)](../receivers/ge/) · [Отладка и совместимость ERM](../compatibility/) · [Средства ERA, память и звук (SN)](../receivers/sn/#command-xvalues) · [Переменные и выражения (VR)](../receivers/vr/) · [Флаги, сообщения и выбор (IF)](../receivers/if/#command-w-x) · [Подсказки типов объектов (HT)](../receivers/ht/#command-w-1-2-3) · [Вызовы функций (FU)](../receivers/fu/) · [Циклические вызовы (DO)](../receivers/do/) · [Получение уровня героем (HL)](../triggers/hl/) · [Макросы классического ERM (MC)](../receivers/mc/) · [Триггеры и события ERM](../triggers/) · [Синтаксис ERM: ZVSE и ZVSE2](../syntax/) · [Триггеры и события ERM](../triggers/#use) · [Посещение объекта (OB)](../triggers/ob/) · [Посещение героя (HE)](../triggers/he/) · [Вызовы функций (FU)](../receivers/fu/#command-a) · [Вызовы функций (FU)](../receivers/fu/#command-c) · [Вызовы функций (FU)](../receivers/fu/#command-d-1-16) · [Вызовы функций (FU)](../receivers/fu/#command-e) · [Вызовы функций (FU)](../receivers/fu/#command-p-1-16) · [Вызовы функций (FU)](../receivers/fu/#command-s) · [Обработчик функции (FU)](../triggers/fu/) · [Сетевая синхронизация (IP)](../receivers/ip/#command-f-1-2-v-1-2) · [Сетевая синхронизация (IP)](../receivers/ip/) · [Циклы: re, br, co и DO](../loops/)
