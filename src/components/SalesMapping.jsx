import './DashboardWidgets.css';

const SalesMapping = () => {
  return (
    <div className="sales-mapping h-100 d-flex" style={{ flexDirection: 'column' }}>
      <div className="widget-header">
        <h3 className="widget-title">Sales Mapping by Country</h3>
      </div>
      
      <div className="map-container" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        {/* Placeholder for map */}
        <div style={{ width: '100%', height: '100%', backgroundColor: '#f9fafb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8c8c8c', fontSize: '12px', opacity: 0.5 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="World Map" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'grayscale(1) opacity(0.3)' }} />
          <div style={{ position: 'absolute', top: '40%', left: '20%', width: '10px', height: '10px', backgroundColor: '#ffaa00', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(255, 170, 0, 0.2)' }}></div>
          <div style={{ position: 'absolute', top: '30%', left: '50%', width: '8px', height: '8px', backgroundColor: '#8884d8', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(136, 132, 216, 0.2)' }}></div>
          <div style={{ position: 'absolute', top: '60%', left: '30%', width: '12px', height: '12px', backgroundColor: '#ff5b5b', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(255, 91, 91, 0.2)' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '70%', width: '8px', height: '8px', backgroundColor: '#00e096', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(0, 224, 150, 0.2)' }}></div>
        </div>
      </div>
    </div>
  );
};

export default SalesMapping;
