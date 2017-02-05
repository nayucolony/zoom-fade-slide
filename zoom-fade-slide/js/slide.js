$(window).load(function(){
  var slide = $(".slideshow");
  var count = 0;
  var total = $(".slideshow .item").length -1;

  // 以下２つで時間調整
  var transitionTime = 3500;
  var intervalTime = 1000;
  // 自動算出なので扱わない
  var fadeOutTime = transitionTime + intervalTime;

  // スライドのクラス状態を変更
  var transformSlide = function(){
    slide.find('.item').eq(count).addClass('out');
    slide.find('.item').eq(count).removeClass('in');
  }

  // スライダー画像変更
  var changeSlide = function(){
    setTimeout(function(){
      slide.find('.item').eq(nextNumber).fadeIn(transitionTime).toggleClass('in').removeClass('out');
    },intervalTime);
    slide.find('.item').eq(currentNumber).fadeOut(fadeOutTime);
  }

  // 次に行く処理
  var goNext = function(){
    transformSlide();
    currentNumber = count;
    nextNumber = count + 1;
    changeSlide();
  }

  // 最初に戻る処理
  var goFirst = function(){
    transformSlide();
    currentNumber = count;
    nextNumber = 0;
    changeSlide();
  }

  // 最初の一枚を出現
  slide.find('.item').eq(count).fadeIn(transitionTime).addClass('in');
  // 二枚目以降は一定時間ごとにスライドを変更
  setInterval(function(){
    if(count < total){
      goNext();
      count++;
    } else if(count == total){
      goFirst();
      count = 0;
    };
  },fadeOutTime);
});
