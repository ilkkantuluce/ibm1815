// const isVideo = () => {
//   const el = document.querySelector('.block--toc-play-pause-wrapper');
//   return (typeof(el) !== 'undefined' && el !== null) ? true : false;
// };

// const isMobile = () => {
//   return (window.screen.width < 1312) ? true : false;
// }

// const applyContinuity = () => {
//   const video = document.getElementById("toc-bg-video");
//   const pauseIcon = document.querySelector('.block--toc-pause-icon');
//   const playIcon = document.querySelector('.block--toc-play-icon');

//   pauseIcon.addEventListener("click", () => {
//     video.pause()
//     pauseIcon.classList.toggle("hidden");
//     playIcon.classList.toggle("hidden");
//   });

//   playIcon.addEventListener("click", () => {
//     video.play()
//     playIcon.classList.toggle("hidden");
//     pauseIcon.classList.toggle("hidden");
//   });
// }

// const changeToMobile = () => {
//   const buttonWrapper = document.querySelector(".block--toc-pp-wrapper");
//   const socialBlock = document.querySelector(".block--share");
//   socialBlock.appendChild(buttonWrapper);
// }

// const changeToDesktop = () => {
//   const buttonWrapper = document.querySelector(".block--toc-pp-wrapper");
//   const tocHeading = document.querySelector(".block--toc-heading");
//   tocHeading.appendChild(buttonWrapper);
// }

// isVideo() && applyContinuity();
// isMobile() && changeToMobile();

// window.addEventListener("resize", () => {
//   isMobile() ? changeToMobile() : changeToDesktop();
// })

const tocPlayPlauseButton = document.querySelector('.block--toc-play-pause');
const tocVideo = document.querySelector('#toc-bg-video');

if (tocPlayPlauseButton && tocVideo) {
  tocPlayPlauseButton.addEventListener('click', function() {
    tocPlayPlauseButton.classList.toggle('video-paused');
    if(tocVideo.paused) {
      tocVideo.play();
    }
    else {
      tocVideo.pause();
    }
  });
}
