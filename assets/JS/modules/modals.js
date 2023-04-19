const modals = () => {
    const bindModal = ({triggersSelector, modalSelector, closeSelector, isImage}) => {
        const triggers = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        const closeAllModal = () => {
            const popup = document.querySelectorAll('.popup');
            popup.forEach((window) => {
                window.style.display = 'none';
                document.body.style.overflow = '';
            })
        };

        const showModal = () => {
            triggers.forEach ((trigger) => {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();

                    closeAllModal();
                    
                     modal.style.display = 'block';
                     document.body.style.overflow = 'hidden';

                     if(isImage === true) {
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

        if (closeSelector) {
         close.addEventListener('click', closeAllModal);
         }

        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                closeAllModal();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeAllModal();
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

    bindModal({
        triggersSelector: '.popup__btn_form',
        modalSelector: '.popup--form',
        closeSelector: '.popup__close'
    });
    bindModal({
        triggersSelector: '.anime__pic',
        modalSelector: '.popup--pic',
        isImage: true
    });

    bindModal({
        triggersSelector: '.popup__btn_multi',
        modalSelector: '.popup--anime',
    });

    bindModal({
        triggersSelector: '.popup__btn_next_genre',
        modalSelector: '.popup--anime_end',
    });

    bindModal({
        triggersSelector: '.popup__btn_next_anime',
        modalSelector: '.popup--genre',
    });
    showModalByTime('.popup--form', 60);
};

export default modals;