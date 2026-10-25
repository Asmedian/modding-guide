---
{"title":"Learning ERM","summary":"Learn ERM with AI: give the model the reference map, describe your task and test the result in the game.","translationStatus":"reviewed"}
---

## Learn ERM with AI {#ai}

AI can help you understand ERM, find the right command, write a working script or prepare the files for an entire mod. This approach has been tried with capable Claude and GPT models. A precise task and an accessible reference make the result more useful.

Include the full link to the [LLM section](https://asmedian.github.io/modding-guide/en/docs/llm-map/) in your request:

```text
https://asmedian.github.io/modding-guide/en/docs/llm-map/
```

The map leads to ERA documentation, complete ERM contracts, plugin development and Wiki resources. A model that can retrieve links can select the necessary small files. If it cannot open links, attach or paste the selected catalog files instead.

## From an idea to a working mod {#workflow}

1. Specify your ERA version, desired behavior, event timing and compatibility requirements. Include the existing script or mod structure when available.
2. Ask the AI to read the map, locate the relevant commands and tables, then explain its solution with links to specific reference pages.
3. Start with a minimal script. Request filenames, installation paths and test steps. For an entire mod, list required resources and dependencies separately.
4. Test on a disposable map. Give the AI the exact error, relevant code and reproduction steps; refine the solution until it behaves as intended.

Generated code needs testing in your game build. Reading source code and documentation does not mean a script has been executed. Ask the model to distinguish verified reference facts from assumptions.

## Example prompts {#examples}

Replace the text in square brackets with your requirements.

:::erm
<div class="learn-examples">
<details class="learn-example"><summary>Understand ERM</summary><p>Use this reference: https://asmedian.github.io/modding-guide/en/docs/llm-map/ . Explain [command or code] to a beginner: when it runs, its parameters and variables, and its limitations. Read the complete contract and link specific sections.</p></details>
<details class="learn-example"><summary>Write a script</summary><p>Use this reference: https://asmedian.github.io/modding-guide/en/docs/llm-map/ . ERA [version]. Required behavior: [behavior and conditions]. Find triggers, commands and IDs; write a minimal script, specify its file path, explain variables and provide in-game test steps. State assumptions and compatibility limits.</p></details>
<details class="learn-example"><summary>Fix a bug</summary><p>Use this reference: https://asmedian.github.io/modding-guide/en/docs/llm-map/ . ERA [version]. Expected: [result]. Actual: [result or exact error]. Reproduction: [steps]. Script: [code]. Find the cause using the documented contracts, propose a minimal fix and explain how to test it.</p></details>
<details class="learn-example"><summary>Prepare an entire mod</summary><p>Use this reference: https://asmedian.github.io/modding-guide/en/docs/llm-map/ . For ERA [version], I need this mod: [description]. Read the necessary ERM, Docs, Wiki and Plugins topics. Provide the folder structure, text file contents, resources with exact filenames and sources, dependencies and a test plan. Clarify missing requirements first; identify anything that requires running the game.</p></details>
</div>
:::
