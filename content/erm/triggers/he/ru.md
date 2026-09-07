---
{"title":"Посещение героя (HE)","summary":"Реагирует на посещение/атаку выбранного героя. Селектор — ID героя.","translationStatus":"reviewed"}
---

## Триггер HE {#ref-tr-he}

:::erm
<section class="erm-reference" lang="ru">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>HE</strong> (посещение героя)</span></div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-tr-he-red"></span><span class="erm-tone-red"><strong>!?HE#;</strong></span><strong> - срабатывает при посещении (атаке или 
визите) определённого героя номер #</strong> (<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">0..155</a>)<br>
Для изменения параметров героя используйте ресивер <a href="../../receivers/he/#ref-rec-he">!!HE</a>.</div>
</div>
</section>
:::

## Когда срабатывает {#event}

Реагирует на посещение/атаку выбранного героя. Селектор — ID героя.

## Объявление {#syntax}

```erm
!?HE#;
```

## Ограничения и порядок {#limits}

Для подробного контроля взаимодействия используйте OnBeforeHeroInteraction и OnAfterHeroInteraction; OB не охватывает героев.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Таблица героев](../../tables/heroes/) · [Герои (HE)](../../receivers/he/)
