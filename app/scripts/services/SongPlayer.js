(function() {
  function SongPlayer() {
    var SongPlayer = {};

    var currentSong = null;
    var currentBuzzObject = null;

    SongPlayer.play = function(song) {
      if (currentSong !== song) {
        if (currentBuzzObject) {
          currentBuzzObject.stop();
          currentSong.playing = null;
        }

        currentBuzzObject = new buzz.sound(song.audioUrl, {
          formats: ['mp3'],
          preload: true
        });

        currentSong = song;
        currentBuzzObject.play();
        song.playing = true;

      } else if (currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          currentBuzzObject.play();
        }
      }
    };

    SongPlayer.pause = function(song) {
      currentBuzzObject.pause();
      song.playing = false;
    };

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})
