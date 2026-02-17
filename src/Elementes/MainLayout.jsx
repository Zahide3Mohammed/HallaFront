import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="dashboard-container">
      {/* --- TOP HEADER --- */}
      <header className="top-navbar">
        <div className="user-profile-mini">
           <div className="avatar-placeholder">
            <NavLink to="/Profile" ><img src="https://randomuser.me/api/portraits/men/32.jpg" /></NavLink>
           </div>
        </div>
        
          <NavLink to="/home" end className="icon-click"><img src='./icons/home_app_icon.png' /></NavLink>
          <NavLink to="/" className="icon-click"><img src='./icons/club.png' /></NavLink>
          <NavLink to="/" className="icon-click"><img src='./icons/chat.png' /></NavLink>
          <NavLink to="/" className="icon-click"><img src='./icons/group.png' /></NavLink>
      
      </header>

      <div className="layout-body">
        {/* --- SIDEBAR (Hoverable) --- */}
        <aside className="side-navbar">
          <NavLink to="/" className="nav-item">
            <span className="icon">⊞</span>
            <span className="label">Dashboard</span>
          </NavLink>
          
          <NavLink to="/settings" className="nav-item">
            <span className="icon">⚙</span>
            <span className="label">Settings</span>
          </NavLink>
          
          <NavLink to="/security" className="nav-item">
            <span className="icon">🛡</span>
            <span className="label">Security</span>
          </NavLink>
        </aside>

        {/* --- DYNAMIC CONTENT --- */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;