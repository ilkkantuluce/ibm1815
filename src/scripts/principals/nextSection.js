import goToSection from "./goToSection";
import pauseVideoAsSectionClosed from "../useful/pauseVideoAsSectionClosed";

export default function nextSection() {
  const nextSibling = document.querySelector(".selected").nextElementSibling;
  const sectionId = nextSibling.getAttribute("data-section");
  const tocName = nextSibling.getAttribute("data-name");

  goToSection(sectionId);

  document.body.classList.remove("scroll-down");

  try {
    pauseVideoAsSectionClosed();
  } catch (error) {
    console.error(error);
  }

  // let documentTitle = document.title.replace("| IBM", "");
  // digitalData.page.pageInfo.pageID = documentTitle + ": " + tocName;
  // window.ibmStats.pageview();
}
