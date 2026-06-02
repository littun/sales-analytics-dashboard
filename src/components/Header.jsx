import { Search, Bell, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h2 className="page-title">Dashboard</h2>
      
      <div className="header-right">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search here.." />
        </div>
        
        <div className="language-selector">
          <img src="https://flagcdn.com/w20/us.png" alt="US Flag" className="flag-icon" />
          <span>Eng (US)</span>
          <ChevronDown size={16} />
        </div>
        
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        
        <div className="user-profile">
          <img 
            src="https://ui-avatars.com/api/?name=Sandeep&background=5d5fef&color=fff" 
            alt="Profile" 
            className="profile-img" 
          />
          <div className="profile-info">
            <span className="profile-name">Sandeep</span>
            <span className="profile-role">Admin</span>
          </div>
          <ChevronDown size={16} className="profile-chevron" />
        </div>
      </div>
    </header>
  );
};

export default Header;
