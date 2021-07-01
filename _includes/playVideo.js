var autoPlayVideo = document.getElementById("bg-video");
    autoPlayVideo.oncanplaythrough = function () {
      autoPlayVideo.muted = true;
      autoPlayVideo.play();
      autoPlayVideo.pause();
      autoPlayVideo.play();
    }