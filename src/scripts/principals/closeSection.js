import contractContent from "../animations/contractContent";
import setBoxCoordsAndScrollOffset from "../useful/setBoxCoordsAndScrollOffSet";
import pauseVideoAsSectionClosed from "../useful/pauseVideoAsSectionClosed";

export default function closeSection() {
  window.scrollTo(0, 0);

  const $currentSection = document.querySelector(".selected");

  var tocId = $currentSection.querySelector(".js-section-close").getAttribute("data-toc-id");
  var tocTarget = document.querySelector('[data-toc-item="' + tocId + '"]');

  const [selectedBoxCoords, scrollOffset] = setBoxCoordsAndScrollOffset(tocTarget);
  contractContent(selectedBoxCoords, scrollOffset);

  try {
    pauseVideoAsSectionClosed();
  } catch (error) {
    console.error(error);
  }
}
