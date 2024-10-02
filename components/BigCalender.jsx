'use client'

import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { calendarEvents } from '@/app/lib/data';
import { useState } from 'react';

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState(Views.WORK_WEEK);

    const handleView = (selectedView) => {
        setView(selectedView);
    };

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week", "day"]}
            view={view}
            onView={handleView}
            style={{ height: "98%" }}
            min={new Date(2024, 9, 1, 8, 0, 0)}  // Start from 8:00 AM
            max={new Date(2024, 9, 31, 17, 0, 0)}  // End at 5:00 PM
            defaultDate={new Date()}  
        />
    );
};

export default BigCalendar;
