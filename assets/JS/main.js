import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import timer from "./modules/timer";

window.addEventListener('DOMContentLoaded', () => {
    modals();

    const animals = {
        tabsSelector: '.tab',
        tabsContentSelector: '.tabs__content_container',
        activeClass: 'active'
    }

    tabs(animals);

    forms('.popup__form');

    const deadline = '2023/04/16';
    timer(deadline);
});