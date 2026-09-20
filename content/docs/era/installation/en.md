---
{"title":"Installing ERA","summary":"Official installation, update, and removal steps for Heroes Launcher and manual setups.","translationStatus":"reviewed"}
---

## Game installation {#installation}

The current package is available from the [ERA releases](https://github.com/ERA-Projects/era-project-eng/releases/latest). These steps follow the [official installation guide](https://github.com/ERA-Projects/era-project-eng/blob/main/README.md#-game-installation).

### With Heroes Launcher {#launcher-install}

1. [Download Heroes Launcher](https://github.com/HeroesLauncher/heroeslauncher/releases) and install it outside system directories.
2. Open its ERA tab and select a working Heroes III version based on Shadow of Death: SoD, Complete, MOP, WoG, or HotA.
3. Choose the installation language and destination directory, then wait for the download and extraction.
4. Set the language and resolution under HD Mod Settings. The guide recommends `stretchable 32-bit OpenGL by Verok`; adjust optional tweaks if needed.
5. Start the game with Play in Heroes Launcher.

### Manually {#manual-install}

1. Prepare a working Heroes III installation based on Shadow of Death (SoD, Complete, MOP, WoG, or HotA).
2. Create a new directory. Copy every `.dll` from the game root, the `MP3` directory, and the `Data` directory containing `H3bitmap.lod`, `H3sprite.lod`, `Heroes3.snd`, and `VIDEO.VID`. Copy `Maps` if wanted.
3. Download the [latest ERA release](https://github.com/ERA-Projects/era-project-eng/releases/latest) and extract it into that directory.
4. Run `Tools/install.bat` to initialize the mod set, or `Tools/Mod Manager/mmanager.cmd` to select it yourself. The `WOG` mod is required.
5. Configure HD Mod with `HD_Launcher.exe` and launch `h3era HD.exe`.

## Updating the game {#update}

The [official update guide](https://github.com/ERA-Projects/era-project-eng/blob/main/README.md#-updating-the-game) recommends Heroes Launcher: open the gear menu, select Check for Updates, and wait for installation to finish.

For a manual update, download the current release. If files were removed from any mods, delete the affected mod directories first. Then extract the new archive over the installed game and replace outdated files.

## Uninstallation {#uninstall}

In Heroes Launcher, open the gear menu, choose Uninstall, optionally keep the base game files, and confirm. For a manual installation, delete the installed game directory. Both methods are described in the [official README](https://github.com/ERA-Projects/era-project-eng/blob/main/README.md).
