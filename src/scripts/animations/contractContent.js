import gsap from "gsap";

const transitionBox = document.getElementById("js-transition-box");
const header = document.getElementById("js-sections-header");
const sections = document.getElementById("js-sections");

function onContentFade() {
  const currentSection = document.querySelector(".js-section.selected");
  currentSection != null && currentSection.classList.remove("selected");

  document.getElementById("js-overlay").classList.remove("display");
  document.getElementById("js-underlay").classList.remove("hidden");
  document.getElementById("js-transition-box").classList.add("animate");
}

function onContractComplete() {
  document.getElementById("js-transition-box").classList.remove("animate");
}
export default function contractContent(selectedBoxCoords, scrollOffset) {
  const tl1 = gsap.timeline({ onComplete: onContractComplete });
  tl1
    .to(
      header,

      {
        duration: 0.5,
        alpha: 0,
      },
      0
    )
    .to(
      sections,

      {
        duration: 0.5,
        alpha: 0,
      },
      0
    )
    .add(onContentFade)
    .to(transitionBox, {
      duration: 0.15,
      y: selectedBoxCoords.top + scrollOffset,
      height: selectedBoxCoords.height,
    })
    .to(transitionBox, {
      duration: 0.15,
      x: selectedBoxCoords.left,
      width: selectedBoxCoords.width,
    })
    .to(transitionBox, {
      duration: 0.15,
      alpha: 0,
    });
}
