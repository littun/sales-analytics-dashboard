import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Briefcase, ShoppingBag } from 'lucide-react';
import './DashboardWidgets.css';

const data = [
  { name: 'Jan', reality: 50, target: 60 },
  { name: 'Feb', reality: 40, target: 50 },
  { name: 'Mar', reality: 70, target: 80 },
  { name: 'Apr', reality: 60, target: 70 },
  { name: 'May', reality: 50, target: 60 },
  { name: 'Jun', reality: 80, target: 90 },
  { name: 'Jul', reality: 70, target: 80 },
];

const TargetVsReality = () => {
  return (
    <div className="target-reality h-100 d-flex" style={{ flexDirection: 'column' }}>
      <div className="widget-header">
        <h3 className="widget-title">Target vs Reality</h3>
      </div>
      
      <div className="chart-container" style={{ flex: 1, height: '180px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#8c8c8c' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#8c8c8c' }} />
            <Tooltip />
            <Bar dataKey="reality" fill="#00e096" radius={[4, 4, 0, 0]} barSize={10} />
            <Bar dataKey="target" fill="#ffc107" radius={[4, 4, 0, 0]} barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="stats-container" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
        <div className="stat-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '8px', backgroundColor: '#e6fcf5', borderRadius: '8px' }}>
               <ShoppingBag size={16} color="#00e096" />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '600' }}>Reality Sales</div>
              <div style={{ fontSize: '10px', color: '#8c8c8c' }}>Global</div>
            </div>
          </div>
          <div style={{ fontWeight: '600', color: '#00e096' }}>8.823</div>
        </div>
        
        <div className="stat-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '8px', backgroundColor: '#fff9e6', borderRadius: '8px' }}>
               <Briefcase size={16} color="#ffc107" />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '600' }}>Target Sales</div>
              <div style={{ fontSize: '10px', color: '#8c8c8c' }}>Commercial</div>
            </div>
          </div>
          <div style={{ fontWeight: '600', color: '#ffc107' }}>12.122</div>
        </div>
      </div>
    </div>
  );
};

export default TargetVsReality;
