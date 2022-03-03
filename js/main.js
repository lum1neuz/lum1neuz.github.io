document.addEventListener("DOMContentLoaded", function (e) {
    document.body.className = '';
  });

          // ===== Scroll to Top ====
const scrollTop = document.getElementById('scrolltop')
// When the page is loaded, hide the scroll-to-top button
window.onload = () => {
 scrollTop.style.visibility = "hidden";
 scrollTop.style.opacity = 0;
}
// If the page is scrolled more than 200px,
// display the scroll-to-top button
// Otherwise keep the button hidden
window.onscroll = () => {
 if (window.scrollY > 200) {
 scrollTop.style.visibility = "visible";
 scrollTop.style.opacity = 1;
 } else {
 scrollTop.style.visibility = "hidden";
 scrollTop.style.opacity = 0;
 }
};


//swiper
  var autoplay = 5000;

var galleryThumbs = new Swiper('.gallery-thumbs', {
  slidesPerView: 'auto',
  breakpoints: {
    // when window width is >= 320px
    320: {
      touchRatio: 1,
    },
    // when window width is >= 640px
    960: {
      touchRatio: 0,
    }
  }
});

var galleryTop = new Swiper('.gallery-top', {
  effect: 'fade',
  controller: {
    control: galleryThumbs
  },
  thumbs: {
    swiper: galleryThumbs,
  },
  autoplay: {
    delay: autoplay,
    disableOnInteraction: false
  },
  on: {
    init: function () {
      $(".swiper-progress-bar").removeClass("animate");
      $(".swiper-progress-bar").removeClass("active");
      $(".swiper-progress-bar").eq(0).addClass("animate");
      $(".swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionStart: function () {
      $(".swiper-progress-bar").removeClass("animate");
      $(".swiper-progress-bar").removeClass("active");
      $(".swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionEnd: function () {
      $(".swiper-progress-bar").eq(0).addClass("animate");
    }
  }
});
