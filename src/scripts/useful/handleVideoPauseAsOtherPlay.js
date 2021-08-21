export default function handleVideoPauseAsOtherPlay() {
  let videoTrigger = document.querySelectorAll('.bx--video-player');
  if(videoTrigger.length >= 1){
    for (let v = 0; v < videoTrigger.length; v++) {
      videoTrigger[v].addEventListener('click', function () {
        kWidget.addReadyCallback(function (playerId) {
          let kVideo = document.getElementById(playerId);
  
          kVideo.kBind('doPlay', function () {
            let kVideoPause = document.querySelectorAll(
              '.bx--video-player__video:not(#' + playerId + ')'
            );
            for (let i = 0; i < kVideoPause.length; i++) {
              kVideoPause[i].sendNotification('doPause');
            }
          });
        });
      });
    }
  } 
};
