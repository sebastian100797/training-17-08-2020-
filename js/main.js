(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".banner").each(function () {
      var _this = $(".banner");
      _this.find(".owl-carousel").owlCarousel({
        loop: false,
        autoplay: true,
        autoplayTimeout: 7000,
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            nav: true,
            autoplay: false,
          },
          600: {
            items: 1,
            nav: false,
          },
          1000: {
            items: 1,
            nav: true,
            loop: false,
          },
        },
      });
    });
    // slide__banner
    $(document).ready(function () {
      $("ul.tabs li").click(function () {
        var tab_id = $(this).attr("data-tab");

        $("ul.tabs li").removeClass("current");
        $(".tab-content").removeClass("current");

        $(this).addClass("current");
        $("#" + tab_id).addClass("current");
      });
    });
    // tabs
    $(".counter").each(function () {
      var _this = $(this),
        countTo = _this.attr("data-count");

      $({ countNum: _this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 5000,
          easing: "linear",
          step: function () {
            _this.text(Math.floor(this.countNum));
          },
          complete: function () {
            _this.text(this.countNum);
          },
        }
      );
    });
    // count
    $(function () {
      $(".way__block-title").click(function (j) {
        var dropDown = $(this)
          .closest(".way__block-card")
          .find(".way__block-panel");
        $(this)
          .closest(".acc")
          .find(".way__block-panel")
          .not(dropDown)
          .slideUp();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(this)
            .closest(".acc")
            .find(".way__block-title.active")
            .removeClass("active");
          $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
      });
    });
    // accordion
    $(".activities__block").each(function () {
      var _this = $(".activities__block");
      _this.find(".owl-carousel").owlCarousel({
        loop: false,
        autoplay: true,
        autoplayTimeout: 7000,
        margin: 30,
        nav: true,
        dots: true,
        items: 1,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: true,
            loop: false,
          },
        },
      });
    });
    //  activities owl-carousel
    $(".testimony__block").each(function () {
      var _this = $(".testimony__block");
      _this.find(".owl-carousel").owlCarousel({
        loop: false,
        autoplay: false,
        autoplayTimeout: 7000,
        margin: 30,
        nav: true,
        dots: true,
        items: 1,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 1,
            nav: false,
          },
          1000: {
            items: 1,
            nav: true,
            loop: false,
          },
        },
      });
    });
    // testimony owl-carousel
    var wrapper = {
      click__menu: function () {
        var menu__mobile = document.querySelector(".listMenu");
        var btn__menuMb = document.querySelector(".header__top-hamburger");
        btn__menuMb.addEventListener("click", function () {
          menu__mobile.classList.toggle("showMenu");
        });
      },
    };
    wrapper.click__menu();
    // clickMenuMb
    let movetopTop = document.querySelector(".scroll");
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        movetopTop.classList.add("activeScroll");
      } else {
        movetopTop.classList.remove("activeScroll");
      }
    });

    // moveToTop
  });
})(jQuery);
