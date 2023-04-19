import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import timer from "./modules/timer";
import accordion from "./modules/accordion";
import getData from "./modules/getData";

window.addEventListener('DOMContentLoaded', () => {
    modals();

    const animals = {
        tabsSelector: '.tab',
        tabsContentSelector: '.tabs__content_container',
        activeClass: 'active'
    }

    tabs(animals);

    const data = {};
    forms('.popup__form', data);

    const deadline = '2023/08/16';
    timer(deadline);

    accordion({
        headersSelector: '.accordeon__header', 
        contentSelector: '.accordeon__content',
         activeClass: 'accordeon-active'
    });

    getData(data);
});