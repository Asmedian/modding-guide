---
{"title":"ERM Hooker — собственные события","summary":"Установка, контекст регистров и удаление хуков исполняемого кода.","translationStatus":"reviewed"}
---

## Когда нужен хук {#purpose}

erm_hooker.era связывает точку машинного кода с функцией ERM. Сначала проверьте каталог событий: готовый On* обычно даёт устойчивее определённый контракт. Адрес хука должен быть подтверждён для конкретного EXE и плагинов; нельзя выбирать произвольный байт посреди инструкции.

## Постановка и удаление {#api}

SetHook(address, handler) возвращает ненулевой результат при успехе; уже занятый адрес вызывает отказ. UnsetHook(address) удаляет существующий хук и возвращает признак его наличия. Вызываются через SN:E с соглашением 1. Обёртки ниже не выбирают адрес: его передаёт проверивший конкретную сборку вызывающий код.

## Обёртки с проверкой экспорта {#example}

```erm
ZVSE2
!?FU(MyMod_SetHook);
!#VA(address:x) (handler:x) (success:x);
!!VR(success):S0;
!!SN:L^EraPlugins\erm_hooker.era^/?(module:y);
!!FU&(module)=0:E;
!!SN:A(module)/^SetHook^/?(setHook:y);
!!FU&(setHook)=0:E;
!!VR(savedV1:y):Sv1;
!!SN:E(setHook)/1/(address)/(handler);
!!VR(success):Sv1;
!!VRv1:S(savedV1);

!?FU(MyMod_UnsetHook);
!#VA(address:x) (removed:x);
!!VR(removed):S0;
!!SN:L^EraPlugins\erm_hooker.era^/?(module:y);
!!FU&(module)=0:E;
!!SN:A(module)/^UnsetHook^/?(unsetHook:y);
!!FU&(unsetHook)=0:E;
!!VR(savedV1:y):Sv1;
!!SN:E(unsetHook)/1/(address);
!!VR(removed):Sv1;
!!VRv1:S(savedV1);
```

## Контекст обработчика {#context}

`!!SN:X?(context:y)/?(executeOriginal:y);` читает адрес контекста и разрешение выполнить перекрытый код, по умолчанию 1. Смещения по 4 байта: EDI 0, ESI 4, EBP 8, ESP 12, EBX 16, EDX 20, ECX 24, EAX 28, RetAddr 32. Если отключить выполнение оригинала, нужно корректно задать RetAddr. Этот порядок отличается от некоторых структур patcher_x86; не смешивайте их.

## Жизненный цикл и владение {#lifetime}

Сохраняйте признак успешной установки и удаляйте только принадлежащий вашему моду хук. Plugin автоматически снимает хуки при старте, загрузке и выходе (исторически ERA 2.55+). Для новых сборок установка в OnGameEnter учитывает сетевую перезагрузку; поддержка исправлена в ERA 3.9.14. Версия плагина 3.0 в ERA 3.9.15 добавила защиту перекрытия и восстановления изменённых другим кодом байтов. PrintHooks формирует Debug/Era/erm hooks.txt.

## Контракт плагина {#evidence}

API описан в [документации Berserker, воспроизведённой в сообщении](https://www.h3wog.com/archiver/tid-58865.html); контекст также подтверждается [примером igrik](https://wforum.heroes35.net/showthread.php?tid=5118&pid=98296#pid98296). Обновления жизненного цикла сверены с предоставленным changelog ERA.
