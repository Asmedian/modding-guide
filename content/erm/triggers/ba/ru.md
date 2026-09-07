---
{"title":"Начало и завершение боя (BA)","summary":"0/1 — начало/конец на стороне атакующего или локально; 50/51 — на ПК защитника; 52/53 — универсальные события обеих сторон. В начале сначала BA0 или BA50, затем BA52; в конце BA1 или BA51, затем BA53.","translationStatus":"reviewed"}
---

## Триггер BA {#ref-tr-ba}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>BA</strong> (битва)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-ba-red"></span><span class="erm-tone-red">!?BA#;</span>Данный триггер срабатывает в случае битвы:<br>
<span class="erm-tone-red">!?BA0;</span> - в начале битвы<br>
<span class="erm-tone-red">!?BA1;</span> - в конце битвы<br>
<span class="erm-tone-red">!?BA50;</span> - в начале мультиплеерной битвы в роли защитника<br>
<span class="erm-tone-red">!?BA51;</span> - в конце мультиплеерной битвы в роли защитника</strong></div>
<div class="erm-paragraph"><strong>Сетевой сервис:</strong> <a href="../bg/#ref-tr-bg">!?BG</a> и <a href="../bf/#ref-tr-bf">!?BF</a> срабатывают на обеих сторонах и, если переменные одинаковы, эффекты на 
обеих сторонах тоже идентичны. Только действия игрока не синхронизируются, и BA0/BA50 и триггеры BA1/BA51 делают различия.</div>
<div class="erm-paragraph">Новые триггеры <strong>BA</strong>:<br>
<strong><span class="erm-tone-red">!?BA52;</span> - вызывается в начале битвы на обеих сторонах<br>
<span class="erm-tone-red">!?BA53;</span> - вызывается в конце битвы на обеих сторонах</strong><br>
Мы получаем такое начало битвы:<br>
  1. Если атакующий за этим ПК (или не-МП игра), вызывается <strong>BA0</strong><br>
  2. Если за этим ПК защитник, вызывается <strong>BA50</strong><br>
  3. Вызывается<strong> BA52</strong>.<br>
Конец битвы:<br>
  1. Если атакующий за этим ПК (или не-МП игра), вызывается <strong>BA1</strong><br>
  2. Если за этим ПК защитник, вызывается <strong>BA51</strong><br>
  3. Вызывается <strong>BA53</strong>.</div>
<div class="erm-paragraph">Это значит, что если вы хотите иметь одинаковый код для <strong>BA0</strong> и <strong>BA50</strong>, вам просто нужно сделать секцию с триггером <strong>BA52</strong>.</div>
<div class="erm-paragraph"><strong><u>ВАЖНО!</u></strong> Если вы хотите протестировать скрипт в МП-игре, вы не сможете сделать этого в первый ход (день 1).<br>
Вы должны пропустить один день для получения одинаковых параметров всеми игроками.</div>
<div class="erm-paragraph">Для установок битвы используйте ресивер <a href="../../receivers/ba/#ref-rec-ba">!!BA</a>.</div>
</div>
</section>
:::

## Когда срабатывает {#event}

0/1 — начало/конец на стороне атакующего или локально; 50/51 — на ПК защитника; 52/53 — универсальные события обеих сторон. В начале сначала BA0 или BA50, затем BA52; в конце BA1 или BA51, затем BA53.

## Объявление {#syntax}

```erm
!?BA0; / !?BA1; / !?BA50; / !?BA51; / !?BA52; / !?BA53;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `BA0` | `OnBeforeBattle` | 30300 |
| `BA1` | `OnAfterBattle` | 30301 |
| `BA50` | `OnBeforeBattleForThisPcDefender` | 30350 |
| `BA51` | `OnAfterBattleForThisPcDefender` | 30351 |
| `BA52` | `OnBeforeBattleUniversal` | 30352 |
| `BA53` | `OnAfterBattleUniversal` | 30353 |

## Ограничения и порядок {#limits}

BA срабатывает и для теоретического боя ИИ. Боевые стеки в начале BA ещё не готовы; сначала проверьте BA:A и нужную фазу боя.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Действие в бою (BG)](../bg/) · [Подготовка поля боя (BF)](../bf/) · [Параметры сражения (BA)](../../receivers/ba/)
