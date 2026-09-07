---
{"title":"SN:F — вызов экспорта","summary":"SN:F находит и кэширует GetKeyState. Результат немедленно переносится из v1 в выходной аргумент, затем v1 восстанавливается. Имена экспортов и ABI нельзя выбирать по внешнему сходству.","translationStatus":"reviewed"}
---

## Задача {#purpose}

SN:F находит и кэширует GetKeyState. Результат немедленно переносится из v1 в выходной аргумент, затем v1 восстанавливается. Имена экспортов и ABI нельзя выбирать по внешнему сходству.

## Пример {#code}

```erm
ZVSE2
!?FU(MyMod_ReadShift);
!#VA(pressed:x);
!!VR(savedV1:y):Sv1;
!!SN:F^GetKeyState^/160;
!!VR(pressed):Sv1 Sd>>15 &1;
!!VRv1:S(savedV1);
```

## Параметры и результат {#contract}

Вызывайте `!!FU(MyMod_ReadShift):P?(pressed:y);`. Требуются Windows и ERA. Обработчик интерфейса локален; состояние клавиатуры не следует использовать как автоматически синхронизированную механику сети. Пример сверён с исходником, запуск в игре отдельно не выполнен.

## Далее {#related}

[SN](../../receivers/sn/) · [Функция Framework](../../framework/functions/getkeymodsstate/) · [Другие примеры](../)

## Связанные команды и таблицы {#reference-links}

[Средства ERA, память и звук (SN)](../../receivers/sn/#command-l-library-handle-ahandle-export-address) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-d-o-x-y-level) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-eaddress-convention-args) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-f-export-args) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-g-label-q) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-h-monname-h-secskill) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-istring-result-t-key-result-name-value) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-m-m-m-index-m-address-index) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-r-old-new) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Отладка и совместимость ERM](../../compatibility/) · [Музыка MP3 (MP)](../../receivers/mp/) · [Найм существ (RD)](../../receivers/rd/) · [Общие игровые операции (UN)](../../receivers/un/#command-q-1-r) · [Условия и ветвления](../../conditions/) · [Циклы: re, br, co и DO](../../loops/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-h-spec-h-art-h-spell) · [Таблица существ](../../tables/creatures/) · [Общие игровые операции (UN)](../../receivers/un/#command-g0-skill-text-z-g1-monster-text-z-g2-hero-field-value) · [Таблица объектов в игре](../../tables/objects/) · [Объекты карты (OB)](../../receivers/ob/#command-b-h) · [Подсказки типов объектов (HT)](../../receivers/ht/) · [Вторичные навыки](../../tables/secondary-skills/) · [Таблица героев](../../tables/heroes/) · [Вызовы функций (FU)](../../receivers/fu/#command-e) · [Триггеры и события ERM](../../triggers/) · [Тексты: ERT, ERS и JSON](../../tables/text-resources/) · [Переменные и выражения (VR)](../../receivers/vr/#command-mask-or-xmask-sd-bits-sd-bits) · [Данные клеток карты (PO)](../../receivers/po/)
