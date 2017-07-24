(function() {
  function seekBar() {
    return {
      templateUrl: '/template/directives/seek_bar.html',
      replace: true,
      restrict: 'E'
    };
  }

  angular
    .module('blocJams')
    .directive('seekBar', seekBar)
});
