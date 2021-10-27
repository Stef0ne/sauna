// $(document).ready(function () {
// 	$('.slider').slick({

// 	});
// });
$('.hall__slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.hall__slider-nav',
  
});
$('.hall__slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.hall__slider-for',
  dots: true,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});

$(function(){
  $('.actual__slider').slick({
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-right.svg" alt="arrow-right">',
  });
});

$(function(){
  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-right.svg" alt="arrow-right">',
  });
});
