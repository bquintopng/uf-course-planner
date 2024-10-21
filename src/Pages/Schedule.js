import React from 'react';
import './Styles/Schedule.css'; // Optional for custom styles
import ScheduleCalendar from './ScheduleCalendar';

const Schedule = () => {
    return (
        <div>
            <h2>Schedule</h2>
            <p>Here you can view and manage your schedule.</p>
            <ScheduleCalendar />
        </div>
    );
};

export default Schedule;