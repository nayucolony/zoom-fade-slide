$(window).load(function(){
var slide = $(".slideshow");
var i = 0;
$(slide).find('.item').eq(i).fadeIn(2000).addClass('in');
var total = $(".slideshow .item").length -1;
setInterval(function(){
  if(i < total){
  $(slide).find('.item').eq(i).addClass('out');
  $(slide).find('.item').eq(i).removeClass('in');
    j = i;
    i++;
    setTimeout(function(){
      $(slide).find('.item').eq(i).fadeIn(3500).addClass('in').removeClass('out');
    },1000);
    $(slide).find('.item').eq(j).fadeOut(4500);
  } else if(i == total){
  $(slide).find('.item').eq(i).addClass('out');
  $(slide).find('.item').eq(i).removeClass('in');
    j = i;
    i = 0;
    setTimeout(function(){
      $(slide).find('.item').eq(i).fadeIn(3500).addClass('in').removeClass('out');
    },1000);
      $(slide).find('.item').eq(j).fadeOut(4500);
  };
},4500);
});
