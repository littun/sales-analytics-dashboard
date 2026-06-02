import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './DashboardWidgets.css';

const data = [
  { name: 'Jan', loyal: 200, new: 100, unique: 150 },
  { name: 'Feb', loyal: 250, new: 150, unique: 180 },
  { name: 'Mar', loyal: 220, new: 130, unique: 160 },
  { name: 'Apr', loyal: 280, new: 180, unique: 200 },
  { name: 'May', loyal: 300, new: 220, unique: 230 },
  { name: 'Jun', loyal: 320, new: 250, unique: 260 },
  { name: 'Jul', loyal: 350, new: 280, unique: 300 },
  { name: 'Aug', loyal: 320, new: 240, unique: 270 },
  { name: 'Sep', loyal: 280, new: 200, unique: 230 },
  { name: 'Oct', loyal: 250, new: 180, unique: 200 },
  { name: 'Nov', loyal: 210, new: 150, unique: 180 },
  { name: 'Dec', loyal: 180, new: 120, unique: 150 },
];

const VisitorInsights = () => {
  return (
    <div className="visitor-insights h-100 d-flex" style={{ flexDirection: 'column' }}>
      <div className="widget-header">
        <h3 className="widget-title">Visitor Insights</h3>
      </div>
      
      <div className="chart-container" style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#8c8c8c' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#8c8c8c' }} />
            <Tooltip />
            <Line type="monotone" dataKey="loyal" stroke="#8884d8" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="new" stroke="#ff5b5b" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="unique" stroke="#00e096" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#8884d8' }}></div>
          <span>Loyal Customers</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#ff5b5b' }}></div>
          <span>New Customers</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#00e096' }}></div>
          <span>Unique Customers</span>
        </div>
      </div>
    </div>
  );
};

export default VisitorInsights;
