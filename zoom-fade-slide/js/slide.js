$(window).load(function(){
var slide = $(".slideshow");
var i = 0;
// ページの読み込み時にスライドの1枚目を2000ミリ秒かけてフェードイン
$(slide).find('.item').eq(i).fadeIn(2000).addClass('in');
// スライドの枚数を調べて変数に格納
var total = $(".slideshow .item").length -1;
// 処理を繰り返す
setInterval(function(){
  if(i < total){
  $(slide).find('.item').eq(i).addClass('out');
  $(slide).find('.item').eq(i).removeClass('in');
    j = i;
    i++;
    setTimeout(function(){
      // 1000ミリ秒後に3500ミリ秒かけてフェードインする
      $(slide).find('.item').eq(i).fadeIn(3500).addClass('in').removeClass('out');
    },1000);
    // 4500ミリ秒かけてフェードアウトする
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
// ここを増やすと停滞時間を変えられる
},4500);
});
