import React from 'react'
import './UpcomingSchedule.css'
import SimpleAppointmentCard from '../SimpleAppointmentCard'

function UpcomingSchedule() {
  return (
    <div className='upcomingschedule'>
      <h3 className="section-title">The Upcoming Schedule</h3>

      <p style={{ margin: '10px 5px 10px 40px' }}>On Thursday</p>
      <div className='firstschedule'>

        <SimpleAppointmentCard title="Health checkup complete" time="11:00 AM" icon="💉" width="250px" />
        <SimpleAppointmentCard title="Ophthalmologist" time="14:00 PM" icon="👁️" width="200px" />
      </div>
      <p style={{ margin: '10px 5px 10px 40px' }}>On Saturday</p>
      <div className='firstschedule'>

        <SimpleAppointmentCard title="Cardiologist" time="12:00 AM" icon="❤️" width="200px" />
        <SimpleAppointmentCard title="Neurologist" time="16:00 PM" icon="👨‍⚕️" width="200px" />
      </div>



    </div>




  )
}

export default UpcomingSchedule
