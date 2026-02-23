import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './MainLayout.css';
import { useLanguage } from './LanguageContext';
import { translationsLayout } from './translations/translationsLayout';
import { useAuth } from '../context/AuthContext';
import axios from "axios";

const MainLayout = () => {
  const { language } = useLanguage()
    const { user, logout }=useAuth();
  const t = translationsLayout[language]
   const navigate = useNavigate()
   // logout 
   const handleLogout = async () => {
    try {
      // optional: Laravel logout API
      await axios.post("http://localhost:8000/api/logout", {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
    } catch(err){
      console.log("logout error", err);
    }

   logout();
    navigate("/login", { state: { signin: true } });
  };
  return (
    

    <div className="dashboard-container">
      {/* --- TOP HEADER --- */}
      <header className="top-navbar">
        <div className="user-profile-mini">
           <div className="avatar-placeholder">
            <NavLink to="/Profile" ><img src={`http://localhost:8000/storage/${user?.photo}`}  /></NavLink>
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
          <NavLink to="/Settings" className="nav-item">
            <span className="icon">⚙</span>
            <span className="label">{t.settings}</span>
          </NavLink>
          
          <NavLink to="/Security" className="nav-item">
            <span className="icon">🛡</span>
            <span className="label">{t.Security}</span>
          </NavLink>
       
           <NavLink to="#" onClick={handleLogout} className="nav-item">
            <span className="icon">⎘ </span>
            <span className="label">{t.Logout}</span>
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