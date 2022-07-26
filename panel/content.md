# Sean's recommended Mac settings

## Finder

- Show "Quit" menu item

  ```sh
  defaults write "com.apple.finder" "QuitMenuItem" -bool true
  ```

- Hide desktop

  ```sh
  defaults write "com.apple.finder" "CreateDesktop" -bool false
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

- Set black wallpaper

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

- Mouse: Install [Mos](https://mos.caldis.me/) (smooth scrolling)

  ```sh
  brew install --cask "mos"
  open "/Applications/Mos.app"
  ```

- Mouse: Install Middleclick (triple-tap to middle-click)

  ```sh
  brew install --cask "middleclick"
  open "/Applications/MiddleClick.app"
  ```

## Text

- Turn off auto-capitalization

- Turn off smart quotes

- Turn off double-space to period shortcut

- Hold down to repeat

## Shortcuts & Gestures

- <kbd>@~Y</kbd> for Merge Windows

- <kbd>@$V</kbd> for Paste and Match Style

- <kbd>@$S</kbd> Back, <kbd>$@D</kbd> Forward

- <kbd>^Spc</kbd> Show/Exit Tab Overview

- <kbd>^$Click</kbd> anywhere to move window
  [[?](https://apple.stackexchange.com/a/365860)]

  ```sh
  defaults write "NSGlobalDomain" "NSWindowShouldDragOnGesture" -bool true
  ```

- <kbd>^Right Click</kbd> for Mission Control

  ```sh
  defaults write com.apple.symbolichotkeys AppleSymbolicHotKeys -dict-add \
    38 '
      <dict>
        <key>enabled</key><true/>
        <key>value</key><dict>
          <key>type</key><string>button</string>
          <key>parameters</key>
          <array>
            <integer>2</integer>
            <integer>2</integer>
            <integer>1048576</integer>
          </array>
        </dict>
      </dict>
    '  \
    40 '
      <dict>
        <key>enabled</key><true/>
        <key>value</key><dict>
          <key>type</key><string>button</string>
          <key>parameters</key>
          <array>
            <integer>2</integer>
            <integer>2</integer>
            <integer>1179648</integer>
          </array>
        </dict>
      </dict>
    '
  # https://zameermanji.com/blog/2021/6/8/applying-com-apple-symbolichotkeys-changes-instantaneously/
  /System/Library/PrivateFrameworks/SystemAdministration.framework/Resources/activateSettings -u
  ```

## Calendar

- Remove "US Holidays" Calendar

## Homebrew

- Install Homebrew

  ```sh
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

## Dev tooling

- Install Visual Studio Code

  ```sh
  brew install visual-studio-code
  ```

- Install fish shell

  ```sh
  brew install fish
  echo 'eval (/opt/homebrew/bin/brew shellenv)' > ~/.config/fish/conf.d/homebrew.fish
  ```

- Set fish shell to be the default

- Install Deno

  ```sh
  brew install deno
  ```

- Install Node

  ```sh
  brew install node
  ```

## Terminal

- useOptionAsMetaKey

- single-line, blinking cursor

## Git

- Configure display name globally

  ```sh
  git config --global user.name "$(id -F)"
  ```

- Install `gh`

  ```sh
  brew install gh
  ```

- Install [GitUp](https://gitup.co/)

  ```sh
  brew install --cask "gitup"
  ```

- Log into GitHub using `gh`

  ```sh
  gh auth login
  ```

- Set up a global gitignore, ignoring `.DS_Store` files

  ```sh
  set -e
  echo '.DS_Store' > ~/.gitignore
  git config --global core.excludesfile ~/.gitignore
  ```

## Work

- Install Google Chrome

  ```sh
  brew install --cask "google-chrome"
  open "/Applications/Google Chrome.app"
  ```

- Install Zoom

  ```sh
  brew install --cask "zoom"
  open "/Applications/zoom.us.app"
  ```

## Play

- Install Spotify

  ```sh
  brew install --cask "spotify"
  open "/Applications/Spotify.app"
  ```
