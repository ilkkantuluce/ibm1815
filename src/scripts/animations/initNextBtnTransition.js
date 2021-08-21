export default function initNextBtnTransition() {
  const nextBtns = document.querySelectorAll(".block--section-next-container");

  const observer = new IntersectionObserver((entries)=>{
    
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.children[0].classList.add('section-end');
      } else {
        entry.target.children[0].classList.remove('section-end');
      }
    });
  })

  nextBtns.forEach((btn)=>{
    observer.observe(btn)
  })


}