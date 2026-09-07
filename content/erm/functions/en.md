---
{"title":"Functions and parameters","summary":"FU declarations, x arguments, returning through GET arguments, and local variables.","translationStatus":"reviewed"}
---

## Declaration and call {#call}

`!?FU(MyMod_Name);` declares a function and `!!FU(MyMod_Name):P...;` calls it. Named functions reduce numeric-ID collisions, but identical names still combine handlers. Use a mod-specific prefix. Classic `!?FU12345;` and `!!FU12345:P;` remain relevant when reading older scripts.

## Argument order {#arguments}

`P` arguments populate `x1..x16` in order. `!#VA(value:x) (result:x);` gives readable names to the first two slots. `!!FU:A?variable;` returns the actual number of supplied arguments. Set optional-argument defaults explicitly using this count; do not rely on incidental contents of omitted slots.

## Output parameters {#return}

Pass a variable with `?` to receive the final value of the corresponding `x` parameter. The function assigns its result using `VR`. `FU:Sindex/?type` distinguishes GET (0), SET (1), and relative assignment (2). The function must define which contract it supports.
```erm
ZVSE2
!?FU(MyMod_Double);
!#VA(value:x) (result:x);
!!VR(result):S(value) *2;

!?FU(OnAfterErmInstructions);
!!FU(MyMod_Double):P21/?(answer:y);
!!IF:M^%(answer)^;
```

## Local state and nested calls {#scope}

Local `y` variables belong to a call. A nested function must not treat the caller’s local index as global storage. Pass values as arguments. String pointers and temporary arrays have their own lifetimes; do not retain an address to a temporary result beyond its owning context.

## Exit and network calls {#exit-network}

`!!FU:E;` exits the current handler or function. `FU:D` invokes a function on the network opponent’s computer and is not equivalent to local `P`. Passing arguments does not automatically synchronize all globals and gameplay changes. Network scenarios must account for `IP` and the event’s execution side.

[FU receiver](../receivers/fu/) · [Framework](../framework/functions/)

## Related commands and tables {#reference-links}

[Repeated function calls (DO)](../receivers/do/#command-p-1-15) · [Function calls (FU)](../receivers/fu/) · [ERM debugging and compatibility](../compatibility/) · [Repeated function calls (DO)](../receivers/do/) · [Loops: re, br, co, and DO](../loops/) · [Function calls (FU)](../receivers/fu/#command-a) · [Function calls (FU)](../receivers/fu/#command-c) · [Function calls (FU)](../receivers/fu/#command-d-1-16) · [Function calls (FU)](../receivers/fu/#command-e) · [Function calls (FU)](../receivers/fu/#command-p-1-16) · [Function calls (FU)](../receivers/fu/#command-s) · [Function handler (FU)](../triggers/fu/) · [Network synchronization (IP)](../receivers/ip/#command-f-1-2-v-1-2) · [Network synchronization (IP)](../receivers/ip/)
