import React from 'react';
import PropTypes from 'prop-types';

import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem/';

import styles from './UpcomingDaysForecast.module.css';

const UpcomingDaysForecast = ({ days }) =>  (
    <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
        {days.map((day, index) => (
            <UpcomingDaysForecastItem {...day} key={`${day.weekday}-${index}`} />
        ))}
    </ul>
);
    
UpcomingDaysForecast.propTypes = {
    days: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;
