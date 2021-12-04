(function () {
  "use strict";

  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }

  // ------ Navigation active state on scroll -------------
  var nav_sections = $('section');
  var main_nav = $('.nav-menu');

  $(window).on('scroll', function () {
    var current_pos = $(this).scrollTop();

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight() - 40;

      console.log("Current Position: " + current_pos);

      if (current_pos >= top && current_pos <= bottom) {
        if (current_pos <= bottom) {
          main_nav.find("li").removeClass('active');
          // console.log("Is on remove active");
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (current_pos == 40) {
        $('html, body').scrollTop(0);
        $(".menu-bar ul li:first").addClass('active');
      }

    })
  });


  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });


  /** * Easy selector helper function */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  /** * Hero type effect  */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /** * Animation on scroll */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


  // ---------- Testimonial swiper --------------
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



})()