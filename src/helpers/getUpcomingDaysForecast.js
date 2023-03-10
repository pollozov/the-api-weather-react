import moment from 'moment';

const getWeekday = date => moment(date).format('dddd').substring(0, 3);

const getUpcomingDaysForecast = data => {
    let currentDay = moment().day()
    const mapped = data.filter((day) => {
        const newDay = moment(day.dt_txt).day()
        if (newDay !== currentDay && moment(day.dt_txt).hour() === 12) {
            currentDay = newDay
            return day
        }
    }).map((day) => ({
        imgUrl: day.weather[0].icon,
        temperature: Math.round(day.main.temp_max),
        weekday: getWeekday(day.dt_txt),
    }))
    return mapped;
}

export default getUpcomingDaysForecast;
