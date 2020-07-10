$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1100,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/pic/arrows/prev_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/pic/arrows/next_arrow.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
              }
          ]
    });
});