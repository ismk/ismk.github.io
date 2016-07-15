---
layout: post
title: Configure Shortcuts in iTerm2
permalink: Configure-Shortcuts-in-iTerm2
comments: true
---

In OSX, ⌥+⌫ and ⌘+⌫ are the shortcuts for deleting a word and deleting a line respectively.

⌘+ ← and ⌘+ → are for going to the beginning and end of lines. By default, iTerm2 isn't configured this way.

The following is what I've found to work on my machine.

Open the preferences (⌘+,) and go to the Keys tab.

Add a global shortcut key, and just type in your shortcut

In the Action dropdown, select Send Hex Code

The hex codes for...

Deleting a word: 0x17

Deleting a line: 0x15

Moving to the beginning of the line: 0x01

Moving to the end of the line: 0x05

![iTerm Config](/imgs/iterm_configure.png)


Credit: Levi Tan Ong

(https://coderwall.com/p/ds2dha/word-line-deletion-and-navigation-shortcuts-in-iterm2)

---
