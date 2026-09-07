---
{"title":"Синтаксис ERM: ZVSE и ZVSE2","summary":"Префиксы команд, параметры, GET/SET, комментарии и препроцессор ERM 2.0.","translationStatus":"reviewed"}
---

## Cont/ingener.htm {#ref-cont-ingener}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Инженерный анализ</span></div>

<div class="erm-paragraph">Содержит выдержки из технической реализации игры, которые могут быть полезны 
при более глубокой работе с Героями, а также <a href="../receivers/un/#ref-rec-un-c">UN:C</a>.<br>
Всё это, а также последние обновления, вы можете также найти <a href="http://forum.df2.ru/index.php?act=ST&amp;f=79&amp;t=6803">здесь</a>.</div>
<div class="erm-paragraph">В <strong>таблице монстров</strong> используется следующая структура:<br>

</div><span class="erm-anchor" id="ref-cont-ingener-101"></span><details class="erm-comment"><summary><span class="erm-anchor" id="ref-cont-ingener-show101"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
<strong>Town</strong>: int; //соответственный город<br>
<strong>Level</strong>: int; //уровень <br>
<strong>SoundName</strong>: PChar; // 4 буквы, с которых начинаются звуки монстра<br>
<strong>DefName</strong>: PChar; //имя дэфа монстра<br>
<strong>Flags</strong>: int; //флаги<br>
<strong>Name</strong>: PChar; //имя<br>
<strong>PluralName</strong>: PChar; //множественное имя<br>
<strong>Features</strong>: PChar; // (описание способностей)<br>
<strong>CostWood</strong>: int; //цена деревом<br>
<strong>CostMercury</strong>: int; //цена ртутью<br>
<strong>CostOre</strong>: int; //цена рудой<br>
<strong>CostSulfor</strong>: int; //цена серой<br>
<strong>CostCrystal</strong>: int; //цена кристаллами<br>
<strong>CostGems</strong>: int; //цена камнями<br>
<strong>CostGold</strong>: int; //цена золотом<br>
<strong>FightValue</strong>: int; //ценность в бою<br>
<strong>AIValue</strong>: int; //ценность на карте<br>
<strong>Growth</strong>: int; //прирост<br>
<strong>HordeGrowth</strong>: int; //прирост от доп. строения<br>
<strong>HitPoints</strong>: int; //здоровье<br>
<strong>Speed</strong>: int; //скорость<br>
<strong>Attack</strong>: int; //атака<br>
<strong>Defence</strong>: int; //защита<br>
<strong>DamageLow</strong>: int; //мин. урон<br>
<strong>DamageHigh</strong>: int; //макс. урон<br>
<strong>Shots</strong>: int; //выстрелов<br>
<strong>Spells</strong>: int; //заклинаний<br>
<strong>AdvLow</strong>: int; // ?<br>
<strong>AdvHigh</strong>: int; // ?<br>
<br>
В файле h3wog.exe таблица стандартных монстров находится по адресу $<strong>2703B8</strong>, а 
новые монстры – $<strong>31C188</strong>.<br>
</div></details>

<div class="erm-paragraph"><strong>Таблица с типами стрелковых снарядов</strong> (стрел и т. п.) для стандартных существ:


</div><span class="erm-anchor" id="ref-cont-ingener-102"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show102"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
Хранится в адресах <strong>00797BB8–00797C7B</strong> (неиспользующаяся оригинальная –
<strong>0043DBA4–0043DC34</strong>). На каждое существо отводится один байт с номером типа 
снаряда. Таблица начинается с лучника (существо № 2) и заканчивается неким 
существом № 197 (оригинальная – баллистой, существом № 146).
</div></details>
<strong><br>
Имена изображений стрелковых снарядов</strong> (стрел и т. п.) 


<span class="erm-anchor" id="ref-cont-ingener-103"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show103"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
В адресах <strong>0043DAAA</strong>–<strong>0043DB1C</strong> расположен оператор выбора (switch для любителей C-подобных языков, case для любителей Pascal-подобных). Он содержит 16 имен DEF-файлов (для типов снаряда №№ 00–0Fh), плюс один дополнительный пункт, выполняемый по умолчанию, то есть для всех остальных типов снаряда. При запуске WoG код оператора изменяется так, чтобы для типа 01 совершался прыжок на 
<strong>007649D0</strong>, где проводится проверка на драколича – если это существо № 196, используется изображение дыхания драколича, если нет – стандартное изображение стрелы лучника из замка.
</div></details>
<div class="erm-paragraph">
<strong>Регенерация существ</strong>

</div>
<span class="erm-anchor" id="ref-cont-ingener-104"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show104"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
002F55C7 83F8 3C CMP EAX,3C //призраки<br>
002F55CA 0F84 BB000000 JE 002F568B<br>
002F55D0 83F8 3D CMP EAX,3D //привидения<br>
002F55D3 0F84 B2000000 JE 002F568B<br>
002F55D9 3D 90000000 CMP EAX,90 //тролли<br>
002F55DE 0F84 A7000000 JE 002F568B<br>
002F55E4 3D 9D000000 CMP EAX,9D //кошмарные гидры<br>
002F55E9 0F84 92000000 JE 002F5681<br>
где 3C, 3D, 90, 9D - номер существа в шестнадцатеричной системе<br>
<br>
Для кошмарных гидр выполняется проверка вероятности регенерации<br>
002F5681 E8 9A7EFFFF CALL 002ED520<br>
002F5686 83F8 28 CMP EAX,28<br>
где 28h = 40% вероятность. Ее можно убрать, если вместо JE 002F5681 поставить JE 
002F568B.<br>
<br>
А вот тут находится кол-во регенерированных жизней<br>
002F55BC BA 32000000 MOV EDX,32<br>
где 32h = 50 HP</div></details>
<div class="erm-paragraph">
<strong>Атака с возвращением</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-105"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show105"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
002F57C6 83F8 48 CMP EAX,48 //гарпия<br>
002F57C9 74 5D JE SHORT 002F5828<br>
002F57CB 83F8 49 CMP EAX,49 //гарпия-ведьма<br>
002F57CE 74 58 JE SHORT 002F5828<br>
002F57D0 3D 9B000000 CMP EAX,9B //темный дракон<br>
002F57D5 74 21 JE SHORT 002F57F8 //доп. проверка двуклеточности<br>
<br>
Для выбора режима нападения при нажатия правой кнопкой на защите (атаковать и 
вернуться или атаковать и остаться там)<br>
002FA2D7 837D F0 48 CMP DWORD PTR SS:[EBP-10],48 //гарпия<br>
002FA2DB 74 23 JE SHORT 002FA300<br>
002FA2DD 837D F0 49 CMP DWORD PTR SS:[EBP-10],49 //гарпия-ведьма<br>
002FA2E1 74 1D JE SHORT 002FA300<br>
002FA2E3 817D F0 9B000000 CMP DWORD PTR SS:[EBP-10],9B //темный дракон<br>
002FA2EA 74 14 JE SHORT 002FA300</div></details>
<br>
<strong>Возрождение фениксов</strong>



<span class="erm-anchor" id="ref-cont-ingener-106"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show106"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
002F587C 817E 34 83000000 CMP DWORD PTR DS:[ESI+34],83 //феникс<br>
002F5883 74 38 JE SHORT 002F58BD<br>
002F5885 817E 34 9E000000 CMP DWORD PTR DS:[ESI+34],9E //священный феникс<br>
002F588C 74 1C JE SHORT 002F58AA</div></details>
 <div class="erm-paragraph"><strong>Бесстрашие</strong>


</div><span class="erm-anchor" id="ref-cont-ingener-107"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show107"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
002F7C6C 817F 34 84000000 CMP DWORD PTR DS:[EDI+34],84 //лазурный дракон<br>
002F7C73 74 46 JE SHORT 002F7CBB<br>
002F7C75 817F 34 96000000 CMP DWORD PTR DS:[EDI+34],96 //верховный архангел<br>
002F7C7C 7C 09 JL SHORT 002F7C87<br>
002F7C7E 817F 34 C0000000 CMP DWORD PTR DS:[EDI+34],0C0 //сильванский кентавр<br>
002F7C85 7C 34 JL SHORT 002F7CBB<br>
т.е. бесстрашием обладают Лазурный дракон и диапазон существ от Верховного 
архангела (150) до командира Сопряжения (191).</div></details>
<div class="erm-paragraph">
<strong>Страх</strong>


</div><span class="erm-anchor" id="ref-cont-ingener-108"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show108"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
002F7CEA 81FB 84000000 CMP EBX,84 //лазурный дракон<br>
002F7CF0 74 75 JE SHORT 002F7D67<br>
002F7CF2 81FB 99000000 CMP EBX,99 //антихрист<br>
002F7CF8 74 6D JE SHORT 002F7D67<br>
002F7CFA 81FB 9B000000 CMP EBX,9B //темный дракон<br>
002F7D00 74 65 JE SHORT 002F7D67<br>
<br>
002F7D16 813D 68218302 AE000000 CMP DWORD PTR DS:[2832168],0AE<br>
002F7D20 7C 21 JL SHORT 002F7D43<br>
002F7D22 813D 68218302 BF000000 CMP DWORD PTR DS:[2832168],0BF<br>
002F7D2C 7F 15 JG SHORT 002F7D43<br>
все командиры сопряжения (в качестве монстров видимо)</div></details>
<div class="erm-paragraph">
<strong>Магическое зеркало</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-109"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show109"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
00048528 8179 34 86000000 CMP DWORD PTR DS:[ECX+34],86<br>
0004852F 75 1E JNZ SHORT 0004854F<br>
где 86h = 134 - Сказочный дракон</div></details>
<div class="erm-paragraph">
<strong>Атака огненным шаром</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-110"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show110"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
0003F72C 83F8 2D CMP EAX,2D<br>
0003F72F 0F85 EA020000 JNZ 0003FA1F<br>
где 2Dh = 45 - Магог</div></details>

<div class="erm-paragraph">
<strong>Атака облаком смерти</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-111"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show111"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
002FF990 83F8 40 CMP EAX,40 //лич<br>
002FF993 74 12 JE SHORT 002FF9A7<br>
002FF995 83F8 41 CMP EAX,41 //могущественный лич<br>
002FF998 74 0D JE SHORT 002FF9A7<br>
002FF99A 3D C4000000 CMP EAX,0C4 //драколич<br>
002FF99F 74 06 JE SHORT 002FF9A7</div></details>

<div class="erm-paragraph">
<strong>Заклинания, даваемые артефактами</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-112"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show112"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
По адресу <strong>004D95F2h</strong> находится указатель на case, содержащий 9 записей.
<br>
По адресу <strong>004D95EBh</strong> находится указатель на таблицу однобайтных данных, 
определяющих работу оператора. Таблица вмещает 49 значений, начиная с арта-86 и 
заканчивая артом-135.<br>
Типы значений в таблице:<br>
0 - дать все заклинания Огня<br>
1 - дать все заклинания Воздуха<br>
2 - дать все заклинания Воды<br>
3 - дать все заклинания Земли<br>
4 - дать заклинания "Вызвать Корабль" и "затопить Корабль"<br>
5 - дать все заклинания 5-го уровня<br>
6 - дать "Армагеддон"<br>
7 - дать "Гром Титанов"<br>
8 - ничего</div></details>
<div class="erm-paragraph">
<strong>Боевые машины, покупаемые в кузнях</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-113"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show113"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
<strong>6AAA60</strong> - таблица боевых машин, покупаемых в Кузницах замков.<br>
На каждую машину отводится по 4 байта, потом 4 байта - FF FF FF FF (итого - 8 
байт). Боевая машина, покупаемая в Ballista Yard, совпадает с Замком.<br>
<strong>00642EA0</strong> - таблица отображаемых в окне кузни существ.</div></details>
<div class="erm-paragraph">
<strong>Структура заклинаний</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-114"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show114"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
<strong>Указатель</strong> на таблицу заклинаний лежит в <strong>687FA8</strong>. Адрес в нём динамический.<br>
struct<br>
{<br>
int null; //??<br>
char *sound; //имя звука<br>
int anim_id; //<a href="../receivers/ss/#ref-rec-ss-x">SS:X</a>???<br>
int flags; //флаги <br>
char *name; //имя <br>
int level;<br>
int school;<br>
int mana_cost[4];<br>
int param_1;<br>
int effects[4]; //<a href="../receivers/ss/#ref-rec-ss-e">SS:E</a><br>
int city_freq[9]; //вероятности появления в городах<br>
int ai_val[4]; //<a href="../receivers/ss/#ref-rec-ss-i">SS:I</a><br>
char *desc[4]; //описания<br>
}</div></details>
<div class="erm-paragraph">
<strong>Sharpshooter</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-115"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show115"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
75DD50 cmp eax,00000095h<br>
75DD55 jz L0075DDD2<br>
75DD57 cmp eax,00000089h<br>
75DD5C jz L0075DDD2<br>
75DD5E cmp eax,000000AAh<br>
75DD63 jz L0075DDD2<br>
75DD65 cmp eax,000000ABh<br>
75DD6A jz L0075DDD2<br>
То есть, прямой стрелой пуляют 3 снайпера + Стрелковая Башня.</div></details>
<div class="erm-paragraph">
<strong>Нет пенальти за препятствия</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-116"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show116"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
760590 cmp eax,00000022h //маг<br>
760593 jz L00760622<br>
760599 cmp eax,00000023h //архимаг<br>
76059C jz L00760622<br>
7605A2 cmp eax,00000088h //чародей<br>
7605A7 jz L00760622<br>
7605A9 cmp eax,00000089h //снайпер<br>
7605AE jz L00760622<br>
7605B0 cmp eax,00000095h //башня<br>
7605B5 jz L00760622<br>
7605B7 cmp eax,000000AAh //арктический снайпер<br>
7605BC jz L00760622<br>
7605BE cmp eax,000000ABh //закалённый снайпер<br>
7605C3 jz L00760622</div></details>
<div class="erm-paragraph">
<strong>Ненависть</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-117"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show117"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
443138 mov dl,[eax+CASE_004434DC]<br>
44313E jmp [CASE_PROCTABLE_004434C8+edx*4]<br>
<br>
В маленькой (монстры 112-129) таблице 5 значений. Значения 00-03 чисто для 
элементалей - каждый элементаль ненавидит обоих элементалей противоположной 
стихии. Управление, однако, всё равно передаётся на PROC0004 - она же для 
остальных существ, т.е., там case вложен в case. Диапазон - от Ангела до Чёрного 
Дракона.<br>
SoD'овский код там имеет вид:<br>
<br>
CASE_004434C8_PROC0004:<br>
<br>
443195 mov eax,[edi+34h]<br>
443198 add ecx,FFFFFFF4h<br>
44319B cmp ecx,00000047h<br>
44319E ja CASE_004434F0_PROC0006<br>
4431A4 xor edx,edx<br>
4431A6 mov dl,[ecx+CASE_0044350C]<br>
4431AC jmp [CASE_PROCTABLE_004434F0+edx*4]<br>
<br>
Однако при запуске WoG код изменяется так:<br>
<br>
CASE_004434C8_PROC0004:<br>
<br>
443195 mov ecx,[ebp+08h]<br>
443198 call SUB_L00766DE6<br>
44319D or eax,eax<br>
44319F jz L00443410<br>
4431A5 mov ecx,[ebp-10h]<br>
4431A8 jmp L00443211<br>
4431AA nop<br>
4431AB nop<br>
<br>
Код меняет отрезок WoG'овского копирования exe3273A4-3273AF 
(78BD8Ch/443195h/17h).<br>
В итоге ненавистью существ в WoG занимается SUB_L00766E14, куда скопирован и 
case, и таблица SoD'а. Туда же, видимо, встроена и ненависть через опыт существ.<br>
При условии, что тип существа соответствует "ненавистному", задаётся процент 
доп. урона. В SoD это унифицировано, в WoG же - рутинно задаётся одной и той же 
командой:<br>
<br>
mov dword ptr [ebp-0Ch],00000032h<br>
<br>
Исключения - Титан и Чёрный Дракон. У них это:<br>
<br>
mov dword ptr [ebp-0Ch],00000005h<br>
<br>
Похоже на опечатку: вместо 150% урона - 105%. Несложный тест подтверждает, что 
баг реален и мы с ним жили.<br>
Кстати, и в SoD, и в WoG Чёрный Дракон равнодушен к Гигантам. Справедливо - 
Титан тоже равнодушен к Красным.<br>
Независимо от реальных процентов доп. урона, в логе битвы будет показано "50%". 
Проблема в упрощённом обращении к строке genrltxt.txt.</div></details>
<div class="erm-paragraph">
<strong>Кавалерийский бонус</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-118"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show118"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
75D823 cmp dword ptr [L028460C0],0000000Ah; - Каварелист<br>
75D82A jnz L0075D838<br>
75D82C mov dword ptr [L02846420],0000000Bh<br>
75D836 jmp L0075D860<br>
75D838 cmp dword ptr [L028460C0],0000000Bh; - Чемпион<br>
75D83F jnz L0075D84D<br>
75D841 mov dword ptr [L02846420],0000000Bh</div></details>
<div class="erm-paragraph">
<strong>Отсос 2-х очков маны</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-119"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show119"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
4650D0 sub eax,0000003Dh; - Привидение<br>
………<br>
465174 add eax,FFFFFFFEh; - кол-во забираемых очков</div></details>
<div class="erm-paragraph">
<strong>Магический канал</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-120"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show120"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
5A24DC cmp dword ptr [eax-000000C0h],0000002Bh; - Чёрт</div></details>
<div class="erm-paragraph">
<strong>Смертельный удар</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-121"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show121"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
766DB9 sub eax,43; - Рыцарь Смерти<br>
4435C0 jz L004435D1<br>
…………<br>
4436DE cmp eax,00000014h; - шанс срабатывания абилки</div></details>
<div class="erm-paragraph">
<strong>Снижение стоимости заклинаний</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-122"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show122"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
766BFA cmp dword ptr [ebp-18h],00000022h - Маг<br>
766BFE jz L00766C06<br>
766C00 cmp dword ptr [ebp-18h],00000023h - АрхиМаг<br>
766C04 jnz L00766C0D<br>
766C06 mov dword ptr [ebp-0Ch],00000002h - кол-во очков на удешевление</div></details>
<div class="erm-paragraph">
<strong>Особые земли</strong>

</div><span class="erm-anchor" id="ref-cont-ingener-123"></span><details class="erm-comment"><summary><br>
<span class="erm-anchor" id="ref-cont-ingener-show123"></span><strong class="erm-toggle-label">Показать</strong></summary><div class="erm-comment-body">
Case:<br>
4FD5A1 mov cl,[eax+CASE_004FD5E8]<br>
4FD5A7 jmp [CASE_PROCTABLE_004FD5D0+ecx*4]<br>
<br>
Проверки для подсказок при наведении мыши, <span class="erm-anchor" id="ref-cont-ingener-vc"></span><img src="../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> и для <a href="../receivers/tr/#ref-rec-tr">!!TR</a>:<br>
<br>
4FD52A cmp eax,00000015h<br>
4FD52D lea ecx,[edi+ecx*4]<br>
4FD530 jz L004FD57F<br>
4FD532 cmp eax,0000002Eh<br>
4FD535 jz L004FD57F<br>
4FD537 cmp eax,000000E3h<br>
4FD53C jz L004FD57F<br>
4FD53E cmp eax,000000E0h<br>
4FD543 jz L004FD57F<br>
4FD545 cmp eax,000000DEh<br>
4FD54A jz L004FD57F<br>
4FD54C cmp eax,000000E1h<br>
4FD551 jz L004FD57F<br>
4FD553 cmp eax,000000E4h<br>
4FD558 jz L004FD57F<br>
4FD55A cmp eax,000000E2h<br>
4FD55F jz L004FD57F<br>
4FD561 cmp eax,000000E7h<br>
4FD566 jz L004FD57F<br>
4FD568 cmp eax,000000E5h<br>
4FD56D jz L004FD57F</div></details>

<div class="erm-paragraph">За содержимое благодарим авторов: <strong>sergroj, Chortos-2, major, MOP, feanor</strong></div>

</div>
</section>
:::

## Ресиверы: общее {#ref-cont-receiversol}

:::erm
<section class="erm-reference" lang="ru">
<div>


<span class="erm-anchor" id="ref-cont-receiversol-text"></span><div>
<h3 class="erm-align-center">Ресиверы</h3>
<h3><span class="erm-anchor" id="ref-cont-receiversol-intro"></span>Введение</h3>
<div class="erm-paragraph">Ресиверы ("<em>receiver</em>", с англ. – приёмник.) – ЕRM-коды, действующие на героев, объекты, события таймеры, функции, 
сообщения или игровые установки.<br>
Большинство ресиверов имеют несколько опций, что может быть использовано для самых разных вещей.<br>
Например, <a href="../receivers/le/#ref-rec-le">ресивер LE</a> действует на локальные события на карте и имеет несколько различных команд для изменения свойств события.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-use"></span>Как использовать ресиверы</h3>
<div class="erm-paragraph">Ресиверы помещаются во временны́х событиях после триггера, который их запускает. 
Они выполняются один раз до конца события или достижения другого триггера. На одну строчку можно писать одну команду или более, 
но для ясности и читабельность вашего скрипта (а так же для поиска ошибок), лучше писать на каждую строку по команде.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-synt"></span>Синтаксис ресивера</h3>
<div class="erm-paragraph">Все ресиверы начинаются с двойного восклицательного знака "!!" и заканчиваются точкой с запятой ";". 
Сразу после "!!" следует двухбуквенный код ресивера, как <a href="../receivers/ar/#ref-rec-ar">AR</a> для артефактов, 
<a href="../receivers/he/#ref-rec-he">HE</a> для героев и т.д. Следующая часть после этого кода зависит от типа ресивера. 
Некоторые ресиверы имеют один или более параметров перед двоеточием ( <strong>:</strong> ), каждый параметр - целое число. Далее, после двоеточия следует опция 
ресивера. Опции имеют много форм и могут включать один или более параметров каждый; они представлены на страницах Справочника далее как XXXX. 
Замещайте XXXX соответствующей командой или командами. После последней команды вы должны поставить знак точка с запятой ";"</div>
<div class="erm-paragraph">Все ERM команды (ресиверы и инструкции) должны иметь, как минимум, одну опцию для корректной работы.<br>
<u>Пример синтаксиса</u>:
<pre class="erm-example"><code class="language-erm">!!LE12/21/0:E1000;</code></pre>
В примере выше, локальное событие в координатах x=12, y=21 и уровень=0 (верх) 
станет модифицированным и будет давать 1000 опыта для героя.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-2nd-synt"></span>Родственный синтаксис</h3>
<div class="erm-paragraph">Часто вам нужно не перемещать значение, а просто добавить или убавить значение. Например, если вы хотите дать герою опыт, 
вы установите герою кол-во опыта без учета текущего значения, т.е. опыт будет установлен на новое, установленное значение. 
Так же будет и с ресурсами игроков. Для добавления или убавления мы используем расширенный синтаксис: ставим маленькую <em>d</em> как префикс числа.<br>
<u>Пример расширенного синтаксиса</u>:
<pre class="erm-example"><code class="language-erm">!!HE-1:Ed500;</code></pre>
В этом примере 500 опыта будет добавлено к уже имеющемуся опыту.<br>
Если бы мы использовали E500, а не Ed500, у героя опыт стал бы равняться 500, а не увеличен на 500.<br>
Для отнимания 500 опыта, используйте Ed-500 соответственно.<br>
Если вы хотите оставить параметр неизменным, используйте d0 или просто d.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-synt-date"></span>Синтаксис текущей даты</h3>
<div class="erm-paragraph">На принципе использования префикса <em>d</em>, мы можем использовать префикс <em>c</em> (опять же только маленькая!) для того, 
чтобы номер текущего дня добавился к числу. Другими словами, <em>c</em> равно текущему дню. Например,<br>
c=4 – это месяц 1, неделя 1, день 4;<br>
c=8 – это месяц 1, неделя 2, день 1;<br>
c=30 – это месяц 2, неделя 1, день 2</div>
<div class="erm-paragraph"><u>Пример</u>:<br>
Нам нужно событие, которое запустится через пять дней после каких-либо действий игрока. 
Установим день его появления <a href="../receivers/ge/#ref-rec-ge">ресивером GE</a>, опция F$. 
Пусть номер события будет 100 (первое число в сообщении события), используем:
<pre class="erm-example"><code class="language-erm">!!GE100:Fc5;</code></pre>
Это событие запустится через 5 дней после выполнения команды (она выполнится после, к примеру, посещения локального события).</div>
<div class="erm-paragraph">Более того, можно использовать оба префикса вместе (<em>d</em> должен стоять первым):
<pre class="erm-example"><code class="language-erm">!!GE100:Fdc5;</code></pre></div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-empty"></span>Пустые параметры</h3>
<div class="erm-paragraph">Если команда имеет четыре параметра, вы ДОЛЖНЫ заполнить их все, отделяя каждый клавишей "слэш" <span class="erm-key">/</span>. 
Вы не можете опустить параметр команды, иначе она не будет работать и выдаст сообщение об ошибке. 
Однако, в некоторых случаях вы можете опустить точное число и просто оставить пустым место после слэша. 
Когда вы опускаете параметр, считается, что вы ввели ноль, и если ноль - корректное значение для параметра, команда будет работать.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!IF:D1/5//4;</code></pre>
Команда выше - пример использования расширенного окна диалога. Он имеет больше параметров, чем любая другая опция ERM, 
но вы не должны заполнить их все. Мы используем три из возможных 16. Именно для этой команды ввод 0 значит "оставить без изменений", 
но многие другие команды просто принимают значение равное нулю, что не всегда подразумевалось.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-many"></span>Многокомандность</h3>
<div class="erm-paragraph">В большинстве случаев вы можете поместить несколько команд после одного заголовка ресивера (часть перед двоеточием). 
Команды можно не разделять пробелами, но для большей читаемости рекомендуемо. В некоторых случаях, например, 
установка и управление переменными <a href="../receivers/vr/#ref-rec-vr">ресивером VR</a>, многокомандность не всегда работает корректно. 
Так, если вы используете несколько команд, убедитесь, что они выполняются правильно и дают корректный результат. 
Если одна из ваших команд показывает или устанавливает текст, вы должны поместить её последней. 
Если вы вставите любую другую команду после текста (как часть одного ресивера), вы получите ошибку.<br>
<u>Примеры</u>:
<pre class="erm-example"><code class="language-erm">!!OW:R-1/5/d-1 R-1/6/d-500; забрать кое-что у игрока
!!LE10/12/0:E1000 M^Герой учится, посетив старца...^;</code></pre></div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-comm"></span>Добавление комментариев к своему коду</h3>
<div class="erm-paragraph">Что-либо в скрипте, следующее после точки с запятой и перед следующим ресивером или триггером считается комментарием и игнорируется ERM-процессором. 
Некоторые вставляют свои комментарии в квадратные скобки для облегчения чтения скрипта и комментариев другими людьми, но это не обязательно.<br>
<u>Пример кода с комментарием</u> (после точки с запятой):
<pre class="erm-example"><code class="language-erm">ZVSE
!?LE10/23/1; Событие в x=10, y=23, уровень=1(подземелье)
!!HE-1:B0/?z5; Запомнить имя героя в текстовую переменную z5
!!IF:M^Послышался крик: "%Z5... %Z5... помоги мне!"^; показать игровое окно</code></pre>
Сообщение выше показывает имя героя для большей персональности.</div>

<h3><span class="erm-anchor" id="ref-cont-receiversol-var-use"></span>Использование переменных в ресиверах</h3>
<div class="erm-paragraph">Переменные могут быть использованы для замещения любого # или $, кроме # перед двоеточием у ресиверов <a href="../receivers/ce/#ref-rec-ce">CE</a> и <a href="../receivers/ge/#ref-rec-ge">GE</a>. 
Все другие # и $ в ресиверах, перед и после двоеточия, могут быть замещены на переменную соответствующего типа.<br>
Многие ресиверы, относящиеся к конкретной точке на карте, также могут использовать ссылки на переменные. 
А именно, первая <em>v</em>-переменная хранит X-координату объекта; вторая <em>v</em>-переменная – Y-координату объекта; в третьей <em>v</em>-переменной должен быть Уровень.<br>
<u>Пример использования ссылок на переменные</u>: (с ресивером <a href="../receivers/ob/#ref-rec-ob">OB</a>)
<pre class="erm-example"><code class="language-erm">...
!!VRv10:S25; [установить x-координату]
!!VRv11:S14; [установить y-координату]
!!VRv12:S0; [установить уровень карты]
!!OB10:S; ["отключить" объект в v10/v11/v12]</code></pre>

</div><h3><span class="erm-anchor" id="ref-cont-receiversol-instr"></span>Инструкции</h3>
<div class="erm-paragraph">Инструкции идентичны ресиверам, за исключением того, что начинаются с комбинации знаков восклицания и номера (!#) и срабатывают только раз, 
при первой загрузке карты. Большинство ресиверов работает и в качестве инструкций, но некоторые (особенно ресиверы определённого объекта) 
не работают вообще и вызывают сообщения об ошибке либо вылет карты. Инструкции выполняются один раз при загрузке карты, 
в порядке появления во временны́х событиях, независимо от триггеров, ресиверов и комментариев до и после них. 
Вы можете использовать инструкции для вызова функций и все обычные ресиверы (не-инструкции), будучи частью функции, будут работать нормально, 
однако, вы ДОЛЖНЫ включить функцию во временное событие ПЕРЕД инструкцией, вызывающей её, иначе она не сработает 
(вы не получите сообщения об ошибке, функция просто не сработает).<br>
<u>Примеры</u>:
<pre class="erm-example"><code class="language-erm">!#VRv10:S25; установить v10 на 25

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
!?FU25;
!!IF:M^Загрузка сценария...^;
!#FU25:P; показать сообщение до показа карты</code></pre>
</div>








</div>
</div>
</section>
:::

## ZVSE {#ref-cont-zvse}

:::erm
<section class="erm-reference" lang="ru">
<div><h3 class="erm-align-center">ZVSE</h3>
<div class="erm-paragraph">Эти четыре символа - заголовок любого скрипта. Благодаря им игра распознает 
скрипты и отличает их от обычных событий. При работе над своим скриптом 
запомните - ZVSE должна быть в самом начале кода, иначе… код будет 
проигнорирован.</div>
<div class="erm-paragraph">См. также:<br>
<a href="../triggers/#ref-cont-triggersol">Триггеры: общая информация</a><br>
<a href="./#ref-cont-receiversol">Ресиверы: общая информация</a><br>
</div></div>
</section>
:::

## Заголовок и режим языка {#header}

`ZVSE` — заголовок классического ERM. `ZVSE2` включает ERM 2.0, введённый в **ERA 3.0.0**: именованные локальные переменные, константы и более строгая проверка синтаксиса. Цифра 2 здесь означает режим ERM, а не ERA II. Переименование заголовка само по себе не исправляет старый скрипт: проверьте ограничения нового режима и строки.

## Четыре префикса {#prefixes}

| Запись | Назначение |
| --- | --- |
| `!?` | Объявление обработчика события или функции |
| `!!` | Команда внутри обработчика |
| `!#` | Инструкция инициализации; также объявления препроцессора `VA` и `DC` |
| `!$` | Пост-триггер, если он поддерживается данным событием |

Команда завершается `;`. Перенос строки не заменяет точку с запятой. Синтаксис регистрозависим: `!!IF` — ресивер диалогов, `!!if` — начало условного блока.

## Строение команды {#anatomy}

`!!HE-1:E?y1;` состоит из префикса `!!`, кода `HE`, селектора `-1`, двоеточия, подкоманды `E` и выходного параметра `?y1`. Селектор `-1` здесь означает текущего героя; у другого ресивера значение может быть иным. Параметры одной подкоманды разделяются `/`. В справочных сигнатурах `#`, `$` и многоточие — обозначения параметров, их нельзя буквально копировать в скрипт.

## Чтение, запись и относительное изменение {#access}

В командах, поддерживающих эти формы, `?переменная` читает значение, число или переменная записывает значение, а префикс `d` прибавляет к текущему. `E500` устанавливает опыт героя в 500; `Ed500` добавляет 500. `d0` оставляет значение прежним только там, где поддерживается относительная запись. Не все подкоманды допускают все режимы. Пустой параметр обычно означает ноль, а не «пропустить».

## Имена и константы {#declarations}

`(name:y)` выделяет локальную числовую переменную, `(name:z)` — локальную строку; далее используется `(name)`. `!#VA` объявляет параметры и переменные явно, `!#DC` — глобальную именованную константу. Не занимайте общие имена библиотеки.
```erm
ZVSE2
!#DC(MYMOD_REWARD) = 250;

!?FU(MyMod_AddReward);
!#VA(hero:x);
!!HE(hero):Ed(MYMOD_REWARD);
```

## Комментарии и текст {#comments}

Текстовые литералы заключаются в `^...^`. Обычный текст между завершённой командой и следующей ERM-командой служит комментарием. Пишите комментарий после `;` и не помещайте в него случайные начала команд. Внутри литерала действуют правила подстановки переменных; правила обычного комментария к нему не применяются.

[Строки и переменные](../variables/) · [Условия](../conditions/)

## Связанные команды и таблицы {#reference-links}

[Локальные события (LE)](../receivers/le/) · [Артефакты и ресурсы на карте (AR)](../receivers/ar/) · [Герои (HE)](../receivers/he/) · [Глобальные события (GE)](../receivers/ge/) · [Переменные и выражения (VR)](../receivers/vr/) · [Городские события (CE)](../receivers/ce/) · [Объекты карты (OB)](../receivers/ob/) · [Триггеры и события ERM](../triggers/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.4.0, +](../compatibility/#era3-v-3-4-0-l1881) — Improved ERM 2 compiler. It became possible to use named local variables and quick variables (f..t) as arrays subscripts. Syntax: (array&#91;index&#93;) or (array&#91;i&#93;). Index value is evaluated BEFORE current receiver, thus do no…
- [ERA 3.3.0, +](../compatibility/#era3-v-3-3-0-l2132) — ERM syntax can be safely beautified for all Era 3.X versions by skipping trailing ":" before ";". !!re 0/7/1; ... !!en; !!if&(heroId)=(HERO_XERON); ... !!en;
- [ERA 3.2.0, +](../compatibility/#era3-v-3-2-0-l2469) — Added support for d- syntax in function parameters. !!FU(edu_Test):Pd-200; will pass -200, previously 200
- [ERA 3.2.0, +](../compatibility/#era3-v-3-2-0-l2498) — Duplicate constant declarations with the same value are allowed from now. !#DC(TRUE) = 1; !#DC(TRUE) = 1; does not produce error !#DC(TRUE) = 3; error: constant TRUE is already defined with value 1
- [ERA 3.1.0, -](../compatibility/#era3-v-3-1-0-l3133) — Fixed ERM 2 compiler part, responsible for local z-arrays indexes allocation. Previosly !#VA(names&#91;3&#93;:z) used to allocate array of &#91;z-3, z-4, z-5&#93; (decreasing indexes). Now the appropriate array will be &#91;z-5, z-4, z-3&#93; (…
- [ERA 3.0.4, -](../compatibility/#era3-v-3-0-4-l3407) — Fixed bug: ERM compiler didn't process post-triggers.
- [ERA 3.0.1, +](../compatibility/#era3-v-3-0-1-l3469) — Added new escape sequences for string literals (^...^): '%\:' expands into ';' (usually forbidden character for literals, marking receiver end). '%\"' expands into '^' (usually forbidden character for literals, marking e…
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l3890) — Only regular ERT variables are interpolated automatically. Regular z-variables and temporal ert variables are not interpolated in receivers. It means, that !!VRz2:S^%%y5^; z2 is now really "%y5" Previously interpolation …
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l3909) — ERM interpolation (expanding variables starting with % in string literals ^...^ and ERT strings) was fully rewritten. Upper case registry for old ERM variables is supported, but deprecated. %X1 is good, but %x1 is better…
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l4047) — Introduced ERM 2.0 support for scripts, beginning with 'ZVSE2'.
- [ERA 3.0.0, +](../compatibility/#era3-v-3-0-0-l4074) — Added new event "OnDetermineMonInfoDlgUpgrade", occured, when game determines wether to show upgrade button in monster info dialog. Parameters: MonType, UpgradedType or -1, Town ID or -1, Hero ID or -1. -1 for UpgradedTy…
<!-- ERA3-GENERATED:END -->
