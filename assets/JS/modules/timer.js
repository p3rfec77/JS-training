const timer = (deadline) => {
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTime = (endtime) => {
        const time = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor(time / 1000) % 60;
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        const allTimings = {
            time,
            days,
            hours,
            minutes,
            seconds
        };

        return allTimings;
    };

    const setTimings = (endtime) => {

        const setClock = () => {
            const t = getTime(endtime).time;
            days.textContent = addZero(getTime(endtime).days);
            hours.textContent = addZero(getTime(endtime).hours);
            minutes.textContent = addZero(getTime(endtime).minutes);
            seconds.textContent = addZero(getTime(endtime).seconds);

            if (t <= 0) {
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';

            clearInterval(interval);
            }
        };

        const days = document.querySelector('#days');
        const hours = document.querySelector('#hours');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');
        const interval = setInterval(setClock, 1000);
    }

    getTime(deadline);
    setTimings(deadline);
};

export default timer;