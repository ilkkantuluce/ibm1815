import gsap from "gsap";

export default function goToSection(sectionId) {
  document.querySelector(".selected").classList.remove("selected");

  const $newSections = Array.from(document.querySelectorAll("#js-sections section")).find((item) => {
    return item.getAttribute("data-section") == sectionId;
  });

  $newSections.classList.add("selected");
  const $newSectionsContent = $newSections.children[1]; // bx-grid container
  gsap.fromTo(
    $newSectionsContent,
    {
      alpha: 0,
      duration: 1,
    },
    {
      alpha: 1,
    }
  );

  window.scrollTo(0, 0);
}
