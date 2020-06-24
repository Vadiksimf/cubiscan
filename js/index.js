// VIDEO PLAY YOUTOBE
$(function() {
    $("#video__play").click(function() {
        $(this)
            .parents('.video-video-box')
            .html('<iframe style="overflow:hidden;height:100%;width:100%" height="100%" width="100%" src="https://www.youtube.com/embed/R2y8CytuZEA?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    });
});

// NUMCOUNT

var waypoint = new Waypoint({
    element: document.getElementById('waypoint-digits'),
    handler: function(direction) {
        document.getElementById("waypoint-digits").removeAttribute("id");
        //----------------------------Counter
        $('.digits-box__number').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter:$(this).text()
            },{
                duration: 1000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now))
                }
            });
        });
        //----------------------------Counter END
      },
      offset: '75%'
  });

  // SWIPER

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

// var mySwiper = new Swiper('.swiper-container', {
//   speed: 400,
//   // uniqueNavElements: false,
//   loop: true,
//   pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       bulletClass: 'swiper-bullet',
//       bulletActiveClass: 'swiper-bullet-active',
//       clickable: true
//     },
// });

