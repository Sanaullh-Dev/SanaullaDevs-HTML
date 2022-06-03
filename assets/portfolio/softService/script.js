$(function () {

  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }

  $(document).ready(function () {
    aos_init();
    $('#header').addClass('header-scrolled');
  })



  // ------------back top top --------------------
  $(window).scroll(function () {

    if ($(this).scrollTop() < 100) {
      $('.back-to-top').removeClass('active');
    } else {
      $('.back-to-top').addClass('active');
    }

  })



  // ------- Header showing and hide funcation -----------
  var pagescroll = window.pageYOffset;

  $(window).scroll(function () {
    if ($(window).width() > 990) {
      var currentscroll = window.pageYOffset;
      if ($(this).scrollTop() < 100) {
        $('#header').removeClass('header-scrolled');
      }

      else if (pagescroll > currentscroll) {
        document.getElementById('header').style.top = "0";
        $('#header').addClass('header-scrolled');
      }
      else {
        document.getElementById('header').style.top = "-80px";
        $('#header').removeClass('header-scrolled');
      }
      pagescroll = currentscroll;
    }
  });


  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 15000, 'easeInOutExpo');
      }
    }
  });



  // ========= mobile Menu Toggle ================

  $('.mobile-nav-toggle').click(function (e) {
    e.preventDefault();
    console.log("click mobile toggle");
    $(this).toggleClass('bx-menu');
    $(this).toggleClass('bx-x');
    $('#menu-bar').toggleClass('navbar-mobile');
  });

  // ------------ dropdown menu showing -----------------
  $(".dropdown > .menu-link").click(function () {
    if ($(window).width() < 991) {
      $('.dropdown').toggleClass('dropdown-show');
    }
  });

  // ------------ Deep dropdown menu showing -----------------
  $(".deepdropdown > .dmenu-link").click(function () {
    if ($(window).width() < 991) {
      $('.deepdropdown').toggleClass('deepdropdown-show');
    }
  });



  // ------ Navigation active state on scroll -------------
  var nav_sections = $('section');
  var main_nav = $('.menu-bar');

  $(window).on('scroll', function () {
    var current_pos = $(this).scrollTop();

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight() - 40;

      console.log("Current Position: " + current_pos);

      if (current_pos >= top && current_pos <= bottom) {
        if (current_pos <= bottom) {
          main_nav.find(".menu-link").removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
      if (current_pos == 40) {
        $('html, body').scrollTop(0);
        $(".menu-bar li:first .menu-link").addClass('active');
      }

    })
  });




  //  ------------ clients-slider -------------------------
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      580: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 120
      }
    }
  })

  // ------------------ Testimonials-slider ----------------------
  new Swiper(".testimonials-slider", {
    // slidesPerView: 3,
    speed: 600,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 3,
      }
    }

  });

});