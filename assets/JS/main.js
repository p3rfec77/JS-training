import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import timer from "./modules/timer";
import accordion from "./modules/accordion";

window.addEventListener('DOMContentLoaded', () => {
    modals();

    const animals = {
        tabsSelector: '.tab',
        tabsContentSelector: '.tabs__content_container',
        activeClass: 'active'
    }

    tabs(animals);

    forms('.popup__form');

    const deadline = '2023/08/16';
    timer(deadline);

    accordion({
        headersSelector: '.accordeon__header', 
        contentSelector: '.accordeon__content',
         activeClass: 'accordeon-active'
    });
});