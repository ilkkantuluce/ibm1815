import openSection from "../principals/openSection";
import closeSection from "../principals/closeSection";
import goToSection from "../principals/goToSection";

export default function checkHash() {
  let hashHistory = "";

  if (window.location.hash.length === 0) {

    // let documentTitle = document.title.replace("| IBM", "");
    // digitalData.page.pageInfo.pageID = documentTitle;
    // window.ibmStats.pageview();

    if (document.querySelectorAll(".selected").length > 0) {
      hashHistory = "";
      closeSection();
    }
  } else {
    var hashId = window.location.hash.replace("#", "");
    if (hashId === "") {
      if (document.querySelectorAll(".selected").length > 0) {
        closeSection();
      }
    } else if (hashId !== hashHistory) {
      if (document.querySelectorAll(".selected").length < 1) {
        openSection(hashId);
      } else {
        goToSection(hashId);
      }
    }
    hashHistory = hashId;
  }
}
