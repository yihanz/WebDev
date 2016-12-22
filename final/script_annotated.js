/* The majority of this JS is applying CSS classes that update element's positions based on a given element's position relative to the top of the viewport. There is also some updating of CSS variables based on calculations from the element's position that applies a change to a given CSS property. If I would have had more time there should be a scroll event listener in a requestAnimationFrame to optimize the performance. */

const $window = $(window); //Cache window object in variable 

const addClass = (el, classAdd) => { //helper function to pass element and class name to be added
  const target = document.querySelector(el);
  if (!target.classList.contains(classAdd)) {
    target.classList.add(classAdd);
  }
}

function toggleFix() { //toggle position fixed on container two
  const anchorTop = $('#stick').offset().top; //cache position of anchor to fix window on a certain positon
  const windowTop = $window.scrollTop(); //cache window position
  if (windowTop > anchorTop) { //if the scroll is greater than the offset of the anchor, add a class which fixes its position at the top of the window
    $('.container__two').addClass('fix');
    $('#stick').height($('.container__two').outerHeight()); //adjust the height of the anchor to match the height of the element to be fixed at the top.
  } else { 
    $('.container__two').removeClass('fix'); //Otherwise don't fix the element if its below the top of the screen
    $('#stick').height(0); //return anchor element to height of zero
  }
}

window.addEventListener('scroll', function (e) { //Listen for scroll
  addClass('.heading--split1', 'visible'); //add the visible class to the headings as soon as scroll starts with no condition
  addClass('.heading--split2', 'visible');
  if (($(window).scrollTop() - $('.container__home').offset().top) == 0) {
    $('.heading--split1').removeClass('visible');
    $('.heading--split2').removeClass('visible');
  }

  if ($('.container__one').offset().top - $window.scrollTop() < 600) { //If container one is within 600px from the top of the viewport, add visible class
    $('.card__image').addClass('visible');
    $('.card--fadeIn').addClass('visible');
  } else { //remove it otherwise
    $('.card__image').removeClass('visible');
    $('.card--fadeIn').removeClass('visible');
  }

//The initial implementation of the sliding container. It's calculating a number based on scroll position of the sliding div and updating the value of the left position of the div. It didn't turn out the way I wanted. 

// let posUpdate = (($window.scrollTop() + $('.container__two').offset().top)/1000);
//     posUpdate = 100 - (2 * (Math.floor(posUpdate * 10)));
 //    posUpdate = posUpdate -= 10;

if ($('.container__two').offset().top - $window.scrollTop() < 600) { //If container two is within 600px from the top of the viewport, add visible class
  // document.documentElement.style.setProperty(`--${"rightInitial"}`, posUpdate + 'vw'); 
    $('.card--half').addClass('visible'); //changed the above to add a class and animate the left property to slide the div into view as soon as the parent div came in view.
} else {
  $('.card--half').removeClass('visible'); //remove class if below 600px from the top of the window
}

 if ($('.container__two').offset().top <= $window.scrollTop()) { //check if parent div of the sliding div is at the top of the viewport and then adds a class that slides the div all the way to the left
    $('.card--half').addClass('fullLeft');
    $('.card__section--hidden').fadeIn(1000); //as that happens, the second paragraph fades in to view over 1000ms
    $('.card__section--visible').fadeOut(100, function () { //first paragraph fades out over 100ms and gets removed from the DOM
      $(this).remove();
    });
} else { //this slides the div back to the right if parent div is not at the top of the viewport
    $('.card--half').removeClass('fullLeft');
}

  // if(posUpdate == 1) {
  //   $('.card__section--hidden').fadeIn(1000);
  //   $('.card__section--visible').fadeOut(100, function () {
  //     $(this).remove();
  //   });
  // }

  if (($('.container__four').offset().top - $window.scrollTop()) <= 800) { //when the last container comes into view, the sliding div gets a class added that adds 100% bottom margin to move it off the screen
    $('.card--half').addClass('slideUp');
  } else {
    $('.card--half').removeClass('slideUp'); //slides div back down into view if the last container is below the bottom of the screen
  }

  if (($('.container__four').offset().top - $window.scrollTop()) <= 200) { //once the last container is within 200px from the top, the script gets the value, runs a calculation and adds that value to a CSS variable that updates the amount of blur on a filter above a ::before element covering the background image of the last div. 
    let pxUpdate = (($window.scrollTop() + $('.container__four').offset().top) / 1000);
    document.documentElement.style.setProperty(`--${"blur"}`, pxUpdate + 'px');
  }

  if ($('.container__four').offset().top - $window.scrollTop() < 300) { //when the last div is within 300px of the top of the viewport, add a class that slides the logo up from the bottom.
    $('.container--imageBlock').addClass('container--imageBlock__visible');
  } else {
    $('.container--imageBlock').removeClass('container--imageBlock__visible');//or remove the class and slide it down
  }
});


$(function () {
  $window.on('scroll', function () {
    toggleFix(); //it binds the toggleFix function to scroll event
});
    toggleFix(); 
}); 