---
{"title":"WriteIniInts","summary":"После пути и секции принимает до 7 пар key/value. Записывает только в кэш; требуется SaveIni. Для WriteIniInts значения преобразуются в десятичный текст, для WriteIniStrings передаются строки.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

После пути и секции принимает до 7 пар key/value. Записывает только в кэш; требуется SaveIni. Для WriteIniInts значения преобразуются в десятичный текст, для WriteIniStrings передаются строки.

## Контракт вызова {#signature}

```erm
!!FU(WriteIniInts):P(filePathPtr)/(sectionNamePtr)/(firstKeyPtr)/(firstValue);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `filePathPtr` | вход |
| x2 | `sectionNamePtr` | вход |
| x3 | `firstKeyPtr` | вход |
| x4 | `firstValue` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: —.
!#VA(filePathPtr:x);    Absolute or relative path to ini file
!#VA(sectionNamePtr:x); Section name in ini file.
!#VA(firstKeyPtr:x);    ... Up to 7 key, value pairs to write.
!#VA(firstValue:x);

!!FU:A?(numArgs:y);

!!if&(numArgs)<(@firstValue);
  !!SN:F^`, `s^;
  !!FU:E;
!!en;

!!VR(numKeyValueArgs:y):S(numArgs) -(@firstKeyPtr) +1;
!!VR(numPairs:y):S(numKeyValueArgs) :2;

!!VRt:S(numKeyValueArgs) %2;

!!if&t<>0;
  !!SN:F^`.

Вызовы экспорта: `ShowErmError`, `WriteStrToIni`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1630–1662. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[HERO_ORRIN](../../constants/heroes/#const-hero-orrin) · [HERO_XERON](../../constants/heroes/#const-hero-xeron)
