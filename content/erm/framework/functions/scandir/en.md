---
{"title":"ScanDir","summary":"Clears a supplied string array and fills names excluding . and ... itemsType is SCAN_ (files and directories by default); fullPaths prefixes the path (FALSE). The early exit after FindFirstFileA does not restore v1 in this snapshot.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Clears a supplied string array and fills names excluding . and ... itemsType is SCAN_* (files and directories by default); fullPaths prefixes the path (FALSE). The early exit after FindFirstFileA does not restore v1 in this snapshot.

## Call contract {#signature}

```erm
!!FU(ScanDir):P(dirPathPtr)/(fileList)/(itemsType)/(fullPaths);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dirPathPtr` | input |
| x2 | `fileList` | input |
| x3 | `itemsType` | input |
| x4 | `fullPaths` | input |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!VR(savedV1:y):Sv1;
!#VA(foundData[SIZEOF_WIN32_FIND_DATA_IN_INTS]:y);

!!SN:M(fileList)/0;

!!SN:B?(foundData)/?(foundDataAddr:y);
!!VR(fileAttrsAddr:y):S(foundDataAddr) +(STRUCT_WIN32_FIND_DATA_ATTRS);
!!VR(fileNameBuf:y):S(foundDataAddr) +(STRUCT_WIN32_FIND_DATA_FILENAME);

!!SN:F^`.

Export calls: `FindClose`, `FindFirstFileA`, `FindNextFileA`, `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1870–1931, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [FILE_ATTRIBUTE_DIRECTORY](../../constants/win32-api/#const-file-attribute-directory) · [INVALID_HANDLE_VALUE](../../constants/win32-api/#const-invalid-handle-value) · [M_STR](../../constants/erm-commands/#const-m-str) · [SCAN_DIRS_ONLY](../../constants/special-enums/#const-scan-dirs-only) · [SCAN_FILES_ONLY](../../constants/special-enums/#const-scan-files-only) · [STRUCT_WIN32_FIND_DATA_ATTRS](../../constants/game-structures/#const-struct-win32-find-data-attrs) · [STRUCT_WIN32_FIND_DATA_FILENAME](../../constants/game-structures/#const-struct-win32-find-data-filename) · [TRUE](../../constants/universal/#const-true)
