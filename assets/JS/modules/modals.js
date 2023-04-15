const popup = {
    triggersSelector: '.popup__btn',
    modalSelector: '.popup',
    closeSelector: '.popup__close'
}

const popupPic = {
    triggersSelector: '.anime__pic',
    modalSelector: '.popup-pic',
    closeSelector: '.popup-pic',
}

const modals = () => {
    const bindModal = ({triggersSelector, modalSelector, closeSelector}) => {
        const triggers = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        const showModal = () => {
            triggers.forEach ((trigger) => {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                     modal.style.display = 'block';
                     document.body.style.overflow = 'hidden';

                     if(modalSelector === '.popup-pic') {
                        modal.style.display = 'flex';
                        modal.innerHTML = '';
                        const pic = trigger.getAttribute('src');
                        const largePic = document.createElement('img');
                        largePic.setAttribute('src', pic);
                        largePic.classList.add('large-pic');
                        modal.append(largePic);
                     }
                });
            });
        };

        const closeModal = () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        };

        close.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                closeModal();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            };
        });

        showModal();
    };

    const showModalByTime = (selector, time) => {

        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time * 1000);
    };

    bindModal(popup);
    bindModal(popupPic);
    showModalByTime('.popup', 30);
};

export default modals;