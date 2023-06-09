const accordion = ({headersSelector, contentSelector, activeClass}) => {
    const headers = document.querySelectorAll(headersSelector);
    const content = document.querySelectorAll(contentSelector);

    headers.forEach((header, i) => {
        header.addEventListener('click', (e) => {
            if (e.target === header || e.target.parentNode === header) {
                headers.forEach((header) => {
                    header.classList.remove(activeClass);
                });
                header.classList.add(activeClass);
            }

            content[i].style.maxHeight = content[i].style.maxHeight ? content[i].style.maxHeight = null : content[i].style.maxHeight = content[i].scrollHeight + 'px';
        });
    });
};

export default accordion;