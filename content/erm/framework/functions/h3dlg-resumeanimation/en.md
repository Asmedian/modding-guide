---
{"title":"H3Dlg_ResumeAnimation","summary":"Stops/resumes current dialog animation through native functions. Keep calls balanced.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Stops/resumes current dialog animation through native functions. Keep calls balanced.

## Call contract {#signature}

```erm
!!FU(H3Dlg_ResumeAnimation):P;
```

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2026–2029, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
