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

- Apply changes: <button>Quit Finder</button>

  ```sh
  osascript -e 'quit app id "com.apple.finder"'
  ```

## Dock

- Remove all apps

  ```sh
  defaults delete "com.apple.Dock" "persistent-apps"
  ```

- Don't show recents

- Apply changes: <button>Quit Dock</button>

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

- Sign into iCloud…

  ```sh
  open "/System/Library/PreferencePanes/AppleIDPrefPane.prefPane"
  ```

## Security

- Add Touch ID…

  ```sh
  open "/System/Library/PreferencePanes/TouchID.prefPane"
  ```

- Turn on FileVault…

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

- Keyboard: Set backlight to minimum…

  ```sh
  open "/System/Library/PreferencePanes/Keyboard.prefPane"
  ```

- ```sh
  brew install --cask "mos" # Mos (smooth scrolling)
  open "/Applications/Mos.app"
  ```

- ```sh
  brew install --cask "middleclick" # Middleclick (triple-tap to middle-click)
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

<!--
To log all existing shortcuts:

    for domain in (string split ", " (defaults domains) | sort)
      echo -ne '\33[2K\r'$domain' '
      defaults read $domain NSUserKeyEquivalents 2>/dev/null
    end

-->

- Edit Menu

  ```sh
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Edit\033Paste and Match Style" '"@$v"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Edit\033Emoji & Symbols" '"^$ "';
  ```

- Left-hand-only shortcuts for Tab Overview

  ```sh
  ## For most apps:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Show All Tabs" '"^`"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Exit Tab Overview" '"^`"';
  ##
  ## For: Safari
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Show Tab Overview" '"^`"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Hide Tab Overview" '"^`"';

  ```

- Left-hand-only shortcuts for Back/Forward

  ```sh
  ## For most browsers:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033History\033Back" '"@$s"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033History\033Forward" '"@$d"';
  ## Prevent another Safari shortcut from overriding it:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Bookmarks\033Bookmark All Tabs…" '"@~$d"';
  ##
  ## For Finder:
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
  ## Note: The arrow key shortcuts don't always work for some reason.
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
  ## Note: The arrow key shortcuts don't always work for some reason.
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

- <button>Remove all global shortcuts</button>

  ```sh
  defaults delete "NSGlobalDomain" "NSUserKeyEquivalents"
  ```

- Finder

  ```sh
  Finder="com.apple.Finder"

  defaults write "$Finder" "NSUserKeyEquivalents" -dict-add "\033File\033Rename" '"@↩"';
  defaults write "$Finder" "NSUserKeyEquivalents" -dict-add "\033File\033Rename…" '"@↩"';
  ```

  - <button>Remove all Finder shortcuts</button>

    ```sh
    defaults delete "com.apple.Finder" "NSUserKeyEquivalents"
    ```

- Safari

  ```sh
  Safari="com.apple.Safari"

  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033File\033Export as PDF…" '"@$e"';
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Edit\033Undo Close Tab" '"@$t"';
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033View\033Always Show Toolbar in Full Screen" '"@$f"';
  ##
  # For some reason, if this is set to @\, it becomes $@\.
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033View\033Hide Sidebar" '"^\\"';
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033View\033Show Sidebar" '"^\\"';
  ##
  # defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Window\033Go to Next Tab Group" '"@~$\\U0093"';
  # defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Window\033Go to Previous Tab Group" '"@~$\\U0091"';
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Window\033Pin Tab" '"@p"';
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Window\033Unpin Tab" '"@p"';
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033File\033Print…" '"@$p"';
  ##
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Develop\033Show Snippet Editor" '"@~\\U21a9"';
  ```

  - <button>Remove all Safari shortcuts</button>

    ```sh
    defaults delete "com.apple.Safari" "NSUserKeyEquivalents"
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
  ##
  Keynote="com.apple.iWork.Keynote"
  defaults write "$Keynote" "NSUserKeyEquivalents" -dict-add "\033View\033Navigator" "@1";
  defaults write "$Keynote" "NSUserKeyEquivalents" -dict-add "\033View\033Slide Only" "@2";
  defaults write "$Keynote" "NSUserKeyEquivalents" -dict-add "\033View\033Light Table" "@3";
  defaults write "$Keynote" "NSUserKeyEquivalents" -dict-add "\033View\033Outline" "@4";
  ```

  - <button>Remove all Keynote shortcuts</button>

    ```sh
    defaults delete "com.apple.iWork.Keynote" "NSUserKeyEquivalents"
    ```

- Check that shortcuts have been set correctly: <button>Keyboard
  Settings…</button>

  ```sh
  osascript -e 'quit app id "com.apple.systempreferences"' || true
  sleep 0.5
  open '/System/Library/PreferencePanes/Keyboard.prefPane'
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

## IDE & Shells

- ```sh
  brew install --cask visual-studio-code # Visual Studio Code
  ```

- ```sh
  brew install fish
  echo 'eval (/opt/homebrew/bin/brew shellenv)' > ~/.config/fish/conf.d/homebrew.fish
  ```

- Set fish shell to be the default

- ```sh
  brew install deno
  ```

- ```sh
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

- ```sh
  brew install --cask gitup # GitUp
  ```

- ```sh
  brew install gh
  ```

  - <button>Log in to `gh`…</button>

    ```sh
    open_terminal
    gh auth login
    ```

- Set up a global gitignore

  ```sh
  git config --global core.excludesfile ~/.gitignore
  ```

  - Globally ignore `.DS_Store` files

    ```sh
    echo '.DS_Store' > ~/.gitignore
    ```

## Work

- ```sh
  brew install --cask "google-chrome" # Google Chrome
  ```

- ```sh
  brew install --cask "zoom" # Zoom
  ```

## Play

- ```sh
  brew install --cask "spotify" # Spotify
  ```
