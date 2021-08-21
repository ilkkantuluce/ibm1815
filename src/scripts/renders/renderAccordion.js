import { Accordion } from 'carbon-components';

const renderAccordion = () => {
    let accordions = document.getElementsByClassName('bx--accordion');
    
    for (let i = 0; i < accordions.length; i++) {
        let accordionActive = Accordion.create(accordions.item(i));
    }
}
export default renderAccordion