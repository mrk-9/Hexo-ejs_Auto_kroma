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
