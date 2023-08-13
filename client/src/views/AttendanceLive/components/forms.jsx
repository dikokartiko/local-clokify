import { React, useState, useEffect } from "react";
import dateFormat from 'dateformat';

function FormsAttendance() {
    const FormatCurrentTime = () => {
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    const getCurrentDate = () => {
        return dateFormat(new Date(), "dddd, dS mmmm yyyy");
    }

    const getScheduleDate = () => {
        return dateFormat(new Date(), "dS mmmm yyyy");
    }
    
    const [currentTime, setCurrentTime] = useState(FormatCurrentTime);
    const [currentDate, setCurrentDate] = useState(getCurrentDate);
    const [scheduleDate, setScheduleDate] = useState(getScheduleDate);

    useEffect(() => {
        setInterval(() => setCurrentTime(FormatCurrentTime), 1000);//in milisecond
        setInterval(() => setCurrentDate(getCurrentDate), 10000000);//in milisecond
        setInterval(() => setScheduleDate(getScheduleDate), 10000000);//in milisecond
    }, []);

    return (
        <div className="custom-attendance-live">
            <div className="attendance-live-head">
                <p className='font-semibold'>{currentTime}</p>
                <small className='font-medium'>{currentDate}</small>
            </div>
            <div className="attendance-live-body">
                <small className='font-medium'>Schedule, {scheduleDate}</small>
                <p className='font-semibold'>SH1</p>
                <p className='font-semibold'>09.00 AM - 17.00 PM</p>
                <div className='custom-input'>
                    <textarea placeholder='Notes'></textarea>
                    <div className='card-item-custom mt-4'>
                        <button className="text-sm buttonClockIn">
                            Clock In
                        </button>
                        <button className="text-sm buttonClockOut">
                            Clock Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormsAttendance;