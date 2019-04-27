(function(){
  var header = '.js-header';
  var $header = $(header);
  var button = '.js-header-button';
  var $button = $(button);
  var link = '.l-header__link';
  var $link = $(link);
  var newsletterButton = '.l-header__newsletter .l-header__link';
  var $newsletterButton = $(newsletterButton);
  var newsletterDropdown = '.l-header__dropdown';
  var $newsletterDropdown = $(newsletterDropdown);
  var newsletter = '.c-newsletter';
  var $newsletter = $(newsletter);
  var newsletterField = '.c-newsletter__field';
  var $newsletterField = $(newsletterField);

  $(document).ready(function() {
    var firstPath = $(location).attr('pathname').split('/')[1];
    $link.each(function() {
      if ( firstPath && $(this).attr('href') ) {
        var destination = $(this).attr('href').split('/')[1];
        if ( firstPath === destination ) {
          $(this).addClass('is-current');
        }
      }
    });
  });

  $(document).on('click', button, function(e) {
    e.stopPropagation();
    if ( $header.hasClass('is-open') ) {
      $header.removeClass('is-open');
    } else {
      $header.addClass('is-open');
    }
  });

  $(document).on('click', function() {
    if ( $header.hasClass('is-open') ) {
      $header.removeClass('is-open');
    }
    if ( $newsletterDropdown.hasClass('is-open') ) {
      $newsletterDropdown.removeClass('is-open');
    }
  });

  $(document).on('click', header, function(e) {
    e.stopPropagation();
  });

  $(document).on('click', newsletterButton, function(e) {
    e.stopPropagation();
    if ( $newsletterDropdown.hasClass('is-open') ) {
      $newsletterDropdown.removeClass('is-open');
    } else {
      $newsletterDropdown.addClass('is-open');
      $newsletterDropdown.on('transitionend', function() {
        $newsletterField.focus();
      });
    }
  });

  $(document).on('submit', newsletter, function(e) {
    $newsletterDropdown.removeClass('is-open');
  });
})();
