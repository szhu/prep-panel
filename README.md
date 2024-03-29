# Prep Panel

Prep Panel is a **portable**, **forkable**, **Markdown-based** settings panel
for **changing hidden settings** or for **interactively provisioning a new
computer**.

The panel framework can be used on any OS. The prep scripts in this repo are for
setting up a Mac to my personal preferences.

<img width="915" alt="Screenshot" src="https://user-images.githubusercontent.com/1570168/212289414-13594e26-f651-456d-80c1-1e991b5f7ada.png">

<details><summary>View full panel screenshot</summary>

<img width="780.5" src="https://user-images.githubusercontent.com/1570168/212290018-da76b70f-16d5-431f-af12-01a668b3f2b9.png">

</details>

⏵ [View panel Markdown source](panel/content.md)

## What's it for?

Prep Panel was originally built for two main use cases:

**Hidden settings manager.**\
Use Prep Panel as a quick way to change hidden settings. It is inspired by these
tools, most of which I have used before:

- [TinkerTool],
- [macos-defaults.com]
- [defaults-write.com]
- [Secrets] (discontinued)
- [Hidden Settings Preference Pane] (discontinued).

[macos-defaults.com]: https://macos-defaults.com/
[tinkertool]: https://www.bresink.com/osx/TinkerTool.html
[secrets]: https://code.google.com/p/blacktree-secrets/
[defaults-write.com]: http://defaults-write.com/
[hidden settings preference pane]: https://hasseg.org/hiddenSettingsPref/

**Interactive provisioning.**\
Use Prep Panel as a quick way to apply your preferences to a new computer or user
account. This use case is similar to bootstrapping scripts and tools like [Vagrant]
and [Brewfiles].

[vagrant]: https://www.vagrantup.com
[brewfiles]: https://github.com/Homebrew/homebrew-bundle

<details>
<summary>This tool has some advantages compared to the alternatives:</summary>

- **Self-contained.** Unlike other similar tools, this tool doesn't require the
  Mac to have Node, the Xcode Command Line Tools, or anything else installed,
  and it won't leave your Mac with anything new installed (except specifically
  what you request). Its only dependency is [Deno](https://deno.land), which is
  installed into the current directory, not any global location, as part of the
  instructions below. This also makes this app easily forkable.

- **Simple source code.** The code for the app is written in HTML/CSS/JS, making
  it easier to maintain than a native app. This also opens up the potential
  other applications, for example adapting this into a website.

- **Graphical!** A bootstrap script is often an all-or-nothing approach. With
  this tool, you can click to toggle just the settings you want. The app is
  designed to be easily explorable, and explains what it does. The design is
  modeled after the upcoming macOS Ventura System Settings app.

- **Markdown fallback.** If the app doesn't work in the future for some reason,
  the content is still easily accessible. Here's
  [the source code for the control panel](panel/content.md) -- it's just a
  Markdown doc listing the commands you can run to toggle each setting!

- **Compatible with interactive commands.** Even though the UI is graphical, all
  commands are run in the terminal where you started the server. This makes it
  have nearly perfect compatibility with anything you would normally run in a
  terminal: If a program needs you to press the cursor keys to make a selection,
  or requires you to input a password, you can do that perfectly well.

</details>

## Instructions

To run the panel:

1. Download the repo as zip.
2. Unzip.
3. Open a terminal and `cd` to the unzipped folder.
4. Run: `utils/install-deno.sh`
5. Run: `panel/serve.ts`

## Credits

[@szhu](https://github.com/szhu).
