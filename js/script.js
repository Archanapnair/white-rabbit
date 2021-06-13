var $navbarCollapse = $('.navbar-main .collapse'); // Collapse navigation

  $navbarCollapse.on('hide.bs.collapse', function () {
    var $this = $(this);
    $this.addClass('collapsing-out');
    $('html, body').css('overflow', 'initial');
  });
  $navbarCollapse.on('hidden.bs.collapse', function () {
    var $this = $(this);
    $this.removeClass('collapsing-out');
  });
  $navbarCollapse.on('shown.bs.collapse', function () {
    $('html, body').css('overflow', 'hidden');
  });
  $('.navbar-main .dropdown').on('hide.bs.dropdown', function () {
    var $this = $(this).find('.dropdown-menu');
    $this.addClass('close');
    setTimeout(function () {
      $this.removeClass('close');
    }, 200);
  });
  
  $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.fixed-top').addClass('on-scroll');
    } else {
       $('.fixed-top').removeClass('on-scroll');
    }
});



$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });


