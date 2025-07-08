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

- Don't show when cursor is at edge of screen

  ```sh
  defaults write "com.apple.dock" "autohide-delay" -float 10000000000
  ```

- Remove all applications

  ```sh
  defaults delete "com.apple.dock" "persistent-apps"
  ```

- Don't show recents

  ```sh
  defaults write "com.apple.dock" "show-recents" -bool NO
  ```

- Scroll to open

  ```sh
  defaults write "com.apple.dock" "scroll-to-open" -bool YES
  ```

###

- Changes will be applied after Dock is relaunched. <button>Relaunch
  Now</button>

  ```sh
  osascript -e 'quit app id "com.apple.dock"'
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

- File Menu

  ```sh
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033File\033Share…" '"@$e"';
  ```

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
  ## For Finder and PWAs:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Go\033Back" '"@$s"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Go\033Forward" '"@$d"';
  ##
  ## For Spotify:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Go Back" '"@$s"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Go Forward" '"@$d"';
  ##
  ## For Arc:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Archive\033Go Back" '"@$s"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Archive\033Go Forward" '"@$d"';
  ##
  ## For Dia:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Tabs\033Go Back" '"@$s"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Tabs\033Go Forward" '"@$d"';
  ##
  ## For System Settings:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Back" '"@$s"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Forward" '"@$d"';
  ```

- Unified reload shortcuts

  ```sh
  ## For Safari and PWAs:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Reload Page" '"@$r"';
  ##
  ## For Chromium browsers:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Reload This Page" '"@$r"';
  ```

- Figma-inspired sidebar shortcut

  ```sh
  Safari="com.apple.Safari"
  Calendar="com.apple.iCal"
  Notes="com.apple.Notes"
  Dia="company.thebrowser.dia"

  ## For most applications:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Hide Sidebar" '"@\\"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Show Sidebar" '"@\\"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Toggle Sidebar" '"@\\"';
  ##
  ## For Calendar:
  defaults write "$Calendar" "NSUserKeyEquivalents" -dict-add "\033View\033Hide Calendar List" '"@\\"';
  defaults write "$Calendar" "NSUserKeyEquivalents" -dict-add "\033View\033Hide Notifications" '"@\\"';
  defaults write "$Calendar" "NSUserKeyEquivalents" -dict-add "\033View\033Show Calendar List" '"@\\"';
  ##
  ## For Keynote, Numbers, and Pages:
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Inspector\033Hide Inspector" '"@\\\\"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033View\033Inspector\033Show Inspector" '"@\\\\"';
  ##
  ## For Notes:
  defaults write "$Notes" "NSUserKeyEquivalents" -dict-add "\033View\033Show Folders" '"@\\\\"';
  defaults write "$Notes" "NSUserKeyEquivalents" -dict-add "\033View\033Hide Folders" '"@\\\\"';
  ##
  ## For Dia:
  defaults write "$Dia" "NSUserKeyEquivalents" -dict-add "\033View\033Show Tabs in Sidebar" '"@\\\\"';
  ```

- Merge Windows

  ```sh
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Merge All Windows" '"@$y"';
  ```

### Window Tiling

- Window tiling shortcuts (macOS 15)

  ```sh
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move & Resize\033Left" '"~^←"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move & Resize\033Right" '"~^→"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move & Resize\033Top" '"~^↑"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move & Resize\033Bottom" '"~^↓"';
  ##
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move & Resize\033Top Left" '"~^["';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move & Resize\033Top Right" '"~^]"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move & Resize\033Bottom Left" '"~^;"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Move & Resize\033Bottom Right" "~^'";
  ##
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Fill" '"~^↩"';
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Center" '"^$↩"';
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
  defaults write "NSGlobalDomain" "NSUserKeyEquivalents" -dict-add "\033Window\033Zoom" '"~^↓"';
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

- Calendar

  ```sh
  Calendar="com.apple.iCal"

  defaults write "$Calendar" "NSUserKeyEquivalents" -dict-add "\033View\033Show Declined Events" '"@$."';
  ```

  - <button>Remove All Calendar Shortcuts</button>

    ```sh
    defaults delete "com.apple.Calendar" "NSUserKeyEquivalents"
    ```

- Safari

  ```sh
  Safari="com.apple.Safari"

  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033File\033Export as PDF…" '"@$e"';
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Edit\033Undo Close Tab" '"@$t"';
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033View\033Always Show Toolbar in Full Screen" '"@$f"';
  ##
  # defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Window\033Go to Next Tab Group" '"@~$\\U0093"';
  # defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Window\033Go to Previous Tab Group" '"@~$\\U0091"';
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Window\033Pin Tab" '"@p"';
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Window\033Unpin Tab" '"@p"';
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033File\033Print…" '"@$p"';
  ##
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Window\033Duplicate Tab" '"@~u"';
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Window\033Move Tab to New Window" '"@~n"';
  ##
  defaults write "$Safari" "NSUserKeyEquivalents" -dict-add "\033Develop\033Show Snippet Editor" '"@~$↩"';
  ```

  - Changes will be applied after Safari is relaunched. <button>Relaunch
    Now</button>

    ```sh
    osascript -e 'quit app id "com.apple.Safari"'
    sleep 0.5
    open -b "com.apple.Safari"
    ```

  - <button>Remove all Safari shortcuts</button>

    ```sh
    defaults delete "com.apple.Safari" "NSUserKeyEquivalents"
    ```

- Freeform

  ```sh
  Freeform="com.apple.freeform"

  defaults write "$Freeform" "NSUserKeyEquivalents" -dict-add "\033Insert\033Sticky Note" '"@Y"';
  defaults write "$Freeform" "NSUserKeyEquivalents" -dict-add "\033Insert\033Shape\033Rectangle" '"@R"';
  defaults write "$Freeform" "NSUserKeyEquivalents" -dict-add "\033Insert\033Shape\033Oval" '"@O"';
  defaults write "$Freeform" "NSUserKeyEquivalents" -dict-add "\033Insert\033Text Box" '"@T"';
  defaults write "$Freeform" "NSUserKeyEquivalents" -dict-add "\033Insert\033Line" '"@L"';
  defaults write "$Freeform" "NSUserKeyEquivalents" -dict-add "\033Insert\033Connection Line" '"@$L"';
  ```

  - Changes will be applied after Freeform is relaunched. <button>Relaunch
    Now</button>

    ```sh
    osascript -e 'quit app id "com.apple.freeform"'
    sleep 0.5
    open -b "com.apple.freeform"
    ```

  - <button>Remove all Freeform shortcuts</button>

    ```sh
    defaults delete "com.apple.freeform" "NSUserKeyEquivalents"
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
  Keynote="com.apple.iWork.Keynote"
  defaults write "$Keynote" "NSUserKeyEquivalents" -dict-add "\033View\033Navigator" "@1";
  defaults write "$Keynote" "NSUserKeyEquivalents" -dict-add "\033View\033Slide Only" "@2";
  defaults write "$Keynote" "NSUserKeyEquivalents" -dict-add "\033View\033Light Table" "@3";
  defaults write "$Keynote" "NSUserKeyEquivalents" -dict-add "\033View\033Outline" "@4";
  defaults write "$Keynote" "NSUserKeyEquivalents" -dict-add "\033View\033Edit Slide Layouts" "@~L";
  defaults write "$Keynote" "NSUserKeyEquivalents" -dict-add "\033View\033Exit Slide Layouts" "@~L";
  ```

  - <button>Remove All Keynote Shortcuts</button>

    ```sh
    defaults delete "com.apple.iWork.Keynote" "NSUserKeyEquivalents"
    ```

- Notes

  ```sh
  Notes="com.apple.Notes"

  defaults write "$Notes" "NSUserKeyEquivalents" -dict-add "\033Format\033Move Item\033Up" '"~↑"';
  defaults write "$Notes" "NSUserKeyEquivalents" -dict-add "\033Format\033Move Item\033Down" '"~↓"';
  defaults write "$Notes" "NSUserKeyEquivalents" -dict-add "\033Window\033Open Note in New Window" '"@O"';
  defaults write "$Notes" "NSUserKeyEquivalents" -dict-add "\033Format\033Mark as Checked" "@'";
  defaults write "$Notes" "NSUserKeyEquivalents" -dict-add "\033Format\033Mark as Unchecked" "@'";
  defaults write "$Notes" "NSUserKeyEquivalents" -dict-add "\033Format\033Block Quote" "@$'";
  defaults write "$Notes" "NSUserKeyEquivalents" -dict-add "\033Format\033Checklist" "@L";
  ```

  - <button>Remove All Notes Shortcuts</button>

    ```sh
    defaults delete "com.apple.Notes" "NSUserKeyEquivalents"
    ```

- Shortcuts

  ```sh
  Shortcuts="com.apple.shortcuts"

  defaults write "$Shortcuts" "NSUserKeyEquivalents" -dict-add "\033Edit\033Comment" "@/";
  defaults write "$Shortcuts" "NSUserKeyEquivalents" -dict-add "\033Edit\033Move Up" "~↑";
  defaults write "$Shortcuts" "NSUserKeyEquivalents" -dict-add "\033Edit\033Move Down" "~↓";
  ```

  - <button>Remove All Shortcuts Shortcuts</button>

    ```sh
    defaults delete "com.apple.shortcuts" "NSUserKeyEquivalents"
    ```

- Arc

  ```sh
  Arc="company.thebrowser.Browser"

  defaults write "$Arc" "NSUserKeyEquivalents" -dict-add "\033Extensions\033Manage Extensions…" '"@$e"';
  defaults write "$Arc" "NSUserKeyEquivalents" -dict-add "\033File\033Share…" '"@~$e"';
  ##
  defaults write "$Arc" "NSUserKeyEquivalents" -dict-add "\033Edit\033Undo" '"@~z"';
  defaults write "$Arc" "NSUserKeyEquivalents" -dict-add "\033Edit\033Undo Move Items out of split" '"@~z"';
  ```

  <!-- defaults write "$Arc" "NSUserKeyEquivalents" -dict-add "\033Edit\033Undo Archive Tab" '"@$t"'; -->

  - <button>Remove All Arc Shortcuts</button>

    ```sh
    defaults delete "company.thebrowser.Browser" "NSUserKeyEquivalents"
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

- <kbd>^@</kbd> click anywhere in a window to move it
  [[?]](https://apple.stackexchange.com/a/365860)

  ```sh
  defaults write "NSGlobalDomain" "NSWindowShouldDragOnGesture" -bool YES
  ```

  Unfortunately, this seems to no longer work in Sonoma.

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

- Use Touch ID for `sudo`

  ```sh
  code /etc/pam.d/sudo
  ```

  Add the following line to the beginning of the file:

  <code style="user-select: all;">auth sufficient pam_tid.so</code>

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
  brew install --cask "arc" # Arc
  ```

  - <button>Open</button>

    ```sh
    open "/Applications/Arc.app"
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
