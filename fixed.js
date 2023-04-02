jQuery(function($) {
    function fixDiv() {
      var $cache = $('#header');
      if ($(window).scrollTop() > 637)
        $cache.css({
          'position': 'fixed',
          'top': '0px'
        });
      else
        $cache.css({
          'position': 'relative',
          'top': '637px'
        });
    }
    $(window).scroll(fixDiv);
    fixDiv();
  });