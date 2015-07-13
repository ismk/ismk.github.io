$(function(){
  console.log("Hello World!");

  onload_anim();

  $('.sidebar-nav-item').hover(function(){
    TweenMax.to(this, 1, {css:{"position":"relative","left":"50px"}});
  },function(){
    TweenMax.to(this, 1, {css:{"position":"relative","left":"0"}});
  });

  $('.sb-icons li').hover(function(){
    TweenMax.to(this, 0.2, {css:{"position":"relative","top":"-10px"}});
  },function(){
    TweenMax.to(this, 0.2, {css:{"position":"relative","top":"0"}});
  });

});

var onload_anim=function(){
  if (!localStorage['done']) {
    localStorage['done'] = 'yes';
    var links = $('.sidebar-nav-item');
    $.each(links,function(i,v){
      TweenMax.from(v, 2, {css:{"opacity":"0","position":"relative","left":"-100px"},ease:Bounce.easeOut,});
    });
  }
}
