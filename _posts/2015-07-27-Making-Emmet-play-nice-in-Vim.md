---
layout: post
title: Making-Emmet-play-nice-in-Vim
permalink: Making-Emmet-play-nice-in-Vim
comments: true
---

Coming from sublime I was used the amazing expand and autocompletion features of Emmet ( Previously known as Zen conding ) <br>
It was but natural that I would find the same functionality in Vim ofcourse unlike sublime it does not work `<Tab>` key out of the box<br>

but a simple line in your vimrc would solve that: <br>
```
let g:user_emmet_expandabbr_key = '<Tab>'
```

These are the other sane defaults I have added as well so that the tab completion on works in HTML And CSS <br>
```
let g:user_emmet_install_global = 0
```
<br>
```
autocmd FileType html,css EmmetInstall
```

---
