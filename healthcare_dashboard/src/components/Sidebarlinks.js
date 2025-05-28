// src/data/sidebarLinks.js

import dashboardIcon from '../assets/icons/dashboard.png';
import historyIcon from '../assets/icons/history.svg';
import calendarIcon from '../assets/icons/calendar.svg';
import appointmentsIcon from '../assets/icons/appointments.svg';
import statsIcon from '../assets/icons/statistics.svg';
import chatIcon from '../assets/icons/chat.svg';
import supportIcon from '../assets/icons/support.svg';
import settingsIcon from '../assets/icons/settings.svg';


const sidebarLinks = [
    { type: 'section', label: 'General' },
  { name: 'Dashboard', icon: dashboardIcon, href: '/dashboard' },
  { name: 'History', icon: historyIcon, href: '/history' },
  { name: 'Calendar', icon: calendarIcon, href: '/calendar' },
  { name: 'Appointments', icon: appointmentsIcon, href: '/appointments' },
  { name: 'Statistics', icon: statsIcon, href: '/statistics' },
  { type: 'section', label: 'Tools' },
  { name: 'Chat', icon: chatIcon, href: '/chat' },
  { name: 'Support', icon: supportIcon, href: '/support' },
  { name: 'Settings', icon: settingsIcon, href: '/settings' },
];

export default sidebarLinks;
