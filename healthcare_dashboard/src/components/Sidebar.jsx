// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import sidebarLinks from './Sidebarlinks';

const Sidebar = () => {

  return (
    <aside className="sidebar">
      <ul>
        {sidebarLinks.map((link, idx) => {

          if (link.name === 'Settings') return null;
          if (link.type === 'section') {
            return (

              <div className='side'>
                <p key={idx} className="sidebar-section" style={{ "padding": "10px" }}>
                  <span className="section-label">{link.label}</span>
                </p></div>

            );
          }

          return (
            <li key={idx} className="list">
              <a href={link.href} className="sidebar-link">
                <img
                  style={{ width: '24px', height: '24px' }}
                  src={link.icon}
                  alt={link.name}
                  className={`sidebar-icon icon-${link.name.toLowerCase()}`}
                />
                <span>{link.name}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="sidebar-bottom" style={{ marginTop: '30px' }}>
        {sidebarLinks
          .filter((link) => link.name === 'Settings')
          .map((link, idx) => (
            <a key={idx} href={link.href} className="sidebar-link">
              <img
                style={{ width: '24px', height: '24px' }}
                src={link.icon}
                alt={link.name}
                className={`sidebar-icon icon-${link.name.toLowerCase()}`}
              />
              <span>{link.name}</span>
            </a>
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;
