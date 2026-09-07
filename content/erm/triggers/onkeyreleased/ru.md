---
{"title":"Отпускание клавиши (OnKeyReleased)","summary":"x1 — код клавиши; x2 — блокировка штатной реакции (0/1, изменяемый). Третий аргумент в контракте движка не заявлен. Не переносите сюда смысл x3 из OnKeyPressed.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1 — код клавиши; x2 — блокировка штатной реакции (0/1, изменяемый). Третий аргумент в контракте движка не заявлен. Не переносите сюда смысл x3 из OnKeyPressed.

## Объявление {#declaration}

```erm
!?FU(OnKeyReleased);
```

## Идентификатор и совместимость {#identity}

ID `77053`; регистрация `TRIGGER_KEY_RELEASED`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1221) — Added new "OnKeyReleased" event, occuring on keyboard key release. Parameters: keyCode, preventDefault. Example: !?FU(OnKeyReleased); !#VA(key:x) (preventDefault:x); !!IF:M^Released key %(key)^;
- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1230) — Added new events to Era Erm Framework: "OnKeyReleased_AdvMap", "OnKeyReleased_Battle", "OnKeyReleased_HeroScreen", "OnKeyReleased_HeroMeetingScreen", "OnKeyReleased_Town", occuring right after "OnKeyReleased" events and …
<!-- ERA3-GENERATED:END -->
