import React from 'react';
import './HealthStatusCards.css'
function HealthStatusCards(props) {
  return (
    <div className='health_status'>
      <div className='fidiv'>
        <p style={{"font-size": "25px"}}>{props.emoji}</p>
        <h5>{props.name}</h5>
      </div>  
      <p  style={{"color": "grey"}}>Date:26-Oct-2021</p>

      {/* Custom progress bar */}
      <div className='progress-bar-container'>
        <div
          className='progress-bar-fill'
          style={{
            width: `${props.value}%`,
            backgroundColor:`${props.color}`,
           
          }}
        ></div>
      </div>

    </div>
  )
}

export default HealthStatusCards
