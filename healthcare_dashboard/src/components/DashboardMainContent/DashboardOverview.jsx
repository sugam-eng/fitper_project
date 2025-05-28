import React from 'react'
import HealthStatusCards from './HealthStatusCards'
import AnatomySection from './AnatomySection'
import './DashboardOverview.css'

function DashboardOverview() {
  return (
    <>

      <div className='upper'>
        <h2 className='dashboard'>Dashboard </h2>

        <select id="days" name="days" style={{ marginLeft: '350px', border: 'none', outline: 'none', color: 'rgb(10, 10, 123)' }}>
          <option value="" disabled selected>This Week</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

      </div>


      <div className='dashboardoverview'>
        <AnatomySection />

        <div className='healthstatuscards'>
          <HealthStatusCards emoji='🫁' name='Lungs' color='rgba(164, 33, 33, 0.821)' value={75} />
          <HealthStatusCards emoji='🦷' name='Teeth' color='rgba(20, 223, 192, 0.821)' value={75} />
          <HealthStatusCards emoji='🦴' name='Bone' color='rgba(240, 114, 64, 0.99)' value={75} />
        </div>
      </div>
      <h6 style={{ color: ' #1f1f47', marginLeft: '500px' }}>Details-&rarr;</h6>


    </>
  )
}

export default DashboardOverview
