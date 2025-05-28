// src/components/Header.jsx
import React from 'react';
import './Header.css';
import bell from "../assets/bell.png";
import baby from "../assets/baby.png";
import plus from "../assets/plus.jpg";


const Header = () => {
  return (
    <header className="header">
      <div className='name'><h1><span style={{ color: '#00D1FF' }}>Health</span><span style={{ color: 'blue' }}>care.</span></h1>
      </div>
      <div className='search_bar'>
        <span className="search_icon">
          <img
            src={bell}
            alt="bell"
            style={{
              height: '20px',
              width: '20px',
              objectFit: 'contain',
            }}
          />
        </span>
        <input className="search" type="text" placeholder="Search" />
      </div>

      <div className="avatar">
        <div className='avatarplus'><img src={baby} alt="baby" style={{
          height: '65px',
          width: 'auto',
          objectFit: 'contain',
        }} />
          <button style={{ border: 'none' }}>
            <img src={plus} alt="plus" style={{
              height: '35px',
              width: 'auto',
              objectFit: 'contain',
              marginBottom: '4px',
            }} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
