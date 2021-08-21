const pauseVideoAsSectionClosed = () => {
  let videosToPause = document.querySelectorAll(".bx--video-player__video");

  if (videosToPause.length >= 1) {
    for (let i = 0; i < videosToPause.length; i++) {
      if (videosToPause[i].classList.contains("kWidgetIframeContainer")) {
        videosToPause[i].sendNotification("doPause");
      }
    }
  }
};
export default pauseVideoAsSectionClosed;
