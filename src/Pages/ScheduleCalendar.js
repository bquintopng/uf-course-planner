import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Styles/ScheduleCalendar.css'; // Custom styling

const localizer = momentLocalizer(moment); // Set up moment.js localizer for the calendar

// Mock data for class schedules
const classEvents = [
    {
        title: 'CS101 - Introduction to Programming',
        start: new Date(2024, 9, 14, 10, 0), // Date format: (year, month (0-indexed), day, hour, minute)
        end: new Date(2024, 9, 14, 11, 30),
    },
    {
        title: 'MATH220 - Calculus II',
        start: new Date(2024, 9, 14, 14, 0),
        end: new Date(2024, 9, 14, 15, 30),
    },
    {
        title: 'PHY101 - Physics I',
        start: new Date(2024, 9, 15, 9, 0),
        end: new Date(2024, 9, 15, 10, 30),
    },
    {
        title: 'HIS210 - World History',
        start: new Date(2024, 9, 15, 12, 0),
        end: new Date(2024, 9, 15, 13, 30),
    },
    // Add more class events as needed
];

const ScheduleCalendar = () => {
    return (
        <div className="schedule-calendar">
            <h1>Your Weekly Class Schedule</h1>
            <Calendar
                localizer={localizer}
                events={classEvents}
                startAccessor="start"
                endAccessor="end"
                defaultView="week" // Default to week view
                style={{ height: 600, width: '100%' }} // Adjust calendar size
            />
        </div>
    );
};

export default ScheduleCalendar;
