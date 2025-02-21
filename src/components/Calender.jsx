import { useState } from "react";
import "./Calendar.css";

const Calender = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const currentDate = new Date();

    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    return (
        <div className="calendar">
            <div className="navigate-date">
                <h2 className="month">{months[currentMonth]},</h2>
                <h2 className="year">{currentYear}</h2>
                <div className="buttons">
                    <i className="bx bx-chevron-left" onClick={prevMonth}></i>
                    <i className="bx bx-chevron-right" onClick={nextMonth}></i>
                </div>
            </div>
            <div className="weekdays">
                {daysOfWeek.map((day) => (
                    <span key={day}>{day}</span>
                ))}
            </div>
            <div className="days">
                {[...Array(firstDayOfMonth).keys()].map((_, index) => (
                    <span key={`empty-${index}`}></span>
                ))}

                {[...Array(daysInMonth).keys()].map((day) => (
                    <span
                        key={day + 1}
                        className={
                            day + 1 === currentDate.getDate() &&
                            currentMonth === currentDate.getMonth() &&
                            currentYear === currentDate.getFullYear()
                                ? "current-day"
                                : ""
                        }
                    >
                        {day + 1}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Calender;
