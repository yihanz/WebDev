const $window = $(window); 

const addClass = (el, classAdd) => {
  const target = document.querySelector(el);
  if(!target.classList.contains(classAdd)){
    target.classList.add(classAdd);
  }
}

function toggleFix() {
    const anchorTop = $('#stick').offset().top;
    const windowTop = $window.scrollTop();
    if (windowTop > anchorTop) {
        $('.container__two').addClass('fix');
        $('#stick').height($('.container__two').outerHeight());
    } else {
        $('.container__two').removeClass('fix');
        $('#stick').height(0);
    }
}

window.addEventListener('scroll', function(e) {
  
  addClass('.heading--split1', 'visible');
  addClass('.heading--split2', 'visible');

  if (($(window).scrollTop() - $('.container__home').offset().top) == 0) {
    $('.heading--split1').removeClass('visible');
    $('.heading--split2').removeClass('visible');
  }

  if ($('.container__one').offset().top - $window.scrollTop() < 600){
      $('.card__image').addClass('visible');
      $('.card--fadeIn').addClass('visible');
  } else {
      $('.card__image').removeClass('visible');
      $('.card--fadeIn').removeClass('visible');
  }

  // let posUpdate = (($window.scrollTop() + $('.container__two').offset().top)/1000);
  //       posUpdate = 100 - (2 * (Math.floor(posUpdate * 10)));
  //       posUpdate = posUpdate -= 10;
  if ($('.container__two').offset().top - $window.scrollTop() < 600) {
    // document.documentElement.style.setProperty(`--${"rightInitial"}`, posUpdate + 'vw');
    $('.card--half').addClass('visible');
  } else {
    $('.card--half').removeClass('visible');
  }

  if ($('.container__two').offset().top <= $window.scrollTop()) {
    $('.card--half').addClass('fullLeft');
    $('.card__section--hidden').fadeIn(1000);
    $('.card__section--visible').fadeOut(100, function () {
      $(this).remove();
    });
  } else {
    $('.card--half').removeClass('fullLeft');
    // $('.card__section--visible').fadeIn(1000);
    // $('.card__section--hidden').fadeOut(100, function () {
    //   $(this).remove();
    // });
  }

  // let posUpdate = (($window.scrollTop() + $('.container__two').offset().top)/1000);
  //       posUpdate = 100 - (Math.floor(posUpdate * 10));
  //       posUpdate = posUpdate -= 10;
  // if (($('.container__two').offset().top <= $window.scrollTop()) && posUpdate > 0) {
  //   document.documentElement.style.setProperty(`--${"rightInitial"}`, posUpdate + 'vw');
  // }

  // if(posUpdate == 1) {
  //   $('.card__section--hidden').fadeIn(1000);
  //   $('.card__section--visible').fadeOut(100, function () {
  //     $(this).remove();
  //   });
  // }
  
   if(($('.container__four').offset().top - $window.scrollTop()) <= 800) {
      $('.card--half').addClass('slideUp');
    } else {
      $('.card--half').removeClass('slideUp');
    }

  if(($('.container__four').offset().top - $window.scrollTop()) <= 200){
    let pxUpdate = (($window.scrollTop() + $('.container__four').offset().top)/1000);
    document.documentElement.style.setProperty(`--${"blur"}`, pxUpdate + 'px');
  }
  
  // let $container = $('.container__four').offset().top;
  // $container = Math.floor($container);
  if($('.container__four').offset().top - $window.scrollTop() < 300){
    $('.container--imageBlock').addClass('container--imageBlock__visible');
    // setInterval(function(){
    //   $('.container--imageBlock__visible').addClass('anim');
    // }, 600)
  } else {
    $('.container--imageBlock').removeClass('container--imageBlock__visible');
  }

});
 $(function(){
   $window.on('scroll', function(){
     toggleFix();
   });
   toggleFix();
 });
