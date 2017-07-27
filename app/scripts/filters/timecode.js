(function() {
  function timecode() {
    return function(seconds) {
      var seconds = Number.parseFloat(seconds);

      if (Number.isNaN(seconds)) {
        return '-:--';
      }

      var wholeSeconds = Math.floor(seconds);
      var minutes = Math.floor(wholeSeconds / 60);
      var remainingSeconds = wholeSeconds % 60;

      var output = minutes + ':';

    /*Adds placeholder 0 for when seconds are single digit #s*/
      if(remainingSeconds < 10) {
        output += '0'
      }

      output += remainingSeconds;

      return output;
    };
  }

  angular
    .module('blocJams')
    .filter('timecode', timecode);
})();
