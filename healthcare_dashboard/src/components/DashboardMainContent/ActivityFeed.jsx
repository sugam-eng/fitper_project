import React from 'react';
import './ActivityFeed.css';

const colorMap = {
  Mon: ['#e8edf2', '#33d1db', '#e8edf2', '#e8edf2', '#e8edf2'],
  Tues: ['#33d1db', '#7277b1', '#7277b1', '#e8edf2', '#e8edf2', '#33d1db'],
  Wed: ['#e8edf2', '#e8edf2', '#33d1db', '#7277b1', '#7277b1'],
  Thurs: ['#e8edf2', '#e8edf2', '#33d1db', '#33d1db', '#7277b1', '#e8edf2'],
  Fri: ['#e8edf2', '#7277b1', '#e8edf2', '#e8edf2', '#e8edf2'],
  Sat: ['#33d1db', '#7277b1', '#33d1db', '#e8edf2', '#e8edf2', '#7277b1'],
  Sun: ['#e8edf2', '#e8edf2', '#33d1db', '#7277b1', '#7277b1'],
};

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h3 className="sectiontitle">
        Activity <span style={{ fontSize: '15px', color: 'grey', fontWeight: 'lighter', marginLeft: '270px' }}>3 appointments this week</span>
      </h3>

      <div className="activity-bars">
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, idx) => {
          const [color1, color2, color3, color4, color5, color6] = colorMap[day];

          return (
            <div key={idx} className="activity-bar-wrapper">
              <div className='sugam'>

                {
                  idx % 2 !== 0 ? (
                    <div className='sug'>

                      <div className='second'><div className="activity-bar" style={{ height: '50px', backgroundColor: color1 }}></div>
                        <div className="activity-bar" style={{ height: '50px', backgroundColor: color2 }}></div></div>

                      <div className="activity-bar" style={{ height: '60px', backgroundColor: color3 }}></div>
                      <div className='fourth' style={{ marginTop: '30px' }}><div className="activity-bar" style={{ height: '20px', backgroundColor: color4 }}></div>
                        <div className="activity-bar" style={{ height: '20px', backgroundColor: color5, marginTop: '4px' }}></div></div>

                      <div className="activity-bar" style={{ height: '35px', backgroundColor: color6, marginTop: '60px' }}></div>
                    </div>
                  ) : (
                    <div className='sugam'>
                      <div className="activity-bar" style={{ height: '100px', backgroundColor: color1 }}></div>
                      <div className="activity-bar" style={{ height: '60px', backgroundColor: color2 }}></div>
                      <div className='third' style={{ marginTop: '30px' }}>
                        <div className="activity-bar" style={{ height: '20px', backgroundColor: color3 }}></div>

                        <div className="activity-bar" style={{ height: '20px', backgroundColor: color4, marginTop: '4px' }}></div></div>

                      <div className="activity-bar" style={{ height: '35px', backgroundColor: color5, marginTop: '60px' }}></div>
                    </div>
                  )
                }


              </div>

              <h5 className="activity-day" style={{ color: 'rgba(186, 186, 208, 0.96)' }}>{day}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivityFeed;
