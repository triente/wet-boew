/* Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt */

(function($) {
  var _calculate_width;
  _calculate_width = void 0;
  _calculate_width = function() {
    $("[class*=\"span-\"]").children().each(function() {
      var _elm;
      _elm = void 0;
      _elm = $(this);
      if (_elm.find(".dimensions")) {
        _elm.find(".dimensions").remove();
      }
      return _elm.append("<small class=\"dimensions\">width: " + (_elm.width()) + "</small>");
    });
    return void 0;
  };
  _calculate_width();
  $(window).resize(function() {
    _calculate_width();
    return void 0;
  });
  return void 0;
})(jQuery);

(function($) {
  var _equalize;
  return _equalize = function(_elm) {
    var tallest, _group;
    _group = $(_elm).find('[class*="span-"]');
    _group.css("min-height", "0");
    if (_group.length > 0) {
      tallest = 0;
      _group.each(function() {
        var thisHeight;
        thisHeight = $(this).height();
        if (thisHeight > tallest) {
          return tallest = thisHeight;
        }
      });
      _group.css("min-height", "" + tallest + "px");
    }
    void 0;
    $(document).on('pagebeforecreate throttledresize', '.equalize', function() {
      _equalize(this);
      return void 0;
    });
    _equalize('.equalize');
    return void 0;
  };
})(jQuery);

