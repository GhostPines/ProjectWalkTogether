import { useEffect, useRef, useState } from 'react';
import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';

const Calendar: React.FC = () => {
    const calendarEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!calendarEl.current) return;

        const calendar = new VanillaCalendar(calendarEl.current, {
            settings: {
                lang: 'en',
                selection: {
                    time: 12,
                },
            },
        });
        console.log(calendar);
        calendar.init();
    }, [calendarEl]);

    return <div ref={calendarEl}></div>;

    return <div ref={calendarEl}></div>;
};

export default Calendar;
