import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './DashboardWidgets.css';

const data = [
  { name: 'Monday', online: 14, offline: 12 },
  { name: 'Tuesday', online: 16, offline: 10 },
  { name: 'Wednesday', online: 22, offline: 13 },
  { name: 'Thursday', online: 12, offline: 11 },
  { name: 'Friday', online: 16, offline: 15 },
  { name: 'Saturday', online: 14, offline: 10 },
  { name: 'Sunday', online: 21, offline: 12 },
];

const TotalRevenue = () => {
  return (
    <div className="total-revenue h-100 d-flex" style={{ flexDirection: 'column' }}>
      <div className="widget-header">
        <h3 className="widget-title">Total Revenue</h3>
      </div>
      
      <div className="chart-container" style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#8c8c8c' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#8c8c8c' }} />
            <Tooltip />
            <Bar dataKey="online" fill="#0095ff" radius={[4, 4, 0, 0]} barSize={12} />
            <Bar dataKey="offline" fill="#00e096" radius={[4, 4, 0, 0]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#0095ff' }}></div>
          <span>Online Sales</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#00e096' }}></div>
          <span>Offline Sales</span>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
