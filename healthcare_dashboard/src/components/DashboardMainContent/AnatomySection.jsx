import React from 'react'
import './AnatomySection.css'
import search from '../../assets/icons/search.png';
import body from "./src/assets/body.png"

function AnatomySection() {
  return (


    <div className='anatomysection'>

      <div className="search-icon">
        <img src={search} alt="Search" />
      </div>

      <span className="overlay-text" style={{ top: '12%', left: '76%', backgroundColor: '#3633a8', padding: '7px 8px 8px 12px' }}>❤️ Healthy Heart</span>
      <span className="overlay-text" style={{ top: '44%', left: '21%', backgroundColor: '#02e2f0', color: 'black', padding: '7px 16px 8px 12px' }}>🦵 Healthy Leg</span>
      <img src={body} alt="body" style={{
        height: '250px',
        width: 'auto',
        objectFit: 'contain',

      }} />
    </div>




  )
}

export default AnatomySection
