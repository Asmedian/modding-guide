---
{"title":"ReadIniInts","summary":"После пути и секции принимает до 4 троек key/?value/default. Пустая прочитанная строка тоже заменяется default. ReadIniInts преобразует непустой текст в целое; это не отдельная проверка корректности числа.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

После пути и секции принимает до 4 троек key/?value/default. Пустая прочитанная строка тоже заменяется default. ReadIniInts преобразует непустой текст в целое; это не отдельная проверка корректности числа.

## Контракт вызова {#signature}

```erm
!!FU(ReadIniInts):P(filePathPtr)/(sectionNamePtr)/(firstKeyPtr)/(firstValue)/(firstValueDefault);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `filePathPtr` | вход |
| x2 | `sectionNamePtr` | вход |
| x3 | `firstKeyPtr` | вход |
| x4 | `firstValue` | вход |
| x5 | `firstValueDefault` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: —.

  !!if&(valueStr)=^`, `s^/^`, `s^;
  !!FU:E;
!!en;

!!VR(numVariadicArgs:y):S(numArgs) -(@firstKeyPtr) +1;
!!VR(numTripples:y):S(numVariadicArgs) :3;

!!VRt:S(numVariadicArgs) %3;

!!if&t<>0;
  !!SN:F^`.

Вызовы экспорта: `ReadStrFromIni`, `ShowErmError`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1736–1777. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[HERO_ORRIN](../../constants/heroes/#const-hero-orrin) · [HERO_XERON](../../constants/heroes/#const-hero-xeron)
