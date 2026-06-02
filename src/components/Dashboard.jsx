import './Dashboard.css';
import SalesSummary from './SalesSummary';
import VisitorInsights from './VisitorInsights';
import TotalRevenue from './TotalRevenue';
import CustomerSatisfaction from './CustomerSatisfaction';
import TargetVsReality from './TargetVsReality';
import TopProducts from './TopProducts';
import SalesMapping from './SalesMapping';
import VolumeVsService from './VolumeVsService';
import UserDataTable from './UserDataTable';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-grid top-row">
        <div className="grid-item sales-summary-container">
          <SalesSummary />
        </div>
        <div className="grid-item visitor-insights-container">
          <VisitorInsights />
        </div>
      </div>
      
      <div className="dashboard-grid middle-row">
        <div className="grid-item">
          <TotalRevenue />
        </div>
        <div className="grid-item">
          <CustomerSatisfaction />
        </div>
        <div className="grid-item">
          <TargetVsReality />
        </div>
      </div>
      
      <div className="dashboard-grid bottom-row">
        <div className="grid-item">
          <TopProducts />
        </div>
        <div className="grid-item">
          <SalesMapping />
        </div>
        <div className="grid-item">
          <VolumeVsService />
        </div>
      </div>

      <div className="users-section">
        <h3 className="section-title">User Data</h3>
        <UserDataTable />
      </div>
    </div>
  );
};

export default Dashboard;
