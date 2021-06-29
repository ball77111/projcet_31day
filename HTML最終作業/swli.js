$(document).ready(function () {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        effect:'cube',
        autoplay:{
            delay:3000
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      $('.top > a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0 
        },700);
      });
      $('.menu > li > a').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('ul').slideToggle();
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).parent().siblings().find('ul').slideUp();
      });
});