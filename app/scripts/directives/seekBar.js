(function() {
  function seekBar() {
    return {
      templateUrl: '/template/directives/seek_bar.html',
      replace: true,
      restrict: 'E',
      scope: { },
      link: function(scope, element, attributes) {
          scope.value = 0;
          scope.max = 100;

          var percentString = function() {
            var value = scope.value;
            var max = scope.max;
            var percent = value / max * 100;
            return percent + "%";
          };

          scope.fillStyle = function() {
            return {width: percentString()};
          };
      }
    };
  }

  angular
    .module('blocJams')
    .directive('seekBar', seekBar)
});
