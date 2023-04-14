const timer2 = (deadline) => {

    const getTime = (endtime) => {
        const timeGap = Date.parse(deadline) - Date.parse(new Date());
        let timeGapDate = new Date(timeGap).toLocaleDateString(undefined, { day: '2-digit' });
        let timeGapTime = new Date(timeGap).toLocaleTimeString();

        if (timeGap <= 0) {
            timeGapDate = '00';
            timeGapTime = '00:00:00';
        }

        const timings = {
            total: timeGap,
            days: timeGapDate,
            hours: timeGapTime.split(':')[0],
            minutes: timeGapTime.split(':')[1],
            seconds: timeGapTime.split(':')[2]
        }

        return timings;
    }

    getTime(deadline);

    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    const setClock = () => {
        const t = getTime(deadline).total; 
        days.textContent = getTime(deadline).days;
        hours.textContent = getTime(deadline).hours;
        minutes.textContent = getTime(deadline).minutes;
        seconds.textContent = getTime(deadline).seconds;

        if (t <= 0) {
          clearInterval(interval);  
        }
    };
    

    const interval = setInterval(setClock, 1000);
};

export default timer2;