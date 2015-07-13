$(function(){
  console.log("Hello World!");
  var links = $('.sidebar-nav-item');

  $.each(links,function(i,v){
    TweenMax.from(v, 2, {css:{"opacity":"0","position":"relative","left":"-100px"},ease:Bounce.easeOut,});
  });

  $('.sidebar-nav-item').hover(function(){
    TweenMax.to(this, 1, {css:{"position":"relative","left":"50px"}});
  },function(){
    TweenMax.to(this, 1, {css:{"position":"relative","left":"0"}});
  });
});
