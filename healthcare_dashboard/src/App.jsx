import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent'
import DashboardOverview from './components/DashboardMainContent/DashboardOverview'
import CalendarView from './components/CalendarView'
import UpcomingSchedule from './components/DashboardMainContent/UpcomingSchedule'
import ActivityFeed from './components/DashboardMainContent/ActivityFeed'


function App() {


  return (
    <>
      <div class="app-container">
        <Header />
        <div className='root-container'>
          <div className='sidebar-container'>
            <Sidebar />
          </div>
          <div className='dashboard-activity-container'>
            <DashboardOverview />
            <ActivityFeed />
          </div>
          <div className='calendar-upcoming-container'>
            <CalendarView />
            <UpcomingSchedule />

          </div>

        </div>
      </div>
    </>
  )
}

export default App
