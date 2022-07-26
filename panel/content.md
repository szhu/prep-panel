# Sean's recommended Mac settings

## Finder

- Show "Quit" menu item

  ```sh
  defaults write "com.apple.finder" "QuitMenuItem" -bool true
  ```

- Hide tags in sidebar

  ```sh
  defaults write "com.apple.finder" "ShowRecentTags" -int 0
  ```

- Show file extensions

  ```sh
  defaults write "NSGlobalDomain" "AppleShowAllExtensions" -int 1
  ```

- Desktop: Apply preferred view settings

  ```sh
  defaults write "com.apple.finder" "DesktopViewSettings" -dict "'{
        GroupBy = \"Date Created\";
        IconViewSettings =         {
            arrangeBy = dateCreated;
            backgroundColorBlue = 1;
            backgroundColorGreen = 1;
            backgroundColorRed = 1;
            backgroundType = 0;
            gridOffsetX = 0;
            gridOffsetY = 0;
            gridSpacing = 54;
            iconSize = 48;
            labelOnBottom = 0;
            showIconPreview = 1;
            showItemInfo = 0;
            textSize = 12;
            viewOptionsVersion = 1;
        };
    };'"
  ```

- Show Home in sidebar

- Hide AirDrop in sidebar

- To apply changes immediately: <button>Quit Finder</button>

  ```sh
  osascript -e 'quit app id "com.apple.finder"'
  ```

## Dock

- Remove default items

  ```sh
  defaults delete "com.apple.Dock" "persistent-apps"
  ```

- Don't show recents

- To apply changes immediately: <button>Quit Dock</button>

  ```sh
  osascript -e 'quit app id "com.apple.Dock"'
  ```

## System UI

- Show Stage Manager in menu bar

- Remove Spotlight from menu bar

- Remove Wi-Fi from menu bar

- Quick Note in left corner

## Appearance

- Change accent color to blue

  ```sh
  defaults write "NSGlobalDomain" "AppleAccentColor" -int 4
  ```

## Notifications

- Turn Reminders badge off

## iCloud

- Sign into iCloud

  ```sh
  open "/System/Library/PreferencePanes/AppleIDPrefPane.prefPane"
  ```

## Security

- Add Touch ID

  ```sh
  open "/System/Library/PreferencePanes/TouchID.prefPane"
  ```

- Turn on FileVault

  ```sh
  open "x-apple.systempreferences:com.apple.preference.security?FDE"
  ```

- Add lock screen message

## Keyboard, Trackpad, Mouse

These settings are not accurate.

- Trackpad: Use light click strength

  ```sh
  open "/System/Library/PreferencePanes/Trackpad.prefPane"
  ```

- Trackpad: Turn off force touch

  ```sh
  defaults write "NSGlobalDomain" "com.apple.trackpad.forceClick" -int 0
  ```

- Keyboard: Set backlight to minimum

  ```sh
  open "/System/Library/PreferencePanes/Keyboard.prefPane"
  ```

## Shortcuts & Gestures

- <kbd>@~Y</kbd> for Merge Windows

- <kbd>@$V</kbd> for Paste and Match Style

- <kbd>@$S</kbd> Back, <kbd>$@D</kbd> Forward

- <kbd>^Spc</kbd> Show/Exit Tab Overview

## Calendar

- Remove "US Holidays" Calendar

## Third-party Apps

- Install Homebrew

  ```sh
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

- Install Visual Studio Code

  ```sh
  brew install visual-studio-code
  ```

## Git

- Configure display name globally

  ```sh
  git config --global user.name "$(id -F)"
  ```

- Install `gh` and GitUp

  ```sh
  brew install gh
  brew install --cask gitup
  ```

- Log into GitHub using `gh`

  ```sh
  gh auth login
  ```
