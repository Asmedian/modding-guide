---
{"title":"SplitMix32","summary":"P?seed/?result выдаёт int32; P?seed/min/max/?result — число во включительном диапазоне. Seed изменяется и должен передаваться через ?. Не использует состояние обычного VR:R.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

P?seed/?result выдаёт int32; P?seed/min/max/?result — число во включительном диапазоне. Seed изменяется и должен передаваться через ?. Не использует состояние обычного VR:R.

## Контракт вызова {#signature}

```erm
!!FU(SplitMix32):P(seed)/(min)/(max)/(result);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `seed` | выход / изменяемый |
| x2 | `min` | вход |
| x3 | `max` | вход |
| x4 | `result` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: —.
  !!FU:E;
!!en;

!!if&(numArgs)=2;
  !!VR(minValue:y):S(INT_MIN);
  !!VR(maxValue:y):S(INT_MAX);
  !!VR(resultPtr:y):S(@min);
!!el;
  !!VR(minValue:y):S(min);
  !!VR(maxValue:y):S(max);
  !!VR(resultPtr:y):S(@result);
!!en;

!!VR(savedV1:y):Sv1;
!!SN:F^`.

Вызовы экспорта: `ShowErmError`, `SplitMix32`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1376–1410. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[INT_MAX](../../constants/data-types/#const-int-max) · [INT_MIN](../../constants/data-types/#const-int-min)
