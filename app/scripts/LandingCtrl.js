(function(){
  function LandingCtrl() {
    this.heroTitle = "Turn the Music Up!"
  }

  angular
    .module('blockJams')
    .controller('LandingCtrl', LandingCtrl);
})();
