const accordeon = ({headersSelector, contentSelector, activeClass}) => {
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

            content.forEach((block) => {
                block.style.display = 'none';
            });

            content[i].style.display = 'block';
        });
    });
};

export default accordeon;