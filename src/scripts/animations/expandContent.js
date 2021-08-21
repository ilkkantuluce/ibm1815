import gsap from "gsap";

const transitionBox = document.getElementById("js-transition-box");
const header = document.getElementById("js-sections-header");
const sections = document.getElementById("js-sections");

function onExpandComplete() {
  window.scrollTo(0, 0);
  document.getElementById("js-overlay").classList.add("display");
  document.getElementById("js-underlay").classList.add("hidden");
  document.getElementById("js-transition-box").classList.remove("animate");
}

export default function expandContent(selectedBoxCoords, scrollOffset) {
  const tl1 = gsap.timeline();
  tl1
    .set(transitionBox, {
      alpha: 0,
      y: selectedBoxCoords.top + scrollOffset,
      x: selectedBoxCoords.left,
      width: selectedBoxCoords.width,
      height: selectedBoxCoords.height,
    })
    .to(transitionBox, {
      duration: 0.25,
      alpha: 1,
    })
    .to(transitionBox, {
      duration: 0.3,
      x: 0,
      width: "100%",
      ease: "circ.out",
    })
    .to(transitionBox, {
      duration: 0.35,
      y: 0,
      height: "100%",
      ease: "circ.inOut",
    })
    .call(onExpandComplete)
    .addLabel("fade-content")
    .to(
      header,

      {
        duration: 0.5,
        alpha: 1,
      },
      "fade-content"
    )
    .to(
      sections,
      {
        duration: 0.5,
        alpha: 1,
      },
      "fade-content"
    );
}
