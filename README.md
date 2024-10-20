# Hotkeys for closing Chrome tabs
Add hotkeys to: 1)close tabs to the right, 2)close tabs to the left, 3) close other tabs, and 4) toggle pin. 

## Chrome Store installation: 
https://chrome.google.com/webstore/detail/keyboard-shortcuts-to-clo/fipfgiejfpcdacpjepkohdlnjonchnal

## Local (offline) installation:
- Download [latest](https://github.com/diophung/close-chrome-tabs/archive/refs/heads/master.zip) or copy this repo to your local drive: `git clone git@github.com:diophung/close-chrome-tabs.git`
- Enter `chrome://extensions` into Chrome address bar
- Click on "Load unpacked extension" and locate the folder of this repository.

## Configuration:
- Open `chrome://extensions/shortcuts` and look for "Keyboard shortcuts to close Chrome tabs":

![Step 1](https://github.com/diophung/close-chrome-tabs/blob/main/images/step1.png)

- Enter your configurations.


## Changelogs:
### 2024-10-19: v0.3.2
- updated: use LTS Chrome API.
- TODO: add hotkey to mute all tabs (blocked for now because Chrome extensions can only have 4 maximum hotkeys).

### 2024-10-15: v0.3.1
- fixed: upgrade to manifest v3.

### 2018-06-24: v0.3
- fixed: keep pinned tabs while closing tabs to the left. 

### 2017-02-21: v0.2
- updated: readme after initial release.

### 2017-02-20: v0.1
- initial release: configuration & shortcuts.
