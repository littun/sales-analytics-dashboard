import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './DashboardWidgets.css';

const data = [
  { name: 'Jan', lastMonth: 20, thisMonth: 30 },
  { name: 'Feb', lastMonth: 30, thisMonth: 40 },
  { name: 'Mar', lastMonth: 25, thisMonth: 35 },
  { name: 'Apr', lastMonth: 40, thisMonth: 50 },
  { name: 'May', lastMonth: 35, thisMonth: 45 },
  { name: 'Jun', lastMonth: 30, thisMonth: 55 },
  { name: 'Jul', lastMonth: 45, thisMonth: 60 },
];

const CustomerSatisfaction = () => {
  return (
    <div className="customer-satisfaction h-100 d-flex" style={{ flexDirection: 'column' }}>
      <div className="widget-header">
        <h3 className="widget-title">Customer Satisfaction</h3>
      </div>
      
      <div className="chart-container" style={{ flex: 1, position: 'relative' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00e096" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00e096" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0095ff" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0095ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip />
            <Area type="monotone" dataKey="thisMonth" stroke="#00e096" fillOpacity={1} fill="url(#colorThisMonth)" strokeWidth={2} />
            <Area type="monotone" dataKey="lastMonth" stroke="#0095ff" fillOpacity={1} fill="url(#colorLastMonth)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-legend" style={{ justifyContent: 'center', marginTop: '16px' }}>
        <div className="legend-item" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <div className="d-flex align-center gap-2" style={{ gap: '6px' }}>
             <div className="legend-color" style={{ backgroundColor: '#0095ff', height: '2px', width: '12px' }}></div>
             <span>Last Month</span>
          </div>
          <span style={{ fontWeight: '600', color: '#1e1e1e' }}>$3,004</span>
        </div>
        <div className="legend-item" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <div className="d-flex align-center gap-2" style={{ gap: '6px' }}>
             <div className="legend-color" style={{ backgroundColor: '#00e096', height: '2px', width: '12px' }}></div>
             <span>This Month</span>
          </div>
          <span style={{ fontWeight: '600', color: '#1e1e1e' }}>$4,504</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
