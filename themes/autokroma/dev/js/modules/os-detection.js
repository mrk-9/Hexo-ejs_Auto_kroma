(function(){
  var link = '.js-os-detect';
  var $link = $(link);
  var platform = window.navigator.platform;
  var macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  var windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  var os = null;

  $link.each(function() {
    var url;
    console.log($(this).attr('if-mac'));
    if (macosPlatforms.indexOf(platform) !== -1) {
      url = $(this).attr('if-mac');
      //console.log(url);
      if ( url && url != '' ) {
        $(this).attr('href', url);
        $(this).addClass('is-mac');
        //$(this).text("salut");
      }
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      url = $(this).attr('if-windows');
      //console.log(url);
      if ( url && url != '' ) {
        $(this).attr('href', url);
        $(this).addClass('is-windows');
      }
    }
  });
})();
