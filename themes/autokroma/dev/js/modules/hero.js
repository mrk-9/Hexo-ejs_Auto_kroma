(function(){
  var hero = '.js-hero';
  var $hero = $(hero);
  var button = '.js-hero-button';
  var $button = $(button);
  var menu = '.js-hero-menu';
  var $menu = $(menu);

  $(document).on('click', button, function(e) {
    e.stopPropagation();
    if ( $hero.hasClass('is-open') ) {
      $hero.removeClass('is-open');
    } else {
      $hero.addClass('is-open');
    }
  });

  $(document).on('click', function() {
    if ( $hero.hasClass('is-open') ) {
      $hero.removeClass('is-open');
    }
  });

  $(document).on('click', menu, function(e) {
    e.stopPropagation();
  });
})();
