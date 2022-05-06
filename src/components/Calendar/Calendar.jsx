import React, { useEffect, useState } from 'react';
import './Calendar.css';
import {
  format,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
} from 'date-fns';
import { elementAcceptingRef } from '@mui/utils';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  //   const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())

  const [selectedDate, setSelectedDate] = useState(currentDate);

  const [monthDates, setMonthDates] = useState([]);

  useEffect(() => {
    console.log('current date', currentDate);
    const monthDatesResult = getMonthDates(currentDate);
    setMonthDates(monthDatesResult);
    console.log('monthDates', monthDates);
  }, [currentDate]);

  const getMonthDates = (currentDate) => {
    console.log('start of Month', startOfMonth(currentDate));
    const startDay = startOfWeek(startOfMonth(currentDate));
    const endDay = endOfWeek(endOfMonth(currentDate));
    console.log('endDay', endDay);
    const eachDayOfCalendarMonth = eachDayOfInterval({
      start: startDay,
      end: endDay,
    });
    // console.log('each day of current calendar', eachDayOfCalendar);
    return eachDayOfCalendarMonth;
  };

  const handleNext = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  const handlePrev = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

  return (
    <div className='date-picker-container'>
      <div className='date-picker'>
        <div className='date-picker-header'>
          <span className='date-picker-header-title'>Payroll Calendar</span>
          <div className='date-picker-header-buttons selected'>
            <button
              className='prev-month-button month-button selected'
              onClick={handlePrev}
            >
              &larr;
            </button>
            <div className='current-month'>
              {format(currentDate, 'MMM yyyy')}
            </div>
            <button
              className='next-month-button month-button selected'
              onClick={handleNext}
            >
              &rarr;
            </button>
          </div>
        </div>
        <div className='date-picker-grid-header date-picker-grid'>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className='date-picker-grid-dates date-picker-grid'>
          {monthDates.map((day) => {
            return isSameMonth(currentDate, day) ? (
              <button
                key={day}
                className={
                  isSameDay(selectedDate, day) ? 'date selected' : 'date'
                }
              >
                {day.getDate()}
              </button>
            ) : (
              <button className='date date-picker-other-month-date'>
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
