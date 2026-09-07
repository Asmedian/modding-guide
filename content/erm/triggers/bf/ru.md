---
{"title":"Подготовка поля боя (BF)","summary":"Момент настройки поля перед боем. Ресивер BF позволяет расставить препятствия.","translationStatus":"reviewed"}
---

## Триггер BF {#ref-tr-bf}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>BF</strong> (поле боя)</span></div>

<div class="erm-paragraph"><span><strong><span class="erm-anchor" id="ref-tr-bf-red"></span><span class="erm-tone-red">!?BF;</span>- вызывается во время 
подготовки поля боя, прямо перед самой битвой.<br></strong>
Может быть использовано с ресивером <a href="../../receivers/bf/#ref-rec-bf">!!BF</a></span><span> для установки настроенного поля боя.<br>
Не срабатывает в отсутствии в бою игроков-людей.</span></div>

</div>
</section>
:::

## Когда срабатывает {#event}

Момент настройки поля перед боем. Ресивер BF позволяет расставить препятствия.

## Объявление {#syntax}

```erm
!?BF;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `BF` | `OnSetupBattlefield` | 30800 |

## Ограничения и порядок {#limits}

В классическом Help событие не вызывается для боя без человека. Не вызывайте здесь перерисовку BU:R.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Подготовка поля боя (BF)](../../receivers/bf/)
