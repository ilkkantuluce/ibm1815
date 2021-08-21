import expandContent from "../animations/expandContent";
import setBoxCoordsAndScrollOffset from "../useful/setBoxCoordsAndScrollOffSet";

export default function openSection(sectionId) {
  const $currentSection = Array.from(document.querySelectorAll("#js-sections section")).find((item) => {
    return item.getAttribute("data-section") == sectionId;
  });

  const tocId = $currentSection.querySelector(".js-section-close").getAttribute("data-toc-id");
  const tocTarget = document.querySelector('[data-toc-item="' + tocId + '"]');

  const tocName = document.querySelector("[data-section=" + sectionId + "]").getAttribute("data-name");
  $currentSection.classList.add("selected");
  document.querySelector("#js-transition-box").classList.add("animate");

  const [selectedBoxCoords, scrollOffset] = setBoxCoordsAndScrollOffset(tocTarget);

  expandContent(selectedBoxCoords, scrollOffset);

  document.body.classList.remove("scroll-down");

  // let documentTitle = document.title.replace("| IBM", "");
  // digitalData.page.pageInfo.pageID = documentTitle + ": " + tocName;
  // window.ibmStats.pageview();
}
