!function(root, factory) {
    "function" == typeof define && define.amd ? // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function() {
        return root.svg4everybody = factory();
    }) : "object" == typeof exports ? module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.0 | github.com/jonathantneal/svg4everybody */
    function embed(svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.getAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            svg.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""),
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)),
                    // embed the target into the svg
                    embed(item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], svg = use.parentNode;
                if (svg && /svg/i.test(svg.nodeName)) {
                    var src = use.getAttribute("xlink:href");
                    if (polyfill && (!opts.validate || opts.validate(src, svg, use))) {
                        // remove the <use> element
                        svg.removeChild(use);
                        // parse the src and get the url and id
                        var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                        // if the link is external
                        if (url.length) {
                            // get the cached xhr request
                            var xhr = requests[url];
                            // ensure the xhr request exists
                            xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(),
                            xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                            xhr._embeds.push({
                                svg: svg,
                                id: id
                            }), // prepare the xhr ready state change event
                            loadreadystatechange(xhr);
                        } else {
                            // embed the local id into the svg
                            embed(svg, document.getElementById(id));
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use");
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    return svg4everybody;
});

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

(function(){
  svg4everybody();
})();

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

(function(){
  var pricing = '.c-pricing';
  var $pricing = $(pricing);
  var range = '.c-pricing__range';
  var $range = $(range);
  var licenseNumber = $('.c-pricing__license-number');

  $(document).on('input', range, function(e) {
    var value = $(this).val();
    licenseNumber.html(value);
  });
})();
