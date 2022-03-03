//about
 // Gets the video src from the data-src on each button

 var $videoSrc;
 $('.video-btn').click(function () {
   $videoSrc = $(this).data("src");
 });

 // when the modal is opened autoplay it  
 $('#myModal').on('shown.bs.modal', function (e) {

   // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
   $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
 })

 // stop playing the youtube video when I close the modal
 $('#myModal').on('hide.bs.modal', function (e) {
   // a poor man's stop video
   $("#video").attr('src', $videoSrc);
 });


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

var videoLinks = new Swiper('.video-links', {
  calculateHeight:false,
  calculateWidth: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});

var galleryTop = new Swiper('.gallery-top', {
  effect: 'fade',
  controller: {
    control: galleryThumbs,
    control: videoLinks
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
