---
{"title":"Поля боевого отряда","summary":"Смещения HEX относительно указателя на структуру из старого снимка WoG. Это описание формата, не универсальные адреса для UN:C. Поля с неясным назначением не трактуются как API. Проверяйте размер и расположение структуры в своей сборке.","translationStatus":"reviewed"}
---

## Cтруктура боевого стека {#ref-form-combatmon}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div>
<div class="erm-align-left erm-paragraph">
<span class="erm-source-title">Cтруктура боевого стека</span></div>
<div class="erm-paragraph">   <span class="erm-anchor" id="ref-form-combatmon-wt"></span><code class="erm-legacy-label">HEX-конвертер:</code> <span class="erm-anchor" id="ref-form-combatmon-inputhex"></span><input class="erm-radix-input" data-erm-radix="16" type="text" value="" inputmode="text" aria-label="Введите hex-значение нужного вам смещения.." title="Введите hex-значение нужного вам смещения..">
<span class="erm-anchor" id="ref-form-combatmon-inputdec"></span><output class="erm-radix-result" aria-label="10-тичное значение указанного вами смещения" title="10-тичное значение указанного вами смещения"></output></div>
<span class="erm-anchor" id="ref-form-combatmon-q1"></span><div class="erm-tone-quote erm-note">Все смещения указаны в hex-нотации.</div></div>

<div>
<pre>
	<span class="erm-anchor" id="ref-form-combatmon-n2"></span><strong class="erm-tone-purple erm-strong">Смещение		Описание</strong>
   // <span class="erm-anchor" id="ref-form-combatmon-dred"></span><strong class="erm-tone-red">+00</strong> db (1) когда атаковал уже (?)
   // <strong class="erm-tone-red">+01</strong> db
   // <strong class="erm-tone-red">+02</strong> db (0x0C) <em class="erm-tone-purple erm-legacy-event">44188C</em>
   // <strong class="erm-tone-red">+03</strong> db
   // <strong class="erm-tone-red">+08</strong> dd = полное число стеков у игрока
   // <strong class="erm-tone-red">+08</strong> db = Видимость существа (4 - виден, 8 - не виден)
   // <strong class="erm-tone-red">+10</strong> dd = -1 после атаки и/или ответа (???)
   // <strong class="erm-tone-red">+1C</strong> dd = <a href="../battlefield/#ref-form-bf" data-context="true">позиция</a> на поле боя (куда бежать/стрелять)
   // <strong class="erm-tone-red">+20</strong> db = встроенная способность повреждать Огненным щитом
   // <strong class="erm-tone-red">+24</strong> dd = номер стека клона родительского
   // <strong class="erm-tone-red">+28</strong> dd = -1 (номер стека клона дочернего)
   // <strong class="erm-tone-red">+2C</strong> dd = число раундов до исчезновения клона
   // <strong class="erm-tone-red">+30</strong> dd ? Есть ли цифры кол-ва существ? (0 - есть, 1 - нет)
   // <strong class="erm-tone-red">+30</strong> db - <em class="erm-tone-purple erm-legacy-event">43E33C</em>
   // <strong class="erm-tone-red">+34</strong> dd = <a href="../creatures/#ref-form-creature" data-context="true">тип монстра</a>
   // <strong class="erm-tone-red">+38</strong> dd = позиция монстра на поле боя (куда атакует)
   // <strong class="erm-tone-red">+3C</strong> dd = номер анимации
   // <strong class="erm-tone-red">+40</strong> dd = номер кадра анимации (<em class="erm-tone-purple erm-legacy-event">43E236</em>)
   // <strong class="erm-tone-red">+44</strong> dd = ориентация стэка (0 = как атакующий, 1 = как защитник)
   // <strong class="erm-tone-red">+4C</strong> dd ? число монстров
   // <strong class="erm-tone-red">+50</strong> dd ? число монстров до удара по ним в тек. атаку
   // <strong class="erm-tone-red">+54</strong> dd ? безвозвратные потери кол-ва монстров
   // <strong class="erm-tone-red">+58</strong> dd ? потери здоровья последнего монстра
   // <strong class="erm-tone-red">+5C</strong> dd ? номер слота героя (0..6), -1 → будет удалён после битвы
   // <strong class="erm-tone-red">+60</strong> dd ? численность в начале битвы
   // <strong class="erm-tone-red">+64</strong> dd ? базовая скорость с бонусами земли, спецов и т.д. (<a href="../../receivers/bm/#ref-rec-bm-u6">BM:U6</a>)
   // <strong class="erm-tone-red">+6C</strong> dd ? полное здоровье (исп. как база для лечения)
   // <strong class="erm-tone-red">+70</strong> dd <em class="erm-tone-purple erm-legacy-event">44150F</em> <em class="erm-tone-purple erm-legacy-event">441744</em> (выпала Удача)
   // загруженная копия H3CreatureInfo
   // <strong class="erm-tone-red">+74</strong> dd фракция монстра (-1 для продвинутых элементалей)
   // <strong class="erm-tone-red">+78</strong> dd = уровень существа (0..6)
   // <strong class="erm-tone-red">+7C</strong> dd ? озвучка
   // <strong class="erm-tone-red">+80</strong> dd ? боевой def
   // <strong class="erm-tone-red">+84</strong> dd = <span class="erm-anchor" id="ref-form-combatmon-1"></span><details class="erm-comment"><summary>флаги монстра</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-form-combatmon-t0"></span><blockquote class="erm-margin-top-zero erm-note">
// 00000001 - 0x00 занимает 2 клетки
// 00000002 - 0x01 летает
// 00000004 - 0x02 стреляет
// 00000008 - 0x03 расширенный радиус атаки (на две клетки)
// 00000010 - 0x04 живое существо (можно восстанавливаться вампиру)
// 00000020 - 0x05 КАТАПУЛЬТА - может разрушать стены
// 00000040 - 0x06 ОСАДНОЕ ОРУДИЕ - не двигается (5508CB)
// 00000080 - 0x07 КОРОЛЬ_1
// 00000100 - 0x08 КОРОЛЬ_2
// 00000200 - 0x09 КОРОЛЬ_3
// 00000400 - 0x0A ??? 00020000 + 40, 41, 83 - не чуствителен к псих. атаке
// 00000800 - 0x0B стрельба лучом (как существа 35, 74, 75)
// 00001000 - 0x0C в ближнем бою бьёт как в дальнем
// 00002000 - 0x0D НЕ ИСПОЛЬЗУЕТСЯ
// 00004000 - 0x0E ??? ИММУНИТЕТ К ЗАКЛАМ ОГНЯ
// 00008000 - 0x0F стреляет дважды
// 00010000 - 0x10 атака без ответа
// 00020000 - 0x11 ... не подвержен низкой морали (?)
// Существа 32,33,56-69,112-117,120,121,123,125,127,129,141,145-149
// 00040000 - 0x12 нечисть
// 00080000 - 0x13 бьёт всех врагов рядом
// 00100000 - 0x14 расширенный радиус стреляющих юнитов
// 00200000 - 0x15 стек убит? <em class="erm-tone-purple erm-legacy-event">41E617</em> чародей, огнен.птица - может еще кастовать?
// 00400000 - 0x16 <em class="erm-tone-purple erm-legacy-event">421BDC</em>, <em class="erm-tone-purple erm-legacy-event">421FC4</em> (что-то с вызовом)
// 00800000 - 0x17 КЛОН - умирает сразу
// 01000000 - 0x18 гарпии-ведьмы
// 02000000 - 0x19 остался (уже) ждать СБРОСИТЬ - МОЖЕТ ЖДАТЬ СНОВА
// 04000000 - 0x1A уст. после атаки СБРОСИТЬ - ВНОВЬ МОЖЕТ АТАКОВАТЬ
// 08000000 - 0x1B - выбрал защиту
// 10000000 - 0x1C - не может быть воскрешён ???
// 20000000 - 0x1D + <em class="erm-tone-purple erm-legacy-event">43DFAF</em>
// 40000000 - 0x1E + <em class="erm-tone-purple erm-legacy-event">43E06F</em>
// 80000000 - 0x1F ДРАКОН</blockquote></div></details>
   // <strong class="erm-tone-red">+88</strong> dd = имя монстра
   // <strong class="erm-tone-red">+8C</strong> dd = имя во мн.ч.
   // <strong class="erm-tone-red">+90</strong> dd = описание монстра (например "Нет штрафа в рукопашной")
   // <strong class="erm-tone-red">+B0</strong> dd = FightValue
   // <strong class="erm-tone-red">+B4</strong> dd = AIValue
   // <strong class="erm-tone-red">+B8</strong> dd = прирост
   // <strong class="erm-tone-red">+BC</strong> dd = прирост от орд
   // <strong class="erm-tone-red">+C0</strong> dd = здоровье монстра
   // <strong class="erm-tone-red">+C4</strong> dd = скорость монстра
   // <strong class="erm-tone-red">+C8</strong> dd = атака с бонусами
   // <strong class="erm-tone-red">+CC</strong> dd = защита с бонусами
   // <strong class="erm-tone-red">+D0</strong> dd = мин. урон
   // <strong class="erm-tone-red">+D4</strong> dd = макс. урон
   // <strong class="erm-tone-red">+D8</strong> dd = боезапас
   // <strong class="erm-tone-red">+DC</strong> dd = кол-во заклинаний (0 = нет) ДЛЯ ВОСКРЕШЕНИЯ УВЕЛИЧИТЬ
   // Флаги состояния стека dd ?
   // <strong class="erm-tone-red">+E8</strong> db = 1, нужно ударить Огненным щитом (у Ифритов он не отображается)
   // <strong class="erm-tone-red">+E9</strong> db = 1, если умирал хоть кто-то в отряде
   // <strong class="erm-tone-red">+EA</strong> db = 1, если был убит весь стек
   // <strong class="erm-tone-red">+EC</strong> dd = номер заклинания существа в тек. раунде (0x50 Кислотное дыхание)
   // <strong class="erm-tone-red">+F0</strong> db = 1 перед атакой на него <em class="erm-tone-purple erm-legacy-event">441434</em>, <em class="erm-tone-purple erm-legacy-event">44016F</em>
   // <strong class="erm-tone-red">+F4</strong> dd = сторона (<a href="../../receivers/bm/#ref-rec-bm-i">BM:I</a>)
   // <strong class="erm-tone-red">+F8</strong> dd = номер стека у стороны на поле боя
   // <strong class="erm-tone-red">+FC</strong> dd = ? (last_animation_time)
   // <strong class="erm-tone-red">+100</strong> dd - Смещение существа по Y <em class="erm-tone-purple erm-legacy-event">43DEA4</em>
   // <strong class="erm-tone-red">+104</strong> dd - Смещение существа по X <em class="erm-tone-purple erm-legacy-event">43DEAD</em>
   // От того места где должен быть, в пикселях
   // <strong class="erm-tone-red">+110</strong> dd ? Частота проигрывания случайной анимации
   // <strong class="erm-tone-red">+158</strong> dd ? что-то с анимацией
   // <strong class="erm-tone-red">+164</strong> dd - Загруженный def монстра → <em class="erm-legacy-file">ctroll.def</em> (тролль)
   // <strong class="erm-tone-red">+168</strong> dd - загруж. def снаряда (иниц. в <em class="erm-tone-purple erm-legacy-event">43DA8E</em>)
   // <strong class="erm-tone-red">+170</strong> dd - Звук перемещения (загруженный wav?)
   // <strong class="erm-tone-red">+174</strong> dd - Звук атаки
   // <strong class="erm-tone-red">+178</strong> dd - Звук урона
   // <strong class="erm-tone-red">+17C</strong> dd - Звук выстрела
   // <strong class="erm-tone-red">+180</strong> dd - Звук смерти
   // <strong class="erm-tone-red">+184</strong> dd - Звук защиты
   // <strong class="erm-tone-red">+188</strong> dd - extraSound1
   // <strong class="erm-tone-red">+18C</strong> dd - extraSound2
   // <strong class="erm-tone-red">+194</strong> dd = кол-во уже наложенных заклинаний (для отображения цвета кол-ва существ)
   // <strong class="erm-tone-red">+198</strong> dd*? <span class="erm-anchor" id="ref-form-combatmon-2"></span><details class="erm-comment"><summary>есть заклинание (длительность) или нет, по номерам</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
// <strong class="erm-tone-red">+198</strong> dd = Вызвать корабль
// <strong class="erm-tone-red">+19C</strong> dd = Затопить корабль
// <strong class="erm-tone-red">+1A0</strong> dd = Видения
// <strong class="erm-tone-red">+1A4</strong> dd = Просмотр земли
// <strong class="erm-tone-red">+1A8</strong> dd = Маскировка
// <strong class="erm-tone-red">+1AC</strong> dd = Просмотр воздуха
// <strong class="erm-tone-red">+1B0</strong> dd = Полёт
// <strong class="erm-tone-red">+1B4</strong> dd = Хождение по воде
// <strong class="erm-tone-red">+1B8</strong> dd = Дверь измерений
// <strong class="erm-tone-red">+1BC</strong> dd = Городской портал

// <strong class="erm-tone-red">+1C0</strong> dd = Зыбучие пески
// <strong class="erm-tone-red">+1C4</strong> dd = Минное поле
// <strong class="erm-tone-red">+1C8</strong> dd = Силовое поле
// <strong class="erm-tone-red">+1CC</strong> dd = Стена огня
// <strong class="erm-tone-red">+1D0</strong> dd = Землетрясение
// <strong class="erm-tone-red">+1D4</strong> dd = Волшебная стрела
// <strong class="erm-tone-red">+1D8</strong> dd = Ледяная молния
// <strong class="erm-tone-red">+1DC</strong> dd = Удар молнии
// <strong class="erm-tone-red">+1E0</strong> dd = Взрыв
// <strong class="erm-tone-red">+1E4</strong> dd = Цепная молния
// <strong class="erm-tone-red">+1E8</strong> dd = Кольцо холода
// <strong class="erm-tone-red">+1EC</strong> dd = Огненный шар
// <strong class="erm-tone-red">+1F0</strong> dd = Инферно
// <strong class="erm-tone-red">+1F4</strong> dd = Метеоритный дождь
// <strong class="erm-tone-red">+1F8</strong> dd = Волна смерти
// <strong class="erm-tone-red">+1FC</strong> dd = Уничтожить нежить
// <strong class="erm-tone-red">+200</strong> dd = Армагеддон
// <strong class="erm-tone-red">+204</strong> dd = Щит
// <strong class="erm-tone-red">+208</strong> dd = Воздушный щит
// <strong class="erm-tone-red">+20C</strong> dd = Огненный щит
// <strong class="erm-tone-red">+210</strong> dd = Защита от воздуха
// <strong class="erm-tone-red">+214</strong> dd = Защита от огня
// <strong class="erm-tone-red">+218</strong> dd = Защита от воды
// <strong class="erm-tone-red">+21C</strong> dd = Защита от земли
// <strong class="erm-tone-red">+220</strong> dd = Антимагия
// <strong class="erm-tone-red">+224</strong> dd = Снятие заклинания
// <strong class="erm-tone-red">+228</strong> dd = Волшебное зеркало
// <strong class="erm-tone-red">+22C</strong> dd = Лечение
// <strong class="erm-tone-red">+230</strong> dd = Воскрешение
// <strong class="erm-tone-red">+234</strong> dd = Оживление мертвецов
// <strong class="erm-tone-red">+238</strong> dd = Жертва
// <strong class="erm-tone-red">+23C</strong> dd = Благословение
// <strong class="erm-tone-red">+240</strong> dd = Проклятье
// <strong class="erm-tone-red">+244</strong> dd = Жажда крови
// <strong class="erm-tone-red">+248</strong> dd = Точность
// <strong class="erm-tone-red">+24C</strong> dd = Слабость
// <strong class="erm-tone-red">+250</strong> dd = Каменная кожа
// <strong class="erm-tone-red">+254</strong> dd = Разрушающий луч
// <strong class="erm-tone-red">+258</strong> dd = Молитва
// <strong class="erm-tone-red">+25C</strong> dd = Радость
// <strong class="erm-tone-red">+260</strong> dd = Печаль
// <strong class="erm-tone-red">+264</strong> dd = Удача
// <strong class="erm-tone-red">+268</strong> dd = Неудача
// <strong class="erm-tone-red">+26C</strong> dd = Ускорение
// <strong class="erm-tone-red">+270</strong> dd = Замедление
// <strong class="erm-tone-red">+274</strong> dd = Палач
// <strong class="erm-tone-red">+278</strong> dd = Бешенство
// <strong class="erm-tone-red">+27C</strong> dd = Гром титанов
// <strong class="erm-tone-red">+280</strong> dd = Контрудар
// <strong class="erm-tone-red">+284</strong> dd = Берсерк
// <strong class="erm-tone-red">+288</strong> dd = Гипноз
// <strong class="erm-tone-red">+28C</strong> dd = Забывчивость
// <strong class="erm-tone-red">+290</strong> dd = Слепота
// <strong class="erm-tone-red">+294</strong> dd = Телепорт
// <strong class="erm-tone-red">+298</strong> dd = Убрать препятствие
// <strong class="erm-tone-red">+29C</strong> dd = Клон
// <strong class="erm-tone-red">+2A0</strong> dd = Вызов элемента огня
// <strong class="erm-tone-red">+2A4</strong> dd = Вызов элемента земли 
// <strong class="erm-tone-red">+2A8</strong> dd = Вызов элемента воды
// <strong class="erm-tone-red">+2AC</strong> dd = Вызов элемента воздуха

// <strong class="erm-tone-red">+2B0</strong> dd = Окаменение <em class="erm-tone-purple erm-legacy-event">443D3A</em> <em class="erm-tone-purple erm-legacy-event">43E0EB</em> <em class="erm-tone-purple erm-legacy-event">441B0D</em> (1 = не отв. на атаку)
// <strong class="erm-tone-red">+2B4</strong> dd = Яд
// <strong class="erm-tone-red">+2B8</strong> dd = Корни
// <strong class="erm-tone-red">+2BC</strong> dd = Болезнь
// <strong class="erm-tone-red">+2C0</strong> dd = Паралич
// <strong class="erm-tone-red">+2C4</strong> dd = Старость
// <strong class="erm-tone-red">+2C8</strong> dd = Облако Смерти
// <strong class="erm-tone-red">+2CC</strong> dd = Удар Молнии
// <strong class="erm-tone-red">+2D0</strong> dd = Снять полезные заклинания
// <strong class="erm-tone-red">+2D4</strong> dd = Смертельный взгляд
// <strong class="erm-tone-red">+2D8</strong> dd = Кислотное дыхание</blockquote></div></details>
   // <strong class="erm-tone-red">+2DC</strong> dd*? <span class="erm-anchor" id="ref-form-combatmon-3"></span><details class="erm-comment"><summary>сила действия заклинания</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
// <strong class="erm-tone-red">+2DC</strong> dd = Вызвать корабль
// <strong class="erm-tone-red">+2E0</strong> dd = Затопить корабль
// <strong class="erm-tone-red">+2E4</strong> dd = Видения
// <strong class="erm-tone-red">+2E8</strong> dd = Просмотр земли
// <strong class="erm-tone-red">+2EC</strong> dd = Маскировка
// <strong class="erm-tone-red">+2F0</strong> dd = Просмотр воздуха
// <strong class="erm-tone-red">+2F4</strong> dd = Полёт
// <strong class="erm-tone-red">+2F8</strong> dd = Хождение по воде
// <strong class="erm-tone-red">+2FC</strong> dd = Дверь измерений
// <strong class="erm-tone-red">+300</strong> dd = Городской портал

// <strong class="erm-tone-red">+304</strong> dd = Зыбучие пески
// <strong class="erm-tone-red">+308</strong> dd = Минное поле
// <strong class="erm-tone-red">+30C</strong> dd = Силовое поле
// <strong class="erm-tone-red">+310</strong> dd = Стена огня
// <strong class="erm-tone-red">+314</strong> dd = Землетрясение
// <strong class="erm-tone-red">+318</strong> dd = Волшебная стрела
// <strong class="erm-tone-red">+31C</strong> dd = Ледяная молния
// <strong class="erm-tone-red">+320</strong> dd = Удар молнии
// <strong class="erm-tone-red">+324</strong> dd = Взрыв
// <strong class="erm-tone-red">+328</strong> dd = Цепная молния
// <strong class="erm-tone-red">+32C</strong> dd = Кольцо холода
// <strong class="erm-tone-red">+330</strong> dd = Огненный шар
// <strong class="erm-tone-red">+334</strong> dd = Инферно
// <strong class="erm-tone-red">+338</strong> dd = Метеоритный дождь
// <strong class="erm-tone-red">+33C</strong> dd = Волна смерти
// <strong class="erm-tone-red">+340</strong> dd = Уничтожить нежить
// <strong class="erm-tone-red">+344</strong> dd = Армагеддон
// <strong class="erm-tone-red">+348</strong> dd = Щит
// <strong class="erm-tone-red">+34C</strong> dd = Воздушный щит
// <strong class="erm-tone-red">+350</strong> dd = Огненный щит
// <strong class="erm-tone-red">+354</strong> dd = Защита от воздуха
// <strong class="erm-tone-red">+358</strong> dd = Защита от огня
// <strong class="erm-tone-red">+35C</strong> dd = Защита от воды
// <strong class="erm-tone-red">+360</strong> dd = Защита от земли
// <strong class="erm-tone-red">+364</strong> dd = Антимагия
// <strong class="erm-tone-red">+368</strong> dd = Снятие заклинания
// <strong class="erm-tone-red">+36C</strong> dd = Волшебное зеркало
// <strong class="erm-tone-red">+370</strong> dd = Лечение
// <strong class="erm-tone-red">+374</strong> dd = Воскрешение
// <strong class="erm-tone-red">+378</strong> dd = Оживление мертвецов
// <strong class="erm-tone-red">+37C</strong> dd = Жертва
// <strong class="erm-tone-red">+380</strong> dd = Благословение
// <strong class="erm-tone-red">+384</strong> dd = Проклятье
// <strong class="erm-tone-red">+388</strong> dd = Жажда крови
// <strong class="erm-tone-red">+38C</strong> dd = Точность
// <strong class="erm-tone-red">+390</strong> dd = Слабость
// <strong class="erm-tone-red">+394</strong> dd = Каменная кожа
// <strong class="erm-tone-red">+398</strong> dd = Разрушающий луч
// <strong class="erm-tone-red">+39C</strong> dd = Молитва
// <strong class="erm-tone-red">+3A0</strong> dd = Радость
// <strong class="erm-tone-red">+3A4</strong> dd = Печаль
// <strong class="erm-tone-red">+3A8</strong> dd = Удача
// <strong class="erm-tone-red">+3AC</strong> dd = Неудача
// <strong class="erm-tone-red">+3B0</strong> dd = Ускорение
// <strong class="erm-tone-red">+3B4</strong> dd = Замедление
// <strong class="erm-tone-red">+3B8</strong> dd = Палач
// <strong class="erm-tone-red">+3BC</strong> dd = Бешенство
// <strong class="erm-tone-red">+3C0</strong> dd = Гром титанов
// <strong class="erm-tone-red">+3C4</strong> dd = Контрудар
// <strong class="erm-tone-red">+3C8</strong> dd = Берсерк
// <strong class="erm-tone-red">+3CC</strong> dd = Гипноз
// <strong class="erm-tone-red">+3D0</strong> dd = Забывчивость
// <strong class="erm-tone-red">+3D4</strong> dd = Слепота
// <strong class="erm-tone-red">+3D8</strong> dd = Телепорт
// <strong class="erm-tone-red">+3DC</strong> dd = Убрать препятствие
// <strong class="erm-tone-red">+3E0</strong> dd = Клон
// <strong class="erm-tone-red">+3E4</strong> dd = Вызов элемента огня
// <strong class="erm-tone-red">+3E8</strong> dd = Вызов элемента земли 
// <strong class="erm-tone-red">+3EC</strong> dd = Вызов элемента воды
// <strong class="erm-tone-red">+3F0</strong> dd = Вызов элемента воздуха

// <strong class="erm-tone-red">+3F4</strong> dd = Окаменение <em class="erm-tone-purple erm-legacy-event">443D3A</em> <em class="erm-tone-purple erm-legacy-event">43E0EB</em> <em class="erm-tone-purple erm-legacy-event">441B0D</em> (1 = не отв. на атаку)
// <strong class="erm-tone-red">+3F8</strong> dd = Яд
// <strong class="erm-tone-red">+3FC</strong> dd = Корни
// <strong class="erm-tone-red">+400</strong> dd = Болезнь
// <strong class="erm-tone-red">+404</strong> dd = Паралич
// <strong class="erm-tone-red">+408</strong> dd = Старость
// <strong class="erm-tone-red">+40C</strong> dd = Облако Смерти
// <strong class="erm-tone-red">+410</strong> dd = Удар Молнии
// <strong class="erm-tone-red">+414</strong> dd = Снять полезные заклинания
// <strong class="erm-tone-red">+418</strong> dd = Смертельный взгляд
// <strong class="erm-tone-red">+41C</strong> dd = Кислотное дыхание</blockquote></div></details>
   // <strong class="erm-tone-red">+420</strong> dd Очередь влияния заклинаний
   // <strong class="erm-tone-red">+44C</strong> dd Кол-во активных заклинаний (для отображения при щелчке <span class="erm-anchor" id="ref-form-combatmon-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">)
   // <strong class="erm-tone-red">+450</strong> float = смещение цвета при клоне, окаменении, жажде крови (см. <a href="../creature-flags/#ref-form-flaggedabilities-note1" data-context="true">детали</a>)
   // <strong class="erm-tone-red">+454</strong> dd <em class="erm-tone-purple erm-legacy-event">441B17</em> (кол-во ответов на атаку; 0 = не отвечает на атаку)
   // настройка для грифонов <em class="erm-tone-purple erm-legacy-event">46D6A0</em>
   // * инфо по некоторым эффектам заклинаний:
   // <strong class="erm-tone-red">+458</strong> dd Благословение добавляет к макс.урону
   // <strong class="erm-tone-red">+45C</strong> dd Проклятье убавляет к миним.урону
   // <strong class="erm-tone-red">+460</strong> dd эффект Антимагии
   // <strong class="erm-tone-red">+464</strong> dd Жажда крови добавляет к Атаке с бонусами
   // <strong class="erm-tone-red">+468</strong> dd Точность добавляет к Атаке с бонусами
   // <strong class="erm-tone-red">+46C</strong> dd эффект Слабости
   // <strong class="erm-tone-red">+470</strong> dd бонус Каменной кожи
   // <strong class="erm-tone-red">+474</strong> dd эффект Разрушающего луча
   // <strong class="erm-tone-red">+478</strong> dd бонус Молитвы
   // <strong class="erm-tone-red">+47C</strong> dd эффект Радости
   // <strong class="erm-tone-red">+480</strong> dd эффект Печали
   // <strong class="erm-tone-red">+484</strong> dd бонус Удачи
   // <strong class="erm-tone-red">+488</strong> dd эффект Неудачи
   // <strong class="erm-tone-red">+48C</strong> dd флаги КОРОЛЬ1,2,3 (1 = КОРОЛЬ_1, 2 = КОРОЛЬ_2, 3 = КОРОЛЬ_3)
   // используется для расчёта закла Палач. Бонус 8 к Атаке: 0x<em class="erm-tone-purple erm-legacy-event">4421D2</em>
   // <strong class="erm-tone-red">+490</strong> dd кол-во пройденных клеток до удара (сбрасывается после первого удара)
   // <strong class="erm-tone-red">+494</strong> dd кол-во доп. ответов на атаку, добавленных Контрударом
   // <strong class="erm-tone-red">+498</strong> float = расчётный бонус Бешенства
   // <strong class="erm-tone-red">+49C</strong> float = расчётный урон контратаки при снятии Слепоты
   // <strong class="erm-tone-red">+4A0</strong> float = расчётный урон Огненного щита
   // <strong class="erm-tone-red">+4A4</strong> float = эффект Яда
   // <strong class="erm-tone-red">+4A8</strong> float = эффект защиты от Воздуха
   // <strong class="erm-tone-red">+4AC</strong> float = эффект защиты от Огня
   // <strong class="erm-tone-red">+4B0</strong> float = эффект защиты от Воды
   // <strong class="erm-tone-red">+4B4</strong> float = эффект защиты от Земли
   // <strong class="erm-tone-red">+4B8</strong> float = бонус Щита
   // <strong class="erm-tone-red">+4BC</strong> float = бонус Воздушного Щита
   // <strong class="erm-tone-red">+4C0</strong> db = Ослеплён - снизить защиту (сбросить после?) при оживании (уст. перед ударом)
   // <strong class="erm-tone-red">+4C1</strong> db = Парализован - снизить защиту (сбросить после?) при оживании (уст. перед ударом)
   // <strong class="erm-tone-red">+4C4</strong> dd = Забывчивость - уровень (&gt;2 = не может стрелять)
   // <strong class="erm-tone-red">+4C8</strong> float = бонус Замедления
   // <strong class="erm-tone-red">+4CC</strong> dd = бонус Ускорения (вычитается из скорости при снятии)
   // <strong class="erm-tone-red">+4D0</strong> dd = эффект Болезни (на защиту)
   // <strong class="erm-tone-red">+4D4</strong> dd = эффект Болезни (на атаку)
   // <strong class="erm-tone-red">+4DC</strong> dd = величина бонуса при выборе защиты
   // <strong class="erm-tone-red">+4E0</strong> dd = заклинание, что будет колдовать монстр (Сказочный дракон)
   // <strong class="erm-tone-red">+4E4</strong> dd = эффект Магического Зеркала
   // <strong class="erm-tone-red">+4E8</strong> dd = Мораль
   // <strong class="erm-tone-red">+4EC</strong> dd = Удача <em class="erm-tone-purple erm-legacy-event">44152A</em>
   // <strong class="erm-tone-red">+4F0</strong> db ? сбросить в этом раунде
   // <strong class="erm-tone-red">+4F1</strong> db - попадает в зону применения эффекта (<em class="erm-tone-purple erm-legacy-event">43DF88</em>)
   // <strong class="erm-tone-red">+4F4</strong> dd список стеков, что удерживаются корнями этого дендроида
   // <strong class="erm-tone-red">+504</strong> dd список дендроидов, что удерживают этот стек корнями
   // <strong class="erm-tone-red">+514</strong> dd список стеков, на которые распространяется аура единорогов
   // <strong class="erm-tone-red">+524</strong> dd список единорогов, в ауре которых находится отряд
</pre>



</div></div>
</section>
:::

## Назначение {#meaning}

Смещения HEX относительно указателя на структуру из старого снимка WoG. Это описание формата, не универсальные адреса для UN:C. Поля с неясным назначением не трактуются как API. Проверяйте размер и расположение структуры в своей сборке.

## Значения {#values}

| HEX | Байты | Поле |
| --- | --- | --- |
| `1C` {#offset-1c} | 4 | Целевой гекс |
| `24` {#offset-24} | 4 | Родительский стек клона |
| `28` {#offset-28} | 4 | Дочерний клон |
| `2C` {#offset-2c} | 4 | Раунды до исчезновения клона |
| `34` {#offset-34} | 4 | ID существа |
| `38` {#offset-38} | 4 | Позиция |
| `3C` {#offset-3c} | 4 | Анимация |
| `40` {#offset-40} | 4 | Кадр анимации |
| `44` {#offset-44} | 4 | Направление: 0 атакующий, 1 защитник |
| `4C` {#offset-4c} | 4 | Количество существ |
| `54` {#offset-54} | 4 | Безвозвратные потери |
| `58` {#offset-58} | 4 | Потерянное здоровье верхнего существа |
| `5C` {#offset-5c} | 4 | Слот армии героя |
| `60` {#offset-60} | 4 | Число существ до боя |
| `64` {#offset-64} | 4 | Базовая скорость с бонусами |
| `6C` {#offset-6c} | 4 | Полное здоровье для лечения |
| `74` {#offset-74} | 4 | Город существа |
| `78` {#offset-78} | 4 | Уровень 0–6 |
| `84` {#offset-84} | 4 | [Битовые флаги](../creature-flags/) |
| `88` {#offset-88} | 4 | Указатель на имя |
| `8C` {#offset-8c} | 4 | Указатель на имя во множественном числе |
| `90` {#offset-90} | 4 | Указатель на описание |
| `B0` {#offset-b0} | 4 | Боевая ценность |
| `B4` {#offset-b4} | 4 | Ценность для ИИ |
| `B8` {#offset-b8} | 4 | Прирост |
| `BC` {#offset-bc} | 4 | Прирост от орды |
| `C0` {#offset-c0} | 4 | Здоровье существа |
| `C4` {#offset-c4} | 4 | Скорость |
| `C8` {#offset-c8} | 4 | Атака |
| `CC` {#offset-cc} | 4 | Защита |
| `D0` {#offset-d0} | 4 | Минимальный урон |
| `D4` {#offset-d4} | 4 | Максимальный урон |
| `D8` {#offset-d8} | 4 | Выстрелы |
| `DC` {#offset-dc} | 4 | Применения заклинаний |
| `EC` {#offset-ec} | 4 | Заклинание существа в раунде |
| `F4` {#offset-f4} | 4 | Сторона боя |
| `F8` {#offset-f8} | 4 | Индекс отряда на стороне |
| `100` {#offset-100} | 4 | Смещение изображения по Y |
| `104` {#offset-104} | 4 | Смещение изображения по X |
| `164` {#offset-164} | 4 | Загруженный DEF существа |
| `168` {#offset-168} | 4 | Загруженный DEF снаряда |
| `170` {#offset-170} | 4 × 8 | Звуки: движение, атака, урон, выстрел, смерть, защита, два дополнительных |
| `194` {#offset-194} | 4 | Количество действующих заклинаний |
| `198` {#offset-198} | 4 × 81 | Длительность по ID заклинания |
| `2DC` {#offset-2dc} | 4 × 81 | Сила по ID заклинания |
| `450` {#offset-450} | 4 float | Степень коррекции цвета |

## Связанные команды и таблицы {#related}

[BM](../../receivers/bm/) · [Все таблицы](../)

## Связанные команды и таблицы {#reference-links}

[Клетки поля боя](../battlefield/) · [Таблица существ](../creatures/) · [Боевой стек (BM)](../../receivers/bm/) · [Боевой стек (BM)](../../receivers/bm/#command-i-o-t) · [Битовые флаги существ](../creature-flags/#values) · [Боевой стек (BM)](../../receivers/bm/#command-a-d-h-s) · [Боевой стек (BM)](../../receivers/bm/#command-b-n) · [Боевой стек (BM)](../../receivers/bm/#command-c-1-2-3-4-5) · [Боевой стек (BM)](../../receivers/bm/#command-e-f) · [Боевой стек (BM)](../../receivers/bm/#command-g-1-2) · [Боевой стек (BM)](../../receivers/bm/#command-j-k-l) · [Боевой стек (BM)](../../receivers/bm/#command-m-1-2-3) · [Боевой стек (BM)](../../receivers/bm/#command-p-r) · [Боевой стек (BM)](../../receivers/bm/#command-q-1-2-3) · [Боевой стек (BM)](../../receivers/bm/#command-u) · [Боевой стек (BM)](../../receivers/bm/#command-v-z) · [Таблица заклинаний](../spells/) · [Действие в бою (BG)](../../triggers/bg/) · [Битовые флаги существ](../creature-flags/) · [Переменные и выражения (VR)](../../receivers/vr/) · [Примеры ERM](../../examples/) · [Снаряды и лучи](../projectiles/) · [Расчёт физического урона (MF)](../../triggers/mf/) · [Отладка и совместимость ERM](../../compatibility/) · [Анимации BM:V](../combat-animations/)
