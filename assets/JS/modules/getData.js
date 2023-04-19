const getData = (dataContainer) => {
    const genre = document.querySelector('.popup_selector_genre');
    const favAnime = document.querySelector('.popup__text_anime');

    favAnime.addEventListener('input', (e) => {
        dataContainer['favAnime'] = favAnime.value;
        console.log(dataContainer);
    });

    dataContainer['genre'] = genre.value;
    genre.addEventListener('change', () => {
        dataContainer['genre'] = genre.value;
        console.log(dataContainer);
    });
};

export default getData;