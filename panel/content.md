# Sean's recommended Mac settings

## 🗂️ Finder

###

- Show "Quit" menu item

  ```sh
  defaults write "com.apple.finder" "QuitMenuItem" -bool YES
  ```

- Show file extensions

  ```sh
  defaults write "NSGlobalDomain" "AppleShowAllExtensions" -int 1
  ```

### Desktop

- Disable desktop

  ```sh
  defaults write "com.apple.finder" "CreateDesktop" -bool NO
  ```

- Apply preferred view settings

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

### Sidebar

- ```sh
  # It is very hard to manually change the sidebar entries.
  # They are stored in: ~/Library/Application Support/com.apple.sharedfilelist/com.apple.LSSharedFileList.FavoriteItems.sfl2
  # More reading about the file format they use: https://eclecticlight.co/?s=alias

  brew install --cask "mysides" # mysides (utility to modify sidebar)
  ```

- Show Home (applies immediately)

  ```sh
  mysides add "Home" "file://${HOME}"
  ```

- Hide AirDrop (applies immediately)

  ```sh
  # For some reason, the AirDrop item has label "/".
  mysides remove "/"
  ```

- Hide tags

  ```sh
  defaults write "com.apple.finder" "ShowRecentTags" -int 0
  ```

###

- Changes will be applied after Finder is relaunched. <button>Relaunch
  Now</button>

  ```sh
  osascript -e 'quit app id "com.apple.finder"'
  sleep 0.5
  open -b "com.apple.finder"
  ```

## 🍎 Dock & Menu Bar

### Dock

- Remove all applications

  ```sh
  defaults delete "com.apple.Dock" "persistent-apps"
  ```

- Don't show recents

  ```sh
  defaults write "com.apple.Dock" "show-recents" -bool NO
  ```

###

- Changes will be applied after Dock is relaunched. <button>Relaunch
  Now</button>

  ```sh
  osascript -e 'quit app id "com.apple.Dock"'
  ```

### Menu bar

- Show Stage Manager in menu bar

- Remove Spotlight from menu bar

- Remove Wi-Fi from menu bar

## 🎨 Appearance

###

- Set desktop picture to Solid Black

  ```sh
  osascript -e '
    tell application "Finder" to ¬
      set desktop picture to POSIX file "/System/Library/Desktop Pictures/Solid Colors/Black.png"
  '
  ```

- Set desktop picture to Hello Silver

  ```sh
  osascript -e '
    tell application "Finder" to ¬
      set desktop picture to POSIX file "/System/Library/Desktop Pictures/hello Grey.heic"
  '
  ```

###

- Change accent color to blue

  ```sh
  defaults write "NSGlobalDomain" "AppleAccentColor" -int 4
  ```

##

## 🔔 Notifications

###

- Turn off badge for Reminders: <button>Notification Settings…</button>

  ```sh
  open "x-apple.systempreferences:com.apple.preference.notifications"
  ```

## ☁️ iCloud

###

- Sign into iCloud…

  ```sh
  open "/System/Library/PreferencePanes/AppleIDPrefPane.prefPane"
  ```

### Calendar

- Remove "US Holidays" Calendar

## 🔒 Security

###

- Enable Touch ID…

  ```sh
  open "x-apple.systempreferences:com.apple.preferences.password"
  ```

- Add lock screen message

###

- Turn on FileVault…

  ```sh
  open "x-apple.systempreferences:com.apple.preference.security?FDE"
  ```

##

## ⌨️ Keyboard & Text

### Keyboard

- Set backlight to minimum…

  ```sh
  open "/System/Library/PreferencePanes/Keyboard.prefPane"
  ```

- Hold to repeat

  ```sh
  defaults write "NSGlobalDomain" "ApplePressAndHoldEnabled" -bool NO
  ```

### Text Input

- Turn off auto-capitalization

  ```sh
  defaults write "NSGlobalDomain" "NSAutomaticCapitalizationEnabled" -bool NO
  ```

- Turn off smart quotes

  ```sh
  defaults write "NSGlobalDomain" "NSAutomaticQuoteSubstitutionEnabled" -bool NO
  ```

- Turn off double-space to period shortcut

  ```sh
  defaults write "NSGlobalDomain" "NSAutomaticPeriodSubstitutionEnabled" -bool NO
  ```

- Turn dash substitution

  ```sh
  defaults write "NSGlobalDomain" "NSAutomaticDashSubstitutionEnabled" -bool NO
  ```

## ⚡️ Keyboard Shortcuts

<!--
To log all existing shortcuts:

    for domain in (string split ", " (defaults domains) | sort)
      echo -ne '\33[2K\r'$domain' '
      defaults read $domain NSUserKeyEquivalents 2>/dev/null
    end

-->

### All Applications

- Edit Menu

  ```sh
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Edit\033Paste and Match Style" '"@$v"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Edit\033Emoji & Symbols" '"^$ "';
  ```

- Left-hand-only shortcuts for Tab Overview

  ```sh
  ## For most applications:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Show All Tabs" '"^`"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Exit Tab Overview" '"^`"';
  ##
  ## For Safari:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Show Tab Overview" '"^`"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Hide Tab Overview" '"^`"';

  ```

- Left-hand-only shortcuts for Back/Forward

  ```sh
  Safari="com.apple.Safari"

  ## For most browsers:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033History\033Back" '"@$s"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033History\033Forward" '"@$d"';
  ##
  ## Prevent another Safari shortcut from overriding it:
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Bookmarks\033Bookmark All Tabs…" '"@~$d"';
  ##
  ## For Finder:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Go\033Back" '"@$s"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Go\033Forward" '"@$d"';

  ```

- Merge Windows

  ```sh
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Merge All Windows" '"@$y"';
  ```

### Window Tiling

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

### Specific Applications

- Finder

  ```sh
  Finder="com.apple.Finder"

  defaults write "$Finder" "NSUserKeyEquivalents" -dict-add "\033File\033Rename" '"@↩"';
  defaults write "$Finder" "NSUserKeyEquivalents" -dict-add "\033File\033Rename…" '"@↩"';
  ```

  - <button>Remove All Finder Shortcuts</button>

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

  - <button>Remove All Keynote Shortcuts</button>

    ```sh
    defaults delete "com.apple.iWork.Keynote" "NSUserKeyEquivalents"
    ```

###

- Check that shortcuts have been set correctly: <button>Keyboard
  Settings…</button>

  ```sh
  osascript -e 'quit app id "com.apple.systempreferences"' || true
  sleep 0.5
  open '/System/Library/PreferencePanes/Keyboard.prefPane'
  ```

- <button>Remove All Global Shortcuts</button>

  ```sh
  defaults delete "NSGlobalDomain" "NSUserKeyEquivalents"
  ```

## 🖱️ Trackpad & Mouse

### Trackpad

- Use light click strength…

  ```sh
  open "/System/Library/PreferencePanes/Trackpad.prefPane"
  ```

- Turn off force touch

  ```sh
  defaults write "NSGlobalDomain" "com.apple.trackpad.forceClick" -int 0
  ```

- ```sh
  brew install --cask "middleclick" # MiddleClick (triple-tap to middle-click)
  open "/Applications/MiddleClick.app"
  ```

### Mouse

- ```sh
  brew install --cask "mos" # Mos (smooth scrolling)
  open "/Applications/Mos.app"
  ```

### Shortcuts

- Quick Note in left corner

- <kbd>^$</kbd> click anywhere in a window to move it
  [[?]](https://apple.stackexchange.com/a/365860)

  ```sh
  defaults write "NSGlobalDomain" "NSWindowShouldDragOnGesture" -bool YES
  ```

- <kbd>^</kbd> right click for Mission Control

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

##

## 🔨 Developer

###

- Install Apple Command Line Tools

  ```sh
  xcode-select --install
  ```

- Install Homebrew

  ```sh
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

### IDE & Shells

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

### Apple Terminal

- useOptionAsMetaKey

- single-line, blinking cursor

### Git

- Configure display name globally

  ```sh
  git config --global "user.name" "$(id -F)"
  ```

- Change default branch name to `main`

  ```sh
  git config --global "init.defaultBranch" main
  ```

- ```sh
  brew install --cask gitup # GitUp (a native, lightweight Git GUI)
  ```

- ```sh
  brew install gh
  ```

  - <button>Log In To `gh`…</button>

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

## 🫖 Install Applications

###

- Install Homebrew

  ```sh
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

### Work

- ```sh
  brew install --cask "google-chrome" # Google Chrome
  ```

  - <button>Open</button>

    ```sh
    open "/Applications/Google Chrome.app"
    ```

- ```sh
  brew install --cask "zoom" # Zoom
  ```

  - <button>Open</button>

    ```sh
    open "/Applications/Zoom.app"
    ```

- ```sh
  brew install --cask "tandem" # Tandem
  ```

  - <button>Open</button>

    ```sh
    open "/Applications/Tandem.app"
    ```

### Play

- ```sh
  brew install --cask "spotify" # Spotify
  ```

  - <button>Open</button>

    ```sh
    open "/Applications/Spotify.app"
    ```
