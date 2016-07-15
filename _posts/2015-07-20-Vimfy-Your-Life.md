---
layout: post
title: Vim-ify Your Life
permalink: Vimify-Your-Life
comments: true
---

```
Vim isn't just a text editor, it is a way of life.
```

Having been on continuous path to improve my work flow, I recently took upon myself to learn Vim.

Vim is a very powerful modal text editor, and like all UNIX tools it does its singular job of editing text really well.

There is a definite learning curve to Vim and coming from Sublime Text there were a lot times when I could accomplish the same task in ST much quicker. Especially when using its Multiple-Selections feature.

I won't get into the basics on how to use Vim (there are already a ton of articles out there which already do an amazing job) but just describe some of the features that made me into a Vim user.

As programmers we spend way more time reading code than writing it.

Turning on the relative line numbers was a game changer for me.

I could easily identify the line number on the left side gutter and jump to the corresponding line with
{% highlight sh %}
<n>J or K
33j #this basically translates to move down 33 lines from my current cursor position
15k #and this one is move up 15 lines
{% endhighlight %}

and with the use of the 'V' select Visual mode this becomes really handy in selecting and deleting chunks of text.


more on Vim on the next post

---
