
import closeSection from "../principals/closeSection";
import openSection from "../principals/openSection";
import nextSection from "../principals/nextSection";

export default function addEventListenerCustom(elements, functionType){

  const functions= {
    "open": {
      run:  openSection, 
      hasID: true
    },
    "next": {
      run: nextSection,
      hasID: false
    },
    "close": {
      run:closeSection,
      hasID: false
    }
  };
  const handler = functions[functionType];

  elements.forEach((elem)=>{
  
    elem.addEventListener("click", function(){
      let id = this.getAttribute("href");
      handler.hasID == true ?  handler.run(id.replace("#", "")) : handler.run()
      
      window.history.pushState("", document.title, id);
    });
  });

}