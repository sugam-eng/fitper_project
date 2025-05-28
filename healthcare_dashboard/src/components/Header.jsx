// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className='name'><h1><span style={{ color: '#00D1FF' }}>Health</span><span style={{ color: 'blue' }}>care.</span></h1>
      </div>
      <div className='search_bar'>
        <span className="search_icon">
          <img
            src="./src/assets/bell.png"
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
        <div className='avatarplus'><img src="./src/assets/baby.png" alt="baby" style={{
          height: '65px',
          width: 'auto',
          objectFit: 'contain',
        }} />
          <button style={{ border: 'none' }}>
            <img src="./src/assets/plus.jpg" alt="plus" style={{
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
