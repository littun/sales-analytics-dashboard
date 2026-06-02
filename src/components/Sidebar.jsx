import { 
  PieChart, 
  BarChart2, 
  ShoppingCart, 
  ShoppingBag, 
  TrendingUp, 
  MessageSquare, 
  Settings, 
  LogOut 
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: <PieChart size={20} />, label: 'Dashboard', active: true },
    { icon: <BarChart2 size={20} />, label: 'Leaderboard' },
    { icon: <ShoppingCart size={20} />, label: 'Order' },
    { icon: <ShoppingBag size={20} />, label: 'Products' },
    { icon: <TrendingUp size={20} />, label: 'Sales Report' },
    { icon: <MessageSquare size={20} />, label: 'Messages' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="logo-text">Dabang</h1>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="nav-bottom">
          <li className="nav-item sign-out">
            <span className="nav-icon"><LogOut size={20} /></span>
            <span className="nav-label">Sign Out</span>
          </li>
        </div>
      </nav>

      <div className="pro-banner">
        <div className="pro-icon-circle">
          <div className="pro-icon-inner"></div>
        </div>
        <h3>Dabang Pro</h3>
        <p>Get access to all<br/>features on tetumbas</p>
        <button className="get-pro-btn">Get Pro</button>
      </div>
    </aside>
  );
};

export default Sidebar;
