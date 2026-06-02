import { FileText, ShoppingBag, TrendingUp, Users, Download } from 'lucide-react';
import './DashboardWidgets.css';
import './SalesSummary.css';

const SalesSummary = () => {
  const cards = [
    {
      title: '$1k',
      subtitle: 'Total Sales',
      trend: '+8% from yesterday',
      icon: <TrendingUp size={24} color="#ff5b5b" />,
      bg: '#ffe2e5',
      trendColor: '#ff5b5b'
    },
    {
      title: '300',
      subtitle: 'Total Order',
      trend: '+5% from yesterday',
      icon: <FileText size={24} color="#ffaa00" />,
      bg: '#fff4de',
      trendColor: '#ffaa00'
    },
    {
      title: '5',
      subtitle: 'Product Sold',
      trend: '+1.2% from yesterday',
      icon: <ShoppingBag size={24} color="#00e096" />,
      bg: '#dcfce7',
      trendColor: '#00e096'
    },
    {
      title: '8',
      subtitle: 'New Customers',
      trend: '0.5% from yesterday',
      icon: <Users size={24} color="#8884d8" />,
      bg: '#f3e8ff',
      trendColor: '#8884d8'
    }
  ];

  return (
    <div className="sales-summary">
      <div className="widget-header">
        <div>
          <h3 className="widget-title">Today's Sales</h3>
          <p className="widget-subtitle">Sales Summary</p>
        </div>
        <button className="export-btn">
          <Download size={14} /> Export
        </button>
      </div>

      <div className="summary-cards">
        {cards.map((card, index) => (
          <div key={index} className="summary-card" style={{ backgroundColor: card.bg }}>
            <div className="card-icon">
              {card.icon}
            </div>
            <h2 className="card-value">{card.title}</h2>
            <p className="card-label">{card.subtitle}</p>
            <p className="card-trend" style={{ color: card.trendColor }}>
              {card.trend}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesSummary;
