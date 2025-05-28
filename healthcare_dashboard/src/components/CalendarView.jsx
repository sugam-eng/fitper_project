import React from 'react'
import './CalendarView.css'
import calendarData from './calendarData'
function CalendarView() {
  return (
    <div className="calendar-view">
      <h3 className="section-title" style={{ color: '#191968', fontSize: '18px' }}>October 2021 <span> </span></h3>
      <div className="calendar-grid">
        {calendarData.days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day.active ? 'active' : ''}`}
          >
            <div className='date'>{day.day}</div>
            <div className="date-number">{day.date}</div>
            <div className="time-slots">
              {day.slots.map((slot, idx) => (
                <span key={idx} className="slot">
                  {slot}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='cards'>

        <div className="dentistcard">

          <h4>Dentist <span style={{ marginLeft: '40px' }}>🦷</span></h4>

          <p className='time'>09.00-11.00</p>
          <p className='names'>Dr.Cameron Williamson</p>

        </div>
        <div className='appointmentcard'>
          <h4>Physiotherapy Appointment  <span style={{ marginLeft: '40px' }}>💪</span></h4>
          <p className='time'>09.00-11.00</p>
          <p className='names'>Dr.Kevin Djones</p>

        </div>


      </div>

    </div>
  )
}

export default CalendarView

