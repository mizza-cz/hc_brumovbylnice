$(function(){
   
   $('.navbar__menu').on('click', function () {
      $('.navbar__inner').slideToggle();
    });
    $('.nav__link').on('click', function () {
      $(this).closest('.nav__item').toggleClass('active');
    });
    $('.scoarboard__inner').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay:true,
      infinite:true,
      prevArrow: '<button class="scoarboard__btn scoarboard__btnprev"><img src="images/svg/arrow-left.svg" alt="" ></button> ',
      nextArrow: ' <button class="scoarboard__btn scoarboard__btnnext"><img src="images/svg/arrow-right.svg" alt = "" ></button > ',
      responsive: [
         {
            breakpoint: 1400,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 1100,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 771,
            settings: {
               slidesToShow: 1,
            }
         },
        
      ]

   });
   $('select, input.radio, input.checkbox').styler();
 
  
// end
});