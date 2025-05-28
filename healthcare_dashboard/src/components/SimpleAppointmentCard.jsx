import React from 'react'
import './SimpleAppointmentCard.css'

function SimpleAppointmentCard({ title, time, icon, width }) {
  return (
    <div className="appointment-card" style={{ width }}>
      <span className="appointment-title">
        <span className="title-text">{title}</span>
        <span className="icon">{icon}</span>
      </span>
      <span className="appointment-time">{time}</span>
    </div>
  )
}

export default SimpleAppointmentCard
