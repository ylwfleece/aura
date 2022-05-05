import React from 'react';
import './Calendar.css';

function Calendar() {
  return (
    <div className='date-picker-container'>
      <div className='date-picker show'>
        <div className='date-picker-header'>
          <span className='date-picker-header-title'>Payroll Calendar</span>
          <div className='date-picker-header-buttons selected'>
            <button className='prev-month-button month-button selected'>
              &larr;
            </button>
            <div className='current-month'>Oct 2020</div>
            <button className='next-month-button month-button selected'>
              &rarr;
            </button>
          </div>
        </div>
        <div className='date-picker-grid-header date-picker-grid'>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div className='selected'>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className='date-picker-grid-dates date-picker-grid'>
          <button className='date date-picker-other-month-date'>27</button>
          <button className='date date-picker-other-month-date'>28</button>
          <button className='date date-picker-other-month-date'>29</button>
          <button className='date date-picker-other-month-date'>30</button>
          <button className='date'>1</button>
          <button className='date'>2</button>
          <button className='date'>3</button>
          <button className='date'>4</button>
          <button className='date'>5</button>
          <button className='date'>6</button>
          <button className='date'>7</button>
          <button className='date'>8</button>
          <button className='date'>9</button>
          <button className='date'>10</button>
          <button className='date'>11</button>
          <button className='date'>12</button>
          <button className='date'>13</button>
          <button className='date'>14</button>
          <button className='date'>15</button>
          <button className='date'>16</button>
          <button className='date'>17</button>
          <button className='date'>18</button>
          <button className='date'>19</button>
          <button className='date'>20</button>
          <button className='date'>21</button>
          <button className='date'>22</button>
          <button className='date'>23</button>
          <button className='date'>24</button>
          <button className='date'>25</button>
          <button className='date selected'>26</button>
          <button className='date'>27</button>
          <button className='date'>28</button>
          <button className='date'>29</button>
          <button className='date'>30</button>
          <button className='date'>31</button>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
