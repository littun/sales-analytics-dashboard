import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './DashboardWidgets.css';

const data = [
  { name: 'A', volume: 400, service: 240 },
  { name: 'B', volume: 300, service: 139 },
  { name: 'C', volume: 200, service: 980 },
  { name: 'D', volume: 278, service: 390 },
  { name: 'E', volume: 189, service: 480 },
  { name: 'F', volume: 239, service: 380 },
];

const VolumeVsService = () => {
  return (
    <div className="volume-service h-100 d-flex" style={{ flexDirection: 'column' }}>
      <div className="widget-header">
        <h3 className="widget-title">Volume vs Service Level</h3>
      </div>
      
      <div className="chart-container" style={{ flex: 1, height: '180px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={false} />
            <YAxis axisLine={false} tickLine={false} tick={false} />
            <Tooltip cursor={{fill: 'transparent'}} />
            <Bar dataKey="volume" stackId="a" fill="#0095ff" barSize={12} />
            <Bar dataKey="service" stackId="a" fill="#00e096" radius={[4, 4, 0, 0]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-legend" style={{ borderTop: '1px solid #f0f0f0', paddingTop: '16px', marginTop: '16px' }}>
        <div className="legend-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div className="d-flex align-center gap-2" style={{ gap: '6px' }}>
             <div className="legend-color" style={{ backgroundColor: '#0095ff', borderRadius: '50%' }}></div>
             <span>Volume</span>
          </div>
          <span style={{ fontWeight: '600', color: '#1e1e1e', marginTop: '4px' }}>1,135</span>
        </div>
        
        <div style={{ width: '1px', height: '30px', backgroundColor: '#f0f0f0', margin: '0 16px' }}></div>
        
        <div className="legend-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div className="d-flex align-center gap-2" style={{ gap: '6px' }}>
             <div className="legend-color" style={{ backgroundColor: '#00e096', borderRadius: '50%' }}></div>
             <span>Services</span>
          </div>
          <span style={{ fontWeight: '600', color: '#1e1e1e', marginTop: '4px' }}>635</span>
        </div>
      </div>
    </div>
  );
};

export default VolumeVsService;
