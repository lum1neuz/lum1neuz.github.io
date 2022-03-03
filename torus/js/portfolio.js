//portfolio
  // Gets the video src from the data-src on each button

  var $grid = $('#projects').isotope({
    // options
    itemSelector: '.isotope-item',
    layoutMode: 'fitRows',
    percentPosition: true
  });

  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });  
  
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function( event ) {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      var $button = $( event.currentTarget );
      $button.addClass('is-checked');
    });
  });


  var $videoSrc;
  var $videTitle;
  var $client;
  var $logo;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
    $videoTitle = $(this).data("name");
    $client = $(this).data("client");
    $logo = $(this).data("logo");
  });

  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    $("#project-name").html($videoTitle);
    $("#client-name").html(" " + $client);
    $("#clilogo").attr('src', "img/client/" + $logo)
  })



  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
  });
