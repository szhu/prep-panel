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

- <button>Clear all apps</button>

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

- Keyboard: Hold to repeat

  ```sh
  defaults write "NSGlobalDomain" "ApplePressAndHoldEnabled" -bool NO
  ```

## Text

- Turn off auto-capitalization

- Turn off smart quotes

- Turn off double-space to period shortcut

- Hold down to repeat

## Shortcuts & Gestures

- Edit Menu

  ```sh
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Edit\033Paste and Match Style" '"@$v"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Edit\033Emoji & Symbols" '"^$ "';
  ```

- Left-hand-only shortcuts for Tab Overview

  ```sh
  ## Most apps
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Show All Tabs" '"^`"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Exit Tab Overview" '"^`"';
  ##
  ## Safari
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Show Tab Overview" '"^`"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Hide Tab Overview" '"^`"';

  ```

- Left-hand-only shortcuts for Back/Forward

  ```sh
  ## Most browsers
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033History\033Back" '"@$s"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033History\033Forward" '"@$d"';
  ## Prevents another Safari shortcut from overriding it
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Bookmarks\033Bookmark All Tabs…" '"@~$d"';
  ##
  ## Finder
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Go\033Back" '"@$s"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Go\033Forward" '"@$d"';

  ```

- Merge Windows

  ```sh
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Merge All Windows" '"@$y"';
  ```

- Window tiling shortcuts (directional, using regular keys)

  ```sh
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move Window to Left Side of Screen" '"~^["';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move Window to Right Side of Screen" '"~^]"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Tile Window to Left of Screen" '"@~^["';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Tile Window to Right of Screen" '"@~^]"';
  ##
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Revert" "~^'";
  # defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Zoom All" '"~^$="';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Zoom" '"~^="';
  ```

- Window tiling shortcuts (directional, using arrow keys)

  ```sh
  ## The arrow key shortcuts don't always work for some reason.
  ##
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move Window to Left Side of Screen" '"~^←"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move Window to Right Side of Screen" '"~^→"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Tile Window to Left of Screen" '"@~^←"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Tile Window to Right of Screen" '"@~^→"';
  ##
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Revert" "~^↓";
  # defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Zoom All" '"~^$↑"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Zoom" '"~^↑"';
  ```

- Window tiling shortcuts (logical)

  ```sh
  ## The arrow key shortcuts don't always work for some reason.
  ##
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move Window to Left Side of Screen" '"~^←"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move Window to Right Side of Screen" '"~^→"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Tile Window to Left of Screen" '"@~^$←"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Tile Window to Right of Screen" '"@~^$→"';
  ##
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Revert" "~^'";
  # defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Zoom All" '"~^$↩"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Zoom" '"~^↩"';
  ```

- Safari

  ```sh
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Develop\033Show Snippet Editor" '"@~\\U21a9"';
  ```

- Keynote, Numbers, Pages

  ```sh
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033File\033Export To\033PDF…" '"@$e"';
  ##
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Format\033Font\033Strikethrough" '"@$x"';
  ##
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Format\033Font\033Bigger" '"@$."';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Format\033Font\033Smaller" '"@$,"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Zoom\033Zoom In" '"@="';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Zoom\033Zoom Out" '"@-"';
  ##
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Arrange\033Align Objects\033Left" '"@~["';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Arrange\033Align Objects\033Top" '"@~,"';
  ##
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Insert\033Line\033Straight Connection Line" '"@l"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Insert\033Shape\033Rectangle" '"@r"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Insert\033Shape\033Rounded Rectangle" '"@$r"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Insert\033Text Box" '"@↩"';
  ##
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Inspector\033Hide Inspector" '"@\\\\"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Inspector\033Show Inspector" '"@\\\\"';
  ```

- Check that shortcuts have been set correctly: <button>Open Keyboard
  Settings</button>

  ```sh
  osascript -e 'quit app id "com.apple.systempreferences"' || true
  sleep 0.5
  open '/System/Library/PreferencePanes/Keyboard.prefPane'
  ```

- <button>Reset all global custom keyboard shortcuts</button>

  ```sh
  defaults delete "NSGlobalDomain" "NSUserKeyEquivalents"
  ```

- <kbd>^$</kbd>-click anywhere in a window to move it
  [[?]](https://apple.stackexchange.com/a/365860)

  ```sh
  defaults write "NSGlobalDomain" "NSWindowShouldDragOnGesture" -bool true
  ```

- <kbd>^</kbd>-Right-click for Mission Control

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

- Change default branch name to `main`

  ```sh
  git config --global init.defaultBranch main
  ```

- Install [GitUp](https://gitup.co/)

  ```sh
  brew install --cask "gitup"
  ```

- Install `gh`

  ```sh
  brew install gh
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
