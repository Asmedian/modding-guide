---
{"title":"Структура командира","summary":"Историческая база 42344640, шаг записи 296 байт. Получение текущего опыта без изменения структуры.","translationStatus":"reviewed"}
---

## Cтруктура командира {#ref-form-commstr}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-left erm-paragraph">
<span class="erm-source-title">Cтруктура командира</span></div>
<div class="erm-paragraph">   <span class="erm-anchor" id="ref-form-commstr-wt"></span><code class="erm-legacy-label">HEX-конвертер:</code> <span class="erm-anchor" id="ref-form-commstr-inputhex"></span><input class="erm-radix-input" data-erm-radix="16" type="text" value="" inputmode="text" aria-label="Введите hex-значение нужного вам смещения.." title="Введите hex-значение нужного вам смещения..">
<span class="erm-anchor" id="ref-form-commstr-inputdec"></span><output class="erm-radix-result" aria-label="10-тичное значение указанного вами смещения" title="10-тичное значение указанного вами смещения"></output></div>
<span class="erm-anchor" id="ref-form-commstr-q1"></span><div class="erm-tone-quote erm-note">Структура командира 0x128h (296).<br>Все смещения указаны в hex-нотации.</div>
<pre>	<span class="erm-anchor" id="ref-form-commstr-n2"></span><strong class="erm-tone-purple erm-strong">Смещение		Описание</strong>
   // <span class="erm-anchor" id="ref-form-commstr-dred"></span><strong class="erm-tone-red">+00</strong> dd = Доступность
   // <strong class="erm-tone-red">+04</strong> dd = Жив или мёртв  
   // <strong class="erm-tone-red">+08</strong> dd = Номер героя хозяина (ну и номер командира) 
   // <strong class="erm-tone-red">+0C</strong> dd = Тип командира
   // <strong class="erm-tone-red">+10</strong> dd = Тип героя
   // <strong class="erm-tone-red">+14</strong> dd = Опыт в прошлых битвах
   // <strong class="erm-tone-red">+18</strong> dd = Если установить 1 = первичные навыки не будут изменяться с продвижением командира по уровням
   //                Если установить 0 = здоровье и урон будут автоматически прибавляться вместе с уровнем командира (<a href="../../receivers/co/#ref-rec-co-p">CO:P</a>)
   // <strong class="erm-tone-red">+1C</strong> dd = Атака
   // <strong class="erm-tone-red">+20</strong> dd = Защита
   // <strong class="erm-tone-red">+24</strong> dd = Здоровье
   // <strong class="erm-tone-red">+28</strong> dd = Урон
   // <strong class="erm-tone-red">+2C</strong> dd = Сила магии
   // <strong class="erm-tone-red">+30</strong> dd = Скорость
   // <strong class="erm-tone-red">+34</strong> dd = Сопротивление

   // <strong class="erm-tone-red">+38</strong> dd = Уровень Атаки
   // <strong class="erm-tone-red">+3C</strong> dd = Уровень Защиты
   // <strong class="erm-tone-red">+40</strong> dd = Уровень Здоровья
   // <strong class="erm-tone-red">+44</strong> dd = Уровень Урона
   // <strong class="erm-tone-red">+48</strong> dd = Уровень Сила магии
   // <strong class="erm-tone-red">+4C</strong> dd = Уровень Скорости
   // <strong class="erm-tone-red">+50</strong> dd = Уровень Сопротивления

<small>_word_ arts[10][8];</small> // <strong class="erm-tone-red">+54</strong> = Номер артефакта; Кол-во проведённых с ним битв
<small>_char_ name[32];</small>    // <strong class="erm-tone-red">+F4</strong> = Имя
   // <strong class="erm-tone-red">+114</strong> dd = Старый опыт героя
   // <strong class="erm-tone-red">+118</strong> dd = Текущий опыт
   // <strong class="erm-tone-red">+11C</strong> dd = Текущий уровень (при отображении добавляем +1)
<small>specBon[2];</small>	// <strong class="erm-tone-red">+120</strong> dd = Особые бонусы (сумма битов); Запрещённые бонусы (сумма битов)</pre>

<div class="erm-tone-quote erm-legacy-code erm-note"><code><div class="erm-paragraph">// функция получения адреса структуры командира
inline _Npc_*  GetNpc(_int_ hero_id) {return ((_Npc_ *)(0x28620C0 + 296 * hero_id));}</div>
<div class="erm-paragraph">// функция получения строк из командирского текстовика <em class="erm-legacy-file">znpc00.txt</em>:<br>
inline char* Get_ITxt(int StrNum, int ItemNum) {return CALL_3 (char*, __cdecl, 0x77710B, StrNum, ItemNum, 0x2860724);}</div>
<div class="erm-paragraph">// функция получения Имени и Биографии из файла <em class="erm-legacy-file">znpc00.txt</em>:<br>
inline char* Get_ITxtBio(int StrNum, int ItemNum) {return CALL_3 (char*, __cdecl, 0x77710B, StrNum, ItemNum, 0x286072C);}</div>
<div class="erm-paragraph">// функция получения силы первичного командирского навыка:
inline int Get_NpcSkillPower(_Npc_* npc, int skill_id) {return CALL_2 (int, __thiscall, 0x769460, npc, skill_id);}</div>
</code></div>
 <br>
</div>
</section>
:::

## Задача и применимость {#purpose}

Историческая база 42344640, шаг записи 296 байт. Получение текущего опыта без изменения структуры.

## Код {#code}

```erm
!?FU(MyMod_ReadCommanderExp);
!#VA(hero:x) (experience:x);
!!VR(experience):S-1;
!!FU|(hero)<0/(hero)>155:E;
!!VR(offset:y):S(hero) *296 +280;
!!UN:C42344640/(offset)/4/?(experience);
```

## Версия и ограничения {#limits}

Адрес подтверждён историческим рецептом для WoG/ERA на базе h3wog.exe. Он не проверен выполнением в установленной игре и не гарантирован для другого EXE или плагина. Перед применением проверьте сборку и исходные байты; модификации исполняемого кода могут переживать смену карты. Размер и поля относятся к стандартной структуре WoG. Для обычного управления командиром сначала используйте CO. Смещение 280 = 0x118, текущий опыт; это не 0x114 старого опыта героя.

## Адреса и смещения {#addresses}

`42344640` · `296` · `280`

## Происхождение и связанные команды {#sources}

[igrik, #98728](https://wforum.heroes35.net/showthread.php?tid=5118&pid=98728#pid98728)

[UN:C](../) · [SN](../../receivers/sn/) · [Совместимость](../../compatibility/)

## Связанные команды и таблицы {#reference-links}

[Командиры (CO)](../../receivers/co/#command-p)
