import modals from "./modules/modals";
import tabs from "./modules/tabs";

window.addEventListener('DOMContentLoaded', () => {
    modals();

    const animals = {
        tabsSelector: '.tab',
        tabsContentSelector: '.tabs__content_container',
        activeClass: 'active'
    }

    tabs(animals);
});