---
layout: post
title: Installing EventMachine Gem on OSX El Capitan
permalink: Installing-EventMachine-Gem-on-OSX-El-Capitan
comments: true
---

If you are running into errors like below when installing EventMachine on OSX El Capitan, its probably because of OpenSsl

{% highlight bash %}
Building native extensions.  This could take a while...
ERROR:  Error installing eventmachine:
        ERROR: Failed to build gem native extension.

    current directory: /Users/ismail.kalimi/.rbenv/versions/2.3.1/lib/ruby/gems/2.3.0/gems/eventmachine-1.0.8/ext
/Users/ismail.kalimi/.rbenv/versions/2.3.1/bin/ruby -r ./siteconf20170619-62544-n32z9e.rb extconf.rb
checking for rb_trap_immediate in ruby.h,rubysig.h... no
checking for rb_thread_blocking_region()... no
checking for ruby/thread.h... yes
checking for rb_thread_call_without_gvl() in ruby/thread.h... yes
checking for inotify_init() in sys/inotify.h... no
checking for __NR_inotify_init in sys/syscall.h... no
checking for writev() in sys/uio.h... yes
checking for rb_thread_fd_select()... yes
checking for rb_fdset_t in ruby/intern.h... yes
checking for pipe2() in unistd.h... no
checking for accept4() in sys/socket.h... no
checking for SOCK_CLOEXEC in sys/socket.h... no
checking for rb_wait_for_single_fd()... yes
checking for rb_enable_interrupt()... no
checking for rb_time_new()... yes
checking for sys/event.h... yes
checking for sys/queue.h... yes
CFLAGS= -O3 -Wno-error=shorten-64-to-32  -pipe  -Wall -Wextra -Wno-deprecated-declarations -Wno-ignored-qualifiers -Wno-unused-result
CPPFLAGS=-I/Users/ismail.kalimi/.rbenv/versions/2.3.1/include  -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT $(DEFS) $(cppflags) -Wall -Wextra -Wno-deprecated-declarations -Wno-ignored-qualifiers -Wno-unused-result
checking for clock_gettime()... no
checking for gethrtime()... no
creating Makefile

To see why this extension failed to compile, please check the mkmf.log which can be found here:

  /Users/ismail.kalimi/.rbenv/versions/2.3.1/lib/ruby/gems/2.3.0/extensions/x86_64-darwin-15/2.3.0-static/eventmachine-1.0.8/mkmf.log

current directory: /Users/ismail.kalimi/.rbenv/versions/2.3.1/lib/ruby/gems/2.3.0/gems/eventmachine-1.0.8/ext
make "DESTDIR=" clean

current directory: /Users/ismail.kalimi/.rbenv/versions/2.3.1/lib/ruby/gems/2.3.0/gems/eventmachine-1.0.8/ext
make "DESTDIR="
compiling binder.cpp
In file included from binder.cpp:20:
./project.h:116:10: fatal error: 'openssl/ssl.h' file not found
#include <openssl/ssl.h>
         ^
1 error generated.
make: *** [binder.o] Error 1

make failed, exit code 2

Gem files will remain installed in /Users/ismail.kalimi/.rbenv/versions/2.3.1/lib/ruby/gems/2.3.0/gems/eventmachine-1.0.8 for inspection.
Results logged to /Users/ismail.kalimi/.rbenv/versions/2.3.1/lib/ruby/gems/2.3.0/extensions/x86_64-darwin-15/2.3.0-static/eventmachine-1.0.8/gem_make.out
{% endhighlight %}

Make sure openssl is installed through brew
{% highlight bash %}
brew install openssl
{% endhighlight %}

Then pass the following flag with the install
{% highlight bash %}
gem install eventmachine -- --with-cppflags="-I/usr/local/opt/openssl/include"
{% endhighlight %}

Credit: [nownabe](http://qiita.com/nownabe/items/c62574b63fd55ee31ed6)

---
